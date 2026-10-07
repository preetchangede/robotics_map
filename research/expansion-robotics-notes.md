# Robotics expansion and public-contact audit

Review date: 2026-10-07. Scope: general-purpose robotics and robotics foundation models. Original robotics-models.json was read and left untouched; changes are supplied separately.

## Selection and categorization

- Added six companies: two foundation-model companies (Genesis AI, Galaxea) and four general-purpose robot/platform companies (Fauna, LimX, Persona AI, Generative Bionics). Their technical distinction is supported by models, code, engineering accounts, or peer-reviewed lineage, rather than fundraising alone.
- Genesis belongs in foundation because aligned human/robot hands, skill capture, learned policy and simulation form its main thesis. Galaxea belongs in foundation because G0.5's unified reasoning/action sequence and model/data releases are the main research value; its hardware remains visible.
- LimX belongs in general because whole-body control and humanoid/platform integration are its central engineering thesis, despite its useful FluxVLA release. Persona belongs in general because it develops a humanoid tool-use platform; welding is its first economically grounded workflow, not evidence of general autonomy.
- Fauna is explicitly marked as an Amazon company after its March 2026 acquisition. Gene.01 methodology is linked to IIT's ergoCub research, but the paper is not presented as a Gene.01 industrial deployment test.
- Kinetix was excluded after discovering a naming collision: the French motion-AI company acquired by Runway and a separate Shenzhen humanoid company are different entities. No identities, funding, founders, or product claims were mixed. Other suggested candidates were not added without an equally strong current technical source set; this is a selection decision, not a negative assessment.

## Substantive limitations retained

- Genesis's end-2026 targeted customer deployments remain future plans. Its demos do not establish human-level dexterity or full-shift reliability. The open Genesis World simulator is not the closed robot model.
- Galaxea G0.5 code/model access and its 500+ hour dataset have noncommercial or gated terms. License files and dataset terms were read. The WRC order counts are explicitly company-reported exhibition activity, not independently verified customer economics.
- LimX's order counts, comparison with another control system, and claimed research-hardware delivery remain attributed. FluxVLA is inspectable; the complete COSA production intelligence stack is not treated as open.
- Persona's July weld uses expert teleoperation plus learned balance. The August technical account describes visual force feedback today and bilateral haptic feedback as a roadmap. Its GTC digital-twin scenes are rendered simulation, not shipyard deployments. Generation labels differed across company recap pages, so the entry does not rest its thesis on a Gen1/Gen2 number.
- The Gene.01 robot model repo has a serial equivalent of closed-loop structures and a noncommercial license. The press release's apt-distribution wording is not taken as proof of an available apt package: the inspected repository still describes packaging as pending.
- Existing entries received concise summaries and distinct technical edges. 1X received a newly read July hand-engineering source and a specifically attributed component-production fact. Nothing turns reported hand production into consumer robot deliveries.

## Source-opening audit

All 34 final new-company source URLs were attempted through the web connector. Thirty-three returned readable relevant bodies; the one direct X URL returned HTTP 403. Readability is distinct from link existence or claim verification. Sources that returned only a JavaScript/navigation shell, unrelated text, or an error were not used to substantiate technical claims. Company press releases and technical evaluations are labeled as first-party evidence.

### Genesis AI

