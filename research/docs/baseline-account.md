# Baseline behind the account: daddyskins.com, signed in

**Source class.** Nineteen screenshots captured by the founder on **18 August 2026** and filed in `research/screens/baseline-account/`, prefix `acct_`. Admitted as a source by the `CLAUDE.md` rule of the same day: the founder captures the signed-in surfaces and files dated screenshots, and from then on they are a source in the same class as a walked page, cited by shot and date. **Nothing here is model memory and nothing is inferred from a competitor.** Where a screenshot does not show something, the row says so.

**Account values are not reproduced here** beyond what a mechanic needs. The figures quoted are the ones that carry a rule.

**Coverage against the shot list.** P1 asked for twenty three shots. Nineteen came back and they cover the inventory, the item, the whole history set, the withdrawal flow, the profile, the settings and two dialogs. **Not covered by the first batch: the deposit flow, the open and reveal sequence, identity verification, and any error or toast state.** **The deposit flow arrived in a second batch on the same day, seven shots, and is section 5b.** The rest stay `[?]` and are listed in section 9.

---

## 1. The account shell, and the two money figures are exactly ours

`acct_inventory_top.png`. Breadcrumb: `HOME / MY ACCOUNT / INVENTORY`.

The account header is one unit carrying, left to right: **username with an id**, an avatar, then **two money figures side by side and never summed**:

| Figure | Label under it |
|---|---|
| `35.91` | **INVENTORY** |
| `588.08` | **BALANCE** |

Then a round `+` control, which is the deposit entry, carrying a small `5%` badge.

**This is node `0.1`'s money rule, live, in the canon.** `CLAUDE.md` fixes it as "two figures, balance and value of items held, both in real currency, never summed and never a score". The baseline runs the same two figures with the same relationship. **The one divergence stays the denomination**, `C1`: theirs are in coins. **Amended 19 August 2026:** `D-28` reversed `C1` and took the coin, so this is no longer a divergence at all. What was walked here is unchanged; the sentence that called it a divergence was an inference and it is corrected rather than deleted.

**Four tabs sit under the header**, and they are the whole of the account: `INVENTORY`, `HISTORY`, `PROFILE`, `SETTINGS`. Our map splits this into `5.1` account and inventory and pushes settings and history into it as states. **The baseline treats them as four peers on one page**, which is a structure decision `5.1` has to answer rather than inherit silently.

---

## 2. Inventory, node `5.1`

`acct_inventory_top.png`, `acct_inventory_cards.png`, `acct_inventory_multiselect.png`.

**Header row of the block:** the word INVENTORY, a **Steam connection state** rendered as a green `ONLINE` chip with a `?`, a legend "**- Distributed drops**" against an icon, and the instruction "Click on the item to select".

**Sort:** `Created At` with an up-down control, and `Price` with a dropdown. Two sorts, no filters, no search.

**The bottom bar is sticky and it is the whole action set:**

> `55 ITEMS` · `35.91` · **SELECT ALL** / **DESELECT ALL** · `SEND TO STEAM` · `SELL TO SITE` · `CASH-OUT` · `EXCHANGE`

With four items selected it reads `4 ITEMS` · `11.39`, `acct_inventory_multiselect.png`. **The count and the sum of the selection are the bar's own figures**, and they are the same pair as the header: a count of things and a value of things.

**Four exits from an inventory, and our map has one.** `sitemap.md` gives `5.1` a single route to `5.3` withdrawal. The baseline offers **send to Steam, sell back to the site, cash out to money, and exchange for another skin.** Only the first is in our round 1. **The other three are not competitor features to be dismissed: they are the live product's answer to what a person does with a skin they do not want**, and `5.1` currently has no answer at all.

---

## 3. The item card in the inventory, and what it adds to node `0.6`

`acct_inventory_cards.png`, `acct_inventory_zero_offers.png`, `acct_inventory_item_actions.png`.

