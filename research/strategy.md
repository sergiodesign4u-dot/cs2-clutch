# Strategy

**Version:** v_refresh
**Prior version:** research/product-model.md (v2, June 2026) - kept in place for history
**Date:** June 2026

**Changelog from product-model.md v2:**
- File renamed from "Product Model" to "Strategy" to match updated research structure.
- AIDA tables (all four) retired. Insights that were action-relevant folded into research/aarrr.md.
- Business Model extracted from "Economy Hypothesis" into its own section with cleaner structure.
- Riskiest Assumption added as a dedicated section (new).
- Age field added to each audience segment profile.
- New competitor findings from v_refresh competitive analysis incorporated: Clash.gg Rain system and custom case creation, DatDrop DatPoints program, Germany X-Ray Scanner mandate, Hellcase 82.1% tested RTP, DatDrop 80.6% tested RTP.

---

## 1. Objectives

| # | Objective | Metric | Target (hypothesis) | Evidence status |
|---|-----------|--------|---------------------|----------------|
| 1 | Drive activation by converting visitors into depositing users | Visitor-to-first-deposit rate | [?] 8-15% | CHALLENGED: Clash.gg's Rain system (free gems every 30 min to active chat, no deposit required) raises the activation bar. A "free starter case" is no longer sufficient to match the category leader - a persistent ambient free-to-play pathway may be needed. Source: https://cs2wh.com/review/clashgg (2026). |
| 2 | Grow retention through core loops (opening, battles, upgrades) | D7 retention, sessions per week | [?] D7 35%+, 3+ sessions/week | CONFIRMED. Battle modes are the primary scheduling mechanic. DatDrop's DatPoints program (5 points per $1 spent, redeemable for cases up to $1,800) and Key-Drop's Daily Case leveling show loyalty programs are an expected retention layer, not a differentiator. Source: https://cs2pulse.com/skins-gambling-guide/best-websites/datdrop-review/. |
| 3 | Generate sustainable revenue from house edge without burning users | GGR margin per user, churn rate | 7-10% on mini-games (confirmed). Case GGR margin [?] | CONFIRMED on mini-games. NEW CONCERN: Third-party tested RTP in 2026 shows a gap between stated and actual: Hellcase tested at 82.1%, DatDrop at 80.6%, Key-Drop stated 89%. The gap between stated and tested RTP is a category vulnerability. Designing to tested (not just stated) RTP is a trust and regulatory requirement, not optional. Source: https://skincasereviewer.com/reviews/hellcase, https://tech-insider.org/datdrop-review/. |
| 4 | Build trust as a differentiator to reduce early churn and increase LTV | Provable-fairness page visits, third-party RNG audit badge, withdrawal completion rate | [?] 60%+ withdrawal completion; become first operator with named third-party RNG auditor | CONFIRMED AND ELEVATED. No competitor has named a third-party RNG auditor as of 2026. Germany's X-Ray Scanner mandate (March 2026) signals that jurisdictions will impose transparency standards. Being ahead of this curve is both a trust play and a regulatory hedge. Source: betterchecked.com 2026 audit, https://games.gg/counter-strike-2/guides/cs2-x-ray-scanner-explained/. |

---

## 2. Audience Segments

Segmented by motivation. Three segments confirmed by competitor design research. Age ranges are estimates from platform audience data and review aggregator demographics.

---

### Segment A: The Thrill Seeker

**Priority: Primary**

**Evidence status: CONFIRMED.** Every major competitor leads with win animations, live drop feeds, and big win celebrations. No competitor leads with expected value or odds tables. The design consensus confirms this segment drives product decisions. Source: platform design review, Clash.gg, Key-Drop, Hellcase, CSGORoll (June 2026).

| Field | Detail |
|---|---|
| **Age** | 18-25 (peak), 18-30 range. Skews younger within the adult 18+ user base. |
| **Profile** | Active CS2 player, follows skin culture and streamers. Has disposable income for entertainment. Uses the platform as a content experience, not a financial strategy. Likely to share wins on social. |
| **Motivation** | The dopamine loop. The ritual of opening, the animation of the reveal, the possibility of a big drop. The experience is the product. Outcome matters less than the feeling. |
| **Pain** | Platforms that feel rigged, laggy, or visually dead. Outcomes that feel predetermined. No excitement in the reveal. Cannot share or show off wins easily. Bot-flooded chat and fake live feeds (confirmed category-wide). |
| **JTBD** | When I have downtime between CS2 matches or want entertainment in the skin ecosystem, I want to open a case with a real drop animation and genuine unpredictability, so that I get the thrill of a reveal and a real shot at something exciting. |
| **Priority reason** | Highest frequency and intensity. Largest share of volume on comparable platforms. The core loop (open, see, react) is the product. |

