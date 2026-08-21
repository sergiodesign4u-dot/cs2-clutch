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

**Re-walked on 11 August 2026, and the first pass had recorded the link list and almost nothing else.** Screenshot `walk_footer_1440.png`. The correction is kept visible rather than smoothed, because the gap is the useful part: a list of thirteen links read as a complete footer record for three steps, and the footer is four bands.

**Band 1, a statistics strip**, full width, above the footer proper, separated by a 1px accent line. Four counters, each an icon plus a large figure plus a caption:

| Figure | Caption | Read at |
|---|---|---|
| 363 010 503 | CASES OPENED | 20:49 UTC |
| 3 328 108 | UPGRADES | same read |
| 1 862 837 | TOTAL USERS | same read |
| 905 | ONLINE USERS | same read |

**Cases opened increments continuously.** Three reads minutes apart returned 363 010 473, then 363 010 503, then 363 010 551. Whether the increment tracks real opens or is scripted is `[?]` and not decidable from outside. Total users did not move across the three reads.

**Band 2, the main footer, four columns.**

- **Left, brand and help:** the logo, linking to `/en/`. A "NEED HELP?" heading over a **SUPPORT button**, an outlined pill, linking to `/en/support`. A tagline, "You can get your favorite skin at the best prices." Then the legal identification line in small muted text: **"MIXABIT LTD, ΗΕ 470887, Elettherias, 19 Lakatamia, 2312, Nicosia, Cyprus"**. Registered name, Cyprus registrar number, geographic address. No email address is printed anywhere in the footer.
- **PLATFORM:** Partnership `/en/affiliate-program`, Contacts & Corporate Information `/en/contacts`, FAQ `/en/faq`, Provably Fair `/en/provably-fair`, Counter-Strike Guides `https://daddyskins.com/blog/`
- **COMPANY:** Terms of use `/en/terms`, Privacy Policy `/en/privacy-policy`, Cookie Policy `/en/cookie-policy`, Refund Policy `/en/refund-policy`
- **ADDITIONAL:** Gift cards `/en/gift-cards`, Marketing Assets `/en/marketing-assets`, CS2 Pickems `https://daddyskins.com/king-of-the-pick`

Each column heading carries a short accent underline. Thirteen named links, which is what the first pass counted, plus the logo and the support button.

**Band 3, the bottom row.** "DADDYSKINS © 2016-2026. ALL RIGHTS RESERVED" on the left. On the right, three payment and provider marks: **ZEN, Visa, Mastercard**.

**Band 4 is not in the footer but sits against it:** a floating circular support control, headset icon, fixed bottom right above the footer.

**There is no SEO interlinking block anywhere in the footer.**

**And the two absences the first pass did get right, restated because they are the finding:** no responsible play link, no age statement, nowhere in any of the four bands. See section 6.

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

**A case tile carries:** item count, case name, a **risk label** of High-risk, Medium-risk or Low-risk, and the price in coins. **Corrected by the third walk of 21 August 2026, section 10:** the risk label is not words on the tile, it is **three skull pips with a colour per band**, and the words appear in the accessible name and in the filter. The item count is in the accessible name and is not printed on the face of the tile.

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

**Corrected on 18 August 2026 by the second walk. The 11 August reading was wrong on one clause and it is kept here rather than overwritten.**

The original record read: "There is no age gate. No interstitial, no birth date field, **no checkbox, nothing on the sign-in page**." The last clause is false. **Sign in is not a page, it is a modal**, and inside that modal there is a checkbox reading "I'm 18+ and I agree to the Terms and Conditions". Section 9 records it in full. The first walk looked for a sign-in page, and the product does not have one, so the modal and its checkbox were never opened.

**What survives the correction, and it is most of it.** There is still **no age gate**: no interstitial, no birth date field, and nothing between arrival and the case page. What exists is one unchecked checkbox bundled with the terms consent at the moment of sign-in, which is the Hellcase pattern `blocks.md` records and which node `2.1` refused for the reason it gives. The rest of the age control on the product is one FAQ answer, quoted verbatim from `/en/faq` as read on 11 August 2026, screenshot `walk_faq_age_1440.png`:

> "WHO CAN PLAY ON DADDYSKINS? Only people who are at least the age of 18+ are allowed to play on our site. In addition, some countries may have restrictions to accessing sites like ours, we strongly recommend you follow those government laws, as we cannot always apply technical methods for restricted access."

The word "18" appears exactly twice in the text layer of the sign-in page, and both instances are the weapon Glock-18 in the drop ticker.

