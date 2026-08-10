# Benchmark

This file holds two things, and they are not the same instrument.

**Part 1** is the stage 01 step 4 benchmark as the course defines it: one dimension, scored against best-in-class products from **other** categories. Dimension chosen by the founder on 2026-08-05: **the reveal moment**. Written 2026-08-05.

**Part 2** is the in-category trust and fairness scoring that this file used to be. It is retained because twelve downstream citations resolve into it and because its data is real. It is not a benchmark in the course's sense: it scores direct competitors, which is step 3 material. Its fate is named at the end of Part 1.

---

# Part 1. The reveal moment

## The dimension

**The reveal moment:** the span that begins when the user commits to a randomised outcome and ends when they have understood what they got and know what to do next.

Chosen by the founder over the two alternatives offered (the trust and verification layer, and the money in-and-out loop) because it is the one span the whole product exists to deliver. The primary JTBD names it directly: "the rush of a drop and possibly end up with something worth having". Everything else on the platform is a corridor leading to this span or away from it.

**Products scored, all from outside the CS2 skin category:**

| Product | Category | Reveal being scored |
|---|---|---|
| EA SPORTS FC 26 Ultimate Team | Sports video game | Pack opening bought with FC Points |
| Pokémon TCG Pocket | Digital collectible cards | Booster pack opening and Wonder Pick |
| MONOPOLY GO! | Casual mobile game | Sticker packs, swap packs, vaults |
| Genshin Impact | Action RPG | Wish, the gacha pull |
| Nike SNKRS | Retail commerce | Exclusive Access and Exclusive Draw |

None of them sells CS2 skins. Every one of them has solved, at scale, the problem of making a randomised outcome feel worth paying for. That is the point of looking outside the category: the direct competitors in Part 2 all solved it the same way, so comparing against them teaches nothing new.

## What the public record can and cannot show

Every score below rests on a page opened in a browser on 2026-08-05, listed in the source index. That constrains what could be scored honestly.

Odds, floors, rarity ladders and duplicate economies are documented publicly, because in several jurisdictions disclosure of loot box probabilities is a legal requirement and the publishers write the disclosure pages themselves. The craft of the reveal is not documented anywhere: the length of the build-up, where the cut lands, what the sound does, how long the hold before the payoff is. All of that lives inside a game client and behind a login.

So the six criteria below are the ones a person outside the product can actually verify. The craft questions are carried separately, marked `[?]`, in "What the public record cannot tell us". This is not a gap in the research. It is the finding: **the mechanics of a reveal can be copied from documentation, the craft cannot, and stage 06 has to design it rather than lift it.**

## C1 to C6, the criteria

Scale 1 to 5 on every criterion.

| # | Criterion | 1 | 5 |
|---|---|---|---|
| C1 | **Odds at the point of commitment.** Are the real probabilities on the same screen where the user commits, before they commit, without login or navigation away? | No odds published anywhere, or disclosure refused as policy | Full odds on the commitment screen itself, per item, no login |
| C2 | **Guaranteed floor, and visible progress toward it.** Is there a published mechanism that bounds the worst run, and can the user see how close they are to it? | Nothing bounds a bad run | Published floor, exact numbers, visible counter, user chooses what the floor pays out |
| C3 | **Rarity ladder as a learnable language.** Is there a fixed, named, small set of tiers that the user learns once and then reads instantly, in the same place every time? | No ladder, scarcity is ad hoc or social | One glyph in a fixed position carries the whole ladder, and the odds screen teaches it |
| C4 | **Agency inside the reveal.** Does the user do anything between commit and outcome, or only watch? | Watch only | Real choices inside the reveal, reversible until confirmed |
| C5 | **Value of the ordinary outcome.** The modal result is common. Does it carry forward, or is it a dead end? | A common outcome is worth nothing | Every outcome converts into visible progress toward something chosen |
| C6 | **Cadence and cost of a reveal.** How often can a user have this experience, and does it always cost money? | Money only, irregular | A free reveal on a fixed rhythm, money compresses the timer rather than unlocking the ritual |

## Score table

