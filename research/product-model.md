# Product Model

**v2 - validated post-research**
Updated: 2026-06-10. Based on Phase 3 competitive analysis and regulatory research.

---

## Changelog from v1

- **House edge hypothesis corrected downward:** v1 hypothesized 30-50% player EV loss (70-50% RTP). Competitor published data shows 7.3-10% house edge (90-92.8% RTP) on mini-games. The v1 hypothesis was materially wrong and would have led to uncompetitive case math.
- **Deposit bonus ceiling corrected downward:** v1 hypothesized 50-100% match bonus as market entry standard. Actual market is 5-20% match + small free credits. A 100% match bonus would be a significant outlier, not a catch-up move.
- **Rakeback reclassified from differentiator to table stakes:** v1 claimed rakeback was "rare in category." Research found Gamdom offers 15% instant rakeback with zero wagering for first 7 days, and Clash.gg has a rakeback program. Rakeback is already present among top competitors.
- **Collector segment downgraded to tertiary:** Platform research found that no major competitor leads with odds tables or EV calculators. All lead with win animations. The Collector is real but does not drive volume or primary design decisions.
- **Regulatory risk section elevated from footnote to primary constraint:** UK, Netherlands, and Belgium all classify withdrawable-skin platforms as gambling. Regulatory exposure is not a future research item -- it is an active operating constraint that must shape every economy and withdrawal decision from day one.

---

## 1. Objectives Table

**STATUS: PARTIALLY CONFIRMED, TARGETS REVISED**

Segment and loop hypotheses hold. Specific numeric targets remain [?] for this product but are better grounded by competitor behavior. The trust-gap objective is now elevated because independent research (betterchecked.com 2026 audit) confirms no operator in the category has solved it.

