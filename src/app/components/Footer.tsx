import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-[#e7e1d6] bg-[#1b1a17] text-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <Logo dark />
            </Link>
            <p className="text-[#faf7f2]/60">
              A real web designer in Squamish, BC. Free custom website design
              & development — no templates, no website builders. You own the
              code. We handle the tech.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-[#faf7f2]/60 hover:text-[#7fc8a4] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/plans"
                  className="text-[#faf7f2]/60 hover:text-[#7fc8a4] transition-colors"
                >
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  to="/get-started"
                  className="text-[#faf7f2]/60 hover:text-[#7fc8a4] transition-colors"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-[#faf7f2]/60 hover:text-[#7fc8a4] transition-colors"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Free Websites For</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/free-website-for-small-business/"
                  className="text-[#faf7f2]/60 hover:text-[#7fc8a4] transition-colors"
                >
                  Websites by business type
                </a>
              </li>
              <li>
                <a
                  href="/free-website-for-restaurants/"
                  className="text-[#faf7f2]/60 hover:text-[#7fc8a4] transition-colors"
                >
                  Restaurants &amp; cafés
                </a>
              </li>
              <li>
                <a
                  href="/free-website-for-contractors/"
                  className="text-[#faf7f2]/60 hover:text-[#7fc8a4] transition-colors"
                >
                  Contractors &amp; builders
                </a>
              </li>
              <li>
                <a
                  href="/free-website-for-tour-operators/"
                  className="text-[#faf7f2]/60 hover:text-[#7fc8a4] transition-colors"
                >
                  Tours &amp; rentals
                </a>
              </li>
              <li>
                <a
                  href="/web-design-bc/"
                  className="text-[#faf7f2]/60 hover:text-[#7fc8a4] transition-colors"
                >
                  Web design across BC
                </a>
              </li>
              <li>
                <a
                  href="/web-design-squamish/"
                  className="text-[#faf7f2]/60 hover:text-[#7fc8a4] transition-colors"
                >
                  Web design in Squamish
                </a>
              </li>
              <li>
                <a
                  href="/web-design-whistler/"
                  className="text-[#faf7f2]/60 hover:text-[#7fc8a4] transition-colors"
                >
                  Web design in Whistler
                </a>
              </li>
              <li>
                <a
                  href="/web-design-vancouver/"
                  className="text-[#faf7f2]/60 hover:text-[#7fc8a4] transition-colors"
                >
                  Web design in Vancouver
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <address className="not-italic space-y-4">
              <a
                href="mailto:freesitecompanycanada@gmail.com"
                className="flex items-start gap-3 text-[#faf7f2]/60 hover:text-[#7fc8a4] transition-colors"
              >
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="break-all">
                  freesitecompanycanada@gmail.com
                </span>
              </a>
              <a
                href="tel:+16048498898"
                className="flex items-start gap-3 text-[#faf7f2]/60 hover:text-[#7fc8a4] transition-colors"
              >
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>(604) 849-8898</span>
              </a>
              <div className="flex items-start gap-3 text-[#faf7f2]/60">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#7fc8a4]" />
                <span>Squamish, BC — serving Canada & the US</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#faf7f2]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#faf7f2]/40 text-sm">
              © 2026 FreeSiteCompany. Building the web, one free site at a
              time. 100% Made in Canada.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-[#faf7f2]/40 hover:text-[#7fc8a4] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#faf7f2]/40 hover:text-[#7fc8a4] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[#faf7f2]/40 hover:text-[#7fc8a4] transition-colors"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
