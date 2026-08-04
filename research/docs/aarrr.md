# AARRR Model

**Version:** v_refresh
**Prior version:** v1 (June 2026)
**Date:** June 2026

**Changelog from v1:**
- Added per-stage competitor evidence fold-in from v_refresh competitive analysis and strategy.
- Revenue section: corrected house edge hypothesis (25-40% in v1 was wrong; confirmed 7-10% on mini-games). Noted tested-vs-stated RTP gap as a design and compliance requirement.
- Acquisition: folded in Germany X-Ray Scanner mandate (reduces addressable market in EU) and confirmed paid social ad restrictions across platforms.
- Activation: folded in Clash.gg Rain system (ambient free-to-play, no deposit required) as raising the activation bar beyond a simple free starter case.
- Retention: added DatDrop DatPoints (5 pts per $1, redeemable for cases up to $1,800) and Key-Drop Daily Case leveling as loyalty mechanic benchmarks.
- Referral: added Clash.gg Rain community mechanic as a referral driver (ambient presence encourages inviting friends to get gems).
- Each stage: one primary metric (OMTM) and one MVP decision, clearly labeled.
- AIDA insights retired from product-model.md are folded in where they map to a stage.

---

## Acquisition

### What competitors reveal

Influencer and streamer marketing is the universal primary channel across all five hard competitors:
- Key-Drop: 100+ influencer partnerships (cs2pulse.com review).
- CSGORoll: CS2 team sponsorships, streamer commission program.
- Clash.gg: Referral codes system (FAIRNESSGG = 3 free cases), affiliate program.
- Hellcase: Regional bonus codes tied to influencer codes ("HELLACS2" for $0.70 no-deposit + 10% bonus).

Paid social (Google, YouTube, Meta) is confirmed restricted in this category. Competitors rely on organic and influencer over paid ads. Source: cs2pulse.com review of Key-Drop (2026).

Germany reduced the addressable EU market: Valve's X-Ray Scanner mandate (March 2026) signals Germany's regulatory treatment of case opening as gambling. Third-party case platforms face increased geo-blocking in Germany and should not include it in launch market projections. Source: https://games.gg/counter-strike-2/guides/cs2-x-ray-scanner-explained/.

### Channels and mechanics

**Influencer and streamer seeding (primary):** CS2 streamers on Twitch and YouTube are the highest-trust channel. Gifting free cases to streamers with authentic (non-scripted) play is the trust-preserving approach. Cost-per-acquired-depositor through this channel is unknown pre-launch but is the dominant acquisition strategy across all competitors.

**Affiliate and referral network:** Players refer other players via unique links. Revenue share or flat bonus per referred depositor. The Grinder segment is the natural affiliate. Every competitor offers this; it is table stakes, not a differentiator.

**Organic search and content:** "CS2 case odds", "how to get [specific skin]", and comparison content targets the Collector segment in high-intent research moments.

**Social sharing (viral loop):** Big drops and battle wins shared on Twitter/X and Discord. The platform must make sharing trivially easy. Win sharing is the organic acquisition channel with the highest trust signal.

**Pre-login transparency (emerging):** Clash.gg's decision to expose RTP values, payment options, game descriptions, and active battle previews before login correlates with its fastest-growing status per independent reviewers. This is an acquisition channel enabled by product design choices, not media spend.

### Key hypotheses

1. Authentic influencer seeding (no scripted outcomes) drives more durable trust than paid promotion, because the CS2 community is highly sensitive to shill content.
2. Pre-login transparency (RTP published, withdrawal info visible, PF page public) will increase the fraction of anonymous visitors who proceed to register, because it removes the pre-commitment information asymmetry.
3. Organic search targeting skin acquisition comparison content will capture Collector-segment users with above-average LTV potential.

**Alternatives considered and discarded:**
- Paid social as primary channel - discarded. Confirmed restricted by Google, YouTube, Meta in gambling-adjacent categories.
- Launch in Germany as part of initial EU market - discarded. Germany X-Ray Scanner mandate signals active regulatory scrutiny of this product category from March 2026.

### What is unknown

- Cost per acquired depositor across channels (no data until live) [?]
- Which streamer tier (micro vs macro) produces better LTV users [?]
- Whether pre-login transparency specifically drives deposit conversion or only improves browse engagement [?]

