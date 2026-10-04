# Stage 05 input: where the copy lives, and what is still open

**Written 3 October 2026, round 15 step 9, `D-151`.** Stage 05 step 1 inventories unique strings, not occurrences, and its pack says the inventory needs one column above all: **where each string lives**, so step 7 knows which file to open. A clean-context reader tried that inventory on four screens in round 15 and could list the rendered text but not sort or attribute it: it guessed thirty times and found about seventeen concepts with two or more names. This file is what those guesses needed. **It drafts no copy and decides no wording.** Where a decision already fixed a word it says which one; everything else is left open and owned by a named step of stage 05.

**How it was checked, not copied.** Every claim about `wireframes/_nav.js` was read in the current file by name. Every wording in section c was re-read from the rendered product: all 132 product pages rendered at 1440 on 3 October 2026 with the prototype panel removed, visible text, accessible names and titles. Primary controls in section d were counted the same way. The round 15 reader's list predates steps 1 to 9 of round 15, so several of its findings are already fixed and are marked so.

---

## a. Where every string lives

**Five places, and a string lives in exactly one of them.** Stage 05 rewrites a string where it lives and nowhere else.

### a.1 The page html

Everything unique to one screen or one family of states: headings, block text, state messages, buttons that belong to the screen. Each page is the source of its own text. **The no-script fallback inside a marked span is not a source**, see a.3.

Hand-typed residue that repeats and is not yet in a declaration, found by counting text nodes outside `data-str` on all 132 pages:

| String | Pages | Note |
|---|---|---|
| `Low risk`, `Medium risk`, `High risk` on the case tiles | catalogue family, 5 to 6 each | The band word is a sample per case, `D-124`; the word "risk" is copy typed per tile |
| `Worth when it was won, <date>`, `Opened <date>`, `<item>, won from <case>` | the five result pages | Frames around one round's data, typed per page |
| `data-l` cell labels, `Skin name`, `Your skin price`, `Market skin price`, `Your balance impact` | `withdraw-clock`, `withdraw-offer-expired`, `withdraw-steam-degraded` | Labels shown at 360 through an attribute; they repeat `WF_STR` keys by hand |
| ~~`Withdraw` as a button label~~ | `legal-changed`, `responsible-excluded`, `responsible-in-force` | **Fixed in round 15, `D-151`: they read Send to Steam from `WF_STR`** |

### a.2 A render function in `wireframes/_nav.js`

The shell and every shared block are built by functions, so **their strings are physically absent from the html**. The stage 05 pack says so in "Вхід і вихід" and it still holds.

| Surface | Functions that hold its strings |
|---|---|
| Header | `renderShell` (money captions `Balance` and `Value of items held`, the `+` control and its accessible names, the guest `Sign in`, the mobile menu) |
| Rail | `renderShell` with `railItems`, `langControl` (`LANGS`, `LANG_ONLY`), `socialSlots`, the sound control and the collapse toggle |
| Mobile bar | `renderBar` with `barItems` |
| Footer | `renderFooter` (statistics strip, brand block, five columns, popular cases accordion, the 18+ statement and the market line, payment marks, copyright, the coin note), `mountFooterTicks` |
| Account menu | `accountControl` |
| Sign-in card | `authCard`, `authDialogHTML`, `wireAuth` (the refusal lines), `mountAuthDialog`, `renderAuth` |
| Filter drawer | `filterDrawerHTML`, `mountFilterDrawer` |
| Deposit layer | `payLayer`, `payHead`, `payCountry`, `payOffer`, `payTile`, `payChosen`, `depFigs`, `depProvider`, `depCard`, `depCrypto`, `depGift`, `depSkins`, `depBody`, `mountDeposit`, `mountPay`, `mountDepositDialog`, `mountSkinDep`, `mountCryptoNet`, `mountPromo`, `mountCrediting` |
| Cookie layer | `mountCookie` with its `layer1` and `layer2`, plus `CK_PURPOSES` and `CK_STATES` |
| Gate layer | `gateHTML`, `openLine`, `refusalActs`, `mountGate` |
| FAQ | `FAQ` and `renderFaq` (support page) |

Other renderers that own copy on specific screens: `homeBody` and `dailyLadder` (Home), `caseBody` (the case screen below the stage), `mountOutcomeActs` and `mountMultiCount` (outcome receipts), `feedTile` and `renderFeed` (ticker), `proofPanel`, `renderResult`, `renderVerifierPrefill`, `mountVerifier` (proof and verifier), `renderAcctHero` (account band and tabs), `mountInvBar` (My items selection bar), `wdRow`, `wdOfferCard`, `mountWithdrawMany` (withdrawal; it rewrites the send button), `histTable`, `histEmpty`, `histPanel`, `rollRow`, `itemCard` (history), `msgRow`, `mountMsgs` (profile messages), `coLayer`, `mountCashout` (cash out), `excludeHTML`, `mountExclude`, `mountRp` (responsible play answers and the 6.2 dialog), `mountSettings`, `mountSystem`, `mountSupportSubject`, and the shared `confirmFirst` ("Press again to ...").

