# Ultron Core — Structure Steering

```
src/
  app/            # routes (App Router). layout, page, route segments, api/contact, sitemap/robots/manifest/og
  components/
    layout/       # Navbar, MobileMenu, Footer, Container, Section, SectionHeading, Breadcrumbs, SkipLink
    ui/           # Button, Card, Badge, InputField, SelectField, TextareaField, StatusMessage, Disclosure
    home/         # homepage sections
    services/     # service page sub-sections
    contact/      # ContactForm, LeadCTA, ConfigStatusBanner
    interactive/  # SystemsDiagram, ScenarioExplorer, OpportunityEstimator, RecommendationQuiz, FAQAccordion, ProcessTimeline
    icons/        # original SVG service icons
  content/        # typed data: services, solutions, projects, faqs, process, audiences, differentiators, company
  lib/
    validation/   # Zod schemas (shared client+server)
    email/        # provider-neutral lead dispatch (+ dev console provider)
    seo/          # metadata + JSON-LD builders
    analytics/    # typed events, no-op until configured
    utils/        # cn, format, estimate, recommend
  config/site.ts  # SINGLE SOURCE OF TRUTH
  types/index.ts
```

## Rules
- New business data goes in `content/` or `config/site.ts`, never hardcoded in components.
- Reuse existing components before creating new ones; keep the component library consistent with design tokens.
- Interactive widgets are client components kept small; everything else stays a server component.
- Service and solution pages are generated from data via `[slug]` templates — add a new entry to `content/`, not a new route file.
- Keep the project maintainable for a two-person team: prefer clarity over cleverness.
```
