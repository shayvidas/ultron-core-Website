# Architecture

## Rendering strategy

Static-first. All marketing routes (`/`, `/services/*`, `/solutions/*`, `/work`, `/about`, `/privacy`, `/terms`) are statically rendered. Service and solution detail pages use `generateStaticParams`, so every page is pre-rendered at build time. The only server-side code is the contact API route (`src/app/api/contact/route.ts`, Node runtime).

Interactivity lives in small client-component "islands" (`"use client"`): the navbar/mobile menu, hero diagram animation (CSS only), scenario explorer, estimator, recommendation quiz, FAQ accordion, and contact form. Everything else is a server component.

## Folder organization

```
src/
  app/            Routes. layout.tsx, page.tsx, route segments, api/contact,
                  sitemap.ts, robots.ts, manifest.ts, icon.tsx, opengraph-image.tsx, not-found.tsx
  components/
    layout/       Navbar, MobileMenu, Footer, Container, Section, SectionHeading,
                  Breadcrumbs, SkipLink, Logo
    ui/           Button, Card, Badge, Input/Select/TextareaField, StatusMessage,
                  Disclosure, ProjectCard, FounderCard
    home/         Homepage sections
    services/     (service detail is composed inline from ui + interactive)
    contact/      ContactForm, LeadCTA, ConfigStatusBanner
    interactive/  SystemsDiagram, ScenarioExplorer, OpportunityEstimator,
                  RecommendationQuiz, FAQAccordion, ProcessTimeline
    icons/        ServiceIcon (original SVGs)
  content/        Typed data: services, solutions, projects, faqs, process,
                  audiences, differentiators, workflows, company (founders)
  lib/
    validation/   contact.ts — Zod schema shared by client + server
    email/        provider.ts — provider-neutral lead dispatch (+ dev console provider)
    seo/          metadata.ts — buildMetadata() + JSON-LD builders
    analytics/    events.ts — typed events, no-op until configured
    utils/        cn, estimate, recommend, rate-limit
  config/site.ts  Single source of truth for business config
  types/index.ts  Shared types
```

## Content/config decoupling

Business content never lives in components. Pages import typed data from `src/content/*` and business/config from `src/config/site.ts`. Adding a service or solution means adding an entry to the content array — the `[slug]` templates and sitemap pick it up automatically. Any `null` field in `siteConfig` (phone, address, LinkedIn, booking) is hidden by the UI rather than rendered as a placeholder.

## Contact form architecture

1. **Client** (`ContactForm.tsx`): React Hook Form + Zod resolver. Validates on blur, shows field-level and summary errors, disables submit while pending, and shows success **only** when the server returns `{ ok: true }`.
2. **Transport**: `POST /api/contact` with JSON.
3. **Server** (`route.ts`): JSON parse → Zod validate (400 + fieldErrors) → honeypot (filled → benign 200, dropped) → IP rate limit (429) → provider config check (503 `not_configured`) → sanitize free text → `provider.send()` → `200 { ok:true }` only on confirmed delivery, else `502`.
4. **Provider** (`lib/email/provider.ts`): `LeadProvider` interface. `ConsoleProvider` (dev, logs metadata only, `isConfigured()=false`) or `EmailProvider` (Resend-compatible HTTP, enabled by env). Future CRM/webhook/sheet providers implement the same interface.

No PII is written to logs. No secrets reach the client (the provider runs server-side only).

## SEO

`buildMetadata()` produces per-page title/description/canonical/OG/Twitter. `organizationJsonLd()` emits `ProfessionalService` using only non-null real fields (no fabricated address or ratings). `sitemap.ts` and `robots.ts` are generated; the favicon and OG image are generated via Next image routes.

## Security boundaries

- Security headers (CSP, HSTS, X-Frame-Options, etc.) set in `next.config.ts`.
- Secrets in environment variables only; the email provider is server-only.
- Server-side validation + sanitization + honeypot + best-effort rate limiting on the contact endpoint.
- Analytics never receives form field values.

## Internationalization seam

Copy is centralized in `content/*`, and `layout.tsx` sets `lang`/`dir` in one place. Hebrew/RTL can be layered on later without restructuring. No visible language switch ships until a second language has usable content.

## Known constraints

- The in-memory rate limiter is per-instance. For serverless/multi-instance, replace it with a shared store (e.g. Upstash Redis) behind the same `rateLimit` signature.
