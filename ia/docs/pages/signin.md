# Node 2.4. Sign in with Steam

**Type:** page. **Group:** `pages`. **Scope:** MVP. **Cluster:** 2, get through the door. **Alias:** `S-B2`.

**Purpose.** Take a person out to Steam OpenID and back, and state, before they leave, exactly what this product will and will not read from their Steam account.

**Jobs served.** Related Job 2, complete the first open without friction, `jtbd.md`, which is what the round trip is spent against. **Parent class:** barrier `B3-1`, an unreadable Steam login failure, by way of row `B5`; and barrier `B3-2`, onboarding that asks for anything unusual, by way of row `B6`. Barrier class for both. `jtbd.md` records that registration reaches Core Job 3 only through rows `B1` and `B2`, which are `2.7`'s, not this node's, so this node claims no core job.

**URL.** `/signin`. **Indexed:** no, `noindex, follow`, canonical self, no schema, no breadcrumb. `0.13` section 3.

**States:** `2.5` Steam refused and `2.6` Steam unavailable, both specified below under their own anchors.

**Transitions:** `2.5`, `2.6`, then the starter credit into `3.5`.

**Cluster 2 is three screens nobody chooses to visit.** This one is the tax on the main job, and section 2 counts it rather than hiding it.

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

**One route, and it follows from the exit rather than from simplicity.** Withdrawal is to Steam and Steam only at launch, `jtbd.md` Decision 4, so an account not tied to a Steam identity cannot receive what it wins. A second provider would create accounts that can pay in and cannot take out, which is barrier `B4-1`'s shape built into the sign-up.

**And one absence is a known orphan rather than an oversight.** There is no email anywhere on this map. `sitemap.md`'s global sweep records it in the open: an out-of-product notification channel has **no node, because it has no parent**, and there is no notification, email or push row anywhere in `cjm-to-be.md`, while `5.3` and `5.8` imply a signal that reaches a person outside the page. This node does not fix that by quietly adding an email field. It carries the orphan.

---

## 2. When this page is reached, and the route defect it sits inside

**Flow 1 in `flows.md`:** the person reaches sign in when they have nothing to open with, which is **after** Home, **after** the case screen and **after** the gate. Sign in never precedes the gate. That ordering is the whole of section 1 of node `2.1`.

**And it is a named route defect rather than a clean path.** `flows.md` states it: a first-time visitor touches four distinct screens before the activation node, the threshold is three, and **the product defers its first value further than the research promised**. Related Job 2 asks for the entire open-to-result experience in under 60 seconds without a confusing step, and a Steam OpenID round trip is not that.

**The obvious fix is already rejected on the record**, so this node carries the cost rather than reopening it: a free demo reveal on identical odds and seeds was dropped in the T2 divergence in `cjm-to-be.md`, because it argues our case by demonstrating that the sceptic is right about the odds, and it spends the reveal, the one thing we sell, before anyone has decided anything.

**What this node can do about it is narrow and is done:** make the round trip predictable, so the one confusing step is not ours. Block 4 in section 3 exists for exactly that.

---

## 3. Blocks, mobile first

Composition from `blocks.md` section 6, T5. Refero ShareWillow gives the craft floor, a centred single card login in one column, and every other row here is ours with a barrier behind it.

