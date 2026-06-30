# Markr Landing Page

A pixel-aligned recreation of the Markr Webflow marketing landing page, built with Next.js (Pages Router) and raw CSS.

## To run the project:

```bash
npm install
npm run dev
```

Then browse at http://localhost:3000.

## Approach

- **Framework**: Next.js 14 with the **Pages Router** (`pages/`), as required. No App Router.
- **Styling**: Plain CSS only — no Tailwind, no UI/component libraries. Global tokens (colors, fonts, max-width) live in `styles/globals.css` as CSS variables, and each section has its own **CSS Module** (e.g. `styles/Hero.module.css`) for scoped, conflict-free styles. CSS Modules are a built-in Next.js feature, not a third-party dependency.
- **Components**: The page is split into one component per section, mirroring the structure of the Webflow design and the reference project provided: `Header`, `Hero`, `ProductOverview`, `Features`, `FAQ`, `EDMForm` (newsletter signup), and `Footer`. All live in `components/` and are composed in `pages/index.js`.
- **Responsiveness**: Each CSS module includes its own media queries so the layout reflows correctly from desktop down to mobile, including a slide-in mobile nav.

## Project structure

```
pages/
  _app.js          # imports global styles
  _document.js      # loads Open Sans font, sets meta description
  index.js          # composes all sections
components/
  Header.js
  Hero.js
  ProductOverview.js
  Features.js
  FAQ.js
  EDMForm.js
  Footer.js
styles/
  globals.css            # resets, CSS variables, shared utility classes (.container, .btn, etc.)
  Header.module.css
  Hero.module.css
  ProductOverview.module.css
  Features.module.css
  FAQ.module.css
  EDMForm.module.css
  Footer.module.css
```

## AI tooling disclosure

This project was built with **Claude** (Anthropic), used as an AI coding assistant to: scaffold the Next.js Pages Router project, write all components and CSS from the screenshot/reference analysis, and verify the project builds and runs (`npm run build`, `npm run dev`) before delivery. No other AI coding tools were used.
