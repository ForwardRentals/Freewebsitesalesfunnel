import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Bell,
  CalendarClock,
  CheckCircle2,
  Circle,
  Globe,
  Inbox,
  KanbanSquare,
  ListChecks,
  Mail,
  MessageSquare,
  Phone,
  Plus,
  Search,
  Send,
  Sparkles,
  X,
  FileText,
  ArrowRight,
} from "lucide-react";

type Stage = "New" | "Contacted" | "Quote sent" | "Won";
const STAGES: Stage[] = ["New", "Contacted", "Quote sent", "Won"];

type Source = "Website form" | "Chat assistant" | "Email" | "Phone";

type Event = { id: number; kind: "lead" | "stage" | "note" | "email" | "task"; text: string; when: string };

type Lead = {
  id: number;
  name: string;
  job: string;
  source: Source;
  value: number;
  stage: Stage;
  phone: string;
  email: string;
  message: string;
  age: string;
  events: Event[];
};

type Task = { id: number; leadId: number; text: string; due: string; done: boolean };

let uid = 100;

const seedLeads: Lead[] = [
  {
    id: 1, name: "Marcus Delaney", job: "Heat pump install", source: "Website form", value: 8400, stage: "New",
    phone: "(604) 555-0148", email: "marcus.d@example.com", age: "4 min ago",
    message: "Hi, our furnace is 22 years old and we'd like a quote on a heat pump. Two storey, about 2,100 sq ft. Can someone come by this week?",
    events: [{ id: 1, kind: "lead", text: "Enquiry received from your website contact form", when: "4 min ago" }, { id: 2, kind: "email", text: "Instant alert emailed to you", when: "4 min ago" }],
  },
  {
    id: 2, name: "Priya Shah", job: "Annual furnace service", source: "Chat assistant", value: 320, stage: "New",
    phone: "(778) 555-0192", email: "priya.shah@example.com", age: "1 hr ago",
    message: "Chat: asked what a service visit costs and whether you cover Squamish. The assistant quoted $189 + parts and captured her details.",
    events: [{ id: 1, kind: "lead", text: "Captured by the AI chat assistant", when: "1 hr ago" }],
  },
  {
    id: 3, name: "Harbourview Strata", job: "Rooftop unit repair", source: "Email", value: 2750, stage: "Contacted",
    phone: "(604) 555-0173", email: "manager@harbourview.example", age: "Yesterday",
    message: "Unit 3 on the roof is short cycling again. Please send someone to take a look before the weekend.",
    events: [
      { id: 1, kind: "lead", text: "Email enquiry received", when: "Yesterday" },
      { id: 2, kind: "stage", text: "Moved from New to Contacted", when: "Yesterday" },
      { id: 3, kind: "note", text: "Called property manager. Site visit booked Thursday 10am.", when: "Yesterday" },
    ],
  },
  {
    id: 4, name: "Owen & Jess Tremblay", job: "New build ductwork", source: "Website form", value: 14200, stage: "Contacted",
    phone: "(604) 555-0127", email: "jess.t@example.com", age: "2 days ago",
    message: "Building in Brackendale, framing is done. Looking for a full HVAC install quote and a timeline.",
    events: [
      { id: 1, kind: "lead", text: "Enquiry received from your website contact form", when: "2 days ago" },
      { id: 2, kind: "stage", text: "Moved from New to Contacted", when: "2 days ago" },
    ],
  },
  {
    id: 5, name: "Dana Whitcombe", job: "Furnace replacement", source: "Phone", value: 6900, stage: "Quote sent",
    phone: "(604) 555-0166", email: "dana.w@example.com", age: "4 days ago",
    message: "Phoned in. Furnace died over the weekend, wants a replacement quote asap.",
    events: [
      { id: 1, kind: "lead", text: "Logged from a phone call", when: "4 days ago" },
      { id: 2, kind: "stage", text: "Moved from Contacted to Quote sent", when: "3 days ago" },
      { id: 3, kind: "email", text: "Quote #1042 ($6,900) sent through the client portal", when: "3 days ago" },
    ],
  },
  {
    id: 6, name: "Sunrise Bakery", job: "Kitchen exhaust fan", source: "Website form", value: 3800, stage: "Quote sent",
    phone: "(604) 555-0105", email: "orders@sunrisebakery.example", age: "6 days ago",
    message: "Our exhaust fan is loud and not pulling well. We'd like it assessed and replaced if needed.",
    events: [
      { id: 1, kind: "lead", text: "Enquiry received from your website contact form", when: "6 days ago" },
      { id: 2, kind: "stage", text: "Moved from Contacted to Quote sent", when: "5 days ago" },
    ],
  },
  {
    id: 7, name: "Luis Moretti", job: "AC install", source: "Chat assistant", value: 5200, stage: "Won",
    phone: "(778) 555-0111", email: "luis.m@example.com", age: "1 week ago",
    message: "Chat: wanted central AC added to an existing furnace. Booked an assessment through the assistant.",
    events: [
      { id: 1, kind: "lead", text: "Captured by the AI chat assistant", when: "1 week ago" },
      { id: 2, kind: "stage", text: "Moved from Quote sent to Won", when: "2 days ago" },
    ],
  },
  {
    id: 8, name: "Cedar Grove Dental", job: "Maintenance contract", source: "Email", value: 2400, stage: "Won",
    phone: "(604) 555-0139", email: "office@cedargrove.example", age: "2 weeks ago",
    message: "Interested in a yearly maintenance contract for the clinic. Two units.",
    events: [
      { id: 1, kind: "lead", text: "Email enquiry received", when: "2 weeks ago" },
      { id: 2, kind: "stage", text: "Moved from Quote sent to Won", when: "1 week ago" },
    ],
  },
];

