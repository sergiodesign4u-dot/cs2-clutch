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

Reason the fork mattered here rather than being a matter of taste: the entire existing corpus contains **two** review-source URLs (`live-research.md:35`, Trustpilot for `hellcase.com` and `key-drop.com`) and zero collected reviews. Under Lite, nearly every emotion in this file would have been `[?]`, and the As-Is half would have been a reprojection of what we already believed rather than a mirror of what people say.

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

`The Opener`, `Segment A` and `Thrill Seeker` are used interchangeably across `personas.md:55`, `:67`, `:69`, `:225` and `jtbd.md:220`, `:232`, and no file states the equivalence. This map treats them as the same person and carries hypotheses filed under any of the three names. Recorded so that a later search by one name does not silently lose lines filed under another.

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
- **Touchpoints.** The landing page of hellcase.com, key-drop.com, csgoroll.com, datdrop.com, skin.club, clash.gg, daddyskins.com. Screenshots of all of these are in `research/screens/`.
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

Mined 10 August 2026 in Deep mode. Rule applied without exception: every emotion and every barrier below stands on a quote from a page opened in this session, or it carries `[?]`. Nothing here is a drawn emotion.

### How to read the strength column

`signal` means one mention. `pattern` means the same thing said by several people who do not know each other, and the count is given. A signal never outranks a pattern, and an MVP feature is not built on a signal without saying so out loud.

### Method, and what limits it

**Sources actually opened.** Trustpilot brand pages for hellcase, key-drop, csgoroll, skin.club, daddyskins, datdrop, clash.gg, captured in a live browser with proof screenshots in `research/screens/cjm/`. Sitejabber, now hosted at smartcustomer.com. Steam Community discussions. HLTV.org forums. Google Play listings through the AppBrain mirror. Regulatory and press reporting. Operator help centres, which are first-party and count as policy statements, not as user voice.

**Three limits that shape everything below, stated before the data rather than after it.**

1. **Reddit was unreachable.** Every route was tried: `old.reddit.com`, `www.reddit.com`, `site:reddit.com` search, the PullPush and Arctic Shift archive APIs, five Redlib and Teddit mirrors, and the Wayback Machine. All blocked at the fetch layer. Every subreddit named as a target yielded nothing. The forum material below comes from Steam Community and HLTV instead, which are the two largest reachable CS-topical boards. This is a named hole, not a silent substitution.
2. **A Trustpilot brand page is not a sample.** key-drop shows an aggregate of 4.3 while its first page is almost entirely one star. skin.club shows 3.6 while its first page is entirely five stars. Proportions therefore cannot be read off these pages, and none are claimed below. Only counts of distinct reviewers are used, and only across platforms.
3. **The boards select for the moment things go wrong.** People post when they lost, got scammed, or are trying to quit. The satisfied regular is largely absent by construction. The negativity below is real as evidence of what the bad path feels like, and it is not a base rate.

---

### P1. The pull from outside

**Thoughts and questions.** "Should I open cases in the game or should I open on third party sites like he11case or smth or should I just spend my money on skins on the market? Tryna build a good inv" (Steam, N1lz, 21 Nov 2024). This is the decision as the user states it himself: a three-way choice, not an impulse.

**Emotion: positive, 4, pattern.** Anticipation carried in from someone else's win. "Roll Bro, Knife will come, it's a unique feeling when you hit gold" (Steam, xXBurner, 21 Nov 2024). Arrival by personal recommendation is confirmed as the channel in the users' own words: "recommended by random people in steam chat" (Steam, ShedHooman, 3 Aug 2018), "a friend of mine told me about it" (Steam, Dazzer, 11 Dec 2017), "I had heard from friends before and I logged in to the site via Steam" (Trustpilot key-drop, 5 stars, 28 Jan 2025), "i watched youtube video about sites where i can trade my csgo skins" (Steam, Assassin Zer0, 5 Jan 2019). 4 distinct users, 4 sources.

**Barrier B1-1: the category arrives pre-suspected, and the recommendation itself reads as a warning.** "Random people recommending a site should be a trigger" (Steam, Crazy Tiger, 3 Aug 2018). The community's reflexive first question when anyone's inventory goes missing is "Did you use any trading / gambling / case opening websites and / or browser extensions?" (Steam, Си́нтез, 12 Apr 2020). **Emotion: negative, 3, signal each**, but the two together describe an ambient reputational load that any new site inherits before it renders a pixel.

