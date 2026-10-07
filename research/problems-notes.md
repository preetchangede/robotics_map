# Critical problems — evidence notes

Reviewed: 7 October 2026. Scope: three concrete problems in each of the seven atlas categories; 21 entries, 63 source references, 61 distinct final links.

## Method and interpretation

Used live web discovery across research papers, official labs and company technical publications, standards documentation, code, X and Reddit. Followed technical claims to primary sources. Read paper abstracts, project methods and evaluation descriptions; inspected the full-text introduction and evaluation protocol of LIBERO-PRO, the Sentinel introduction and method framing, and relevant sections of official simulation, interoperability, FDA and NIST documents. This is a research synthesis, not a replication of any experiment or an exhaustive literature review.

Each entry separates the problem, economic or technical consequence, candidate approaches and evidence that would change the assessment. The approaches and watch signals are analytical recommendations, not claims that the cited research solves the whole problem. No claim of impossibility is made. Generalization, controller safety, laboratory capability and deployment evidence are deliberately treated as distinct.

Newer papers are labeled as preprints where relevant. In particular, RoboDojo (July 2026), CoCo/action-control consistency (August 2026) and PlayWorld (August 2026) are emerging evidence, not a settled consensus. Their presence is complemented by established primary work.

## Papers and technical sources inspected

