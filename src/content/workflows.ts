import type { WorkflowScenario } from "@/types";

/**
 * Illustrative workflow scenarios for the homepage Interactive Example.
 * These describe realistic states and systems but are NOT connected to any
 * real system and make no external API calls. Data only.
 */
export const workflowScenarios: WorkflowScenario[] = [
  {
    id: "lead",
    name: "Lead Management",
    trigger: "A customer submits a request",
    outcome: "The right person follows up with full context",
    steps: [
      { label: "Customer Inquiry", system: "Website form", description: "A request arrives through your website." },
      { label: "AI Classification", system: "AI model", description: "The inquiry is categorized and prioritized." },
      { label: "CRM Record", system: "CRM", description: "A structured record is created automatically." },
      { label: "Team Notification", system: "Slack / Email", description: "The right person is notified with context." },
      { label: "Human-Approved Response", system: "Teammate", description: "A drafted reply is reviewed before sending.", humanReview: true },
    ],
  },
  {
    id: "document",
    name: "Document Processing",
    trigger: "A document arrives",
    outcome: "Validated fields, ready for a quick human check",
    steps: [
      { label: "Document Received", system: "Email / Upload", description: "An invoice or form arrives." },
      { label: "Field Extraction", system: "AI model", description: "Relevant fields are extracted." },
      { label: "Validation", system: "Rules engine", description: "Values are checked against expected formats." },
      { label: "Human Review", system: "Teammate", description: "A person confirms the extracted data.", humanReview: true },
      { label: "System Update", system: "Accounting / CRM", description: "Confirmed data is recorded." },
    ],
  },
  {
    id: "engineering",
    name: "Engineering Workflow",
    trigger: "A change enters a repository",
    outcome: "Reviewed work with checks and a clear summary",
    steps: [
      { label: "Change Pushed", system: "Git repository", description: "A pull request is opened." },
      { label: "Automated Checks", system: "CI pipeline", description: "Tests and linters run automatically." },
      { label: "Change Summary", system: "AI model", description: "A summary of the change is generated." },
      { label: "Routed for Review", system: "Reviewer", description: "The work is sent to the right reviewer.", humanReview: true },
      { label: "Merge & Release", system: "CD pipeline", description: "Approved work is released through the pipeline." },
    ],
  },
];
