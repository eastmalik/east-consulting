# East Consulting LLC website — working notes for Claude

Live site: https://www.eastconsultingllc.com (GitHub Pages, deployed from `main`).
See README.md for the stack, deploy workflow and DNS.

## Owner's standing instructions

- **Merge your own edits.** For every change the owner asks for: make it,
  verify it, open a PR, and merge it yourself without asking. Then confirm
  the deploy run on `main` went green and tell the owner it's live.
- The owner is not a developer: explain things in plain language, no jargon.

## Before merging any change

- `pnpm check` and `pnpm build` must pass.
- Look at the affected pages in a browser at desktop and phone width
  (no JavaScript errors, no sideways scroll on phones).

## Rules

- Every image or file the site shows lives in `client/public/manus-storage/`
  (historical folder name). Never link to images hosted on another platform.
- Keep one contact email (`support@eastconsultingllc.com`), one phone number
  (`(678) 325-4094`) and one address (850 N. Jefferson Street, Jackson, MS
  39202). They live in `client/src/lib/site.ts`, along with the booking link.
- Keep the repository public (free GitHub Pages requires it).
- Never advise changing Hostinger email DNS records (MX, hostingermail,
  autodiscover, autoconfig, DKIM, SPF, DMARC).

## Current site (rebuilt November 2026)

- Simple site about business formation only. Pages: Home, What We Do
  (`/what-we-do`; `/about` redirects there), and "Coming soon" placeholders
  for Resources, Privacy Policy, Terms of Service and Terms & Conditions.
  `/contact` redirects to Home.
- The two services (Business Entity Formation, Professional Business Setup)
  are in `client/src/components/ServiceCards.tsx`, worded exactly as the
  owner wrote them.
- Content must stay business formation only: no credit, funding, capital,
  lending, tax or insurance content.
- No chat widget and no 7Band family footer for now; the owner may add the
  chat widget back later (it would be the site's only SMS opt-in).
- Look: same navy & amber style, logo and browser-tab icon.
