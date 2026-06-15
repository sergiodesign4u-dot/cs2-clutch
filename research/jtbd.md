# JTBD: CS2 Skin Platform Redesign

**Version:** 1.0
**Date:** June 2026
**Built from:** research/personas.md, research/master-research.md, research/strategy.md, research/ux-patterns.md

Jobs are expressed in the format: "When [situation], I want [motivation], so that [outcome]."
No feature names appear in job statements - only the person's progress.
Jobs backed by no research data are in the Hypotheses section, not the main list.

---

## Section 1: Main Job of the Product

**The Main Job**

When I am embedded in the CS2 ecosystem and want excitement beyond the game itself, I want a chance at a rare skin I actually want - with a reveal that feels real and unpredictable - so that I get the rush of a genuine drop and potentially end up with something worth having.

**Source:** Synthesized from research/strategy.md (Segment A primary JTBD); research/ux-patterns.md (Pattern 1 - The Opener); research/master-research.md (Key Conclusion 1, design consensus from six competitor platforms). Confirmed by the universal design pattern: every major competitor leads with the reveal animation, not any other feature.

**Persona mapping:** Primary persona - The Opener. This is the job that drives the highest volume and sets the tone for every downstream feature.

---

## Section 2: Related Jobs on the Way to the Main Job

These are the functional jobs the platform must close before or alongside the main job. They are the steps on the path.

---

**Related Job 1 - Arrive with enough confidence to try**

When I land on a new platform I have never used, I want to see enough evidence that it is legitimate and that drops actually happen, so that I feel safe enough to put in my first small amount of money.

- Persona: The Opener (primary). Also The Researcher.
- Research basis: FACT. Pre-login wall is a confirmed conversion barrier. Clash.gg (outlier: RTP values, payment options, active battle previews all visible pre-login) correlates with fastest-growing status per independent reviewers. Source: research/competitive-analysis.md (Common Pattern 2); research/aarrr.md (Acquisition).

---

**Related Job 2 - Complete the first open without friction**

When I am trying the platform for the first time with a free or low-cost credit, I want to get through the entire open-to-result experience in under 60 seconds without a confusing step, so that I know what opening here actually feels like before I deposit real money.

- Persona: The Opener (primary).
- Research basis: FACT. The first case open is the singular activation event. "Everything in the AARRR model serves or depends on this moment." Source: research/master-research.md (AARRR Key Insight); research/aarrr.md (Activation). No-deposit credit range confirmed: $0.50-$1.00 from competitor data. Source: research/aarrr.md (Activation - What competitors reveal).

---

**Related Job 3 - Verify the outcome after I open**

When I have just received an outcome I did not expect (high or low), I want to be able to confirm that the result was not manipulated, so that I trust the platform enough to open again or to tell someone about my result.

- Persona: The Opener (secondary motivation), The Researcher (primary motivation for this job).
- Research basis: FACT. The post-reveal verification link is a benchmark mechanism selected from skin.club's public roll history and CSGORoll's provably fair documentation. "Most users never do, but knowing they could is the trust signal." Source: research/master-research.md (Benchmark - Mechanism 3; Benchmark - Mechanism 1).

---

**Related Job 4 - Convert my result into something more valuable**

When I have opened a case and landed on a skin I do not want but it has some value, I want to use an upgrade path or exchange to work toward a skin I actually care about, so that a "losing" open does not feel like a pure loss.

- Persona: The Accumulator (primary). The Opener (when they stay past D1).
- Research basis: FACT. Upgrade mode is confirmed as a core retention loop. Pattern 4 (The Accumulator) explicitly describes this behavior: "Opens lower-cost cases with better EV, upgrades wins upward, re-opens proceeds rather than withdrawing immediately." Source: research/ux-patterns.md (Pattern 4). Upgrade odds visibility is confirmed as a requirement: upgrade probability per outcome must be shown before confirming. Source: research/ux-patterns.md.

---

**Related Job 5 - Withdraw and get what I earned**

When I have accumulated a skin worth withdrawing, I want to transfer it to my Steam inventory quickly and without unexpected fees, so that I can confirm the platform actually delivers real value and trust it with future deposits.

- Persona: The Accumulator (primary). The Researcher (high-stakes - their conversion decision depends on this).
- Research basis: FACT. "Withdrawal reliability is the most-cited user pain point in review aggregator complaints across all five platforms." Steam Market's 15% fee and wallet lock are the primary conversion argument for case platforms - bypassing both by delivering directly to Steam inventory is the value exchange. Source: research/strategy.md (Business Model); research/competitive-analysis.md.

