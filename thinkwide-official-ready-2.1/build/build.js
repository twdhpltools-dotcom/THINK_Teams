/* Builds the static ThinkWide website into the repository root.
   Usage (from the repository root):  node build/build.js
   Edit page text in build/templates.js and the menu/footer in build/partials/*.html.
   Testimonials, analyzers, client logos and the form endpoint are in assets/js/data.js (no rebuild needed). */
const fs = require('fs');
const path = require('path');
const { ROUTES, NAVMAP, META, ic } = require('./templates.js');

const ROOT = path.resolve(__dirname, '..');
// Change this to the live address before publishing the sitemap.
const SITE_URL = 'https://www.thinkwide.in/';

const header = fs.readFileSync(path.join(__dirname, 'partials/header.html'), 'utf8');
const footer = fs.readFileSync(path.join(__dirname, 'partials/footer.html'), 'utf8');
const fileFor = key => (key === 'home' ? 'index.html' : `${key}.html`);
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function transform(html, key) {
  const here = fileFor(key);
  // #page + data-target → page.html#section (or #section on the same page)
  html = html.replace(/href="#([\w-]+)" data-target="([\w-]+)"/g, (m, page, target) => {
    if (!ROUTES[page]) return m;
    return fileFor(page) === here ? `href="#${target}"` : `href="${fileFor(page)}#${target}"`;
  });
  // #page → page.html
  html = html.replace(/href="#([\w-]+)"/g, (m, page) => (ROUTES[page] ? `href="${fileFor(page)}"` : m));
  // static icons
  html = html.replace(/<span data-ic="([\w-]+)"><\/span>/g, (m, n, off, str) => {
    const before = str.slice(Math.max(0, off - 60), off);
    return `<span class="ico">${ic(n, /class="pico"[^>]*$/.test(before) ? 20 : 17)}</span>`;
  });
  html = html.replace(/<span class="pico"([^>]*) data-ic="([\w-]+)"><\/span>/g, (m, attrs, n) => `<span class="pico"${attrs}>${ic(n, 20)}</span>`);
  html = html.replace(/<span data-chev><\/span>/g, ic('chev', 15));
  // form field names for submission
  html = html.replace(/<(input|select|textarea) id="([\w-]+)"/g, '<$1 id="$2" name="$2"');
  return html;
}

function page(key, bodyHTML, metaOverride) {
  const [title, desc] = metaOverride || META[key];
  let head = header;
  const nav = NAVMAP[key];
  if (nav) head = head.replace(new RegExp(`class="nav-btn"([^>]*?)data-nav="${nav}"`), `class="nav-btn active" aria-current="page"$1data-nav="${nav}"`);
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="ThinkWide Digital Health">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta name="theme-color" content="#0A29AA">
<meta property="og:image" content="assets/img/hero-lab.webp">
<link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
<link rel="preload" href="assets/fonts/libertinus-serif-display.woff" as="font" type="font/woff" crossorigin>
<link rel="preload" href="assets/fonts/inter.woff" as="font" type="font/woff" crossorigin>
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body data-page="${key}">
<a class="skip" href="#main">Skip to content</a>
${transform(head, key)}
<main id="main" tabindex="-1">
${transform(bodyHTML, key)}
</main>
${transform(footer, key)}
<script src="assets/js/data.js"></script>
<script src="assets/js/main.js"></script>
</body>
</html>
`;
}

const written = [];
for (const key of Object.keys(ROUTES)) {
  fs.writeFileSync(path.join(ROOT, fileFor(key)), page(key, ROUTES[key]()));
  written.push(fileFor(key));
}

// 404 page
fs.writeFileSync(path.join(ROOT, '404.html'), page('home', `<section class="page-hero"><div class="wrap" style="padding-block:96px">
<span class="eyebrow">Error 404</span><h1>We couldn't find that page</h1>
<p class="lead">The link may be old or mistyped. Try one of these instead.</p>
<div class="btn-row"><a class="btn btn-primary" href="#home">Go to the homepage</a><a class="btn btn-ghost" href="#thinklab">ThinkLab</a><a class="btn btn-ghost" href="#contact">Contact us</a></div></div></section>`,
  ['Page not found | ThinkWide Digital Health', 'This page could not be found.']).replace('<html lang="en-IN">\n<head>', '<html lang="en-IN">\n<head>\n<meta name="robots" content="noindex">'));

// sitemap + robots
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${written.map(f => `  <url><loc>${SITE_URL}${f === 'index.html' ? '' : f}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}sitemap.xml\n`);
fs.writeFileSync(path.join(ROOT, '.nojekyll'), '');
console.log(`Built ${written.length} pages + 404.html, sitemap.xml, robots.txt`);