### Primary metric (OMTM)

First-time depositors per week. Target: [?] (hypothesis, no public competitor benchmark available).

### MVP product decision

Build referral link generation and basic affiliate dashboard in MVP. Manual streamer seeding before full affiliate dashboard. Pre-login content strategy: publish RTP, withdrawal architecture, and provably fair page publicly from day one - this is both a trust investment and an acquisition enabler.

---

## Activation

### What competitors reveal

No-deposit first-credit offers across the category:
- Clash.gg: 3 free cases for new users pre-login. 5% first deposit bonus.
- Key-Drop: 20% match + $0.50 free.
- Hellcase: $0.70 no-deposit credit + 10% bonus via promo code.
- CSGORoll: 10% via promo code.

Clash.gg's Rain system (free gems distributed to active chat every 30 minutes, no deposit required) is the furthest evolution: it creates ambient free-to-play engagement requiring no initial commitment at all. A one-time free case credit is the table-stakes offer; Rain-style ambient mechanics represent the emerging category frontier. Source: https://cs2wh.com/review/clashgg (2026).

The primary activation event is the first case open. Every competitor's design centers on getting the user to their first open as quickly as possible. Friction between landing and first open must be minimal.

### Channels and mechanics

**No-deposit starter credit (table stakes):** A free or low-cost first case credit ($0.50-$0.70 range) lets users experience the reveal without deposit risk. Market-confirmed range from competitor data above.

**Ambient free-to-play pathway (competitive frontier):** Rain-style mechanic that distributes platform credits to active users without requiring a deposit. Higher friction to design and sustain than a one-time credit, but creates a qualitatively different user experience: the platform feels live and generous before any financial commitment.

**First-deposit bonus:** A percentage match on the first deposit converts interest to committed spend. Market range: 5-20% match. Target: 10-15% match + $0.50-$1.00 credit. A 100% match would be 5-20x the market standard and is not a "catch-up" move - it requires explicit margin modeling.

**Onboarding flow:** Landing page shows live drops, explains provable fairness in one sentence, gets to a case in under 3 clicks. Age-gate and verification required before any case interaction.

**Trust infrastructure as activation support:** Users who can verify fairness before deposit have a lower psychological barrier to their first spend. Public PF page and pre-login RTP disclosure serve activation, not just trust. A user who does not check the numbers still benefits from seeing they exist.

### Key hypotheses

1. A no-deposit first credit ($0.50-$0.70, non-withdrawable) increases activation rate by 15-25% relative to a deposit-only flow, because it lets the Thrill Seeker experience the product before committing money. This is the industry-standard hypothesis; actual lift is unvalidated pre-launch.
2. First-deposit bonus match of 10-15% will activate Thrill Seekers without requiring margin-eroding 100% match, because the reveal experience itself (not the bonus size) is the primary driver once the user is in the flow.
3. Users who access the provably fair verification in their first session have higher D7 retention because trust is established before the first spend decision.

**Alternatives considered and discarded:**
- 100% first-deposit match as a differentiator - discarded. Market actual is 5-20%; 100% would be a 5-20x outlier requiring explicit LTV modeling to justify. The v1 assumption that this was "market standard" was wrong.
- Age-gate as optional/soft UX - discarded. UK Online Safety Act (July 2025) requires robust identity-based age verification. Age-gate must be non-optional and must be built as a compliance feature from day one.

### What is unknown

- Optimal wagering requirement on first-deposit bonus (too low = margin loss, too high = user feels trapped) [?]
- Whether Rain-style mechanic is achievable at launch or is a Phase 2 feature requiring sustained credit float [?]
- Whether identity-based age verification (vs. simple birthday entry) meaningfully reduces activation and by how much [?]

### Primary metric (OMTM)

First open completion rate: users who arrive and complete at least one case open. Target: [?] 40-60% of registered users (hypothesis).

### MVP product decision

Build the full opening experience first - it is the primary activation event. Age-gate is non-optional and ships in MVP. No-deposit starter credit in MVP (simple). Ambient Rain-style mechanic is Phase 2. Bonus mechanics can be simplified for launch.

---

## Retention

### What competitors reveal

