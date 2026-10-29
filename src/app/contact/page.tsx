import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/contact/ContactForm";
import { ConfigStatusBanner } from "@/components/contact/ConfigStatusBanner";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Tell us what you want to improve. Whether you have a clear project or just a hunch that something could work better, we'd like to hear about it.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="Contact"
              title="Tell Us What You Want to Improve."
              subtitle="Whether you have a clear project in mind or just know something in your business could work better, we'd be happy to hear about it."
            />

            <div className="mt-8 flex flex-col gap-4">
              <Card className="bg-[var(--color-bg-2)]">
                <h2 className="text-base font-semibold">What happens next</h2>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-[var(--color-text-dim)]">
                  <li>We read your message and reply personally.</li>
                  <li>If it&apos;s a fit, we suggest a short intro call.</li>
                  <li>No obligation, no automated sales sequence.</li>
                </ul>
              </Card>

              {siteConfig.contactEmail ? (
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-cyan)] hover:underline"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.contactEmail}
                </a>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <ConfigStatusBanner />
            <Card>
              <ContactForm />
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