This confirms `research.md:171` from June 2026 on a live page today, and it closes part of the evidence hole D-13 recorded. **The reason no user anywhere describes meeting an age gate is that on this product there is nothing to meet.** The hole in the research was not a gap in the mining. It was an accurate reading of a product that has no such screen.

### Geo

The same FAQ sentence is the whole of it, and it contains an explicit admission: "we cannot always apply technical methods for restricted access". Whether any technical geo block exists is `[?]`.

### Responsible play

**Corrected on 18 August 2026 by the account capture. The original reading is kept and it was wrong in an instructive way.**

It read: "A search of the FAQ text for responsible play, self exclusion, deposit limit, cool down and gambling returned zero matches. There is no responsible play link in the footer and no route anywhere in the inventory."

**The search was right and the conclusion was wrong. The tool exists.** It is called **TAKE A BREAK**, it does **deposit restriction or full account restriction**, and it is the second row of the `SECURITY` block inside the settings tab of the account. `baseline-account.md` section 7.1, screenshot `acct_settings_full.png`.

**What survives, and it is the part that matters:** there is no responsible play page, and **there is no route to the tool from anywhere**, not the footer, not the rail, not the header, not the home page, all four re-checked on 18 August 2026. It sits under Security beside Logout and an anonymity toggle, which is the vocabulary of account protection rather than of self protection.

**The finding is stronger than the absence would have been.** An absence can be answered with "nobody in the category has it". This cannot: they built it and then filed it where nobody looks.

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

## 9. Second walk, 18 August 2026: the shell, the gates and the pages the first walk did not open

**Why this walk ran.** `CLAUDE.md` gained a rule the same day: every node carries a baseline row, what the live product does, what we keep, what we change and why. Eleven of the twenty six detail-layer nodes cited no baseline at all. Six of those eleven are reachable without an account, so they were walked rather than assumed. **All of it is public. Nothing was logged into.** Widths: 1440. Screenshots in `research/screens/baseline/`, prefix `walk2_`.

### 9.1 Sign in is a modal, and it carries four providers and the age checkbox

Screenshot `walk2_signin_1440.png`. Opened from the Sign in control in the header, on `/en/support`.

| What it is | Recorded |
|---|---|
| **Form** | A **modal**, not a page. It opens over whatever page you are on and the page behind it stays loaded |
| **Providers** | **Four**: Steam, Facebook, X, Google. Not Steam only |
| **Credentials** | **Email and password as well**, with "Forgot password?" and "Sign up new account" |
| **Age and terms** | One checkbox, label verbatim: **"I'm 18+ and I agree to the Terms and Conditions"**. Unchecked on open |
| **Enforcement** | The checkbox has **no `required` attribute** and the four provider buttons are **not disabled** while it is unchecked. Whether the click handler enforces it is `[?]` and was not tested, because testing it means signing in |

**Three things this contradicts in our map, and each is a decision rather than a defect.**

1. `sitemap.md` says "Sign in is a page rather than a dialog because Steam OpenID leaves the site". **The baseline uses a dialog.** Our reason still holds for the Steam arm, which does leave the site; it does not hold for the email arm, which the baseline has and our map does not.
2. Node `2.4` is written around **Steam OpenID only**. The baseline has four providers plus credentials. **Nothing in our backlog asks for the other three**, so adopting them would be a capability with no parent.
3. The age declaration bundled into the sign-in consent is **exactly the Hellcase pattern** `blocks.md` records and node `2.1` refuses: two barriers at once, and it puts the declaration after the person has decided to spend rather than before. **Our divergence is deliberate and it is now measured against the canon rather than against a competitor.**

### 9.2 The case page, signed out: a sign-in wall where the open control is

Screenshots `walk2_case-guest_1440.png`, `walk2_droptable-guest_1440.png`. Page: `/en/case/premium`.

**What a guest sees above the fold:** breadcrumb `HOME / CASES / PREMIUM CASE`, the case name and its collection line, the case artwork, a **"CASES TO OPEN:" multi-open selector of five**, a **like count of 186 with a thumb icon**, and the risk meter as **the words "Medium-risk" beside three skull icons, two filled**.

**What a guest does not see: the price.** Where the open control belongs there is a line, verbatim: **"You must log in to be able to Open cases and get your winnings chance"**, and a Sign in button. **The entry cost of the case is not on the screen at all before login.**

