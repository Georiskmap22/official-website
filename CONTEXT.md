# CONTEXT.md, internal orientation notes

Internal working notes for the GRMI official website repo. These are not user-facing docs,
see `README.md` for contributor setup. Written 2026-08-08 against `main` @ `7787944`,
updated 2026-08-30 against `katcha-page` @ `87173ef`.

---

## 1. What this is

The public marketing/content website for **GRMI, Geohazards Risk Mapping Initiative**, a
non-profit doing flood and geohazard risk mapping in Africa (primarily Nigeria, plus Ghana).
The site exists to publish the organisation's work: flood extent maps, dashboards, research
papers, news coverage, awards, events, a schools/children outreach programme
("Children & Disaster"), and a field project page (Katcha Ward).

It is a **content-only single-page app**. There is no backend, no auth, no database, and no
API layer in this repo. Every piece of "data" is either hardcoded in `.vue`/`.js` files or
embedded from a third-party service (ArcGIS, Google Earth Engine, Cloudinary, YouTube).

## 2. Stack

| Concern | Choice |
| --- | --- |
| Framework | Vue 3 (SFC, `<script setup>`, Composition API) |
| Build | Vite 4 (`@vitejs/plugin-vue`, `@vitejs/plugin-vue-jsx`) |
| Routing | vue-router 4, `createWebHistory` |
| State | Pinia, one tiny store, barely used (`src/store/store.js`) |
| Head/SEO | `@vueuse/head` via `src/utils/usePageHead.js` |
| Styling | Tailwind CSS 3, plus hand-written SCSS, plus scoped `<style>` blocks |
| Animation | AOS, ScrollReveal (`vue-scroll-reveal`), two animate.css rules inlined locally |
| UI bits | `@headlessui/vue`, `vue3-carousel` |
| Forms | `emailjs-com` (client-side email, no server) |
| Analytics | Google Analytics gtag, hardcoded in `index.html` (`G-ZRES4EZMMR`) |
| Hosting | Vercel, see section 12 |

## 3. Branching, remotes, deploy

From `README.md`, confirmed by the git history (every commit on `main` is a merge of `dev`):

- `main` is the **live** site
- `dev` is the **test/staging** site
- Feature branches are cut from `dev` and merged back via PR.

**Remotes matter here.** `origin` is `github.com/Adeniyikayodee/official-website`, which is a
**fork**. The upstream repo is `github.com/Georiskmap22/official-website`, where the fork
owner has READ permission only, so work reaches upstream through a pull request rather than a
push. The Katcha work is PR #12, `katcha-page` into `dev`.

The SSH key on this machine is not registered with GitHub, so `git push` over the SSH remote
fails. The `gh` CLI is authenticated and its HTTPS credential helper is configured, so pushes
work against the HTTPS URL:

```sh
git push https://github.com/Adeniyikayodee/official-website.git katcha-page
```

That leaves the remote-tracking ref stale, since `git fetch` uses the SSH remote. Refresh it
with the same URL if `git status` claims you are ahead after a successful push.

Design source of truth is a Figma file linked at the bottom of `README.md`.

## 4. Layout of `src/`

```
src/
  main.js              app bootstrap: pinia, router, @vueuse/head, AOS.init()
  App.vue              nothing but <router-view />
  router/index.js      all 17 routes, flat, no guards, no nested routes
  store/store.js       Pinia `frames` store, controls the map iframe modal only
  views/               HomeView.vue (the homepage composition). AboutView.vue is dead.
  pages/               one component per route; each renders its own <Navbar>/<Footer>
  components/          section components + shared UI
    Buttons/ Cards/ Dropdowns/ carousel/ icons/ katcha/ modals/ sections/ ui/
  utils/               hardcoded content arrays + the usePageHead helper
  assets/              icons/, img/, maps/, styles/
```

**There is no layout component.** Every page imports and renders `Navbar` and `Footer`
itself. Adding a route means remembering to do the same.

