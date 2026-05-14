import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-ink text-cream py-20">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <header className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 text-plate uppercase tracking-[0.18em] text-xs mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span>★</span> Word On The Street <span>★</span>
          </div>
          <h2
            className="display text-cream"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", lineHeight: 0.95 }}
          >
            What San Diego <span className="text-plate">Says.</span>
          </h2>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-paper text-ink border-2 border-cream p-6 relative transition-transform hover:rotate-0 hover:-translate-y-1"
              style={{
                boxShadow: "5px 5px 0 var(--color-rust)",
                transform:
                  i === 0
                    ? "rotate(-0.6deg)"
                    : i === 1
                    ? "rotate(0.5deg)"
                    : "rotate(-0.3deg)",
              }}
            >
              <div
                className="text-plate text-lg tracking-[0.1em] mb-3"
                aria-label="5 of 5 stars"
              >
                ★★★★★
              </div>
              <blockquote
                className="italic text-ink mb-5 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <cite
                className="not-italic block uppercase text-rust"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                }}
              >
                {t.name}
                <span
                  className="block normal-case italic text-ink-soft mt-0.5"
                  style={{
                    fontFamily: "var(--font-body)",
                    letterSpacing: 0,
                    fontSize: "0.82rem",
                  }}
                >
                  {t.where}
                </span>
              </cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
