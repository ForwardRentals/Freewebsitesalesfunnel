// Content for the static SEO landing pages. Every page carries copy written
// for that trade or town; Google treats near-duplicate city/industry pages as
// doorway pages, so keep each entry genuinely specific when adding more.

export const portfolio = {
  watertaxi: { name: "Squamish Water Taxi", url: "https://squamishwatertaxi.com", img: "/portfolio/card-squamishwatertaxi.jpg", tag: "Marine charter" },
  canoe: { name: "Squamish Canoe Rental", url: "https://squamishcanoerental.com", img: "/portfolio/card-squamishcanoerental.jpg", tag: "Rentals & tours" },
  trails: { name: "Sea to Sky Trails", url: "https://seatoskytrails.com", img: "/portfolio/card-seatoskytrails.jpg", tag: "Outdoor guide" },
  hobby: { name: "The Full Time Hobby", url: "https://thefulltimehobby.com", img: "/portfolio/card-thefulltimehobby.jpg", tag: "Photo & video" },
  dobson: { name: "Jack Dobson Fine Art", url: "https://jdobsonfineart.com", img: "/portfolio/card-jdobsonfineart.jpg", tag: "Artist portfolio" },
  passport: { name: "The Endless Passport", url: "https://endlesspassport.com", img: "/portfolio/card-endlesspassport.jpg", tag: "Travel" },
};

