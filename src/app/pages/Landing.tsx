import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Globe } from "../components/Globe";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Phone,
  Plus,
  Camera,
  Film,
  Megaphone,
} from "lucide-react";

/* ------------------------------------------------------------------ data */

const showcase = [
  {
    name: "Squamish Water Taxi",
    domain: "squamishwatertaxi.com",
    url: "https://squamishwatertaxi.com",
    tag: "Marine charter",
    img: "/portfolio/card-squamishwatertaxi.jpg",
    from: "#0b3954",
    to: "#1d7fa3",
  },
  {
    name: "Squamish Canoe Rental",
    domain: "squamishcanoerental.com",
    url: "https://squamishcanoerental.com",
    tag: "Rentals & tours",
    img: "/portfolio/card-squamishcanoerental.jpg",
    from: "#22262b",
    to: "#4a5560",
  },
  {
    name: "Sea to Sky Trails",
    domain: "seatoskytrails.com",
    url: "https://seatoskytrails.com",
    tag: "Outdoor guide",
    img: "/portfolio/card-seatoskytrails.jpg",
    from: "#1f4a2e",
    to: "#5a8f5f",
  },
  {
    name: "The Full Time Hobby",
    domain: "thefulltimehobby.com",
    url: "https://thefulltimehobby.com",
    tag: "Photo & video",
    img: "/portfolio/card-thefulltimehobby.jpg",
    from: "#3b2a4f",
    to: "#7e5aa2",
  },
  {
    name: "Jack Dobson Fine Art",
    domain: "jdobsonfineart.com",
    url: "https://jdobsonfineart.com",
    tag: "Artist portfolio",
    img: "/portfolio/card-jdobsonfineart.jpg",
    from: "#5c2018",
    to: "#a44a3f",
  },
  {
    name: "The Endless Passport",
    domain: "endlesspassport.com",
    url: "https://endlesspassport.com",
    tag: "Travel",
    img: "/portfolio/card-endlesspassport.jpg",
    from: "#274060",
    to: "#7da2c1",
  },
];

const included = [
  "100% custom design — never a template",
  "Hand-coded, loads in under a second",
  "Mobile-first, looks perfect on every phone",
  "Local SEO: structured data, meta tags, sitemap",
  "Online booking & contact forms built in",
  "Google Analytics & pixel-ready from day one",
  "Smooth animations & interactive touches",
  "You own the complete codebase — forever",
];

const steps = [
  {
    step: "1",
    title: "Tell me about your business",
    description:
      "A five-minute form. What you do, who your customers are, the vibe you want. That's it.",
  },
  {
    step: "2",
    title: "I build your site — free",
    description:
      "A fully custom, hand-coded website. Two full rounds of revisions included, no invoice in sight.",
  },
  {
    step: "3",
    title: "Love it, then decide",
    description:
      "See the finished site before you pay a cent. Keep the code outright, or let me host and maintain it from $9.99/month.",
  },
];

const faqs = [
  {
    q: "How is this actually free?",
    a: "Simple math: I'd rather earn $9.99 a month from a hundred happy local businesses than charge one of them $5,000 up front. I build your site free, and if you love it, you stay for the hosting and support. If you don't, you walk away owing nothing.",
  },
  {
    q: "Is there a catch?",
    a: "No. The build is free and includes two full rounds of revisions. You only ever pay if you choose a hosting plan ($9.99/month) — and there's no contract, so you can leave any time and take your code with you.",
  },
  {
    q: "Do I own the website?",
    a: "100%. Unlike Wix or Squarespace, you get the complete source code. Host it anywhere, edit it, or hand it to another developer — it's yours.",
  },
  {
    q: "How fast will it be live?",
    a: "Most sites are designed, built, and launched within days, not months. You'll see a live preview link while I work.",
  },
  {
    q: "What kinds of businesses do you build for?",
    a: "Restaurants, salons, contractors, clinics, guides, rental companies, personal brands — any small business that needs to look great online. Based in Squamish, BC, serving all of Canada and the US.",
  },
];

/* ----------------------------------------------------- structured data --- */

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://freesitecompany.com/#organization",
    name: "FreeSiteCompany",
    alternateName: "Free Site Company",
    url: "https://freesitecompany.com",
    telephone: "+1-604-849-8898",
    email: "freesitecompanycanada@gmail.com",
    description:
      "Professional web designer and website builder for small businesses. We build custom-coded websites for free — no templates, no page builders. Hand-coded web design for restaurants, salons, contractors, clinics, and service businesses.",
    image: "https://freesitecompany.com/og-image.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Squamish",
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
    description:
      "Free custom web design and development for small businesses. Professional web designer offering hand-coded websites with no templates.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://freesitecompany.com/get-started",
      description: "Get started with your free custom website",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

