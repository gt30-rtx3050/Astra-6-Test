# Verification and fidelity report

Date: 2026-09-22. This report distinguishes the tested implementation from reference behavior that could not be observed. **The result is a working best-effort recreation, not a certified pixel-/motion-exact clone.**

## Automated checks

| Check | Result |
|---|---|
| `npm run build` | Pass; Vite production build generated |
| `npm run test` | Pass; 4 tests (category behavior, pricing, asset manifest) |
| `git diff --check` | Pass |
| Browser route matrix | 27 URLs at 1440px and 390px: all render an H1 |
| Additional homepage widths | 360, 768, 1024, 1280, 1440px |
| Total layout checks | 59; no horizontal document overflow |
| App JavaScript exceptions | None in the completed route/interaction runs |
| Production route smoke test | 7 representative routes load with HTTP 200 |
| Fonts | Inter Tight, Oooh Baby and Noto Sans JP load locally |
| Bundled assets | All 21 original WebP assets present; grain texture local |
| Remaining remote assets | **Not all verified.** 53 distinct CDN requests failed in the sandbox browser |
| Dependency audit | `npm install` reports zero vulnerabilities |

Vite emits a benign upstream React Router “use client directive ignored” build warning. There are no build errors. Do not interpret “no application exceptions” as “no console/network errors”: the external CDN failures are real and remain a deployment-environment dependency.

## Interaction checks

- Desktop and mobile menu opens, routes to Articles, closes by button and Escape; body scroll lock and focus restoration.
- Animated menu tested separately with motion enabled, including opening/closing while scrolled down the page. Functional close is timer-backed so it cannot be held open by throttled animation frames.
- Projects: Branding returns 3 cards; SaaS returns 1; All categories restores the collection.
- Articles: Performance Optimization returns 2 cards.
- FAQ expansion/collapse and matching `aria-expanded` state.
- Monthly/annual pricing: Launch $2,500 → $1,900 → $2,500.
- Highlights viewer opens, plays/pauses, advances, closes by Escape; keyboard arrow handling is implemented.
- Required contact fields and email type use native validation. Valid local-preview submission explicitly says it does not send anything.
- Newsletter local-preview submission explicitly says the endpoint is not connected.
- Home, collection, detail, studio, contact, careers, legal, thank-you and unknown URL routes render.
- Header/footer links, project/article card destinations, phone/mailto and legal destinations reviewed.

No emails, subscriptions, external purchases or real customer submissions were sent during testing. Configurable backend success/failure flows have not been tested against a deployed endpoint.

## Motion checks

- Motion-enabled hero letter entrance completes at identity transforms.
- Scroll-triggered heading letters reach identity transforms.
- Animated menu entrance/exit completes and the native dialog closes.
- Reduced-motion mode removes entrances, animation loops and smooth scrolling; the hero draws one static frame.
- Canvas uses a capped drawing rate and avoids rendering offscreen/hidden-document frames.
- Counter animation, CSS image hover scaling, rolling link labels, accordion height tween, pricing transition and floating metric badges are implemented.

Timings are authored approximations, **not measurements of the reference**. Live-reference easing, stagger, parallax and breakpoint-specific motion could not be compared.

## Visual comparison and iterations

Compared local desktop screenshots with the creator-published reference homepage, feature-grid and article-hero screenshots, and source-derived section order/copy. Adjusted the oversized wordmark tracking, hero vertical rhythm, CTA/review alignment, three-column grid, grayscale/red palette, square-edged feature cards, and typographic hierarchy. Reviewed the local homepage, introduction, feature grid, pricing, FAQ, contact and mobile views.

Corrections made after first render:
1. Missing React import in the canvas module.
2. Oversized feature-label selector accidentally affecting the experience card (scoped it to the metric).
3. Expensive SVG grain filter replaced by a small raster texture.
4. Incorrect grain regularity corrected using a random texture.
5. Hero letter tracking and lower-section spacing refined against the reference screenshot.
6. Added local Japanese glyph coverage (OS fonts in the sandbox lacked it).
7. Scoped native-dialog browser tests; used condition-based waits for completed animations.
8. Explicit timer-backed menu close and cleanup for dependable keyboard/modal behavior.

Screenshots of the actual production build:
- [Desktop](screenshots/desktop.webp)
- [Mobile](screenshots/mobile.webp)

## Known differences and remaining work

1. **Reference access:** the sandbox's direct browser/curl connection to the reference and Framer CDN fails. Inspection relied on web-reader responses, sitemap and published screenshots. Raw DOM/CSS/JS, computed styles, exact font files, real responsive breakpoints and original animation timings were not available.
2. **Typography:** Inter Tight and Oooh Baby are visually chosen substitutes; Noto Sans JP is a language-coverage fallback. Exact font parity is not claimed. Partner marks and the small brand symbol are approximations.
3. **Media:** 21 original images are bundled; others retain the source CDN URLs with accessible unavailable-image fallbacks. Three small avatars are 64px proxy thumbnails. A fully offline or CDN-independent site is not delivered.
4. **Hero motion:** custom Canvas 2D fibers approximate the reference's monochrome animated background. It is not the original video/shader, and the strand pattern differs.
5. **Showreel:** original video URL could not be retrieved. A working, explicitly labeled project slideshow replaces film playback; the original 3×3 video-image composition is not reproduced exactly.
6. **Responsive/motion parity:** local layouts were tested, but source breakpoints, sticky-case transitions, scroll inertia, text timing and cursor behavior remain unverified. The featured-work layout and supporting sections are reconstructions, not measured DOM reproductions.
7. **CMS bodies:** titles, collection metadata and navigation URLs were collected from the reference. Detail templates reuse inspected representative case-study/article body content; every individual CMS body has not been independently reproduced. Careers preserves the source's “5 open vacancies” label even though the accessible page exposes 4 cards.
8. **Forms:** no reference/private backend is copied. Production sending and subscriptions require configured endpoints plus server-side security and validation.
9. **Third-party integrations:** Framer CMS editing, analytics, template-purchase overlay and commercial checkout are not included. `/thank-you` explicitly identifies itself as a preview to avoid pretending a purchase took place. External social destinations, except the confirmed Fordelab X link, use platform landing pages because exact account URLs were not available.
10. **Rights:** this is not an export or license of the paid Framer template. Confirm permission to use the branding, copy and assets before commercial publication.

## Packages

Application: React, React DOM (UI), React Router DOM (routing), GSAP (coordinated/scroll motion), Fontsource Inter Tight / Oooh Baby / Noto Sans JP (local fonts). Build: Vite.

Inspection-only, outside the repository's application dependencies: Playwright and @sparticuz/chromium (browser tests), Sharp (image optimization), Prettier invoked through npx (source formatting). No Framer runtime, icon library, UI toolkit, smooth-scroll package or analytics package was added.
