# Node 2.4. Sign in with Steam

**Type:** dialog, with an address. **Group:** `pages`. **Providers:** four since `D-55`, one of them the act. **Scope:** MVP. **Cluster:** 2, get through the door. **Alias:** `S-B2`.

**Purpose.** Take a person out to Steam OpenID and back, and state, before they leave, exactly what this product will and will not read from their Steam account.

**Jobs served.** Related Job 2, complete the first open without friction, `jtbd.md`, which is what the round trip is spent against. **Parent class:** barrier `B3-1`, an unreadable Steam login failure, by way of row `B5`; and barrier `B3-2`, onboarding that asks for anything unusual, by way of row `B6`. Barrier class for both. `jtbd.md` records that registration reaches Core Job 3 only through rows `B1` and `B2`, which are `2.7`'s, not this node's, so this node claims no core job.

**URL.** `/signin`, and it survives the change of carrier. **Indexed:** no, `noindex, follow`, canonical self, no schema, no breadcrumb. `0.13` section 3. **The address renders the same content as a full page, the dialog renders it over the surface a person is already on, and neither is a reduced version of the other.** Section 0.9.

**States:** `2.5` Steam refused and `2.6` Steam unavailable, both specified below under their own anchors.

**Transitions:** `2.5`, `2.6`, then the starter credit into `3.5`.

**Cluster 2 is three surfaces nobody chooses to visit, and since `D-54` two of the three are dialogs.** This one is the tax on the main job, and section 2 counts it rather than hiding it. **What `D-54` changed is not the size of the tax but who pays the context for it:** section 0.9.

---

## 0.9 Amended 21 August 2026 by `D-54`. The carrier is a dialog

**The founder's decision: sign in is a dialog, drawn once as a canon and then mounted on every surface where a guest stands.** This section is the amendment. Everything above and below it holds, and where a paragraph was written assuming a page it is marked here rather than rewritten in place.

### 0.9.1 What was wrong with the page, in the node's own words

**Section 2 already carried the cost and could not pay it.** `flows.md` records the route defect: a first-time visitor touches four distinct screens before the activation node, the threshold is three, and the product defers its first value further than the research promised. The node's own answer was narrow and honest: make the round trip predictable, so the one confusing step is not ours.

**A dialog does not remove a step and this node does not claim that it does.** The Steam round trip is unchanged, the gate still fires first, the tap count in `CLAUDE.md` is unchanged. **What it removes is a loss.** On a page, the case a person chose, the count they set and the price they were reading are behind them. In a dialog they are behind the scrim, still on the screen, and the person can see the thing they are signing in for while they decide whether to sign in. **That is the argument, and it is smaller than "the route defect is fixed" on purpose.** The defect is narrowed from four screens to three, and the step count is untouched.

### 0.9.2 The map already had this type, and this node was the exception

`ia/_nav.js` carries five node types and **`dialog` is one of them**. Cluster 2's other member, `2.1` the geo gate, has been a dialog since it was written, and `0.4` cookie consent is the second. **`2.4` was the only node in cluster 2 typed as a page while its own flow put it on top of another screen.** The change is the map becoming consistent with itself rather than a new pattern entering it.

### 0.9.3 Two dialogs in cluster 2, and they are opposites

| | `2.1` geo gate | `2.4` sign in |
|---|---|---|
| **Address** | **None.** It returns 200 at the URL the person is already on, `0.13` section 4.4 | **`/signin`, kept.** The account control points at it and a person can type it |
| **Dismissal** | The decline persists rather than resetting with the dialog, section 7 of `gate.md`. A gate re-answerable by reloading teaches the answer | **Free, and by design.** Block 6 says a person who will not sign in is not ejected, and the dismissal is now what enforces that rather than a link they have to notice |
| **What it asks** | A question about the market, answered for them | A declaration they make, twice, `D-26` |

**They are never on screen at once.** On the case screen the first interaction fires the gate, and the sign-in dialog opens only after the gate has passed. Two layers in sequence, never stacked, and stage 04 draws them that way.

### 0.9.4 The address is the cold arrival, and it is why the SEO block survives

**One content, two carriers.** The dialog is for the person who is already inside the product and reached a control they cannot use. **The address is for everyone else:** a typed URL, a deep link, a session with no script, a crawler, and the "already signed in" state in section 4 which exists precisely because a person can type `/signin`.

