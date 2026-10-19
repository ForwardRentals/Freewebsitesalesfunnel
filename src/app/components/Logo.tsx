// F + cursor mark ("04 / F Cursor"); keep in sync with public/favicon.svg
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#166b45" />
      <path
        d="M16 15a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H25v6.5h11a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H25V49a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
        fill="#fff"
      />
      <path d="M38 36v20l4.6-4.4 3.6 7.6 3.4-1.6-3.6-7.4 6.4-.4Z" fill="#c5f06a" />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="FreeSite Company">
      <LogoMark className="h-9 w-9 sm:h-10 sm:w-10 shrink-0" />
      <span className="flex flex-col leading-none" aria-hidden="true">
        <span className="text-[1.35rem] sm:text-2xl font-extrabold tracking-[-0.04em]">
          <span className={dark ? "text-white" : "text-[#10261b]"}>Free</span>
          <span className={dark ? "text-[#c5f06a]" : "text-[#166b45]"}>Site</span>
        </span>
        <span
          className={`mt-1 text-[0.6rem] font-semibold tracking-[0.32em] ${dark ? "text-white/80" : "text-[#4a5650]"}`}
        >
          COMPANY
        </span>
      </span>
    </span>
  );
}