`components/sections/` (Header, SectionOne…SectionSeven) belongs exclusively to the
**Children & Disaster** page (`pages/schools/Homepage.vue`). The names are generic but the
content is not reusable.

`components/katcha/` belongs exclusively to the **Katcha Ward** page. See section 11.

## 5. Routes

| Path | Component | Notes |
| --- | --- | --- |
| `/` | `views/HomeView.vue` | eagerly imported |
| `/about` | `pages/AboutUs.vue` | |
| `/team` | `pages/Team.vue` | route exists but is commented out of the nav |
| `/cartographic-maps` | `pages/Projects/CompletedProjects.vue` | nav label "Cartographic Map" |
| `/ongoing-projects` | `pages/Projects/OngoingProject.vue` | absent from the nav |
| `/proposed-projects` | `pages/Projects/ProposedProjects.vue` | absent from the nav |
| `/dashboard` | `pages/Dashboard.vue` | nav label "Past Flood Events" |
| `/career` | `pages/Career.vue` | commented out of the nav |
| `/news` | `pages/Insights.vue` | **name mismatch**: route `/news` to `Insights.vue` |
| `/events` | `pages/EventsPage.vue` | |
| `/research` | `pages/Research.vue` | |
| `/floodMaps` | `pages/FloodEvent.vue` | nav label "Webmap & StoryMap"; camelCase path |
| `/awards` | `pages/Awards.vue` | |
| `/reports` | `pages/Reports.vue` | |
| `/gallery` | `pages/Gallery.vue` | one of the largest pages |
| `/Children&Disaster` | `pages/schools/Homepage.vue` | literal `&` in the path |
| `/katcha` | `pages/katcha/Homepage.vue` | see section 11 |

`Insights.vue` is imported eagerly alongside `HomeView`; every other page is lazy
(`() => import(...)`). There is **no catch-all / 404 route**, so unknown paths render a blank
`<router-view>` because Vercel serves `index.html` for everything. A side effect worth knowing:
a request for a file that is missing from `public/` returns 200 with `text/html`, not 404.

## 6. Navigation

The navbar is data-driven from two files, both plain arrays:

- `src/utils/NavConstants.js`, internal router links grouped into dropdowns
  (About Us / Projects / Data / Knowledge). Large blocks are commented out: Services,
  Partners, Team, News-and-media, Career.
- `src/utils/CustomNavConstant.js`, **external** links rendered by `CustomDrop.vue`
  instead of `Drop.vue`. Currently just the Google Earth Engine flood-extent apps for
  Ghana and Nigeria.

`Navbar.vue` renders `Drop` for the first list and `CustomDrop` for the second; below the
`break` breakpoint (`max-width: 1058px`) it swaps to `MobileNav.vue`. The "Report Flood"
button is a hard link to an ArcGIS Survey123 form.

## 7. Content & data

All content lives in the repo or in third-party embeds:

- `src/utils/AppsData.js`, flood-map catalogue (state / LGA / country / `map_url` /
  local placeholder image). Feeds `AppsAndData.vue` and the carousel.
- `src/utils/data.js`, partner logos.
- `src/utils/KatchaData.js`, everything on the Katcha page.
- Everything else (team bios, awards, articles, events, gallery) is inlined in the page
  component's `<template>`/`<script>`.

External hosts referenced from `src/`:

- `res.cloudinary.com` (~213 occurrences), the main image CDN for map outputs, under the
  `waleszn` Cloudinary account. Also hosts the site's video, apart from the Katcha files.
- `upcdn.io`, a second, inconsistent image CDN used for a handful of maps.
- `arcgis.com` / `storymaps.arcgis.com` / `survey123.arcgis.com`, dashboard iframe,
  story maps, flood-report form.
- `*.projects.earthengine.app`, Google Earth Engine flood-extent viewers.
- `youtube.com`, embedded videos.
- News outlets (BusinessDay, Vanguard, Tribune, New Telegraph, The Africa Report, ICIR,
  Medium), outbound press links.
