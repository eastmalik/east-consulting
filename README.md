# East Consulting LLC website

React + Vite single-page app, deployed to GitHub Pages.

- **Deploy:** every push to `main` builds and publishes via
  `.github/workflows/deploy.yml` (includes the SPA fallback `404.html`).
- **Images/files:** `client/public/manus-storage/` (folder name is historical).
- **Custom domain:** `client/public/CNAME`.
- **Pages:** one file per page in `client/src/pages/`, routes in `client/src/App.tsx`.
- **Page title / description / favicon:** `client/index.html`.

## Local development

```sh
pnpm install
pnpm dev      # dev server on :3000
pnpm check    # typecheck
pnpm build    # output in dist/public
```

## DNS (Hostinger)

Only these records point at the website. Hostinger offers no ALIAS record
type for this domain, so the bare domain uses GitHub's four A records:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | www | eastmalik.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

If GitHub ever changes its Pages IP addresses, update these four records
(current list: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

Do **not** touch MX, hostingermail, autodiscover, autoconfig, DKIM, SPF or
DMARC records — they run business email.

Rollback to Manus (pre-migration values): CNAME www → cname.manus.space,
and a single A @ → 2.57.91.91 in place of the four GitHub A records.
