import { Link } from "react-router";
import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Navigation() {
  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Logo className="h-10 w-10 transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-emerald-400/20 blur-xl group-hover:bg-emerald-400/30 transition-all" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            FreeSiteCompany
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          <a
            href="tel:+16048498898"
            className="hidden md:flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>(604) 849-8898</span>
          </a>
          <Link
            to="/plans"
            className="text-zinc-300 hover:text-white transition-colors"
          >
            Plans
          </Link>
          <Link
            to="/get-started"
            className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}