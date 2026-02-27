import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Logo } from "../components/Logo";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Star,
  Palette,
  Code,
  Rocket,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const businessTypes = [
  "Restaurant / Cafe",
  "Salon / Barbershop",
  "Contractor / Trades",
  "Health / Wellness Clinic",
  "Real Estate",
  "Retail / E-Commerce",
  "Fitness / Gym",
  "Photography / Creative",
  "Other",
];

export function FBLead() {
  useEffect(() => {
    document.title = "Claim Your Free Website | FreeSiteCompany";

    // Fire ViewContent so Meta can build a PageView → ViewContent → Lead funnel
    if (typeof window.fbq === "function") {
      window.fbq("track", "ViewContent", {
        content_name: "FB Landing Page",
        content_category: "Free Website Offer",
      });
    }
  }, []);

  const [selectedType, setSelectedType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbyf2n_cRhou3C45Vz-mTUqg7VoFK_Tjczbxu-UwOd5uSa7mYm54Q-ff4DyqqdeHghbolQ/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const payload = new URLSearchParams({
      form_name: "FBLead",
      created_time: new Date().toISOString(),
      full_name: formData.fullName,
      email: formData.email,
      phone_number: formData.phone,
      business_name: formData.businessName,
      business_type: selectedType,
      is_organic: "true",
      platform: "website",
    });

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });
    } catch (err) {
      console.error("Form submission failed:", err);
    }

    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: formData.businessName,
        content_category: selectedType,
      });
    }
    window.location.href = "/thank-you";
  };

  const isValid =
    formData.fullName &&
    formData.email &&
    formData.phone &&
    formData.businessName &&
    selectedType;

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <div className="relative px-6 py-4 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-3">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            FreeSiteCompany
          </span>
        </div>
      </div>

      <div className="relative">
        {/* ===== HERO: Centered form-first design ===== */}
        <section className="px-4 pt-10 md:pt-16 pb-20">
          <div className="max-w-xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-sm">
                  100% Free — No Catch — Limited Spots
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                Your business deserves
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  a beautiful website
                </span>
              </h1>
              <p className="text-white text-lg md:text-xl mt-4 font-medium">
                We'll build it for you — for free. Seriously.
              </p>
              <p className="text-zinc-400 text-sm md:text-base mt-3 max-w-md mx-auto leading-relaxed">
                No catch, no credit card, no commitment. The website build
                is completely free — you only pay for hosting at just $9.99/month
                when you're ready to go live. Fill out the form and we'll be in touch.
              </p>
            </motion.div>

            {/* Form card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-6 md:p-8"
            >
              <p className="text-center text-sm text-zinc-300 mb-5 font-medium">
                Takes 30 seconds — we'll handle the rest
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="text-zinc-300 mb-1.5 block text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="John Smith"
                      className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-600 h-12 rounded-xl focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fbEmail" className="text-zinc-300 mb-1.5 block text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="fbEmail"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@email.com"
                      className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-600 h-12 rounded-xl focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fbPhone" className="text-zinc-300 mb-1.5 block text-sm font-medium">
                      Phone
                    </Label>
                    <Input
                      id="fbPhone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="(604) 555-1234"
                      className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-600 h-12 rounded-xl focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fbBusiness" className="text-zinc-300 mb-1.5 block text-sm font-medium">
                      Business Name
                    </Label>
                    <Input
                      id="fbBusiness"
                      required
                      value={formData.businessName}
                      onChange={(e) => updateField("businessName", e.target.value)}
                      placeholder="Your Business"
                      className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-600 h-12 rounded-xl focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-zinc-300 mb-2.5 block text-sm font-medium">
                    What type of business?
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {businessTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`px-3.5 py-2 rounded-xl text-sm transition-all duration-200 ${
                          selectedType === type
                            ? "bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/25"
                            : "bg-white/[0.04] text-zinc-400 border border-white/[0.08] hover:border-emerald-500/30 hover:text-zinc-200"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="w-full h-13 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-bold text-base shadow-xl shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100 disabled:shadow-none"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Get My Free Website
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-5 flex items-center justify-center gap-4 text-xs text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-3 w-3 text-emerald-500/60" />
                  <span>No credit card</span>
                </div>
                <span className="text-zinc-800">|</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3 text-emerald-500/60" />
                  <span>24hr turnaround</span>
                </div>
                <span className="text-zinc-800">|</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-emerald-500/60" />
                  <span>50+ built</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="px-4 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Palette, step: "1", title: "Fill out the form", desc: "30 seconds — just your name, contact, and business type" },
                { icon: Code, step: "2", title: "We contact you", desc: "Our team reaches out within 24 hours to get started" },
                { icon: Rocket, step: "3", title: "Your site goes live", desc: "We build it, you review it, you own the code" },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 border border-emerald-500/10 mb-3">
                    <item.icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PORTFOLIO ===== */}
        <section className="px-4 pb-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">
                Portfolio
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Recent work
              </h2>
            </motion.div>

            {/* Portfolio grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Endless Passport — hero card, 7 cols */}
              <motion.a
                href="https://surf-glyph-32083042.figma.site"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group md:col-span-7 block rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/25 transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src="/portfolio/endlesspassport.png"
                    alt="Endless Passport website"
                    className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                        Endless Passport
                      </h3>
                      <p className="text-zinc-500 text-sm mt-0.5">Travel & Adventure</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                      <ArrowRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-emerald-400 -rotate-45 transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Jack Dobson — 5 cols */}
              <motion.a
                href="https://jdobsonfineart.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="group md:col-span-5 block rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/25 transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src="/portfolio/jdobson.png"
                    alt="Jack Dobson Fine Art website"
                    className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                        Jack Dobson Fine Art
                      </h3>
                      <p className="text-zinc-500 text-sm mt-0.5">Artist Portfolio</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                      <ArrowRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-emerald-400 -rotate-45 transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* The Full Time Hobby — full width cinematic */}
              <motion.a
                href="https://thefulltimehobby.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="group md:col-span-12 block rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/25 transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src="/portfolio/thefulltimehobby.png"
                    alt="The Full Time Hobby website"
                    className="w-full aspect-[21/9] object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                        The Full Time Hobby
                      </h3>
                      <p className="text-zinc-500 text-sm mt-0.5">Photography & Videography</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                      <ArrowRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-emerald-400 -rotate-45 transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Sweetgreen — Restaurant, 4 cols */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="group md:col-span-4 rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/25 transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src="/portfolio/mockup-restaurant.png"
                    alt="Restaurant website design"
                    className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold">Fresh Kitchen Co.</h3>
                      <p className="text-zinc-500 text-sm mt-0.5">Restaurant & Cafe</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center">
                      <Star className="h-3.5 w-3.5 text-emerald-500/50" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Equinox — Fitness, 4 cols */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="group md:col-span-4 rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/25 transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src="/portfolio/mockup-fitness.png"
                    alt="Fitness studio website design"
                    className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold">Peak Performance</h3>
                      <p className="text-zinc-500 text-sm mt-0.5">Fitness Studio</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center">
                      <Star className="h-3.5 w-3.5 text-emerald-500/50" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Compass — Real Estate, 4 cols */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="group md:col-span-4 rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/25 transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src="/portfolio/mockup-realestate.png"
                    alt="Real estate website design"
                    className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold">Coastal Realty</h3>
                      <p className="text-zinc-500 text-sm mt-0.5">Real Estate Agency</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center">
                      <Star className="h-3.5 w-3.5 text-emerald-500/50" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-zinc-500 text-sm mb-4">Yours could be next — and it won't cost you a thing.</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 transition-all hover:scale-105"
              >
                Get My Free Website
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
