# CJM As-Is

**Focus: The Opener (primary persona) x Main Job "Arrive, open, get the thrill"**

Persona, verbatim from `personas.md:93`: `### Persona 1: The Opener - PRIMARY`. Why primary, `personas.md:95`: "Every competitor design decision confirms this archetype. The reveal animation is the product. This person drives the most volume and is the first user any platform must succeed with."

Main job, taken from `jtbd.md:17` (see "Job formula divergence" below for why this wording and not the other two):

> When I am embedded in the CS2 ecosystem and want excitement beyond the game itself, I want a chance at a rare skin I actually want, with a reveal that feels real and unpredictable, so that I get the rush of a genuine drop and potentially end up with something worth having.

This map describes how that person does that job **today**, using the platforms that exist, without our product. Rule of this half: every emotion and every barrier stands on a source. No source means `[?]`, not a drawn emotion.

**Is this the only map needed?** For round 1, yes. The Battler's path diverges fundamentally (lobby, human opponent, simultaneous reveal) but battle mode is hidden at launch (`jtbd.md:201`), so it earns its own map in a later round, not now. The Researcher diverges by channel (search-led, reads odds before committing) rather than by structure, and the pack's rule is to mark such a persona with one line rather than draw a second full map. The Accumulator's path is a post-D1 loop and sits outside this job.

---

## Inputs & unknowns

### Mining mode: Deep

Chosen by the founder before step 3. Deep means full voice-of-customer mining under this focus: review aggregators, Reddit and topical forums, YouTube comments, discussions under the competitors listed in `competitors.md`. Public and pre-login pages only, no accounts, no logins. Anything behind a login is `[?]`.

Reason the fork mattered here rather than being a matter of taste: the entire existing corpus contains four review-source URLs, all on one line (`live-research.md:35`: Trustpilot for `hellcase.com` and `key-drop.com`, plus `sikayetvar.com` and `cs2wh.com`), and zero collected reviews. Under Lite, nearly every emotion in this file would have been `[?]`, and the As-Is half would have been a reprojection of what we already believed rather than a mirror of what people say.

### What the existing files already say about this path

Everything below is carried from stage 01 and 02 files, with the source on each line. This is the inventory the map starts from, not new research.

**Trigger, before arrival**
- Arrives from a stream clip, YouTube video, or Discord link where someone else won something remarkable. `personas.md:101`, `ux-patterns.md:21`
- The platform does not create the desire, it captures desire created externally. `personas.md:31`
- Social proof loop confirmed: "one person posts a knife pull and someone else thinks why not me". Esports team endorsements (Team Vitality with skin.club, MOUZ with G4Skins) act as institutional trust proxies. `personas.md:103`
- Streamer and influencer seeding is the dominant acquisition channel: Key-Drop has 100+ influencer partnerships, CSGORoll sponsors CS2 teams, Clash.gg referral codes are streamer-promoted. Organic search and paid social are secondary or blocked in this category. `personas.md:53`

**The seven steps of the current path**, `ux-patterns.md:21-27`, Pattern 1, which is the only enumerated sequence for this persona anywhere in the corpus:
1. Arrives from a stream clip, YouTube video, or Discord link.
2. Scans the landing page for visual confirmation that the platform is alive and real: active wins ticker, live player count, case images with prices.
3. Identifies a case in the 1 to 5 dollar range that looks interesting. Does not read odds. Does not read terms.
4. Needs a low-friction reason to try. Responds to "free first case" or "open now, pay after" messaging.
5. Opens the case. The reveal animation is the product.
6. If the drop is surprising, high or low, they react. If it is shareable, they share it.
7. If the animation felt good and the outcome felt real, they deposit and open again immediately.

Breaks when, `ux-patterns.md:31`: the reveal animation feels scripted, the platform feels slow or visually dead, or the first case costs more than expected before the wallet is open.

**Entry hook**
- Free starter credit is the conversion hook. Hellcase offers 0.70 dollars no-deposit credit plus 10 percent bonus, Key-Drop offers 20 percent match plus 0.50 dollars free, Clash.gg gives 3 free cases. The Collector reads terms before depositing, the Thrill Seeker does not. `personas.md:55`
- No-deposit credit range confirmed at 0.50 to 1.00 dollars from competitor data. `jtbd.md:45`
- Convinces: a starter offer they can act on immediately, without reading terms. `personas.md:125`

**Barriers already documented**
- Pre-login information wall: most competitors lock odds, upgrade interfaces and battle previews behind Steam login. Clash.gg is the outlier and correlates with fastest-growing status per independent reviewers. `personas.md:47`, `jtbd.md:36`
- Reveals that feel scripted, laggy or visually flat. DaddySkins' current implementation is flat with no rarity-tiered animation variation. `personas.md:113`
- The reveal animation is the primary D1 retention moment: if it feels scripted, slow or visually dead, users leave after their first open. `personas.md:61`
- Bot-flooded live feeds and chat. DaddySkins shows "[BOT] Darth Vader" and "[BOT] HAL 9000" in the live wins ticker, DatDrop fills Battle Royale lobbies with bots, CSGORoll shows bot-filled battle slots. `personas.md:43`, `personas.md:115`
- Cannot easily share wins. No one-tap sharing from the result state on most competitors. `personas.md:117`, `jtbd.md:166`
- The whole open-to-result experience must fit under 60 seconds without a confusing step. `jtbd.md:42`
- Near-miss animation is a confirmed dark pattern: "a near-miss that was pre-calculated as a loss is fabricated theatre, not tension". `jtbd.md:87`
- Withdrawal complaints are the most common platform criticism across review aggregators for all five platforms. `personas.md:45`
- Withdrawal failure is the LTV-ending event. `personas.md:65`
- Tested versus stated RTP gap: Hellcase tested at 82.1 percent, DatDrop at 80.6 percent across 118 cases, both below stated figures, and users cannot detect this pre-play. `personas.md:49`

**Where trust is won**
- A platform that feels alive: active wins ticker, live player count, visible drop feed. `personas.md:123`
- A live drop feed that is authentic and bot-free is both a trust mechanism and an acquisition tool. `jtbd.md:123`
- The post-reveal verification link. "Most users never do, but knowing they could is the trust signal." `jtbd.md:54`
- Institutional trust proxies rather than self-verification: the Opener does not self-verify provably fair before depositing as a mass-market behaviour. Hellcase has 2M MAU and 150,000 daily opens despite no public PF page and the lowest trust posture in the category. A PF auditor badge works for this persona, a detailed PF page is a Researcher tool. `personas.md:129`, closed by founder Decision 1.

**Where trust is lost**
- A platform that feels slow or visually dead. Speed as trust: lag reads as dishonest in a randomised-outcome product. `personas.md:127`
- Category-wide trust deficit: no mystery box operator names a public third-party RNG auditor as of 2026. `personas.md:41`
- Manufactured rather than genuine suspense. `jtbd.md:84`

**The one alternative named in the corpus**
- Steam Market's 15 percent fee and wallet lock, which is the category's conversion argument. `personas.md:37`, `jtbd.md:72`. Note this is the economics of the Accumulator and the Researcher, not the Opener's thrill motive. What an Opener does *instead* today is not recorded anywhere. See unknowns.

### What we do NOT know about this path

This is the list step 4 mines against. It is ordered by how badly the gap distorts the map, most damaging first. Anything mining adds gets appended to this same section.

