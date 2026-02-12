import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Logo } from "../components/Logo";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Star,
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

const trustPoints = [
  { icon: Shield, text: "100% Free Build" },
  { icon: Clock, text: "24hr Response" },
  { icon: Star, text: "No Templates" },
];

export function FBLead() {
  useEffect(() => {
    document.title = "Claim Your Free Website | FreeSiteCompany";
  }, []);

  const navigate = useNavigate();
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

  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyNHPARool6QEaiskbXOC8A4F0E9ldC-f8EQa5I-wEWoF5HJnLK4Bscnsq-1fb6WqqHNw/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      formType: "FBLead",
      submittedAt: new Date().toISOString(),
      ...formData,
      businessType: selectedType,
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Failed to submit form:", error);
    }

    navigate("/thank-you");
  };

  const isValid =
    formData.fullName &&
    formData.email &&
    formData.phone &&
    formData.businessName &&
    selectedType;

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      {/* Minimal header - no navigation distractions */}
      <div className="px-6 py-4 border-b border-zinc-800/50">
        <div className="max-w-lg mx-auto flex items-center justify-center gap-3">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            FreeSiteCompany
          </span>
        </div>
      </div>

      <div className="flex-1 px-4 py-6 md:py-10">
        <div className="max-w-lg mx-auto">
          {/* Headline */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold text-sm">
                Limited Spots Available
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
              Get a{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                FREE
              </span>{" "}
              Custom Website
            </h1>
            <p className="text-zinc-400 text-base">
              Hand-coded. No templates. You own the code.
            </p>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="flex justify-center gap-6 mb-6"
          >
            {trustPoints.map((point) => (
              <div key={point.text} className="flex items-center gap-1.5">
                <point.icon className="h-4 w-4 text-emerald-400" />
                <span className="text-xs text-zinc-400">{point.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-zinc-300 mb-1.5 block text-sm">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  placeholder="John Smith"
                  className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 h-11"
                />
              </div>

              <div>
                <Label htmlFor="fbEmail" className="text-zinc-300 mb-1.5 block text-sm">
                  Email *
                </Label>
                <Input
                  id="fbEmail"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@email.com"
                  className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 h-11"
                />
              </div>

              <div>
                <Label htmlFor="fbPhone" className="text-zinc-300 mb-1.5 block text-sm">
                  Phone *
                </Label>
                <Input
                  id="fbPhone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="(604) 555-1234"
                  className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 h-11"
                />
              </div>

              <div>
                <Label htmlFor="fbBusiness" className="text-zinc-300 mb-1.5 block text-sm">
                  Business Name *
                </Label>
                <Input
                  id="fbBusiness"
                  required
                  value={formData.businessName}
                  onChange={(e) => updateField("businessName", e.target.value)}
                  placeholder="Your Business Name"
                  className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 h-11"
                />
              </div>

              {/* Business type chips */}
              <div>
                <Label className="text-zinc-300 mb-2 block text-sm">
                  Business Type *
                </Label>
                <div className="flex flex-wrap gap-2">
                  {businessTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                        selectedType === type
                          ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                          : "bg-zinc-800 text-zinc-400 border border-zinc-700 hover:border-emerald-500/50 hover:text-zinc-300"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-bold text-base hover:shadow-2xl hover:shadow-emerald-500/50 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Claim My Free Website
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Social proof / urgency */}
            <div className="mt-4 pt-4 border-t border-zinc-800/50 flex items-center justify-center gap-2 text-xs text-zinc-500">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>50+ businesses served &mdash; No credit card required</span>
            </div>
          </motion.div>

          {/* Bottom trust text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-zinc-600 text-xs mt-4"
          >
            Your info is secure and only used to build your website.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