---

## Section 3: Emotional and Social Jobs

Emotional and social jobs exist in parallel with functional jobs. They are not separate features - they are the feeling the functional jobs must produce.

---

**Emotional Job 1 - Feel genuine suspense, not manufactured tension**

When the case starts spinning, I want the anticipation to feel real - not scripted - so that when the outcome lands I feel it honestly rather than wondering if I was played.

- Persona: All personas, but The Opener most intensely.
- Research basis: FACT. Near-miss animations are confirmed as a dark pattern to avoid. "A near-miss that was pre-calculated as a loss is fabricated theatre, not tension." The benchmark mechanism says the animation must be honest buildup. Source: research/master-research.md (Benchmark - 1 Mechanism That Will NOT Work).

---

**Emotional Job 2 - Feel like a winner worth talking about**

When I get a drop that surprises me - high or low - I want a moment that is visually and emotionally sharp enough to share, so that my win becomes a story I bring back to my CS2 friends.

- Persona: The Opener (primary). The Battler for battle wins.
- Research basis: FACT. Win sharing is the organic acquisition channel with the highest trust signal. "Key-Drop's sparks and fire effects are specifically cited as the most memorable visual differentiator in user reviews, confirming that animation quality drives sharing behavior." Source: research/master-research.md (Hypothesis 3); research/aarrr.md (Referral).

---

**Emotional Job 3 - Feel that smart play is rewarded, not punished**

When I have put in consistent effort - opening regularly, using rakeback, making upgrade decisions - I want to feel that my pattern of play has given me a real edge, so that I stay on the platform by choice rather than habit.

- Persona: The Accumulator (primary).
- Research basis: FACT (inferred from feature patterns, not direct user research). Rakeback programs (Gamdom 15% zero-wagering, DatDrop DatPoints 5 pts/$1) are confirmed as table stakes for retaining Grinder-type users. The design implication is that loyalty must feel like skill being rewarded, not like random gifts. Source: research/strategy.md (Segment B); research/competitive-analysis.md (Gamdom, DatDrop).

---

**Social Job 1 - Beat a real person, not a bot**

When I join a case battle, I want to know my opponent is a real person with real stakes, so that the win feels like genuine competition and not a pre-scripted outcome.

- Persona: The Battler (primary).
- Research basis: FACT. Bot activity in battle lobbies is confirmed as the most cited pain for battle mode users. "A bot battle is solo opening with extra steps - the social tension is gone." Source: research/master-research.md (Hypothesis 4); research/ux-patterns.md (Pattern 3 - The Battler).

---

**Social Job 2 - Be part of a platform that feels alive**

When I open a case or check the platform between sessions, I want to see real activity from real players - real drops, real battles happening - so that I feel part of something rather than alone in a dead interface.

- Persona: All personas (ambient social context).
- Research basis: FACT. Live drop feed (authentic, bot-free) is confirmed as both a trust mechanism and an acquisition tool. "Seeing real drops reassures the new visitor that drops actually happen." The combination of social proof and verifiability is the hardest trust signal to fake. Source: research/master-research.md (Benchmark - Mechanism 3).

---

## Section 4: Hypotheses (Unconfirmed Jobs)

These jobs were generated but are not backed by research data. They stay here until confirmed or discarded.

**Hypothesis Job A**

When I have a low-tier skin I no longer want, I want to exchange it for platform credit without the friction of a Steam trade, so that I can re-enter the opening loop without depositing new money.

[?] Basis: skin.club and Clash.gg both offer in-platform exchange mechanics. This job is inferred from their existence, not from any user research. Whether this is a primary-mode behavior or a secondary convenience is unknown.

**Hypothesis Job B**

When I am curious about the platform but not ready to deposit, I want to observe real matches or opens happening live before I commit, so that I can calibrate whether the drops are real before risking money.

[?] Basis: Clash.gg's pre-login battle previews suggest this behavior is real. However, whether spectating alone converts to registration and deposit is unknown. Clash.gg's growth could be attributable to pre-login RTP values, free cases, or ambassador codes rather than spectating specifically.

**Hypothesis Job C**

When I have become a regular user and built up loyalty status, I want to see my status acknowledged visibly on the platform, so that I feel recognized for my history with it.

[?] Basis: Clash.gg's "CLASH KING" designation and Hellcase's VIP cashback system suggest social status mechanics matter. Whether this is a primary job or an amplifier of an existing job is not confirmed.

---

## Section 5: JTBD Matrix

Rows are jobs. Columns are personas. Cell value: 1-3 importance for that persona. Source is the research evidence confirming the importance score.