export const industries = [
  {
    slug: "restaurants",
    label: "Restaurants & Cafés",
    noun: "restaurant or café",
    title: "Free Website for Restaurants & Cafés",
    h1: "A free website for your restaurant or café",
    intro:
      "Most people decide where to eat on their phone, in under a minute. They want your menu, your hours and a way to book, and if your site is slow or your menu is a blurry PDF they move on to the next place. I build restaurants a fast, custom website for free, and you only pay $9.99/month if you keep it.",
    needs: [
      ["A real menu, not a PDF", "Readable on a phone, easy for you to update when prices or specials change, and indexable by Google so people searching for a dish can find you."],
      ["Hours and location up top", "Today's hours, a tap-to-call number and a map link in the first screen, because that's what most visitors came for."],
      ["Reservations and ordering", "A button to your booking system (OpenTable, Resy, Tock) or online ordering, so people act while they're hungry."],
      ["Photos that sell the room", "Food and space photos that load fast. I'm also a photographer, if you need new ones."],
      ["Local SEO", "Restaurant schema, Google Business Profile alignment and page titles that match how locals search: \"brunch near me\", \"best pizza in town\"."],
    ],
    faqs: [
      ["Can I update the menu myself?", "Yes. I set the menu up so it's simple to change, or you can send me changes and I'll make them as part of your hosting plan."],
      ["Will it work with my reservation or ordering system?", "Yes. I link or embed whatever you already use, so there's nothing new for your staff to learn."],
    ],
    work: ["hobby", "watertaxi", "canoe"],
  },
  {
    slug: "salons-barbers",
    label: "Salons & Barbers",
    noun: "salon or barbershop",
    title: "Free Website for Hair Salons & Barbershops",
    h1: "A free website for your salon or barbershop",
    intro:
      "Your Instagram shows off the work, but a website is what turns a search for \"haircut near me\" into a booking. I build salons and barbershops a custom site with your services, prices and online booking front and centre. The build is free, and you only pay $9.99/month if you keep it.",
    needs: [
      ["Book Now on every screen", "A booking button linked to Fresha, Square, Vagaro or whatever you use, visible without scrolling."],
      ["Services and prices", "A clean list clients can check before they book, so fewer of them call to ask."],
      ["A portfolio that loads fast", "Your best cuts and colour work in a gallery, pulled from the photos you already have."],
      ["Meet the team", "A short bio and booking link for each stylist or barber, so regulars can find their person."],
      ["Found on Google Maps", "Local business schema and page titles written for \"salon in [your town]\" searches."],
    ],
    faqs: [
      ["Can you connect my booking app?", "Yes. I link or embed your existing booking system, so appointments keep landing where they do now."],
      ["Can it show my Instagram?", "Yes. I can feature your latest posts so the site stays fresh without extra work from you."],
    ],
    work: ["hobby", "dobson", "passport"],
  },
  {
    slug: "contractors",
    label: "Contractors & Builders",
    noun: "construction or renovation business",
    title: "Free Website for Contractors & Builders",
    h1: "A free website for your contracting business",
    intro:
      "Homeowners check you out online before they ever call for a quote. A dead website, or none at all, makes a good builder look like a risky one. I build contractors a custom site that shows off finished projects and gets quote requests into your inbox. The build is free, and you only pay $9.99/month if you keep it.",
    needs: [
      ["Project gallery", "Before-and-after photos organized by job type, so clients can see you've done work like theirs."],
      ["A quote request form", "The details you need up front (project type, timeline, budget, photos) so you can price jobs without a site visit."],
      ["Licences and insurance", "Your credentials, trade memberships and warranty terms where nervous homeowners look for them."],
      ["Service area", "The towns you cover, written so Google shows you to people searching in them."],
      ["Tap to call", "Your number in the header on phones, because a lot of your clients will call from a job site of their own."],
    ],
    faqs: [
      ["I don't have good photos of my work. Is that a problem?", "No. We can start with what you have from your phone. I'm also a photographer and can shoot finished projects."],
      ["Can the form take photo uploads?", "Yes. Clients can attach photos of the space, which saves you a trip for small jobs."],
    ],
    work: ["watertaxi", "canoe", "trails"],
  },
  {
    slug: "trades",
    label: "Plumbers & Electricians",
    noun: "plumbing, electrical or HVAC business",
    title: "Free Website for Plumbers, Electricians & HVAC",
    h1: "A free website for plumbers, electricians and HVAC techs",
    intro:
      "When a pipe bursts or the power's out, people grab their phone and call the first trusted name that comes up. Your website's job is to be that name and make calling you a single tap. I build trades a fast, simple site that does exactly that. The build is free, and you only pay $9.99/month if you keep it.",
    needs: [
      ["Emergency number up top", "A big tap-to-call button and your availability (24/7, weekdays, same-day) right at the top."],
      ["Service list", "A short page for each service (drain cleaning, panel upgrades, furnace repair) so Google can match you to specific searches."],
      ["Service area", "Every town and neighbourhood you cover, so you show up for searches there."],
      ["Licences and guarantees", "Your trade licence, insurance and workmanship guarantee, which matter more for trades than almost any other business."],
      ["Fast on bad signal", "A lightweight site that loads in a second, even on a weak phone connection in a basement."],
    ],
    faqs: [
      ["Do I need a big website?", "No. Most trades do best with a tight site: home page, services, service area and contact. I keep it simple and fast."],
      ["Can people book a service call online?", "Yes. I can add a booking form or link to your scheduling software."],
    ],
    work: ["watertaxi", "canoe", "hobby"],
  },
  {
    slug: "landscapers",
    label: "Landscapers & Gardeners",
    noun: "landscaping business",
    title: "Free Website for Landscapers & Lawn Care",
    h1: "A free website for your landscaping business",
    intro:
      "Landscaping is visual, and the best way to win a job is to show one you've finished. I build landscapers a custom site with a project gallery, a clear list of services and a quote form that collects the details you need. The build is free, and you only pay $9.99/month if you keep it.",
    needs: [
      ["Seasonal services", "Spring cleanups, weekly maintenance, hardscaping and snow removal, each with its own section so you're found for all of them."],
      ["Before-and-after gallery", "Side-by-side photos that show what you can do with a tired yard."],
      ["Quote form with yard details", "Lot size, the services wanted and photo uploads, so you can quote faster."],
      ["Maintenance plans", "A clear way to sign up for recurring service, which is where steady income comes from."],
      ["Local search", "Page titles and schema written for \"landscaper in [your town]\" searches."],
    ],
    faqs: [
      ["Can I change services as the seasons change?", "Yes. I can swap featured services each season so the site always matches what you're selling."],
      ["Will it work if I'm a one-person operation?", "Absolutely. A good site makes a solo operator look established, and most of my clients are small teams."],
    ],
    work: ["trails", "canoe", "watertaxi"],
  },
  {
    slug: "cleaning-services",
    label: "Cleaning Services",
    noun: "cleaning business",
    title: "Free Website for Cleaning Services",
    h1: "A free website for your cleaning business",
    intro:
      "People are letting you into their home or office, so trust decides who they hire. A professional website with clear pricing, real reviews and an easy booking form gets you hired over the business with only a Facebook page. I build it for free, and you only pay $9.99/month if you keep it.",
    needs: [
      ["Clear pricing", "Flat rates or a simple price estimator, so visitors don't have to call just to find out what it costs."],
      ["Online booking", "A form or booking link for one-time, weekly and move-out cleans."],
      ["Trust signals", "Insurance, bonding, background checks and your satisfaction guarantee, shown prominently."],
      ["Residential and commercial", "Separate sections if you do both, since homeowners and office managers search differently."],
      ["Service area", "The neighbourhoods you cover, written so Google shows you there."],
    ],
    faqs: [
      ["Can customers get a price online?", "Yes. I can build a simple estimator based on home size and type of clean."],
      ["Can I show reviews?", "Yes. I can feature your real Google reviews on the site."],
    ],
    work: ["canoe", "watertaxi", "hobby"],
  },
  {
    slug: "wellness-clinics",
    label: "Massage, Physio & Wellness",
    noun: "clinic or wellness practice",
    title: "Free Website for Massage, Physio & Wellness Clinics",
    h1: "A free website for your clinic or wellness practice",
    intro:
      "Patients want to know who they'll see, what you treat, whether you direct-bill, and how to book. A calm, clear website answers all of that before they pick up the phone. I build clinics and practitioners a custom site for free, and you only pay $9.99/month if you keep it.",
    needs: [
      ["Online booking", "Linked to Jane, ClinicSense, Noterro or whatever you already use."],
      ["Practitioner profiles", "Credentials, specialties and a booking link for each person on your team."],
      ["What you treat", "A page for each service or condition (RMT, physio, acupuncture, chiro) so you're found for specific searches."],
      ["Direct billing and insurance", "Which insurers you bill directly, which is often the deciding question for new patients."],
      ["Calm, accessible design", "Readable type, good contrast and nothing flashy, built for people who may be in pain."],
    ],
    faqs: [
      ["Can you connect my clinic booking software?", "Yes. I link or embed your existing system, so your front desk keeps working the same way."],
      ["Can I add new practitioners later?", "Yes. Adding a team member is a quick update under your hosting plan."],
    ],
    work: ["trails", "dobson", "passport"],
  },
  {
    slug: "fitness-studios",
    label: "Gyms & Fitness Studios",
    noun: "gym or fitness studio",
    title: "Free Website for Gyms, Yoga & Fitness Studios",
    h1: "A free website for your gym or fitness studio",
    intro:
      "Someone deciding where to train wants to see your schedule, your pricing and what a first class costs. If they can't find those in thirty seconds, they'll sign up somewhere else. I build gyms and studios a custom site with all of it up front. The build is free, and you only pay $9.99/month if you keep it.",
    needs: [
      ["Live class schedule", "Embedded from Mindbody, Momence, Glofox or your booking app, so it's always current."],
      ["Intro offer", "Your first-class deal or free trial, prominent on every page."],
      ["Memberships and pricing", "Drop-in, class packs and memberships laid out side by side."],
      ["Coaches and instructors", "Who teaches what, with real photos."],
      ["Local search", "Page titles written for \"yoga in [your town]\" or \"gym near me\" searches."],
    ],
    faqs: [
      ["Can my schedule update itself?", "Yes. I embed your booking platform's schedule so changes show up on the site automatically."],
      ["Can I run promos on the site?", "Yes. Seasonal offers and challenges are quick updates under your hosting plan."],
    ],
    work: ["trails", "hobby", "canoe"],
  },
  {
    slug: "tour-operators",
    label: "Tours & Rentals",
    noun: "tour, guiding or rental business",
    title: "Free Website for Tour Operators & Rental Companies",
    h1: "A free website for your tour or rental business",
    intro:
      "Visitors plan trips on their phones, and they book whoever makes it easiest. This is the kind of site I build most: I've built them for a water taxi, a canoe rental and an outdoor guide in Squamish. The build is free, and you only pay $9.99/month if you keep it.",
    needs: [
      ["Book now, everywhere", "Linked to FareHarbor, Rezdy, Checkfront or your own booking system, one tap from every page."],
      ["Trips and pricing", "Each tour or rental with photos, duration, what's included and price, so people can choose without emailing."],
      ["Photos and video", "Big, fast-loading images of the experience. I shoot those too."],
      ["Getting there", "Meeting points, parking and maps, which cut down on day-of phone calls."],
      ["Visitor search", "Pages written for the searches tourists actually do, like \"things to do in Squamish\" or \"kayak rental near me\"."],
    ],
    faqs: [
      ["Have you built sites like this before?", "Yes. Squamish Water Taxi, Squamish Canoe Rental and Sea to Sky Trails are all live examples of my work."],
      ["Can it handle seasonal changes?", "Yes. I can swap trips, prices and hours as your season changes."],
    ],
    work: ["watertaxi", "canoe", "trails"],
  },
  {
    slug: "photographers-artists",
    label: "Photographers & Artists",
    noun: "photography or art practice",
    title: "Free Portfolio Website for Photographers & Artists",
    h1: "A free portfolio website for photographers and artists",
    intro:
      "Your work should be the first thing people see, at full quality, on a site that doesn't look like everyone else's template. I'm a photographer myself, so I build portfolios the way I'd want mine built. The build is free, and you only pay $9.99/month if you keep it.",
    needs: [
      ["Fast, full-quality images", "Big, sharp photos and artwork that still load quickly, using modern image formats."],
      ["A design that suits your work", "A custom layout that fits your style instead of a template thousands of others use."],
      ["Galleries and series", "Work organized by project, series or client type."],
      ["Enquiries and sales", "Booking enquiries, print sales or commission requests, set up however you work."],
      ["Image SEO", "Proper titles, descriptions and alt text, so your work shows up in Google Images."],
    ],
    faqs: [
      ["Can I sell prints?", "Yes. I can add a simple shop, or link to the print lab you already use."],
      ["Who owns the site?", "You do. You get the full code, and your images stay yours."],
    ],
    work: ["dobson", "hobby", "passport"],
  },
  {
    slug: "retail-shops",
    label: "Retail & Local Shops",
    noun: "shop or boutique",
    title: "Free Website for Retail Stores & Boutiques",
    h1: "A free website for your shop or boutique",
    intro:
      "Even if most of your sales happen at the till, customers check your website first: what you carry, whether you're open, and where to park. I build local shops a custom site that answers those questions and brings people through the door. The build is free, and you only pay $9.99/month if you keep it.",
    needs: [
      ["What you carry", "Your categories, brands and best sellers, so people know it's worth the trip."],
      ["Hours, location and parking", "Up top on phones, with a map link."],
      ["Online shop, if you want one", "A simple store or a link to your Shopify or Square shop for people who'd rather order online."],
      ["Events and new arrivals", "A place to post sales, launches and in-store events."],
      ["Local search", "Page titles and schema written for \"[product] store near me\" searches."],
    ],
    faqs: [
      ["Can I sell online too?", "Yes. I can add a simple shop or connect the Shopify or Square store you already have."],
      ["Can I post sales myself?", "Yes, or send them to me and I'll post them as part of your hosting plan."],
    ],
    work: ["hobby", "dobson", "watertaxi"],
  },
  {
    slug: "auto-repair",
    label: "Auto Repair & Detailing",
    noun: "auto repair or detailing shop",
    title: "Free Website for Auto Repair Shops & Detailers",
    h1: "A free website for your auto repair or detailing shop",
    intro:
      "Drivers looking for a mechanic want to know three things: do you work on their car, what will it roughly cost, and can they trust you. A clear website answers all three before they call. I build shops a custom site for free, and you only pay $9.99/month if you keep it.",
    needs: [
      ["Services and makes", "What you fix and which makes you specialize in, each written so Google can match specific searches."],
      ["Book a service", "An appointment form or booking link, plus tap-to-call for the urgent stuff."],
      ["Trust signals", "Certifications, warranties and your real Google reviews."],
      ["Detailing packages", "If you detail, packages and prices laid out like a menu."],
      ["Local search", "Page titles written for \"mechanic in [your town]\" searches."],
    ],
    faqs: [
      ["Can customers book online?", "Yes. I can add a booking form or link the scheduling tool you already use."],
      ["Can I list prices?", "Yes. Many shops list starting prices for common jobs, which builds trust and cuts down on phone calls."],
    ],
    work: ["watertaxi", "canoe", "hobby"],
  },
];

