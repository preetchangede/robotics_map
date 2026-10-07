# MORPH

**The physical intelligence index.** A selective, connected research map of robotics, embodied AI, simulation, world models, digital twins, and 3D reconstruction. All project changes are confined to `preetchangede/robotics_map`.

[Production site](https://robotics-map-puce.vercel.app) · [Research files](https://github.com/preetchangede/robotics_map/tree/work/research) · [Review PR](https://github.com/preetchangede/robotics_map/pull/1)

Vercel sign-in protection remains enabled.

**Edition 02 — reviewed 7 October 2026:** 60 company profiles, 21 critical problems, 16 proposed experiments, 30 essential resources, and 509 distinct source-library URLs. The expansion adds 24 companies across every field. Founder provenance covers all 60 companies: 155 founder/founding-team/operator records, 240 public professional or company routes, and 19 unique explicitly published individual professional emails. These record counts are not counts of distinct people or verified working inboxes.

## Explore

- Seven connected technology fields, with explained functional relationships.
- Short company cards exposing the actual job and distinctive technical edge; detailed methods, evidence, caveats, and founder provenance in the profile.
- A “New bearings” lens for this edition's 24 additions.
- An essential syllabus with three field-based paths: Teach a body, Model a world, Capture a space. Each resource explains its learning payoff, prerequisites, time estimate and limits.
- Category, subcategory, research-tag, evidence-stage, difficulty, and resource-format filters.
- Search across four entry kinds and founder names; a source library with links back to entries.
- Shareable category/profile/reading-path URLs; cross-kind related suggestions.
- Browser-local reading-list bookmarks, preserving the earlier Field Atlas storage keys. Bookmarks do not sync between devices.
- Responsive grid/list views, keyboard-contained dialogs and navigation, keyboard section jumps, reduced-motion support, and self-hosted typography.

The identity uses an original geometric M mark, Bricolage Grotesque, Manrope, Instrument Serif, ink/indigo and restrained citron accents. Font licenses are retained in `public/font-licenses.txt`.

## Run and verify

Requires Node.js 22+; production uses Node.js 24.

```sh
npm ci
npm run build
npm run dev
```

The build prepares `src/data/atlas.json`, validates the full research schema and relationships, then builds with Vite. The development server reads generated data; run `node scripts/prepare-data.mjs` after research edits. `npm run preview` serves the production build.

```sh
npm run audit
npm test
```

The browser audit requires a local server and Chromium. Set `ATLAS_BASE_URL` or `ATLAS_CHROMIUM_PATH` to override `http://localhost:5173` and `/usr/bin/chromium`. Screenshots and results are written to ignored `.qa/`. It checks real navigation, filters, browser Back, bookmarking, founder provenance, reading paths, deep links, keyboard focus, and desktop/mobile accessibility. Automated axe checks do not constitute accessibility certification.

## Maintain the research

The source of truth is in `research/`:

- Original company shards: `robotics-models.json`, `niche.json`, `simulation-worlds.json`, `spatial.json`.
- `expansion-{robotics,niche,worlds,spatial}.json`: this edition's selected additions.
- `updates-*.json`: research refinements to existing entries; merged by ID.
- `contacts-*.json`: founding-role evidence, public channels, channel provenance and access status. Company inboxes use `kind: "company"` even when the URL is `mailto:`. Only an explicitly self-published individual professional address uses `kind: "email"`.
- `resources-{robotics,spatial}.json`: the essential syllabus.
- `problems.json`: three critical questions per field, with sources.
- `experiments.json`: proposed protocols, controls, metrics, compute estimates and compatibility limits.
- `taxonomy.json`, `relationships.json`: subcategory assignments and curated technical comparisons. They do not imply partnerships.
- `editorial.json`: concise card copy for the original profiles; evidence and full technology descriptions remain available.
- Corresponding notes and `AUDIT.md`: actual source reads, exclusions, dates, verification limits, and integration review.

After editing, run the build and browser audit. Preparation harmonizes tags and source types. Validation catches duplicate IDs, invalid URLs, missing founder provenance, incompatible contact classification, source/evidence inconsistencies, and dangling relationships.

A future edition should recheck company status, founder roles, published routes and claim-critical primary sources. Update review dates, edition labels and validation dates together. Keep metrics attached to task, dataset, date and intervention policy. Never convert a pending agreement into completed ownership, a contract ceiling into revenue, or a persuasive image into validated physical geometry.

## Evidence and limits

This is a reviewed, editable snapshot, not an automatically refreshed feed. Company disclosures remain attributed. Independent customer or research evidence is distinguished. Sources include 50 Reddit discussions and 15 exact X permalinks; some social/profile requests are access restricted. Their notes disclose that limit, and unread threads are not used as factual proof. Network-policy blocks, login walls, and failed automated retrieval are not automatically treated as broken links.

Founder verification establishes a publicly published professional route and identity. It does not establish inbox deliverability, current employment for historical founders, or a response. Company forms, support addresses, academic emails and legacy maintainer routes are explicitly distinguished. No emails were guessed and no outreach was performed.

The 16 scientific experiments and the syllabus's Build routes were feasibility-researched, not executed on robots or GPUs. Times and hardware requirements are estimates; licenses, version gates, archived code and paid features are disclosed.

## Hosting

Static React + Vite on the existing Vercel `robotics-map` project. `vercel.json` provides the SPA fallback and immutable caching for fingerprinted assets. The app has no runtime secret, backend, remote font dependency or paid API dependency. UI, vendor and research bundles are separately cached; all JavaScript totals approximately 233 kB gzipped for this edition.

Deploy the exact reviewed commit, verify `READY`, and compare authenticated production assets with the tested local build. Preserve the existing deployment protection; do not publish authentication-bypass URLs.
