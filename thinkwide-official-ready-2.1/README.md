# ThinkWide Digital Health — website

Static website (plain HTML, CSS and JavaScript). No server, database or framework, so it runs directly on GitHub Pages.

## Folder layout

```
index.html                 Homepage
thinklab.html              ThinkLab for Diagnostics
thinkray.html              ThinkRay for Radiology Divisions
thinkdigital.html          ThinkDigital for Healthcare Brands
inventory.html             Inventory module
quality-control.html       Quality Control module
smart-report.html          Smart Report module
online-prescription.html   Online Prescription module
solutions.html             Feature matrix, lab departments, imaging, use cases, types of centre
integrations.html          Machine interface + software integrations
about.html  contact.html  careers.html  testimonials.html
support.html  faqs.html  legal.html  demo.html  404.html
sitemap.xml  robots.txt  .nojekyll

assets/css/style.css       All styling (colours and fonts are at the top)
assets/js/data.js          ← EDIT HERE: testimonials, analyzer list, client logos, form endpoint
assets/js/main.js          Menus, product tour, forms (no need to edit)
assets/img/                favicon.ico; put client logos in assets/img/clients/

build/build.js             Regenerates every .html page
build/templates.js         Page text for all pages
build/partials/header.html Top menu (shared by every page)
build/partials/footer.html Footer (shared by every page)
```

## Publish on GitHub Pages

1. Upload everything in this folder to the root of your repository (including the hidden `.nojekyll` file). The `build/` folder can be uploaded too; it does no harm.
2. In the repository open **Settings → Pages**, choose **Deploy from a branch**, select the main branch and the `/ (root)` folder, and save.
3. After a minute or two the site is live at the address GitHub shows.
4. For www.thinkwide.in, add the domain under **Custom domain** on the same page and point your DNS to GitHub Pages.

All links are relative, so the site also works inside a sub-folder such as `username.github.io/THINK_Teams/thinkwide-official-3.0/`.

## Everyday updates — `assets/js/data.js` (no build needed)

- **Testimonials:** fill in client, person, city, product and quote. For video, paste a YouTube link in `video`; it embeds automatically. Set `approved: true` only once the client has approved the wording; unapproved entries show as dashed "awaiting approval" slots. The first three appear on the homepage.
- **Analyzer list:** add one row per verified analyzer to `machines`. A searchable table appears on the Integrations page automatically.
- **Client logos:** upload logo files to `assets/img/clients/` and set `logo` to the path, e.g. `'assets/img/clients/apex.webp'`. Without a logo the client name shows.
- **Forms:** set `formEndpoint` to a form service URL (Formspree, Web3Forms, Getform or a Google Apps Script web app). Every form posts its fields plus `form` (which form) and `page` (which page). Until it is set, forms show a "not connected yet" message and nothing is sent.

Save, commit and push; the change is live within a minute or two.

## Changing page text, the menu or the footer

Edit `build/templates.js` (page text) or `build/partials/*.html` (menu and footer), then run from this folder:

```
node build/build.js
```

Node 16 or newer, no packages to install. This rewrites all the `.html` files, `sitemap.xml` and `robots.txt`; it does not touch `assets/`. You can also edit an `.html` file directly, but the next build will overwrite that change.

If the site is not served from https://www.thinkwide.in, change `SITE_URL` at the top of `build/build.js` and rebuild so `sitemap.xml` uses the right address.

## Content rule

All product content in `build/templates.js` comes from ThinkWide's own material: the current website, real ThinkLab screens, the legal and service terms, and the Inventory/QC portal requirements. Do not add features, figures, certifications or customer results that ThinkWide has not confirmed. Customer stories appear only after the client approves them (`approved: true` in `assets/js/data.js`).

## Before launch

- Confirm the "420+ labs" figure (`STATS` at the top of `build/templates.js`), then rebuild.
- Replace the dashboard mockups (labelled "Demo data") with real screenshots if you prefer.
- Connect the forms (`formEndpoint`).
- Publish the full policy texts on `legal.html` once legal approval is complete.
