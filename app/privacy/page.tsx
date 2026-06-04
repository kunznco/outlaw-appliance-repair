import type { Metadata } from "next";
import {
  LegalPage,
  Section,
  Prose,
  List,
  Item,
  ProseLink,
} from "@/components/legal-page";
import { site } from "@/lib/site";

const DESCRIPTION =
  "How Outlaw Appliance Repair collects, uses, and protects your information — including analytics, advertising, and your California privacy rights.";

export const metadata: Metadata = {
  // Root layout appends "· Outlaw Appliance Repair" via the title template.
  title: "Privacy Policy",
  description: DESCRIPTION,
  alternates: { canonical: `${site.url}/privacy` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy",
    description: DESCRIPTION,
    url: `${site.url}/privacy`,
    type: "website",
  },
  twitter: { title: "Privacy Policy", description: DESCRIPTION },
};

export default function PrivacyPolicy(): React.ReactElement {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="June 4, 2026">
      <Section title="Who we are">
        <Prose>
          {site.name} is an owner-operated appliance repair business run by{" "}
          {site.owner}, serving {site.city} County, California. This Privacy
          Policy explains what information we collect when you visit our website
          at outlawappliancerepair.com or reach out for service, how we use it,
          and the choices you have. We&rsquo;ve written it in plain English
          because you deserve to understand it.
        </Prose>
      </Section>

      <Section title="Information we collect">
        <Prose>
          <strong>Information you give us.</strong> When you call, email, or
          submit a service request or booking form, you may share your name,
          phone number, email address, service address, and details about your
          appliance and the problem you&rsquo;re having. We use this to schedule
          and perform your repair.
        </Prose>
        <Prose>
          <strong>Information collected automatically.</strong> Like most
          websites, ours automatically records technical information such as
          your IP address, browser and device type, and the pages you view. This
          is gathered through cookies and similar technologies (see below).
        </Prose>
        <Prose>
          We do not knowingly collect information from children under 13.
        </Prose>
      </Section>

      <Section title="How we use your information">
        <Prose>We use the information we collect to:</Prose>
        <List>
          <Item>Schedule and perform appliance service at your home</Item>
          <Item>Respond to your questions and service inquiries</Item>
          <Item>Send appointment confirmations, reminders, and follow-ups</Item>
          <Item>Operate, maintain, and improve our website</Item>
          <Item>Measure how our site performs and serve relevant advertising</Item>
          <Item>Comply with the law and protect our rights</Item>
        </List>
      </Section>

      <Section title="Cookies & tracking technologies">
        <Prose>
          Cookies are small files stored on your device; pixels are tiny pieces
          of code that load on a page. We and certain third parties use cookies,
          pixels, and similar technologies to keep the site working, understand
          how it&rsquo;s used, and measure advertising. You can control or block
          cookies through your browser settings — though some parts of the site
          may not work as smoothly if you do.
        </Prose>
      </Section>

      <Section title="Analytics & advertising">
        <Prose>
          Now or in the future, we use third-party analytics and advertising
          services that may set cookies or identifiers to measure traffic and
          show our ads on other platforms. These specifically include{" "}
          <strong>Google Analytics</strong>, <strong>Google Ads</strong>{" "}
          (including remarketing and conversion tracking), and{" "}
          <strong>Meta/Facebook Ads</strong> (including the Meta Pixel), as well
          as similar tools. You can opt out using these controls:
        </Prose>
        <List>
          <Item>
            Google Analytics opt-out browser add-on:{" "}
            <ProseLink href="https://tools.google.com/dlpage/gaoptout">
              tools.google.com/dlpage/gaoptout
            </ProseLink>
          </Item>
          <Item>
            Google Ads settings:{" "}
            <ProseLink href="https://adssettings.google.com">
              adssettings.google.com
            </ProseLink>
          </Item>
          <Item>
            Meta/Facebook ad preferences:{" "}
            <ProseLink href="https://www.facebook.com/ads/preferences">
              facebook.com/ads/preferences
            </ProseLink>
          </Item>
          <Item>
            Digital Advertising Alliance (DAA):{" "}
            <ProseLink href="https://optout.aboutads.info">
              optout.aboutads.info
            </ProseLink>
          </Item>
          <Item>
            Network Advertising Initiative (NAI):{" "}
            <ProseLink href="https://optout.networkadvertising.org">
              optout.networkadvertising.org
            </ProseLink>
          </Item>
          <Item>
            YourAdChoices:{" "}
            <ProseLink href="https://www.youradchoices.com">
              youradchoices.com
            </ProseLink>
          </Item>
        </List>
        <Prose>
          Some browsers offer a &ldquo;Do Not Track&rdquo; signal. Because there
          is no common industry standard for honoring it, our site does not
          respond to Do Not Track signals at this time.
        </Prose>
      </Section>

      <Section title="Service requests & third-party providers">
        <Prose>
          We rely on a few trusted providers to run our business. We use{" "}
          <strong>Jobber</strong> to handle service requests and scheduling —
          information you submit through our request or booking form is processed
          by Jobber to book your job. Our website is hosted on{" "}
          <strong>Vercel</strong>, and we use email to communicate with you.
          Each of these providers maintains its own privacy policy governing how
          it handles data.
        </Prose>
      </Section>

      <Section title="How we share information">
        <Prose>
          We do not sell your personal information for money. We may share it:
        </Prose>
        <List>
          <Item>
            With service providers who help us operate — such as Jobber, our
            website host, and the analytics and advertising partners described
            above
          </Item>
          <Item>
            For legal reasons, when required by law or to protect our rights and
            safety
          </Item>
          <Item>
            In connection with a business transfer, such as a sale or merger
          </Item>
        </List>
        <Prose>
          Using cross-context behavioral advertising (the ad pixels described
          above) may be considered &ldquo;sharing&rdquo; under California law.
          See Your California privacy rights below for how to opt out.
        </Prose>
      </Section>

      <Section title="Your California privacy rights (CCPA/CPRA)">
        <Prose>
          If you&rsquo;re a California resident, you have the right to know what
          personal information we collect, to request that we delete or correct
          it, to opt out of its sale or sharing, and to not be discriminated
          against for exercising these rights. To make a request, call us at{" "}
          <ProseLink href={`tel:${site.phoneRaw}`}>{site.phone}</ProseLink> or
          email{" "}
          <ProseLink href={`mailto:${site.email}`}>{site.email}</ProseLink>.
        </Prose>
        <Prose>
          <strong>Do Not Sell or Share My Personal Information.</strong> Because
          we use advertising pixels that may count as &ldquo;sharing,&rdquo; you
          can opt out using your browser&rsquo;s privacy controls and the
          opt-out links listed in the Analytics &amp; advertising section above.
        </Prose>
      </Section>

      <Section title="Data retention & security">
        <Prose>
          We keep your information only as long as we need it to provide service
          and meet our legal and recordkeeping obligations, then dispose of it.
          We use reasonable safeguards to protect your information, but no method
          of transmission or storage is 100% secure, so we can&rsquo;t guarantee
          absolute security.
        </Prose>
      </Section>

      <Section title="Links to other websites">
        <Prose>
          Our site may link to websites we don&rsquo;t operate. We&rsquo;re not
          responsible for the content or privacy practices of those sites, and
          we encourage you to review their policies.
        </Prose>
      </Section>

      <Section title="Children's privacy">
        <Prose>
          Our website is not directed to children under 13, and we do not
          knowingly collect personal information from them. If you believe a
          child has provided us information, please contact us and we&rsquo;ll
          delete it.
        </Prose>
      </Section>

      <Section title="Changes to this policy">
        <Prose>
          We may update this Privacy Policy from time to time. When we do,
          we&rsquo;ll revise the &ldquo;Last updated&rdquo; date at the top of
          this page to reflect the latest version.
        </Prose>
      </Section>

      <Section title="Contact us">
        <Prose>
          Questions about this policy or your information? Reach out anytime.
        </Prose>
        <List>
          <Item>
            Phone:{" "}
            <ProseLink href={`tel:${site.phoneRaw}`}>{site.phone}</ProseLink>
          </Item>
          <Item>
            Email:{" "}
            <ProseLink href={`mailto:${site.email}`}>{site.email}</ProseLink>
          </Item>
          <Item>
            {site.city}, {site.state}
          </Item>
        </List>
      </Section>
    </LegalPage>
  );
}
