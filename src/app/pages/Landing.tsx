import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import {
  Sparkles,
  Code,
  Zap,
  Shield,
  Rocket,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Real Web Designer, Not a Template",
    description: "Every website is custom-coded by a professional web developer — no drag-and-drop builders, no cookie-cutter themes",
  },
  {
    icon: Zap,
    title: "Faster Than Any Website Builder",
    description: "Hand-coded sites load faster than Wix, Squarespace, or WordPress — better for SEO and your customers",
  },
  {
    icon: Shield,
    title: "Secure & Backed Up",
    description: "Automated security monitoring and daily backups included with every managed plan",
  },
  {
    icon: Rocket,
    title: "Quick Turnaround",
    description: "Get your professional website designed and launched faster than you think",
  },
];

const benefits = [
  "100% custom web design tailored to your brand",
  "Mobile-responsive design for customers on-the-go",
  "Local SEO optimized to rank on Google",
  "Online booking & contact forms built-in",
  "Showcase your menu, services, or portfolio",
  "You own the complete codebase — no platform lock-in",
];

const stats = [
  { icon: Users, value: "50+", label: "Small Businesses Served" },
  { icon: TrendingUp, value: "100%", label: "Custom Built - No Templates" },
  { icon: Clock, value: "24hr", label: "Average Response Time" },
  { icon: Shield, value: "100%", label: "Made in Canada" },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://freesitecompany.com/#organization",
    name: "FreeSiteCompany",
    alternateName: "Free Site Company",
    url: "https://freesitecompany.com",
    telephone: "+1-604-849-8898",
    email: "freesitecompany@gmail.com",
    description: "Professional web designer and website builder for small businesses. We build custom-coded websites for free — no templates, no page builders. Hand-coded web design for restaurants, salons, contractors, clinics, and service businesses.",
    image: "https://freesitecompany.com/og-image.png",
    address: {
      "@type": "PostalAddress",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
    ],
    priceRange: "Free - $27.99/mo",
    knowsAbout: [
      "Web Design",
      "Web Development",
      "Custom Website Builder",
      "Small Business Websites",
      "Responsive Web Design",
      "SEO Optimization",
      "Website Hosting",
    ],
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FreeSiteCompany — Free Web Designer for Small Business",
    url: "https://freesitecompany.com",
    description: "Free custom web design and development for small businesses. Professional web designer offering hand-coded websites with no templates.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://freesitecompany.com/get-started",
      description: "Get started with your free custom website",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free Website Design & Development",
    serviceType: "Web Design",
    provider: {
      "@type": "Organization",
      name: "FreeSiteCompany",
      url: "https://freesitecompany.com",
    },
    description: "Professional web designer builds your small business website for free. Custom-coded, mobile-responsive web design with 2 rounds of revisions included. No templates, no website builders — real hand-coded development.",
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Free Custom Website Build",
            description: "Complete custom-coded website designed and built for free. Includes 2 revision rounds. You own the full codebase.",
          },
          price: "0",
          priceCurrency: "CAD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Hosting & Support — Starter",
            description: "Managed hosting, security monitoring, backups, and phone/email support for your website.",
          },
          price: "9.99",
          priceCurrency: "CAD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "9.99",
            priceCurrency: "CAD",
            unitText: "MONTH",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Hosting & Support — Growth",
            description: "Everything in Starter plus content updates, speed optimization, SEO hygiene, priority support, and monthly blog posting.",
          },
          price: "19.99",
          priceCurrency: "CAD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "19.99",
            priceCurrency: "CAD",
            unitText: "MONTH",
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a web designer cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At FreeSiteCompany, our web design service is completely free. We hand-code a custom website for your business at no cost. If you want ongoing hosting and support, plans start at $9.99/month.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a website built for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! FreeSiteCompany builds custom-coded websites for small businesses completely free. Unlike template-based website builders, every site is hand-coded by a real developer. You receive the full codebase and own it outright.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best website builder for small business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While drag-and-drop website builders like Wix or Squarespace are popular, they limit your control and performance. FreeSiteCompany offers a better alternative: a professional web designer builds your site with custom code for free. You get a faster, more flexible website that you fully own.",
        },
      },
      {
        "@type": "Question",
        name: "How do I find a web designer near me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FreeSiteCompany serves small businesses across Canada and the US remotely. You don't need a local web designer — we handle everything online. Fill out our simple form, and our team will design and build your custom website for free.",
        },
      },
      {
        "@type": "Question",
        name: "Do I own the website code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100%. Unlike most website builders that lock you into their platform, FreeSiteCompany gives you the complete source code. You can host it anywhere, modify it, or hand it to another developer.",
        },
      },
    ],
  },
];

export function Landing() {
  useEffect(() => {
    document.title = "Free Web Designer for Small Business | Custom Website Builder | FreeSiteCompany";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Looking for a web designer? Get a free custom-coded website for your small business. No templates, no page builders. Professional web design & development — hand-built by real developers. Restaurants, salons, contractors & more.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {structuredData.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8"
            >
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Limited Time Offer</span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              Need a{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                FREE*
              </span>{" "}
              Custom Built Website?
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed"
            >
              Skip the website builders. Get a professional web designer to hand-code your site — for free.
              <br />
              <span className="text-emerald-400 font-semibold">
                Perfect for restaurants, salons, contractors, clinics & service businesses.
              </span>{" "}
              You own the code. No platform lock-in. No monthly builder fees.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-sm text-zinc-500 mb-8 max-w-2xl mx-auto"
            >
              * We will build your website, then do 2 full rounds of revisions included
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/get-started"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all hover:scale-105 flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/plans"
                className="px-8 py-4 bg-zinc-800/50 border border-zinc-700 text-white rounded-lg font-semibold text-lg hover:bg-zinc-800 transition-all"
              >
                View Plans
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Hire Our Web Designers?
            </h2>
            <p className="text-xl text-zinc-400">
              Better than any website builder — real developers, real custom code
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 transition-all">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What's Included in Your{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Free Website
                </span>
              </h2>
              <p className="text-xl text-zinc-400 mb-8">
                No gimmicks. No hidden fees for the initial build. You get a fully
                functional, professional website completely free.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50 hover:border-emerald-500/50 transition-all"
                >
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple Process, Amazing Results
            </h2>
            <p className="text-xl text-zinc-400">
              Get your website in 3 easy steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Fill Out the Form",
                description: "Tell us about your business, style preferences, and what you need",
              },
              {
                step: "02",
                title: "We Build It",
                description: "Our team creates your custom website with modern design and technology",
              },
              {
                step: "03",
                title: "Launch & Decide",
                description: "Get your codebase OR choose a plan for hosting, updates, and support — starting at just $9.99/month, or $89/yr (special annual rate!)",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full text-3xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-lg">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Join hundreds of businesses who've already claimed their free website
          </p>
          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-bold text-xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all hover:scale-105"
          >
            Get Your Free Website Now
            <ArrowRight className="h-6 w-6" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}