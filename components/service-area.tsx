import { LicensePlate } from "@/components/license-plate";
import { serviceAreas } from "@/lib/site";

export function ServiceArea() {
  return (
    <section id="area" className="py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="eyebrow mb-3">Riding Through The County</div>
            <h2
              className="display text-ink mb-4"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.4rem)", lineHeight: 0.95 }}
            >
              San Diego, <span className="text-rust">End To End.</span>
            </h2>
            <p
              className="text-ink-soft mb-6 leading-relaxed max-w-[52ch]"
              style={{ fontSize: "1.05rem" }}
            >
              From the coast to the back-country, from La Jolla estates to
              Ramona ranches — the Outlaw rolls a fully-stocked truck through
              every ZIP in the county.
            </p>

            <div
              className="flex flex-wrap gap-2.5 mb-6"
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

          <aside
            className="bg-rust text-cream border-[3px] border-ink p-8 relative"
            style={{ boxShadow: "var(--shadow-stamp-lg)" }}
          >
            <div
              className="inline-flex items-center gap-2 text-plate uppercase tracking-[0.18em] text-xs mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span>★</span> Now Posted Up In <span>★</span>
            </div>
            <h3
              className="display mb-3"
              style={{ fontSize: "2.1rem", lineHeight: 1 }}
            >
              Rancho Santa Fe
            </h3>
            <p
              className="italic text-cream-soft mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The county&apos;s quietest ZIP code calls for the loudest
              specialists. Built-in refrigeration, professional ranges,
              integrated dishwashers — we know the brands behind every cabinet
              door in 92067.
            </p>
            <div className="flex flex-wrap gap-x-2 gap-y-1.5 mb-6">
              {["Sub-Zero", "Wolf", "Viking", "Thermador", "Miele", "Gaggenau"].map(
                (b) => (
                  <span
                    key={b}
                    className="bg-cream text-rust uppercase tracking-[0.1em] px-2 py-1 border-[1.5px] border-ink text-[0.72rem]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {b}
                  </span>
                )
              )}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-plate text-ink uppercase tracking-[0.1em] px-4 py-2.5 border-2 border-ink"
              style={{
                fontFamily: "var(--font-display)",
                boxShadow: "3px 3px 0 var(--color-ink)",
              }}
            >
              Book a Visit <span aria-hidden>→</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
