# Requirements — Ultron Core Website

## Introduction

Ultron Core is a newly established, founder-led AI automation and software engineering consultancy based in Israel, serving clients internationally. This document defines the requirements for its production-ready public marketing website.

The website's primary purpose is customer acquisition: generating qualified consultation inquiries from businesses interested in AI implementation, automation, systems integration, and custom software. A secondary purpose is to attract smaller businesses needing affordable websites and workflow automation. A third purpose is to demonstrate credible engineering leadership and delivery capability.

The site must be polished, responsive, accessible (WCAG AA), fast, SEO-friendly, maintainable by a two-person team, and — critically — honest. Ultron Core is new, so the site must not fabricate clients, testimonials, metrics, team size, certifications, or partnerships.

The stack is Next.js (App Router) + React + TypeScript (strict) + Tailwind CSS, statically rendered where possible, with a single server endpoint for contact submissions.

### Non-negotiable constraints (apply to all requirements)

- **Honesty:** No fabricated clients, testimonials, revenue, project counts, team size, certifications, partnerships, case-study outcomes, years of operation, logos, awards, guarantees, office locations, or founder credentials. Demonstrations must be clearly labeled Concept / Internal Demo / Client Project.
- **No copyrighted branding:** Original visual identity only. No Marvel / Avengers / Iron Man / Ultron-film imagery or trademark-like designs.
- **No exposed placeholders:** Never render raw placeholders like `[YOUR EMAIL HERE]` in production. Hide or omit unconfigured optional content.
- **Verified claims only:** Do not claim a feature works unless it is implemented and tested.

---

## Requirements

### Requirement 1: Brand identity and positioning

**User Story:** As a visitor, I want to immediately understand who Ultron Core is and what it does, so that I can decide whether it fits my needs.

#### Acceptance Criteria

1. WHEN any page loads THEN the system SHALL display the full brand name "Ultron Core" with an original wordmark reading "ULTRON CORE".
2. WHEN a visitor views the homepage hero THEN the system SHALL communicate the company's purpose (AI automation, systems integration, software engineering) within approximately five seconds of reading.
3. WHERE marketing copy appears THE system SHALL use clear, specific, human language and SHALL avoid hype buzzwords (e.g. "revolutionary", "disruptive", "game-changing", "unlock limitless potential").
4. THE system SHALL NOT use any third-party copyrighted characters, trademarks, or film imagery.
5. THE system SHALL present truthful positioning (founder-led, experienced engineering, hands-on implementation) and SHALL NOT fabricate company achievements.

### Requirement 2: Site structure and navigation

**User Story:** As a visitor, I want clear navigation to all parts of the site, so that I can find the right service or information quickly.

#### Acceptance Criteria

1. THE system SHALL provide main navigation with: Home, Services, Solutions, Our Work, About, Contact, and a prominent CTA "Book a Free Intro Call".
2. THE system SHALL implement all routes: `/`, `/services`, `/services/ai-agents`, `/services/business-automation`, `/services/ai-engineering`, `/services/integrations`, `/services/web-development`, `/services/custom-software`, `/services/ai-consulting`, `/services/ai-rescue`, `/solutions`, `/solutions/small-business`, `/solutions/engineering-teams`, `/solutions/customer-operations`, `/work`, `/about`, `/contact`, `/privacy`, `/terms`, and a `404` page.
3. WHEN navigation is displayed on desktop THEN the Services item SHALL expose a dropdown of service pages.
4. WHEN the viewport is mobile THEN the system SHALL provide an accessible mobile navigation menu with easy-to-tap links and an accessible CTA.
5. WHEN a user scrolls THEN the header SHALL remain sticky with a subtle backdrop blur and sufficient contrast.
6. THE system SHALL ensure every navigation destination and CTA links to a real, existing destination (no dead links or no-op buttons).

### Requirement 3: Homepage

**User Story:** As a prospective client, I want a polished, credible homepage, so that I trust Ultron Core with a real project.

#### Acceptance Criteria