Battle scheduling behavior is the primary return-trigger across competitors:
- Clash.gg: Champion mode with 30-second average matchmaking fill time keeps users in active return cycles.
- Hellcase: PvP up to 4 players with bot battles as fill for incomplete lobbies - shows the universal lobby-fill problem.

Loyalty programs are now an expected retention layer, not a differentiator:
- DatDrop: DatPoints program (5 points per $1 spent, redeemable for cases up to $1,800 value). Source: https://cs2pulse.com/skins-gambling-guide/best-websites/datdrop-review/.
- Key-Drop: Daily Case system that levels up with engagement. Users unlock daily $0.10 skins that can be upgraded.
- Hellcase: Weekly rewards (up to 7 free CS2 skins/week for active users). VIP cashback tiers.

Missions and goals are present at skin.club and Key-Drop and give users a structured progression path that creates return cadence beyond the core case-opening loop.

### Channels and mechanics

**Case battles as a return driver:** Battles require opponents, creating scheduling behavior. Users return to see if their battle is starting. Notification triggers (battle starting, battle result) are high-intent re-engagement moments. MVP: 2-player lobbies first (fastest to fill). Bot fill for incomplete lobbies is necessary but must be labeled to avoid trust erosion.

**Upgrades as session extension:** Users who receive a low-value skin from a case may immediately attempt an upgrade. The upgrade path extends session length and creates a reason to share (hitting a good upgrade outcome). Grinders and Collectors are the primary users; Thrill Seekers use it opportunistically.

**Daily case or login bonus:** A free or discounted case on a cadence (daily login bonus, weekly loyalty case) is a low-cost retention mechanic. Key-Drop's daily case leveling and skin.club's daily case by account level show this is table stakes.

**Loyalty points / rakeback:** Points programs (DatPoints model) or rakeback (Gamdom 15% zero-wagering, Clash.gg up to 0.75%) are expected by the Grinder segment. The design question is rate and wagering terms, not whether to offer it.

**Rakeback payout notifications:** Informing a Grinder that they have earned rakeback credits is a re-engagement trigger with direct monetary value. High-intent push notification.

### Key hypotheses

1. Case battles are the primary retention driver for Thrill Seekers because they add competitive stakes and social interaction to the core opening loop.
2. A loyalty points system (earning on every case open, redeemable for more cases) increases Grinder D7 retention by making every session feel productive, not just lucky.
3. A daily login bonus improves D7 retention by 10-15 percentage points relative to no daily bonus, based on analogy with adjacent products - hypothesis to validate at launch.

**Alternatives considered and discarded:**
- Bots labeled as bots in live feeds and battles - not discarded but constrained. Bots are required for lobby fill; the approach is to label them clearly (not with fictional character names) rather than hide or flaunt them. DaddySkins' approach (named fictional characters) is the failure mode to avoid.
- Missions and goal system in MVP - deferred. Present at skin.club and Key-Drop; high engagement value, but requires content operations (writing and maintaining mission chains). MVP: daily bonus first; missions as Phase 2.

### What is unknown

- Optimal battle lobby size (2-player vs 4-player) for fill speed vs excitement at early user counts [?]
- Whether push notifications are permitted in target markets and whether users opt in at meaningful rates [?]
- Minimum daily active user count to sustain battle lobbies without bot fill majority [?]

### Primary metric (OMTM)

D7 retention rate. Target: [?] 35%+ (hypothesis).

### MVP product decision

Ship battles with 2-player lobbies first (fastest to fill, simplest to build). Daily bonus in MVP (low-effort, high expected retention impact). Loyalty points / rakeback as Phase 2 after baseline GGR per user is established.

---

## Revenue

### What competitors reveal

Third-party tested RTP data in 2026 exposes a gap between stated and actual performance:
- Key-Drop: 89% stated RTP (platform claim). Source: https://metapress.com/best-cs2-case-opening-sites-in-2026-tested-reviewed/.
- Hellcase: 82.1% tested RTP (third-party). Source: https://skincasereviewer.com/reviews/hellcase.
- DatDrop: 80.6% tested RTP across 118 cases. Source: https://tech-insider.org/datdrop-review/.
- Clash.gg: 90-92.8% RTP on mini-games (platform-disclosed). This is the highest tested transparency standard in the category.

