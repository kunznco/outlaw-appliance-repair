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
  "The terms for using the Outlaw Appliance Repair website and booking service — our diagnosis fee, warranty, payment, scheduling, and more.";

export const metadata: Metadata = {
  // Root layout appends "· Outlaw Appliance Repair" via the title template.
  title: "Terms & Conditions",
  description: DESCRIPTION,
  alternates: { canonical: `${site.url}/terms` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms & Conditions",
    description: DESCRIPTION,
    url: `${site.url}/terms`,
    type: "website",
  },
  twitter: { title: "Terms & Conditions", description: DESCRIPTION },
};

export default function TermsAndConditions(): React.ReactElement {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="June 4, 2026">
      <Section title="Agreement to terms">
        <Prose>
          By using the {site.name} website or booking service with us, you agree
          to these Terms &amp; Conditions. If you don&rsquo;t agree, please
          don&rsquo;t use the site or our services.
        </Prose>
      </Section>

      <Section title="Our services">
        <Prose>
          {site.name} provides appliance diagnosis and repair across {site.city}{" "}
          County, California. We&rsquo;re owner-operated by {site.owner} and
          licensed in California (CA #{site.license}). The person you call is the
          person who shows up.
        </Prose>
      </Section>

      <Section title="Service calls, diagnosis fee & estimates">
        <Prose>
          We charge a flat ${site.serviceCallPrice} diagnosis fee. That fee
          covers the visit and a full diagnosis of your appliance. When you
          approve the repair, the ${site.serviceCallPrice} is credited toward the
          cost of that repair. If you decline the repair, you simply pay the
          ${site.serviceCallPrice} — nothing more.
        </Prose>
        <Prose>
          Before any repair work begins, we provide an estimate, in writing or
          verbally, so you know what to expect. Final pricing varies by the
          specific job, the parts required, and the work involved.
        </Prose>
      </Section>

      <Section title="Payment">
        <Prose>
          Payment is due upon completion of the work, unless we&rsquo;ve agreed
          otherwise in writing.
        </Prose>
      </Section>

      <Section title="Warranty">
        <Prose>
          We stand behind our work with a {site.warranty} warranty on parts and
          labor for the repairs we perform. If a part we installed or the work we
          did fails within that period, we&rsquo;ll make it right.
        </Prose>
        <Prose>The warranty does not cover:</Prose>
        <List>
          <Item>Misuse, abuse, or improper operation of the appliance</Item>
          <Item>New or unrelated failures separate from the repair we performed</Item>
          <Item>Parts supplied by the customer</Item>
          <Item>Cosmetic issues that don&rsquo;t affect function</Item>
          <Item>Damage from acts of God, power surges, or events beyond our control</Item>
        </List>
        <Prose>
          To make a warranty claim, contact us at{" "}
          <ProseLink href={`tel:${site.phoneRaw}`}>{site.phone}</ProseLink> or{" "}
          <ProseLink href={`mailto:${site.email}`}>{site.email}</ProseLink> and
          we&rsquo;ll get you taken care of.
        </Prose>
      </Section>

      <Section title="Scheduling, access & cancellations">
        <Prose>
          To perform service, we ask that you provide safe access to the
          appliance and that an adult (18 or older) is present during the
          appointment. Arrival windows are estimates, not exact times — we do our
          best to keep you posted. If you need to cancel or reschedule, please
          give us reasonable notice so we can offer the slot to another customer.
        </Prose>
      </Section>

      <Section title="Customer responsibilities">
        <Prose>You agree to:</Prose>
        <List>
          <Item>Provide accurate information about the appliance and the problem</Item>
          <Item>Clear the work area so we can reach the appliance safely</Item>
          <Item>Disclose any known hazards in the home or work area</Item>
        </List>
      </Section>

      <Section title="Limitation of liability">
        <Prose>
          Beyond the express warranty above, our services are provided
          &ldquo;as is.&rdquo; We are not liable for indirect or incidental
          damages, and our total liability for any claim is limited to the amount
          you paid for the service in question. We&rsquo;re not responsible for
          pre-existing conditions or for failures unrelated to the repair we
          performed.
        </Prose>
      </Section>

      <Section title="Repair vs. replacement">
        <Prose>
          Appliances near the end of their life may fail again, even after a
          quality repair. We&rsquo;ll always give you the honest math — and when
          replacement makes more sense than repair, we&rsquo;ll tell you. A
          repair addresses the issue at hand; it doesn&rsquo;t guarantee the
          appliance will run indefinitely.
        </Prose>
      </Section>

      <Section title="Intellectual property">
        <Prose>
          The content, logo, and branding on this site are owned by {site.name}{" "}
          and may not be used without our permission.
        </Prose>
      </Section>

      <Section title="Third-party services">
        <Prose>
          Some features, such as our Jobber booking, are provided by third
          parties and are governed by their own terms and policies in addition to
          ours.
        </Prose>
      </Section>

      <Section title="Governing law">
        <Prose>
          These terms are governed by the laws of the State of California. Any
          disputes will be handled in {site.city} County, California.
        </Prose>
      </Section>

      <Section title="Changes to these terms">
        <Prose>
          We may update these Terms &amp; Conditions from time to time. When we
          do, we&rsquo;ll revise the &ldquo;Last updated&rdquo; date at the top of
          this page.
        </Prose>
      </Section>

      <Section title="Contact us">
        <Prose>Questions about these terms? Get in touch.</Prose>
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
