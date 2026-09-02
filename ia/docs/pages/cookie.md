# Node 0.4. Cookie consent

**Type:** dialog. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** Ask before storing, offer refusal at the same cost as acceptance, keep analytics and marketing off until somebody opts in, and leave a route back to change the answer. It is the first interactive object a visitor meets, and this product's first barrier is that the visitor already suspects the category.

**Jobs served.** None. Nobody arrives wanting to answer this. **Parent class:** barrier `B1-1`, the category arrives pre-suspected and the recommendation itself reads as a warning, and design principle 1 in `CLAUDE.md`, quoted, "Every visual and interaction decision answers first: does this help the user believe the drop is honest." A banner that takes an answer the person did not give is the same move as a number that cannot be checked, made three seconds earlier.

**The law is not one of the three parent classes, and that gap is a finding rather than a technicality.** `CLAUDE.md` enumerates five compliance constraints and none of them is data protection, so the legal ground below has no class to sit in. It is carried here in full, cited, and the missing constraint is raised in section 9 as a candidate for the stage close. The alternative, quietly widening the third class, is the thing that rule exists to stop.

**Fires on arrival.** The map already settled the interrupt order and it is not re-derived here: `0.4` fires on arrival, `2.1` fires at first case interaction by `B3` and `D-17`, so the two never contend for the same moment.

**Transitions:** the cookie policy on `0.9`, at `/legal/cookies` per `0.13`. `0.2` already guarantees that link works before consent is given, because a consent dialog that links to a policy the consent gate blocks is circular.

**Baseline row, `0.4`.** The rule in `CLAUDE.md`: every node carries one baseline row, what the live product does, what we keep, what we change and why.

| What the live product does | What we keep | What we change, and why |
|---|---|---|
| A bar across the bottom of the page: an icon, the consent text, links to the Cookie Policy and the Privacy Policy, an **ACCEPT** button and an **X**. `baseline.md` section 9.3, corrected there on 18 August 2026 after a first reading missed it. | The placement and the restraint of a bar rather than a blocking modal. | **Consent is assumed by continued use, there is no reject control, and the X dismisses without a recorded choice.** All three are refused here. A dialog whose only control is accept has not asked a question. |

---

## 0.6 Amended 22 August 2026 by `D-80`, the day this node was drawn

**The largest change is that the one block this node said it could not place had already been placed, and nobody told this file.**

| What changed | Why |
|---|---|
| **B10, the persistent re-open route, has a home**, section 8 | The step 8 audit added **Cookie settings** to `0.2`'s Company column on the founder's own instrument, as a control rather than a link, quoting Article 7(3) from this node. `footer.md` has carried it since. Section 8 here went on saying "`0.2` does not have one" and section 9 went on listing it as open |
| **And the control it added did nothing for four days** | It shipped as a `<button>` with no handler on all ninety four pages, because the thing it opens did not exist yet. `D-58` is the rule it broke: a control that does not do its thing is a picture of it. **The fix for Article 7(3) was itself the defect `D-58` forbids**, and neither node could see it, because one owns the carrier and the other owns what it carries |
| **Layer 2 has a page**, and it needed one | Four of this node's ten blocks live there, B6 to B8 plus the record, and none of them could be drawn while the layer had nowhere to be |
| **Storage unavailable has a page**, section 6 | It has been a row in the states table since this node was written and it is the one state whose copy is different from every other: it says the choice could not be saved rather than silently re-asking |
| **The mobile bar carries two destinations, not three**, section 8 | `D-29` took Provably fair out of the rail on 19 August and `D-40` took My items out on 20 August, and the bar follows the rail. This file was written before both |

**And one thing was measured rather than assumed**, section 8: the number of presses between a person and their own answer, at 360 and at 1200. They are not the same number, and Article 7(3) is a rule about that number.

---

## 0.7 Amended 23 August 2026 by `D-82`, the band gets shorter and the symmetry does not move

**The founder called the consent region huge and it was.** Stacked in one column it measured 240px at 1440 and 260px at 360, which is a quarter of the viewport spent on a question with two answers, and it reserved 300px of the host page behind it.

