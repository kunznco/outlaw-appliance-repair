import Image from "next/image";
import { Eyebrow } from "@/components/western";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-cream/40 border-y border-line">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-[0.95fr_1.3fr] gap-14 lg:gap-16 items-center">
          {/* Photo collage: Jesse working + the Outlaw truck */}
          <div className="relative max-w-[420px] w-full mx-auto mb-10 lg:mb-0">
            <div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line"
              style={{ boxShadow: "var(--shadow-soft-lg)" }}
            >
              <Image
                src="/images/tech-working.webp"
                alt="Jesse from Outlaw Appliance Repair working on an appliance"
                fill
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-3 w-40 sm:w-48 aspect-[4/3] rounded-xl overflow-hidden border-[3px] border-paper"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <Image
                src="/images/outlaw-truck.webp"
                alt="Outlaw Appliance Repair service truck in San Diego"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
            <div
              className="absolute top-3 left-3 bg-paper/95 border border-line rounded-full px-3 py-1 text-ink"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.02em" }}
            >
              {site.owner} · {site.ownerRole}
            </div>
          </div>

          <div>
            <Eyebrow className="mb-3">Meet {site.owner}</Eyebrow>
            <h2
              className="display text-ink mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
            >
              Your San Diego repair neighbor.
            </h2>
            <p className="text-ink-soft mb-4 leading-relaxed max-w-[56ch]" style={{ fontSize: "1.05rem" }}>
              {site.owner} is a {site.city} local who&apos;s spent two decades
              with his hands inside refrigerators, ovens, washers, and dryers
              across the county. Outlaw is his family-owned shop — built on a
              simple promise: show up on time, fix it once, and charge a fair
              price.
            </p>
            <p className="text-ink-soft mb-6 leading-relaxed max-w-[56ch]" style={{ fontSize: "1.05rem" }}>
              Factory-trained on every major brand. Licensed by the State of
              California. Every repair backed by a full one-year warranty — no
              tricks, no upsells, no surprises. Just your neighbor with the
              right tools and the right answer.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-md">
              <Credential label="CA License" value={site.license} />
              <Credential label="Warranty" value={site.warranty} />
              <Credential label="Training" value="Factory" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Credential({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-paper border border-line rounded-lg p-3 text-center">
      <div
        className="uppercase text-ink-soft mb-1"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "0.6rem",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </div>
      <div
        className="text-rust"
        style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.05rem" }}
      >
        {value}
      </div>
    </div>
  );
}
