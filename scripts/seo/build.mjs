// Post-build step: writes static, crawlable landing pages for each industry
// and town into dist/, plus the sitemap. Runs after `vite build`; the React
// app stays the homepage and the apply form lives at /#apply.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { industries, cities, portfolio } from "./data.mjs";

const SITE = "https://freesitecompany.com";
const OUT = "dist";
const PHONE = "(604) 849-8898";
const PHONE_TEL = "+16048498898";
const today = new Date().toISOString().slice(0, 10);

const INDUSTRY_HUB = "free-website-for-small-business";
const CITY_HUB = "web-design-bc";
const industryPath = (i) => `free-website-for-${i.slug}`;
const cityPath = (c) => `web-design-${c.slug}`;

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const sharedFaqs = [
  ["How is the website actually free?", "I'd rather earn $9.99 a month from a hundred happy local businesses than charge one of them $5,000 up front. I build your site for free with two rounds of revisions. If you love it, you keep it online for $9.99/month. If you don't, you owe nothing."],
  ["Do I own the website?", "Yes. You get the complete source code. Host it anywhere, change it, or hand it to another developer. Unlike Wix or Squarespace, nothing is locked to my service."],
  ["How long does it take?", "Most sites are designed, built and launched within days, not months. You'll get a live preview link while I work."],
];

const included = [
  "100% custom design, never a template",
  "Hand-coded and fast, under a second to load",
  "Looks right on every phone",
  "Local SEO: schema, meta tags and sitemap",
  "Contact, quote or booking forms",
  "Two full rounds of revisions",
  "Analytics and Meta pixel ready",
  "You own all the code",
];