**Barrier B1-2, and this is the strongest single pattern in the entire corpus: the real alternative is buying the skin outright, and the community actively teaches it.** "Buy from market. The chances of getting a knife from a case are around 1/500 and one of my friends has sunk $600 into cases and the best she's gotten was a MW AK Redline. Do yourself a favor and buy one from market" (Steam, 村崎共鳴, 26 Mar 2017). "just buy the skins you want" (HLTV, shinacad, 7 Feb 2024). "Just dont open any cases, for 2$ its a guaranteed loss of money. Buy the skins from the market" (Steam, BeaST, 17 Feb 2019). "Probably enough to buy a good knife by now. Some days i wonder why i didnt just do that in the first place" (HLTV, JoeyGuerreva, 27 Feb 2015). **Emotion: negative, 4, pattern of 14 distinct users across 6 threads spanning 2015 to 2024.** A decade of stability makes this the most durable finding of the whole mining pass.

This closes U-05 and it corrects the corpus. `personas.md:37` frames Steam Market's 15 percent fee as the category's conversion argument, that is, as the reason to use a case site. In the users' own words the market runs the other way: it is the thing people tell each other to use **instead of** opening. See the persona sync-back below.

### P2. First contact, before any account

**Thoughts and questions.** The question people arrive with is not "is this fun", it is a compliance test with a specific pass condition: "What case opening sites are legit and which ones aren't? Meaning what case sites won't demand a deposit before you withdraw your skins" (Steam, TMathews, 2 Nov 2017). The answer that thread gives him: "At this point in time? None" (ThePun1shed, same thread).

**Emotion: negative, 3, pattern of 7 distinct users across 4 threads.** Suspicion as the default posture, with a named tell. "None. All sites ask for deposit before withdrawal. Even the ones that actually let you withdraw" (Steam, Azul, 2 Nov 2017). "imagine depositing anything in these case sites and expecting anything back" (HLTV, woro2k_did_nothing_wrong, 22 Aug 2020).

**Emotion: positive, 3, signal.** The counterweight, and it is about friction, not about fun: "no ID makes it sm easier" (HLTV, Larp_God, 13 Jan 2025), answered in the same thread with "true the barrier to entry is 0" (Turbulent). The same thread names the contrast explicitly: a licensed casino wants "2 different proofs of address, bank statements, selfie w passport and the passport itself" (trollface123). Zero-friction entry is a real and stated draw of this category over regulated gambling.

**Barrier B2-1: the pre-login information wall**, already documented at `personas.md:47`, is not contradicted by anything found here and gains no new user voice either. Carried as previously sourced.

### P3. Getting in

**The finding that reshapes this phase: verification does not meet the user at the entrance, it ambushes them at the exit.** Six distinct reviewers across four platforms describe KYC arriving at withdrawal, never at signup. "lets you deposit without kyc requierements, after the deposit you need to send them your id?" (Trustpilot csgoroll, 1 star, 14 May 2026). "I withdrawled 1 item then i got hit with a verifacation process that cost $800 and they got my steam acount ban" (Trustpilot hellcase, 5 Aug 2026). Sharpest of all, two clash.gg reviewers banned for being underage at the moment of cashing out: "as im about to withdraw i get banned for ''being underage'' keep in mind i passed the kyc" (Trustpilot clash.gg, 27 Jul 2026). **Emotion: negative, 5, pattern of 6 distinct reviewers.**

The phase is therefore not empty, as the skeleton assumed. It is **displaced**, and it lands at the worst possible moment. U-03 is closed by relocation rather than by filling.

**Barrier B3-1: Steam login itself fails and the failure is unreadable.** "its weird as my password and username are correct but every time i try to 'sign in through steam' on a third party website for CSGO it says 'incorrect account name or password'" (Steam, Assassin Zer0, 5 Jan 2019). The community answer teaches a security rule: "Log in steam community first. If any site asks for password etc though, its fake" (Muppet among Puppets, same thread). **Emotion: negative, 3, signal**, with the security rule as a pattern of community advice.

**Barrier B3-2: onboarding that asks for anything unusual is read as an attack.** A site requiring a Steam avatar change to unlock its free case: "To open the one of the free daily cases it requires you to change your avatar to a certain thing. But now I've realised the site is a scam" (Steam, Virun, 6 Aug 2019). **Emotion: negative, 4, signal.**

