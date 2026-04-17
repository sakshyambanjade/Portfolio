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

function pageShell({ title, description, canonicalPath, body }) {
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
    <meta property="og:type" content="article" />
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

function thoughtBody(thought) {
  return `    <main class="page thought-page" id="main">
      <p class="subtitle">writing</p>
      <h1>${escapeHtml(thought.title)}</h1>
      <p class="meta">${escapeHtml(thought.meta)}</p>
      <article>
${thought.paragraphs.map((paragraph) => `        <p>${escapeHtml(paragraph)}</p>`).join("\n")}
      </article>
      <p class="action-links">
        <a href="/writing/">Back to writing</a>
        <a href="/">Home</a>
      </p>
    </main>
`;
}

function writingBody() {
  return `    <main class="page writing-page" id="main">
      <p class="subtitle">writing archive</p>
      <h1>Writing</h1>
      <p>
        Essays, notes, and reflections I want to keep in one place. Each piece opens into its own readable page.
      </p>
      <p class="action-links">
        <a href="/#writing">Back to home section</a>
        <a href="/">Home</a>
      </p>
${thoughts
  .map(
    (thought) => `      <article class="entry thought-link">
        <time>${escapeHtml(thought.slug)}</time>
        <div>
          <h3><a href="/thoughts/${escapeHtml(thought.slug)}/">${escapeHtml(thought.title)}</a></h3>
          <p>${escapeHtml(thought.summary)}</p>
          <span class="path">/thoughts/${escapeHtml(thought.slug)}/</span>
        </div>
      </article>`
  )
  .join("\n")}
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
  })
);

for (const thought of thoughts) {
  const html = pageShell({
    title: `${thought.title} | Sakshyam Banjade`,
    description: thought.summary,
    canonicalPath: `/thoughts/${thought.slug}/`,
    body: thoughtBody(thought),
  });
  const routeDir = path.join(rootDir, "thoughts", thought.slug);
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html);
  await writeFile(path.join(rootDir, "thoughts", `${thought.slug}.html`), html);
}
