# Spatial company research audit
Reviewed: 2026-10-07. Scope: six complementary company profiles in spatial.json, not an exhaustive catalog.

## Selection and entity boundaries
- Niantic Spatial is the independent company launched after Niantic's games sale to Scopely completed in May 2025. Scaniverse is a company product, not a seventh company. The launch announcement and subsequent Snap partnership were opened directly.
- XGRIDS connects capture hardware, trajectory/geometry measurement, reconstruction and large-scene delivery. LCC/Lixel CyberColor and PortalCam are products.
- Volinga is selected for production integration and named applications, rather than merely splat viewing.
- Jawset Visual Computing is the company; Postshot is its local desktop product.
- PlayCanvas is a Snap-owned company/business, explicitly confirmed in current security documentation. SuperSplat, SOG and SplatTransform are its tools/format, not standalone startups.
- Gracia is selected for dynamic 4D reconstruction and streaming, with an emerging physical-AI data offering clearly separated from existing media/XR demonstrations.
- Polycam was not selected because the six entries already cover mobile, hardware capture, local reconstruction, engine integration, web distribution and dynamic capture. This is a scope decision, not a claim that Polycam is inactive or poor.
- Luma was investigated but not selected for this category. Discovery found Flythroughs' January 1, 2026 sunset (industry report) and Genie sunset in the current 3D Capture App Store listing. The listing still describes Capture/NeRF/splat functionality. Do not infer that all Luma 3D Capture is discontinued. Discovery sources: https://radiancefields.com/luma-ai-to-sunset-flythroughs-on-january-1-2026 and https://apps.apple.com/us/app/luma-3d-capture/id1615849914?platform=mac .
- Academic reconstruction methods are research resources, never company entries.

## Sources actually checked and claim discipline
All 36 final source URLs were either directly opened or located and read in indexed primary-page results. Source notes explicitly distinguish primary/company reports, code, papers and practitioner discussion. Social material is supplementary discovery/context; no funding, customer, metrology or performance fact relies solely on social posts.

### Niantic Spatial
Directly read: May 29, 2025 day-one announcement; June 10, 2025 Snap partnership; current Reconstruct product; SPZ README; Cross-View Splatter project page; Reddit on-device Scaniverse discussion.
- $250 million is launch capital stated by the company, not a claimed new 2026 round.
- Snap relationship is an announced partnership/investment; planned 2025 rollout statements were not converted into a verified current deployment claim.
- SPZ's approximately 10x smaller size is the repository's typical claim; profile avoids universal compression performance.
- The SPZ README explicitly discusses coordinate families and spherical-harmonic rotations. Important for any interchange experiment.
- Cross-View Splatter is a research project for sparse ground/satellite novel-view synthesis, not evidence that arbitrary environments are robustly mapped or navigable.
- Current website data counts differ from the 2025 launch page's patent counts. Those numbers were excluded to avoid incompatible historical/current measures.
- Large Geospatial Model claims are differentiated from deployed product surface. No blanket robot-autonomy claim.

### XGRIDS
Directly read: official LCC Studio v2.3 getting-started manual, GitHub LCC white paper, April 2025 company PRNewswire announcement, Volinga Casepak study, PortalCam buyer discussion.
- The official v2.3 manual describes LiDAR+visual inputs, SLAM-based reconstruction, fusion, exports and recommended 64 GB RAM/RTX 3070 or higher.
- Current free/premium capabilities are version dependent; profile tells readers to confirm licensing rather than prescribing a purchase.
- Published format specification includes LOD organization and optional Collision.lci mesh/BVH data. This is not an open-source training engine.
- The 2025 commercial release is a company-issued release, marked as such.
- Casepak's article specifies required sub-millimeter accuracy but does not provide an independently audited achieved error distribution. The profile does not turn that requirement into a performance result.
- Reddit threads show both impressive field results and concerns about long processing/data access. They are anecdotes, not a vendor-wide reliability verdict.
- The exact official LCC Viewer X URL was discovered in an indexed repost at https://mprove.de/blogs/rss/index.php?rss=fosstodon.org%2Ftags%2Fviewer.rss . Opening X returned a page without readable text. Included as a supplementary announcement with an explicit access note.

### Volinga
Directly read or primary search-index text: July 2026 plugin Product Overview, ACES/OpenEXR documentation, May 2026 Casepak study, August 2026 ZARA Kids case study, June 2026 Digital Production technical review, September practitioner exposure discussion.
- Current docs describe modular Renderer/DataBridge architecture, static/animated assets, NVOL/PLY/SOG/SPZ, ACES/OCIO, nDisplay and engine packaging.
- Older manual https://volinga.ai/docs/index.html was also read. Its 0.4.1-era shadow/Lumen limitations were not presented as current 2026 product limits.
- Relighting described as artistic lighting controls, not a claim of physically complete inverse rendering.
- Casepak dataset size and ZARA production count are explicitly company-reported.
- Casepak performance prose was not generalized into a universal FPS promise.
- ZARA case study states loading can take minutes and reports 24 GB VRAM systems; this informed the GPU-memory caveat.
- Reddit exposure issues were used to flag workflow differences, not prove a defect across all versions.

