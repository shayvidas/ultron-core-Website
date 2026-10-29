# Ultron Core Website

Marketing website for **Ultron Core** — a founder-led AI automation and software engineering consultancy. Built to generate qualified consultation inquiries.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first tokens)
- **Zod** validation + **React Hook Form** (contact form)
- **Lucide** icons; original SVGs for the brand mark, service icons, and hero diagram
- **Vitest** + Testing Library (unit/component), **Playwright** (E2E)
- **ESLint** + **Prettier**

Marketing pages are statically rendered. The only server code is `POST /api/contact`.

## Prerequisites

> **This machine does not currently have Node.js installed.** Install it before running anything below.

- **Node.js ≥ 20.9** and npm. On macOS the simplest path is [Homebrew](https://brew.sh): `brew install node`, or use [nvm](https://github.com/nvm-sh/nvm).
- **Git** requires the Xcode Command Line Tools on macOS: `xcode-select --install`.

## Setup

```bash
npm install
cp .env.example .env.local   # then fill in values
```

## Local development

```bash
npm run dev        # start the dev server at http://localhost:3000
```

Run the dev server in your own terminal (it is long-running).

## Environment configuration

See `.env.example` for the full list. Key variables:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL (no trailing slash) |
| `LEAD_PROVIDER` | `console` (dev; nothing delivered) or `email` |
| `LEAD_EMAIL_API_KEY` / `LEAD_EMAIL_FROM` / `LEAD_EMAIL_TO` | Required when `LEAD_PROVIDER=email` |
| `NEXT_PUBLIC_BOOKING_URL` | Confirmed booking URL; blank → CTAs route to `/contact` |
| `NEXT_PUBLIC_ANALYTICS_DOMAIN` | Blank → analytics disabled |

**The contact form is not production-ready until a lead provider is configured.** Until then the API returns `503 not_configured` and a developer-only banner explains how to enable it.

## Scripts

```bash
npm run typecheck    # tsc --noEmit
npm run lint         # next lint
npm run format       # prettier --write .
npm run test         # vitest (watch)
npm run test:run     # vitest run (CI)
npm run test:e2e     # playwright test (builds + starts the app)
npm run build        # production build
npm run start        # serve the production build
```

For Playwright, install browsers once: `npx playwright install`.

## Deployment

Optimized for Vercel (Git-based). See `LAUNCH_CHECKLIST.md` for the full pre-launch process and `ARCHITECTURE.md` for how the app is structured. Do not connect real customer services or publish without founder authorization.

## Honesty note

Ultron Core is a new company. This site intentionally contains **no** fabricated clients, testimonials, metrics, logos, or credentials. Demonstrations are clearly labeled. Keep it that way — see `.kiro/steering/product.md`.
