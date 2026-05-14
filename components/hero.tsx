import { Logo } from "@/components/logo";
import { LicensePlate } from "@/components/license-plate";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="bg-cream relative overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div
              className="rise rise-1 inline-flex items-center gap-3 text-rust mb-6"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.22em",
                fontSize: "0.85rem",
              }}
            >
              <span className="inline-block w-8 h-[2px] bg-rust" />
              WANTED IN SAN DIEGO
              <span className="inline-block w-8 h-[2px] bg-rust" />
            </div>

            <h1
              className="display"
              style={{ lineHeight: 0.88, letterSpacing: "-0.02em" }}
            >
              <span
                className="rise rise-2 block text-rust"
                style={{
                  fontSize: "clamp(4.5rem, 14vw, 9.5rem)",
                  textShadow: "5px 5px 0 var(--color-ink)",
                  marginBottom: "0.15em",
                }}
              >
                Outlaw
              </span>
              <span
                className="rise rise-3 block text-ink"
                style={{ fontSize: "clamp(2.2rem, 6.4vw, 4.3rem)" }}
              >
                Appliance Repair
              </span>
            </h1>

            <p
              className="rise rise-4 mt-7 italic font-medium border-l-[3px] border-rust pl-4 text-ink-soft max-w-[30ch]"
              style={{ fontFamily: "var(--font-body)", fontSize: "1.35rem" }}
            >
              Where expertise meets reliability. We run down the problem, fix it
              once, and back it with a year-long warranty.
            </p>

            <div className="rise rise-5 flex flex-wrap items-center gap-4 mt-10">
              <a href={`tel:${site.phoneRaw}`} className="btn-primary">
                <span aria-hidden>☎</span>
                Call Jesse
              </a>
              <a href="#contact" className="btn-ghost">
                Get a Quote <span aria-hidden>→</span>
              </a>
            </div>

            <PricingPill />
          </div>

          <aside className="order-1 lg:order-2 flex flex-col items-center gap-6">
            <span
              aria-hidden
              className="text-rust tracking-[0.5em]"
              style={{ fontSize: "1.2rem" }}
            >
              ✦ ✦ ✦
            </span>
            <Logo
              variant="primary"
              priority
              className="w-[clamp(240px,36vw,380px)] h-auto drop-shadow-[6px_8px_0_rgba(26,24,20,0.15)]"
            />
            <LicensePlate number={site.license} />
            <span
              aria-hidden
              className="text-rust tracking-[0.5em]"
              style={{ fontSize: "1.2rem" }}
            >
              ✦ ✦ ✦
            </span>
          </aside>
        </div>
      </div>
    </section>
  );
}

function PricingPill() {
  return (
    <div
      className="rise rise-5 mt-8 inline-flex items-center gap-4 bg-ink text-cream rounded-full pl-2 pr-5 py-2 border-2 border-ink"
      role="note"
      aria-label={`$${site.serviceCallPrice} service call`}
    >
      <span
        className="bg-plate text-ink rounded-full px-3 py-1.5 leading-none"
        style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem" }}
      >
        ${site.serviceCallPrice}
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className="text-xs uppercase tracking-[0.1em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Service Call
        </span>
        <span
          className="text-sm italic text-cream-soft"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Fully waived if we can&apos;t fix it.
        </span>
      </span>
    </div>
  );
}