| # | Unknown | Why it matters | Where to look |
|---|---|---|---|
| U-01 | **The loss path.** Every documented path assumes a drop worth revealing or sharing. What the Opener feels and does after a bad drop, a worthless item or a losing streak is recorded nowhere. | For a product where most outcomes are bad, a map without a loss path is a fantasy. Phases 5 to 7 are half-drawn without it. | Reddit and forum posts about losing streaks, review aggregator one-star reviews, YouTube comments under case-opening videos |
| U-02 | **No verbatim user language exists.** All three Opener-adjacent quotes in the corpus are composites and the files say so: `personas.md:135`, `jtbd.md:223`, `jtbd.md:251`. | Step 4 requires a verbatim line or `[?]`. Today the count of usable quotes is zero. | Review aggregators, Reddit, YouTube comments |
| U-13 | **The reveal moment as a felt emotion.** Opened by the step 6 critique, not by step 1. Nothing in the corpus records what a good outcome feels like in a user's own words. | The peak of the emotional curve has no honest anchor without it. | Video comment threads at the moment of a pull |
| U-03 | **Registration, Steam login and age gate as lived steps.** Steam login appears only as a competitor's wall (`personas.md:47`). What the Opener does at that step, how long it takes, whether Steam OAuth reads as friction or as a trust signal, what happens on failure: none of it is recorded. Age gate appears exactly once, as a function name in a matrix cell (`jtbd.md:161`), with no behaviour attached. | This is a whole phase of the As-Is path with no content. | Forum and review complaints about login and verification, competitor pre-login pages via Playwright |
| U-04 | **Deposit mechanics.** Payment methods, minimum deposit, deposit failure, currency, crypto versus card: absent for the Opener. The exact drop-off point between register and first deposit is marked unknown twice (`personas.md:67`, `personas.md:79`). | The highest-leverage activation fix is behind this gap, and the files say so themselves. | Review aggregators (payment complaints), competitor deposit pages pre-login |
| U-05 | **What the Opener does today instead.** Watch clips and never spend, open Valve cases in-game, use a competitor site, do nothing: unrecorded. The only named alternative is Steam Market, which belongs to a different motive. | Phase 1 of the As-Is map has no honest "current alternative" without this. | Reddit threads comparing sites and in-game opening |
| U-06 | **Device context.** Mobile versus desktop, app versus browser, in-stream versus standalone: zero mentions in both persona and JTBD files. | The stated trigger is a stream, Discord or YouTube clip, which is disproportionately mobile. If the path is mostly mobile, every phase changes shape. | Review aggregator app reviews, store listings if any exist, forum posts |
| U-07 | **Competitor switching.** Whether the Opener arrives new to the category or already holds a Hellcase or Key-Drop account, and what would make them switch. `jtbd.md:264` asks this and does not answer it. | Determines whether phase 2 is a first impression or a comparison. | Reddit and forum comparison threads |
| U-08 | **Return trigger after D1.** Which retention mechanic actually causes a return visit is an open hypothesis (`personas.md:69`) and an open unknown (`personas.md:80`). | The tail of the map is undefined. | Forum and review discussion of daily bonuses and free cases |
| U-09 | **Timings.** Only two numbers exist: under 60 seconds open-to-result (`jtbd.md:42`) and 60 to 90 seconds lobby fill, which belongs to the Battler. No time-on-landing, no decision time before deposit, no withdrawal latency. Session length is explicitly unknown (`personas.md:82`). | Emotional intensity per phase depends on how long each phase lasts. | Review complaints citing waiting times, forum reports of withdrawal delays |
| U-10 | **Where in the landing-to-first-open flow enthusiasm actually drops.** `personas.md:67` states the trigger is known and the friction point is not. | This is the deepest point of the curve, and it is currently a guess. | Reddit and review narratives of first-time attempts |
| U-11 | **Whether Openers evaluate provably fair before depositing.** `personas.md:81`. Closed by founder Decision 1 as "no, they use institutional proxies", but closed by decision, not by evidence (`jtbd.md:232`). | The whole trust thesis of the product rests here. Mining may confirm or contradict a locked decision, in which case it gets said out loud. | Reddit and forum discussion of rigged accusations and fairness |
| U-12 | **Geography and language for this persona.** Category-level geo exists (`personas.md:23`) but is never attached to the Opener. | Affects the channels worth mining and the language of the quotes. | Language of the reviews and threads actually found |

### Naming, resolved here

`The Opener`, `Segment A` and `Thrill Seeker` are used for the same person in different places and no file states the equivalence. `Segment A` is the Opener's own label at `personas.md:99` and `:107`. `Thrill Seeker` is used of the Opener at `personas.md:55`, `:67`, `:69` and `jtbd.md:220`, `:232`. One complication found by the step 6 critique and kept rather than hidden: `personas.md:225` applies `Thrill Seeker` to Persona 4, The Battler, so the label is broader than the Opener and the equivalence is one-way. This map treats them as the same person and carries hypotheses filed under any of the three names. Recorded so that a later search by one name does not silently lose lines filed under another.

### Job formula divergence, open

Three non-identical wordings of the same main job exist:

| Where | Trigger clause | Outcome clause |
|---|---|---|
| `jtbd.md:17` | "embedded in the CS2 ecosystem", dispositional | "a rare skin I actually want", "something worth having" |
| `personas.md:107` | "downtime between CS2 matches", situational | "the thrill of a reveal and a real shot at something exciting" |
| `CLAUDE.md:46` | "between CS2 sessions", situational | "a skin I actually want", "something worth having" |

`CLAUDE.md` carries a hybrid: the trigger of the persona file with the object of the JTBD file. This map uses `jtbd.md:17`, because the pack takes the main job from `jtbd.md` and because the JTBD file is the artefact that owns job formulas. The divergence is not resolved here. It goes to step 11, which owns the one-version-per-repository rule.

### MVP core divergence, open

The pack declares "the MVP core block in `CLAUDE.md`" as an input to this stage. That block does not exist. `CLAUDE.md:34-42` carries a scope list whose units are screens, not jobs and not capabilities. The three MVP core jobs derived at stage 02 were never written into it.

Three different lists currently carry the name of the MVP core:

| File | Unit | Content |
|---|---|---|
| `jtbd.md:173`, mirrored on `jtbd.html:716` | jobs | 3 jobs: arrive with confidence, reveal quality, withdraw cleanly |
| `lean-ux-canvas.md:46` | surface plus capability | 8 bullets, self-marked superseded in part at `:57` |
| `CLAUDE.md:38-40` | screens | 7 Round 1 items against 8 LATER items |

They do not agree item by item. Case battles sit in four states at once: MVP in the canvas, LATER in `CLAUDE.md`, Phase 1.5 on the cut list at `jtbd.md:201`, and an MVP product decision at `aarrr.md:172`. A responsible play page exists in the canvas and in neither scope list. Registration and deposit exist in `CLAUDE.md` and in neither of the others. No file anywhere maps the three core jobs onto any scope item.

One defect inside the core itself: `jtbd.md:175` states the criterion "score 3 (core) for the primary persona", and the third core job, Withdraw cleanly, is recorded at `jtbd.md:189` as "Importance for The Opener: 2". The third entry does not meet the criterion its own block states.

There is no list anywhere in this repository where a capability is a row and MVP against LATER is a column. Producing that list is step 8's job. This divergence is recorded here so that step 8 reconciles three lists rather than assuming one.

### Input gate record

Run before step 1, on 10 August 2026. Declared inputs `personas.md`, `jtbd.md`, `research.md`, `lean-ux-canvas.md`, `competitors.md`, `aarrr.md` all exist. The CJM rows already exist in `/_nav.js` with `done: false`, so step 10 flips two flags rather than adding rows. Codex is available for the two-instrument critiques at steps 6 and 9.

Two decisions taken at the gate:
- `ux-patterns.md` is added as a declared input for step 3. It is not in the pack's input list, but Pattern 1 at `ux-patterns.md:21-27` is the only enumerated step sequence for this persona in the whole corpus, and without it the phases would have to be invented.
- The MVP core and job formula divergences above are carried openly into steps 8 and 11 rather than being resolved before step 1, because reconciling them is exactly what those steps are for.

---

## Phases

Skeleton only: phase, goal, actions, touchpoints. Emotions and barriers are added by step 4, on sources, and deliberately not guessed here. No solutions appear in this section: this half is a mirror, not a prescription.

The phases are derived from the real sequence of this job as recorded in `ux-patterns.md:21-27` (Pattern 1, the only enumerated step sequence for this persona in the corpus), not from a generic awareness-to-retention funnel. Two phases below (P3 and P4) exist in the real path but have no documented content at all, and they are marked as such rather than filled in.

### P1. The pull from outside

- **Goal of the phase.** Decide whether someone else's win is worth acting on. This is the "why not me" moment, and it happens entirely off the platform.
- **Actions.** Watches a clip of a big pull. Notices the site name or a referral code on screen or in the description. Clicks through, or types the name in later.
- **Touchpoints.** Twitch and YouTube clips, TikTok and Shorts, Discord servers, streamer referral codes. Key-Drop with 100+ influencer partnerships, CSGORoll sponsoring CS2 teams, Clash.gg codes promoted by streamers. `personas.md:53`, `personas.md:101`, `ux-patterns.md:21`
- **Job link.** Serves the main job's trigger clause directly: excitement beyond the game itself. `jtbd.md:17`
- **Not known.** What this person does instead when they do not click. `[?]` U-05. Whether they arrive new or already hold an account elsewhere. `[?]` U-07. What device the clip was watched on. `[?]` U-06.

### P2. First contact, before any account

- **Goal of the phase.** Decide in seconds whether this place is real, alive, and not a scam.
- **Actions.** Scans for signs of life: the wins ticker, a live player count, a case grid with prices. Does not read odds. Does not read terms. `ux-patterns.md:22-23`
- **Touchpoints.** The landing page of hellcase.com, key-drop.com, csgoroll.com, datdrop.com, skin.club, clash.gg, daddyskins.com. Landing-page screenshots for six of the seven are in `research/screens/`. There is no clash.gg landing capture in the tree, which matters because clash.gg is this file's load-bearing pre-login outlier. `[?]` until captured.
- **Job link.** Related Job 1, arrive with enough confidence to try. `jtbd.md:33`, scored 3 for this persona at `jtbd.md:160`.
- **Already documented here.** The pre-login information wall: most competitors lock odds, upgrades and battle previews behind Steam login, and Clash.gg is the outlier. `personas.md:47` A live feed carrying visible bot names is present on the baseline itself. `personas.md:43`
- **Not known.** Where in this phase enthusiasm actually drops. `[?]` U-10. How long this phase lasts. `[?]` U-09.

### P3. Getting in