**What a guest does see, and it is the important half:** the **whole drop table**, pre-login, with **fifty published percentages on this case**. Each item card carries: image, **value in coins**, **chance as a percentage**, **ticket range** as `41 - 60`, then `weapon | skin` and the **wear code in parentheses**, `(FN)`, `(MW)`, `(FT)`, `(WW)`. Rarity is carried by the card's tint. Ranges observed on this case run from `0.01%` to `0.2%` in the top segment.

**Consequence for node `0.6`.** Eight of our fifteen fields are the baseline's own field set, in the baseline's own order. What we add is the free-unit count `A2`, the observed rate `D3`, the market price with its as-of `A1`, and the instance receipt `F1`. What we change is the denomination, `C1`. **The card is inherited far more closely than the first walk could show, and that is an argument for it rather than against.**

**And one block of copy worth keeping in view**, verbatim from the same page: "The chances of obtaining skins are tied to their prices, which collectively determine the final price of a case. Therefore, the prices of skins in a case are fixed. If the market price significantly differs, you can exchange the skin for another one on the exchange page, where all the current odds are listed."

### 9.3 The cookie consent, and a correction to this section made the same week

**Corrected on 18 August 2026 by the account capture, `acct_cookie_banner.png`. This section originally read "There is no cookie consent". That is wrong.**

**A cookie banner exists:** a bar across the bottom of the page with an icon, the consent text, links to the Cookie Policy and the Privacy Policy, an **ACCEPT** button and an **X**. Text verbatim: "We use cookies to offer you a better browsing experience, analyze site traffic, personalize content, and serve targeted advertisements... If you continue to use this site, you consent to our use of cookies."

**Why the walk got it wrong, because the mechanism matters more than the error.** The walk ran in a browser profile that had already accepted the banner. The DOM probe was accurate: there genuinely was no cookie element in that document. **"Is there a cookie element in this DOM" and "does this product have a cookie consent" are different questions, and one browser profile cannot answer the second.** Any state remembered per browser or per account has to be captured on a fresh one, and that is now a rule for the next walk rather than a lesson.

**What the banner is, read as a design:** consent is assumed by continued use, there is no reject control, and the X dismisses without a recorded choice. The word "cookie" otherwise appears on the page once, as the footer link.

The policy page itself, `/en/cookie-policy`, is `noindex,nofollow`, carries one H1 and **no H2 at all**, runs about 1,420 words, and states: **"This Cookie Policy is effective from April 11, 2019."**

**Consequence for node `0.4`.** The cookie dialog is one of the surfaces with **no baseline to inherit**, in the same class as the age gate and responsible play. It is drawn from the compliance constraint or it is not drawn honestly.

### 9.4 The legal and support pages are one H1 and a wall

| Page | Robots | Headings | Size | Dated |
|---|---|---|---|---|
| `/en/terms` | `noindex,nofollow` | **1 H1, zero H2, zero H3** | ~7,270 words | "Last updated - 08/01/2025" |
| `/en/cookie-policy` | `noindex,nofollow` | **1 H1, zero H2** | ~1,420 words | "effective from April 11, 2019" |
| `/en/support` | `noindex,nofollow` | 1 H1 | form | none |

**All of them carry a breadcrumb.** All of them are excluded from search entirely.

**Three clauses out of the terms, verbatim, because each one lands on a node.**

- **Age:** "FURTHERMORE, YOU ACKNOWLEDGE AND AGREE THAT THE WEBSITE IS NOT INTENDED FOR USE BY MINORS (INDIVIDUALS UNDER THE AGE OF 18). BY ACCESSING OR USING THE WEBSITE, YOU CONFIRM THAT YOU ARE AT LEAST 18 YEARS OLD..."
- **Gambling:** "Prohibition of gambling. It is forbidden to use daddyskins.com in any way that violates any law or regulation, including those prohibiting illegal gambling... You will not resell the Skins received from daddyskins.com on third-party marketplaces or otherwise trade such Skins for anything of value."
- **Geography:** "The Company commits to providing services exclusively to residents of countries where such activities are not prohibited by local laws and regulations."

**Consequence for `D-23` and node `0.12`.** The live product's entire market control is that one sentence, and it is **a blocklist enforced by the user's own declaration with no list published**. Our allowlist closed by default is the largest single divergence from the canon in the whole project, and it is a divergence toward the regulator rather than away from it.

**Consequence for `0.9`.** Zero H2 in a 7,270 word contract is the defect our node exists to fix, and it is now measured rather than asserted.

### 9.5 Support cannot be reached without an account

