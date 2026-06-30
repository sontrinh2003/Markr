# Markr Landing Page

A pixel-aligned recreation of the Markr Webflow marketing landing page, built with Next.js (Pages Router) and raw CSS.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To create a production build:

```bash
npm run build
npm start
```

## Approach

- **Framework**: Next.js 14 with the **Pages Router** (`pages/`), as required. No App Router.
- **Styling**: Plain CSS only — no Tailwind, no UI/component libraries. Global tokens (colors, fonts, max-width) live in `styles/globals.css` as CSS variables, and each section has its own **CSS Module** (e.g. `styles/Hero.module.css`) for scoped, conflict-free styles. CSS Modules are a built-in Next.js feature, not a third-party dependency.
- **Components**: The page is split into one component per section, mirroring the structure of the Webflow design and the reference project provided: `Header`, `Hero`, `ProductOverview`, `Features`, `FAQ`, `EDMForm` (newsletter signup), and `Footer`. All live in `components/` and are composed in `pages/index.js`.
- **Responsiveness**: Each CSS module includes its own media queries (breakpoints around 920px / 760-880px / 560-640px) so the layout reflows correctly from desktop down to mobile, including a slide-in mobile nav.
- **Interactivity**:
  - The FAQ section is a real accordion using `useState`, only one item open at a time, matching the chevron rotate behaviour in the design.
  - The mobile header nav uses `useState` to toggle a hamburger menu.
  - The newsletter form (`EDMForm`) does client-side validation (required fields, email format) with inline error messages and a success state on submit. It does not call any backend — there's no API route — per the agreed scope.
- **Icons/illustrations**: All icons (stat icons in the hero, feature icons, logo mark, checkmarks, chevrons, dashboard mock card) are hand-built inline SVG/CSS rather than image assets, so the project has zero binary asset dependencies and stays fully responsive/scalable.
- **Fonts**: Open Sans is loaded via Google Fonts `<link>` tags in `pages/_document.js` (matching the typeface used in the original Webflow design), with a system-font fallback stack defined in `--font-base`.
- **Dependencies**: Only `next`, `react`, and `react-dom` — nothing else. No icon packages, no animation libraries, no CSS frameworks.

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

This project was built with **Claude** (Anthropic), used as an AI coding assistant directly in this conversation to: scaffold the Next.js Pages Router project, write all components and CSS from the screenshot/reference analysis, and verify the project builds and runs (`npm run build`, `npm run dev`) before delivery. No other AI coding tools were used.
