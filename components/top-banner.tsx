import { announcements } from "@/lib/site";

export function TopBanner() {
  // Duplicate the announcements for seamless marquee loop
  const items = [...announcements, ...announcements];
  return (
    <div className="bg-plate text-ink border-b-[3px] border-ink overflow-hidden">
      <div
        className="marquee-track py-2 text-xs sm:text-sm"
        style={{
          fontFamily: "var(--font-display)",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
        }}
      >
        {items.map((text, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <span className="text-rust">★</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
