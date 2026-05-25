import { trustBadges } from "@/lib/site";

export function TrustStrip() {
  return (
    <div className="bg-paper border-y border-line">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 flex flex-wrap items-center justify-center sm:justify-between gap-x-7 gap-y-3 py-4">
        {trustBadges.map((badge, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 text-[0.8rem] text-ink"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            {badge.stars ? (
              <span className="text-plate-deep tracking-tight" aria-hidden>
                ★★★★★
              </span>
            ) : (
              <CheckIcon />
            )}
            <span>{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-rust)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
