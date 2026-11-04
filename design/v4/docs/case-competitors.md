# Case page competitors: case detail and case opening

**Date:** 4 November 2026
**Method:** Playwright (Node library, Chrome channel, headless; one headed retry for the blocked site), logged out, public pages only. No account, no registration, nothing personal entered. Viewports 1440x900 and 390x844 (iPhone 13 profile). Demo spins were recorded as video (25 fps) and as timed screenshots; durations come from frame-to-frame motion measured with ffmpeg on the reel area, cross-checked against the timed screenshots. Every fact below comes from a page opened in this session; what could not be seen is `[?]`.
**Screens:** `design/v4/screens/case/` (file names listed per site).

**Reached (8 + 1 supplementary):** the baseline, hellcase.com, key-drop.com, skin.club, clash.gg, datdrop.com, farmskins.com (site 8), cases.gg (supplementary, walked only because it offers a logged-out demo spin; it sells physical-goods mystery boxes, not CS2 skins).
**Blocked:** csgoroll.com. Headless and headed Chrome both got a Cloudflare-style page "Access Blocked. Your activity has been flagged as suspicious", HTTP 403, Origin Country UA. Proof: `csgoroll_blocked_1440_4nov.jpg`. Not retried further.
**Also probed, not walked:** csgo-skins.com (stuck on "Just a moment..." challenge), g4skins.com (case page reached, no demo control; buttons "LOG IN VIA STEAM +18", "CHECK ODDS"), csgocases.com (home only). farmskins.com was kept as site 8 because it is a CS2 skin site with a distinct staged hero; none of the five candidates showed a logged-out demo on its CS2 case page.

**Demo open without an account:** only clash.gg ("Demo") and cases.gg ("Demo Spin"). DatDrop has a "Case opening simulator" page, but its own FAQ says "Do I need an account to use the simulator? Yes" and the control reads "SIGN IN TO ACTIVATE". The baseline, hellcase, key-drop, skin.club and farmskins show no demo to a guest. So the opening animation was seen on two sites only; everything said about animation elsewhere is `[?]`.

**Currency note:** key-drop rendered prices in UAH for this visitor (geo from a Ukrainian IP); the other sites used their own coin or USD.

---

## 1. The baseline

**Opened:** the baseline's case page, 4 Nov 2026. Destroyer Case, listed at 10.31 on the cases page, "Medium-risk".
**Screens:** four, captured 4 Nov 2026 and not published: the full page with the signup modal closed, two at 390, and what SIGN IN opens.

**Composition, desktop, top to bottom:** left icon rail; header (race chip with timer, SIGN IN, sound icon); live drop ticker of item tiles; breadcrumb HOME / CASES / DESTROYER CASE at right; "HOW TO VIDEO" link; title "DESTROYER CASE" and subtitle "Destroyer Case Skins Collection"; the stage panel; a yellow-bordered "SKIN PRICES" note explaining fixed skin prices and pointing to the exchange page; "Before Opening Case" note about Steam trade settings; BEST DROPS strip; CASE CONTAINS grid; "Last updated - 2026-10-21 22:17"; a stats band (375 066 728 cases opened, 3 383 999 upgrades, 1 909 919 total users, 947 online); footer. On arrival a "+3 FREE CASES" signup modal and a cookie banner cover the page.
**At 390:** title, HOW TO VIDEO, hex count selector, likes and risk, the login message and SIGN IN fill the first screen. No case art was visible on the first screen at 390 (it is visible at 1440). The drop grid becomes one full-width card per row.

**Hero / case stage:** a dark panel with a faint background pattern; the case art is small, centred at the top edge of the panel. No light rig, particles or 3D seen. The case price is not shown anywhere on the case page for a guest (the string "10.31" does not occur in the page text).
**Commit block:** "CASES TO OPEN:" with five hexagons (1 to 5, first filled gold) and a white bar control beside them whose purpose is `[?]` (possibly a fast toggle). Right side: like count "34" with a thumbs-up and "Medium-risk" with three skull icons, two lit. A guest sees "You must log in to be able to Open cases and get your winnings chance" and a pink SIGN IN. SIGN IN opens a modal: social buttons (Steam, Discord, X, Google), one checkbox "I'm 18+ and I agree to the Terms and Conditions", email and password. No demo.
**Opening animation:** not seen (no guest demo). `[?]`
**Drop table:** 4 columns at 1440. Above each card: weapon | skin name, ST tag where StatTrak, wear in brackets. Card: item image left, price in coin top right, chance % and ticket range (for example 1 - 154 out of 100000) with small icons, bottom edge and gradient tinted by rarity. Sorted by price, highest first. Hover: no change noticed `[?]`.
**Trust signals:** chance and ticket range on every card; "Last updated" timestamp; risk label with skulls; likes. Provably Fair appears only as a footer link. No RTP or EV figure.
**Other blocks:** HOW TO VIDEO link, skin price explainer, trade-settings warning, BEST DROPS (price plus a team or avatar badge, no time or user name), stats band. No related cases, no SEO text block seen.
**Wow:** little; the stage is the weakest part of the page. The risk skulls and the like count are the only personality.
**Cheap / cluttered:** signup modal on arrival, empty stage for a guest, no price on the case page, two explanatory notes sitting where the reveal should be.

