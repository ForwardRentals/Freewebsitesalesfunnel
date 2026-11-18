// Dedicated landing page for photographers: /free-website-for-photographers/
// Sample imagery = watermarked previews from thefulltimehobby.com/stock
// (Jeremy's own photos). Only claim things that are true of that site.

export const PHOTO_PATH = "free-website-for-photographers";

const P = (f) => `/photographers/${f}.webp`;

// [file, alt, caption, w, h]
export const shots = {
  alpenglow: ["alpenglow-mountain-peaks", "Snowy mountain peaks glowing pink with alpenglow above a valley in blue shadow, Smithers BC", "Alpenglow, Smithers BC", 1000, 666],
  aurora: ["aurora-over-squamish", "Aurora over the Stawamus Chief and the lights of Squamish BC at night", "Aurora over Squamish", 960, 864],
  train: ["train-gap-mtb-jump", "Mountain biker airborne above a freight train in a rock cut near Pemberton BC", "Action: biker over the train", 1000, 666],
  tusk: ["black-tusk-sunset", "Black Tusk spire silhouetted against an orange sunset in Garibaldi Provincial Park", "Black Tusk at sunset", 700, 467],
  dome: ["glowing-dome-tent-blue-hour", "Glowing dome tent on a glacier under a deep blue starry sky in Alaska", "Expedition camp, blue hour", 700, 467],
  surf: ["surfer-silhouette-sunset", "Surfer silhouetted carrying a board across wet sand at sunset in Tofino BC", "Tofino, BC", 700, 560],
  highline: ["highline-granite-walls", "Highliner crossing a line between granite walls above a misty gorge near Squamish", "Highline above the mist", 555, 700],
  inversion: ["skier-above-the-inversion", "Skier spinning off a jump above a sea of valley cloud near Whistler BC", "Above the inversion", 700, 467],
  cabin: ["cabin-in-the-misty-forest", "Rustic cabin with a smoking chimney on a misty forested hillside in Pemberton BC", "Pemberton cabin", 700, 467],
  bear: ["black-bear-roadside", "Black bear walking along a roadside in front of yellow autumn aspens in the Chilcotin", "Wildlife, Chilcotin BC", 700, 440],
  rime: ["rime-tree-and-hiker", "Ski tourer walking past a rime-covered tree in soft golden light, Whistler BC", "Whistler, golden hour", 700, 467],
};

const img = (k, { eager = false, cls = "" } = {}) => {
  const [f, alt, , w, h] = shots[k];
  return `<img${cls ? ` class="${cls}"` : ""} src="${P(f)}" alt="${alt}" width="${w}" height="${h}" ${eager ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}>`;
};

