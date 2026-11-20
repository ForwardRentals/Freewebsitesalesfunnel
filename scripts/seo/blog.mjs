// Blog posts, rendered to /blog/<slug>/ by build.mjs. Body is trusted HTML.
// Keep claims honest: no invented stats, testimonials or client numbers.
export const posts = [
  {
    slug: "what-should-a-restaurant-website-have",
    title: "What Should a Restaurant Website Have? A Practical Checklist",
    description:
      "What a restaurant or cafe website needs: a real text menu, hours, tap-to-call, ordering and reservation links, Google Business Profile links and fast loading.",
    date: "2026-11-20",
    excerpt:
      "A restaurant website has to answer four questions fast: what's on the menu, are you open, where are you, and how do I order or book. Here's my checklist.",
    body: `
<p>A good restaurant website answers four questions in seconds: what's on the menu, are you open right now, where are you, and how do I order or reserve. If a hungry person on a phone can find all four without pinching and zooming, the site is doing its job. Here's the checklist I use when I build a site for a restaurant, cafe or food truck.</p>

<h2>1. Your menu as real text on the page</h2>
<p>The menu is the most-visited page on most restaurant sites, so make it easy. Put it on the page as ordinary text with prices, not as a photo or a PDF someone has to download and zoom into. Text loads quickly, reads well on a small screen, can be updated in a minute, and gives search engines your dish names to match. Mark vegetarian, vegan, gluten-free and common allergens clearly, and keep the menu current. An out-of-date menu is worse than none.</p>

<h2>2. Hours, address and phone at the top</h2>
<p>Put your hours, address and a tap-to-call number where people see them without scrolling, and repeat them in the footer of every page. Include holiday hours and any seasonal changes. This is also where most "are you open?" searches end, so make sure the hours on your site match your Google profile exactly.</p>

<h2>3. A clear way to order or reserve</h2>
<p>Decide what you want people to do and give it one obvious button: "Order pickup", "Reserve a table" or "Call us". Whichever tools you use, link to them from a single prominent spot rather than scattering five different links around. If you'd like reservations or table bookings to run through your own site, <a href="/online-booking-website/">online booking</a> is available as an add-on. If you sell merchandise, gift cards or packaged food, an <a href="/ecommerce-website-canada/">online store</a> is an upgrade too.</p>

<h2>4. Photos of your own food and room</h2>
<p>Skip stock photos. Show your actual dishes, your dining room, your patio and your team. Good natural light and a clean plate make a big difference, and a handful of strong photos beats a gallery of forty mediocre ones. Compress them so they don't slow the page down. If you'd rather have a professional do it, photography and video are available as add-ons.</p>

<h2>5. Connect the site to your Google Business Profile</h2>
<p>For a restaurant, most discovery happens on Google Search and Maps, not on your own website. So the two should work together. According to Google's help pages, a Business Profile has a field for a menu link, and you can add links for booking and food ordering (up to 10 links per type) from the Business Information section or in Maps. Point the menu link at the menu page on your own site so people see your current prices and dishes. You must be verified first; my guide on <a href="/blog/how-do-i-verify-my-google-business-profile/">verifying your Google Business Profile</a> walks through it, and the <a href="/blog/local-seo-checklist-small-business-bc/">local SEO checklist</a> covers the rest.</p>
<p>One thing to know: Google says third-party ordering and reservation providers can add their own links to your profile automatically. It's worth checking now and then which links are showing, and making sure they send people where you want.</p>

<h2>6. Speed on a phone</h2>
<p>People often look up a restaurant while standing on a sidewalk with one bar of signal. Big uncompressed photos, auto-playing video and heavy page builders make a site crawl. A lean, hand-coded site with sized images loads fast almost anywhere. If yours feels slow, read <a href="/blog/why-is-my-website-slow-on-phones/">Why Is My Website Slow on Phones?</a></p>

<h2>7. A short "about" and the practical details</h2>
<p>Two or three sentences about who you are and what you cook is plenty. Then the practical details people ask over and over:</p>
<ul>
<li>Parking and transit nearby</li>
<li>Wheelchair access and washrooms</li>
<li>Dog-friendly patio or not</li>
<li>Large group, private event or catering enquiries</li>
<li>Whether you take walk-ins or only reservations</li>
</ul>
<p>Each of these is one less phone call for your staff during a rush.</p>

<h2>8. Your own domain and email</h2>
<p>A name like yourrestaurant.ca on your menu cards, signage and receipts looks established and is easy to remember. Email at that address (for example, events@yourrestaurant.ca) looks better than a free webmail account when someone wants to book a group. You can check what's available with the <a href="/domains">domain search</a>.</p>

<h2>What you can skip</h2>
<ul>
<li>Autoplay music or video.</li>
<li>A menu that only exists as a scanned image.</li>
<li>A long history of the building. Keep it short.</li>
<li>Pop-ups that cover the hours and menu.</li>
</ul>

<h2>How FreeSite Company can help</h2>
<p>I'm Jeremy, a web designer in Squamish. I build restaurants, cafes and food businesses a custom, hand-coded website for free. You see it finished before paying anything, and it's $9/month (then $13/month after three months, or $89/year), month-to-month, cancel any time, only if you keep it. You own the code. If you're curious, take a look at what I build for <a href="/free-website-for-restaurants/">restaurants</a>.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://support.google.com/business/answer/6218037" rel="noopener" target="_blank">Google Business Profile Help: Add or edit local business links</a></li>
<li><a href="https://support.google.com/business/answer/9455840" rel="noopener" target="_blank">Google Business Profile Help: Add or edit your menu</a></li>
</ul>
`,
  },
  {
    slug: "does-my-small-business-website-need-to-be-accessible-canada",
    title: "Does My Business Website Need to Be Accessible in BC?",
    description:
      "Is website accessibility required for a small business in BC? What the Accessible BC Act covers today, what WCAG is, and simple fixes that help every visitor.",
    date: "2026-11-19",
    excerpt:
      "BC's accessibility law mainly targets the public sector for now, but an accessible site helps every customer. Here's where things stand and what to fix first.",
    body: `
<p>For most small private businesses in BC, there's no accessibility standard for websites that you're legally required to meet today, but the rules are developing and an accessible site is good business regardless. I'm not a lawyer, so treat this as a plain-language overview and check the official sources below for your situation.</p>

<h2>What BC's law covers right now</h2>
<p>The <em>Accessible British Columbia Act</em> passed in 2021. Its first duties (an accessibility committee, an accessibility plan and a way to collect feedback) apply to the provincial government and to organizations the regulations name, which so far are mainly public-sector bodies such as school districts, health authorities and municipalities.</p>
<p>The Act also sets up accessibility standards. The first two, Employment Accessibility and Accessible Service Delivery, were proposed to the Minister at the end of 2025 and, as far as I can tell from the Province's own pages, are still in draft form. Government decides which organizations each standard will apply to, so I can't tell you today whether or when a small business would be covered. Check the Province's accessibility standards page before relying on anything I've said here.</p>
<p>Separately, the federal <em>Accessible Canada Act</em> applies to federally regulated sectors such as banking, broadcasting and interprovincial transportation, which doesn't describe most local shops and trades.</p>

<h2>What WCAG is</h2>
<p>When people talk about accessible websites, they usually mean the Web Content Accessibility Guidelines (WCAG), an international standard published by the W3C. WCAG 2.2 is the latest version. Each requirement sits at level A, AA or AAA, and AA is the level most organizations aim for. It's organized around four ideas: content should be perceivable, operable, understandable and robust.</p>
<p>You don't need to read the whole thing. A handful of habits cover a lot of ground.</p>

<h2>Why bother if it isn't required?</h2>
<ul>
<li><strong>More people can use your site.</strong> That includes people with low vision, people who navigate by keyboard or screen reader, and anyone squinting at a phone in bright sun.</li>
<li><strong>The fixes help everyone.</strong> Readable text, clear buttons and labelled forms make a site easier for all customers.</li>
<li><strong>It lines up with good SEO and speed.</strong> Descriptive headings and image descriptions also help search engines understand your pages.</li>
</ul>

<h2>Seven practical fixes</h2>
<h3>1. Readable colour contrast</h3>
<p>Under WCAG AA, normal text needs a contrast ratio of at least 4.5:1 against its background. Large text (18pt or bigger, or 14pt or bigger if bold) needs at least 3:1. Light grey text on white is the most common failure. Free contrast checkers, such as WebAIM's, take two colours and tell you the ratio.</p>
<h3>2. Descriptions for images</h3>
<p>Every meaningful image needs a short text description (alt text) so a screen reader can describe it. A photo of your finished deck might be "Cedar deck with glass railing on a Squamish home". Purely decorative images can have empty alt text.</p>
<h3>3. Labelled forms</h3>
<p>Every field in your contact or booking form should have a visible label, not just placeholder text that vanishes when someone types. Make error messages say what went wrong.</p>
<h3>4. Headings in a sensible order</h3>
<p>Use one main heading, then section headings in order. Screen reader users often jump from heading to heading, so they work like a table of contents.</p>
<h3>5. Keyboard-friendly navigation</h3>
<p>Try using your site with only the Tab key. You should be able to reach every link, button and menu, and see where you are. If you get stuck in a menu, that's a problem worth fixing.</p>
<h3>6. Descriptive link text</h3>
<p>"Click here" tells a screen reader user nothing. "See our drain cleaning services" does.</p>
<h3>7. Text that resizes, and tap targets that fit fingers</h3>
<p>Your site shouldn't break when someone enlarges the text, and buttons should be big enough to tap on a phone. A lean, well-built mobile layout helps here, and so does speed; see <a href="/blog/why-is-my-website-slow-on-phones/">Why Is My Website Slow on Phones?</a></p>

<h2>A quick self-check</h2>
<ul>
<li>Open your site on your phone and zoom the text up.</li>
<li>Tab through the home page with your keyboard.</li>
<li>Run your main text and button colours through a contrast checker.</li>
<li>Check that each photo has a description and each form field has a label.</li>
</ul>
<p>Automated tools catch only some problems, so treat them as a starting point. If your business serves the public in a regulated or public-sector setting, ask your regulator or a lawyer what applies to you.</p>

<h2>How FreeSite Company can help</h2>
<p>I'm Jeremy, a web designer in Squamish. I build Canadian small businesses a custom, hand-coded website for free, and I build with these basics in mind: readable colours, labelled forms, proper headings and image descriptions. It's $9/month (then $13/month after three months, or $89/year), month-to-month, cancel any time, only if you keep it, and you own the code. If you're also sorting out what pages you need, see <a href="/blog/what-pages-does-a-small-business-website-need/">What Pages Does a Small Business Website Need?</a>, or have a look at <a href="/plans">the plans</a>.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/initiatives/accessibility/standards" rel="noopener" target="_blank">Province of BC: Accessibility standards</a></li>
<li><a href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/21019" rel="noopener" target="_blank">BC Laws: Accessible British Columbia Act</a></li>
<li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" rel="noopener" target="_blank">W3C: Web Content Accessibility Guidelines (WCAG) overview</a></li>
<li><a href="https://webaim.org/articles/contrast/" rel="noopener" target="_blank">WebAIM: Contrast and Color Accessibility</a></li>
</ul>
`,
  },
  {
    slug: "how-do-i-get-more-google-reviews-for-my-small-business",
    title: "How Do I Get More Google Reviews for My Business?",
    description:
      "How to get more Google reviews the honest way: use your Business Profile review link or QR code, ask at the right moment, reply to every review and avoid incentives.",
    date: "2026-11-18",
    excerpt:
      "The simplest way to get more Google reviews is to ask, every time, with a direct link. Here's how to do it within Google's rules, plus what to say and when.",
    body: `
<p>The most reliable way to get more Google reviews is to ask happy customers, right after a good experience, with a direct review link or QR code from your Google Business Profile. Don't offer discounts or freebies for reviews, because Google prohibits it. That's the whole strategy; the rest is making it a habit. Here's how I'd set it up.</p>

<h2>1. Get your review link or QR code</h2>
<p>You don't need a third-party tool for this. Google gives you a link for free:</p>
<ul>
<li>Sign in to your Google Business Profile at <a href="https://business.google.com" rel="noopener" target="_blank">business.google.com</a>.</li>
<li>Select <strong>Read reviews</strong>, then the option to get more reviews (the share icon).</li>
<li>Copy the link, or save the QR code. Google notes that QR codes can only be generated from a computer browser, not a phone.</li>
</ul>
<p>You'll need a verified profile first. If you haven't done that yet, <a href="/blog/how-do-i-verify-my-google-business-profile/">here's a plain guide to verifying your Google Business Profile</a>.</p>

<h2>2. Ask at the right moment</h2>
<p>Timing matters more than wording. The best moment is when the customer is pleased and the job is fresh in their mind:</p>
<ul>
<li>A plumber or electrician can send a text as they pack up, once the problem is fixed.</li>
<li>A salon or spa can ask at the till or in a follow-up message the same day.</li>
<li>A restaurant or cafe can put the QR code on the bill folder or the counter.</li>
<li>A photographer, contractor or coach can include the link in the thank-you email after delivery.</li>
</ul>
<p>A short, personal message works best. Something like: "Thanks so much for choosing us today. If you have a minute, a Google review really helps a small local business like ours. Here's the link." Keep it to a couple of sentences and make it easy to tap.</p>

<h2>3. Ask everyone, not just the people you expect to rave</h2>
<p>It's tempting to only message the customers you know loved you. I'd rather you ask everyone who had a normal experience with you. Reviews are supposed to reflect genuine experiences, and a profile with a natural mix of feedback is more believable to the next customer than a wall of identical five-star lines.</p>

<h2>4. Don't offer anything in exchange</h2>
<p>Google's help pages say that offering free or discounted goods or services in exchange for a review is strictly prohibited. That covers rewards for leaving a review, for changing one, or for removing a negative one. Reviews that Google suspects were influenced this way can be removed, and it isn't worth putting your profile at risk. Asking politely, with no reward attached, is fine.</p>

<h2>5. Reply to every review</h2>
<p>Replying shows future customers that a real person is paying attention. Google's own advice for replies is to keep them short and simple and stay professional. For a good review, a quick thank-you by name is plenty. For a negative one:</p>
<ul>
<li>Respond promptly and politely, using the reviewer's name.</li>
<li>Apologise where it's fair to, and acknowledge real mistakes.</li>
<li>Don't share the customer's private details or get into an argument in public.</li>
<li>Offer to continue the conversation offline, with a phone number or email.</li>
</ul>
<p>If a review looks fake or breaks Google's content policies, you can flag it from your profile rather than replying to it.</p>

<h2>6. Make asking automatic</h2>
<p>The businesses with plenty of reviews usually aren't better at asking; they've just made it a routine. A few ways to build the habit:</p>
<ul>
<li>Save your review link as a text shortcut on your phone.</li>
<li>Print the QR code on a small card, a receipt or a counter sign.</li>
<li>Add the link to your email signature and your invoices.</li>
<li>Put a "Leave us a Google review" button on your website, so happy visitors have an obvious next step.</li>
<li>If you use a CRM or booking system, send the link as part of your follow-up after each appointment. See <a href="/website-with-crm/">websites with a built-in CRM</a> and <a href="/online-booking-website/">online booking</a>.</li>
</ul>

<h2>7. Check that your profile is ready for new reviews</h2>
<p>New reviews help most when the rest of your profile is complete: correct hours, a clear primary category, real photos and a link to your website. For the full list, see my <a href="/blog/local-seo-checklist-small-business-bc/">local SEO checklist for small businesses in BC</a>.</p>

<h2>How many reviews do you need?</h2>
<p>There's no magic number. I'd focus on a steady trickle of recent, genuine reviews rather than a target. Two or three new ones a month from real customers looks healthier than fifty in a week followed by silence.</p>

<h2>How FreeSite Company can help</h2>
<p>When I build a site for a small business, I add a review button that points to your Google link and make sure your site details match your profile. The website is free to build, and you only pay $9/month (then $13/month after the first 3 months, or $89/year) if you keep it, month-to-month, cancel any time. You can see what's included on the <a href="/plans">plans page</a> and the <a href="/add-ons/">add-ons</a>, like online booking and a built-in CRM.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://support.google.com/business/answer/16816815" rel="noopener" target="_blank">Google Business Profile Help: Create a Google link or QR code to request reviews</a></li>
<li><a href="https://support.google.com/business/answer/3474122" rel="noopener" target="_blank">Google Business Profile Help: Read and reply to reviews</a></li>
</ul>
`,
  },
  {
    slug: "what-should-a-hair-salon-website-have",
    title: "What Should a Hair Salon Website Have? A Checklist",
    description:
      "What a hair salon or barbershop website needs to turn searches into bookings: a Book Now button, prices, stylist pages, a fast gallery and Google booking link.",
    date: "2026-11-17",
    excerpt:
      "A salon website has one job: get people booked. Here's the checklist I use for hair salons and barbershops, from the Book Now button to a Google booking link.",
    body: `
<p>A good hair salon website makes it easy to see what you offer, what it costs and how to book, all within a few seconds on a phone. Everything else supports that. Here's the checklist I work from when I build a site for a salon or barbershop.</p>

<h2>1. A Book Now button on every screen</h2>
<p>Most people looking for a haircut are on their phone and ready to act. Put a Book Now button in the header and again near the top of the home page, so nobody has to scroll or hunt for it. It can link to Fresha, Square, Vagaro or whatever booking tool you already use. If you'd rather have booking built into your own site, that's an <a href="/online-booking-website/">online booking add-on</a>. For the bigger picture, see <a href="/blog/how-do-i-add-online-booking-to-my-small-business-website/">How Do I Add Online Booking to My Business Website?</a></p>

<h2>2. A clear list of services and prices</h2>
<p>"Starting at" prices are fine. What frustrates people is having to message you to find out whether a cut is $40 or $120. Group your services (cuts, colour, treatments, beard trims), add rough durations, and note anything that changes the price, like hair length or a consultation first. A clear price list also means fewer calls and DMs that interrupt you mid-appointment.</p>

<h2>3. A short page for each stylist or barber</h2>
<p>Regulars book a person, not a salon. Give each stylist a photo, a few lines about what they love doing and a booking link that goes straight to their calendar. New clients find it much easier to pick someone when they can see who they'll be sitting with.</p>

<h2>4. A gallery that loads fast</h2>
<p>Your work is your best advertisement, but a slow, photo-heavy page makes people leave before they see it. Use your own photos of real cuts and colour (with the client's okay), compressed so they load quickly on mobile data. If a professional shoot is on your wish list, I also offer <a href="/add-ons/">photography and video</a>. If your current site is sluggish, <a href="/blog/why-is-my-website-slow-on-phones/">here's why it might be slow and how to fix it</a>.</p>

<h2>5. Your address, hours and parking, in plain text</h2>
<p>List your full address, opening hours, phone number and a map, plus the practical stuff: where to park, whether you take walk-ins, and your cancellation policy. Keep this as real text on the page rather than inside an image, so Google and screen readers can read it.</p>

<h2>6. A Google Business Profile that links to booking</h2>
<p>For a salon, many first impressions happen on Google Maps, before anyone visits your website. Google lets you add booking links to your Business Profile. In Google Search you select Booking, and in Google Maps you choose Edit profile and then the transaction type, then Add link and paste your booking URL. You can add up to 10 links per category and mark one as your preferred link.</p>
<p>One thing to watch: third-party booking links can sometimes show up on your profile automatically through partners, and you can't delete those from your profile settings. You'd contact the provider instead. If you haven't claimed your profile yet, start with <a href="/blog/how-do-i-verify-my-google-business-profile/">How Do I Verify My Google Business Profile?</a></p>

<h2>7. Reviews and a link to leave one</h2>
<p>Show a few genuine reviews, with the client's permission, and link to your Google profile so people can read more. Don't write or buy reviews. A simple "How was your visit? Leave us a review" link on your confirmation message or receipt is an easy way to collect real ones.</p>

<h2>8. Your Instagram, without relying on it</h2>
<p>Instagram is great for showing off your work, and a feed on your site keeps it feeling current. But your own website is the one place you control: you own the address, the content and the customer path. Social media alone isn't a full substitute, which I explain in <a href="/blog/do-i-need-a-website-if-i-have-facebook-instagram/">Do I Need a Website If I Already Have Facebook or Instagram?</a></p>

<h2>Write it the way clients search</h2>
<p>People type things like "balayage near me", "barber open Saturday" or "kids' haircut in Squamish". Use those plain words in your page titles, headings and service descriptions, and mention your town naturally. Add a short FAQ too: do you take walk-ins, how long does a colour appointment take, what's your cancellation policy, do you do consultations first. Every answer saves a phone call and makes booking feel safer for first-timers. My <a href="/blog/local-seo-checklist-small-business-bc/">local SEO checklist</a> covers the rest of the basics.</p>

<h2>What you can skip</h2>
<ul>
<li>Autoplay videos and music.</li>
<li>Pop-ups that cover the Book Now button.</li>
<li>Long "our story" pages. A short paragraph and a photo of the team is plenty.</li>
<li>A blog you won't keep up.</li>
</ul>

<h2>How FreeSite Company can help</h2>
<p>I'm Jeremy, a web designer in Squamish. I build salons and barbershops a custom, hand-coded website for free, with your services, prices and booking button front and centre. You see it finished before paying anything. If you keep it, it's $9/month (then $13/month after three months, or $89/year), month-to-month, cancel any time, and you own the code. You can see what I build for <a href="/free-website-for-salons-barbers/">salons and barbershops</a> if you'd like a look.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://support.google.com/business/answer/6218037" rel="noopener" target="_blank">Google Business Profile Help: Manage your local business links</a></li>
</ul>
`,
  },
  {
    slug: "should-i-get-a-dot-ca-or-dot-com-domain-for-my-canadian-business",
    title: "Should I Get a .ca or .com Domain for My Business?",
    description:
      "Should a Canadian small business pick a .ca or a .com? Who can register a .ca, what Google says about country domains, and how to choose and protect your name.",
    date: "2026-11-16",
    excerpt:
      "For most Canadian businesses serving Canadian customers, .ca is a solid first choice, and grabbing the .com too is a bonus. Here's how to decide.",
    body: `
<p>If your customers are mostly in Canada, a .ca domain is a perfectly good first choice, and it's the one I'd lean toward for a local business. If you already own the .com, or plan to sell well beyond Canada, a .com works just as well. The best answer is often both, pointing to the same website. Here's how I think it through with business owners.</p>

<h2>Who can register a .ca?</h2>
<p>Unlike .com, a .ca isn't open to everyone. The Canadian Internet Registration Authority (CIRA), which runs .ca, requires registrants to meet its Canadian Presence Requirements. In general that covers Canadian citizens and permanent residents, Canadian corporations and other Canadian organizations, and owners of a trademark registered in Canada. The exact categories are on CIRA's site, so check them there if your situation is unusual (a sole proprietor who recently moved, say, or a business owned from abroad).</p>
<p>For a typical Canadian small business, this is no obstacle. It's actually a small advantage: a .ca tells visitors you're a real Canadian business.</p>

<h2>What does Google say about .ca?</h2>
<p>Google's documentation says country-code domains like .ca are tied to a specific country and are a strong signal to both people and search engines that a site is meant for that country. It also notes that targeting a country can help rankings there. That's about relevance to Canadian searchers, not a magic ranking boost. A .ca won't beat a .com that has better pages, better reviews and a well-set-up <a href="/blog/how-do-i-verify-my-google-business-profile/">Google Business Profile</a>.</p>
<p>The reverse is also true. A .com doesn't stop a local business from ranking locally, as long as the site clearly shows where you work: your town, your service area, your address and phone number. My <a href="/blog/local-seo-checklist-small-business-bc/">local SEO checklist</a> covers those signals.</p>

<h2>When .ca is the better pick</h2>
<ul>
<li>You serve customers in one town, region or across Canada.</li>
<li>Your ideal .com is already taken by someone else (a different business, or a parked domain).</li>
<li>You want to look clearly Canadian, which matters to many shoppers, especially when prices are in Canadian dollars.</li>
</ul>

<h2>When .com is the better pick</h2>
<ul>
<li>You already own it and it's on your cards, truck and signage. Changing a well-known address costs more than it saves.</li>
<li>You sell to customers around the world.</li>
<li>You expect people to type your name from memory. Plenty of people still add .com by habit, so owning it avoids losing visitors to a typo.</li>
</ul>

<h2>Should I buy both?</h2>
<p>If the budget allows, registering both is a cheap way to protect your name. Pick one as your main address, then have the other redirect to it. That way a customer who types the wrong ending still lands on your site, and nobody else can pick up the look-alike name. It's optional, though. One good domain is enough to get started.</p>

<h2>How to choose the name itself</h2>
<ul>
<li><strong>Keep it short and easy to say.</strong> If you'd have to spell it out over the phone, it's too complicated.</li>
<li><strong>Use your business name</strong> where you can. It matches what's on your signs and your Google profile.</li>
<li><strong>Avoid hyphens and numbers.</strong> They're easy to mishear and mistype.</li>
<li><strong>Add your trade or town only if your name is taken.</strong> Something like yourname-squamish.ca is fine as a fallback.</li>
<li><strong>Check social handles</strong> so everything matches.</li>
</ul>

<h2>Make sure the domain is actually yours</h2>
<p>This is the part that bites people. Check three things:</p>
<ul>
<li>The registrant (the owner of record) is you or your business, not a former web designer or agency.</li>
<li>The contact email on the domain is one you still use, because renewal notices and transfer codes go there.</li>
<li>Auto-renew is on, and you know the renewal date and price. Renewal prices can differ from the first-year price, so look before you buy.</li>
</ul>
<p>If you ever lose the domain, you lose your website address and any email that uses it. I explain that connection in <a href="/blog/how-do-i-get-a-business-email-with-my-own-domain/">How Do I Get a Business Email With My Own Domain?</a></p>

<h2>Where to check availability</h2>
<p>You can search for a name at our <a href="/domains">domain search</a> to see if the .ca and .com are free. If you already own a domain elsewhere, you don't need to move it to use it with a website I build. I can point it at your site, and you can transfer it later if you wish.</p>

<h2>How FreeSite Company can help</h2>
<p>I'm Jeremy, a web designer in Squamish, BC. I build Canadian small businesses a custom, hand-coded website for free. You see it finished before paying anything, and if you keep it, it's $9/month (then $13/month after three months, or $89/year), month-to-month, cancel any time. You own the code. If you'd like help with a domain, I offer <a href="/domain-hosting/">domain hosting</a> as an add-on, along with <a href="/add-ons/">other upgrades</a>, so you don't have to untangle registrars on your own.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://www.cira.ca/en/resources/documents/domains/canadian-presence-requirements-registrants/" rel="noopener" target="_blank">CIRA: Canadian Presence Requirements for Registrants</a></li>
<li><a href="https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites" rel="noopener" target="_blank">Google Search Central: Managing multi-regional and multilingual sites</a></li>
</ul>
`,
  },
  {
    slug: "is-wordpress-really-free-what-a-wordpress-website-costs-canada",
    title: "Is WordPress Really Free? What a Site Actually Costs",
    description:
      "WordPress software is free, but a working website isn't. Here's what hosting, a domain, themes, plugins and upkeep add up to for a Canadian small business.",
    date: "2026-11-15",
    excerpt:
      "The WordPress software costs nothing, but hosting, a domain, plugins and updates do. Here's an honest look at what a WordPress site involves and the alternatives.",
    body: `
<p>Yes and no. The WordPress software itself is free: it's open source and licensed under the GPL. But a website needs somewhere to live, a domain name, a design, and someone to keep it updated, and those are where the costs come from. Here's what to expect so you can compare it with other options fairly.</p>

<h2>What's free about WordPress</h2>
<p>WordPress.org describes WordPress as open source software, licensed under the GPL (version 2 or later). That means you can download it, use it for any purpose and change it. Plenty of themes and plugins are free too.</p>
<p>That's the part people hear when they say "WordPress is free." It's true, but it's like saying a recipe is free: you still have to buy the groceries and cook the meal.</p>

<h2>What you pay for</h2>
<ul>
<li><strong>Hosting.</strong> Self-hosted WordPress needs a server. WordPress.org's requirements page recommends PHP 8.3 or greater, MariaDB 10.11 or greater (or MySQL 8.4 or greater) and HTTPS support. Hosts charge a monthly or yearly fee, and prices vary a lot by provider and plan.</li>
<li><strong>A domain name.</strong> Your <em>yourbusiness.ca</em> address is a separate yearly cost. You can <a href="/domains">search for one here</a>; domain hosting with us is $19/year.</li>
<li><strong>A theme.</strong> Free themes exist, but many businesses buy a premium theme or hire someone to customize one.</li>
<li><strong>Plugins.</strong> Contact forms, SEO tools, backups, security and online stores are usually plugins. Some are free, some are paid yearly subscriptions.</li>
<li><strong>Design and setup.</strong> Unless you're comfortable doing it yourself, someone has to build the pages, add your photos and set it up properly.</li>
<li><strong>Ongoing updates.</strong> WordPress, themes and plugins need regular updates.</li>
</ul>

<h2>WordPress.com is a different thing</h2>
<p>WordPress.com is a hosted service built on the WordPress software, and it has paid plans. At the time of writing its pricing page lists prices in US dollars, roughly US$4 to US$45 per month on yearly billing depending on the plan (Personal, Premium, Business and Commerce), and higher on month-to-month billing. Plugin installation is listed on the paid plans but not the free one. Prices change and vary by plan and billing term, so check the current page before deciding.</p>

<h2>The hidden cost: maintenance</h2>
<p>WordPress's own documentation says you should always update to the latest version, and to check that your plugins and themes are compatible before you do. Minor and security updates can apply automatically on many sites, but major releases need you to click "Update Now," and it recommends a backup first.</p>
<p>That's fine if you enjoy it, or have someone who does. If nobody is looking after the site, outdated plugins are a common way sites break. It's not a flaw in WordPress, just a job somebody has to own.</p>

<h2>When WordPress is a good fit</h2>
<ul>
<li>You publish a lot of content and want a mature editor and a huge plugin library.</li>
<li>You or a developer you trust will maintain it.</li>
<li>You need a specific plugin that only exists for WordPress.</li>
</ul>

<h2>When another route may suit you better</h2>
<ul>
<li>You'd rather not think about updates, hosting and plugin compatibility at all.</li>
<li>Your site is mainly there to be found, build trust and get calls, bookings or orders.</li>
<li>You want one predictable monthly cost instead of several small ones.</li>
</ul>
<p>If you're weighing platforms, my comparison of <a href="/blog/wix-vs-squarespace-vs-custom-website/">Wix, Squarespace and a custom website</a> covers the other common choices, and <a href="/blog/how-much-does-a-small-business-website-cost-canada/">what a small business website costs in Canada</a> puts the numbers side by side.</p>

<h2>Questions to ask before you choose</h2>
<p>Whatever platform you land on, a few questions will keep the real cost honest:</p>
<ul>
<li>Who will update the site, and how often? Is that included or extra?</li>
<li>Who handles backups and security, and what happens if the site goes down?</li>
<li>Do I own the site and the domain, and can I take them with me if I leave?</li>
<li>Which features need paid plugins or higher plans, and what do they cost per year?</li>
<li>If I need a change, can I reach a real person, and how quickly?</li>
</ul>
<p>Add up the yearly total, including the domain, then divide by twelve. That monthly number is the one worth comparing, not the headline price.</p>

<h2>How FreeSite Company is different</h2>
<p>I'm Jeremy, a web designer in Squamish, BC. I build you a custom, hand-coded website for free. You pay $9/month for the first three months, then $13/month, or $89/year, month-to-month, cancel any time, and only if you keep the site. Hosting, updates and security are handled for you, and you own the code. Bigger needs such as booking, a CRM or an online store are available as upgrades; see <a href="/add-ons/">add-ons</a> and <a href="/plans">plans</a>.</p>
<p>If you already have a WordPress site that's become a chore, or you're deciding for the first time, I'm happy to talk it through with no pressure, whichever way you go.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://wordpress.org/about/">WordPress.org: About</a></li>
<li><a href="https://wordpress.org/about/requirements/">WordPress.org: Requirements</a></li>
<li><a href="https://wordpress.org/documentation/article/updating-wordpress/">WordPress.org: Updating WordPress</a></li>
<li><a href="https://wordpress.com/pricing/">WordPress.com: Pricing</a></li>
</ul>
`,
  },
  {
    slug: "how-much-does-it-cost-to-sell-online-canada-shopify-vs-custom-store",
    title: "How Much Does It Cost to Sell Online in Canada?",
    description:
      "What does an online store really cost in Canada? A factual look at Shopify's plan prices, card processing fees, and a custom-built store for small businesses.",
    date: "2026-11-14",
    excerpt:
      "Platform fees, card fees and apps all add up. Here's how the costs of selling online break down in Canada, with approximate prices from Shopify and Stripe.",
    body: `
<p>Selling online in Canada costs you two things: the store itself (a monthly platform fee or a one-time build) and card processing on every sale, which is typically around 2.9% plus 30 cents. Everything else, such as apps, a domain and shipping, depends on what you sell. Below is how the numbers break down so you can compare options honestly. All prices are approximate and checked in November 2026; plans change, so confirm on each provider's site.</p>

<h2>Cost 1: The store platform</h2>
<p>Hosted store builders charge a monthly subscription. As an example, Shopify's Canadian pricing page currently lists these plans in Canadian dollars:</p>
<ul>
<li><strong>Basic:</strong> about $49/month paid monthly, or about $37/month if paid yearly.</li>
<li><strong>Grow:</strong> about $132/month monthly, or about $99/month yearly.</li>
<li><strong>Advanced:</strong> about $517/month monthly, or about $389/month yearly.</li>
<li><strong>Plus:</strong> from about $3,400/month.</li>
</ul>
<p>Shopify also advertises an introductory offer (a short free trial, then $1/month for the first three months). Other platforms, including Squarespace, Wix and WooCommerce on WordPress, have their own plan ladders and fees, and prices vary by plan, so it's worth pricing out the exact features you need rather than the headline number.</p>

<h2>Cost 2: Card processing</h2>
<p>Every card sale carries a fee. Stripe, one of the most common processors, lists 2.9% + $0.30 CAD for standard domestic card payments in Canada, with no monthly fee. Extra charges apply for manually entered cards (+0.5%), international cards (+0.8%) and currency conversion (+2%). Shopify's own payments rates on its Canadian plans run from roughly 2.8% + 30 cents on Basic down to 2.15% + 30 cents on Plus.</p>
<p>A quick example: on a $60 order at 2.9% + $0.30, the card fee is about $2.04. Not huge per order, but across a year it's a real cost, so it belongs in your pricing.</p>

<h2>Cost 3: The extras people forget</h2>
<ul>
<li><strong>Apps and plugins.</strong> Reviews, subscriptions, advanced shipping rules and email tools are often paid add-ons on hosted platforms.</li>
<li><strong>A domain name.</strong> You want <em>yourbusiness.ca</em>, not a platform address. You can <a href="/domains">search for one here</a>; domain hosting with us is $19/year.</li>
<li><strong>Photos.</strong> Good product photography does more for conversion than almost any setting.</li>
<li><strong>Shipping and packaging.</strong> Usually passed on to the customer, but plan for it.</li>
<li><strong>Taxes.</strong> GST/HST/PST rules depend on your sales and where you sell. I can't give tax advice; the Canada Revenue Agency and the BC government have the official rules.</li>
</ul>

<h2>Should you build a custom store instead?</h2>
<p>A custom-built store can avoid stacking a platform subscription and a pile of apps, because it only does what your business needs: products with sizes and colours, card checkout, stock counting, and pickup, local delivery or shipping options. The trade-off is that you rely on your web designer for changes, so choose someone who answers the phone.</p>
<p>That's how I do it at FreeSite Company: I build the site free, and you own the code. Online stores are an upgrade, and the details and per-sale terms are on the <a href="/ecommerce-website-canada/">online store page</a> and the <a href="/plans">plans page</a>. If you're coming from another platform, I can bring your products across.</p>

<h2>A simple way to compare</h2>
<p>Add up a year of costs for each option: platform fee x 12, plus expected card fees on your realistic sales, plus any apps and your domain. Then ask what happens if you want to leave. Can you take your products, pages and design with you? Owning your code makes that an easy answer.</p>
<p>If you're selling in person as well, or only a handful of items, a simple booking or enquiry flow may be all you need; see my post on <a href="/blog/how-do-i-add-online-booking-to-my-small-business-website/">adding online booking</a>.</p>

<h2>How FreeSite Company can help</h2>
<p>If you're weighing up selling online, send me a few of your products and I'll show you what a store could look like before you commit. No pressure, and you can always cancel any time on a month-to-month basis.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://www.shopify.com/ca/pricing" rel="noopener" target="_blank">Shopify Canada pricing</a></li>
<li><a href="https://stripe.com/en-ca/pricing" rel="noopener" target="_blank">Stripe pricing, Canada</a></li>
<li><a href="https://www.canada.ca/en/revenue-agency.html" rel="noopener" target="_blank">Canada Revenue Agency</a> (for GST/HST rules)</li>
</ul>
`,
  },
  {
    slug: "do-i-need-a-privacy-policy-on-my-small-business-website-canada",
    title: "Do I Need a Privacy Policy on My Business Website?",
    description:
      "Do you need a privacy policy on your small business website in Canada? A plain-language look at PIPEDA, BC's PIPA, what to include, and where to start.",
    date: "2026-11-13",
    excerpt:
      "If your website collects names, emails or phone numbers, a privacy policy is the sensible (and usually expected) thing to have. Here's what Canadian privacy law asks for and what to put in yours.",
    body: `
<p>If your website collects any personal information, such as names and emails from a contact form, booking details, or a newsletter sign-up, then yes, you should have a privacy policy. In Canada, private-sector privacy laws expect businesses to be open about how they handle personal information, and a policy page on your site is the easiest way to do that. I'm a web designer, not a lawyer, so treat this as a plain-language orientation and check the official sources below for your situation.</p>

<h2>Which law applies to my business?</h2>
<p>Canada's federal law is PIPEDA. The Office of the Privacy Commissioner says it covers organizations that collect, use or disclose personal information in the course of commercial activity, and it is built on 10 fair information principles, including accountability, consent, openness, limiting collection, safeguards and individual access.</p>
<p>Alberta, British Columbia and Quebec have their own private-sector laws that are considered substantially similar to PIPEDA, and organizations covered by those laws are generally exempt from PIPEDA for activity within that province. In BC, that law is the Personal Information Protection Act (PIPA). Which one applies to you can depend on where you operate and where your customers are, so if you sell across provincial lines it's worth reading the official guidance or asking a professional.</p>

<h2>What does BC's regulator say about policies?</h2>
<p>BC's Office of the Information and Privacy Commissioner says PIPA requires organizations to develop and follow policies and practices to meet their obligations, and to make those documents available on request. It also notes PIPA applies to businesses, charities, associations and non-profits in BC, and that the level of detail in your policy can depend on your size, how much personal information you handle and what you do with it. A one-person trades business doesn't need a 20-page document.</p>

<h2>What counts as personal information?</h2>
<p>The BC guidance describes it as information reasonably capable of identifying a particular individual. Examples it lists include name, address, financial information, date of birth, photographs of an individual and product preferences. On a typical small business site, that usually means:</p>
<ul>
<li>Names, emails and phone numbers from contact or quote forms.</li>
<li>Appointment details from <a href="/blog/how-do-i-add-online-booking-to-my-small-business-website/">online booking</a>.</li>
<li>Customer details collected for orders or deliveries.</li>
<li>Email addresses collected for a newsletter. (Sending marketing emails has its own rules; see <a href="/blog/can-i-email-customers-without-permission-canada-casl/">my CASL post</a>.)</li>
</ul>

<h2>What to put in a small business privacy policy</h2>
<p>The BC guidance organizes a policy under headings based on common privacy principles. Translated into plain language for a small site, cover these:</p>
<ul>
<li><strong>Who is responsible.</strong> Name a person (often you) and give a contact email or phone number.</li>
<li><strong>What you collect and why.</strong> Be specific: "your name and email so we can reply to your quote request."</li>
<li><strong>Consent.</strong> How people agree to you using their information, and how they can say no or withdraw.</li>
<li><strong>Who you share it with.</strong> For example your booking tool, payment processor or email service.</li>
<li><strong>How long you keep it.</strong> Only as long as you need it.</li>
<li><strong>How you protect it.</strong> Passwords, access limits, reputable tools.</li>
<li><strong>How people can see or correct their information</strong>, and how to make a complaint.</li>
</ul>

<h2>Where to put it</h2>
<p>Link your privacy policy in your website footer so it's reachable from every page, and link it right next to any form that collects information ("By submitting, you agree to our privacy policy"). Keep the wording human. A policy nobody can understand doesn't help your customers or you.</p>

<h2>Practical habits that matter more than the page</h2>
<ul>
<li><strong>Collect less.</strong> If you don't need a customer's birthday or home address, don't ask.</li>
<li><strong>Know where the data lives.</strong> Contact form emails, booking tools, spreadsheets, a CRM. If someone asks what you hold on them, you should be able to find it.</li>
<li><strong>Use tools you trust</strong> and check where they store data and what they do with it.</li>
<li><strong>Have a plan for a mistake.</strong> BC's regulator publishes a privacy breach quick reference guide for small and medium-sized businesses, which is a good thing to read before you need it.</li>
</ul>

<h2>Can I just copy another business's policy?</h2>
<p>I wouldn't. Their business collects different information with different tools, and copying can leave you promising things you don't do. Use the regulator's guidance as your checklist, write it for your own business, and update it when you add something new such as booking, a store or a CRM. For anything complicated, such as health information, children's data or customers outside Canada, get proper advice.</p>

<h2>How I can help</h2>
<p>When I build a site for a Canadian small business, I can help you think through where a privacy page belongs and when a new feature like <a href="/online-booking-website/">online booking</a> means it needs an update. You can see <a href="/plans">how the free website works</a>, and it's month-to-month, cancel any time. If you'd rather write the policy yourself, the sources below are the best place to start.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/pipeda_brief/">Office of the Privacy Commissioner of Canada: PIPEDA in brief</a></li>
<li><a href="https://www.oipc.bc.ca/documents/guidance-documents/2164">BC OIPC: Developing a privacy policy under PIPA (March 2019)</a></li>
<li><a href="https://www.oipc.bc.ca/documents/guidance-documents/3134">BC OIPC: Privacy breach quick reference guide for small and medium-sized businesses</a></li>
</ul>
`,
  },
  {
    slug: "how-do-i-add-online-booking-to-my-small-business-website",
    title: "How Do I Add Online Booking to My Business Website?",
    description:
      "How to add online booking to your small business website: what it does, what to look for, how to link it from Google, and when a phone call is still fine.",
    date: "2026-11-12",
    excerpt:
      "Online booking lets customers pick a time on your website without phoning or messaging first. Here's how it works, what to check before you choose a tool, and how to get it in front of customers.",
    body: `
<p>To add online booking to your website, you choose a booking tool (or have one built into your site), list your services and opening hours, and put a clear "Book now" button on your pages. Customers then pick an available time themselves, and the booking lands in your calendar. You can do this on almost any website, whether you use a booking app, a website builder's built-in feature, or a custom-built site.</p>

<h2>Who actually benefits from online booking?</h2>
<p>Booking works best when you sell appointments or fixed time slots: salons and barbers, massage and physio clinics, fitness classes, tours, cleaners, mechanics, photographers. It matters less if every job needs a site visit and a custom quote first. In that case a quote request form is usually the better front door.</p>
<p>If you're in one of those appointment businesses, see how this fits on my pages for <a href="/free-website-for-salons-barbers/">salons and barbers</a> and <a href="/free-website-for-wellness-clinics/">wellness clinics</a>, or the general <a href="/online-booking-website/">online booking website</a> page.</p>

<h2>What good online booking does</h2>
<ul>
<li><strong>Works when you're closed.</strong> Customers book at 10 pm from the couch instead of waiting until you answer the phone.</li>
<li><strong>Cuts the back-and-forth.</strong> No more "does Thursday at 2 work?" message chains.</li>
<li><strong>Collects the details you need up front</strong>, such as service type, contact info and any notes.</li>
<li><strong>Sends reminders</strong>, which can reduce no-shows. How much depends on your business, so I won't promise a number.</li>
<li><strong>Avoids double-booking</strong> by syncing with your calendar.</li>
</ul>

<h2>What to check before choosing a booking tool</h2>
<ul>
<li><strong>Can you export your customer list?</strong> Your customers are your asset. Make sure you can take their details with you if you switch tools.</li>
<li><strong>Does it match your services?</strong> Different durations, buffer time between appointments, multiple staff, classes with limited spots.</li>
<li><strong>Calendar sync.</strong> It should connect to the calendar you already use.</li>
<li><strong>Payments and deposits.</strong> If you need deposits to cut down on no-shows, check which payment processors it supports and what fees apply. Processor fees vary by plan, so read the provider's current Canadian pricing page.</li>
<li><strong>Looks and works on a phone.</strong> Most people will book from their phone, so try it yourself first. If your site is slow on mobile, read <a href="/blog/why-is-my-website-slow-on-phones/">why websites are slow on phones</a>.</li>
<li><strong>Total cost.</strong> Some tools charge per staff member, per booking, or by plan tier. Add it up for your real volume, and check current prices on the provider's own site, since they change.</li>
<li><strong>Privacy.</strong> You'll be collecting names, phone numbers and sometimes health-related notes. Collect only what you need and have a privacy policy that says what you do with it.</li>
</ul>

<h2>Where to put the booking button</h2>
<p>Put "Book now" where people already make decisions, and make it the same wording everywhere:</p>
<ul>
<li>At the top of your home page and in your menu or header.</li>
<li>On every service page, next to the service it books.</li>
<li>On your contact page, alongside your phone number for people who prefer to call.</li>
<li>In your email signature and on social media bio links.</li>
</ul>

<h2>Link your booking page from Google</h2>
<p>Your Google Business Profile can include a booking link. Google's help page says you can add booking links to your profile (up to 10 links per category), and that these local business links can't be added through the API or a spreadsheet upload, so you add them yourself in your profile. Some booking providers also offer a direct "Book" button on Google through Reserve with Google, but that's only available through select providers, so check whether the tool you're considering supports it. If your profile isn't verified yet, start with my guide on <a href="/blog/how-do-i-verify-my-google-business-profile/">verifying your Google Business Profile</a>.</p>

<h2>When a phone number is still the right answer</h2>
<p>Online booking isn't mandatory. If you do a handful of jobs a week, each one is different, and customers expect to talk to you first, a prominent phone number and a short contact form can do the job. Many businesses also keep both: booking for the routine stuff, a phone call for anything complicated. Whatever you choose, make sure your phone number is tappable on mobile.</p>

<h2>A simple way to start</h2>
<ol>
<li>List your three most common services and how long each takes.</li>
<li>Set realistic opening hours, with a buffer between appointments.</li>
<li>Pick one booking tool and test it from your own phone, start to finish.</li>
<li>Add the button to your site and your Google Business Profile.</li>
<li>Review after a month: which services get booked, and where do people drop off?</li>
</ol>

<h2>How FreeSite Company can help</h2>
<p>I build custom, hand-coded websites for Canadian small businesses for free. You pay $9/month (then $13/month after the first three months) or $89/year only if you keep it, month-to-month, cancel any time, and you own the code. Online booking is one of the upgrades I can add, along with a built-in CRM so booking enquiries and customer details sit in one place. You can see everything on the <a href="/add-ons/">add-ons page</a> or the <a href="/plans">plans page</a>.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://support.google.com/business/answer/6218037">Google Business Profile Help: Manage your local business links</a></li>
</ul>
`,
  },
  {
    slug: "how-do-i-get-a-business-email-with-my-own-domain",
    title: "How Do I Get a Business Email With My Own Domain?",
    description:
      "How to set up a professional email address like you@yourbusiness.ca: what you need, the main options, what to set up so it lands in inboxes, and what to avoid.",
    date: "2026-11-11",
    excerpt:
      "To get an email like you@yourbusiness.ca you need a domain and an email host. Here's how the pieces fit together, your options, and the settings that keep your mail out of spam.",
    body: `
<p>To get a business email address like <strong>you@yourbusiness.ca</strong>, you need two things: a domain name you own, and an email service that handles mail for that domain. You then point the domain's email (MX) records at the service and create a mailbox. Your website and your email are separate services that share one domain, so you can set up email whether or not your site is finished.</p>

<h2>Why bother with your own domain</h2>
<p>A Gmail or Hotmail address works, but it tells customers nothing about your business. An address on your own domain looks established, is easier to remember, and stays with you if you ever change email providers. If you also have a website, your email and web address match, which helps people trust a quote request or invoice from you.</p>

<h2>Step 1: Own your domain</h2>
<p>Everything starts with the domain. Search for the name you want, register it in your own name (or your business's), and keep the login somewhere safe. If a previous web person registered it for you, ask who the registrant is. You want to be able to log in yourself. You can check availability on my <a href="/domains">domain search</a>; domains are $19/year with me.</p>

<h2>Step 2: Choose an email host</h2>
<p>Domain registration doesn't automatically include a mailbox. Your common options:</p>
<ul>
<li><strong>Google Workspace:</strong> Gmail with your own domain, plus calendar, Drive and Meet. Google's pricing page lists custom business email as included on all of its plans, and storage per user depends on the plan (30 GB on Starter at the time of writing).</li>
<li><strong>Microsoft 365:</strong> Outlook-style email on your domain, popular if you already live in Word and Excel.</li>
<li><strong>Email bundled with your domain or hosting:</strong> usually the cheapest and fine for a one-person business with light needs.</li>
</ul>
<p>Prices change and vary by plan, billing term and currency, so check the provider's current pricing page for your region before deciding. I haven't quoted figures here for that reason.</p>

<h3>Which one should you pick?</h3>
<ul>
<li>If you already use Gmail and Google Calendar every day, Google Workspace is the least friction.</li>
<li>If your accountant or clients send you Office documents all day, Microsoft 365 may fit better.</li>
<li>If you just need <em>one</em> address that forwards or receives mail, the simpler option is often enough.</li>
</ul>

<h2>Step 3: Point your domain at the email service</h2>
<p>Your email host will give you a list of DNS records, mainly MX records, to add in your domain's DNS settings. That's the part that tells the internet where to deliver mail for your domain. It's copy and paste, but one typo means mail goes missing, so double-check each value. Keep any existing email working until the new one is confirmed, especially if you're moving off an old address.</p>

<h2>Step 4: Set up SPF, DKIM and DMARC</h2>
<p>These three records help prove your email really comes from you, so it doesn't end up in spam. According to Google's sender guidelines:</p>
<ul>
<li><strong>SPF</strong> lists the services allowed to send email for your domain. Include every one that sends for you, such as your invoicing app or newsletter tool.</li>
<li><strong>DKIM</strong> adds a signature that lets receiving servers verify the message came from the domain owner.</li>
<li><strong>DMARC</strong> tells receivers what to do when a message fails those checks.</li>
</ul>
<p>Google says all senders must use SPF or DKIM, and bulk senders (over 5,000 messages a day to Gmail) must use all three. Google recommends setting up all three for every domain, and says unauthenticated messages may be marked as spam or rejected. A small business rarely sends that much, but setting all three up once is cheap insurance.</p>

<h2>Step 5: Use it everywhere</h2>
<ul>
<li>Put the new address on your website, Google Business Profile, invoices, quotes and business cards.</li>
<li>Set it up on your phone and computer, and add a signature with your name, phone number and website.</li>
<li>Make your contact form send to it, and reply from it.</li>
</ul>
<p>If you send newsletters or promotions to customers, read my guide on <a href="/blog/can-i-email-customers-without-permission-canada-casl/">emailing customers under CASL</a> first.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Using a free address as your only business address.</strong> It works, but it looks less established and the address isn't yours to keep.</li>
<li><strong>Not owning the domain.</strong> If it's registered in someone else's name, you can lose your email and website together.</li>
<li><strong>Skipping the authentication records.</strong> Mail may still send, but more of it lands in spam.</li>
<li><strong>Everyone sharing one login.</strong> Make a mailbox per person, or use a shared inbox such as info@ or hello@.</li>
</ul>

<h2>How FreeSite Company can help</h2>
<p>I register domains, set up email at your domain, and build your website for free. You pay $9/month (then $13/month after three months) or $89/year only if you keep it, month-to-month, cancel any time. You can see what's available on the <a href="/add-ons/">add-ons page</a> or the <a href="/plans">plans page</a>. If you'd like me to look after the DNS records so you don't have to, just ask.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://support.google.com/a/answer/81126">Google: Email sender guidelines</a></li>
<li><a href="https://workspace.google.com/intl/en_ca/pricing">Google Workspace pricing and plans</a></li>
</ul>
`,
  },
  {
    slug: "how-do-i-verify-my-google-business-profile",
    title: "How Do I Verify My Google Business Profile? A Plain Guide",
    description:
      "How to claim and verify your Google Business Profile in Canada: the verification methods Google offers, how long it takes, and what to fix if you get stuck.",
    date: "2026-11-10",
    excerpt:
      "Verifying your Google Business Profile means proving to Google that you run the business, usually by phone, email, video or postcard. Here's how it works and how long to expect it to take.",
    body: `
<p>To verify a Google Business Profile, you claim your business on Google, then prove you're the real owner using whichever method Google offers you: a phone or text code, an email, a live video call, a video recording or a postcard in the mail. Google decides which options you see, and you can't change them. Most mailed codes arrive within 14 days, and Google says review after you finish the steps can take up to 5 business days.</p>

<h2>Why verification matters</h2>
<p>An unverified profile can't manage its details properly, and it's the profile that appears when someone nearby searches for what you do. If you want to show up on the map with your hours, photos and website link, verification is the step that gives you control. My <a href="/blog/local-seo-checklist-small-business-bc/">local SEO checklist for BC</a> covers what to do once you're verified.</p>

<h2>The verification methods Google offers</h2>
<p>According to Google's help pages, the options depend on your business type, public information, region and hours:</p>
<ul>
<li><strong>Phone or text:</strong> you need to answer the business phone or receive a text. Automated phone menus (IVR systems) won't receive the code, so answer with a real person or a direct line.</li>
<li><strong>Email:</strong> make sure you can open the email address shown on the verification screen.</li>
<li><strong>Live video call:</strong> only offered for some businesses, and only during your business hours. You're asked to show your location and proof you run the business.</li>
<li><strong>Video recording:</strong> offered where eligible, with instructions inside the verification flow.</li>
<li><strong>Postcard:</strong> not available for every business. Most codes arrive within 14 days and expire after 30.</li>
</ul>
<p>Some profiles verify instantly if your website is already verified in Google Search Console, or through bulk verification for multi-location businesses.</p>

<h2>Step by step</h2>
<ul>
<li>Search for your business name on Google. If it already has a listing, you can claim it; if not, add it.</li>
<li>Enter your business name exactly as it appears on your sign, website and stationery.</li>
<li>Add your address, or a service area if you travel to customers.</li>
<li>Choose the category that best describes your main service.</li>
<li>Pick from the verification options shown and follow the prompts.</li>
</ul>

<h2>Get the details right first</h2>
<p>Most verification trouble comes from profile details that don't meet Google's guidelines. A few worth knowing:</p>
<ul>
<li><strong>Name:</strong> it should reflect your real-world business name. Google says extra information such as taglines, hours or phone numbers doesn't belong in it, and stuffing it can lead to suspension.</li>
<li><strong>Address:</strong> use a real location. Google says P.O. boxes and mailboxes at remote locations aren't acceptable, and a virtual office where you don't actually operate isn't eligible.</li>
<li><strong>Service-area businesses:</strong> if you go to customers' locations, Google says to hide your address, and to keep your service area within about two hours of driving time from where you're based.</li>
<li><strong>Home-based businesses:</strong> Google's guidance is to clear the address from your profile if you work from home and don't welcome customers there.</li>
</ul>
<p>If you're verifying by postcard, don't edit your name, address or category while you wait. Google warns the code won't work if you do.</p>

<h2>If you get stuck</h2>
<ul>
<li>Check that the phone number or email you're using is one you can actually answer or open.</li>
<li>Make sure the details match your website, so everything lines up in one place.</li>
<li>If the postcard code expired after 30 days, request a new one.</li>
<li>Give the review up to 5 business days before starting over, since repeat attempts can slow things down.</li>
</ul>

<h2>Tie it to your website</h2>
<p>Your website and your profile should agree on your name, phone number, address or service area, and hours. That consistency is what helps customers trust you, and it's a clear signal for local search. Having your website at your own domain also helps, and I explain that in <a href="/domain-hosting/">domain hosting</a>. If you're not sure what to put on the site itself, see <a href="/blog/what-pages-does-a-small-business-website-need/">what pages a small business website needs</a>.</p>

<h2>How FreeSite Company can help</h2>
<p>I'm Jeremy, a web designer in Squamish. I build Canadian small businesses a custom, hand-coded website for free, and you pay $9/month (then $13/month after three months, or $89/year) only if you keep it, month-to-month, cancel any time. Google Business Profile setup is one of the <a href="/add-ons/">add-ons</a> if you'd rather hand it over. No pressure either way, and the Google steps above work whether or not we ever work together.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://support.google.com/business/answer/7107242" rel="noopener" target="_blank">Google Business Profile Help: Verify your business</a></li>
<li><a href="https://support.google.com/business/answer/3038177" rel="noopener" target="_blank">Google Business Profile Help: Guidelines for representing your business on Google</a></li>
</ul>
`,
  },
  {
    slug: "can-i-email-customers-without-permission-canada-casl",
    title: "Can I Email Customers Without Permission in Canada?",
    description:
      "A plain-English look at CASL for small businesses: express vs implied consent, what every marketing email must include, and how fast to honour an unsubscribe.",
    date: "2026-11-09",
    excerpt:
      "Usually not: Canada's anti-spam law (CASL) requires consent before you send marketing emails. Here's what that means for a small business with a website.",
    body: `
<p>In most cases, no. Canada's anti-spam legislation (CASL) says you need the recipient's consent before sending a commercial electronic message, and that consent can be express or implied. That covers emails and texts that encourage someone to buy or take part in something commercial. I'm a web designer, not a lawyer, so treat this as a plain-language overview and check the government pages linked at the bottom for your own situation.</p>

<h2>Express consent</h2>
<p>Express consent means someone has clearly agreed, in writing or verbally, to receive your messages. A newsletter sign-up box on your website is the classic example. According to the Government of Canada, express consent doesn't expire unless the person withdraws it.</p>
<p>The key word is "clearly". A box that's already ticked, or an email address you found online, isn't the same as someone saying "yes, please contact me". Keep a record of when and how each person signed up, because the sender is the one who has to be able to show consent.</p>

<h2>Implied consent</h2>
<p>Implied consent only applies in specific situations set out in the law, such as an existing business relationship. The Government of Canada's guidance gives two time limits to know:</p>
<ul>
<li><strong>Up to 2 years</strong> after a purchase, for example.</li>
<li><strong>6 months</strong> after an inquiry or application, such as someone asking you for a quote.</li>
</ul>
<p>So if a customer bought from you last spring, you may be able to email them for a while. A person who filled in your contact form eight months ago is a different story. If your situation doesn't fit one of the categories in the law, you can't rely on implied consent.</p>

<h2>What every marketing email must include</h2>
<p>Even with consent, each message needs:</p>
<ul>
<li>Your business name, and the name of anyone you're sending on behalf of.</li>
<li>A mailing address, plus a phone number, email address or website address.</li>
<li>Contact details that stay valid for at least 60 days after you send.</li>
<li>A clear, easy unsubscribe mechanism.</li>
</ul>

<h2>Unsubscribes need to be fast</h2>
<p>The Act says an unsubscribe request must be acted on no later than 10 business days after it's sent, and the Government of Canada notes it must be at no cost to the person. Put the unsubscribe link somewhere visible and make sure the list you use actually removes people.</p>

<h2>What this means for your website</h2>
<p>Your website is usually where consent starts, so it's worth setting up properly:</p>
<ul>
<li>Add a newsletter sign-up form that's unticked by default, with a sentence saying what people will get and how often.</li>
<li>On your contact or quote form, keep "we'll reply to your enquiry" separate from "add me to your newsletter". A reply to a question is one thing; a monthly promotion is another.</li>
<li>Keep a record of when each person signed up.</li>
<li>Put your business name and mailing address in the footer of every email.</li>
</ul>
<p>If you track leads in a <a href="/website-with-crm/">built-in CRM</a>, record how each person came to you and when, so you know who you can email and who has asked to stop. It also helps to send from an address at your own domain; I cover that in <a href="/domain-hosting/">domain hosting</a> and the <a href="/add-ons/">add-ons</a> page.</p>

<h2>Not everything is a marketing email</h2>
<p>Your replies to someone's question, an appointment confirmation, or a receipt for something they bought are generally treated differently from promotions. If you're unsure which side a message falls on, the official CASL pages are the place to check, and a lawyer is the right person for anything borderline.</p>

<h2>How FreeSite Company can help</h2>
<p>I'm Jeremy, a web designer in Squamish. I build Canadian small businesses a custom, hand-coded website for free, and you pay $9/month (then $13/month after three months, or $89/year) only if you keep it, month-to-month, cancel any time. I can set up sign-up forms, a contact form that sends enquiries straight to you, and a CRM or online booking if you want one. If you'd like to see what that looks like, you're welcome to take a look at <a href="/plans">the plans</a>.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://ised-isde.canada.ca/site/canada-anti-spam-legislation/en/getting-consent-send-email" rel="noopener" target="_blank">Government of Canada: Getting consent to send emails</a></li>
<li><a href="https://laws-lois.justice.gc.ca/eng/acts/E-1.6/index.html" rel="noopener" target="_blank">Justice Laws: An Act respecting the promotion of efficiency and adaptability of the Canadian economy (CASL, S.C. 2010, c. 23)</a></li>
</ul>
`,
  },
  {
    slug: "what-should-a-plumber-website-have",
    title: "What Should a Plumber's Website Have? A Trades Checklist",
    description:
      "What a plumber, electrician or HVAC website needs to win calls: tap-to-call, service pages, a proper service area on Google, licences, photos and speed.",
    date: "2026-11-08",
    excerpt:
      "A plumber's website needs to do one thing well: get the phone ringing. Here's the checklist I use for plumbers, electricians and HVAC businesses.",
    body: `
<p>A good plumber's website makes it effortless to call you, proves you're licensed and trustworthy, and shows every town you serve. Everything else is a bonus. The same goes for electricians, HVAC techs and most other trades. Here's the checklist I work from when I build a site for a trades business.</p>

<h2>1. A tap-to-call number at the very top</h2>
<p>Someone with water on their floor isn't browsing. They're on their phone, probably stressed, and they'll call the first business that looks real. Put your phone number in the header of every page as a tap-to-call link, and add a big call button on the home page. If you offer emergency or same-day service, say so right there, along with your hours.</p>

<h2>2. A page for each service</h2>
<p>"Plumbing services" is not how people search. They type "hot water tank replacement", "drain cleaning" or "furnace repair". Give each main service its own page with a plain description of what you do, what's involved, how quickly you can come out and, if you're comfortable, a starting price or what affects the price. One page per service gives Google a clear match for each search. I cover the wider page list in <a href="/blog/what-pages-does-a-small-business-website-need/">What Pages Does a Small Business Website Need?</a></p>

<h2>3. Your service area, spelled out</h2>
<p>List every town and neighbourhood you cover, in real sentences on your site. If you're in Squamish and also work in Whistler, Pemberton and North Vancouver, say so.</p>
<p>The same applies on Google. If you travel to customers rather than welcome them at a shop, Google says you should remove your address from your Business Profile. You can add up to 20 service areas, set by city, postal code or similar, and Google advises keeping them within about two hours' driving time of your location. You can't define an area as a radius around your business. Details are in Google's help page, linked below. My <a href="/blog/local-seo-checklist-small-business-bc/">local SEO checklist</a> covers the rest of the Business Profile setup.</p>

<h2>4. Licences, insurance and guarantees</h2>
<p>Trades are one of the few businesses where customers let you into their home, so trust matters more than almost anywhere. Show your trade qualifications and licence details, that you're insured, and any workmanship guarantee. Check your regulator's requirements for what you must display or say in advertising, and rely on them rather than me for that.</p>

<h2>5. Real photos of real work</h2>
<p>Stock photos of smiling people in clean uniforms don't earn trust. Photos of your actual van, your team and finished jobs do. Before-and-after shots of a bathroom, a panel upgrade or a new furnace work well. Ask the customer's permission before you post anything that shows their home.</p>

<h2>6. Reviews you can point to</h2>
<p>Pull in a few genuine reviews, with the customer's name if they've agreed, and link to your Google profile so people can read the rest. Don't invent or buy reviews. Ask happy customers for one right after the job while it's fresh.</p>

<h2>7. A fast site that works on weak signal</h2>
<p>Trades calls often come from basements, crawl spaces and rural roads with a poor connection. Heavy page builders and giant photos make a site crawl. A lean, hand-coded site with compressed images loads quickly almost anywhere. If your current site drags, see <a href="/blog/why-is-my-website-slow-on-phones/">Why Is My Website Slow on Phones?</a></p>

<h2>8. An easy way to ask for a quote or book</h2>
<p>Not everyone wants to call, especially for non-urgent work. Add a short form (name, phone, what you need, postal code) and make sure enquiries reach you straight away. If you'd like customers to book a time or get automatic follow-up, <a href="/online-booking-website/">online booking</a> and a <a href="/website-with-crm/">built-in CRM</a> can handle that as add-ons.</p>

<h2>Put the right words on each page</h2>
<p>Write the way you'd explain the job to a neighbour. Say what the problem looks like ("no hot water", "breaker keeps tripping", "furnace blowing cold air"), what you do about it, and what happens next: you call, you book a time, someone arrives. Plain steps reassure people who've never hired a tradesperson before, and they use the same words customers type into Google.</p>
<p>Add a short FAQ to each service page too: how fast can you come, do you give quotes in advance, what areas do you cover, do you work evenings and weekends. Every answer is one less reason to hesitate before calling.</p>

<h2>What you can skip</h2>
<ul>
<li>A blog you won't keep up.</li>
<li>Autoplay videos, sliders and pop-ups.</li>
<li>Long "about our company history" pages. A short, honest paragraph and a photo of you is enough.</li>
</ul>

<h2>How FreeSite Company can help</h2>
<p>I'm Jeremy, a web designer in Squamish. I build plumbers, electricians and HVAC businesses a custom, hand-coded website for free. You see it finished before paying anything, and it's $9/month (then $13/month after three months, or $89/year), month-to-month, cancel any time, only if you keep it. You own the code. There's more on what I build for <a href="/free-website-for-trades/">trades businesses</a> if you'd like a look.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://support.google.com/business/answer/9157481" rel="noopener" target="_blank">Google Business Profile Help: Service-area businesses</a></li>
</ul>
`,
  },
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
<p>Every FreeSite Company build includes the pages your business actually needs, written in plain language and set up for local search. The build is free, you see it before you pay anything, and you only pay $9 a month if you keep it.</p>
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
<p>Every FreeSite Company site is hand-coded, with compressed images and fast hosting, so it loads quickly on a phone from day one. The build is free, and you only pay $9 a month if you keep it.</p>
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
<p>FreeSite Company builds small businesses a custom website for free. You see the finished site before you pay anything, and if you keep it, hosting and support is $9 a month. If you don't love it, you walk away and owe nothing.</p>
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
<p>At FreeSite Company I build small businesses a custom, hand-coded website for free, with two rounds of revisions. You see the finished site before you pay anything. If you love it, keeping it online with hosting and support is $9 a month. If you don't, you walk away and owe nothing. You own the code either way.</p>
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
<p>The usual reason people pick a builder is that a custom site costs thousands up front. That's the problem FreeSite Company exists to solve: I build you a custom site for free, you see it live before paying anything, and you keep it online for $9 a month only if you love it. You still own all the code.</p>
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
<p>Every FreeSite Company build includes the website side of this checklist: local schema, page titles, a sitemap, fast loading and a site that lines up with your Google Business Profile. The build is free, and you only pay $9 a month if you keep it.</p>
`,
  },
];