Legend: 3 = core to this persona (drives decisions), 2 = relevant (shapes behavior), 1 = peripheral (aware of, does not drive session behavior). [?] = importance unknown.

| Job | The Opener (P1) | The Accumulator (P2) | The Researcher (P3) | The Battler (P4) | FUNCTION in product | COMPETITORS closing it |
|-----|----------------|---------------------|---------------------|-----------------|---------------------|------------------------|
| Main Job: Arrive, open, get the thrill | 3 (core) - every design decision confirms this | 2 (opens to accumulate) - Source: ux-patterns.md Pattern 4 | 1 (opens strategically) - Source: strategy.md Segment C | 2 (was an opener first) - Source: ux-patterns.md Pattern 3 | Case opening flow, landing page, reveal animation | All 5 hard competitors. Gap: animation quality varies widely. DaddySkins flat; Key-Drop and Clash.gg set the bar |
| Related Job 1: Arrive with confidence to try | 3 (first barrier) - Source: aarrr.md Acquisition | 2 (reads terms carefully) - Source: ux-patterns.md Pattern 4 | 3 (pre-deposit research is their whole mode) - Source: strategy.md Segment C | 1 (already past this stage) | Pre-login landing page, trust signals, RTP visible, live feed | Clash.gg only (outlier). CSGORoll PF page public. All others hide key info behind login |
| Related Job 2: Complete first open without friction | 3 (activation event) - Source: aarrr.md Activation | 2 (cares but not primary) | 2 (test the mechanism) | 1 (already past this stage) | Starter credit, case selection, opening flow, age-gate | All competitors offer free credit. Clash.gg + Hellcase closest to $0.50-$0.70 no-deposit. DaddySkins: none confirmed |
| Related Job 3: Verify the outcome | 1 (most never do, but trust that they could) - Source: benchmark.md Mechanism 1 | 2 (verifies after big wins) | 3 (core to their decision to trust) | 1 (low priority vs battle result) | Provably fair page, post-reveal verification link, public roll history | CSGORoll (score 5), skin.club (score 5). DaddySkins: score 1 (login-gated) |
| Related Job 4: Convert result into higher value | 2 (secondary, after D1) - Source: ux-patterns.md Pattern 4 | 3 (core behavior) - Source: strategy.md Segment B JTBD | 2 (uses upgrades as precision tool) - Source: ux-patterns.md Pattern 2 | 1 (peripheral) | Upgrade mode, in-platform exchange | All 5 hard competitors have upgrade mode. Skin.club per-SKU odds are best. DaddySkins upgrade present but odds display unconfirmed |
| Related Job 5: Withdraw cleanly | 2 (payoff moment) - Source: strategy.md Business Model | 3 (LTV-ending event if it fails) - Source: strategy.md Business Model Validation | 3 (validates platform credibility) | 2 (wins must be real to matter) | Withdrawal flow, Steam API integration, status tracking | skin.club: "few minutes," no fees (benchmark). Hellcase: 3-5 days, 4-7% fees (worst). DaddySkins: no withdrawal info visible pre-login (score 1) |
| Emotional Job 1: Genuine suspense, not manufactured | 3 (defines whether they return) - Source: ux-patterns.md Pattern 1 | 2 (cares about fairness for economic reasons) | 3 (a manipulated animation would end trust permanently) | 2 (battles have their own suspense mechanic) | Reveal animation (honest buildup, rarity-differentiated, no near-miss) | No competitor uses near-miss in stated design. Clash.gg Champion mode is most honest thrill. DaddySkins animation unconfirmed |
| Emotional Job 2: A win worth sharing | 3 (sharing is the referral loop) - Source: aarrr.md Referral | 1 (shares selectively) | 1 (not their primary focus) | 3 (battle wins are prime shareable content) | Share button on result state, rarity-differentiated animation, win display | Key-Drop and Clash.gg cited for most shareable moments. No competitor has one-tap result sharing confirmed |
| Emotional Job 3: Smart play rewarded | 1 (peripheral) | 3 (this is why they stay) - Source: strategy.md Segment B | 2 (feels validated when EV calculation was right) | 2 (strategic battle selection) | Rakeback dashboard, upgrade odds, loyalty points visibility | Gamdom 15% rakeback (benchmark). DatDrop DatPoints. DaddySkins: no rakeback confirmed |
| Social Job 1: Beat a real person | 1 (peripheral - solo mode) | 2 (competitive battles for high value) | 1 (peripheral) | 3 (the entire point of battle mode) - Source: ux-patterns.md Pattern 3 | Battle lobby, real-user matchmaking, bot prevention | Clash.gg Champion mode (30-sec matchmaking). DatDrop 80% bot lobbies (worst). DaddySkins: [?] bot status in battles unconfirmed |
| Social Job 2: Be part of a live platform | 3 (ambient context sets mood on arrival) - Source: ux-patterns.md Pattern 1 | 2 (ambient reinforcement) | 2 (social proof validates odds claims) | 3 (battle feed is core to battle mode) | Live drop feed, player count, battle lobby visibility | skin.club public roll history (benchmark). DaddySkins: bot names visible (worst in category) |