const seedTasks: Task[] = [
  { id: 1, leadId: 1, text: "Call Marcus and book the heat pump site visit", due: "Today", done: false },
  { id: 2, leadId: 3, text: "Site visit at Harbourview, Unit 3 rooftop", due: "Thursday", done: false },
  { id: 3, leadId: 5, text: "Follow up on quote #1042", due: "Tomorrow", done: false },
  { id: 4, leadId: 6, text: "Check in with Sunrise Bakery about the quote", due: "Today", done: false },
  { id: 5, leadId: 4, text: "Send ductwork timeline to the Tremblays", due: "Friday", done: true },
];

const incoming: Omit<Lead, "id" | "events" | "stage" | "age">[] = [
  { name: "Katherine Boateng", job: "Boiler tune-up", source: "Website form", value: 450, phone: "(604) 555-0184", email: "k.boateng@example.com", message: "Looking for a boiler service before winter. Anytime next week works." },
  { name: "Riverside Cafe", job: "Walk-in cooler repair", source: "Chat assistant", value: 1100, phone: "(778) 555-0155", email: "hello@riversidecafe.example", message: "Chat: the walk-in cooler is running warm. Asked for same-day service." },
  { name: "Tom Aldridge", job: "Thermostat upgrade", source: "Email", value: 600, phone: "(604) 555-0121", email: "tom.a@example.com", message: "Want to swap our old thermostats for smart ones. Three zones." },
];

const sourceIcon = (s: Source) =>
  s === "Website form" ? Globe : s === "Chat assistant" ? MessageSquare : s === "Email" ? Mail : Phone;

const stageStyle: Record<Stage, { dot: string; chip: string }> = {
  New: { dot: "bg-[#d7a04a]", chip: "bg-[#d7a04a]/15 text-[#8a5f14]" },
  Contacted: { dot: "bg-[#3b82c4]", chip: "bg-[#3b82c4]/12 text-[#1f5d96]" },
  "Quote sent": { dot: "bg-[#8b6bc4]", chip: "bg-[#8b6bc4]/12 text-[#5b3f96]" },
  Won: { dot: "bg-[#166b45]", chip: "bg-[#166b45]/12 text-[#166b45]" },
};

const money = (n: number) => "$" + n.toLocaleString("en-CA");

type View = "pipeline" | "inbox" | "tasks";

