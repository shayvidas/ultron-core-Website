import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StatusMessage } from "@/components/ui/StatusMessage";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "The terms that apply to using the Ultron Core website.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
        <h1 className="text-h1 mt-6">Terms of Use</h1>

        <div className="mt-6">
          <StatusMessage status="info" title="Draft — pending founder and legal review">
            This is a working draft, not final legal text. It must be reviewed and approved before
            publication.
          </StatusMessage>
        </div>

        <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-[var(--color-text-dim)]">
          <section>
            <h2 className="text-h3 text-[var(--color-text)]">Using this website</h2>
            <p>
              This website provides information about Ultron Core&apos;s services. The content is
              offered for general informational purposes and may change without notice.
            </p>
          </section>
          <section>
            <h2 className="text-h3 text-[var(--color-text)]">No guarantees</h2>
            <p>
              Any examples, estimates, or illustrative figures on this site — including automation
              time-savings estimates — are for illustration only and do not represent guaranteed
              outcomes. Actual results depend on the specifics of each engagement.
            </p>
          </section>
          <section>
            <h2 className="text-h3 text-[var(--color-text)]">Demonstrations</h2>
            <p>
              Projects shown on this site are labeled as concept or internal demonstration work
              unless explicitly identified as a client project. Demonstrations do not represent
              completed client engagements.
            </p>
          </section>
          <section>
            <h2 className="text-h3 text-[var(--color-text)]">Intellectual property</h2>
            <p>
              The Ultron Core name, branding, and site content are the property of Ultron Core.
              Third-party names mentioned are the property of their respective owners and are used
              only for description.
            </p>
          </section>
          <section>
            <h2 className="text-h3 text-[var(--color-text)]">Contact</h2>
            <p>Questions about these terms can be directed to us through the contact page.</p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