---

### Segment B: The Grinder

**Priority: Secondary**

**Evidence status: CONFIRMED, REPOSITIONED.** Grinder-oriented features (rakeback, battle lobbies, loyalty tiers, points programs) are present on all top-3 platforms. Gamdom 15% instant rakeback offer confirms segment viability. DatDrop DatPoints (5 pts per $1) and Key-Drop Daily Case leveling are loyalty mechanics that serve this segment. Repositioned above Collector because no major competitor has found it worth building EV-calculator features for the Collector as primary. Source: https://gamdom.com/rewards, https://cs2pulse.com/skins-gambling-guide/best-websites/datdrop-review/.

| Field | Detail |
|---|---|
| **Age** | 20-32. Tends older within the adult range because these users play regularly and track their balance, implying more intentionality. |
| **Profile** | Regular platform user who sees upgrading and battle selection as a skill game. Tracks balance relative to entertainment budget. Actively seeks rakeback or bonus mechanics. More likely to deposit regularly if the platform rewards loyalty. |
| **Motivation** | Squeeze value from the platform over time. Use upgrades to work toward high-value skins. Win battles through timing and opponent selection. Withdraw real value, not just virtual wins. |
| **Pain** | No loyalty rewards. Feels the house always wins too hard. Upgrade paths with no clear odds. Battle matchmaking that feels unfair. Withdrawal that is slow or unreliable. |
| **JTBD** | When I have built up a balance from regular play, I want to use upgrades, smart battle selection, and any loyalty bonuses available, so that I can maximize my chances of withdrawing a skin worth more than I put in. |
| **Priority reason** | Most valuable long-term users by LTV if retained. High-volume, repeat-deposit behavior makes the house edge sustainable at a lower margin rate. |

---

### Segment C: The Collector

**Priority: Tertiary**

**Evidence status: CHALLENGED - downgraded from Secondary.** No major competitor leads product with odds tables, EV calculators, or cost-to-target tools. All lead with win animations and big-drop social proof. No competitor has found it worth building primary features for this segment. Collector needs are served by table-stakes transparency (published odds, provable fairness page) already required for trust-gap objective. Source: platform design review, top 6 competitors, June 2026.

**Decision trace:** Three approaches were considered for the Collector:
1. Build an EV calculator and odds comparison as a primary feature - discarded. No competitor validation, non-trivial build cost, contradicts the Thrill Seeker's core experience.
2. Serve Collector entirely through the trust/fairness infrastructure already required - selected. Costs nothing extra; the odds table and PF page already answer their core question.
3. Build a dedicated "skin wishlist" and cost-to-target tool - discarded. Niche use case with no competitor validation; would require live market price integration.

| Field | Detail |
|---|---|
| **Age** | 20-35. Skews older within the adult range because these users research before spending. |
| **Profile** | CS2 player with a specific skin wishlist. Researches case odds and expected values before spending. Treats case opening as an alternative acquisition path relative to Steam Market or third-party market prices. |
| **Motivation** | Acquire a specific skin at a cost lower than market price, or at least feel the platform gave a fair shot. |
| **Pain** | Hidden odds, no withdrawal transparency, slow or missing withdrawal. |
| **JTBD** | When I want a specific skin I cannot easily afford at market price, I want to open cases or run upgrades where odds are visible, so that I can make an informed decision about whether it is worth the spend relative to buying directly. |
| **Priority reason** | Served by baseline transparency features already required for the trust-gap objective. Does not justify dedicated feature investment beyond that baseline. |

---

## 3. Business Model

### Value Exchange

The platform earns by operating a house edge built into every case and mini-game. Users deposit money, experience the opening ritual, and may withdraw real CS2 skins. The house edge is the structural gap between what users collectively put in and what the platform collectively pays out in skin value.

Steam Market's 15% fee (5% Steam + 10% CS2 tax) and its Wallet lock (no cash withdrawal) are the primary conversion argument: case platform withdrawal bypasses both, delivering a real asset to the user's Steam inventory. This is the value exchange. Source: https://store.steampowered.com/market/.

### Free vs Paid

No true free tier exists in the baseline product (DaddySkins). The market is moving toward ambient free-to-play access as a conversion tool. Clash.gg's Rain system (free gems every 30 min to active chat) is the current frontier. A free starter credit ($0.50-$0.70 range, non-withdrawable) is the table-stakes free-to-try offer. A persistent ambient mechanic (Rain-style) is the emerging competitive expectation for the category leader position.

### Pricing Hypothesis

