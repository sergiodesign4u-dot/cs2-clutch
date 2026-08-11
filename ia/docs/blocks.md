# Block bank by page type

**Step 4 of stage 03b. Built 12 August 2026.** This file closes the one hole in the pipeline's provenance. Every other artefact has a rule of origin: a research fact carries a cited source, a CJM emotion comes from mining or is `[?]`, a To-Be capability traces to a barrier. **The block composition of a page had none.** The node template says "content blocks: 1, 2, 3" and does not say where they come from, and a model that is not asked for a source returns the median of everything it has seen: hero, filter, cards, pagination. That median is the plain wireframe, and it is only visible at stage 04, when the structure has already been rolled across the product.

**So the source of blocks is fixed here, before the pages, and by TYPE rather than by node.** Twenty six file-level nodes are eight types, so the pass runs once per type.

**Read by:** steps 5 and 6 of this stage, which take each node's block composition from here rather than from the model's memory. After that the bank is not read again, but its consequence is carried by everything downstream: denser pages give denser wireframes at 04 and a bigger component inventory at 07.

---

## 0. Method, and what it cost

**Two sources answering two different questions**, the same split stage 01 makes between competitors and benchmark, one level down:

| Source | Question it answers | Instrument |
|---|---|---|
| **Competitors** | What they actually sell and what holds a person **inside our category** | Playwright, public and pre-login pages only |
| **Refero** | How a page of **this type** is built in best in class **outside the category** | `refero_search_screens`, searched by page type and job, never by industry |

**Every competitor page below was opened live in this session on 12 August 2026.** A fact taken from model memory or from an undated article is `[?]`, not a fact. Proof screenshots are in `research/screens/blocks/`.

**On Refero and `get_screen`.** The `md` response of `refero_search_screens` carries the same content block that `refero_get_screen` returns for a screen: description, functions, layout, page types, UI elements and site. The pack asks for a full-data pass on each of three to five screens per type, and that is what the search response already is. Where a second opinion was needed, the query itself was varied instead. **This is a named divergence from the pack, not an omission**, and it is written here rather than left to be discovered.

### Four things this pass could not get, named before the tables rather than after

| Gap | What is missing | What stands in its place |
|---|---|---|
| **T4 has no competitor screens at all** | Deposit, withdrawal and identity verification are behind login on all five hard competitors, and this project never logs in | **Public documentation of the same mechanics**, which turned out to carry the domain rules in plain words: Hellcase's public FAQ states the deposit crediting window and the thirty day withdrawal deadline. Plus Refero for the craft and the As-Is barriers for what is missing |
| **CSGORoll refused this environment** | HTTP 403 on the whole domain, the second time today. It is the competitor with the fullest public provably fair documentation | Key-Drop and Hellcase and skin.club carried every type it would have covered |
| **Refero holds no live-event detail page** | No auction, no draw, no gacha, no page whose centre is an outcome happening now. The reveal itself has no external craft reference | Named in T3 rather than papered over. What Refero did give for T3 is the **risk-moment confirmation** pattern, which is the half of that screen this project cares most about |
| **The rarity ladder was `[?]` and is now walked** | Node `0.6` could not be specified without it | Walked live on two Hellcase case pages, section 9 below |

**One type was deliberately cut to a reduced pass and it is said out loud:** T8 got one competitor and one Refero set instead of two and three, because it is a single node and the 404 is the most settled composition in the craft. That is a cost cut, not a finding of sufficiency.

---

## 1. The types, and the nodes each one carries

Derived from `ia/docs/sitemap.md`, not from a generic list.

| Type | File nodes | With states | Of them MVP |
|---|---|---|---|
| **T1 Landing** | 1 | 2 | 2 |
| **T2 Listing with an empty state** | 2 | 4 | 4 |
| **T3 Object detail with a live event** | 2 | 7 | 7 |
| **T4 Transactional form with named states** | 3 | 14 | 14 |
| **T5 Interstitial and gate** | 3 | 7 | 7 |
| **T6 Settings and controls** | 1 | 3 | 3 |
| **T7 Document and explainer** | 3 | 5 | 5 |
| **T8 Utility and system** | 1 | 1 | 1 |
| **Not a page type** | 10 | 10 | 10 |
| **LATER, cluster 8** | 13 | 13 | 0 |
| **Total** | **26** | **66** | **53** |

