import { useState, useEffect } from "react";
import { useReferral } from "../hooks/useReferral";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Upload,
  Sparkles,
  X,
  FileImage,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { sendToHermes } from "../lib/hermes";

const inputClasses =
  "bg-white border-[#e7e1d6] rounded-xl text-[#1b1a17] placeholder:text-[#6b675e]/60 focus-visible:border-[#166b45] focus-visible:ring-[#166b45]/15";

export function GetStarted() {
  const { recordSignup, savePendingEmail, getStoredRef } = useReferral();

  useEffect(() => {
    document.title = "Get Your Free Website — Hire a Web Designer Today | FreeSiteCompany";
  }, []);

  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    businessName: "",
    currentWebsite: "",
    email: "",
    phone: "",

    // Current Setup
    currentHost: "",
    launchDate: "",

    // Website Details
    location: "",
    services: "",
    pagesNeeded: "",

    // Design Preferences
    logoChoice: "",
    sampleWebsites: "",
    additionalInfo: "",

    // Budget
    monthlyBudget: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const [isDragging, setIsDragging] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addFiles = (files: File[]) => {
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(Array.from(e.target.files));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith("image/"));
    if (files.length) addFiles(files);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && e.target instanceof HTMLElement && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      if (step < 4) nextStep();
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "done" | "error">("idle");

  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyf2n_cRhou3C45Vz-mTUqg7VoFK_Tjczbxu-UwOd5uSa7mYm54Q-ff4DyqqdeHghbolQ/exec";
  const WORKER_URL = "https://fsc-referral.thefulltimehobby.workers.dev";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Upload files to R2 first if any were selected
    let fileKeys = "";
    if (uploadedFiles.length > 0) {
      setUploadStatus("uploading");
      try {
        const submissionId = `${formData.businessName.replace(/[^a-zA-Z0-9]/g, "-")}-${Date.now()}`;
        const uploadData = new FormData();
        uploadData.append("submission_id", submissionId);
        uploadedFiles.forEach((file) => uploadData.append("files", file));
        const uploadRes = await fetch(`${WORKER_URL}/api/upload`, {
          method: "POST",
          body: uploadData,
        });
        const uploadResult = await uploadRes.json();
        fileKeys = (uploadResult.files ?? []).map((f: { key: string }) => f.key).join(", ");
        setUploadStatus("done");
      } catch (uploadErr) {
        console.error("File upload failed:", uploadErr);
        setUploadStatus("error");
      }
    }

    const payload = new URLSearchParams({
      form_name: "GetStarted",
      created_time: new Date().toISOString(),
      full_name: formData.businessName,
      email: formData.email,
      phone_number: formData.phone,
      website: formData.currentWebsite,
      business_name: formData.businessName,
      location: formData.location,
      current_host: formData.currentHost,
      launch_date: formData.launchDate,
      services: formData.services,
      pages_needed: formData.pagesNeeded,
      logo: formData.logoChoice,
      sample_websites: formData.sampleWebsites,
      additional_info: formData.additionalInfo,
      monthly_budget: formData.monthlyBudget,
      file_uploads: fileKeys,
      is_organic: "true",
      platform: "website",
      referral_token: getStoredRef() ?? "",
    });

    sendToHermes(payload);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });
    } catch (err) {
      console.error("Form submission failed:", err);
    }

    // Save email for the Thank You page referral widget, and credit the referrer
    savePendingEmail(formData.email);
    await recordSignup(formData.email);

    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: formData.businessName,
      });
    }
    window.location.href = "/thank-you?draft=1";
  };

  const progress = (step / 4) * 100;

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1b1a17] selection:bg-[#166b45] selection:text-white">
      <Navigation />

      <div className="pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e1d6] bg-white px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-[#166b45]" />
              <span className="text-sm font-medium text-[#6b675e]">
                Step {step} of 4
              </span>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Let's Build Your{" "}
              <span className="italic text-[#166b45]">Free Website</span>
            </h1>
            <p className="text-xl text-[#6b675e]">
              Tell us about your business so we can create the perfect site for you
            </p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#166b45]/[0.08] px-4 py-1.5 text-sm font-semibold text-[#166b45]">
              Finish this form and see a first draft of your website in about 15 minutes
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="h-2 bg-[#e7e1d6] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-[#166b45] rounded-full"
              />
            </div>
          </div>

          {/* Form */}
          <motion.div
            key={step}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-[#e7e1d6] bg-white shadow-sm p-5 sm:p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="font-display text-2xl font-semibold tracking-tight mb-6 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-[#166b45]" />
                    Basic Information
                  </h2>

                  <div>
                    <Label htmlFor="businessName" className="font-medium text-[#1b1a17] mb-2 block">
                      Business Name *
                    </Label>
                    <Input
                      id="businessName"
                      required
                      value={formData.businessName}
                      onChange={(e) => updateField("businessName", e.target.value)}
                      placeholder="Enter your business name"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-medium text-[#1b1a17] mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="your@email.com"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="font-medium text-[#1b1a17] mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="(604) 849-8898"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <Label htmlFor="location" className="font-medium text-[#1b1a17] mb-2 block">
                      Business Location *
                    </Label>
                    <Input
                      id="location"
                      required
                      value={formData.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      placeholder="City, State/Province"
                      className={inputClasses}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Current Setup */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="font-display text-2xl font-semibold tracking-tight mb-6 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-[#166b45]" />
                    Current Setup & Timeline
                  </h2>

                  <div>
                    <Label htmlFor="currentWebsite" className="font-medium text-[#1b1a17] mb-2 block">
                      Current Website Name (if any)
                    </Label>
                    <Input
                      id="currentWebsite"
                      value={formData.currentWebsite}
                      onChange={(e) => updateField("currentWebsite", e.target.value)}
                      placeholder="www.yoursite.com"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <Label htmlFor="currentHost" className="font-medium text-[#1b1a17] mb-2 block">
                      Current Hosting Provider (if any)
                    </Label>
                    <Input
                      id="currentHost"
                      value={formData.currentHost}
                      onChange={(e) => updateField("currentHost", e.target.value)}
                      placeholder="GoDaddy, HostPapa, etc."
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <Label htmlFor="launchDate" className="font-medium text-[#1b1a17] mb-2 block">
                      When do you want this launched? *
                    </Label>
                    <Input
                      id="launchDate"
                      required
                      value={formData.launchDate}
                      onChange={(e) => updateField("launchDate", e.target.value)}
                      placeholder="e.g., ASAP, 2 weeks, by March 1st"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <Label htmlFor="monthlyBudget" className="font-medium text-[#1b1a17] mb-2 block">
                      Monthly Budget (Optional)
                    </Label>
                    <Input
                      id="monthlyBudget"
                      value={formData.monthlyBudget}
                      onChange={(e) => updateField("monthlyBudget", e.target.value)}
                      placeholder="e.g., $9–$27/month"
                      className={inputClasses}
                    />
                    <p className="text-sm text-[#6b675e] mt-2">
                      This helps us recommend the best plan for you
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3: Website Details */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="font-display text-2xl font-semibold tracking-tight mb-6 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-[#166b45]" />
                    Website Details
                  </h2>

                  <div>
                    <Label htmlFor="services" className="font-medium text-[#1b1a17] mb-2 block">
                      What services do you offer? *
                    </Label>
                    <Textarea
                      id="services"
                      required
                      value={formData.services}
                      onChange={(e) => updateField("services", e.target.value)}
                      placeholder="Describe your products or services..."
                      rows={4}
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <Label htmlFor="pagesNeeded" className="font-medium text-[#1b1a17] mb-2 block">
                      Which pages do you need? *
                    </Label>
                    <Textarea
                      id="pagesNeeded"
                      required
                      value={formData.pagesNeeded}
                      onChange={(e) => updateField("pagesNeeded", e.target.value)}
                      placeholder="e.g., Home, About, Services, Contact, Booking, Gallery..."
                      rows={3}
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <Label className="font-medium text-[#1b1a17] mb-2 block">
                      Do you have a logo?
                    </Label>
                    <div className="grid sm:grid-cols-3 gap-2">
                      {[
                        ["have", "Yes, I'll upload it"],
                        ["mockup", "No logo? Mock some up for me!"],
                        ["refresh", "I have one, but want fresh options"],
                      ].map(([v, label]) => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => updateField("logoChoice", v)}
                          className={`rounded-xl border px-4 py-3 text-sm font-medium text-left transition-all ${formData.logoChoice === v ? "border-[#166b45] bg-[#166b45]/[0.06] text-[#166b45]" : "border-[#e7e1d6] bg-white text-[#1b1a17] hover:border-[#166b45]/50"}`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                    {(formData.logoChoice === "mockup" || formData.logoChoice === "refresh") && (
                      <p className="mt-2 text-sm text-[#166b45]">
                        Done. We'll mock up a few logo options for you, free, and you pick your favourite.
                      </p>
                    )}
                  </div>

                  <div>
                    <Label className="font-medium text-[#1b1a17] mb-2 block">
                      {formData.logoChoice === "mockup" ? "Photos (optional)" : "Logo & Photos (optional, upload here)"}
                    </Label>
                    <div className="space-y-4">
                      <div
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={handleDrop}
                        className={`relative rounded-xl border-2 border-dashed transition-colors ${isDragging ? "border-[#166b45] bg-[#166b45]/[0.06]" : "border-[#e7e1d6] bg-[#faf7f2] hover:border-[#166b45]/50"}`}
                      >
                        <label className="block p-8 text-center cursor-pointer">
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <Upload className={`h-8 w-8 mx-auto mb-3 ${isDragging ? "text-[#166b45]" : "text-[#6b675e]"}`} />
                          <p className="text-[#1b1a17] font-medium mb-1">
                            {isDragging ? "Drop files here" : "Drag & drop or click to upload"}
                          </p>
                          <p className="text-sm text-[#6b675e]">
                            (Transparent PNG for logo preferred. Max 10MB per file)
                          </p>
                        </label>
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm text-[#6b675e]">
                            Uploaded files ({uploadedFiles.length}):
                          </p>
                          {uploadedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 bg-[#faf7f2] rounded-xl p-3 border border-[#e7e1d6]"
                            >
                              <FileImage className="h-5 w-5 text-[#166b45] flex-shrink-0" />
                              <span className="text-sm text-[#1b1a17] flex-1 truncate">
                                {file.name}
                              </span>
                              <span className="text-xs text-[#6b675e]">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </span>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="p-1 hover:bg-[#efe9de] rounded transition-colors"
                              >
                                <X className="h-4 w-4 text-[#6b675e] hover:text-red-500" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Design Preferences */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="font-display text-2xl font-semibold tracking-tight mb-6 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-[#166b45]" />
                    Design Preferences
                  </h2>

                  <div>
                    <Label htmlFor="sampleWebsites" className="font-medium text-[#1b1a17] mb-2 block">
                      Sample Websites You Like *
                    </Label>
                    <Textarea
                      id="sampleWebsites"
                      required
                      value={formData.sampleWebsites}
                      onChange={(e) => updateField("sampleWebsites", e.target.value)}
                      placeholder="Share URLs of websites whose style you love. This helps us understand your vision!"
                      rows={4}
                      className={inputClasses}
                    />
                    <p className="text-sm text-[#6b675e] mt-2">
                      Include links and mention what you like about them
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo" className="font-medium text-[#1b1a17] mb-2 block">
                      Anything else we should know?
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => updateField("additionalInfo", e.target.value)}
                      placeholder="Special features, color preferences, specific requirements..."
                      rows={4}
                      className={inputClasses}
                    />
                  </div>

                  <div className="bg-[#166b45]/[0.06] border border-[#166b45]/20 rounded-xl p-6">
                    <h3 className="font-semibold text-[#166b45] mb-2">
                      What happens next?
                    </h3>
                    <ul className="text-sm text-[#1b1a17]/80 space-y-2">
                      <li>• We'll review your information within 24 hours</li>
                      <li>• No logo? We'll mock some up for you to pick from</li>
                      <li>• Everything happens by email, no meetings needed</li>
                      <li>• We'll start building your custom website</li>
                      <li>• You'll get the complete codebase when it's ready</li>
                      <li>• Choose to manage it yourself or pick a support plan</li>
                    </ul>
                  </div>

                  <p className="text-sm text-[#6b675e]">
                    No call needed. We'll email you your draft. Rather talk it through first?{" "}
                    <a
                      href="https://calendar.app.google/L4ok6TnfC8njfXXy6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#166b45] underline underline-offset-2"
                    >
                      Book an optional call
                    </a>
                    .
                  </p>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-10 pt-8 border-t border-[#e7e1d6]">
                {step > 1 ? (
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="rounded-full border-[#1b1a17]/15 bg-white text-[#1b1a17] hover:border-[#1b1a17]/40 hover:bg-white hover:-translate-y-0.5"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="rounded-full bg-[#166b45] font-semibold text-white transition-all hover:bg-[#0f5434] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(22,107,69,0.5)]"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <div className="flex flex-col items-end gap-2">
                    {uploadStatus === "uploading" && (
                      <span className="text-xs text-[#166b45] animate-pulse">Uploading files...</span>
                    )}
                    {uploadStatus === "done" && (
                      <span className="text-xs text-[#166b45]">Files uploaded ✓</span>
                    )}
                    {uploadStatus === "error" && (
                      <span className="text-xs text-red-500">File upload failed — form will still submit</span>
                    )}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-full bg-[#166b45] font-semibold text-white transition-all hover:bg-[#0f5434] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(22,107,69,0.5)] disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                      <CheckCircle2 className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
              <div className="mt-6">
                <p className="text-center text-xs leading-relaxed text-[#6b675e]">
                  After you submit, we'll reach out by <span className="font-semibold text-[#1b1a17]">text, phone call, or email</span> to get your free website started.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Why This Info? */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center text-[#6b675e] text-sm"
          >
            <p>
              Your information is secure and will only be used to build your website.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