- UNDRR / PreventionWeb / UN / YouthMappers / ResearchGate, partner and publication links.

Images are split between `src/assets/` (bundled, hashed) and `public/` (copied verbatim).
Which one a component uses is inconsistent, so check before adding a new asset.

**Every local raster is WebP** as of 2026-08-30. There are no `.png`, `.jpg`, `.jpeg` or
`.jfif` files left in `public/` or `src/assets/`, only `.webp`, `.svg` and `.ico`. Any
`.png`/`.jpg` string still in the source is a remote Cloudinary or ArcGIS URL, so leave those
alone. Convert new artwork before committing it (section 14).

## 8. Styling

Three overlapping systems, in practice all three are in use at once:

1. **Tailwind**, the primary one. Custom theme in `tailwind.config.js`: brand colours
   (`brandgreen #134A39`, `primary500 #2DB187`, `foundation #207E60`, `lightgreen`,
   `brandgray`, `tertiary`), custom `gridTemplateColumns` (`temp`…`temp6`, `customGrid*`),
   custom fonts (`cabin`, `merri`), and **custom max-width breakpoints**:
   `mob ≤600`, `midDesk ≤800`, `tab ≤900`, `tab3`/`break` ≤1058, `break2` ≤1030,
   `tab2` ≤1200, plus min-width `break3 ≥1030`, `desk ≥900`, `window ≥1300`.
   These are mostly **max-width**, so they behave the opposite way to Tailwind's normal
   mobile-first `sm/md/lg`. `tab:hidden` means "hidden on small screens".

   A trap documented in `tailwind.config.js` itself: the entries are emitted in declaration
   order, and `mob` (600) is declared before `midDesk` (800), so both match on a phone and
   `midDesk` wins. Avoid stacking `mob:` and `midDesk:` on the same property.

2. **SCSS**, `src/assets/styles/App.scss` and partials, imported per-page. The design-token
   partial `style-assets/_colors.scss` is **entirely commented out**; the palette lives in
   `tailwind.config.js` instead.

3. **Scoped `<style>`** blocks in individual components, often containing large commented-out
   chunks.

Fonts are requested from `index.html` with `preconnect`, trimmed to the four weights the site
uses (400/500/600/700 Cabin, 400/700 Merriweather). They used to be pulled in through an
`@import` at the top of `src/style.css`, which cost two extra round trips before first paint.
Keep them in `index.html`.

The two `animate.css` classes the site uses (`animate__animated animate__fadeInDown`, both in
`Navbar.vue`) are defined locally at the top of `src/style.css`. The CDN stylesheet they used
to come from was removed. If you need more animate.css classes, add the keyframes there
rather than restoring the CDN link.

Icons are inline SVG. The Material Icons font was removed once its only two glyphs, a close X
in `Navbar.vue` and an envelope in `Footer.vue`, were replaced.

## 9. Head / SEO

`src/utils/usePageHead.js` wraps `@vueuse/head` and prefixes every title with `GRMI | `.
Call it at the top of a page's `<script setup>`:

```js
usePageHead({ title: '…', description: '…', keywords: ['GRMI', '…'] })
```

Used by 12 pages, including `katcha/Homepage.vue`. HomeView, Team, Career, OngoingProject and
ProposedProjects skip it and fall back to the static `<title>` in `index.html`, which
`main.js` also re-sets imperatively on mount.

## 10. Forms

Both forms use EmailJS directly from the browser. Service/template/public keys are
**hardcoded in source** (`service_8r4m70n`, `template_f7qkatb`, public key
`qMdxhbqTaNmmFVE2s`). There is no `.env` file and no `import.meta.env` usage anywhere.
EmailJS public keys are designed to be client-visible, so this is fine as a secret, but it
does mean rotating them is a code change and the endpoint is open to abuse.