| Item | Updated status | Target |
|------|----------------|--------|
| Mini-game house edge | CONFIRMED: 7-10% across the category | Design to 7-10% (match market; Clash.gg 7.2-10% by mode) |
| Standard case RTP | [?] UNKNOWN - no competitor discloses | Must be modeled internally before case catalog launch |
| Tested vs stated RTP gap | NEW CONCERN: Hellcase 82.1% tested vs higher stated; DatDrop 80.6% | Publish tested (not theoretical) RTP from day one |
| First deposit bonus | CONFIRMED: 5-20% match + $0.50-$1.00 credit is market range | Launch with 10-15% match + $0.50-$1.00 free credit |
| Rakeback | CONFIRMED: Table stakes (Gamdom 15% zero-wagering, Clash.gg up to 0.75%) | Must offer; design question is rate and wagering terms |
| Withdrawal | CONFIRMED: Commission-free skins-to-Steam is baseline; crypto path adds reach | Commission-free Steam withdrawal as baseline; crypto as Phase 2 |

### Business Model Validation Against New Competitor Findings

- **CONFIRMED:** Streamer and influencer marketing is the primary paid acquisition channel across all competitors (Key-Drop 100+ partnerships, CSGORoll team sponsorships). Organic channels supplement.
- **CHALLENGED:** A "free starter case" is no longer a differentiator. Clash.gg's Rain system is a significantly more engaging free-to-play pathway that requires ongoing platform presence (staying in chat) rather than a one-time click.
- **NEW RISK:** Germany's X-Ray Scanner mandate (March 2026) and expanding geo-blocking across EU reduce the addressable market for launch. Revenue modeling must account for reduced German market access and potential Netherlands/Belgium exclusion.
- **CONFIRMED:** Withdrawal reliability is the most-cited user pain point in review aggregator complaints across all five platforms. Fast, confirmed withdrawal is both a retention and a referral mechanic.

---

## 4. Riskiest Assumption

**Single riskiest assumption to value (not to feasibility):**

Users who care about provably fair fairness and trust infrastructure will discover this platform through it, convert into depositors because of it, and remain longer because of it - at a rate meaningfully above what would be achieved by spending the same effort and money on a bigger first-deposit bonus, more streamers, or a Rain system.

**Why this is the riskiest:**

The entire product differentiation strategy rests on trust being a discoverable, learnable, and decision-changing attribute for the Thrill Seeker segment. If Thrill Seekers choose platforms based on streamer endorsements, social proof from friends, and bonus size (and never actively evaluate provably fair mechanisms, third-party auditors, or bot-free feeds), then:

- The trust infrastructure costs time and money to build but does not return a proportionate acquisition or retention advantage.
- Platforms with better streamers, bigger bonuses, or the Rain system will consistently outacquire and outretain this platform.
- The differentiation position ("trust-first") is technically correct but market-irrelevant.

**How to test it (smallest experiment):**

Before building named third-party RNG auditor infrastructure, run a landing page test comparing two variants:
- Variant A: trust-first messaging ("the only platform with a named, verified RNG auditor - check the result yourself")
- Variant B: experience-first messaging ("the most electric case opening on the web")

Measure: click-through to deposit flow, not just page engagement. If Variant A does not produce measurably higher deposit intent, the trust differentiation thesis has failed at the acquisition stage and must be repositioned (trust as a retention and regulatory hedge rather than a primary acquisition argument).

**What "false" would mean:**

A false assumption does not invalidate the platform. It reframes the strategy. If trust does not drive acquisition:
- Continue building trust infrastructure as a regulatory hedge and retention mechanism (still required).
- Shift primary acquisition investment to streamers, bonuses, and Rain-style ambient free-to-play.
- Compete on experience quality (animation, speed, reveal quality) rather than trust positioning.

Source of the assumption: every competitor claim is that fairness matters; the counter-evidence is that Hellcase (lowest fairness score, no public PF page, 82.1% tested RTP) is also the platform with 2M MAU and 150,000 daily opens - the largest audience in the category. Users are not choosing primarily on trust evidence they can evaluate. Source: https://esports.gg/news/counter-strike-2/what-is-hellcase/, https://skincasereviewer.com/reviews/hellcase.

---

## 5. Product Decisions (v_people, June 2026)

**Locked after persona, JTBD, and targeted re-research. Founder decisions. Not to be reopened without new evidence.**

---

### Decision 1 - Landing page trust signal approach - CLOSED

**Question:** What goes in the hero position: experience-first, trust-first, or hybrid?

**Decision: Hybrid (experience + trust badge inline in the hero unit).**

The reveal animation leads as the hero. An institutional trust badge (third-party auditor name + Trustpilot score once established) is present in the hero unit, not relegated below the fold. Both elements are visible on first paint without scrolling.