export const photoCss = `
.ph-hero{padding-block:56px 40px}
.ph-hero .wrap{display:grid;grid-template-columns:1.05fr 1fr;gap:44px;align-items:center}
.ph-hero h1{font-size:clamp(2.3rem,5.6vw,3.8rem);margin:20px 0 18px;max-width:15ch}
.ph-hero .wrap>*,.ex>*{min-width:0}
.frame{background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 30px 70px -28px rgba(27,26,23,.35);overflow:hidden}
.frame .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;border-bottom:1px solid var(--line);background:#f4efe6}
.frame .bar i{width:10px;height:10px;border-radius:50%;background:#d8d1c3}
.frame .bar span{margin-left:10px;font-size:12px;color:var(--muted);background:#fff;border-radius:999px;padding:3px 12px}
.mosaic{display:grid;grid-template-columns:repeat(6,1fr);grid-auto-rows:62px;gap:6px;padding:8px;background:#111}
.mosaic img{width:100%;height:100%;object-fit:cover;border-radius:4px}
.mosaic .a{grid-column:span 4;grid-row:span 3}
.mosaic .b{grid-column:span 2;grid-row:span 3}
.mosaic .c{grid-column:span 2;grid-row:span 2}
.cap{font-size:13px;color:var(--muted);margin:10px 4px 0;text-align:center}
.ex{display:grid;grid-template-columns:1fr 1.1fr;gap:40px;align-items:center}
.ex .shot{border:1px solid var(--line);border-radius:16px;overflow:hidden;background:#fff;box-shadow:0 24px 60px -24px rgba(27,26,23,.3)}
.ex .shot img{width:100%;height:auto}
.ex ul{padding:0;margin:18px 0 24px;list-style:none;display:grid;gap:10px}
.ex li{display:flex;gap:10px;align-items:flex-start}
.ex li:before{content:"✓";flex:none;width:20px;height:20px;border-radius:50%;background:var(--green);color:#fff;font-size:12px;display:grid;place-items:center;margin-top:4px}
.ex li span{color:var(--muted)}
.gal{columns:3 220px;column-gap:12px}
.gal figure{margin:0 0 12px;break-inside:avoid;position:relative;border-radius:12px;overflow:hidden;background:#111}
.gal img{width:100%;height:auto;transition:transform .5s}
.gal figure:hover img{transform:scale(1.04)}
.gal figcaption{position:absolute;left:0;right:0;bottom:0;padding:22px 12px 9px;font-size:13px;color:#fff;background:linear-gradient(transparent,rgba(0,0,0,.65))}
.genres{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:14px}
.genre{background:#fff;border:1px solid var(--line);border-radius:18px;padding:20px 22px}
.genre h3{margin:0 0 6px;font-size:18px}
.genre p{margin:0;color:var(--muted);font-size:16px}
.cmp{width:100%;border-collapse:collapse;background:#fff;border:1px solid var(--line);border-radius:16px;overflow:hidden;font-size:16px}
.cmp th,.cmp td{text-align:left;padding:14px 16px;border-bottom:1px solid var(--line);vertical-align:top}
.cmp th{background:#f4efe6;font-size:14px;letter-spacing:.04em}
.cmp td:last-child{background:#eaf2ec;font-weight:500}
.cmp tr:last-child td{border-bottom:0}
.tw{overflow-x:auto}
.note{font-size:14px;color:var(--muted);margin-top:12px}
@media (max-width:860px){.mosaic{grid-auto-rows:44px}.ph-hero .wrap,.ex{grid-template-columns:1fr}.ph-hero h1{max-width:none}}
`;

export const photoFaqs = [
  ["Is the website really free for photographers?", "Yes. I build your portfolio for free, including two rounds of revisions. If you love it, hosting and support are $9.99/month. If you don't, you owe nothing and I won't send you an invoice."],
  ["Will my photos look sharp, or get compressed to mush?", "They'll look sharp. I serve modern formats (WebP/AVIF) in responsive sizes, so full-width images still load fast on a phone, and your originals are never degraded. Big, clean images are the whole point of a photographer's site."],
  ["Can I license or sell my photos from the site?", "Yes. My own site, thefulltimehobby.com, has a self-hosted stock library with a page for every photo, license tiers and an enquiry link that carries the photo ID. I can set up the same thing for you, or link to the print lab or stock agency you already use."],
  ["Will it help my photos show up in Google Images?", "That's part of the build: descriptive file names, alt text, captions, image sitemap entries and, where it fits, IPTC/XMP metadata with your creator and licensing details so Google can show the Licensable badge."],
  ["Can I have a private client gallery or proofing area?", "Yes. I built a password-protected client gallery portal for my own photo business, and I can set up something similar for yours, or link out to Pixieset, ShootProof or whatever you use now."],
  ["I'm a wedding, portrait or commercial photographer. Does it work for that?", "Yes. A wedding site needs different things than an adventure or commercial portfolio: love stories and packages, headshot pricing, or client logos and usage terms. I design around how your clients actually book you."],
  ["Can I move off Squarespace, Wix or Format?", "Yes. I'll rebuild your portfolio, keep your good URLs (or redirect them) so you don't lose search ranking, and you get the full source code afterwards. Nothing is locked to my service."],
  ["Do I own my images and the website?", "Always. Your images stay yours, and you get the complete code to host anywhere."],
];