Every card carries, in this order: **image · weapon · skin · wear in parentheses · price in coins**, then a two column foot:

| Left | Right |
|---|---|
| `Starting at:` a price | `Offers:` a count |

Observed rows, verbatim:

| Item | Site price | Starting at | Offers |
|---|---|---|---|
| M4A4 The Emperor (Battle-Scarred) | `11.86` | `51.50` | `86` |
| M4A4 Desert-Strike (Field-Tested) | `4.48` | `27.52` | `124` |
| AK-47 Emerald Pinstripe (Field-Tested) | `4.28` | `1.94` | `873` |
| Desert Eagle Naga (Field-Tested) | `1.61` | `1.84` | `314` |
| Galil AR Connexion (Minimal Wear) | `1.02` | `0.77` | `191` |
| ST Glock-18 Off World (Minimal Wear) | `0.84` | `0.91` | `81` |
| Dual Berettas Heist (Field-Tested) | `0.59` | `0.87` | `60` |
| SSG 08 Blue Spruce (Field-Tested) | `0.03` | `0.00` | `0` |
| Sticker, huNter Antwerp 2022 | `0.02` | `0.00` | `0` |

**Three things this settles.**

1. **StatTrak is a prefix on the name**, rendered as an orange `ST` before the weapon. Field 5 of `0.6` is inherited, and its rendering is inherited too.
2. **The card already carries a market reference and a liquidity signal**, "starting at" and an offer count. Our field 12 asks for a market price with an as-of and an outbound link. **The baseline has the price and the depth and has neither the timestamp nor the link.** That is the gap `A1` exists to close, and it is now measured.
3. **The site price is not a discount on the market price. It goes both ways.** Four of the nine rows have a site price **above** the market start, and two of the nine have **no market at all**, `Starting at: 0.00, Offers: 0`. A card design that assumes the market number is always the bigger one is wrong on this data.

**Selecting one card reveals three actions on it:** `SELL`, `SEND TO STEAM`, `EXCHANGE`, plus a **share** control top right. `acct_inventory_item_actions.png`. So the share of a single owned item exists in the live product, which is the object node `7.1` was created for.

---

## 4. History, node `5.1` again, and it is five histories rather than one

`acct_history_inventory.png`, `acct_history_deposit.png`, `acct_history_deposit_end.png`, `acct_history_withdraw_empty.png`, `acct_history_cashout_empty.png`, `acct_history_skins_empty.png`.

Five sub-tabs: **INVENTORY HISTORY · DEPOSIT HISTORY · WITHDRAW HISTORY · CASH-OUT HISTORY · CS:GO SKINS DEPOSITS**. Each prints its own item count top right.

**Inventory history renders as cards, not as a table.** 50 items. Each card carries a **status ribbon across its head**, observed values `SOLD` and `PENDING`, a small case icon badge, then name, wear and price. **The ribbon is the state and it is a word, not a colour alone.**

**Deposit history renders as a table**, 17 items, columns: `ID`, `AMOUNT`, `METHOD`, `STATUS`, `TRANSACTION ID`, `CREATED AT`. Observed statuses: **REJECTED** in yellow, **COMPLETE** in green. Observed methods: `skinsback` and an `ethereum` mark. Timestamps to the second, `2026-04-09 09:09:10`. Rows span 2022 to 2026 and one carries the transaction id `test`.

**The three empty histories all print the same string: `History is empty...`** and nothing else. No explanation, no route, no next step.

**Two consequences for our nodes.**

- Node `5.3` withdrawal is specified with named states and a published ceiling, `G1` and `G2`. **The baseline has a withdraw history and it is a list with no state model visible in this account**, because it is empty. The state vocabulary stays `[?]` until a non-empty one is captured.
- **An empty state that says only "History is empty..." is the pattern node `0.5` and `3.2` refuse.** Three of the five histories in the canon do exactly that.

---

## 5. Send to Steam, and this is the most important screenshot in the set