**Reasoning:** Post-persona re-research confirmed (FINDING-04 in live-research.md) that mass-market Openers do not self-verify PF before depositing - they use institutional trust proxies (team endorsements, Trustpilot score, auditor badge). A PF page that requires reading is a Researcher tool. An auditor badge in the hero is a visual shorthand that works for both Openers (permission slip) and Researchers (a named signal to look up). Experience-first messaging confirms the platform is in the right category; the trust badge confirms it is the trustworthy version of the category. These do not conflict if hierarchy is correct. The landing page A/B test from Section 4 still runs, but the hypothesis is now: "does an auditor BADGE inline with animation convert deposit flow click-through better than animation alone" - a more precise test than "PF page vs animation page."

**What this closes:** FLAG-01. The trust-differentiation thesis is repositioned from PF self-verification to visual/institutional signal. Trust infrastructure (PF page, auditor badge, bot-free feed) is still built - it is expressed as a badge and as a post-reveal verification link, not as a pre-deposit reading requirement.

---

### Decision 2 - Battle mode at launch - CLOSED

**Question:** How to handle battle mode given low DAU at launch?

**Decision: Hide open matchmaking until organic DAU can fill lobbies under 60 seconds. Friends-only battles as Phase 1.5 soft launch.**

Battle mode is not featured prominently in launch navigation. A friends-only private lobby mechanic (invite a specific user) launches as the first battle mode - no open matchmaking, no bots. Open matchmaking with public lobby browsing activates when the platform can reliably fill lobbies under 60 seconds without bot assistance, as a product gate not a calendar date.

**Reasoning:** The condition in master-research.md Hypothesis 4 is strict: a bot battle is solo opening with extra steps. The D7 retention value of battles comes entirely from real human social tension. Friends-only removes the bot problem entirely while creating a viral mechanic (you need a friend on the platform to play a battle). DatDrop's majority-bot Battle Royale lobbies are the confirmed failure mode. Clash.gg's 30-second matchmaking is the benchmark for when open lobbies become the primary battle surface.

**What this closes:** The "minimum DAU for battle prominence" open question in master-research.md Open Questions Table is now a product gate with a clear condition (60-second fill without bots), not a calendar question. Marked CLOSED as a design decision.

---

### Decision 3 - Free-to-play entry offer at launch - CLOSED

**Question:** What is the MVP free-to-play activation offer?

**Decision: $0.50-$0.70 no-deposit starter credit + daily free case that unlocks on D2+ return.**

The starter credit is the table-stakes activation hook (non-withdrawable, enough to open one low-cost case). A daily free case - scaling in quality with engagement level over time, matching Key-Drop's Daily Case model - is the return incentive wired to D7 retention.

**Reasoning:** Rain-style ambient distribution (Clash.gg model) requires DAU density to be meaningful - a new platform without concurrent users will have an empty ambient mechanic. Key-Drop's Daily Case leveling is confirmed as a working retention pattern (mentioned in research/competitive-analysis.md and aarrr.md). The combination of activation credit (D1) plus return incentive (D2+) closes both the activation gap and the first return-visit gap without requiring the engineering complexity of a real-time ambient distribution system. Rain-style mechanic is deferred to Phase 2 once concurrent user count makes it feel alive.

**What this closes:** The "free-to-play pathway" hypothesis in strategy.md Business Model (marked CHALLENGED) is now resolved as a two-step mechanic: starter credit for activation, daily case for retention. The Clash.gg Rain mechanic remains aspirational Phase 2.

---

### Decision 4 - Withdrawal architecture at launch - CLOSED

**Question:** Steam-only withdrawal or Steam + crypto at launch?

**Decision: Steam skin withdrawal only at launch. Crypto is Phase 2.**

The primary value proposition - bypass Steam's 15% fee and wallet lock by delivering directly to Steam inventory, commission-free - is fully delivered by Steam-only withdrawal. No crypto or fiat path at launch.

**Reasoning:** Crypto adds KYC flow complexity, crypto payment processor integration, and a new complaint vector (crypto delays are already a Key-Drop Trustpilot complaint theme in 2026). Launching with crypto before the core opening loop is stress-tested introduces a high-visibility failure risk (a failed or delayed crypto withdrawal on a new platform is a reputation-ending early review). skin.club operates successfully Steam-only and scores well on the benchmark. The crypto expansion path (following Clash.gg and CSGORoll) is clearly mapped for Phase 2 without architectural risk.

**What this closes:** The "withdrawal architecture" scope question is closed for MVP. Phase 2 crypto path to be specified when Phase 1 withdrawal reliability is confirmed.