**Deleting the address would have silently deleted four reasoned rules,** all of them in section 9 checklist E: that `noindex` is a meta tag readable at a URL, that the route back is a crawlable `<a href>`, that the statement is text rather than an image, and that the surface is identical for a person and a crawler. **A rule stops applying by decision, not by a carrier change.** So the address stays, and the canon drawn at stage 04 is the address.

### 0.9.5 The dialog contract, inherited and not invented

`0.1` section 6 fixed the modal contract for this product and this node takes it rather than writing a second one: **the scrim blocks the content behind, and nothing is raised above the scrim.** Three dismissals, and the first of the three is renamed because there is nothing to select here:

- **The close control**, present at every width.
- **The scrim.**
- **Escape**, and dismissing records nothing.

**Focus moves in on open and is trapped, and returns to the control that opened it**, which is `gate.md` section 11's wording and applies unchanged. **The surface behind is inert and is never removed**, which is `0.1`'s own rule for a gate open and holds for the same reason: removing the carriers would make the dialog read as an ejection rather than a step.

**The dialog never closes itself.** Not on `2.5`, not on `2.6`, not on a timer. A layer that vanishes on failure returns a person to a screen that cannot explain what just happened, and section 5's whole subject is a failure that told a person something false.

### 0.9.6 What the amendment changes in the sections below

| Section | Held | Changed |
|---|---|---|
| 0, the two lists | Whole | Nothing. It is the reason the node exists and it is in the dialog, not behind a link inside it |
| 1, what this is not | Whole | Nothing |
| 2, the route defect | The defect and the rejected fix | Narrowed to three screens, section 0.9.1, and still not closed |
| 3, blocks | All seven | **Block 6 becomes the dismissal**, and **block 7 the footer belongs to the address only.** A dialog does not carry a footer, and the surface behind already has one. **Amended again by `D-55` and `D-56`**, section 0.10: block 1 holds four providers, block 2 moves above it, and blocks 3 to 5 split between the carriers |
| 4, states | All | **Three carrier states added**, section 0.9.7 |
| 8, adaptive | The one hard requirement at 360px | **The shape that keeps it**, section 0.9.8 |
| 9, SEO | The whole block, at the address | **The heading rule in the dialog**, section 0.9.9 |

### 0.9.7 The three carrier states this amendment adds

| State | Behaviour |
|---|---|
| **Opened over a surface** | The scrim, the trapped focus, the inert surface behind. The surface keeps its own state: the case, the count, the price. Nothing behind the scrim is reset by opening or by dismissing |
| **Arrived at the address** | The same content as a full page, one column, centred, with the footer `0.2` and the navigation `0.1` in their guest shape. No scrim, no close control, and the route back is block 6 as a link |
| **Dismissed without signing in** | Returns the person exactly where they were with nothing lost and nothing recorded, which is block 6 satisfied structurally. From the address there is nothing to dismiss, so block 6 is a link there and the two carriers are not asked to behave identically |

### 0.9.8 Adaptive, the amended shape

**The one hard requirement in section 8 is unchanged and now it decides the shape:** blocks 1 and 2 are both above the fold at 360px.

- **At 360px the dialog is a full height sheet, not a centred card.** A centred card at that width is a card with margins above and below it, and the fold arrives sooner than on the page the requirement was written for. A sheet has the same fold as a page, so the requirement is met by the same block order rather than by cutting blocks.
- **From the width where a centred card fits without shortening the list, it is a centred card** with the measure section 8 already fixes, and the scrim around it.
- **The block order never changes between the two carriers or between the two widths.** A person who read the statement on the address and meets the dialog later is reading the same document in the same order.

### 0.9.9 The heading rule, because two H1 elements is the obvious defect here

**The address carries the H1** and the H2 list in section 9B, unchanged.

**The dialog carries no H1.** The surface behind it already has one, and a dialog that adds a second has broken the document outline of a page it does not own. **In the dialog the same text is the accessible name of the dialog**, and its headings step down one level from the address's. The text is identical in both carriers, which is the property section 0 is protecting.

---

## 0.10 Amended 21 August 2026 by `D-55` and `D-56`. Four providers, and a dialog that is simple without being thinner

**Two founder decisions taken the same day as `D-54`, after three competitor arrival modals were put beside this node.** The dialog is the canon, it carries an image, it is as simple in structure as the modals the competitors ship, and **it still prints the thing none of them prints**.

### 0.10.1 `D-55`. Four providers, and only one of them is the act

**Steam, Google, Discord, X.** Steam as a full width primary control, the other three as one secondary row.

