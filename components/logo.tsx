import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Outlaw brand identity — uses the cropped logo PNGs in /public/logo/.
 * Five variants from the brand sheet:
 *
 *   - primary    Bull skull + sunburst over rust shield + license plate. Hero centerpiece.
 *   - shield     Rust shield + plate, no skull. Footer brand block / section accents.
 *   - icon       Bull skull on teal disc (square). Favicon / small marks / nav.
 *   - wordmark   Pure yellow type on cream. Editorial / print accents.
 *   - horizontal Skull left, rust block + plate right. Nav lockup / banner.
 */

type LogoVariant = "primary" | "shield" | "icon" | "wordmark" | "horizontal";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
  title?: string;
}

const SOURCES: Record<
  LogoVariant,
  { src: string; width: number; height: number }
> = {
  primary: { src: "/logo/primary.png", width: 450, height: 475 },
  shield: { src: "/logo/shield.png", width: 450, height: 300 },
  icon: { src: "/logo/icon.png", width: 400, height: 400 },
  wordmark: { src: "/logo/wordmark.png", width: 485, height: 220 },
  horizontal: { src: "/logo/horizontal.png", width: 485, height: 215 },
};

export function Logo({
  variant = "primary",
  className,
  priority = false,
  title = "Outlaw Appliance Repair",
}: LogoProps) {
  const cfg = SOURCES[variant];
  return (
    <Image
      src={cfg.src}
      alt={title}
      width={cfg.width}
      height={cfg.height}
      priority={priority}
      className={cn(className)}
    />
  );
}
