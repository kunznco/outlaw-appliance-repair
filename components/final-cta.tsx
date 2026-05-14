import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="bg-cream-soft border-t border-ink py-20 sm:py-24 text-center"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div
          className="inline-flex items-center gap-2 text-ink-soft uppercase tracking-[0.16em] text-[0.72rem] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span aria-hidden className="text-rust">★</span>
          Ready When You Are
        </div>
        <h2
          className="display text-ink mb-2"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", lineHeight: 1 }}
        >
          Let&apos;s Get That Appliance Working Again.
        </h2>
        <p
          className="italic text-ink-soft max-w-[50ch] mx-auto mb-8 mt-3"
          style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem" }}
        >
          Same-day service across San Diego County. Call us or send a
          message and we&apos;ll get back to you within the hour.
        </p>
        <a
          href={`tel:${site.phoneRaw}`}
          className="inline-block text-rust my-2"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 6.5vw, 4rem)",
            letterSpacing: "0.01em",
            lineHeight: 1,
          }}
          aria-label={`Call ${site.phone}`}
        >
          {site.phone}
        </a>
        <div className="inline-flex gap-3 flex-wrap justify-center mt-7">
          <a href={`tel:${site.phoneRaw}`} className="btn-primary">
            <span aria-hidden>☎</span> Call {site.owner} Now
          </a>
          <a
            href={`mailto:${site.email}?subject=Appliance%20Repair%20Quote`}
            className="btn-ghost"
          >
            Send a Message <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
