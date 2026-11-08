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
  39202). They live in `client/src/lib/site.ts`, along with the booking
  form and calendar links.
- Keep the repository public (free GitHub Pages requires it).
- Never advise changing Hostinger email DNS records (MX, hostingermail,
  autodiscover, autoconfig, DKIM, SPF, DMARC).

## Current site (rebuilt November 2026)

- Home page layout copies the owner's GoHighLevel home page
  (sites.leadconnectorhq.com/preview/PPY90ndMBUWGYtQjRfIm), in navy & white,
  no photos: white menu bar (Home, About, Services + "Book a
  Consultation"), navy hero, white industries list ("We work with businesses
  in every industry"), navy booking band, navy footer (Quick Links, Contact
  Us, Legal). Fonts: Darker Grotesque (headings) and Manrope (body).
- Wording (all pages) puts the customer first, following the structure of
  the owner's Arise Credit Pro site (owner's choice; structure only, never
  its credit content): the customer's goal ("You bring the vision. We help
  you build it right."), "Does this sound like you?" pain-point cards, a
  "you're not alone" quote, "Your path, in three steps", then book a
  consultation. Write new copy the same way: "you" first, plain words. Don't
  call the consultation free unless the owner says it is.
- Its template wording was adjusted to the rules below: "coaching" became
  "business formation", "Financial Services" was dropped from the industry
  list, and "higher revenue" became "Better business, built right, from day
  one." The GHL page's phone (678) 775-9800 is wrong; keep (678) 325-4094.
  Its social icons point at generic facebook.com/instagram.com/youtube.com,
  so they are left out until the owner sends real profile links.
- GoHighLevel is the template for every page. Services (`/what-we-do`)
  follows the GHL Services page
  (sites.leadconnectorhq.com/preview/Ap8jXaAv93B4dUnROPOs): "Our Services"
  intro, then numbered rows (1., 2., 3.) for the owner's real services
  only (never the template's eight sample services), then the shared booking
  band. The services live in `client/src/lib/services.ts` (1/2 worded
  exactly as the owner wrote them); the band is
  `client/src/components/BookingBand.tsx`.
- 3. Business Automation Setup (added Nov 2026): the GoHighLevel automation
  system from the owner's Miro board "THE FLOW" (booking form & calendar,
  pipelines, automated email workflows, reminders & no-show follow-up), set up
  for other entrepreneurs. The owner took the $500 price and the "set up in
  1 week" line off the site: don't show prices or timelines unless the owner
  asks. Don't add claims about competitors' prices.
- Planned, not yet on the site: a $19.99 guide (the owner's "map to the
  business service puzzle"). Needs its name and a payment link (e.g. a
  GoHighLevel order form) from the owner before it goes up.
- Book a Consultation (`/book`) follows the GHL booking page
  (sites.leadconnectorhq.com/preview/CG8gYc0iFxmcTJb3T4KN): a white card with
  the owner's GoHighLevel form (ID tDLheLWGJli1VwLbzgLi, embedded with GHL's
  iframe code + form_embed.js). After the form, GoHighLevel sends people to
  the calendar (malik-east-personal-calendar-70ch6hbpr); a link to the
  calendar sits under the form. Every "Book a Consultation" button on the site
  goes to `/book` (BOOK_PATH in `client/src/lib/site.ts`).
- The owner is doing texting (A2P 10DLC). The booking form is the site's
  ONLY SMS opt-in: an optional, unticked consent checkbox set up inside
  GoHighLevel. Don't add a second opt-in (e.g. the chat widget) on top of it
  ("double opt-in" gets A2P rejected). If the opt-in changes, update the
  Privacy Policy and Terms & Conditions to match.
- Privacy Policy (`/privacy-policy`) and Terms & Conditions
  (`/terms-and-conditions`) use the section format of
  betdavidconsulting.com/privacy.html (owner's choice) with East Consulting's
  real facts, plus the SMS language A2P requires: the Privacy Policy keeps
  GoHighLevel's exact non-sharing sentences ("No mobile information will be
  shared..." / "...excluding aggregators and providers of the text message
  services."); the Terms have the SMS program terms (sender, opt-in checkbox,
  message types, frequency, rates, STOP/START/HELP, carrier liability).
  Shared layout: `client/src/components/LegalPage.tsx`. `/terms-of-service`
  redirects to `/terms-and-conditions`.
- "Coming soon" placeholder: Resources. `/contact` redirects to Home. There is no Press page
  (owner removed it); `/press` shows the 404 page.
- About (`/about`) follows the GHL About page
  (sites.leadconnectorhq.com/preview/rsPJnGbOXFjbQeJvKlmC): navy hero with the
  mission, "Why choose us?", who we work with, booking band. Wording rewritten
  for business formation with no experience or track-record claims. The
  template's testimonials (Maria Chen, John Doe, Ahmed Khan) are fake samples:
  never publish them; add real ones only when the owner sends them with the
  clients' permission.
- Content must stay business formation and business automation only: no
  credit, funding, capital, lending, tax or insurance content.
- No chat widget and no 7Band family footer for now.
- Logo (rebranded Nov 2026, owner's request): a north star with a blue
  aura (`logo.svg`; white centre, blue tips, so it reads on white and navy).
  favicon-32.png and apple-touch-icon.png (star on navy) are rendered from
  it: regenerate them whenever logo.svg changes. The old gold compass is gone.
- Colors: navy & white, plus the logo's blue. Button and card styles are in `client/src/index.css`
  (`ec-btn-navy`, `ec-btn-outline-navy` on white; `ec-btn-light`,
  `ec-btn-outline-light` on navy; `ec-card`).
- The owner wants it simple: no photos unless they ask.
- Google / SEO: each page's Google title and description live in
  `client/src/lib/seo.json`. `pnpm build` runs `scripts/seo-pages.mjs`, which
  writes a real `<page>.html` per page (so GitHub Pages serves them as normal
  pages, not "not found"), a `noindex` 404.html, `sitemap.xml` and `robots.txt`.
  Add new pages to seo.json. Business details for Google (name, address,
  phone, email) are in the JSON-LD block in `client/index.html`; keep them in
  step with `site.ts`. Old credit-era results on Google come from Google's
  cache / Google Business Profile, not the site: fix them in Search Console
  and the Business Profile.