The revenue model is confirmed: house edge is the primary revenue source. The central tension between user generosity (bonuses, rakeback) and margin sustains the business.

Battles run on the same case math. The winner takes both case outcomes; the house edge is already baked into the cases, not added on top. Additional pot fee: [?] no public competitor data found confirming or denying a separate battle pot fee.

### Channels and mechanics

**House edge on cases (primary):** Every case opened has an expected value below 100% of cost. Volume times edge equals revenue. The edge is controlled through case design - probability distribution of outcomes relative to their current skin market values.

**House edge on mini-games (secondary):** Upgrader, Plinko, Mines, etc. run at 7-10% house edge (confirmed). Mini-games extend session time and generate additional GGR per session.

**Deposit bonus wagering requirement as margin protection:** Bonus balance requiring wagering (e.g., 5x) before withdrawal is not revenue itself but extends play long enough for the edge to apply multiple times. Wagering requirements must be disclosed per applicable jurisdiction rules.

**Rakeback as margin-sharing mechanic:** Returning a percentage of GGR margin to high-volume users reduces net margin per user but extends LTV. A Grinder who receives rakeback and continues playing generates more total GGR than one who churns because the edge feels too high.

**Referral bonus cost vs LTV:** Referral commissions are a cost, but referred users are cheaper to acquire than paid traffic. Positive if LTV exceeds acquisition cost plus referral cost.

### Key hypotheses