- **Goal of the phase.** Reach the point of being able to open, with the least effort possible.
- **Actions.** Steam login or email registration, age confirmation, possibly a geo check. `[?]` The corpus does not record what this person actually does here.
- **Touchpoints.** Steam OAuth screen, the site's registration modal, an age gate, a geo block page.
- **Job link.** Still Related Job 1: this phase is the price of admission to the trial.
- **Not known, and this is a whole phase with no content.** Steam login appears in the corpus only as a competitor's wall, never as a lived step. `personas.md:47` The age gate appears exactly once, as a function name in a matrix cell with no behaviour attached. `jtbd.md:161` `[?]` U-03.

### P4. Getting something to open with

- **Goal of the phase.** Reach an openable balance without committing money they would miss.
- **Actions.** Claims a starter offer, enters a streamer code, or makes a first small deposit. This persona acts on the offer without reading its terms. `personas.md:55`
- **Touchpoints.** Bonus modal, promo code field, deposit page, external payment provider.
- **Job link.** Related Job 2, complete the first open without friction. `jtbd.md:42`
- **Already documented here.** Free starter credit is the conversion hook, confirmed at 0.50 to 1.00 dollars across competitors. Hellcase 0.70 dollars plus 10 percent bonus, Key-Drop 20 percent match plus 0.50 dollars free, Clash.gg 3 free cases. `personas.md:55`, `jtbd.md:45`
- **Not known.** All deposit mechanics: methods, minimums, currency, what a failed deposit does. `[?]` U-04. The exact drop-off point between registering and depositing, which the persona file itself names as the highest-leverage unknown in the funnel. `personas.md:67`, `personas.md:79`

### P5. Picking a case

- **Goal of the phase.** Find something that looks worth opening inside a small budget.
- **Actions.** Scans the case grid, picks something in the 1 to 5 dollar range that looks interesting. Does not read odds, does not calculate expected value. `ux-patterns.md:23`
- **Touchpoints.** Case grid, case detail page, price labels, case artwork.
- **Job link.** Main job, the chance at a skin they actually want. `jtbd.md:17`
- **Contrast worth noting.** This is exactly where the Researcher's path forks: that persona goes to the odds table and calculates expected cost to target. `ux-patterns.md:43-45` The Opener does not, and the interface is built for the Opener first.

### P6. The open

- **Goal of the phase.** The rush itself. This is the phase the whole product exists to deliver.
- **Actions.** Triggers the spin and watches. Nothing else happens in this phase.
- **Touchpoints.** The reveal animation.
- **Job link.** Main job, plus Emotional Job 1, genuine suspense rather than manufactured tension. `jtbd.md:84`
- **Already documented here.** The reveal animation is the primary D1 retention moment. `personas.md:61` The baseline's own implementation is flat with no rarity-tiered variation. `personas.md:113` The whole open-to-result experience is expected to fit under 60 seconds. `jtbd.md:42` Near-miss animation is a confirmed dark pattern, because a near-miss pre-calculated as a loss is fabricated theatre. `jtbd.md:87`

### P7. The outcome

- **Goal of the phase.** Understand what they got, feel something about it, and know what to do next.
- **Actions.** Reacts. Shares, if sharing is possible. Opens again, converts the item, or stops.
- **Touchpoints.** Result screen, inventory, share affordance where one exists.
- **Job link.** Emotional Job 2, a moment sharp enough to become a story. `jtbd.md:93`
- **Already documented here.** No competitor has confirmed one-tap sharing from the result state. `personas.md:117`, `jtbd.md:166` If the animation felt good and the outcome felt real, this persona deposits and opens again immediately. `ux-patterns.md:27`
- **Not known, and this is the largest hole in the map.** Every documented version of this phase assumes a drop worth revealing. What happens on a bad drop, a worthless item, or a run of them is recorded nowhere in the corpus. `[?]` U-01. For a product where most outcomes are ordinary, a phase with only its winning branch drawn is not a mirror.

### P8. Payoff or exit

- **Goal of the phase.** Turn the result into something real, or leave.
- **Actions.** Requests a withdrawal to Steam, waits, or abandons. Decides whether to come back.
- **Touchpoints.** Withdrawal page, Steam trade offer, support ticket.
- **Job link.** Related Job 5, withdraw and get what I earned. `jtbd.md:67`
- **Weight for this persona, stated honestly.** The matrix scores this 2 for the Opener and calls it the payoff moment (`jtbd.md:164`), while the persona line for the same job omits the Opener entirely (`jtbd.md:71`). The two lines contradict each other, and the contradiction is carried rather than smoothed.
- **Already documented here.** Withdrawal complaints are the most-cited criticism across review aggregators for all five platforms. `personas.md:45` A failed or delayed withdrawal is the moment a user decides whether to ever return. `personas.md:65`
- **Not known.** What an Opener with a small first win actually does: withdraw, re-open, or walk away. `[?]` Which mechanic causes a return visit at all. `[?]` U-08. Any withdrawal latency number. `[?]` U-09.

### Phases in one line

P1 pull from outside, P2 first contact before any account, P3 getting in, P4 getting something to open with, P5 picking a case, P6 the open, P7 the outcome, P8 payoff or exit.

Two of the eight (P3, P4) have no documented content beyond competitor facts, and one (P7) has only its winning branch. Step 4 mines against exactly these.

## Emotions and barriers

Mined 10 August 2026 in Deep mode, corrected 11 August 2026 after the two-instrument critique at step 6. Rule applied without exception: every emotion and every barrier below stands on a quote from a page opened in this session, or it carries `[?]`. Nothing here is a drawn emotion.

**Every count on this page is checkable.** The quotes behind it live in `research/docs/cjm-evidence.md`, one row each with platform, rating, date and URL. No number here exceeds what that ledger holds. Where the mining pass counted more than the ledger can show, the number was reduced to the ledger, and the wider pass total is named as a pass total rather than used as evidence weight.

### How to read the strength column

`signal` means one mention, or several mentions inside a single thread, because the people in one thread are answering each other. `pattern` means the same thing said by people who are not in the same conversation, and the count is always given and always matches the ledger. A signal never outranks a pattern, and an MVP feature is not built on a signal without saying so out loud.

### Method, and what limits it

**Sources actually opened.** Trustpilot brand pages for hellcase, key-drop, csgoroll, skin.club, daddyskins, datdrop, clash.gg, captured in a live browser with proof screenshots in `research/screens/cjm/`. Sitejabber, now hosted at smartcustomer.com. Steam Community discussions. HLTV.org forums. Google Play listings through the AppBrain mirror. YouTube comment threads, opened in a live browser at step 6. Operator help centres, which are first-party and count as policy statements, not as user voice.

**Three limits that shape everything below, stated before the data rather than after it.**

1. **Reddit was unreachable.** Every route was tried: `old.reddit.com`, `www.reddit.com`, `site:reddit.com` search, the PullPush and Arctic Shift archive APIs, five Redlib and Teddit mirrors, and the Wayback Machine. All blocked at the fetch layer. Every subreddit named as a target yielded nothing. The forum material below comes from Steam Community and HLTV instead. This is a named hole, not a silent substitution.
2. **A Trustpilot brand page is not a sample.** key-drop shows an aggregate of 4.3 while its first page is almost entirely one star. skin.club shows 3.6 while its first page is entirely five stars. **No proportion is claimed anywhere in this file**, only counts of distinct people, and only across sources that are not the same conversation.
3. **The boards select for the moment things go wrong.** People post when they lost, got scammed, or are trying to quit. The satisfied regular is largely absent by construction. The negativity below is real as evidence of what the bad path feels like, and it is not a base rate.

---

### P1. The pull from outside

**Thoughts and questions.** "Should I open cases in the game or should I open on third party sites like he11case or smth or should I just spend my money on skins on the market? Tryna build a good inv" (Steam, N1lz, 21 Nov 2024). The decision as the user states it himself: a three-way choice, not an impulse.

**Emotion: positive, 4, pattern of 6.** Reaction to someone else's win, quoted from the comment thread under a Hellcase opening video, which is a third-party site and therefore the right product: "Insane bro, huge pulls!", "This is really insane woow", "This is indeed huge for sure wooow", "gratz for the knife brother jordan! sweet!", "You had a pretty nice hell of luck today. Congratulations for 1k profit", "That dream case was pretty dreamy indeed (at least for a moment :D)!" Ledger U-13a.

**The "why not me" step, first person. Signal of 2.** "My toxic trait is thinking i can get this lucky" and "it shouldve been me not him". Ledger U-13b. This is the first direct evidence for the mechanism `personas.md:103` records as "one person posts a knife pull and someone else thinks why not me".

**Arrival channel, separately from the emotion.** Recommendation and clip are confirmed as the route in the users' own words: "recommended by random people in steam chat" (Steam, ShedHooman), "a friend of mine told me about it" (Steam, Dazzer), "I had heard from friends before and I logged in to the site via Steam" (Trustpilot key-drop, 5 stars), "i watched youtube video about sites where i can trade my csgo skins" (Steam, Assassin Zer0). Four users. This evidences the channel, not the emotion, and is counted separately for that reason.

**Barrier B1-1: the category arrives pre-suspected, and the recommendation itself reads as a warning. Emotion: negative, 3, signal of 2.** "Random people recommending a site should be a trigger" (Steam, Crazy Tiger, 3 Aug 2018). The community's reflexive first question when anyone's inventory goes missing is "Did you use any trading / gambling / case opening websites and / or browser extensions?" (Steam, Си́нтез, 12 Apr 2020). Ledger U-10.