---

## 2. hellcase.com

**Opened:** https://hellcase.com/open/clutch (Clutch Case, $4.40 with $5.00 struck through) and https://hellcase.com/open/riptide-knives (knife case, $139.92, $159.00 struck through), 4 Nov 2026.
**Screens:** `hellcase_case_1440_4nov.jpg`, `hellcase_case_390_4nov.jpg`, `hellcase_case_390b_4nov.jpg`, `hellcase_guest_open_4nov.jpg`, `hellcase_knifecase_1440_4nov.jpg`.

**Composition, desktop:** header with nav row (Cases, Upgrade, Event NEW, Case Battle, Contract); a vertical live drop column on the left the full page height; Back and title "The Clutch Case CS2 Collection"; icon buttons right (PROVABLY FAIR, favourite, copy link, share, mute sound); the stage; commit row; a row of keyboard hints; "Last 7 days top drop"; "Case contains"; four accordions (Case Details, Clutch Top Drop, Similar Hellcase Unique Cases, Clutch FAQ); footer. A "Track price for this case / We'll alert you when this case goes on sale" toast with LATER / SUBSCRIBE sits over the header.
**At 390:** title bar, the case scene, count 1 to 5 (10 not on the first screen), full-width green OPEN $4.40, struck $5.00, Fast mode; top drop strip starts; 2-column drop grid; bottom bar.

**Hero / case stage:** the only staged environment in the set. The case sits on a table in a rendered room under hanging lamps, a SALE tag on it. The knife case uses a different scene (a warehouse aisle with the case glowing green), so the backdrop is per case.
**Commit block:** count buttons 1, 2, 3, 4, 5, 10; a large green "OPEN $4.40" that a guest also sees; old price struck in red; "Fast mode" toggle. Under it a hint row: GET Enter, QUICK STOP Space, SELL S, REPEAT R (keyboard shortcuts for the outcome). A guest pressing OPEN gets a "Welcome to hellcase" modal: Sign in with Steam, Google, Telegram, and two checkboxes (terms, legal age) that rendered already checked in the screenshot.
**Opening animation:** not seen. The hint row implies a get / quick stop / sell / repeat outcome flow `[?]`.
**Drop table:** 6 columns. Card: "Drops: 0.106%" top left, an info icon, item image, family and name; a coloured top rule by rarity (gold for gloves). No price on the card face. Gloves first, then guns.
**Trust signals:** PROVABLY FAIR button in the case header; drop % on cards. No RTP, EV or risk meter.
**Other blocks:** "Last 7 days top drop": gold cards with price, multiplier against case price (x32.0, x30.6), wear, one card showing user name and timestamp. Case Details accordion holds a long SEO article (description, history and origin, how to get it, which gloves, odds). Similar cases accordion.
**Wow:** the scene stage and the multiplier on top drops ("x32.0") which makes a win legible as a ratio, not just a price. Keyboard shortcuts signal a fast power-user loop.
**Cheap / dishonest:** permanent strike-through "sale" price; price-alert toast on arrival; no price on drop cards, so chance cannot be read against value.

---

## 3. key-drop.com

**Opened:** https://key-drop.com/en/skins/category/supernatural (UAH 820.00) and https://key-drop.com/en/skins/category/scarlet-catch (UAH 10,250.00, knife-led), 4 Nov 2026.
**Screens:** `keydrop_case_1440_4nov.jpg`, `keydrop_case_390_4nov.jpg`, `keydrop_case_390b_4nov.jpg`, `keydrop_knifecase_1440_4nov.jpg`.

**Composition, desktop:** header nav; live drop strip; full-width event illustration (Halloween "Bone Plague") with a case name chip; directly below it a horizontal strip of item cards with the case art as the centred tile; count row, commit, "IN THIS CASE YOU CAN GET"; THE BEST DROPS carousel; CASE CONTENTS grid with CHECK ODDS RANGE; footer with "18+ ONLY PLAY RESPONSIBLY", site stats, payment logos and SEO text.
**At 390:** event art, the case tile large and centred with left and right arrows, count 1 to 5, "SIGN IN TO OPEN", the "can get" range, all on the first screen; bottom bar Home, Battle, Earn Free, Swipe, Menu.