`acct_withdraw_step1_offers.png`, `acct_withdraw_step2_total.png`. Breadcrumb `HOME / MY ACCOUNT / INVENTORY / SEND TO STEAM`.

**The flow is two numbered steps on one page**, `1 ITEMS TO WITHDRAW` and `2 TOTAL PRICE`, with the instruction printed at the top, verbatim:

> "Choose any of the offers below for the skin withdrawal. Your balance amount may be increased or decreased, based on the market price selected"

**Step 1** puts the selected skin on the left, showing **two prices on the one card**: `4.48`, which is what the site says the item is worth, and a Steam-badged `44.87` beside it. On the right, `MARKET OFFERS`: a `From` and `To` price filter, a search field, a delete control, and a row of offer cards. **Each offer card carries a green `-39%` badge, a float value printed to seven decimals, a small three-segment colour bar under it, and a price.** Observed floats: `0.2171338`, `0.3494841`, `0.1776853`, `0.2473470`, `0.3059902`, `0.1688540`. Every offer shown is priced `27.52`.

**Step 2 is a four column table and it is the whole mechanic:**

| SKIN NAME | YOUR SKIN PRICE | MARKET SKIN PRICE | YOUR BALANCE IMPACT |
|---|---|---|---|
| M4A4 Desert-Strike (Field-Tested) | `4.48` | `27.52` | `-23.04` |

> TOTAL DIFFERENCE `-23.04`. "Based on the market price, `23.04` will be taken from your balance"

**The arithmetic closes exactly and it is worth stating out loud.** `27.52 − 4.48 = 23.04`, so **you pay the difference between what a real copy costs on the market and what the site says your win was worth.** And `27.52 ÷ 44.87 = 0.613`, which is the `-39%` badge: the offers are market copies priced 39 percent under the Steam price.

**What this means for our map, and it is not small.**

1. **Withdrawal on the baseline is a purchase, not a delivery.** The item you won is a credit note, and taking a real skin out costs the difference. **Nothing in `cjm-to-be.md`, in `sitemap.md` or in node `5.3` models this.** Our whole withdrawal story assumes the thing you won is the thing you receive.
2. **`B7-1` is not a perception problem here, it is the product.** The barrier reads: the gap between what a win appears to be worth and what it is worth. On this screen that gap is a number, printed by the product itself, and it is **five times** the value of the win, and a copy of it costs **six times** what the win was credited at (`23.04 / 4.48 = 5.14`, `27.52 / 4.48 = 6.14`). **The earlier wording said the difference was six times and that was the market price's ratio, not the difference's.**
3. **Float is shown, and it is shown at the only moment it decides anything.** Entity 4 marks float and pattern `[?]` and field 15 of `0.6` is carried as `[ORPHAN]` because no job in our list needs it. **Choosing between six copies at the same price is exactly a job that needs it**, and the baseline answers it with seven decimals and a band bar.
4. **This is the strongest argument in the whole project for `A1`, two prices on one item.** The live product already prints two prices at the moment of withdrawal. Our design prints them at the moment of the decision to spend, which is one screen earlier and the whole point.

---

## 5b. Deposit, node `4.1`, captured 18 August 2026

`acct_deposit_step1_methods.png`, `acct_deposit_step1_crypto.png`, `acct_deposit_card_step2.png`, `acct_deposit_card_form.png`, `acct_deposit_giftcards.png`, `acct_deposit_btc_address.png`, `acct_deposit_solana_nowallet.png`, all 18 August 2026.

**Three further captures, 25 August 2026**, supplied by the founder to close the gap section 5b.1a describes: the fiat grid in full over two screens and the crypto group. **They are not yet filed in `research/screens/baseline-account/`** and are cited here by date and by what they show, which is the weaker citation of the two. **Expected names when filed:** `acct_deposit_fiat_full_25aug.png`, `acct_deposit_fiat_tail_25aug.png`, `acct_deposit_crypto_25aug.png`.

