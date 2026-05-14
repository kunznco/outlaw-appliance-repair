import { Logo } from "@/components/logo";
import { LicensePlate } from "@/components/license-plate";
import { site, services, serviceAreas } from "@/lib/site";

export function SiteFooter() {
  const topServices = services.slice(0, 5);
  const topAreas = serviceAreas.slice(0, 4);
  return (
    <footer className="bg-cream text-ink border-t-[3px] border-ink pt-16 pb-8">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <Logo variant="shield" className="w-36 h-auto" />
            <p
              className="italic text-ink-soft leading-relaxed max-w-[30ch]"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
            >
              San Diego&apos;s factory-trained appliance repair crew. Where
              expertise meets reliability.
            </p>
            <LicensePlate number={site.license} className="self-start !text-sm" />
          </div>

          <FooterCol heading="Services">
            {topServices.map((s) => (
              <li key={s.slug}>
                <a href={`#services`}>{s.title.split(" & ")[0]} Repair</a>
              </li>
            ))}
            <li>
              <a href="#services">All 9 Services →</a>
            </li>
          </FooterCol>

          <FooterCol heading="Service Area">
            {topAreas.map((a) => (
              <li key={a.name}>
                <a href="#area">{a.name}</a>
              </li>
            ))}
            <li>
              <a href="#area">All San Diego County →</a>
            </li>
          </FooterCol>

          <FooterCol heading="Contact">
            <li>
              <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.city}, {site.state}</li>
            <li>{site.hours}</li>
          </FooterCol>
        </div>

        <div
          className="border-t border-ink pt-6 flex flex-wrap items-center justify-between gap-4 text-ink-soft"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          <div>
            © {new Date().getFullYear()} {site.name} · Lic. {site.license} ·
            Family Owned
          </div>
          <div>★ {site.tagline} ★</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4
        className="uppercase text-rust mb-4"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.8rem",
          letterSpacing: "0.14em",
        }}
      >
        {heading}
      </h4>
      <ul className="list-none flex flex-col gap-2 text-ink">{children}</ul>
    </div>
  );
}