**Still `[?]` after mining: the age gate as a rendered screen.** Not one user anywhere describes meeting an age gate on arrival. Age appears only as a ban reason at withdrawal. What the gate looks like, whether it asks a date of birth or a single button, is unknown from user voice.

### P4. Getting something to open with

**Emotion: positive then negative within the same phase, and the turn is the phase's defining event.**

**Barrier B4-1: the escalating deposit gate.** The fullest first-visit narrative found anywhere, quoted at length because it is the whole phase in one voice: "im just like recommended by random people in steam chat, and i just like check it and when im try the first case im go like good skin and i need to deposit 5$ to take the skin and im just like oh.. Ok its just 5$ and when im done with depositing and want to take the skin it have erorr sign made me to at least deposit 12$ and well im depositing 7$ then. When im done with that and want to take the skin it said i need at least 15$" (Steam, ShedHooman, 3 Aug 2018). He follows it with "This ♥♥♥♥ make me cant sleep man". **Emotion: negative, 5, and the mechanism is a pattern of 7 distinct users across 4 threads**: deposit demanded before withdrawal is the category's single most named scam tell.

**Barrier B4-2, and this one inverts a design instinct: a starter offer that is too generous destroys trust instead of building it.** "some how from those 15$ i got 3 gloves worth about 1200$ in total but its probably a scam because how would you supply those gloves in the easy knife case that costs 4$, and you need to put 5$ in to withdraw them, so i think its fake and im not gonna put any money in to it" (Steam, Robo, 12 Dec 2017). The user abandons at the exact moment the win looks implausible against the case price. The same reasoning, generalised: "It would be stupid for someone to have a case opening site, give people free codes and they get a Dlore for free without a deposit" (Steam, Iced Coffeeh, 2 Nov 2017). **Emotion: negative, 4, pattern of 2 distinct users, plus a third who states the sceptical reflex about small credit: "damn dude 50 cents nice, this can get me 2 gumballs at gumball machines in walmart"** (HLTV, Runtness, 29 Nov 2015).

This directly qualifies `personas.md:55` and `personas.md:125`, which record the starter offer as a conversion hook acted on without reading terms. It is a hook, and it has a ceiling: above some plausibility line it converts into evidence of a scam.

**Barrier B4-3: money leaves and does not arrive.** 5 distinct reviewers across 4 platforms. "I've deposited $25 throw Crypto - nothing. I've waited a few hours - nothing... The ticket is closed, still $0 added to balance" (Trustpilot key-drop, 8 Jul 2026). "2 Days in a row, i deposited some money. Once 25 euros once 50. Both times having to wait more than a day before it landed in my wallet" (Trustpilot key-drop, 18 May 2026). **Emotion: negative, 5, pattern.**

U-04 is closed for the barrier side. Minimums and methods are documented first-party: DaddySkins states a minimum around 5 dollars, cards, crypto across "over 150 cryptocurrencies", skins and gift cards, and no deposit fee (support.daddyskins.com, 13 Nov 2024). Those are policy statements by the operator, recorded as such.

### P5. Picking a case

**This phase stays the thinnest, and that is reported rather than filled.** Nobody in any source narrates choosing a case. The only voices touching it are cost-shaped: "It's around €50 to open 20 cases, so if you're looking for something specific, those numbers can easily spiral" (Steam, Pomytliphycs, 21 Nov 2024) and "dont open knife cases bro on every site their usually dogshit" (HLTV, boblao, 18 Apr 2023). **Emotion: `[?]`.** Two signals do not make a phase, and the curve point here is marked undetermined rather than interpolated.

### P6. The open

**Emotion: positive, 5, signal, and it is the highest point on the whole map.** The arc inside the reveal, captured in one sentence by a user who did not set out to describe a UX moment: "i went from crazy when i saw the yellow knife icon to completely pissed when it honestly was a gut knife forest ddpat from a phoenix case. i mean its one of the 7 cheapest knives while there are 700 better knives just on the market" (HLTV, proxypeter, 27 Feb 2015). Elation on the rarity colour, collapse when the item resolves. The peak and the fall are inside the same phase, separated by about a second.

