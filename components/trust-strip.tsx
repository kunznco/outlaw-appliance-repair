import { trustBadges } from "@/lib/site";

export function TrustStrip() {
  return (
    <div className="bg-ink text-cream border-y-[3px] border-ink py-5">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        {trustBadges.map((badge, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-3 uppercase tracking-[0.1em] text-xs sm:text-sm"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {badge.stars ? (
              <span className="text-plate tracking-[0.1em]">★★★★★</span>
            ) : (
              <span aria-hidden className="text-plate">
                ★
              </span>
            )}
            <span>{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