- [Sentinel](https://arxiv.org/abs/2410.04640): distinguishes erratic action failures from confident failure to make task progress. Monitoring is not autonomous recovery.
- [RoboCasa](https://robocasa.ai/): task composition and skill coverage; do not interpret simulated household tasks as proof of real household autonomy.
- [Tactile-VLA](https://arxiv.org/abs/2507.09160) and [AnySkin](https://arxiv.org/abs/2409.08276): tactile/force grounding and replaceable sensors. Reported generalization is bounded by their experimental tasks.
- [ASIMOV](https://arxiv.org/abs/2503.08663), [DeepMind's safety framework](https://deepmind.google/models/gemini-robotics/responsibly-advancing-ai-and-robotics/) and [ISO 10218-2:2025](https://www.iso.org/standard/73934.html): semantic behavior, physical safeguards and application safety cover different assurance layers. Only the ISO public scope/overview was available; the full purchased standard was not read.
- [Open X-Embodiment](https://arxiv.org/abs/2310.08864) and [Octo](https://arxiv.org/abs/2405.12213): positive transfer and adaptable interfaces. Neither establishes arbitrary-body, zero-calibration deployment.
- [DROID](https://arxiv.org/abs/2403.12945), its collection workflow and visualizer: diversity and collection burden. The project and revised paper differ in task counts, so no numerical task-count claim is included.
- [LIBERO-PRO](https://arxiv.org/abs/2510.03827): concrete perturbation and task-memorization audit. Findings are attributed to tested policies/settings and are not generalized to all VLA models.
- [SIMPLER](https://arxiv.org/abs/2405.05941), [project methods](https://simpler-env.github.io/), [sim-to-real evaluation perspective](https://arxiv.org/abs/2508.11117) and [RoboDojo](https://arxiv.org/abs/2607.04434): paired physical validation, ranking metrics and expanded capability evaluation.
- [Farmer supervision economics](https://hau.repository.guildhe.ac.uk/id/eprint/17883/) and [autonomous equipment adoption](https://doi.org/10.1002/aepp.13177): scenarios linking interventions, supervisor location and fleet size to economics; no universal ROI estimate is asserted.
- [MassRobotics standard scope](https://www.massrobotics.org/what-is-the-massrobotics-amr-interoperability-standard/) and its public implementation: basic information sharing is explicitly not a fleet manager, navigation or safety system.
- [Amazon Robin production manipulation](https://arxiv.org/abs/2305.10272): production-data-grounded pick-success models, a concrete counterpoint to treating every robotics advance as a general foundation model problem.
- [SRT-H](https://arxiv.org/abs/2505.10251), [FDA system overview](https://www.fda.gov/medical-devices/surgery-devices/computer-assisted-surgical-systems) and [FDA September 2026 draft guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/robotically-assisted-surgical-devices-premarket-submissions): eight unseen ex vivo gallbladders is a bounded tissue result, not autonomous surgery in patients. Draft guidance is labeled as draft.
- [MuJoCo computation](https://mujoco.readthedocs.io/en/stable/computation/) and [modeling](https://mujoco.readthedocs.io/en/stable/modeling.html): contact softness, friction dimensions and model parameter choices. No blanket ranking of simulator fidelity is made.
- [DrEureka](https://arxiv.org/abs/2406.01967) and official code: automated reward/randomization design in selected experiments, not a universal sim-to-real distribution.
- [ACT-Bench](https://arxiv.org/abs/2412.05337), [CoCo](https://arxiv.org/abs/2608.04653) and [Genie](https://deepmind.google/research/publications/60474/): action fidelity, statistical shortcuts and latent action learning.
- [Genie 3 developer disclosure](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/), [PlayWorld](https://arxiv.org/abs/2608.13552), [WorldModelBench](https://arxiv.org/abs/2502.20694) and [Physion](https://arxiv.org/abs/2106.08261): persistence, interactive objectives and physical prediction are complementary evaluation dimensions. Developer capabilities are distinguished from independent validation.
- [NIST continuous validation](https://www.nist.gov/digital-twins/validating-and-advancement), [Azure update propagation](https://learn.microsoft.com/en-us/azure/digital-twins/how-to-send-twin-to-twin-events) and twin metadata: explicit propagation/freshness mechanics rather than a claim that a data stream automatically makes a current twin.
- [NIST interoperability](https://www.nist.gov/publications/interoperability-digital-twins-challenges-success-factors-and-future-research), [OPC UA/AAS](https://reference.opcfoundation.org/specs/OPC-30270/4.1), [DTC interoperability framework](https://www.digitaltwinconsortium.org/wp-content/uploads/sites/3/2022/06/Digital-Twin-System-Interoperability-Framework-12072021.pdf): semantic, timing and organizational integration are separate from transport syntax.
- [NIST credibility](https://www.nist.gov/publications/credibility-consideration-digital-twins-manufacturing), [IR 8356](https://nvlpubs.nist.gov/nistpubs/ir/2025/NIST.IR.8356.pdf) and [2026 workshop summary](https://www.nist.gov/publications/digital-twins-workshops-summary-report): decision-specific VVUQ, data/control integrity and persistent standards needs.
- [2DGS](https://arxiv.org/abs/2403.17888) and official geometry scripts: surface consistency is distinct from rendered image quality.
- [Dynamic 3D Gaussians](https://arxiv.org/abs/2308.09713) and [DG-SLAM](https://arxiv.org/abs/2411.08373): persistent moving primitives and dynamic observations; controlled capture and static-background-only methods are distinguished from full dynamic mapping.
- [LoopSplat](https://arxiv.org/abs/2408.10154) and [hierarchical Gaussian rendering](https://arxiv.org/abs/2406.12080): complementary global-consistency and resource/LOD problems. Renderer FPS is not equated with mapping rate.

## Social-source limits

Six Reddit discussions are included as practitioner discovery or sentiment, with primary sources anchoring the technical claims. Author identity, qualifications and self-reported performance in comments were not independently verified. In particular, the October 2026 walking-robot thread is a useful specific account of actuator and friction mismatch, not a benchmark indictment of Isaac Lab or MuJoCo.

X was searched directly and through author project links. Search visibility was limited. The [Dynamic 3D Gaussians author thread](https://x.com/JonathonLuiten/status/1692346451668636100) is linked directly by the official project at [dynamic3dgaussians.github.io](https://dynamic3dgaussians.github.io/). Anonymous text access returned 403/empty content, so it is labeled as a discovery/demo link and no factual claim depends on its unseen content. This limitation should be preserved in the site methodology.

## Link audit

Opened all 61 distinct initially collected source URLs through the browser service. A stale Amazon Science PDF returned 404 and was replaced by the verified arXiv paper. ASIMOV's root was only a redirect stub, so it was replaced by the verified paper. PlayWorld redirected from the old author namespace to hku-sail; the final URL uses that canonical repository. The shortened Reddit price discussion link was expanded to its verified canonical permalink.

Final non-X source links resolved through the browser service; redirects and dynamic pages can still change. X requires platform access and is explicitly marked as such. Raw shell HTTP requests were blocked by the environment's proxy (403), so no independent curl/HEAD status claim is made. An unsuccessful auxiliary SIMPLER HTML version URL was not included in the final data; the verified abstract/project URLs are used.

The 99%-per-step example is an illustrative calculation, 0.99^20 ≈ 0.818, under explicitly stated independence; it is not a measured robotics deployment rate.
