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
.mods{display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:18px}
.mod{background:#fff;border:1px solid var(--line);border-radius:20px;overflow:hidden;display:flex;flex-direction:column}
.mod .vis{aspect-ratio:16/9;background:#111;overflow:hidden;position:relative}
.mod .vis img{width:100%;height:100%;object-fit:cover}
.mod .body{padding:20px 22px 24px}
.mod h3{margin:0 0 6px;font-family:Fraunces,Georgia,serif;font-size:1.35rem;line-height:1.2}
.mod p{margin:0 0 12px;color:var(--muted);font-size:16px}
.mod ul{margin:0;padding:0;list-style:none;display:grid;gap:6px;font-size:15px}
.mod li{display:flex;gap:8px}
.mod li:before{content:"✓";color:var(--green);font-weight:700}
.tag{display:inline-block;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border-radius:999px;padding:3px 10px;background:#eaf2ec;color:var(--green);margin-bottom:10px}
.tag.opt{background:#f6ead3;color:#8a5f12}
.vis.dark{display:grid;place-items:center;background:linear-gradient(135deg,#17231d,#0e1512);padding:18px}
.login{width:min(260px,100%);background:#fffefb;border-radius:12px;padding:16px;box-shadow:0 18px 40px -16px rgba(0,0,0,.6)}
.login b{display:block;font-size:14px;margin-bottom:10px}
.login i{display:block;height:28px;border:1px solid var(--line);border-radius:8px;margin-bottom:8px;font-style:normal;font-size:12px;color:var(--muted);padding:5px 10px}
.login u{display:block;text-decoration:none;text-align:center;background:var(--green);color:#fff;border-radius:999px;font-size:13px;font-weight:600;padding:6px}
.stockmock{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;padding:6px;background:#111;height:100%}
.stockmock img{width:100%;height:100%;object-fit:cover;border-radius:3px}
.stockmock span{position:absolute;right:10px;bottom:10px;background:var(--green);color:#fff;font-size:12px;font-weight:600;border-radius:999px;padding:5px 12px}
.plans{width:100%;min-width:620px;border-collapse:separate;border-spacing:0;background:#fff;border:1px solid var(--line);border-radius:16px;overflow:hidden;text-align:left}
.plans th,.plans td{padding:12px 14px;border-top:1px solid var(--line);text-align:center;font-size:15px}
.plans td:first-child,.plans th:first-child{text-align:left}
.plans thead th{border-top:0;vertical-align:bottom;font-weight:400;background:#fff}
.plans thead th.hl{background:var(--green);color:#fff}
.plans .nm{font-family:Fraunces,Georgia,serif;font-size:1.3rem;font-weight:600}
.plans .pr{font-family:Fraunces,Georgia,serif;font-size:2rem;font-weight:600;color:var(--green);line-height:1.1}
.plans th.hl .pr{color:#fff}
.plans small{display:block;font-size:12px;opacity:.75}
.plans .pop{display:inline-block;background:var(--gold);color:var(--fg);font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;border-radius:999px;padding:2px 10px;margin-bottom:6px}
.plans .grp td{background:var(--bg);text-align:left;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--green)}
.plans td.g{background:rgba(22,107,69,.07)}
.plans .y{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--green);color:#fff;font-size:12px}
.plans .n{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;background:rgba(27,26,23,.07);color:rgba(27,26,23,.35);font-size:12px}
.plans .t{font-size:13px;font-weight:600;color:rgba(27,26,23,.75)}
.plans tfoot td{padding:16px 10px}
.plans tfoot .btn{padding:9px 16px;font-size:14px}
.note{font-size:14px;color:var(--muted);margin-top:12px}
@media (max-width:860px){.mosaic{grid-auto-rows:44px}.ph-hero .wrap,.ex{grid-template-columns:1fr}.ph-hero h1{max-width:none}}
`;

export const photoFaqs = [
  ["Is the website really free for photographers?", "Yes. I build your portfolio for free, including two rounds of revisions. If you love it, hosting and support start at $9/month for your first 3 months ($13/month after). If you don't, you owe nothing and I won't send you an invoice."],
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
  const description = "A free custom portfolio website for photographers: full-quality galleries, client proofing, stock and print sales, and image SEO. Built free, from $9/month if you keep it.";
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
<p class="lead">Your photos deserve better than a template everyone else is using. I'm a working photographer in Squamish, BC, and I build portfolio sites the way I wish mine had been built: big, sharp images, fast on every phone, and set up so clients can find, book and license you. The build is free. Hosting is from $9/month, and only if you keep it.</p>
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

<section class="band"><div class="wrap">
<p class="label">What your portfolio could look like</p>
<h2 class="d">Big images. <em>Fast pages.</em> Nothing in the way.</h2>
<div class="gal">${gallery}</div>
<p class="note">Sample images are previews from my own library at thefulltimehobby.com/stock. Your site would carry your work, in your style.</p>
</div></section>

<section><div class="wrap">
<p class="label">What's included</p>
<h2 class="d">Not just a portfolio. <em>Your whole photography business, online.</em></h2>
<p class="local" style="margin-bottom:28px">This is the platform I run my own photo business on. Every module below is built into your site, not bolted on from five different subscriptions.</p>
<div class="mods">
<div class="mod"><div class="vis">${img("alpenglow")}</div><div class="body"><span class="tag">Included</span><h3>Portfolio &amp; galleries</h3><p>Full-bleed galleries organized by series, sport, location or client type, with a layout designed around your style.</p><ul><li>Fast WebP/AVIF images, sharp on any screen</li><li>Lightbox viewing and clean project pages</li><li>About page and artist statement</li></ul></div></div>
<div class="mod"><div class="vis"><div class="stockmock">${img("tusk")}${img("surf")}${img("dome")}${img("cabin")}${img("rime")}${img("inversion")}</div><span style="position:absolute;right:10px;bottom:10px;background:#166b45;color:#fff;font-size:12px;font-weight:600;border-radius:999px;padding:5px 12px">License this photo</span></div><div class="body"><span class="tag">Included</span><h3>Stock licensing page</h3><p>Your own stock library, like the one on thefulltimehobby.com: every photo gets its own page that Google can find and a buyer can license.</p><ul><li>Filterable grid and lightbox</li><li>License tiers you set (web, commercial, extended)</li><li>Per-photo pages, location hubs and embedded IPTC metadata</li></ul></div></div>
<div class="mod"><div class="vis dark"><div class="login"><b>Client login</b><i>Gallery password</i><u>View my photos</u></div></div><div class="body"><span class="tag">Included</span><h3>Client login portal</h3><p>Private, password-protected galleries so clients can view and download their photos without hunting through Drive links.</p><ul><li>One link and password per client or shoot</li><li>Download All in a single zip</li><li>Cover slideshow, ordered by capture time</li></ul></div></div>
<div class="mod"><div class="vis">${img("aurora")}</div><div class="body"><span class="tag">Included</span><h3>Contact &amp; booking enquiries</h3><p>Enquiry forms that ask for what you need to quote: date, location, budget and shot list, delivered straight to your inbox.</p><ul><li>Tap-to-call and tap-to-email on phones</li><li>Booking link to your calendar if you use one</li><li>Instant thank-you page for ad and referral tracking</li></ul></div></div>
<div class="mod"><div class="vis">${img("train")}</div><div class="body"><span class="tag">Included</span><h3>Gear rentals page</h3><p>Rent out your camera gear? A page built to rank for local searches like "camera gear rentals" in your town, with a booking link to your rental platform.</p><ul><li>Gear cards with photos and prices</li><li>Service and FAQ schema for Google</li><li>A second income stream from gear you already own</li></ul></div></div>
<div class="mod"><div class="vis">${img("highline")}</div><div class="body"><span class="tag opt">If you want it</span><h3>Print shop</h3><p>Sell prints and products directly: products, cart and Stripe or PayPal checkout, with order management behind it. Or simply link to the print lab you already use on any plan.</p><ul><li>Cart, checkout and inventory (Commerce plan)</li><li>Abandoned-cart recovery</li><li>Store build is quoted separately</li></ul></div></div>
<div class="mod"><div class="vis">${img("bear")}</div><div class="body"><span class="tag">Included</span><h3>Image SEO &amp; local search</h3><p>The part most builders skip. Your work becomes findable in Google Images and local searches, not just by people who already know you.</p><ul><li>File names, alt text, captions and image sitemap</li><li>Local business and service schema</li><li>Google Business Profile alignment</li></ul></div></div>
<div class="mod"><div class="vis">${img("rime")}</div><div class="body"><span class="tag">Included</span><h3>You own all of it</h3><p>The complete source code, your own domain and your images. Take it anywhere, hand it to another developer, or keep it with me.</p><ul><li>No lock-in, no export fees</li><li>Hosting, security monitoring and backups</li><li>Phone and email support</li></ul></div></div>
</div>
</div></section>

<section><div class="wrap">
<p class="label">Every kind of photographer</p>
<h2 class="d">Set up for <em>how your clients book you</em></h2>
<div class="genres">${genres.map(([a, b]) => `<div class="genre"><h3>${esc(a)}</h3><p>${esc(b)}</p></div>`).join("")}</div>
</div></section>

<section class="band"><div class="wrap">
<p class="label">Compare plans</p>
<h2 class="d">The build is free. <em>Pick how much help you want.</em></h2>
<p class="local" style="margin-bottom:24px">Month-to-month. Cancel anytime and keep your site. You pay nothing until you love it.</p>
<div class="tw"><table class="plans">
<thead><tr><th></th>
<th><div class="nm">Starter</div><div class="pr">$9<span style="font-size:.9rem">/mo*</span></div><small>then $13/mo</small></th>
<th class="hl"><span class="pop">Most popular</span><div class="nm">Growth</div><div class="pr">$19<span style="font-size:.9rem">/mo*</span></div><small>then $27/mo</small></th>
<th><div class="nm">Commerce</div><div class="pr">$49<span style="font-size:.9rem">/mo</span></div><small>per month</small></th></tr></thead>
<tbody><tr class="grp"><td colspan="4">Your photography platform</td></tr><tr><td>Custom portfolio &amp; galleries</td><td><span class="y" aria-label="Included">✓</span></td><td class=g><span class="y" aria-label="Included">✓</span></td><td><span class="y" aria-label="Included">✓</span></td></tr><tr><td>Contact &amp; booking enquiry forms</td><td><span class="y" aria-label="Included">✓</span></td><td class=g><span class="y" aria-label="Included">✓</span></td><td><span class="y" aria-label="Included">✓</span></td></tr><tr><td>Stock licensing page (per-photo pages)</td><td><span class="y" aria-label="Included">✓</span></td><td class=g><span class="y" aria-label="Included">✓</span></td><td><span class="y" aria-label="Included">✓</span></td></tr><tr><td>Client login portal &amp; private galleries</td><td><span class="y" aria-label="Included">✓</span></td><td class=g><span class="y" aria-label="Included">✓</span></td><td><span class="y" aria-label="Included">✓</span></td></tr><tr><td>Gear rentals page</td><td><span class="y" aria-label="Included">✓</span></td><td class=g><span class="y" aria-label="Included">✓</span></td><td><span class="y" aria-label="Included">✓</span></td></tr><tr><td>Print shop: cart, checkout, orders</td><td><span class="n" aria-label="Not included">✕</span></td><td class=g><span class="n" aria-label="Not included">✕</span></td><td><span class="y" aria-label="Included">✓</span></td></tr><tr class="grp"><td colspan="4">Get found</td></tr><tr><td>Image SEO: alt text, sitemap, metadata</td><td><span class="y" aria-label="Included">✓</span></td><td class=g><span class="y" aria-label="Included">✓</span></td><td><span class="y" aria-label="Included">✓</span></td></tr><tr><td>Light SEO hygiene &amp; advanced analytics</td><td><span class="n" aria-label="Not included">✕</span></td><td class=g><span class="y" aria-label="Included">✓</span></td><td><span class="y" aria-label="Included">✓</span></td></tr><tr><td>1 blog post per month</td><td><span class="n" aria-label="Not included">✕</span></td><td class=g><span class="y" aria-label="Included">✓</span></td><td><span class="y" aria-label="Included">✓</span></td></tr><tr class="grp"><td colspan="4">Hosting &amp; support</td></tr><tr><td>Website hosting, security &amp; backups</td><td><span class="y" aria-label="Included">✓</span></td><td class=g><span class="y" aria-label="Included">✓</span></td><td><span class="y" aria-label="Included">✓</span></td></tr><tr><td>Domain hosting</td><td><span class="t">$19/yr extra</span></td><td class=g><span class="y" aria-label="Included">✓</span></td><td><span class="y" aria-label="Included">✓</span></td></tr><tr><td>Revisions on your build</td><td><span class="t">2</span></td><td class=g><span class="t">3</span></td><td><span class="t">3</span></td></tr><tr><td>No FreeSiteCompany.com footer credit</td><td><span class="n" aria-label="Not included">✕</span></td><td class=g><span class="y" aria-label="Included">✓</span></td><td><span class="y" aria-label="Included">✓</span></td></tr><tr><td>Priority support</td><td><span class="n" aria-label="Not included">✕</span></td><td class=g><span class="y" aria-label="Included">✓</span></td><td><span class="y" aria-label="Included">✓</span></td></tr><tr><td>Dedicated account manager</td><td><span class="n" aria-label="Not included">✕</span></td><td class=g><span class="n" aria-label="Not included">✕</span></td><td><span class="y" aria-label="Included">✓</span></td></tr></tbody>
<tfoot><tr><td></td><td><a class="btn" href="/get-started">Start free</a></td><td class="g"><a class="btn" href="/get-started">Get Growth</a></td><td><a class="btn" href="/custom">Ask about a store</a></td></tr></tfoot>
</table></div>
<p class="note">*Starter and Growth: intro price for your first 3 months, then the regular rate shown. Commerce covers hosting and support; the store build itself is quoted as a custom project. <a href="/plans">Full plan details</a></p>
</div></section>

<section><div class="wrap">
<p class="label">Custom vs. builders</p>
<h2 class="d">Photography site builders vs. <em>a site built for you</em></h2>
<div class="tw"><table class="cmp">
<thead><tr><th></th><th>Squarespace / Wix / Format</th><th>FreeSite Company</th></tr></thead>
<tbody>
<tr><td><b>Setup</b></td><td>You design it yourself, on your weekends</td><td>I build it for you, free</td></tr>
<tr><td><b>Look</b></td><td>A template many photographers also use</td><td>Custom design for your work</td></tr>
<tr><td><b>Cost</b></td><td>Typically $20–$50/month and up, depending on plan</td><td>$0 to build, then from $9/month if you keep it</td></tr>
<tr><td><b>Stock, clients, prints</b></td><td>Separate apps and subscriptions for each</td><td>Stock page, client portal, gear rentals and print shop in one site</td></tr>
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
