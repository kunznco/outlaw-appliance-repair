import { cn } from "@/lib/utils";

/**
 * Outlaw brand identity — inline SVG variants.
 *
 * Variants (per brand sheet):
 *   - primary    Bull skull + sunburst over rust shield + license plate. Hero centerpiece.
 *   - shield     Rust shield + license plate, no skull. Footer brand block / section accents.
 *   - icon       Bull skull on teal disc. Favicon / small marks.
 *   - wordmark   Pure yellow type on cream. Editorial / print.
 *   - horizontal Skull left, rust block + plate right. Nav header lockup.
 *
 * Drop higher-fidelity raster versions at /public/logo/{variant}.png if desired —
 * the inline SVG here is the production fallback and works without any assets.
 */

type LogoVariant = "primary" | "shield" | "icon" | "wordmark" | "horizontal";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  title?: string;
}

export function Logo({
  variant = "primary",
  className,
  title = "Outlaw Appliance Repair",
}: LogoProps) {
  switch (variant) {
    case "primary":
      return <PrimaryBadge className={className} title={title} />;
    case "shield":
      return <ShieldMark className={className} title={title} />;
    case "icon":
      return <SkullIcon className={className} title={title} />;
    case "wordmark":
      return <Wordmark className={className} title={title} />;
    case "horizontal":
      return <HorizontalLockup className={className} title={title} />;
  }
}

/* ============================================================
   SKULL — reusable inner glyph used across multiple variants
   ============================================================ */

function Skull({ scale = 1 }: { scale?: number }) {
  return (
    <g transform={`scale(${scale})`}>
      {/* Left horn */}
      <path
        d="M 165 70 Q 105 55 55 80 Q 28 100 22 138 Q 32 122 60 110 Q 100 100 145 110 Q 165 95 165 70 Z"
        fill="#1A1814"
        stroke="#1A1814"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Right horn (mirror) */}
      <path
        d="M 235 70 Q 295 55 345 80 Q 372 100 378 138 Q 368 122 340 110 Q 300 100 255 110 Q 235 95 235 70 Z"
        fill="#1A1814"
        stroke="#1A1814"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Skull cranium (cream) */}
      <path
        d="
          M 200 60
          Q 165 60 150 95
          Q 140 130 155 165
          L 155 195
          Q 160 215 175 220
          Q 180 235 175 250
          Q 180 260 190 262
          Q 195 280 200 290
          Q 205 280 210 262
          Q 220 260 225 250
          Q 220 235 225 220
          Q 240 215 245 195
          L 245 165
          Q 260 130 250 95
          Q 235 60 200 60 Z
        "
        fill="#F4EDDF"
        stroke="#1A1814"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Cranium center seam */}
      <path
        d="M 200 70 L 200 155"
        stroke="#1A1814"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Eye sockets */}
      <ellipse cx="172" cy="155" rx="16" ry="20" fill="#1A1814" />
      <ellipse cx="228" cy="155" rx="16" ry="20" fill="#1A1814" />
      {/* Nasal cavity */}
      <path
        d="M 200 180 Q 192 195 195 215 Q 200 225 205 215 Q 208 195 200 180 Z"
        fill="#1A1814"
      />
      {/* Teeth hint at muzzle */}
      <line x1="190" y1="255" x2="190" y2="270" stroke="#1A1814" strokeWidth="1.5" />
      <line x1="200" y1="258" x2="200" y2="272" stroke="#1A1814" strokeWidth="1.5" />
      <line x1="210" y1="255" x2="210" y2="270" stroke="#1A1814" strokeWidth="1.5" />
    </g>
  );
}

