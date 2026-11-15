import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Inbox,
  KanbanSquare,
  ListChecks,
  FolderLock,
  Users,
  Bell,
  MessageSquare,
  Smartphone,
  Sparkles,
  Phone,
} from "lucide-react";
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

const features = [
  {
    icon: Inbox,
    title: "Every lead in one inbox",
    text: "Website forms, chat conversations and email enquiries all land in one place, with who they are and what they asked for. Repeat contacts are merged, not duplicated.",
  },
  {
    icon: KanbanSquare,
    title: "A pipeline you can see",
    text: "Move each lead from New to Contacted to Quoted to Won. Open the lead and the full timeline is there: every message, note and stage change.",
  },
  {
    icon: ListChecks,
    title: "Tasks and follow-ups",
    text: "Set a follow-up on any lead, tick it off when it's done. Nothing slips because you forgot to call Tuesday.",
  },
  {
    icon: Bell,
    title: "Instant lead alerts",
    text: "A new enquiry sends you an email right away, so you can reply while they're still looking at your site.",
  },
  {
    icon: FolderLock,
    title: "Client document portals",
    text: "Share quotes, contracts and files with a client through their own private portal instead of a pile of email attachments.",
  },
  {
    icon: Users,
    title: "Team logins",
    text: "Give your staff their own secure logins with the access they need. Your data is kept separate from every other business.",
  },
  {
    icon: MessageSquare,
    title: "Connected to your website",
    text: "Your site's contact form and chat assistant feed the CRM directly. No copy-pasting between tools.",
  },
  {
    icon: Smartphone,
    title: "Works on your phone",
    text: "A mobile layout built for the truck or the job site: check leads, change a stage or add a note from anywhere.",
  },
];

const plans = [
  {
    id: "crm",
    name: "CRM",
    price: "$9",
    featured: false,
    items: [
      "Your own private CRM workspace",
      "Unlimited leads and contacts",
      "Pipeline, tasks and activity timeline",
      "Team logins for your whole crew",
      "Website forms connected",
      "Set up for you, with changes on request",
    ],
  },
  {
    id: "ai-crm",
    name: "AI CRM",
    price: "$29",
    featured: true,
    items: [
      "Everything in CRM",
      "AI chat assistant on your website, trained on your services, prices and FAQs",
      "Chat leads captured straight into your CRM",
      "AI-drafted replies to new enquiries, ready for you to review and send",
      "Set up for you, with changes on request",
    ],
  },
];

const steps = [
  { step: "1", title: "Tell us about your business", text: "Send the form below. A quick message or call to understand how you get leads today." },
  { step: "2", title: "We set it up", text: "Your own workspace, your stages, your team logins, and your website forms and chat connected." },
  { step: "3", title: "Start using it", text: "Leads begin landing in your CRM. We're a message away if you want something changed." },
];

const faqs = [
  {
    q: "What does it cost?",
    a: "The CRM is $9 a month. The AI CRM, which adds an AI chat assistant on your site and AI-drafted replies to enquiries, is $29 a month. Both are month-to-month, cancel any time.",
  },
  {
    q: "Do I need a website from you to use it?",
    a: "No. It works with any website that has a contact form, and we'll connect it. If you don't have a site yet, we can build one too.",
  },
  {
    q: "How many people can use it?",
    a: "Your whole team. Each person gets their own login.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Each business has its own separate workspace behind a secure login, and nobody else can see your leads.",
  },
];