**The node argued for one and the argument is above, in section 1, kept and marked.** It was not a taste argument: withdrawal is to Steam and Steam only at launch, `jtbd.md` Decision 4, so an account made through any of the other three **cannot receive what it wins until Steam is linked**. That is barrier `B4-1`'s own shape, an account that can pay in and cannot take out, built into the sign-up.

**The founder overrode it knowing that, and what makes the override honest is where the sentence sits, not that the sentence exists.** `C4` generalised: what is required to withdraw is stated **before** the money moves. So the requirement is printed on this surface, beside the three buttons that carry it, in both carriers, and never in a settings page a person finds afterwards.

**One primary and three secondary, and the difference is structural rather than decorative.** Steam is the only provider that can receive a skin, so it is the only one drawn as the act. **Four equal buttons would say the four are equal**, and this node's own reason for existing is that it does not say things that are not true.

### 0.10.2 What `D-55` adds to the map, named here rather than discovered at stage 07

**Three states that do not exist yet**, because until now no account could exist without a Steam identity:

| Node | The state it now needs | Why |
|---|---|---|
| `5.3` Withdrawal | **No Steam linked**, with the link as the act | The exit is Steam. A person who arrives here from Google has nowhere for the skin to go |
| `5.1` Account and inventory | **Link Steam**, available at any time and not only at the exit | The requirement was stated at sign in, so the place to satisfy it has to exist before the exit |
| `4.1` Deposit | **A person with no Steam linked is about to spend money** | `C4`'s own subject. Whether this is a warning, a block or nothing at all is `[?]` and it is the founder's, not this node's |

**None of the three is built and all three are debt, printed rather than absorbed.** They are the price of the entrance widening, and they are what makes `D-55` a scope decision rather than a layout one.

### 0.10.3 `D-56`. The split between the carriers, and it is not a short version and a long version

**`D-54` rejected "keep the page and add a thinner dialog beside it"**, on the grounds that two versions of the one statement this node exists for is how the shorter one becomes the real one and the statement becomes fine print. **That rejection stands and this is not it.**

| | The dialog | The address `/signin` |
|---|---|---|
| Image slot | **Yes**, `D-55` | No. The page has the shell around it |
| Title and one line | Yes | The H1 and its lede |
| **The two declarations** | Yes | Yes |
| **The four providers** | Yes | Yes |
| **What we never read or do**, four lines | **Yes** | Yes |
| What we read, the field list | **No** | Yes |
| What happens next, three steps | No | Yes |
| The starter credit | No | Yes |
| Block 6, the route back | **The dismissal is block 6** | A crawlable link |
| The footer `0.2`, the H1 | No | Yes |

**The line the split is drawn on: the dialog carries every part of the statement that is finished.** The four "never" lines are absolute, and each is a rule written down elsewhere in this repository rather than a promise made on this surface. **The "what we read" side is still `[?]` field by field**, and a list of unknowns is not a statement yet, so it waits at the address for production to fill it. **When production fills it, this split is re-decided rather than inherited.**

**And the two blocks that stay at the address are stayed for a reason of their own:** the round trip description and the starter credit are what a person reads when they arrive cold with no context. In the dialog the context is the surface behind them, which is the whole of `D-54`.

### 0.10.4 The order changed, in both carriers, and that is why `D-54`'s rule still holds

**The two declarations now come before the provider controls.** `D-54` fixed that the block order never changes between the carriers, so it changed in both or in neither.

**Two reasons, and the first is this node's own.** Section 4's default state already required that the reason is "stated in text above it", which is an order, not a decoration. **The second is `D-55`'s doing:** one inert control above its own explanation was tolerable, four is a wall of dead buttons a person meets before being told why they are dead.

### 0.10.5 `D-57`. The dialog got shorter, and where the sentences went

**659px tall at desktop instead of 877, and 847 instead of 946 at 360, with nothing this node requires removed.**

**Most of it came from the layout.** The image slot moved beside the content above 600px rather than above it: **stacked, the picture spends 150px of the one axis the dialog is short of; beside the content it spends an axis that was empty.**

**The rest came from four sentences, and each of them was answering a question the person had not asked.** They are kept here, because this is where they belong:

- **"Nothing you chose is lost."** It said what the screen already shows. The surface behind the scrim is the evidence.
- **"They are two separate acts on purpose: one is a contract, the other is a statement about you."** That is section 3's argument for splitting the checkbox, and it is an argument for the reader of this node rather than for the person signing in.
- **"a surface that rearranges itself when a box is ticked has moved the target you were aiming at."** Section 4's reason for the consent-given state behaving as it does.
- **"because that is where a skin can go, and the link can be made at any time before your first withdrawal."** Section 0.10.1's reason. **Every part of `D-55`'s requirement is still on the surface:** the three work now, Steam is needed to take a skin out, and the link is not urgent.

**The rule this leaves: a surface owes a person what to do, and the node owes the reader why.** A sentence answering "why is it built like this" belongs here.

**What was not touched is the longest block left in the dialog:** the four "never read or do" lines. They are `D-56` and they are the reason this node exists. **If the dialog has to get shorter again, that block is discussed rather than trimmed.**

### 0.10.6 `D-58`. No control on this surface is disabled, and `D-26` is enforced exactly as before

**Founder decision of 21 August 2026, from his own operating experience:** a person meets a dead control, cannot see what to do about it, and **either leaves or writes to support**. Four dead controls in a row is that four times over, which is the wall section 0.10.4 already named.

**What `D-26` requires is that nobody gets through without both declarations, and that is unchanged.** The press does not sign anyone in. **The baseline's defect was that its provider buttons worked with the box unticked**, `baseline-account.md`, and these do not. **The collision was with the word inert in the earlier wording of this node, not with the rule underneath it.**

**What changed is the answer.** Three things happen on a press that cannot go through:

| | What happens | Why that and not something else |
|---|---|---|
| The declarations that are missing | Are marked **on themselves** | The answer to "why did nothing happen" is a place on the screen, not only a sentence about a place on the screen |
| The line under them | **Names which one is missing.** Two declarations means two failure messages, section 4 | That rule was written for a dimmed control. **It is worth more here, where the sentence is the entire reply to a press** |
| The keyboard | Moves to the first missing declaration | A message about a control somewhere above is a message a person has to go and find |

**The ambient line stays.** It is not either the ambient reason or the reply on press: the reason says what is needed before anyone presses anything, and the reply says what is missing after they did. **Removing the first would make the press the only way to learn the requirement, which is the dead button's own defect wearing different clothes.**

**And a link inside a declaration is a link.** Opening the terms is not agreeing to them, and one click may not do both.

### 0.10.7 The state this adds to the map

**Press refused, nothing declared.** Not a numbered node: it needs no route that differs from the parent's and no address of its own, which is the map's own test. It is listed here because it is a real state with its own copy, and section 4's table would otherwise be a list of states that no longer describes what this surface does.

### 0.10.8 What was not taken from the three captures

**No email field and no password field, in any state.** Two of the three modals offer email and password beside the providers; the founder cut it and the node had already forbidden it. `B6` is the rule, quoted: no password anywhere outside the provider's own page.

**No single bundled checkbox.** One capture ships "I'm 18+ and I agree to the Terms and Conditions" as one line. **One gesture answering two questions is exactly what `D-26` split**, and it stays split.

**No "Sign up new account" as a second route.** There is no separate registration in this product. The provider round trip is both, and offering a second door implies a first one that is different.

---

## 0. The statement no competitor prints

**This is the block the node exists for.** `blocks.md` section 6 walked five competitors' sign-in surfaces live and the finding on our side of the ledger is one sentence: ours is Steam OpenID **with a statement of what the product will and will not read, which no competitor prints**.

**Its parent is a barrier with a voice.** `B3-2`, one signal, is a person who met a site that required a Steam avatar change to unlock a free case: *"To open the one of the free daily cases it requires you to change your avatar to a certain thing. But now I've realised the site is a scam"*. And `B3-1`'s thread carries the community's own security rule, quoted once: *"Log in steam community first. If any site asks for password etc though, its fake"*.

**So the shape of the block is fixed by the evidence rather than by preference.** The person arriving here has already been taught a test. The page either passes it visibly or it fails it silently.

### 0.1 The two lists

| Side | Rule | Contents |
|---|---|---|
| **Will read** | **Every row names what it is for, on the same row.** Nothing is on this list for a feature that does not exist yet | Structure fixed here. **The exact field list is `[?]`**, because what Steam OpenID returns and what the Steam Web API returns are technical facts this repository has not opened a source for, and inventing a field list would be inventing a permission |
| **Will not read or do** | Absolute, and each line is a rule elsewhere in this repository rather than a promise made on this page | Never a password, on this page or anywhere in this product. Never a change to your Steam profile, avatar, name or friends. Never a post, a comment or an invite in your name. Never a demand that you join, add or follow anything to unlock anything |

