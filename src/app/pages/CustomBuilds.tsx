import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  CalendarCheck,
  LayoutDashboard,
  Sparkles,
  Plug,
  Globe,
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

const services = [
  {
    icon: ShoppingCart,
    title: "E-commerce & online stores",
    text: "Product catalogues, cart and checkout, Stripe or PayPal payments, inventory and order management.",
  },
  {
    icon: CalendarCheck,
    title: "Custom booking systems",
    text: "Rentals, tours, appointments and classes, with deposits, availability calendars and automated reminders.",
  },
  {
    icon: LayoutDashboard,
    title: "Web apps & client portals",
    text: "Member logins, dashboards, quote calculators, internal tools and anything else your business runs on.",
  },
  {
    icon: Sparkles,
    title: "Premium brand sites",
    text: "Large multi-page sites with rich animation, video, and design that's built to be remembered.",
  },
  {
    icon: Plug,
    title: "Integrations",
    text: "CRMs, email marketing, accounting, payment and booking tools, wired together so your site does the work.",
  },
  {
    icon: Globe,
    title: "Migrations & rebuilds",
    text: "Move off Wix, Squarespace or WordPress onto a fast, hand-coded site you fully own.",
  },
];

const projectTypes = [
  "Online store",
  "Booking system",
  "Web app / portal",
  "Premium brand site",
  "Rebuild / migration",
  "Something else",
];

const budgets = ["Under $2,500", "$2,500–$5,000", "$5,000–$10,000", "$10,000+", "Not sure yet"];
const timelines = ["ASAP", "1–2 months", "3+ months", "Flexible"];

const process = [
  {
    step: "1",
    title: "Tell me about the project",
    text: "Send the inquiry below. I read every one personally.",
  },
  {
    step: "2",
    title: "Discovery call",
    text: "We talk through what you need, what it has to do, and what success looks like.",
  },
  {
    step: "3",
    title: "Fixed quote",
    text: "You get a clear scope and price in writing before any work starts. No surprise invoices.",
  },
  {
    step: "4",
    title: "Build & launch",
    text: "I build it by hand, you see progress on a live preview link, and we launch together.",
  },
];

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
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

