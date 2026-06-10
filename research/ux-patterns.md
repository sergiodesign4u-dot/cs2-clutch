# UX Patterns: CS2 Skin Case-Opening Platform Redesign

**Version:** 1.0
**Date:** June 2026
**Author:** Product Design
**Input:** Competitive analysis (competitive-analysis.md), benchmark research (benchmark.md), product model (product-model.md)

---

## 1. Behavioral Patterns

Five core patterns derived from the three motivation segments (Thrill Seeker, Collector, Grinder) and the behavioral signals observed across Clash.gg, skin.club, Hellcase, CSGORoll, Key-Drop, and DatDrop.

---

### Pattern 1: The Opener (Thrill-Driven, Single Session) - ENTRY POINT

**Segment:** Thrill Seeker (primary)

**What this user does, in order:**
1. Arrives from a stream clip, YouTube video, or Discord link where someone else won something remarkable.
2. Scans the landing page for visual confirmation that the platform is alive and real - active wins ticker, live player count, case images with prices.
3. Identifies a case in the $1-5 range that looks interesting. Does not read odds. Does not read terms.
4. Needs a low-friction reason to try. Responds to "free first case" or "open now, pay after" messaging.
5. Opens the case. The reveal animation is the product. Everything else is scaffolding around this moment.
6. If the drop is surprising (high or low), they react. If it is shareable, they share it.
7. If the animation felt good and the outcome felt real, they deposit and open again immediately.

**Triggered by:** Social proof from outside the platform (streamer, clip, friend) plus a low-stakes entry offer on landing.

**Breaks when:** The reveal animation feels scripted, the platform feels slow or visually dead, or the first case costs more than they were expecting before they opened their wallet.

**Why this is the entry point:** Every other pattern builds on this one. The Collector and the Grinder both started as Openers. The first case open is the singular activation event that determines D1 retention and sets the tone for every subsequent session. If this moment fails, nothing downstream gets a chance to work. The entire UX architecture of the platform - the landing page, the pre-login experience, the case detail page, the reveal animation - should be optimized for this pattern first.

---

### Pattern 2: The Targeter (Goal-Oriented, Research Phase)

**Segment:** Collector (secondary)

**What this user does, in order:**
1. Has a specific skin in mind - a knife, a rifle skin, or a grail item they have seen in-game or on Skinport/DMarket. Knows the Steam Market price.
2. Arrives via search ("best way to get [skin name]") or comparison content. Already skeptical. Needs to see odds before they will commit.
3. Goes directly to case detail pages and reads the odds table. Calculates expected cost to target. Compares to Steam Market price.
4. If the odds-adjusted expected cost is within acceptable range (typically 1.5-3x market price, with the upside being getting it for less), they open the case or start an upgrade chain.
5. Uses upgrades as a precision tool - not for gambling, but as a skin funnel. Puts in a $5 skin, upgrades toward a $50 skin, tracking success rate.
6. Withdraws when they get the target item. The withdrawal working reliably is the moment they decide whether to return.

**Triggered by:** A specific skin target plus visible odds data on a case detail page.

**Breaks when:** Odds are hidden or vague, upgrade interface does not show probability clearly, or withdrawal fails or delays.

---

### Pattern 3: The Battler (Competitive Return)

**Segment:** Thrill Seeker, with Grinder overlap for high-stakes formats

**What this user does, in order:**
1. Has already opened cases solo and wants a higher-stakes format with another human as the opponent.
2. Browses the battle lobby. Looks at pot size, case selection, and who has joined.
3. Creates or joins a battle. Waits for opponent to fill. Lobby fill time is a retention risk - if they wait more than 60-90 seconds, they leave.
4. Watches the side-by-side case opens. The opponent's drops are as interesting as their own - this is the social dimension that solo opening lacks.
5. Win or lose, the result is shareable. Wins generate celebration moments; close losses generate "I almost had it" moments that drive re-engagement.
6. Returns for scheduled repeat battles, or hunts for the specific case setup that felt most competitive.