**Barrier B1-2, the strongest pattern in the corpus: the real alternative is buying the skin outright, and the community actively teaches it. Emotion: negative, 4, pattern of 14 across 6 threads, 2017 to 2024.** Ledger U-05 lists all fourteen. "Buy from market. The chances of getting a knife from a case are around 1/500 and one of my friends has sunk $600 into cases and the best she's gotten was a MW AK Redline" (Steam, 村崎共鳴, 2017). "just buy the skins you want" (HLTV, shinacad, 2024). "Just dont open any cases, for 2$ its a guaranteed loss of money" (Steam, BeaST, 2019).

The counter-argument is in the ledger too, because omitting it would flatter the finding: "people be saying buy your skins, yeah lemme just go buy a £500 skin" (HLTV, Matt Freeman, 2020).

This closes U-05 and it corrects the corpus. `personas.md:37` frames Steam Market's 15 percent fee as the category's conversion argument, that is, as the reason to use a case site. In the users' own words the market runs the other way. See the persona sync-back below.

### P2. First contact, before any account

**Thoughts and questions.** The question people arrive with is a compliance test with a named pass condition: "What case opening sites are legit and which ones aren't? Meaning what case sites won't demand a deposit before you withdraw your skins" (Steam, TMathews, 2 Nov 2017). The answer that thread gives him: "At this point in time? None" (ThePun1shed, same thread).

**Emotion: negative, 3, pattern of 5.** Suspicion as the default posture, with a named tell: deposit demanded before withdrawal. Ledger U-10, deposit-tell subset. "None. All sites ask for deposit before withdrawal. Even the ones that actually let you withdraw" (Steam, Azul, 2017). "nearly all of these kinds of sites have multiple customer complaints against them that they can't withdraw shit" (HLTV, woro2k_did_nothing_wrong, 2020).

**Barrier B2-1: the pre-login information wall**, already documented at `personas.md:47`, is not contradicted by anything found here and gains no new user voice either. Carried as previously sourced.

### P3. Getting in

**Emotion: `[?]`.** This phase has evidence for both poles and no way to weigh them, so no value is assigned rather than a net being invented.

**The frictionless pole. Signal of 3, all one HLTV thread.** "no ID makes it sm easier" (Larp_God), answered by "true the barrier to entry is 0" (Turbulent), with the contrast named in the same thread, a licensed casino wanting "2 different proofs of address, bank statements, selfie w passport and the passport itself" (trollface123). Three speakers in one conversation is a signal by this file's own definition, not a pattern. Ledger U-10.

**Barrier B3-1: Steam login fails and the failure is unreadable. Emotion: negative, 3, signal.** "its weird as my password and username are correct but every time i try to 'sign in through steam' on a third party website for CSGO it says 'incorrect account name or password'" (Steam, Assassin Zer0, 5 Jan 2019). The community answer teaches a security rule, quoted once: "Log in steam community first. If any site asks for password etc though, its fake" (Muppet among Puppets, same thread). One quote, so this is a signal, not a pattern of community advice.

**Barrier B3-2: onboarding that asks for anything unusual is read as an attack. Emotion: negative, 4, signal.** A site requiring a Steam avatar change to unlock its free case: "To open the one of the free daily cases it requires you to change your avatar to a certain thing. But now I've realised the site is a scam" (Steam, Virun, 6 Aug 2019).

**Where the verification cost actually lands.** The finding that KYC first meets the user at withdrawal is real and is recorded at P8 as B8-4, not here, because that is where it is felt. Filing it here would credit this phase with a pain the user does not experience in it.

**Still `[?]` after mining and after re-research: the age gate as a rendered screen.** Not one user anywhere describes meeting an age gate on arrival. Age appears only as a ban reason at withdrawal.

### P4. Getting something to open with

**Emotion: negative, 4, pattern of 4.** The phase ends negative. It is described in the corpus only through its failures, and no quote anywhere records how it feels when it works, so **no positive opening value is assigned**. The starter offer is documented as a competitor mechanic at `personas.md:55` and `jtbd.md:45`, which is a fact about the category, not an emotion of this persona.

**Barrier B4-1: the escalating deposit gate. Emotion: negative, 5, signal, one full narrative.** Quoted at length because it is the whole phase in one voice: "im just like recommended by random people in steam chat, and i just like check it and when im try the first case im go like good skin and i need to deposit 5$ to take the skin and im just like oh.. Ok its just 5$ and when im done with depositing and want to take the skin it have erorr sign made me to at least deposit 12$ and well im depositing 7$ then. When im done with that and want to take the skin it said i need at least 15$" (Steam, ShedHooman, 3 Aug 2018). He follows it with "This ♥♥♥♥ make me cant sleep man". One narrative, marked as one. The mechanism it describes, deposit demanded before withdrawal, is separately a pattern of 5 and is recorded at P2 where users state it as a rule.

**Barrier B4-2, against a design instinct: a starter offer that is too generous destroys trust instead of building it. Emotion: negative, 4, pattern of 2.** "some how from those 15$ i got 3 gloves worth about 1200$ in total but its probably a scam because how would you supply those gloves in the easy knife case that costs 4$, and you need to put 5$ in to withdraw them, so i think its fake and im not gonna put any money in to it" (Steam, Robo, 12 Dec 2017). Generalised by another user: "It would be stupid for someone to have a case opening site, give people free codes and they get a Dlore for free without a deposit" (Steam, Iced Coffeeh, 2 Nov 2017).

A third quote previously counted here has been removed on verification: "damn dude 50 cents nice, this can get me 2 gumballs at gumball machines in walmart" (HLTV, Runtness, 2015) is derision at an offer being too **small**, which is a different proposition. It is kept in the ledger under U-05 context and not counted toward this barrier.

This qualifies `personas.md:55` and `:125`, which record the starter offer as a conversion hook acted on without reading terms. It is a hook, and it has a ceiling: above some plausibility line it converts into evidence of a scam.

**Barrier B4-3: money leaves and does not arrive. Emotion: negative, 5, pattern of 4 across 3 platforms.** "I've deposited $25 throw Crypto - nothing. I've waited a few hours - nothing... The ticket is closed, still $0 added to balance" (Trustpilot key-drop, 8 Jul 2026). "2 Days in a row, i deposited some money. Once 25 euros once 50. Both times having to wait more than a day before it landed in my wallet" (Trustpilot key-drop, 18 May 2026). Ledger U-04.

U-04 is closed for the barrier side. Minimums and methods are documented first-party in the ledger and recorded there as operator policy, not as user voice.

### P5. Picking a case

**This phase stays the thinnest, and that is reported rather than filled.** Nobody in any source narrates choosing a case. The only voices touching it are cost-shaped: "It's around €50 to open 20 cases, so if you're looking for something specific, those numbers can easily spiral" (Steam, Pomytliphycs, 21 Nov 2024) and "dont open knife cases bro on every site their usually dogshit" (HLTV, boblao, 18 Apr 2023). **Emotion: `[?]`.** Two signals do not make a phase, and the curve point here is undetermined, not interpolated.

### P6. The open

**Emotion: `[?]`, and this is the most consequential unknown in the file.**

Step 4 plotted this phase at +5, the peak of the whole map, on a single sentence: "i went from crazy when i saw the yellow knife icon to completely pissed when it honestly was a gut knife forest ddpat from a phoenix case" (HLTV, proxypeter, 27 Feb 2015). The step 6 critique broke that point on two counts and both survived verification. The sentence's own conclusion is "completely pissed", so the +5 was carved out of its first clause while the same sentence also evidenced the fall. And a Phoenix case is a Valve in-game case, so the peak of a map about third-party case sites was standing on an in-game opening. The quote is withdrawn as evidence for a positive emotion and kept in the ledger as what it actually is, an arc that ends badly.

Targeted re-research on 11 August 2026 opened video comment threads in a live browser, the one source class the Deep mining pass could not reach. What it found, in full:

- **Spectator joy at someone else's win on a third-party site: 6 quotes.** Real, and it belongs to P1, not here.
- **Anticipated joy: 1 quote.** "that blue background surrounding that gold rare item display puts me off. Then again, ill scream like a monkey if i ever get one" (YouTube, @AsherSkylark). Stated as a future reaction to a thing that has not happened.
- **First-person joy at one's own reveal: 2 quotes, both about Valve in-game cases, and both expressed as disbelief rather than as a described feeling.** "Still can't believe I pulled a ruby in 20 cases". "ten minutes ago I opened a Falichon Doppler worth $622". Ledger U-13d.

**After looking in the place where it should be, no first-person account of joy at one's own reveal on a third-party case site was found.** The value stays `[?]`. Removing it is not an admission that the moment does not matter, it is the refusal to plot a number this research cannot support.

**What that means, and it is the sharpest thing this stage produced.** The public record of this category is made of complaints, regulatory action and spectator hype. The felt experience of a good outcome leaves almost no written trace. This sits directly alongside the finding already recorded in `benchmark.md`: no product in the reveal-moment benchmark documents the craft of its reveal publicly, because probability disclosure is legally forced in several jurisdictions and craft is not. Now there is a second layer. Mechanics are copyable from documentation, craft is not, and **the emotion is not documented either**. Stage 06 works here without a corpus and without a benchmark.

