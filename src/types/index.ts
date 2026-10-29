export type IconName =
  | "agents"
  | "automation"
  | "engineering"
  | "integrations"
  | "web"
  | "software"
  | "consulting"
  | "rescue";

export type Audience = "smb" | "engineering" | "enterprise";

export interface Faq {
  q: string;
  a: string;
}

export interface Capability {
  title: string;
  body: string;
}

export interface Scenario {
  title: string;
  body: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export interface Service {
  slug: string;
  /** Full page title */
  title: string;
  /** Short label for nav/cards */
  nav: string;
  eyebrow: string;
  /** One-line summary for cards */
  summary: string;
  /** Short card description (homepage overview) */
  cardDescription: string;
  /** The business problem this service addresses */
  problem: string;
  capabilities: Capability[];
  scenarios: Scenario[];
  process: ProcessStep[];
  includes: string[];
  /** Deeper technical terminology — rendered in a secondary / expandable section */
  techNotes: string[];
  /** Related service slugs */
  related: string[];
  faqs: Faq[];
  /** CTA button label */
  cta: string;
  audience?: Audience;
  icon: IconName;
}

export interface SolutionItem {
  title: string;
  body: string;
}

export interface Solution {
  slug: string;
  title: string;
  nav: string;
  eyebrow: string;
  summary: string;
  problems: string[];
  items: SolutionItem[];
  /** Related service slugs */
  relatedServices: string[];
  faqs: Faq[];
}

export type ProjectKind = "Concept" | "Internal Demo" | "Client Project";

export interface Project {
  title: string;
  kind: ProjectKind;
  summary: string;
  stack: string[];
  /** "live" => show the card; "coming-soon" => show a coming-soon state */
  status: "live" | "coming-soon";
}

export interface Founder {
  name: string;
  title: string;
  /** null => bio pending; render a placeholder treatment, never fabricate */
  bio: string | null;
  /** null => hidden */
  linkedin: string | null;
  /** null => typographic/branded profile instead of a photo */
  portrait: string | null;
  initials: string;
}

export interface WorkflowStep {
  label: string;
  system: string;
  description: string;
  humanReview?: boolean;
}

export interface WorkflowScenario {
  id: string;
  name: string;
  trigger: string;
  outcome: string;
  steps: WorkflowStep[];
}

export interface RecommendationOption {
  id: string;
  label: string;
  serviceSlug: string;
}
