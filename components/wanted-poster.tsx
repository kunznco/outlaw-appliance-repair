import { site } from "@/lib/site";
import { Eyebrow, Sunburst } from "@/components/western";

/**
 * Pricing callout — honest, flat diagnosis fee. Clean card, no western
 * "wanted poster" framing anymore (kept the filename for stability).
 */
export function WantedPoster() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div
          className="max-w-[680px] mx-auto bg-paper border border-line rounded-2xl p-8 sm:p-12 text-center"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <Eyebrow className="mb-4 justify-center">Honest, Upfront Pricing</Eyebrow>
          <h2
            className="display text-ink mb-3"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)" }}
          >
            One flat diagnosis fee.
          </h2>
          <p className="text-ink-soft mb-8 max-w-[44ch] mx-auto">
            We come out, find the problem, and give you an exact price before
            any work begins. No surprises.
          </p>

          <div className="flex items-center justify-center gap-5 flex-wrap py-6 border-y border-line">
            <span className="relative inline-flex items-center justify-center leading-none">
              <Sunburst className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] pointer-events-none" />
              <span
                className="relative text-rust leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 8vw, 4.2rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                ${site.serviceCallPrice}
              </span>
            </span>
            <span className="text-left max-w-[18ch] text-ink leading-snug" style={{ fontWeight: 600 }}>
              service call —{" "}
              <span className="text-rust">fully waived</span> when we make the
              fix.
            </span>
          </div>

          <p className="text-ink-soft text-sm sm:text-base leading-relaxed max-w-[48ch] mx-auto mt-8">
            If we can&apos;t put your appliance back in working order on the
            first visit, the diagnosis is free. Every repair is backed by a
            one-year warranty and factory-certified parts.
          </p>

          <a
            href={`tel:${site.phoneRaw}`}
            className="btn-primary mt-8"
            aria-label={`Call ${site.phone}`}
          >
            Book a Visit · {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
