import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Globe, Loader2, Search, XCircle, HelpCircle, ShieldCheck, RefreshCw, Phone } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Input } from "../components/ui/input";
import { sendToHermes } from "../lib/hermes";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyf2n_cRhou3C45Vz-mTUqg7VoFK_Tjczbxu-UwOd5uSa7mYm54Q-ff4DyqqdeHghbolQ/exec";

type Result = { domain: string; status: "available" | "taken" | "unknown" };
type Pick = { domain: string; action: "register" | "transfer" };

const inputClasses =
  "bg-white border-[#e7e1d6] text-[#1b1a17] placeholder:text-[#6b675e]/60 h-12 rounded-xl focus-visible:border-[#166b45] focus-visible:ring-[#166b45]/15";

export function Domains() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [pick, setPick] = useState<Pick | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", wantsSite: "maybe" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.title = "Domain Search & Domain Hosting, $18/year | FreeSiteCompany";
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute("content", "Search for your business domain (.ca, .com, .net, .org) and get it registered and managed for $18/year in Canadian dollars.");
  }, []);

  useEffect(() => {
    if (pick) setTimeout(() => document.getElementById("claim")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }, [pick]);

  const search = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setResults([]);
    setPick(null);
    setDone(false);
    try {
      const r = await fetch(`/api/domain-check?q=${encodeURIComponent(query)}`);
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Search failed");
      setResults(j.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed. Try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pick || !form.name || !form.email || sending) return;
    setSending(true);
    const payload = new URLSearchParams({
      form_name: "DomainRequest",
      created_time: new Date().toISOString(),
      full_name: form.name,
      email: form.email,
      phone_number: form.phone,
      business_name: form.business,
      domain_requested: pick.domain,
      domain_action: pick.action,
      wants_free_website: form.wantsSite,
      is_organic: "true",
      platform: "website",
    });
    sendToHermes(payload);
    try {
      await fetch(GOOGLE_SHEET_URL, { method: "POST", mode: "no-cors", body: payload });
    } catch (err) {
      console.error("Domain request failed:", err);
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", { content_name: pick.domain, content_category: "Domain request" });
    }
    setSending(false);
    setDone(true);
  };

  const badge = (s: Result["status"]) =>
    s === "available" ? (
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#166b45]"><CheckCircle2 className="h-4 w-4" /> Available</span>
    ) : s === "taken" ? (
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9b2c2c]"><XCircle className="h-4 w-4" /> Taken</span>
    ) : (
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6b675e]"><HelpCircle className="h-4 w-4" /> Couldn't check</span>
    );

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1b1a17] overflow-x-hidden selection:bg-[#166b45] selection:text-white">
      <Navigation />

      <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6">
        <div aria-hidden className="pointer-events-none absolute -top-24 right-[5%] h-80 w-80 rounded-full bg-[#166b45]/10 blur-3xl" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#e7e1d6] bg-white px-4 py-1.5 text-sm font-medium text-[#6b675e] mb-6"
          >
            <Globe className="h-4 w-4 text-[#166b45]" /> Domain hosting · $18/year CAD
          </motion.p>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display text-[2.4rem] leading-[1.05] sm:text-6xl font-semibold tracking-tight mb-5"
          >
            Find your <span className="italic text-[#166b45]">domain.</span>
          </motion.h1>
          <p className="text-lg sm:text-xl text-[#6b675e] leading-relaxed max-w-2xl mx-auto mb-8">
            Search for your business name. We register it, renew it every year and point it at your website and email,
            all for $18 a year in Canadian dollars.
          </p>

          <form onSubmit={search} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6b675e]" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="yourbusiness"
                aria-label="Domain name"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                className={`${inputClasses} h-14 pl-12 text-lg`}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#166b45] px-8 h-14 text-lg font-semibold text-white transition-all hover:bg-[#0f5434] disabled:opacity-60"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Search <ArrowRight className="h-5 w-5" /></>}
            </button>
          </form>
          {error && <p className="mt-4 text-[#9b2c2c]">{error}</p>}
        </div>
      </section>

      {results.length > 0 && (
        <section className="px-4 sm:px-6 pb-12">
          <div className="max-w-2xl mx-auto grid gap-3">
            {results.map((r) => (
              <div key={r.domain} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#e7e1d6] bg-white px-5 py-4">
                <div>
                  <p className="font-semibold text-lg break-all">{r.domain}</p>
                  {badge(r.status)}
                </div>
                {r.status === "available" && (
                  <button
                    onClick={() => setPick({ domain: r.domain, action: "register" })}
                    className="rounded-full bg-[#166b45] px-5 py-2.5 font-semibold text-white hover:bg-[#0f5434]"
                  >
                    Claim it · $18/yr
                  </button>
                )}
                {r.status === "taken" && (
                  <button
                    onClick={() => setPick({ domain: r.domain, action: "transfer" })}
                    className="rounded-full border border-[#e7e1d6] px-5 py-2.5 font-semibold text-[#1b1a17] hover:border-[#166b45]"
                  >
                    It's mine, move it here
                  </button>
                )}
              </div>
            ))}
            <p className="text-xs text-[#6b675e]">
              Results come straight from the domain registries. A domain isn't yours until it's registered, so we move fast once you
              claim it. Premium domains are priced separately and we'll always tell you before you pay.
            </p>
          </div>
        </section>
      )}

      {pick && (
        <section id="claim" className="px-4 sm:px-6 pb-16 scroll-mt-28">
          <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-[#e7e1d6] p-6 sm:p-8">
            {done ? (
              <div className="text-center">
                <CheckCircle2 className="h-10 w-10 text-[#166b45] mx-auto mb-3" />
                <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">Got it. We're on {pick.domain}.</h2>
                <p className="text-[#6b675e]">
                  Check your email. Jeremy will {pick.action === "register" ? "lock it in and send you a payment link" : "send you the simple steps to move it over"}.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#166b45] mb-1">
                    {pick.action === "register" ? "Claim your domain" : "Move your domain to us"}
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold break-all">{pick.domain}</h2>
                  <p className="text-[#6b675e] mt-1">$18/year CAD, renewed and managed for you. No payment yet: we'll confirm by email first.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClasses} />
                  <Input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClasses} />
                  <Input type="tel" placeholder="Phone (optional)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClasses} />
                  <Input placeholder="Business name" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className={inputClasses} />
                </div>
                <label className="grid gap-2 text-sm font-medium">
                  Want a free custom website on it too?
                  <select
                    value={form.wantsSite}
                    onChange={(e) => setForm({ ...form, wantsSite: e.target.value })}
                    className="h-12 rounded-xl border border-[#e7e1d6] bg-white px-3 text-base"
                  >
                    <option value="yes">Yes, build me a free website</option>
                    <option value="maybe">Maybe, tell me more</option>
                    <option value="no">No, just the domain</option>
                  </select>
                </label>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#166b45] px-8 py-4 text-lg font-semibold text-white hover:bg-[#0f5434] disabled:opacity-60"
                >
                  {sending ? <Loader2 className="h-5 w-5 animate-spin" /> : <>{pick.action === "register" ? "Claim it" : "Move it here"} <ArrowRight className="h-5 w-5" /></>}
                </button>
                <p className="text-xs text-[#6b675e]">We'll reach out by email, text or phone. We never ask for your passwords.</p>
              </form>
            )}
          </div>
        </section>
      )}

      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#fffefb] border-y border-[#e7e1d6]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-5">
          {[
            [RefreshCw, "Renewed for you", "It renews every year so it never lapses, at the same flat $18."],
            [ShieldCheck, "Set up right", "Website, email and Google verification records done properly."],
            [Phone, "A real person", "Need a change? Text, call or email Jeremy in Squamish, BC."],
          ].map(([Icon, h, p]) => {
            const I = Icon as typeof Globe;
            return (
              <div key={h as string} className="rounded-2xl border border-[#e7e1d6] bg-white p-6">
                <I className="h-6 w-6 text-[#166b45] mb-3" />
                <h3 className="font-semibold text-lg mb-1">{h as string}</h3>
                <p className="text-[#6b675e]">{p as string}</p>
              </div>
            );
          })}
        </div>
        <p className="text-center mt-8">
          <a href="/domain-hosting/" className="font-semibold text-[#166b45] hover:underline">More about domain hosting →</a>
        </p>
      </section>

      <Footer />
    </div>
  );
}
