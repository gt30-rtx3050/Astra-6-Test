# Astra-6-Test — Neiden recreation

Originally created to test the capability of Astra 6. This repository now contains a React implementation of the public [Neiden reference website](https://neiden.framer.media/).

## Run

```sh
npm install
npm run dev       # Vite on 0.0.0.0; compatible with Arena preview hosts
npm run test      # Data/filter/pricing/local-asset checks
npm run build     # Production output in dist/
npm run preview   # Serve production output
```

Node 22 is recommended. The package lock is included for reproducible installation.

## Structure

- `src/components/Layout.jsx`: shared navigation, animated modal menu and footer.
- `src/components/HeroCanvas.jsx`: original animated monochrome fiber approximation.
- `src/components/ui.jsx`: typography, image, label, button, counter and GSAP helpers.
- `src/components/StudioSections.jsx`, `WorkSections.jsx`, `Forms.jsx`: reusable content sections and interactions.
- `src/pages/`: home, studio, collections/detail templates, careers, contact, legal and utility pages.
- `src/data.js`: source-derived project, article, service, team and FAQ data.
- `src/styles.css`: shared editorial layout, tokens and responsive rules.
- `public/assets/`: 21 optimized original reference images and a generated grain texture.
- `docs/REFERENCE-ANALYSIS.md`: inspection evidence, uncertainties, dependency mapping and initial plan.
- `docs/QA.md`: verification results and explicit fidelity limitations.

## Forms

No reference-site forms or marketing services are called. Without configuration, the forms validate and explicitly report that nothing was sent or stored. To connect a backend, copy `.env.example` to `.env` and provide JSON POST endpoints. A 2xx response is treated as successful delivery. Configure validation, abuse protection, consent, persistence and email delivery on that backend. Never put private credentials in `VITE_` variables: these are public browser values.

## Assets and typography

Twenty-one original images are bundled as WebP. Other assets retain their original public Framer CDN URLs and have accessible error fallbacks. The sandbox cannot directly reach that CDN, so full asset availability was not verified. The small avatars were retrieved as 64px image-proxy thumbnails; larger originals remain publicly referenced elsewhere.

Inter Tight and Oooh Baby are **substitutes**, not claimed verified reference fonts. Noto Sans JP provides the Japanese labels. The generated `src/japanese-font.css` references only relevant Noto font segments; run `npm run fonts` after adding Japanese copy. Font licenses are included by their Fontsource packages.

This is an independently implemented recreation, not an export of or a license to the commercial Framer template. Original branding, images and copy remain their respective owners' property. Confirm your rights before public commercial deployment.

## Deployment

Deploy `dist/` as a static SPA, with route fallback to `index.html` for non-asset paths. A Netlify-compatible `_redirects` file is included. All application links are same-origin paths; browser code never calls sandbox localhost. Optional form endpoints must be provided by your deployment.

## Fidelity status

This is a working **best-effort recreation, not verified pixel/motion parity**. Browser access to the reference was blocked. Source-derived content, public screenshots, and locally tested behavior informed the work. Original video media and exact computed styles, breakpoints, timings and private services were unavailable. See `docs/QA.md` before treating the result as production-equivalent to the reference.