---

### Matrix Conclusion: 3 Jobs for MVP Core

These are jobs that score 3 (core) for the primary persona AND are not fully closed by any competitor:

**MVP Core Job 1 - Related Job 1: Arrive with confidence to try**

Importance for The Opener: 3 (first barrier to entry).
Competitor gap: Only Clash.gg closes this partially. No competitor surfaces provably fair information, tested RTP, AND live authentic activity pre-login simultaneously. DaddySkins scores 15/40 on the benchmark, lowest in category. The gap is open and the fix cost is low.

**MVP Core Job 2 - Main Job: Arrive, open, get the thrill (reveal quality)**

Importance for The Opener: 3 (core).
Competitor gap: All competitors close the basic job. The execution gap is in animation quality. DaddySkins is flat. Key-Drop and Clash.gg set the bar with rarity-differentiated animations. The gap is open in execution quality, not in feature existence.

**MVP Core Job 3 - Related Job 5: Withdraw cleanly**

Importance for The Opener: 2. Importance for The Accumulator: 3. Importance for The Researcher: 3.
Competitor gap: skin.club closes this best (few minutes, no fees, no login required for withdrawal info). DaddySkins score 1 - no withdrawal info visible pre-login. This is simultaneously a trust signal for acquisition AND the LTV-defining moment for the Accumulator.

---

### Candidate-for-Cut Functions

Functions that appear in the product scope but close no job scoring 3 for the primary persona:

- Rain-style ambient free-to-play mechanic: Closes Hypothesis Job B (spectating converts to deposit). Source is not confirmed. Clash.gg's Rain system is the frontier but was added in 2026 after establishing the core product. Defer to Phase 2.
- Community case creation: Closes no job in the current confirmed hierarchy. Addresses a social status job (Hypothesis Job C) with no data. Defer to Phase 2.
- Fiat/crypto withdrawal path beyond Steam: Closes Related Job 5 for a subset of users. Confirmed by Hellcase (ShadowPay) and Clash.gg (crypto). Not a Day 1 requirement given the Steam-to-inventory argument is the primary value proposition. Defer to Phase 2.

---

## Section 6: Critique

### 6.1 Claim verification table

| Claim | Status | Basis |
|-------|--------|-------|
| Primary audience is 18-25, active CS2 players | FACT | Platform audience data, strategy.md Segment A profile |
| All major competitors lead with animations, not data | FACT | Design review of 6 platforms, June 2026. Cited in strategy.md and master-research.md |
| Users arrive primarily via external social proof (streamers, clips) | FACT | ux-patterns.md Pattern 1, step 1 - confirmed by influencer-dominated acquisition spend across all competitors |
| The reveal animation is the primary D1 retention moment | FACT | ux-patterns.md Pattern 1. Cross-referenced with AARRR model Key Insight |
| Withdrawal reliability is the most common platform complaint | FACT | strategy.md Business Model Validation. Aggregated from competitor review analysis |
| No competitor has a named third-party RNG auditor | FACT | betterchecked.com 2026 audit (cited URL in master-research.md) |
| Bot activity is category-wide | FACT | Direct observation of DaddySkins, DatDrop, CSGORoll; cited in master-research.md Gaps Table |
| Lobby fill over 60-90 seconds causes battle abandonment | FACT | ux-patterns.md Pattern 3 ("Breaks when"). The 60-second figure is inferred from Clash.gg's 30-sec matchmaking as benchmark, not from user testing |
| Rakeback is table stakes (not a differentiator) | FACT | Gamdom 15% zero-wagering, DatDrop DatPoints, Clash.gg rakeback all confirmed. strategy.md Business Model |
| Thrill Seekers do not read provably fair info before depositing | HYPOTHESIS | This is the riskiest assumption in strategy.md. It is inferred from Hellcase's 2M MAU despite lowest trust score, not from direct user behavior data |
| The Researcher converts at higher rates when EV is shown | HYPOTHESIS | Inferred from ux-patterns.md Pattern 2 (Targeter behavior). No conversion data exists |
| Battle mode is a retention mechanic, not acquisition | HYPOTHESIS (strong) | Confirmed by competitive design (aarrr.md Retention section). Not proven by user data |
| Mood quotes (composite) represent real user voice | HYPOTHESIS | Built from observed themes in research materials. Not verbatim cited posts |
| "60 seconds" as the hard lobby fill time limit | HYPOTHESIS | The 60-second figure appears in ux-patterns.md. Its basis is Clash.gg's 30-sec benchmark plus the pattern text. No A/B test or user study confirms this specific threshold |