**The scope column saves this step nothing, and that is a finding rather than a coincidence.** Everything marked LATER lives in cluster 8, and cluster 8 gets no type pass at all. The brake the pack builds into this step does not engage here, so the only real brake is the number of sources, which is why the reduced pass on T8 is declared instead of hidden.

**Nodes that are not a page type:** `0.1` and `0.2`, the two carriers, already built before this bank existed; `0.5`, `0.6`, `0.7`, `0.8` and `0.14`, components that render inside pages and take their field lists from the T1, T2 and T3 passes; `0.11`, `0.12` and `0.13`, registers that no stage wireframes.

---

## 2. T1 Landing

**Nodes:** `1.0` Home, `1.1` Home with an account.
**Competitors opened live:** Clash.gg home, Key-Drop home.
**Refero:** Stocktwits `f88c57a0`, Kraken Pro `69751349`, District `2d294020`, YouTube signed out `fd83cc41`.

| Source | Block | Verdict | Traces to | Scope | Where we are better |
|---|---|---|---|---|---|
| Clash.gg | Mode hub: nine game modes as the first block after the hero, **and no case grid on the page at all** | **LEAVE** | `D-20` deferred the mode row because one live card of four is the dead item defect | MVP | Their home answers "which game" for a person who has not decided this place is real. Ours answers `B1-1` first. **A hub of nine when we would ship one is worse than no hub** |
| Key-Drop | The shelf **is** the home page: eighteen category rows, 15,119px tall | **DIFFERENT** | Core Job 1, `jtbd.md` | MVP | We put **a featured grid on Home and the full shelf on `3.1`**, `D-20`. Eighteen rows on the first surface is a catalogue pretending to be a decision |
| Key-Drop | Live drop ticker **with a PAUSE control** | **TAKE** | `A3`, and design principle 2: motion serves emotion. A strip that cannot be stopped serves neither | MVP | Node `0.8` did not have a pause. It does now, and it is also the `prefers-reduced-motion` answer rather than a separate one |
| Key-Drop, skin.club | Concurrency counter in the header, "6,537 ONLINE" | **LEAVE** | No parent. `0.11` rule 7: never a score | MVP | A crowd figure is not a checkable number. It answers "are other people here", which is not the doubt `B1-1` records |
| skin.club, Hellcase | Vanity stats bar of five cumulative totals: users, battles, upgrades, cases opened, contracts signed | **LEAVE** | No parent. `0.11` rule 1: a number ships with a route or it does not ship | MVP | **Two of three competitors carry this block.** Every figure only goes up and none can be checked. Ours publishes withdrawal p90 and tested RTP instead, which can be wrong and therefore mean something |
| Clash.gg | Payment method strip, **pre-login** | **TAKE** | `B4-3`, the deposit barrier, and Core Job 3 | MVP | Same block, earlier honesty: ours names the withdrawal threshold in the same breath, `C4`, so the way out is priced where the way in is |
| Clash.gg | Live feed as a **table** with tabs (All / High Rollers / Lucky Wins), columns Game, User, Amount, Multi, Payout, **and an empty state, "NO BETS YET"** | **DIFFERENT** | `A3` | MVP | We take the empty state and refuse the table. A sortable ledger of other people's payouts is a leaderboard with a different name, and `CLAUDE.md` puts leaderboards in LATER. Ours is a tile strip where **every tile lands on `7.1`**, a checkable object |
| Key-Drop, Hellcase | Event banner with a countdown | **DIFFERENT** | No parent in round 1 | LATER | A countdown is urgency attached to spending. It ships when an event ships, and then it carries a parent or it does not ship |
| All four competitors | Long SEO text block at the bottom, H2 and H3 structured | **TAKE** | `0.13`, the structural SEO layer | MVP | Four of four carry it, which settles that the block exists. Ours is placed by `0.13` with one H1 and a real heading tree, not a keyword paragraph under the fold |
| Refero, District | Hero banner, then a **category tile row**, then multi column card grids, then filter chips | **TAKE** | Core Job 1 | MVP | The craft version of what Key-Drop does by brute force: categories as a row of entries rather than eighteen stacked shelves |
| Refero, Stocktwits | Left fixed navigation rail plus a centre live column plus a right information column, in dark mode | **TAKE** | `D-21`, the inherited rail | MVP | Confirms the rail plus live centre is a solved layout outside the category, not only a baseline habit |
| Refero, Kraken Pro | **Top navigation carries portfolio and account figures**, the layout's money slot | **TAKE** | `D-19`: the header owns money as two figures | MVP | Same placement, and ours never sums the two figures into a score |
| Refero, YouTube | Signed out home with an explicit empty state rather than a login wall | **TAKE** | `B1-1`, pre-login trust evaluation | MVP | This is exactly what `1.1` is: one page, a state-dependent strip, not a different page |