**Hero / case stage:** the reel is already on screen before opening: the case art occupies the centre slot of the item strip, price tag "UAH 820.00" on it, neighbouring item cards dimmed toward the sides, each with a green coin number on top (900, 150, 600...). What those numbers are is `[?]`. The knife case reuses the same event art and layout; only the centre tile and items change.
**Commit block:** count 1 to 5; outlined green "SIGN IN TO OPEN" for a guest; "IN THIS CASE YOU CAN GET: 1 - 1799" with the same green coin `[?]`; icons favourite, mute, lightning (likely fast mode `[?]`). The page's button list also holds "OPEN AGAIN" and "X2 UPGRADE", which suggests the outcome offers open again and an upgrade step; they were not rendered for a guest `[?]`.
**Opening animation:** not seen. `[?]`
**Drop table:** 6 columns. Card: chance top right ("CHANCE 0.003%"), info icon, item on a hexagon rarity badge, weapon and name, price or a price range across wears ("UAH 4,514.10 - UAH 2,943.80"). Sorted by chance, rarest first. CHECK ODDS RANGE opens a modal "RANGE OF CHANCES: 3615/871116/04580139, UPDATED 9 HOURS AGO, HISTORY OF CHANCES" with item, price, ticket range, chance per row. A "GET 20% BONUS" promo modal opened over it.
**Trust signals:** chance on cards, odds range modal with update time and a history link, provably fair in footer. No RTP or EV.
**Other blocks:** THE BEST DROPS: gold-framed cards "Has been drawn 2 days ago", chance, item, price (the same AK-47 Gold Arabesque appears three times in a row).
**Wow:** the idle reel with the case sitting in the pointer slot is the strongest "about to happen" framing in the set; the user sees the machine before pressing it.
**Cheap / cluttered:** the event illustration dominates and is not the case; promo modal over the odds; repeated identical best drops.

---

## 4. skin.club

**Opened:** https://skin.club/en/cases/open/rifler-case ($13.00), 4 Nov 2026.
**Screens:** `skinclub_case_1440_4nov.jpg`, `skinclub_case_390_4nov.jpg`, `skinclub_case_390b_4nov.jpg`, `skinclub_drop_hover_odds_4nov.jpg`.

**Composition, desktop:** a thin stats bar (3,019 online, 6,543,674 users, battles, upgrades, 781,014,156 cases) with social icons; nav (Upgrade, Missions, Event, Battles, Daily Cases, Exchange, xSCORE); title "RIFLER CASE" and "OPEN THIS CASE AND GET HEIST COINS +1.84"; the stage frame; price plus SIGN IN; LAST TOP SKINS strip; SKINS IN THIS CASE grid; footer with a team photo.
**At 390:** title, heist coins line, small case art inside the frame markers, "Authorization is required to open cases", $13 and SIGN IN on the first screen; 2-column grid.

**Hero / case stage:** a wide, flat hexagonal frame with chevrons at both sides and a red triangle marker top and bottom at the centre (the reel pointer, shown before any spin); case art with a "$13.00" tag in the middle; inside the frame on the left a shield badge "Skin.Club guarantees 100% case fairness transparency" with a help icon.
**Commit block:** a dark price pill "$13" and a violet parallelogram SIGN IN; caption "Authorization is required to open cases". Multi-open and fast controls not visible to a guest `[?]`.
**Opening animation:** not seen. `[?]`
**Drop table:** 6 columns, 15 items. Cards show only weapon, name and wear on a rarity hexagon. No chance and no price on the card face. Hover flips the card to a small table PRICE / RANGE / ODDS per wear (for the knife: FN $130.69, 99961 - 100000, 0.040%). "[ CHECK ODDS RANGE ] UPDATED 8 DAYS AGO" link above the grid.
**Trust signals:** fairness shield in the stage, odds on hover, odds range link, provably fair in footer. No RTP or EV.
**Other blocks:** LAST TOP SKINS: price, item, wear; the Glock-18 Gold Toof at $33.57 appears 14 times in the strip text; one tile is a user avatar with level 91 and name. Heist coins reward line (a meta currency on every open).
**Wow:** the pointer markers on an idle frame make the stage read as a machine; clean, uncluttered first screen.
**Cheap / dishonest:** chance and value hidden until hover; the repeated Glock tiles make "last top skins" look like a loop.

---

## 5. clash.gg (demo seen)

**Opened:** https://clash.gg/casescs2/Vortex (65.28 gems), 4 Nov 2026.
**Screens:** `clash_case_1440_4nov.jpg`, `clash_case_390_4nov.jpg`, `clash_case_390b_4nov.jpg`, `clash_provably_fair_4nov.jpg`; animation `clash_open_f1_4nov.jpg` to `clash_open_f6_4nov.jpg` (idle, start, mid, slowing, landed, result), `clash_open_x4_f1_4nov.jpg` to `_f3_` (4 at once: idle, spinning, result), `clash_open_quick_f1_4nov.jpg` (Quick Unbox result), `clash_open_390_f1_4nov.jpg`, `clash_open_390_f2_4nov.jpg`.

