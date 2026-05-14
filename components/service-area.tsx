import { LicensePlate } from "@/components/license-plate";
import { serviceAreas, site } from "@/lib/site";

export function ServiceArea() {
  return (
    <section id="area" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 text-ink-soft uppercase tracking-[0.16em] text-[0.72rem] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span aria-hidden className="text-rust">★</span>
              Serving the Whole County
            </div>
            <h2
              className="display text-ink mb-4"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", lineHeight: 0.95 }}
            >
              {site.city}, <span className="text-rust">End to End.</span>
            </h2>
            <p
              className="text-ink-soft mb-6 leading-relaxed max-w-[52ch]"
              style={{ fontSize: "1.05rem" }}
            >
              From the coast to the back-country, La Jolla estates to Ramona
              ranches — we&apos;re your San Diego neighbors with a fully
              stocked truck and a one-year warranty on every visit.
            </p>

            <div
              className="flex flex-wrap gap-2 mb-6"
              aria-label="Cities served"
            >
              {serviceAreas.map((area) => (
                <LicensePlate
                  key={area.name}
                  state="CA"
                  number={area.short}
                  className="!text-xs"
                />
              ))}
            </div>
          </div>

          <aside className="bg-paper border-2 border-ink p-7 sm:p-8 relative shadow-[6px_6px_0_var(--color-ink)]">
            <div
              className="inline-flex items-center gap-2 text-rust uppercase tracking-[0.18em] text-xs mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Featured Service Area
            </div>
            <h3
              className="display text-ink mb-3"
              style={{ fontSize: "1.9rem", lineHeight: 1 }}
            >
              Rancho Santa Fe
            </h3>
            <p
              className="text-ink-soft mb-5 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Built-in refrigeration, professional ranges, integrated
              dishwashers — we know the premium brands behind every cabinet
              door in 92067.
            </p>
            <div className="flex flex-wrap gap-x-2 gap-y-1.5 mb-6">
              {["Sub-Zero", "Wolf", "Viking", "Thermador", "Miele", "Gaggenau"].map(
                (b) => (
                  <span
                    key={b}
                    className="bg-cream text-ink uppercase tracking-[0.1em] px-2 py-1 border border-ink text-[0.7rem]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {b}
                  </span>
                )
              )}
            </div>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-rust text-cream uppercase tracking-[0.08em] px-4 py-2.5 border-2 border-ink shadow-[3px_3px_0_var(--color-ink)]"
              style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem" }}
            >
              Book a Visit <span aria-hidden>→</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