- `components/GetInvolved.vue`, the live one, on the homepage. Validates that name and
  email are non-empty, then `emailjs.sendForm(service, template, '#myForm', publicKey)`.
  The `sendForm` promise is **not awaited** and the "success" state is a hardcoded 2 s
  `setTimeout`, so the UI reports success regardless of whether the send actually worked.
- `components/modals/GetInvolvedModal.vue`, **dead code**. Its only usage in
  `GetInvolved.vue:111` is commented out, and its `sendForm` call is malformed: it passes
  a template-params object where the 4th argument should be the public key.
- `components/modals/SubscribeNewsletterModal.vue`, rendered by `Footer.vue`.

## 11. The Katcha Ward page

`/katcha` documents the July 2026 field mission: the FARO 67 flood-tolerant seed handover and
the 2020 to 2025 Sentinel-1 flood assessment. Design follows the Children & Disaster page.

- Components in `src/components/katcha/`, named semantically rather than `SectionOne..Seven`,
  which would have collided with `components/sections/`.
- All content in `src/utils/KatchaData.js`.
- Assets under `public/media/katcha/`, **not** `public/katcha/`. Everything in `public/` is
  served from the site root, so a `public/katcha/` directory would shadow the `/katcha` route
  and 500 the page in dev. The same trap applies to any future route.

`FramedVideo.vue` is the page's player. It takes its aspect ratio from `width`/`height` props
rather than assuming landscape, so one component serves both the 16:9 header film and the
portrait interviews. It uses `preload="none"` so the video stays off the initial page load,
with the poster carrying the frame until someone presses play. The shared
`components/ui/videoPlayer.vue` assumes a landscape band and will crop vertical footage.

`PressScatter.vue` positions its clippings with **percentages, not rem**. The container is
`w-[95.8%]` below 1300px and `window:!w-[80%]` above it, so fixed offsets collide at one width
or the other. Below 800px the absolute layout is swapped for a stack.

`VideoPlaceholder.vue` is currently unused, kept as the pattern for any future pending slot.

Press clippings in `public/media/katcha/press/` are screenshots of live news pages, tagged
`kind: 'project'` or `kind: 'context'` in `KatchaData.js`. Project means coverage of this
work; context means Niger State flood reporting that sets the scene. Keep that distinction
when adding more.

Plan, decisions and open questions live in `katcha.md`.

## 12. Vercel

The project is linked to `adeniyikayodees-projects/official-website` and Git-connected to the
fork. `.vercel/` and `.env*.local` are gitignored.

**Which URL is public matters.** The production alias
`https://official-website-jet-nine.vercel.app` is publicly reachable. The team-scoped alias
and the per-deployment URLs sit behind Vercel SSO and redirect to a login page for anyone
outside the account, so share the jet-nine one.

`vercel.json` holds the SPA rewrite plus cache headers: immutable for the content-hashed
`/assets` bundles, one day with a week of stale-while-revalidate for `/media` and root static
files.

`.vercelignore` exists because **the Vercel CLI does not read `.gitignore`**. Without it the
CLI uploads the raw camera originals from the repo root, which is 2.1 GB and trips the 100 MB
per-file limit. It also excludes the tracked `dist/`, since Vercel runs `vite build` itself.

Deploy from the CLI with `vercel --prod --yes`. Note that the Git connection means a push to
the production branch also deploys, and the production branch is `main` while this work lives
on `katcha-page`. Production is currently correct because of CLI deploys, so either merge to
`main` or change the production branch in Project Settings before relying on Git deploys.

## 13. Known rough edges

Things to be aware of before changing anything:

- **`dist/` is committed.** `.gitignore` has `# dist` commented out, so 450 build artefacts
  totalling 107 MB are tracked. Builds produce noisy diffs, and because Vite copies `public/`
  into `dist/`, every committed media file is stored twice. Vercel builds from source, so the
  checked-in `dist/` serves no purpose. Untracking it is the obvious cleanup.