export function CustomBuilds() {
  const [types, setTypes] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    currentSite: "",
    details: "",
  });

  useEffect(() => {
    document.title = "Custom Website Development | E-commerce, Booking & Web Apps | FreeSiteCompany";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Custom, hand-coded websites for businesses that need more: e-commerce stores, booking systems, web apps and premium brand sites. Built by a web designer in Squamish, BC. Inquire for a quote.",
      );
    }
  }, []);

  const update = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));
  const toggleType = (t: string) =>
    setTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const isValid = form.fullName && form.email && form.phone && form.details && types.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;
    setIsSubmitting(true);

    const payload = new URLSearchParams({
      form_name: "CustomInquiry",
      inquiry_type: "paid_custom_build",
      created_time: new Date().toISOString(),
      full_name: form.fullName,
      email: form.email,
      phone_number: form.phone,
      business_name: form.businessName,
      current_website: form.currentSite,
      project_types: types.join(", "),
      budget,
      timeline,
      project_details: form.details,
      is_organic: "true",
      platform: "website",
    });

    sendToHermes(payload);
    try {
      await fetch(GOOGLE_SHEET_URL, { method: "POST", mode: "no-cors", body: payload });
    } catch (err) {
      console.error("Inquiry submission failed:", err);
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: form.businessName || form.fullName,
        content_category: "Custom build inquiry",
      });
    }
    setSent(true);
    setIsSubmitting(false);
    document.getElementById("inquire")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
            Custom projects · Quoted individually
          </motion.p>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display text-[2.4rem] leading-[1.05] sm:text-6xl font-semibold tracking-tight mb-6"
          >
            Custom websites, built to{" "}
            <span className="italic text-[#7fc8a4]">impress.</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-lg sm:text-xl text-[#faf7f2]/70 leading-relaxed max-w-2xl mx-auto mb-8"
          >
            When your project needs an online store, a booking system, a web
            app, or a design that's truly one of a kind, we build it as a
            custom project, hand-coded from scratch with no templates.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="#inquire"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#faf7f2] px-8 py-4 text-lg font-semibold text-[#1b1a17] transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start an inquiry <ArrowRight className="h-5 w-5" />
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

      {/* WHAT WE BUILD */}
      <section className="py-14 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#166b45] mb-3">
              What we build
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              Built for{" "}
              <span className="italic text-[#166b45]">bigger ideas</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="rounded-2xl border border-[#e7e1d6] bg-white p-7 transition-all hover:border-[#166b45]/40 hover:-translate-y-1"
              >
                <s.icon className="h-7 w-7 text-[#166b45] mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-[#6b675e] leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE VS CUSTOM */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#fffefb] border-y border-[#e7e1d6]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-10">
            Free build or custom build?
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-[#e7e1d6] bg-white p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6b675e] mb-2">
                Free program
              </p>
              <p className="font-display text-2xl font-semibold mb-4">A custom website for your business</p>
              <ul className="space-y-2.5 text-[#6b675e]">
                {[
                  "Home, services, about, gallery and contact pages",
                  "Contact and quote forms",
                  "Link to the booking tool you already use",
                  "By application, limited spots each month",
                  "$0 to build, $9/mo for 3 months, then $13/mo",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#166b45]/70 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                to="/#apply"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#166b45] hover:gap-3 transition-all"
              >
                Apply for a free website <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-[#166b45] bg-[#166b45]/[0.05] p-7 shadow-[0_12px_40px_-16px_rgba(22,107,69,0.4)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#166b45] mb-2">
                Custom build
              </p>
              <p className="font-display text-2xl font-semibold mb-4">No limits on scope</p>
              <ul className="space-y-2.5 text-[#6b675e]">
                {[
                  "E-commerce, booking systems, portals and web apps",
                  "As many pages and features as the project needs",
                  "Custom integrations with the tools you already use",
                  "Fixed written quote before any work starts",
                  "You own the complete codebase",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#166b45] mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href="#inquire"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#166b45] hover:gap-3 transition-all"
              >
                Inquire about a custom build <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-center mb-12">
            How a custom project <span className="italic text-[#166b45]">works</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step}>
                <p className="font-display text-6xl font-semibold text-[#166b45]/20 mb-2">{p.step}</p>
                <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-[#6b675e] leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="inquire" className="scroll-mt-24 py-14 sm:py-24 px-4 sm:px-6 bg-[#fffefb] border-t border-[#e7e1d6]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight mb-3">
              Tell me about your <span className="italic text-[#166b45]">project</span>
            </h2>
            <p className="text-[#6b675e] text-lg">
              The more detail, the better the quote. I reply to every inquiry personally.
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
                <p className="font-display text-2xl font-semibold mb-2">Inquiry received</p>
                <p className="text-[#6b675e] max-w-md mx-auto">
                  Thanks, {form.fullName.split(" ")[0] || "friend"}. I'll review your project and reach
                  out by text, phone call, or email to set up a quick discovery call.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cName" className="mb-1.5 block text-sm font-medium">Full name</Label>
                    <Input id="cName" required value={form.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Jane Smith" className={inputClasses} />
                  </div>
                  <div>
                    <Label htmlFor="cEmail" className="mb-1.5 block text-sm font-medium">Email</Label>
                    <Input id="cEmail" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" className={inputClasses} />
                  </div>
                  <div>
                    <Label htmlFor="cPhone" className="mb-1.5 block text-sm font-medium">Phone</Label>
                    <Input id="cPhone" type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(604) 555-1234" className={inputClasses} />
                  </div>
                  <div>
                    <Label htmlFor="cBiz" className="mb-1.5 block text-sm font-medium">Business name</Label>
                    <Input id="cBiz" value={form.businessName} onChange={(e) => update("businessName", e.target.value)} placeholder="Your business" className={inputClasses} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="cSite" className="mb-1.5 block text-sm font-medium">Current website (if any)</Label>
                  <Input id="cSite" value={form.currentSite} onChange={(e) => update("currentSite", e.target.value)} placeholder="yourbusiness.com" className={inputClasses} />
                </div>

                <div>
                  <Label className="mb-2.5 block text-sm font-medium">What do you need? (pick any)</Label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((t) => (
                      <Chip key={t} active={types.includes(t)} onClick={() => toggleType(t)}>{t}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="mb-2.5 block text-sm font-medium">Budget</Label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <Chip key={b} active={budget === b} onClick={() => setBudget(b)}>{b}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="mb-2.5 block text-sm font-medium">Timeline</Label>
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((t) => (
                      <Chip key={t} active={timeline === t} onClick={() => setTimeline(t)}>{t}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="cDetails" className="mb-1.5 block text-sm font-medium">Tell me about the project</Label>
                  <Textarea
                    id="cDetails"
                    required
                    rows={5}
                    value={form.details}
                    onChange={(e) => update("details", e.target.value)}
                    placeholder="What should the site do? Any features, sites you like, or must-haves?"
                    className="bg-white border-[#e7e1d6] text-[#1b1a17] placeholder:text-[#6b675e]/60 rounded-xl focus-visible:border-[#166b45] focus-visible:ring-[#166b45]/15"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="w-full h-14 rounded-full bg-[#166b45] text-white font-bold text-lg transition-all duration-300 hover:bg-[#0f5434] hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Sending..." : "Send my inquiry"}
                  {!isSubmitting && <ArrowRight className="h-5 w-5 ml-2" />}
                </Button>
                <p className="text-center text-xs leading-relaxed text-[#6b675e]">
                  After you submit, we'll reach out by <span className="font-semibold text-[#1b1a17]">text, phone call, or email</span> to talk through your project. No obligation.
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