**One observation about the reveal's visual treatment, the only one in the entire corpus.** The same comment that anticipates the scream also criticises a colour relationship: a gold rare-item display on a blue background, which the user says "puts me off". One mention, marked as one mention, and recorded because it is the sole user-side remark about how a reveal looks anywhere in this research.

**Barrier B6-1: the animation and the credited item disagree. Emotion: negative, 5, signal.** "the animation clearly landed directly on an AK-47 | Fuel Injector. However... I was instead credited with a cheap Dual Berettas | Cartel" (Trustpilot hellcase, 1 star, 27 Jul 2026). One mention, and it is marked as one mention. It is carried because the class of defect is fatal for a product whose thesis is that the reveal is honest.

**Barrier B6-2: the reveal is believed to turn against you once you start winning. Emotion: negative, 4, pattern of 9.** Ledger U-11a, and the split inside it is stated rather than hidden: **six on third-party platforms, three about Valve's own in-game cases.** "they let you win low-value skins and then rig it the moment you decide to play with bigger amounts" (Trustpilot key-drop). "they only allow you to play as long as you lose. Once you start to win a bit everything changes" (Trustpilot clash.gg). "if your account is new then for the first 2 or 3 weeks you'll hit bank... and then you won't win anything ever again" (Google Play, Skin.Club). The three Valve rows are kept deliberately: the same belief forms about a publisher who does publish its odds, which is the harder version of the problem.

### P7. The outcome

This phase had only its winning branch drawn. It now has both, and the losing branch has a shape nobody in the corpus predicted.

**The central finding of step 4: the loss is almost never described as losing.** People describe one of two other things. Both are recorded below with the ledger count, not with the pass total. For reference, the mining pass read far more than the ledger holds; the ledger is what can be checked.

**Barrier B7-1, the win that turned out to be worth less than it looked. Emotion: negative, 5, pattern of 7 across 3 platforms.** Ledger U-01a. "I deposited around $1,000... a knife that Hellcase displayed as being worth about $1,600. After withdrawing it, I found out that on CSFloat and even on Steam it is worth only around $550-600" (Trustpilot hellcase, 10 Aug 2026). "I won a skin worth $120, but DatDrop has it 'fixed' at $12" (Trustpilot datdrop). "i thought i was going to get a covert but actually i got complete dog" (Trustpilot datdrop). The pain arrives **after** the reveal, at the moment the platform's number is compared with the real market's number.

**Barrier B7-2, the published probability that did not behave, counted precisely. Emotion: negative, 4, pattern of 11 across 6 sources.** Ledger U-01b, which also carries the mechanic breakdown the step 6 critique required: **3 case opening, 3 upgrader, 3 case battles, 1 roll game, 1 unstated.** "I opened in total 110 different cases from 0,30$ up to 25$. NEITHER A SINGLE time out of 110 cases I profited even a mere cent" (Trustpilot hellcase). "Ran 12 1v1v1 case battles and lost all 12. How can you lose 12 in a row on a 33% odds game" (Trustpilot clash.gg). "i made 13 upgrades with 55%-59% and all of them failed" (Trustpilot hellcase).

**The scope of B7-2, stated precisely because the critique caught it being overstated.** This is not a complaint about case opening. It is a complaint about **published odds across every mechanic a platform offers**, and only three of the eleven are case openings. It is kept whole rather than filtered to those three because the defect is mechanism-independent: each of these mechanics publishes a number, and the user counts outcomes against it. The map states the wider scope instead of borrowing the wider count for a narrower claim.

**What B7-1 and B7-2 mean together.** The user does not demand a win. They demand that the number the platform published behaves like a number, and that the value the platform displayed survives contact with the market. Both are verifiability complaints wearing the clothes of a bad-luck complaint.

**Barrier B7-3: "you always get something" is read as the trick, not as consolation. Emotion: negative, 4, signal.** "If there's always a reward that is lower value than what was spent... it just gives incentive to people in spending more and fools them into thinking that the end result isn't that bad, or was close to winning big. Because they got something" (Steam, Toby Bentobox, 27 Dec 2024). The one voice in the corpus that criticises the consolation frame itself.

**Barrier B7-4: the escalation loop, described as a sequence by the people inside it. Emotion: negative, 5, pattern of 12 who gave a concrete figure unprompted.** Ledger U-01c. "First you win items... You want more and that how I lost 880$$$" (Trustpilot hellcase). "I am in the cycle of go lose go lose go lose" (Steam, Crash). "I've made from 1000$ to 15000$, thought i could make more, lost 9 bets in a row, then deposited last money of 300$ and lost it again. Now i can't even pay my bills" (HLTV, jonathaneblanowskii). Figures in the ledger run from 350 dollars to 50,000 dollars on a single site, with one lifetime debt figure of 80,000 pounds.

**Self-aware compulsion inside positive reviews. Pattern of 6.** Ledger U-01d. "fun to gamble but im too addicted i gotta slow down" (Trustpilot hellcase, **5 stars**). "LEGIT!!! BUT DON'T GET ADDICTED" (Trustpilot hellcase, **5 stars**).

**Quitting stated as a completed decision. Pattern of 5.** Ledger U-01e. One self-exclusion tool is named in a verbatim quote, **GamBan**. Two more, gamstop.co.uk and spelpaus.se, were reported by the mining pass from a source that returned a summary rather than a transcript and carry no verbatim line, so they are `[?]`.

This is a compliance fact as much as an emotional one, and it lands on the responsible-play tooling that `CLAUDE.md` already names as a first-class constraint.

### P8. Payoff or exit

**Emotion: negative, 5, pattern of 12 across all seven platforms.** Ledger U-09 and U-11a. This is the deepest point of the As-Is curve and its evidence is the densest in the file. No proportion of complaining to praising reviewers is claimed, because the method limit above forbids reading proportions off these pages; what is claimed is the count of distinct people and the fact that every one of the seven platforms is represented.

**Barrier B8-1: the item you won is not the item you can take. Pattern of 2 across 2 platforms.** "Recently won a knife on this site which I tried withdrawing for a full week and it was out of stock the whole time so I changed it to a different knife and that one was out of stock too" (Sitejabber hellcase, 1 Jun 2023). "When you finally win a decent skin, the site constantly claims the item is 'out of stock'... they force you to exchange it for much lower-value skins or 'site balance'" (Trustpilot key-drop, 1 Jun 2026).

**Barrier B8-2: waiting, with numbers. Pattern of 6, each with a hard figure.** Ledger U-09: 30 hours, 7 days, 2 to 3 days, 9 days from last deposit, 16 hours, almost 3 weeks. Against this, the positive pole exists and is worth as much: "Recently I won and withdrew a butterfly gamma doppler p2 within 5 minutes of winning" (Trustpilot skin.club, 5 stars, 7 Aug 2026). The category can do this. Most of it does not.

**Barrier B8-3: winning is treated as suspicious behaviour. Pattern of 3.** "as soon as I tried to withdraw my winnings, the site permanently banned me. They took my deposited skins and locked my account" (Trustpilot key-drop). "My account was suddenly banned, excluded from the Rain system, and my balance of over 160 coins was completely wiped out... they refused to provide any specific explanation" (Trustpilot csgoroll). "banning a user just to avoid paying out a small $80 prize" (Trustpilot key-drop).

**Barrier B8-4: verification is not met at the entrance, it ambushes at the exit. Emotion: negative, 5, pattern of 5 across 4 platforms.** Ledger U-03. "lets you deposit without kyc requierements, after the deposit you need to send them your id?" (Trustpilot csgoroll). "I withdrawled 1 item then i got hit with a verifacation process that cost $800 and they got my steam acount ban" (Trustpilot hellcase). Sharpest of all, two clash.gg reviewers banned for being underage at the moment of cashing out, both quoted in the ledger, one of them after already passing KYC: "as im about to withdraw i get banned for ''being underage'' keep in mind i passed the kyc".

**Return trigger, U-08, partially closed. Signal each, three different mechanisms, none a pattern.** Ledger U-08. A site-side bonus programme does work as an answer: asked which case site is best, one user answers with the bonus and nothing else, "csgoroll, best free bonuses". The strongest stated trigger is not site-side at all: "Everytime one of my skins becomes tradable i end up gambling it away", where the Steam trade-hold expiry is the clock. A third, blunter cadence: "Every month when I get paid I say I wont".

---

### The absence that is itself a finding

**Nobody verifies.** Not one quote in the ledger describes a user checking a hash, a server seed, a client seed or a nonce. Fairness is argued constantly and it is argued with anecdote, sample-size intuition and house-edge arithmetic. The closest thing to verification anywhere is a user computing an observed rate against a claimed rate over a thousand rolls, by hand, with no tool: "Over the last 2 days I've played over 1,000 rolls for over 1000$ and lost @ a 17.3% rate. Double your claim... this a pretty large sample size" (CS:GOSkins.net, iMblue, 2015).

This is stated as a negative finding over the scope of the ledger. An earlier draft stated it over a counted denominator of forum comments; that denominator is not reproducible from the repository and has been removed.