**The "will not" side is firm because it is `B6` written out:** row `B6` is "onboarding asks for nothing unusual: no password anywhere outside Steam OpenID, no profile changes", marked MVP and a rule, with the success signal "caught at review". This page is where a person can see the rule instead of taking our word for it.

**The "will read" side is deliberately incomplete and says so.** A statement of what we read is worthless if the list is aspirational. The requirement this node hands to production is: **one row per field, each with the thing it is for, and no row whose reason is a feature not in round 1.** Stage 04 draws the rows. Production fills them and the count is `[?]` until it does.

---

## 1. What this page is not

**It is not registration in the ordinary sense, and the map is why.** There is no password field, no email field, no username, no profile step and no second provider. Hellcase's arrival modal offers three providers, `blocks.md` section 6. This product offers one.

**Overridden on 21 August 2026 by `D-55`. Four providers, one of them the act.** The paragraph below is kept rather than deleted, because the argument was sound and the founder overrode it knowingly, and a deleted argument cannot be reread when the decision is revisited. **What `D-55` changed is not the exit but the entrance**, and what it costs is in section 0.10.

**One route, and it follows from the exit rather than from simplicity.** Withdrawal is to Steam and Steam only at launch, `jtbd.md` Decision 4, so an account not tied to a Steam identity cannot receive what it wins. A second provider would create accounts that can pay in and cannot take out, which is barrier `B4-1`'s shape built into the sign-up.

**And one absence is a known orphan rather than an oversight.** There is no email anywhere on this map. `sitemap.md`'s global sweep records it in the open: an out-of-product notification channel has **no node, because it has no parent**, and there is no notification, email or push row anywhere in `cjm-to-be.md`, while `5.3` and `5.8` imply a signal that reaches a person outside the page. This node does not fix that by quietly adding an email field. It carries the orphan.

---

## 2. When this page is reached, and the route defect it sits inside

**Flow 1 in `flows.md`:** the person reaches sign in when they have nothing to open with, which is **after** Home, **after** the case screen and **after** the gate. Sign in never precedes the gate. That ordering is the whole of section 1 of node `2.1`.

**And it is a named route defect rather than a clean path.** `flows.md` states it: a first-time visitor touches four distinct screens before the activation node, the threshold is three, and **the product defers its first value further than the research promised**. Related Job 2 asks for the entire open-to-result experience in under 60 seconds without a confusing step, and a Steam OpenID round trip is not that.

**Amended by `D-54`: the count is three and the step count is unchanged.** Section 0.9.1.

**The obvious fix is already rejected on the record**, so this node carries the cost rather than reopening it: a free demo reveal on identical odds and seeds was dropped in the T2 divergence in `cjm-to-be.md`, because it argues our case by demonstrating that the sceptic is right about the odds, and it spends the reveal, the one thing we sell, before anyone has decided anything.

**What this node can do about it is narrow and is done:** make the round trip predictable, so the one confusing step is not ours. Block 4 in section 3 exists for exactly that.

---

## 3. Blocks, mobile first

Composition from `blocks.md` section 6, T5. Refero ShareWillow gives the craft floor, a centred single card login in one column, and every other row here is ours with a barrier behind it.

| # | Block | Traces to |
|---|---|---|
| 1 | **What this is, and the controls.** One line. **Four providers since `D-55`**, Steam as the act and Google, Discord and X as one secondary row, with the Steam requirement printed beside them. Centred single card, one column. **Now second in the order, `D-56`** | Refero ShareWillow, `blocks.md` T5. Related Job 2. `D-55` |
| 2 | **First in the order since `D-56`.** **The consent gate: two declarations, and no press goes through until both are made.** The terms consent naming and linking each document it covers, and **the age declaration on its own line as its own act**. **No press in block 1 goes through** until both are set, `D-58` having replaced the disabling with a refusal that answers, and this block says why in words rather than only by dimming a button | `D-26`, and the compliance constraint in `CLAUDE.md`. **This is layer 1 of `D-A` and it always was: what `D-26` changed is that it is enforced rather than decorative** |
| 3 | **The will and will not read statement**, on the page, not behind a link, not in a modal, not in the terms | `B3-2` by way of row `B6`. **This is the node's reason for existing**, section 0 |
| 4 | **What happens next**, three steps in one line: you land on Steam, you type your password there and never here, you come back | `B3-1` by way of row `B5`. The round trip is the confusing step Related Job 2 forbids, so it is described before it starts |
| 5 | **The starter credit, stated as an offer with its terms**, because `1.0` already made it pre-login and this is where it is met | Row `I1`, bound to `C4`, `D1` and `A1`, which is not optional, `cjm-to-be.md` answer 1 |
| 6 | **The route back into reading without signing in.** **In the dialog this is the dismissal, `D-54`**, and at the address it is a link | `2.6`'s principle applied to the default state: a person who will not sign in is not ejected. Related Job 1 |
| 7 | **The footer** `0.2`, carrying the 18+ statement, the responsible play link and the market statement. **At the address only since `D-54`:** a dialog carries no footer, and the surface behind it already has this one | The compliance constraints in `CLAUDE.md`. Inherited, not specified here |