- **`public/` is 53 MB**, of which 40 MB is the three Katcha MP4s. The rest of the site keeps
  video on Cloudinary, so moving those three there would match the existing pattern and take
  most of the weight out of the repo.
- **Raw camera originals must stay out of git.** `.gitignore` covers `Katcha photos/` and a
  `/[0-9]*.mp4` pattern for camera-roll files dropped in the repo root, one of which is 1.8 GB.
- **`tailwindcss()` is registered as a Vite plugin** in `vite.config.js` *and* as a PostCSS
  plugin in `postcss.config.js`. Tailwind 3 is a PostCSS plugin, not a Vite plugin, so the
  `vite.config.js` entry is a no-op at best. PostCSS does the actual work.
- **Three animation libraries** (AOS, ScrollReveal, the two local animate.css rules) are used
  side by side, with AOS durations on `HomeView` stepped 1000 to 7000 ms to fake a stagger.
- **Dead files**: `pages/bloobb.vue`, `pages/NewsAndMedia.vue`, `pages/Waterlevel.vue`,
  `views/AboutView.vue`, `components/sections/Sample.vue`,
  `components/modals/GetInvolvedModal.vue`. None are routed or imported.
- **`Dashboard.vue` fakes loading** with a 3 s `setTimeout` before revealing the ArcGIS
  iframe; the spinner is unrelated to the iframe's real load state.
- **No tests, no CI, no type checking.** ESLint (`vue3-essential` + prettier skip-formatting)
  and Prettier are configured but must be run manually; `npm run lint` auto-fixes.
- `CustomDrop.vue` and `Drop.vue` still `import { defineProps } from 'vue'`, which the Vue
  compiler warns about on every dev start.
- Route paths are inconsistently cased (`/floodMaps`, `/Children&Disaster`) and one route
  name does not match its component (`/news` to `Insights.vue`).
- Duplicate `id` values exist in `NavConstants.js` link arrays (used as `:key`).
- **WebP has no fallback.** Browsers older than roughly 2020 will show nothing rather than a
  degraded image.

## 14. Commands

```sh
npm install       # or npm ci
npm run dev       # Vite dev server on port 3000
npm run build     # production build into dist/  (note: dist/ is tracked in git)
npm run preview   # serve the built output
npm run lint      # eslint --fix over .vue/.js/.jsx/.cjs/.mjs
npm run format    # prettier --write src/
vercel --prod --yes   # deploy production from the working directory
```

Converting a new image, matching what the rest of the tree uses:

```sh
cwebp -q 88 -alpha_q 100 -m 6 in.png  -o out.webp   # graphics, logos, anything with alpha
cwebp -q 78 -m 6                in.jpg -o out.webp   # photographs
cwebp -q 82 -m 6                in.jpg -o out.webp   # map sheets, protects small chart text
```

## 15. Adding things, the local conventions

- **New page**: create `src/pages/Foo.vue`, import `Navbar` + `Footer` inside it, register a
  lazy route in `src/router/index.js`, call `usePageHead({...})`, and add a link to
  `src/utils/NavConstants.js` (or `CustomNavConstant.js` if it is an external URL). Check that
  no directory in `public/` shares the route name.
- **New section on the homepage**: create `src/components/Foo.vue` and add it to
  `views/HomeView.vue`, giving it a `data-aos` duration one step above the previous section.
- **New image**: convert to WebP first (section 14). Prefer `src/assets/` with a relative
  `import`/`src="../assets/..."` so it gets hashed by Vite. `public/` is only for things
  referenced by absolute path string, or by the `getImgUrl` helpers that build
  `../../public/${filename}`.
- **New video**: prefer Cloudinary, which is where the rest of the site's video lives. If it
  has to be committed, trim and re-encode it first, keep the raw original out of git, and give
  it a poster so `preload="none"` still shows something.
- **Styling**: use Tailwind classes with the custom theme tokens above. Remember the
  breakpoints are max-width, so the site is desktop-first, and avoid stacking `mob:` with
  `midDesk:` on one property.