Source: betterchecked.com 2026 CS2 Mystery Box Operator Audit (https://www.betterchecked.com/cs2-mystery-box-audit-2026)

| # | Objective | Metric | Target (updated hypothesis) | Status |
|---|-----------|--------|---------------------|-------|
| 1 | Drive activation by converting visitors into depositing users | Visitor-to-first-deposit rate | [?] 8-15% (no competitor data available; retaining v1 hypothesis) | [?] Unconfirmed |
| 2 | Grow retention through core loops (opening, battles, upgrades) | D7 retention, sessions per week | [?] D7 35%+, 3+ sessions/week | [?] Unconfirmed |
| 3 | Generate sustainable revenue from house edge without burning users | GGR margin per user, churn rate | 7-10% on mini-games (revised down from v1's 15-25%); case GGR margin [?] | CHANGED -- see Economy section |
| 4 | Build trust as a differentiator to reduce early churn and increase LTV | Provable-fairness page visits, third-party RNG audit badge, withdrawal completion rate | [?] 60%+ withdrawal completion; become first operator with named third-party RNG auditor | CONFIRMED AND ELEVATED -- trust gap is market-wide, not local |

---

## 2. Audience Segments by Motivation

### Segment A: The Thrill Seeker (Priority: Primary)

**STATUS: CONFIRMED**

Source: Platform design review of Clash.gg, Key-Drop, Hellcase, CSGORoll (June 2026). Every major platform leads with win animations, live drop feeds, and big win celebrations. No platform leads with expected value or odds. The design consensus confirms this segment drives product decisions.

**Profile:** Active CS2 player, age 18-30, follows skin culture and streamers. Has disposable income for entertainment. Uses platform as a content experience, not a financial strategy. Likely to share wins on social.

**Core motivation:** The dopamine loop. The ritual of opening, the animation of the reveal, the possibility of a big drop. The experience itself is the product. Outcome matters less than the feeling.

**Pain:** Platforms that feel rigged, laggy, or dead. Outcomes that feel predetermined. No excitement in the reveal. Cannot share or show off wins easily. Bot-flooded chat (bot activity is category-wide on DatDrop, DaddySkins, CSGORoll -- confirmed by research).

**JTBD:** When I have downtime between CS2 matches or want entertainment in the skin ecosystem, I want to open a case with a real drop animation and genuine unpredictability, so that I get the thrill of a reveal and a real shot at something exciting.

**What "fair" means to them:** The reveal feels unscripted and genuine. They can see the seed and verify it, even if they never do. Provable fairness is a background trust signal, not a feature they actively use.

**What "winning" means to them:** A drop that makes them react. A rare skin. A case battle win they can screenshot. The story is the win, not just the item value.

**Why Primary:** Highest frequency and intensity. Largest share of volume on comparable platforms. The core loop (open, see, react) is the product. Community creation modes (skin.club Community Cases, Clash.gg Champion mode) are cited in independent reviews as the most-differentiated features in the category -- all serve this segment.

---

### Segment B: The Grinder (Priority: Secondary)

**STATUS: CONFIRMED, REPOSITIONED AHEAD OF COLLECTOR**

Source: Platform design review. Grinder-oriented features (rakeback, battle lobbies, loyalty tiers) are present on all top-3 platforms. Gamdom 15% instant rakeback offer (https://gamdom.com/rewards) confirms segment viability. Repositioned above Collector based on evidence that EV-calculator features are not built by any major competitor.

**Profile:** Regular platform user who sees upgrading and battle selection as a skill game. Tracks their balance, manages their bankroll relative to their entertainment budget, and actively seeks rakeback or bonus mechanics. More likely to deposit regularly if they feel the platform rewards loyalty.

**Core motivation:** Squeeze value from the platform over time. Use upgrades to work toward high-value skins. Win battles through timing and opponent selection. Withdraw real value, not just virtual wins.

**Pain:** No loyalty rewards. Feels the house always wins too hard. Upgrade paths with no clear odds. Battle matchmaking that feels unfair. Withdrawal that is slow or unreliable.

**JTBD:** When I have built up a balance from regular play, I want to use upgrades, smart battle selection, and any loyalty bonuses available, so that I can maximize my chances of withdrawing a skin worth more than I put in.

**What "fair" means to them:** Transparent odds on upgrades. Battle pots that match what was put in. Loyalty mechanics that actually return value. Withdrawal that works reliably and fast.

**What "winning" means to them:** A net-positive withdrawal session. A skin above their expected cost. Rakeback or referral earnings that extend their play.

**Why Secondary:** Most valuable long-term users by LTV if retained. High-volume, repeat-deposit behavior is what makes the house edge sustainable at a lower margin rate (see Economy section).

---

### Segment C: The Collector (Priority: Tertiary)

**STATUS: CHALLENGED -- DOWNGRADED FROM SECONDARY**

Source: Platform design review of top 6 competitors (June 2026). No major competitor leads product with odds tables, EV calculators, or cost-to-target tools. All lead with win animations and big-drop social proof. The Collector is real but represents a niche audience that no competitor has found worth building primary features for.

**Decision:** Collector needs are served by table-stakes transparency (published odds, provable fairness link) but are not a primary design driver. Building EV-calculator-first UX for this segment would be a non-validated bet against the entire market's revealed preference.

**Profile:** CS2 player with a specific skin wishlist. Researches case odds and expected values before spending. Treats case opening as an alternative acquisition path relative to Steam Market or third-party market prices.

**Core motivation:** Acquire a specific skin at a cost lower than market price, or at least feel the platform gave them a fair shot.

**Pain:** Hidden odds, no withdrawal transparency, slow or missing withdrawal.

**JTBD:** When I want a specific skin I cannot easily afford at market price, I want to open cases or run upgrades where odds are visible, so that I can make an informed decision about whether it is worth the spend relative to buying directly.

**Why Tertiary:** Served by baseline transparency features already required for trust-gap objective. Does not justify dedicated feature investment beyond that baseline.

---

## 3. AIDA per Segment

**STATUS: CONFIRMED IN STRUCTURE, BONUS MECHANICS REVISED**

Bonus numbers in v1 AIDA were based on the inflated bonus hypothesis. Updated to reflect actual market (5-20% match; no-deposit credits of $0.50-$0.70).

Source: Clash.gg deposit page (https://clash.gg/deposit -- 5% first deposit + 3 free cases), Key-Drop promotion page (https://key-drop.com/en/promotions -- 20% match + $0.50 free), Hellcase promo page (https://hellcase.com/en/promo -- 10% + $0.70 no-deposit credit), CSGORoll promo code page (https://csgoroll.com -- 10% via promo code).

| Segment | Attention | Interest | Desire | Action |
|---------|-----------|----------|--------|--------|
| **Thrill Seeker** | Channel: Twitch streamers, YouTube CS2 content, Twitter/X skin drops. Message: "The most electric case opening on the web." Mechanic: clip-worthy big drop clips shared by streamers | Channel: Landing page hero with live opening animation. Message: "See what just dropped." Mechanic: live drop feed, recent wins ticker | Channel: Free trial case or first-case bonus. Message: "Your first case is on us." Mechanic: no-deposit starter case ($0.50-$0.70 credit range, matching market) | Channel: Deposit flow with bonus match. Message: "Get 10-20% more to open more." Mechanic: first-deposit bonus in market range, instant access to case catalogue |
| **Collector** | Channel: Reddit CS2 skins community, skin value tracking sites. Message: "See exact odds before you open." Mechanic: SEO content on skin acquisition cost comparison | Channel: Odds transparency page. Message: "Know your cost before you commit." Mechanic: per-case odds table visible without deposit | Channel: Upgrade flow showcase. Message: "Turn what you have into what you want." Mechanic: upgrade odds visible at each step | Channel: First upgrade or case with odds displayed. Message: "The math is on the page, the choice is yours." Mechanic: odds-first UX, one-click to start |
| **Grinder** | Channel: CS2 community Discord, referral from other Grinders, loyalty program mentions. Message: "Play more, earn more back." Mechanic: rakeback mention in onboarding | Channel: Loyalty and rakeback dashboard. Message: "Every case opened earns you back." Mechanic: progress bar toward rakeback tier | Channel: Battle lobby with pot size and opponent history visible. Message: "Pick your fights, maximize your edge." Mechanic: transparent battle matchmaking | Channel: First battle win or first rakeback payout. Message: "This is what playing smart looks like." Mechanic: first-win celebration, rakeback payout notification |

---

## 4. AIDA to AARRR Mapping

**STATUS: CONFIRMED, NO CHANGES**

| AIDA Stage | AARRR Stage | Notes |
|------------|-------------|-------|
| Attention | Acquisition | Getting the user to the site for the first time. Paid, organic, referral, influencer channels all feed here. |
| Interest | Activation (pre-deposit) | User explores the platform, sees the value proposition, begins to trust the fairness claim. |
| Desire | Activation (deposit trigger) | User decides to deposit. The moment of conversion. Bonus mechanics and social proof are decisive here. |
| Action (first open) | Activation (first experience) | First case open or battle. This is the primary activation event. The quality of this moment determines D1 retention. |
| Repeat action | Retention | Repeat opens, battles, upgrades. Core loop engagement. |
| Referral behavior | Referral | User shares a clip, refers a friend, posts a win. Triggered by memorable wins and easy sharing. Community creation modes (skin.club, Clash.gg Champion) are the current leading edge of this loop. |
| Long-term spend | Revenue | Sustained house edge capture over the user's LTV. Bonus and rakeback mechanics govern churn rate vs. margin. |

---

## 5. Economy Hypothesis

**STATUS: SIGNIFICANTLY REVISED**

### House Edge on Mini-Games

**CHANGED. v1 hypothesis was wrong.**

v1 hypothesized 30-50% player EV loss (50-70% RTP). Competitor published RTP data shows the actual market standard is substantially lower:

- Clash.gg Upgrader: 92.7% RTP (7.3% house edge)
- Clash.gg Plinko: 92.8% RTP (7.2% house edge)
- Clash.gg Mines: 90.0% RTP (10.0% house edge)

Source: Clash.gg RTP disclosure page (https://clash.gg/fairness)

This means the sustainable margin on mini-games is approximately 7-10%, not 25-40%. Volume at lower margin can still produce strong GGR, but the v1 assumption that the platform could operate at 25-40% edge was materially incorrect. Operating at v1 margins would make the product uncompetitive.

**Updated hypothesis:** Target RTP of 90-93% on mini-games to match market standard. Case RTP [?] -- no public competitor data found for standard cases (only mini-games disclosed above). This remains an unknown.

### House Edge on Cases (Standard)

**[?] UNKNOWN -- to be modeled**

No major competitor publicly discloses RTP on standard case opening (only Clash.gg discloses mini-game RTP as above). The v1 hypothesis of 30-50% edge on cases may still apply to cases specifically (distinct from mini-games), but this requires internal modeling against case catalog prices and drop tables. Do not apply v1 number to mini-games.

### House Edge on Battles

**STATUS: CONFIRMED IN STRUCTURE, UNCHANGED**

Case battles run on the same case math. If two players each open a case in a battle, the combined expected value of their possible outcomes is still below the combined cost. The winner takes both outcomes, but the house edge has already been applied. Additional pot fee [?] -- no public data found confirming or denying an extra battle fee on top of case math.

### Deposit Bonuses

**CHANGED. v1 hypothesis was too aggressive.**

v1 hypothesized 50-100% match as market standard and suggested 100% match as a potential differentiator. Actual market data:

- Clash.gg: 5% first deposit bonus + 3 free cases (https://clash.gg/deposit)
- Key-Drop: 20% match + $0.50 free (https://key-drop.com/en/promotions)
- CSGORoll: 10% via promo code (https://csgoroll.com)
- Hellcase: 10% + $0.70 no-deposit credit (https://hellcase.com/en/promo)

The market ceiling is approximately 20% match plus a small free credit. A 100% match would be a significant outlier that would require careful margin modeling before committing. It is not a safe "double the standard offer" move -- it would be roughly 5-20x the standard offer.

**Updated hypothesis:** Launch with 10-15% first deposit match + small no-deposit credit ($0.50-$1.00 range). Model the margin cost before exceeding 20% match. Any bonus beyond 20% is a differentiated bet, not a catch-up move, and must be justified by LTV modeling.

### Referral Bonus

**STATUS: UNCHANGED**

[?] Revenue share (5-15% of referred user's first deposit, or a flat credit) remains the working hypothesis. The Grinder is the most likely referrer. No competitor data found to confirm or refute the specific mechanic -- referral program terms were not consistently public.

### Rakeback

**CHANGED. Downgraded from differentiator to table stakes.**

v1 claimed rakeback was "rare in category." Research found:

- Gamdom: 15% instant rakeback for first 7 days, zero wagering requirement (https://gamdom.com/rewards)
- Clash.gg: rakeback program exists (https://clash.gg/rewards)

Rakeback is not a differentiator -- it is increasingly expected by the Grinder segment. The differentiation question shifts from "offer rakeback or not" to "offer better rakeback terms than Gamdom's 15% zero-wagering offer."

**Updated hypothesis:** Rakeback must be offered; the design question is the rate and wagering terms. Offering rakeback with zero wagering (matching Gamdom) may be a retention edge for Grinders, but requires margin modeling.

### Withdrawal as Payoff

**STATUS: CONFIRMED AND STRENGTHENED**

Source: Steam Market structure (https://store.steampowered.com/market/). Steam charges a 15% transaction fee on all CS2 skin sales (5% Steam base + 10% CS2 game fee), and all proceeds are locked to Steam Wallet -- not withdrawable to cash. This structural friction is the primary conversion argument for case platforms: withdrawing a skin from a case platform directly to Steam inventory bypasses the Steam Market fee entirely and gives the user a real asset, not a locked wallet balance.

The "withdrawal as payoff" hypothesis is confirmed. Reliable, fast withdrawal (target: under 5 minutes for automated bot delivery) is both a trust signal and a retention mechanic. Users who withdraw at least once are more likely to deposit again.

---

## 6. Regulatory Constraint (NEW SECTION -- elevated from footnote)

**STATUS: ACTIVE OPERATING CONSTRAINT, NOT FUTURE RESEARCH ITEM**

This section did not exist in v1. Research revealed regulatory exposure is immediate and severe in key markets.

### UK

UKGC classification: platforms that accept real-money deposits and allow withdrawal of skins of real monetary value are classified as gambling under the Gambling Act 2005 and require a UKGC operating license. Confirmed by Gov.uk Rapid Evidence Review on skin gambling (https://www.gov.uk/government/publications/rapid-evidence-review-of-skin-gambling).

### Netherlands

KSA enforcement: Clash.gg was fined EUR 280,000/week for operating without a Netherlands gambling license as of November 2025. Source: KSA enforcement decision (https://www.kansspelautoriteit.nl/actueel/nieuws/2025/november/clash-gg-boete).

### Belgium

Belgian Gaming Commission: skin gambling with real-money deposits classified as illegal gambling. Age threshold raised to 21+. 101 unlicensed operators investigated in 2024. Source: Belgian Gaming Commission 2024 Annual Report (https://www.gamingcommission.be/opencms/opencms/jhksweb_nl/documents/annual-report-2024.pdf).

### Product implications

- Withdrawal mechanics, deposit flows, and bonus structures must be reviewed against applicable jurisdictions before launch.
- Age verification cannot rely on self-declaration: DCMS review of 20 sites found none implemented robust age checks beyond self-declaration. This is both a legal risk and a trust-gap opportunity.

Source: DCMS Age Verification Review (https://www.gov.uk/government/publications/dcms-age-verification-review-2025)

- Operating in UK, Netherlands, or Belgium without a license replicates the Clash.gg exposure. Jurisdiction strategy [?] -- must be defined before economy and withdrawal design is finalized.

---

## 7. Trust Gap (NEW SECTION -- elevated from implied objective)

**STATUS: CONFIRMED AS MARKET-WIDE STRUCTURAL GAP**

v1 treated trust as one objective among four. Research confirms it is the only market-wide unsolved problem.

Source: betterchecked.com 2026 CS2 Mystery Box Operator Audit (https://www.betterchecked.com/cs2-mystery-box-audit-2026): no mystery box operator names a public third-party RNG auditor.

Source: DCMS Age Verification Review (https://www.gov.uk/government/publications/dcms-age-verification-review-2025): none of 20 reviewed sites implemented robust age checks beyond self-declaration.

This means:
- Being the first operator to name a public, third-party RNG auditor is a credible and currently unoccupied position.
- Robust age verification is both a regulatory requirement and a trust signal no competitor has executed.
- Bot activity (confirmed category-wide on DatDrop, DaddySkins, CSGORoll) depresses trust in live feeds and battle lobbies. Authenticated-user-only visible activity would be a visible differentiator.

**Design implication:** Trust is not a marketing message -- it requires infrastructure. Third-party RNG audit, real age verification, and bot-free live feeds are product investments, not copy decisions.

---

## 8. Competitive Landscape Notes (NEW SECTION)

**STATUS: NEW -- relevant to roadmap prioritization**

- **DatDrop:** Possibly non-operational as of June 2026. Domain JS-redirects to competitors. This is a gap in the Battle Royale competitive landscape -- no dominant battle-focused platform is confirmed active.
- **Clash.gg Champion mode** and **skin.club Community Cases** are cited in independent reviews as the most differentiated features in the category. Community creation is a growing loop. No equivalent feature exists on DaddySkins or most mid-tier platforms.
- **Steam Market structural argument** (15% fee + wallet lock) is the strongest acquisition message for users who already trade skins. This framing has not been prominently adopted by all competitors and remains an underused angle.

Source: Competitive analysis, Phase 3 (internal), June 2026.
