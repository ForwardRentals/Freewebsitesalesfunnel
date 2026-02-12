import { Link } from "react-router";
import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import {
  CheckCircle2,
  Mail,
  Clock,
  Sparkles,
  ArrowRight,
  PartyPopper,
  Phone,
  Calendar,
} from "lucide-react";
import { Button } from "../components/ui/button";

export function ThankYou() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navigation />

      <div className="pt-24 pb-20 px-6">
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
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full mb-8 relative"
            >
              <CheckCircle2 className="h-12 w-12 text-white" />
              <motion.div
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                className="absolute inset-0 bg-emerald-500 rounded-full"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                You're All Set!{" "}
                <PartyPopper className="inline-block h-12 w-12 text-emerald-400" />
              </h1>
              <p className="text-xl text-zinc-400 mb-12">
                We've received your request and are excited to build your website!
              </p>
            </motion.div>
          </motion.div>

          {/* What's Next */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock className="h-6 w-6 text-emerald-400" />
              What Happens Next?
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-2">Within 24 Hours</h3>
                  <p className="text-zinc-400">
                    We'll review your information and send you a confirmation email
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-2">Send Your Assets</h3>
                  <p className="text-zinc-400">
                    You'll receive an email with instructions to send us your logo
                    (transparent PNG preferred), photos, and any additional materials
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-2">We Build Your Site</h3>
                  <p className="text-zinc-400">
                    Our team will create your custom website based on your
                    specifications and design preferences
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold mb-2">Review & Launch</h3>
                  <p className="text-zinc-400">
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
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
              <Mail className="h-8 w-8 text-emerald-400 mb-3" />
              <h3 className="font-bold mb-2">Check Your Email</h3>
              <p className="text-sm text-zinc-400">
                We've sent a confirmation to your email address. If you don't see it,
                check your spam folder.
              </p>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
              <Sparkles className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="font-bold mb-2">Prepare Your Materials</h3>
              <p className="text-sm text-zinc-400">
                Start gathering your logo, photos, and content. The more you provide,
                the better your website will be!
              </p>
            </div>
          </motion.div>

          {/* Contact & Schedule */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-2xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Want to Talk? Let's Connect!
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-emerald-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="font-bold mb-2">Call Us Directly</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Available 7 days a week
                </p>
                <a
                  href="tel:+16048498898"
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                >
                  (604) 849-8898
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-cyan-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="font-bold mb-2">Schedule a Call</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Book a 30-min consultation
                </p>
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  Book Now
                </a>
              </div>
            </div>

            <p className="text-center text-zinc-500 text-sm mt-6">
              💡 Prefer to schedule? Use our calendar to pick a time that works for you!
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
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800"
              >
                Back to Home
              </Button>
            </Link>
            <Link to="/plans">
              <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/50">
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
            className="text-center text-zinc-500 text-sm mt-12 p-6 bg-zinc-900/30 rounded-lg border border-zinc-800"
          >
            <p className="mb-2">
              <strong className="text-emerald-400">Questions?</strong> Feel free to
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