| Product | C1 Odds | C2 Floor | C3 Ladder | C4 Agency | C5 Ordinary | C6 Cadence | TOTAL /30 |
|---|---|---|---|---|---|---|---|
| **Pokémon TCG Pocket** | **5** | **5** | **5** | **5** | **4** | **5** | **29** |
| **MONOPOLY GO!** | **2** | **4** | **4** | **5** | **5** | **5** | **25** |
| **EA SPORTS FC 26 UT** | **4** | **3** | **4** | **3** `[?]` | **3** `[?]` | **2** | **19** |
| **Genshin Impact** | **3** | **5** | **5** | **1** | **3** `[?]` | **2** `[?]` | **19** |
| **Nike SNKRS** | **1** | **1** | **2** | **1** | **1** | **3** | **9** |

`[?]` marks a cell whose evidence is inside a game client and could not be verified from a public page. The number is the best reading available and is not a fact.

## Observations per product

### Pokémon TCG Pocket, 29/30

The offering rates sit on the pack selection screen, which is the exact moment of commitment: "On the pack selection screen, you can check each booster pack's offering rates to learn which cards can be found within each set." The rarity ladder is one glyph in a fixed position, "one to four diamonds, one to three stars, or a crown", ordered rarest to most common, and the three-star tier is where the immersive cards live, so the ladder has a motion tier built into it rather than bolted on.

The floor is the strongest design in the set. Pack points accrue on every single pack opened and are exchanged for cards of the player's choice, with rarer cards costing more. That converts a run of bad luck into visible progress toward a specific card the player names, which is a pity system with a progress bar and player agency at the end of it. Agency inside the reveal is doubled: the player chooses which booster pack of an expansion to open knowing the packs hold different card sets, and Wonder Pick makes the player perform the randomisation themselves, "the five available cards will be turned face down and shuffled. You'll then pick one of those cards".

Cadence is the quiet reason this product works: "Every 12 hours, you can choose a booster pack to open at no cost", with a stamina meter on the home screen showing the wait. Money compresses the timer, it does not unlock the ritual. The one point lost is on C5: duplicates convert to flair, a cosmetic, which is real but thinner than a currency.

### MONOPOLY GO!, 25/30

The best treatment of the ordinary outcome anywhere in the set, and it is fully documented. "Every duplicate sticker you collect gives you stars based on its rarity", the stars open reward vaults, "The more stars you exchange, the better the reward you'll get", and duplicates are simultaneously the trading currency with other players. Even album completion does not strand them: "your duplicate stickers are not completely gone, they turned into stars". Rarity and value are the same number, which is unusually legible: "a 4⭐ sticker has a value of 4⭐. A gold 4⭐ sticker has a value of 8⭐".

Agency inside the reveal is the sharpest mechanic in the whole benchmark. A Swap Pack gives "up to 3 swaps per pack. Swap 3 different stickers once each, or one sticker up to 3 times", nothing is final until confirmed, and the confirmation carries a written warning against the player's own impulse: "Are you sure? This new sticker could help you complete your Album." The reveal is not a thing that happens to the player, it is a thing they negotiate.

C1 is where it fails, and the failure is instructive. The public help centre documents composition ("4 stickers, all 3★ or higher") but publishes no probabilities at all. `[?]` on whether an in-app odds surface exists. A product this generous about duplicates is silent about odds, which suggests the generosity is doing the work that transparency would otherwise have to do.

### EA SPORTS FC 26 Ultimate Team, 19/30

The odds disclosure is the most deliberate in the set and is placed correctly: "On the EA SPORTS FC™ Ultimate Team Store screen, you'll see an option under every pack available for FC Points that reads 'Show Pack Probabilities.'" EA states the purpose in the same breath, "to help you make decisions on where you want to invest your FC Points, Ultimate Team Coins, and time". Methodology is published too: probabilities are "calculated by simulating the opening of a very large number of packs", re-run "with every content update". Two things cost it the fifth point: the figures are category-level minimums, and "the probability of receiving a particular individual item is significantly less than the displayed probability for the OVR or special category range, and is often less than 1%".

The floor is per pack and nothing bounds a run: "A pack will always contain one or more items of the minimum guaranteed rarity or rating", but "each pack opening is an independent event; opening multiple packs does not change the likelihood of being awarded an item from a specific category. If you flip a coin three times and get heads each time, you still have a 50% chance of getting heads if you flip the coin again." That paragraph is honest and it is also the design: there is no pity here, and the honesty is used to justify its absence.

The ladder is strong because the odds screen teaches it. Gold, Rare, OVR bands (75+, 82+, 84+) and named special types (Team of the Week, Hero, Icon, Campaign) are the same vocabulary in the probability table and on the item. Cadence scores low because the disclosed reveals are the paid ones, "every pack available for FC Points".