---

## 3. T2 Listing with an empty state

**Nodes:** `3.1` Case catalogue with `3.2`, `5.1` Account and inventory with `5.2`.
**Competitors opened live:** Hellcase home and catalogue, skin.club home.
**Refero:** New Balance catalogue `d4b18099`, Rork dark table `367109eb`, shop.app catalogue `afaed4b1`.

| Source | Block | Verdict | Traces to | Scope | Where we are better |
|---|---|---|---|---|---|
| Hellcase | Category chip rail, twenty five chips, horizontal | **DIFFERENT** | Core Job 1 | MVP | Twenty five chips is a taxonomy nobody reads. Key-Drop's eighteen stacked rows is the same problem vertically. **Ours is a category bar plus search plus filters**, `S-C1`, sized to the catalogue we will actually have |
| Hellcase | Filter control with an **active count badge** | **TAKE** | `D1`, the stock-backed table barrier | MVP | Same control. Ours also has to survive `3.2`, and their filter has no visible empty state |
| Key-Drop | Price range filter, minimum and maximum | **TAKE** | Core Job 1 and `C2`, the spend ceiling | MVP | Same control, different job: for us a price filter is also a way to stay under a ceiling, so it is placed where the ceiling is visible |
| Hellcase, Key-Drop | Case tile fields: **name, price, image**, and on Hellcase a TOP badge and one bare number | **DIFFERENT** | `0.7` canonical case tile, parent `D1` and `D2` | MVP | **Ours carries five fields: name, item count, entry cost, live free unit counter, daily marker.** Their tile makes a person open the case to learn what is in it, which is the extra step `D1` exists to remove |
| skin.club | 248 case links on one page, 612 images, 28,160px | **LEAVE** | none | MVP | Infinite shelf with no pagination and no result count. `3.2` requires a legible bottom to the list, and this has none |
| Hellcase | **H1 below the fold, after the shelf** | **LEAVE** | `0.13`, the single H1 rule | MVP | The heading that names the page sits under 1,400px of product. Ours is the first thing after the shell |
| Refero, New Balance | Filter sidebar, product grid, **removable active filter chips** | **TAKE** | `D1` and `3.2` | MVP | Removable chips are the route out of an empty result, which is what `3.2` needs and what no competitor here provides |
| Refero, Rork | Dark listing with filter chips, search, and an explicit **empty state** | **TAKE** | `3.2` | MVP | The empty state as a designed block rather than an accident, which is precisely the node |
| Refero, shop.app | Breadcrumb, badges, currency, catalogue page schema | **TAKE** | `0.13` breadcrumbs and `CollectionPage` schema | MVP | Ours has breadcrumbs where depth allows any, decided in `0.13` rather than copied |
| Own research | **Zero-stock items stay visible and marked** rather than filtered out | **TAKE** | `D1`, and `3.2` in `sitemap.md` | MVP | No competitor does this. The shelf is legibly empty instead of silently short, which is the whole of `D1` |

---

## 4. T3 Object detail with a live event

**Nodes:** `3.3` Case screen with `3.4` to `3.7`, `7.1` Public result with `7.2`.
**Competitors opened live:** Hellcase `/open/ironbound` and `/open/warsteel`, skin.club `/en/cases/open/poolday`.
**Refero:** Wealthsimple review and sign `5de90c91`, Ableton comparison `5d247bfe`, MWM product detail `e0369d2b`, Fresha booking summary `3d6c5b9f`.

