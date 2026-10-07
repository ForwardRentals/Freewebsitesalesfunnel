import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Clock, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useReferral } from "../hooks/useReferral";

const businessTypes = [
  "Restaurant / Cafe",
  "Salon / Barber",
  "Contractor / Trades",
  "Health / Wellness",
  "Fitness",
  "Retail",
  "Tours / Rentals",
  "Other",
];

const inputClasses =
  "bg-white border-[#e7e1d6] text-[#1b1a17] placeholder:text-[#6b675e]/60 h-12 rounded-xl focus-visible:border-[#166b45] focus-visible:ring-[#166b45]/15 transition-all";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyf2n_cRhou3C45Vz-mTUqg7VoFK_Tjczbxu-UwOd5uSa7mYm54Q-ff4DyqqdeHghbolQ/exec";

/* The short "apply in 2 minutes" form used on the homepage. Same backend as
   /fb and /get-started; the longer brief happens on the follow-up call. */
export function QuickApplyForm({ formName = "HomeQuickApply" }: { formName?: string }) {
  const { recordSignup, savePendingEmail, getStoredRef } = useReferral();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const payload = new URLSearchParams({
      form_name: formName,
      created_time: new Date().toISOString(),
      full_name: formData.fullName,
      email: formData.email,
      phone_number: formData.phone,
      business_name: formData.businessName,
      business_type: selectedType,
      is_organic: "true",
      platform: "website",
      referral_token: getStoredRef() ?? "",
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

    savePendingEmail(formData.email);
    await recordSignup(formData.email);

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
    <div
      id="apply"
      className="scroll-mt-28 rounded-3xl border border-[#e7e1d6] bg-white p-6 sm:p-8 shadow-[0_24px_80px_-24px_rgba(27,26,23,0.25)]"
    >
      <div className="mb-5">
        <p className="font-display text-2xl font-semibold">
          Apply for your free website
        </p>
        <p className="text-sm text-[#6b675e] mt-1">
          Takes 2 minutes. I'll reply within 24 hours.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="qaName" className="font-medium mb-1.5 block text-sm">
              Your name
            </Label>
            <Input
              id="qaName"
              required
              autoComplete="name"
              value={formData.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              placeholder="Jane Smith"
              className={inputClasses}
            />
          </div>
          <div>
            <Label htmlFor="qaBusiness" className="font-medium mb-1.5 block text-sm">
              Business name
            </Label>
            <Input
              id="qaBusiness"
              required
              autoComplete="organization"
              value={formData.businessName}
              onChange={(e) => updateField("businessName", e.target.value)}
              placeholder="Your Business"
              className={inputClasses}
            />
          </div>
          <div>
            <Label htmlFor="qaEmail" className="font-medium mb-1.5 block text-sm">
              Email
            </Label>
            <Input
              id="qaEmail"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="you@email.com"
              className={inputClasses}
            />
          </div>
          <div>
            <Label htmlFor="qaPhone" className="font-medium mb-1.5 block text-sm">
              Phone
            </Label>
            <Input
              id="qaPhone"
              type="tel"
              required
              autoComplete="tel"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="(604) 555-1234"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <Label className="font-medium mb-2.5 block text-sm">
            What kind of business?
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
          className="w-full h-14 rounded-full bg-[#166b45] text-white font-bold text-lg transition-all duration-300 hover:bg-[#0f5434] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(22,107,69,0.5)] disabled:opacity-40 disabled:hover:translate-y-0 disabled:shadow-none"
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
            />
          ) : (
            <>
              Apply for my free website
              <ArrowRight className="h-5 w-5 ml-2" />
            </>
          )}
        </Button>
      </form>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#6b675e]">
        <span className="flex items-center gap-1.5">
          <Shield className="h-3 w-3 text-[#166b45]" /> No credit card
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3 w-3 text-[#166b45]" /> Reply within 24 hours
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3 w-3 text-[#166b45]" /> No contract
        </span>
      </div>
    </div>
  );
}