### Genshin Impact, 19/30

Included for one reason: it holds the most influential published floor in games, and it also shows the exact failure our product must avoid. The base rate of 0.6% and the 90-pull guarantee are both announced by the publisher. What is not announced is the curve between them. The soft pity, where the rate climbs from 0.6% to roughly 6.6% at pull 74 and rises about six points per pull until it reaches certainty at 90, was reconstructed by the community from a database of 25 million pulls and published on HoYoverse's own community platform in 2021.

Read that plainly. The most successful pity system in the world is one where players had to build a statistical model of 25 million outcomes to learn how the product they were paying for actually behaves. It works commercially. It is the precise opposite of a provably fair claim, and it is the gap our product exists to close: publish the whole curve, not the two endpoints.

Agency is 1, the player watches. C5 and C6 carry `[?]`: duplicate conversion and the per-wish cost are inside the client and no public page was opened for them. The 2021 date on the statistical model is a further caveat, since the system may have changed since.

### Nike SNKRS, 9/30

The anti-example, and it earns the position on the record rather than by assumption. Nike states non-disclosure as policy, in its own voice: "You can't game the system and be guaranteed Exclusive Access." And: "The criteria used to determine Exclusive Access is constantly changing. We look at things like past losses as one of the many factors and these ingredients are used in different combinations at different times. Trying to figure out the secret sauce and how to influence the recipe will not increase your chances of getting Exclusive Access." Selection is confirmed random, "Today, winner selection for Exclusive Access is randomized", and the newer Exclusive Draw is "also an invite-only, randomized selection Launch".

So there is a consolation mechanism (past losses feed the model) and the user is told explicitly they may not see it, count it, or influence it. The reveal is a push notification. Nike scores 9 out of 30 on this dimension and remains one of the most desirable launch platforms in retail, which is worth stating clearly rather than explaining away: opacity is a viable strategy under conditions Nike has and we do not. Those conditions are named in the "will not work" section.

## Top 3 mechanisms to carry into the MVP

### Mechanism R1. Odds on the commitment screen, and the ladder taught by that screen

**Source:** Pokémon TCG Pocket, offering rates on the pack selection screen. Supported by EA SPORTS FC, "Show Pack Probabilities" under every pack in the store.

**What it is for us:** the per-item odds table lives on the case detail page, above the open button, visible pre-login, with no expand step required to see that it exists. The rarity glyph used in the odds table is the identical glyph used on the item in the reveal and in the drop feed. One symbol, one position, three surfaces.

**Why it works:** the odds screen stops being a compliance artefact and becomes the tutorial for the whole visual language. A user who reads the table once knows how to read every reveal afterwards at a glance, without text. This is the cheapest possible way to buy instant legibility at the payoff moment, which is criterion C3 and is where Part 2's Mechanism 2 (per-case odds pre-login) stops short: Part 2 argued for odds as informed consent, this adds that odds are also how the rarity language gets taught.

**Depends on:** stage 06 producing the rarity glyph set before the case detail page is designed.

### Mechanism R2. A published floor with a visible counter, and the whole curve published

**Source:** Pokémon TCG Pocket pack points for the shape (accrue on every open, spend on a chosen item, rarer costs more). Genshin Impact for the proof that a published guarantee changes behaviour, and for the failure to avoid.

**What it is for us:** every open accrues points on a visible counter that does not reset on a win. Points buy a named item the user chooses. The full probability curve is published, including any variation by open count, not only the base rate and the guarantee. If our system has no variation by open count, that is published too, in those words.

**Why it works:** it converts the worst run into visible progress, which is the single biggest emotional failure mode of a paid reveal. And publishing the curve rather than the endpoints is our differentiator expressed as a mechanic instead of as a badge. Genshin proves the demand exists: players built a 25 million pull database because the publisher would not tell them. We tell them, and that is a product feature no competitor in Part 2 offers either.

**Danger to name at stage 03a:** a pity counter is a commitment device and interacts with responsible play tooling. It must not be designed as a reason to keep spending to avoid losing progress. Carried as an open constraint into the compliance layer.

### Mechanism R3. The ordinary outcome always carries forward

**Source:** MONOPOLY GO!, the duplicate to star to vault chain, plus duplicates as the trading currency.