Screenshot `walk2_support_1440.png`. `/en/support` renders a ticket form with three fields: a **Subject** dropdown defaulting to "Deposits", **Email**, and **Message**. Above it a block headed "ATTENTION!!!" pushes the FAQ articles first.

**The submit button reads SIGN IN.** A guest can fill the form and cannot send it.

**Consequence for node `0.10` and for barrier `B8-3`.** A person locked out of their account cannot use the product's own support channel to say so. This is the strongest single argument in the repository for the appeal route `G4` and its published deadline, and it is now a walked fact rather than an inference.

### 9.6 The 404 drops the entire shell

Screenshot `walk2_404_1440.png`. A probe URL returns **HTTP 404** with a real page: illustration, "PAGE NOT FOUND", one line, one control, "GO BACK HOME".

**No rail, no header, no ticker, no footer.** The only navigation on the page is the logo and the one button.

**Consequence for node `0.3`.** The status code is right and the page exists, which is more than several competitors manage. The shell removal is a decision to inherit or refuse deliberately: a person who mistypes a URL loses every route in the product except home.

### 9.7 The footer, re-read, and what is still not in it

Screenshot `walk2_footer_1440.png`. Statistics strip above it: **363,775,507 cases opened · 3,330,137 upgrades · 1,863,286 total users · 659 online users.**

Four columns: **NEED HELP?** with a Support button and the identification line "MIXABIT LTD, HE 470887, Elettherias, 19 Lakatamia, 2312, Nicosia, Cyprus" · **PLATFORM**: Partnership, Contacts & Corporate Information, FAQ, Provably Fair, Counter-Strike Guides · **COMPANY**: Terms of use, Privacy Policy, Cookie Policy, Refund Policy · **ADDITIONAL**: Gift cards, Marketing Assets, CS2 Pickems. Copyright "DADDYSKINS © 2016-2026". Payment marks: **ZEN, VISA, Mastercard**.

**Searched for and absent from the entire home page, header, footer and rail: any "18+" mark, any responsible play route, any licence statement.** This re-confirms section 6 on a second reading a week later.

### 9.8 What the second walk did not reach

| Node | Why | Owner |
|---|---|---|
| `5.1` account and inventory, `5.3` withdrawal, `2.7` identity | Behind sign-in | The founder's capture, shot list P1 |
| `0.5` toasts | Needs an action that produces one | Same |
| `0.11` published numbers | The register's figures live on signed-in surfaces | Same |
| Whether the 18+ checkbox is enforced | Testing it means signing in | `[?]`, and it stays `[?]` |

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
| Footer re-walk: statistics strip, four columns, identification line, payment marks | `https://daddyskins.com/en` | `walk_footer_1440.png` |
| Colour values, type, geometry | computed styles on the pages above | values in section 5 |
| **Second walk, 18 August 2026.** Home on arrival, no cookie dialog | `https://daddyskins.com/en` | `walk2_arrival_1440.png` |
| Footer, statistics strip, four columns, payment marks | `https://daddyskins.com/en` | `walk2_footer_1440.png` |
| Case page signed out: sign-in wall, risk meter, like count, multi-open | `https://daddyskins.com/en/case/premium` | `walk2_case-guest_1440.png` |
| Drop table signed out: chance, value, ticket range, wear per item | `https://daddyskins.com/en/case/premium` | `walk2_droptable-guest_1440.png` |
| Sign-in modal: four providers, email arm, the 18+ checkbox | opened from the header control | `walk2_signin_1440.png` |
| Support: ticket form whose submit is Sign in | `https://daddyskins.com/en/support` | `walk2_support_1440.png` |
| 404 with no shell, HTTP 404 | probe URL under `https://daddyskins.com/en/` | `walk2_404_1440.png` |
| Terms, cookie policy: robots, heading counts, dates, three clauses | `/en/terms`, `/en/cookie-policy` | values in section 9.4 |

---

## 10. Third walk, 21 August 2026: the catalogue's category bar and its filter panel

**Why this walk happened.** Stage 04 drew node `3.1` with an empty category bar and no filter panel, on the grounds that `catalogue.md` records the category list as `[?]` and refuses both a sort control and a risk-band filter. **The founder pointed at the live page.** Public, pre-login, walked with Playwright at 1440 and 390 on 21 August 2026. Shots: `walk3_cases_1440.png`, `walk3_cases_top_1440.png`, `walk3_cases_rows_1440.png`, `walk3_cases_filter_1440.png`, `walk3_cases_390.png`.

### 10.1 The shelf is not one grid. It is a run of named category sections

