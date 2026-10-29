# Content Guide

How to edit the site without touching UI code. All content lives in `src/content/` and `src/config/site.ts`.

> **Golden rule:** Ultron Core is a new company. Never add fabricated clients, testimonials, metrics, logos, certifications, partnerships, or credentials. Keep demonstrations labeled honestly.

## Business details, links, SEO defaults → `src/config/site.ts`

This is the single source of truth. Edit fields here and they update everywhere.

- `contactEmail`, `phone`, `address`, `social.linkedin` — leave as `null` until confirmed. **A `null` field is hidden on the site**, so never write a placeholder like `"email@example.com"`.
- `bookingUrl` — set a confirmed Calendly (or similar) URL to make "Book a Free Intro Call" use it. While `null`, the CTA routes to `/contact`.
- `seo.*` — default title, title template, description, OG image.
- Taglines, description, wordmark.

## Services → `src/content/services.ts`

Each service is one object in the `services` array (type `Service`). To edit a service, change its fields:

- `title`, `nav`, `eyebrow`, `summary`, `cardDescription`, `problem`
- `capabilities`, `scenarios`, `process`, `includes`, `techNotes` (arrays)
- `faqs`, `related` (slugs of related services), `cta`

The service page (`/services/<slug>`), the services grid, nav dropdown, footer, and sitemap all read from here. The six homepage cards are controlled by `homepageServiceSlugs`.

**To add a service:** append a new object with a unique `slug` and an `icon` from the `IconName` set, then (optionally) add a matching icon path in `src/components/icons/ServiceIcon.tsx`.

## Solutions → `src/content/solutions.ts`

Same pattern as services (type `Solution`): `problems`, `items`, `relatedServices`, `faqs`. Pages render at `/solutions/<slug>`.

## FAQs

- Homepage FAQ → `src/content/faqs.ts` (`homeFaqs`).
- Service/solution FAQs → the `faqs` array on each entry in `services.ts` / `solutions.ts`.

## Portfolio / Our Work → `src/content/projects.ts`

Each project needs a `kind`: `"Concept"`, `"Internal Demo"`, or `"Client Project"`. Use `"Client Project"` **only** when a real, client-approved project exists. `status: "coming-soon"` renders a coming-soon state. Add a real case study only with the client's approval and verified metrics.

## Founders → `src/content/company.ts`

Edit `founders`, `mission`, `philosophy`, `values`.

- `bio: null` renders a "coming soon" note — don't invent a bio.
- `portrait: null` renders a branded initials avatar — don't use a fake photo. To add a photo, place it in `public/` and set `portrait: "/founders/name.jpg"`.
- `linkedin: null` hides the link.

## Homepage copy

Section wording lives in `src/content/` where it's data (process steps, problem cards, differentiators, audiences, workflow scenarios). Headline/intro strings that are one-offs live in the relevant `src/components/home/*` section — look for the matching component.

## CTAs

The reusable `LeadCTA` component takes optional `heading`/`text`. The primary button always follows `bookingUrl` → `/contact` logic from `site.ts`.

## Metadata per page

Each route exports `metadata` built with `buildMetadata({ title, description, path })`. Edit those calls to change a page's title/description.
