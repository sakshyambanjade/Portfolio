import { copyFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fellowshipItems, profile, researchFocusAreas, researchItems, sitePages, thoughts, workItems } from "../src/content.js";

const siteUrl = "https://sakshyambanjade.com.np";
const lastmod = "2026-04-18";
const defaultImagePath = "/og-image.png";
const defaultImageUrl = `${siteUrl}${defaultImagePath}`;
const rootDir = path.resolve(process.env.OUTPUT_DIR || ".");
const sourceRoot = path.resolve(".");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function pageShell({ title, description, canonicalPath, body, type = "article", breadcrumbs }) {
  const fullUrl = `${siteUrl}${canonicalPath}`;
  const breadcrumbItems = breadcrumbs || (canonicalPath === "/"
    ? []
    : [
        { name: "Home", path: "/" },
        ...(canonicalPath === "/writing/"
          ? [{ name: "Writing", path: "/writing/" }]
          : [
              { name: "Writing", path: "/writing/" },
              { name: title.replace(" | Sakshyam Banjade", ""), path: canonicalPath },
            ]),
      ]);
  const breadcrumbJson = breadcrumbItems.length
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteUrl}${item.path}`,
        })),
      }
    : null;
  const articleJson = type === "article"
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title.replace(" | Sakshyam Banjade", ""),
        description,
        mainEntityOfPage: fullUrl,
        author: {
          "@type": "Person",
          name: "Sakshyam Banjade",
          url: `${siteUrl}/`,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "Sakshyam Banjade",
          url: `${siteUrl}/`,
        },
      }
    : null;
  const organizationJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Sakshyam Banjade",
    url: `${siteUrl}/`,
    image: defaultImageUrl,
    founder: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Sakshyam Banjade",
      url: `${siteUrl}/`,
      image: defaultImageUrl,
    },
    sameAs: profile.links.map(([, href]) => href),
  };
  const jsonLd = [organizationJson, breadcrumbJson, articleJson].filter(Boolean);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="author" content="Sakshyam Banjade" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:image" content="${defaultImageUrl}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Sakshyam Banjade - AI builder, researcher, and founder" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${defaultImageUrl}" />
    <meta name="twitter:image:alt" content="Sakshyam Banjade - AI builder, researcher, and founder" />
    <link rel="canonical" href="${fullUrl}" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="stylesheet" href="/style.css" />
    <title>${escapeHtml(title)}</title>
    ${jsonLd.length ? `<script type="application/ld+json">${JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd)}</script>` : ""}
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to main content</a>
    <header class="site-header">
      <nav class="nav page" aria-label="Primary navigation">
        <a class="site-name" href="/">Sakshyam Banjade</a>
        <ul class="nav-menu">
          <li><a href="/projects/">work</a></li>
          <li><a href="/research/">research</a></li>
          <li><a href="/writing/">writing</a></li>
          <li><a href="/contact/">contact</a></li>
        </ul>
      </nav>
    </header>
${body}
    <footer class="page site-footer">
      <p>Building systems, research, and opportunities with long-term intent.</p>
    </footer>
  </body>
</html>
`;
}

function entryList(items) {
  return items
    .map(
      (item) => `        <article class="entry${item.featured ? " featured" : ""}">
          <time>${escapeHtml(item.label)}</time>
          <div>
            <h3>${item.href ? `<a href="${escapeHtml(item.href)}">${escapeHtml(item.title)}</a>` : escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </div>
        </article>`
    )
    .join("\n");
}

const standaloneContent = {
  projects: {
    intro:
      "Selected AI, software, research, and product systems I have built or contributed to, with a focus on useful execution and public-facing work.",
    items: workItems,
  },
  research: {
    intro:
      "A publication-first research page covering preprints, papers, and the themes I want to push further across AI evaluation, scientific tooling, and applied systems.",
    items: researchItems,
  },
  fellowship: {
    intro:
      "Fellowships, selections, workshops, pitch spaces, and ecosystem moments connected to leadership, AI, innovation, and public technology work.",
    items: fellowshipItems,
  },
  contact: {
    intro:
      "I am interested in research collaboration, product conversations, mentorship initiatives, fellowship partnerships, and other work aligned with technology and impact.",
    items: [],
  },
};