export function CrmSales() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [plan, setPlan] = useState("ai-crm");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    currentSite: "",
    details: "",
  });

  useEffect(() => {
    document.title = "Small Business CRM from $9/month, AI CRM $29/month | FreeSiteCompany";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "A simple, private CRM for small businesses: every website lead in one inbox, a visual pipeline, follow-up tasks, client document portals and team logins. From $9/month, or $29/month with an AI assistant. Month-to-month.",
      );
    }
  }, []);

  const update = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));
  const isValid = form.fullName && form.email && form.phone;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;
    setIsSubmitting(true);

    const payload = new URLSearchParams({
      form_name: "CrmInquiry",
      inquiry_type: plan === "ai-crm" ? "ai_crm_29_month" : "crm_9_month",
      plan: plan === "ai-crm" ? "AI CRM $29/mo" : "CRM $9/mo",
      created_time: new Date().toISOString(),
      full_name: form.fullName,
      email: form.email,
      phone_number: form.phone,
      business_name: form.businessName,
      current_website: form.currentSite,
      project_details: form.details,
      is_organic: "true",
      platform: "website",
    });

    sendToHermes(payload);
    try {
      await fetch(GOOGLE_SHEET_URL, { method: "POST", mode: "no-cors", body: payload });
    } catch (err) {
      console.error("CRM inquiry submission failed:", err);
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: form.businessName || form.fullName,
        content_category: "CRM inquiry",
      });
    }
    setSent(true);
    setIsSubmitting(false);
    document.getElementById("get-crm")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1b1a17] overflow-x-hidden selection:bg-[#166b45] selection:text-white">
      <Navigation />

      {/* HERO */}
      <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 px-4 sm:px-6 bg-[#1b1a17] text-[#faf7f2] overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-24 right-[5%] h-80 w-80 rounded-full bg-[#166b45]/30 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-[5%] h-72 w-72 rounded-full bg-[#d7a04a]/15 blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#faf7f2]/15 px-4 py-1.5 text-sm font-medium text-[#faf7f2]/70 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-[#7fc8a4]" />
            Small business CRM · from $9/month
          </motion.p>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display text-[2.4rem] leading-[1.05] sm:text-6xl font-semibold tracking-tight mb-6"
          >
            Stop losing leads.{" "}
            <span className="italic text-[#7fc8a4]">Know who's next.</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-lg sm:text-xl text-[#faf7f2]/70 leading-relaxed max-w-2xl mx-auto mb-8"
          >
            A simple CRM that catches every enquiry from your website, tracks it
            through to a sale, and reminds you to follow up. Set up for you,
            no software to learn.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="#get-crm"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#faf7f2] px-8 py-4 text-lg font-semibold text-[#1b1a17] transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get my CRM <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="tel:+16048498898"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#faf7f2]/20 px-8 py-4 text-lg font-semibold transition-all hover:border-[#faf7f2]/50 hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" /> (604) 849-8898
            </a>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#fffefb] border-b border-[#e7e1d6]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-5">
            Your leads are scattered across <span className="italic text-[#166b45]">five places</span>
          </h2>
          <p className="text-lg text-[#6b675e] leading-relaxed">
            A quote form in Gmail, a Facebook message, a voicemail, a note on the
            dash. The ones you do answer, you answer late. A CRM puts every
            enquiry in one list with a next step attached, so the lead who
            wanted a quote on Monday doesn't go to your competitor by Friday.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-14 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#166b45] mb-3">
              What's included
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              Everything you need, <span className="italic text-[#166b45]">nothing you don't</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 4) * 0.08 }}
                className="rounded-2xl border border-[#e7e1d6] bg-white p-7 transition-all hover:border-[#166b45]/40 hover:-translate-y-1"
              >
                <f.icon className="h-7 w-7 text-[#166b45] mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-[#6b675e] leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#fffefb] border-y border-[#e7e1d6]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-10">
            Two plans, <span className="italic text-[#166b45]">one simple price each</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {plans.map((pl) => (
              <div
                key={pl.id}
                className={`rounded-3xl p-8 text-center ${
                  pl.featured
                    ? "border border-[#166b45] bg-[#166b45]/[0.05] shadow-[0_12px_40px_-16px_rgba(22,107,69,0.4)]"
                    : "border border-[#e7e1d6] bg-white"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#166b45] mb-2 inline-flex items-center gap-1.5">
                  {pl.featured && <Sparkles className="h-4 w-4" />}
                  {pl.name}
                </p>
                <p className="font-display text-6xl font-semibold mb-1">
                  {pl.price}<span className="text-2xl text-[#6b675e] font-normal"> /month</span>
                </p>
                <p className="text-[#6b675e] mb-6">Month-to-month. Cancel any time.</p>
                <ul className="space-y-2.5 text-left text-[#6b675e] mb-7 max-w-sm mx-auto">
                  {pl.items.map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#166b45] mt-0.5" />
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href="#get-crm"
                  onClick={() => setPlan(pl.id)}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold transition-all hover:-translate-y-0.5 ${
                    pl.featured
                      ? "bg-[#166b45] text-white hover:bg-[#0f5434]"
                      : "border border-[#166b45] text-[#166b45] hover:bg-[#166b45]/[0.06]"
                  }`}
                >
                  Get {pl.name} <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-center mb-12">
            Up and running <span className="italic text-[#166b45]">without the homework</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((p) => (
              <div key={p.step}>
                <p className="font-display text-6xl font-semibold text-[#166b45]/20 mb-2">{p.step}</p>
                <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-[#6b675e] leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#fffefb] border-y border-[#e7e1d6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-8">
            Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-[#e7e1d6] bg-white p-6">
                <h3 className="font-display text-lg font-semibold mb-1.5">{f.q}</h3>
                <p className="text-[#6b675e] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="get-crm" className="scroll-mt-24 py-14 sm:py-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight mb-3">
              Get your <span className="italic text-[#166b45]">CRM</span> set up
            </h2>
            <p className="text-[#6b675e] text-lg">
              Tell us a bit about your business and we'll be in touch to get you started.
            </p>
          </div>

          <div className="rounded-3xl border border-[#e7e1d6] bg-white p-6 sm:p-8 shadow-[0_24px_80px_-24px_rgba(27,26,23,0.2)]">
            {sent ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <CheckCircle2 className="h-14 w-14 text-[#166b45] mx-auto mb-4" />
                <p className="font-display text-2xl font-semibold mb-2">Request received</p>
                <p className="text-[#6b675e] max-w-md mx-auto">
                  Thanks, {form.fullName.split(" ")[0] || "friend"}. We'll reach out by text,
                  phone call, or email to get your CRM set up.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="mName" className="mb-1.5 block text-sm font-medium">Full name</Label>
                    <Input id="mName" required value={form.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Jane Smith" className={inputClasses} />
                  </div>
                  <div>
                    <Label htmlFor="mEmail" className="mb-1.5 block text-sm font-medium">Email</Label>
                    <Input id="mEmail" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" className={inputClasses} />
                  </div>
                  <div>
                    <Label htmlFor="mPhone" className="mb-1.5 block text-sm font-medium">Phone</Label>
                    <Input id="mPhone" type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(604) 555-1234" className={inputClasses} />
                  </div>
                  <div>
                    <Label htmlFor="mBiz" className="mb-1.5 block text-sm font-medium">Business name</Label>
                    <Input id="mBiz" value={form.businessName} onChange={(e) => update("businessName", e.target.value)} placeholder="Your business" className={inputClasses} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="mSite" className="mb-1.5 block text-sm font-medium">Website (if any)</Label>
                  <Input id="mSite" value={form.currentSite} onChange={(e) => update("currentSite", e.target.value)} placeholder="yourbusiness.com" className={inputClasses} />
                </div>

                <div>
                  <Label className="mb-2.5 block text-sm font-medium">Plan</Label>
                  <div className="flex flex-wrap gap-2">
                    {plans.map((pl) => (
                      <button
                        key={pl.id}
                        type="button"
                        onClick={() => setPlan(pl.id)}
                        className={`px-3.5 py-2 rounded-full text-sm transition-all duration-200 ${
                          plan === pl.id
                            ? "bg-[#166b45] text-white font-semibold"
                            : "bg-[#faf7f2] text-[#6b675e] border border-[#e7e1d6] hover:border-[#166b45]/40 hover:text-[#1b1a17]"
                        }`}
                      >
                        {pl.name} · {pl.price}/mo
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="mDetails" className="mb-1.5 block text-sm font-medium">How do you get leads today? (optional)</Label>
                  <Textarea
                    id="mDetails"
                    rows={4}
                    value={form.details}
                    onChange={(e) => update("details", e.target.value)}
                    placeholder="Website form, phone calls, Facebook, referrals... and roughly how many a month."
                    className="bg-white border-[#e7e1d6] text-[#1b1a17] placeholder:text-[#6b675e]/60 rounded-xl focus-visible:border-[#166b45] focus-visible:ring-[#166b45]/15"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="w-full h-14 rounded-full bg-[#166b45] text-white font-bold text-lg transition-all duration-300 hover:bg-[#0f5434] hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Sending..." : "Get my CRM"}
                  {!isSubmitting && <ArrowRight className="h-5 w-5 ml-2" />}
                </Button>
                <p className="text-center text-xs leading-relaxed text-[#6b675e]">
                  Month-to-month, cancel any time. After you submit, we'll reach out by{" "}
                  <span className="font-semibold text-[#1b1a17]">text, phone call, or email</span>. No obligation.
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
