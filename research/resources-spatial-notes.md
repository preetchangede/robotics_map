# Essential resources: world models, twins and spatial reconstruction

Reviewed 2026-10-07. This is a curated learning shelf, separate from the proposed experiment protocols. No model training, hardware experiment, notebook execution or paper-result reproduction was performed.

## Selection and learning order

15 resources, with 51 source references / 50 distinct URLs: 3 world-model entries, 4 twin entries, 8 spatial/geometry entries. Formats: 8 Read, 5 Build, 1 Watch, 1 Follow. Every entry has at least two primary or authoritative companion sources. All summaries, differentiation statements and learning objectives satisfy the requested character limits. Times are indicative study/setup budgets, not measured runtimes.

World models: DreamerV3 establishes imagined latent control; DIAMOND gives a playable generative alternative; the current JEPA-WM ablation paper provides a strong empirical test of which representation, conditioning, training and planning choices actually work. These are different mechanisms, rather than interchangeable products or a ranking based on demos.

Twins: the National Academies definition/report supplies the model–data–decision loop; OpenUSD covers scene composition; FMI covers executable dynamical-model exchange; NIST covers credibility and uncertainty. The National Academies and NIST entries have distinct purposes: defining the architecture and research gaps versus judging prediction evidence.

Spatial: start with Stachniss's bundle-adjustment lecture and the COLMAP/Nerfstudio coordinate contract, then original 3DGS and gsplat. Mip-Splatting addresses sampling scale, 3DGUT camera projection/secondary rays, and 2DGS surface geometry. Aras supplies a practitioner follow route grounded in concrete compression code and measurements.

Excluded generic roundups, duplicated paper explainers, speculative universal-physics claims, and closed world-model demonstrations without an essential distinct learning payoff. Genie/Genie 3, MIRA and DTDL are useful adjacent material, but this shelf already covers three mechanisms and two different interoperability layers; adding them would reduce its signal. This is a curated choice, not a claim that excluded work is unimportant.

## What was inspected and verified