1. THE homepage SHALL contain, in order: header/nav, hero, problem section, services overview, interactive workflow demonstration, who-we-help, process, differentiators, portfolio preview, FAQ, final CTA, and footer.
2. THE hero SHALL display the eyebrow, headline "Make Your Business Work Smarter.", supporting copy, a primary CTA, a secondary CTA, a supporting line, and a custom animated systems-integration visualization.
3. THE hero visualization SHALL be an original SVG/lightweight graphic depicting connected business-system nodes around an automation hub, using the midnight-blue palette with cyan highlights and limited violet accents, and SHALL render as a complete static image when animation is unavailable.
4. WHEN the user has `prefers-reduced-motion: reduce` set THEN all non-essential animation SHALL be disabled and static states SHALL be shown.
5. THE services overview SHALL present six service cards (AI Agents & Automation, Business Process Automation, AI for Engineering Teams, Systems Integration, Websites & Digital Experiences, Custom Software Development), each with an original SVG icon, title, short description, subtle hover effect, and a link to its service page, plus an "Explore All Services" link.
6. THE portfolio preview SHALL show only clearly labeled Concept or Internal Demo items and SHALL NOT present demonstrations as real client projects.
7. THE final CTA section SHALL provide a primary CTA that routes to the configured booking URL, OR to `/contact` when no booking URL is configured.

### Requirement 4: Interactive components

**User Story:** As a nontechnical visitor, I want to see and explore what Ultron Core builds, so that I understand the value without technical jargon.

#### Acceptance Criteria

1. THE Automation Scenario Explorer SHALL let users switch between at least three illustrative workflows (Lead Management, Document Processing, Engineering Workflow), each showing trigger, processing steps, connected systems, human review, and outcome.
2. THE scenario explorer SHALL be labeled "Interactive Example", SHALL use illustrative data only, SHALL make no external AI/API calls, and SHALL NOT imply connection to real systems.
3. THE Automation Opportunity Estimator SHALL accept employees, minutes per task, occurrences per week, and removable percentage, and SHALL output estimated weekly hours, hypothetical hours saved, and hypothetical monthly savings using transparent arithmetic, with a disclaimer that results are illustrative.
4. THE estimator SHALL NOT claim guaranteed ROI or assign monetary savings.
5. THE Service Recommendation selector SHALL ask what the visitor wants to improve and SHALL recommend relevant service pages using fixed decision rules, collecting no personal information and making no AI backend calls.
6. ALL interactive components SHALL be keyboard accessible, mobile-friendly, and SHALL respect reduced-motion with a graceful static fallback.

### Requirement 5: Service pages

**User Story:** As a prospective client, I want each service explained clearly, so that I can evaluate fit and next steps.

#### Acceptance Criteria

1. THE system SHALL render all eight service detail pages from a reusable template driven by structured content, with genuinely distinct content per page.
2. EACH service page SHALL include: breadcrumb, service hero, problem statement, capabilities, example scenarios, implementation process, what's included, technical considerations, related services, FAQ, and a contact CTA.
3. EACH service page SHALL emphasize business benefits before implementation detail, placing deeper technical terminology in a secondary or expandable section.
4. THE AI Engineering page SHALL use stronger engineering terminology appropriate for CTOs and Engineering Managers.
5. WHERE AI agents are described THE system SHALL explain human oversight, permissions, security, and error handling, and SHALL NOT claim agents are inherently reliable or fully autonomous.
6. THE system SHALL NOT imply formal vendor partnerships or certifications unless verified.

### Requirement 6: Solutions pages

**User Story:** As a visitor, I want solutions organized by my problem, so that I can find relevance without knowing technology categories.

#### Acceptance Criteria

1. THE system SHALL provide a solutions overview and three detail pages: Small Business, Engineering Teams, Customer Operations.
2. EACH solution page SHALL be organized by customer problem and SHALL link to the relevant services.

### Requirement 7: About page

**User Story:** As a prospective client or recruiter, I want to understand who runs Ultron Core, so that I can assess credibility.

#### Acceptance Criteria

1. THE About page SHALL present a founder-led, two-person consultancy with editable founder profiles.
2. THE system SHALL render Founder 1 as "Shay Vidas", "Co-Founder & Technical Lead", with the provided biography draft, and SHALL NOT claim delivered Ultron Core customer projects.
3. THE system SHALL render Founder 2 as "Faisal" with title "To be confirmed" and pending bio, and SHALL NOT invent his surname, experience, or certifications.
4. WHERE founder portraits are unavailable THE system SHALL use polished typographic/branded profile elements instead of fake photographs.
5. THE About page SHALL present the mission, philosophy, and values, and SHALL NOT imply a large team or global presence.

### Requirement 8: Contact and lead capture

**User Story:** As a prospective client, I want to easily and reliably submit an inquiry, so that Ultron Core can respond.

#### Acceptance Criteria

