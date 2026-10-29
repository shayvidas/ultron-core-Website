import type { Service } from "@/types";

/**
 * Service catalog — the single source of content for every service page and
 * the homepage services overview. Each service has genuinely distinct content.
 */
export const services: Service[] = [
  {
    slug: "ai-agents",
    title: "AI Agents & Intelligent Automation",
    nav: "AI Agents & Automation",
    eyebrow: "AI Agents",
    icon: "agents",
    cta: "Discuss Your AI Agent",
    audience: "enterprise",
    cardDescription:
      "Assistants and workflows that process information, support your team, and complete repeatable tasks — with human oversight built in.",
    summary:
      "Design and build AI-enabled assistants and workflows that process information, support employees, and complete repeatable tasks.",
    problem:
      "AI assistants are easy to prototype and hard to make dependable. Without clear permissions, review steps, and logging, an agent that works in a demo becomes a liability in production. We build agents that know their limits.",
    capabilities: [
      {
        title: "Knowledge assistants",
        body: "Answer questions from your own documents using retrieval, with citations back to the source so answers can be checked.",
      },
      {
        title: "Inquiry classification & drafting",
        body: "Categorize incoming email or requests, route them, and draft responses that a person reviews before anything is sent.",
      },
      {
        title: "Multi-step workflows with approval",
        body: "Coordinate several tools to complete a task, pausing for human approval at the points where a mistake would be costly.",
      },
      {
        title: "Data enrichment & summarization",
        body: "Enrich CRM records, summarize support tickets, and generate reports from structured and unstructured sources.",
      },
    ],
    scenarios: [
      {
        title: "Sales lead qualification",
        body: "An inbound lead is classified, enriched with public company data, and scored. A summary lands in your CRM and the right person is notified.",
      },
      {
        title: "Support ticket triage",
        body: "Incoming tickets are grouped by topic and urgency, summarized, and routed — with a suggested reply the agent leaves for a human to approve.",
      },
      {
        title: "Internal knowledge Q&A",
        body: "Employees ask questions in plain language and get answers drawn only from approved internal documents, with links to verify.",
      },
    ],
    process: [
      { step: "01", title: "Scope", body: "We pick one task where an agent adds clear value and define what 'good' looks like." },
      { step: "02", title: "Design", body: "We decide the tools, data access, permissions, and the human approval points." },
      { step: "03", title: "Build", body: "We implement with logging and evaluation so behavior is observable from day one." },
      { step: "04", title: "Evaluate", body: "We test against real examples, measure quality and cost, and tune before rollout." },
    ],
    includes: [
      "A scoped agent targeting one well-defined task",
      "Human approval checkpoints where they matter",
      "Logging, evaluation, and cost controls",
      "Access controls and least-privilege tool permissions",
      "Documentation and a handover so your team can maintain it",
    ],
    techNotes: [
      "LLM API integrations with structured tool calling and schema-validated outputs.",
      "Retrieval-augmented generation (RAG) with source attribution.",
      "MCP-compatible integrations where they fit the environment.",
      "Workflow orchestration with retries, timeouts, and idempotent steps.",
      "Evaluation harness for regression testing prompt and model changes.",
    ],
    related: ["business-automation", "integrations", "ai-rescue"],
    faqs: [
      {
        q: "Are AI agents reliable enough to run on their own?",
        a: "Not for everything. We design agents with human approval at the steps where errors are costly, and we add logging and evaluation so you can see how they behave. Full autonomy is the exception, not the default.",
      },
      {
        q: "Will the agent have access to all of our data?",
        a: "No. We use least-privilege access, so an agent only reaches the specific systems and data it needs for its task, with access controls and audit logging.",
      },
      {
        q: "How do you manage cost?",
        a: "We track token and API usage from the start, set limits, and choose models appropriate to each step rather than defaulting to the most expensive option.",
      },
    ],
  },
  {
    slug: "business-automation",
    title: "Business Process Automation",
    nav: "Business Automation",
    eyebrow: "Automation",
    icon: "automation",
    cta: "Find What You Can Automate",
    audience: "smb",
    cardDescription:
      "Connect the systems you already use and automate the predictable work your team repeats every day.",
    summary:
      "Reduce repetitive work by connecting business systems and automating predictable operations.",
    problem:
      "Most of the time lost in a business isn't in the tools themselves — it's in the manual steps between them. Copying a form submission into a CRM, chasing follow-ups, re-keying invoice data. That work is predictable, and predictable work can be automated.",
    capabilities: [
      {
        title: "Lead & form routing",
        body: "Form submissions flow into your CRM and into a structured follow-up workflow automatically.",
      },
      {
        title: "Notifications & reminders",
        body: "Customers and staff get the right notification at the right time without someone remembering to send it.",
      },
      {
        title: "Document & data handling",
        body: "Extract fields from invoices and documents for review, and keep spreadsheets and systems in sync.",
      },
      {
        title: "Scheduled reporting",
        body: "Recurring business reports are assembled and delivered on a schedule instead of by hand.",
      },
    ],
    scenarios: [
      {
        title: "From website form to follow-up",
        body: "A customer submits a request. It's recorded in your CRM, the right person is notified, and a follow-up sequence begins — all without manual entry.",
      },
      {
        title: "Invoice intake with review",
        body: "An invoice arrives by email. Key fields are extracted and presented for a quick human check before anything is recorded.",
      },
      {
        title: "Calendar & CRM coordination",
        body: "Bookings and CRM records stay aligned, with reminders sent automatically ahead of appointments.",
      },
    ],
    process: [
      { step: "01", title: "Map", body: "We map the repetitive steps your team does today and how long they take." },
      { step: "02", title: "Prioritize", body: "We pick the automations with the best effort-to-value ratio to start." },
      { step: "03", title: "Build", body: "We connect your tools and build the workflow with validation and error handling." },
      { step: "04", title: "Monitor", body: "We add monitoring so you know when something needs attention." },
    ],
    includes: [
      "A prioritized list of what's worth automating",
      "Working automations connecting your existing tools",
      "Human review steps where accuracy matters",
      "Error handling and monitoring",
      "A short guide so your team understands each workflow",
    ],
    techNotes: [
      "Integrations via n8n, Make, Zapier, or purpose-built services depending on reliability needs.",
      "We are not a certified partner of any automation vendor; tool choice is based on fit.",
      "Idempotent steps, retries, and dead-letter handling for failed runs.",
      "Validation at the boundaries so bad data doesn't propagate.",
    ],
    related: ["integrations", "ai-agents", "ai-rescue"],
    faqs: [
      {
        q: "Do we have to replace our current tools?",
        a: "Usually not. The point is to connect the tools you already use so they work together, rather than asking you to migrate.",
      },
      {
        q: "What if an automation fails?",
        a: "We build in error handling and monitoring so failures are caught and surfaced rather than failing silently. Critical steps keep a human in the loop.",
      },
    ],
  },
  {
    slug: "ai-engineering",
    title: "AI Engineering Transformation",
    nav: "AI for Engineering Teams",
    eyebrow: "Flagship · Engineering",
    icon: "engineering",
    cta: "Improve Your Engineering Workflow",
    audience: "engineering",
    cardDescription:
      "Help engineering teams adopt AI-assisted development responsibly — with the architecture, automation, and governance to make it useful.",
    summary:
      "Help engineering organizations adopt AI-assisted development responsibly and effectively, from pilot to rollout.",
    problem:
      "AI coding tools are being adopted inconsistently across teams, usually without guidelines, security review, or any way to measure whether they help. The result is uneven quality and governance gaps. Effective adoption is an engineering problem, not a license purchase.",
    capabilities: [
      {
        title: "Workflow audit",
        body: "We review how your team actually ships — from branching and PR review to CI/CD and release — and identify the real bottlenecks.",
      },
      {
        title: "Tool evaluation & security review",
        body: "We evaluate AI coding assistants and agent tooling against your security and compliance requirements before anything touches your repos.",
      },
      {
        title: "Repository standards",
        body: "Coding guidelines, review conventions, and AI-usage policies encoded where the team already works.",
      },
      {
        title: "Pipeline automation",
        body: "Automated testing, PR summarization, and release steps integrated into CI/CD with controls and observability.",
      },
    ],
    scenarios: [
      {
        title: "Controlled AI assistant rollout",
        body: "We run a scoped pilot with one team, measure its effect on review time and defect rate, then document a rollout approach for the rest of the organization.",
      },
      {
        title: "PR & CI workflow automation",
        body: "A change enters a repository. Automated checks run, a summary of the change is generated, and the work is routed for human review with the right context attached.",
      },
      {
        title: "Governance & observability",
        body: "We add logging and policy controls around AI usage so adoption is measurable and auditable rather than ad hoc.",
      },
    ],
    process: [
      { step: "01", title: "Review", body: "Review the engineering workflow and current tooling." },
      { step: "02", title: "Identify", body: "Identify bottlenecks and the highest-leverage opportunities." },
      { step: "03", title: "Evaluate", body: "Evaluate tools against security and governance requirements." },
      { step: "04", title: "Pilot", body: "Select one pilot and implement it with the engineering team." },
      { step: "05", title: "Rollout", body: "Evaluate results and document a repeatable rollout approach." },
    ],
    includes: [
      "AI adoption roadmap",
      "Development workflow audit",
      "Secure tool configuration",
      "A working pilot integration",
      "CI/CD improvement recommendations",
      "Team guidelines and a measurement framework",
      "Knowledge transfer to your engineers",
    ],
    techNotes: [
      "Repository-level standards, PR workflow automation, and CI/CD integration (GitHub Actions, GitLab CI, and similar).",
      "Controlled adoption of MCP integrations into developer tooling where appropriate.",
      "Engineering productivity measurement grounded in DORA-style signals rather than vanity metrics.",
      "Security and governance: secret handling, access scoping, and audit logging for AI workflows.",
    ],
    related: ["integrations", "custom-software", "ai-rescue"],
    faqs: [
      {
        q: "Will this disrupt how our team currently works?",
        a: "We start with a scoped pilot on one team rather than a top-down mandate. Changes are introduced with the team, measured, and only rolled out more broadly once they demonstrably help.",
      },
      {
        q: "How do you handle security concerns with AI coding tools?",
        a: "Security review comes before adoption. We evaluate data handling, access scope, and secret exposure for each tool, and configure controls and audit logging appropriate to your environment.",
      },
      {
        q: "Can you measure whether AI tooling actually helps?",
        a: "Yes. We define a small set of meaningful signals up front — review time, defect rate, cycle time — and measure the pilot against them before recommending a rollout.",
      },
    ],
  },
  {
    slug: "integrations",
    title: "Systems Integration",
    nav: "Systems Integration",
    eyebrow: "Integration",
    icon: "integrations",
    cta: "Connect Your Systems",
    audience: "enterprise",
    cardDescription:
      "Connect the applications, APIs, and data sources that should be working together — reliably and safely.",
    summary: "Connect applications, APIs, and data sources that should work together.",
    problem:
      "Information is trapped in separate systems that don't talk to each other, so people become the integration layer — copying data back and forth. A proper integration is reliable, observable, and handles the messy cases that manual work papers over.",
    capabilities: [
      {
        title: "CRM & productivity suites",
        body: "Connect your CRM with Google Workspace or Microsoft 365 so records, calendars, and documents stay aligned.",
      },
      {
        title: "Payments & invoicing",
        body: "Link payment and invoicing systems to your internal records with validation and reconciliation.",
      },
      {
        title: "Third-party APIs",
        body: "Integrate the external services your business depends on, with authentication and rate-limit handling done properly.",
      },
      {
        title: "Reporting & databases",
        body: "Bring data together from internal databases and platforms into reliable reporting.",
      },
    ],
    scenarios: [
      {
        title: "Website to CRM to notification",
        body: "A website form writes a validated record to your CRM and notifies the right person — with retries if a system is briefly unavailable.",
      },
      {
        title: "Support tool to internal reporting",
        body: "Support activity flows into internal reporting on a schedule, with audit logs so you can trace every record.",
      },
      {
        title: "Payment events to accounting",
        body: "Payment events are captured, validated, and recorded idempotently so a retried webhook never double-counts.",
      },
    ],
    process: [
      { step: "01", title: "Map", body: "Map the systems, data, and the direction information needs to flow." },
      { step: "02", title: "Design", body: "Design authentication, error recovery, and audit requirements." },
      { step: "03", title: "Build", body: "Implement with validation, retries, and monitoring." },
      { step: "04", title: "Verify", body: "Test the failure cases, not just the happy path." },
    ],
    includes: [
      "A reliable integration between your chosen systems",
      "Authentication and authorization handled correctly",
      "Retries, idempotency, and error recovery",
      "Data validation and audit logging",
      "Monitoring so issues surface early",
    ],
    techNotes: [
      "Authentication (OAuth, API keys) with secrets kept server-side.",
      "Rate-limit handling, exponential backoff, and idempotency keys.",
      "Data validation at boundaries and audit logs for traceability.",
      "Monitoring and alerting on failed or delayed runs.",
    ],
    related: ["business-automation", "custom-software", "ai-rescue"],
    faqs: [
      {
        q: "Our systems don't have modern APIs. Can you still connect them?",
        a: "Often yes. Where a clean API doesn't exist we look at supported alternatives and discuss the trade-offs honestly, including where a custom service is the more reliable option.",
      },
      {
        q: "How do you prevent duplicate or lost data?",
        a: "We design integrations to be idempotent and add validation and audit logging, so a retried request doesn't double-count and failures are traceable rather than silent.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Websites & Digital Experiences",
    nav: "Websites & Digital Experiences",
    eyebrow: "Web",
    icon: "web",
    cta: "Build Your Website",
    audience: "smb",
    cardDescription:
      "Fast, modern, accessible websites — and we can connect them directly to your business workflows.",
    summary:
      "Build fast, modern websites and digital experiences for organizations establishing or improving their online presence.",
    problem:
      "A slow, dated, or missing website undersells a business that does great work. A good website is fast, works on every device, is found in search, and — this is the part most sites miss — connects to how the business actually operates.",
    capabilities: [
      {
        title: "Business sites & landing pages",
        body: "Responsive business websites and focused service landing pages built for performance and clarity.",
      },
      {
        title: "Lead capture & booking",
        body: "Contact and inquiry forms and booking integrations that feed straight into your workflows.",
      },
      {
        title: "Performance & SEO",
        body: "Technical SEO, fast load times, and mobile optimization built in from the start.",
      },
      {
        title: "Multilingual & CMS",
        body: "Multilingual pages and content-management integration so you can edit without a developer.",
      },
    ],
    scenarios: [
      {
        title: "Inquiry straight to your CRM",
        body: "A contact form submission is validated and delivered to your CRM and inbox — not just an email that gets lost.",
      },
      {
        title: "Appointment request to calendar",
        body: "A booking request becomes a calendar event and a confirmation, with reminders handled automatically.",
      },
      {
        title: "Quote request to internal alert",
        body: "A quote request notifies the right person immediately with the context they need to respond.",
      },
    ],
    process: [
      { step: "01", title: "Define", body: "Clarify who the site is for and what action it should drive." },
      { step: "02", title: "Design", body: "Design a fast, accessible, on-brand experience." },
      { step: "03", title: "Build", body: "Build it responsive, performant, and SEO-ready." },
      { step: "04", title: "Connect", body: "Wire forms and bookings into your business workflows." },
    ],
    includes: [
      "A responsive, accessible, fast website",
      "Lead-capture forms connected to your tools",
      "Technical SEO and performance optimization",
      "Content management so you can make edits",
      "Guidance on hosting and maintenance",
    ],
    techNotes: [
      "Static-first rendering, optimized images, and minimal JavaScript for strong Core Web Vitals.",
      "Semantic, accessible markup targeting WCAG AA.",
      "Form submissions connect to CRM, calendar, or automation workflows.",
      "Optional headless CMS integration for non-technical editing.",
    ],
    related: ["custom-software", "business-automation", "integrations"],
    faqs: [
      {
        q: "Can we edit the website ourselves afterward?",
        a: "Yes. We can integrate a content management system so you can update text and content without touching code, and we provide guidance on hosting and maintenance.",
      },
      {
        q: "Will the site be fast and show up in search?",
        a: "Performance and technical SEO are built in rather than added later — fast loading, mobile-friendly layout, correct metadata, and a sitemap. We measure real results during the build.",
      },
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software & Mobile Development",
    nav: "Custom Software",
    eyebrow: "Software",
    icon: "software",
    cta: "Discuss Your Software Project",
    audience: "enterprise",
    cardDescription:
      "Internal tools, customer portals, dashboards, APIs, and mobile apps built around your actual requirements.",
    summary: "Design and build software solutions adapted to your business requirements.",
    problem:
      "Off-the-shelf software rarely fits exactly, and the gaps get filled with spreadsheets and manual workarounds. When a process is core to how you operate, purpose-built software pays for itself in reliability and time saved.",
    capabilities: [
      {
        title: "Internal tools & dashboards",
        body: "Operational dashboards and internal tools that replace fragile spreadsheets.",
      },
      {
        title: "Customer portals",
        body: "Secure portals where your customers can self-serve the things they currently email you about.",
      },
      {
        title: "APIs & backends",
        body: "Well-structured API backends and lightweight SaaS products built to be maintained.",
      },
      {
        title: "Mobile applications",
        body: "Mobile apps where a phone-first experience genuinely fits the use case.",
      },
    ],
    scenarios: [
      {
        title: "Replacing a spreadsheet process",
        body: "A critical process living in a shared spreadsheet becomes a proper tool with validation, permissions, and an audit trail.",
      },
      {
        title: "Customer self-service portal",
        body: "Customers check status, submit requests, and access documents themselves — reducing inbound email.",
      },
      {
        title: "Software modernization",
        body: "An aging internal application is modernized incrementally so the business keeps running throughout.",
      },
    ],
    process: [
      { step: "01", title: "Discover", body: "Understand the requirements and constraints in depth." },
      { step: "02", title: "Design", body: "Design the architecture and data model for maintainability." },
      { step: "03", title: "Build", body: "Build in increments with testing along the way." },
      { step: "04", title: "Hand over", body: "Deliver with documentation and knowledge transfer." },
    ],
    includes: [
      "Software built to your requirements",
      "A maintainable architecture and data model",
      "Appropriate automated testing",
      "Documentation and knowledge transfer",
      "A clear path for future changes",
    ],
    techNotes: [
      "Typed, tested codebases with CI and sensible architecture boundaries.",
      "Mobile engineering experience informs native and cross-platform decisions.",
      "APIs designed with authentication, validation, and versioning in mind.",
      "Incremental delivery so value arrives before the whole project is done.",
    ],
    related: ["ai-engineering", "integrations", "web-development"],
    faqs: [
      {
        q: "Do we own the code?",
        a: "Yes. We build with ownership and knowledge transfer in mind, including documentation so your team or another developer can maintain it.",
      },
      {
        q: "Can you work with our existing system rather than rebuilding it?",
        a: "Often the right move is incremental modernization rather than a rewrite. We assess the existing system first and recommend the approach with the lowest risk for your business.",
      },
    ],
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting & Strategy",
    nav: "AI Consulting & Strategy",
    eyebrow: "Consulting",
    icon: "consulting",
    cta: "Book an AI Consultation",
    audience: "enterprise",
    cardDescription:
      "Identify realistic AI opportunities and get a practical implementation plan — before you commit budget.",
    summary: "Help businesses identify realistic AI opportunities and create implementation plans.",
    problem:
      "There's enormous pressure to 'do something with AI' and very little clarity on what's actually worth doing. The gap is a practical assessment: where AI fits your real workflows, what it would cost, and what to build first.",
    capabilities: [
      {
        title: "Opportunity mapping",
        body: "We map your workflows and identify where AI realistically helps — and where it doesn't.",
      },
      {
        title: "Readiness assessment",
        body: "An honest look at your data, systems, and team readiness for the opportunities you care about.",
      },
      {
        title: "Build vs. buy",
        body: "Recommendations on whether to build, buy, or wait — grounded in cost and feasibility.",
      },
      {
        title: "Pilot roadmap",
        body: "A prioritized roadmap with a concrete first pilot rather than an open-ended strategy deck.",
      },
    ],
    scenarios: [
      {
        title: "Discovery consultation",
        body: "A focused session where we learn your operations and surface candidate opportunities.",
      },
      {
        title: "Prioritized roadmap",
        body: "We assess feasibility, cost, and data-privacy implications and prioritize a short list you can act on.",
      },
      {
        title: "Employee enablement",
        body: "Guidance on helping your team adopt new tools, since the best plan fails without adoption.",
      },
    ],
    process: [
      { step: "01", title: "Discover", body: "Learn how your business works today." },
      { step: "02", title: "Assess", body: "Map opportunities and assess readiness, cost, and privacy." },
      { step: "03", title: "Prioritize", body: "Prioritize with build-vs-buy recommendations." },
      { step: "04", title: "Plan", body: "Produce a pilot roadmap you can act on." },
    ],
    includes: [
      "A discovery consultation",
      "Workflow mapping and AI readiness assessment",
      "Prioritized opportunities",
      "Build-versus-buy recommendations",
      "A pilot roadmap with cost and privacy considerations",
    ],
    techNotes: [
      "Technical feasibility assessment including data availability and quality.",
      "Data privacy and security review relevant to your jurisdiction.",
      "Cost modeling for API usage and ongoing operation.",
    ],
    related: ["ai-agents", "business-automation", "ai-engineering"],
    faqs: [
      {
        q: "Is the initial consultation free?",
        a: "We offer an initial consultation to understand your needs. A comprehensive audit is a scoped engagement — we'll be clear about what's included before any work begins, and we don't promise a free full audit.",
      },
      {
        q: "What if the honest answer is that we don't need AI yet?",
        a: "Then that's what we'll tell you. We'd rather recommend a simpler automation or no change than sell an AI project that doesn't earn its cost.",
      },
    ],
  },
  {
    slug: "ai-rescue",
    title: "AI Workflow Rescue & Optimization",
    nav: "AI Workflow Rescue",
    eyebrow: "Rescue",
    icon: "rescue",
    cta: "Fix an Existing Workflow",
    audience: "engineering",
    cardDescription:
      "Review and fix AI tools and automations that are unreliable, expensive, or not delivering what you expected.",
    summary:
      "Review existing automations and AI tools that are unreliable, hard to maintain, or not producing the expected results.",
    problem:
      "A lot of AI and automation work gets to 'mostly working' and stalls there — failing intermittently, costing more than expected, or producing output no one quite trusts. These are fixable engineering problems once someone looks properly.",
    capabilities: [
      {
        title: "Reliability fixes",
        body: "Diagnose repeated execution errors, brittle steps, and missing fallback paths, and make them robust.",
      },
      {
        title: "Cost control",
        body: "Find and fix excessive API usage and inefficient calls that are quietly draining budget.",
      },
      {
        title: "Output quality",
        body: "Improve unreliable AI output through better prompting, structure, and validation.",
      },
      {
        title: "Monitoring & security",
        body: "Add the monitoring and address the security risks that were missing from the original build.",
      },
    ],
    scenarios: [
      {
        title: "The automation that keeps breaking",
        body: "We trace the intermittent failures, add retries and validation, and put monitoring in place so you're not the last to know.",
      },
      {
        title: "The surprising API bill",
        body: "We audit usage, remove wasteful calls, right-size models, and set guardrails on spend.",
      },
      {
        title: "The AI output you don't trust",
        body: "We restructure prompts, add schema validation and review steps, and measure quality so output becomes dependable.",
      },
    ],
    process: [
      { step: "01", title: "Assess", body: "A technical assessment of the current workflow and its failure modes." },
      { step: "02", title: "Prioritize", body: "A prioritized list of fixes by risk and impact." },
      { step: "03", title: "Fix", body: "Implement the fixes with proper error handling and monitoring." },
      { step: "04", title: "Maintain", body: "Agree a maintenance plan so it stays reliable." },
    ],
    includes: [
      "A technical assessment of the existing workflow",
      "A prioritized list of fixes",
      "Implementation of the agreed fixes",
      "Monitoring and fallback paths",
      "A maintenance plan",
    ],
    techNotes: [
      "Root-cause analysis of failures rather than symptomatic patches.",
      "Prompt restructuring with structured outputs and validation.",
      "Cost instrumentation and model right-sizing.",
      "Monitoring, alerting, and graceful degradation.",
    ],
    related: ["ai-agents", "business-automation", "integrations"],
    faqs: [
      {
        q: "We didn't build the original workflow. Can you still help?",
        a: "Yes. We start with an assessment to understand what's there, then give you a clear, prioritized plan before committing to fixes.",
      },
      {
        q: "Is it worth fixing, or should we start over?",
        a: "The assessment answers exactly that. Sometimes a targeted fix is enough; sometimes a rebuild is cheaper long-term. We'll give you the honest trade-off.",
      },
    ],
  },
];

export const serviceMap = new Map(services.map((s) => [s.slug, s]));

export function getService(slug: string): Service | undefined {
  return serviceMap.get(slug);
}

/** The six services featured on the homepage overview, in display order. */
export const homepageServiceSlugs = [
  "ai-agents",
  "business-automation",
  "ai-engineering",
  "integrations",
  "web-development",
  "custom-software",
] as const;