- Primary arXiv records/abstracts for DreamerV3, DIAMOND, original 3DGS, gsplat, Mip-Splatting, 3DGUT and 2DGS. The JEPA-WM full HTML was read for design ablations, context/velocity findings, planner failures, DROID evaluation, data scaling and rollout-error discussion; current revision is September 2, 2026. TMLR acceptance is documented in May 2026 submission history.
- Canonical repositories, plus raw current GitHub READMEs for JEPA-WMs, DreamerV3, DIAMOND, gsplat, UnityGaussianSplatting and Reference-FMUs. Official OpenUSD and COLMAP repositories were also inspected.
- JEPA-WM Hugging Face collection opened. Repository verifies released checkpoints and dataset/evaluation routes. DROID real-video evaluation is offline action agreement on 16 recorded Franka videos, not live robot success. RoboCasa tasks are custom, shortened simulated tasks; result generality is limited. Repository is CC-BY-NC 4.0.
- Dreamer current author code says reimplementation, requires Python 3.11+, and cites the 2025 Nature publication. Do not claim the current code is the exact historic training code.
- DIAMOND official project and README were read. Main is Atari policy/model; CSGO requires its separate branch, has no trained RL policy in that demonstration, uses static gameplay and has documented impossible repeated jumps/limited-memory failures. Do not generalize it into a certified physical simulator.
- gsplat main documents unreleased v1.6.0 changes rather than an already-published PyPI version. Current main requires PyTorch 2.7+, whereas historical wheel examples in its README refer to older releases. A suggested optional experiment-data patch records this distinction.
- Mip-Splatting current code includes Gaussian Opacity Fields densification improvements beyond the paper; its recipe retains Python 3.8, Torch 1.12.1 and CUDA 11.3. Pin code before reporting paper-equivalent comparisons.
- Current 3DGRUT README distinguishes 3DGRT tracing from 3DGUT rasterization and hybrid 3DGRUT, documents version 2.0.0/neural harmonic textures in June 2026, supports Linux/Windows, and recommends RT cores for tracing. Do not describe secondary rays as rasterization-only.
- 2DGS canonical repository specifies oriented disks/surfels, normal/depth regularization, bounded/unbounded mesh extraction and fixes. Neither a good image metric nor improved surfaces establishes safe collision geometry.
- COLMAP official tutorial/repository and Nerfstudio custom-data/convention docs were read. Frame directions, OpenGL versus COLMAP axes and arbitrary monocular scale are explicit. Nerfstudio docs still include historical COLMAP install snippets; the shelf points to current canonical installation guidance rather than promising a universally working command.
- OpenUSD release documentation currently shows 26.08. Introduction, tutorial index, glossary and repository build dependencies read. USD authoring/composition is distinct from telemetry transport and validated simulation. Core Python authoring and full usdview have different requirements.
- FMI current standard site and 3.0.2 specification read for solver ownership, event/time handling and interface types. Reference-FMUs README identifies actual BouncingBall/VanDerPol examples. FMPy advertises FMI 1/2/3, Model Exchange and Co-Simulation, not complete Scheduled Execution support.
- National Academies 2024 summary and physical-counterpart chapter were directly read, including feedback, fit-for-purpose fidelity, inverse problems, undersampling and continual VVUQ.
- NIST 2022 publisher abstract and current validation overview were read. Journal version is 2023 volume 35, pp.24–28; the publisher page's publication date is December 2022. The new October 5, 2026 NIST UQ report page/abstract was read, but not its full derivations.
- Stachniss lab course indexes were read for lecture/slides identity and sequence. Exact Basics about Bundle Adjustment YouTube URL opens and matches author metadata; full video playback/transcript was not audited. It is a direct Watch route with primary lab fallback.
- Aras's rendering archive is current through October 1, 2026. Both 2023 compression posts were opened/read, and companion code inspected. UnityGaussianSplatting explicitly states no planned major development since December 2023, original-3DGS scope and platform limitations; the entry says to follow engineering reasoning rather than expect current trainer compatibility.

## Social discovery and access limits

Read direct Reddit discussions on reconstruction objectives, Stachniss recommendations, 2DGS/gsplat implementation discovery, and the recent quicksplat video/COLMAP/3DGRUT pipeline. The latter contains both a working practitioner report and critiques of speed, frame sampling and PLY-viewer compatibility. These inform study questions, not universal performance conclusions.

The Dreamer and DIAMOND X URLs were extracted exactly from primary author READMEs/project pages. Direct X requests returned 403. They remain optional author-context links, visibly labeled in source notes; no technical claim depends on unseen thread text. JEPA author profile is linked by its repo but was not added as an unsupported extra Follow entry.

Direct NIST PDF/DOI fetches returned tool errors, although authoritative publication pages opened. The NIST entry discloses publisher-abstract/lab-overview scope. Modelica's hosted Reference-FMUs documentation path failed retrieval; canonical GitHub sources and the opened specification supply the working learning route. The companion Numerics of Bundle Adjustment YouTube URL was verified from the primary course page but direct retrieval failed; it is not included as a separately verified direct source.

Every main resource URL was opened successfully. This is source access/identity verification, not a guarantee that third-party sites will remain reachable or that every outbound media/download link is permanently available. Build instructions are not fabricated and are not described as execution-tested.

## Integration notes

Only existing source types are used: paper, code, demo, report, docs, x, reddit. Author lecture metadata is demo and the university course index is docs; no schema extension is needed. Related IDs intentionally span companies, problems, experiments and the local resource-colmap entry. All related IDs resolve within existing research arrays plus this file.

Schema validation passed for all 15 resources, source enums, character limits, categories, formats, levels and review dates. Keep the entry caveats and individual source notes visible so access limits and evaluation scope remain reviewable.