**What it is for us:** any drop below a stated threshold converts, at the user's option and at a rate published in advance, into the same counter that Mechanism R2 uses. The conversion offer appears in the reveal result state, not in a menu three taps away.

**Why it works:** the modal outcome of a case open is an item the user does not want. Today that is a loss with a picture on it. Monopoly GO! demonstrates that the same outcome, given a forward path, stops reading as a loss without changing the odds at all. It costs nothing in fairness and it is the difference between a reveal that can be repeated and one that cannot.

**Interaction:** R2 and R3 share one counter deliberately. Two currencies would be a second thing to learn at the exact moment the user is least able to learn anything.

## The mechanism that will NOT work here

### Undisclosed selection criteria as a scarcity amplifier

**What it is:** Nike's model. Randomised allocation with the criteria deliberately withheld, stated as policy, with the mystery itself doing marketing work.

**Why it fails for us, in three inversions:**

Nike's scarcity is physical and external. A shoe run is genuinely finite and Nike did not invent the constraint at the moment of sale. Our scarcity is entirely manufactured by us, in software, and a user who suspects the numbers were chosen to suit us has no counter-evidence unless we supply it.

Nike's brand is the guarantee. Six decades of product underwrite the claim that the process is fair even though it is opaque. Our brand does not exist yet, and the redesign brief makes verifiability the differentiator. Opacity would be spending trust we have not earned on an effect we do not need.

Nike's loser pays nothing. A failed SNKRS entry costs a notification. Every one of our outcomes is paid for in advance, including the bad ones. Opacity where money has already changed hands is not mystique, it is the thing regulators and reviewers look for first.

This sits directly against principle 1 (trust is the product) and principle 3 (clarity at every risk moment) in `CLAUDE.md`. It is also the second entry on the do-not-use list for the reveal, alongside the near-miss animation retained in Part 2 section 5. The two are the same error at different depths: near-miss fakes the tension inside one reveal, undisclosed criteria fake it across the whole relationship.

## What the public record cannot tell us

These are the craft questions the dimension actually turns on, and not one of the five products answers them from a public page. All carry `[?]` and none is a fact.

| Question | Status |
|---|---|
| How long is the build-up between commit and outcome, and does it scale with the value of the outcome | `[?]` client-side in all five |
| Where the cut lands: continuous motion, staged reveals, or jump cuts between stages | `[?]` client-side in all five |
| What sound does at the moment of payoff, and whether the rare tier has its own audio signature | `[?]` client-side in all five |
| How long the hold is before a rare outcome resolves, and whether it differs from a common one | `[?]` client-side in all five |
| Whether a good outcome is designed to leave the app, and through what surface | `[?]` partially observable, not verified this session |

**Consequence, and it is an input to stage 06 rather than a gap to apologise for.** The mechanics of a reveal are copyable from documentation. The craft is not. Stage 06 gets its rules for C1 to C6 from this benchmark and has to derive the timing, the cut, the sound and the hold itself, then test them. The animation stage (11) inherits the same list. Any number that appears later for build-up duration or hold length is a decision this project made, not a benchmark it matched, and it gets recorded that way.

## Source index for Part 1

Every URL below was opened in a browser on 2026-08-05. Screenshots are in `research/screens/benchmark/`.

| Source | URL | Screenshot | What it supports |
|---|---|---|---|
| EA SPORTS FC 26 pack probabilities | https://www.ea.com/games/ea-sports-fc/news/fc-pack-probabilities | `eafc_pack_probabilities.png` | C1, C2, C3 for EA. All EA quotations |
| Pokémon TCG Pocket official site | https://tcgpocket.pokemon.com/en-us/ | `ptcg_pocket_official.png` | Two free packs a day, immersive cards, "Cards may vary by pack" |
| Pokémon collecting and Wonder Pick guide | https://www.pokemon.com/us/features/a-guide-to-collecting-cards-and-using-wonder-picks-in-pokemon-trading-card-game-pocket | `ptcg_pocket_collecting_guide.png` | C1 to C6 for TCG Pocket. All Pokémon quotations |
| MONOPOLY GO! help, ways to get stickers | https://support.monopolygo.com/article/0a97b998-cb88-48bd-941d-a5b7a22c3725 | `monopolygo_ways_to_get_stickers.png` | C4 and C6 for Monopoly. Swap pack and wild sticker quotations |
| MONOPOLY GO! help, duplicate stickers and stars | https://support.monopolygo.com/article/609d2f4e-e8c2-459a-82f3-33387da50135 | `monopolygo_duplicate_stickers.png` | C5 and C3 for Monopoly. Star value quotations |
| Genshin drop rate statistical model, HoYoLAB | https://www.hoyolab.com/article/497840 | `genshin_droprate_model_hoyolab.png` | C1 and C2 for Genshin. Base rate, 90-pull guarantee, soft pity from 25M pulls |
| Genshin Impact official site | https://genshin.hoyoverse.com/en/ | `genshin_official.png` | Product identification only |
| Nike SNKRS, Inside Exclusive Access | https://www.nike.com/launch/t/inside-snkrs-exclusive-access | `snkrs_exclusive_access.png` | All five Nike criteria. All Nike quotations |