**Triggered by:** A live battle lobby with visible pot size and at least one open slot. Also triggered by seeing battle win notifications in the live feed.

**Breaks when:** Lobby fills with bots (kills the "real opponent" social dynamic), pot size is too small to feel meaningful, or the reveal timing is not synchronized (one player's outcome visible before the other's).

---

### Pattern 4: The Accumulator (Long-Session, Balance-Building)

**Segment:** Grinder (secondary)

**What this user does, in order:**
1. Arrives with a clear budget in mind and a plan to extend play through smart case selection, battles, and upgrade paths.
2. Checks their rakeback or loyalty dashboard first. Knowing how much they will earn back shapes their session budget.
3. Opens lower-cost cases with better expected value, upgrades wins upward, and re-opens proceeds rather than withdrawing immediately.
4. Tracks their balance over the session. Sets a mental floor - if balance drops below X, they stop.
5. Uses the upgrade mechanic as a skill proxy. Believes (accurately or not) that their timing, case selection, or upgrade percentage choice gives them an edge.
6. Withdraws when they hit a meaningful high point - a skin worth significantly more than their deposit, or when rakeback tips the math favorably.

**Triggered by:** A rakeback payout notification, a loyalty milestone, or a balance high point that creates a "this is the moment to go bigger" feeling.

**Breaks when:** Rakeback mechanics are opaque, upgrade odds are not visible, or the session-end state (withdraw vs. re-open) is not clearly rewarded.

---

### Pattern 5: The Spectator (Social, Low-Commitment, Top-of-Funnel)

**Segment:** Not yet mapped to a segment - this is a pre-activation behavioral pattern

**What this user does, in order:**
1. Arrives on the platform without intent to spend. May be following a link, exploring out of curiosity, or evaluating the platform before inviting a friend.
2. Watches the live drops feed, the battle feed, or a streamer playing on-screen.
3. Identifies a "wow moment" - a rare drop, a battle win by a narrow margin, a skin they recognize and want.
4. That moment is the conversion trigger. It is not a CTA button, it is a live event they witnessed.
5. If that moment does not happen within 90 seconds of landing, they leave.

**Triggered by:** Live social proof - real drops happening in real time, visible without login.

