import { services } from "@/lib/site";
import { ServiceIcon } from "@/components/service-icon";

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <header className="text-center mb-16">
          <div className="eyebrow mb-3">Nine Appliances · One Crew</div>
          <h2
            className="display text-ink"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              lineHeight: 0.95,
            }}
          >
            We Fix &apos;Em. <span className="text-rust">All Of &apos;Em.</span>
          </h2>
          <p
            className="mt-4 italic text-ink-soft max-w-[50ch] mx-auto"
            style={{ fontSize: "1.15rem" }}
          >
            From a fridge that won&apos;t cool to a range that won&apos;t light —
            residential, commercial, and industrial. Factory-trained, with the
            right parts on the truck.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.slug}
              className="bg-paper border-2 border-ink p-6 flex flex-col gap-4 relative transition-transform hover:-translate-x-[3px] hover:-translate-y-[3px]"
              style={{ boxShadow: "var(--shadow-stamp)" }}
            >
              <span
                className="absolute top-3 right-3 text-xs uppercase tracking-[0.1em] text-rust opacity-60"
                style={{ fontFamily: "var(--font-display)" }}
              >
                № {service.number}
              </span>
              <div className="aspect-[4/3] bg-cream-deep border border-ink flex items-center justify-center">
                <ServiceIcon slug={service.slug} className="w-3/5 h-3/5" />
              </div>
              <h3
                className="uppercase text-ink leading-tight"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem" }}
              >
                {service.title}
              </h3>
              <p
                className="text-ink-soft leading-snug"
                style={{ fontSize: "0.95rem" }}
              >
                {service.blurb}
              </p>
              <span
                className="mt-auto uppercase text-rust inline-flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.16em",
                }}
              >
                Run it down <span aria-hidden>→</span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
