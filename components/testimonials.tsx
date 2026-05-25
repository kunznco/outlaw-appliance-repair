import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <header className="text-center mb-12">
          <div className="eyebrow mb-3 justify-center">From Our Neighbors</div>
          <h2 className="display text-ink" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
            What San Diego says.
          </h2>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-paper border border-line rounded-xl p-6"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="text-plate-deep text-base tracking-tight mb-3" aria-label="5 of 5 stars">
                ★★★★★
              </div>
              <blockquote className="text-ink mb-5 leading-relaxed" style={{ fontSize: "1rem" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <cite
                className="not-italic block text-ink"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem" }}
              >
                {t.name}
                <span className="block text-ink-soft mt-0.5" style={{ fontWeight: 400, fontSize: "0.82rem" }}>
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