**Block 5 carries a constraint it does not get to soften.** `C4`: the amount required to withdraw is stated before the deposit and **can never rise**. `cjm-to-be.md` records the narrative that makes this non-negotiable, barrier `B4-1`, a threshold that climbed from 5 to 12 to 15 dollars after a free open. If the starter credit is mentioned on this page, its withdrawal threshold is mentioned in the same block. And the residual risk travels with it, unsmoothed: **the credit teaches a first-session user that opening is free**, which is the one impression the rest of the map spends its budget contradicting.

**Block 2 is two checkboxes and not one, and the reason is in the canon rather than in taste.** `baseline-account.md` records the live product's version: a single line, "I'm 18+ and I agree to the Terms and Conditions", **with no `required` attribute and with the provider buttons not disabled while it is unchecked.** One checkbox bundles a contract consent with an age declaration, and **a person who ticks it to get past it has made one gesture that answered two questions.** Splitting them costs one line and makes the age declaration a separate deliberate act, which is the only property that makes it worth anything at all.

**And block 2 does not claim to be verification.** It is a self-declaration, the surface says so, and `2.7` is where the other layer lives. `D-26` part 2 proposes taking `2.7` out of round 1 and prints what that costs; **until that go is given this node assumes `2.7` still exists.**

**No block for:** a password field, an email field, a separate sign-up route, a case image, a ticker, a countdown, or a bonus larger than the one `1.0` already promised. **The "second provider" that stood on this list until 21 August was struck by `D-55`**, and the strike is a decision with a price, section 0.10.2, rather than a line quietly removed.

---

## 4. States

| State | Node? | Behaviour |
|---|---|---|
| **Default, consent not given** | no | **The landing state.** Both checkboxes clear, **the provider controls live and not disabled since `D-58`**, and the reason stated in text under them. `D-26` is enforced on the press rather than by removing the control, section 0.10.6 |
| **Consent given** | no | The press now goes through. **Nothing else on the page changes**, because a page that rearranges itself when a box is ticked has moved the target a person was aiming at |
| **One of two given** | no | **The text names which declaration is still missing**, rather than repeating the general instruction. Two declarations means two failure messages |
| **Press refused, a declaration missing** | no | **Added by `D-58`.** The missing declarations are marked on themselves, the line names which, and the keyboard goes to the first of them. Nothing was signed in and nothing was recorded |
| **Redirecting to Steam** | no | One of the five loading states `sitemap.md` specifies inside their parents rather than as nodes. It renders the parent's own skeleton and names the destination |
| **Returning from Steam** | no | The second half of the round trip. Named because the first half is already on the map's list and the return is where the two failures below are detected |
| **Cancelled at Steam** | no | The person pressed back or declined on Steam's own page. Returns them where they came from, nothing lost, nothing recorded. **Not a node**, by the map's own test: it needs no copy and no route that differs from the parent's default |
| **Already signed in** | no | A person can type `/signin`, so the page has to answer in every account state. It routes them on rather than showing a sign-in control for an account they have |
| **`2.5` Steam refused** | yes | Section 5 |
| **`2.6` Steam unavailable** | yes | Section 6 |

**Three carrier states are added on top of this table by `D-54`**, section 0.9.7: opened over a surface, arrived at the address, dismissed without signing in.

### The states this node adds to the map, named rather than smuggled in

**Three:** returning from Steam, cancelled at Steam, already signed in. None is a numbered node, and each is declared here because `sitemap.md` fixed a specific list of five internal loading states and these are outside it.

**Cancelled and refused are different events and the map only holds the second one.** `flows.md` draws two branches out of the Steam round trip, refused and down. A deliberate cancel is neither: nothing failed. Folding it into `2.5` would tell a person who changed their mind that something went wrong.