const CSS = `
:root{--bg:#faf7f2;--paper:#fffefb;--fg:#1b1a17;--muted:#6b675e;--line:#e7e1d6;--green:#166b45;--green-dark:#0f5434;--mint:#7fc8a4;--gold:#d7a04a}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--fg);font:17px/1.65 Inter,system-ui,-apple-system,sans-serif}
a{color:inherit}
img{max-width:100%;display:block}
.wrap{max-width:1120px;margin:0 auto;padding-inline:20px}
.d{font-family:Fraunces,Georgia,serif;font-weight:600;letter-spacing:-.02em;line-height:1.08;text-wrap:balance;margin:0}
.d em{color:var(--green)}
header{position:sticky;top:0;z-index:10;background:rgba(250,247,242,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
header .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-block:14px}
.logo{display:inline-flex;align-items:center;gap:10px;text-decoration:none;color:#10261b;line-height:1}
.logo svg{width:38px;height:38px;flex:none}
.logo b{display:block;font-weight:800;font-size:22px;letter-spacing:-.04em}
.logo b span{color:var(--green)}
.logo small{display:block;margin-top:4px;font-size:9.5px;font-weight:600;letter-spacing:.32em;color:#4a5650}
.nav{display:flex;align-items:center;gap:20px;font-size:15px;font-weight:500}
.nav a{text-decoration:none}
.nav .tel{color:var(--muted)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:999px;background:var(--green);color:#fff;font-weight:600;text-decoration:none;padding:14px 28px;transition:background .2s,transform .2s}
.btn:hover{background:var(--green-dark);transform:translateY(-2px)}
.btn.sm{padding:9px 18px;font-size:15px}
.btn.ghost{background:#fff;color:var(--fg);border:1px solid rgba(27,26,23,.15)}
.btn.ghost:hover{border-color:rgba(27,26,23,.4)}
.btn:focus-visible,.nav a:focus-visible{outline:3px solid var(--mint);outline-offset:3px}
.eyebrow{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line);background:#fff;border-radius:999px;padding:6px 14px;font-size:14px;font-weight:500;color:var(--muted)}
.eyebrow i{width:8px;height:8px;border-radius:50%;background:var(--green)}
.hero{padding-block:64px 56px}
.hero h1{font-size:clamp(2.3rem,6vw,4rem);margin:20px 0 20px;max-width:16ch}
.hero p.lead{font-size:clamp(1.05rem,2vw,1.25rem);color:var(--muted);max-width:60ch;margin:0 0 28px}
.ctas{display:flex;flex-wrap:wrap;gap:12px}
.fine{font-size:14px;color:var(--muted);margin-top:16px}
section{padding-block:56px}
.band{background:var(--paper);border-block:1px solid var(--line)}
.label{font-size:13px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--green);margin:0 0 10px}
h2.d{font-size:clamp(1.8rem,4vw,2.8rem);margin-bottom:28px}
.needs{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}
.need{background:#fff;border:1px solid var(--line);border-radius:18px;padding:22px}
.need h3{margin:0 0 6px;font-size:18px}
.need p{margin:0;color:var(--muted);font-size:16px}
.local{font-size:clamp(1.15rem,2.2vw,1.45rem);line-height:1.55;max-width:62ch;margin:0}
.meet{color:var(--muted);margin-top:14px}
.inc{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;list-style:none;padding:0;margin:0}
.inc li{display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px 14px;font-weight:500}
.inc li:before{content:"✓";flex:none;width:20px;height:20px;border-radius:50%;background:var(--green);color:#fff;font-size:12px;display:grid;place-items:center;margin-top:3px}
.work{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px}
.card{display:block;background:#fff;border:1px solid var(--line);border-radius:18px;overflow:hidden;text-decoration:none;transition:transform .25s,box-shadow .25s}
.card:hover{transform:translateY(-6px);box-shadow:0 24px 60px -20px rgba(27,26,23,.25)}
.card img{aspect-ratio:16/10;object-fit:cover;object-position:top;width:100%;height:auto}
.card div{padding:14px 18px}
.card b{display:block}
.card span{font-size:14px;color:var(--muted)}
.math{display:grid;gap:12px;max-width:720px}
.row{display:flex;justify-content:space-between;align-items:center;gap:16px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:18px 22px}
.row small{display:block;color:var(--muted);font-size:14px}
.row s{font-family:Fraunces,Georgia,serif;font-size:1.35rem;color:var(--muted);text-decoration-color:var(--gold);text-decoration-thickness:2px;white-space:nowrap}
.row.us{border:2px solid var(--green);background:#eaf2ec}
.row.us strong{font-family:Fraunces,Georgia,serif;font-size:1.35rem;color:var(--green);white-space:nowrap}
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:28px;counter-reset:s}
.step{counter-increment:s}
.step:before{content:counter(s);display:block;font-family:Fraunces,Georgia,serif;font-size:3.5rem;font-weight:600;color:rgba(22,107,69,.25);line-height:1}
.step h3{font-family:Fraunces,Georgia,serif;font-size:1.4rem;margin:8px 0 6px}
.step p{margin:0;color:var(--muted)}
.faq{max-width:780px;display:grid;gap:10px}
details{background:#fff;border:1px solid var(--line);border-radius:16px;padding:0 22px}
summary{cursor:pointer;font-weight:600;font-size:18px;padding:18px 0;list-style:none;display:flex;justify-content:space-between;gap:12px}
summary::-webkit-details-marker{display:none}
summary:after{content:"+";color:var(--green);font-size:22px;line-height:1}
details[open] summary:after{content:"–"}
details p{margin:0 0 18px;color:var(--muted)}
.final{text-align:center;padding-block:72px}
.final h2{font-size:clamp(2rem,5vw,3.4rem);margin:0 auto 16px;max-width:20ch}
.final p{color:var(--muted);font-size:1.15rem;margin:0 0 28px}
.final .ctas{justify-content:center}
.links{display:flex;flex-wrap:wrap;gap:10px;list-style:none;padding:0;margin:0}
.links a{display:inline-block;border:1px solid var(--line);background:#fff;border-radius:999px;padding:8px 16px;text-decoration:none;font-weight:500;font-size:15px}
.links a:hover{border-color:var(--green);color:var(--green)}
.crumbs{font-size:14px;color:var(--muted);padding-top:20px}
.crumbs a{text-decoration:none}
.crumbs a:hover{color:var(--green)}
footer{background:var(--fg);color:rgba(250,247,242,.65);padding-block:48px;font-size:15px}
footer .wrap{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:28px}
footer h3{color:#faf7f2;font-size:16px;margin:0 0 12px}
footer ul{list-style:none;padding:0;margin:0;display:grid;gap:8px}
footer a{text-decoration:none}
footer a:hover{color:var(--mint)}
footer .logo{color:#fff}footer .logo b span{color:#c5f06a}footer .logo small{color:rgba(255,255,255,.8)}
@media (max-width:640px){.nav .tel,.nav .plain{display:none}.hero{padding-block:40px 40px}section{padding-block:44px}}
@media (prefers-reduced-motion:reduce){*{transition:none!important}}
`;