### Jawset
Directly read: current product homepage, Training Configuration manual, pricing feature table, Springer forensic paper, Reddit alternatives discussion. Historical X post was read through its indexed text and exact page opened.
- The actual user guide describes Splat3, Splat MCMC and legacy ADC profiles; masks, image selection, poses and exposure/vignetting compensation are documented.
- Pricing page crawler displays zero-value placeholders for paid plan prices. No paid price is included. Feature gates were clearly readable: Free noncommercial; Indie PLY/SPZ export/commercial rights; Studio HDR/CLI/AprilTags.
- Forensic paper published September 5, 2026 explicitly names Postshot 1.1.0 and RealityCapture alignment. It is a small feasibility study, not a deployment at scale or courtroom-ready validation.
- That paper explicitly treats Gaussian splats as visualization and photogrammetric meshes as measurement geometry.
- The lileaLab X post quotes Jawset's April 2025 v0.6 announcement. It is historical, not evidence for the current version.

### PlayCanvas
Directly read: official SuperSplat page, GitHub editor, September 2025 SOG announcement, September 9, 2026 SuperSplat 3.0 engineering notes, current developer manual, current security document and Reddit 3.0 discussion.
- Company current documentation explicitly says PlayCanvas is part of Snap.
- SOG: spatial ordering, WebP-based attribute encoding, published specification and reference implementations. A 1 GB-to-42 MB example is marked as one scene, not a guaranteed ratio.
- 3.0 has GPU projection/culling/radix sorting and chunked export. 3.0 editor requires WebGPU; do not confuse this editor requirement with the engine's separate WebGL/WebGPU support.
- Version 2.x is retained for older workflows per release notes. Public editor/engine/viewer/converter are MIT; hosted accounts/services have separate platform terms.
- Reddit release discussion includes publisher participation. It cannot be called an independent benchmark.

### Gracia
Directly read: company homepage text, physical-AI data-page text; primary indexed 4DGS/data descriptions; GitHub Web SDK README and license section; streaming documentation; interactive PlayCanvas demo landing page; Reddit streaming discussion; author-linked X post via original author blog.
- Primary 4DGS page states synchronized cameras, proprietary MINT or PLY sequence output and test-processing offer. Capture quality claims remain company statements.
- Public Web SDK uses WebGPU/WASM and includes Three.js/React/PlayCanvas integrations.
- SDK runtime/WASM are proprietary. Only examples, samples and documentation are MIT. A GitHub-hosted SDK is not an open-source reconstruction pipeline.
- Streaming docs https://docs.gracia.ai/streaming-usage/ explicitly state that API settings are available only to partner accounts.
- Company data page markets sub-mm fidelity, persistent trajectories and semantics. No independent geometry-error study or policy-training uplift was found; profile marks them as claims.
- Mainstream media rendering does not imply controllable physics or reliable collision models.
- Exact X post https://x.com/taziku_co/status/2032785023884288238 was linked and quoted in the author's March 14, 2026 article https://note.com/taziku/n/n2748b4abd94b . Direct Twitter fetch returned 403 and X fetch failed, so the source note discloses this.
- Funding database reports were discovered but excluded because publicly accessible company/investor confirmation was not established in this pass and available reports use inconsistent location/currency descriptions.

## Link verification and access limits
No final source produced a confirmed 404/deleted-page response through the web connector. Normal HTML pages, GitHub, technical manuals, papers and Reddit sources resolved. Niantic's short Reddit URL redirects to a canonical title URL and is valid.
- JS-heavy Volinga homepage/new wiki and Gracia pages have empty or minimal direct text extraction, while the same primary URLs have substantive search-index text. This is partial browser access, not a proven broken link.
- Final X URLs are exact discovered post URLs, never guessed IDs or search URLs. Jawset/XGRIDS X pages resolve without readable text; Gracia practitioner X fetch errors are reported.
- Shell HTTP validation was attempted with Python urllib; network proxy rejected the requests with a 403 tunnel error. This is an environment access limit, not evidence that those public URLs are broken. Do not report those errors as site failures.
- No logged-in Twitter/X access or exhaustive live comment review was possible. Social coverage is a set of exact, relevant posts/discussions, with important facts verified against stronger sources.
- No claim was verified against a privately purchased scanner, subscription or SDK. Public documentation and artifacts are the verification surface.

## Useful connective tissue and experiment leads
1. Captured facility chain: XGRIDS hardware → LCC scene → Volinga/NVOL → Unreal interactive application. Casepak is a concrete cross-company source.
2. Open interchange: the same PLY → SPZ and SOG. Test size, render speed, opacity/color changes and coordinate/SH preservation. Source repos: https://github.com/nianticlabs/spz and https://github.com/playcanvas/splat-transform .
3. Dynamic subject + static world: community runnable demo combines Gracia performer streaming with a World Labs environment using Three.js/Spark: https://github.com/acher249/4dgs-world-foundation-model-demo . This is an integration experiment, not an editable physical simulator.
4. Geometry/appearance separation: forensic primary study explicitly compares a measurement mesh with a visualization splat. Reproduce on an ordinary rigid object with measured scale references; never infer metrology from appearance alone.
5. Large-capture delivery: compare full PLY against streamed LOD viewing. XGRIDS LCC white paper and PlayCanvas 3.0 release explain the engineering constraints and are good starting points.
