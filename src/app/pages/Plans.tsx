import { useEffect } from "react";
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
  Sparkles,
  Star,
  ShoppingCart,
  Camera,
  Film,
  Search,
  Rocket,
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
    featured: false,
    icon: Zap,
    badge: "Launch Special",
    description: "Everything you need to get online",
    features: [
      "Free website build (2 revisions included)",
      "Website hosting + domain hosting",
      "Security monitoring & automated backups",
      "Basic performance monitoring",
      "Phone & email support",
      "Small 'Built by FreeSiteCompany.com' footer credit on your site",
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
    featured: true,
    icon: TrendingUp,
    badge: "Most Popular",
    description: "For businesses that expect updates and improvements",
    features: [
      "Everything in Starter, plus:",
      "Free website build (3 revisions included)",
      "No FreeSiteCompany.com branding — it's 100% yours",
      "Custom email address included (you@yourbusiness.com)",
      "Minor content changes included",
      "Speed optimization",
      "Advanced analytics & conversion tracking",
      "Monthly site health check & fixes",
      "Plugin / CMS updates",
      "Priority support",
      "Light SEO hygiene (metadata, broken links)",
      "1 blog post per month (pre-written by you with imagery)",
    ],
    bestFor: "Local businesses, clinics, service providers",
  },
  {
    name: "Commerce",
    price: "$49",
    priceDetail: "per month",
    regularPrice: null,
    annualPrice: "$449/year",
    annualNote: "(Save $139/year!)",
    featured: false,
    icon: ShoppingCart,
    badge: "E-Commerce Ready",
    description: "Built for businesses that sell online",
    features: [
      "Everything in Growth, plus:",
      "No FreeSiteCompany.com branding — it's 100% yours",
      "Full e-commerce store (products, cart, checkout)",
      "Payment gateway integration (Stripe / PayPal)",
      "Order management & inventory tracking",
      "Custom back-end / admin dashboard",
      "Custom email address included (you@yourbusiness.com)",
      "Advanced analytics & conversion tracking",
      "Abandoned cart recovery setup",
      "Dedicated account manager",
    ],
    bestFor: "Online stores, product businesses, retail & D2C brands",
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
    description: "For Starter plan clients — add a professional email with your domain (e.g., you@yourbusiness.com). Included free with Growth & Commerce plans.",
  },
  {
    icon: Headphones,
    title: "One-Time Setup Package",
    price: "$399",
    description: "5 hours of dedicated help to set everything up for you to manage on your own",
  },
  {
    icon: Camera,
    title: "Photography Services",
    price: "Custom quote",
    description: "Professional business photography — headshots, product shots, location & interior photography to make your website and brand look world-class",
  },
  {
    icon: Film,
    title: "Videography Services",
    price: "Custom quote",
    description: "Brand videos, promo reels, social media content, and business storytelling — everything you need to capture attention and convert customers",
  },
  {
    icon: Search,
    title: "Custom SEO Campaign",
    price: "Custom quote",
    description: "Full-service SEO strategy tailored to your business — keyword research, on-page optimization, link building, local SEO, and monthly reporting to grow your rankings over time",
  },
];

const promotions = [
  {
    icon: Sparkles,
    title: "Refer & Save",
    description: "Refer a friend who signs up and get $1 off your monthly plan every month for a full year — that's up to $12 back per referral. Stack multiple referrals for even more savings.",
    link: "https://freesitecompany.com/refer?code=YOUR_UNIQUE_CODE",
    buttonText: "Get Your Referral Link",
  },
  {
    icon: Star,
    title: "Annual Discount",
    description: "Pay annually and save big! Starter: $89/yr, Growth: $199/yr, Commerce: $449/yr",
    link: "/plans#annual",
    buttonText: "View Annual Plans",
  },
  {
    icon: Rocket,
    title: "Free Boosted SEO",
    description: "Fill out the form in February and we'll include a free boosted SEO package with your website build — extra keyword targeting, meta optimization, and local SEO setup at no charge.",
    link: "/get-started",
    buttonText: "Claim Free SEO Boost",
  },
];