function layout({ path, title, description, body, jsonld }) {
  const url = `${SITE}/${path}/`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#166b45">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="FreeSiteCompany">
<meta property="og:locale" content="en_CA">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${SITE}/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;1,9..144,600&family=Inter:wght@400;500;600;700;800&display=swap">
<style>${CSS.replace(/\n/g, "")}</style>
${jsonld.map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join("\n")}
</head>
<body>
<header><div class="wrap">
<a class="logo" href="/" aria-label="FreeSite Company"><svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="14" fill="#166b45"/><path d="M16 15a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H25v6.5h11a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H25V49a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z" fill="#fff"/><path d="M38 36v20l4.6-4.4 3.6 7.6 3.4-1.6-3.6-7.4 6.4-.4Z" fill="#c5f06a"/></svg><span><b>Free<span>Site</span></b><small>COMPANY</small></span></a>
<nav class="nav"><a class="tel" href="tel:${PHONE_TEL}">${PHONE}</a><a class="plain" href="/plans">Plans</a><a class="btn sm" href="/#apply">Apply free</a></nav>
</div></header>
<main>
${body}
</main>
${footer()}
</body>
</html>
`;
}

function footer() {
  return `<footer><div class="wrap">
<div><a class="logo" href="/" aria-label="FreeSite Company"><svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="14" fill="#166b45"/><path d="M16 15a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H25v6.5h11a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H25V49a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z" fill="#fff"/><path d="M38 36v20l4.6-4.4 3.6 7.6 3.4-1.6-3.6-7.4 6.4-.4Z" fill="#c5f06a"/></svg><span><b>Free<span>Site</span></b><small>COMPANY</small></span></a><p>A real web designer in Squamish, BC. Free custom websites for small businesses across BC and Canada. You own the code.</p></div>
<div><h3>Websites for</h3><ul>${industries.slice(0, 6).map((i) => `<li><a href="/${industryPath(i)}/">${esc(i.label)}</a></li>`).join("")}<li><a href="/${INDUSTRY_HUB}/">All business types →</a></li></ul></div>
<div><h3>Web design in</h3><ul>${cities.slice(0, 6).map((c) => `<li><a href="/${cityPath(c)}/">${esc(cap(c.name))}</a></li>`).join("")}<li><a href="/${CITY_HUB}/">All areas →</a></li></ul></div>
<div><h3>Get in touch</h3><ul><li><a href="tel:${PHONE_TEL}">${PHONE}</a></li><li><a href="mailto:freesitecompanycanada@gmail.com">freesitecompanycanada@gmail.com</a></li><li>Squamish, BC</li><li><a href="/#apply">Apply for a free website →</a></li></ul></div>
</div></footer>`;
}

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function crumbs(items) {
  return `<nav class="wrap crumbs" aria-label="Breadcrumb">${items
    .map(([name, href], i) => (i < items.length - 1 ? `<a href="${href}">${esc(name)}</a> / ` : `<span>${esc(name)}</span>`))
    .join("")}</nav>`;
}

function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, href], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: SITE + href,
    })),
  };
}

function faqLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}

function serviceLd({ name, description, path, area }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE}/${path}/`,
    serviceType: "Web design",
    provider: { "@type": "ProfessionalService", "@id": `${SITE}/#organization`, name: "FreeSiteCompany", url: SITE, telephone: "+1-604-849-8898" },
    areaServed: area,
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD", description: "Free custom website build. Optional hosting and support from $9.99/month." },
  };
}

const hero = ({ eyebrow, h1, intro }) => `
<section class="hero"><div class="wrap">
<span class="eyebrow"><i></i>${esc(eyebrow)}</span>
<h1 class="d">${h1}</h1>
<p class="lead">${esc(intro)}</p>
<div class="ctas"><a class="btn" href="/#apply">Apply in 2 minutes →</a><a class="btn ghost" href="tel:${PHONE_TEL}">${PHONE}</a></div>
<p class="fine">Free build with 2 rounds of revisions · See it live before you pay anything · No contract</p>
</div></section>`;

const workSection = (keys) => `
<section><div class="wrap">
<p class="label">Real work, live right now</p>
<h2 class="d">Sites I've built for <em>local businesses</em></h2>
<div class="work">${keys
  .map((k) => portfolio[k])
  .map((p) => `<a class="card" href="${p.url}" target="_blank" rel="noopener"><img src="${p.img}" alt="${esc(p.name)} website built by FreeSite Company" loading="lazy" width="880" height="550"><div><b>${esc(p.name)}</b><span>${esc(p.tag)}</span></div></a>`)
  .join("")}</div>
</div></section>`;

const includedSection = () => `
<section><div class="wrap">
<p class="label">Every free build includes</p>
<ul class="inc">${included.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
</div></section>`;