**Composition, desktop:** left column chat with a "RAIN" pool and captcha join; top bar (Games, Claim Free 3 Cases, gems balance 0.00, Purchase, Sign In); Exit, Share Case, Provably Fair; the reel panel on top; a panel with case art, name, count, commit and toggles; "Potential Drops" grid; footer. No best drops, related cases or SEO text on the case page.
**At 390:** the reel is first, then the case art (large), name, count 1 to 4; the Open and Demo buttons fall below the first screen; a "Promotion Available! You are eligible to claim 3 free cases" sheet slides up from the bottom. After tapping Demo (which needs a scroll to reach), the reel is above the viewport, so the spin played off screen in our run.

**Hero / case stage:** the reel itself is the hero, idle and visible before opening: dark panel, items on rarity-tinted icon backdrops, the centre item glowing, a small orange triangle pointer above the centre. Case art (an open chest with a glowing gem) sits in the lower panel, not in the reel.
**Commit block:** count 1, 2, 3, 4; green "Open for 65.28" (shown to a guest; price multiplies with count, 261.12 at 4); grey "Demo"; toggles "Quick Unbox", "Clash Spin", "Borrow" (the last two `[?]`). While spinning, Open and Demo dim and disable.
**Opening animation (demo, single):** horizontal strip moving right to left; about 7 items visible across 1080 px; non-centre items dimmed, the item passing the pointer brightens with a white or purple glow ring. About 1 s passes between the click and first reel movement; reel motion about 5.5 s with a long ease-out; after it stops, the centre item scales up slightly and a label fades in under it (weapon, "Neon Rider FN", price 13.02); click to result label about 7 s. No near-miss tease observed (the result was a low-value item). No colour flash, particles or shake seen at this tier; rarity escalation `[?]`. Sound: no sound control on the case page; audio not captured `[?]`. Outcome: no modal; the label under the item is the outcome, and the controls simply re-enable. No sell, share or fairness link on the result for a demo `[?]` for a real open.
**Quick Unbox (demo):** the reel jumps in about 0.6 s and the labelled result shows by 1.3 s.
**Multi-open (demo, x4):** the panel switches to four vertical reels side by side with pointer triangles at the left and right edges; reels scroll top to bottom; motion about 6 to 6.5 s; four labelled results in a row. Whether the reels stop together or staggered `[?]`.
**Drop table:** 3 columns of wide cards: chance % top left tinted by rarity, wear top right, weapon, name, price. Sorted by price, highest first. Chances sum to 100.
**Trust signals:** Provably Fair button opens a modal with "Hashed Server Seed" (empty for a guest) and an editable "Client Seed" with a refresh button. "No purchase necessary. See the Free to Play page for methods of free entry." and 18+ line in the footer.
**Wow:** Demo exists and the multi-open switch to vertical reels is the most kinetic thing seen in the walk.
**Cheap / cluttered:** chat with promo codes and swearing beside the stage, rain pool, bottom promo sheet on mobile; the reveal is quiet for a site whose whole page is the reel.

---

## 6. datdrop.com

**Opened:** https://datdrop.com/case/darkness (12.50), 4 Nov 2026; also https://datdrop.com/case-opening-simulator.
**Screens:** `datdrop_case_1440_4nov.jpg` (full page; the drop grid below row 1 rendered blank in the full-page capture), `datdrop_drop_table_4nov.jpg` (grid in viewport), `datdrop_odds_modal_4nov.jpg`, `datdrop_risk_tooltip_4nov.jpg`, `datdrop_case_390_4nov.jpg`, `datdrop_case_390b_4nov.jpg`.

**Composition, desktop:** utility links (Partnership, Provably Fair, Free Cases, Top Wins, FAQ); header; live drops strip; title "DARKNESS" between slashes; a meta row (Back, "1 ADDED TO FAVORITE", "MEDIUM ADRENALINE / ODDS RANGE", DatPoints 62.50, FAVORITE CASE); the stage with floating giveaway cards at right; LAST TOP DROPS FROM THE DARKNESS CASE; DARKNESS CASE CONTAINS with a meta line; About the case SEO block; CASE DETAILS table; REVIEWS carousel; "PREV CASE: CLUTCH CASE / NEXT CASE: GROWL"; footer.
**At 390:** the hourly and daily giveaway cards sit over the case art on the first screen; bottom bar Cases, Upgrade, PvP, Race, Sign In.

