import { Logo } from "@/components/logo";
import { Eyebrow } from "@/components/western";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-cream/40 border-y border-line">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.3fr] gap-12 lg:gap-16 items-center">
          <div className="relative max-w-[360px] w-full mx-auto">
            <Logo
              variant="shield"
              className="w-full h-auto"
              title="Outlaw Appliance Repair — Jesse, Proprietor"
            />
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-paper border border-line rounded-full px-4 py-1.5 whitespace-nowrap text-ink"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.04em",
                boxShadow: "var(--shadow-soft)",
              }}
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
    <div className="bg-paper border border-line rounded-lg p-4 text-center">
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
