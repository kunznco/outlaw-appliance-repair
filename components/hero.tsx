import { Logo } from "@/components/logo";
import { SkullMark } from "@/components/western";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div
              className="rise rise-1 inline-flex items-center gap-2 text-ink-soft mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                letterSpacing: "0.1em",
                fontSize: "0.74rem",
                textTransform: "uppercase",
              }}
            >
              <SkullMark className="w-5 h-[0.8rem] text-rust shrink-0" />
              Family-Owned · {site.city} County
            </div>

            <h1 className="display" style={{ lineHeight: 1.02 }}>
              <span
                className="rise rise-2 block text-ink"
                style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
              >
                We fix your
              </span>
              <span
                className="rise rise-3 block text-rust"
                style={{ fontSize: "clamp(3rem, 8.5vw, 5.5rem)", marginTop: "0.04em" }}
              >
                appliances.
              </span>
            </h1>

            <p
              className="rise rise-4 mt-6 text-ink-soft max-w-[46ch]"
              style={{ fontSize: "1.15rem", lineHeight: 1.6 }}
            >
              Your San Diego neighbors with the right tools and an honest
              price. Same-day service across the county, and every repair is
              backed by a one-year warranty.
            </p>

            <div className="rise rise-5 flex flex-wrap items-center gap-3 mt-8">
              <a href={`tel:${site.phoneRaw}`} className="btn-primary">
                <PhoneIcon />
                Call {site.owner} · {site.phone}
              </a>
              <a href="/contact" className="btn-ghost">
                Get a Quote
              </a>
            </div>

            <PricingPill />
          </div>

          <aside className="order-1 lg:order-2 flex justify-center">
            <Logo
              variant="primary"
              priority
              className="w-[clamp(210px,30vw,320px)] h-auto"
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
      className="rise rise-5 mt-7 inline-flex items-center gap-3 bg-paper border border-line rounded-full pl-1.5 pr-4 py-1.5"
      style={{ boxShadow: "var(--shadow-soft)" }}
      role="note"
      aria-label={`$${site.serviceCallPrice} service call`}
    >
      <span
        className="bg-rust text-white rounded-full px-3 py-1.5 leading-none"
        style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.05rem" }}
      >
        ${site.serviceCallPrice}
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className="text-[0.74rem] uppercase tracking-[0.08em] text-ink"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          Diagnosis Fee
        </span>
        <span className="text-[0.8rem] text-ink-soft">
          Waived when you book the repair.
        </span>
      </span>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
