# Design — Ultron Core Website

## Overview

A statically-rendered Next.js (App Router) marketing site with a single server endpoint for contact submissions. Content and business configuration are decoupled from presentation so two founders can maintain the site. The design optimizes for credibility, performance, accessibility, and honesty.

### Design goals

1. **Fast & static-first.** Marketing pages render statically; only the contact submission uses a server route. Client JS is minimized and interactive widgets are isolated and lazy-loaded.
2. **Content-driven.** Every service, solution, FAQ, project, and founder profile comes from typed content modules. Pages are templates, not bespoke per-route copies.
3. **Single source of truth.** All business details, links, and SEO defaults live in `src/config/site.ts`.
4. **Honest by construction.** Placeholders are typed and centrally gated; incomplete optional content is hidden, not stubbed with visible placeholder tokens.
5. **Accessible & reduced-motion aware** at the component level, not bolted on.

### Research notes (stack versions, Oct 2026)

- Next.js 16 is the current stable line (App Router default, React 19, Turbopack stable). We target Next.js 16 + React 19.
- Tailwind CSS v4 (CSS-first config via `@theme`) is current. We use v4 with design tokens defined in CSS and mirrored as TS tokens for programmatic use.
- Zod v4 for validation, React Hook Form for the contact form, Vitest + Testing Library for unit/component tests, Playwright for E2E, Lucide for icons.
- Versions are pinned in `package.json`; `npm install` resolves compatible patches. Because Node.js is not installed on the current machine, install/build/test are deferred to the founder environment (documented in README and the tasks plan).

---

## Architecture

### Rendering strategy

| Route group | Rendering | Notes |
|---|---|---|
| `/`, `/services/*`, `/solutions/*`, `/work`, `/about`, `/privacy`, `/terms` | Static (SSG) | Pure content + client islands for interactivity |
| `/contact` | Static shell + client form | Form posts to API route |
| `/api/contact` | Server (Node runtime) | Validation, honeypot, rate limit, provider dispatch |
| `sitemap.xml`, `robots.txt`, `manifest` | Generated via Next metadata routes | |

Interactive widgets (hero visualization, scenario explorer, estimator, recommendation quiz, FAQ accordion, mobile menu, contact form) are **client components** kept small and, where noncritical, dynamically imported with `ssr: true` and a static fallback.

### Folder structure

```
src/
  app/
    layout.tsx                 # root layout: fonts, metadata, skip link, Navbar, Footer
    page.tsx                   # homepage
    globals.css                # Tailwind v4 + tokens + base styles
    not-found.tsx              # 404
    sitemap.ts                 # sitemap.xml
    robots.ts                  # robots.txt
    manifest.ts                # web manifest
    opengraph-image.tsx        # social preview image (generated)
    services/
      page.tsx                 # services overview
      [slug]/page.tsx          # service detail template (generateStaticParams)
    solutions/
      page.tsx
      [slug]/page.tsx
    work/page.tsx
    about/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
    api/
      contact/route.ts         # POST handler
  components/
    layout/   Navbar, MobileMenu, Footer, Container, Section, SectionHeading, Breadcrumbs, SkipLink
    ui/       Button, Card, Badge, InputField, SelectField, TextareaField, StatusMessage, Disclosure
    home/     Hero, ProblemSection, ServicesOverview, WhoWeHelp, ProcessSection, WhyUs, PortfolioPreview, HomeFAQ, FinalCTA
    services/ ServiceHero, ServiceCapabilities, ServiceScenarios, ServiceIncludes, ServiceTechNotes, RelatedServices
    contact/  ContactForm, LeadCTA, ConfigStatusBanner
    interactive/ SystemsDiagram, ScenarioExplorer, OpportunityEstimator, RecommendationQuiz, FAQAccordion, ProcessTimeline
    icons/    original SVG service icons
  content/
    company.ts, services.ts, solutions.ts, projects.ts, faqs.ts, process.ts, audiences.ts, differentiators.ts
  lib/
    validation/contact.ts      # Zod schema (shared client+server)
    email/provider.ts          # provider-neutral dispatch + config detection
    email/console-provider.ts  # dev provider (logs metadata only, never message body)
    seo/metadata.ts            # buildMetadata() helper + JSON-LD builders
    analytics/events.ts        # typed event names + no-op-until-configured emitter
    utils/cn.ts, utils/format.ts
  config/
    site.ts                    # single source of truth
  types/
    index.ts
```

### Decoupling content from presentation

