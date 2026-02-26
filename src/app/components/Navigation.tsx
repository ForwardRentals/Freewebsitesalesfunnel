import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="relative">
            <Logo className="h-8 w-8 sm:h-10 sm:w-10 transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-emerald-400/20 blur-xl group-hover:bg-emerald-400/30 transition-all" />
          </div>
          <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            FreeSiteCompany
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+16048498898"
            className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors"
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
          <a
            href="https://calendar.app.google/L4ok6TnfC8njfXXy6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-emerald-400 transition-colors"
          >
            Book a Call
          </a>
          <Link
            to="/get-started"
            className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105"
          >
            Get Started Free
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/50 transition-all hover:scale-105 cursor-pointer">
              Subscribe Now
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-900 border-zinc-700 text-white">
              <DropdownMenuItem
                className="cursor-pointer focus:bg-zinc-800 focus:text-white"
                onSelect={() => window.open("https://buy.stripe.com/9B68wR5G48KK66qa841ck01", "_blank", "noopener,noreferrer")}
              >
                Monthly Plan
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer focus:bg-zinc-800 focus:text-white"
                onSelect={() => window.open("https://buy.stripe.com/14AbJ38Sg5yycuO9401ck02", "_blank", "noopener,noreferrer")}
              >
                Annual Plan — Save More!
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-zinc-800"
          >
            <div className="px-4 py-4 flex flex-col gap-4 bg-zinc-950/95 backdrop-blur-md">
              <a
                href="tel:+16048498898"
                className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(604) 849-8898</span>
              </a>
              <Link
                to="/plans"
                onClick={() => setMobileOpen(false)}
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Plans
              </Link>
              <a
                href="https://calendar.app.google/L4ok6TnfC8njfXXy6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                Book a Call
              </a>
              <Link
                to="/get-started"
                onClick={() => setMobileOpen(false)}
                className="inline-block text-center px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-semibold"
              >
                Get Started Free
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="inline-block text-center w-full px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-lg font-semibold cursor-pointer">
                  Subscribe Now
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-zinc-900 border-zinc-700 text-white">
                  <DropdownMenuItem
                    className="cursor-pointer focus:bg-zinc-800 focus:text-white"
                    onSelect={() => {
                      window.open("https://buy.stripe.com/9B68wR5G48KK66qa841ck01", "_blank", "noopener,noreferrer");
                      setMobileOpen(false);
                    }}
                  >
                    Monthly Plan
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer focus:bg-zinc-800 focus:text-white"
                    onSelect={() => {
                      window.open("https://buy.stripe.com/14AbJ38Sg5yycuO9401ck02", "_blank", "noopener,noreferrer");
                      setMobileOpen(false);
                    }}
                  >
                    Annual Plan — Save More!
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}