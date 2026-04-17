# SEO Report

## Second-Pass Review Summary

Score after fixes: **92 / 100**

This pass reviewed the site as a strict technical SEO audit across static HTML fallbacks, React route metadata, generated `dist` output, sitemap coverage, robots rules, canonicals, structured data, internal links, headings, and legacy URL handling.

## Highest Impact Fixes

1. **Created a crawlable canonical URL structure for writing pages**
   - Replaced generic blog paths like `/thoughts/thoughts-6/` with descriptive URLs such as `/thoughts/tech-not-it/`.
   - Added noindex follow redirect fallback pages for the old generic URLs.
   - Why it helps: descriptive slugs improve topical clarity, click understanding, and reduce duplicate indexing risk.

2. **Added root-level sitemap and robots files**
   - Added `/sitemap.xml` and `/robots.txt` at the repository root for the current GitHub Pages branch-root serving mode.
   - Updated `public/sitemap.xml` for the Vite/GitHub Actions build mode.
   - Why it helps: Google can discover canonical pages whether GitHub serves the branch root or the built `dist` artifact.

3. **Improved metadata and canonical tags**
   - Updated homepage title and description around the primary entity: Sakshyam Banjade.
   - Added canonical URLs with a consistent trailing-slash strategy.
   - Added unique titles, descriptions, canonical links, Open Graph tags, and Twitter card tags for writing pages.
   - Why it helps: reduces ambiguity, strengthens brand search relevance, and improves sharing previews.

4. **Added structured data**
   - Added `WebSite` and `Person` schema on the homepage.
   - Added `BreadcrumbList` schema for the writing archive and all article pages.
   - Added `Article` schema for each writing page.
   - Why it helps: gives Google explicit entity, site, breadcrumb, and article relationships without relying only on visual content.

5. **Improved internal linking for sitelink eligibility**
   - Kept the global nav simple and crawlable: `work`, `writing`, `contact`.
   - Preserved homepage links to work/projects, research, fellowship, and contact sections.
   - Added crawlable archive links and previous/next article links.
   - Why it helps: clear navigation and consistent internal links help Google infer page importance and possible sitelinks.

## Strict Second-Pass Checks

- **Duplicate titles:** Fixed. Indexable source pages and production `dist` pages now have unique titles.
- **Duplicate meta descriptions:** Fixed. Indexable source pages and production `dist` pages now have unique descriptions.
- **Missing canonicals:** Fixed. Homepage, writing archive, articles, and fallback pages include canonical links.
- **Broken internal links:** Fixed. Removed the missing CV PDF link and verified internal static links resolve.
- **Weak anchor text:** Improved. Writing links use article titles and `Read essay`; global navigation uses concise descriptive labels.
- **Missing schema:** Fixed. Added `WebSite`, `Person`, `BreadcrumbList`, and `Article` schema where appropriate.
- **Incorrect robots rules:** Fixed. `robots.txt` allows crawling and points to the canonical sitemap.
- **Sitemap issues:** Fixed. Sitemap includes homepage, writing archive, and all canonical article URLs only.
- **Noindex mistakes:** Fixed. Only 404 and legacy redirect fallback pages use `noindex, follow`; canonical pages remain indexable.
- **Missing alt text:** Checked. The current site does not rely on crawl-critical images; no missing `alt` attributes were found on indexed pages.
- **Pages too deep in navigation:** Improved. Writing is linked globally and each essay is one click from `/writing/`.
- **Heading hierarchy:** Improved. Each important page has one clear H1 with logical section headings.
- **Non-descriptive URLs:** Fixed for writing pages with descriptive canonical slugs.

## What Was Wrong

- The sitemap omitted `/writing/` and used generic blog URLs.
- There was no root-level `sitemap.xml` or `robots.txt` for branch-root GitHub Pages hosting.
- Blog slugs were generic and less descriptive.
- Some important route metadata relied on client-side React updates.
- Static fallback pages did not include Twitter card metadata or structured data.
- Old blog URLs had no canonical redirect/noindex handling.

## What Was Fixed

- Added canonical descriptive writing URLs.
- Generated readable static pages for all canonical writing pages.
- Generated noindex follow redirect pages for legacy writing URLs.
- Added root and public sitemaps.
- Added root robots file.
- Added noindex to 404 redirect fallback pages.
- Added homepage `WebSite` and `Person` structured data.
- Added writing archive `BreadcrumbList` structured data.
- Added article `BreadcrumbList` and `Article` structured data.
- Added Open Graph and Twitter metadata.
- Preserved semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`.

## Still Needs Manual Review

- Verify the preferred GitHub Pages source is **GitHub Actions** if you want the Vite build to be the only production source.
- Add a real profile image later if you want richer social cards with `og:image` and `twitter:image`.
- Submit the new sitemap in Google Search Console after deployment.
- Use Search Console URL Inspection for `/`, `/writing/`, and one or two article URLs.
- Google sitelinks are not guaranteed; this update improves eligibility but Google decides automatically.

## Top Remaining Weaknesses

1. No `og:image` or Twitter image is included because there is no confirmed production-ready image asset yet.
2. GitHub Pages cannot provide true server-side 301 redirects for old writing URLs; static noindex/follow redirect pages are the production-safe fallback.
3. Homepage sections are still part of a single page, so future dedicated pages for projects, research, fellowship, and contact could improve sitelink variety.
4. Article schema does not include publish or modified dates because the writing content does not currently store those dates.
5. There is no `SearchAction` schema because the site has no internal search feature.
6. Google sitelinks remain algorithmic and cannot be forced.
7. Google Search Console must validate the deployed sitemap and canonical selection.
8. External links should be periodically checked after deployment because profile URLs can change.
9. A real logo/profile image could strengthen entity recognition and social previews.
10. If GitHub Pages serves branch-root instead of `dist`, both static and app outputs must stay in sync.

## Google Search Console Actions

1. Deploy the updated site.
2. Open Google Search Console for `sakshyambanjade.com.np`.
3. Submit `https://sakshyambanjade.com.np/sitemap.xml`.
4. Use URL Inspection on `https://sakshyambanjade.com.np/`.
5. Use URL Inspection on `https://sakshyambanjade.com.np/writing/`.
6. Use URL Inspection on `https://sakshyambanjade.com.np/thoughts/tech-not-it/`.
7. Request indexing for the homepage, writing archive, and two representative essay pages.
8. Inspect one old URL such as `https://sakshyambanjade.com.np/thoughts/thoughts-6/` and confirm Google does not index it as canonical.
9. Check **Page indexing** after a few days for submitted versus indexed URLs.
10. Check **Enhancements** or Rich Results Test for breadcrumb and article structured data.

## Files Touched

- `index.html`
- `src/App.jsx`
- `src/content.js`
- `scripts/generate-fallback-pages.js`
- `package.json`
- `robots.txt`
- `sitemap.xml`
- `public/sitemap.xml`
- `404.html`
- `public/404.html`
- `writing/index.html`
- `thoughts/**`