function standaloneBody(page) {
  const content = standaloneContent[page.slug];
  const title = escapeHtml(page.label);
  const body = page.slug === "contact"
    ? `        <article class="entry">
          <time>email</time>
          <div>
            <h2>Start a conversation</h2>
            <p>The fastest path is email. You can also use the public profiles below for research, code, writing, and professional context.</p>
            <p class="contact-list">
              <a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>
${profile.links.map(([label, href]) => `              <a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`).join("\n")}
            </p>
          </div>
        </article>`
    : page.slug === "research"
      ? `        <div class="research-intro">
          <p>My long-term aim is to build a research profile around applied AI systems, reasoning-heavy evaluation, scientific tools, and technically serious work that connects theory with useful deployment.</p>
        </div>
        <div class="research-stack">
          <div>
            <h2>publications &amp; preprints</h2>
${entryList(content.items)}
          </div>
          <aside class="research-panel" aria-label="Research themes">
            <h2>current research themes</h2>
            <div class="focus-grid">
${researchFocusAreas.map((item) => `              <span class="focus-chip">${escapeHtml(item)}</span>`).join("\n")}
            </div>
            <p class="quiet">Building a stronger publication record while developing AI systems with real-world use cases across evaluation, agriculture, information workflows, scientific tooling, and reasoning.</p>
          </aside>
        </div>`
    : `        <h2>${page.slug === "projects" ? "Selected work" : title}</h2>
${entryList(content.items)}`;

  return `    <main class="page writing-page" id="main">
      <section class="archive-intro" aria-labelledby="${escapeHtml(page.slug)}-title">
        <p class="subtitle">${escapeHtml(page.label.toLowerCase())}</p>
        <h1 id="${escapeHtml(page.slug)}-title">${title}</h1>
        <p>${escapeHtml(content.intro)}</p>
        <p class="action-links">
          <a href="/">Home</a>
          <a href="/writing/">Writing</a>
        </p>
      </section>
      <section aria-label="${title}">
${body}
      </section>
    </main>
`;
}

function thoughtBody(thought, index) {
  const previousThought = index > 0 ? thoughts[index - 1] : null;
  const nextThought = index < thoughts.length - 1 ? thoughts[index + 1] : null;

  return `    <main class="page thought-page" id="main">
      <header class="reading-header">
        <p class="subtitle">writing</p>
        <h1>${escapeHtml(thought.title)}</h1>
        <p class="meta">${escapeHtml(thought.summary)}</p>
        <p class="reading-actions">
          <a href="/writing/">Back to archive</a>
          <a href="/">Home</a>
        </p>
      </header>
      <article>
${thought.paragraphs.map((paragraph) => `        <p>${escapeHtml(paragraph)}</p>`).join("\n")}
      </article>
      <nav class="post-nav" aria-label="Previous and next writing">
        ${
          previousThought
            ? `<a href="/thoughts/${escapeHtml(previousThought.slug)}/"><span>Previous</span>${escapeHtml(previousThought.title)}</a>`
            : "<span></span>"
        }
        <a class="archive-link" href="/writing/">All writing</a>
        ${
          nextThought
            ? `<a href="/thoughts/${escapeHtml(nextThought.slug)}/"><span>Next</span>${escapeHtml(nextThought.title)}</a>`
            : "<span></span>"
        }
      </nav>
    </main>
`;
}

function redirectPage(targetPath) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, follow" />
    <link rel="canonical" href="${siteUrl}${targetPath}" />
    <meta http-equiv="refresh" content="0; url=${targetPath}" />
    <title>Redirecting | Sakshyam Banjade</title>
  </head>
  <body>
    <p><a href="${targetPath}">Continue reading</a></p>
  </body>
</html>
`;
}

function notFoundPage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, follow" />
    <meta name="description" content="The page was not found. Return to Sakshyam Banjade's portfolio, writing archive, projects, research, or contact page." />
    <link rel="canonical" href="${siteUrl}/" />
    <link rel="stylesheet" href="/style.css" />
    <title>Page Not Found | Sakshyam Banjade</title>
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to main content</a>
    <header class="site-header">
      <nav class="nav page" aria-label="Primary navigation">
        <a class="site-name" href="/">Sakshyam Banjade</a>
        <ul class="nav-menu">
          <li><a href="/projects/">work</a></li>
          <li><a href="/research/">research</a></li>
          <li><a href="/writing/">writing</a></li>
          <li><a href="/contact/">contact</a></li>
        </ul>
      </nav>
    </header>
    <main class="page writing-page" id="main">
      <section class="archive-intro" aria-labelledby="not-found-title">
        <p class="subtitle">404</p>
        <h1 id="not-found-title">Page not found</h1>
        <p>This page does not exist anymore, or the link was typed wrong. Nothing useful is loaded here, but the main paths are still available.</p>
        <p class="action-links">
          <a href="/">Home</a>
          <a href="/writing/">Writing</a>
          <a href="/projects/">Projects</a>
          <a href="/contact/">Contact</a>
        </p>
      </section>
    </main>
    <footer class="page site-footer">
      <p>Building systems, research, and opportunities with long-term intent.</p>
    </footer>
  </body>
</html>
`;
}