**Barrier B6-1, and it lands directly on our product's core promise: the animation and the credited item disagree.** "the animation clearly landed directly on an AK-47 | Fuel Injector. However... I was instead credited with a cheap Dual Berettas | Cartel" (Trustpilot hellcase, 1 star, 27 Jul 2026). **Emotion: negative, 5, signal.** One mention, and it is marked as one mention. It is carried because the class of defect is fatal for a product whose thesis is that the reveal is honest.

**Barrier B6-2: the reveal is read as a mechanism that turns against you once you win.** 9 distinct reviewers across 6 platforms, in nearly identical shape. "they let you win low-value skins and then rig it the moment you decide to play with bigger amounts" (Trustpilot key-drop, 7 Aug 2026). "they only allow you to play as long as you lose. Once you start to win a bit everything changes" (Trustpilot clash.gg, 25 May 2026). "if your account is new then for the first 2 or 3 weeks you'll hit bank... and then you won't win anything ever again" (Google Play, Skin.Club, 1 star, 20 Oct 2025). Independently on Valve's own cases: "Its rigged for new player and for streamers/Youtubers. Everyone else, will lose" (Steam, 1 Nov 2023), a belief arrived at separately by 4 users in 3 threads across 2015, 2023 and 2023. **Emotion: negative, 4, pattern.**

### P7. The outcome

This phase had only its winning branch drawn. It now has both, and the losing branch has a shape nobody in the corpus predicted.

**The central finding of step 4: the loss is almost never described as losing.** Across 43 reviews and roughly 85 forum comments, people describe one of two other things.

**Form one, the win that turned out to be worth less than it looked. Emotion: negative, 5, pattern of 7 distinct reviewers across 3 platforms.** "I deposited around $1,000, played, and eventually got a knife StatTrak Bayonet Gamma Doppler (Factory New), Phase 4 that Hellcase displayed as being worth about $1,600. After withdrawing it, I found out that on CSFloat and even on Steam it is worth only around $550-600" (Trustpilot hellcase, 1 star, 10 Aug 2026). "I won a skin worth $120, but DatDrop has it 'fixed' at $12" (Trustpilot datdrop, 28 Mar 2026). "i thought i was going to get a covert but actually i got complete dog" (Trustpilot datdrop, 10 Apr 2026). "I've already dropped 400 euros and I'm not getting anything; I did pull an 'expensive' skin once, but it's worth peanuts" (Trustpilot hellcase, 4 Aug 2026). The pain arrives **after** the reveal, at the moment the platform's number is compared with the real market's number.

**Form two, the published probability that did not behave, counted precisely. Emotion: negative, 4, pattern of 11 distinct reviewers across 4 platforms.** "Ran 12 1v1v1 case battles and lost all 12. How can you lose 12 in a row on a 33% odds game" (Trustpilot clash.gg, 14 Jun 2026). "i made 13 upgrades with 55%-59% and all of them failed" (Trustpilot hellcase, 1 Aug 2026). "I opened in total 110 different cases from 0,30$ up to 25$. NEITHER A SINGLE time out of 110 cases I profited even a mere cent" (Trustpilot hellcase, 28 Jul 2026). "I opened over 100 cases with a 10% drop chance in shared mode and didn't hit a single roll drop" (Trustpilot csgoroll, 24 Jul 2026). "Is it coded to give better odds for low bets? Over the last 2 days I've played over 1,000 rolls for over 1000$ and lost @ a 17.3% rate. Double your claim. I understand it won't be 8% for each individual, but this a pretty large sample size" (Steam group CS:GOSkins.net, iMblue, 14 Apr 2015).

**What those two forms mean together, and it is the sharpest thing this stage produced.** The user does not demand a win. They demand that the number the platform published behaves like a number, and that the value the platform displayed survives contact with the market. Both are verifiability complaints wearing the clothes of a bad-luck complaint.

**Barrier B7-1: "you always get something" is read as the trick, not as consolation.** A user articulating it unprompted: "If there's always a reward that is lower value than what was spent... it just gives incentive to people in spending more and fools them into thinking that the end result isn't that bad, or was close to winning big. Because they got something" (Steam, Toby Bentobox, 27 Dec 2024). **Emotion: negative, 4, signal.** This is a direct warning about how a low-value outcome is presented on a result screen, and it is the one voice in the corpus that critiques the consolation frame itself.