export function photographersPage(h) {
  const { esc, crumbs, breadcrumbLd, faqLd, serviceLd, workSection, includedSection, stepsSection, faqSection, linksSection, finalCta, layout, industries, industryPath, sharedFaqs, SITE, PHONE, PHONE_TEL } = h;
  const path = PHOTO_PATH;
  const title = "Free Photography Website for Photographers | FreeSiteCompany";
  const description = "A free custom portfolio website for photographers: full-quality galleries, client proofing, stock and print sales, and image SEO. Built free, $9.99/month if you keep it.";
  const trail = [["Home", "/"], ["Websites for small business", "/free-website-for-small-business/"], ["Photographers", `/${path}`]];
  const faqs = [...photoFaqs, ...sharedFaqs.slice(1)];

  const genres = [
    ["Wedding & elopement", "Love stories, packages and a calm enquiry form that asks for date, venue and guest count, so you can quote without a back-and-forth."],
    ["Portrait & headshot", "Clear session pricing, a before-you-book guide and a booking link, so clients know what to wear and what it costs."],
    ["Adventure & outdoor", "Big, atmospheric galleries by sport and location, plus licensing for brands and editors who want to use the work."],
    ["Commercial & brand", "Case studies with the client and the brief, usage and licensing terms, and a fast way to request a quote."],
    ["Real estate & architecture", "Before-you-shoot checklists, turnaround times, delivery galleries and the towns you cover, written for local search."],
    ["Events & sports", "Fast-loading event galleries, buyer-friendly proof pages and a simple way for organizers to get in touch."],
  ];

  const frame = `<div class="frame" role="img" aria-label="Sample photographer portfolio layout built from stock photos">
<div class="bar"><i></i><i></i><i></i><span>yourname-photo.com</span></div>
<div class="mosaic">
<div class="a">${img("alpenglow", { eager: true })}</div>
<div class="b">${img("highline")}</div>
<div class="c">${img("dome")}</div>
<div class="c">${img("surf")}</div>
<div class="c">${img("tusk")}</div>
</div></div>
<p class="cap">Sample layout. Photos by Jeremy, from thefulltimehobby.com/stock</p>`;

  const gallery = ["aurora", "train", "inversion", "cabin", "bear", "rime"]
    .map((k) => `<figure>${img(k)}<figcaption>${esc(shots[k][2])}</figcaption></figure>`)
    .join("");

  const body = `${crumbs(trail)}
<section class="ph-hero"><div class="wrap">
<div>
<span class="eyebrow"><i></i>Free websites for photographers</span>
<h1 class="d">A <em>free portfolio website</em> for photographers</h1>
<p class="lead">Your photos deserve better than a template everyone else is using. I'm a working photographer in Squamish, BC, and I build portfolio sites the way I wish mine had been built: big, sharp images, fast on every phone, and set up so clients can find, book and license you. The build is free. You pay $9.99/month only if you keep it.</p>
<div class="ctas"><a class="btn" href="/#apply">Apply in 2 minutes →</a><a class="btn ghost" href="https://thefulltimehobby.com" target="_blank" rel="noopener">See my own site</a></div>
<p class="fine">Free build with 2 rounds of revisions · See it live before you pay · You own the code and your images</p>
</div>
<div>${frame}</div>
</div></section>

<section class="band"><div class="wrap">
<p class="label">A real example: my own photo site</p>
<h2 class="d">I built <em>thefulltimehobby.com</em> for my own business first</h2>
<div class="ex">
<a class="shot" href="https://thefulltimehobby.com" target="_blank" rel="noopener"><img src="/portfolio/card-thefulltimehobby.jpg" alt="Homepage of thefulltimehobby.com, a photographer portfolio built by FreeSite Company" width="880" height="550" loading="lazy"></a>
<div>
<p class="local" style="margin-bottom:6px">It's a working photographer's site, not a template demo. Here's what it does:</p>
<ul>
<li><div><b>A self-hosted stock library.</b> <span>Hundreds of photos, each with its own page, location and license tiers, so buyers can find and license a specific shot straight from Google.</span></div></li>
<li><div><b>Image SEO done properly.</b> <span>Descriptive titles, alt text, an image sitemap and embedded creator and licensing metadata.</span></div></li>
<li><div><b>A second income stream.</b> <span>A camera gear rentals page that ranks for local searches and sends bookings to the rental platform.</span></div></li>
<li><div><b>A client gallery portal.</b> <span>Private galleries for clients to view and download their work.</span></div></li>
</ul>
<a class="btn" href="/#apply">Get a site like this →</a>
</div>
</div>
</div></section>

<section><div class="wrap">
<p class="label">What your portfolio could look like</p>
<h2 class="d">Big images. <em>Fast pages.</em> Nothing in the way.</h2>
<div class="gal">${gallery}</div>
<p class="note">Sample images are previews from my own library at thefulltimehobby.com/stock. Your site would carry your work, in your style.</p>
</div></section>

<section class="band"><div class="wrap">
<p class="label">What a photographer's website needs</p>
<h2 class="d">Built to <em>get you booked</em>, found and paid</h2>
<div class="needs">
<div class="need"><h3>Full-quality, fast galleries</h3><p>Responsive WebP/AVIF images, lazy loading and a layout that puts the photo first. Sharp on a 5K monitor, quick on a phone with one bar.</p></div>
<div class="need"><h3>A design that fits your style</h3><p>Custom layouts, type and colour for your work. Moody and dark, light and airy, or editorial. Never the same template as the photographer down the road.</p></div>
<div class="need"><h3>Image SEO for Google Images</h3><p>File names, alt text, captions, structured data and an image sitemap, so your work is found by people searching for it, not just people who already know you.</p></div>
<div class="need"><h3>Licensing and print sales</h3><p>Per-photo pages with license tiers (web, commercial, extended), an enquiry link that carries the photo ID, or a simple print shop.</p></div>
<div class="need"><h3>Enquiry forms that qualify</h3><p>Date, location, budget and shot list up front, delivered straight to your inbox, so you spend time on real leads.</p></div>
<div class="need"><h3>Client galleries and proofing</h3><p>Private, password-protected galleries, or a clean link-out to Pixieset, ShootProof or Pic-Time if you already use one.</p></div>
<div class="need"><h3>Local search</h3><p>Pages and schema written for searches like "wedding photographer in your town" or "commercial photographer near me", plus Google Business Profile alignment.</p></div>
<div class="need"><h3>You own everything</h3><p>The complete source code, your own domain, and your images stay yours. No lock-in, no export fees.</p></div>
</div>
</div></section>

<section><div class="wrap">
<p class="label">Every kind of photographer</p>
<h2 class="d">Set up for <em>how your clients book you</em></h2>
<div class="genres">${genres.map(([a, b]) => `<div class="genre"><h3>${esc(a)}</h3><p>${esc(b)}</p></div>`).join("")}</div>
</div></section>

<section class="band"><div class="wrap">
<p class="label">Custom vs. builders</p>
<h2 class="d">Photography site builders vs. <em>a site built for you</em></h2>
<div class="tw"><table class="cmp">
<thead><tr><th></th><th>Squarespace / Wix / Format</th><th>FreeSite Company</th></tr></thead>
<tbody>
<tr><td><b>Setup</b></td><td>You design it yourself, on your weekends</td><td>I build it for you, free</td></tr>
<tr><td><b>Look</b></td><td>A template many photographers also use</td><td>Custom design for your work</td></tr>
<tr><td><b>Cost</b></td><td>Typically $20–$50/month and up, depending on plan</td><td>$0 to build, $9.99/month if you keep it</td></tr>
<tr><td><b>Image SEO &amp; licensing</b></td><td>Basic fields; limited control</td><td>Full control of titles, alt text, sitemaps, metadata and license pages</td></tr>
<tr><td><b>Ownership</b></td><td>Locked to the platform</td><td>You get all the code</td></tr>
</tbody></table></div>
<p class="note">Builder pricing varies by plan and changes over time; check current pricing before comparing.</p>
</div></section>

${workSection(["hobby", "dobson", "passport"])}
${includedSection()}
${stepsSection()}
${faqSection(faqs)}
${linksSection("Other businesses I build for", [
  ["Photographers & artists (portfolio)", `/${industryPath(industries.find((i) => i.slug === "photographers-artists"))}/`],
  ...industries.filter((x) => x.slug !== "photographers-artists").slice(0, 7).map((x) => [x.label, `/${industryPath(x)}/`]),
  ["All business types", "/free-website-for-small-business/"],
])}
${finalCta("Ready to show your work <em>properly?</em>")}`;

  const imgs = Object.values(shots).map(([f, alt]) => ({ loc: `${SITE}${P(f)}`, alt }));
  const html = layout({
    path,
    title,
    description,
    body,
    css: photoCss,
    ogImage: `${SITE}${P("alpenglow-mountain-peaks")}`,
    jsonld: [
      serviceLd({ name: "Free portfolio website for photographers", description, path, area: ["Squamish", "Whistler", "Vancouver", "British Columbia", "Canada"] }),
      faqLd(faqs),
      breadcrumbLd(trail),
    ],
  });
  return { html, path, images: imgs };
}