Breadcrumb `HOME / BALANCE REFILL`, then `HOME / BALANCE REFILL / DEPOSIT AMOUNT`. Title **TOP UP YOUR BALANCE**. **Two numbered steps**, `1 CHOOSE A PAYMENT METHOD` and `2 DEPOSIT AMOUNT`, and step 1 turns into a green tick carrying the chosen method's name.

### 5b.1 Step 1: a promo field, a country, and twenty five methods

Above the grids sit two controls:

- **"HAVE A PROMO CODE?"** with a `Partner/Promo Code` field **pre-filled with a partner code**, a green tick beside it and an `APPLY` button. So affiliate attribution is surfaced at the moment of funding, already applied.
- **A country selector** labelled `Choose Payment Method`, showing a flag and a country name. **The method grid is filtered by it.**

| Group | Count | Methods, as named on the tiles |
|---|---|---|
| **FIAT PAYMENT METHOD** | **27** | Visa Or Mastercard, carrying a **BEST CHOICE** ribbon; CS:GO Skins, marked **INSTANT**; UnionPay; Neosurf; Skrill; Paysafecard; Alipay; Wechat Pay; Neteller; Sofort; **EPS; Giropay; Bancontact; PayPal; Pix; Webpay; Multibanco; Blik; Przelewy24; American Express;** Google Pay; Apple Pay; Wise; Gift Cards; GrabPay; Fawry; Volet |
| **CRYPTO PAYMENT METHOD** | **8** | Bitcoin, Ethereum, Litecoin, Tether, Tron, Xrp, Solana, and an **Other** tile carrying seven more marks |

**Thirty five funding routes on one screen, and our node `4.1` was drawn against a method list that is `[?]`.** It now has a real one, and the shape of the problem changes: the design question is not which providers to show, it is **how a person chooses among thirty five without a recommendation**, and the baseline answers it with one ribbon on one tile.

### 5b.1a Corrected 25 August 2026. The count read 17 and the true count is 27, and the way it went wrong is worth more than the number

**This table said 17 fiat methods and 25 routes from 18 August 2026 until 25 August 2026.** The founder supplied three further captures on 25 August, the full grid in two screens plus the crypto group, and the list above is now complete.

**It was not a miscount.** It was two partial captures summed as if they were contiguous.

| Shot | What it actually shows |
|---|---|
| `acct_deposit_step1_methods.png` | The head of the grid, **rows 1 and 2 only, ten tiles**, cut off mid page at Sofort |
| `acct_deposit_step1_crypto.png` | The tail, **starting at Google Pay**, seven fiat tiles then the crypto group |

**Ten plus seven is seventeen, and that is exactly the number this file recorded.** The two shots do not overlap and they are not adjacent: **rows three and four of the grid fall in the gap between them** and were never captured. Those ten are EPS, Giropay, Bancontact, PayPal, Pix, Webpay, Multibanco, Blik, Przelewy24 and American Express.

**The failure mode, named so it can be checked for elsewhere.** Two captures of one scrolling surface were added together and the sum was written as a complete count, **with nothing verifying that the second shot begins where the first one ends.** A screenshot proves what is in it and says nothing about what is above or below it. **The arithmetic was sound and the assumption under it was never tested**, which is why the wrong number read as sourced for a week and was carried into node `4.1` and into two decision records.

**The check this earns:** a count taken from more than one capture of a scrolling surface names the overlap that joins them, or it is a lower bound rather than a count. **This table now carries the seam.**

**And the cost was real.** Node `4.1` shipped a payment block with two empty slot cards saying "which methods this product takes is not decided" while a list existed, and section 5b.1 was already addressing that node in writing. The undercount is not what caused that, but it is what would have shipped had the node used the list.

### 5b.2 Step 2, card: the rate is published, and so is the bonus

`acct_deposit_card_step2.png`, `acct_deposit_card_form.png`.

**"SELECT PROVIDER:"** two tiles, `ZEN` and a gift-card tile. Then a two column panel.