**Barrier B7-2: the escalation loop, described as a sequence by the people inside it. Emotion: negative, 5, pattern of 28 distinct users who gave a concrete figure unprompted.** "First you win items... You want more and that how I lost 880$$$" (Trustpilot hellcase, 14 Dec 2023). "I am in the cycle of go lose go lose go lose" (Steam, Crash, 10 Jul 2017). "No matter if you win or lose now, at the end you will lose all if you continue to bet. I've made from 1000$ to 15000$, thought i could make more, lost 9 bets in a row, then deposited last money of 300$ and lost it again" (HLTV, jonathaneblanowskii, 27 Mar 2020). Self-aware and inside five-star reviews: "fun to gamble but im too addicted i gotta slow down" (Trustpilot hellcase, 5 stars, 3 Apr 2025), "LEGIT!!! BUT DON'T GET ADDICTED" (Trustpilot hellcase, 5 stars, 13 Mar 2023).

This is a compliance fact as much as an emotional one, and it lands on the responsible-play tooling that `CLAUDE.md` already names as a first-class constraint. 11 distinct users across 6 threads state quitting as a completed decision, and users name their own blocking tools: GamBan, gamstop.co.uk, spelpaus.se.

### P8. Payoff or exit

**Emotion: negative, 5, pattern of 17 complaining reviewers across all 7 platforms, against 3 praising.** This is the deepest point of the As-Is curve and the evidence for it is the densest.

**Barrier B8-1: the item you won is not the item you can take.** "Recently won a knife on this site which I tried withdrawing for a full week and it was out of stock the whole time so I changed it to a different knife and that one was out of stock too so then I changed it another knife and it was also out of stock" (Sitejabber hellcase, 1 star, 1 Jun 2023). "When you finally win a decent skin, the site constantly claims the item is 'out of stock'... they force you to exchange it for much lower-value skins or 'site balance'" (Trustpilot key-drop, 1 Jun 2026). **Pattern, 3 distinct reviewers across 3 platforms.**

**Barrier B8-2: waiting, with numbers.** 13 distinct reviewers gave a hard figure. "its been 30hours for a withdraw. support doesnt answer" (Trustpilot daddyskins, 10 Apr 2026). "It took 7 days and a ton of complaining to get my withdraw" (Trustpilot daddyskins, 9 Nov 2023). "spent 16 hours attempting to complete the trade" (Trustpilot hellcase, 17 Jul 2026). "you have to wait 9 days from your last deposit to be able to withdraw" (Trustpilot daddyskins, 17 Feb 2026). Against this, the positive pole exists and is worth as much: "Recently I won and withdrew a butterfly gamma doppler p2 within 5 minutes of winning" (Trustpilot skin.club, 5 stars, 7 Aug 2026). U-09 is closed on the barrier side.

**Barrier B8-3: winning is treated as suspicious behaviour.** Already recorded as B6-2 in belief form, it recurs here as an event: "as soon as I tried to withdraw my winnings, the site permanently banned me. They took my deposited skins and locked my account" (Trustpilot key-drop, 21 Jul 2026). "My account was suddenly banned, excluded from the Rain system, and my balance of over 160 coins was completely wiped out... they refused to provide any specific explanation" (Trustpilot csgoroll, 4 Aug 2026). "banning a user just to avoid paying out a small $80 prize" (Trustpilot key-drop, 14 Jun 2026). **Pattern, 6 distinct reviewers across 5 platforms.**

**Return trigger, U-08, partially closed and with a mechanism nobody in our corpus had.** Site-side bonuses do work as an answer: asked which case site is best, one user answers with the bonus programme and nothing else, "csgoroll, best free bonuses" (HLTV, mlodymichal, 18 Apr 2023). But the strongest stated return trigger is not site-side at all: "Everytime one of my skins becomes tradable i end up gambling it away" (Steam, Crash, 10 Jul 2017). The Steam trade-hold expiry is the clock. A second, blunter cadence: "Every month when I get paid I say I wont" (HLTV, AlexFella, 21 Sep 2023). **Signal each, three different mechanisms, none a pattern.**

---

### The absence that is itself a finding

**Nobody verifies. Across 29 fairness comments on the forums, not one person describes checking a hash, a server seed, a client seed or a nonce.** They argue fairness constantly, and they argue it with anecdote, sample-size intuition and house-edge arithmetic. The single closest thing to verification anywhere in the corpus is a user computing an observed rate against a claimed rate over a thousand rolls (CS:GOSkins.net, iMblue, 14 Apr 2015), and he does it by hand, not with a tool.

