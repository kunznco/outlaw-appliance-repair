import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-paper py-20 border-y border-ink">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <header className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 text-ink-soft uppercase tracking-[0.16em] text-[0.72rem] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span aria-hidden className="text-rust">★</span>
            From Our Neighbors
          </div>
          <h2
            className="display text-ink"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", lineHeight: 0.95 }}
          >
            What San Diego <span className="text-rust">Says.</span>
          </h2>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-cream border border-ink p-6 relative"
            >
              <div
                className="text-plate text-base tracking-[0.1em] mb-3"
                aria-label="5 of 5 stars"
              >
                ★★★★★
              </div>
              <blockquote
                className="text-ink mb-4 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontSize: "1rem" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <cite
                className="not-italic block uppercase text-ink"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
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
