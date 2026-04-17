import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { thoughts } from "../src/content.js";

const distDir = path.resolve("dist");
const baseHtml = await readFile(path.join(distDir, "index.html"), "utf8");
const siteUrl = "https://sakshyambanjade.com.np";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function replaceMeta(html, thought) {
  const title = `${thought.title} | Sakshyam Banjade`;
  const description = thought.summary;
  const url = `${siteUrl}/thoughts/${thought.slug}`;

  return html
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/content="Personal website of Sakshyam Banjade featuring AI projects, research, leadership, fellowship work, and product building from Nepal\."/,
      `content="${escapeHtml(description)}"`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:type" content="website" \/>/, '<meta property="og:type" content="article" />')
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${url}" />`);
}

for (const thought of thoughts) {
  const html = replaceMeta(baseHtml, thought);
  const routeDir = path.join(distDir, "thoughts", thought.slug);
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html);
  await writeFile(path.join(distDir, "thoughts", `${thought.slug}.html`), html);
}
