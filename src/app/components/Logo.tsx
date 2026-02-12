export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Browser window/house hybrid */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" /> {/* emerald-500 */}
          <stop offset="100%" stopColor="#06b6d4" /> {/* cyan-500 */}
        </linearGradient>
      </defs>
      
      {/* Main house/browser shape */}
      <path
        d="M50 10 L85 35 L85 80 C85 85 82 88 77 88 L23 88 C18 88 15 85 15 80 L15 35 Z"
        fill="url(#logoGradient)"
        opacity="0.9"
      />
      
      {/* Roof accent line */}
      <path
        d="M50 10 L85 35 L15 35 Z"
        fill="url(#logoGradient)"
      />
      
      {/* Browser tab/chimney detail */}
      <rect
        x="30"
        y="20"
        width="15"
        height="8"
        rx="2"
        fill="#34d399"
        opacity="0.8"
      />
      
      {/* Window/Screen area (lighter) */}
      <rect
        x="25"
        y="42"
        width="50"
        height="32"
        rx="4"
        fill="#f0fdfa"
        opacity="0.95"
      />
      
      {/* Friendly smile - code brackets */}
      <path
        d="M35 55 L38 58 L35 61"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M65 55 L62 58 L65 61"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Smile curve */}
      <path
        d="M42 62 Q50 68 58 62"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Door */}
      <rect
        x="44"
        y="75"
        width="12"
        height="13"
        rx="1"
        fill="#06b6d4"
        opacity="0.7"
      />
      
      {/* Door handle */}
      <circle
        cx="52"
        cy="82"
        r="1.5"
        fill="#f0fdfa"
      />
    </svg>
  );
}