1. A house edge of 7-10% on mini-games (matching Clash.gg's disclosed range) is within market standard and sustainable at volume. This replaces v1's hypothesis of 25-40% which was materially wrong.
2. Publishing tested (not theoretical) case RTP from day one - and having it match or exceed the tested RTP of Hellcase (82.1%) and DatDrop (80.6%) - is both a trust advantage and a regulatory hedge.
3. Rakeback at zero or low wagering terms (matching or exceeding Gamdom's 15% zero-wagering) will increase Grinder LTV beyond the cost of the rebate, but only if it is communicated clearly and paid out reliably.

**Alternatives considered and discarded:**
- Battle pot fee on top of case math - deferred pending competitor validation. If no competitor charges a separate pot fee, introducing one would be a negative differentiator.
- 100% match bonus as revenue generator (v1 hypothesis that bonus wagering generates GGR) - revised. The correct framing is: bonus wagering extends play, but the GGR it generates must exceed the cost of the bonus match. At 100% match, this requires a 2x+ wagering requirement just to break even, which users will perceive as punitive.

### What is unknown

- Case RTP (standard case opening, not mini-games): no competitor publishes this; must be designed internally [?]
- Minimum viable GGR per user per month that sustains platform economics [?]
- Whether a battle pot fee is seen as negative by users or is simply not noticed [?]

### Primary metric (OMTM)

Gross gaming revenue (GGR) per depositing user per month. Target: [?] (hypothesis; requires internal case math model to establish).

### MVP product decision

Model case mathematics (defined edge, projected case RTP) before building bonus and rakeback systems. Understand baseline GGR per user before layering incentives. Rakeback and advanced loyalty mechanics are Phase 2 after launch, not MVP.

---

## Referral

### What competitors reveal

Win sharing on social is the organic referral channel. Twitter/X, Discord, and Twitch clips are the surfaces where CS2 skin content travels. The reveal animation quality is directly tied to referral volume: more dramatic reveals produce more shareable content.

Clash.gg's Rain system creates a secondary referral dynamic: users who enjoy the ambient free-to-play feel may invite friends specifically to participate in Rain events, bringing new users who may never have deposited based on case opening alone. This is an emergent community referral mechanic not present at other competitors. Source: https://cs2wh.com/review/clashgg (2026).

Two-sided referral bonuses are the industry standard (referrer AND referred both receive value). Clash.gg, Key-Drop, CSGORoll, Hellcase all have referral code systems. skin.club has a partners program. This is table stakes.

### Channels and mechanics

**Win sharing as organic referral:** A big drop or battle win shared on Twitter/X or Discord functions as organic referral. The platform must make sharing trivially easy - one tap from the results screen. The more dramatic and clip-worthy the reveal, the more likely it travels. Rarity-differentiated animations directly enable this.

**User referral links:** Every registered user gets a referral link. Two-sided bonus (referrer gets balance credit or commission; referred user gets first-deposit bonus on top of standard offer).

**Streamer affiliate program:** Tiered affiliate commission (revenue share for larger streamers, flat bonus for smaller). The Grinder segment is the natural affiliate for peer referral. Streamers are the professional referral channel.

**CS2 community embedding:** Platform-hosted events, battle tournaments, and community-creation modes (if/when built) embed the brand in community surfaces rather than advertising to them.

**Ambient community mechanic as referral driver:** A Rain-style system keeps users present in platform chat, which creates organic word-of-mouth through their existing social networks. This is Clash.gg's emergent referral mechanic.

### Key hypotheses

1. Win sharing from the Thrill Seeker segment will be the primary source of organic referral, because this segment has the highest tendency to share screenshots and clips of big drops.
2. Two-sided referral bonuses outperform one-sided bonuses because the referred user has a concrete reason to act on the invitation immediately.
3. The referral loop will be strongest on Discord, because CS2 skin culture is concentrated there.

**Alternatives considered and discarded:**
- Platform-hosted CS2 tournaments as primary referral channel - deferred to Phase 2. High production cost, requires established user base to fill brackets, not appropriate for launch.
- Purchasing an existing streamer partnership at launch - conditionally valid, but prioritized below organic streamer seeding because authenticity matters in this community.

### What is unknown

- Which streamers are available and at what cost per deal at launch [?]
- Whether Twitch and YouTube restrict sponsored content from this product category [?]
- Optimal referral commission rate that motivates affiliates without eroding margin [?]

### Primary metric (OMTM)

Referred depositors as a percentage of total new depositors. Target: [?] 20-35% of new depositors from referral (hypothesis).

### MVP product decision

Build referral link generation and basic tracking from day one. Sharing from wins must be one tap from results screen. Full affiliate dashboard with commission tracking is Phase 2 - manual streamer seeding is sufficient for launch validation.

---

## Summary Metrics Table

| Stage | OMTM | Target (hypothesis) | MVP decision |
|-------|------|---------------------|-------------|
| Acquisition | First-time depositors per week | [?] | Referral links from day one; manual streamer seeding before full dashboard |
| Activation | First open completion rate | [?] 40-60% of registered | Full opening experience first; age-gate non-optional; $0.50-$0.70 starter credit |
| Retention | D7 retention rate | [?] 35%+ | 2-player battle lobbies; daily bonus; loyalty points Phase 2 |
| Revenue | GGR per depositing user per month | [?] | Model case math before building bonus/rakeback; baseline GGR first |
| Referral | Referred depositors / total depositors | [?] 20-35% | Referral links in MVP; one-tap win sharing |

All targets are hypotheses. Replace with live data at each stage.

---

## Key Takeaways (updated from v1)

1. The case opening reveal is the single most important product moment. Activation, retention, referral, and revenue all flow from the quality of this one experience. The linear reveal (Pattern A from ux-patterns.md) is the correct choice; execution quality is where the redesign wins.

2. The house edge hypothesis in v1 (25-40%) was materially wrong. The market operates at 7-10% on mini-games (confirmed from Clash.gg RTP disclosure). Case RTP is still unknown and must be modeled before launch. Do not design bonus and wagering structures before case math is set.

3. Loyalty mechanics are now table stakes, not differentiators. Every competitor has some form of daily bonus, loyalty case, or points program. The design question is not whether to offer them, but whether to match (DatPoints, Key-Drop leveling) or exceed (Gamdom 15% zero-wagering rakeback) the current standard.

4. Trust infrastructure is both an acquisition signal and a regulatory hedge. It may not drive primary acquisition (the riskiest assumption from strategy.md), but it is required regardless as a compliance foundation. Build it correctly and use it in acquisition messaging - but do not bet the entire acquisition strategy on it outperforming streamers and bonuses alone.

5. The tested-vs-stated RTP gap is the category's credibility liability. Hellcase at 82.1% tested vs higher stated, DatDrop at 80.6%, vs Clash.gg's transparent 90-92.8% disclosure. Publishing tested RTP from launch is a defensible trust position and a regulatory hedge simultaneously.