One reviewer did try to use the tool, and the attempt is the exception that defines the rule: "If you actually try to verify your rolls on the Upgrader, you can't. When you contact their support to request the mathematical proof (hash/seed) for your specific upgrades, which is the entire fundamental concept of a real 'Provably Fair' system, they will refuse to give it to" (Trustpilot hellcase, 1 star, 6 Aug 2026). Three further reviewers name provable fairness and call it marketing. Ledger U-11b.

Kept so the finding is not one-sided: "The provably fair system is also very good and easy to understand" (Trustpilot csgoroll, 5 stars, 2 Aug 2026).

**Read carefully, this both confirms and reframes Decision 1.** It confirms the behaviour: the mass-market Opener does not self-verify with a hash. It reframes the need: the demand for proof is loud, constant, and expressed as counting outcomes against published numbers. Recorded here as evidence and nothing more. What follows from it belongs to the To-Be half, and this file does not write it.

### What stayed `[?]` after Deep mining and after step 6 re-research

| Code | Status |
|---|---|
| U-02, as originally defined | **Closed.** The unknown was "no verbatim user language exists". The ledger now holds roughly ninety verbatim quotes. The narrower unknown that survives is not this code; it is registered below. |
| U-13 first-person joy at the reveal | **Open, and load-bearing.** Re-research in the one source class that should hold it found spectator joy and anticipated joy, and no first-person account on a third-party site. P6 is `[?]` because of this. |
| U-02b first visit as an experience | **Open.** Nobody narrates arriving, signing up and opening a first case. Review aggregators collect after an outcome; video comments did not hold it either. |
| U-05 alternatives | **Closed**, and it corrected the corpus. See P1 and the sync-back. |
| U-06 device | **Partly closed.** Real-money Android apps exist: Hellcase 100,000+ installs, Skin.Club 500,000+, GGDROP 1,000,000+ with a Russian-language listing, all via the AppBrain mirror, ledger U-06. Three quoted reviewers attack Hellcase's Play listing title, "CS2 Case Simulator", as a lie. Mobile web is therefore a first-class surface. Two claims are `[?]`: what actually breaks on a phone beyond two button-placement complaints, and the absence of any real-money iOS app, which was reported by the mining pass but never checked in a browser. |
| U-07 switching | **Closed with a negative result that matters.** No user anywhere says "I left X for Y because Z". Sites are named several at a time, as a portfolio. |
| U-10 first-visit friction | **Closed with a shape.** Every abandonment found is trust-driven: the withdrawal gate, the implausible promo, the forced avatar change, the Steam login screen. Not one person left because of a layout, a load time or a confusing control. |
| U-12 geography | **`[?]`, downgraded at step 6.** The country distribution came from HLTV country flags with no capture, and the regulatory actions in Sweden, Australia, Poland and Turkey came from pages the mining pass read but did not screenshot. Under `CLAUDE.md:66` these are leads, not facts. Listed in the ledger as leads. Market size by country: nothing found. |
| U-09 timings | **Closed on the barrier side**, 6 people with hard numbers in the ledger. No number for time-on-landing or decision time before deposit. `[?]` |

---

## Persona sync-back, proposed

This stage is the only writer permitted on `research/docs/personas.md` after stage 02. Nothing is written until approved, and the list is deliberately short: most of the persona survived contact with the evidence.

**1. Contradicted. `personas.md:37`, the framing of the alternative.**
Currently: "Withdrawal is the payoff: Steam Market's 15% fee and wallet lock are the primary conversion argument for case platforms."
Evidence against: 14 users across 6 threads from 2017 to 2024 tell each other to buy on the market **instead of** opening. Ledger U-05, all fourteen listed.
Should read: the Steam Market is the primary **competing alternative** for this persona, and the community actively teaches it as the rational choice. The fee and the wallet lock are what a case site must outweigh, not what delivers the user to it.

**2. Refined, not overturned. `personas.md:129` and founder Decision 1, on provable fairness.**
The behavioural claim holds: nobody in the ledger describes checking a hash. The stated reason needs correcting. Users are not indifferent to proof, they are loud about it and they pursue it by counting outcomes against published odds.

**3. Missing entirely, needs adding: the loss path.**
The persona has no losing branch. Evidence now supports two named forms, B7-1 the undervalued win (7) and B7-2 the misbehaving probability (11), plus the escalation loop (12 with figures) and self-aware compulsion inside five-star reviews (6).

**4. Strengthened. `personas.md:115`, bot-flooded feeds.**
Independent confirmation on the baseline itself: "There are bots playing there that impersonate real people, they create battles, join them, and when you try to check their Steam profile, it turns out they have had a VAC ban for 2000+ days or simply don't exist on Steam" (Trustpilot daddyskins, 17 Feb 2026).

**5. Strengthened with a ceiling. `personas.md:55` and `:125`, the starter offer.**
It converts, and above a plausibility threshold it inverts into evidence of a scam. Two users state the inversion.

**6. New, and it needs saying because a design principle rests on it. `personas.md:127`, speed as trust.**
Not contradicted, and **not confirmed either**. This pass found no user anywhere who left because of a load time, a layout or a control: every abandonment in the ledger is trust-driven. Surviving unchallenged is not the same as surviving confirmed, and the persona line should say which of the two happened. `CLAUDE.md` design principle 5, "Speed is trust", is untouched here; whether it keeps its rank is a question for the stage close, not for this file.

**Nothing else was contradicted.** The trigger, the channel, the primacy of the reveal and the withdrawal-as-LTV-event claim all survived the mining pass unchanged.

---

## Emotional curve

Scale runs from -5 to +5. Every point below is one emotion carried up from the phase sections with its source already attached there, and every count matches `cjm-evidence.md`. Nothing is interpolated: three phases have no honest value and are plotted as breaks in the line, not smoothed through.

**Strength drives how the point is drawn.** A point resting on a pattern is a full point on a solid line. A point resting on a signal is a small point on a thin line. A phase at `[?]` is a gap.

| Phase | Value | Strength | What the point rests on |
|---|---|---|---|
| P1 pull from outside | **+4** | pattern of 6 | Reaction to someone else's win, quoted from a third-party site's video thread |
| P2 first contact | **-3** | pattern of 5 | Suspicion as the default posture, with a named tell |
| P3 getting in | **`[?]`** | signal against signal | Evidence for both poles, no way to weigh them, no value invented |
| P4 getting something to open with | **-4** | pattern of 4 | Money leaves and does not arrive. No positive opening value is assigned |
| P5 picking a case | **`[?]`** | 2 signals | Nobody narrates choosing a case |
| P6 the open | **`[?]`** | none | **The product's core moment has no evidence of a felt emotion.** See P6 above |
| P7 the outcome | **-5** | pattern of 7 and pattern of 11 | Both forms of loss |
| P8 payoff or exit | **-5** | pattern of 12, all seven platforms | The floor |

**Counter-currents, plotted as a second thin line rather than averaged away.** P1 carries a simultaneous **-4, pattern of 14**, the community teaching the market as the alternative. P3 carries a **signal of 3** for frictionless entry against two signals of friction, which is why its main value is `[?]`. P6 carries a **-4, pattern of 9**, the belief that the reveal switches once you win.

**Barriers deliberately not plotted, and why.** B6-1 (`-5`, signal), B7-3 (`-4`, signal) and B7-4 (`-5`, pattern of 12) are recorded in their phases but not given curve points, because each phase carries one point and these are not the dominant emotion of theirs. B7-4 in particular is the densest count in P7 and describes a loop across sessions rather than a moment inside one, so a single point on a within-journey curve would misrepresent it. They remain recorded in their phase sections, where the evidence for them sits.

**The floor is P8, and P7 sits level with it.** P8 is named the floor because its evidence is the densest in the file and every one of the seven platforms is represented. This is also the phase `personas.md:65` already calls the LTV-ending event, so the mining confirms an existing claim rather than introducing one.

**The shape, restated after the step 6 critique changed it.** An earlier draft said the curve spikes to its maximum at P6 and then falls. That is no longer supportable: P6 has no value. What the evidence actually shows is starker. **The only phase with an evidenced positive emotion is P1, before the user has spent anything, and it is an emotion about someone else's outcome.** From the moment this person acts, every phase the research can measure is negative or unmeasurable. Whether the product's core moment feels good is not something this corpus can answer, and that is now the single most important gap it hands to stage 06.

---

## Growth zones

Five places where today's experience hurts most and where the gap is open. Ordered by evidence density, densest first. Every zone names the barrier it comes from and, where one exists, the gap already recorded in stage 01. No solutions here: what to build about them is step 7's job.

### Z1. The item you won is not the item you can take

**Barriers:** B8-1 out-of-stock substitution, B8-2 waiting with numbers, B8-3 winning treated as suspicious behaviour.
**Evidence:** pattern of 12 across all seven platforms, ledger U-09 and U-11a. Substitution: 2 reviewers, 2 platforms. Bans triggered by a withdrawal attempt: 3 reviewers. Six people give a hard waiting figure.
**Gap in stage 01:** `research.md:165` records Gap 2, withdrawal transparency invisible pre-login, and `personas.md:45` records withdrawal as the most-cited criticism. The mining supplies the mechanism those entries lacked.
**Where the gap is open:** the positive pole exists and is stated by a real user, a five-minute withdrawal. The category can do this and most of it does not.