**One access failure, recorded rather than worked around.** The in-client Genshin announcement viewer at `webstatic.hoyoverse.com/hk4e/announcement/` returns HTTP 403 to an outside browser, which is why the Genshin figures rest on a community statistical model published on the official community platform rather than on a first-party disclosure page. The model states the 0.6% base rate and the 90-pull limit as publisher-announced and derives everything between them from data. That distinction is preserved in the observation and must not be flattened later.

## What Part 2 becomes

Part 2 below is not a benchmark. It scores five direct competitors on trust and fairness, which is step 3 material, and calling it a benchmark is what the stage 01 critique caught.

It stays in this file rather than moving, for one reason with a date on it: twelve citations across `personas.md`, `jtbd.md`, `ux-patterns.md`, `research.md` and `quality-check.md` resolve into it by name, including `benchmark.md (Criterion 2: Odds Visibility)` and `benchmark.md Mechanism 1`. `personas.md` has exactly one writer and it is CJM step 4, so those citations cannot all be repointed in this round without breaking that rule.

**Owner and resolution:** the round that runs CJM step 4 moves Part 2 into `competitors.md` as a named section and repoints every citation in the same pass, including the ones in `personas.md`, which that step is permitted to touch. Until then Part 2 keeps its original section and mechanism numbering unchanged, so every existing citation still resolves exactly where it did.

---

# Part 2. Trust and fairness matrix, retained in-category scoring

**Original header, kept for provenance:** Benchmark: Trust and Fairness. Updated with Phase 3 competitive analysis data. Created 2026-06-10, last updated 2026-06-10.

Products scored: Clash.gg, Key-Drop, CSGORoll, skin.club, daddyskins.com (our baseline).
Previous products (hellcase.com, datdrop.com) removed pending dedicated research. This document reflects only verified Phase 3 data.

### 1. Evaluation Criteria (Scale 1-5)

| # | Criterion | Description | 1 (Poor) | 5 (Excellent) |
|---|-----------|-------------|----------|---------------|
| 1 | Provably-fair mechanism and clarity | Does the platform have a provably-fair system? Is the mechanism (server seed / client seed / nonce / hash) explained in plain language on a public page? Can a non-technical user understand it? | No fairness claim at all, or claim with no mechanism | Clear mechanism, plain-language explanation, working verification tool, linked from the opening flow |
| 2 | Odds visibility before opening | Are the exact odds (or expected value) for each case shown before the user commits money? Are they easy to find without login? | No odds shown anywhere | Full odds table per case, visible before purchase, with expected-value calculation |
| 3 | Drop and outcome history with verification | Does the platform show recent drops publicly? Can a user verify past outcomes against the fairness mechanism? | No history shown | Live public drop feed, per-outcome verification link, historical audit |
| 4 | Withdrawal reliability and speed | How clearly is the withdrawal process explained? Is there any public evidence (time claims, track record) of speed and reliability? | No withdrawal info on public pages | Clear process, speed commitment, public track record cited |
| 5 | Honesty about edge and cost | Is the house edge or expected value stated honestly? Is the cost of play communicated clearly? | Edge completely hidden, bonuses without wagering terms | Edge and EV stated explicitly, bonus terms clear and upfront |
| 6 | Age-gate and responsible play | Is there a meaningful age-verification gate? Is there a responsible-play page with actual tools (deposit limits, self-exclusion, cool-down)? | No age-gate, no responsible-play content | Clear age-gate, robust responsible-play page with working tools, third-party links |
| 7 | Thrill without manipulation | Does the reveal UX create genuine excitement without near-miss effects, artificial suspense, or misleading win displays? | Reveal uses clear dark patterns | Genuinely exciting, no near-miss or false-win patterns, outcome is clear immediately |
| 8 | Speed and reliability | Does the platform feel fast and stable? Do load times and animation smoothness reinforce or undermine trust? | Slow, glitchy, feels unreliable | Sub-second loads, smooth animations, no jank |