/* -------------------------------------------------------------- helpers */

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: 32, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.6, 0.35, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* Fictional mini-sites the hero browser flicks through — pure CSS mockups. */
const heroMockups = [
  {
    domain: "timberandstone.ca",
    kind: "contractor" as const,
    bg: "#23201c",
    accent: "#d7a04a",
    name: "TIMBER & STONE",
    tagline: "Custom homes, built right.",
    sub: "Squamish · Licensed & insured",
    cta: "Get a quote",
  },
  {
    domain: "thecopperkettle.ca",
    kind: "cafe" as const,
    bg: "#f7f1e7",
    accent: "#b4552d",
    name: "The Copper Kettle",
    tagline: "Slow mornings, good coffee.",
    sub: "Open daily 7am – 4pm",
    cta: "See the menu",
  },
  {
    domain: "alpineglowspa.ca",
    kind: "spa" as const,
    bg: "#eef0ea",
    accent: "#5f7d62",
    name: "Alpine Glow",
    tagline: "Take an hour for yourself.",
    sub: "Massage · Facials · Sauna",
    cta: "Book now",
  },
  {
    domain: "summitphysio.ca",
    kind: "physio" as const,
    bg: "#101d2c",
    accent: "#6db3d6",
    name: "SUMMIT PHYSIO",
    tagline: "Move like yourself again.",
    sub: "Direct billing · Same-week visits",
    cta: "Book assessment",
  },
];

