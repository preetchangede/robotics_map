# Spatial expansion and founder-contact audit

Review date: 2026-10-07. Scope: research only. Only expansion-spatial.json, contacts-spatial.json, updates-spatial.json and this notes file were written; no application, Git or deployment changes.

## Selection and category boundaries

Six additions were selected: Splatica, Arrival.Space / Stratum1, Amrax, KIRI Innovations, Solaya and SpAItial. Five belong primarily to spatial capture/reconstruction; SpAItial belongs to the existing `world` category because generation and persistent scene representation are its main differentiator. This adds meaningful subcategories rather than six interchangeable splat viewers.

- Splatica: consumer full-sphere capture and preparation of semantic simulation assets. Commercial partnership is verified with Insta360; paying robotics customers and processed-scene counts are explicitly first-party and unnamed.
- Arrival.Space: Stratum1 GmbH's spatial platform plus a genuinely inspectable, MIT-licensed browser SfM/training pipeline. It is neither another company named splat.js nor a claim that all hosted service code is open source.
- Amrax: Metaroom is its product. Chosen for parametric building geometry, mobile LiDAR and a credible CAD/BIM handoff, rather than visual splats. Large-building functionality was a June 2026 public beta; the overall product was already commercial.
- KIRI Innovations: KIRI Engine is its product. The unusual part is several reconstruction representations, mesh handoffs, explicit scale/capture limitations and open Blender integration.
- Solaya: commerce is a deployed use, with a named Karl Lagerfeld content case and an unusually informative PlayCanvas founder interview published October 6, 2026. Homepage robotics/manufacturing applications are coming soon, not deployed.
- SpAItial: strong 3D research team, available Echo generation, persistent scenes and editing. Current spatial consistency is separated from temporal dynamics and physics reasoning promised for future models.

Lifecast was investigated but not presented as an active exceptional company: the opened primary YC listing explicitly says Inactive and Former Founders: https://www.ycombinator.com/companies/lifecast . Its surviving code may still be useful as an archived experiment resource. Scaniverse and SuperSplat remain products of the existing Niantic Spatial and PlayCanvas entries. Existing World Labs is not duplicated as Marble. Broad photo apps, thin hosting wrappers and unverified small projects were not added just to increase the count.

## Actual reads: core sources

All 37 sources saved across the six new profiles were opened through the web research connector. At least four substantive primary technical/company/partner/project sources were inspected per company; additional founder/contact provenance was investigated separately. Direct source pages were used for key facts. Search results were used to discover routes, not to infer mailbox addresses or undisclosed deployment claims.

Splatica:
- https://splatica.com/ — 360° cloud capture, segmentation, USD/collision workflow and VLM-estimated properties.
- https://splatica.com/media/ — founding team, current company-reported traction and public company contact.
- https://www.insta360.com/blog/enterprise/insta360-splatica-gaussian-splatting-partnership.html — April 24, 2026 primary partnership, input devices and output integrations.
- https://www.xraispotlight.com/can-a-360-drone-beat-insta360-for-gaussian-splatting/ — co-founder interview about capture and remaining robotics needs.
- https://shelomentsev.com/ — co-founder identity, professional focus and expressly published individual email.
- https://www.reddit.com/r/GaussianSplatting/comments/1tjn3be/i_compared_3_pipelines_to_reconstruct_3dgs_from_a/ — practitioner comparison with direct reconstructed scenes. File sizes/splat counts are for one capture. A moving turbine in the video was different-time B-roll, not evidence that the static reconstruction recovered motion.

Arrival.Space:
- https://github.com/arrival-space/splat.js — current code/readme: SIFT, matching, incremental SfM, BA, WebGPU training, MCMC, SH, video selection and validation tests.
- https://arrival.space/splat-js/ — opens/redirects to the saved direct interface https://arrival.space/splat-js/index.html .
- https://codex.arrival.space/edit/3d-content/splats — formats, SuperSplat-based editing and collision meshes.
- https://claim.arrival.space/ — exact company boundary, three founders and general inbox.
- https://www.xraispotlight.com/videos/why-gaussian-splatting-changes-everything-for-the-3d-web/ — founder interview, exact Lisa Maria Egger LinkedIn route.
- https://radiancefields.com/arrival.space-splat.js-trains-gaussian-splats-in-browser — August 21 coverage. Its earlier defaults/video limitations differ from the current repository; current code wins.
- https://codex.arrival.space/ — additional primary platform manual.