function Sunburst({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const rays = 24;
  const lines: React.ReactElement[] = [];
  for (let i = 0; i < rays; i++) {
    // Only top half — skip rays pointing down
    const angle = (i / rays) * Math.PI * 2 - Math.PI / 2;
    if (angle > Math.PI / 2 - 0.1 || angle < -Math.PI - 0.1) continue;
    if (angle > 0.1) continue; // skip lower half
    const inner = r * 0.4;
    const outer = r + (i % 3 === 0 ? 18 : i % 2 === 0 ? 10 : 4);
    const x1 = cx + Math.cos(angle) * inner;
    const y1 = cy + Math.sin(angle) * inner;
    const x2 = cx + Math.cos(angle) * outer;
    const y2 = cy + Math.sin(angle) * outer;
    lines.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#A0432B"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    );
  }
  return <g>{lines}</g>;
}

/* ============================================================
   PRIMARY — full badge: sunburst + skull + shield + plate
   Use for: hero centerpiece
   ============================================================ */

function PrimaryBadge({ className, title }: { className?: string; title: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={cn(className)}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {/* Sunburst rays behind skull */}
      <Sunburst cx={200} cy={130} r={120} />

      {/* Skull + horns */}
      <Skull />

      {/* Shield underneath */}
      <g>
        <path
          d="
            M 60 260
            L 60 410
            Q 60 440 100 455
            L 200 480
            L 300 455
            Q 340 440 340 410
            L 340 260
            Z
          "
          fill="#A0432B"
          stroke="#1A1814"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Rivets — corners */}
        <circle cx="74" cy="274" r="3.5" fill="#1A1814" />
        <circle cx="326" cy="274" r="3.5" fill="#1A1814" />
        <circle cx="80" cy="430" r="3.5" fill="#1A1814" />
        <circle cx="320" cy="430" r="3.5" fill="#1A1814" />

        {/* Inset stroke for depth */}
        <path
          d="
            M 74 274
            L 74 405
            Q 74 432 108 445
            L 200 467
            L 292 445
            Q 326 432 326 405
            L 326 274
            Z
          "
          fill="none"
          stroke="#1A1814"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity="0.5"
        />

        {/* Type — Alfa Slab One via CSS var */}
        <text
          x="200"
          y="320"
          textAnchor="middle"
          fontFamily="var(--font-display, 'Alfa Slab One', serif)"
          fontSize="42"
          fill="#E8B948"
          letterSpacing="2"
        >
          OUTLAW
        </text>
        <text
          x="200"
          y="368"
          textAnchor="middle"
          fontFamily="var(--font-display, 'Alfa Slab One', serif)"
          fontSize="30"
          fill="#E8B948"
          letterSpacing="1.5"
        >
          APPLIANCE
        </text>
        <text
          x="200"
          y="408"
          textAnchor="middle"
          fontFamily="var(--font-display, 'Alfa Slab One', serif)"
          fontSize="30"
          fill="#E8B948"
          letterSpacing="1.5"
        >
          REPAIR
        </text>
      </g>

      {/* License plate at base */}
      <g>
        <rect
          x="110"
          y="455"
          width="180"
          height="32"
          rx="3"
          fill="#F4EDDF"
          stroke="#1A1814"
          strokeWidth="2.5"
        />
        <text
          x="200"
          y="478"
          textAnchor="middle"
          fontFamily="var(--font-display, 'Alfa Slab One', serif)"
          fontSize="16"
          fill="#1A1814"
          letterSpacing="3"
        >
          SAN DIEGO, CA
        </text>
      </g>
    </svg>
  );
}

/* ============================================================
   SHIELD — secondary mark: shield + plate, no skull
   Use for: footer brand block, section accents
   ============================================================ */

function ShieldMark({ className, title }: { className?: string; title: string }) {
  return (
    <svg
      viewBox="0 0 300 360"
      className={cn(className)}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        d="
          M 30 30
          L 30 250
          Q 30 290 78 310
          L 150 340
          L 222 310
          Q 270 290 270 250
          L 270 30
          Z
        "
        fill="#A0432B"
        stroke="#1A1814"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="46" cy="46" r="3.5" fill="#1A1814" />
      <circle cx="254" cy="46" r="3.5" fill="#1A1814" />
      <circle cx="58" cy="295" r="3.5" fill="#1A1814" />
      <circle cx="242" cy="295" r="3.5" fill="#1A1814" />

      <text
        x="150"
        y="105"
        textAnchor="middle"
        fontFamily="var(--font-display, 'Alfa Slab One', serif)"
        fontSize="42"
        fill="#E8B948"
        letterSpacing="2"
      >
        OUTLAW
      </text>
      <text
        x="150"
        y="160"
        textAnchor="middle"
        fontFamily="var(--font-display, 'Alfa Slab One', serif)"
        fontSize="30"
        fill="#E8B948"
        letterSpacing="1.5"
      >
        APPLIANCE
      </text>
      <text
        x="150"
        y="205"
        textAnchor="middle"
        fontFamily="var(--font-display, 'Alfa Slab One', serif)"
        fontSize="30"
        fill="#E8B948"
        letterSpacing="1.5"
      >
        REPAIR
      </text>

      <rect
        x="70"
        y="245"
        width="160"
        height="28"
        rx="3"
        fill="#F4EDDF"
        stroke="#1A1814"
        strokeWidth="2.5"
      />
      <text
        x="150"
        y="265"
        textAnchor="middle"
        fontFamily="var(--font-display, 'Alfa Slab One', serif)"
        fontSize="14"
        fill="#1A1814"
        letterSpacing="3"
      >
        SAN DIEGO, CA
      </text>
    </svg>
  );
}