One reviewer did try to use the tool, and that attempt is the exception that defines the rule: "If you actually try to verify your rolls on the Upgrader, you can't. When you contact their support to request the mathematical proof (hash/seed) for your specific upgrades, which is the entire fundamental concept of a real 'Provably Fair' system, they will refuse to give it to" (Trustpilot hellcase, 1 star, 6 Aug 2026). Six further reviewers name provable fairness and call it marketing: "A site that uses 'Provably Fair' as its main advertising slogan, but refuses to actually prove its fairness" (Trustpilot hellcase, 4 Aug 2026), "we can't verify the algorithm so maybe its a scam" (Trustpilot key-drop, 2 May 2026).

**Read carefully, this both confirms and reframes Decision 1.** It confirms the behaviour: the mass-market Opener does not self-verify with a hash. It reframes the need: the demand for proof is loud, constant, and expressed as counting outcomes against published numbers. A hash checker is not the artefact that answers it. Something that shows this user their own observed rate against the published rate is. Recorded here as evidence, not resolved: the reframing goes to the To-Be half and to the step 6 critique, not into this mirror.

### What stayed `[?]` after Deep mining

| Code | Status |
|---|---|
| U-02 first-time experience | **Still open.** 4 review mentions across 7 platforms and none narrates a first visit. Review sites structurally do not hold this story, because people write after an outcome, not after onboarding. The one full narrative found (ShedHooman, P4) is a scam narrative, not a normal first open. Candidate for step 6 re-research. |
| U-05 alternatives | **Closed**, and it corrected the corpus. See P1 and the sync-back. |
| U-06 device | **Partly closed.** Real-money Android apps exist: Hellcase 100,000+ installs, Skin.Club 500,000+, GGDROP 1,000,000+ with a Russian-language listing. No real-money app on iOS for any of the seven, only play-money simulators. Hellcase ships on Play as "CS2 Case Simulator" and 4 distinct reviewers attack that name as a lie. Mobile web is therefore the category's real mobile surface. What still has no evidence: what actually breaks on a phone. One aside in a 5-star review, "on mobile it's harder for person to orientate", is the only layout complaint anywhere. `[?]` |
| U-07 switching | **Closed with a negative result that matters.** No user anywhere says "I left X for Y because Z". Sites are named several at a time, as a portfolio. Loyalty is not how this audience thinks. |
| U-10 first-visit friction | **Closed with a shape.** Every abandonment found is trust-driven: the withdrawal gate, the implausible promo, the forced avatar change, the Steam login screen. Not one person left because of a layout, a load time or a confusing control. |
| U-12 geography | **Partly closed.** Country flags on two HLTV threads give Poland, Germany, Finland, Sweden, Russia, Turkey, Canada, United States, Lithuania, Ukraine, Brazil and more, all in English-language threads. Documented regulatory action against this exact category: Sweden (Hellcase and Key-Drop banned, Mar 2024), Australia (CSGORoll, May 2023), Poland (Key-Drop, Nov 2023), Turkey (11 influencers arrested over Key Drop promotion, Jun 2025). Market size by country: nothing found, `[?]`. |
| U-09 timings | **Closed on the barrier side**, 13 reviewers with hard numbers. No number for time-on-landing or decision time before deposit. `[?]` |

---

## Persona sync-back, proposed

This stage is the only writer permitted on `research/docs/personas.md` after stage 02. Mining produced three rows to change and two to strengthen. Nothing is written until approved, and the list is deliberately short: most of the persona survived contact with the evidence.

**1. Contradicted. `personas.md:37`, the framing of the alternative.**
Currently: "Withdrawal is the payoff: Steam Market's 15% fee and wallet lock are the primary conversion argument for case platforms."
Evidence against: 14 distinct users across 6 threads from 2015 to 2024 tell each other to buy on the market **instead of** opening. "Just dont open any cases, for 2$ its a guaranteed loss of money. Buy the skins from the market" (Steam, 17 Feb 2019).
Should read: the Steam Market is the primary **competing alternative** for this persona, and the community actively teaches it as the rational choice. The fee and the wallet lock are what the case site must outweigh, not what delivers the user to it.

**2. Refined, not overturned. `personas.md:129` and founder Decision 1, on provable fairness.**
The behavioural claim holds: no user in 29 fairness comments describes checking a hash. The stated reason needs correcting. Users are not indifferent to proof, they are loud about it and they pursue it by counting outcomes against published odds. Add the mechanism and the evidence, keep the decision.

