import { Link } from "react-router";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-zinc-400 mb-6">
              Professional web designer for small businesses. Free custom website design &
              development — no templates, no website builders. You own the code. We handle the tech.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-800 rounded-lg hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-800 rounded-lg hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-800 rounded-lg hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-800 rounded-lg hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/get-started" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Web Design Services</h3>
            <ul className="space-y-3">
              <li className="text-zinc-400">Free Custom Website Design</li>
              <li className="text-zinc-400">Small Business Web Development</li>
              <li className="text-zinc-400">Mobile-Responsive Web Design</li>
              <li className="text-zinc-400">Website Hosting & Management</li>
              <li className="text-zinc-400">SEO & Google Optimization</li>
              <li className="text-zinc-400">Custom Email Setup</li>
              <li className="text-zinc-400">Ongoing Website Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Get In Touch</h3>
            <address className="not-italic space-y-4">
              <div>
                <a
                  href="mailto:freesitecompanycanada@gmail.com"
                  className="flex items-start gap-3 text-zinc-400 hover:text-emerald-400 transition-colors group"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 group-hover:text-emerald-400" />
                  <span className="break-all">freesitecompanycanada@gmail.com</span>
                </a>
              </div>
              <div>
                <a
                  href="tel:+16048498898"
                  className="flex items-start gap-3 text-zinc-400 hover:text-emerald-400 transition-colors group"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 group-hover:text-emerald-400" />
                  <span>(604) 849-8898</span>
                </a>
              </div>
              <div className="flex items-start gap-3 text-zinc-400">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                <span>Serving Small Businesses Everywhere</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © 2026 FreeSiteCompany. Building the web, one free site at a time. 100% Made in Canada.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