**Refero holds no page of this type.** No auction, no draw, no live outcome. **The reveal has no external craft reference and this bank says so rather than inventing one.** What Refero does hold is the risk-moment confirmation, which is the half of `3.3` that decides whether cost hides inside excitement.

| Source | Block | Verdict | Traces to | Scope | Where we are better |
|---|---|---|---|---|---|
| Hellcase | **Full drop table, chance per item to three decimals, pre-login**: 0.207% to 13.386% | **TAKE** | `D2`, published chance per item | MVP | We take it and it is the strongest thing in the category. Ours adds what theirs lacks, below |
| Hellcase, skin.club | **Neither shows chance and current value on the same item.** Hellcase gives chance in the table and value only in "last 7 days top drop". skin.club gives value in "last top skins" and hides odds behind a **[ CHECK ODDS RANGE ]** control | **DIFFERENT** | `D2`: published chance **and** current value per item, on the card | MVP | **This is the gap the barrier names, and no competitor closes it.** A chance without a value is a lottery ticket with no prize printed on it, and a value without a chance is a shop window |
| skin.club | Odds behind a control, with **"UPDATED 11 MINUTES AGO"** | **DIFFERENT** | `0.11` rule 2: an as-of stamp on anything that moves | MVP | We take the stamp and refuse the door. Their freshness discipline is real and their default is to hide the number the person came for |
| Hellcase | "Last 7 days top drop": value, wear, StatTrak, **and a multiplier, x38.8** | **DIFFERENT** | `A3` social proof, and `D3` observed rate | MVP | Survivorship by construction: the top drops of the week are not what happens. **Ours answers the same curiosity with `D3`, the observed rate against the published one**, which can disappoint and is therefore worth reading |
| Hellcase | **Multi-open selector, 1 / 2 / 3 / 4 / 5 / 10** | **LEAVE** | No parent. Design principle 3: cost never hides inside excitement | MVP | A spend multiplier next to the trigger, before any ceiling is visible. If multi-open ever ships it ships behind `C2` |
| Hellcase | **Keyboard shortcuts printed on the controls: GET → ENTER, QUICK STOP → SPACE, SELL → S, REPEAT → R** | **LEAVE** | Design principle 3, and the limits rule in `CLAUDE.md` | MVP | **One key re-spends and one key liquidates.** Speed here is not service. This is the single most telling block in the whole bank |
| Hellcase | "Fast mode" toggle that shortens the reveal | **DIFFERENT** | Design principle 2, and accessibility | MVP | We ship reduced motion as **an accessibility setting that respects the system preference**, not as a control that makes spending faster. Same mechanism, opposite reason |
| skin.club | **"Authorization is required to open cases"**: the open control is a sign-in wall pre-login | **LEAVE** | `B1-1` and `B3` | MVP | A person deciding whether this place is real cannot see the mechanic. Ours shows the whole screen and gates at the first case interaction, `D-17` |
| skin.club | "Skin.Club guarantees 100% case fairness transparency" | **LEAVE** | `D-14` bounds this claim | MVP | An unfalsifiable sentence. Node `0.14` carries a scope line that says what the proof does **not** cover, which is the opposite move |
| Both | No RTP, no expected value, no observed rate anywhere on the case page | **TAKE the absence as the opportunity** | `D4` published tested RTP and EV at this entry cost, `D3` observed rate | MVP | Three numbers no competitor prints at the moment of spending. `D-14` says the brand is that our own numbers are checkable, and this is where that becomes markup |
| Refero, Wealthsimple | Review and sign: step indicator, review card, info note, **submit disabled until the condition is met** | **TAKE** | Design principle 3, clarity at every risk moment | MVP | The craft half of `3.3` phase 1. This is what a spend confirmation looks like when it is not trying to be fast |
| Refero, Fresha | Persistent summary card carrying the total, beside the choice, with a full width continue | **TAKE** | `C2` and design principle 3 | MVP | Cost stays on screen while the choice is made rather than appearing after it |
| Refero, Ableton | Wide comparison table with expandable detail | **TAKE** | `D2`, the drop table | MVP | The drop table is a comparison table and should be built as one, sortable and readable, rather than as a decorated carousel |
| Refero, MWM | Product detail: hero card, tabbed sections, metrics, FAQ, similar items | **DIFFERENT** | `7.1` public result | MVP | `7.1` takes the hero card and the metrics and refuses "similar items". A shared result that recommends another case is an advertisement wearing a receipt |