Amrax:
- https://amrax.ai/facts/metaroom/ — primary product identity, Apple LiDAR input, CAD/BIM outputs and commercial status.
- https://help.amrax.ai/sample-page/getting-started-with-metaroom/what-is-metaroom-by-amrax/ — app/workspace relationship and supported devices.
- https://amrax.ai/wp-content/uploads/2026/06/2026-06-04-Pressrelease_EN_Metaroom_EnterpriseBuildingCapture-1.pdf — primary RoomPlan/proprietary-model architecture, SLAM alignment, public beta, hospital example and beta-specific IFC/PDF outputs.
- https://press.bluebeam.com/2026/02/scanbasierte-grundrisse-direkt-in-pdf-workflows-integriertmetaroom-gibt-kooperation-mit-bluebeam-bekannt/ — primary Bluebeam integration announcement.
- https://amrax.ai/who-we-are/ — Martin Huber and Hans Schlick, company history.
- https://amrax.ai/ — broader commercial capture/planning platform.
- https://amrax.ai/contact-us/ — opened company form. The older /contact/ route redirects here.
The hospital release says work in connection with a Siemens project; it does not establish that Siemens directly bought the product or independently validated metric error. Homepage customer logos and savings counters were not treated as independently verified traction.

KIRI:
- https://www.kiriengine.app/blog/announcement/kiri-engine-revolutionizes-3d-scanning-featureless-object-mode — neural volumetric fitting and surface extraction.
- https://www.kiriengine.app/blog/kiri-engine-4.2-release — April 10, 2026 mesh release; AI scale estimate is expressly not accurate without a known measurement.
- https://www.kiriengine.app/tutorial/tips-to-improve-3d-gaussian-splatting-to-mesh-results — May 2026 capture/method-selection guidance by Jack Wang.
- https://github.com/Kiri-Innovation/3dgs-render-blender-addon — GPL rendering/editing integration; current community-maintenance transition.
- https://www.kiriengine.app/about — current Jack/Chris roles and explicit professional emails.
- https://innovationfactory.ca/clients/kiri-innovation-kiri-engine/ — primary accelerator profile, full names and original three-friend founding narrative.
- https://www.reddit.com/r/photogrammetry/comments/1r1cr1r/i_tried_all_the_free_photogrammetry_software_and/ — practitioner object-capture comparison. Individual runtimes/quality impressions are not a controlled benchmark.
- https://phandroid.com/2022/12/21/meet-nerf-an-accessible-take-on-3d-imaging-technology/ — historical Peter Yang co-founder quote; used only to preserve that founder with a historical-role caveat.
The Blender add-on does not open-source KIRI's proprietary reconstruction. No unsupported investor/funding claim or logo-as-customer inference was added.

Solaya:
- https://www.solaya.ai/ — commerce product, explicit robotics/manufacturing coming-soon boundary.
- https://www.solaya.ai/about — current Massimo Moretti CEO and Mariem Farhat COO identities.
- https://www.solaya.ai/best-practices — capture bounding box, coverage and lighting guidance.
- https://www.solaya.ai/customers/solaya-x-karl-lagerfeld — named 360° product-content case; do not relabel every deliverable as a published interactive GS model.
- https://blog.playcanvas.com/from-iphone-video-to-photorealistic-3d-digital-twin-developer-spotlight-on-solaya/ — October 6, 2026 founder/partner interview, PLY/SOG pipeline, web delivery, Rimowa RE-CRAFTED and explicit roadmap.
- https://www.reddit.com/r/GaussianSplatting/comments/1tcymj8/solaya_algorithm_update_better_reflections_depth/ — May 2026 company announcement and user feedback; small-object regressions and transparency comments are historical, not assumed still unfixed.
- https://www.solaya.ai/contact — public company form.
An April XR AI Spotlight episode labels Mariem CEO, contrary to the company, official company social post and current October interview. The current primary COO designation wins. Homepage generalized mesh/export language is not allowed to overrule the interview's specific roadmap. Conversion/user/SKU counters without methodology were omitted.

SpAItial:
- https://spaitial.ai/blog/echo-2-release — April 28, 2026 primary description of internal 3D representation, GS web conversion, semantics, editing, floor-plan anchor and future temporal/physical consistency.
- https://spaitial.ai/blog/announcing-spaitial — all four founders and company-reported $13M seed.
- https://docs.spaitial.ai/ — primary developer entry point.
- https://spaitial.ai/about — working primary company page used as website link.
- https://www.reddit.com/r/GaussianSplatting/comments/1sz1pkp/echo2_is_a_new_world_model_based_on_gaussian/ — exact export/scan-prior, scan-repair, close-up-quality and compute-economics discussion.
- https://cat3d.github.io/ — opened primary NeurIPS 2024 research project co-authored by Ricardo Martin-Brualla. It is technical background, not evidence of Echo's implementation.
- https://spaitial.ai/support — official footer Contact target; company support form.
Do not treat one-photo generation as a metrically measured twin, the GS viewer as a disclosure of internal model architecture, company WorldScore comparisons as independent validation, or planned dynamics as shipped physics.

## Social discovery and access