**Runtime rewrites.** Some html carries a label the script replaces: the send button on `withdraw.html` reads `Send it to Steam` in the file and `Send 1 item to Steam` on screen (`mountWithdrawMany`); outcome sell buttons become `Sold, +N` (`mountOutcomeActs`); sale buttons become their question (`confirmFirst`). **The function is the source, never the html text it overwrites.**

### a.3 `WF_STR`, one declaration for every string repeated on five or more pages

Declared near the top of `_nav.js`, above every reader. **161 keys in ten groups**, each group named by a comment in the declaration:

| Group | Keys | Examples |
|---|---|---|
| Ironbound's published pair | 1 | `rtpEv` |
| Shared navigation words and acts | 22 | `home`, `cases`, `support`, `signIn`, `myItems`, `addFunds`, `sendToSteam`, `responsiblePlay`, `provablyFair`, the four legal document names, `copy`, `save`, `peg` |
| Case head | 6 | `howItWorks`, `riskBand`, `favourite`, `nineItems`, `entryCost`, `checkRound` |
| Catalogue | 12 | `catalogueH1`, the four category names and their lines, `numbersH2`, `numbersBody` |
| Result and player | 5 | `whatThisPlaceIs`, `howProofWorks`, `wonBy`, `worthNow`, `rolls` |
| Withdrawal | 6 | `goingToSteam`, `medianToSteam`, `p90ToSteam`, `yourSkinPrice`, `marketSkinPrice`, `balanceImpact` |
| Support | 2 | `questionsAnswers`, `closed` |
| Provably fair | 52 | the whole fair page body, the proof field names, the two questions |
| Legal | 15 | the identification labels and six `...Sample` values |
| Responsible play | 40 | the block text, the four boundaries, every period, the two help lines |

**How a page reads it.** A page marks each copy `<span data-str="key">text</span>`, or puts `data-str` on an existing span or option; the boot fills every mark from `WF_STR` before `nbspFigures` runs. ~~1 221 marks on 122 of the 132 product pages~~ **1 245 marks on 123 of the 133 product pages, recounted 4 October 2026 by `D-157` after round 16 added the refund policy page.** Renderers read the same entries directly, 61 reads in `_nav.js` (rail, bar, account menu, footer, sign-in dialog title, FAQ links, account tabs, history tabs, the crypto peg, Copy, proof fields, home cards, filters, withdrawal labels, the cookie link, and the period maps `EX_END` and `COOL`). **Four values hold markup and are filled as markup:** `fairAlgo`, `fairExample`, `rpNeverCloseList` and `rpTherapy`. (The step 9 summary said three; `rpNeverCloseList` carries a `<strong>`.)

**What stage 05 does with it.** Rewrite the value in `WF_STR`, never page by page. The text inside each marked span is the no-script fallback and goes stale the moment a value changes; **whether step 7 regenerates the 1 245 fallbacks by script or accepts that a no-script reader sees the draft is open, owner stage 05 step 7.**

### a.4 The other single declarations

| Declaration | What it holds | Copy or data |
|---|---|---|
| `WF_MONEY` | The account's balance and value held, read through `moneyNow`, moved by `moneyAdd` | Data, samples marked in node `5.1` |
| `WF_PUB` | Median and nine-in-ten withdrawal times, filled into `data-pub` | Data, samples marked in node `1.0` |
| `WF_WHO` | Account name, id, since; filled into `data-who`, read by the menu | Data, a sample name |
| `WF_BONUS` | The deposit bonus: percentage, cap, period, wagering false | Data; the sentence around it is copy in `renderShell` and the deposit layer |
| `WF_ROLLS` | The account's ten rolls for history and profile | Data, samples marked in node `5.9` |
| `ROUNDS` | One record per round: item, values, time, seeds, ticket | Data, samples marked in node `7.1` |
| `WF_SHELF` | The copies on sale for each item on the withdrawal page | Data, samples marked in node `5.3` |
| `FEED`, `FEED_WHO` | The ticker's rounds and winners | Data, samples marked in node `0.8` |
| `CASE_ITEMS` | Ironbound's drop table: tiers, items, chances, values, ranges | Data |
| `LANGS` | The nine language names | Copy in English by `D-42`; `LANG_ONLY` beside it is copy |

**Declarations that hold copy, not only data:** `FAQ` (seven sections, their lines, one question and answer each), `ITEM_STATE` (`Still held`, `Sending to Steam`, `Sold back`, `Sent to Steam`), `ROLL_PROOF` (three proof failure sentences), `HIST_TABS` and `HIST_COLS` (tab names and column heads), `ACCT_TABS`, `MSG_TABS` (tab names and empty states), `CK_PURPOSES` (cookie purposes and their descriptions), `PAY_CATS` (deposit category names). Stage 05 inventories these as copy that lives in `_nav.js`.

### a.5 What is data rather than copy