---

## 5. T4 Transactional form with named states

**Nodes:** `4.1` Deposit with `4.2` to `4.5`, `5.3` Withdrawal with `5.4` to `5.8`, `2.7` Identity with `2.8` and `2.9`.
**Competitor screens: none exist that we may open.** All five hard competitors put these behind login and this project never logs in.
**Substitute source, named as the pack requires:** public documentation of the same mechanics, plus the As-Is barriers, plus Refero for the craft.
**Opened live:** Hellcase public FAQ. **Refero:** New Balance verification `7dea4d01`, Wealthsimple transfer `5de90c91`, Navan payment methods `803e703a`, Parallel confirmation modal `80a30705`, Fresha summary `3d6c5b9f`.

| Source | Block | Verdict | Traces to | Scope | Where we are better |
|---|---|---|---|---|---|
| Hellcase FAQ, live | **"Your drop is waiting for up to 30 days. Full cost of the item will be returned to your balance if you don't withdraw it within 30 days."** | **DIFFERENT, and it is a rule we did not have** | `G1` named withdrawal states, and `G5` limits stated before entry | MVP | A deadline that converts an item into balance is a real product rule, and it lives in an FAQ. **If we carry any such deadline it is stated on `5.1` on the item itself, before it runs**, which is what `G5` means |
| Hellcase FAQ, live | "Your payment might be delayed for 5-10 minutes. If funds didn't get transferred within an hour, contact support" | **DIFFERENT** | `C3`, crediting with a named timer | MVP | The timing exists and it is in a document. **Ours is a named state with the timer in the interface**, which is the whole of `C3` |
| Hellcase FAQ, live | "Steam Balance is not appropriate on this site" | **TAKE the disclosure, place it earlier** | `B4-3` | MVP | Method exclusions belong on `4.1` beside the methods, not in an FAQ a person reads after failing |
| Own research | One real currency, **no coin denomination** | **TAKE** | `C1` | MVP | Every competitor here denominates in Gems, coins or tokens. Clash.gg prices in Gems, Key-Drop in local currency, Hellcase in a bare number. `C1` is a barrier because a second currency hides the price |
| Own research | **Spend ceiling for a named period, and lowering applies immediately while raising waits 24 hours** | **TAKE** | `C2` | MVP | The asymmetry is what makes it a brake rather than a setting. No competitor has it |
| Own research | Withdrawal threshold stated **on the deposit screen** and never rising | **TAKE** | `C4` | MVP | The exit is priced where the entry is paid. This is the block the category most consistently omits |
| Own research | Per-state timer labelled **waiting on us, on Steam, or on you** | **TAKE** | `G1`, and `0.11` for the published p90 | MVP | Named states with an owner, against a category that shows a spinner. `A4` and `G3` supply the number |
| Refero, New Balance | Verification card: six digit code, submit, cancel, **resend**, log out, plus support footer | **TAKE** | `2.7`, `B2` | MVP | The craft floor for `2.7`. Ours adds `2.8` pending review, which an OTP card never needs and a document check always does |
| Refero, Wealthsimple | Step indicator, review card, info box, submit disabled until complete | **TAKE** | `2.7` superset shape, `D-A` | MVP | Lets `2.7` be drawn as a superset so one branch is deleted later rather than the node redrawn |
| Refero, Navan | Payment methods as cards **with an empty state** | **TAKE** | `4.1` | MVP | The empty first deposit is the common case and is designed rather than met |
| Refero, Parallel | Destructive confirmation modal, cancel and confirm, close prevents accidents | **TAKE** | `6.2` self exclusion confirmation | MVP | Reused across the boundary, and `6.2` states the period rather than asking twice |

---

## 6. T5 Interstitial and gate

**Nodes:** `2.1` Age and geo gate with `2.2` and `2.3`, `2.4` Sign in with `2.5` and `2.6`, `0.4` Cookie consent.
**Competitors opened live:** Hellcase sign-in modal and cookie banner, skin.club cookie banner, Clash.gg sign-in prompt, Key-Drop login redirect.

