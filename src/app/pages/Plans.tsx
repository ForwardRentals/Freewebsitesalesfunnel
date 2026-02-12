import { Link } from "react-router";
import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Headphones,
  TrendingUp,
  FileCode,
  Mail,
  Clock,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "../components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$9.99",
    priceDetail: "for first 3 months",
    regularPrice: "$13.99/mo after",
    annualPrice: "$89/year",
    annualNote: "(Special rate - save $78!)",
    color: "emerald",
    icon: Zap,
    badge: "Launch Special",
    description: "Everything you need to get online",
    features: [
      "Free website build (2 revisions included)",
      "Website hosting + domain hosting",
      "Security monitoring & automated backups",
      "Basic performance monitoring",
      "Phone & email support",
    ],
    bestFor: "Solo operators, portfolios, simple service sites",
  },
  {
    name: "Growth",
    price: "$19.99",
    priceDetail: "for first 3 months",
    regularPrice: "$27.99/mo after",
    annualPrice: "$199/year",
    annualNote: "(Special rate - save $136!)",
    color: "cyan",
    icon: TrendingUp,
    badge: "Most Popular",
    description: "For businesses that expect updates and improvements",
    features: [
      "Everything in Starter, plus:",
      "Free website build (3 revisions included)",
      "Minor content changes included",
      "Speed optimization",
      "Monthly site health check & fixes",
      "Plugin / CMS updates",
      "Priority support",
      "Light SEO hygiene (metadata, broken links)",
      "1 blog post per month (pre-written by you with imagery)",
    ],
    bestFor: "Local businesses, clinics, service providers",
  },
];

const additionalServices = [
  {
    icon: FileCode,
    title: "Custom Development",
    price: "$35/hour",
    description: "Advanced features, new pages, custom integrations, e-commerce, booking systems, major redesigns",
  },
  {
    icon: Mail,
    title: "Custom Email Address",
    price: "$15/month",
    description: "Professional email with your domain (e.g., you@yourbusiness.com)",
  },
  {
    icon: Headphones,
    title: "One-Time Setup Package",
    price: "$399",
    description: "5 hours of dedicated help to set everything up for you to manage on your own",
  },
];

const promotions = [
  {
    icon: Sparkles,
    title: "Refer & Earn",
    description: "Get 1 month free for every business you refer that signs up!",
    link: "https://freesitecompany.com/refer?code=YOUR_UNIQUE_CODE",
    buttonText: "Get Your Referral Link",
  },
  {
    icon: Star,
    title: "Annual Discount",
    description: "Pay annually and save big! Starter: $89/yr, Growth: $199/yr",
    link: "/plans#annual",
    buttonText: "View Annual Plans",
  },
  {
    icon: Clock,
    title: "First Month Free",
    description: "Try any plan risk-free for 30 days",
    link: "/get-started",
    buttonText: "Start Free Trial",
  },
];

export function Plans() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navigation />

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">
                Simple, Transparent Pricing
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Support Plan
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Start with a free website build, then choose a plan if you want hosting,
              updates, and support. Perfect for small businesses ready to grow online!
            </p>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${
                  plan.badge ? "lg:scale-105" : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold rounded-full">
                      {plan.badge}
                    </div>
                  </div>
                )}
                
                <div
                  className={`relative h-full bg-zinc-900/50 border-2 rounded-2xl p-8 hover:border-${plan.color}-500/50 transition-all ${
                    plan.badge
                      ? `border-${plan.color}-500/50`
                      : "border-zinc-800"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-3 bg-gradient-to-br from-${plan.color}-500/20 to-${plan.color}-600/20 rounded-xl`}
                      >
                        <plan.icon className={`h-6 w-6 text-${plan.color}-400`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <p className="text-zinc-400 text-sm">{plan.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                        <span className="text-zinc-400">/month</span>
                      </div>
                      {plan.priceDetail && (
                        <p className="text-sm text-zinc-400">
                          {plan.priceDetail}
                        </p>
                      )}
                      {plan.regularPrice && (
                        <p className="text-sm text-zinc-400">
                          Regular price: {plan.regularPrice}
                        </p>
                      )}
                      {plan.annualPrice && (
                        <p className="text-sm text-zinc-400">
                          Annual price: {plan.annualPrice} {plan.annualNote}
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-zinc-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-6 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                      <p className="text-sm text-zinc-400">
                        <strong className="text-emerald-400">Best for:</strong>{" "}
                        {plan.bestFor}
                      </p>
                    </div>

                    <Link to="/get-started">
                      <Button
                        className={`w-full bg-gradient-to-r from-${plan.color}-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-${plan.color}-500/50`}
                      >
                        Get Started Free
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Additional Services
            </h2>
            <p className="text-center text-zinc-400 mb-10">
              Need something extra? We've got you covered
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all"
                >
                  <service.icon className="h-10 w-10 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                    {service.price}
                  </div>
                  <p className="text-zinc-400 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Promotions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Special Promotions
            </h2>
            <p className="text-center text-zinc-400 mb-10">
              Save even more with these exclusive offers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {promotions.map((promo, index) => (
                <motion.div
                  key={promo.title}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full mb-4">
                      <promo.icon className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{promo.title}</h3>
                    <p className="text-zinc-400 text-sm">{promo.description}</p>
                    <Link to={promo.link}>
                      <Button className="mt-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all">
                        {promo.buttonText}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ / Info Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-500/5 border border-zinc-800 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              Got Questions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-300">
              <div>
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  Is the website build really free?
                </h3>
                <p className="text-sm text-zinc-400">
                  Yes! We build your website at no cost. You'll receive the complete
                  codebase. Monthly plans are only if you want hosting, support, and
                  ongoing updates.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  Can I manage it myself?
                </h3>
                <p className="text-sm text-zinc-400">
                  Absolutely! We can write the code for any hosting provider you need
                  (Vercel, Netlify, AWS, etc.). If you already know how to deploy and
                  manage sites, perfect! If not, we'll show you exactly how to do it.
                  Our $399 one-time setup package includes 5 hours of hands-on training
                  to get you fully comfortable managing everything independently.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  What if I need more revisions?
                </h3>
                <p className="text-sm text-zinc-400">
                  Additional revisions and custom work are billed at $35/hour. We'll
                  always get your approval before doing any paid work.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  Can I cancel anytime?
                </h3>
                <p className="text-sm text-zinc-400">
                  Yes! No long-term contracts. You can cancel your monthly plan
                  anytime and keep your website code. No questions asked.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <Link to="/get-started">
              <Button className="px-10 py-6 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-lg hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}