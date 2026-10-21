// Blog posts, rendered to /blog/<slug>/ by build.mjs. Body is trusted HTML.
// Keep claims honest: no invented stats, testimonials or client numbers.
export const posts = [
  {
    slug: "what-pages-does-a-small-business-website-need",
    title: "What Pages Does a Small Business Website Need?",
    description:
      "The pages every small business website needs, and the ones you can skip: home, services, about, contact, reviews, FAQ and more, with what to put on each.",
    date: "2026-10-21",
    excerpt:
      "Most small business sites need five or six pages, not twenty. Here's what each one is for, what to put on it, and which pages you can safely skip.",
    body: `
<p>One of the first things people ask when we start a build is "how many pages do I need?" For most small businesses the answer is fewer than you think. A tight, five-page site that answers your customers' questions beats a sprawling one that nobody finishes reading.</p>

<h2>1. Home</h2>
<p>Your homepage has one job: tell someone in a few seconds what you do, where you do it, and how to get started. That means:</p>
<ul>
<li>A clear headline that says what you do and where ("Emergency plumbing in Squamish", not "Welcome to our website").</li>
<li>A button to the main action: call, book, get a quote or order.</li>
<li>A short list of your main services, each linking to more detail.</li>
<li>Something that builds trust: real reviews, photos of your actual work, or how long you've been around.</li>
</ul>

<h2>2. Services (or Menu, or Shop)</h2>
<p>This is where people decide whether you do what they need. If you offer a few distinct services, give each one its own page. It's better for customers, and it's better for Google, because each page can target the way people actually search ("deck builder Squamish", "brake repair Whistler"). Include what's included, who it's for, and prices or a starting price if you can.</p>

<h2>3. About</h2>
<p>People buy from people. A short, honest About page with a real photo of you or your team does more than a paragraph of buzzwords. Say who you are, how you got started, where you work, and why someone should trust you.</p>

<h2>4. Contact</h2>
<p>Make it impossible to miss:</p>
<ul>
<li>A phone number that's tappable on a phone.</li>
<li>A short form (name, email or phone, message). The fewer fields, the more people finish it.</li>
<li>Your address and a map if customers come to you, or the areas you serve if you go to them.</li>
<li>Your hours.</li>
</ul>
<p>Put your phone number and a contact button in the header of every page, too.</p>

<h2>5. Reviews or Work</h2>
<p>Real reviews from real customers, or photos of real jobs, are the most persuasive thing on any small business site. Pull reviews from Google with the customer's name, and keep them honest. Never make them up. For trades, landscapers and contractors, a gallery of finished projects does the same job.</p>

<h2>6. FAQ (optional, but worth it)</h2>
<p>Every question you answer on the phone is a candidate: Do you serve my area? How much does it cost? How long does it take? Do you direct-bill? A good FAQ saves you time, helps customers decide, and can show up directly in Google results.</p>

<h2>Pages you can probably skip</h2>
<ul>
<li><strong>A blog you won't update.</strong> A blog with one post from 2021 looks abandoned. Only start one if you'll keep it going.</li>
<li><strong>A "News" page.</strong> Same problem.</li>
<li><strong>Separate pages for every staff member</strong>, unless you're a clinic or salon where people book a specific person.</li>
<li><strong>A "Testimonials" page nobody visits.</strong> Put reviews where people are deciding, on your home and service pages.</li>
</ul>

<h2>Pages you might need</h2>
<ul>
<li><strong>Service area pages</strong> if you work in several towns and want to show up in each.</li>
<li><strong>Booking</strong> if you take appointments, ideally built into the site rather than a link to a separate app.</li>
<li><strong>Privacy policy</strong> if you collect personal information through forms or run ads.</li>
</ul>

<h2>Want it built for you?</h2>
<p>Every FreeSite Company build includes the pages your business actually needs, written in plain language and set up for local search. The build is free, you see it before you pay anything, and you only pay $9.99 a month if you keep it.</p>
`,
  },
  {
    slug: "why-is-my-website-slow-on-phones",
    title: "Why Is My Website Slow on Phones? (And How to Fix It)",
    description:
      "A slow website loses customers before they see your prices. The most common reasons small business sites are slow on phones, how to test yours, and how to fix it.",
    date: "2026-10-21",
    excerpt:
      "Huge photos, too many apps and bloated templates: the usual reasons a small business site crawls on a phone, how to test yours for free, and what actually fixes it.",
    body: `
<p>Most people visiting a small business website are on their phone, often on a patchy mobile connection. If your site takes ages to load, a lot of them leave before they see what you do. Here's why sites get slow, and what to do about it.</p>

<h2>First, test it</h2>
<p>Google's free <strong>PageSpeed Insights</strong> tool tests your site on a simulated phone and tells you what's slowing it down. Run your homepage and your most important service page. Don't obsess over the score; look at the list of problems it gives you. And try your own site on your own phone, on mobile data, not your office Wi-Fi.</p>

<h2>Reason 1: Huge photos</h2>
<p>This is the number one cause we see. A photo straight off a modern phone or camera can be several megabytes. Uploaded as-is, one hero image can weigh more than the rest of the site combined.</p>
<p><strong>The fix:</strong> resize photos to the size they're actually shown (rarely more than about 2000 pixels wide), compress them, and use modern formats like WebP. Images below the first screen should be "lazy loaded" so they only download when someone scrolls to them.</p>

<h2>Reason 2: Too many plugins, widgets and apps</h2>
<p>Every chat bubble, pop-up, social feed, review widget and tracking pixel adds code the phone has to download and run. Individually they're small. Together they add up, and some load more code from other servers.</p>
<p><strong>The fix:</strong> audit what's on the site. If you can't say what a plugin does for your business, remove it. Embed a few reviews directly instead of loading a live widget.</p>

<h2>Reason 3: A heavy template</h2>
<p>Many off-the-shelf themes are built to do everything: sliders, animations, ten font weights, page builders. Your site only uses a fraction of that, but the visitor's phone downloads all of it.</p>
<p><strong>The fix:</strong> a simpler theme, or a site built for what you actually need. Hand-coded sites tend to be much lighter for this reason.</p>

<h2>Reason 4: Video backgrounds</h2>
<p>A full-screen video behind your headline looks great on a desktop and can be painful on a phone.</p>
<p><strong>The fix:</strong> show a still image on mobile, or compress the video heavily and keep it short.</p>

<h2>Reason 5: Slow or overloaded hosting</h2>
<p>Cheap shared hosting can make every page wait before it even starts loading.</p>
<p><strong>The fix:</strong> good hosting with a content delivery network (CDN), which serves your site from servers close to your visitors.</p>

<h2>Reason 6: Fonts</h2>
<p>Loading several custom fonts and weights can delay your text from appearing.</p>
<p><strong>The fix:</strong> stick to one or two fonts and only the weights you use.</p>

<h2>Why it matters beyond impatience</h2>
<p>Speed affects how Google sees your site too. Google measures real-world loading experience (its "Core Web Vitals") and uses page experience as one of many signals. A fast site won't rank on speed alone, but a slow one makes everything else harder.</p>

<h2>The quick checklist</h2>
<ul>
<li>Resize and compress every image. Use WebP where you can.</li>
<li>Lazy-load images below the fold.</li>
<li>Remove plugins and widgets you don't need.</li>
<li>Swap video backgrounds for images on mobile.</li>
<li>Use one or two fonts.</li>
<li>Host on a fast server with a CDN.</li>
</ul>

<h2>Or let us handle it</h2>
<p>Every FreeSite Company site is hand-coded, with compressed images and fast hosting, so it loads quickly on a phone from day one. The build is free, and you only pay $9.99 a month if you keep it.</p>
`,
  },
  {
    slug: "do-i-need-a-website-if-i-have-facebook-instagram",
    title: "Do I Need a Website If I Already Have Facebook or Instagram?",
    description:
      "Is a Facebook page or Instagram account enough for a small business? What social media does well, where it falls short, and why most businesses still need a website.",
    date: "2026-10-21",
    excerpt:
      "Social media is great for showing off your work. But you don't own it, Google barely sees it, and not every customer is on it. Here's how they work together.",
    body: `
<p>Plenty of small businesses run entirely on a Facebook page or an Instagram account, and it works, up to a point. Social media is a great tool. It's just not a replacement for a website. Here's an honest look at why.</p>

<h2>What social media does well</h2>
<ul>
<li><strong>Showing your work.</strong> Photos and short videos of real jobs, dishes or haircuts are perfect for Instagram.</li>
<li><strong>Staying in touch.</strong> Regulars see your updates, specials and news.</li>
<li><strong>It's free and fast.</strong> You can post from your phone in a minute.</li>
</ul>
<p>Keep doing all of that. The question is what happens when someone new is looking for a business like yours.</p>

<h2>Where social media falls short</h2>

<h3>1. Google doesn't show it like a website</h3>
<p>When someone searches "electrician near me" or "best brunch in Squamish", Google shows Business Profiles and websites. Social pages rarely rank for those searches, and a lot of what's on them isn't easily searchable at all.</p>

<h3>2. You don't own it</h3>
<p>Your page lives on someone else's platform, under their rules. Accounts get hacked, locked or suspended, and algorithm changes can cut how many people see your posts overnight. Your website and domain are yours.</p>

<h3>3. Not everyone is on it</h3>
<p>Some of your best potential customers don't have Facebook or Instagram, or won't log in to see your page. A website works for everyone with a browser.</p>

<h3>4. Key information gets buried</h3>
<p>Your prices, service area, hours and how to book are scattered across old posts. On a website, they're one tap away, every time.</p>

<h3>5. It looks less established</h3>
<p>Fair or not, many people see a business with only a Facebook page as smaller or riskier, especially for bigger jobs like renovations, or anything involving their home or health.</p>

<h2>How they work together</h2>
<p>The best setup is both:</p>
<ul>
<li><strong>Your website</strong> is home base: what you do, where, prices, reviews, and how to book or contact you.</li>
<li><strong>Your Google Business Profile</strong> gets you on the map and links to your website.</li>
<li><strong>Social media</strong> shows off your work and sends people to your website to book.</li>
</ul>
<p>Put your website link in your Instagram bio and on your Facebook page, and link your social accounts from your website. Each one makes the others stronger.</p>

<h2>"But a website is expensive"</h2>
<p>It doesn't have to be. A simple, fast site with the pages you actually need (see <a href="/blog/what-pages-does-a-small-business-website-need/">what pages a small business website needs</a>) is enough for most businesses. And it's one of the few marketing tools that keeps working while you sleep.</p>

<h2>Where we fit</h2>
<p>FreeSite Company builds small businesses a custom website for free. You see the finished site before you pay anything, and if you keep it, hosting and support is $9.99 a month. If you don't love it, you walk away and owe nothing.</p>
`,
  },
  {
    slug: "how-much-does-a-small-business-website-cost-canada",
    title: "How Much Does a Small Business Website Cost in Canada?",
    description:
      "What a small business website really costs in Canada in 2026: DIY builders, freelancers, agencies and the ongoing costs nobody mentions up front.",
    date: "2026-10-19",
    excerpt:
      "DIY builders, freelancers, agencies and free-build programs all price websites differently. Here's what you're actually paying for, and the ongoing costs nobody mentions up front.",
    body: `
<p>It's the first question every business owner asks, and the honest answer is "anywhere from $0 to $10,000+". That's not helpful on its own, so here's how the options actually break down, and what you should be paying attention to besides the sticker price.</p>

<h2>Option 1: Build it yourself (Wix, Squarespace, Shopify)</h2>
<p><strong>Typical cost:</strong> roughly $20–$50 a month for the plan, plus your time.</p>
<p>Website builders are a real option. You pick a template, drag in your text and photos, and you can have something online in a weekend. The catch is that the cheapest plans usually don't include the things a business needs, like a custom domain without the builder's branding, online booking or a store, so most businesses end up on a mid-tier plan.</p>
<p>The bigger cost is time. Getting a template to look good on a phone, writing your page titles for Google and compressing photos so the site loads quickly is a skill. If your weekends are worth something, factor that in.</p>

<h2>Option 2: Hire a freelancer</h2>
<p><strong>Typical cost:</strong> a few hundred to a few thousand dollars up front.</p>
<p>The range here is huge because "freelancer" covers everyone from a student installing a theme to a senior designer with fifteen years of experience. Ask to see live sites they've built (not just screenshots), and ask what happens after launch: who hosts it, who fixes it when it breaks, and what that costs.</p>

<h2>Option 3: Hire a web agency</h2>
<p><strong>Typical cost:</strong> $3,000–$10,000 or more up front, often plus a monthly retainer.</p>
<p>Agencies bring a team: a strategist, a designer, a developer, a project manager. For a large business with complex needs that's worth it. For a café, a contractor or a clinic, you're often paying for meetings and process you don't need.</p>

<h2>The costs nobody mentions up front</h2>
<ul>
<li><strong>Domain name:</strong> usually $15–$30 a year for a .com or .ca.</li>
<li><strong>Hosting:</strong> included with builders; separate with most freelancers and agencies.</li>
<li><strong>Email:</strong> a professional address (you@yourbusiness.ca) usually comes from Google Workspace or Microsoft 365 and is billed per person.</li>
<li><strong>Changes:</strong> new hours, a new menu, a new service. Find out if updates are included or billed hourly.</li>
<li><strong>Booking or payment tools:</strong> many charge their own monthly fee or a per-transaction fee.</li>
</ul>

<h2>What actually matters more than price</h2>
<p><strong>Do you own it?</strong> With most builders you can't take your site with you if you leave. With a custom site you should get the code, so you're never locked in.</p>
<p><strong>Is it fast on a phone?</strong> Most of your visitors are on their phone. A slow site loses people before they see your prices.</p>
<p><strong>Can people find you?</strong> Page titles, local business schema and a matching Google Business Profile are what get you into local search results. A pretty site nobody finds isn't doing its job.</p>

<h2>Where we fit</h2>
<p>At FreeSite Company I build small businesses a custom, hand-coded website for free, with two rounds of revisions. You see the finished site before you pay anything. If you love it, keeping it online with hosting and support is $9.99 a month. If you don't, you walk away and owe nothing. You own the code either way.</p>
`,
  },
  {
    slug: "wix-vs-squarespace-vs-custom-website",
    title: "Wix vs Squarespace vs a Custom Website: What Small Businesses Should Know",
    description:
      "An honest comparison of Wix, Squarespace and a custom-built website for small businesses: cost, speed, ownership, SEO and when each one makes sense.",
    date: "2026-10-19",
    excerpt:
      "Website builders are great for some businesses and a trap for others. An honest look at ownership, speed, SEO and what happens when you want to leave.",
    body: `
<p>I build custom websites for a living, so you'd expect me to tell you Wix and Squarespace are terrible. They aren't. They're good products, and for some businesses they're the right call. Here's an honest comparison so you can decide for yourself.</p>

<h2>When a website builder makes sense</h2>
<ul>
<li>You enjoy design and want to tinker with your own site.</li>
<li>You need something online this weekend and can live with a template look.</li>
<li>You're testing an idea and don't know yet if the business will stick around.</li>
</ul>
<p>If that's you, Squarespace tends to give you a more polished look out of the box, and Wix gives you more freedom to drag things around (which also makes it easier to break the mobile layout).</p>

<h2>Where builders fall short for a business</h2>
<h3>You don't own your site</h3>
<p>This is the big one. A Wix site can't be exported and moved to another host. Squarespace lets you export some content, but not your design. If prices go up, or you outgrow the platform, you're starting over. With a custom site you get the code, and any developer can host or change it.</p>
<h3>Speed</h3>
<p>Builders load a lot of code to support every possible feature, whether your site uses it or not. A hand-coded site only loads what it needs, which usually makes it noticeably faster on a phone. Speed matters because people leave slow sites, and Google uses page experience as one of its signals.</p>
<h3>Everyone's site looks a bit the same</h3>
<p>Templates are popular because they're good, which means a lot of businesses in your town are using the same ones. A custom design is built around your business, your photos and what your customers need to see first.</p>
<h3>The monthly bill never stops</h3>
<p>Builders charge every month, forever, and the plans that remove branding and add booking or ecommerce cost more. Over a few years that adds up to the price of a custom site.</p>

<h2>Side by side</h2>
<div class="table"><table>
<thead><tr><th></th><th>Wix / Squarespace</th><th>Custom website</th></tr></thead>
<tbody>
<tr><td>Up-front cost</td><td>$0 + your time</td><td>Usually $1,000s (or $0 with us)</td></tr>
<tr><td>Monthly</td><td>About $20–$50</td><td>Hosting, often less</td></tr>
<tr><td>Design</td><td>Template</td><td>Built for you</td></tr>
<tr><td>Speed</td><td>Okay</td><td>Fast, if built well</td></tr>
<tr><td>Ownership</td><td>Locked to the platform</td><td>You own the code</td></tr>
<tr><td>Who does the work</td><td>You</td><td>Your designer</td></tr>
</tbody></table></div>

<h2>The middle ground</h2>
<p>The usual reason people pick a builder is that a custom site costs thousands up front. That's the problem FreeSite Company exists to solve: I build you a custom site for free, you see it live before paying anything, and you keep it online for $9.99 a month only if you love it. You still own all the code.</p>
<p>Already on Wix or Squarespace? That's fine. I can rebuild your site from what you already have, and you can cancel the builder once the new one is live.</p>
`,
  },
  {
    slug: "local-seo-checklist-small-business-bc",
    title: "Local SEO Checklist for Small Businesses in BC",
    description:
      "A plain-English local SEO checklist for BC small businesses: Google Business Profile, reviews, your website, local pages and the mistakes that keep you off the map.",
    date: "2026-10-19",
    excerpt:
      "How to show up when someone nearby searches for what you do. A plain-English checklist covering your Google Business Profile, reviews and your website.",
    body: `
<p>When someone in Squamish, Kelowna or Victoria searches "plumber near me" or "best brunch", Google shows a map with three businesses on it, then the regular results. Getting into that map is called local SEO, and most of it is free. Here's the checklist I run through for every business I build a site for.</p>

<h2>1. Claim and complete your Google Business Profile</h2>
<ul>
<li>Claim your profile at <a href="https://business.google.com" rel="noopener" target="_blank">business.google.com</a> and verify it.</li>
<li>Pick the most specific <strong>primary category</strong> you can ("Mexican restaurant", not just "Restaurant"). Add secondary categories for other things you do.</li>
<li>Fill in everything: hours, holiday hours, services, service area, attributes, a description.</li>
<li>Add real photos of your work, your team and your space, and keep adding them.</li>
<li>Link to your website, and to a booking page if you have one.</li>
</ul>

<h2>2. Keep your name, address and phone identical everywhere</h2>
<p>Your business name, address and phone number should match exactly on your website, Google, Facebook, Instagram, Yelp and any directories. "Suite 4, 123 Main St" in one place and "123 Main Street #4" in another isn't fatal, but consistent details help Google trust that it's all the same business.</p>

<h2>3. Ask for reviews, every time</h2>
<p>Reviews are one of the strongest local ranking signals, and they're what people read before they call. Get your review link from your Google Business Profile, then send it by text or email right after a job goes well. Reply to every review, good or bad, briefly and politely. Never buy reviews or offer anything in exchange for them; it breaks Google's rules and can get your profile suspended.</p>

<h2>4. Make your website do its part</h2>
<ul>
<li><strong>Say where you are.</strong> Mention your town and the areas you serve in your page titles and on the page, in plain sentences.</li>
<li><strong>One page per main service.</strong> A contractor with separate pages for decks, fences and renovations will rank for each one better than a single "Services" page.</li>
<li><strong>Add local business schema.</strong> This is code that tells Google your business type, hours, address and phone in a format it reads directly.</li>
<li><strong>Be fast on a phone.</strong> Compress your photos and avoid heavy page builders.</li>
<li><strong>Make calling easy.</strong> A tap-to-call phone number in the top of every page.</li>
</ul>

<h2>5. Get mentioned locally</h2>
<p>Links and mentions from other local sites (your chamber of commerce, local news, event sponsorships, suppliers and partners) tell Google you're a real part of the community. One link from a respected local site is worth more than dozens from random directories.</p>

<h2>6. Mistakes that keep you off the map</h2>
<ul>
<li>Stuffing your town name into your business name on Google. It's against the guidelines.</li>
<li>Using a home address you don't want public instead of setting a service area.</li>
<li>A website with no text, just images. Google can't read your services out of a photo.</li>
<li>Out-of-date hours. Nothing loses a customer faster than showing up to a locked door.</li>
</ul>

<h2>Want this done for you?</h2>
<p>Every FreeSite Company build includes the website side of this checklist: local schema, page titles, a sitemap, fast loading and a site that lines up with your Google Business Profile. The build is free, and you only pay $9.99 a month if you keep it.</p>
`,
  },
];
