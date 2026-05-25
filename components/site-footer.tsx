import { Logo } from "@/components/logo";
import { LicensePlate } from "@/components/license-plate";
import { SkullMark } from "@/components/western";
import { site, services, serviceAreas } from "@/lib/site";

export function SiteFooter() {
  const topServices = services.slice(0, 5);
  const topAreas = serviceAreas.slice(0, 4);
  return (
    <footer className="bg-cream text-ink border-t border-line pt-16 pb-8">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <Logo variant="shield" className="w-32 h-auto" />
            <p className="text-ink-soft leading-relaxed max-w-[30ch]" style={{ fontSize: "0.9rem" }}>
              San Diego&apos;s factory-trained appliance repair crew. Family
              owned, fully licensed, every job warrantied.
            </p>
            <LicensePlate number={site.license} className="self-start !text-sm" />
          </div>

          <FooterCol heading="Services">
            {topServices.map((s) => (
              <li key={s.slug}>
                <a href="#services" className="hover:text-rust transition-colors">
                  {s.title.split(" & ")[0].split(",")[0]} Repair
                </a>
              </li>
            ))}
            <li>
              <a href="#services" className="text-rust">All Services →</a>
            </li>
          </FooterCol>

          <FooterCol heading="Service Area">
            {topAreas.map((a) => (
              <li key={a.name}>
                <a href="#area" className="hover:text-rust transition-colors">{a.name}</a>
              </li>
            ))}
            <li>
              <a href="#area" className="text-rust">All San Diego County →</a>
            </li>
          </FooterCol>

          <FooterCol heading="Contact">
            <li>
              <a href={`tel:${site.phoneRaw}`} className="hover:text-rust transition-colors">{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-rust transition-colors break-all">{site.email}</a>
            </li>
            <li>{site.city}, {site.state}</li>
            <li>{site.hours}</li>
          </FooterCol>
        </div>

        <div className="border-t border-line pt-6 flex flex-wrap items-center justify-between gap-3 text-ink-soft text-[0.78rem]">
          <div>
            © {new Date().getFullYear()} {site.name} · Lic. {site.license} · Family Owned
          </div>
          <div className="inline-flex items-center gap-2">
            <SkullMark className="w-4 h-2.5 text-rust/70" />
            {site.tagline}
          </div>
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
        className="uppercase text-ink mb-4"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "0.78rem",
          letterSpacing: "0.1em",
        }}
      >
        {heading}
      </h4>
      <ul className="list-none flex flex-col gap-2 text-ink-soft" style={{ fontSize: "0.92rem" }}>
        {children}
      </ul>
    </div>
  );
}