**Hero / case stage:** a tall hexagon with an orange outline on a dark violet field; inside it the top item's art (M4A1-S Hot Rod) rather than a box, price tag 12.50 above.
**Commit block:** count 1 to 10 in a pill row; an outlined SIGN IN for a guest. Fast mode `[?]`. Sound toggle in the header.
**Opening animation:** not seen; the simulator needs an account (FAQ: virtual budget, "The odds are the same as in real mode", session length chosen before activation). `[?]`
**Drop table:** 6 columns of full-bleed tiles with a rarity-tinted gradient: item, wear, chance, ticket range ("100,000", "99,970-99,999"). Items with several wears collapse into one tile with a mini table PRICE / RANGE / ODDS per wear. Sorted rarest first. ODDS RANGE opens a modal: risk label, commission, item count, a version selector "VER. 4 (PUBLISHED: 01/09/2026 - NOW)", then rows ITEM / COST / RANGE / ODDS.
**Trust signals (the strongest in the set):** meta line "8.49% COMMISSION / 35 ITEMS / CASE: VER. 4 (PUBLISHED: 01/09/2026 - NOW) / SKIN PRICE: VER. 4 (PUBLISHED: 15/07/2026 - NOW)". CASE DETAILS table: current full opening price 12.50; case commission 8.49% "included in the opening price"; 35 possible item variants; most expensive item and its chance (2,856.36, 0.001%); chance of a profitable drop 31.91%; average profitable drop 29.25; average unprofitable drop 3.09; a plain explainer of what "profitable" means; case version and skin price version with publish dates. The risk label "MEDIUM ADRENALINE" has a tooltip: "31.91% chance to profit, Average profit drop 2.34x (29.25), Average loss drop 0.25x (3.09), CLICK TO INSPECT".
**Other blocks:** last top drops from this case with price, item, time ago and user name; About the case SEO text with a rendered case image; user reviews; prev and next case links. On the home page (not the case page) a "LIVE WINNERS" list showed rows labelled "BOT ALLY ROYALE PROFIT +646.44".
**Wow:** the case details table and the adrenaline tooltip are the only places in the category where the price of the thrill is a number.
**Cheap / cluttered:** giveaway cards covering the stage on mobile; the stage shows an item, not a case, so it does not read as "closed".

---

## 7. farmskins.com (site 8)

**Opened:** https://farmskins.com/gaben-dive (Dive, $24.99, "Already sold: 1 060 765"), 4 Nov 2026.
**Screens:** `farmskins_case_1440_4nov.jpg`, `farmskins_case_390_4nov.jpg`, `farmskins_case_390b_4nov.jpg`, `farmskins_drop_hover_4nov.jpg`.

**Composition, desktop:** header; a second nav row (event, Farm Zone, Upgrader, Gaben's Store, Warehouse, Skin Changer, Contract, Pick'em); live drop strip; Back to home; the hero; price and SIGN IN; Last top skins strip; "Items in Dive" grid with "Already sold"; footer.
**At 390:** case name, sound and lightning buttons, case art, promo panel, $24.99 and SIGN IN all on the first screen; 2-column grid with pagination (1, 2, next).

**Hero / case stage:** a full-width illustrated backdrop (a diver character, blurred room), case name "Dive" in the centre, a yellow sound button and a lightning button (fast mode `[?]`), then a band with blue chevrons framing the case art (a character figure, not a box) and an event panel "Get event Candies and turn them into skins!".
**Commit block:** "$ 24.99" in yellow beside a green SIGN IN. Multi-open not visible to a guest `[?]`.
**Opening animation:** not seen. `[?]`
**Drop table:** 6 columns. Card: price or price range ("$693.3 - $724.08"), item, rarity colour on the left edge and in a gradient. Hover flips the card to a Wear / Price table. Clicking a card leaves the page for an item page (rarity, price per wear, regular vs StatTrak, cases that drop it). No drop chance anywhere: the page text contains no "%" character, and neither the hover nor the item page showed one. Whether odds exist behind sign-in `[?]`.
**Trust signals:** none on the case page ("fair" does not occur in the page text). "Already sold" counter.
**Other blocks:** Last top skins (price, item, user, time ago).
**Wow:** the illustrated hero gives each case a character; the sound and lightning buttons sit in the stage, not in settings.
**Dishonest:** no odds shown to a guest at all; price ranges with no chances tell the visitor only what they might get, never how likely.

---

## 8. cases.gg (supplementary, demo seen)

**Opened:** https://cases.gg/mystery-boxes/fifa (FIFA Mystery Box, $27.68), 4 Nov 2026. A physical-goods mystery box site, kept only for its logged-out demo. Its footer phone number shares the +353 21 212 prefix with clash.gg; ownership was not checked.
**Screens:** `casesgg_case_1440_4nov.jpg`, `casesgg_open_f1_4nov.jpg` to `casesgg_open_f6_4nov.jpg`.

**Stage and commit:** title, sound and shield icons top right; an idle reel on top with the centre item lit; "Open for $27.68", "Demo Spin", a lightning icon button (quick `[?]`), "Add Case"; "FIFA Drops | Commission Rate: 0.00%"; drop cards with chance and price; chat column on the right with a "FREE PLAY" balance.
**Opening animation (demo):** horizontal strip, right to left, about 7 items visible; no pointer drawn; the item passing the centre lights up with a blue glow while the rest stay dim; controls disappear during the spin. Reel motion about 5.3 s from almost immediately after the click, then a small settle movement; the result label (name, "$10.00") and two buttons "Dismiss" and "Quick Sell" appear by about 7 s.

