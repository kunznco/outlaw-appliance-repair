import { site } from "@/lib/site";

export function WantedPoster() {
  return (
    <section className="relative py-24 bg-cream-soft">
      {/* Diagonal stripe top + bottom */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-2"
        style={{
          background:
            "repeating-linear-gradient(45deg, var(--color-ink), var(--color-ink) 8px, transparent 8px, transparent 16px)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2"
        style={{
          background:
            "repeating-linear-gradient(45deg, var(--color-ink), var(--color-ink) 8px, transparent 8px, transparent 16px)",
        }}
      />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div
          className="max-w-[620px] mx-auto bg-paper border-[3px] border-ink p-8 sm:p-10 text-center relative"
          style={{
            boxShadow:
              "0 0 0 8px var(--color-paper), 0 0 0 11px var(--color-ink), 14px 14px 0 var(--color-rust)",
          }}
        >
          <div
            className="uppercase tracking-[0.3em] text-ink mb-2 text-sm"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ★ Wanted ★ In Every Kitchen ★
          </div>
          <h2
            className="display text-ink mb-1"
            style={{
              fontSize: "clamp(3.2rem, 7vw, 5rem)",
              letterSpacing: "0.04em",
              lineHeight: 0.9,
            }}
          >
            Broken
            <br />
            Appliances
          </h2>
          <p
            className="italic text-ink-soft mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            No appliance is safe when the Outlaw rides through town.
          </p>

          <div className="border-y-2 border-ink py-6 my-6 flex items-center justify-center gap-5">
            <span
              className="text-rust leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "5rem",
                letterSpacing: "-0.02em",
              }}
            >
              ${site.serviceCallPrice}
            </span>
            <span
              className="uppercase tracking-[0.14em] text-left max-w-[14ch] leading-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem" }}
            >
              Service Call —<br />
              Fully Waived
              <br />
              If We Can&apos;t Fix It
            </span>
          </div>

          <p
            className="italic text-ink-soft mt-4 leading-relaxed text-sm sm:text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Diagnose your appliance for a flat ${site.serviceCallPrice}. If we
            can&apos;t put it back in working order on the first visit, the
            service call&apos;s on us. Every repair backed by a one-year
            warranty and factory-certified parts.{" "}
            <em>That&apos;s the rule of the Outlaw.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