/* ============================================================
   ICON — skull on teal disc
   Use for: favicon, small marks
   ============================================================ */

function SkullIcon({ className, title }: { className?: string; title: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(className)}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <circle cx="50" cy="50" r="48" fill="#2F5C6E" stroke="#1A1814" strokeWidth="2" />
      {/* Skull scaled down */}
      <g transform="translate(50 50) scale(0.18) translate(-200 -180)">
        <Skull />
      </g>
    </svg>
  );
}

/* ============================================================
   WORDMARK — pure type, yellow on cream
   Use for: editorial / print accents
   ============================================================ */

function Wordmark({ className, title }: { className?: string; title: string }) {
  return (
    <svg
      viewBox="0 0 300 240"
      className={cn(className)}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <text
        x="150"
        y="70"
        textAnchor="middle"
        fontFamily="var(--font-display, 'Alfa Slab One', serif)"
        fontSize="56"
        fill="#E8B948"
        stroke="#1A1814"
        strokeWidth="1.5"
        letterSpacing="2"
      >
        OUTLAW
      </text>
      <text
        x="150"
        y="135"
        textAnchor="middle"
        fontFamily="var(--font-display, 'Alfa Slab One', serif)"
        fontSize="40"
        fill="#E8B948"
        stroke="#1A1814"
        strokeWidth="1.5"
        letterSpacing="1.5"
      >
        APPLIANCE
      </text>
      <text
        x="150"
        y="190"
        textAnchor="middle"
        fontFamily="var(--font-display, 'Alfa Slab One', serif)"
        fontSize="40"
        fill="#E8B948"
        stroke="#1A1814"
        strokeWidth="1.5"
        letterSpacing="1.5"
      >
        REPAIR
      </text>
    </svg>
  );
}

/* ============================================================
   HORIZONTAL — skull on left, rust block + plate on right
   Use for: nav header lockup
   ============================================================ */

function HorizontalLockup({
  className,
  title,
}: {
  className?: string;
  title: string;
}) {
  return (
    <svg
      viewBox="0 0 600 200"
      className={cn(className)}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {/* Skull on the left */}
      <g transform="translate(-30 -40)">
        <Sunburst cx={170} cy={120} r={90} />
        <Skull />
      </g>

      {/* Rust block on the right */}
      <g>
        <rect
          x="240"
          y="40"
          width="340"
          height="100"
          fill="#A0432B"
          stroke="#1A1814"
          strokeWidth="3"
        />
        <circle cx="252" cy="52" r="3" fill="#1A1814" />
        <circle cx="568" cy="52" r="3" fill="#1A1814" />
        <circle cx="252" cy="128" r="3" fill="#1A1814" />
        <circle cx="568" cy="128" r="3" fill="#1A1814" />

        <text
          x="410"
          y="85"
          textAnchor="middle"
          fontFamily="var(--font-display, 'Alfa Slab One', serif)"
          fontSize="36"
          fill="#E8B948"
          letterSpacing="2"
        >
          OUTLAW
        </text>
        <text
          x="410"
          y="120"
          textAnchor="middle"
          fontFamily="var(--font-display, 'Alfa Slab One', serif)"
          fontSize="20"
          fill="#E8B948"
          letterSpacing="2"
        >
          APPLIANCE REPAIR
        </text>

        <rect
          x="290"
          y="150"
          width="240"
          height="28"
          rx="3"
          fill="#1A1814"
          stroke="#1A1814"
          strokeWidth="2"
        />
        <text
          x="410"
          y="170"
          textAnchor="middle"
          fontFamily="var(--font-display, 'Alfa Slab One', serif)"
          fontSize="14"
          fill="#F4EDDF"
          letterSpacing="3"
        >
          SAN DIEGO, CA
        </text>
      </g>
    </svg>
  );
}