Case, weapon, skin, wear and rarity names; prices, chances, ticket ranges, floats, patterns, hashes, seeds, references and dates; payment method and provider names (`WF_PAY`, `COINS`, `CO_NETS`, and Steam, Google, Discord, X on sign in, node `2.4` `D-55`); the `coins` unit spans next to tile prices; per-round result values. **Stage 05 aligns the frame around a figure, never the figure.** Accessible names, titles and input placeholders typed on a page are copy and live on that page.

---

## b. What is not product copy

**Stage 05 inventories none of the following as copy**, and `conventions.md` section 2 carries the rule since `D-151`.

| Kind | What it is, and where | Why it is not copy |
|---|---|---|
| **Slot labels** | `Logo` in the rail and the footer (`.wf-logo-mark`, `renderShell`, `renderFooter`); `Social` over six empty slots in the rail (`.wf-rail-soc-h`, `socialSlots`); `Image` in the sign-in dialog (`.wf-dlg-art`, `authDialogHTML`); `QR code` on the crypto route (`.wf-crypto-qr`, `depCrypto`) | A reserved space for an asset stage 06 delivers, `conventions.md` section 2 on icons, `D-50`. The social set is the founder's at stage 06, `D-150` item 3. `No code yet` on the no-address state is state copy, not a slot label |
| **Placeholder fields** | Footer identification `Operating company · Registration no. · Registered address` and payment marks `Card`, `Wallet`, `Crypto` (`renderFooter`); the six `...Sample` values in `WF_STR` on the legal pages; `support@cs2clutch.example` | Stand-ins for facts a contract or a licence decides. Node `0.2` section 3, band 3 rows, and node `0.9`'s `D-130` amendment, "drawn as field values". Their **labels** (`Operating company`, `Email`) are copy |
| **The working name** | `CS2 Clutch` in titles, the copyright line, accessible names, the example domain | `CLAUDE.md` opening line: a working placeholder name. The sentence around it is copy; the name is not glossary material |
| **Input placeholders are copy** | `Amount`, `Case name`, `The code from the card you bought` | Listed here so they are not mistaken for the placeholder fields above: these are hints a person reads, and stage 05 owns them |
| **The prototype panel** | `#wf-panel` and its toggle, built by `renderPanel`, `renderFlows`, `renderCoverage` from `WF_NAV` (cluster names, state labels, flow labels, "All screens") | The prototype's navigation, never the product's |
| **The hub** | `wireframes/overview.html` | A stage page, not a product page |
| **Html and script comments** | Every `<!-- -->` on a page and every comment in `_nav.js` | Reasoning for the next builder. Round 15 step 9 corrected the comments that contradicted the render (case outcome family, sign in, responsible play, withdrawal, settings, player pages, `_nav.js`); where a comment and the render ever disagree again, the render and the node's latest dated amendment win, `D-145` "The rule this step ran on" |
| **Samples by `D-124`** | Every figure or name drawn because the real one is unknown | Data, not copy. Each node marks its own in a paragraph headed "Samples, `D-124`, marked here", in its latest dated amendment: `account`, `case`, `catalogue`, `deposit`, `gate`, `history`, `home`, `legal`, `provably-fair`, `responsible`, `settings`, `signin`, `support`, `system`, `ticker`, `withdrawal`. Elsewhere: `profile` and `public-profile` in their `D-130` amendment tables, `cookie` in section 1.4 on the row drawn since `D-130`, `public-result` in "One record per round", `footer` in section 3 band 3 rows. **Derived figures inherit the mark:** the expected value `11.68 coins` and the `37.000 %` chance are arithmetic on the sample drop table, node `3.3` section 5, "recomputable with arithmetic from the chances and the values printed on the same screen" |

---

## c. Concepts named more than one way

Re-verified against the render of 3 October 2026. **"Fixed" means a decision or a node already chose the word; stage 05 aligns the stragglers. "Open" goes to the Voice glossary, stage 05 step 3.**