| What changed | Why |
|---|---|
| **Layer 1 is one band above 900**, words left, the two decisions right | 141px at 1440, down from 240. The reserve on the host page follows the measurement rather than a round number: 160px above 900, 260px below it |
| **The symmetry is untouched, and it is the reason the shortening is written down** | Accept and Reject stay one grid of equal columns, the same class on both, neither primary. The CNIL finding of 14 December 2021 is that banners do not let a user refuse as easily as accept. **A shorter band may not be paid for with a smaller refusal**, and stages 06 and 07 inherit that as the hard half of this row |
| **Layer 2's two decisions are pinned to the foot of the scrolling region** | At 360 both answers sat around 300px below the region's own scrollport, so a person had to scroll a fixed band to find either. Pinned, they are equally reachable at every height. That is the same symmetry read as a scroll position rather than as a width, and the 22 August audit raised it as a 360 failure |
| **The say text drops `--wf-measure` above 900, and only there** | 68ch held it to three lines inside a column twice that wide, which bought nothing and cost the band 36px. A consent band is read at a glance in one or two lines. It is not prose |

---

## 0. What this node decides, and what it refuses to

**It decides the interaction:** which blocks exist, what is on by default, what the states are, what may never happen in markup.

**It refuses to decide which law binds us.** That is `0.12`, the market and jurisdiction register, and that register's own verdicts are `[?]` until counsel signs them under `D-A`. Section 3.1 of `0.12` records that where we operate **from** was a question nobody in this repository had asked, and the establishment answer is part of what decides whose implementation of the texts below applies. **The ground is quoted here. The application per market is `[?]` and has an owner.**

---

## 1. The legal ground, opened in a browser on 12 August 2026

Four sources, each opened this session. Nothing in this section is written from memory, and what could not be opened is named at the end of it.

### 1.1 The storage rule: ePrivacy Directive, Article 5(3)

Directive 2002/58/EC as amended, consolidated text `32002L0058 EN 19.12.2009`, EUR-Lex.

> "Member States shall ensure that the storing of information, or the gaining of access to information already stored, in the terminal equipment of a subscriber or user is only allowed on condition that the subscriber or user concerned has given his or her consent, having been provided with clear and comprehensive information, in accordance with Directive 95/46/EC, inter alia, about the purposes of the processing. This shall not prevent any technical storage or access for the sole purpose of carrying out the transmission of a communication over an electronic communications network, or as strictly necessary in order for the provider of an information society service explicitly requested by the subscriber or user to provide the service."

**Two things this text settles for us.** Consent comes **before** the storing or the reading, not after, and it covers storing **and** access, so a technique that reads what is already on the device is inside the rule rather than around it. The exception is narrow and it is written in terms of the service the person explicitly requested, which is the sentence section 4 uses to decide what counts as strictly necessary.

### 1.2 What consent is: GDPR Article 4(11), Article 7, recital 32

Regulation (EU) 2016/679, EUR-Lex `CELEX:32016R0679`, read in the browser on 12 August 2026.

> **Article 4(11).** "'consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her"

> **Article 7(1).** "Where processing is based on consent, the controller shall be able to demonstrate that the data subject has consented to processing of his or her personal data."

> **Article 7(3).** "The data subject shall have the right to withdraw his or her consent at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. Prior to giving consent, the data subject shall be informed thereof. **It shall be as easy to withdraw as to give consent.**"

> **Article 7(4).** "When assessing whether consent is freely given, utmost account shall be taken of whether, inter alia, the performance of a contract, including the provision of a service, is conditional on consent to the processing of personal data that is not necessary for the performance of that contract."

> **Recital 32.** "Consent should be given by a clear affirmative act establishing a freely given, specific, informed and unambiguous indication of the data subject's agreement to the processing of personal data relating to him or her, such as by a written statement, including by electronic means, or an oral statement. This could include ticking a box when visiting an internet website, choosing technical settings for information society services or another statement or conduct which clearly indicates in this context the data subject's acceptance of the proposed processing of his or her personal data. **Silence, pre-ticked boxes or inactivity should not therefore constitute consent.** Consent should cover all processing activities carried out for the same purpose or purposes. When the processing has multiple purposes, consent should be given for all of them. If the data subject's consent is to be given following a request by electronic means, the request must be clear, concise and not unnecessarily disruptive to the use of the service for which it is provided."

