import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/site";
import { servicePages, serviceImages } from "@/lib/services-content";
import { ServiceIcon } from "@/components/service-icon";
import { Eyebrow } from "@/components/western";

const urlBySlug: Record<string, string> = Object.fromEntries(
  servicePages.map((s) => [s.slug, s.urlSlug])
);

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-cream/40">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <header className="text-center mb-14 max-w-[640px] mx-auto">
          <Eyebrow className="mb-3 justify-center">What We Fix</Eyebrow>
          <h2
            className="display text-ink"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            Every appliance in your home.
          </h2>
          <p className="mt-4 text-ink-soft" style={{ fontSize: "1.05rem" }}>
            Residential and commercial — factory-trained on every major brand,
            with the right parts on the truck.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${urlBySlug[service.slug]}`}
              className="group bg-paper border border-line rounded-xl p-5 flex flex-col gap-3 transition-shadow hover:shadow-[var(--shadow-soft-lg)]"
            >
              <div className="relative aspect-[5/3] bg-cream rounded-lg border border-line overflow-hidden flex items-center justify-center">
                {serviceImages[service.slug] ? (
                  <Image
                    src={serviceImages[service.slug]!}
                    alt={`${service.title} repair in San Diego`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <ServiceIcon slug={service.slug} className="w-1/2 h-1/2" />
                )}
              </div>
              <h3
                className="text-ink leading-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem" }}
              >
                {service.title}
              </h3>
              <p className="text-ink-soft leading-snug" style={{ fontSize: "0.92rem" }}>
                {service.blurb}
              </p>
              <span
                className="mt-auto text-rust text-[0.8rem] group-hover:underline"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
