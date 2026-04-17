import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { thoughts } from "../src/content.js";

const siteUrl = "https://sakshyambanjade.com.np";
const rootDir = path.resolve(".");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function pageShell({ title, description, canonicalPath, body, type = "article" }) {
  const fullUrl = `${siteUrl}${canonicalPath}`;

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
    <link rel="canonical" href="${fullUrl}" />
    <link rel="stylesheet" href="/style.css" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to main content</a>
    <header class="site-header">
      <nav class="nav page" aria-label="Primary navigation">
        <a class="site-name" href="/#top">Sakshyam Banjade</a>
        <ul class="nav-menu">
          <li><a href="/#work">work</a></li>
          <li><a href="/#research">research</a></li>
          <li><a href="/#recognitions">recognitions</a></li>
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
      <nav class="breadcrumb" aria-label="Writing navigation">
        <a href="/">Home</a>
        <span>/</span>
        <a href="/writing/">Writing</a>
        <span>/</span>
        <span>${escapeHtml(thought.meta)}</span>
      </nav>
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

function writingBody() {
  return `    <main class="page writing-page" id="main">
      <nav class="breadcrumb" aria-label="Writing navigation">
        <a href="/">Home</a>
        <span>/</span>
        <span>Writing</span>
      </nav>
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
  const html = pageShell({
    title: `${thought.title} | Sakshyam Banjade`,
    description: thought.summary,
    canonicalPath: `/thoughts/${thought.slug}/`,
    body: thoughtBody(thought, index),
  });
  const routeDir = path.join(rootDir, "thoughts", thought.slug);
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html);
  await writeFile(path.join(rootDir, "thoughts", `${thought.slug}.html`), html);
}