export function CrmDemo() {
  const [leads, setLeads] = useState<Lead[]>(seedLeads);
  const [tasks, setTasks] = useState<Task[]>(seedTasks);
  const [view, setView] = useState<View>("pipeline");
  const [openId, setOpenId] = useState<number | null>(null);
  const [dragId, setDragId] = useState<number | null>(null);
  const [overStage, setOverStage] = useState<Stage | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [query, setQuery] = useState("");
  const nextIncoming = useRef(0);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>();

  const showToast = (t: string) => {
    setToast(t);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3200);
  };

  const open = leads.find((l) => l.id === openId) || null;

  const filtered = useMemo(
    () =>
      leads.filter((l) =>
        (l.name + l.job + l.source).toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [leads, query],
  );

  const stats = useMemo(() => {
    const openLeads = leads.filter((l) => l.stage !== "Won");
    const won = leads.filter((l) => l.stage === "Won");
    return {
      open: openLeads.length,
      pipeline: openLeads.reduce((s, l) => s + l.value, 0),
      won: won.reduce((s, l) => s + l.value, 0),
      fresh: leads.filter((l) => l.stage === "New").length,
    };
  }, [leads]);

  const moveLead = (id: number, stage: Stage) => {
    setLeads((ls) =>
      ls.map((l) => {
        if (l.id !== id || l.stage === stage) return l;
        return {
          ...l,
          stage,
          events: [{ id: ++uid, kind: "stage", text: `Moved from ${l.stage} to ${stage}`, when: "Just now" }, ...l.events],
        };
      }),
    );
    if (stage === "Won") showToast("Nice. Marked as won.");
  };

  const addNote = () => {
    if (!note.trim() || !open) return;
    setLeads((ls) =>
      ls.map((l) =>
        l.id === open.id
          ? { ...l, events: [{ id: ++uid, kind: "note", text: note.trim(), when: "Just now" }, ...l.events] }
          : l,
      ),
    );
    setNote("");
  };

  const addFollowUp = () => {
    if (!open) return;
    setTasks((ts) => [{ id: ++uid, leadId: open.id, text: `Follow up with ${open.name.split(" ")[0]}`, due: "Tomorrow", done: false }, ...ts]);
    setLeads((ls) =>
      ls.map((l) =>
        l.id === open.id
          ? { ...l, events: [{ id: ++uid, kind: "task", text: "Follow-up task set for tomorrow", when: "Just now" }, ...l.events] }
          : l,
      ),
    );
    showToast("Follow-up added to your task list");
  };

  const simulateLead = () => {
    const tpl = incoming[nextIncoming.current % incoming.length];
    nextIncoming.current += 1;
    const id = ++uid;
    const lead: Lead = {
      ...tpl,
      id,
      stage: "New",
      age: "Just now",
      events: [
        { id: ++uid, kind: "lead", text: tpl.source === "Chat assistant" ? "Captured by the AI chat assistant" : tpl.source === "Email" ? "Email enquiry received" : "Enquiry received from your website contact form", when: "Just now" },
        { id: ++uid, kind: "email", text: "Instant alert emailed to you", when: "Just now" },
      ],
    };
    setLeads((ls) => [lead, ...ls]);
    setTasks((ts) => [{ id: ++uid, leadId: id, text: `Reply to ${tpl.name.split(" ")[0]}`, due: "Today", done: false }, ...ts]);
    setView("pipeline");
    showToast(`New lead: ${tpl.name}. Alert sent to your email.`);
  };

  const toggleTask = (id: number) => setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const openTasks = tasks.filter((t) => !t.done).length;

  const navItems: { id: View; label: string; icon: typeof Inbox; badge?: number }[] = [
    { id: "pipeline", label: "Pipeline", icon: KanbanSquare },
    { id: "inbox", label: "Inbox", icon: Inbox, badge: stats.fresh },
    { id: "tasks", label: "Tasks", icon: ListChecks, badge: openTasks },
  ];

  const LeadCard = ({ l, compact }: { l: Lead; compact?: boolean }) => {
    const Icon = sourceIcon(l.source);
    return (
      <div
        draggable={!compact}
        onDragStart={() => setDragId(l.id)}
        onDragEnd={() => {
          setDragId(null);
          setOverStage(null);
        }}
        onClick={() => setOpenId(l.id)}
        className={`group cursor-pointer rounded-xl border bg-white p-3.5 text-left shadow-[0_1px_2px_rgba(27,26,23,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#166b45]/50 hover:shadow-[0_8px_20px_-12px_rgba(27,26,23,0.3)] ${
          dragId === l.id ? "opacity-40" : ""
        } ${l.age === "Just now" ? "border-[#166b45]/60 ring-2 ring-[#166b45]/15" : "border-[#e7e1d6]"}`}
      >
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold text-[#1b1a17] leading-snug">{l.name}</p>
          <span className="shrink-0 text-sm font-semibold text-[#166b45]">{money(l.value)}</span>
        </div>
        <p className="mt-0.5 text-sm text-[#6b675e]">{l.job}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-[#6b675e]">
          <span className="inline-flex items-center gap-1.5">
            <Icon className="h-3.5 w-3.5" /> {l.source}
          </span>
          <span>{l.age}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Browser frame */}
      <div className="overflow-hidden rounded-2xl border border-[#d9d2c3] bg-white shadow-[0_40px_80px_-30px_rgba(27,26,23,0.45)]">
        <div className="flex items-center gap-3 border-b border-[#e7e1d6] bg-[#f3efe6] px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ec6a5e]" />
            <span className="h-3 w-3 rounded-full bg-[#f4bf4f]" />
            <span className="h-3 w-3 rounded-full bg-[#61c554]" />
          </div>
          <div className="mx-auto flex w-full max-w-sm items-center justify-center gap-2 rounded-md bg-white px-3 py-1 text-xs text-[#6b675e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#166b45]" />
            crm.yourbusiness.ca
          </div>
          <div className="w-12 sm:w-[54px]" />
        </div>

        <div className="flex h-[640px] flex-col bg-[#faf7f2] sm:flex-row">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-52 shrink-0 flex-col border-r border-[#e7e1d6] bg-[#1b1a17] p-4 text-[#faf7f2] sm:flex">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#166b45] text-sm font-bold">C</div>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Coastal Comfort</p>
                <p className="text-[11px] text-[#faf7f2]/50">HVAC &amp; Heating</p>
              </div>
            </div>
            <nav className="space-y-1">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setView(n.id)}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    view === n.id ? "bg-[#faf7f2]/12 text-white" : "text-[#faf7f2]/60 hover:bg-[#faf7f2]/8 hover:text-white"
                  }`}
                >
                  <n.icon className="h-4 w-4" />
                  {n.label}
                  {!!n.badge && (
                    <span className="ml-auto rounded-full bg-[#d7a04a] px-1.5 text-[11px] font-bold text-[#1b1a17]">{n.badge}</span>
                  )}
                </button>
              ))}
            </nav>
            <div className="mt-auto rounded-xl bg-[#faf7f2]/8 p-3 text-xs leading-relaxed text-[#faf7f2]/70">
              <p className="mb-1 flex items-center gap-1.5 font-semibold text-[#7fc8a4]">
                <Sparkles className="h-3.5 w-3.5" /> Interactive demo
              </p>
              Click a lead, drag cards between stages, tick off tasks. Nothing here is saved.
            </div>
          </aside>

          {/* Main */}
          <div className="relative flex min-h-0 min-w-0 flex-1 flex-col">
            {/* Top bar */}
            <div className="flex flex-wrap items-center gap-3 border-b border-[#e7e1d6] bg-white px-4 py-3">
              <h3 className="font-display text-lg font-semibold capitalize">{view}</h3>
              <div className="relative ml-auto hidden w-48 md:block">
                <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#6b675e]" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search leads"
                  className="h-8 w-full rounded-lg border border-[#e7e1d6] bg-[#faf7f2] pl-8 pr-2 text-sm outline-none focus:border-[#166b45]"
                />
              </div>
              <button
                onClick={simulateLead}
                className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-[#166b45] px-3 py-1.5 text-sm font-semibold text-white transition-all hover:bg-[#12583a] md:ml-0"
              >
                <Plus className="h-4 w-4" /> Simulate new lead
              </button>
            </div>

            {/* Views */}
            <div className="min-h-0 flex-1 overflow-y-auto">
              {view === "pipeline" && (
                <div className="flex h-full flex-col">
                  <div className="grid grid-cols-2 gap-3 p-4 pb-2 lg:grid-cols-4">
                    {[
                      { label: "Open leads", value: String(stats.open) },
                      { label: "In the pipeline", value: money(stats.pipeline) },
                      { label: "Won", value: money(stats.won) },
                      { label: "Need a reply", value: String(stats.fresh), accent: true },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#e7e1d6] bg-white px-3.5 py-2.5">
                        <p className="text-xs text-[#6b675e]">{s.label}</p>
                        <p className={`font-display text-xl font-semibold ${s.accent ? "text-[#b3791c]" : ""}`}>{s.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex min-h-0 flex-1 gap-3 overflow-x-auto p-4 pt-2">
                    {STAGES.map((st) => {
                      const col = filtered.filter((l) => l.stage === st);
                      return (
                        <div
                          key={st}
                          onDragOver={(e) => {
                            e.preventDefault();
                            setOverStage(st);
                          }}
                          onDragLeave={() => setOverStage((o) => (o === st ? null : o))}
                          onDrop={() => {
                            if (dragId) moveLead(dragId, st);
                            setDragId(null);
                            setOverStage(null);
                          }}
                          className={`flex w-[250px] shrink-0 flex-col rounded-xl border p-2.5 transition-colors md:min-w-0 md:flex-1 ${
                            overStage === st ? "border-[#166b45] bg-[#166b45]/[0.06]" : "border-[#e7e1d6] bg-[#f3efe6]/70"
                          }`}
                        >
                          <div className="mb-2.5 flex items-center gap-2 px-1">
                            <span className={`h-2 w-2 rounded-full ${stageStyle[st].dot}`} />
                            <p className="text-sm font-semibold">{st}</p>
                            <span className="ml-auto rounded-full bg-white px-2 text-xs font-medium text-[#6b675e]">{col.length}</span>
                          </div>
                          <div className="min-h-0 flex-1 space-y-2.5 overflow-y-auto pr-0.5">
                            <AnimatePresence initial={false}>
                              {col.map((l) => (
                                <motion.div key={l.id} layout initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                                  <LeadCard l={l} />
                                </motion.div>
                              ))}
                            </AnimatePresence>
                            {col.length === 0 && <p className="px-2 py-6 text-center text-xs text-[#6b675e]/70">Drop a lead here</p>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {view === "inbox" && (
                <div className="divide-y divide-[#e7e1d6]">
                  {filtered.map((l) => {
                    const Icon = sourceIcon(l.source);
                    return (
                      <button
                        key={l.id}
                        onClick={() => setOpenId(l.id)}
                        className="flex w-full items-start gap-3 bg-white px-4 py-3.5 text-left transition-colors hover:bg-[#faf7f2]"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#166b45]/10 text-[#166b45]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2">
                            <span className="font-semibold">{l.name}</span>
                            <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${stageStyle[l.stage].chip}`}>{l.stage}</span>
                            <span className="ml-auto shrink-0 text-xs text-[#6b675e]">{l.age}</span>
                          </span>
                          <span className="block text-sm font-medium text-[#1b1a17]/80">{l.job}</span>
                          <span className="mt-0.5 block truncate text-sm text-[#6b675e]">{l.message}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {view === "tasks" && (
                <div className="space-y-2 p-4">
                  {tasks.map((t) => {
                    const lead = leads.find((l) => l.id === t.leadId);
                    return (
                      <div
                        key={t.id}
                        className={`flex items-center gap-3 rounded-xl border border-[#e7e1d6] bg-white px-4 py-3 transition-opacity ${t.done ? "opacity-55" : ""}`}
                      >
                        <button onClick={() => toggleTask(t.id)} aria-label="Toggle task" className="text-[#166b45]">
                          {t.done ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5 text-[#6b675e]/60" />}
                        </button>
                        <div className="min-w-0 flex-1">
                          <p className={`text-sm font-medium ${t.done ? "line-through" : ""}`}>{t.text}</p>
                          {lead && (
                            <button onClick={() => setOpenId(lead.id)} className="text-xs text-[#166b45] hover:underline">
                              {lead.name}
                            </button>
                          )}
                        </div>
                        <span
                          className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                            t.due === "Today" && !t.done ? "bg-[#d7a04a]/20 text-[#8a5f14]" : "bg-[#f3efe6] text-[#6b675e]"
                          }`}
                        >
                          <CalendarClock className="h-3 w-3" /> {t.due}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile tab bar */}
            <div className="flex border-t border-[#e7e1d6] bg-white sm:hidden">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setView(n.id)}
                  className={`relative flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs font-medium ${view === n.id ? "text-[#166b45]" : "text-[#6b675e]"}`}
                >
                  <n.icon className="h-5 w-5" />
                  {n.label}
                  {!!n.badge && <span className="absolute right-[28%] top-1.5 h-2 w-2 rounded-full bg-[#d7a04a]" />}
                </button>
              ))}
            </div>

            {/* Toast */}
            <AnimatePresence>
              {toast && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  className="pointer-events-none absolute bottom-16 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-[#1b1a17] px-4 py-2.5 text-sm font-medium text-white shadow-xl sm:bottom-5"
                >
                  <Bell className="h-4 w-4 text-[#7fc8a4]" /> {toast}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Lead drawer */}
            <AnimatePresence>
              {open && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpenId(null)}
                    className="absolute inset-0 z-10 bg-[#1b1a17]/35"
                  />
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 30, stiffness: 320 }}
                    className="absolute inset-y-0 right-0 z-20 flex w-full max-w-md flex-col border-l border-[#e7e1d6] bg-white shadow-2xl"
                  >
                    <div className="flex items-start gap-3 border-b border-[#e7e1d6] p-4">
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-xl font-semibold leading-tight">{open.name}</p>
                        <p className="text-sm text-[#6b675e]">
                          {open.job} · {money(open.value)}
                        </p>
                      </div>
                      <button onClick={() => setOpenId(null)} aria-label="Close" className="rounded-lg p-1.5 text-[#6b675e] hover:bg-[#f3efe6]">
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="min-h-0 flex-1 space-y-5 overflow-y-auto p-4">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#6b675e]">Stage</p>
                        <div className="grid grid-cols-4 gap-1.5">
                          {STAGES.map((st) => (
                            <button
                              key={st}
                              onClick={() => moveLead(open.id, st)}
                              className={`rounded-lg border px-1 py-1.5 text-xs font-semibold transition-all ${
                                open.stage === st
                                  ? "border-[#166b45] bg-[#166b45] text-white"
                                  : "border-[#e7e1d6] bg-white text-[#6b675e] hover:border-[#166b45]/50"
                              }`}
                            >
                              {st}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-[#1b1a17]/80">
                        <span className="inline-flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-[#6b675e]" />{open.phone}</span>
                        <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-[#6b675e]" />{open.email}</span>
                      </div>

                      <div className="rounded-xl bg-[#faf7f2] p-3.5 text-sm leading-relaxed text-[#1b1a17]/85">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#6b675e]">Their message · {open.source}</p>
                        {open.message}
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={addFollowUp}
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#e7e1d6] px-3 py-2 text-sm font-semibold hover:border-[#166b45]/50"
                        >
                          <CalendarClock className="h-4 w-4 text-[#166b45]" /> Set follow-up
                        </button>
                        <button
                          onClick={() => showToast("Client portal link ready to share")}
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#e7e1d6] px-3 py-2 text-sm font-semibold hover:border-[#166b45]/50"
                        >
                          <FileText className="h-4 w-4 text-[#166b45]" /> Share portal
                        </button>
                      </div>

                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#6b675e]">Add a note</p>
                        <div className="flex gap-2">
                          <input
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addNote()}
                            placeholder="Spoke to them, booked for Friday…"
                            className="h-10 min-w-0 flex-1 rounded-lg border border-[#e7e1d6] px-3 text-sm outline-none focus:border-[#166b45]"
                          />
                          <button onClick={addNote} aria-label="Add note" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#166b45] text-white hover:bg-[#12583a]">
                            <Send className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6b675e]">Activity</p>
                        <ol className="relative space-y-4 border-l border-[#e7e1d6] pl-5">
                          {open.events.map((ev) => (
                            <li key={ev.id} className="relative">
                              <span className="absolute -left-[25px] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#166b45]" />
                              <p className="text-sm leading-snug text-[#1b1a17]/90">{ev.text}</p>
                              <p className="text-xs text-[#6b675e]">{ev.when}</p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-sm text-[#6b675e]">
        <ArrowRight className="h-4 w-4 text-[#166b45]" />
        This is a live sample with made-up data. Yours is set up with your business, your stages and your team.
      </p>
    </div>
  );
}