---

### 6.2 Danger list - claims that affect design decisions but stand on [?]

Priority order (highest design impact first):

**DANGER 1 - Do Thrill Seekers actively evaluate trust signals before depositing?**

The claim: The Opener cares enough about provably fair and bot-free feeds to be meaningfully influenced by them before their first deposit.
What it breaks: The entire trust-differentiation positioning thesis. If false, the extensive investment in provably fair page, live-feed authenticity, and third-party auditor produces acquisition advantage near zero. Trust becomes a retention and regulatory hedge, not a positioning lever.
Where this surfaces in design: Landing page hierarchy (trust signals vs animation showcase). Budget allocation for PF page vs streamer seeding. Pre-login content strategy.
Where to look for the answer: Reddit: r/GlobalOffensive, r/csgo, r/skinsite. Threads where users discuss why they chose a specific platform for the first time. Look for "I checked the fairness" vs "I tried it because [streamer] used it." Source to KILL or CONFIRM: strategy.md Riskiest Assumption test (landing page A/B on deposit flow click-through).

**DANGER 2 - What is the actual lobby fill threshold before battle abandonment?**

The claim: 60-90 seconds is the abandonment threshold for battle lobbies.
What it breaks: The condition for battle feature prominence. The product design specifies that battles should not be featured prominently until organic DAU can fill lobbies under 60 seconds. If the real threshold is 120 seconds, the condition changes. If it is 30 seconds, the condition tightens significantly.
Where this surfaces in design: Battle mode navigation hierarchy. Bot policy at launch. DAU gate for featuring battles.
Where to look: Clash.gg 30-sec matchmaking is the benchmark. DatDrop community threads on bot lobbies. Any published research on online game lobby fill patience.

**DANGER 3 - Does showing per-case EV materially change Researcher conversion?**

The claim: The Researcher converts at higher rates when EV is shown versus odds-only.
What it breaks: The depth of the pre-purchase information architecture. If EV display does not change conversion, the simpler per-item odds table (already required for trust) is sufficient, and the EV calculator is scope creep.
Where this surfaces in design: Case detail page scope. Information hierarchy on the pre-purchase view.
Where to look: No competitor publishes this data. Requires post-launch A/B test. Pre-launch: qualitative research with Researcher-type CS2 players.

**DANGER 4 - Are composite mood quotes representative?**

The claim: The mood quotes in each persona reflect actual user voice.
What it breaks: Persona credibility in any stakeholder presentation. More practically, any UX copy that draws on these "quotes" for tone guidance.
Where this surfaces in design: Any copy, tone guide, or UX writing that cites user language.
Where to look: Reddit (r/GlobalOffensive, r/csgo, r/skinsite), Trustpilot reviews for Hellcase/Key-Drop/CSGORoll, Discord discussion.

---

### 6.3 Three targeted questions to close the most important gaps

**Q1 - How do first-time visitors to CS2 case platforms describe why they chose a specific platform?**

Target: Reddit (r/GlobalOffensive, r/skinsite, CS2 Discord communities) and Trustpilot reviews for the top 3 platforms. Look for language around "why I tried this one first" vs "what kept me coming back." This directly tests DANGER 1 and either confirms or kills the trust-differentiation thesis for acquisition.

**Q2 - What do users who left a platform cite as the specific reason?**

Target: Trustpilot 1-2 star reviews for Hellcase, Key-Drop, CSGORoll, skin.club. Look for the exit trigger: was it a specific failed withdrawal, a suspicious result, a bot encounter, or something else? This sharpens the pains in each persona and validates or challenges the withdrawal-as-LTV-ending-event claim.

**Q3 - What specific language do users use when describing their first case open experience?**

Target: Reddit threads, YouTube comment sections on case opening videos, Discord clips. Look for what emotional words they use about the animation, the result, the sharing impulse. This provides verified language for persona mood quotes and for UX copy tone guidance.