### 2. Benchmark Score Table

Scoring key: 1 = poor, 5 = excellent. [?] = not verified in Phase 3 research.

| Product | Fairness (1-5) | Odds Visibility (1-5) | Outcome History (1-5) | Withdrawal (1-5) | Edge Honesty (1-5) | Age-gate (1-5) | Thrill (1-5) | Speed (1-5) | TOTAL /40 |
|---------|---------------|----------------------|----------------------|-----------------|-------------------|---------------|-------------|------------|-----------|
| **CSGORoll** | **5** | **4** | **4** | **3** | **4** | **3** | **3** | **4** | **30** |
| **skin.club** | **4** | **5** | **5** | **3** | **3** | **2** | **4** | **4** | **30** |
| **Clash.gg** | **4** | **4** | **3** | **3** | **4** | **3** | **4** | **4** | **29** |
| **Key-Drop** | **3** | **3** | **2** | **3** | **2** | **3** | **3** | **4** | **23** |
| **daddyskins.com** | **1** | **3** | **2** | **1** | **1** | **1** | **3** | **3** | **15** |

### 3. Key Observations per Product

#### CSGORoll

CSGORoll publishes the most comprehensive provably-fair documentation in the category. The full SHA-256 mechanism, per-game-mode RTP, and hash verification history are all available at csgoroll.com/info/provably-fair/ without login, making it the clearest trust signal in the competitive set. Withdrawal supports CS2 skins via P2P and major crypto (BTC, ETH, USDT, USDC), though KYC is required, and no public speed commitment was found. The platform's age-gate and responsible-play presence is adequate (18+, Curacao licensed) but lacks the depth of a dedicated responsible-play page with working self-exclusion tools.

**Citation:** https://csgoroll.com/info/provably-fair/

#### skin.club

skin.club's strongest differentiator is its fully public roll history: every user's outcomes are visible to all visitors without login, and numeric item ranges on a 1-100,000 scale make per-item odds verifiable to four decimal places on competition cases. This is the only platform in the set where a new visitor can audit another user's historical outcomes before spending anything. Withdrawal is CS2 skins only via automated trade bot with a stated "few minutes" delivery and no fees, but there is no crypto or fiat path, which limits the audience. The platform operates without a formal gambling license, blocks Washington and Nevada, and has no structured responsible-play page, which is a meaningful regulatory gap.

**Citations:** skin.club case pages (per-item range display, no login required); skin.club public roll history feed.

#### Clash.gg

Clash.gg publishes RTP figures per game mode publicly on its landing page (Upgrader 92.7%, Plinko 92.8%, Mines 90%), and per-case drop rates are visible before login, which is a strong odds-transparency commitment. The Champion mode battle mechanic with HP-derived-from-skin-value and per-weapon attack animations is the most thematically distinctive thrill mechanism in the set, and no near-miss patterns were identified. A November 2025 roulette payout incident was attributed to a technical glitch rather than fraud; this should be monitored as a trust signal risk. KYC is required for crypto withdrawals and free-to-play access, which is a more robust gate than a checkbox, though no structured responsible-gambling page was confirmed.

**Citations:** clash.gg landing page (RTP figures, pre-login odds); reporting on November 2025 payout incident.

#### Key-Drop

Key-Drop offers a cryptographic seed-based provably-fair system and some odds disclosure on case pages before login, but coverage is incomplete across all game modes according to third-party analysis at cs2pulse.com. Crypto withdrawal delays were reported in 2026, which is a live reliability concern that distinguishes it negatively from peers. Edge and expected value are not explicitly stated to anonymous visitors, which limits score on honesty. The platform carries a Curacao license and an 18+ gate, placing it at parity with most competitors on compliance, but below CSGORoll and skin.club on the fairness and odds dimensions.

**Citations:** key-drop.com case pages; cs2pulse.com odds analysis; community reports of 2026 crypto withdrawal delays.

#### daddyskins.com (our baseline)