1. THE contact page SHALL provide a form with required fields (full name, business email, company name, help category, project description, privacy acknowledgment) and optional fields (telephone, website, company size, preferred contact, budget range, timeline).
2. THE form SHALL provide the specified help-category and budget options and SHALL NOT force a budget selection.
3. WHEN a user submits invalid input THEN the system SHALL reject it safely with accessible, field-level error messages and SHALL announce errors to screen readers.
4. WHEN a submission is in progress THEN the system SHALL show a loading state, and WHEN complete THEN a confirmation or error state.
5. THE server SHALL validate and sanitize all input, apply a honeypot spam check, and apply rate limiting where infrastructure supports it.
6. THE system SHALL NOT embed API secrets in client JavaScript and SHALL NOT send submitted field values to analytics.
7. THE system SHALL treat a submission as successful ONLY after the server confirms delivery or durable storage, and SHALL NEVER show a false success message.
8. WHERE email provider credentials are not configured THE system SHALL NOT behave as production-ready and SHALL surface a clear development-only configuration status to the founders (not to public visitors).
9. THE lead-delivery layer SHALL be provider-neutral and configurable via environment variables, with prepared (not yet implemented) integration points for CRM/webhook/scheduling.

### Requirement 9: Visual design system

**User Story:** As any visitor, I want a consistent, premium, distinctive design, so that the company feels credible and modern.

#### Acceptance Criteria

1. THE system SHALL implement the specified dark palette as design tokens (bg `#070B14`, secondary `#0D1423`, surface `#121D30`, text `#F8FAFC`, secondary text `#A9B7CB`, cyan `#38BDF8`, violet `#8B5CF6`, mint `#2DD4BF`) and SHALL use accent colors to establish hierarchy rather than on every element.
2. THE system SHALL meet WCAG AA contrast for text and functional controls.
3. THE system SHALL use Inter for body text and Space Grotesk for selected headings/branding, self-hosted/optimized, on a consistent type scale with readable body sizes.
4. THE system SHALL constrain content to ~1200–1280px max width with consistent gutters and a responsive grid, avoiding an endless series of identical three-column card rows.
5. THE system SHALL provide the specified reusable component library with consistent design tokens.
6. THE system SHALL avoid generic robot stock imagery, fabricated dashboards, heavy video, excessive animation, neon cyberpunk styling, and heavy decorative blur.

### Requirement 10: SEO and metadata

**User Story:** As the business, I want strong technical SEO, so that prospects can find Ultron Core via search.

#### Acceptance Criteria

1. EACH page SHALL have a unique title and meta description, correct canonical URL, and Open Graph/Twitter metadata referencing a social preview image.
2. THE system SHALL generate `sitemap.xml` and `robots.txt`, a favicon, and a web manifest.
3. THE system SHALL use semantic HTML, a correct heading hierarchy, descriptive links, and appropriate internal linking.
4. THE system SHALL emit `ProfessionalService`/`Organization` structured data using only real business details and SHALL NOT emit fake review/aggregate-rating schema or invented address/credentials.
5. THE system SHALL NOT keyword-stuff and SHALL support future blog/insights content without launching a blog now.

### Requirement 11: Performance

**User Story:** As a mobile visitor, I want fast load and interaction, so that I don't abandon the site.

#### Acceptance Criteria

1. THE system SHALL target (and measure) LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms under representative mobile conditions.
2. THE system SHALL target Lighthouse scores: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
3. THE system SHALL prefer static rendering, minimize client JS and client components, lazy-load noncritical visualizations, optimize images, limit font weights, and prevent layout shift.
4. WHERE an animation degrades performance THE system SHALL simplify it.

### Requirement 12: Accessibility

**User Story:** As a visitor using assistive technology or keyboard, I want full access, so that I can use every feature.

#### Acceptance Criteria

1. THE system SHALL support full keyboard navigation with correct focus order and visible focus outlines.
2. THE system SHALL use semantic landmarks, accessible labels, and correct heading hierarchy.
3. THE system SHALL announce form errors, provide accessible dropdowns/accordions, support reduced motion, and support responsive zoom.
4. THE system SHALL NOT use clickable divs without proper semantics or decorative controls that appear functional but do nothing.
5. THE system SHALL label SVGs appropriately and provide touch-friendly controls.

### Requirement 13: Security and privacy

**User Story:** As the business, I want the site safe for public deployment, so that user data and the brand are protected.