**3. Missing entirely, needs adding: the loss path.**
The persona has no losing branch. Evidence now supports two named forms, the undervalued win (7 reviewers) and the misbehaving probability (11 reviewers), plus the escalation loop (28 users with figures) and self-aware compulsion inside five-star reviews.

**4. Strengthened. `personas.md:115`, bot-flooded feeds.**
Independent confirmation on the baseline itself: "There are bots playing there that impersonate real people, they create battles, join them, and when you try to check their Steam profile, it turns out they have had a VAC ban for 2000+ days or simply don't exist on Steam" (Trustpilot daddyskins, 17 Feb 2026).

**5. Strengthened with a ceiling. `personas.md:55` and `:125`, the starter offer.**
It converts, and above a plausibility threshold it inverts into evidence of a scam. Two users state the inversion, a third states the sceptical reflex.

**Nothing else was contradicted.** The trigger, the channel, the primacy of the reveal, the speed-as-trust claim and the withdrawal-as-LTV-event claim all survived the mining pass unchanged.

---

## Emotional curve

Scale runs from -5 to +5. Every point below is one emotion carried up from step 4 with its source already attached there. Nothing is interpolated: the one phase without evidence is plotted as undetermined and left as a break in the line, not smoothed through.

**Strength drives how the point is drawn.** A point resting on a pattern is a full point on a solid line. A point resting on a single mention is a small point on a thin line. This matters more here than anywhere else in the file, because the two ends of this curve have opposite evidence weights.

| Phase | Value | Strength | What the point rests on |
|---|---|---|---|
| P1 pull from outside | **+4** | pattern, 4 users | Anticipation carried in from someone else's win |
| P2 first contact | **-3** | pattern, 7 users across 4 threads | Suspicion as the default posture, with a named tell |
| P3 getting in | **0** | pattern, 2 users, plus 6 by displacement | Frictionless at the time, and loaded. The cost is real and it is paid at P8 |
| P4 getting something to open with | **-4** | pattern, 7 users across 4 threads | Ends negative. Starts at +2 on the starter offer, turns at the deposit gate |
| P5 picking a case | **`[?]`** | 2 signals, no pattern | Undetermined. Nobody in any source narrates choosing a case |
| P6 the open | **+5** | **signal, 1 user** | The peak of the whole map, and it stands on one quote |
| P7 the outcome | **-5** | pattern, 7 + 11 users across 4 platforms | Both forms of loss, undervalued win and misbehaving probability |
| P8 payoff or exit | **-5** | pattern, 17 complaining reviewers across all 7 platforms against 3 praising | The floor |

**Counter-currents, plotted as a second thin line rather than averaged away.** Averaging would hide the shape. P1 carries a simultaneous **-4 pattern of 14 users** telling each other to buy on the market instead. P2 carries a **+3 signal**, zero-ID entry named as a genuine draw. P4 opens at **+2** before it turns. P6 carries a **-4 pattern of 9 users** who believe the reveal switches against them once they start winning.

**The bottom is the P7 to P8 trough, and P8 is the floor.** Both sit at -5. P8 is named the floor because its evidence is the densest in the file: 17 complaining reviewers against 3 praising, present on all seven platforms, 13 of them giving a hard number. This is also the phase `personas.md:65` already calls the LTV-ending event, so the mining confirms an existing claim rather than introducing one.

**The peak is P6 and it is the weakest-evidenced point on the curve.** One user, one sentence, 2015. Every deep negative here is a pattern; the single high point is a signal. Said plainly: **we have strong evidence for where this experience hurts and thin evidence for where it feels good.** Neither the curve nor anything downstream should pretend otherwise, and the html at step 10 must draw that difference rather than describe it.

**One shape worth naming before To-Be touches it.** The curve does not decline. It spikes to its maximum at P6 and falls ten points across the two phases that follow. The damage is not done by a slow drain, it is done immediately after the best moment in the product. P7 and P8 are where the whole map is decided.

---

## Growth zones

Five places where today's experience hurts most and where the gap is open. Ordered by evidence density, densest first. Every zone names the barrier it comes from and, where one exists, the gap already recorded in stage 01. No solutions here: what to build about them is step 7's job, and putting it here would turn the mirror into a prescription.

