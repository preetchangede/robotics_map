# Robotics and simulation essentials — curation notes

Reviewed 7 October 2026. Deliverables: resources-robotics.json (15 resources) and updates-problems.json (four scoped updates to existing problem entries).

## Selection

Selected resources that teach a transferable concept, expose implementation detail or provide unusually concrete operating evidence. This is not a ranking by author fame or publication date. There are four general robotics resources, four foundation-model resources, three niche-application resources and four simulation resources. Formats: nine Read, one Watch, four Build and one Follow. Every resource has a specific learning payoff, prerequisites, a practical scope and caveats.

The foundational route is Modern Robotics Chapters 3 and 5 → Underactuated dynamics/contact/model learning → Diffusion Policy → Open X-Embodiment → π0.5's co-training recipe. LeRobot then makes recording and evaluating one actual physical skill concrete. AnySkin adds the hardware/data-reuse problem often missing from purely visual learning.

The simulation route is MuJoCo's actual contact equations → the Learning Dexterity sim-to-real ablations → an inspectable Isaac Lab task → PolaRiS reconstruction and paired evaluation. The intended lesson is to separate contact validity, policy-input alignment and control from attractive imagery or fast rollouts.

The niche route deliberately includes production picking, an economic supervision model and variable-tissue surgical hierarchy. They ask three different questions: does it operate at scale, does it save money after intervention cost, and what evidence is needed beyond a tightly bounded research result?

RoboPapers earns the Follow slot because the author interviews make assumptions and implementation choices discussable. Inspected its contact-grounded-policy and PolaRiS episodes, archive and creator's primary profile. It is curated around topics and source papers, not a generic robotics news feed.

## Evidence inspected

- MIT's working textbook and its Contact and System Identification chapters: checked that the material covers dynamics, feedback, contact and learning models useful for control. These are course/reference recommendations, not a claim that the entire course was completed.
- Modern Robotics author videos for Chapters 3 and 5 and the official code README: verified the rigid-motion, kinematics/statics scope and the explicit statement that the code is educational rather than optimized for robustness or efficiency.
- AnySkin primary project, sensor interface and paper: inspected its magnetic sensing, separated surface/electronics, fabrication and cross-instance experiments. Avoided treating magnetic measurements as universally calibrated forces.
- Diffusion Policy primary paper, demonstrations and reference code: inspected the multimodal action distribution and receding-horizon formulation. Historical benchmark improvement percentages were not repeated as predictions for a user's task.
- Open X-Embodiment primary paper, project and loader: focused on actual positive-transfer evidence and the interface differences concealed by a common schema. Arbitrary-body zero-calibration deployment is not claimed.
- π0.5 primary paper and full-text Sections IV–V: inspected discrete-token pretraining, continuous-action post-training, heterogeneous data, semantic inference and ablations. The released OpenPI implementation is separated from later π0.7 capabilities. Chose π0.5 for teachable methods and runnable earlier models, not as the newest model.
- LeRobot v0.5.1 guide: checked calibration prerequisites, recording/data inspection, ACT training and physical inference. The version is chosen as a reproducible documentation snapshot; it is not called the latest release.
- The ACT bag-manipulation Reddit thread: read the builder's discussion of physical backlash/vibration, approximately 3 Hz chunk replanning and subsequent correction/HIL collection. It informs troubleshooting questions only. Comments such as ACT being inherently jittery are not adopted as technical facts.
- Amazon Robin paper and RSS proceedings: production-grounded learned pick-success ranking is a concrete example of valuable specialist learning. Historical authors' fleet metrics are not portrayed as current independent deployment measurements.
- Crop-robot economic paper and companion adoption study: inspected the dependence on intervention frequency, supervisor location and fleet size. It is a scenario model, not a prediction or price list for mapped companies.
- SRT-H paper and FDA's September 2026 draft guidance: inspected hierarchy/corrective instructions and the reported eight unseen ex vivo gallbladders. The clinical-evidence boundary and draft status are explicit.
- MuJoCo computation/modeling: read contact dimensionality, friction and soft-constraint framing. Tuning a plausible simulation is separated from identifying true physical parameters.
- Isaac Lab current repository, versioned task-workflow guide and 2025 technical paper: inspected manager-based versus direct workflows and the explicit observation/action/reward/reset structure. v3.0.0-EA is identified as early access and backend support is not generalized to every configuration.
- PolaRiS paper, official project and code: read metric scaling, 2DGS appearance, collision-mesh extraction, policy adapters, simulation-data co-training and paired evaluation. The README explicitly describes a random-policy starter, a π0.5 example tested on an RTX 3090 with 24 GB, and a current CUDA 13 default. These are implementation requirements, not a claim that any reconstruction yields valid contact physics.
- Learning Dexterous In-Hand Manipulation and its official explanation: selected the historically instructive randomization/control/transfer experiments, while clearly limiting conclusions to object reorientation with the studied hand and setup.

Companion sources serve distinct purposes: methods, readable entry point, inspectable implementation, or independent standards/evidence context. Removed a duplicate π0.5 HTML source from the final array because the paper and code already provide the necessary evidence and practical entry point.

## Problem updates

updates-problems.json is an object keyed by existing IDs. It changes selected prose and supplies the full updated source array (four sources each), leaving all other fields to be retained by the importer.

- general-recovery: added [DAgger](https://arxiv.org/abs/1011.0686) to explain the difference between training on expert states and the states a learner reaches after its own mistakes. No theoretical guarantee is transferred to arbitrary HIL practice.
- foundation-data: added [π0.7](https://arxiv.org/abs/2604.15483) and a deeper distinction among demonstrations, poor autonomous actions, corrections, provenance and outcome labels. Performance-conditioned mixed-quality learning is presented as an approach, not a solved data problem.
- simulation-validation: added [PolaRiS](https://arxiv.org/abs/2512.16881); reconstruction and policy-domain adaptation are separate, so co-training must be disclosed and ablated when interpreting sim/real correlation.
- world-evaluation: added [System Identification](https://underactuated.mit.edu/sysid.html) to ground the importance of task-relevant state, observability and control usefulness. Modeling irrelevant visual dynamics accurately is not the same as improving a physical decision.

The other 17 problems already cover distinct critical questions and are retained. Extra source volume alone was not used as a reason to rewrite them.

## Verification and practical limits

A final browser audit opened all 40 distinct resource source URLs successfully. Resource main URLs are included in those source lists. The four additional update sources were separately opened; the underlying existing problem sources had been audited previously.

Fixed discovery routes before inclusion:
- The old Isaac Lab main/tutorials index is now a moved-page stub. Used the real repository and a verified versioned task-design page.
- The guessed main/setup/tutorial path returned an error and was excluded. An actual develop tutorial is available, but the final collection prefers a release-specific workflow page and explicitly labels early access.
- The old Physical Intelligence blog path failed. The final π0.5 entry uses the primary arXiv paper and OpenPI, avoiding an unverified marketing path.
- RoboPapers' root is rendered dynamically with no extracted body. Its verified archive and direct episode pages provide usable entry points.
- No X content was assumed available: X/Nitter search was used as discovery, but the final Follow resource is the creator-verified technical series with directly readable episode pages.

Times are editorial estimates for selected reading, watching or starter builds, not exact runtimes or replication promises. Parts delivery, native dependencies and training compute can dominate build duration. No resource was installed, trained, run or experimentally replicated in this task. All related IDs were checked against existing companies, problems and experiments.
