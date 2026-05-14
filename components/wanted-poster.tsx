import { site } from "@/lib/site";

export function WantedPoster() {
  return (
    <section className="py-20 bg-cream-soft">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="max-w-[620px] mx-auto bg-paper border-2 border-ink p-8 sm:p-10 text-center relative shadow-[6px_6px_0_var(--color-ink)]">
          <div
            className="uppercase tracking-[0.18em] text-rust mb-3 text-xs"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Honest Pricing · No Surprises
          </div>
          <h2
            className="display text-ink mb-2"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              lineHeight: 1,
            }}
          >
            One Flat Diagnosis Fee.
          </h2>
          <p
            className="italic text-ink-soft mb-6 max-w-[40ch] mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We come out, find the problem, and tell you exactly what it
            takes to fix.
          </p>

          <div className="border-y border-ink py-5 my-5 flex items-center justify-center gap-4 flex-wrap">
            <span
              className="text-rust leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "3.8rem",
                letterSpacing: "-0.02em",
              }}
            >
              ${site.serviceCallPrice}
            </span>
            <span
              className="uppercase tracking-[0.12em] text-left max-w-[16ch] leading-tight text-ink"
              style={{ fontFamily: "var(--font-display)", fontSize: "0.82rem" }}
            >
              Service Call —<br />
              <span className="text-rust">Fully Waived</span><br />
              When We Make The Fix
            </span>
          </div>

          <p
            className="text-ink-soft text-sm sm:text-base leading-relaxed max-w-[44ch] mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            If we can&apos;t put your appliance back in working order on the
            first visit, the diagnosis is free. Every repair is backed by a
            one-year warranty and factory-certified parts.
          </p>
        </div>
      </div>
    </section>
  );
}
