import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
          <div className="relative max-w-[400px] w-full mx-auto">
            <Logo
              variant="shield"
              className="w-full h-auto"
              title="Outlaw Appliance Repair — Jesse, Proprietor"
            />
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-plate border border-ink px-3 py-1 whitespace-nowrap uppercase text-ink shadow-[2px_2px_0_var(--color-ink)]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.62rem",
                letterSpacing: "0.16em",
              }}
            >
              {site.owner} · {site.ownerRole}
            </div>
          </div>

          <div>
            <div
              className="inline-flex items-center gap-2 text-ink-soft uppercase tracking-[0.16em] text-[0.72rem] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span aria-hidden className="text-rust">★</span>
              Meet {site.owner}
            </div>
            <h2
              className="display text-ink mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", lineHeight: 0.95 }}
            >
              Your San Diego{" "}
              <span className="text-rust">Repair Neighbor.</span>
            </h2>
            <p
              className="text-ink-soft mb-4 leading-relaxed max-w-[54ch]"
              style={{ fontSize: "1.05rem" }}
            >
              {site.owner} is a {site.city} local who&apos;s spent two decades
              with his hands inside refrigerators, ovens, washers, and dryers
              across the county. Outlaw is his family-owned shop — built on
              the simple promise of showing up on time, fixing it once, and
              charging a fair price.
            </p>
            <p
              className="text-ink-soft mb-4 leading-relaxed max-w-[54ch]"
              style={{ fontSize: "1.05rem" }}
            >
              Factory-trained on every major brand. Licensed by the State of
              California. Every repair backed by a full one-year warranty —
              no tricks, no upsells, no surprises. Just your neighbor with
              the right tools and the right answer.
            </p>

            <div className="grid grid-cols-3 gap-3 mt-7 max-w-md">
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
    <div className="border border-ink p-3 bg-cream text-center">
      <div
        className="uppercase text-ink-soft mb-1"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.6rem",
          letterSpacing: "0.12em",
        }}
      >
        {label}
      </div>
      <div
        className="text-ink"
        style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}
      >
        {value}
      </div>
    </div>
  );
}
