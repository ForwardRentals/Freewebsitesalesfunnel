import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
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

export function GetStarted() {
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
    sampleWebsites: "",
    additionalInfo: "",
    
    // Budget
    monthlyBudget: "",
  });
  
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwZ5AtTv-T-vAptWFRfjEMEdsCVX32eNjXP0D1fxImPP6Oo964piJaq4wuo9dQYEP1Ohw/exec";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

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
      sample_websites: formData.sampleWebsites,
      additional_info: formData.additionalInfo,
      monthly_budget: formData.monthlyBudget,
      is_organic: "true",
      platform: "website",
    });

    navigator.sendBeacon(GOOGLE_SHEET_URL, payload);
    window.location.href = "/thank-you";
  };

  const progress = (step / 4) * 100;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">
                Step {step} of 4
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
              Let's Build Your{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Free Website
              </span>
            </h1>
            <p className="text-xl text-zinc-400">
              Tell us about your business so we can create the perfect site for you
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
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
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 sm:p-8 md:p-12"
          >
            <form onSubmit={handleSubmit}>
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                    Basic Information
                  </h2>

                  <div>
                    <Label htmlFor="businessName" className="text-zinc-300 mb-2 block">
                      Business Name *
                    </Label>
                    <Input
                      id="businessName"
                      required
                      value={formData.businessName}
                      onChange={(e) => updateField("businessName", e.target.value)}
                      placeholder="Enter your business name"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-zinc-300 mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="your@email.com"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-zinc-300 mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="(604) 849-8898"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-zinc-300 mb-2 block">
                      Business Location *
                    </Label>
                    <Input
                      id="location"
                      required
                      value={formData.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      placeholder="City, State/Province"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Current Setup */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                    Current Setup & Timeline
                  </h2>

                  <div>
                    <Label htmlFor="currentWebsite" className="text-zinc-300 mb-2 block">
                      Current Website Name (if any)
                    </Label>
                    <Input
                      id="currentWebsite"
                      value={formData.currentWebsite}
                      onChange={(e) => updateField("currentWebsite", e.target.value)}
                      placeholder="www.yoursite.com"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="currentHost" className="text-zinc-300 mb-2 block">
                      Current Hosting Provider (if any)
                    </Label>
                    <Input
                      id="currentHost"
                      value={formData.currentHost}
                      onChange={(e) => updateField("currentHost", e.target.value)}
                      placeholder="GoDaddy, HostPapa, etc."
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="launchDate" className="text-zinc-300 mb-2 block">
                      When do you want this launched? *
                    </Label>
                    <Input
                      id="launchDate"
                      required
                      value={formData.launchDate}
                      onChange={(e) => updateField("launchDate", e.target.value)}
                      placeholder="e.g., ASAP, 2 weeks, by March 1st"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="monthlyBudget" className="text-zinc-300 mb-2 block">
                      Monthly Budget (Optional)
                    </Label>
                    <Input
                      id="monthlyBudget"
                      value={formData.monthlyBudget}
                      onChange={(e) => updateField("monthlyBudget", e.target.value)}
                      placeholder="e.g., $9.99-$50/month"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                    <p className="text-sm text-zinc-500 mt-2">
                      This helps us recommend the best plan for you
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3: Website Details */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                    Website Details
                  </h2>

                  <div>
                    <Label htmlFor="services" className="text-zinc-300 mb-2 block">
                      What services do you offer? *
                    </Label>
                    <Textarea
                      id="services"
                      required
                      value={formData.services}
                      onChange={(e) => updateField("services", e.target.value)}
                      placeholder="Describe your products or services..."
                      rows={4}
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="pagesNeeded" className="text-zinc-300 mb-2 block">
                      Which pages do you need? *
                    </Label>
                    <Textarea
                      id="pagesNeeded"
                      required
                      value={formData.pagesNeeded}
                      onChange={(e) => updateField("pagesNeeded", e.target.value)}
                      placeholder="e.g., Home, About, Services, Contact, Booking, Gallery..."
                      rows={3}
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>

                  <div>
                    <Label className="text-zinc-300 mb-2 block">
                      Logo & Photos (Upload Here)
                    </Label>
                    <div className="space-y-4">
                      <label className="block border-2 border-dashed border-zinc-700 rounded-lg p-8 text-center hover:border-emerald-500/50 transition-colors cursor-pointer">
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <Upload className="h-8 w-8 text-zinc-500 mx-auto mb-3" />
                        <p className="text-zinc-400 mb-1">
                          Click to upload logo and photos
                        </p>
                        <p className="text-sm text-zinc-500">
                          (Transparent PNG for logo preferred. Max 10MB per file)
                        </p>
                      </label>

                      {uploadedFiles.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm text-zinc-400">
                            Uploaded files ({uploadedFiles.length}):
                          </p>
                          {uploadedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700"
                            >
                              <FileImage className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                              <span className="text-sm text-zinc-300 flex-1 truncate">
                                {file.name}
                              </span>
                              <span className="text-xs text-zinc-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </span>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="p-1 hover:bg-zinc-700 rounded transition-colors"
                              >
                                <X className="h-4 w-4 text-zinc-400 hover:text-red-400" />
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
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                    Design Preferences
                  </h2>

                  <div>
                    <Label htmlFor="sampleWebsites" className="text-zinc-300 mb-2 block">
                      Sample Websites You Like *
                    </Label>
                    <Textarea
                      id="sampleWebsites"
                      required
                      value={formData.sampleWebsites}
                      onChange={(e) => updateField("sampleWebsites", e.target.value)}
                      placeholder="Share URLs of websites whose style you love. This helps us understand your vision!"
                      rows={4}
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                    <p className="text-sm text-zinc-500 mt-2">
                      Include links and mention what you like about them
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo" className="text-zinc-300 mb-2 block">
                      Anything else we should know?
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => updateField("additionalInfo", e.target.value)}
                      placeholder="Special features, color preferences, specific requirements..."
                      rows={4}
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6">
                    <h3 className="font-semibold text-emerald-400 mb-2">
                      📧 What happens next?
                    </h3>
                    <ul className="text-sm text-zinc-300 space-y-2">
                      <li>• We'll review your information within 24 hours</li>
                      <li>• You'll receive an email to send your logo and photos</li>
                      <li>• We'll start building your custom website</li>
                      <li>• You'll get the complete codebase when it's ready</li>
                      <li>• Choose to manage it yourself or pick a support plan</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-10 pt-8 border-t border-zinc-800">
                {step > 1 ? (
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="border-zinc-700 text-white hover:bg-zinc-800"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                ) : (
                  <Link to="/">
                    <Button
                      type="button"
                      className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/50"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                )}

                {step < 4 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/50"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/50 disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                    <CheckCircle2 className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </form>
          </motion.div>

          {/* Why This Info? */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center text-zinc-500 text-sm"
          >
            <p>
              🔒 Your information is secure and will only be used to build your website.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}