**Left, the form:** `Payment methods` with Visa and Mastercard marks · **`Enter The Amount`**, `20` · `Billing information` with an **Email** field · a checkbox, **"I have read and accept the Terms and Conditions"**, unchecked. Under the panel, six amount presets: `$5.00`, `$10.00`, `$20.00` selected, `$50.00`, `$100.00`, `$200.00`. Controls: `PREVIOUS` and `DEPOSIT`.

**Right, what you get:**

> **Rate `1.00` = `$1.00`** · **`20.00` + `1.00` Bonus** · "Your deposit bonus is **+5.00%**, but max **100 per 24 hours**"

**Three things this settles, and one of them corrects our own framing.**

1. **The coin is pegged one to one to the dollar and the product says so, at the moment of funding.** `sitemap.md` says "the baseline prices cases in coins with no visible conversion rate". **On the spending surfaces that is true. At the deposit step it is false: the rate is printed.** The honest version of our claim is narrower and still holds: **the rate is published once, where money enters, and never again on any surface where money is spent.** `C1` deletes the denomination for exactly that reason, and the reason is now precise rather than approximate.
2. **The deposit bonus is a standing percentage with a cap**, +5.00% up to 100 per 24 hours, and **the `+` control in the header carries a permanent `5%` badge** advertising it. Node `0.1` specifies that control with **no badge**. That divergence is now sourced.
3. **The terms consent is asked again here**, at funding, separately from the sign-in consent.

### 5b.3 Crypto: an address per network, a live rate, a minimum, and a precondition state

`acct_deposit_btc_address.png`. A `Choose Network` dropdown, a **QR code**, a `Crypto address` with a `COPY` control, then three lines:

> **Current deposit rate: 1 BTC = `64,185.74`** · **Promo bonus: `+5.00%`** · **"Attention! Minimal deposit 0.0001 BTC"**

Controls: `PREVIOUS` and `DONE`. **There is no amount field:** the person sends what they send, and the rate at the top is what it converts at.

`acct_deposit_solana_nowallet.png` is the state worth keeping. The same screen with the QR blurred out and an overlay: **"In order to continue you need to create your solana wallet address"**, with a `CREATE NEW ADDRESS` button. **The deposit address is generated per network on demand**, and until it exists the screen shows the shape of itself with the payload removed rather than an error.

### 5b.4 Gift cards leave the product

`acct_deposit_giftcards.png`. The second provider tile opens **six accordions**: `GIFT CARDS ON DIFMARK`, expanded, then `PULSE`, `KINGUIN`, `OFF GAMERS`, `KARTE DIREKT`, `ENEBA`. The expanded one shows six denominations, `$5` to `$200`, each with a **`BUY ON DIFMARK`** control.

**So one of the twenty five funding routes is a set of outbound purchases on six third party resellers**, and nothing on the screen says what happens after, how long the code takes to credit, or who to ask if it does not.

### 5b.5 What the deposit screens do not say, and it is the whole of `C3`

**No crediting time is published anywhere in this flow.** Not on the card form, not on the crypto screen, not on the gift card accordions. Row `C3` requires a named crediting window and node `4.1` builds a state on it.

**And the deposit history in this account makes that absence expensive.** Seventeen rows, and the most common status is **REJECTED**, in yellow, on `skinsback` deposits of `1.00`, spread across 2024, 2025 and 2026. **A person meets a rejection with no published window to measure it against and no route from the history row to an explanation.** That is `B4-3` and `B8-3` in one table, and it is now a walked fact.

### 5b.6 Two self-declared countries in one account, and they disagree

The settings tab reads **"Your Selected Country: United States"** with a `CHANGE` button. The deposit step 1 country selector, in the same account on the same day, reads **Ukraine**.