const mathSection = () => `
<section class="band"><div class="wrap">
<p class="label">The math</p>
<h2 class="d">Same custom website. <em>None of the invoice.</em></h2>
<div class="math">
<div class="row"><div>Web agency<small>up front, plus monthly fees</small></div><s>$3,000–$10,000</s></div>
<div class="row"><div>Wix or Squarespace<small>plus your weekends, and it looks like a template</small></div><s>$20–$50/mo</s></div>
<div class="row us"><div><b>FreeSite Company</b><small>$9.99/mo only if you keep it</small></div><strong>$0 to build</strong></div>
</div>
</div></section>`;

const stepsSection = () => `
<section><div class="wrap">
<p class="label">How it works</p>
<h2 class="d">Three steps. <em>Zero dollars down.</em></h2>
<div class="steps">
<div class="step"><h3>Apply in 2 minutes</h3><p>Tell me about your business. I'll reply within 24 hours.</p></div>
<div class="step"><h3>I build your site, free</h3><p>A fully custom, hand-coded website with two rounds of revisions.</p></div>
<div class="step"><h3>Love it, then decide</h3><p>See the finished site before you pay anything. Keep it online from $9.99/month, or walk away.</p></div>
</div>
</div></section>`;

const faqSection = (faqs) => `
<section class="band"><div class="wrap">
<h2 class="d">Questions, <em>answered</em></h2>
<div class="faq">${faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</div>
</div></section>`;

const linksSection = (heading, links) => `
<section><div class="wrap">
<p class="label">${esc(heading)}</p>
<ul class="links">${links.map(([name, href]) => `<li><a href="${href}">${esc(name)}</a></li>`).join("")}</ul>
</div></section>`;

const finalCta = (line) => `
<section class="final"><div class="wrap">
<h2 class="d">${line}</h2>
<p>Free to build. Free to see. $9.99/month only if you love it.</p>
<div class="ctas"><a class="btn" href="/#apply">Apply for your free website →</a><a class="btn ghost" href="https://calendar.app.google/L4ok6TnfC8njfXXy6" target="_blank" rel="noopener">Book a call</a></div>
</div></section>`;

