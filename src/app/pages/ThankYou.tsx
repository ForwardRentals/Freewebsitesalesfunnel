import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ReferralWidget } from "../components/ReferralWidget";
import { useReferral, ReferralStatus } from "../hooks/useReferral";
import {
  CheckCircle2,
  Mail,
  Clock,
  Sparkles,
  ArrowRight,
  Phone,
  Calendar,
} from "lucide-react";
import { Button } from "../components/ui/button";

export function ThankYou() {
  const { initReferral, getPendingEmail, clearPendingEmail } = useReferral();
  const [referralStatus, setReferralStatus] = useState<ReferralStatus | null>(null);

  useEffect(() => {
    document.title = "Thank You | FreeSiteCompany";

    const email = getPendingEmail();
    if (email) {
      initReferral(email).then((status) => {
        if (status) setReferralStatus(status);
        clearPendingEmail();
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1b1a17] selection:bg-[#166b45] selection:text-white">
      <Navigation />

      <div className="pt-24 sm:pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-[#166b45] rounded-full mb-8 relative"
            >
              <CheckCircle2 className="h-12 w-12 text-white" />
              <motion.div
                initial={{ scale: 1, opacity: 0.4 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                className="absolute inset-0 bg-[#166b45] rounded-full"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-5">
                Hey, we're so glad{" "}
                <span className="italic text-[#166b45]">you're here</span>
              </h1>
              <p className="text-xl text-[#1b1a17]/80 mb-4 max-w-lg mx-auto leading-relaxed">
                Seriously — thank you for trusting us with your business.
                We know how important your online presence is, and we can't
                wait to build something you'll be proud to show off.
              </p>
              <p className="text-[#6b675e] text-base max-w-md mx-auto">
                A real person from our team will reach out within 24 hours to
                learn more about your vision and get started. This is going to be great.
              </p>
            </motion.div>
          </motion.div>

          {/* What's Next */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="rounded-2xl border border-[#e7e1d6] bg-white shadow-sm p-8 md:p-12 mb-8 mt-12"
          >
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-6 flex items-center gap-2">
              <Clock className="h-6 w-6 text-[#166b45]" />
              What Happens Next?
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#166b45] text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Within 24 Hours</h3>
                  <p className="text-[#6b675e]">
                    We'll review your information and send you a confirmation email
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#166b45] text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Send Your Assets</h3>
                  <p className="text-[#6b675e]">
                    You'll receive an email with instructions to send us your logo
                    (transparent PNG preferred), photos, and any additional materials
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#166b45] text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">We Build Your Site</h3>
                  <p className="text-[#6b675e]">
                    Our team will create your custom website based on your
                    specifications and design preferences
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#166b45] text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Review & Launch</h3>
                  <p className="text-[#6b675e]">
                    You'll review the site, request any revisions, then receive your
                    complete codebase and choose your support option
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Important Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            <div className="bg-[#166b45]/[0.06] border border-[#166b45]/20 rounded-2xl p-6">
              <Mail className="h-8 w-8 text-[#166b45] mb-3" />
              <h3 className="font-semibold mb-2">Check Your Email</h3>
              <p className="text-sm text-[#6b675e]">
                We've sent a confirmation to your email address. If you don't see it,
                check your spam folder.
              </p>
            </div>

            <div className="bg-[#d7a04a]/10 border border-[#d7a04a]/30 rounded-2xl p-6">
              <Sparkles className="h-8 w-8 text-[#d7a04a] mb-3" />
              <h3 className="font-semibold mb-2">Prepare Your Materials</h3>
              <p className="text-sm text-[#6b675e]">
                Start gathering your logo, photos, and content. The more you provide,
                the better your website will be!
              </p>
            </div>
          </motion.div>

          {/* Referral Widget */}
          {referralStatus && (
            <ReferralWidget status={referralStatus} animationDelay={0.65} />
          )}

          {/* Contact & Schedule */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="rounded-2xl border border-[#e7e1d6] bg-[#fffefb] shadow-sm p-8 mb-8"
          >
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-6 text-center">
              Want to Talk? <span className="italic text-[#166b45]">Let's Connect!</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-[#e7e1d6] hover:border-[#166b45]/40 transition-all">
                <div className="w-16 h-16 bg-[#166b45]/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-[#166b45]" />
                </div>
                <h3 className="font-semibold mb-2">Call Us Directly</h3>
                <p className="text-sm text-[#6b675e] mb-4">
                  Available 7 days a week
                </p>
                <a
                  href="tel:+16048498898"
                  className="px-6 py-3 rounded-full bg-[#166b45] text-white font-semibold transition-all hover:bg-[#0f5434] hover:-translate-y-0.5"
                >
                  (604) 849-8898
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-[#e7e1d6] hover:border-[#166b45]/40 transition-all">
                <div className="w-16 h-16 bg-[#166b45]/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-[#166b45]" />
                </div>
                <h3 className="font-semibold mb-2">Schedule a Call</h3>
                <p className="text-sm text-[#6b675e] mb-4">
                  Book a 30-min consultation
                </p>
                <a
                  href="https://calendar.app.google/L4ok6TnfC8njfXXy6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#1b1a17] text-[#faf7f2] font-semibold transition-all hover:bg-black hover:-translate-y-0.5"
                >
                  Book Now
                </a>
              </div>
            </div>

            <p className="text-center text-[#6b675e] text-sm mt-6">
              Prefer to schedule? Use our calendar to pick a time that works for you!
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <Button
                className="rounded-full border border-[#1b1a17]/15 bg-white text-[#1b1a17] font-semibold transition-all hover:border-[#1b1a17]/40 hover:bg-white hover:-translate-y-0.5 h-10 px-6"
              >
                Back to Home
              </Button>
            </Link>
            <Link to="/plans">
              <Button className="rounded-full bg-[#166b45] text-white font-semibold transition-all hover:bg-[#0f5434] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(22,107,69,0.5)] h-10 px-6">
                View Our Plans
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center text-[#6b675e] text-sm mt-12 p-6 rounded-2xl border border-[#e7e1d6] bg-white"
          >
            <p className="mb-2">
              <strong className="text-[#166b45]">Questions?</strong> Feel free to
              reply to the confirmation email or contact us anytime.
            </p>
            <p>We typically respond within a few hours!</p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