#### Acceptance Criteria

1. THE system SHALL process the contact form server-side with server-side validation and sanitization.
2. THE system SHALL keep all secrets in environment variables and SHALL NOT expose API keys in client JavaScript.
3. THE system SHALL apply appropriate security headers and assume HTTPS in production.
4. THE system SHALL NOT log personal message content and SHALL minimize third-party data collection.
5. THE system SHALL provide editable Privacy and Terms pages as drafts clearly marked for founder/legal review, without inventing legal/compliance certifications.

### Requirement 14: Content management and configuration

**User Story:** As a founder, I want to edit content and business details easily, so that I can maintain the site without touching many UI files.

#### Acceptance Criteria

1. THE system SHALL store homepage copy, services, FAQs, projects, founder bios, and SEO defaults in structured content/config files, independent of presentation components where practical.
2. THE system SHALL centralize contact details, social links, booking link, service definitions, founder profiles, SEO defaults, and public business config in a single source of truth.
3. THE system SHALL NOT hardcode business information in multiple places and SHALL be structured so a headless CMS could be added later.
4. WHERE business details are missing THE system SHALL use centrally managed, clearly marked placeholders and SHALL hide incomplete optional sections from the public build.

### Requirement 15: Internationalization readiness

**User Story:** As the business, I want future Hebrew/RTL support, so that we can expand without re-architecting.

#### Acceptance Criteria

1. THE architecture SHALL allow future introduction of Hebrew, RTL layout, locale-specific URLs, and translated metadata/navigation.
2. THE system SHALL launch in English only and SHALL NOT display a visible language switch until a second language has usable content.

### Requirement 16: Analytics readiness

**User Story:** As a founder, I want basic, privacy-conscious analytics, so that I can see whether the site generates interest.

#### Acceptance Criteria

1. THE system SHALL support a privacy-conscious analytics integration with a defined event set (CTA clicked, contact form opened, contact submitted, service page visited, booking link clicked, portfolio project opened).
2. THE system SHALL NOT record personal form values and SHALL NOT claim conversion tracking works until configured and tested.

### Requirement 17: Error states and quality

**User Story:** As a visitor, I want graceful handling of errors, so that the experience stays professional.

#### Acceptance Criteria

1. THE system SHALL provide professional handling for 404 routes, failed form submissions, network interruptions, and invalid fields.
2. THE system SHALL have no dead links, no broken buttons, no horizontal overflow on mobile, no runtime console errors, and no unnecessary hydration warnings.

### Requirement 18: Testing

**User Story:** As the engineering team, I want a real test suite, so that quality is verifiable.

#### Acceptance Criteria

1. THE system SHALL include unit tests for form validation, calculator logic, recommendation logic, and utilities.
2. THE system SHALL include component tests for navigation, FAQ accordion, forms, scenario selection, and error/success states.
3. THE system SHALL include end-to-end tests for homepage load, navigation links, service pages, contact validation and success/failure (via controlled test mechanisms), mobile menu, and broken-link checks.
4. THE team SHALL run type checking, linting, unit tests, E2E tests, a production build, and accessibility checks, and SHALL report actual pass/fail results without describing unexecuted tests as passed.

### Requirement 19: Documentation and deployment

**User Story:** As a founder, I want clear docs and a repeatable deployment, so that I can operate and launch the site.

#### Acceptance Criteria

1. THE system SHALL include README.md, ARCHITECTURE.md, CONTENT_GUIDE.md, and LAUNCH_CHECKLIST.md as specified.
2. THE system SHALL include `.gitignore` and `.env.example`, and SHALL NOT commit secrets or production credentials.
3. THE system SHALL be prepared for Git-based deployment (Vercel-friendly, portability preserved) with documented environment variables and a rollback procedure.
4. THE system SHALL NOT publish the site or connect real customer services without explicit founder authorization.

### Requirement 20: Honesty and integrity (cross-cutting)

**User Story:** As a founder, I want the site to be truthful, so that it protects the brand and builds trust.

#### Acceptance Criteria

1. THE system SHALL NOT fabricate clients, testimonials, revenue, project counts, team size, certifications, partnerships, case-study outcomes, years of operation, customer logos, awards, performance guarantees, office locations, or founder credentials.
2. THE system SHALL NOT imply technology demonstrations are customer implementations.
3. WHERE real information is missing THE system SHALL use clearly marked placeholders and SHALL never expose raw placeholder tokens in the public production build.
