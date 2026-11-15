import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Logo } from "./Logo";

const subscribeLinks = [
  { label: "Starter, monthly", href: "https://buy.stripe.com/dRm5kFfgE3qq3Yi5RO1ck05" },
  { label: "Growth, monthly", href: "https://buy.stripe.com/dRm4gBecAf980M64NK1ck06" },
  { label: "Commerce, monthly", href: "https://buy.stripe.com/aFafZjgkI0eeamGfso1ck07" },
  { label: "Starter, annual (save more)", href: "https://buy.stripe.com/eVq5kFgkI0eedyS7ZW1ck08" },
  { label: "Growth, annual (save more)", href: "https://buy.stripe.com/aFa6oJ6K84uugL42FC1ck09" },
  { label: "Commerce, annual (save more)", href: "https://buy.stripe.com/28E3cxecAgdceCW2FC1ck0a" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f2]/85 backdrop-blur-md border-b border-[#e7e1d6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="group">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          <a
            href="tel:+16048498898"
            className="flex items-center gap-2 font-medium text-[#6b675e] hover:text-[#166b45] transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>(604) 849-8898</span>
          </a>
          <Link
            to="/plans"
            className="font-medium text-[#6b675e] hover:text-[#1b1a17] transition-colors"
          >
            Plans
          </Link>
          <Link
            to="/custom"
            className="font-medium text-[#6b675e] hover:text-[#1b1a17] transition-colors"
          >
            Custom Builds
          </Link>
          <Link
            to="/crm"
            className="font-medium text-[#6b675e] hover:text-[#1b1a17] transition-colors"
          >
            CRM
          </Link>
          <Link
            to="/domains"
            className="font-medium text-[#6b675e] hover:text-[#1b1a17] transition-colors"
          >
            Domains
          </Link>
          <a
            href="https://calendar.app.google/L4ok6TnfC8njfXXy6"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#6b675e] hover:text-[#1b1a17] transition-colors"
          >
            Book a Call
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="font-medium text-[#6b675e] hover:text-[#1b1a17] transition-colors cursor-pointer">
              Subscribe
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-[#e7e1d6] text-[#1b1a17]">
              {subscribeLinks.map((l) => (
                <DropdownMenuItem
                  key={l.href}
                  className="cursor-pointer focus:bg-[#faf7f2]"
                  onSelect={() => window.open(l.href, "_blank", "noopener,noreferrer")}
                >
                  {l.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            to="/get-started"
            className="rounded-full bg-[#166b45] px-6 py-2.5 font-semibold text-white transition-all hover:bg-[#0f5434] hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#1b1a17]"
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
            className="md:hidden overflow-hidden border-t border-[#e7e1d6]"
          >
            <div className="px-4 py-4 flex flex-col gap-4 bg-[#faf7f2]/95 backdrop-blur-md">
              <a
                href="tel:+16048498898"
                className="flex items-center gap-2 font-medium text-[#6b675e]"
              >
                <Phone className="h-4 w-4" />
                <span>(604) 849-8898</span>
              </a>
              <Link
                to="/plans"
                onClick={() => setMobileOpen(false)}
                className="font-medium text-[#6b675e]"
              >
                Plans
              </Link>
              <Link
                to="/custom"
                onClick={() => setMobileOpen(false)}
                className="font-medium text-[#6b675e]"
              >
                Custom Builds
              </Link>
              <Link
                to="/crm"
                onClick={() => setMobileOpen(false)}
                className="font-medium text-[#6b675e]"
              >
                CRM
              </Link>
              <Link
                to="/domains"
                onClick={() => setMobileOpen(false)}
                className="font-medium text-[#6b675e]"
              >
                Domains
              </Link>
              <a href="/add-ons/" className="font-medium text-[#6b675e]">
                Add-ons
              </a>
              <a
                href="https://calendar.app.google/L4ok6TnfC8njfXXy6"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#6b675e]"
              >
                Book a Call
              </a>
              {subscribeLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#6b675e]"
                >
                  Subscribe: {l.label}
                </a>
              ))}
              <Link
                to="/get-started"
                onClick={() => setMobileOpen(false)}
                className="inline-block text-center rounded-full bg-[#166b45] px-6 py-3 font-semibold text-white"
              >
                Get Started Free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