| # | Block | Traces to |
|---|---|---|
| 1 | **What this is, and the one control.** One line, one button. Centred single card, one column | Refero ShareWillow, `blocks.md` T5. Related Job 2 |
| 2 | **The consent gate: two declarations, and nothing works until both are made.** The terms consent naming and linking each document it covers, and **the age declaration on its own line as its own act**. The provider control in block 1 is **unavailable** until both are set, and this block says why in words rather than only by dimming a button | `D-26`, and the compliance constraint in `CLAUDE.md`. **This is layer 1 of `D-A` and it always was: what `D-26` changed is that it is enforced rather than decorative** |
| 3 | **The will and will not read statement**, on the page, not behind a link, not in a modal, not in the terms | `B3-2` by way of row `B6`. **This is the node's reason for existing**, section 0 |
| 4 | **What happens next**, three steps in one line: you land on Steam, you type your password there and never here, you come back | `B3-1` by way of row `B5`. The round trip is the confusing step Related Job 2 forbids, so it is described before it starts |
| 5 | **The starter credit, stated as an offer with its terms**, because `1.0` already made it pre-login and this is where it is met | Row `I1`, bound to `C4`, `D1` and `A1`, which is not optional, `cjm-to-be.md` answer 1 |
| 6 | **The route back into reading without signing in** | `2.6`'s principle applied to the default state: a person who will not sign in is not ejected. Related Job 1 |
| 7 | **The footer** `0.2`, carrying the 18+ statement, the responsible play link and the market statement | The compliance constraints in `CLAUDE.md`. Inherited, not specified here |

**Block 5 carries a constraint it does not get to soften.** `C4`: the amount required to withdraw is stated before the deposit and **can never rise**. `cjm-to-be.md` records the narrative that makes this non-negotiable, barrier `B4-1`, a threshold that climbed from 5 to 12 to 15 dollars after a free open. If the starter credit is mentioned on this page, its withdrawal threshold is mentioned in the same block. And the residual risk travels with it, unsmoothed: **the credit teaches a first-session user that opening is free**, which is the one impression the rest of the map spends its budget contradicting.

**Block 2 is two checkboxes and not one, and the reason is in the canon rather than in taste.** `baseline-account.md` records the live product's version: a single line, "I'm 18+ and I agree to the Terms and Conditions", **with no `required` attribute and with the provider buttons not disabled while it is unchecked.** One checkbox bundles a contract consent with an age declaration, and **a person who ticks it to get past it has made one gesture that answered two questions.** Splitting them costs one line and makes the age declaration a separate deliberate act, which is the only property that makes it worth anything at all.

**And block 2 does not claim to be verification.** It is a self-declaration, the surface says so, and `2.7` is where the other layer lives. `D-26` part 2 proposes taking `2.7` out of round 1 and prints what that costs; **until that go is given this node assumes `2.7` still exists.**

**No block for:** a password field, an email field, a second provider, a case image, a ticker, a countdown, or a bonus larger than the one `1.0` already promised.

---

## 4. States

| State | Node? | Behaviour |
|---|---|---|
| **Default, consent not given** | no | **The landing state.** Both checkboxes clear, the provider control **inert and marked as such to a screen reader, not merely dimmed**, and the reason stated in text above it. `D-26` |
| **Consent given** | no | The provider control becomes available. **Nothing else on the page changes**, because a page that rearranges itself when a box is ticked has moved the target a person was aiming at |
| **One of two given** | no | The control stays inert and **the text names which declaration is still missing**, rather than repeating the general instruction. Two declarations means two failure messages |
| **Redirecting to Steam** | no | One of the five loading states `sitemap.md` specifies inside their parents rather than as nodes. It renders the parent's own skeleton and names the destination |
| **Returning from Steam** | no | The second half of the round trip. Named because the first half is already on the map's list and the return is where the two failures below are detected |
| **Cancelled at Steam** | no | The person pressed back or declined on Steam's own page. Returns them where they came from, nothing lost, nothing recorded. **Not a node**, by the map's own test: it needs no copy and no route that differs from the parent's default |
| **Already signed in** | no | A person can type `/signin`, so the page has to answer in every account state. It routes them on rather than showing a sign-in control for an account they have |
| **`2.5` Steam refused** | yes | Section 5 |
| **`2.6` Steam unavailable** | yes | Section 6 |

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

**Nothing from the emotional and social table lives on this node**, checked against `sitemap.md` rather than assumed.

---

## 8. Adaptive behaviour

**One column at every width.** A centred single card, `blocks.md` T5, with a measure that does not stretch on desktop.

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

**B. Headings.** One H1, and the H2 list is the block order, which is `0.13` section 5's mechanical check.

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
