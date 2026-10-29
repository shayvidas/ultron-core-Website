import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StatusMessage } from "@/components/ui/StatusMessage";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Ultron Core handles the information you share with us.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />
        <h1 className="text-h1 mt-6">Privacy Policy</h1>

        <div className="mt-6">
          <StatusMessage status="info" title="Draft — pending founder and legal review">
            This is a working draft, not final legal text. It must be reviewed and approved —
            including for applicable Israeli and international data-protection obligations — before
            publication.
          </StatusMessage>
        </div>

        <div className="prose-legal mt-8 flex flex-col gap-6 text-sm leading-relaxed text-[var(--color-text-dim)]">
          <section>
            <h2 className="text-h3 text-[var(--color-text)]">What we collect</h2>
            <p>
              When you submit the contact form, we collect the details you provide — such as your
              name, business email, company, and the description of what you need help with. We only
              ask for what we need to respond to your inquiry.
            </p>
          </section>
          <section>
            <h2 className="text-h3 text-[var(--color-text)]">How we use it</h2>
            <p>
              We use your information solely to respond to your inquiry and to follow up about the
              work you asked about. We do not sell your information, and we do not add you to
              automated marketing sequences without your agreement.
            </p>
          </section>
          <section>
            <h2 className="text-h3 text-[var(--color-text)]">How it&apos;s handled</h2>
            <p>
              Form submissions are processed on our server and delivered to our team. We do not send
              the contents of your message to analytics tools, and we avoid storing personal message
              content in application logs.
            </p>
          </section>
          <section>
            <h2 className="text-h3 text-[var(--color-text)]">Analytics</h2>
            <p>
              If we use privacy-conscious analytics, it records page-level and event-level activity
              (for example, that a form was submitted) without capturing the personal values you
              enter into forms. Any analytics in use will be documented here before launch.
            </p>
          </section>
          <section>
            <h2 className="text-h3 text-[var(--color-text)]">Your choices</h2>
            <p>
              You can ask us what information we hold about you and request that we delete it. To do
              so, contact us{siteConfig.contactEmail ? ` at ${siteConfig.contactEmail}` : ""}.
            </p>
          </section>
          <section>
            <h2 className="text-h3 text-[var(--color-text)]">Changes</h2>
            <p>
              We may update this policy. The effective date will be shown here once the final policy
              is published.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