---

## 5. State 2.5. Steam refused

**Type:** state. **Scope:** MVP. **Parent:** `2.4`. **Transitions:** back to `2.4`.

**Row `B5`: readable Steam login failure states.** Parent barrier `B3-1`, **one signal, and the row marks it as one voice rather than a pattern**. It is a component state rather than a feature, and that framing is the row's own.

**The evidence, and it is why "readable" is the requirement:** *"its weird as my password and username are correct but every time i try to 'sign in through steam' on a third party website for CSGO it says 'incorrect account name or password'"*. The failure told the person something false about themselves. That is the defect, not the failure.

### 5.1 The rule: the message names which side failed

Four readable causes, and the fourth is the honest one:

| Cause | What the person is told | What they can do |
|---|---|---|
| **Steam declined the sign in** | Steam did not accept it. Nothing about your account here changed | Try again, or open Steam directly first |
| **Steam returned an identity we could not verify** | We got an answer from Steam and could not confirm it was you. **This is on our side** | Try again. If it repeats, support, with the reference |
| **The session expired on the way** | The round trip took too long and the link went stale | Start again from here |
| **We do not know** | We do not know why this failed. **Said plainly rather than dressed as one of the three above** | Support, with the reference |

**Never:** a raw provider code as the whole message, the bare word error, a number alone, or a sentence that tells the person their credentials are wrong when we have no way of knowing that. A reference code may sit as a secondary line for support. **It is not the message.**

### 5.2 The rule that outranks the copy

**No password field appears in this state, or in any state of this page.** A failed third-party sign in followed by a password form is the exact shape the community warns about in `B3-1`'s own thread, and it is `B6`'s rule. A retry re-runs the OpenID round trip. It never asks for a credential.

### 5.3 Retry is allowed here, and that is the opposite of `2.3`

A failed sign in is a fact about an identity provider, so trying again is a legitimate second attempt at the same question. An under-age declaration at `2.3` is a statement the person made about themselves, so re-asking it is coaching rather than a retry. **The two states look similar and behave in opposite directions**, and that pairing is written here so stage 04 does not build one component for both.

**Reading the product stays open from this state.**

---

## 6. State 2.6. Steam unavailable

**Type:** state. **Scope:** MVP. **Parent:** `2.4`. **Transitions:** `3.3`.

**Steam is down, not refusing, and the design job is to keep the product readable.** `flows.md` routes this state back to the case screen for exactly that reason: **a person who cannot sign in is not ejected.**

### 6.1 It has a real source rather than an inference

`0.11` holds a **Steam health probe**, row `G2`, as a published number with per-state ceilings. So this state can be entered on evidence that Steam is down rather than on one failed request, and `0.11` rule 6 binds it: **a failed source is marked degraded, never frozen at its last good value.**

That is a genuine cross-node dependency and it runs both ways: if the probe is not built, this state degrades to a guess, and the guess is the thing `2.5` already covers.

### 6.2 What it shows

- **That the failure is on Steam's side and not the person's.** This is the one sentence that separates it from `2.5`.
- **What still works with no account:** every public surface, `1.2` with its verifier, a public result `7.1`, the legal pages `0.9`, support `0.10`, responsible play `6.1`. The case screen stays readable, which is where `flows.md` sends them.
- **No promised retry time unless the probe gives one.** A time we do not have is `[?]`, and design principle 5 in `CLAUDE.md` is why it matters here: "Lag reads as dishonesty on a platform built on randomised outcomes." A countdown that expires into the same failure is worse than no countdown.
- **No automatic retry loop against a provider that is already down.** The interval, if any, is `[?]` and belongs to production.

### 6.3 The one thing it must never be

**A spinner.** A person waiting on an indefinite loader against a dead provider has been given a failure with the failure removed, and this is the product whose first principle is that its claims are checkable.

---

## 7. Components

**Used:** `0.2` the footer. Nothing else from the canonical set: no skin card `0.6`, no case tile `0.7`, no ticker `0.8`, no round proof `0.14`. `0.5` toasts are available and are not the place any state here is announced, per `0.5`'s own rule.

**`0.1` renders**, and in its guest shape: three rail destinations, no money figures in the header, and on mobile a bottom bar of three. Sign in is not a rail destination, it is reached from the header's account control and from `1.0`.

**The scrim and the modal contract are `0.1`'s**, section 6, taken whole rather than written again here. `D-54`, and section 0.9.5 names the one renamed dismissal.