function writingBody() {
  return `    <main class="page writing-page" id="main">
      <section class="archive-intro" aria-labelledby="writing-title">
        <p class="subtitle">writing archive</p>
        <h1 id="writing-title">Writing</h1>
        <p>
          Essays, notes, and reflections I want to keep in one place. Open any piece, read comfortably, then move
          back to the archive or continue to the next one without getting lost.
        </p>
        <p class="action-links">
          <a href="/#writing">Back to home section</a>
          <a href="/">Home</a>
        </p>
      </section>
      <section class="writing-list" aria-label="Essays">
${thoughts
  .map(
    (thought) => `        <article class="entry thought-link writing-card">
        <time>${escapeHtml(thought.slug)}</time>
        <div>
          <h3><a href="/thoughts/${escapeHtml(thought.slug)}/">${escapeHtml(thought.title)}</a></h3>
          <p>${escapeHtml(thought.summary)}</p>
          <a class="read-link" href="/thoughts/${escapeHtml(thought.slug)}/" aria-label="Read ${escapeHtml(thought.title)}">Read essay</a>
        </div>
      </article>`
  )
  .join("\n")}
      </section>
    </main>
`;
}

function robotsText() {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

function sitemapXml() {
  const urls = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    ...sitePages.map((page) => ({ path: `/${page.slug}/`, priority: "0.8", changefreq: "monthly" })),
    { path: "/writing/", priority: "0.8", changefreq: "weekly" },
    ...thoughts.map((thought) => ({ path: `/thoughts/${thought.slug}/`, priority: "0.6", changefreq: "monthly" })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${siteUrl}${url.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
}

async function writeSeoFiles(targetDir) {
  await writeFile(path.join(targetDir, "robots.txt"), robotsText());
  await writeFile(path.join(targetDir, "sitemap.xml"), sitemapXml());
}

if (rootDir !== sourceRoot) {
  await copyFile(path.join(sourceRoot, "style.css"), path.join(rootDir, "style.css"));
  await copyFile(path.join(sourceRoot, "public", "og-image.png"), path.join(rootDir, "og-image.png"));
  await copyFile(path.join(sourceRoot, "public", "apple-touch-icon.png"), path.join(rootDir, "apple-touch-icon.png"));
  await copyFile(path.join(sourceRoot, "public", "favicon-32x32.png"), path.join(rootDir, "favicon-32x32.png"));
  await copyFile(path.join(sourceRoot, "public", "favicon-16x16.png"), path.join(rootDir, "favicon-16x16.png"));
}

await writeSeoFiles(rootDir);
await writeFile(path.join(rootDir, "404.html"), notFoundPage());

if (rootDir === sourceRoot) {
  await writeSeoFiles(path.join(sourceRoot, "public"));
  await writeFile(path.join(sourceRoot, "public", "404.html"), notFoundPage());
}

for (const page of sitePages) {
  const routeDir = path.join(rootDir, page.slug);
  await mkdir(routeDir, { recursive: true });
  await writeFile(
    path.join(routeDir, "index.html"),
    pageShell({
      title: page.title,
      description: page.description,
      canonicalPath: `/${page.slug}/`,
      body: standaloneBody(page),
      type: "website",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: page.label, path: `/${page.slug}/` },
      ],
    })
  );
}

await mkdir(path.join(rootDir, "writing"), { recursive: true });
await writeFile(
  path.join(rootDir, "writing", "index.html"),
  pageShell({
    title: "Writing | Sakshyam Banjade",
    description:
      "Essays and notes by Sakshyam Banjade on technology, AI, education, patience, community, and building things early.",
    canonicalPath: "/writing/",
    body: writingBody(),
    type: "website",
  })
);

for (const [index, thought] of thoughts.entries()) {
  const canonicalPath = `/thoughts/${thought.slug}/`;
  const html = pageShell({
    title: `${thought.title} | Sakshyam Banjade`,
    description: thought.summary,
    canonicalPath,
    body: thoughtBody(thought, index),
  });
  const routeDir = path.join(rootDir, "thoughts", thought.slug);
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html);

  if (thought.legacySlug) {
    const legacyRouteDir = path.join(rootDir, "thoughts", thought.legacySlug);
    await mkdir(legacyRouteDir, { recursive: true });
    await writeFile(path.join(legacyRouteDir, "index.html"), redirectPage(canonicalPath));
    await writeFile(path.join(rootDir, "thoughts", `${thought.legacySlug}.html`), redirectPage(canonicalPath));
  }
}
