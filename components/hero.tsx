import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="bg-cream relative overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">
          <div className="order-2 lg:order-1">
            <div
              className="rise rise-1 inline-flex items-center gap-2.5 text-ink-soft mb-5"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.18em",
                fontSize: "0.75rem",
              }}
            >
              <span aria-hidden className="text-rust">★</span>
              Family-Owned · {site.city} County
              <span aria-hidden className="text-rust">★</span>
            </div>

            <h1
              className="display"
              style={{ lineHeight: 0.92, letterSpacing: "-0.01em" }}
            >
              <span
                className="rise rise-2 block text-ink"
                style={{
                  fontSize: "clamp(2.4rem, 6.5vw, 4.8rem)",
                }}
              >
                We Fix Your
              </span>
              <span
                className="rise rise-3 block text-rust"
                style={{
                  fontSize: "clamp(3.5rem, 10vw, 6.5rem)",
                  marginTop: "0.05em",
                }}
              >
                Appliances.
              </span>
            </h1>

            <p
              className="rise rise-4 mt-6 italic font-medium text-ink-soft max-w-[42ch]"
              style={{ fontFamily: "var(--font-body)", fontSize: "1.2rem", lineHeight: 1.5 }}
            >
              Your San Diego neighbors with the right tools and an honest
              price. Same-day service across the county — every repair
              backed by a one-year warranty.
            </p>

            <div className="rise rise-5 flex flex-wrap items-center gap-3 mt-8">
              <a href={`tel:${site.phoneRaw}`} className="btn-primary">
                <span aria-hidden>☎</span>
                Call {site.owner} · {site.phone}
              </a>
              <a href="#contact" className="btn-ghost">
                Get a Quote <span aria-hidden>→</span>
              </a>
            </div>

            <PricingPill />
          </div>

          <aside className="order-1 lg:order-2 flex flex-col items-center gap-3">
            <Logo
              variant="primary"
              priority
              className="w-[clamp(200px,28vw,300px)] h-auto"
            />
          </aside>
        </div>
      </div>
    </section>
  );
}

function PricingPill() {
  return (
    <div
      className="rise rise-5 mt-7 inline-flex items-center gap-3 bg-cream-soft border-2 border-ink rounded-full pl-2 pr-4 py-1.5"
      role="note"
      aria-label={`$${site.serviceCallPrice} service call`}
    >
      <span
        className="bg-plate text-ink rounded-full px-2.5 py-1 leading-none border border-ink"
        style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
      >
        ${site.serviceCallPrice}
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className="text-[0.72rem] uppercase tracking-[0.1em] text-ink"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Service Call
        </span>
        <span
          className="text-[0.78rem] italic text-ink-soft"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Waived if we can&apos;t fix it.
        </span>
      </span>
    </div>
  );
}
