# Niche robotics research audit

Review date: 2026-10-07. Eight entries, 42 source records. Only research/niche.json and this file were written. All summaries are 25 words; each entry has 4–6 sources, precise evidence, and a material caveat.

## What was read

- **Monumental:** homepage, fleet/Atrium pages, July 18, 2026 company field/funding update, July 15 Tech.eu report, and February 2024 r/technology discussion. The distinctive wedge is finished-wall subcontract pricing plus coordinated compact robots. July company post reports more than 100 homes' brickwork and more than 100 robots. This does not mean complete autonomous house construction. Press coverage is funding reporting, not an independently audited productivity study.
- **Mytra:** homepage, January 15, 2026 Series C/deployment update, January 30 patent register, and US12345312B2 technical description. August 2026 r/MechanicalEngineering discussion led to the real patent. Rolling elements translate along complementary rack geometry to reduce sliding losses and permit engagement/disengagement. Published lift capability is 3,000 lb. Early labor/density improvements and advertised uptime are company claims, not independent fleet statistics.
- **Gecko Robotics:** homepage, Cantilever platform, March 17, 2026 Navy announcement, March 19 Stars and Stripes article, June 2, 2025 RUG technical post, and 2022 Wevolver Reddit demo sharing. The technical post explains ultrasonic A/B scans and illustrative DQN thickness estimation from signal-consistency rewards, with explicit limitations. Navy $71m is a five-year IDIQ ceiling; initial 18-ship work is described by Gecko as up to $54m. These figures are not revenue.
- **ANYbotics:** homepage, ANYmal specifications/capabilities, ANYmal X page, Grace case, March 30, 2026 SAP feature, ETH perceptive locomotion project, and official ANYmal C model repo. SAP reports 200+ productive robots and explicitly documents testing, an on-site field engineer, and staff training for deployment. SAP is a partner, not a neutral auditor. ETH research and simple robot model are labeled research lineage/assets, not the commercial controller.
- **Carbon Robotics:** current homepage, technology page, G2 product engineering page, Cornell/Rutgers reporting, full Pest Management Science paper DOI 10.1002/ps.8912, and July 2026 r/computervision discussion. Field evidence covers peas, beets, spinach, multiple passes, and species-dependent results. Hidden meristems in grasses and purslane limit effectiveness. G2 module engineering differs from the earlier generation, so counts were not mixed. Current 200+ growers/15 countries are vendor-reported.
- **Exotec:** robot specifications, February 6, 2025 next-generation announcement, October 15, 2025 deployment update, and June 10, 2026 DSV customer announcement in Dutch. DSV confirms roughly 100 robots and 100,000 bins/trays at Venlo. More than 200 sites and 10,000 robots are an October 2025 company snapshot. Focus is container retrieval and integrated workflows, not arbitrary manipulation.
- **CMR Surgical:** international/US pages, Plus clearance/design release, FDA K252111 record and seven-page summary, and March 19, 2026 open-access COMPAR-P paper. FDA fixes the clearance date as December 16, 2025 despite ambiguous updated dates on the company release. Cleared US use is adult cholecystectomy. COMPAR-P has 150 patients, 50 per platform, two surgeons, one center, and six-month follow-up; no universal superiority or economic claim follows.
- **FieldAI:** current EDGE/BWM homepage, August 2025 $405m announcement, April 2026 Big-D testimony, March Boston Dynamics joint release, October 2 SiliconANGLE/BI financing report, and October 2 Reddit discovery post. Reddit/aggregators say $700m “raised”; stronger reporting describes a signed term sheet with closing not established. Reported revenue combined with contracts is not recognized revenue. Public architecture is proprietary company framing with no standardized benchmark located in the reviewed material.

## URL and social audit

Every final source URL was opened through the web connector and yielded the expected page/document or canonical redirect. Relevant material was read, not inferred solely from titles. Exotec's homepage timed out twice while official product and news pages worked, so the published website link is its working robot product page. A retrieval timeout is not evidence the company is offline.

Exact-name searches targeted X, Twitter, Reddit, robotics/engineering communities, and post/status paths. Useful Reddit discoveries were retained for Mytra mechanics, Monumental economics, Carbon field constraints, Gecko demo context, and FieldAI's latest financing. Source notes identify unverified opinions and promotional sharing.

