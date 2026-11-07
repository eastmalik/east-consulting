// Runs after `vite build`. GitHub Pages has no routing, so without this every
// page except Home is served through 404.html with a "not found" status, and
// Google won't index it. This writes a real <page>.html for each page,
// each with its own title, description and canonical link, plus sitemap.xml
// and robots.txt. Page titles and descriptions live in client/src/lib/seo.json.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "dist/public");
const { site, pages } = JSON.parse(readFileSync(path.join(root, "client/src/lib/seo.json"), "utf8"));
const base = readFileSync(path.join(out, "index.html"), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function pageHtml({ path: p, title, description }) {
  const url = site + p;
  const html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(description)}$2`);
  if (!html.includes(`<title>${esc(title)}</title>`) || !html.includes(`href="${url}"`)) {
    throw new Error(`seo-pages: could not set tags for ${p}`);
  }
  return html;
}

// "/about" is written as about.html: GitHub Pages serves it at /about directly
// (an about/index.html folder would bounce visitors to /about/ instead).
for (const page of pages) {
  const file = page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`;
  mkdirSync(path.dirname(path.join(out, file)), { recursive: true });
  writeFileSync(path.join(out, file), pageHtml(page));
}

// Unknown addresses: same app, but tell search engines not to index it.
const notFound = pageHtml({ path: "/", title: "Page not found | East Consulting LLC", description: "This page does not exist." })
  .replace(/<link rel="canonical"[^>]*>\s*/, "")
  .replace("</title>", '</title>\n    <meta name="robots" content="noindex" />');
writeFileSync(path.join(out, "404.html"), notFound);

const urls = pages
  .filter((p) => !p.noSitemap)
  .map((p) => `  <url><loc>${site}${p.path}</loc></url>`)
  .join("\n");
writeFileSync(
  path.join(out, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
writeFileSync(path.join(out, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`);

console.log(`seo-pages: wrote ${pages.length} pages, 404.html, sitemap.xml, robots.txt`);