- [GENE-26.5 model, human-matched hands, and data capture](https://www.prnewswire.com/news-releases/genesis-ai-unveils-gene-26-5--the-first-ai-brain-to-enable-robots-with-human-level-physical-manipulation-capabilities-302763638.html) — Relevant body opened and read.
- [Eno: wheeled, articulated general-purpose robot](https://www.prnewswire.com/news-releases/introducing-eno-genesis-ais-first-general-purpose-robot-is-challenging-traditional-humanoid-design-302801103.html) — Relevant body opened and read.
- [Genesis-World source and examples](https://github.com/Genesis-Embodied-AI/genesis-world) — Relevant body opened and read.
- [LG CNS partnership and phased validation](https://www.prnewswire.com/news-releases/genesis-ai-and-lg-cns-enter-industry-first-strategic-partnership-to-scale-general-purpose-robotics-across-enterprise-operations-302801102.html) — Relevant body opened and read.
- [GENE-26.5 demo discussion and original X source](https://www.reddit.com/r/singularity/comments/1t5lxmh/genesis_ais_gene265/) — Relevant body opened and read.
- [Original GENE-26.5 company demo post](https://x.com/gs_ai_/status/2052050956272230577) — Access restricted: HTTP 403; URL traced from the readable Reddit discussion; X thread contents not read.

### Galaxea Dynamics

- [G0.5: One Autoregressive Stream for Robot Reasoning and Action](https://arxiv.org/abs/2608.11739) — Relevant body opened and read.
- [GalaxeaVLA code, checkpoints, and robot entry points](https://github.com/OpenGalaxea/GalaxeaVLA) — Relevant body opened and read.
- [Galaxea Open-World Dataset](https://huggingface.co/datasets/OpenGalaxea/Galaxea-Open-World-Dataset) — Relevant body opened and read.
- [G0 dual-system model and dataset lineage](https://arxiv.org/abs/2509.00576) — Relevant body opened and read.
- [Fast-WAM: future imagination as an inference choice](https://github.com/yuantianyuan01/FastWAM) — Relevant body opened and read.
- [G0.5 community license](https://github.com/OpenGalaxea/GalaxeaVLA/blob/main/LICENSE-G0.5) — Relevant body opened and read.
- [WRC 2026 full-stack demonstrations](https://www.prnewswire.com/apac/news-releases/galaxea-ai-demonstrated-fullstack-capabilities-and-embodied-ai-generalization-at-its-wrc-2026-productivity-awakening-exhibition-302857785.html) — Relevant body opened and read.

### Fauna Robotics

- [Fauna Sprout technical report](https://arxiv.org/abs/2601.18963) — Relevant body opened and read.
- [Creator Edition hardware and developer interfaces](https://faunarobotics.com/product) — Relevant body opened and read.
- [January 2026 Sprout release](https://faunarobotics.com/news/fauna-robotics-launches-sprout-the-easiest-way-to-build-with-humanoids) — Relevant body opened and read.
- [Fauna joins Amazon](https://faunarobotics.com/news/fauna-robotics-joins-amazon) — Relevant body opened and read.
- [Sprout academic-lab setup and VR-control discussion](https://www.reddit.com/r/robotics/comments/1qoio9e/sprout_robot_from_fauna_robotics/) — Relevant body opened and read.

### LimX Dynamics

- [COSA 0.5 / V³-0 whole-body architecture](https://www.limxdynamics.com/cosa05v3/) — Relevant body opened and read.
- [FluxVLA source, configurations, and deployment workflows](https://github.com/FluxVLA/FluxVLA) — Relevant body opened and read.
- [FluxVLA Engine technical report](https://arxiv.org/abs/2609.17210) — Relevant body opened and read.
- [US$200 million Pre-IPO announcement](https://www.limxdynamics.com/en/news/BK000064) — Relevant body opened and read.
- [Founder interview: TRON, COSA, and commercialization](https://kr-asia.com/limx-dynamics-founder-says-embodied-intelligence-is-just-getting-started-despite-bubble-concerns) — Relevant body opened and read.

### Persona AI

- [First Spark: teleoperated welding at ARC Specialties](https://persona.ai/robot-welding-in-a-real-industrial-environment/) — Relevant body opened and read.
- [Teleoperation, learned balance, and planned haptics](https://persona.ai/teleoperation-preceeds-automony/) — Relevant body opened and read.
- [Is shipyard welding the right first job for humanoids?](https://spectrum.ieee.org/persona-ai-humanoid-robot-welding) — Relevant body opened and read.
- [POSCO investment and industrial technical direction](https://newsroom.posco.com/en/posco-group-expands-humanoid-robots-specialized-in-heavy-duty-industrial-sites/) — Relevant body opened and read.
- [Simulation and the GTC shipyard digital twin](https://persona.ai/news/simulations-digital-twins-the-commercial-engine-for-physical-ai/) — Relevant body opened and read.
- [Welding-demo discussion: fitting, variability, and teleoperation](https://www.reddit.com/r/PowerfulJRE/comments/1v7v4bn/the_first_american_robot_just_laid_down_a_weld/) — Relevant body opened and read.

### Generative Bionics

- [Gene.01 sensing and open-platform direction](https://gbionics.ai/gene01/) — Relevant body opened and read.
- [Gene.01 URDF, package tools, and limitations](https://github.com/gbionics/gb-robot-models) — Relevant body opened and read.
- [Human-aware ergoCub hardware and control optimization](https://www.nature.com/articles/s42256-026-01272-2) — Relevant body opened and read.
- [July 2026 Gene.01 launch and Fincantieri collaboration](https://www.prnewswire.com/news-releases/generative-bionics-introduces-gene01-a-fully-functional-smart-skin-humanoid-robot-platform-designed-for-safe-human-collaboration-302829062.html) — Relevant body opened and read.
- [€70 million funding, founders, and IIT technology transfer](https://gbionics.ai/downloads/PRESS_RELEASE.pdf) — Relevant body opened and read.

## Social discovery and access

- Read the Genesis GENE-26.5 Reddit discussion, the Sprout lab-user thread, and the Persona welding/practitioner debate. Practitioner identity or employment claims were not independently authenticated. Comments inform questions about real usability, safety, task variation and autonomy; they do not verify customer counts, funding, or engineering benchmarks.
- The exact Genesis launch X URL was recovered from a direct Reddit link and opened, but HTTP 403 blocked its contents. It remains a discovery resource with that limitation in its note. No quote or factual claim depends on reading the blocked thread.
- Searched exact company/model names with X and Reddit variants for Galaxea G0.5, LimX/COSA/FluxVLA and Gene.01/tactile co-design. Substantial exact threads were not recovered in this pass. Search-result pages and fabricated status URLs were not added as sources. Promotional stock discussions were excluded.
- X mirrors and indexed snippets were sometimes useful for discovery, but were not promoted to verified primary evidence. LinkedIn company posts and interview descriptions were readable where individual profiles were restricted.

## Contact method and provenance

- Verified 16 companies, 38 named founders, and 49 public routes. Eight direct professional emails are explicitly published by the named person; shared company mailboxes are separately labeled company routes.
- Contact records distinguish the source of a current or dated role from the source that publishes the contact route. No email was inferred from a name/domain pattern, no data broker was used, no private phone was collected, and no messages were sent.
- Emails rendered publicly with at/dot spelling were normalized mechanically to mailto links. This is transcription of disclosed text, not address guessing. Delivery was not tested and an address being published does not guarantee a response.
- Published research Gmail contacts are labeled as professional research/collaboration routes, not company sales inboxes. Academic faculty pages are identity/professional routes; old university email addresses were not repurposed as startup business contacts.
- LinkedIn destinations were followed from accessible official company leadership pages, public company/founder posts, investor tags, or recorded-interview descriptions. The individual-profile destinations returned HTTP 999 or a fetch/access restriction; their full contents and DM availability were not read. The records say restricted rather than broken.
- Persona's three profiles are directly linked by its official team page. Agility's current roles come from official leadership bios; Damion Shelton is chairman, not current CEO. Generative Bionics's six founding names come from the official funding PDF; five profiles were traced through the company discussion and CDP Venture Capital's public tags. Jeffrey Libshutz has only the verified company business form.
- Fauna founder titles are dated to its January 2026 Sprout launch. Amazon acquisition is separately established; a post-acquisition reporting structure is not inferred.
- For X Square, LimX and 1X, no verified direct founder inbox/profile was recovered. Published partnership, business-development, investor and support routes are labeled by their actual company purpose. RLWRLD has an accessible WEF professional bio and an official company inquiry page; its protected email was not decoded or guessed.

## Explicit professional-site identity cross-checks

- [CMU Act3D](https://act3d.github.io/) links Zhou Xian and Theophile Gervet's author websites. Their current self-biographies identify Genesis roles; Zhou's address is published for robotics/AI discussion.
- [Columbia Diffusion Policy](https://diffusion-policy.cs.columbia.edu/) links Cheng Chi and Zhenjia Xu's author websites. Current biographies identify Sunday and Genesis roles, respectively; their published addresses were read directly.
- [Stanford Mobile ALOHA](https://mobile-aloha.github.io/) links Tony Zhao's professional site; its current header identifies Sunday co-founder/CEO.
- [Robot Parkour](https://robot-parkour.github.io/) links Hang Zhao's professional faculty website. Its current biography identifies Galaxea co-founder and publishes a research/recruiting contact.
- [A3 Andrew Barry interview](https://podcasts.apple.com/ca/podcast/andrew-barry-on-why-dexterity-is-the-next/id1837762221?i=1000772012343) names his Generalist co-founder/CTO role and explicitly gives his LinkedIn route.
- [Moonshots Brett Adcock interview](https://podcasts.apple.com/us/podcast/brett-adcock-humanoid-run-on-neural-net-autonomous/id1648228034?i=1000749330199) explicitly links his website. Its Contact page contains a professional inquiry form; current CEO role is separately confirmed by Figure's September company announcement.

## Execution and remaining limits

- Shell external HTTP attempts encountered proxy restrictions and were not used as broken-link evidence. Link review used the web connector, including following primary links; no bulk external scanner output is misrepresented as website availability.
- Dynamic forms were inspected as published routes but not submitted. Gated data was not downloaded. Papers/repositories were read to characterize approach and availability; model benchmarks and hardware demos were not reproduced in this research task.
- Only the four assigned expansion/contact/update/audit files were written in this pass. No application changes, Git mutations, deployments, or outreach were performed.

Independent review confirmed G0.5 section 6.5 also restricts customer/partner demos and hosted endpoints even when free; the profile and license annotation include this distinction.