function write(path, html) {
  const dir = join(OUT, path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
}

const pages = [];

for (const ind of industries) {
  const path = industryPath(ind);
  const faqs = [...ind.faqs, ...sharedFaqs];
  const description = `${ind.title}: a custom, hand-coded website for your ${ind.noun}, built free by a real web designer in BC. Only $9.99/month if you keep it. No contract.`;
  const trail = [["Home", "/"], ["Websites for small business", `/${INDUSTRY_HUB}/`], [ind.label, `/${path}`]];
  const body = `${crumbs(trail)}
${hero({ eyebrow: `Free websites for ${ind.label.toLowerCase()}`, h1: esc(ind.h1).replace(/free website/, "<em>free website</em>").replace(/free portfolio website/, "<em>free portfolio website</em>"), intro: ind.intro })}
<section class="band"><div class="wrap">
<p class="label">What your website needs</p>
<h2 class="d">Built for how your customers <em>actually choose</em></h2>
<div class="needs">${ind.needs.map(([h, p]) => `<div class="need"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join("")}</div>
</div></section>
${includedSection()}
${workSection(ind.work)}
${mathSection()}
${stepsSection()}
${faqSection(faqs)}
${linksSection("Web design near you", cities.map((c) => [cap(c.name), `/${cityPath(c)}/`]))}
${linksSection("Other businesses I build for", industries.filter((x) => x !== ind).map((x) => [x.label, `/${industryPath(x)}/`]))}
${finalCta(`Your ${esc(ind.noun)} deserves a <em>better website.</em>`)}`;
  write(path, layout({
    path,
    title: `${ind.title} | FreeSiteCompany`,
    description,
    body,
    jsonld: [serviceLd({ name: ind.title, description, path, area: { "@type": "Country", name: "Canada" } }), breadcrumbLd(trail), faqLd(faqs)],
  }));
  pages.push({ path: `${path}/`, priority: "0.8" });
}

for (const city of cities) {
  const path = cityPath(city);
  const cityFaqs = [
    [`Do you work with businesses in ${city.name}?`, `Yes. ${city.meet} I build for businesses all over BC and Canada.`],
    ...sharedFaqs,
  ];
  const description = `Web design in ${city.name}, ${city.region.split(", ").pop()}: a custom, hand-coded website for your small business, built free by a BC web designer. $9.99/month only if you keep it.`;
  const trail = [["Home", "/"], ["Web design in BC", `/${CITY_HUB}/`], [cap(city.name), `/${path}`]];
  const body = `${crumbs(trail)}
${hero({ eyebrow: `${cap(city.name)} · ${city.region}`, h1: esc(city.h1).replace(/Free to build\./, "<em>Free to build.</em>"), intro: city.intro })}
<section class="band"><div class="wrap">
<p class="label">Websites for ${esc(city.name)}</p>
<p class="local">${esc(city.local)}</p>
<p class="meet">${esc(city.meet)}</p>
</div></section>
${includedSection()}
${workSection(city.work)}
${mathSection()}
${stepsSection()}
${faqSection(cityFaqs)}
${linksSection(`Websites for ${city.name} businesses`, industries.map((x) => [x.label, `/${industryPath(x)}/`]))}
${linksSection("Nearby areas", city.near.map((s) => cities.find((c) => c.slug === s)).map((c) => [cap(c.name), `/${cityPath(c)}/`]))}
${finalCta(`A better website for your <em>${esc(city.name)}</em> business.`)}`;
  write(path, layout({
    path,
    title: city.title,
    description,
    body,
    jsonld: [serviceLd({ name: `Web design in ${cap(city.name)}`, description, path, area: { "@type": "City", name: city.name.replace(/^the /, "") } }), breadcrumbLd(trail), faqLd(cityFaqs)],
  }));
  pages.push({ path: `${path}/`, priority: "0.8" });
}

// Hubs
{
  const trail = [["Home", "/"], ["Websites for small business", `/${INDUSTRY_HUB}/`]];
  const description = "Free custom websites for restaurants, salons, contractors, trades, clinics, gyms, tour operators and more. Built by a real web designer in BC. $9.99/month only if you keep it.";
  const body = `${crumbs(trail)}
${hero({ eyebrow: "Free website program", h1: "A <em>free website</em> for your small business", intro: "Every business needs something different from its website. A restaurant needs its menu, a contractor needs a project gallery, a clinic needs online booking. Pick your business type to see what I'd build for you, for free." })}
<section class="band"><div class="wrap">
<p class="label">Pick your business type</p>
<div class="needs">${industries.map((i) => `<a class="need" style="text-decoration:none" href="/${industryPath(i)}/"><h3>${esc(i.label)} →</h3><p>${esc(i.needs.slice(0, 3).map((n) => n[0]).join(" · "))}</p></a>`).join("")}</div>
</div></section>
${workSection(["watertaxi", "canoe", "dobson"])}
${mathSection()}
${finalCta("Don't see your business? <em>Apply anyway.</em>")}`;
  write(INDUSTRY_HUB, layout({ path: INDUSTRY_HUB, title: "Free Websites for Small Businesses | FreeSiteCompany", description, body, jsonld: [breadcrumbLd(trail)] }));
  pages.push({ path: `${INDUSTRY_HUB}/`, priority: "0.9" });
}
{
  const trail = [["Home", "/"], ["Web design in BC", `/${CITY_HUB}/`]];
  const description = "Free custom web design for small businesses across BC: Squamish, Whistler, Vancouver, the North Shore, Victoria, Kelowna and more. $9.99/month only if you keep it.";
  const body = `${crumbs(trail)}
${hero({ eyebrow: "Based in Squamish · Serving all of BC", h1: "Web design across <em>British Columbia</em>", intro: "I'm a web designer in Squamish, and I build small businesses across BC custom websites for free. You only pay $9.99/month if you keep it. Pick your area to learn more." })}
<section class="band"><div class="wrap">
<p class="label">Pick your area</p>
<div class="needs">${cities.map((c) => `<a class="need" style="text-decoration:none" href="/${cityPath(c)}/"><h3>${esc(cap(c.name))} →</h3><p>${esc(c.region)}</p></a>`).join("")}</div>
</div></section>
${workSection(["watertaxi", "canoe", "trails"])}
${mathSection()}
${finalCta("Outside BC? <em>Apply anyway.</em>")}`;
  write(CITY_HUB, layout({ path: CITY_HUB, title: "Web Design in BC | Free Custom Websites | FreeSiteCompany", description, body, jsonld: [breadcrumbLd(trail)] }));
  pages.push({ path: `${CITY_HUB}/`, priority: "0.9" });
}

const urls = [
  { path: "", priority: "1.0" },
  { path: "plans", priority: "0.9" },
  { path: "get-started", priority: "0.8" },
  ...pages,
];
writeFileSync(
  join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE}/${u.path}</loc><lastmod>${today}</lastmod><priority>${u.priority}</priority></url>`).join("\n")}
</urlset>
`,
);

console.log(`SEO: wrote ${pages.length} pages + sitemap (${urls.length} URLs)`);