Exact Reddit discussions were read for Splatica, KIRI, Solaya and SpAItial. Founder interviews and primary GitHub source were stronger for Arrival.Space; no useful exact Amrax practitioner thread was found. Dedicated X searches included company names plus Gaussian splatting, 360 capture, splat.js and 3DGS. No sufficiently grounded new exact X thread was returned, so no fabricated status URLs or search-result placeholders were inserted. The original spatial profiles retain their exact X resources with their access caveats.

LinkedIn public posts were useful for professional identity and exact route provenance, particularly:
- John Hanke's Niantic Spatial separation announcement.
- Will Eastcott's original collaboration with David Evans, with exact founder profile links.
- Triptyq's primary Gracia founder announcement and Georgii's own CTO introduction, which explicitly gives Andrey's X handle.
- Orlando Avila-García's own Volinga-related post.
- Hans Schlick's Metaroom post.
- Solaya's Mariem co-founder/COO announcement and Massimo's own Solaya post.
- Luke Rogers' own SpAItial announcement.

Direct LinkedIn profile pages commonly returned 999, while public posts remained readable. Such contacts are marked restricted and anchored to primary/published provenance. This is an access restriction, not evidence that the contact URL is broken. Dave Evans' exact Twitter account was obtained from an official PlayCanvas team interview; no current account activity is asserted.

## Founder and contact decisions

contacts-spatial.json covers the original six and the six additions: 12 companies, 26 people, six explicitly published individual professional emails. Public academic/research addresses are labeled with their actual context. All remaining entries use exact published professional profiles and/or clearly labeled company channels. No emails were generated from naming patterns, no private phones/addresses were included, no brokers were used, and no outreach or mailbox delivery tests were performed.

- Niantic: current About page says John Hanke Founder & Executive Chairman. March 23, 2026 primary announcement makes Inhi Cho Suh CEO effective March 30. She is not labeled a founder.
- XGRIDS: primary HKUST(GZ) speaker biography explicitly identifies Kaiyong Zhao / 赵开勇 as founder and CEO; the indexed self-profile matches XGRIDS. Additional founders were not invented.
- Volinga: founder identities come from Mo-Sys and ETC@USC primary event biographies, with own-profile/post corroboration. An indexed 2025 public trade-fair catalog listed a founder email, but the PDF could not be opened and was omitted. Current Volinga legal terms returned a JS-empty body; indexed ARQUIMEA-group wording was not added as a freshly verified ownership claim.
- Jawset: current primary imprint identifies Jascha Wetzel as operator; CG Channel's 2012 coverage identifies Jawset with this developer. Historical founder title is not explicitly established, so role is Owner / developer and the general inbox is labeled a company route.
- PlayCanvas: official author pages give CEO/CTO, and Eastcott's own founding-history post corroborates the two original partners. Existing verified Snap ownership is preserved.
- Gracia: primary investor post verifies both founders; Georgii's own post verifies CTO Andrey Volodin and exact x.com/s1ddok route.
- Splatica: all three founders have primary roles. Eugene's surname transliterations differ; the official press page links the precise Nikolskiy profile. Marat has a company fallback. Andrey publishes his own professional address explicitly.
- Arrival.Space: exact current founder names come from the official page. Lisa's older surname appears in historical material but the current primary spelling is used. Gero has a company fallback.
- Amrax: both founders primary; no guessed email. Martin's published podcast guest profile is corroborated by the indexed self-profile; the Spotify episode is inaccessible to this tool and LinkedIn requires sign-in.
- KIRI: company explicitly publishes Jack's and Chris's emails; accelerator supplies full names/profile links. Peter Yang is preserved as historical co-founder, with current operating role unconfirmed and only a company fallback.
- Solaya: Massimo's exact professional profile avoids homonyms. No independently verified exact Mariem profile was found; company form is the fallback.
- SpAItial: all four founders primary. No executive title was inferred from inconsistent directories. Matthias's lab expressly routes academic applications through its application system; his published academic address is not relabeled as a sales contact.

## Link and data audit

All six selected company websites were opened. Arrival.Space's main site is a JavaScript-heavy shell with little readable text, while its source/manual/live-training interface is readable. SpAItial's root repeatedly timed out in the connector, while /about, technical posts, docs and support opened; the working /about link is therefore the profile website. No new saved source returned a verified 404. Some interfaces require GPU/browser features or accounts and are not represented as headless text demos.

Sources are live URLs, not immutable code snapshots. The review date records when the material was inspected; future GitHub heads and product versions can change. Shell HTTP checks are restricted by the environment proxy, so connector access results were used without interpreting proxy blocks as broken links.

updates-spatial.json supplies concise focus/edge/summary fields and useful cross-links for the original six. It also preserves Niantic's existing technical/commercial sources and appends current primary company/CEO sources. It does not replace the original profiles or edit application files.

Local schema validation checks JSON parsing, unique expansion IDs, category/stage/type enums, all required company/contact fields, matching contact coverage, <=160-character summaries, <=110-character edges, absolute HTTPS/mailto URL syntax, nonempty founder channels and source counts. No network or external-application mutation is part of that check.

