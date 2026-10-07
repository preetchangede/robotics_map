# Edition 01 integration audit

Reviewed 7 October 2026. The six research workstreams used primary sites, papers, repositories, technical documentation, credible reporting, direct Reddit discussions, and exact X permalinks. Detailed source/access records remain in their corresponding notes files.

## Scope and selection

36 companies across seven fields: 4 general-purpose robotics, 6 foundation models, 8 niche applications, 4 simulation/synthetic-data providers, 4 world-model companies, 4 digital-twin providers, 6 reconstruction/splatting companies. There are 21 critical problems (three per category) and 16 proposed experiments spanning every category. Infrastructure anchors and specialist companies are included for different reasons; inclusion is not a ranked endorsement.

## Content corrections preserved

- World Labs/AMD and Cognite/Schneider: announced agreements, closing not established at review.
- FieldAI: later financing report describes a term sheet; do not substitute it for confirmed closed capital.
- Gecko's Navy IDIQ: a ceiling, not realized revenue.
- Skild S1: cumulative per-step metric with recoveries; X Square: task-progress metric; Figure: complete-task metric. These are not comparable percentages.
- Sunday: scoped garment-folding result; 1X: demonstrated autonomy plus remote expert assistance and delivery plans, not independently established broad consumer delivery.
- Agility Digit 5 remains development rather than the basis of its existing deployments.
- Scaniverse belongs to Niantic Spatial. SuperSplat belongs to PlayCanvas. Postshot belongs to Jawset. Academic simulators and research projects appear as resources, not fictitious companies.
- Gracia examples/documentation licensing does not imply an open reconstruction/runtime stack.
- Splat rendering, collision geometry, spatial localization, and physically calibrated twins remain distinct capabilities.

## Source and integration checks

312 distinct source URLs after deduplication. Source notes are retained per entry; the library combines annotations when one URL informs several entries. Official docs and patents have separate types. Important claims cite their supporting URL, and every company evidence URL is present in its source list.

Company/source URLs were reviewed by the research agents through browser reads and indexed primary material. Some X posts and a small number of JS-heavy or access-controlled primary pages could not be read directly; those cases are documented, and no essential technical claim depends solely on an unread social post. Shell HTTP requests to most external domains are blocked by this cloud environment's network policy, so those 403 responses were not misreported as broken websites.

An independent cross-workstream review rechecked acquisition disclosures, selected financial/research metrics, source classification, category boundaries, and cross-category gaps. The integration normalized duplicate tag spellings, added subcategories and curated problem/experiment relationships, diversified related suggestions across entity kinds, and surfaced technical edge explanations.

## Verification scope

The application data audit checks 73 entries, complete category coverage, unique IDs, valid HTTPS URLs, source/evidence consistency, recognized stages, proposed experiment status, and all relationship targets. Browser flow checks cover filtering, search, bookmarks, deep links, scroll/focus behavior, responsive navigation, detail content, and source navigation. Automated accessibility checks are paired with screenshot inspection; they do not substitute for a full accessibility certification.

The website build and exploration flows are tested. The scientific experiments and company benchmark results are not reproduced by this project.

## Final verification results

- `npm run audit`: passed — 73 entries, 312 distinct sources, seven complete categories, no dangling relationships.
- `npm run build`: passed on Vite 7.3.7; the production JS is approximately 154 kB gzipped, including the research data.
- `npm test`: passed against the production preview — 23 flow checks, including eight desktop/mobile axe scans with no reported WCAG A/AA violations in those scanned states, and no browser runtime errors.
- `npm audit`: zero known dependency vulnerabilities after updating Vite to 7.3.7.
- Screenshots inspected for desktop landscape, profile drawers, mobile company listings, and mobile details; 320px navigation and bookmark-storage recovery verified.
- Local navigation timing was approximately 262ms in the audit environment; this is a local measurement, not a promise about a visitor's network/device.

The new Vercel project retains its default sign-in protection. A requested preview-only protection setting was rejected by automatic approval review because public production access was not explicitly authorized. No security-setting workaround was applied.
