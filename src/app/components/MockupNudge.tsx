import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";

// Points quick-form visitors to the full Get Started form, which gets an instant
// two-option website mockup emailed back (built by the Hermes Worker).
export function MockupNudge({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/get-started"
      className={`group flex items-center gap-3 rounded-2xl border border-[#166b45]/25 bg-[#166b45]/[0.06] px-4 py-3 text-left transition-colors hover:border-[#166b45]/60 hover:bg-[#166b45]/[0.1] ${className}`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#166b45] text-white">
        <Sparkles className="h-4 w-4" />
      </span>
      <span className="text-sm leading-snug text-[#1b1a17]">
        <span className="font-semibold">Want to see your website in 15 minutes?</span>{" "}
        <span className="text-[#6b675e]">Fill out the full form instead and we'll email you a first draft.</span>
      </span>
      <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#166b45] transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