| # | Concept | Every wording found, and where | Fixed | Open for the glossary |
|---|---|---|---|---|
| 1 | **Taking an item out to Steam** | `Send to Steam` (`WF_STR.sendToSteam`: withdrawal H1 and title, My items bar, outcome control, account card); `Send 1 item to Steam`, `Send 4 items to Steam` (`mountWithdrawMany`); `Withdraw` (button, hand typed on `legal-changed`, `responsible-excluded`, `responsible-in-force`); `Withdrawals` (account menu row, `accountControl`; History tab, `HIST_TABS`); `withdrawal` as the noun (history, support, settings, `How a withdrawal settles` in `caseBody`); `Items to withdraw` (`withdraw`, `withdraw-many`); `To withdraw skins, link Steam` (`authCard`); `To withdraw, deposit at least $5.00 first` (`depCard`); `Taking what you hold out to Steam` (`WF_STR.rpNeverCloseList`, `excludeHTML`, two history and legal pages); `Median withdrawal to Steam` (`homeBody`) against `Median time to Steam` (`WF_STR.medianToSteam`); `Sending to Steam`, `Sent to Steam` (`ITEM_STATE`, `mountMultiCount`) | **The act is `Send to Steam`**, `D-128` "The H1 is the button's own name", carried into nodes `5.1` and `5.3` by `D-145` and `D-149`. The three `Withdraw` buttons are stragglers against it | The noun for the record and the menu row (`Withdrawals`); the verb in running text (withdraw or send); the home caption against the withdrawal caption |
| 2 | **Our value for an item** | `Value` (drop table head, `caseBody`); `Credited 12.90` (`case-outcome`, `case-interrupted`, typed); `Our price for it` (`wdRow`) and `Your skin price` (`WF_STR.yourSkinPrice`) **for the same 21.40 on the same screen**; `Value of items held` (header, `renderShell`); `Worth now` (`WF_STR.worthNow`); `Worth when it was won` (result pages, typed); `Credited at our value` (`depSkins`); `at its value` (`FAQ`). `Credited` is also the deposits ledger head for an amount paid in (`HIST_COLS`), a different sense | None. Node `0.11` owns the figure, not its name | One name for our value, and whether `Credited` may mean both a win's value and a deposit |
| 3 | **A copy bought for you, and "market" in three senses** | Our own shelf: `Market offers`, `412 on the market`, `Market skin price` (`WF_STR.marketSkinPrice`), `Based on the market price` (`mountWithdrawMany`), and `a copy from us` on the outcome. The Steam Community Market: `See it on the Steam Market` (outcome), `Steam 50.43 coins` (`caseBody`), `The Steam listing` (`wdRow`), `-11% vs Steam` (`wdOfferCard`). A jurisdiction: `a market we do not serve` (withdrawal), the gate's four headings (`gateHTML`), `Open only in the markets we have cleared` (`renderFooter`), `Only markets we operate in are listed` (settings) | **What the shelf is**: `D-92`, "The market is us". Not its name | A name for our shelf that is not "market"; one word for a jurisdiction; whether "Steam Market" stays the only use of "market" |
| 4 | **Adding money** | `Add funds` (`WF_STR.addFunds`: header control and its accessible name, deposit titles, `Add funds to open 5 again`); `Adding funds` (`WF_STR.rpCanCloseList`); `Adding funds is closed for now. Your limits` (`renderShell` under a boundary); `put in` (`WF_STR.rpDepositWhat`); `Deposit` as the noun (`Deposits` tab, `A deposit` subject, `Deposit limit`); `Deposit 3 skins` as a verb (`depSkins`); `Deposit dialog` (a page title) | **The act is `Add funds`**: one `WF_STR` entry, the accessible name since `D-94`, and the label named in node `4.1`'s baseline row by `D-134`. The round 15 reader's `Deposit` on the `+` control is gone: every state now says `Add funds` | `deposit` as the noun for one payment against `Add funds` as the act; the `Deposit 3 skins` verb; `put in` |
| 5 | **Limit and boundary** | `Deposit limit`, `Session limit`, `Cool down`, `Self exclusion` (`WF_STR`); the umbrella `boundary` (`WF_STR.rpFour`, `rpTighten`, `rpClosesH`, `mountRp`), and the umbrella `limits` (`Your limits` accessible name, the footer's 18+ line, settings, the FAQ section `Limits and self exclusion`, legal `Limits you set on yourself`, the page title); a third sense, an obstacle to withdrawal: `What each limit means` (withdrawal) and the staged market cap `The limit` (`gateHTML`) | **`Deposit limit`**, `D-103`: "the label `D-103` gave it so the deposit and this page use one name", node `6.1` block 3. `Spend ceiling` is gone from the render | The umbrella word, boundary or limit; whether withdrawal obstacles and the staged market cap may reuse "limit" |
| 6 | **Support** | `Support` (`WF_STR.support`: footer button, gate refusals, responsible play block 9); `Contact support` (footer Help column, sign-in refusal, `authCard`); `Need help?` (`renderFooter`); `Help` (footer column); `Support that is not a limit`, `Help that is not ours` (`WF_STR`); `Support and appeals` (support title); `Tell support below` (`gateHTML`); `Support if not.` (deposit) | `Support` as the destination, through `WF_STR` | `Contact support` against `Support` for one link; `Help` as a column name against `Support` as its destination |
| 7 | **Responsible play** | `Responsible play` (`WF_STR.responsiblePlay`: H1, title, menu row, footer link); `Play responsibly` (footer column label and its navigation name, `renderFooter`) | **Both, as two things**: `D-29` and `D-44` keep a column named `Play responsibly` holding the destination `Responsible play` | Only whether one place needs two names |
| 8 | **Legal document names** | `Terms of use`, `Privacy policy`, `Cookie policy`, `Refund and payments policy` (`WF_STR`, footer Company column, legal titles); `the Terms and Conditions and the Privacy Policy` (sign-in consent, `authCard`); `Cookie policy v3` (cookie layer) | **The names**: node `0.9`'s SEO block titles the document `Terms of use`, and `WF_STR` carries the four. The consent line is the straggler | None beyond aligning the consent line |
| 9 | **Roll, round, open** | `roll`: `Nine items, one roll.`, `Entry cost, one roll`, the `Rolls` tab, `Opening 2 rolls`, `Roll details`, `the chances the roll used`. `round`: `Check this round` (`WF_STR.checkRound`), the fair page throughout, `How a round is checked` (`caseBody`), `unsettled rounds` (settings). `open`: `Open for 12.40 coins`, `Open again`, `Expected value per open`, `Cases opened` (footer), `12.40 coins to open` (history). **One label splits live:** `Server seed hash, published before the round` (`WF_STR.fairHashLabel`, fair page) against `... published before the roll` (result pages). And `open` also means available: `Withdrawal to Steam is open` | The act is **open**; node `0.14` and the fair page use **round** for the proven unit | Whether roll and round are one word; the hash label; "open" as availability |
| 10 | **Item, skin, win, drop** | `item`: `My items` (`WF_STR.myItems`), `Nine items`, `Value of items held`; `skin`: `Skin name`, `Your skin price`, `To withdraw skins`, `send you skins`, `CS2 Skins`, `All skins`; `win`: `a win cannot be sent to you` (`caseBody`), `your wins` (settings), `What you win` (legal); `drop`: `Live drops`, `Best drops`, `What usually drops`, `How drops are proven`; `what you hold` (responsible play) | `My items` for the destination, `D-128` | The general noun for the thing a person owns |
| 11 | **The coins unit, printed or dropped** | Dropped: `Credited 12.90 · a copy from us 19.60` (outcome html); `Sold, +12.90` (`mountOutcomeActs`) against `Sold, +21.40 coins` (`wdRow`) and `Sold, +N coins` (`mountInvBar`); `making it 76.70`, `leaving 72.25` (`mountWithdrawMany`); `Sending to Steam: Glock-18 -6.70` (`mountMultiCount`); `3 skins, 13.40 plus 0.67 bonus` (deposit skins); unsigned `Send to Steam, 6.70 coins` where the withdrawal signs `+2.50`. And dollars where coins are the denomination: `Deposit limit $40.00 in force`, `Deposits are capped at $100 a week`, `deposit at least $5.00` | **The rule**: node `0.11` section 5, rule 10, "A money figure carries its unit, and a coin figure carries its peg wherever money is spent", on `D-28` and `D-95` | Which unit a limit and a minimum are stated in; the sign convention for a settlement figure |

**Smaller splits, the same treatment:**

| Concept | Wordings | Fixed or open |
|---|---|---|
| Selling an item back | `Sell for 12.90 coins`, `Sell for coins`, `Sell it back for`, `Sold back`, `Selling back`, `Press again to sell` | The act is **Sell**, `D-38`; "sell back" in running text is open |
| Risk | `Risk band` (`WF_STR.riskBand`), `Risk level` (`filterDrawerHTML`), `Low risk` (tiles), `Drop the risk level` (empty catalogue) | Open |
| Favourite | `Favourite` (`WF_STR.favourite`), `Liked` (`filterDrawerHTML`, the baseline's word) | Open |
| Cost of one open | `Entry cost, one roll` (`WF_STR.entryCost`), `Price amount, in coins` and `Minimum entry cost` (`filterDrawerHTML`), `Open for 12.40 coins`, `12.40 coins to open` | Open |
| The fairness destination | `Provably fair` (`WF_STR.provablyFair`), `How rounds are checked` (`caseBody`), `How drops are proven` (`refusalActs`), `How the proof works` (`WF_STR.howProofWorks`) | Destination name fixed by `WF_STR`; the link phrases are open |
| Links that do not match their target heading | `How it works` to `How this case works`; `What usually drops` to `Published against observed` | Open |
| Signing in | `Sign in`, `Sign in with Steam`, `or continue with`, `link Steam`, `Sign out` | **Fixed**: the act and the title are `Sign in`, `D-138`; the provider control names Steam, `D-105` |
| Age | `18+`, `Over 18 only`, `I declare that I am 18 or over` | Three functions, a mark, a statement, a declaration; the declaration's form is `D-26` and `D-58` |
| **Upheld, in opposite senses**, added by round 16, `D-156` | `The restriction stands` and the clock's `Upheld` on `withdraw-restriction-upheld` (node `5.7`: our decision upheld, the appeal lost); `Your appeal was upheld` and `The restriction is lifted` on `support-upheld` (node `0.10`: the appeal won) | **Open.** One word names both outcomes of one appeal; the glossary picks a word for each |

---

## d. Main action per screen

**The rule**, `conventions.md` section 1.6: on any screen there is exactly one main action and the footer never competes with it. **Two named exceptions, `D-140`:** the outcome keeps two, `3.6` and `3.7`, Open again and Sell, by `D-38`; responsible play keeps none, `6.1`, because promoting one brake is the product choosing which brake a person should want. **A page for reading may have none, `D-146`**: a ledger, a document, a shelf or a list of answers. **The rule is never more than one. A layer is its own screen**, and the shell's Sign in behind its scrim does not count.

**Stage 05 checks this in the text, not by class**, `conventions.md` section 6. Two screens carry their main action as a link rather than a primary control: Home and the catalogue, where it is a case tile (node `1.0` section 5, node `3.1` section 6). Counted on 3 October 2026, visible primary controls at 1440:

| Node | Screen | Main action | No main action, and why |
|---|---|---|---|
| `0.3` | System pages | `Home` | `system-500-noshell`: the carriers cannot render |
| `0.4` | Cookie consent | None by symmetry: Accept and Reject are equal and neither is primary, node `0.4` | The whole node |
| `0.9` | Legal | `Read the current version, v4` on the superseded state | A document, `D-146` |
| `0.10` | Support | `Send`, `Send the appeal`, `Reply`, `Back to the withdrawal` | Submitted, answered, refused, deadline: nothing for the person to do, the next act is ours |
| `1.0` | Home | A case tile, node `1.0` section 5; in `1.1` the strip's next step | Not a primary class, by the node |
| `1.2` | Provably fair | `Recompute this round`; `Report this round` on `1.4` | |
| `2.1` | Geo gate, a layer | `Continue` (staged); `Support` (blocked, not launched, unavailable) | `gate.html`, the check in progress |
| `2.4` | Sign in | `Sign in with Steam`; `Try again` on `2.5`; `Back to the case` on `2.6` | |
| `3.1` | Catalogue | A case tile, node `3.1` section 6; `Show 12 cases` in the open drawer | Not a primary class, by the node |
| `3.3` | Case, phase 1 | `Open for <total>` with an account; `Sign in` as a guest | |
| `3.5` | The open | | The reveal: nothing to press while it plays |
| `3.6`, `3.7` | Outcome, interrupted reveal | **Two**: `Open again for <total>` (or `Add funds to open N again`) and `Sell for <value>`, `D-140` | |
| `4.1` | Deposit | `Pay`, `Create my address`, `Done, I have sent it`, `Redeem`, `Deposit 3 skins`, `Try again` | Method choice (a tile is the act), ceiling reached (the stop), crediting (a wait) |
| `5.1` | My items | `Send to Steam` on the selection bar; `See the cases` when empty; `Request cash out` in its layer | |
| `5.3` | Withdrawal | `Send 1 item to Steam`; `Send the offer again` on `5.8`; `Appeal this` on `5.6`; `Back to my items` on `5.4` | After the request, node `5.3` "Main CTA, and the deliberate absence of one": the next act belongs to us, Steam or the person inside Steam |
| `5.9` | History | `Appeal this` on the restricted withdrawals tab | Ledgers, `D-146` |
| `5.10` | Profile | `See it as a stranger does`, `D-89` | |
| `5.11` | Settings | `Save`; `Go to My items` with no Steam linked | |
| `6.1` | Responsible play | | **None by `D-140`** |
| `7.1` | Public result | `Recompute this round yourself`, `Report this round`, `Copy the link`, `Open the verifier` | `result-noproof`: nothing to check |
| `7.3` | Public profile | `What this place is` on the gone state | A shelf, `D-146` |

---

## e. Phase and target emotion per screen

**Phases T1 to T8 and their target emotions are `research/docs/cjm-to-be.md` "To-Be path"; which screen sits on which phase is `ia/docs/sitemap.md` "Matrix: functional jobs against MVP screens" and `ia/docs/flows.md`.** Where neither prints a phase the row says so and names the owner, rather than inventing one.

| Node | Screen and pages | Phase | Target emotion | Where it is printed |
|---|---|---|---|---|
| `0.3` | System pages, 7 | None printed | Open | Owner: stage 05 step 2, tone table |
| `0.4` | Cookie consent, 8 | None printed; it opens over Home on a first visit | Open | Owner: stage 05 step 2 |
| `0.9` | Legal, 5 | None printed; reached from the sign-in consent (T3) and the footer | Open | Owner: stage 05 step 2 |
| `0.10` | Support, 10 | **Appeal states: T8.** Entry and question: none printed | T8: **Waiting without suspicion** | `cjm-to-be.md` "T8. Payoff or exit", capabilities: "an appeal with a published response deadline", backlog row `G4` |
| `1.0` | Home, 2 (`1.0`, `1.1`) | **T1, T2** | T1: **Curiosity that survives a second look**. T2: **Disarmed** | `sitemap.md` matrix, S-A1 |
| `1.2` | Provably fair, 6 | **T2** by Related Job 1, **T7** by Related Job 3 | **Disarmed**; **a result that is understood, whether it is good or bad** | `sitemap.md` matrix, S-A2 ticks RJ1 and RJ3; `flows.md` Flow 4 places the verifier at "T7. The outcome" |
| `2.1` | Geo gate, 5 | **T3** | **Settled** | `sitemap.md` matrix, S-B1 |
| `2.4` | Sign in, 7 | **T3** | **Settled** | `sitemap.md` matrix, S-B2 |
| `3.1` | Catalogue, 7 | **T5** | **Informed appetite** | `sitemap.md` matrix, S-C1; `flows.md` Flow 1a |
| `3.3` | Case, phase 1: `case`, `case-account` with 2 and 5, `case-nocounter`, `case-degraded` | **T5** | **Informed appetite** | `sitemap.md`, S-C2 carries T5, T6 and T7 |
| `3.5` | The open: `case-open` with 2 and 5 | **T6** | **Projected, not measured**: the rush, genuine suspense rather than manufactured tension, Emotional Job 1. `cjm-to-be.md` names it a design intention and the stage's open hole, U-13 | `cjm-to-be.md` "T6. The open" |
| `3.6`, `3.7` | Outcome: `case-outcome` with 2 and 5, `case-interrupted` | **T7** | **A result that is understood, whether it is good or bad.** Goal: Emotional Job 2, a moment sharp enough to become a story | `cjm-to-be.md` "T7. The outcome" |
| `4.1` | Deposit, 11 (`4.1` to `4.5`) | **T4** | **In control of a decision already made** | `flows.md` Flow 2 |
| `5.1` | My items, 4 | **T8** | **Waiting without suspicion** | `flows.md` Flow 3 starts at S-E1 |
| `5.3` | Withdrawal, 8 (`5.3` to `5.8`) | **T8**, the floor of the As-Is map at -5 | **Waiting without suspicion** | `flows.md` Flow 3 |
| `5.9` | History, 16 | None printed | Open; its parent `F3` sits in the backlog group "6. The outcome", T7 | `flows.md` Flow 5 prints parents, not phases. Owner: stage 05 step 2 |
| `5.10` | Profile, 3 | None; no parent, `D-36` | Open | Owner: stage 05 step 2 |
| `5.11` | Settings, 4 | None printed; its field's parents `G1` and `G5` stand on T8 barriers `B8-2`, `B8-3` | By parent, T8: **waiting without suspicion**, not printed | `flows.md` Flow 5. Owner: stage 05 step 2 |
| `6.1` | Responsible play, 5 (`6.1` to `6.3`) | **T7 and T4**: the loop `B7-4` starts at T7, the limit is read at T4 | **T4's "in control of a decision already made"**, never T7's: the page is never a reaction to a result, and it never celebrates, never urges and never counts down | `flows.md` Flow 2a, phase paragraph, `D-151` |
| `7.1` | Public result, 6 (`7.1`, `7.2`) | **T7** | **A result that is understood**; its share row `F4` is Emotional Job 2 | `flows.md` Flow 4; `F4` in the backlog group "6. The outcome" |
| `7.3` | Public profile, 5 | None; no parent, `D-90` | Open | Owner: stage 05 step 2 |

**One constraint travels with T4 and with responsible play**, `flows.md` Flow 2a: no counters, no streaks, no status, no session score, no celebration of staying inside a limit. **In copy that means no completion words on a boundary.**

---

## f. What the reader had to guess, row by row

The round 15 reader's section 6, thirty guesses. **24 are answered by the files now, 6 are still open**, each with an owner.

| # | Screen | Guess | Answer now | Status |
|---|---|---|---|---|
| 1 | all | `Logo`, `Social`, `IMAGE SLOT, STAGE 06` are scaffolding | They are slot labels; the dialog's now reads `Image`. Section b of this file and `conventions.md` section 2 since `D-151`; the social set is the founder's at stage 06, `D-150` | Answered |
| 2 | all | `winner, as shown` is a placeholder name | Gone. The ticker prints sample names from `FEED_WHO`, marked in node `0.8` "Samples, `D-124`, marked here" | Answered |
| 3 | all | Footer identification, `Card Wallet Crypto`, `© 2026 CS2 Clutch` are placeholders | Placeholder fields, node `0.2` section 3 band 3 rows, `D-124`; section b here. The copyright sentence is copy, the name in it is not | Answered |
| 4 | all | `CS2 Clutch` is out of the glossary | `CLAUDE.md` opening line, a working placeholder name; section b here | Answered |
| 5 | all | Accessible names are in scope | Yes: nodes put content into them on purpose, the bonus cap in the `+` control's name (`D-94`, node `0.1`) and the account name in the menu control's (`D-49`). Inventory them as type "accessible name"; they live where section a says | Answered |
| 6 | all | `<title>` and meta belong to the node | Yes: the stage 05 pack, step 1, marks them "SEO / IA ownership", aligned by Voice and synced back into the node. The three disagreements the reader found are closed: withdrawal's title is `Send to Steam` (node `5.3`, `D-149`), responsible play's is section 8A's (`D-146` item 5), sign in's is section 9A's | Answered |
| 7 | all | Which strings to edit once and which per page | Section a: `WF_STR` holds every string on five or more pages; `Risk band`, `Nine items, one roll.`, the peg and `Median time to Steam` are all in it now | Answered |
| 8 | all | Html comments are not authority | Section b: comments are not copy, round 15 step 9 corrected the contradicting ones, and `D-145` makes the render and the node's latest amendment win | Answered |
| 9 | all | The dated amendments outrank the numbered sections | `D-145` and `D-149` struck every stale line in place with the decision that replaced it; sign in 9B now reads `Sign in` by `D-138`, responsible play's headings follow the render | Answered |
| 10 | case-outcome | One main action | Two, by `D-140`: Open again and Sell. Section d | Answered |
| 11 | case-outcome | Tone | T7's target, "a result that is understood, whether it is good or bad", `cjm-to-be.md` "T7. The outcome". Section e | Answered |
| 12 | case-outcome | `Send to Steam, 6.70 coins` is a charge | Still unsigned while the withdrawal signs `+2.50` and the five-roll line signs `-6.70`. The rule that every figure carries its unit is fixed (node `0.11` rule 10); the sign convention is not | **Open**, owner stage 05 step 4, number format rule |
| 13 | case-outcome | `Saved to My items.` should change after a sale | The sale is drawn (`D-143`, node `3.3` "Sold"), but the line under the acts still says `Saved to My items` after the item is sold | **Open**, owner stage 05 step 4, the post-sale line, reported to node `3.6` |
| 14 | case-outcome | Float, pattern, `19.60`, `11.68`, `37.000 %`, header balance are samples | Marked: node `3.3` "Samples, `D-124`, marked here" (float, pattern, `19.60`, RTP), node `5.1` (the balance pair); `11.68` and `37.000 %` derive from the sample table, node `3.3` section 5 | Answered |
| 15 | case-outcome | The rendered `How this case works` is the text to rewrite | Yes: node `3.3` section 15C is replaced by the render of `D-125`, two paragraphs, H3 `How a round is checked` | Answered |
| 16 | withdraw | The act's name is `Send to Steam` | `D-128`; title and H1 both follow it now. The noun `Withdrawals` on the menu row and the history tab is a glossary item, section c concept 1 | Answered |
| 17 | withdraw | `Send it to Steam` in the html is not a string | Right: `mountWithdrawMany` writes the label; the function is the source. Section a.2, runtime rewrites | Answered |
| 18 | withdraw | `Our price for it` and `Your skin price` are one figure | Still both, on one screen | **Open**, owner stage 05 step 3, section c concept 2 |
| 19 | withdraw | "Market" means our shelf | `D-92` says the shelf is us; the screen still calls it a market beside the Steam Market and a jurisdiction | **Open**, owner stage 05 step 3, section c concept 3 |
| 20 | withdraw | Tone at T8 is calm and factual | T8's target, "waiting without suspicion", `cjm-to-be.md` "T8. Payoff or exit" | Answered |
| 21 | signin | H1 and title are `Sign in` | H1 `Sign in` by `D-138`, node `2.4` section 9B; the title stays `Sign in with Steam. CS2 Clutch`, section 9A. A title and an H1 may differ | Answered |
| 22 | signin | Keep `Back to the case` on a cold arrival | Still printed whatever the arrival; node `2.4` gives the route, not the wording, and `conventions.md` section 1.4 leaves the wording to stage 05 | **Open**, owner stage 05 step 4, with the route in node `2.4` block 6 |
| 23 | signin | `✓` is a glyph, not copy | It sits in an `aria-hidden` span: a mark for the eye, an icon in stage 06's sense, `conventions.md` section 2 | Answered |
| 24 | signin | Google, Discord, X are final names | Provider names, node `2.4` section 0.10, `D-55`: data, not rewritten | Answered |
| 25 | responsible | No main action, and the check is waived | Named exception, `D-140`, `conventions.md` section 1.6 | Answered |
| 26 | responsible | Phase and tone | T7 and T4, target T4's "in control of a decision already made", `flows.md` Flow 2a, `D-151` | Answered |
| 27 | responsible | `Gambling Therapy` is a sample | Yes: node `6.1` `D-130` amendment, "names one sample service, Gambling Therapy, until the market list is confirmed"; the page comment now agrees | Answered |
| 28 | responsible | The rendered `Four boundaries you set yourself.` is what Voice rewrites | Yes: `D-146` item 5, the screen keeps `D-130`'s two lines and section 8C is the meta description's source, not rendered | Answered |
| 29 | responsible | `The one thing here you cannot undo` (self exclusion) against Cool down's `Shorten: Not possible` | Still both, two rows apart. The node's meaning is narrower, "the one control on this page a person cannot undo on impulse", node `6.1` block 6 | **Open**, owner stage 05 step 4, to carry the node's meaning without the contradiction |
| 30 | responsible | `Deposit` against `Add funds` on the `+` | Fixed: the `+` reads `Add funds` in every state, `Adding funds is closed for now. Your limits` under a boundary (`renderShell`) | Answered |

**The six open rows in one line each:** the sign of a settlement figure (12); the post-sale line on the outcome (13); one name for our value (18); a name for our shelf that is not "market" (19); `Back to the case` on a cold sign-in arrival (22); the self exclusion line against cool down (29). Two are glossary work for step 3; four are microcopy rules and state lines for step 4. None needs a decision before stage 05 starts.