X searches often returned empty or unrelated results. Indexed mirrors surfaced @salar/@BuildMonumental and @carbon_robotics, but exact post text and status URLs could not be verified. No guessed URLs were published.

[Modern Robotics Registry](https://roboticsregistry.net/companies/field-ai) supplies an exact [FieldAI MCL partnership post](https://x.com/fieldai_/status/2074169233236496844). Opening it returned zero readable lines. This is an access/readability limitation, not an observed 404. It remains a follow-up lead and is excluded from public factual support.

Resources omitted after verification:

- The July 2025 Monumental r/singularity original post is deleted although its comments remain readable. An intact older r/technology discussion was selected.
- Gecko's ship-deck demo page opens but the video requires a form; no form was submitted and no watched-video claim was made.
- Mytra's Eclipse investor article loaded once but did not reliably expose body text and later timed out. Direct patent/company sources were retained.
- BI's October 2026 FieldAI article is indexed but direct opening was blocked. Accessible SiliconANGLE reporting corroborates the substantive term-sheet qualification.
- PubMed intermittently returned only a footer for COMPAR-P; the full open Springer paper is the final source.
- CMR's 2025 registry paper at PMC hit a browser check; the 2023 BMJ registry page returned 403. These are access blocks, not established broken papers, and were not used.
- CMR's 45,000-case press-release URL redirected to a generic homepage. Geolocation redirects alternated between regional pages. No final standalone case-count claim relies on that unstable link.
- Gecko X profile retrieval failed. No profile was presented as a verified thread or technical source.

## Problems and experiment leads

1. **Total deployment economics.** SAP explicitly describes ANYbotics on-site engineering/testing; Monumental's service model absorbs similar integration burden. Measure intervention rate, whole-shift uptime, validated workflow value, and support labor, not only task success.
2. **Measurement quality before prediction.** Gecko's technical post reveals labeling and signal ambiguity: a heuristic reward can prefer plausible measurements without calibrated defect coverage or generalization. Dense data does not automatically mean reliable failure forecasting.
3. **Agricultural biology and timing.** Cornell/Rutgers documents hidden meristems, species dependence, and multiple treatment passes. Detection, laser energy, crop injury, timing, and per-acre throughput jointly constrain economics.
4. **System-scale material flow.** Mytra/Exotec have distinctive topology and sequencing; ingress/egress, workstations, order mix, maintenance access, and recovery behavior still determine customer performance.
5. **Clinical validation vs. mechanical capability.** FDA's intended-use scope and COMPAR-P's limited comparison illustrate the need for indication-specific outcomes, training, utilization, service costs, and longer follow-up.
6. **Measured uncertainty-aware autonomy.** FieldAI has named deployments; the missing public diligence layer is standardized safety/generalization evaluation and intervention/coverage metrics.

An unusually buildable experiment: synthesize ultrasound A-scans with repeated echoes, noise, pits, and distractor peaks. Compare classical peak spacing, supervised estimates, and a small DQN trained from signal-consistency rewards. Hold out materials/defects to expose reward hacking and calibration failure. Inspiration: [Gecko's RUG post](https://www.geckorobotics.com/resources/blog/reinforcement-learning-for-rug). This is educational reconstruction, not Gecko's proprietary implementation or a production inspection system.

Another useful experiment compares blind and perceptive locomotion while degrading simulated exteroception. Use the [official ANYmal C model](https://github.com/ANYbotics/anymal_c_simple_description) and [ETH perceptive-locomotion research](https://leggedrobotics.github.io/rl-perceptiveloco/). Verify controller/simulator compatibility before promising a one-command reproduction.

## Categorization

Gecko measures structural condition; ANYbotics primarily inspects operational equipment state. Mytra targets heavy volumetric material flow; Exotec targets container fulfillment. FieldAI bridges niche industrial deployment, world models, foundation models, and digital twins. CMR is a surgeon-controlled assistance platform. No padding was added: these eight cover construction, logistics, inspection, agriculture, surgery, and industrial autonomy.
