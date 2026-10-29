# Implementation Plan — Ultron Core Website

> Environment note: Node.js/npm are not installed on the current machine. Tasks that require a Node runtime (install, dev server, build, tests, Lighthouse) are marked **[founder-run]** and will be executed in a Node environment. No task is marked complete based on code existence alone where execution is required for its acceptance.

## Phase 1 — Foundation

- [x] 1. Scaffold project configuration and tooling
  - Create `package.json` (Next 16, React 19, TS strict, Tailwind v4, Zod, RHF, Lucide, Vitest, Playwright, ESLint, Prettier)
  - Add `tsconfig.json` (strict), `next.config.ts`, `postcss`/Tailwind v4 setup, `eslint`/`prettier` config, `.gitignore`, `.env.example`
  - _Requirements: 12.x tooling, 13.2, 19.2_

- [x] 2. Establish design system and global layout
  - [x] 2.1 Create `globals.css` with Tailwind v4 `@theme` tokens, base typography, focus styles, reduced-motion defaults
  - [x] 2.2 Self-host/optimize Inter + Space Grotesk via `next/font`
  - [x] 2.3 Build layout primitives: `Container`, `Section`, `SectionHeading`, `SkipLink`
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 12.1, 12.2_

- [x] 3. Build core UI components
  - `Button`, `Card`, `Badge`, `InputField`, `SelectField`, `TextareaField`, `StatusMessage`, `Disclosure`, `Breadcrumbs`
  - Enforce semantics (anchor vs button), focus-visible, ARIA
  - _Requirements: 9.5, 12.1, 12.4_

- [x] 4. Build Navbar, MobileMenu, Footer
  - Sticky header with scroll backdrop blur; Services dropdown; accessible mobile menu with focus management; footer with config-gated links
  - _Requirements: 2.1, 2.3, 2.4, 2.5, 14.4_

- [x] 5. Site config, content modules, SEO helpers
  - `config/site.ts` single source of truth (null-gated fields)
  - `content/*.ts` for services, solutions, projects, faqs, process, audiences, differentiators, company/founders
  - `lib/seo/metadata.ts`, `sitemap.ts`, `robots.ts`, `manifest.ts`, `opengraph-image.tsx`
  - _Requirements: 14.1, 14.2, 14.3, 10.1, 10.2, 10.4_

- [ ] 6. **[founder-run]** Initialize tests harness and run baseline
  - Vitest + Testing Library + Playwright config; one smoke unit test
  - Run `tsc`, `eslint`, `vitest run` and record results
  - _Requirements: 18.1, 18.4_

## Phase 2 — Premium Homepage

- [x] 7. Hero + systems visualization
  - `Hero` section with eyebrow/headline/copy/CTAs/supporting line
  - `SystemsDiagram` original SVG, CSS animation, reduced-motion static, `role="img"` labeling
  - _Requirements: 3.2, 3.3, 3.4, 9.6, 12.5_

- [x] 8. Problem, Services overview, Who-we-help
  - `ProblemSection` (3–4 cards), `ServicesOverview` (6 cards + original SVG icons + links), `WhoWeHelp` (3 audiences)
  - _Requirements: 3.5, 6.2, 1.2_

- [x] 9. Interactive workflow demonstration
  - `ScenarioExplorer` tablist with 3 scenarios, "Interactive Example" label, illustrative data, keyboard + reduced-motion
  - _Requirements: 4.1, 4.2, 4.6_

- [x] 10. Process, Why Us, Portfolio preview, FAQ, Final CTA
  - `ProcessTimeline`, `WhyUs`, `PortfolioPreview` (labeled Concept/Internal Demo only), `FAQAccordion`, `FinalCTA` (booking→/contact fallback)
  - _Requirements: 3.1, 3.6, 3.7, 1.5, 20.1, 20.2_

- [ ] 11. **[founder-run]** Homepage responsive QA
  - Screenshots at 375/768/1440/1920; fix wrap/spacing/alignment/overflow issues
  - _Requirements: 11.3, 17.2, 18.4_