- `content/*.ts` export typed data (`Service`, `Solution`, `Project`, `Faq`, `Founder`, `ProcessStep`, `Audience`). Pages import data and feed templates.
- `config/site.ts` holds `siteConfig` (name, tagline, urls, contact, social, booking, SEO defaults, feature flags). Fields that are not yet known are typed as `string | null`; the UI hides anything null (e.g., phone, address, LinkedIn).

---

## Components and interfaces

### Design tokens

Defined once in `globals.css` via Tailwind v4 `@theme` and mirrored in `src/config/site.ts`-adjacent `tokens` only where JS needs them (e.g., diagram colors).

```
--color-bg: #070B14;
--color-bg-2: #0D1423;
--color-surface: #121D30;
--color-text: #F8FAFC;
--color-text-dim: #A9B7CB;
--color-cyan: #38BDF8;
--color-violet: #8B5CF6;
--color-mint: #2DD4BF;
--color-border: rgba(169,183,203,0.12);
--radius: 14px;
--container: 1200px;
font-sans: Inter; font-display: Space Grotesk;
```

Type scale (clamped, fluid): display, h1, h2, h3, body-lg, body, small. Spacing on a 4px base. Focus ring: 2px cyan outline + offset, always visible.

### Key component contracts

- `Button` — variants `primary | secondary | ghost | link`; renders `<a>` when `href` present, else `<button>`; never a clickable div. Includes focus-visible ring and disabled state.
- `Section` + `Container` + `SectionHeading` — enforce max-width, vertical rhythm, eyebrow/title/subtitle structure.
- `Card` / `ServiceCard` / `ProjectCard` / `FounderCard` / `MetricCard` — consistent surface, border, hover elevation (subtle), keyboard-focusable when linked.
- `InputField` / `SelectField` / `TextareaField` — label + input association, `aria-invalid`, `aria-describedby` to error, error text with `role="alert"`.
- `FAQAccordion` — `<button aria-expanded>` controlling a region; arrow/Home/End key support; one or many open.
- `SystemsDiagram` (hero) — pure SVG, nodes positioned deterministically; animation via CSS only (`@media (prefers-reduced-motion: reduce)` freezes it); `role="img"` + `<title>`/`<desc>`.
- `ScenarioExplorer` — tablist (`role="tablist"`/`tab`/`tabpanel`) switching scenarios; labeled "Interactive Example"; data from content only.
- `OpportunityEstimator` — controlled inputs; pure calculation function in `lib/utils/estimate.ts` (unit-tested); live-region output; disclaimer always visible.
- `RecommendationQuiz` — single-question selector mapping answer → service slug via a fixed rule table in content; links to that service; no storage.
- `ContactForm` — React Hook Form + Zod resolver; honeypot field visually hidden and `aria-hidden`; submit disabled while pending; `StatusMessage` for success/error; never shows success unless the API returns success.

### Contact API design

```
POST /api/contact
Body: validated by shared Zod schema (name, email, company, category, description, consent, + optionals, + honeypot)
Flow:
  1. Parse + Zod validate -> 400 with field errors on failure
  2. Honeypot non-empty -> 200 fake-OK (silently drop) to not tip off bots
  3. Rate limit by IP (in-memory token bucket; swappable for KV/Upstash) -> 429 on exceed
  4. If provider not configured -> 503 with code "not_configured" (surfaced to founders only via ConfigStatusBanner in non-production; public users see a generic "temporarily unavailable" message)
  5. Dispatch via provider.send() (email/Resend-style, env-driven)
  6. On confirmed delivery -> 200 { ok: true }; else 502
Never logs message body or PII; logs only event + status + request id.
```

Provider abstraction:

```ts
interface LeadProvider {
  isConfigured(): boolean;
  send(lead: SanitizedLead): Promise<{ ok: true } | { ok: false; error: string }>;
}
```

Default export chooses the real provider when env vars exist, otherwise the console/dev provider. CRM/webhook/scheduling are declared as TODO integration seams, not implemented.

### SEO/metadata

`buildMetadata({ title, description, path, image? })` returns a Next `Metadata` object with canonical, OG, Twitter. JSON-LD builders produce `ProfessionalService` using only non-null real fields from `siteConfig` (omit address/phone/ratings entirely if absent). Per-page metadata exported from each route.

### Internationalization seam

Copy is centralized in content modules. A thin `t()`/locale layer is not added yet, but content modules are shaped so a `locale` key can wrap them later, and `layout.tsx` sets `lang="en"` / `dir="ltr"` from a single place so RTL can be toggled later.

