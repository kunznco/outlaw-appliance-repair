import { serviceAreas, site } from "@/lib/site";
import { Eyebrow } from "@/components/western";

export function ServiceArea() {
  return (
    <section id="area" className="py-20 sm:py-24 bg-cream/40 border-y border-line">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Eyebrow className="mb-3">Serving the Whole County</Eyebrow>
            <h2
              className="display text-ink mb-4"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
            >
              {site.city}, end to end.
            </h2>
            <p className="text-ink-soft mb-6 leading-relaxed max-w-[52ch]" style={{ fontSize: "1.05rem" }}>
              From the coast to the back-country, La Jolla estates to Ramona
              ranches — we&apos;re your San Diego neighbors with a fully
              stocked truck and a one-year warranty on every visit.
            </p>

            <ul className="flex flex-wrap gap-2" aria-label="Cities served">
              {serviceAreas.map((area) => (
                <li
                  key={area.name}
                  className="bg-paper border border-line rounded-full px-3 py-1.5 text-[0.8rem] text-ink"
                  style={{ fontWeight: 500 }}
                >
                  {area.name}
                </li>
              ))}
            </ul>
          </div>

          <aside
            className="bg-paper border border-line rounded-2xl p-7 sm:p-8"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <Eyebrow className="mb-3">Featured Service Area</Eyebrow>
            <h3
              className="display text-ink mb-3"
              style={{ fontSize: "1.7rem" }}
            >
              Rancho Santa Fe
            </h3>
            <p className="text-ink-soft mb-5 leading-relaxed">
              Built-in refrigeration, professional ranges, integrated
              dishwashers — we know the premium brands behind every cabinet
              door in 92067.
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {["Sub-Zero", "Wolf", "Viking", "Thermador", "Miele", "Gaggenau"].map(
                (b) => (
                  <span
                    key={b}
                    className="bg-cream border border-line rounded-md px-2.5 py-1 text-[0.72rem] text-ink"
                    style={{ fontWeight: 600 }}
                  >
                    {b}
                  </span>
                )
              )}
            </div>
            <a href={`tel:${site.phoneRaw}`} className="btn-primary">
              Book a Visit · {site.phone}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
