# Baseline: daddyskins.com, walked and recorded

**Date of the walk:** 11 August 2026. **Method:** live browser, Playwright, public and pre-login pages only. No account was used and no login was performed at any point.
**Proof:** `research/screens/baseline/walk_*.png`, five captures named in the sections that use them.
**Why this file exists:** `docs/decisions.md` D-04 lists seven things as inherited from the baseline and not one of them was written down anywhere in this repository. D-18 records the finding and orders this walk before step 1 of stage 03a. Six older screenshots are not a page inventory.

**What this file is.** A record of what the baseline does today, at the level stage 03a needs: what pages exist, how they are reached, what is on the ones that matter, and what colours the interface is built from.

**What this file is not.** A design brief, a critique, or a target. The course rule holds and outranks the resemblance target: a reference is an input, never an output. Where the inherited structure loses to research, research wins and the divergence is named in the IA node.

**The limit of the whole document, stated once.** Everything here is the pre-login product. Deposit, withdrawal, the balance widget, the opening animation, the account area and the responsible play tooling if any exists are behind a login and are `[?]` in this file. They stay `[?]` until an owner decides how to source them, because the project rule permits no other answer.

---

## 1. Page inventory

Collected from every internal link on the home page, then confirmed against the footer and the catalogue.

### Round 1 surfaces, as they exist on the baseline

| Our round 1 surface | Baseline route | State on 11 Aug 2026 |
|---|---|---|
| Home | `/en/` | Exists |
| Case opening | `/en/cases` and `/en/case/<slug>` | Exists, and it is **two nodes, not one**: a catalogue and a case detail page |
| Registration and account | `/en/login`, public profile at `/en/profile/<id>` | Sign-in surface exists. The account area itself is `[?]`, behind login |
| Deposit | `[?]` | No pre-login route found |
| Withdrawal to Steam | `[?]` | No pre-login route found |
| Provably fair | `/en/provably-fair` | **Exists and redirects to `/en/login?redirect=%2Fen%2Fprovably-fair`.** Verified live in this session, screenshot `walk_pf_redirects_to_login_1440.png` |
| Age gate and geo block | **No route** | Does not exist as a screen. See section 6 |
| Responsible play | **No route** | Does not exist at all. See section 6 |

### LATER surfaces, present on the baseline today

`/en/case-battles` and `/en/case-battles/create`, `/en/gunfights` and `/en/gunfights/create`, `/en/upgrade`, `/en/exchange`, `/en/giveaways`, `/en/events`, `/en/race`, `/en/rewards`, `/en/top-wins`, `/en/gift-cards`, `/en/affiliate-program`, `/king-of-the-pick`, `/blog/`.

### Service and policy pages

`/en/faq`, `/en/support`, `/en/contacts`, `/en/terms`, `/en/privacy-policy`, `/en/cookie-policy`, `/en/refund-policy`, `/en/marketing-assets`.

### Volume

**239 distinct case slugs** on `/en/cases`, counted by deduplicated href. Risk labels across them: High 43, Medium 162, Low 29, and 5 tiles carrying no label in the text layer. Visible case prices in the same pass ranged from 0.53 to 161.36 coins. This is the number decision `D-D` sets a ceiling against: the catalogue that becomes "smaller and backed rather than larger and unbacked" is starting from 239.

---

## 2. Navigation model

Three carriers, and they do not overlap.

### The left icon rail

`aside.main-sidebar`, **70px wide**, fixed, full height, collapsible by a toggle button in the header. Nine destinations, in this order:

1. Cases, `/en/cases`
2. Case Battles, `/en/case-battles`
3. Gunfights, `/en/gunfights`
4. Upgrade, `/en/upgrade`
5. Giveaways, `/en/giveaways`
6. Rewards Hub, `/en/rewards`
7. Top wins, `/en/top-wins`
8. Partnership, a parent with one child, Affiliate Program at `/en/affiliate-program`
9. Exchange, `/en/exchange`

Above them sits the logo, and a promotional event tile. Two items carry a status marker: a flame on Case Battles and a beta mark on Giveaways.

**The finding that matters most in this document.** Of the nine rail destinations, **exactly one is in our round 1**. The other eight are all LATER. Inheriting this rail as drawn would ship a round 1 whose primary navigation is eight-ninths empty. This is the first named divergence the IA has to carry, and it is a structural one, not a taste one.

### The header

Fixed, full width, about 66px tall. Left to right at 1440px, pre-login:

