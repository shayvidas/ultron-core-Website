import type { Solution } from "@/types";

export const solutions: Solution[] = [
  {
    slug: "small-business",
    title: "Small & Growing Business Solutions",
    nav: "Small Business",
    eyebrow: "For small & growing businesses",
    summary:
      "Accessible automation and digital improvements for small companies — without an enterprise budget or an IT department.",
    problems: [
      "Too much time lost to manual administration",
      "Customer inquiries that aren't tracked or followed up",
      "Information copied by hand between disconnected tools",
      "An outdated website, or none at all",
    ],
    items: [
      { title: "Lead capture", body: "Turn website and phone inquiries into tracked, followed-up leads." },
      { title: "Appointment coordination", body: "Let customers book and get automatic reminders." },
      { title: "Customer communication", body: "Automate the routine messages your team sends every day." },
      { title: "Website modernization", body: "A fast, mobile-friendly site that matches the quality of your service." },
      { title: "Simple reporting", body: "Recurring reports assembled for you instead of by hand." },
      { title: "Document handling", body: "Extract and route document data with a quick human check." },
    ],
    relatedServices: ["business-automation", "web-development", "ai-consulting"],
    faqs: [
      {
        q: "We're a small team. Is this overkill for us?",
        a: "No. The point is to remove the repetitive work that slows a small team down, starting with one or two high-value automations — not to build enterprise systems.",
      },
      {
        q: "Do we need technical knowledge?",
        a: "No. We handle the technical side and hand over something you can operate, with a short guide and the ability to reach us.",
      },
    ],
  },
  {
    slug: "engineering-teams",
    title: "Engineering Team Solutions",
    nav: "Engineering Teams",
    eyebrow: "For engineering teams",
    summary:
      "Improve development workflows and introduce AI with the architecture, automation, and governance to make it genuinely useful.",
    problems: [
      "AI coding tools adopted inconsistently, without guidelines",
      "Manual, slow release and testing steps",
      "Inefficient PR review and CI workflows",
      "No governance or observability around AI usage",
    ],
    items: [
      { title: "AI-assisted coding adoption", body: "Roll out AI coding tools responsibly, with a measured pilot." },
      { title: "CI/CD automation", body: "Automate testing, checks, and release steps in your pipeline." },
      { title: "Repository processes", body: "Encode coding and review standards where the team works." },
      { title: "Testing automation", body: "Raise coverage and catch regressions earlier." },
      { title: "Developer tools & knowledge", body: "Internal tools and knowledge systems that reduce friction." },
      { title: "AI adoption strategy & governance", body: "Policy, security, and measurement for AI in engineering." },
    ],
    relatedServices: ["ai-engineering", "integrations", "custom-software"],
    faqs: [
      {
        q: "We've already started adopting AI tools. Where do you fit?",
        a: "We help make adoption consistent and measurable — standards, security review, pipeline integration, and a way to tell whether it's actually helping.",
      },
      {
        q: "How do you measure impact?",
        a: "We define a small set of meaningful signals (review time, defect rate, cycle time) before a pilot and measure against them, rather than relying on vanity metrics.",
      },
    ],
  },
  {
    slug: "customer-operations",
    title: "Customer Operations Solutions",
    nav: "Customer Operations",
    eyebrow: "For customer operations",
    summary:
      "Handle inquiries, route work, and keep your CRM accurate — so customers get faster responses and nothing falls through the cracks.",
    problems: [
      "Inquiries handled inconsistently across channels",
      "Leads that aren't classified or routed to the right person",
      "Tickets that sit because no one owns triage",
      "A CRM that drifts out of date",
    ],
    items: [
      { title: "Support workflows", body: "Route and summarize tickets so responses are faster and consistent." },
      { title: "Inquiry management", body: "Capture every inquiry and track it to resolution." },
      { title: "Lead classification", body: "Score and route leads to the right owner automatically." },
      { title: "Ticket routing", body: "Send work to the right team with the context they need." },
      { title: "CRM integration", body: "Keep CRM records accurate without manual entry." },
      { title: "Reporting", body: "See volume, response times, and outcomes at a glance." },
    ],
    relatedServices: ["ai-agents", "integrations", "business-automation"],
    faqs: [
      {
        q: "Will AI reply to our customers automatically?",
        a: "Only if you want it to, and we default to keeping a human in the loop. A common setup is AI drafting and routing, with a person approving anything that goes to a customer.",
      },
      {
        q: "Can this work with our existing CRM?",
        a: "Yes. The goal is to connect and improve what you already use rather than replace it.",
      },
    ],
  },
];

export const solutionMap = new Map(solutions.map((s) => [s.slug, s]));

export function getSolution(slug: string): Solution | undefined {
  return solutionMap.get(slug);
}
