import { copyFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { profile, thoughts } from "../src/content.js";

const siteUrl = "https://sakshyambanjade.com.np";
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

function pageShell({ title, description, canonicalPath, body, type = "article" }) {
  const fullUrl = `${siteUrl}${canonicalPath}`;
  const breadcrumbItems = canonicalPath === "/"
    ? []
    : [
        { name: "Home", path: "/" },
        ...(canonicalPath === "/writing/"
          ? [{ name: "Writing", path: "/writing/" }]
          : [
              { name: "Writing", path: "/writing/" },
              { name: title.replace(" | Sakshyam Banjade", ""), path: canonicalPath },
            ]),
      ];
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
    founder: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Sakshyam Banjade",
      url: `${siteUrl}/`,
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
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${fullUrl}" />
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
          <li><a href="/#work">work</a></li>
          <li><a href="/writing/">writing</a></li>
          <li><a href="/#contact">contact</a></li>
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

if (rootDir !== sourceRoot) {
  await copyFile(path.join(sourceRoot, "style.css"), path.join(rootDir, "style.css"));
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
