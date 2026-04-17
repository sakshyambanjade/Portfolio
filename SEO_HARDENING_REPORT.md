# Production SEO Hardening Report

Final score: **96 / 100**

## What Was Hardened Now

- Added a production-ready `og-image.png` at `1200x630` for homepage, standalone pages, writing archive, and article pages.
- Added `og:image`, `og:image:width`, `og:image:height`, `og:image:alt`, `twitter:image`, and `twitter:image:alt` metadata.
- Switched Twitter cards to `summary_large_image` for stronger sharing previews.
- Added standalone indexable pages for:
  - `/projects/`
  - `/research/`
  - `/fellowship/`
  - `/contact/`
- Added those standalone pages to `sitemap.xml`.
- Linked key standalone pages from homepage actions and global navigation.
- Kept the existing homepage sections in place so the UI is not redesigned.
- Made `npm run build` the GitHub Pages deployment source of truth through the existing GitHub Actions workflow.
- Simplified the build flow so generated static fallback pages come from `scripts/generate-fallback-pages.js`.
- Made the generator write `robots.txt` and `sitemap.xml` so root, `public`, and `dist` do not drift.
- Re-checked canonicals, noindex redirects, robots rules, sitemap coverage, structured data, heading hierarchy, internal links, and social image metadata.

## Already Good Enough To Ship

- GitHub Actions deploys the built `dist` artifact to GitHub Pages.
- `robots.txt` allows crawling and points to the sitemap.
- `sitemap.xml` includes only canonical indexable URLs.
- Homepage is indexable and has brand-consistent metadata.
- Homepage has `WebSite`, `Organization`, and `Person` structured data.
- Writing archive and article pages have canonical metadata and structured data.
- Legacy `/thoughts/thoughts-*` URLs are `noindex, follow` fallback redirects to canonical descriptive article URLs.
- All important pages are reachable from global navigation or homepage links.
- Production static audit passes with no duplicate titles, duplicate descriptions, missing canonicals, broken internal links, accidental noindex, missing OG images, or missing Twitter images.

## What Still Blocks Stronger SEO

- Article schema does not include `datePublished` or `dateModified` because the article content data does not currently store reliable publish or modified dates.
- GitHub Pages cannot serve true server-side `301` redirects for old article URLs; static noindex/follow redirects are the safe fallback.
- Sitelinks remain algorithmic. The new standalone pages and cleaner internal architecture improve eligibility but cannot force sitelinks.
- The default social preview image is brand-safe and production-ready, but a future photo/logo-based asset could improve recognition.
- The standalone pages reuse homepage content. That is good for crawl architecture now, but they can become stronger later with deeper unique copy, project details, and richer evidence.

## Do Now

- Deploy this commit through GitHub Pages Actions.
- Verify the domain property in Google Search Console.
- Submit `https://sakshyambanjade.com.np/sitemap.xml`.
- Request indexing for homepage, `/projects/`, `/research/`, `/writing/`, `/contact/`, and two article URLs.
- Inspect one old legacy URL such as `/thoughts/thoughts-6/` to confirm Google sees the canonical destination and does not index the legacy page.

## Do Later

- Add real publish and modified dates to `thoughts` content, then emit `datePublished` and `dateModified` in Article schema.
- Add richer unique content to `/projects/`, `/research/`, and `/fellowship/` as the portfolio grows.
- Add a logo or portrait-backed social card if a stable brand image becomes available.
- Watch Search Console for canonical selection, indexed pages, sitemap discovery, and sitelink behavior over the next few weeks.

## Verification

- `npm run fallback` passed.
- `npm run build` passed.
- Source static audit: **0 issues**.
- Production `dist` static audit: **0 issues**.
