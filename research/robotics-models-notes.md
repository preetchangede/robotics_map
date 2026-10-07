# Robotics and foundation-model research audit

Reviewed 2026-10-07. Scope: ten selected companies, four in general-purpose robotics and six in robotics foundation models. The accompanying JSON is curated research, not an exhaustive market census or a ranked investment list.

## Selection and categorization

- General-purpose robotics: Figure, 1X, Agility Robotics, Sunday. Each combines a robot embodiment with a broad autonomy ambition. Agility's strongest verified role is still bounded logistics.
- Foundation models: Physical Intelligence, Skild AI, Generalist, Dyna Robotics, RLWRLD, X Square. Dyna also builds embodiments and deploys systems; its primary research distinction here is world-action modeling tied to commercial manipulation.
- Open releases, differentiated data/architecture choices, real customer evidence, and disclosed evaluation protocols drove selection. Funding and edited demos alone did not.
- `Deployed` describes at least one documented operational application; it does not mean a company's entire general-purpose ambition has been deployed. `Pilot` describes documented limited field testing. 1X's NEO and Sunday remain `Demonstrated` because their announced consumer rollout/beta does not establish completed deployments.
- Related-company links express research relationships, not commercial partnerships. Tags distinguish approaches rather than imply equivalent benchmark results.

## Research method and access limits

Used web search across official sites, arXiv, GitHub, customer announcements, credible reporting, X, and Reddit. Read abstracts and release histories for every cited arXiv paper, public GitHub READMEs, relevant primary technical reports, customer material, and accessible discussion text. This audit does not claim to have independently reproduced code, evaluated robot hardware, reviewed every paper appendix, or inspected every demo frame.

Every final source URL was opened through the web tool. Most returned readable documents. Exceptions are explicitly described below and in source notes:

- Physical Intelligence's official root and π0.7 blog returned HTTP 403. Their identity and current model release are corroborated by the arXiv author paper, official GitHub, indexed links, and a direct Reddit announcement link. A blocked crawler is not evidence that the public website is broken.
- All six included direct X posts returned HTTP 403. Exact post URLs were discovered through direct Reddit links or indexed mirrors/video sources. They are useful discovery links; important factual claims are supported by accessible primary documents. No claim depends exclusively on inaccessible X content.
- Zebra's seller announcement returned a web-tool internal fetch error, without an explicit HTTP 404. Its indexed primary announcement corroborates the acquisition; the source note records this limitation. Do not label the URL verified readable or definitively broken.
- The Wall Street Journal NEO article exposed its introduction and video description, with the remaining article restricted. Indexed excerpts and the accessible introduction support the narrow observation that the hands-on demonstration involved human assistance. No unseen article details are represented as reviewed.
- Direct shell HTTP requests were blocked by the environment's proxy. Network access therefore used the web tool; there was no independent curl-based final HTTP-status audit.

No search-results page is included as a source. No Twitter/X or Reddit URL was fabricated. Anonymous discussion participants' identities and claimed professional experience were not verified.

## Sources actually inspected and editorial decisions

### Physical Intelligence

Read π0.7 arXiv abstract and date history (submitted April 16, revised April 24, 2026), π0.5 abstract (April 22, 2025), openpi README, and the robotics subreddit announcement/comments. Attempted the official π0.7 blog and direct X post; both were access blocked.

The technical description distinguishes context conditioning, mixed data, and flow-based control. Openpi documents π0, π0-FAST, and π0.5; it should not be presented as a public π0.7 release. Reddit raises wear, repeatability, backlash, and facility adaptation questions; it supplies practitioner questions rather than independent test results. No unverified latest financing total was included.

### Skild AI

Read S1 (August 2026), the July 2025 general-purpose-brain account, the September 10, 2026 deployment/revenue account, and the robotics subreddit discussion. Searched and opened the indexed April 15, 2026 Zebra acquisition announcement; fetching failed as recorded above. The X post is a direct link supplied by the Reddit thread.

Crucial metric distinction: S1's 66% unseen-task result is an average cumulative per-step measure with human recovery interventions. It is not a 66% complete-task success rate. Revenue, recognized revenue, customer counts, and workload mix are company disclosures, not audited independent facts. Fetch's installed base and acquired revenue must not be interpreted as demonstrations of newly achieved general autonomy. The entry includes the useful split between prompt adaptation and weight updates without asserting all tasks transfer.

### Generalist

Read GEN-0 (November 4, 2025), the April 7, 2026 model-positioning account, June 4 funding announcement, GEN-1.5 (August 19, 2026), and the Reddit GEN-1.5 discussion. The direct X post was found through indexed mirrors and attempted; access was blocked.

GEN-1.5's 59% one-shot and 83% after five minutes/ten gradient steps are company-run averages on ten simple short-horizon tasks. The report itself acknowledges brittleness. GEN-1's selected fine-tuned reliability should not be assigned to GEN-1.5 one-shot behavior. The June $400 million financing is a dated event, not represented as the company's latest total. Most model parameters trained from scratch is an architectural claim, not proof that pretrained language/video approaches are inferior generally.

### Dyna Robotics

Read Dyna-2 (August 2026), scaling customer deployments (August 27), infrastructure (August 17), the May deployment-gap account, and Dyna-2.1 (September 28). Opened the exact X post discovered via an indexed video listing; it was blocked. Searches for substantive Dyna Reddit discussions mainly surfaced promotional or shallow reposts, so none was padded into the entry.

The million-hour corpus is egocentric human video, not robot interaction hours. Dyna's napkin figures are useful because quality and throughput are separately disclosed: 95/hour at 93% accepted quality versus about 35/hour at 75%. These are first-party customer claims. Matched internal baselines do not establish superiority over every competing VLA. Taku laundry demonstrations are research demonstrations; projected fleet growth is not a delivered fleet. Independent customer-wide ROI and release reproducibility remain unresolved.