`H1` is "All CSGO (CS2) Cases In One Place", and under it **every category is its own section with its own `H2` and its own row of tiles**. Thirteen of them, in this order, read from the live headings: **Daily, Daddy's Featured, CS2 Gem, Quality, Community, the ballers, lady luck, The Real MVP, Safe Zone, Old School, The Weapons, Classic, Harvest.** Each `H2` carries a subtitle: "Claim Your Daily Rewards for Staying Active!", "Best CS2 Cases rated by DaddySkins".

**The category list has been written down since 11 August 2026 and this walk confirms it unchanged.** It is not `[?]` anywhere in this repository except in `catalogue.md`, which is a contradiction between two files rather than a missing input.

### 10.2 The category bar is a jump list over those sections, and it sticks

A bar under the `H1`, labelled **CATEGORIES**, then the category names as chips, then an overflow control `...`, then **a search icon and a filter icon at the right end of the same bar**. It **sticks to the top of the viewport on scroll** and the sticky version drops the CATEGORIES label and shows the full thirteen.

**At 390px the bar survives and its chips do not.** It renders as `CATEGORIES ...` plus the two icons: the carrier holds, the items go into the overflow, and the two controls that do the real narrowing stay visible at every width.

### 10.3 The filter panel, and it is the thing this walk was for

The filter icon opens a **right-hand drawer**, headed **FILTER** with **RESET ALL** at the top right and **CLOSE** pinned at the bottom. It holds five controls, in this order:

| Control | Form | Detail |
|---|---|---|
| **Case name** | Search field with a magnifier | Free text |
| **Price amount** | **A dual-handle range slider, and under it two numeric steppers** | Minimum and maximum, each with a text value and a minus and plus control. Read `0` and `1111` on the walk |
| **Risk Level** | **Three checkboxes, not a slider** | **Low, Medium, High**, each with its three skull pips in the band's colour. Multi select |
| **Case Type** | Select, default **All** | Values not enumerated on the walk, `[?]` |
| **Order By** | Select labelled **Sort By**, default **Date (Newest First)** | Other values not enumerated on the walk, `[?]` |

**A sixth group exists and the pre-login walk did not see it.** Founder capture, 21 August 2026, of the same panel signed in: between Risk Level and Case Type there is a group headed **Additional**, holding two checkboxes, **Liked** and **Sufficient Funds to open**. `CLAUDE.md` puts a dated founder capture of our own signed-in surface in the same class as a walked page, and this is that.

**Both rows read an account, which is why the walk could not have found them.** Liked reads the favourite the person has set, `D-24`; sufficient funds reads the balance. **A guest meets neither**, and that is a fact about the live product rather than a design choice we are making.

**The walk that missed them was not wrong, it was pre-login, and this is exactly the hole section 9.8 already names.** The correction is recorded here rather than by editing the table above, because the table is what a public walk returns and that is still true.

**Two facts about that panel matter more than its layout.**

**The risk band is filterable on the live product and it is computed.** Three named values, the same three `sitemap.md` carries, rendered on every tile as three coloured pips and offered as a filter with the pips beside each label. **What we do not have is the thresholds**, and this walk moves that from "nothing in this repository says how it is computed" to **a question of fact to the live platform**, in the same class as `D-B`.

**The live product sorts.** `catalogue.md` refuses a sort control on the grounds that the competitor bank has no T2 row for one. **The bank is competitors. This is the product.**

### 10.4 What the founder's reference adds on top of this

Founder capture, 21 August 2026, **source `[?]`: it is not daddyskins and this session did not open the site it came from**, so nothing in it is a fact about a named competitor. Three ideas in it that the baseline's own panel does not have:

- **The filters live in the bar rather than behind a drawer.** The price control expands as a second row under the category bar, in place.
- **A named continuous risk slider**, labelled ADRENALINE, drawn as a gradient rather than as three checkboxes.
- **A "sufficient balance to open" toggle**, which filters the shelf to what the account can afford right now. **Corrected 21 August 2026: this one is not only in the reference. It is on our own baseline**, as `Sufficient Funds to open` in the Additional group above, and the reference merely puts it in the bar instead of in a drawer.

**The third one is not a neutral convenience and this file says so rather than passing it on quietly, and being inherited does not make it one.** A control that answers "what can I afford right now" sits one step from "top up to see the rest", and `CLAUDE.md` binds this stage: a limit never acquires completion mechanics, and where money is about to be spent the cost never hides inside excitement. It is the founder's call and it belongs in front of him with that cost printed.
