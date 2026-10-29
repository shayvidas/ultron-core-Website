/**
 * Pricing packages — single editable source of truth. All prices are
 * introductory USD estimates. No automatic FX conversion, no checkout.
 * Edit here to change pricing everywhere.
 */
export interface PricingPackage {
  id: string;
  name: string;
  /** Display price string, already formatted (e.g. "Free", "From $300", "$500–$1,100"). */
  price: string;
  /** Optional cadence note (e.g. "per month"). */
  cadence?: string;
  currency: "USD";
  description: string;
  features: string[];
  exclusions?: string[];
  cta: { label: string; href: string };
  /** Visual emphasis on the pricing grid. */
  featured?: boolean;
  /** Clearly-labeled genuine promotional note. */
  promo?: string;
  visible: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "discovery",
    name: "Free AI Discovery Call",
    price: "Free",
    currency: "USD",
    description:
      "A short, no-obligation call (about 20–30 minutes) to understand your business problem and discuss possible next steps.",
    features: [
      "Introductory conversation",
      "Understand the business problem",
      "Review existing tools and processes",
      "Identify possible next steps",
    ],
    exclusions: ["Not a comprehensive audit, implementation plan, or free development work"],
    cta: { label: "Book a Free Discovery Call", href: "/contact" },
    visible: true,
  },
  {
    id: "website-starter",
    name: "Business Website Starter",
    price: "From $300",
    currency: "USD",
    description:
      "A clean, mobile-responsive website for small businesses and service providers who need a professional presence.",
    features: [
      "One-page responsive website",
      "Core company information",
      "Contact section",
      "Simple inquiry form (when email delivery is configured)",
      "Basic metadata for search",
    ],
    exclusions: [
      "Complex custom design, ongoing content management, e-commerce, and advanced integrations unless separately agreed",
    ],
    cta: { label: "Request a Website Quote", href: "/contact" },
    promo: "Limited Founding Client Offer",
    visible: true,
  },
  {
    id: "simple-automation",
    name: "Simple AI Automation",
    price: "$500–$1,100",
    currency: "USD",
    description:
      "One well-defined workflow connecting one or two systems — the fastest way to prove value.",
    features: [
      "One defined workflow",
      "One or two existing systems",
      "Basic automation logic",
      "Testing",
      "Short implementation documentation",
      "Defined handover",
    ],
    exclusions: ["Complex integrations, sensitive-data systems, and extensive custom software"],
    cta: { label: "Discuss an Automation", href: "/contact" },
    visible: true,
  },
  {
    id: "business-automation",
    name: "Business Automation Package",
    price: "$1,300–$2,900",
    currency: "USD",
    description:
      "A multi-step automation across several connected systems, with optional AI and human approval where it matters.",
    features: [
      "Multiple connected steps",
      "Defined integrations",
      "Business rules",
      "Optional AI classification or drafting",
      "Error handling and human approval",
      "Basic monitoring",
      "Documentation and handover",
    ],
    exclusions: ["Final scope and price confirmed after reviewing requirements"],
    cta: { label: "Get a Project Estimate", href: "/contact" },
    featured: true,
    visible: true,
  },
  {
    id: "maintenance",
    name: "Monitoring & Maintenance",
    price: "$80–$240",
    cadence: "per month",
    currency: "USD",
    description:
      "Keep your automations healthy with monitoring, scheduled maintenance, and a defined support channel.",
    features: [
      "Workflow health checks",
      "Basic monitoring",
      "Small fixes within agreed hours",
      "Scheduled maintenance",
      "Defined support channel",
    ],
    exclusions: ["Not unlimited support; additional work and third-party usage are billed separately"],
    cta: { label: "Talk About a Plan", href: "/contact" },
    visible: true,
  },
  {
    id: "ai-engineering",
    name: "AI Engineering Transformation",
    price: "Custom Quote",
    currency: "USD",
    description:
      "A premium engagement to adopt AI across your engineering workflow — tooling, pipelines, standards, and governance.",
    features: [
      "AI developer tool adoption",
      "Engineering workflow analysis",
      "Repository and PR automation",
      "CI/CD improvements",
      "AI coding guidelines",
      "Testing automation",
      "Engineering process integration",
    ],
    cta: { label: "Talk to Our Engineering Team", href: "/contact" },
    visible: true,
  },
  {
    id: "custom-software",
    name: "Custom Software & Integration",
    price: "Custom Quote",
    currency: "USD",
    description:
      "Larger builds: business applications, internal tools, mobile apps, complex AI systems, and architecture consulting.",
    features: [
      "Large integrations",
      "Business applications and internal tools",
      "Mobile development",
      "Complex AI systems",
      "Architecture consulting",
      "Longer technical engagements",
    ],
    cta: { label: "Discuss Your Project", href: "/contact" },
    visible: true,
  },
];

export const pricingDisclaimer =
  "Prices are introductory estimates in USD and depend on project scope, integrations, and requirements. Third-party subscriptions, hosting, API usage, applicable taxes, and additional services are billed separately where relevant. Final pricing is confirmed in a written proposal.";

export const pricingFaqs = [
  {
    q: "Why are prices shown as ranges?",
    a: "Because honest pricing depends on scope. The range reflects typical projects in that category; we confirm a firm number in a written proposal once we understand your requirements.",
  },
  {
    q: "What's included in the free discovery call?",
    a: "A short conversation to understand your problem, review your current tools, and identify possible next steps. It's not a full audit or free development work — we're upfront about that.",
  },
  {
    q: "Do you offer free websites?",
    a: "Selected founding clients may receive a starter website at no charge in exchange for permission to publish the project and an optional honest testimonial. It's a limited offer, not an entitlement for every business.",
  },
  {
    q: "Are there ongoing costs?",
    a: "Some solutions rely on third-party services (hosting, APIs, subscriptions) billed by those providers. We'll make any ongoing costs clear before you commit. Monitoring and maintenance are optional, not automatic.",
  },
  {
    q: "How do I get a firm quote?",
    a: "Book a free discovery call or send us your requirements. We'll scope the work and send a written proposal with a confirmed price.",
  },
];