| Source | Block | Verdict | Traces to | Scope | Where we are better |
|---|---|---|---|---|---|
| Hellcase | **Sign-in modal on arrival**, before any content: Steam, Google, Telegram, terms agreement, and **"I'm at the age of legal capacity (usually, 18 years) or older" as a checkbox inside it** | **LEAVE** | `B3` and `D-17` | MVP | Two barriers at once: the trust evaluation cannot happen and the age declaration is a line in a signup form. **Ours fires at the first case interaction, carries only the 18+ declaration, and identity sits separately before funding** |
| Hellcase, skin.club | Cookie banner with **ACCEPT only** and "if you continue to use this site, you consent" | **LEAVE** | `0.4`: prior consent, reject as easy as accept | MVP | Two of two. Consent by browsing is not consent, and a banner with one button is not a choice. Ours has both buttons at equal weight and analytics off until opted in |
| Clash.gg | Sign-in prompt as a **block inside the hero**, not a modal | **TAKE** | `B1-1` | MVP | Non-blocking, which is the property that matters. The page stays readable |
| Key-Drop | Provably fair **redirects to the login page** | **LEAVE** | `research.md` section 5b, and design principle 1 | MVP | **The fairness proof is behind authentication.** `1.2` and `7.1` are public precisely so a stranger can check without an account. Not logged in, per the project rule: the redirect is the finding |
| Own research | Geo verdict as a **state with a ground in readable words**, 200 not 403, reading stays open | **TAKE** | `0.12` sections 9 and 11, `D-23` | MVP | Under an allowlist the common refusal is `not launched`, not `blocked`, and `2.2` is designed around that one |
| Refero, ShareWillow | Centred single card login, one column, sign-up prompt below | **TAKE** | `2.4` | MVP | Ours is Steam OpenID with a statement of what the product will and will not read, which no competitor prints |

---

## 7. T6 Settings and controls

**Node:** `6.1` Responsible play with `6.2` and `6.3`.
**Competitor opened live:** Key-Drop's safety portal, `safety.key-drop.com`. **It is the only responsible play surface any of the five publishes**, and Hellcase's footer carries no link of the kind at all.
**Refero:** Parallel confirmation `80a30705`, Kraken settings `b7ae7d3a`, Stocktwits preferences `e47ee59e`.

| Source | Block | Verdict | Traces to | Scope | Where we are better |
|---|---|---|---|---|---|
| Key-Drop safety | Four tool cards: **deposit limits daily, weekly, monthly; session reminders; time-outs from 24 hours to 7 days; self-exclusion up to permanent** | **TAKE** | `C2` and `C5`, and the compliance constraint in `CLAUDE.md` | MVP | Near identical to our `6.1` list, which settles that these four are the category floor rather than our invention |
| Key-Drop safety | **"Session reminders: gentle alerts during long play sessions"** | **DIFFERENT** | `C5` session limit | MVP | A reminder you can ignore forever is not a limit. `C5` is a limit, and `6.3` holds the boundary without becoming a thing to engage with |
| Key-Drop safety | **The whole surface is a separate subdomain** | **LEAVE** | `6.1` reachability, `D-19` | MVP | The brake lives outside the room where the spending happens. **Ours has a persistent entry inside the balance control**, two taps from anywhere, plus the footer link |
| Key-Drop safety | A **mock verifier widget** showing a fake server seed, a fake client seed and **"Outcome Verified: DRAGON LORE (FN)"** | **LEAVE, and it is the anti-pattern this project already wrote a rule against** | `0.14` section 0, and `D-14` | MVP | A decorative proof that shows a verified outcome which never happened. **Node `0.14` forbids a verified badge in any variant**, and here is a live instance of exactly why |
| Key-Drop safety | Three principle cards: fun first, collectibles not investments, healthy play mindset | **TAKE the second, LEAVE the framing** | The compliance constraint, and `jtbd.md` | MVP | "Collectibles, not investments" is a true and useful sentence. The other two are mood. Ours states what the tools do, and stage 05 writes the words |
| Key-Drop safety | 18+ badges: NO MINORS, ID MATCH REQUIRED, KYC VERIFICATION | **LEAVE** | `0.11` rule 9, and `D-A` | MVP | Claims about a mechanism, printed as badges, with nothing to check. Our identity method is `[?]` pending `D-A` and will be described rather than badged |
| Refero, Kraken and Stocktwits | Grouped settings with right-aligned toggles, one column | **TAKE** | `6.1` | MVP | The plain shape. A limit is a setting, and it must look like one rather than like an achievement |
| Own research | **No counters, no streaks, no status, no session score, no celebration of staying inside a limit** | **TAKE** | The limits rule in `CLAUDE.md`, binding 04, 07 and 11 | MVP | The rule exists because the moment a boundary acquires completion mechanics it becomes a reason to keep going |