export const cities = [
  {
    slug: "squamish",
    name: "Squamish",
    region: "Sea-to-Sky, BC",
    title: "Web Design in Squamish, BC | Free Custom Websites",
    h1: "Web design in Squamish, BC. Free to build.",
    intro:
      "I'm a web designer based right here in Squamish. I've built sites for local businesses like Squamish Water Taxi, Squamish Canoe Rental and Sea to Sky Trails. I'll build your Squamish business a custom website for free, and you only pay $9.99/month if you keep it.",
    local:
      "Squamish businesses serve two crowds: locals who've been here for years and visitors coming up the Sea-to-Sky for a weekend of climbing, biking or paddling. Your site has to work for both. That means fast on a phone at the base of the Chief, clear about booking and hours, and found for both \"near me\" and \"things to do in Squamish\" searches.",
    meet: "Because I'm local, we can meet in person. Coffee's on me.",
    work: ["watertaxi", "canoe", "trails"],
    near: ["whistler", "pemberton", "sunshine-coast", "north-vancouver"],
  },
  {
    slug: "whistler",
    name: "Whistler",
    region: "Sea-to-Sky, BC",
    title: "Web Design in Whistler, BC | Free Custom Websites",
    h1: "Web design for Whistler businesses. Free to build.",
    intro:
      "I'm a web designer based 45 minutes down the highway in Squamish. I build Whistler businesses custom websites for free, and you only pay $9.99/month if you keep it.",
    local:
      "Whistler runs on visitors from all over the world, often on two seasons a year. Your website might be the first thing someone sees from another country while planning a trip. It needs to look world-class, load fast on hotel Wi-Fi, make booking simple and change easily between winter and summer.",
    meet: "Whistler is an easy drive, so we can meet in person.",
    work: ["watertaxi", "trails", "canoe"],
    near: ["squamish", "pemberton", "north-vancouver", "vancouver"],
  },
  {
    slug: "pemberton",
    name: "Pemberton",
    region: "Sea-to-Sky, BC",
    title: "Web Design in Pemberton, BC | Free Custom Websites",
    h1: "Web design for Pemberton businesses. Free to build.",
    intro:
      "I'm a Sea-to-Sky web designer based in Squamish, and I build Pemberton businesses custom websites for free. You only pay $9.99/month if you keep it.",
    local:
      "Pemberton's farms, guides, trades and small shops need to reach both the valley and the Whistler crowd just up the road. A good site lets people buy from the farm stand, book a ride or request a quote without driving out first.",
    meet: "Pemberton's a quick drive from me, so we can meet in person.",
    work: ["trails", "canoe", "watertaxi"],
    near: ["whistler", "squamish", "kamloops", "north-vancouver"],
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    region: "Metro Vancouver, BC",
    title: "Web Design in Vancouver, BC | Free Custom Websites",
    h1: "Web design for Vancouver small businesses. Free to build.",
    intro:
      "Vancouver agencies routinely charge $5,000 to $15,000 for a custom website. I'm an independent designer an hour up the Sea-to-Sky in Squamish, and I'll build yours for free. You only pay $9.99/month if you keep it.",
    local:
      "In Vancouver you compete with dozens of businesses in your category within a few kilometres. A custom, fast site with strong local SEO for your neighbourhood (Kitsilano, Mount Pleasant, Commercial Drive) is how you stand out from the ones running on templates.",
    meet: "We can meet in person or on a video call, whichever suits you.",
    work: ["hobby", "dobson", "watertaxi"],
    near: ["north-vancouver", "squamish", "victoria", "whistler"],
  },
  {
    slug: "north-vancouver",
    name: "North Vancouver",
    region: "North Shore, BC",
    title: "Web Design in North Vancouver & West Van | Free Custom Websites",
    h1: "Web design for North Shore businesses. Free to build.",
    intro:
      "I'm a web designer in Squamish, just up the highway from the North Shore. I build North Vancouver and West Vancouver businesses custom websites for free, and you only pay $9.99/month if you keep it.",
    local:
      "North Shore businesses serve a community that's very active and very local, from Lonsdale and Deep Cove to Ambleside and Edgemont. Show up in neighbourhood searches, look as polished as the downtown competition and make booking easy.",
    meet: "The North Shore is on my way to everywhere, so meeting in person is easy.",
    work: ["trails", "canoe", "hobby"],
    near: ["vancouver", "squamish", "whistler", "sunshine-coast"],
  },
  {
    slug: "sunshine-coast",
    name: "the Sunshine Coast",
    region: "Gibsons & Sechelt, BC",
    title: "Web Design on the Sunshine Coast, BC | Free Custom Websites",
    h1: "Web design for Sunshine Coast businesses. Free to build.",
    intro:
      "I'm a web designer in Squamish, across Howe Sound. I build businesses in Gibsons, Sechelt and up the coast custom websites for free, and you only pay $9.99/month if you keep it.",
    local:
      "On the Sunshine Coast, a lot of your customers are planning a ferry trip. They want to know your hours, how to find you and whether it's worth the trip before they leave the city. A clear, fast website turns those plans into visits.",
    meet: "We can meet by video call, or in person when I'm on the coast.",
    work: ["watertaxi", "canoe", "trails"],
    near: ["squamish", "north-vancouver", "vancouver", "nanaimo"],
  },
  {
    slug: "victoria",
    name: "Victoria",
    region: "Vancouver Island, BC",
    title: "Web Design in Victoria, BC | Free Custom Websites",
    h1: "Web design for Victoria small businesses. Free to build.",
    intro:
      "I'm an independent web designer in Squamish, BC, and I build Victoria businesses custom websites for free. You only pay $9.99/month if you keep it.",
    local:
      "Victoria businesses serve a loyal local market plus a steady stream of visitors from cruise ships and ferries. Your site should work for both: easy for a tourist to find and visit, and good enough that locals recommend you.",
    meet: "We'll work over video calls and email. Most of my clients prefer it anyway.",
    work: ["hobby", "watertaxi", "dobson"],
    near: ["nanaimo", "vancouver", "sunshine-coast", "kelowna"],
  },
  {
    slug: "nanaimo",
    name: "Nanaimo",
    region: "Vancouver Island, BC",
    title: "Web Design in Nanaimo, BC | Free Custom Websites",
    h1: "Web design for Nanaimo businesses. Free to build.",
    intro:
      "I'm an independent web designer in Squamish, BC, and I build Nanaimo and mid-Island businesses custom websites for free. You only pay $9.99/month if you keep it.",
    local:
      "Nanaimo is growing fast, and plenty of local businesses still get by on a Facebook page or a site from years ago. A modern, fast website is one of the cheapest ways to look like the established choice in your category.",
    meet: "We'll work over video calls and email, and I can be on the Island when needed.",
    work: ["canoe", "watertaxi", "hobby"],
    near: ["victoria", "sunshine-coast", "vancouver", "squamish"],
  },
  {
    slug: "kelowna",
    name: "Kelowna",
    region: "Okanagan, BC",
    title: "Web Design in Kelowna, BC | Free Custom Websites",
    h1: "Web design for Kelowna businesses. Free to build.",
    intro:
      "I'm an independent web designer in Squamish, BC, and I build Kelowna and Okanagan businesses custom websites for free. You only pay $9.99/month if you keep it.",
    local:
      "Okanagan businesses, from wineries and patios to trades building new homes, have a busy summer and a quieter winter. A website that's easy to update through the seasons and found by both locals and visitors keeps you busy year-round.",
    meet: "We'll work over video calls and email.",
    work: ["hobby", "trails", "watertaxi"],
    near: ["kamloops", "vancouver", "victoria", "whistler"],
  },
  {
    slug: "kamloops",
    name: "Kamloops",
    region: "Thompson-Nicola, BC",
    title: "Web Design in Kamloops, BC | Free Custom Websites",
    h1: "Web design for Kamloops businesses. Free to build.",
    intro:
      "I'm an independent web designer in Squamish, BC, and I build Kamloops businesses custom websites for free. You only pay $9.99/month if you keep it.",
    local:
      "Kamloops businesses serve a big region, and plenty of customers drive in from smaller towns. Your website should make the trip feel worth it: what you offer, when you're open and how to reach you, clear on any phone.",
    meet: "We'll work over video calls and email.",
    work: ["canoe", "trails", "hobby"],
    near: ["kelowna", "pemberton", "whistler", "vancouver"],
  },
];
