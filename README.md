# Field Atlas

A selective research map of robotics, embodied AI, simulation, world models, digital twins, and Gaussian splatting. Built only in `preetchangede/robotics_map`.

[Production site](https://robotics-map-puce.vercel.app) — Vercel sign-in protection remains enabled.

**Edition 01 — reviewed 7 October 2026:** 36 company profiles, 21 critical problems, 16 proposed experiments, and 312 distinct source URLs. The research includes 34 Reddit discussions and 13 exact X permalinks, with access limitations recorded.

## Explore

- A seven-field landscape with explained technical relationships.
- Company profiles separating differentiation, methods, problems, evidence, and caveats.
- Category, subcategory, research-tag, evidence-stage, and experiment-difficulty filters.
- Search across companies, problems, and experiments; a source library with links back to entries.
- Deep-linked research drawers and cross-kind connections.
- A reading list saved in this browser; bookmarks do not sync between devices.
- Responsive grid/list views, keyboard navigation, focus-contained dialogs, reduced-motion support, and self-hosted fonts.

## Run

Requires Node.js 22+ (24 recommended).

```sh
npm ci
npm run build
npm run dev
```

`build` validates source-file availability and combines the research into `src/data/atlas.json`. `dev` reads that generated data; run `node scripts/prepare-data.mjs` after a research edit. `npm run preview` serves the production build.

```sh
npm run audit
npm test
```

The data audit validates category coverage, evidence URLs, source types, experiment scope, unique IDs, and relationship targets. The browser audit requires a running local server and a Chromium executable. Set `ATLAS_BASE_URL` or `ATLAS_CHROMIUM_PATH` to override the defaults. It exercises the actual research flow and runs axe checks against desktop/mobile views and drawers. Audit screenshots/results are written to ignored `.qa/`.

## Maintain the research

The editable source of truth lives in `research/`:

- `robotics-models.json`, `niche.json`, `simulation-worlds.json`, `spatial.json`: company research.
- `problems.json`: three concrete questions per field, with primary evidence.
- `experiments.json`: proposed protocols, controls, measurable outcomes, compute estimates, and compatibility limits.
- The corresponding `*-notes.md` files: provenance, source dates, URL checks, access limitations, category boundaries, and unresolved questions.
- `taxonomy.json`: company subcategory assignments.
- `relationships.json`: curated links between companies, problems, and experiments. These are technical comparisons, not partnership claims.

After editing, run `node scripts/prepare-data.mjs`, `npm run audit`, and `npm run build`. The preparation step harmonizes tags and distinguishes documentation/patents from reporting, without changing the underlying claim text.

A new edition should recheck company status and claim-critical primary sources; update entry review dates, edition copy, and the date checks in the audit together. Keep metric definitions and intervention policies attached to results. Do not turn a contract ceiling into revenue, a term sheet into closed financing, a shipping plan into delivered units, or visually plausible rendering into validated geometry.

## Evidence and limitations

This is a reviewed research snapshot, not an automatically refreshed feed. Company disclosures remain attributed; independent confirmation is identified separately. Social discussions support discovery and practitioner questions, not audited performance claims. X often blocks anonymous automated access; exact official-source-linked posts are labeled when their content could not be read. A restricted fetch is not counted as a broken URL. Research notes distinguish these cases.

The proposed experiments were feasibility-researched, not executed on robots or GPUs. Hardware requirements, setup times, and compute costs are estimates. Archived code, checkpoint licenses, backend versions, and paid features are disclosed where relevant.

## Deploy

Vite + React, static hosting on Vercel. `vercel.json` supplies the build command, output directory, hash-route-compatible fallback, and basic response headers. There is no backend, runtime secret, paid API dependency, or remote font dependency. Deploy the exact reviewed commit to the intended Vercel team/project and verify the deployment reaches `READY` before handing off its URL.
