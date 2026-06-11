import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
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

const inputClasses =
  "bg-white border-[#e7e1d6] text-[#1b1a17] placeholder:text-[#6b675e]/60 h-12 rounded-xl focus-visible:border-[#166b45] focus-visible:ring-[#166b45]/15 transition-all";

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
    <div className="min-h-screen bg-[#faf7f2] text-[#1b1a17] overflow-x-hidden selection:bg-[#166b45] selection:text-white">
      <Navigation />

      <div className="relative">
        {/* ===== HERO: Centered form-first design ===== */}
        <section className="px-4 pt-28 sm:pt-32 pb-20">
          <div className="max-w-xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e1d6] bg-white px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#166b45]" />
                <span className="text-[#166b45] font-semibold text-sm">
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
              <h1 className="font-display text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
                Your business deserves
                <br />
                <span className="italic text-[#166b45]">
                  a beautiful website
                </span>
              </h1>
              <p className="text-[#1b1a17] text-lg md:text-xl mt-4 font-medium">
                We'll build it for you — for free. Seriously.
              </p>
              <p className="text-[#6b675e] text-sm md:text-base mt-3 max-w-md mx-auto leading-relaxed">
                No catch, no credit card, no commitment. The website build
                is completely free — you only pay for hosting at just $9.99/month
                when you're ready to go live. Fill out the form and we'll be in touch.
              </p>
            </motion.div>

            {/* Form card */}
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-2xl border border-[#e7e1d6] bg-white shadow-sm p-6 md:p-8"
            >
              <p className="text-center text-sm text-[#6b675e] mb-5 font-medium">
                Takes 30 seconds — we'll handle the rest
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="font-medium text-[#1b1a17] mb-1.5 block text-sm">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="John Smith"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <Label htmlFor="fbEmail" className="font-medium text-[#1b1a17] mb-1.5 block text-sm">
                      Email
                    </Label>
                    <Input
                      id="fbEmail"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@email.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fbPhone" className="font-medium text-[#1b1a17] mb-1.5 block text-sm">
                      Phone
                    </Label>
                    <Input
                      id="fbPhone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="(604) 555-1234"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <Label htmlFor="fbBusiness" className="font-medium text-[#1b1a17] mb-1.5 block text-sm">
                      Business Name
                    </Label>
                    <Input
                      id="fbBusiness"
                      required
                      value={formData.businessName}
                      onChange={(e) => updateField("businessName", e.target.value)}
                      placeholder="Your Business"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <Label className="font-medium text-[#1b1a17] mb-2.5 block text-sm">
                    What type of business?
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {businessTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`px-3.5 py-2 rounded-full text-sm transition-all duration-200 ${
                          selectedType === type
                            ? "bg-[#166b45] text-white font-semibold shadow-[0_8px_24px_-8px_rgba(22,107,69,0.5)]"
                            : "bg-white text-[#6b675e] border border-[#e7e1d6] hover:border-[#166b45]/40 hover:text-[#1b1a17]"
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
                  className="w-full h-13 rounded-full bg-[#166b45] text-white font-bold text-base transition-all duration-300 hover:bg-[#0f5434] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(22,107,69,0.5)] disabled:opacity-40 disabled:hover:translate-y-0 disabled:shadow-none"
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

              <div className="mt-5 flex items-center justify-center gap-4 text-xs text-[#6b675e]">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-3 w-3 text-[#166b45]" />
                  <span>No credit card</span>
                </div>
                <span className="text-[#e7e1d6]">|</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3 text-[#166b45]" />
                  <span>24hr turnaround</span>
                </div>
                <span className="text-[#e7e1d6]">|</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-[#166b45]" />
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
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#166b45]/10 mb-3">
                    <item.icon className="h-5 w-5 text-[#166b45]" />
                  </div>
                  <p className="text-[#1b1a17] font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-[#6b675e] text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PORTFOLIO ===== */}
        <section className="px-4 pb-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="text-[#166b45] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                Portfolio
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                Recent <span className="italic text-[#166b45]">work</span>
              </h2>
            </motion.div>

            {/* Portfolio grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Endless Passport — hero card, 7 cols */}
              <motion.a
                href="https://surf-glyph-32083042.figma.site"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group md:col-span-7 block rounded-2xl overflow-hidden bg-white border border-[#e7e1d6] shadow-sm hover:border-[#166b45]/40 hover:shadow-[0_24px_60px_-20px_rgba(27,26,23,0.25)] transition-all duration-500"
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
                      <h3 className="text-[#1b1a17] font-semibold group-hover:text-[#166b45] transition-colors">
                        Endless Passport
                      </h3>
                      <p className="text-[#6b675e] text-sm mt-0.5">Travel & Adventure</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#faf7f2] border border-[#e7e1d6] flex items-center justify-center group-hover:bg-[#166b45]/10 group-hover:border-[#166b45]/30 transition-colors">
                      <ArrowRight className="h-3.5 w-3.5 text-[#6b675e] group-hover:text-[#166b45] -rotate-45 transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Jack Dobson — 5 cols */}
              <motion.a
                href="https://jdobsonfineart.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group md:col-span-5 block rounded-2xl overflow-hidden bg-white border border-[#e7e1d6] shadow-sm hover:border-[#166b45]/40 hover:shadow-[0_24px_60px_-20px_rgba(27,26,23,0.25)] transition-all duration-500"
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
                      <h3 className="text-[#1b1a17] font-semibold group-hover:text-[#166b45] transition-colors">
                        Jack Dobson Fine Art
                      </h3>
                      <p className="text-[#6b675e] text-sm mt-0.5">Artist Portfolio</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#faf7f2] border border-[#e7e1d6] flex items-center justify-center group-hover:bg-[#166b45]/10 group-hover:border-[#166b45]/30 transition-colors">
                      <ArrowRight className="h-3.5 w-3.5 text-[#6b675e] group-hover:text-[#166b45] -rotate-45 transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* The Full Time Hobby — full width cinematic */}
              <motion.a
                href="https://thefulltimehobby.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group md:col-span-12 block rounded-2xl overflow-hidden bg-white border border-[#e7e1d6] shadow-sm hover:border-[#166b45]/40 hover:shadow-[0_24px_60px_-20px_rgba(27,26,23,0.25)] transition-all duration-500"
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
                      <h3 className="text-[#1b1a17] font-semibold group-hover:text-[#166b45] transition-colors">
                        The Full Time Hobby
                      </h3>
                      <p className="text-[#6b675e] text-sm mt-0.5">Photography & Videography</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#faf7f2] border border-[#e7e1d6] flex items-center justify-center group-hover:bg-[#166b45]/10 group-hover:border-[#166b45]/30 transition-colors">
                      <ArrowRight className="h-3.5 w-3.5 text-[#6b675e] group-hover:text-[#166b45] -rotate-45 transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Sweetgreen — Restaurant, 4 cols */}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="group md:col-span-4 rounded-2xl overflow-hidden bg-white border border-[#e7e1d6] shadow-sm hover:border-[#166b45]/40 transition-all duration-500"
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
                      <h3 className="text-[#1b1a17] font-semibold">Fresh Kitchen Co.</h3>
                      <p className="text-[#6b675e] text-sm mt-0.5">Restaurant & Cafe</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#faf7f2] border border-[#e7e1d6] flex items-center justify-center">
                      <Star className="h-3.5 w-3.5 text-[#d7a04a]" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Equinox — Fitness, 4 cols */}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="group md:col-span-4 rounded-2xl overflow-hidden bg-white border border-[#e7e1d6] shadow-sm hover:border-[#166b45]/40 transition-all duration-500"
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
                      <h3 className="text-[#1b1a17] font-semibold">Peak Performance</h3>
                      <p className="text-[#6b675e] text-sm mt-0.5">Fitness Studio</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#faf7f2] border border-[#e7e1d6] flex items-center justify-center">
                      <Star className="h-3.5 w-3.5 text-[#d7a04a]" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Compass — Real Estate, 4 cols */}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="group md:col-span-4 rounded-2xl overflow-hidden bg-white border border-[#e7e1d6] shadow-sm hover:border-[#166b45]/40 transition-all duration-500"
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
                      <h3 className="text-[#1b1a17] font-semibold">Coastal Realty</h3>
                      <p className="text-[#6b675e] text-sm mt-0.5">Real Estate Agency</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#faf7f2] border border-[#e7e1d6] flex items-center justify-center">
                      <Star className="h-3.5 w-3.5 text-[#d7a04a]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-[#6b675e] text-sm mb-4">Yours could be next — and it won't cost you a thing.</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#166b45] text-white font-semibold text-sm transition-all hover:bg-[#0f5434] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(22,107,69,0.5)]"
              >
                Get My Free Website
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