**Breaks when:** The live feed contains obvious bots (DaddySkins' "[BOT] Darth Vader" pattern), the platform looks visually static, or the page load is slow enough to break the "live" illusion.

**Why this pattern matters for design:** The Spectator is the unconverted Opener. The live feed is not decoration - it is the activation mechanic for this entire pattern. If the live feed feels fake or is populated by bots, this pattern never converts to Pattern 1.

---

## 2. Five Fundamentally Different UX Patterns for the Core Experience

---

### Pattern A: The Slot Machine / Linear Reveal

**How it works mechanically:**
The user selects a case, confirms the cost, and triggers a linear animation - typically a horizontal strip of skins scrolling at high speed, decelerating, and landing on the outcome item. The outcome is determined server-side before the animation begins. The animation is theatre over a pre-determined result. The scroll may slow over the outcome item, creating a "landing" moment with audio and visual punctuation (screen flash, particle effect, sound). Duration: 3-7 seconds.

**Variants in the wild:**
- Hellcase uses a spinning wheel variant of this pattern - a circular reel rather than horizontal strip. Same mechanical logic, different visual metaphor.
- Key-Drop uses sparks and fire animations layered over the linear strip as rarity punctuation - a quality-of-life enhancement on the base pattern.
- skin.club uses the horizontal strip with numerical odds shown per item during the spin (the item's probability is visible on each card in the strip as it passes), which merges the reveal with the fairness data.
- DaddySkins (current baseline) uses the horizontal strip but with no rarity-tiered animation variation - a flat reveal regardless of drop value.

**JTBD this fits:** Thrill Seeker wanting a clean, fast, repeatable reveal ritual. The animation is the product. Collector tolerates it because the odds table is visible on the case page. Grinder uses it at speed - they want to open fast and move on.

**When it fits:**
- Solo case opening at any price point.
- High-frequency, low-deliberation sessions.
- When the platform wants to emphasize speed and repeatability.
- When the animation quality itself is a differentiator.

**When it breaks:**
- When the strip animation is visually flat and the rare/common items look identical in motion - the user cannot read the reel and the moment lacks drama.
- When the animation duration is too long (above 6-7 seconds) for high-frequency sessions - Grinders will find it frustrating.
- When near-miss mechanics are applied (visually passing through high-value items before landing on the actual outcome) - this is a manipulation pattern that breaks trust in a provably-fair context. The outcome is already determined before the animation; showing near-misses is manufactured false hope, not tension.
- When the animation is the same regardless of outcome value - a $0.05 common and a $1,000 knife should feel visually and audibly different.

---

### Pattern B: The Card Flip / Instant Reveal

**How it works mechanically:**
The user selects a case, confirms, and taps or clicks a single card or capsule. The card flips, fades, or opens instantly to reveal the outcome. No animation strip, no scroll, no buildup. Duration: under 1 second. The result is immediate. Any celebration (confetti, sound, rarity glow) happens after the reveal, not as buildup to it. The emotional beat is surprise rather than anticipation.

**Where it is used:**
- Card flip is the dominant pattern in mobile gacha games (Genshin Impact, Clash Royale) and digital trading card openings. No CS2 case-opening platform uses pure instant reveal as its primary mechanic, making this a white space.
- Clash.gg's Upgrader uses a simplified near-instant version (a dial sweep animation under 2 seconds) that is closer to this pattern than to the linear strip.
- skin.club's upgrade interface uses a spinning dial that resolves quickly - conceptually aligned with this pattern.

**JTBD this fits:** Grinder who wants high-frequency, low-friction openings in bulk. Also fits mobile-first interaction patterns where a long scroll animation is awkward on a phone screen.

**When it fits:**
- Bulk-opening flows (open 10 cases at once, results shown as a card grid that flips one by one or simultaneously).
- Mobile primary context.
- Secondary modes or bonus case rewards where the primary excitement is the winning item, not the opening ritual itself.
- When the platform wants to differentiate from the scroll-strip standard.

**When it breaks:**
- As a primary single-case reveal, it removes the ritual and anticipation that the Thrill Seeker is paying for. The buildup IS the product for this segment. An instant result feels cheap, not exciting.
- When the outcome rarity is not visually differentiated in the post-flip state - the card flips the same way regardless of value, and a $2,000 reveal looks identical to a $0.10 reveal until the user reads the text.
- Not appropriate for the hero case opening flow. Best used as a supporting pattern (bulk opens, bonus rewards) rather than the primary reveal.

---

### Pattern C: The Battle / Competitive Reveal

**How it works mechanically:**
Two to four players each open a case simultaneously, or a single case is opened in sequence for each player. Results are shown side-by-side in a split-screen layout. The player whose combined skin value is highest wins the pot (all skins go to the winner). The tension is comparative - not just "what did I get" but "did I beat them." The social layer is built into the mechanics, not added on top.

Advanced variant (Clash.gg Champion mode): HP is derived from item value. Players attack each other using CS2-weapon-themed animations with variable hit count, miss chance, crit chance, and damage per weapon. The battle resolves over multiple rounds, not a single open. This extends the experience duration, adds comeback mechanics, and makes the weapon choice feel meaningful.

**Where it is used:**
- Clash.gg: 1v1, 2v2, 3v3, team modes. Champion mode adds HP mechanics and per-weapon animations. 30-second average matchmaking. "CLASH KING" status designation. Seed-based provably fair with pre-round hash shown inline.
- Hellcase: PvP up to 4 players, reversed mode, sharing mode, bot battles, underdog mode.
- skin.club: Battle listing with a CRAZY MODE toggle (lowest value wins, inverting the standard mechanic).
- DatDrop (as of original research): Battle Royale format, up to 72 players, bracket format. Bot majority-vote mechanic for lobby fill.
- Key-Drop: 2-4 players, classic and underdog modes.

**JTBD this fits:** Pattern 3 (The Battler) directly. Also serves Thrill Seekers who want social proof within the experience (seeing another player's drops in real time) and Grinders who treat battle case selection as a skill layer (choosing cases with more volatile drop tables to create comeback potential).

**When it fits:**
- Returning users who have already experienced solo opening and want escalating stakes.
- Competitive user profiles who value a real opponent over a solo outcome.
- When the platform wants a scheduling mechanic - recurring battles at specific times create return behavior.
- When the platform wants shareable moments - a clutch battle win with a narrow margin is the most clip-worthy outcome in the category.

**When it breaks:**
- When lobby fill uses bots without labeling them - the social tension collapses. A battle against a bot is solo opening with extra steps. DatDrop's majority-vote-to-add-bots mechanic, and DaddySkins' openly named "[BOT] Darth Vader" entries, illustrate the trust cost of this tradeoff.
- When lobby fill time exceeds 90 seconds - users abandon. This is a chicken-and-egg problem: battles need players to be fun, but new platforms do not have enough players to fill quickly. Clash.gg's 30-second average matchmaking is the benchmark worth targeting.
- When the split-screen layout is cluttered or the opponent's result is revealed before the user's own - information asymmetry in a PvP context destroys the fairness feel.
- Not appropriate as the primary entry experience for new users - they have not yet established a baseline of solo opening to compare against.

---

### Pattern D: The Upgrade Path / Progressive Reveal

**How it works mechanically:**
The user starts with a skin they own (or won from a case) and chooses a target skin of higher value. The platform shows the upgrade probability (e.g., "you have a 23.4% chance to upgrade to this knife"). The user confirms. The outcome is instant or near-instant - the skin either upgrades (success) or returns a lower-value consolation item (failure). The experience is a chain of decisions, not a single event. Each upgrade decision is a new bet on a new probability. The ritual is the decision sequence, not a single reveal animation.

**Where it is used:**
- Clash.gg: Upgrader at 92.7% RTP (publicly stated). Roll-under/over mechanic.
- skin.club: Upgrade odds range 0.001% to 80%. Multiplier buttons (1.5x, 2x, 5x, 10x, 20x) visible pre-login.
- Hellcase: Multiplier slider (0-5x range). Standard upgrade probability interface.
- Key-Drop: "Upgrader" mode, probability-based skin value progression. Skin Changer (instant skin swap) as a related variant.
- CSGORoll: Quick Upgrade Game, covered in provably fair documentation.

**JTBD this fits:** Pattern 2 (The Targeter) and Pattern 4 (The Accumulator) directly. The Collector uses upgrades as a precision path toward a target skin. The Grinder uses them as a skill proxy - "I chose the 40% upgrade rather than the 10% upgrade because I am managing my bankroll." Both segments are more engaged when upgrade probabilities are shown to four decimal places (as skin.club does), because it feeds the research behavior that characterizes both profiles.

**When it fits:**
- Users who already have skins on the platform (from previous opens or deposits) and want to trade up.
- High-deliberation sessions where the user wants to make a sequence of decisions rather than a single high-variance bet.
- When the platform wants to capture a longer session duration per user - the upgrade chain keeps users on-platform for 5-20 minutes per session rather than 30 seconds per case open.
- As a progression path that gives the Collector a rational reason to use the platform repeatedly rather than just buying from Steam Market.

**When it breaks:**
- When upgrade odds are not visible or are shown only as a multiplier (e.g., "2x upgrade") without the underlying probability percentage - the Collector cannot calculate expected value and disengages.
- When there is no consolation item on failure (the user loses their input skin entirely) and this is not clearly communicated before the attempt - this is a trust-destroying pattern.
- When the upgrade interface is more visually complex than the case opening interface, making it feel like a secondary, lower-quality feature. The upgrade should feel as polished as the primary open.
- Not appropriate as the primary new-user experience. New users do not have skins to upgrade. This pattern requires prior engagement with the platform.

---

### Pattern E: The Community Discovery / Social Reveal

**How it works mechanically:**
The user's case-opening experience is embedded in a shared, live social context. This takes two forms:

Form 1 - Live Feed Ambient Layer: A persistent, real-time feed of drops across the platform is visible during (or adjacent to) the user's own opening. The user sees other players winning rare items while they play. This creates ambient social proof and FOMO that influences case selection and session duration.

Form 2 - Community-Created Cases (skin.club model): Any user can build a case, select its skin contents, set the price, and publish it for other users to open. The creator earns a share of revenue from their case. Case Competition events allow community cases to compete publicly, with leaderboards showing which cases are most popular, most opened, and highest value generated. The platform's editorial team spotlights top creators.

**Where it is used:**
- skin.club Community Cases: The only platform in the hard competitor set with a full user-created case system. Case Competition events with public leaderboards. Editorial spotlight and badge system for top creators. Per-SKU odds to four decimal places. (https://skin.club/en/community-cases)
- CSGOEmpire: Left-rail persistent chat as a community signal pattern. The chat rail creates ambient social presence during play without requiring the user to interact with it.
- Roobet: Crash game with visible simultaneous bettor crowd - the number of other players cashing out (or busting) is part of the live experience. This is community discovery applied to a single game instance.
- Stake.com: Real-time promotions lobby with live race standings, wager leaderboards, and prize pool displays on a single scrollable view. Community visibility at the platform level rather than the game level.

**JTBD this fits:** Pattern 5 (The Spectator) as the activation mechanism for new users. Also fits Pattern 3 (The Battler) because the live feed is the social proof that makes battles feel real. Community-created cases serve the Creator sub-type within the Thrill Seeker segment - users who want to be part of the platform's identity, not just consumers of it.

**When it fits:**
- Landing page and pre-login experience (live feed as ambient activation).
- When the platform wants to build an identity beyond a pure case-opening utility - community ownership of cases creates a content moat.
- When the platform wants a referral and sharing mechanic that is more organic than a promo code - a user who built a case will share it because it carries their identity, not because they get $2 for a referral.
- High-engagement user profiles who want status within the community (CLASH KING equivalent, top case creator badge).

**When it breaks:**
- When the live feed contains bots, named or unnamed - this directly destroys the social proof that makes the pattern work. DaddySkins' current "[BOT] Darth Vader" naming makes this problem explicit. If the "community" in community discovery is visibly fake, the pattern inverts from trust-building to trust-destroying.
- Community-created cases require a critical mass of quality case creators before the feature is worth surfacing prominently. Launched too early, the case catalogue is low-quality and the leaderboard is empty, which signals a dead community rather than a live one.
- The live feed as ambient layer breaks when events are too infrequent - a platform with low daily volume will show a sparse feed that signals low activity. The feed needs to be fast enough (multiple events per minute) to feel live.

---

## 3. Pattern Selection

---

### Primary Choice: Pattern A (Slot Machine / Linear Reveal) with Pattern E (Community Discovery / Social Reveal) as the ambient layer

**This is not a compromise between two patterns. It is a layered architecture: Pattern A is the core mechanical experience, Pattern E is the social context wrapped around it.**

The reveal animation (Pattern A) handles the Thrill Seeker's core JTBD. The live social feed and community signals (Pattern E) handle the Spectator-to-Opener conversion path and the Battler's need for social stakes. They do not compete - they occupy different layers of the same screen.

**Three reasons for Pattern A as primary:**

Reason 1 - JTBD alignment with the entry point behavioral pattern.
The Opener (Pattern 1, the entry point behavioral pattern) is triggered by and satisfied by a high-quality reveal animation. The slot machine/linear reveal is the category standard precisely because it maps to the core job: "give me the ritual of opening, the anticipation of the spin, and the resolution of the outcome." Any other primary reveal pattern would require educating a new user about a new mechanic before they could experience the product. The linear reveal requires zero explanation. New users from Hellcase, Key-Drop, or any competitor recognize it immediately and can begin their first session without a learning curve. This reduces friction at the moment that matters most.

Reason 2 - Competitor gap in animation quality.
The category uses Pattern A almost universally, but execution quality varies enormously. DaddySkins' current implementation is flat - no rarity-tiered animation variation, no audiovisual escalation for rare drops, no particle effects or screen emphasis for high-value outcomes. Key-Drop's sparks and fire effects (cited specifically as a differentiator in reviews), and Clash.gg's per-weapon animations in Champion mode, show that animation quality within Pattern A is the competitive surface where the platform can win. The pattern is the right choice; the quality of execution is where the gap exists and where the redesign should invest. This is a competitor gap: the linear reveal is the incumbent standard, but no platform in the hard competitor set has achieved a truly cinematic, rarity-differentiated reveal with modern visual quality. That space is open.

Reason 3 - Trust architecture compatibility.
Pattern A is the most compatible with the provably fair trust model. The outcome is determined before the animation begins (server seed committed, hash published). The animation is an honest theatrical display of a pre-calculated result. This framing - "the outcome is already set, you are now watching it revealed" - is coherent with the fairness message. Communicating this to users ("your result was locked before the spin started - here is the hash to prove it") makes the animation a trust artifact rather than a manipulation. Patterns B, C, and D also support this architecture, but Pattern A's buildup-and-reveal structure gives the most natural moment to surface the pre-round hash as a UI element - a design approach pioneered by Clash.gg Champion mode and worth adopting for solo opening as well.

---

### Alternative Pattern Under Condition: Pattern C (Battle) when the platform reaches a minimum viable daily active user count [?] to support lobby fill under 60 seconds

Once the platform has enough concurrent users to fill battle lobbies in under 60 seconds without bots, Pattern C should be elevated from a secondary mode to a co-equal primary experience. The competitive reveal is the highest-shareable moment in the category - a narrow battle win is more clip-worthy than any solo open - and it is the strongest driver of Pattern 3 (Battler) behavior, which represents the highest-frequency returning user archetype.

The precondition is strict: lobby fill without bots. Bots in battles kill the social proof and turn the mode into an expensive solo-opening variant. If the platform cannot fill lobbies organically, the battle mode should be visible but not prominently featured. Prominently featuring an empty or bot-filled battle lobby is worse than not having the mode, because it signals low activity on the platform.

The battle mode should be designed and built to be ready, but its prominence in navigation and landing page hierarchy should scale with organic daily active user count, not with the platform's desire to show the feature.

---

### Pattern That Does NOT Fit: Pattern B (Card Flip / Instant Reveal) as the primary hero experience

Pattern B is the correct pattern for bulk-open flows (10 cases opened simultaneously, results shown as a flipping card grid), for bonus reward reveals, and for mobile-secondary interaction contexts. It is the wrong pattern for the primary single-case opening experience.

The reason is direct: the Thrill Seeker (primary segment, entry point behavioral pattern) is paying for the ritual of anticipation, not just the outcome. Pattern B eliminates the anticipation. It delivers the result immediately, which is efficient and low-friction, but it removes the 3-6 seconds of genuine tension that is the emotional core of the product. You cannot charge $50 for a card flip the way you can charge $50 for a high-quality cinematic spin that builds to a reveal. The perceived value of the experience is directly tied to the perceived drama of the reveal, and Pattern B collapses that drama by design.

There is also a trust dimension. A single fast card flip for a $50 case feels impersonal, almost like a coin flip. The linear spin, by showing the full range of possible outcomes scrolling past before landing, communicates that many results were possible - not just two. This visualization of the probability space (even when it is theatre) is what makes the loss feel fair and the win feel earned. Pattern B removes this psychological scaffolding.

Pattern B should be used as a supporting pattern, not a primary one.

---

### How the Chosen Pattern Maintains Animated Feel While Protecting Clarity and Trust

The tension in this design is real: a high-quality reveal animation can easily shade into manipulation if the excitement mechanics are not anchored to honest information. These are the specific design decisions that resolve that tension.

**Honest buildup, not manufactured near-miss.**
The spin animation should slow toward the outcome item, not past it. The deceleration arc should be calibrated to land on the actual result without visually passing through better items first. Near-miss mechanics (showing a $1,000 knife one position before landing on a $0.50 common) are provably-fair contradictions - the outcome was set before the spin began, so the near-miss is fabricated. The competitive community will notice and post about it. The excitement in the buildup comes from the genuine unknown of what the outcome is, not from the illusion of almost winning something better.

**Rarity-differentiated animation, not rarity-uniform animation.**
A $0.50 common drop and a $500 rare drop should look and sound different from the first frame of the spin. The spin speed, the particle effects, the audio signature, and the screen emphasis should all scale with outcome rarity. This serves both the Thrill Seeker (the rare drop moment is genuinely cinematic) and the Collector (rarity signaling is honest and immediate). Key-Drop's sparks and fire effects are cited by users as the single most memorable visual differentiator in the category - this is the standard to beat, not the standard to reference.

**Pre-round hash visible at spin trigger.**
Before the spin begins - at the moment the user clicks "Open" - the server-side hash of the outcome should be surfaced as a small, persistent UI element (a hash string, a "Verify after open" label, or a fairness indicator). This does not interrupt the animation. It adds one trust-anchoring element to the moment of highest emotional investment. Clash.gg Champion mode does this for battles; it should be applied to solo opening. The user who never reads it is unaffected. The user who does read it receives the highest-value trust signal the platform can provide.

**Post-reveal verification in the results state.**
After the spin resolves, the results screen should show the outcome, the skin value, and a one-tap link to verify the outcome against the pre-round hash. This verification path should not require navigation away from the opening flow (Roobet's in-game provably fair display is the benchmark). A user who just won a $200 skin and can immediately verify the outcome - without leaving the screen - receives trust confirmation at the moment of highest positive engagement.

**Animation duration calibrated by session type.**
Single-case opens: 4-6 seconds (full spin, drama arc, resolution). Bulk opens (10+ cases): Pattern B card-flip grid, each card 0.5-1 second. This distinction is not arbitrary - it respects the Thrill Seeker's investment in the solo ritual while respecting the Grinder's time in bulk sessions. Both experiences should feel high-quality, but they serve different jobs and should not be the same animation.

---

## Source Reference

All platform citations in this document draw from competitive-analysis.md (June 2026). Specific source URLs cited in competitive-analysis.md Section: Source Index.

Key sources for pattern citations:
- Clash.gg Champion mode mechanics: https://cs2gambling.com/reviews/clashgg/ and https://boxsniper.com/reviews/clash-gg
- skin.club Community Cases: https://skin.club/en/community-cases
- Key-Drop visual animations: https://cs2pulse.com/skins-gambling-guide/best-websites/keydrop-review/
- Roobet in-game provably fair pattern: https://theportugalnews.com/news/2025-08-02/crypto-casinos-face-off-stake-roobet-or-spartans-who-truly-delivers-real-time-fairness-in-gaming/188096
- Hellcase shard system and spinning wheel: https://esports.gg/news/counter-strike-2/what-is-hellcase/
- DatDrop Battle Royale format: https://fairness.gg/reviews/datdrop/
- CSGOEmpire left-rail chat: https://fairness.gg/reviews/csgoempire/
- Stake.com promotions lobby: https://pokerfuse.com/online-casinos/international/stake-casino-review/
- Near-miss dark pattern regulatory note: UK Gambling Commission slot machine regulations (2020), cited in benchmark.md
- Bot trust problem source: competitive-analysis.md Section 3.1 Pattern 3 and Section 3.5