- Logo, `x=5`
- Rail toggle button, `.sidebar-toggler`, `x=51`
- `.user-panel-left`: a race pot link reading "13.5K Races", pointing at `/en/race`, `x=94`
- `.user-panel-right`, right aligned at `x=1174`: the Sign in button, a pink pill, and a language switcher offering nine languages, en de 中文 fr pl tr pt es ru
- Sound mute toggle, `x=1385`

The header is where money and account live, and pre-login there is no balance widget at all. Its slot is occupied by the race pot. What replaces or joins it after login is `[?]`.

**Nine languages.** Our project is locked to one, English, by D-02. That is a deliberate divergence from the baseline and it is already recorded, but the header composition inherits one fewer control because of it.

### The footer

Thirteen links: Support, Partnership, Contacts and Corporate Information, FAQ, **Provably Fair**, Counter-Strike Guides, Terms of use, Privacy Policy, Cookie Policy, Refund Policy, Gift cards, Marketing Assets, CS2 Pickems.

No responsible play link. No age statement. See section 6.

### Mobile, at 390px

Screenshot `walk_home_390.png`. The left rail is **removed entirely** and replaced by a hamburger at the top left. The header keeps three things: the hamburger, the race pot, and the Sign in pill. The sound toggle is dropped. The drop ticker persists with fewer items. Content cards go single column. There is no bottom tab bar, so on mobile the nine rail destinations are all one tap behind a drawer.

---

## 3. The live drop ticker

`div.drops-live-feed`, **120px tall**, sitting directly under the header and above the hero on every page walked, not only home. Its bottom edge is a 1px line in the accent pink.

- 26 item tiles visible at 1440px, each 92px wide, moving continuously with enter and move transitions
- Each tile carries: the source mode as a label, for example "Case Battle", the weapon name, and the skin name
- **Every tile is a link to the winner's public profile**, `/en/profile/<id>`. The ticker is not decoration, it is a social-proof surface with a click-through destination
- Rarity is expressed as a background tint on the tile

The bot-name problem recorded in `competitors.md:146` and `research.md:151` was not visible in the tiles sampled during this walk. That is not evidence it is gone: the ticker is live and a single sample proves nothing about its distribution. `[?]`

---

## 4. Page composition, the screens round 1 needs

### Home, `/en/`

Screenshot `walk_home_1440.png`. Top to bottom: header, drop ticker, a full-width hero banner for the current event carrying a countdown in days, hours, minutes and seconds and a single CTA, then an h1 reading "CSGO & CS2 CASE OPENING SITE", then a row of four game-mode cards, each with an icon, a title, one line of copy and a button: Cases, Case Battles, Gunfights, Upgrade. Below that the page continues into further promotional rows.

The four-card row is the primary entry to the modes and it duplicates four of the nine rail destinations.

### Case catalogue, `/en/cases`

Screenshot `walk_cases_1440.png`. Composition:

- A breadcrumb row: a Back control on the left, a Home / Cases trail on the right
- h1, "All CSGO (CS2) Cases In One Place"
- A horizontal category bar with an overflow control, a search icon and a filter icon. Categories: Daily, Daddy's Featured, CS2 Gem, Quality, Community, the ballers, lady luck, The Real MVP, Safe Zone, Old School, The Weapons, Classic, Harvest
- **A Daily Cases block**, which is the baseline's version of the daily free case. It is a five tier ladder, Silver, Nova, Guardian, Legend, Elite, with a **wager remaining counter reading 0.00 / 5.00**, a countdown to the next reset, shortcuts into the four game modes, and a CTA reading "Available 0 case(s)"
- Then category rows of case tiles

**A case tile carries:** item count, case name, a **risk label** of High-risk, Medium-risk or Low-risk, and the price in coins.

**Direct consequence for our backlog row I2.** The daily free case was carried into MVP with no parent in the three legal classes and with an explicit risk printed in its row: that it repeats daily the impression that opening is free. The baseline has already solved that exact problem, and not by making the case free. It gates the daily reward behind a **wager requirement** and presents it as a tier ladder. That is an inherited answer to an open risk and it belongs in front of the founder rather than inside a design decision.

### Case detail, `/en/case/<slug>`

Screenshots `walk_case_detail_1440.png` and `walk_case_droptable_1440.png`. Composition, top to bottom:

- Breadcrumb, Home / Cases / case name
- A "How to video" link
- h1 with the case name, and a subtitle
- The case artwork, centred
- Left panel, "Cases to open:" as five hexagon slots for multi-open, plus a speed control
- Right panel, a like count with a thumb icon, and a **risk meter**: the words "Medium-risk" beside three skull icons, two filled and one empty
- **Pre-login state:** the open control is replaced by the line "You must log in to be able to Open cases and get your winnings chance" and a Sign in button
- An explainer box, "Skin prices", stating that chances are tied to prices, that prices in a case are fixed, and that if the market price differs significantly the skin can be exchanged on the exchange page "where all the current odds are listed"
- A warning line, "Before Opening Case", about Steam trade settings
- A "Best drops" row of recent wins from this case with their coin values
- **"Case contains"**, a four column grid of item cards