### 1.3 A regulator applying it to banners: CNIL

Two pages on `cnil.fr`, English versions, opened 12 August 2026.

> **"Cookies and other tracking devices: the CNIL publishes new guidelines", 19 July 2019.** "the scrolling down or swiping through a website or application can no longer be viewed as a valid expression of consent", and "operators must not read or write any data in the terminal of the users before obtaining consent".

> **"Refusing cookies should be as easy as accepting them: the CNIL continues its action and issues new orders", 14 December 2021.** The requirement is stated as banners that "offer the user a means of refusing cookies as easily as accepting them", and the three failures found are that "cookies subject to consent were automatically deposited on the user's terminal before acceptance by the user", that "information banners are still not compliant because they do not allow the user to refuse the deposit of cookies as easily as to accept it", and that "cookies subject to consent are still deposited after the refusal expressed by the user".

**Those three failures are the state list of this node, written by a regulator from live sites.** Sections 5 and 6 answer them one by one.

### 1.4 What could not be opened, and therefore stays `[?]`

| Source | What happened | Consequence |
|---|---|---|
| **EDPB Guidelines 05/2020 on consent** | The landing page opened and confirms the title and an adoption date of 4 May 2020. **The PDF itself could not be parsed in this environment** | Its paragraph numbers and its wording on cookie walls and on scrolling are `[?]` here. Nothing below rests on it. The cookie wall rule in section 2 is grounded on Article 7(4), which was read in full |
| **ICO guidance on cookies and similar technologies** | HTTP 403 to this environment | The UK position is `[?]`. It also matters less than it looks: the UK is on the inherited market list `0.12` carries as `[?]` |
| **A consent lifetime** | No source opened this session states one | The re-ask interval in section 6 is `[?]` with an owner, rather than a plausible number |
| **Which national implementation binds us** | Depends on establishment and on the market verdicts, both open in `0.12` | The dialog is designed to one behaviour everywhere, section 6, which is what makes the open question survivable |

---

## 2. Six rules, each tied to the text it comes from

| Rule | Where it comes from | What it forbids in markup |
|---|---|---|
| **Prior.** Nothing non-essential is written or read before a choice | Article 5(3), and CNIL 19 July 2019 | No tag, pixel, SDK or storage write on first paint. **The analytics script is not loaded and then held back, it is not loaded** |
| **Symmetric.** Refusing is one control, in the first layer, at the same cost as accepting | CNIL 14 December 2021, and "freely given" in Article 4(11) | No accept-only first layer. No reject buried one layer down. No reject as text while accept is a button |
| **Specific.** One decision per purpose, and purposes are not bundled | "specific" in Article 4(11), recital 32, "When the processing has multiple purposes, consent should be given for all of them" | No single toggle covering analytics and marketing together |
| **Affirmative.** Only an act is consent | Recital 32, "Silence, pre-ticked boxes or inactivity should not therefore constitute consent", and CNIL on scrolling and swiping | No pre-ticked toggles. **No consent by browsing, by scrolling or by closing the banner.** Dismissing leaves the pending state |
| **Withdrawable.** The answer can be changed later, as easily as it was given | Article 7(3), verbatim | No consent that can only be given and never taken back, and no withdrawal route that is longer than the giving route was |
| **Demonstrable.** We can show what was consented to, and when | Article 7(1) | The consent record is itself a block, section 3, not an implementation detail |

**And one rule that is about the shape of the dialog rather than its controls.** Article 7(4) makes conditionality a factor in whether consent is free at all. **So this is not a wall.** The page renders, scrolls and can be read with the dialog still pending, the cookie policy link works, and refusing costs the person nothing except the analytics we would have collected. That is also the only version compatible with `B1-1`: a visitor who has arrived pre-suspected and is deciding whether this place is real cannot be asked to pay a toll before reading.

---

## 3. Blocks, and the parent of each