### Z1. The item you won is not the item you can take

**Barriers:** B8-1 out-of-stock substitution, B8-2 waiting with numbers, B8-3 winning treated as suspicious behaviour.
**Evidence:** 17 complaining reviewers against 3 praising, present on all seven platforms, 13 with a hard figure. Substitution: 3 reviewers, 3 platforms. Bans triggered by a withdrawal attempt: 6 reviewers, 5 platforms.
**Gap in stage 01:** `research.md` gaps table records withdrawal architecture as invisible pre-login across the category, and `personas.md:45` already records withdrawal as the most-cited criticism. Mining supplies the mechanism those entries lacked.
**Why it is winnable:** the positive pole exists and is stated by a real user, "Recently I won and withdrew a butterfly gamma doppler p2 within 5 minutes of winning". The category can do this. Most of it does not.

### Z2. A published probability that nobody can hold the platform to

**Barriers:** B7-1 form two, the probability that did not behave, plus the verification absence.
**Evidence:** 11 reviewers across 4 platforms counting outcomes against a published percentage, and 29 fairness comments in which **not one person** describes checking a hash, a seed or a nonce. One reviewer who tried was refused the hash by support.
**Gap in stage 01:** `benchmark.md` mechanism R2 arrived at the same place from the opposite direction: Genshin publishes a base rate and a guarantee and never the curve between them, and players reconstructed it from 25 million pulls. Here the users are doing the same reconstruction by hand, with samples of 100 and 1,000.
**Why it is winnable:** the demand is loud and constant, and the artefact that would answer it does not exist anywhere in the category. What exists is a hash checker nobody uses.

### Z3. The gap between the value shown and the value that is real

**Barrier:** B7-1 form one, the undervalued win.
**Evidence:** 7 reviewers across 3 platforms, with specific pairs of numbers: 1,600 against 550-600, 120 against 12, "worth peanuts" after 400 euros.
**Gap in stage 01:** none. This is new, and it did not exist anywhere in the corpus before this step.
**Why it is winnable:** the damage happens after the reveal, at the moment the platform's number meets the market's number, and no competitor closes that distance at any point in the flow. It is also the only zone here whose fix is arithmetic rather than trust-building.

### Z4. Verification ambushes at the exit

**Barrier:** B3-1 and the displacement finding, plus the entry side of P3.
**Evidence:** 6 reviewers across 4 platforms describing KYC first met at withdrawal, and 2 clash.gg users banned for being underage at cashout, one of them after already passing KYC. Against that, the frictionless entry is stated as a draw: "no ID makes it sm easier", "true the barrier to entry is 0".
**Gap in stage 01:** `CLAUDE.md` already makes age verification before any case interaction a first-class constraint. Mining supplies the user-side evidence for why the timing, not the existence, is the whole problem.
**Why it is winnable:** the category has arranged its friction in exactly the wrong order, taking money without a check and refusing to return it without one. Fixing the order costs nothing and is visible.

### Z5. The escalation loop, with no brake anywhere in the category

**Barrier:** B7-2, the escalation loop described from inside it.
**Evidence:** 28 users giving a concrete loss figure unprompted, from 12 dollars to 800,000 pounds of lifetime turnover. 11 users across 6 threads state quitting as a completed decision. Self-aware compulsion appears inside five-star reviews, "fun to gamble but im too addicted i gotta slow down". Users name their own brakes and every one is a third-party tool: GamBan, gamstop.co.uk, spelpaus.se.
**Gap in stage 01:** `CLAUDE.md` already lists deposit limits, session limits, self-exclusion and cool-down as first-class constraints, and `research.md` section 7 carries the legal reasoning. Nothing in `competitors.md` records any competitor offering these.
**Why it is winnable, with the caveat stated:** users are reaching outside the product for a brake, which means the need is demonstrated rather than assumed. This is the one zone where the commercial and the ethical case point the same way, and also the one where a badly-built answer is worse than none. It is ranked last on evidence density for the winnable leg, not on importance, and the two sources naming external blockers are signals, not a pattern.

**What is deliberately not a growth zone.** P6, the reveal itself, is the peak of the curve and the thing the product is for, but the evidence under it is one sentence from one user in 2015. It does not qualify as a zone where today's experience demonstrably hurts. Stage 06 designs the reveal on its own judgement, as `benchmark.md` already concluded, and not on a growth zone that the data does not support.


