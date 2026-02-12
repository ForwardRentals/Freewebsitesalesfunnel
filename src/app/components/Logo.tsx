export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* House body */}
      <path
        d="M15 45 L15 82 C15 86 18 88 22 88 L78 88 C82 88 85 86 85 82 L85 45 Z"
        fill="#2dd4a8"
      />
      {/* Roof */}
      <path
        d="M50 12 L90 45 L10 45 Z"
        fill="#2dd4a8"
      />
      {/* Left eye */}
      <circle cx="38" cy="58" r="5" fill="white" />
      {/* Right eye */}
      <circle cx="62" cy="58" r="5" fill="white" />
      {/* Smile */}
      <path
        d="M36 70 Q50 82 64 70"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
