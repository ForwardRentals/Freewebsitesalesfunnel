import { Link } from "react-router";
import { Check, X, ArrowRight } from "lucide-react";

type Cell = boolean | string;
type Row = { label: string; starter: Cell; growth: Cell; commerce: Cell };
type Group = { title: string; rows: Row[] };

const groups: Group[] = [
  {
    title: "Your website",
    rows: [
      { label: "Free custom website build", starter: true, growth: true, commerce: "Quoted separately" },
      { label: "Revisions included", starter: "2", growth: "3", commerce: "3" },
      { label: "Mobile-friendly, fast-loading design", starter: true, growth: true, commerce: true },
      { label: "No FreeSiteCompany.com footer credit", starter: false, growth: true, commerce: true },
      { label: "Minor content changes included", starter: false, growth: true, commerce: true },
    ],
  },
  {
    title: "Hosting & security",
    rows: [
      { label: "Website hosting", starter: true, growth: true, commerce: true },
      { label: "Domain hosting", starter: "$19/yr extra", growth: true, commerce: true },
      { label: "Security monitoring & automated backups", starter: true, growth: true, commerce: true },
      { label: "Basic performance monitoring", starter: true, growth: true, commerce: true },
      { label: "Speed optimization", starter: false, growth: true, commerce: true },
      { label: "Plugin / CMS updates", starter: false, growth: true, commerce: true },
      { label: "Monthly site health check & fixes", starter: "Basic", growth: true, commerce: true },
    ],
  },
  {
    title: "Get found & get leads",
    rows: [
      { label: "Light SEO hygiene (metadata, broken links)", starter: false, growth: true, commerce: true },
      { label: "Advanced analytics & conversion tracking", starter: false, growth: true, commerce: true },
      { label: "1 blog post per month", starter: false, growth: true, commerce: true },
      { label: "Custom email (you@yourbusiness.com)", starter: "$9/mo extra", growth: "$9/mo extra", commerce: "$9/mo extra" },
    ],
  },
  {
    title: "Support",
    rows: [
      { label: "Phone & email support", starter: true, growth: true, commerce: true },
      { label: "Priority support", starter: false, growth: true, commerce: true },
      { label: "Dedicated account manager", starter: false, growth: false, commerce: true },
    ],
  },
  {
    title: "Online store",
    rows: [
      { label: "Products, cart & checkout", starter: false, growth: false, commerce: true },
      { label: "Stripe / PayPal payments", starter: false, growth: false, commerce: true },
      { label: "Order management & inventory", starter: false, growth: false, commerce: true },
      { label: "Abandoned cart recovery", starter: false, growth: false, commerce: true },
      { label: "Custom back-end / admin dashboard", starter: false, growth: false, commerce: true },
    ],
  },
];

function Mark({ v }: { v: Cell }) {
  if (v === true)
    return (
      <span
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#166b45]"
        aria-label="Included"
      >
        <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
      </span>
    );
  if (v === false)
    return (
      <span
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1b1a17]/[0.06]"
        aria-label="Not included"
      >
        <X className="h-3.5 w-3.5 text-[#1b1a17]/35" strokeWidth={2.5} />
      </span>
    );
  return <span className="text-xs sm:text-sm font-semibold text-[#1b1a17]/75">{v}</span>;
}

const cols = [
  { key: "starter" as const, name: "Starter", price: "$9", after: "then $13/mo", to: "/get-started", cta: "Start free", hl: false },
  { key: "growth" as const, name: "Growth", price: "$19", after: "then $27/mo", to: "/get-started", cta: "Get Growth", hl: true },
  { key: "commerce" as const, name: "Commerce", price: "$49", after: "per month", to: "/custom", cta: "Ask about a store", hl: false },
];

export function PlanCompare() {
  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6" id="compare-plans">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#166b45] mb-3">
            Compare plans
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
            The build is free.{" "}
            <span className="italic text-[#166b45]">Pick how much help you want.</span>
          </h2>
          <p className="mt-4 text-lg text-[#6b675e] max-w-2xl mx-auto">
            Month-to-month. Cancel anytime and keep your site. You pay nothing until you love it.
          </p>
        </div>

        <div className="rounded-2xl border border-[#e7e1d6] bg-white shadow-sm overflow-x-auto">
          <table className="w-full min-w-[560px] border-separate border-spacing-0 text-left">
            <thead>
              <tr>
                <th className="sticky top-0 z-20 bg-white w-[34%] p-3 sm:p-5 align-bottom" />
                {cols.map((c) => (
                  <th
                    key={c.key}
                    className={`sticky top-0 z-20 p-3 sm:p-5 text-center align-bottom font-normal ${
                      c.hl ? "bg-[#166b45] text-white" : "bg-white"
                    }`}
                  >
                    {c.hl && (
                      <span className="mb-2 inline-block rounded-full bg-[#d7a04a] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#1b1a17]">
                        Most popular
                      </span>
                    )}
                    <div className="font-display text-lg sm:text-2xl font-semibold">{c.name}</div>
                    <div className="mt-1 flex items-baseline justify-center gap-1">
                      <span
                        className={`font-display text-3xl sm:text-4xl font-semibold ${
                          c.hl ? "text-white" : "text-[#166b45]"
                        }`}
                      >
                        {c.price}
                      </span>
                      <span className={`text-xs ${c.hl ? "text-white/70" : "text-[#6b675e]"}`}>/mo*</span>
                    </div>
                    <div className={`text-xs ${c.hl ? "text-white/70" : "text-[#6b675e]"}`}>{c.after}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {groups.map((g) => (
                <GroupRows key={g.title} g={g} />
              ))}
              <tr>
                <td className="p-3 sm:p-5" />
                {cols.map((c) => (
                  <td
                    key={c.key}
                    className={`p-3 sm:p-5 text-center ${c.hl ? "bg-[#166b45]" : ""}`}
                  >
                    <Link
                      to={c.to}
                      className={`inline-flex items-center justify-center gap-1.5 rounded-full px-4 sm:px-5 h-10 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                        c.hl
                          ? "bg-white text-[#166b45] hover:bg-[#faf7f2]"
                          : "bg-[#166b45] text-white hover:bg-[#0f5434]"
                      }`}
                    >
                      {c.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs sm:text-sm text-[#6b675e]">
          *Starter and Growth: intro price for your first 3 months, then the regular rate shown. Commerce
          covers hosting and support; the store build itself is quoted as a custom project.{" "}
          <Link to="/plans" className="font-semibold text-[#166b45] underline underline-offset-2">
            Full plan details
          </Link>
        </p>
      </div>
    </section>
  );
}

function GroupRows({ g }: { g: Group }) {
  return (
    <>
      <tr>
        <td
          colSpan={4}
          className="bg-[#faf7f2] border-t border-[#e7e1d6] px-3 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#166b45]"
        >
          {g.title}
        </td>
      </tr>
      {g.rows.map((r) => (
        <tr key={r.label}>
          <td className="border-t border-[#e7e1d6] px-3 sm:px-5 py-3 text-sm sm:text-[15px] font-medium text-[#1b1a17]/85">
            {r.label}
          </td>
          {(["starter", "growth", "commerce"] as const).map((k) => (
            <td
              key={k}
              className={`border-t px-2 py-3 text-center ${
                k === "growth" ? "bg-[#166b45]/[0.07] border-[#166b45]/15" : "border-[#e7e1d6]"
              }`}
            >
              <Mark v={r[k]} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
