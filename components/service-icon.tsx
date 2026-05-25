import type { ServiceSlug } from "@/lib/site";

interface ServiceIconProps {
  slug: ServiceSlug;
  className?: string;
}

/**
 * Inline vintage SVG illustrations for each appliance category.
 * Replace later with nano-banana 2 generated AVIF where higher fidelity is needed.
 */
export function ServiceIcon({ slug, className }: ServiceIconProps) {
  const common = {
    viewBox: "0 0 100 120",
    className,
    "aria-hidden": true,
    xmlns: "http://www.w3.org/2000/svg",
  } as const;

  switch (slug) {
    case "refrigerator":
      return (
        <svg {...common}>
          <rect x="20" y="10" width="60" height="100" rx="4" fill="#F4EDDF" stroke="#1A1814" strokeWidth="2.5" />
          <line x1="20" y1="48" x2="80" y2="48" stroke="#1A1814" strokeWidth="2.5" />
          <rect x="72" y="22" width="3" height="16" fill="#1A1814" />
          <rect x="72" y="60" width="3" height="34" fill="#1A1814" />
          <circle cx="30" cy="55" r="1.5" fill="#A0432B" />
          <circle cx="34" cy="55" r="1.5" fill="#A0432B" />
        </svg>
      );
    case "dishwasher":
      return (
        <svg {...common}>
          <rect x="20" y="20" width="60" height="90" rx="3" fill="#F4EDDF" stroke="#1A1814" strokeWidth="2.5" />
          <rect x="25" y="25" width="50" height="10" fill="none" stroke="#1A1814" strokeWidth="1.5" />
          <line x1="30" y1="55" x2="70" y2="55" stroke="#A0432B" strokeWidth="1.5" />
          <line x1="30" y1="75" x2="70" y2="75" stroke="#A0432B" strokeWidth="1.5" />
          <line x1="30" y1="95" x2="70" y2="95" stroke="#A0432B" strokeWidth="1.5" />
        </svg>
      );
    case "range":
      return (
        <svg {...common}>
          <rect x="15" y="20" width="70" height="90" fill="#F4EDDF" stroke="#1A1814" strokeWidth="2.5" />
          <circle cx="30" cy="35" r="6" fill="#1A1814" />
          <circle cx="50" cy="35" r="6" fill="#1A1814" />
          <circle cx="70" cy="35" r="6" fill="#1A1814" />
          <rect x="25" y="55" width="50" height="40" fill="none" stroke="#1A1814" strokeWidth="1.5" />
          <line x1="30" y1="105" x2="70" y2="105" stroke="#1A1814" strokeWidth="1.5" />
        </svg>
      );
    case "washer":
      return (
        <svg {...common}>
          <rect x="20" y="10" width="60" height="100" rx="3" fill="#F4EDDF" stroke="#1A1814" strokeWidth="2.5" />
          <rect x="25" y="15" width="50" height="12" fill="none" stroke="#1A1814" strokeWidth="1.5" />
          <circle cx="35" cy="22" r="2" fill="#A0432B" />
          <circle cx="45" cy="22" r="2" fill="#A0432B" />
          <circle cx="55" cy="22" r="2" fill="#A0432B" />
          <circle cx="50" cy="68" r="22" fill="none" stroke="#1A1814" strokeWidth="2" />
          <circle cx="50" cy="68" r="14" fill="none" stroke="#1A1814" strokeWidth="1.5" />
        </svg>
      );
    case "dryer":
      return (
        <svg {...common}>
          <rect x="20" y="10" width="60" height="100" rx="3" fill="#F4EDDF" stroke="#1A1814" strokeWidth="2.5" />
          <rect x="25" y="15" width="50" height="12" fill="none" stroke="#1A1814" strokeWidth="1.5" />
          <circle cx="35" cy="22" r="2" fill="#A0432B" />
          <circle cx="45" cy="22" r="2" fill="#A0432B" />
          <circle cx="55" cy="22" r="2" fill="#A0432B" />
          <circle cx="50" cy="68" r="22" fill="none" stroke="#1A1814" strokeWidth="2" />
          <path d="M 38 64 Q 50 70 62 64" stroke="#A0432B" strokeWidth="2" fill="none" />
          <path d="M 38 72 Q 50 78 62 72" stroke="#A0432B" strokeWidth="2" fill="none" />
        </svg>
      );
    case "microwave":
      return (
        <svg {...common}>
          <rect x="10" y="30" width="80" height="50" fill="#F4EDDF" stroke="#1A1814" strokeWidth="2.5" />
          <rect x="15" y="35" width="50" height="40" fill="none" stroke="#1A1814" strokeWidth="1.5" />
          <line x1="68" y1="40" x2="85" y2="40" stroke="#A0432B" strokeWidth="1.5" />
          <line x1="68" y1="48" x2="85" y2="48" stroke="#A0432B" strokeWidth="1.5" />
          <line x1="68" y1="56" x2="85" y2="56" stroke="#A0432B" strokeWidth="1.5" />
          <rect x="68" y="62" width="17" height="10" fill="none" stroke="#1A1814" strokeWidth="1" />
        </svg>
      );
    case "garbage-disposal":
      return (
        <svg {...common}>
          <ellipse cx="50" cy="30" rx="32" ry="8" fill="#F4EDDF" stroke="#1A1814" strokeWidth="2.5" />
          <rect x="30" y="30" width="40" height="55" fill="#F4EDDF" stroke="#1A1814" strokeWidth="2.5" />
          <ellipse cx="50" cy="85" rx="20" ry="6" fill="#F4EDDF" stroke="#1A1814" strokeWidth="2.5" />
          <line x1="36" y1="45" x2="64" y2="45" stroke="#A0432B" strokeWidth="1.5" />
          <line x1="36" y1="55" x2="64" y2="55" stroke="#A0432B" strokeWidth="1.5" />
          <line x1="36" y1="65" x2="64" y2="65" stroke="#A0432B" strokeWidth="1.5" />
          <line x1="36" y1="75" x2="64" y2="75" stroke="#A0432B" strokeWidth="1.5" />
          <rect x="45" y="92" width="10" height="14" fill="#1A1814" />
        </svg>
      );
    case "ice-maker":
      return (
        <svg {...common}>
          <rect x="22" y="16" width="56" height="94" rx="4" fill="#F4EDDF" stroke="#1A1814" strokeWidth="2.5" />
          <rect x="28" y="22" width="44" height="20" fill="none" stroke="#1A1814" strokeWidth="1.5" />
          {/* ice cubes */}
          <rect x="34" y="58" width="14" height="14" rx="2" fill="none" stroke="#A0432B" strokeWidth="2" />
          <rect x="52" y="58" width="14" height="14" rx="2" fill="none" stroke="#A0432B" strokeWidth="2" />
          <rect x="43" y="78" width="14" height="14" rx="2" fill="none" stroke="#A0432B" strokeWidth="2" />
          <rect x="44" y="100" width="12" height="8" fill="#1A1814" />
        </svg>
      );
  }
}
