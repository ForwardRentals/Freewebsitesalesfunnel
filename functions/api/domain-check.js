// Cloudflare Pages Function: GET /api/domain-check?q=yourbusiness
// Checks domain availability over RDAP (the public registry lookup that replaced WHOIS).
// 404 from the registry = not registered (likely available); 200 = taken.
// It never buys anything: the /domains page sends a request to Hermes and Jeremy registers it.

const TLDS = ["ca", "com", "net", "org"];
const BOOTSTRAP = "https://data.iana.org/rdap/dns.json";
const FALLBACK = {
  com: "https://rdap.verisign.com/com/v1/",
  net: "https://rdap.verisign.com/net/v1/",
};

let servers = null;
async function rdapBase(tld) {
  if (!servers) {
    try {
      const r = await fetch(BOOTSTRAP, { cf: { cacheTtl: 86400, cacheEverything: true } });
      const j = await r.json();
      servers = {};
      for (const [tlds, urls] of j.services) for (const t of tlds) servers[t] = urls.find((u) => u.startsWith("https")) || urls[0];
    } catch {
      servers = null;
    }
  }
  const base = (servers && servers[tld]) || FALLBACK[tld];
  return base ? (base.endsWith("/") ? base : base + "/") : null;
}

function cleanLabel(q) {
  let s = String(q || "").trim().toLowerCase();
  s = s.replace(/^https?:\/\//, "").replace(/^www\./, "").split(/[/?#\s]/)[0];
  const parts = s.split(".");
  const tld = parts.length > 1 ? parts.pop() : null;
  const label = parts.join("").replace(/[^a-z0-9-]/g, "").replace(/^-+|-+$/g, "").slice(0, 63);
  return { label, tld };
}

async function check(domain, tld) {
  const base = await rdapBase(tld);
  if (!base) return { domain, status: "unknown" };
  try {
    const r = await fetch(`${base}domain/${domain}`, {
      headers: { accept: "application/rdap+json" },
      redirect: "follow",
      cf: { cacheTtl: 300 },
    });
    if (r.status === 404) return { domain, status: "available" };
    if (r.ok) return { domain, status: "taken" };
    return { domain, status: "unknown" };
  } catch {
    return { domain, status: "unknown" };
  }
}

export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const { label, tld } = cleanLabel(url.searchParams.get("q"));
  const headers = { "content-type": "application/json", "cache-control": "no-store" };
  if (label.length < 2) {
    return new Response(JSON.stringify({ error: "Type at least 2 letters or numbers." }), { status: 400, headers });
  }
  const order = tld && !TLDS.includes(tld) ? [tld, ...TLDS] : tld ? [tld, ...TLDS.filter((t) => t !== tld)] : TLDS;
  const results = await Promise.all(order.map((t) => check(`${label}.${t}`, t)));
  return new Response(JSON.stringify({ label, results }), { headers });
}