**So the live product carries two independent self-declared country values and does not reconcile them.** One filters payment methods, the other sits in the profile, and neither is evidence of anything. Node `0.12` can now cite a walked contradiction rather than argue from the terms clause alone, and `D-23`'s allowlist has a concrete failure mode to be measured against: **a market control that the person sets twice, differently, in two places.**

---

## 6. Profile, and the daily ladder gets its number

`acct_profile_daily.png`.

Two blocks side by side. Left, a card headed **DAILY CASES**: a large ring with **`0`** in it, the line **"Next level up at `5.00` wager"**, and an `OPEN` button. Right, a panel with two tabs, `PROMO` and `SYSTEM`, headed **MARKETING MESSAGES**, with `Mark all as read` and `Delete all`, and an empty state: an envelope illustration and **NO MARKETING MESSAGES**.

**This answers one of the four questions the shot list could not.** The home page block shows five tiers and `0.00 / 5.00 WAGER REMAINING`. The profile shows the same mechanic compressed: **the wager cost of the next tier is `5.00`**, and available cases sit at zero until it is met.

**And it names something `D-25` did not know it was buying.** The ladder is not only a home page block. **It has a second rendering in the account**, which means the mechanic follows the person to the surface they visit to check their own state. Node `1.0` section 2.5 rule 1 keeps the ladder off responsible play surfaces. **The profile is not one of those, so this is legal under the rule as written**, and it is recorded here so the second rendering is a decision rather than a discovery at stage 04.

---

## 7. Settings, and the responsible play tool that exists and cannot be found

`acct_settings_top.png`, `acct_settings_full.png`, `acct_settings_security_linked.png`.

Two columns. Left: `GENERAL`, `SECURITY`, `LINKED PROFILES`. Right: `NOTIFICATIONS`.

**GENERAL**

| Row | Control | Value observed |
|---|---|---|
| Username | `EDIT` | a name |
| **Your Selected Country** | **`CHANGE`** | **`United States`** |
| Steam trade URL | `EDIT` | a trade link, with the helper "Here you can get your trade URL" |
| Language | dropdown | `EN` |
| Sound | `OFF` / `ON` | on |

**SECURITY**

| Row | Control |
|---|---|
| Make me Anonymous | `OFF` / `ON` |
| **Deposit restriction or full account restriction** | **`TAKE A BREAK`** |
| Account Control | `LOGOUT` |

**LINKED PROFILES:** Steam, shown linked with a green tick, then Facebook, Twitter and Google, unlinked. This confirms the four providers found in the sign-in modal on the second public walk.

**Recaptured 22 August 2026 by the founder, and one row is different.** `acct_settings_top_22aug.png` and `acct_settings_linked_22aug.png`, filed beside the shots above. **Facebook is gone and Discord is in its place**, labelled and glyphed as Discord: Steam, Discord, Twitter as the X mark, Google.

**Neither record is corrected, because both are right on their own date.** The 18 August shot says Facebook in words and shows the Facebook mark; the 22 August shot says Discord in words and shows the Discord mark. **The live product changed between the two dates**, which is the case the dating rule exists for: a source with a date survives the thing it describes changing, and a source without one becomes wrong silently.

**And our own `D-55` shipped the newer set four days before it appeared here.** It chose Steam, Google, Discord and X on 21 August from three competitor modals, not from this product. **What was a divergence from the baseline on 21 August is a match to it on 22 August**, and that is recorded as a coincidence rather than as a source.

**Everything else in the two shots matches section 7 row for row**, twenty rows in four groups, with `Sound` now reading `OFF` and `Make me Anonymous` reading `OFF`, both of which are account state rather than product structure.

**NOTIFICATIONS:** two groups. `GAME NOTIFICATIONS`, two toggles, sponsored games from a partner and giveaway results. `CONFIRMATION MESSAGES`, six toggles: joining bots to case battles, joining bots to gunfights, skins selling, upgrade, crypto withdrawal, skins withdrawal.

### 7.1 The correction this forces, and it is the most useful finding in the set

