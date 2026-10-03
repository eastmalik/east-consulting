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
- Keep one contact email (`support@eastconsultingllc.com`) and one phone
  number (`(678) 325-4094`) across the whole site.
- Do not use the word "revenue" in site copy; the owner prefers "capital".
- Keep the repository public (free GitHub Pages requires it).
- A2P texting compliance: never add credit repair, credit building,
  tradeline, credit bureau/monitoring, debt relief or lending content. The
  business does not offer these (A2P was rejected with 30950 for it).
- The GoHighLevel chat widget in `client/index.html` is the site's only SMS
  opt-in. Don't add other forms that collect phone numbers, and keep the
  Contact page and Terms & Conditions consent wording matching the widget.
- 7Band family (Sales Tree Coherence Audit, Oct 2026): East Consulting covers
  Levels 2–3 of THE FLOW map (The Business Firewall, Capital Readiness). The
  family footer lives in `Footer.tsx`; the Arise Credit Pro entry is left out
  pending the owner's decision because of the A2P credit-repair rejection.
  Main next step is booking a consultation; the secondary CTA is "See the
  whole map: join THE FLOW". No pricing; ask the owner before adding the
  $2,997 Capital Architecture Program.
- Never advise changing Hostinger email DNS records (MX, hostingermail,
  autodiscover, autoconfig, DKIM, SPF, DMARC).
