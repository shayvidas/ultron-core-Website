import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { FAQAccordion } from "@/components/interactive/FAQAccordion";
import { homeFaqs } from "@/content/faqs";

export function HomeFAQ() {
  return (
    <Section tone="muted" aria-labelledby="faq-heading">
      <Container className="max-w-3xl">
        <SectionHeading id="faq-heading" eyebrow="FAQ" title="Questions, Answered Honestly." align="center" />
        <div className="mt-10">
          <FAQAccordion items={homeFaqs} idBase="home-faq" />
        </div>
      </Container>
    </Section>
  );
}