The most critical gap is the provably-fair page: the footer links to /en/provably-fair but the page redirects to login, meaning no anonymous visitor can access the fairness mechanism. This is the lowest score in the set for the most important criterion. Odds per case are visible pre-login on a 1-100,000 scale, which is a genuine positive, but edge and EV are never stated, and no withdrawal speed or fee information is visible to anonymous users. The bot-filled live feed (named accounts "Darth Vader," "HAL 9000") actively signals inauthenticity to technically literate CS2 players. There is no meaningful age-gate (only "18+" text in FAQ) and no responsible-play tools, which is the clearest compliance gap in the set.

**Citations:** daddyskins.com case pages (pre-login odds visible); daddyskins.com /en/provably-fair (login redirect confirmed); daddyskins.com footer and FAQ (18+ text only).

### 4. Top 3 Mechanisms to Carry into MVP

#### Mechanism 1 - Public Provably-Fair Page with Working Verifier (No Login)

**Source model:** CSGORoll (csgoroll.com/info/provably-fair/) with supporting reference to skin.club's public roll history.

**What it is:** A dedicated public page that explains the server-seed / client-seed / nonce / SHA-256 mechanism in plain language, shows current RTP per game mode, and provides an on-page tool where any visitor can paste a seed pair and verify a historical outcome. The page is reachable from the site footer and from the case-opening flow, with no login required.

**Where to use it:**
- Footer: persistent link visible on all pages.
- Case detail page: a small "Provably Fair" badge or link adjacent to the open button.
- Post-open state: a direct link to the verifier with the just-completed outcome pre-filled.

**Why it works:** The psychological mechanism is commitment and auditability. Publishing the server-seed hash before the open commits the platform to an outcome the user can check after the fact. Most users will never verify, but the knowledge that they could is the trust signal. CSGORoll's longevity since 2016 in a category where competitors have collapsed is at least partly attributable to this foundation. The critical differentiator versus daddyskins.com is that the page must be reachable without login. A fairness page that redirects to login is not a trust signal; it is an obstacle that reads as concealment.

**How it preserves thrill:** Verification happens after the reveal, not during. The reveal animation and emotional moment are unchanged. Trust is built in the background; excitement happens in the foreground.

**Effort estimate:** Medium. The cryptographic mechanism is standard across the industry and well-documented. The primary work is front-end (the verifier tool) and copy (plain-language explanation).

#### Mechanism 2 - Per-Case Odds Table Visible Pre-Login, with EV Displayed

**Source model:** skin.club (1-100,000 numeric range per item, 4-decimal precision on competition cases) and Clash.gg (per-case drop rates visible before login, per-mode RTP on landing page).

**What it is:** Every case detail page shows a full probability table: each possible skin, its percentage chance of dropping, its current market value, and the calculated expected value of one open. The table is accessible without login. RTP for each game mode is summarized on the landing page.

**Where to use it:**
- Case detail page: below the case art, above the open button. Collapsible for users who do not want it, but visible by default.
- Landing page: a summary line per featured case showing EV and top drop probability.

**Why it works:** The psychological mechanism is informed consent and credibility signaling. A user who sees the odds and still chooses to open is not being deceived. This converts a skeptical visitor (who assumes the house is hiding something) into a participant who chose knowingly. It also directly serves the Collector segment, who calculates EV before spending. Clash.gg's public RTP figures demonstrate that competitors are already raising the bar; not showing odds pre-login is now a relative disadvantage, not a neutral choice. The regulatory benefit is also real: odds disclosure reduces exposure in jurisdictions that treat undisclosed-odds products as gambling.

**How it preserves thrill:** Knowing the probability of a drop does not eliminate the tension of the reveal. Sports bettors know the odds before every bet; the outcome is still uncertain and still exciting. The skin community specifically has demonstrated appetite for this combination (see: the popularity of case-opening simulators and EV calculators in the community, indicating that odds-aware users still open cases).

**Effort estimate:** Low to medium. Odds data for each case already exists internally. The primary work is surfacing it in the UI and calculating EV from live market prices via a price API.

#### Mechanism 3 - Authentic Live Drop Feed with Verification Links

**Source model:** skin.club (full public roll history for all users, no login required). Secondary reference: Clash.gg (live battle feed publicly viewable pre-login).

**What it is:** A real-time feed of recent drops across the platform, visible on the landing page or in a persistent sidebar. Each entry shows: username, case opened, skin received, approximate value, and a link to verify that outcome against the provably-fair mechanism. The feed is populated exclusively by real user activity, not bots or seeded accounts.