### Z2. A published probability that nobody can hold the platform to

**Barrier:** B7-2, plus the verification absence.
**Evidence:** pattern of 11 across 6 sources, ledger U-01b, with the mechanic split stated there: 3 case opening, 3 upgrader, 3 case battles, 1 roll game, 1 unstated. Not one quote in the whole ledger describes checking a hash, a seed or a nonce. One reviewer who tried was refused the hash by support.
**Scope, stated precisely:** this zone is about published odds across every mechanic a platform runs, not about case opening alone. Round 1 ships one of those mechanics, so the zone is wider than the round.
**Gap in stage 01:** `benchmark.md` mechanism R2 reached the same place from the opposite direction: Genshin publishes a base rate and a guarantee and never the curve between them, and players reconstructed it from 25 million pulls. Here users are doing the same reconstruction by hand, with samples of 100 and 1,000.
**Where the gap is open:** the demand is loud and constant, and nothing in the category answers the form it actually takes.

### Z3. The gap between the value shown and the value that is real

**Barrier:** B7-1, the undervalued win.
**Evidence:** pattern of 7 across 3 platforms, ledger U-01a, with specific pairs of numbers: 1,600 against 550-600, 120 against 12, "worth peanuts" after 400 euros.
**Gap in stage 01:** `research.md:167` records Gap 3, "Currency abstraction obscures real-money stakes. All platforms use internal currencies with no visible exchange rate to real money pre-login." That is the same distance between a shown number and a real one, recorded before login; the mining shows it again after the reveal. An earlier draft claimed this zone had no stage 01 gap, which was wrong.
**Where the gap is open:** the damage happens after the reveal, at the moment the platform's number meets the market's number, and no competitor closes that distance at any point in the flow.

### Z4. Verification ambushes at the exit

**Barrier:** B8-4, plus the entry evidence recorded at P3.
**Evidence:** pattern of 5 across 4 platforms, ledger U-03, including two clash.gg users banned for being underage at cashout, one after already passing KYC. Against that, frictionless entry is stated as a draw by three users in one thread, a signal.
**Gap in stage 01:** `CLAUDE.md` already makes age verification before any case interaction a first-class constraint. The mining supplies the user-side evidence for why the timing, not the existence, is the problem.
**Where the gap is open:** the category takes money without a check and refuses to return it without one. The ordering is the defect, and it is visible to the user at the worst possible moment.

### Z5. The escalation loop, with no brake anywhere in the category

**Barrier:** B7-4.
**Evidence:** 12 users giving a concrete loss figure unprompted, ledger U-01c, from 350 dollars to 50,000 dollars on a single site. 5 users state quitting as a completed decision, ledger U-01e. Self-aware compulsion appears inside five-star reviews, 6 quotes. One user names his own brake and it is a third-party tool, **GamBan**; two further tools reported by the mining pass carry no verbatim quote and are `[?]`.
**Gap in stage 01:** `CLAUDE.md` already lists deposit limits, session limits, self-exclusion and cool-down as first-class constraints, and `research.md` section 7 carries the legal reasoning. Nothing in `competitors.md` records any competitor offering these.
**Where the gap is open, with the caveat stated:** at least one user reached outside the product for a brake, which demonstrates the need rather than assuming it. This is the one zone where the commercial and the ethical case point the same way, and also the one where a badly-built answer is worse than none. It is ranked last on the density of evidence for the open-gap leg, not on importance, and that leg rests on a single verbatim quote.

**What is deliberately not a growth zone.** The reveal itself. It is the thing the product is for, and after targeted re-research this file has no evidence that it currently hurts and no evidence that it currently delights. A zone of growth requires demonstrated pain, and there is none here. What there is instead is a hole, recorded at P6 and as U-13, and handed to stage 06 as a hole rather than dressed up as an opportunity.

## Critique

Run 10 August 2026 on two instruments, as the project rule requires. Codex ran first and independently, in read only (`--sandbox read-only`, no write permission granted), against a snapshot of the repository. The Claude pass ran in parallel on three axes that Codex cannot reach by construction: whether a quote actually supports the claim standing on it, whether the curve table agrees with the phase text, and whether every `file:line` citation resolves when the target line is opened. Neither instrument saw the other's set. Dedup happened only after both were complete.

Codex found 26 items in two classes and explicitly found **no** emotion or barrier without a source and **no** orphan phase. The Claude pass found 3 drawn emotions, which is a direct disagreement recorded below.

Nothing in this log is fixed yet. Status is on every row.

### Disagreements between the instruments, first

| # | What | Codex says | Claude says | Resolution |
|---|---|---|---|---|
| X-1 | Emotions without a source | "не підтверджено жодної емоції чи барʼєра без джерела" | Three: the P4 `+2` value at `:277`, `:391` and `:397` has no quote, no citation and no `[?]` | Not voted. Carried to the founder as row A-1 |
| X-2 | `:446` "Stage 06 designs the reveal on its own judgement" | Treatment recipe in the mirror | Not flagged | Not voted. Carried as row D-5 |
| X-3 | `:430` "the only zone here whose fix is arithmetic rather than trust-building" | Treatment recipe | Borderline: classifies a fix without naming a feature | Not voted. Carried as row D-4 |
| X-4 | The 21 count claims | One class: "one mention presented as a pattern" | Not the same defect: the numbers come from a real mining count, but the evidence for them never entered the repository | Reframed, not dismissed. See row B-1 |

### Merged log

Classes: **A** drawn emotion or invented number, **B** count claimed beyond count shown, **C** quote does not support the claim above it, **D** treatment recipe in the mirror, **E** pointer resolves to the wrong thing, **F** competitor fact with no page opened in session, **G** internal contradiction or definition drift, **H** evidence that never reaches the curve.

