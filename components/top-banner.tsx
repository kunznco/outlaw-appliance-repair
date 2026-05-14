import { site } from "@/lib/site";

/**
 * Quiet informational strip — replaces the previous scrolling marquee.
 * Static, single line, smaller. Reinforces trust without shouting.
 */
export function TopBanner() {
  const items = [
    "Family-owned in San Diego",
    `1-Year Warranty`,
    `CA Lic. ${site.license}`,
    "Same-Day Service",
  ];
  return (
    <div className="bg-ink text-cream border-b border-ink">
      <div
        className="mx-auto max-w-[1240px] px-4 sm:px-6 py-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[0.68rem] sm:text-xs"
        style={{
          fontFamily: "var(--font-display)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {items.map((text, i) => (
          <span key={i} className="inline-flex items-center gap-1.5">
            {i > 0 && (
              <span aria-hidden className="text-plate opacity-60">
                ·
              </span>
            )}
            <span>{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