function HeroBrowser() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setI((v) => (v + 1) % heroMockups.length),
      3600,
    );
    return () => clearInterval(id);
  }, []);
  const site = heroMockups[i % heroMockups.length];
  const dark = site.kind === "contractor" || site.kind === "physio";
  const ink = dark ? "#ffffff" : "#26231e";
  const soft = dark ? "rgba(255,255,255,0.65)" : "rgba(38,35,30,0.6)";
  const card = dark ? "rgba(255,255,255,0.08)" : "rgba(38,35,30,0.06)";

  return (
    <div className="relative">
      <motion.div
        initial={{ y: 40, opacity: 0, rotate: 1.5 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.9, ease: [0.21, 0.6, 0.35, 1] }}
        className="rounded-2xl border border-[#e7e1d6] bg-white shadow-[0_24px_80px_-24px_rgba(27,26,23,0.25)] overflow-hidden"
      >
        {/* chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#efe9de] bg-[#fffefb]">
          <span className="h-3 w-3 rounded-full bg-[#f4b8ae]" />
          <span className="h-3 w-3 rounded-full bg-[#f3d9a4]" />
          <span className="h-3 w-3 rounded-full bg-[#b7d9b9]" />
          <AnimatePresence mode="wait">
            <motion.div
              key={site.domain}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="ml-3 flex-1 rounded-md bg-[#f4f0e8] px-3 py-1 text-xs text-[#6b675e] font-medium truncate"
            >
              {site.domain}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* beautiful fictional mockup — crossfade only, no zoom */}
        <div className="aspect-[16/10] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={site.domain + "-page"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0 flex flex-col p-5 sm:p-7"
              style={{ background: site.bg, color: ink }}
            >
              {/* mock nav */}
              <div className="flex items-center justify-between mb-auto">
                <span
                  className={
                    "text-[11px] sm:text-xs font-bold tracking-[0.18em] " +
                    (site.kind === "cafe" || site.kind === "spa"
                      ? "font-display normal-case tracking-tight text-base sm:text-lg"
                      : "")
                  }
                >
                  {site.name}
                </span>
                <span className="flex items-center gap-3 text-[10px] sm:text-[11px] font-medium" style={{ color: soft }}>
                  <span>Services</span>
                  <span>About</span>
                  <span
                    className="rounded-full px-2.5 py-1 font-semibold"
                    style={{ background: site.accent, color: dark ? "#1b1a17" : "#fff" }}
                  >
                    Contact
                  </span>
                </span>
              </div>

              {/* mock hero */}
              <div className="my-auto">
                <motion.p
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mb-2"
                  style={{ color: site.accent }}
                >
                  {site.sub}
                </motion.p>
                <motion.h3
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="font-display text-2xl sm:text-4xl font-semibold leading-tight mb-4"
                >
                  {site.tagline}
                </motion.h3>
                <motion.span
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="inline-block rounded-full px-4 py-2 text-[11px] sm:text-xs font-bold"
                  style={{ background: site.accent, color: dark ? "#1b1a17" : "#fff" }}
                >
                  {site.cta} →
                </motion.span>
              </div>

              {/* mock content cards */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {[0, 1, 2].map((k) => (
                  <motion.div
                    key={site.domain + k}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.45 + k * 0.1, duration: 0.4 }}
                    className="rounded-lg p-2.5 sm:p-3"
                    style={{ background: card }}
                  >
                    <div
                      className="h-1.5 w-8 rounded-full mb-1.5"
                      style={{ background: site.accent }}
                    />
                    <div
                      className="h-1.5 w-full rounded-full"
                      style={{ background: soft, opacity: 0.4 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* floating badges */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 sm:-left-8 -bottom-6 rounded-xl border border-[#e7e1d6] bg-white px-4 py-3 shadow-lg"
      >
        <p className="text-xs text-[#6b675e]">Build cost</p>
        <p className="font-display text-2xl font-semibold text-[#166b45]">$0</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-3 sm:-right-6 -top-6 rounded-xl border border-[#e7e1d6] bg-white px-4 py-3 shadow-lg"
      >
        <p className="text-xs text-[#6b675e]">Hosting & support</p>
        <p className="font-display text-2xl font-semibold text-[#1b1a17]">
          $9.99<span className="text-sm text-[#6b675e]">/mo</span>
        </p>
      </motion.div>
    </div>
  );
}

/* ---------------------------------------------------------------- page */

export function Landing() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroDrift = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title =
      "Free Web Designer for Small Business | Custom Website Builder | FreeSiteCompany";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Looking for a web designer? Get a free custom-coded website for your small business. No templates, no page builders. Professional web design & development — hand-built by real developers. Restaurants, salons, contractors & more.",
      );
    }
  }, []);

  const heroWords = ["Beautiful", "websites,", "built", "by", "hand."];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1b1a17] overflow-x-hidden selection:bg-[#166b45] selection:text-white">
      {structuredData.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <Navigation />

      {/* ============================================================ HERO */}
      <section
        ref={heroRef}
        className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6"
      >
        {/* drifting backdrop texture */}
        <motion.div
          style={{ y: heroDrift }}
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute top-20 right-[8%] h-72 w-72 rounded-full bg-[#166b45]/[0.06] blur-3xl" />
          <div className="absolute bottom-0 left-[5%] h-80 w-80 rounded-full bg-[#d7a04a]/[0.08] blur-3xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#e7e1d6] bg-white px-4 py-1.5 text-sm font-medium text-[#6b675e] mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-[#166b45] animate-pulse" />
              Squamish, BC · Serving Canada & the US
            </motion.p>

            <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
              {heroWords.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.15 + i * 0.09,
                    duration: 0.7,
                    ease: [0.21, 0.6, 0.35, 1],
                  }}
                  className={
                    "inline-block mr-[0.28em] " +
                    (w === "hand." ? "italic text-[#166b45]" : "")
                  }
                >
                  {w}
                </motion.span>
              ))}
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.7 }}
                className="block"
              >
                Yours{" "}
                <span className="relative inline-block">
                  free
                  <motion.svg
                    viewBox="0 0 120 12"
                    className="absolute -bottom-1 left-0 w-full"
                    initial={{ pathLength: 0 }}
                  >
                    <motion.path
                      d="M3 9 Q 40 2 117 6"
                      fill="none"
                      stroke="#d7a04a"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1.1, duration: 0.6 }}
                    />
                  </motion.svg>
                </span>
                .
              </motion.span>
            </h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg sm:text-xl text-[#6b675e] leading-relaxed mb-8 max-w-xl"
            >
              I'm a real web designer in Squamish, BC — no cookie-cutter
              templates, no DIY builders eating your weekends. I build your
              small business a custom website for{" "}
              <strong className="text-[#1b1a17]">$0</strong>, with two rounds of
              revisions. You only pay if you keep it:{" "}
              <strong className="text-[#1b1a17]">$9.99/month</strong> for
              hosting and support. No contracts. You own the code.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.95, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/get-started"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#166b45] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#0f5434] hover:shadow-[0_12px_40px_-8px_rgba(22,107,69,0.5)] hover:-translate-y-0.5"
              >
                Get your free website
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+16048498898"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1b1a17]/15 bg-white px-8 py-4 text-lg font-semibold transition-all hover:border-[#1b1a17]/40 hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" />
                (604) 849-8898
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-5 text-sm text-[#6b675e]"
            >
              Free build includes 2 full rounds of revisions · See it live
              before you pay anything
            </motion.p>
          </div>

          <HeroBrowser />
        </div>
      </section>

      {/* ======================================================== MARQUEE */}
      <section className="border-y border-[#e7e1d6] bg-[#fffefb] py-5 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 px-6">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-12 shrink-0">
              {showcase.map((s) => (
                <span
                  key={s.name + dup}
                  className="flex items-center gap-3 text-[#6b675e] font-medium whitespace-nowrap"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: s.from }}
                  />
                  {s.name}
                </span>
              ))}
              <span className="font-display italic text-[#166b45] whitespace-nowrap">
                hand-coded in Squamish, BC
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================== STATS */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: 50, suffix: "+", label: "small businesses served" },
            { v: 100, suffix: "%", label: "custom built — zero templates" },
            { v: 24, suffix: "hr", label: "average response time" },
            { v: 100, suffix: "%", label: "made in Canada" },
          ].map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl sm:text-5xl font-semibold text-[#166b45]">
                <Counter value={s.v} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm sm:text-base text-[#6b675e]">
                {s.label}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ======================================================== PORTFOLIO */}
      <section className="py-14 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#166b45] mb-3">
                Real work, live right now
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
                Sites I've built for businesses{" "}
                <span className="italic text-[#166b45]">like yours</span>
              </h2>
            </div>
            <p className="text-[#6b675e] max-w-sm">
              Every one hand-coded, mobile-first, and live on its own domain.
              Click through and see for yourself.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcase.map((site, i) => {
              const Card = (
                <motion.div
                  initial={{ y: 32, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, rotate: i % 2 ? 0.6 : -0.6 }}
                  className="group rounded-2xl border border-[#e7e1d6] bg-white overflow-hidden shadow-sm hover:shadow-[0_24px_60px_-20px_rgba(27,26,23,0.25)] transition-shadow"
                >
                  {site.img ? (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={site.img}
                        alt={`${site.name} — website by FreeSite Company`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                  ) : (
                    <div
                      className="aspect-[16/10] p-5 flex flex-col justify-between"
                      style={{
                        background: `linear-gradient(150deg, ${site.from}, ${site.to})`,
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="h-2.5 w-20 rounded-full bg-white/80" />
                        <div className="flex gap-1.5">
                          <div className="h-2 w-8 rounded-full bg-white/40" />
                          <div className="h-2 w-8 rounded-full bg-white/40" />
                        </div>
                      </div>
                      <div>
                        <div className="h-4 w-3/5 rounded-md bg-white/90 mb-2" />
                        <div className="h-3 w-2/5 rounded-md bg-white/50" />
                      </div>
                      <div className="flex gap-2">
                        {[0, 1, 2].map((k) => (
                          <div
                            key={k}
                            className="h-8 flex-1 rounded-md bg-white/25 transition-transform duration-300 group-hover:-translate-y-1"
                            style={{ transitionDelay: `${k * 60}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between px-5 py-4">
                    <div>
                      <p className="font-semibold">{site.name}</p>
                      <p className="text-sm text-[#6b675e]">
                        {site.tag} · {site.domain}
                      </p>
                    </div>
                    {site.url && (
                      <span className="rounded-full border border-[#e7e1d6] p-2 text-[#166b45] transition-all group-hover:bg-[#166b45] group-hover:text-white group-hover:border-[#166b45]">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </motion.div>
              );
              return site.url ? (
                <a
                  key={site.name}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Card}
                </a>
              ) : (
                <div key={site.name}>{Card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================== GLOBE */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#10140f] text-[#faf7f2] overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7fc8a4] mb-3">
              Live on the web, right now
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight mb-6">
              Built in Squamish.{" "}
              <span className="italic text-[#7fc8a4]">
                Working around the clock.
              </span>
            </h2>
            <p className="text-lg text-[#faf7f2]/60 leading-relaxed mb-8 max-w-md">
              Every site below is online this very second — fast, secure, and
              earning for its owner while they work, sleep, or get out on the
              water.
            </p>
            <ul className="space-y-1">
              {showcase.map((s, i) => (
                <motion.li
                  key={s.domain}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-xl px-4 py-3 transition-colors hover:bg-white/5"
                  >
                    <span className="flex items-center gap-3">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7fc8a4] opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7fc8a4]" />
                      </span>
                      <span className="font-medium">{s.domain}</span>
                    </span>
                    <span className="flex items-center gap-2 text-sm text-[#faf7f2]/40 group-hover:text-[#7fc8a4] transition-colors">
                      {s.tag}
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.15} className="relative mx-auto w-full max-w-[500px]">
            {/* soft glow behind the globe */}
            <div
              aria-hidden
              className="absolute inset-[-12%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(127,200,164,0.18) 0%, rgba(127,200,164,0.05) 45%, transparent 70%)",
              }}
            />
            {/* slow counter-rotating dashed orbit */}
            <motion.div
              aria-hidden
              animate={{ rotate: -360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute inset-[-5%] rounded-full border border-dashed border-[#7fc8a4]/25"
            />
            <Globe />
            <p className="mt-4 text-center text-sm text-[#faf7f2]/40">
              Go ahead — grab it and give it a spin.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ====================================================== YES SECTION */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 bg-[#10140f] text-[#faf7f2] border-t border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className="font-display text-7xl sm:text-9xl font-bold text-[#7fc8a4] mb-6"
          >
            YES,
          </motion.p>
          <h2 className="font-display text-3xl sm:text-6xl font-semibold tracking-tight leading-tight mb-8">
            {"we can build any kind of website —".split(" ").map((w, i) => (
              <motion.span
                key={w + i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
                className="inline-block mr-[0.28em]"
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="inline-block italic text-[#ffd98e]"
            >
              as dynamic as you want.
            </motion.span>
          </h2>
          <FadeUp delay={0.4}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                "Smooth animations",
                "Online booking",
                "E-commerce",
                "Photo galleries",
                "Interactive maps",
                "Spinning globes — obviously",
              ].map((chip, i) => (
                <motion.span
                  key={chip}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + i * 0.08,
                    type: "spring",
                    stiffness: 260,
                    damping: 16,
                  }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="rounded-full border border-[#7fc8a4]/30 bg-[#7fc8a4]/10 px-5 py-2.5 font-medium text-[#7fc8a4]"
                >
                  {chip}
                </motion.span>
              ))}
            </div>
            <Link
              to="/get-started"
              className="group inline-flex items-center gap-2 rounded-full bg-[#7fc8a4] px-9 py-4 text-lg font-semibold text-[#10140f] transition-all hover:bg-white hover:-translate-y-0.5"
            >
              Dream it up — we'll build it free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ===================================================== FOUNDER NOTE */}
      <section className="py-14 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="relative rounded-3xl border border-[#e7e1d6] bg-[#fffefb] p-8 sm:p-14 shadow-sm overflow-hidden">
              <span
                aria-hidden
                className="absolute -top-6 left-8 font-display text-[10rem] leading-none text-[#166b45]/10 select-none"
              >
                "
              </span>
              <p className="relative font-display text-2xl sm:text-4xl leading-snug font-medium mb-8">
                Why free? Because I'd rather earn{" "}
                <span className="italic text-[#166b45]">$9.99 a month</span>{" "}
                from a hundred happy local businesses than charge one of them
                $5,000 up front.
              </p>
              <p className="relative text-lg text-[#6b675e] leading-relaxed mb-6">
                Big agencies charge thousands and disappear. DIY builders eat
                your weekends and still look like everyone else. I do it
                differently: I build your site by hand, show you the finished
                thing, and you decide if it's worth ten bucks a month to keep
                it online, secure, and supported. That's the whole business
                model.
              </p>
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#166b45] font-display text-xl font-semibold text-white">
                  F
                </div>
                <div>
                  <p className="font-semibold">FreeSite Company</p>
                  <p className="text-sm text-[#6b675e]">
                    Founder & web designer — Squamish, BC
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ====================================================== HOW IT WORKS */}
      <section
        id="how-it-works"
        className="py-14 sm:py-24 px-4 sm:px-6 bg-[#1b1a17] text-[#faf7f2]"
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12 sm:mb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7fc8a4] mb-3">
              How it works
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              Three steps. Zero risk.{" "}
              <span className="italic text-[#7fc8a4]">Zero dollars down.</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((item, index) => (
              <FadeUp key={item.step} delay={index * 0.15} className="relative">
                <p className="font-display text-7xl sm:text-8xl font-semibold text-[#7fc8a4]/20 mb-4">
                  {item.step}
                </p>
                <h3 className="font-display text-2xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-[#faf7f2]/65 text-lg leading-relaxed">
                  {item.description}
                </p>
                {index < 2 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                    className="hidden md:block absolute top-12 left-full w-2/3 h-px bg-gradient-to-r from-[#7fc8a4]/50 to-transparent origin-left"
                  />
                )}
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3} className="mt-14 text-center">
            <Link
              to="/get-started"
              className="group inline-flex items-center gap-2 rounded-full bg-[#7fc8a4] px-8 py-4 text-lg font-semibold text-[#1b1a17] transition-all hover:bg-white hover:-translate-y-0.5"
            >
              Start step one — it takes 5 minutes
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ======================================================== INCLUDED */}
      <section className="py-14 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <FadeUp className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#166b45] mb-3">
              What's included
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight mb-6">
              Not a landing page.{" "}
              <span className="italic text-[#166b45]">
                A conversion machine.
              </span>
            </h2>
            <p className="text-lg text-[#6b675e] leading-relaxed mb-8">
              Every free build ships with the things agencies upsell: SEO
              foundations, analytics wiring, booking forms, and performance
              that scores 90+ on Google PageSpeed — faster than WordPress or
              Wix.
            </p>
            <Link
              to="/plans"
              className="inline-flex items-center gap-2 font-semibold text-[#166b45] hover:gap-3 transition-all"
            >
              See hosting plans <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeUp>

          <div className="grid sm:grid-cols-2 gap-3">
            {included.map((item, i) => (
              <motion.div
                key={item}
                initial={{ x: 24, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 rounded-xl border border-[#e7e1d6] bg-white p-4"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#166b45]">
                  <Check className="h-3 w-3 text-white" />
                </span>
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== GROWTH */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#fffefb] border-y border-[#e7e1d6]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              Need more than a website?
            </h2>
            <p className="mt-3 text-lg text-[#6b675e]">
              Photography, video, and growth services — all under one roof.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Camera,
                title: "Photography",
                text: "Headshots, products, and locations that make your brand look world-class.",
              },
              {
                icon: Film,
                title: "Videography",
                text: "Brand videos and social reels built to stop the scroll.",
              },
              {
                icon: Megaphone,
                title: "Growth services",
                text: "SEO campaigns and content strategy to keep growing after launch.",
              },
            ].map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-[#e7e1d6] bg-[#faf7f2] p-7 h-full transition-all hover:border-[#166b45]/40 hover:-translate-y-1">
                  <s.icon className="h-7 w-7 text-[#166b45] mb-4 transition-transform group-hover:scale-110" />
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[#6b675e]">{s.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== REFERRAL */}
      <section className="py-14 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl bg-[#166b45] p-8 sm:p-14 text-white">
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -top-32 -right-32 h-80 w-80 rounded-full border-[30px] border-white/10"
              />
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
                  Know someone who needs a website?
                </h2>
                <p className="text-lg text-white/85 mb-2">
                  Refer a friend and get{" "}
                  <span className="font-bold text-[#ffd98e]">
                    $1 off every month for a full year
                  </span>{" "}
                  — for every person who signs up.
                </p>
                <p className="text-white/60 mb-8">
                  Refer 3 friends? That's $3 off every month for 12 months.
                  Stack it up.
                </p>
                <Link
                  to="/get-started"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#166b45] transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Get your referral link
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============================================================= FAQ */}
      <section className="py-14 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <FadeUp className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              Fair questions,{" "}
              <span className="italic text-[#166b45]">honest answers</span>
            </h2>
          </FadeUp>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FadeUp key={f.q} delay={i * 0.05}>
                <div className="rounded-2xl border border-[#e7e1d6] bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-lg"
                  >
                    {f.q}
                    <motion.span
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      className="shrink-0 text-[#166b45]"
                    >
                      <Plus className="h-5 w-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-6 pb-6 text-[#6b675e] leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= CTA */}
      <section className="py-16 sm:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight mb-6">
              Your competitors' websites are{" "}
              <span className="italic text-[#166b45]">bad</span>. Yours doesn't
              have to be.
            </h2>
            <p className="text-xl text-[#6b675e] mb-10">
              Free to build. Free to see. $9.99/month only if you love it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/get-started"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#166b45] px-10 py-5 text-xl font-semibold text-white transition-all hover:bg-[#0f5434] hover:shadow-[0_12px_40px_-8px_rgba(22,107,69,0.5)] hover:-translate-y-0.5"
              >
                Claim your free website
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://calendar.app.google/L4ok6TnfC8njfXXy6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1b1a17]/15 bg-white px-10 py-5 text-xl font-semibold transition-all hover:border-[#1b1a17]/40 hover:-translate-y-0.5"
              >
                Book a call
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
