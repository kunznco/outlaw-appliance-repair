import { services } from "@/lib/site";
import { ServiceIcon } from "@/components/service-icon";

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <header className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 text-ink-soft uppercase tracking-[0.16em] text-[0.72rem] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span aria-hidden className="text-rust">★</span>
            What We Fix
          </div>
          <h2
            className="display text-ink"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              lineHeight: 0.95,
            }}
          >
            Every Appliance In <span className="text-rust">Your Home.</span>
          </h2>
          <p
            className="mt-4 text-ink-soft max-w-[52ch] mx-auto leading-relaxed"
            style={{ fontSize: "1.05rem" }}
          >
            Residential and commercial — factory-trained on every major brand,
            with the right parts on the truck.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <article
              key={service.slug}
              className="bg-paper border border-ink p-5 flex flex-col gap-3 relative transition-transform hover:-translate-y-1 hover:shadow-[3px_3px_0_var(--color-ink)]"
            >
              <span
                className="absolute top-3 right-3 text-[0.65rem] uppercase tracking-[0.1em] text-ink-soft opacity-40"
                style={{ fontFamily: "var(--font-display)" }}
              >
                № {service.number}
              </span>
              <div className="aspect-[4/3] bg-cream-deep border border-ink flex items-center justify-center">
                <ServiceIcon slug={service.slug} className="w-3/5 h-3/5" />
              </div>
              <h3
                className="uppercase text-ink leading-tight"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}
              >
                {service.title}
              </h3>
              <p
                className="text-ink-soft leading-snug"
                style={{ fontSize: "0.92rem" }}
              >
                {service.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
