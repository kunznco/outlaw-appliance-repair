import { cn } from "@/lib/utils";

/**
 * Subtle western brand tidbits. Small, muted, used sparingly so the site
 * stays clean while quietly tying back to the Outlaw bull-skull identity.
 */

/** Section eyebrow with a small skull tick — the recurring brand tidbit. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("eyebrow", className)}>
      <SkullMark className="w-5 h-[0.8rem] shrink-0" />
      {children}
    </div>
  );
}

/** Compact bull-skull silhouette. Inherits color via currentColor. */
export function SkullMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      className={cn(className)}
      fill="currentColor"
      aria-hidden
    >
      {/* left horn */}
      <path d="M26 17C18 13 11 8 4 9c-2 .3-2 2-.5 2.6C10 12 17 14 24 20z" />
      {/* right horn */}
      <path d="M38 17c8-4 15-9 22-8 2 .3 2 2 .5 2.6C54 12 47 14 40 20z" />
      {/* skull */}
      <path d="M32 12c-7 0-11 5-11 12 0 6 5 12 11 14 6-2 11-8 11-14 0-7-4-12-11-12z" />
      {/* eye sockets knocked out via small bg-tone ovals */}
      <ellipse cx="27.5" cy="25" rx="2.1" ry="2.6" fill="var(--color-bg)" />
      <ellipse cx="36.5" cy="25" rx="2.1" ry="2.6" fill="var(--color-bg)" />
    </svg>
  );
}

/** Faint vintage sunburst for behind a focal element. Very low opacity. */
export function Sunburst({
  className,
  rays = 28,
}: {
  className?: string;
  rays?: number;
}) {
  const lines = Array.from({ length: rays }, (_, i) => {
    const angle = (i / rays) * 360;
    return (
      <line
        key={i}
        x1="100"
        y1="100"
        x2="100"
        y2="4"
        stroke="var(--color-rust)"
        strokeWidth={i % 2 === 0 ? 2 : 1}
        transform={`rotate(${angle} 100 100)`}
      />
    );
  });
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn(className)}
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <g opacity="0.12">{lines}</g>
    </svg>
  );
}

/** Saddle-stitch divider: a small centered skull flanked by dashed rules. */
export function StitchDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center justify-center gap-4", className)}
      aria-hidden
    >
      <span className="h-px w-16 sm:w-24 border-t-2 border-dashed border-rust/30" />
      <SkullMark className="w-8 h-5 text-rust/70" />
      <span className="h-px w-16 sm:w-24 border-t-2 border-dashed border-rust/30" />
    </div>
  );
}