**Each item card in the drop table carries, pre-login and without an account:**

- weapon name, skin name, and the wear grade in brackets, FN, MW or FT
- the item image
- the price in coins
- **the drop chance as a percentage**, down to 0.01 and in one observed case 0.025
- **the ticket range**, for example "1 - 10", "11 - 20", "21 - 30", which is the roll interval the provably fair mechanism resolves against

50 percentages were present in the text layer of the single case walked.

**This changes what one of our MVP rows is actually worth.** The To-Be backlog row D2, published chance and current value per item, is described in our map as one of two capabilities carrying the answer to barrier `B7-2` at launch. The baseline already publishes both, pre-login, per item, with the roll interval beside them. D2 is therefore **not a new capability, it is an inherited one**, and the real distance between the baseline and our map lies in the rows the baseline does not have: D3 the observed rate counter, D4 the published tested RTP and expected value at this entry cost, and a provably fair page a logged-out person can actually open.

### Sign in, `/en/login`

Screenshot `walk_pf_redirects_to_login_1440.png`, which is this page reached by the provably fair redirect. Composition: logo, h1 "Sign In", the line "Please, sign in first", a single Sign in button, and "Don't have an account? Sign up". Below the fold sits a statistics band of four figures, read on 11 August 2026 as 362 977 721 rising to 362 977 749 during the session, 3 327 927, 1 862 804, and 679 rising to 681. The labels for these four are icons only and their meaning is `[?]`.

The Sign in control is a `button`, not a link, and its destination is resolved in script. Where it leads is `[?]`: following it would begin a login, which this walk does not do.

---

## 5. Colour, extracted from computed styles

**The baseline has no token layer.** A scan of every rule matching `:root`, `html` or `body` in its stylesheets returned **zero CSS custom properties**. Every value below is a literal in a rule.

### Ground and surfaces

| Role | Value | Where read |
|---|---|---|
| Page ground | `#060A1E` | `body` background |
| Ticker plate | `#020C17` | `.drops-live-feed` background |
| Card, primary | `#0F0E2B` | most frequent panel background, 36 elements |
| Card, secondary | `#090827` | second most frequent, 33 elements |
| Panel, raised | `#223660` | 12 elements |
| Panel, violet | `#180A35` | 6 elements |

### Accents

| Role | Value | Where read |
|---|---|---|
| Primary accent, hot pink | `#E94D8B` | `.rose-button` background, ticker bottom border, 257 text elements, 32 borders |
| Secondary accent, blue | `#65A3FF` | 26 backgrounds, 40 text elements |
| Tertiary accent, yellow | `#FADA62` | 9 backgrounds, 126 text elements. This is the coin and price colour |
| Success green | `#33CC66`, and `#2BA720` at 40 percent as a fill | 12 text elements |
| Violet | `#7E2DC8` | 11 text elements |

### Text

| Role | Value |
|---|---|
| Body text | `#9F9F9F`, 940 elements, the dominant text colour |
| Body text, second | `#A5A5A5`, 174 elements |
| High emphasis | `#FFFFFF`, 221 elements |
| Muted | `#CECED4`, `#727B8C`, `#9E9DB1` |

### Type and shape

- Family: **Roboto**, with a `sans-serif` fallback. One family across the interface, no display face observed
- Primary button: background `#E94D8B`, text `#FFFFFF`, weight 700, size 14px, **border radius 25px**, a full pill
- The rail is 70px, the header about 66px, the ticker 120px

### What was not extracted

The **rarity ladder**. Rarity renders as a per-card background gradient rather than as a flat colour on the element that holds the percentage, so a value-level ladder was not read in this pass. It is visible in `walk_case_droptable_1440.png` and it is `[?]` at value level. Owner: stage 06, which is the stage that needs it. Naming the owner here means the next stage does not rediscover the gap.

---

## 6. Compliance, as it exists today

This section is short because the subject is.

### Age

There is **no age gate**. No interstitial, no birth date field, no checkbox, nothing on the sign-in page. The entire age control on the product is one FAQ answer, quoted verbatim from `/en/faq` as read on 11 August 2026, screenshot `walk_faq_age_1440.png`:

> "WHO CAN PLAY ON DADDYSKINS? Only people who are at least the age of 18+ are allowed to play on our site. In addition, some countries may have restrictions to accessing sites like ours, we strongly recommend you follow those government laws, as we cannot always apply technical methods for restricted access."

The word "18" appears exactly twice in the text layer of the sign-in page, and both instances are the weapon Glock-18 in the drop ticker.

This confirms `research.md:171` from June 2026 on a live page today, and it closes part of the evidence hole D-13 recorded. **The reason no user anywhere describes meeting an age gate is that on this product there is nothing to meet.** The hole in the research was not a gap in the mining. It was an accurate reading of a product that has no such screen.

### Geo

The same FAQ sentence is the whole of it, and it contains an explicit admission: "we cannot always apply technical methods for restricted access". Whether any technical geo block exists is `[?]`.

### Responsible play

A search of the FAQ text for responsible play, self exclusion, deposit limit, cool down and gambling returned **zero matches**. There is no responsible play link in the footer and no route anywhere in the inventory.

**Consequence for our round 1.** The responsible play page, restored to round 1 by founder decision on 11 August 2026, and the age gate, are the **only two round 1 surfaces with no baseline to inherit from at all**. Everything else in round 1 has a structure to start from. These two are drawn from the compliance constraint in `CLAUDE.md` and from cited law, or they are not drawn honestly.

---

## 7. What this walk changes, in order of how much it changes

1. **The rail is one-ninth useful in round 1.** Eight of nine destinations are LATER. The navigation model cannot be inherited as drawn without shipping a mostly empty primary navigation. Named divergence, owed an answer at stage 03a step 3.
2. **Case opening is two nodes, not one.** Catalogue and case detail carry different jobs. Round 1 inherits both.
3. **D2 is already built.** Published chance and current value per item, with the roll interval beside them, exist pre-login on the baseline. Our map treats D2 as one of two things carrying the answer to `B7-2` at launch. It is inherited, not added, and the real gap is D3, D4 and an openable provably fair page.
4. **The daily free case has an inherited answer to its own recorded risk.** The baseline gates the daily reward behind a wager requirement and a tier ladder rather than giving it away. Backlog row I2 carries the "opening is free" risk in the open. This is a decision for the founder, not for the IA.
5. **The provably fair page still redirects to login**, verified today. The single highest-leverage fix named in `research.md` has not moved in the two months since it was recorded.
6. **Two round 1 surfaces have no baseline at all**, the age gate and responsible play.
7. **239 distinct cases** is the number `D-D` reduces from.

---

## 8. The palette collision, which nobody recorded

Every documentation page in this repository, seven html files and `_nav.css`, is built on `#E94D8B`, `#65A3FF` and `#FADA62`, with a card ground of `#0A0827`.

Those are the baseline's three accents, exactly, and `#0A0827` is one hex digit from the baseline's `#090827`.

The project's own pages have been running the baseline palette since the structure migration, while `docs/decisions.md` D-03 said the palette was not inherited and stage 06 would derive one from scratch. Nobody wrote that down and nobody noticed.

**This does not decide anything and it is not presented as a decision.** It is recorded because D-18 holds one question open, whether "take the colours" means the exact values or the register carried by our own values, and holds it open specifically until values exist. They now exist, and so does the fact that three of them are already in use here. That is context the answer should have, and it is the kind of fact that becomes invisible the moment it stops being surprising.

---

## Source index

Every row was opened in a live browser on 11 August 2026, pre-login, in one session.

| What | URL | Proof |
|---|---|---|
| Home, page inventory, header, rail, ticker | `https://daddyskins.com/en` | `walk_home_1440.png` |
| Home at 390px, mobile navigation model | `https://daddyskins.com/en` | `walk_home_390.png` |
| Case catalogue, categories, daily ladder, 239 slugs, risk labels | `https://daddyskins.com/en/cases` | `walk_cases_1440.png` |
| Case detail, pre-login state, risk meter, multi-open | `https://daddyskins.com/en/case/premium` | `walk_case_detail_1440.png` |
| Drop table, per item chance and ticket range | `https://daddyskins.com/en/case/premium` | `walk_case_droptable_1440.png` |
| Provably fair redirects to login, sign-in composition, footer | `https://daddyskins.com/en/provably-fair` to `/en/login?redirect=%2Fen%2Fprovably-fair` | `walk_pf_redirects_to_login_1440.png` |
| Age answer, absence of responsible play | `https://daddyskins.com/en/faq` | `walk_faq_age_1440.png` |
| Colour values, type, geometry | computed styles on the pages above | values in section 5 |