---

## Data models

```ts
type Service = {
  slug: string; title: string; nav: string; eyebrow: string;
  summary: string; problem: string;
  capabilities: { title: string; body: string }[];
  scenarios: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  includes: string[];
  techNotes: string[];        // shown in secondary/expandable area
  related: string[];          // service slugs
  faqs: Faq[];
  cta: string;                // button label
  audience?: "smb" | "engineering" | "enterprise";
  icon: IconName;
};

type Solution = { slug; title; nav; summary; problems: string[]; items: {title;body}[]; relatedServices: string[]; faqs: Faq[] };
type Project  = { title; kind: "Concept" | "Internal Demo" | "Client Project"; summary; stack: string[]; status: "live" | "coming-soon"; };
type Faq      = { q: string; a: string };
type Founder  = { name; title; bio: string | null; linkedin: string | null; portrait: string | null };
type SiteConfig = {
  name; wordmark; tagline; taglineSecondary; description;
  url; contactEmail: string | null; phone: string | null; address: string | null;
  social: { linkedin: string | null };
  bookingUrl: string | null;
  seo: { defaultTitle; titleTemplate; defaultDescription; ogImage };
  flags: { analyticsEnabled: boolean; bookingEnabled: boolean };
};
```

Honesty gating: any `null` field is simply not rendered (phone, address, LinkedIn, booking → falls back to `/contact`). Projects with `status: "coming-soon"` render a coming-soon card or are omitted.

---

## Error handling

- **Form validation:** dual (client via RHF+Zod for UX, server via same Zod schema for safety). Field errors mapped to inputs; summary `role="alert"`.
- **API failures:** typed JSON `{ ok: false, code, message }`; client maps codes to friendly `StatusMessage`; network error caught and shown without claiming success.
- **Not configured:** `503 not_configured`; public sees generic unavailable + email fallback (if `contactEmail` set); founders see `ConfigStatusBanner` in dev.
- **404:** custom `not-found.tsx` with nav back to key routes.
- **Reduced function / JS disabled:** static content and the SVG hero render fully; the form degrades to showing the contact email (when configured) with a note.

---

## Testing strategy

- **Unit (Vitest):** `estimate()` arithmetic, recommendation rule mapping, contact Zod schema (valid/invalid/honeypot), `buildMetadata`, `cn`/format utils, provider config detection.
- **Component (Vitest + Testing Library + jsdom):** Navbar/MobileMenu open/close + focus trap, FAQAccordion keyboard behavior, ContactForm validation + success/error rendering (mocked fetch), ScenarioExplorer tab switching, Button semantics (renders anchor vs button).
- **E2E (Playwright):** homepage loads and key sections visible; all nav links resolve 200; each service page renders its title; contact form rejects invalid input and shows success on mocked-OK and error on mocked-fail; mobile menu toggles; crawl internal links for 404s; axe accessibility scan on home + one service + contact.
- **Manual/visual:** screenshots at 375 / 768 / 1440 / 1920; check heading wrap, spacing, card alignment, footer, mobile nav, contrast.
- **Final gate:** `tsc --noEmit`, `eslint`, `vitest run`, `playwright test`, `next build`, Lighthouse. Report real results; mark anything unrun.

### Verification constraint (current environment)

Node.js/npm are not installed on the build machine. All install/build/test steps are authored and documented but can only be executed in a Node environment. The tasks plan marks these as founder-run steps, and no test will be reported as passed unless actually executed.

---

## Decisions requiring founder input

1. **Business contact details:** real destination email, phone (optional), physical/legal address (optional), LinkedIn URL. Until provided, these stay hidden.
2. **Lead delivery provider:** which email service (e.g., Resend/SMTP) and the verified sender/destination; or a form service. Needed before the form is production-ready.
3. **Booking tool:** confirmed Calendly (or similar) URL; until then "Book a Free Intro Call" routes to `/contact`.
4. **Analytics:** whether to enable a privacy-conscious analytics tool and consent requirements.
5. **Founder 2 (Faisal):** surname, title, bio, LinkedIn, portrait.
6. **Legal:** Privacy/Terms review by the founders/legal before publication; confirm Israeli + international data-protection obligations.
7. **Brand/domain:** confirm domain availability, company-name availability, and trademark clearance before public release.
8. **Portraits/brand assets:** founder photos or approval to use typographic profiles; final logo treatment.