### RLWRLD

Read RLDX-1 arXiv abstract and history (May 5–6, 2026), May 7 technical report, GitHub README/checkpoint links, and June 22 AWS collaboration account. Also inspected indexed checkpoint licensing information; individual checkpoint terms require checking, with noncommercial restrictions present on at least one release. No substantive direct social discussion was recovered that merited replacing the technical sources.

The model's contact/motion/memory streams and corrective post-training are substantive differentiators. Author benchmarks are not customer guarantees. AWS's article is coauthored with RLWRLD, so it is partner corroboration rather than independent journalism. LOTTE Hotels work describes structured data collection and a partnership; a 2030 full-scale ambition is not a current autonomous hotel deployment. Avoid describing all checkpoints as unrestricted open source.

### X Square

Read WALL-X arXiv abstract/history (May 29–June 1, 2026), WALL-WM abstract/history (June 1–September 6), official research page, both public GitHub READMEs, and a technical Reddit question about VLA co-training gradients.

The reported 60.5% after fine-tuning is average task progress over 15 real-robot tasks, not complete-task success. The discrete-action objective and continuous flow objective play different training/deployment roles. WALL-WM uses event-grounded conditioning, video/action coupling, and temporal alignment; the README still marks pretrained checkpoints as coming soon. Published code should not be equated with a fully released reproducible production stack. The Reddit post is a useful research question with little substantive reply activity, not evidence of community consensus.

### Figure

Read January 27 Helix 02, September 17 Helix 2.5 30-home evaluation, June 30 Figure 03-at-BMW account, BMW's September 21 customer report, and the accessible Reddit thread. The direct X post was located in an indexed dated roundup and attempted; access was blocked.

BMW independently confirms the Figure 02 pilot: ten months in 2025, assistance with more than 30,000 X3 vehicles, about 1,250 operating hours. Its Leipzig AEON pilot belongs to Hexagon and is not Figure traction. Figure's 56% home result is complete-task success across selected behaviors in unseen homes, compared with a 9% random-initialized control; these tasks were trained elsewhere, so scene generalization is distinct from new-task learning. Safety interventions count as failures. New Figure 03 sequencing work remains a pilot. No edited demo is represented as a blind independent evaluation.

### 1X

Read the NEO order page, April 30 factory account, January 12, 2026 self-learning world-model release, September 17, 2024 historical world-model/data challenge, accessible WSJ introduction and indexed excerpts, and a robotics subreddit discussion linking the hands-on coverage.

The order page says initial autonomy is basic and complex chores can require scheduled remote Expert Mode. Factory capacity and delivery promises do not prove completed consumer deliveries. The January system generates video and uses inverse dynamics to extract actions; its own account discusses depth/geometry limitations. The older EVE dataset challenge is not the full current NEO product stack. The entry describes the privacy implication of a human watching robot cameras without assuming a published fleet-wide intervention rate exists.

### Agility Robotics

Read GXO's June 27, 2024 customer agreement, September 2026 Digit 5 announcement and product page, October 1 FORT memorandum announcement, and the current company home page. The home-page disclaimer explicitly states Digit 5 is in development, specifications may change, some imagery is animated, and some safety features are still in development. No social repost was added solely to satisfy a quota.

The deployed stage refers to Digit's documented SPANX/GXO logistics work. Digit 5's announced orders, design, human detection, and standards work are not delivered fleet counts or blanket safety certification. The FORT memorandum is collaboration evidence, not proof of completed certification. Customer-confirmed operation makes Agility a useful economic reference, while net ROI remains undisclosed.

### Sunday

Read November 19, 2025 glove-data account, technology page, July 17, 2026 ACT-2 evaluation, March 12 financing account, current root, and Will Knight's November 19 WIRED hands-on report. Exact ACT-2 X post was found through an indexed mirror and attempted; access was blocked. Reddit searches yielded little substantive company-specific discussion worth including.

ACT-2's 778/785 successful folds (99.1%) applies to nine named garment classes and excludes socks, underwear, bras, and accessories. It does not establish all-home autonomy. The report's fixed-checkpoint/unseen-home protocol is useful, but grading remains company-run. WIRED witnessed coffee/dishwasher behavior; it did not independently validate an unsupervised home fleet. Some site videos are sped up, and the late-2026 beta is prospective. Glove capture and robot policies share geometry, supporting the data-transfer thesis without proving arbitrary human video is equivalent.

## Rules for presenting and refreshing this dataset

- Keep metric names, evaluation scopes, interventions, and source attribution beside numbers. Figure complete-task success, Skild cumulative per-step success, X Square task progress, and Sunday's scoped garment-folding accuracy cannot be plotted as one comparable score.
- Keep deployment evidence separate from model papers, funding, orders, capacity, beta plans, and selected demonstrations.
- Date funding facts. Treat model releases, public checkpoint availability, commercial shipping, company status, and safety claims as facts that require a fresh check before future publication.
- X and Reddit are discovery and practitioner-sentiment resources. Technical claims should continue to point to accessible company papers, code, customer evidence, or credible reporting.
- Prioritize follow-up evidence on autonomous intervention rates, hardware maintenance, net economics, contact/safety failures, cross-embodiment transfer, and reproducibility. Those gaps recur across the selected companies.

The JSON schema was validated with Python: ten unique IDs, valid categories/stages/source types, all required fields including website, 4–6 direct sources per company, and HTTPS URLs. The research is current to the review date; public first-party assertions remain attributed rather than certified.