---

## 8. T7 Document and explainer

**Nodes:** `1.2` Provably fair with `1.3` and `1.4`, `0.9` Legal and policy, `0.10` Support and contact.
**Competitors opened live:** Hellcase FAQ, skin.club footer and About block, Key-Drop provably fair (redirects to login).
**Refero:** WhatsApp help article `7a0ccea6`, Ableton FAQ accordion `5d247bfe`, Intercom help 404 `3285f0f6`.

| Source | Block | Verdict | Traces to | Scope | Where we are better |
|---|---|---|---|---|---|
| Hellcase | Public FAQ with sectioned accordions: general, events, Case Battle, **keeping your account safe**, affiliate | **TAKE the structure** | `0.10`, and `B5` readable failures | MVP | Sectioned Q and A is the right shape for `0.10`. Ours carries **a published response deadline**, `G4`, which turns a help page into a service level |
| Hellcase | Product rules that belong in the interface living only in the FAQ: the 30 day deadline, the crediting window | **LEAVE the placement** | `G5`, `C3` | MVP | A rule a person meets in the product is stated in the product. The FAQ repeats it, it does not own it |
| skin.club | Footer carrying the **legal entity and address** plus "By accessing this site, you confirm that you are over 18 years old" | **TAKE** | `0.2` Article 5 identification block, and the compliance constraint | MVP | Same block, and ours adds the market statement, which is the public face of `0.12` and which no competitor publishes |
| skin.club | About block with H3 **"Provably Fair"** inside a marketing section | **DIFFERENT** | Design principle 1 | MVP | Fairness is a page with a working verifier, `1.2`, not a paragraph in an About section |
| Key-Drop | Provably fair page **behind login** | **LEAVE** | `research.md` section 5b, design principle 1 | MVP | `1.2` opens and explains before it asks for a seed, and `7.1` carries a full proof into a stranger's browser |
| Own research | The `0.9` template: last updated date, **plain-language summary above the document**, the document, version history | **TAKE** | `0.9` in `sitemap.md`, and `0.14` section 6 which requires a version history for the algorithm | MVP | No competitor versions its policies visibly. A scheme or a policy that changes silently invalidates everything decided under the old one |
| Refero, WhatsApp | Two column help article: left navigation, single column content, platform tabs | **TAKE** | `0.10` | MVP | The craft floor. Ours has one language, so the tab axis is spent on something else or not at all |
| Refero, Ableton | FAQ accordion below the substance rather than instead of it | **TAKE** | `0.13` | MVP | Accordion for the tail, real content above it |

---

## 9. T8 Utility and system, reduced pass

**Node:** `0.3` System pages: 404, 500, 503.
**Competitors opened live:** skin.club 404, **and a second one found by accident**, Key-Drop.
**Refero:** DocuSign `ff8eedb0`, GoFundMe `079f6138`, Zapier `c5fa8f08`, Intercom `3285f0f6`, Weekrise `7c211add`, Washington Post `6f7999d0`.