**Nothing from the emotional and social table lives on this node**, checked against `sitemap.md` rather than assumed.

---

## 8. Adaptive behaviour

**One column at every width.** A centred single card, `blocks.md` T5, with a measure that does not stretch on desktop. **Since `D-54` the carrier decides which shape carries that column at 360px**, and section 0.9.8 is the rule: a full height sheet at 360px, a centred card above it, the same block order in both.

**The block order is the mobile order and it does not change on desktop.** The one hard requirement at 360px: **blocks 1 and 2 are both above the fold.** The statement is what answers `B3-2`, and a statement a person has to scroll to reach has been designed as fine print. If something must fall below the fold at 360px it is block 4 or block 5, never block 2.

**`2.5` and `2.6` replace blocks 1 and 3 in place** and keep block 2 visible, because the moment a sign in fails is exactly when a person re-reads what the site wanted from them.

---

## 9. SEO block, A to E

**A `noindex` page still gets this block**, in reduced form, because B is what stage 04 checks the block order against.

**A. Meta.**

| Field | Value |
|---|---|
| `title` | Sign in with Steam. CS2 Clutch (33 characters, under 60) |
| `description` | Sign in with Steam OpenID. We never ask for your password and we never change anything on your Steam account. (110 characters, under 155) |
| `canonical` | Self, `/signin` |
| `robots` | `noindex, follow`. `0.13` section 3 |
| `hreflang` | **None.** One language, `0.13` section 1 |
| OG and Twitter | **Deliberately absent.** A share card for a sign-in page is a card for a page nobody should be sharing, and nothing links here from outside on purpose |

**B. Headings.** One H1, and the H2 list is the block order, which is `0.13` section 5's mechanical check. **This is the address's outline. The dialog carries no H1 at all, `D-54`**, section 0.9.9.

- **H1:** Sign in with Steam
- **H2:** What we read from your Steam account
- **H2:** What happens next
- **H2:** Your starter credit
- **H2:** Or keep looking around without an account

**C. SEO body text.** **None, and that is the correct answer for a `noindex` page rather than a gap.** What the node owes instead is the requirement of which information must be present, which is section 0's two lists and section 5.1's four causes. Stage 05 writes the words and syncs them back here. Interface strings move to `voice/docs/microcopy.md` after stage 05; the requirement stays here.

**D. Structured data.** **None.** `0.13` section 3 gives `2.4` no schema, and section 7's rule is that markup describes what a page truly is. There is no type that truthfully describes a sign-in redirect.

**E. Checklist.**

- Exactly one H1.
- The route back into the product is a crawlable `<a href>`, not a script handler, `0.13` section 8.
- **`noindex` is a meta tag and `/signin` is not disallowed in `robots.txt`**, `0.13` section 4.5: a page a crawler may not read is a page whose `noindex` it cannot read.
- The statement in block 2 is text, never an image, so it is readable by a screen reader and quotable by a person who wants to check us.
- No cloaking. The page is identical for a person and a crawler, which is the property `0.13` section 4.3 protects across the whole product.
- LCP is the card, and there is no hero image to make it anything else.

---

## 10. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **The exact Steam field list** | Section 0. What OpenID returns and what the Web API returns are technical facts with no source opened in this repository, and a permission list invented from memory is a permission invented from memory | Production, before stage 04 treats the rows as final |
| **The Steam health probe** | `2.6` depends on row `G2`. Without it, this state is a guess and `2.5` already covers guesses | `0.11`, then production |
| **The out-of-product notification channel** | No email, push or notification row exists anywhere in `cjm-to-be.md`, while `5.3` and `5.8` imply one. **Carried as an orphan, not solved by adding a field here** | Founder. Already named in `sitemap.md`'s global sweep |
| **The retry interval in `2.6`** | Whether the page retries at all against a down provider, and how often | Production. `[?]` |
| **The starter credit's amount and its withdrawal threshold** | Row `I1` is bounded and the bound is not a number in this repository. `C4` fixes that whatever it is, it is stated before the money and never rises | Founder, with case mathematics |
| **The four-screen route defect** | Named in `flows.md` and carried here. The one rejected fix stays rejected | Stage 04, as a constraint on the wireframe rather than a problem to solve here |

**And what belongs elsewhere.** The wording of every string: stage 05. How the page looks: stages 06 and 07. What the gate asks before this page is reached: `2.1`. What happens after the account exists and before money moves: `2.7`.
