import type { Faq } from "@/types";

/** Homepage FAQ — honest, concrete answers. No invented prices or guarantees. */
export const homeFaqs: Faq[] = [
  {
    q: "What kinds of businesses do you work with?",
    a: "Small and growing businesses, software and product teams, and established organizations exploring AI. If a business has repetitive work, disconnected tools, or an AI idea it hasn't been able to ship, we can usually help.",
  },
  {
    q: "Do we need technical knowledge to work with you?",
    a: "No. We lead with the business problem, explain options in plain language, and handle the technical side. You get something you can operate, with documentation and support.",
  },
  {
    q: "Can you connect AI to our existing software?",
    a: "Yes — that's a core part of what we do. We integrate AI capabilities with the systems you already use rather than asking you to replace them.",
  },
  {
    q: "Can you work with the tools we already use?",
    a: "Usually, yes. The goal is to make your current tools work together. We assess your stack and recommend the most reliable way to connect them.",
  },
  {
    q: "How do you decide what should be automated?",
    a: "We map the repetitive work your team does, estimate the time it takes, and prioritize automations by effort-to-value. We don't automate something just because it's possible.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on scope and the integrations involved, so we won't quote a fixed number without understanding your needs. We aim to keep solutions accessible and will be clear about scope and cost before any work begins. We don't guarantee specific savings.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "You own the work. We hand over documentation and knowledge so your team can run it. Ongoing maintenance is available but not assumed automatically — we'll agree that explicitly if you want it.",
  },
  {
    q: "Can you help if we already started an AI implementation?",
    a: "Yes. We regularly review and fix existing AI tools and automations that are unreliable, expensive, or not producing the expected results. We start with an assessment before recommending fixes.",
  },
  {
    q: "How do you approach security and privacy?",
    a: "Secrets stay server-side, access follows least privilege, and we add validation, audit logging, and monitoring where appropriate. We consider relevant data-protection obligations as part of delivery and keep personal data handling to a minimum.",
  },
  {
    q: "Can you work with international clients?",
    a: "Yes. We're based in Israel and work with clients remotely, internationally.",
  },
];
