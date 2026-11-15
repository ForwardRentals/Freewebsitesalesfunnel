import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { sendToHermes } from "../lib/hermes";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyf2n_cRhou3C45Vz-mTUqg7VoFK_Tjczbxu-UwOd5uSa7mYm54Q-ff4DyqqdeHghbolQ/exec";

const inputClasses =
  "bg-white border-[#e7e1d6] text-[#1b1a17] placeholder:text-[#6b675e]/60 h-12 rounded-xl focus-visible:border-[#166b45] focus-visible:ring-[#166b45]/15 transition-all";
const areaClasses =
  "bg-white border-[#e7e1d6] text-[#1b1a17] placeholder:text-[#6b675e]/60 rounded-xl focus-visible:border-[#166b45] focus-visible:ring-[#166b45]/15";

const plans = [
  { id: "crm", label: "CRM · $9/mo" },
  { id: "ai-crm", label: "AI CRM · $29/mo" },
];

const leadSources = [
  "Website contact form",
  "Phone calls",
  "Email",
  "Facebook / Instagram",
  "Google Business Profile",
  "Referrals",
  "Online ads",
  "Walk-ins",
];

const volumes = ["Under 10", "10–30", "30–100", "100+", "Not sure"];

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3.5 py-2 rounded-full text-sm transition-all duration-200 ${
        active
          ? "bg-[#166b45] text-white font-semibold"
          : "bg-[#faf7f2] text-[#6b675e] border border-[#e7e1d6] hover:border-[#166b45]/40 hover:text-[#1b1a17]"
      }`}
    >
      {children}
    </button>
  );
}

export function CrmSetup() {
  const [params] = useSearchParams();
  const [plan, setPlan] = useState(params.get("plan") === "crm" ? "crm" : "ai-crm");
  const [sources, setSources] = useState<string[]>([]);
  const [volume, setVolume] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    website: "",
    industry: "",
    team: "",
    stages: "",
    currentTools: "",
    aiNotes: "",
    notes: "",
  });

  useEffect(() => {
    document.title = "CRM Setup Form | FreeSiteCompany";
    window.scrollTo(0, 0);
  }, []);

  const update = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));
  const toggle = (t: string) => setSources((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));
  const isValid = form.fullName && form.email && form.phone && form.businessName;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;
    setIsSubmitting(true);

    const payload = new URLSearchParams({
      form_name: "CrmIntake",
      inquiry_type: "crm_setup",
      created_time: new Date().toISOString(),
      plan: plan === "ai-crm" ? "AI CRM $29/mo" : "CRM $9/mo",
      full_name: form.fullName,
      email: form.email,
      phone_number: form.phone,
      business_name: form.businessName,
      website: form.website,
      industry: form.industry,
      lead_sources: sources.join(", "),
      leads_per_month: volume,
      team_members: form.team,
      pipeline_stages: form.stages,
      current_tools: form.currentTools,
      ai_assistant_notes: plan === "ai-crm" ? form.aiNotes : "",
      notes: form.notes,
      is_organic: "true",
      platform: "website",
    });

    sendToHermes(payload);
    try {
      await fetch(GOOGLE_SHEET_URL, { method: "POST", mode: "no-cors", body: payload });
    } catch (err) {
      console.error("CRM setup submission failed:", err);
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", { content_name: form.businessName, content_category: "CRM setup" });
    }
    setSent(true);
    setIsSubmitting(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1b1a17] overflow-x-hidden selection:bg-[#166b45] selection:text-white">
      <Navigation />

      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-3">
              Let's set up your <span className="italic text-[#166b45]">CRM</span>
            </h1>
            <p className="text-[#6b675e] text-lg">
              About five minutes. The more you tell us, the less we have to ask later.
            </p>
          </div>

          <div className="rounded-3xl border border-[#e7e1d6] bg-white p-6 sm:p-8 shadow-[0_24px_80px_-24px_rgba(27,26,23,0.2)]">
            {sent ? (
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
                <CheckCircle2 className="h-14 w-14 text-[#166b45] mx-auto mb-4" />
                <p className="font-display text-2xl font-semibold mb-2">Got it, thank you</p>
                <p className="text-[#6b675e] max-w-md mx-auto mb-5">
                  Thanks, {form.fullName.split(" ")[0] || "friend"}. Check your email: we'll reply shortly
                  with the next steps to get your CRM running.
                </p>
                <Link to="/crm" className="font-semibold text-[#166b45] inline-flex items-center gap-2">
                  Back to the CRM page <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="mb-2.5 block text-sm font-medium">Plan</Label>
                  <div className="flex flex-wrap gap-2">
                    {plans.map((p) => (
                      <Chip key={p.id} active={plan === p.id} onClick={() => setPlan(p.id)}>{p.label}</Chip>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-[#6b675e]">Month-to-month, cancel any time. Switch plans whenever you like.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sName" className="mb-1.5 block text-sm font-medium">Your name</Label>
                    <Input id="sName" required value={form.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Jane Smith" className={inputClasses} />
                  </div>
                  <div>
                    <Label htmlFor="sEmail" className="mb-1.5 block text-sm font-medium">Email</Label>
                    <Input id="sEmail" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" className={inputClasses} />
                  </div>
                  <div>
                    <Label htmlFor="sPhone" className="mb-1.5 block text-sm font-medium">Phone</Label>
                    <Input id="sPhone" type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(604) 555-1234" className={inputClasses} />
                  </div>
                  <div>
                    <Label htmlFor="sBiz" className="mb-1.5 block text-sm font-medium">Business name</Label>
                    <Input id="sBiz" required value={form.businessName} onChange={(e) => update("businessName", e.target.value)} placeholder="Your business" className={inputClasses} />
                  </div>
                  <div>
                    <Label htmlFor="sSite" className="mb-1.5 block text-sm font-medium">Website (if any)</Label>
                    <Input id="sSite" value={form.website} onChange={(e) => update("website", e.target.value)} placeholder="yourbusiness.com" className={inputClasses} />
                  </div>
                  <div>
                    <Label htmlFor="sInd" className="mb-1.5 block text-sm font-medium">What does your business do?</Label>
                    <Input id="sInd" value={form.industry} onChange={(e) => update("industry", e.target.value)} placeholder="e.g. plumbing, photography" className={inputClasses} />
                  </div>
                </div>

                <div>
                  <Label className="mb-2.5 block text-sm font-medium">Where do your leads come from today? (pick any)</Label>
                  <div className="flex flex-wrap gap-2">
                    {leadSources.map((t) => (
                      <Chip key={t} active={sources.includes(t)} onClick={() => toggle(t)}>{t}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="mb-2.5 block text-sm font-medium">Roughly how many new leads a month?</Label>
                  <div className="flex flex-wrap gap-2">
                    {volumes.map((t) => (
                      <Chip key={t} active={volume === t} onClick={() => setVolume(t)}>{t}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="sTeam" className="mb-1.5 block text-sm font-medium">Who needs a login? (names and emails)</Label>
                  <Textarea id="sTeam" rows={3} value={form.team} onChange={(e) => update("team", e.target.value)} placeholder="Jane Smith, jane@yourbusiness.com (owner)&#10;Sam Lee, sam@yourbusiness.com (office)" className={areaClasses} />
                </div>

                <div>
                  <Label htmlFor="sStages" className="mb-1.5 block text-sm font-medium">Steps a lead goes through before they become a customer (optional)</Label>
                  <Textarea id="sStages" rows={2} value={form.stages} onChange={(e) => update("stages", e.target.value)} placeholder="e.g. enquiry, site visit, quote sent, booked. Leave blank and we'll use a standard pipeline." className={areaClasses} />
                </div>

                <div>
                  <Label htmlFor="sTools" className="mb-1.5 block text-sm font-medium">What do you use to keep track of leads now? (optional)</Label>
                  <Input id="sTools" value={form.currentTools} onChange={(e) => update("currentTools", e.target.value)} placeholder="Spreadsheet, notebook, another CRM, nothing..." className={inputClasses} />
                </div>

                {plan === "ai-crm" && (
                  <div>
                    <Label htmlFor="sAi" className="mb-1.5 block text-sm font-medium">For the AI assistant: services, prices, hours, service area and common questions</Label>
                    <Textarea id="sAi" rows={4} value={form.aiNotes} onChange={(e) => update("aiNotes", e.target.value)} placeholder="Paste or type whatever you'd tell a new employee answering the phone. Your website works too: just put the link." className={areaClasses} />
                  </div>
                )}

                <div>
                  <Label htmlFor="sNotes" className="mb-1.5 block text-sm font-medium">Anything else? (optional)</Label>
                  <Textarea id="sNotes" rows={3} value={form.notes} onChange={(e) => update("notes", e.target.value)} className={areaClasses} />
                </div>

                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="w-full h-14 rounded-full bg-[#166b45] text-white font-bold text-lg transition-all duration-300 hover:bg-[#0f5434] hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Sending..." : "Send my setup form"}
                  {!isSubmitting && <ArrowRight className="h-5 w-5 ml-2" />}
                </Button>
                <p className="text-center text-xs leading-relaxed text-[#6b675e]">
                  After you submit, we'll reach out by <span className="font-semibold text-[#1b1a17]">text, phone call, or email</span>. No obligation until your CRM is ready.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