| Source | Block | Verdict | Traces to | Scope | Where we are better |
|---|---|---|---|---|---|
| skin.club | 404 with correct HTTP status, one error line, one marketing sentence, **no search and no route out of the body** | **LEAVE** | `0.3`: never a dead end | MVP | The only navigation is the footer. Ours carries search and quick links in the body, which is the difference between an answer and a wall |
| Key-Drop | **HTTP 404 with the home page rendered in the body**: home title, home ticker, no H1, no error message anywhere | **LEAVE, and it is the inverse of a soft 404** | `0.3`, and `0.13` indexation | MVP | A person sees the home page and never learns the URL was wrong. A crawler sees 404 and drops it. **Both readers are misled by the same response**, which is worse than either failure alone |
| Refero, DocuSign | Search field plus two help panels plus full navigation plus footer | **TAKE** | `0.3` | MVP | The fullest recovery on the list |
| Refero, GoFundMe and Zapier | Prominent search, or one clear "back to safety" action | **TAKE** | `0.3` | MVP | Ours takes both: search **and** quick links, because a 404 has two kinds of arrival |
| Refero, Weekrise | 404 with **no interactive controls and no navigation at all** | **LEAVE** | `0.3` | MVP | Named here as the floor of the range, so that "minimal" is not confused with "clean" |
| Own research | 500 as a **backend-independent template**, 503 with `Retry-After` | **TAKE** | `0.3`, and design principle 5, speed is trust | MVP | An error page that needs the broken backend to render is not an error page |

---

## 10. The rarity ladder, walked

**Owed by this stage before step 5**, because `0.6` cannot be specified without it. Walked live on 12 August 2026 on two Hellcase case pages, `/open/ironbound` and `/open/warsteel`, by reading the computed background colour of every rarity chip on the page. Proof: `research/screens/blocks/rarity-warsteel.jpeg`.

| Observed | Chips on the two pages | Note |
|---|---|---|
| `#b0c3d9` | 2 | The palest tier |
| `#5e98d9` | 5 | |
| `#4b69ff` | 20 and 17 | The most common tier on both cases |
| `#8847ff` | 5 and 4 | |
| `#d32ce6` | 16 and 3 | |
| `#eb4b4b` | 10 and 11 | |
| `#f7b62d` | 16, **only on the case that contains knives and gloves** | The top tier appears only where a knife tier exists |

**Seven tiers, and the seventh is conditional on the case.** Transparent chips also appear, 50 and 52 of them, on the wear-variant list rather than on the drop table.

**One claim is deliberately not made.** Six of these values look like the CS2 client's own rarity palette, which would mean the ladder is the game's rather than any platform's, and that we may not restyle it freely because the player already reads it without a legend. **That reading is model memory and is `[?]` until a Valve or Steam page is opened and the values are compared.** The check is one page and it belongs to whoever specifies `0.6`.

**What is already usable without that check:** seven distinct chips exist, one of them is conditional on case contents, and `0.6` needs a rarity slot with seven values rather than a colour decision. **Wear grade is a separate axis**, printed as Factory New, Minimal Wear, Field-Tested and Battle-Scarred on skin.club and as FN, MW, FT, BS on Hellcase, with StatTrak as a further flag. `0.6` therefore carries rarity, wear and StatTrak as three fields, not one.

---

## 11. What the bank changed in nodes already written

**Three, and they are recorded rather than silently applied.**

1. **`0.8` gains a pause control.** Key-Drop's ticker has one and ours did not. It is also the reduced-motion answer, so one control serves two parents.
2. **`0.6` gains a third field.** Rarity, wear and StatTrak are three axes, not one rarity slot.
3. **`5.1` or `5.3` may need a holding deadline.** Hellcase converts an unwithdrawn item to balance after thirty days. Whether we carry any such rule is a product decision and is `[?]`, but if we do, `G5` requires it stated before entry rather than in an FAQ.

**And two carriers were built before this bank existed**, `0.1` and `0.2`, because the pack orders the steps that way. If the bank shows a block those carriers lack, that is a finding for the step 8 audit, not a quiet edit.

---

## 12. The empty column test

The pack says that if "where we are better" is blank on every row, the bank has collected somebody else's median and should say so. **It is filled on every TAKE and every DIFFERENT row, and the reason is that the As-Is barriers did most of the work:** `D1`, `D2`, `D3`, `D4`, `C1` to `C5` and `G1` to `G6` each name something the category does not do, and each one turned out to be visible on a live page today.

**The single most telling block in the whole bank is Hellcase's keyboard row: SELL bound to S, REPEAT bound to R.** One key to liquidate what you won and one key to spend again, printed on the screen as a convenience. Nothing in this bank required more argument to reject, and nothing states the difference between the two products more plainly.