| Block | Layer | Parent | Notes |
|---|---|---|---|
| **B1. What this is, in two sentences** | 1 | Article 5(3), "clear and comprehensive information", plus `B1-1` | What is stored, for what, and that the choice can be changed later. Recital 32 asks for clear and concise, so the full account is on `0.9` and this is the summary that links to it |
| **B2. Accept all** | 1 | Article 4(11) | One control |
| **B3. Reject all** | 1 | CNIL 14 December 2021 | **The same size, the same weight, the same number of taps.** Symmetry is a hard constraint on stages 06 and 07, and it is written here because it is the single most common place it is lost |
| **B4. Manage purposes** | 1 | Recital 32, specific consent | Opens layer 2. It is a third control, and it is deliberately quieter than the two decisions, which is legitimate because it is not a decision |
| **B5. Link to the cookie policy** | 1 | Article 5(3), and node `0.9` | To `/legal/cookies`. **Works before consent**, per `0.2` |
| **B6. Purpose list with toggles** | 2 | Recital 32 | One row per purpose. **Every non-essential toggle is off**, and it is off because nothing was chosen, not because we chose for them |
| **B7. Strictly necessary, stated and not a toggle** | 2 | Article 5(3), the exception clause | A disabled switch that cannot move is theatre. The row says what it covers and why it needs no consent |
| **B8. Save my choices** | 2 | Article 4(11) | Layer 2 also carries accept all and reject all, so a person who opened it to read does not have to build an answer by hand |
| **B9. The consent record** | invisible | Article 7(1) | What was chosen, when, against which version of the policy. **A policy that changes silently invalidates the consent given under the old one**, which is the same argument `0.9` already makes for version history and `0.14` for the proof scheme |
| **B10. The persistent re-open route** | outside the dialog | Article 7(3), verbatim | **Placed.** `0.2`'s Company column, as **Cookie settings**, a control and not a link, on every page in both account states. Added by the step 8 audit quoting this node, and live since `D-80`. Section 8 |

---

## 4. The purposes, and the one that is not a choice

| Purpose | Default | Ground |
|---|---|---|
| **Strictly necessary** | On, and not a choice | Article 5(3)'s exception, "strictly necessary in order for the provider of an information society service explicitly requested by the subscriber or user to provide the service". Session, security, load balancing, **and the consent record itself**, because a record of a refusal that cannot be stored produces a banner that asks forever |
| **Analytics** | **Off until opted in** | Not covered by the exception. This is the purpose the whole node exists for |
| **Marketing** | **Off until opted in** | Same. And it may be empty at launch, next row |
| **A purpose with nothing in it is not shown** | n/a | Round 1 has no referral programme, which is LATER with no parent, so **whether any marketing tag exists at launch is `[?]`.** Printing an empty choice invites a decision about nothing |

**One question this node will not answer from memory: what the age gate stores.** `2.1` takes an 18 plus declaration and something has to remember it, which is storage in terminal equipment and therefore inside Article 5(3). Whether a compliance-mandated declaration falls inside the "strictly necessary" exception is a legal reading, not a design one.

- **The safe default this node designs to:** it is treated as strictly necessary and named in the policy on that basis.
- **If counsel disagrees**, the gate stores nothing and re-asks on every visit, which costs conversion and is not otherwise fatal, since `2.1` already fires at first case interaction rather than on arrival.
- **Owner:** counsel under `D-A`, with `0.12`. `[?]` until then.

---

## 5. The category's banner, and why two of two is worth saying

`blocks.md` type T5 records it from live pages opened on 12 August 2026: **Hellcase and skin.club both ship a cookie banner with ACCEPT only, and the text "if you continue to use this site, you consent".**

**Both halves fail, and they fail against different texts.** Accept-only fails the symmetry the CNIL states. Consent by continuing to browse fails recital 32 directly, "Silence, pre-ticked boxes or inactivity should not therefore constitute consent", and the CNIL's 2019 wording on scrolling and swiping is the same finding applied to the same gesture.

**Two of two is a competitive fact and not only a compliance one.** The first interactive object in this category is a banner that takes an answer nobody gave. `B1-1` says the visitor arrives already expecting to be handled. **A reject button of the same size is the cheapest evidence in the whole product that the expectation is wrong**, and it costs a button.

---

## 6. States