| # | Where | Finding | Found by | Status |
|---|---|---|---|---|
| A-1 | `:277`, `:391`, `:397` | P4 opens at `+2` on the starter offer. No quote, no citation, no `[?]`, stated three times. The neighbouring barrier B4-2 argues the opposite, that a generous offer reads as a scam | Claude | fixed |
| A-2 | `:390` | Curve plots P3 at `0`. All three emotions recorded in P3 are negative (`-5`, `-3`, `-4`). The `0` is a net judgement formed at step 5, not a value carried up, and `:382` forbids exactly that | Claude, both agents | fixed |
| A-3 | `:442` | "from 12 dollars to 800,000 pounds of lifetime turnover". Neither endpoint appears in any quote in the file. The largest quoted figure is 15,000 dollars | Claude, both agents | fixed |
| A-4 | `:317`, `:442` | "11 distinct users across 6 threads state quitting" plus GamBan, gamstop.co.uk, spelpaus.se. Zero quotes for any of it, and it is Z5's evidence | Claude, both agents. Codex flagged the count | fixed |
| B-1 | throughout | Systemic: roughly 20 count claims state more distinct people than the file shows quotes for. The numbers are real mining counts, but the mining reports never entered the repository, so no reader can verify one of them from the repo. A number that cannot be checked is a number on trust | Codex and Claude | fixed |
| B-2 | `:279` | Worst instance: "a pattern of 7 distinct users across 4 threads" standing on exactly one quoted user. This is the source of the P4 curve point | Codex and Claude | fixed |
| B-3 | `:285`, `:307`, `:323`, `:327` | Platform counts overstated: 4 platforms claimed from 1, 3 from 2, 3 from 2, 5 from 2 | Claude | fixed |
| B-4 | `:305`, `:321`, `:335`, `:345` | Denominators with no quotes at all: "43 reviews and roughly 85 forum comments", "17 against 3", "29 fairness comments", "4 review mentions" | Codex and Claude | fixed |
| B-5 | `:321` against `:323`, `:325`, `:327` | P8 arithmetic: the parts sum to 22 reviewers inside a phase whose whole is stated as 17. Overlap is never declared | Claude | fixed |
| C-1 | `:295` | **The peak of the curve.** The `+5` is extracted from the first clause of a sentence whose stated outcome is "completely pissed", and the same sentence also evidences the fall. The case named is a Phoenix case, a Valve in-game case, not a third-party platform. The highest point of a map about case sites stands on an in-game opening from 2015 | Claude | fixed |
| C-2 | `:309` | The 11-reviewer pattern under form two is mostly mechanics this map excluded at `:13`: case battles, the upgrader, roulette rolls, shared mode. Of five quotes, one is unambiguously the Opener's case-open path. This pattern anchors both P7 at `-5` and growth zone Z2 | Claude | fixed |
| C-3 | `:245` | P1 `+4` is labelled anticipation, but four of its five quotes evidence the arrival channel, not an emotion. Anticipation itself rests on one quote | Claude, both agents | fixed |
| C-4 | `:281` | The third quote counted toward "a starter offer that is too generous" is derision at an offer being too small ("50 cents nice, this can get me 2 gumballs"). It evidences a different proposition | Claude | fixed |
| C-5 | `:249` | One of four quotes under B1-2 is retrospective regret from a speaker at the end of the journey, used as P1 pre-arrival decision evidence | Claude | fixed |
| C-6 | `:259` against `:390` | The same two quotes are filed under P2 as a `signal` and reused as P3 evidence as a `pattern, 2 users`. Their subject, ID and KYC, belongs to P3 | Claude, both agents | fixed |
| D-1 | `:339` | "Something that shows this user their own observed rate against the published rate is." A capability defined by what it displays. A recipe, in the half that forbids recipes, three lines after saying it would not do this | Codex and Claude | fixed |
| D-2 | `:437` | "Fixing the order costs nothing and is visible." A build instruction with an effort estimate, which is step 8 material | Codex and Claude | fixed |
| D-3 | `:401` | "the html at step 10 must draw that difference rather than describe it." A rendering instruction for a later step | Codex and Claude | fixed |
| D-4 | `:430` | "the only zone here whose fix is arithmetic rather than trust-building." Classifies a fix without naming a feature | Codex firm, Claude borderline | fixed, line removed. Disagreement X-3 resolved by removal, not by a verdict |
| D-5 | `:446` | "Stage 06 designs the reveal on its own judgement." Assigns a future working method | Codex only | fixed, line rewritten as a statement of fact rather than an instruction. Disagreement X-2 resolved by rewrite |
| E-1 | `:420`, `:427` | Z2 and Z3 both cite barrier `B7-1`. `B7-1` is defined at `:313` as the consolation-frame barrier, a different thing. The two loss forms at `:307` and `:309` carry no barrier code at all | Claude, both agents | fixed |
| E-2 | `:434` | Z4 cites `B3-1`, which is the Steam-login-failure barrier. Z4's subject is KYC timing, the unlabelled finding at `:265` | Claude | fixed |
| E-3 | `:98` | The naming resolution cites `personas.md:225`, which sits inside Persona 4 The Battler and says "Thrill Seeker primarily, with Grinder overlap". It cuts against treating Thrill Seeker as the Opener. None of the six cited lines contains the string "Segment A" | Claude | fixed |
| E-4 | `:84` against `:345` | `U-02` is defined as "no verbatim user language exists" and closed as "first-time experience, still open". The code changed subject between its definition and its verdict. As defined, U-02 was emphatically closed by this pass | Claude, both agents | fixed |
| E-5 | `:158` | "Screenshots of all of these are in `research/screens/`" names seven landing pages. There is no clash.gg landing screenshot anywhere in the tree, and clash.gg is the file's load-bearing pre-login outlier | Claude, verified against the filesystem | fixed |
| E-6 | `:23` | "the entire existing corpus contains two review-source URLs". `live-research.md:35` carries four, two of them complaint sources | Claude, verified against the file | fixed |
| E-7 | `:429` | Z3 says "Gap in stage 01: none. This is new." `research.md:167` records "Gap 3: Currency abstraction obscures real-money stakes", the same shown-value-against-real-value problem in another form | Claude, verified against the file | fixed |
| F-1 | `:350` | Four dated regulatory claims about four named competitors, Sweden, Australia, Poland, Turkey, with no URL, no screenshot and no access date. `CLAUDE.md:66` makes such a fact `[?]`, not a fact | Claude, both agents | fixed |
| F-2 | `:347` | "No real-money app on iOS for any of the seven" is a negative claim across seven competitors on a store that is not in the list of sources opened at `:231` | Claude | fixed |
| F-3 | `:347` | Install counts and "4 distinct reviewers attack that name as a lie" carry no citation and no quote | Claude and Codex | fixed |
| F-4 | `:350` | The HLTV country list is asserted with no thread, no capture, no quote | Claude | fixed |
| G-1 | `:236` against `:321` | The method block forbids reading proportions off Trustpilot, "none are claimed below". The headline evidence for the deepest point of the curve is a proportion, "17 complaining against 3 praising" | Claude | fixed |
| G-2 | `:227` against `:259`, `:269`, `:281` | `pattern` is defined as several people who do not know each other, with the count given. It is then used for 2 users, used with no count at all, and three quoted speakers are called a `signal` | Claude, both agents. Codex flagged `:269` | fixed |
| G-3 | `:401` against `:297` | "Every deep negative here is a pattern" against B6-1, a `-5` explicitly labelled a signal. True only if "here" means the plotted curve, which is exactly where B6-1 is missing | Claude | fixed |
| G-4 | `:376` against `:349` | "the speed-as-trust claim survived the mining pass unchanged", while the same pass concluded "Not one person left because of a layout, a load time or a confusing control". Surviving unchallenged is not the same as surviving confirmed | Claude | fixed |
| G-5 | `:249`, `:315`, `:321` | Three competing superlatives: strongest pattern in the corpus (14 users), a larger pattern (28 users), and densest evidence (17 against 3) | Claude | fixed |
| G-6 | `:345` | "4 review mentions across 7 platforms" cannot be distributed as written | Claude | fixed |
| G-7 | `:257` and `:279` | The identical evidence, "7 distinct users across 4 threads" for the deposit-before-withdrawal tell, is used in two different phases and then plotted as two separate curve points | Claude | fixed |
| G-8 | `:335` against `:337` | "the single closest thing to verification anywhere in the corpus" is absolute, and the next line describes a reviewer who did attempt the tool | Claude | fixed |
| H-1 | `:297`, `:313`, `:315`, `:325` | Four recorded emotions never reach the curve or the counter-current line, including B7-2 at `-5`, which carries the densest single count in P7, and the P8 positive pole | Claude | fixed |

### The three most dangerous questions, most dangerous first

**Q1. If the peak falls, does this map have any evidence of joy at all?**
C-1 says the `+5` at P6 is carved out of a sentence that ends "completely pissed" and describes a Valve in-game case. If that point does not survive verification, the curve loses its only positive anchor above `+4`, and the claim at `:403`, that the damage happens immediately after the best moment in the product, loses its best moment. The honest replacement may be `[?]`, which would mean this pass found strong public evidence of pain and no public evidence of delight. That is a defensible finding, and it is a very large one to carry into stage 06.
Where to look: video comment threads at the moment of a big pull, which is the one source class Deep mining could not open.

**Q2. Does Z2 survive when the excluded mechanics are removed?**
C-2 says four of the five quotes under the misbehaving-probability pattern are about battles, the upgrader and roulette, all of which this map excluded at `:13`. Z2 is the growth zone that carries the product thesis, publish the whole curve rather than two endpoints. If only one quote in five is about opening a case, the zone stands on far less than the file claims.
Where to look: filtering the same sources for case opening only, and saying out loud what the count becomes.

**Q3. Do the counts enter the repository, or do the claims come down to what the file can prove?**
B-1 is the systemic finding and both instruments reached it from different directions. Every "pattern of N" in this file is currently trustworthy only because a mining transcript existed in a session that no longer exists. Two honest routes: put a quote ledger in the repo so every count is checkable, or reduce every count to what the file shows and mark the rest as a pass total. Doing neither means stage 03a inherits numbers it cannot audit.

### What the critique changed

All 38 rows are closed. Line numbers in the table above point at the file as it stood on 10 August 2026, before the fixes; they are kept as the record of what was found, not as live pointers.

**Withdrawn on verification: one row, and it was the map's highest point.** The `+5` at P6 rested on "i went from crazy when i saw the yellow knife icon to completely pissed when it honestly was a gut knife forest ddpat from a phoenix case". Re-read in place, both objections held: the sentence's own outcome is negative, and a Phoenix case is a Valve in-game case, not a third-party platform. The quote is withdrawn as evidence of a positive emotion, kept in `cjm-evidence.md` as what it is, and the phase is now `[?]`.

**The largest structural change: three of eight phases now carry no value.** P3, P5 and P6. Two were already undetermined in substance and one was carrying a number it could not support. The curve is a broken line in three places, and each break is a statement rather than a gap in the work.

**The largest change of meaning.** An earlier draft concluded that the curve spikes to its maximum at the reveal and falls immediately after. That reading is gone. What the evidence supports is starker: the only phase with an evidenced positive emotion is P1, before the user has spent anything, and it is an emotion about someone else's outcome.

**What the counts became.** Every number was reduced to what `research/docs/cjm-evidence.md` can show, quote by quote. The largest reductions: 28 users with a loss figure became 12, 13 reviewers with a timing figure became 6, 11 users who quit became 5, 7 users behind the deposit tell became 5. Two claims were removed outright: the loss range "12 dollars to 800,000 pounds", which appeared in no quote, and the ratio "17 complaining against 3 praising", which is a proportion and the method block forbids proportions. Two counts survived unchanged because the ledger holds them in full: the 14 users teaching the market as the alternative, and the 11 counting outcomes against published odds.

**New evidence added by step 6 re-research.** Video comment threads, opened in a live browser, gave P1 its first direct evidence: six spectator reactions on a third-party site's thread and two first-person statements of the "why not me" mechanism. They also produced the only user observation about the visual treatment of a reveal anywhere in this research, and confirmed the hole at P6 rather than filling it.

**Facts downgraded to `[?]` for want of a page opened in session:** the regulatory actions in Sweden, Australia, Poland and Turkey; the HLTV country distribution; the absence of any real-money iOS app; and the clash.gg landing screenshot the file claimed to have and does not.

**Codex ran read only and returned findings, not edits**, as the rule requires. Its 26 items were taken in full before the Claude set was looked at, and merged afterwards.