**`baseline.md` section 6 says "Responsible play: zero" and that there is "no route anywhere in the inventory". That is wrong, and it is wrong in an instructive way.**

The tool exists. It is called **TAKE A BREAK**, it does **deposit restriction or full account restriction**, and it is the second row of the `SECURITY` block of the settings tab of the account page.

**What is actually true, stated precisely:**

- There is **no responsible play page**, and this is unchanged.
- There is **no route to the tool from anywhere**: not the footer, not the rail, not the header, not the home page. All four were re-checked on 18 August 2026.
- The tool is **filed under Security, next to Logout and an anonymity toggle**, which is the vocabulary of account protection rather than of self protection.
- **A person who does not already know it exists cannot find it**, and a person who does must be signed in, must reach the account, must open settings, and must read past the trade URL.

**So the finding is stronger than the original error, not weaker.** The baseline is not a product with no responsible play tooling. It is a product whose one tool is unfindable, unnamed as what it is, and filed as a security setting. **That is a better argument for node `6.1` than an absence would have been**, because absence can be answered with "nobody in the category has it" and this cannot: they built it and then hid it.

### 7.2 The geo control is a dropdown the person sets themselves

**"Your Selected Country: United States" with a `CHANGE` button.** Together with the terms clause found on the second walk, "services exclusively to residents of countries where such activities are not prohibited", this is the entire market control of the live product: **the person declares their own country and can change it at any time.**

`D-23` chose an allowlist closed by default. **The distance between the two is now fully documented**, and node `0.12` can cite a walked control rather than an inference.

---

## 8. Corrections this capture forces on earlier records

| Record | What it said | What is true | Where |
|---|---|---|---|
| `baseline.md` section 6 | "Responsible play: zero... no route anywhere in the inventory" | **A tool exists, `TAKE A BREAK`, with no route to it.** Section 7.1 above | Corrected in place, both readings kept |
| `baseline.md` section 9.3, second walk | "There is no cookie consent... no banner, no dialog, no drawer" | **A cookie banner exists**, `acct_cookie_banner.png`: a bottom bar with an icon, the consent text, links to the Cookie Policy and the Privacy Policy, an `ACCEPT` button and an `X`. **The second walk read a browser that had already accepted it**, so the DOM probe was accurate and the conclusion was wrong | Corrected in place |

**Both corrections are the same class of error and it is worth naming once.** A probe answers the question it was given. "Is there a cookie element in this DOM" and "does this product have a cookie consent" are different questions, and one browser profile cannot answer the second. **Any state that is remembered per browser or per account has to be captured on a fresh one, and that is now a rule for the next walk rather than a lesson.**

---

## 9. Still `[?]` after this capture

| What | Why it matters | How it gets answered |
|---|---|---|
| ~~The deposit flow~~ | **Answered, section 5b.** **Thirty five methods**, corrected 25 August 2026 from a recorded 25, section 5b.1a,, a published rate, a standing bonus with a cap, and **no crediting time anywhere**, which is the whole of `C3` | Captured 18 August 2026 |
| **Identity verification** | **Confirmed absent by the founder on 18 August 2026: the live product has none.** What follows from that is a decision rather than a capture, `D-26` | Founder, `D-26` |
| **The open and the reveal** | The single most important sequence in the product for design principle 2, and no frame of it exists in this repository | A capture of before, during and after one open |
| **Identity verification** | Node `2.7`. Nothing in the settings suggests it exists at all, which is itself a finding but not a confirmed one | Search the account for any KYC step |
| **Toasts and errors** | Node `0.5`. The confirmation toggles prove a confirmation dialog family exists, six of them by name, but none was captured | One capture of any confirmation dialog |
| **The withdraw state model** | `G1` names states and a per-state timer. The baseline's withdraw history is empty in this account | A capture from an account with a withdrawal in it |
| **Whether the 18+ checkbox is enforced** | Carried from the second walk | Stays `[?]`. Testing it means creating an account |