---

## Synthesis 1: pattern table

Sites: B = the baseline, HC = hellcase, KD = key-drop, SC = skin.club, CL = clash.gg, DD = datdrop, FS = farmskins, CG = cases.gg (supplementary). csgoroll blocked, no column.

| Block | B | HC | KD | SC | CL | DD | FS | CG |
|---|---|---|---|---|---|---|---|---|
| Stage | small case art in a flat panel | rendered room scene per case, case on a table | event illustration plus idle reel with case in the centre slot | flat hex frame with pointer markers, case centred | idle reel is the hero, case art below | hexagon holding top item art | illustrated backdrop, character art, promo panel | idle reel only |
| Price at stage | not shown to guest | on the OPEN button, struck "sale" price | tag on the case tile | tag on case plus pill | on the Open button | tag above hexagon | big yellow figure | on the Open button |
| Commit for guest | message plus SIGN IN | live-looking OPEN, sign-in modal | SIGN IN TO OPEN | SIGN IN plus caption | Open plus Demo | SIGN IN | SIGN IN | Open plus Demo Spin |
| Multi-open | hexes 1 to 5 | 1, 2, 3, 4, 5, 10 | 1 to 5 | `[?]` | 1 to 4, vertical reels | 1 to 10 | `[?]` | `[?]` |
| Fast mode | `[?]` | Fast mode toggle plus Space quick stop | lightning icon `[?]` | `[?]` | Quick Unbox, about 0.6 s | `[?]` | lightning button `[?]` | lightning icon `[?]` |
| Demo, logged out | no | no | no | no | yes | no (simulator needs account) | no | yes |
| Reel | `[?]` | `[?]` | horizontal (idle) | horizontal implied by markers | horizontal; 4 vertical at x4 | `[?]` | `[?]` | horizontal |
| Spin duration | `[?]` | `[?]` | `[?]` | `[?]` | about 5.5 s motion, about 7 s to result | `[?]` | `[?]` | about 5.3 s motion, about 7 s to result |
| Rarity escalation | `[?]` | `[?]` | `[?]` | `[?]` | glow on passing item; high tier `[?]` | `[?]` | `[?]` | glow on passing item; high tier `[?]` |
| Outcome screen | `[?]` | hints: get, quick stop, sell, repeat | open again, x2 upgrade in DOM | `[?]` | label under item, no modal | `[?]` | `[?]` | label plus Dismiss, Quick Sell |
| Drop card | price, chance, ticket range, wear, ST | chance only, no price | chance, price or wear range | name and wear only, odds on hover | chance, wear, price | chance, ticket range, wear table | price range only, no chance | chance, price |
| Best drops | price plus badge | top 7 days with x multiplier | "has been drawn" plus chance | repeated tiles plus user tile | none | with time and user | with time and user | none on case page |
| Trust / fairness | footer link | PROVABLY FAIR button | odds range modal with update time | shield in stage, odds on hover | PF modal with seeds | commission, versions, profit chance, averages | none | commission 0.00% |
| Risk meter | Medium-risk, skulls | none | none | none | none | MEDIUM ADRENALINE with numeric tooltip | none | none |
| Related cases | none | Similar cases accordion | none | none | none | prev / next case | none | none |
| SEO text | none | long article in accordion | footer text | footer "About" | none | About the case | none | "About" block |
| Arrival interruptions | signup modal, cookies | price-alert toast, cookies | promo modal | cookies | promo sheet (mobile), chat | giveaway cards | cookies | chat |

## Synthesis 2: what nobody does well

