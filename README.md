# East Consulting LLC website

React + Vite single-page app, deployed to GitHub Pages.

- **Deploy:** every push to `main` builds and publishes via
  `.github/workflows/deploy.yml` (includes the SPA fallback `404.html`).
- **Images/files:** `client/public/manus-storage/` (folder name is historical).
- **Custom domain:** `client/public/CNAME`.
- **Pages:** one file per page in `client/src/pages/`, routes in `client/src/App.tsx`.
- **Page title / description / favicon / chat widget:** `client/index.html`.

## Local development

```sh
pnpm install
pnpm dev      # dev server on :3000
pnpm check    # typecheck
pnpm build    # output in dist/public
```

## DNS (Hostinger)

Only two records point at the website:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | www | eastmalik.github.io |
| ALIAS | @ | eastmalik.github.io |

Do **not** add GitHub's A-record IPs. Do **not** touch MX, hostingermail,
mailgun, leadconnectorhq, DKIM, SPF or DMARC records — they run business email.