**Where to use it:**
- Landing page: a live feed panel in the secondary content area, below the hero.
- Case detail pages: a filtered feed showing recent drops from that specific case.

**Why it works:** Social proof plus verifiability is the hardest trust signal to fabricate convincingly, which makes it the most powerful. A visitor who sees a recent drop and can click through to verify it on the provably-fair page has moved from passive observation to active confirmation. This is categorically different from a ticker that shows names and values but cannot be checked. The contrast with daddyskins.com's bot-filled feed (Darth Vader, HAL 9000) is instructive: technically literate CS2 players identify bot-seeded feeds quickly, and the damage to credibility when they do is disproportionate to whatever social-proof benefit the bots provided.

**How it preserves thrill:** A live feed of real wins creates ambient excitement on the landing page. Seeing a $200 skin drop in real time while a visitor is deciding whether to open a case is a legitimate and honest excitement mechanism. The thrill is in the feed; the trust is in the verification link.

**Effort estimate:** Medium. Requires a real-time data pipeline from opening events to the feed, a per-outcome verification URL, and a moderation layer to handle display of usernames. The provably-fair verifier (Mechanism 1) must be in place first.

### 5. Mechanism That Will NOT Work for Our Context

#### Near-Miss Reveal Animation

**What it is:** An animation technique where the spin or reveal visually passes through high-value items just before landing on the actual outcome. The user appears to "almost" win something significantly more valuable than the real result. This is a documented dark pattern used in slot machines and present in some case-opening platforms.

**Why it will NOT work here:**

First, it directly contradicts the product's core differentiator. If the platform's value proposition is provably-fair, transparent odds, and auditable outcomes, using a near-miss animation is a contradiction in terms. Users who understand provably-fair systems know the outcome is hash-determined before the animation starts. A near-miss that was pre-calculated as a loss is not a near-miss; it is theatre designed to generate false hope in a product claiming to operate without deception.

Second, it creates regulatory and legal risk. Near-miss mechanics are specifically cited by regulators (UK Gambling Commission, 2020 slot machine regulations) as a manipulation technique. In jurisdictions where skin-opening may face regulatory scrutiny, near-miss mechanics compound existing exposure. The EU's recent movement toward stricter loot-box regulation makes this a forward-looking concern, not just a current one.

Third, the CS2 community will identify and publicize it. This audience is technically literate and communicates rapidly through Reddit, Discord, and YouTube. A single post demonstrating that the animation shows items not in the weighted distribution, or that the near-miss is pre-programmed rather than coincidental, would generate disproportionate brand damage. The risk-to-reward ratio is inverted: the manipulation provides marginal retention uplift while the exposure risk is catastrophic to brand trust.

**What to do instead:** The reveal animation should be genuinely exciting through honest means. Techniques that work without manipulation include: variable spin duration that scales with item value, distinct sound and visual treatment for rare drops, a hold moment before reveal for high-value outcomes, and celebration mechanics (confetti, banner, share prompt) that activate only on real wins. Clash.gg's Champion mode (HP-from-value, per-weapon attack animations) demonstrates that high thrill is achievable through thematic design without any near-miss mechanic.

### 6. Score Rationale Summary

| Product | Key Strength | Key Gap |
|---------|-------------|---------|
| CSGORoll | Best provably-fair documentation in the set. Public, no login, SHA-256 with working verifier. | Less visually distinctive; per-case odds pre-login not fully confirmed. |
| skin.club | Only platform with full public roll history for all users. Per-item odds to 4 decimal places. | No gambling license. No crypto/fiat withdrawal. No responsible-play page. |
| Clash.gg | RTP published on landing page. Champion mode is the most original thrill mechanic in the set. | November 2025 payout incident is a trust signal to monitor. KYC friction may reduce activation. |
| Key-Drop | Large platform, fast infrastructure, cryptographic fairness. | Incomplete odds disclosure. 2026 crypto withdrawal delays. Edge not stated pre-login. |
| daddyskins.com | Per-case odds visible pre-login (1-100,000 scale). | Provably-fair page login-gated. Bot-seeded live feed. No age-gate. No edge disclosure. Lowest composite score in the set. |

The gap between daddyskins.com (15/40) and the top two platforms (30/40) is not marginal. It spans every dimension where the competitive set has moved toward transparency. The MVP trust baseline should target a minimum of 25/40 at launch, with CSGORoll's fairness documentation and skin.club's odds visibility as the two highest-leverage improvements.