1. **The cost of the thrill is almost never a number at the button.** Only DatDrop states commission (8.49%), chance of a profitable drop (31.91%) and average win and loss, and it puts them in a details table below the fold and a hover tooltip. cases.gg states "Commission Rate: 0.00%". The baseline, hellcase, key-drop, skin.club, clash and farmskins show no RTP or EV anywhere on the case page. Gap: expected return and chance to beat the price, next to the open control, at the moment of spending.
2. **Odds are present but never shaped.** Every site that shows odds shows them as a per-card percentage or a table (baseline, hellcase, key-drop, clash, DatDrop). skin.club hides them behind hover; farmskins shows none at all. No one draws the distribution: how much of the 100,000 tickets is "below the price" and how much is the dream item. Gap: one visual of the pull that a 360 px screen can read.
3. **A guest cannot feel the reveal.** Two sites of eight let a logged-out visitor spin (clash, cases.gg); DatDrop gates its simulator behind an account; the baseline, hellcase, key-drop, skin.club and farmskins only offer sign-in. Gap: a demo spin on the real odds, clearly marked as a demo, for the person deciding whether to sign up.
4. **Every reel is the same strip.** The two animations seen are horizontal strips with a glow on the item under the centre, about 5.3 to 5.5 s of motion, and a quiet label as the outcome. Key-drop's and skin.club's idle stages imply the same strip. Only clash's multi-open changes form (vertical reels). Hellcase's rendered room is the only stage with depth, and it is static. Gap: a reveal that uses the case itself (lid, light, camera) and escalates by rarity, with the strip as one layer, not the whole show.
5. **The outcome is an afterthought.** In both demos the result is a small label under the item (clash) or a label plus Dismiss / Quick Sell (cases.gg). Nothing seen says what the chance of that item was, how it compares to the price, or links the result to its fairness proof. Hellcase's "x32.0" multiplier on top drops is the only place a win is expressed as a ratio. Gap: an outcome card that carries value vs price, the hit chance and the proof, and is shareable.
6. **Fairness is a modal, not a moment.** Clash's Provably Fair modal shows an empty hashed server seed and an editable client seed to a guest; hellcase has a header button; the baseline and DatDrop link it from the footer or utility bar; farmskins has no mention on the page. No site seen ties the proof to the spin just watched. Gap: a per-spin receipt reachable from the result.
7. **Mobile loses the stage or the button.** At 390 clash pushes Open and Demo below the first screen and the reel left the viewport when Demo was tapped; the baseline shows no case art on the first screen; DatDrop's giveaway cards sit on top of the case art. Only hellcase, key-drop, skin.club and farmskins keep art, price and commit together at 390. Gap: a mobile stage where reel, price and commit share one 844 px screen and the reel stays in view during the spin.
8. **"Best drops" are vanity loops.** skin.club repeats the same $33.57 Glock 14 times, key-drop repeats AK-47 Gold Arabesque three times, the baseline shows prices with no time or user. None says how often this case actually paid above its price. Gap: recent results of this case as a honest distribution (how many of the last N opens beat the price), with the big hits as highlights inside it.
9. **The page is interrupted before it starts.** Signup modal (baseline), price-alert toast (hellcase), promo modal over the odds (key-drop), promo sheet (clash mobile), chat with promo codes and a rain pool (clash, cases.gg), giveaway cards on the stage (DatDrop). Gap: a case page whose first screen belongs to the case.

## Synthesis 3: inspiration list for variants

Three distinct directions per block. "Seen at" names the site that suggested it, if any; "push" says what we would do beyond it. None of these is a site's screen copied whole.

