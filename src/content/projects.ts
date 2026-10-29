import type { Project } from "@/types";

/**
 * HONESTY RULE: Ultron Core is new. These are clearly-labeled Concept / Internal
 * Demo items only — never presented as real client work. A project with
 * `status: "coming-soon"` renders a coming-soon state rather than implying a
 * finished deliverable exists. Add a real "Client Project" entry only when one
 * genuinely exists and the client has approved public presentation.
 */
export const projects: Project[] = [
  {
    title: "Intelligent Lead Routing",
    kind: "Internal Demo",
    summary:
      "Automated lead classification, CRM synchronization, and follow-up coordination — an internal demonstration of the lead-management workflow we build.",
    stack: ["LLM classification", "CRM sync", "Workflow automation"],
    status: "coming-soon",
  },
  {
    title: "AI Engineering Workflow",
    kind: "Internal Demo",
    summary:
      "AI-assisted repository analysis and a pull-request workflow with automated checks and generated change summaries — an internal demonstration.",
    stack: ["CI/CD", "PR automation", "Code analysis"],
    status: "coming-soon",
  },
  {
    title: "Modern Business Website",
    kind: "Concept",
    summary:
      "A responsive business website connected to an inquiry workflow — the concept behind this very site, connecting a contact form to downstream automation.",
    stack: ["Next.js", "Accessible UI", "Form-to-workflow"],
    status: "coming-soon",
  },
];
