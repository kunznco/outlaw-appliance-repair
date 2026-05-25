import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contact" className="py-20 sm:py-24 text-center">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="eyebrow mb-3 justify-center">Ready When You Are</div>
        <h2
          className="display text-ink mb-3"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
        >
          Let&apos;s get that appliance working again.
        </h2>
        <p className="text-ink-soft max-w-[52ch] mx-auto mb-7" style={{ fontSize: "1.05rem" }}>
          Same-day service across San Diego County. Call or send a message and
          we&apos;ll get back to you within the hour.
        </p>
        <a
          href={`tel:${site.phoneRaw}`}
          className="inline-block text-rust"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 6vw, 3.4rem)",
            letterSpacing: "-0.01em",
            lineHeight: 1,
          }}
          aria-label={`Call ${site.phone}`}
        >
          {site.phone}
        </a>
        <div className="flex gap-3 flex-wrap justify-center mt-8">
          <a href={`tel:${site.phoneRaw}`} className="btn-primary">
            Call {site.owner} Now
          </a>
          <a
            href={`mailto:${site.email}?subject=Appliance%20Repair%20Quote`}
            className="btn-ghost"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