**Stage**
1. Case on a lit plinth in a dark room, light rig reacting to hover and to the open (seen at hellcase's per-case scene; push: one shared stage with per-case light colour from the rarity ladder, and the light becomes the reveal).
2. Idle machine: the reel already present with the closed case in the pointer slot (seen at key-drop; push: the case cracks open in that slot and the strip runs out of it).
3. Case floating in front of its own top item, the item silhouetted behind glass (seen at DatDrop's hexagon with item art; push: keep the case closed and let the top item glow through, so the page says what is inside without spoiling the draw).

**Commit block**
1. One wide open button with the price and the expected return on it ("Open for 10.31, returns 9.4 on average") (no site; DatDrop has the numbers in a table, we move them to the button).
2. Split control: count stepper, open, demo side by side, with the multiplied price shown live (seen at clash; push: the demo is a real equal, not a grey afterthought, and it is the guest's primary action).
3. Thumb-zone sheet on mobile that docks under the reel and stays while the reel spins (no site; counters clash's below-the-fold button).

**Multi-open**
1. Vertical reels side by side, one per case (seen at clash x4; push: stagger the stops left to right so the eye travels and the last reel holds the suspense).
2. Single strip, N pointers (no site seen; one reel, several markers, results land together).
3. Stacked cards that flip in sequence after one shared spin (no site; fast multi with a per-card reveal).

**Fast mode**
1. Toggle that shortens the spin to under a second (seen at clash Quick Unbox, about 0.6 s; push: show the full animation on any item above a rarity threshold even in fast mode).
2. Keyboard and tap shortcuts: Space to skip, R to repeat, S to sell (seen at hellcase's hint row; push: same gestures on mobile as tap-and-hold).
3. Skip-to-result button that appears only after the first second (no site).

**Reel**
1. Horizontal strip with depth: centre item sharp and lit, sides blurred by motion and scaled down (seen as glow-on-centre at clash and cases.gg; push: real motion blur and depth, not just dimming).
2. Vertical slot reel, case-sized, on mobile (seen at clash multi; push: use it for single opens at 390 where vertical space is what we have).
3. 3D ring carousel around the open case (no site).

**Near miss and rarity escalation**
1. Light colour of the stage shifts toward the rarity of the item currently under the pointer during the slow-down (no site observed; both demos only glowed the item).
2. Tier-gated escalation: covert and above trigger a hold, a flash and a sound sting; low tiers land quietly (`[?]` on all sites; push it as an explicit ladder so the user learns what each level feels like).
3. Honest near miss: the slow-down is the same length whatever the result, so the rare item passing by is chance, not theatre (no site; this is a trust choice as much as a motion one).

**Outcome screen**
1. Result card: item, value, value vs price as a multiplier, the hit chance, sell / keep / open again, and the proof link (multiplier seen at hellcase top drops; sell and dismiss at cases.gg; push: all in one card).
2. Item takes over the stage: the reel fades, the item rises large on the plinth with its wear and float (no site).
3. Shareable receipt: a public result page with the seed and the roll number (no site seen; fits a per-spin fairness receipt).

**Drop table card**
1. Card with price, chance and ticket range always visible, rarity edge (seen at the baseline; push: chance as a bar, not only a number).
2. Distribution strip above the grid: 100,000 tickets as one bar coloured by rarity, the case price drawn as a line through it (no site; uses DatDrop's profitable-drop figure).
3. Wear-collapsed card with a mini table per wear (seen at DatDrop and skin.club hover; push: visible without hover on desktop, tap-to-expand on mobile).

**Best drops / recent results**
1. Recent opens of this case as a strip of dots coloured by result vs price, big hits enlarged (no site).
2. Top drops with multiplier and time (seen at hellcase; push: dedupe identical items).
3. "Today on this case": count of opens and how many beat the price (no site).

**Trust / fairness**
1. Fairness receipt attached to each spin, one tap from the result (no site).
2. Case passport: commission, version, published date, skin price version (seen at DatDrop; push: put it in the stage header, not under the reviews).
3. Seed panel that a guest can see filled in for a demo spin (seen empty at clash; push: let the demo produce a verifiable seed too).

**Risk meter**
1. Labelled risk with the numbers behind it on tap (seen at DatDrop "Medium adrenaline" tooltip and the baseline skulls; push: one scale shared by every case tile and the case page).
2. Volatility bar: chance to beat the price vs average win size (no site; uses DatDrop's two numbers).
3. Plain sentence: "1 in 3 opens beat the price" (no site).

**Related cases**
1. Prev / next case, same price band (seen at DatDrop).
2. "Same risk, other price" row (no site; uses the risk scale).
3. Cases that contain the item you just hovered (seen as an item page at farmskins; push: keep it on the case page).

---

## Synthesis 4: what v4's case screen took, and what it refused

Written after the walk, by the session that built `design/v4/case.html` and its labs on 4 November 2026. Every row names the lab where it can be seen.

| From the walk | Taken as | Where |
|---|---|---|
| Gap 1, the cost is never a number at the button | The return beside the price: "Returns 11.68 coins on average · 37 % of opens beat the price", under the price, row "A, with what it returns" | `stage-lab.html` |
| Gap 2, odds only per card | One bar of all 100 000 tickets, each item as wide as its chance, with the share worth at least the price marked | `table-lab.html` row B |
| Gap 4, every reel is the same strip | Three looks on one engine: the strip, the drum, the spotlight; the frame takes the colour of what is landing in the last stretch | `open-lab.html` |
| Gap 5, the result screen is an afterthought | Every outcome prints the item's own chance, its value, its value against the price as a multiple (hellcase's "x32.0" on top drops, here on every result, up or down), the proof link and the three controls; three ways it can arrive | `win-lab.html` |
| Gap 6, mobile loses the stage or the button | At 360 the Open button stays on the first screen above the bottom bar, and a tap from lower down brings the stage to the middle before the reel runs | `case.html` at 360 |
| Key-drop's idle reel with the case in the slot | Stage row D, the machine at rest, pushed: the strip runs out of the case's slot | `stage-lab.html` row D |
| Clash's vertical reels for multi-open | Already the rule, `D-37`; the lanes lock one after another, 0.6 s apart | `open-lab.html`, count 2 to 5 |
| Hellcase's per-case rendered room | Stage row A: one shared stage lit in each case's colour | `stage-lab.html` row A |

**Refused, with the rule that refuses it.**

- **Fast mode, quick unbox, skip to result** (clash 0.6 s, hellcase): refused by `case.md` section 7.3, reduced motion is an accessibility setting, not a speed-up control. The research's "fast mode" directions are not drawn.
- **"Honest near miss"** (research direction 3 under rarity escalation, a rare item passing by as chance): refused by `case.md` section 7.1, `E2`. The engine goes further than the rule: nothing better than the result passes the marker while it slows, and nothing better stands in view beside it once it stops.
- **Keyboard shortcuts to repeat and sell** (hellcase's hint row): not drawn; repeat on a key is the volume argument section 7.2 refuses.

**Open, for the founder, not decided here.**

- **A guest demo on the real odds** (gap 3; only clash and cases.gg have one). It is the strongest gap the walk found and it touches compliance: a free spin for a person who has not passed the 18+ declaration and the geo layer. Not drawn until the founder decides whether round 1 carries it and where its parent is.
- **A case passport** (DatDrop: commission, case version, price version with dates). Candidate parent `D4` and design principle 1; not drawn.
