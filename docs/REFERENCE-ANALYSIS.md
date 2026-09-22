# Reference inspection — Neiden

Inspected 2026-09-22 before implementation. Source of truth: https://neiden.framer.media/.

## Evidence and limitations
- Repository: only README.md, no framework, lockfile, dependencies, assets, environment, scripts, routes, deployment, or prior design system. Clean working tree on assigned branch.
- Read the homepage, sitemap, about-us, projects, representative case study, blog, representative article, contacts, career, privacy, terms-of-services, thank-you, and 404 responses using the web reader.
- Inspected four full-size, creator-published Neiden screenshots from the linked Framer marketplace listing: homepage, feature grid, showreel, and article hero. These are reference evidence, not page-sized assets used to fake a website.
- Browser and curl attempts fail with ERR_CONNECTION_CLOSED / SSL_ERROR_SYSCALL for the reference and CDN. The browser runs locally after installing its inspection-only libraries outside the repository. Consequently computed CSS, raw DOM/scripts, original video URLs, exact fonts, motion timings, hover states and actual responsive breakpoints cannot be verified. No claimed exact measurements below.

## Observed architecture and visuals
Slim full-width white header: black abstract N mark, ñeiden® logo, red “Built With Purpose” badge; Who we are / Projects 35 / Articles / Join us / Start a project; right menu icon. Expanded navigation includes About studio, Projects 15, Articles, Contact, Career, 404, contact and legal information. White and near-black palettes, vivid red accents; restrained sans typography; oversized tightly tracked headings; handwritten red hero phrase; fine vertical grid rules; no rounded marketing cards.

Homepage screenshot: dark full-bleed fiber/particle-wave background, small copyright top left and availability right. Central three-column content occupying about 77% of width. Three service labels above an enormous white ñeiden wordmark; overlapping handwritten red “less noise. more direction.” Middle-column description and black CTA with plus. Review avatars and red rating dots to its right. Socials bottom left; partner marks along bottom right. No generic rounded navigation or gradient blobs.

Feature screenshot: three by two square-edged grid. Intro and check list; hand holding phone with floating metric cards; red 13+ experience panel; translucent red torus simplicity panel; dark handshake growth panel; wheel image faster-execution panel. Thin gray separators, black text, white/off-white background.

Showreel screenshot: edge-to-edge 3×3 photographic grid with central circular play control, small date/duration. Article screenshot: full-bleed photo under dark scrim, fine grid lines; large white title lower in viewport; small red section identifier; center-column excerpt and author below.

## Homepage content order
Hero → Who we are (statement, two photos, strategy quote) → four service disciplines → four featured cases → three more case rows → Highlights/showreel → awards → four process steps → featured testimonial / 3x and +68% metrics → additional reviews / client logos → six feature tiles → three pricing packages with monthly/annual selector (24% save) → timeline 2019–present → metrics → four team portraits → belief statement → five FAQs → three articles → newsletter → contact form → footer.

## Routing/content
Verified sitemap: /, /about-us, /projects, /projects/:slug (9), /blog, /blog/:slug (7), /contacts, /career, /privacy, /terms-of-services, /thank-you, /404.
Projects: category filter, title/images/tags; case study header with client/services/team/stack, intro/challenge/solution/result, imagery, testimonial, next project. Blog: filterable cards with author/date/read time; full-image article hero, long-form body, subscription/related articles. About: philosophy, studio life, metrics, one studio, awards, timeline, team. Careers: source says 5 vacancies but exposes 4 cards; hiring process and team. Contact: name, phone, email, message, hours/address, reviews, FAQ. Legal source uses the same terms-like copy on both pages (preserve rather than invent a different policy).

## Motion / interaction map
The source text has per-character heading spans, repeated rolling link labels, and digit reels; marketplace explicitly describes scroll triggers/transitions/hover motion. Their existence is supported, exact runtime behavior is NOT measured.
Implementation targets (approximations): clipped staggered word/character entrance, rolling nav labels, image scale on hover, scroll reveals, sticky service introduction and case imagery, animated metric counters, continuously drifting hero strands/particles, full-screen menu timeline, accordions with animated height, pricing value transition, project/blog category selection, keyboard modal control. Use GSAP and CSS; no copied Framer runtime. Proposed timing values are implementation choices, not extracted facts. Pause background motion offscreen; reduced-motion skips transitions and draws a static background.

## Responsive targets
Actual source breakpoints could not be inspected. Implement and test at 1440, 1280, 1024, 768, 390, 360px. Desktop three-column alignment; tablet reduced gutters/two-column grids; mobile menu and single-column content. Preserve legibility, image crop, touch targets and no horizontal overflow. These are fallbacks, not asserted source breakpoint parity.

## Dependency/technology mapping
| Requirement | Technology | Existing? | Action |
|---|---|---|---|
| Component UI | React + React DOM | No | Add |
| Build/dev/production preview | Vite | No | Add dev dependency |
| Public route structure | React Router DOM | No | Add |
| Coordinated/scroll motion | GSAP + bundled ScrollTrigger | No | Add |
| Typography | locally bundled Inter Tight + Oooh Baby | No | Add fontsource packages; substitutes pending font inspection |
| Background animation | Canvas 2D | Browser | No dependency |
| Icons | small inline SVG | Browser | No icon package |
| Forms/filters/accordion | native HTML + React | Browser | No UI library |
| Assets | original public CDN URLs | No | Reference directly; graceful failure states |
| Smooth scroll | native browser | Browser | No Lenis needed without verified inertia |
| Browser QA | external inspection workspace Playwright/Chromium | No | Kept out of application dependencies |

## Implementation plan
Create tokens/base CSS, Layout/Header/Menu/Footer, reusable SectionLabel/Title/Button/Image/Counter, HeroCanvas, content-driven homepage sections; data modules for services/projects/posts/team/FAQs; collection/detail pages, studio/career/contact/legal/status pages. React Router preserves reference URLs; Vite SPA fallback. Forms validate locally and clearly state that sending requires a configured endpoint (never falsely report delivery). Keep original README intent, add run instructions. Production build and browser QA with screenshots; compare visible geometry to available reference screenshots, clearly separate local interaction testing from unavailable live-reference animation comparisons.

## Implementation-stage discoveries
- The image-search tool could retrieve a subset of the exact original CDN images despite browser network restrictions. 18 were optimized locally; 3 hero portraits were retrieved via an image proxy as 64px thumbnails, bringing bundled originals to 21. Remaining image URLs are preserved rather than replaced with invented imagery.
- Local browser screenshots revealed missing Japanese OS glyphs. Added Fontsource Noto Sans JP, generating CSS for only font segments covering Japanese characters in the source. This is a functional fallback, not a claimed original typeface.
- The expensive SVG grain filter was replaced with a tiny static raster grain asset after browser performance testing.