| State | What the product does | What the person sees |
|---|---|---|
| **Pending, no answer yet** | Strictly necessary only. **No analytics, no marketing, nothing deferred and fired later** | The dialog, and a page that reads and scrolls behind it |
| **Accepted all** | Every purpose on | The dialog is gone. The re-open route stays |
| **Rejected all** | Strictly necessary only, permanently, until changed | Same. **Nothing is asked again on the next page**, which is the third CNIL failure, cookies set after a refusal, in its interface form |
| **Partial** | Exactly the purposes chosen | Same |
| **Changed later** | The new answer applies from that moment. Article 7(3) is explicit that withdrawal does not undo the lawfulness of what came before, so nothing is retroactive and nothing pretends to be | The dialog reopens with the current answer shown, never blank |
| **Storage unavailable**, private mode or blocked | The dialog cannot remember, so it asks again. **Nothing non-essential fires in the meantime**, and the page never breaks | The dialog, again. It says the choice could not be saved rather than silently re-asking. **A page of its own since `D-80`:** silent re-asking is indistinguishable from a banner that ignores refusals, which is the CNIL's third finding, so the one sentence that separates a browser limitation from our defect is the whole state |
| **Consent expired** | Re-ask after a stated period | The dialog again. **The period is `[?]`**, section 1.4 |
| **Geo blocked**, `2.2` | The dialog renders as everywhere else | `0.2` already keeps the footer and the policy links alive in this state, and a dead end that also removes the legal routes is how a person with a complaint loses the ability to make it |
| **Gate open**, `2.1` | They cannot collide: `0.4` is on arrival, `2.1` at first case interaction | If both were somehow live, the gate is on top and the banner does not render above it |

**One behaviour in every market, and that is a decision with a reason.** Under `D-23` the market allowlist is closed by default, the verdicts in `0.12` are `[?]`, and where we are established is open. **Building a second, lighter banner for markets where the rule may not apply means shipping two behaviours and finding out later which one was served to whom.** One behaviour is also the only one that is honest under `B1-1`: a person who learns that the choice depends on where they are learns that the choice was a formality.

---

## 7. SEO, indexation and performance

- **The dialog has no URL and no schema.** `0.13` holds no row for it, which is correct: it is not a page, and nobody navigates to it.
- **It never hides the content from a crawler or from a person.** It is not an interstitial covering the viewport, the page beneath is fully rendered, and there is no version of this dialog that decides what a crawler sees. `0.13` section 4.3 already makes this product's public surfaces readable by anyone from anywhere without serving a crawler anything different, and a consent wall would take that back.
- **It is not the reason the first paint is late.** Design principle 5, speed is trust. It is part of the first render rather than a script that arrives afterwards and repaints the page.
- **No text inside it is a crawlable claim about the product.** The claims live on `0.9`.

---

## 8. Accessibility, and the one block this node cannot place

- **Not a focus trap, and not `aria-modal`.** It is a region with an accessible name, early in the DOM and early in the tab order. Trapping focus is the interaction form of the conditionality Article 7(4) warns about.
- **Escape and dismissal are not answers.** Recital 32 again: inactivity is not consent, so closing the dialog leaves the pending state and the strictly necessary set.
- **Both decisions are real `<button>` elements**, each at least 44 by 44 CSS pixels, matching the AAA target size `0.1` chose for every carrier.
- **Symmetry is not only about size.** Colour, contrast and prominence carry it too, and this is the line that binds stages 06 and 07: **a reject button that is technically the same size and visually a ghost has failed the same rule with better plausible deniability.**
- **Announced politely, never assertively.** `0.5` owns the live region contract and this dialog is not an alert.
- **At 360px it never covers the mobile bar.** `0.1` carries **two** live destinations down there, Home and Cases, since `D-29` and `D-40` took Provably fair and My items off the rail and the bar follows the rail. **This line read "three" until 22 August 2026**, which was true when it was written and stopped being true two decisions later. `0.2` already cut the baseline's floating support control for exactly this reason, `D-22`.

**The persistent re-open route, and this section was four days out of date about it.** Article 7(3) requires withdrawal to be as easy as giving, so there has to be a permanent entry that reopens the dialog. This section used to read "**`0.2` does not have one**", and it recorded the recommendation rather than applying it, correctly, because a block a carrier lacks is a finding for the step 8 audit and never a quiet edit in another node's file.