export function Plans() {
  useEffect(() => {
    document.title = "Web Design Pricing — Free Website Build + Affordable Plans | FreeSiteCompany";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Affordable web design pricing for small businesses. Free custom website build included. Hosting & support from $9.99/mo. No contracts, no hidden fees. Compare to hiring a web designer or using a website builder.");
    }
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the website build really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We build your website at no cost. You'll receive the complete codebase. Monthly plans are only if you want hosting, support, and ongoing updates.",
        },
      },
      {
        "@type": "Question",
        name: "Can I manage it myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We can write the code for any hosting provider you need (Vercel, Netlify, AWS, etc.). If you already know how to deploy and manage sites, perfect! If not, we'll show you exactly how to do it. Our $399 one-time setup package includes 5 hours of hands-on training.",
        },
      },
      {
        "@type": "Question",
        name: "What if I need more revisions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Additional revisions and custom work are billed at $35/hour. We'll always get your approval before doing any paid work.",
        },
      },
      {
        "@type": "Question",
        name: "Can I cancel anytime?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! No long-term contracts. You can cancel your monthly plan anytime and keep your website code. No questions asked.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1b1a17] selection:bg-[#166b45] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />

      <div className="pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e1d6] bg-white px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-[#166b45]" />
              <span className="text-sm font-medium text-[#6b675e]">
                Simple, Transparent Pricing
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4 sm:mb-6">
              Choose Your{" "}
              <span className="italic text-[#166b45]">Support Plan</span>
            </h1>
            <p className="text-base sm:text-xl text-[#6b675e] max-w-2xl mx-auto">
              Start with a free website build, then choose a plan if you want hosting,
              updates, and support. Perfect for small businesses ready to grow online!
            </p>
          </motion.div>

          {/* Satisfaction Guarantee Banner */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12 p-6 sm:p-8 rounded-2xl border border-[#166b45]/20 bg-[#166b45]/[0.05] text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Shield className="h-6 w-6 text-[#166b45] flex-shrink-0" />
              <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-tight">
                You Pay Nothing Until You're Satisfied
              </h2>
            </div>
            <p className="text-[#6b675e] max-w-2xl mx-auto text-sm sm:text-base">
              We build your website first. You review it, request changes, and only start paying once you love what you see. No credit card required upfront — zero risk to you.
            </p>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${
                  plan.featured ? "lg:scale-105" : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`px-4 py-1 text-sm font-bold rounded-full ${
                        plan.featured
                          ? "bg-[#d7a04a] text-[#1b1a17]"
                          : "border border-[#e7e1d6] bg-white text-[#6b675e]"
                      }`}
                    >
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div
                  className={`relative h-full rounded-2xl p-8 transition-all ${
                    plan.featured
                      ? "bg-[#166b45] text-white shadow-[0_28px_70px_-24px_rgba(22,107,69,0.55)]"
                      : "bg-white border border-[#e7e1d6] shadow-sm hover:border-[#166b45]/40 hover:-translate-y-1"
                  }`}
                >
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-3 rounded-xl ${
                          plan.featured ? "bg-white/10" : "bg-[#166b45]/10"
                        }`}
                      >
                        <plan.icon
                          className={`h-6 w-6 ${
                            plan.featured ? "text-[#7fc8a4]" : "text-[#166b45]"
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-tight">
                          {plan.name}
                        </h3>
                        <p
                          className={`text-sm ${
                            plan.featured ? "text-white/70" : "text-[#6b675e]"
                          }`}
                        >
                          {plan.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span
                          className={`font-display text-5xl font-semibold tracking-tight ${
                            plan.featured ? "text-white" : "text-[#166b45]"
                          }`}
                        >
                          {plan.price}
                        </span>
                        <span
                          className={
                            plan.featured ? "text-white/60" : "text-[#6b675e]"
                          }
                        >
                          /month
                        </span>
                      </div>
                      {plan.priceDetail && (
                        <p
                          className={`text-sm ${
                            plan.featured ? "text-white/70" : "text-[#6b675e]"
                          }`}
                        >
                          {plan.priceDetail}
                        </p>
                      )}
                      {plan.regularPrice && (
                        <p
                          className={`text-sm ${
                            plan.featured ? "text-white/70" : "text-[#6b675e]"
                          }`}
                        >
                          Regular price: {plan.regularPrice}
                        </p>
                      )}
                      {plan.annualPrice && (
                        <p
                          className={`text-sm ${
                            plan.featured ? "text-white/70" : "text-[#6b675e]"
                          }`}
                        >
                          Annual price: {plan.annualPrice} {plan.annualNote}
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                              plan.featured ? "text-[#7fc8a4]" : "text-[#166b45]"
                            }`}
                          />
                          <span
                            className={
                              plan.featured
                                ? "text-white/85"
                                : "text-[#1b1a17]/80"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`mb-6 p-4 rounded-lg border ${
                        plan.featured
                          ? "bg-white/10 border-white/15"
                          : "bg-[#faf7f2] border-[#e7e1d6]"
                      }`}
                    >
                      <p
                        className={`text-sm ${
                          plan.featured ? "text-white/80" : "text-[#6b675e]"
                        }`}
                      >
                        <strong
                          className={
                            plan.featured ? "text-[#ffd98e]" : "text-[#166b45]"
                          }
                        >
                          Best for:
                        </strong>{" "}
                        {plan.bestFor}
                      </p>
                    </div>

                    <Link to="/get-started">
                      <Button
                        className={`w-full h-11 rounded-full font-semibold transition-all hover:-translate-y-0.5 ${
                          plan.featured
                            ? "bg-white text-[#166b45] hover:bg-[#faf7f2]"
                            : "bg-[#166b45] text-white hover:bg-[#0f5434] hover:shadow-[0_12px_40px_-8px_rgba(22,107,69,0.5)]"
                        }`}
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
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
              Additional <span className="italic text-[#166b45]">Services</span>
            </h2>
            <p className="text-center text-[#6b675e] mb-10">
              Need something extra? We've got you covered
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-[#e7e1d6] bg-white p-6 shadow-sm transition-all hover:border-[#166b45]/40 hover:-translate-y-1"
                >
                  <service.icon className="h-10 w-10 text-[#166b45] mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <div className="font-display text-2xl font-semibold text-[#166b45] mb-3">
                    {service.price}
                  </div>
                  <p className="text-[#6b675e] text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Promotions */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
              Special <span className="italic text-[#166b45]">Promotions</span>
            </h2>
            <p className="text-center text-[#6b675e] mb-10">
              Save even more with these exclusive offers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {promotions.map((promo, index) => (
                <motion.div
                  key={promo.title}
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-[#e7e1d6] bg-white p-6 text-center shadow-sm transition-all hover:border-[#166b45]/40 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#166b45]/10 mb-4">
                    <promo.icon className="h-8 w-8 text-[#166b45]" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-[#6b675e] text-sm">{promo.description}</p>
                  <Link to={promo.link}>
                    <Button className="mt-4 rounded-full bg-[#166b45] px-5 text-sm font-semibold text-white transition-all hover:bg-[#0f5434] hover:-translate-y-0.5">
                      {promo.buttonText}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ / Info Section */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#e7e1d6] bg-[#fffefb] p-8 md:p-12 shadow-sm"
          >
            <h2 className="font-display text-3xl font-semibold tracking-tight mb-6 text-center">
              Fair questions,{" "}
              <span className="italic text-[#166b45]">honest answers</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-[#1b1a17] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#166b45]" />
                  Is the website build really free?
                </h3>
                <p className="text-sm text-[#6b675e] leading-relaxed">
                  Yes! We build your website at no cost. You'll receive the complete
                  codebase. Monthly plans are only if you want hosting, support, and
                  ongoing updates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1b1a17] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#166b45]" />
                  Can I manage it myself?
                </h3>
                <p className="text-sm text-[#6b675e] leading-relaxed">
                  Absolutely! We can write the code for any hosting provider you need
                  (Vercel, Netlify, AWS, etc.). If you already know how to deploy and
                  manage sites, perfect! If not, we'll show you exactly how to do it.
                  Our $399 one-time setup package includes 5 hours of hands-on training
                  to get you fully comfortable managing everything independently.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1b1a17] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#166b45]" />
                  What if I need more revisions?
                </h3>
                <p className="text-sm text-[#6b675e] leading-relaxed">
                  Additional revisions and custom work are billed at $35/hour. We'll
                  always get your approval before doing any paid work.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1b1a17] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#166b45]" />
                  Can I cancel anytime?
                </h3>
                <p className="text-sm text-[#6b675e] leading-relaxed">
                  Yes! No long-term contracts. You can cancel your monthly plan
                  anytime and keep your website code. No questions asked.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Ready to <span className="italic text-[#166b45]">get started</span>?
            </h2>
            <Link to="/get-started">
              <Button className="px-10 py-6 rounded-full bg-[#166b45] text-white text-lg font-semibold transition-all hover:bg-[#0f5434] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(22,107,69,0.5)]">
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
