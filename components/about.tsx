import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
          <div className="relative max-w-[460px] w-full mx-auto">
            <Logo
              variant="shield"
              className="w-full h-auto"
              title="Outlaw Appliance Repair — Jesse, Proprietor"
            />
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-plate border-[1.5px] border-ink px-3 py-1 whitespace-nowrap uppercase text-ink"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                boxShadow: "2px 2px 0 var(--color-ink)",
              }}
            >
              ★ Jesse · Proprietor ★
            </div>
          </div>

          <div>
            <div className="eyebrow mb-3">Meet The Outlaw</div>
            <h2
              className="display text-ink mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", lineHeight: 0.95 }}
            >
              Twenty Years On The{" "}
              <span className="text-rust">Workbench.</span>
            </h2>
            <p
              className="text-ink-soft mb-4 leading-relaxed max-w-[52ch]"
              style={{ fontSize: "1.05rem" }}
            >
              Jesse runs Outlaw the way his old man ran a service truck — show
              up when you say you will, fix it once, charge a fair price, and
              back your work with your name.
            </p>
            <p
              className="text-ink-soft mb-4 leading-relaxed max-w-[52ch]"
              style={{ fontSize: "1.05rem" }}
            >
              Factory-trained on every major brand. Licensed by the State of
              California. One year of warranty on every repair, every part,
              every time. No tricks, no upsells, no smoke and mirrors. Just an
              honest day&apos;s work and a kitchen that runs again before
              dinner.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <Credential label="CA License" value={site.license} />
              <Credential label="Warranty" value={site.warranty} />
              <Credential label="Training" value="Factory-Cert." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Credential({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-2 border-ink p-4 bg-cream text-center">
      <div
        className="uppercase text-ink-soft mb-1.5"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.65rem",
          letterSpacing: "0.14em",
        }}
      >
        {label}
      </div>
      <div
        className="text-rust"
        style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
      >
        {value}
      </div>
    </div>
  );
}
