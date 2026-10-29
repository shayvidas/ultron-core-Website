# Ultron Core — Product & Brand Steering

## What this is
The public marketing website for **Ultron Core**, a founder-led AI automation and software engineering consultancy (Israel, serving clients internationally). Primary goal: generate qualified consultation inquiries.

## Brand
- Always use the full name **Ultron Core**; wordmark reads **ULTRON CORE**.
- Original visual identity only. Never use Marvel/Avengers/Iron Man/Ultron-film imagery or trademark-like designs.
- Personality: professional but approachable, confident not arrogant, technically sophisticated but understandable, premium visual execution, accessible service.
- Taglines: primary "AI That Works for Your Business."; secondary "From AI Potential to Real Business Results."

## Voice
- Clear, natural English. Specific over generic. No hype words: "revolutionary", "disruptive", "game-changing", "unlock limitless potential", "transform your future".
- Lead with the business problem and outcome; put deep technical detail in secondary/expandable sections (except AI-engineering pages, which may use stronger engineering terminology for CTO/EM readers).

## HONESTY RULES (hard constraints — never violate)
Ultron Core is a new business. Do **not** fabricate any of:
clients, testimonials, revenue, project counts, team size, certifications, partnerships, case-study outcomes, years of operation, customer logos, awards, performance/ROI guarantees, office locations, founder credentials.
- Demonstrations must be labeled **Concept**, **Internal Demo**, or **Client Project** — and only "Client Project" when one genuinely exists.
- Never imply a demo is a customer implementation.
- Never claim a vendor partnership/certification unless verified.
- Never claim a feature works unless it is implemented and tested.
- Never expose raw placeholders (e.g. `[YOUR EMAIL HERE]`) in production — hide/omit unconfigured optional content instead.

## Founders
- Shay Vidas — Co-Founder & Technical Lead (bio provided in content). Do not claim delivered Ultron Core customer projects.
- Faisal — title "To be confirmed", bio pending. Do not invent surname, experience, or certifications.

## Services (8)
ai-agents, business-automation, ai-engineering (flagship), integrations, web-development, custom-software, ai-consulting, ai-rescue. Web development is a secondary (clearly discoverable) service — don't let it dominate the homepage.

## Decisions that need founder input before enabling
Real contact email, lead-delivery provider, booking URL, analytics + consent, Faisal's details, privacy/terms legal review, domain/trademark clearance, founder portraits.

## Visual identity (CURRENT — supersedes the original cyan/violet spec)
Red/black/white/charcoal. Primary accent red `#E53935` (bright `#FF5A4D`, deep `#B91C1C`); graphite base `#121418`/`#181B21`; surface `#1E222A`; text `#F6F7F9`/dim `#AEB4C0`. Red is a focused accent (CTAs, highlights, logo core, section rules), NOT a full-bleed fill — keep it premium/engineering, not alarming. Logo: angular "U" + "C" ring with a red circuit-node core; wordmark "Ultron" (text) + "Core" (red) via `components/layout/Logo.tsx`. Raster reference at `public/brand/ultron-core-logo.png`. The old cyan/violet palette is retired (var aliases still resolve to red for safety).

## Founders (order + roles)
Faisal Islam — Co-Founder & Head of Business Operations — listed FIRST (the face/business). Shay Albert Vidas — Co-Founder & Head of Engineering — second. Equal visual weight; typographic avatars until photos supplied. Data in `src/content/company.ts`.

## Founder experience vs. clients (HARD RULE)
Amwell, Avizia, Radwin, Intersections Inc., Gannett/USA Today, Mars Interactive, Ananey Communications, TG-17 are PRIOR EMPLOYERS of the founders. Present them ONLY as founder career experience ("our founders led AI and engineering work at…"), NEVER as Ultron Core clients or customers, and never with fabricated job titles that contradict public profiles. Do not reproduce their trademarked logos — text treatments only. Lives in `experienceCompanies` in `src/content/company.ts`; the section renders via `components/home/ExperienceSection.tsx` on Home and About with a disclaimer.

## Pricing
Public pricing is USD, introductory estimates, no FX conversion, no checkout (contact to discuss). Single source: `src/content/pricing.ts`. Page `/pricing`, linked from the Services dropdown, footer, and homepage. Always show the disclaimer; no fake discounts, countdowns, or crossed-out prices. "Limited Founding Client Offer" on the website starter is a genuine, clearly-labeled offer.

## Environment note (resolved)
Node is installed via nvm at `~/.nvm/versions/node/v26.13.0/bin`. The agent shell must prepend that to PATH to run npm. Stack now pinned to working versions: Next 16.4.3, Tailwind 4.1.14, Playwright 1.56, ESLint flat config via `eslint-config-next/core-web-vitals` + `/typescript`. `lint` script is `eslint .` (not `next lint`, removed in Next 16).
