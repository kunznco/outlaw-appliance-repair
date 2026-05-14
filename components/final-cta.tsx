import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="bg-rust text-cream border-y-[3px] border-ink py-24 text-center overflow-hidden"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div
          className="inline-flex items-center gap-2 text-plate uppercase tracking-[0.18em] text-xs mb-3 justify-center"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span>★</span> Ready When You Are <span>★</span>
        </div>
        <h2
          className="display mb-3"
          style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)", lineHeight: 0.95 }}
        >
          Put That Appliance
          <br />
          Back In Business.
        </h2>
        <a
          href={`tel:${site.phoneRaw}`}
          className="block text-plate my-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 8vw, 5.2rem)",
            letterSpacing: "0.02em",
            textShadow: "4px 4px 0 var(--color-ink)",
          }}
          aria-label={`Call ${site.phone}`}
        >
          {site.phone}
        </a>
        <p
          className="italic text-cream-soft max-w-[50ch] mx-auto mb-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Or send a message — same-day callback during business hours. We
          service all of San Diego County.
        </p>
        <div className="inline-flex gap-4 flex-wrap justify-center">
          <a
            href={`tel:${site.phoneRaw}`}
            className="btn-primary"
            style={{ background: "var(--color-ink)", color: "var(--color-cream)" }}
          >
            <span aria-hidden>☎</span> Call Jesse Now
          </a>
          <a
            href={`mailto:${site.email}?subject=Appliance%20Repair%20Quote`}
            className="btn-ghost"
            style={{ background: "var(--color-plate)", color: "var(--color-ink)" }}
          >
            Send a Message <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