**The audit took the finding and applied it.** `0.2`'s Company column carries **Cookie settings**, a control rather than a link and the only control in that column, on every page in both account states, and `footer.md` records the reason in Article 7(3)'s own words. **What did not happen is the finding coming back here**, so this node went on describing a hole that had been filled.

**And the control did nothing until 22 August 2026.** It was a `<button>` with no handler on all ninety four pages, because `0.4` was unbuilt and there was nothing for it to open. `D-58`: **a control that does not do its thing is a picture of it.** So the fix for Article 7(3) was itself the defect `D-58` forbids, and it was invisible to both nodes: one owns the carrier and the other owns what the carrier carries, and neither one owns the pair.

**The route is measured rather than asserted, because Article 7(3) is a rule about a count.**

| Width | Presses to give | Presses to withdraw | Why |
|---|---|---|---|
| **1200 and up** | 1, on a region pinned to the viewport | **1** | The footer's link columns are flat above 900 |
| **360** | 1, on a region pinned to the viewport | **2** | `0.2` section 4: below 900 the link columns are accordions **collapsed by default**, so the control is behind one press before its own, at the very bottom of the page |

**The narrow case is not equal and the difference is printed rather than absorbed.** Moving the control out of the accordion is a change to `0.2`'s composition, which is that node's to make and not this one's, so it goes to the step 8 audit the same way the control itself did. **The alternative that needs no new control** is still to host a re-open control on the cookie policy page, `0.9`, which satisfies the text and is one hop longer than accepting was.

---

## The pages that draw this node, and the registry is where the list comes from

**Added 2 September 2026 by `D-122`.** Founder: actualise every IA node against the wireframes. **The check could not be written, because nothing joined a node to the screens that draw it except prose.** This table is that join, taken from `/_nav.js`, which is the one registry every page in the project already renders from.

**It is a contract, not a listing.** A page in the registry with no row here is a state nobody specified. A row here with no page is a specification nobody drew.

| Page | What it draws | Node |
|---|---|---|
| `cookie.html` | Pending, no answer yet | `0.4` |
| `cookie-manage.html` | Layer 2, nothing chosen | `0.4` |
| `cookie-accepted.html` | Accepted all | `0.4` |
| `cookie-rejected.html` | Rejected all | `0.4` |
| `cookie-partial.html` | Partial | `0.4` |
| `cookie-changed.html` | Changed later | `0.4` |
| `cookie-expired.html` | Consent expired | `0.4` |
| `cookie-nostore.html` | Storage unavailable | `0.4` |

---

## 9. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **The missing compliance constraint** | `CLAUDE.md` enumerates five compliance constraints and none of them is data protection, so this node's legal ground has no parent class. It is carried on `B1-1` and design principle 1, which is true and is not the whole reason the node exists | The stage close, as a candidate line in `CLAUDE.md`. Founder decides |
| **Which law applies, per market** | `0.12`'s verdicts are `[?]` and where we are established is open, section 3.1 of that node | Counsel under `D-A`, with `0.12` |
| **The consent lifetime** | No source opened this session states a re-ask interval. A number invented here would read as sourced | Counsel, or a cited regulator page, before stage 04 |
| **Whether the age declaration is strictly necessary** | Section 4. The safe default is designed and the fallback is drawn | Counsel under `D-A` |
| **Whether any marketing purpose exists at launch** | The referral programme is LATER. A purpose with no vendor behind it is not shown | Founder, with production |
| **The vendor list per purpose** | `0.9` holds the document and it needs actual names. Nothing here invents one | Production, with `0.9` |
| ~~**The persistent re-open route**~~ **Closed 22 August 2026.** `0.2` carries **Cookie settings** in its Company column, added by the step 8 audit, and it opens layer 2 with the current answer since `D-80` | What replaces it is narrower: **at 360 the route back is two presses against one**, section 8, because that column is an accordion collapsed by default | The step 8 audit, then node `0.2` |
| **A consent management platform, or our own** | Not an IA question. What is fixed here is the behaviour any implementation has to produce | Production |

**And what belongs elsewhere.** The words in the dialog: stage 05. How it looks, including the symmetry that decides whether this node worked: stages 06 and 07. The policy text itself: `0.9`. The live region that announces it: `0.5`. The order against the age gate: already settled in `ia/docs/sitemap.md` and not reopened here.