## Phase 3 — Business Pages

- [x] 12. Services overview + detail template
  - `/services` grid; `/services/[slug]` template with all specified sections, benefit-first ordering, tech notes in `Disclosure`
  - Distinct content per service; AI-engineering page stronger terminology; agent oversight language
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

- [x] 13. Solutions overview + detail pages
  - `/solutions` and three problem-oriented detail pages linking to services
  - _Requirements: 6.1, 6.2_

- [x] 14. About page
  - Founder cards (Shay full profile; Faisal "To be confirmed"), typographic portraits, mission/philosophy/values, no team inflation
  - _Requirements: 7.1–7.5, 20.1_

- [x] 15. Work/portfolio page
  - Labeled Concept/Internal Demo cards; coming-soon states; case-study structure prepared but not fabricated
  - _Requirements: 3.6, 20.1, 20.2_

- [x] 16. Interactive estimator + recommendation quiz
  - `OpportunityEstimator` (pure calc + disclaimer) and `RecommendationQuiz` (fixed rules), placed on relevant pages
  - _Requirements: 4.3, 4.4, 4.5, 4.6_

## Phase 4 — Lead Capture

- [x] 17. Contact page + form
  - `ContactForm` (RHF+Zod), required/optional fields, help/budget options, privacy acknowledgment, honeypot, accessible errors, loading/success/error states
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 12.3_

- [x] 18. Contact API + provider layer
  - `/api/contact` server validation, sanitization, honeypot handling, in-memory rate limit, provider-neutral dispatch, not-configured handling, no PII logging
  - `ConfigStatusBanner` (dev/founder-only) for unconfigured provider
  - _Requirements: 8.5, 8.6, 8.7, 8.8, 8.9, 13.1, 13.2, 13.4_

- [ ] 19. **[founder-run]** Lead capture E2E
  - Playwright: invalid rejected, success on mocked-OK, error on mocked-fail; verify no false success
  - _Requirements: 18.3, 8.7_

## Phase 5 — Quality and Discoverability

- [x] 20. SEO + structured data + 404
  - Per-page metadata, canonical/OG/Twitter, JSON-LD (real fields only), `not-found.tsx`, security headers in `next.config.ts`
  - _Requirements: 10.1–10.5, 13.3, 17.1_

- [x] 21. Privacy + Terms drafts + analytics seam
  - Editable drafts marked for legal review; `lib/analytics/events.ts` no-op-until-configured
  - _Requirements: 13.5, 16.1, 16.2_

- [ ] 22. **[founder-run]** Accessibility, performance, internal-link audit
  - axe scans, Lighthouse, link crawl; fix regressions
  - _Requirements: 11.1, 11.2, 12.x, 17.2, 18.3_

## Phase 6 — Deployment Readiness

- [x] 23. Documentation
  - README.md, ARCHITECTURE.md, CONTENT_GUIDE.md, LAUNCH_CHECKLIST.md
  - _Requirements: 19.1_

- [ ] 24. **[founder-run]** Final validation + deployment config
  - Run full gate (tsc, lint, unit, e2e, build, Lighthouse); record results; verify deploy + rollback docs; founder acceptance
  - _Requirements: 18.4, 19.3, 19.4_

---

### Status legend
- `[x]` implemented in repo (code written)
- `[ ]` **[founder-run]** requires a Node environment to execute/verify — not yet run

### Verification status (as of initial build)
Node.js, npm, and the Xcode Command Line Tools (needed for git) are not installed on the
build machine, and an attempt to fetch a portable Node runtime for self-verification did not
succeed in this environment. Therefore NO build, typecheck, lint, or test has been executed yet.
All `[x]` items reflect code written and reviewed by hand, not verified by a compiler or test run.
The first action in a Node environment should be: `npm install` → `npm run typecheck` →
`npm run lint` → `npm run test:run` → `npm run build` → `npm run test:e2e`, fixing anything that
surfaces. See LAUNCH_CHECKLIST.md section 0 and 8.
