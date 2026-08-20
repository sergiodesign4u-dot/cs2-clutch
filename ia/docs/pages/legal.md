# Node 0.9. Legal and policy pages

**Type:** page. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** One template rendering four documents, each at its own URL and its own indexation, so that a person can read what they are agreeing to in plain words, read the document itself on the same page, and see what changed since they agreed.

**Jobs served.** None directly. **Parent class, per block rather than for the node as a whole:**

- **The identification block:** a named legal requirement, Directive 2000/31/EC Article 5(1), opened live in this session and quoted in section 1, standing on the compliance constraint in `CLAUDE.md`, quoted: "Compliance is a first class product constraint, not a later feature". Constraint class.
- **The plain-language summary:** barrier `B8-3`, winning treated as suspicious behaviour, pattern of 3, by way of row `G5`, "Named limits stated in plain words", whose success signal is that the user meets the limit before the withdrawal rather than inside it. Barrier class. Reinforced by GDPR Article 12(1) for one of the four documents, quoted in section 1.
- **The version history:** design principle 1 in `CLAUDE.md`, quoted by its `D-14` limit, "the product is built so that its own numbers are checkable", generalised to its rules by node `0.14` section 6: a scheme that changes silently invalidates every proof before it. Principle class.
- **The cookie policy document:** a named legal requirement, Directive 2002/58/EC Article 5(3) as amended by Directive 2009/136/EC, opened live, plus node `0.4` which links it.
- **The refund and payments policy:** barrier `B4-1` by way of row `C4` and barrier `B4-3` by way of row `C3`, the two money-in barriers whose commitments have to survive contact with a document. Barrier class.

**Read by and linked from:** `0.2` footer column 3, `0.4` cookie consent, `0.10` support, `0.12` which reads as a consumer of the market statement. **Routes out:** `0.10`, and the other three documents.

**Four documents, one node, because they are one template.** Four specifications of the same page shape would be three copies. Each document keeps its own URL and its own indexation, and `0.13` already set both.

**Baseline row, `0.9`.** The rule in `CLAUDE.md`: every node carries one baseline row, what the live product does, what we keep, what we change and why.

| What the live product does | What we keep | What we change, and why |
|---|---|---|
| Four documents, all `noindex,nofollow`, each **one H1 and zero H2**. The terms run about 7,270 words as a single wall, last updated 08/01/2025; the cookie policy is dated April 2019. All carry a breadcrumb. `baseline.md` section 9.4. | The breadcrumb, and the document set itself. | **The wall.** Zero H2 in a 7,270 word contract is the defect this node exists to fix, and it is now measured rather than asserted. **And the dates:** a policy from 2019 sitting under a product that changed every year since is a document nobody re-read. |

---

## 0. The template is the node

This node specifies a container. **It writes no legal copy, and that is a boundary rather than an omission:** the text of all four documents is counsel's, listed in section 10.

What the container fixes is the order every document appears in and the thing no competitor in this category does at all:

1. **Document identity.** The name, the date it took effect, the version it is.
2. **A plain-language summary**, above the document, never instead of it.
3. **The document**, in full, on the same URL.
4. **The version history**, with every previous version retrievable.
5. **The identification block**, shared with `0.2`.

**`blocks.md` section 8 records the finding this node exists to act on:** no competitor versions its policies visibly. The same row records why that matters, and node `0.14` section 6 had already written it about the fairness scheme before this node existed: **a scheme or a policy that changes silently invalidates everything decided under the old one.** A person who accepted version 2 and is being judged under version 4 has agreed to a document that no longer exists, and neither side can prove what it said.

---

## 1. The legal ground, opened live rather than recalled

Four instruments, all opened on EUR-Lex on 12 August 2026. Each is quoted for exactly the thing it decides here, and nothing further is inferred from any of them.

### 1.1 Directive 2000/31/EC, Article 5(1), the identification block

`https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32000L0031`

> "In addition to other information requirements established by Community law, Member States shall ensure that the service provider shall render **easily, directly and permanently accessible** to the recipients of the service and competent authorities, at least the following information:
> (a) the name of the service provider;
> (b) the geographic address at which the service provider is established;
> (c) the details of the service provider, including his **electronic mail address**, which allow him to be contacted rapidly and communicated with in a direct and effective manner;
> (d) where the service provider is registered in a trade or similar public register, the trade register in which the service provider is entered and his registration number, or equivalent means of identification in that register;
> (e) **where the activity is subject to an authorisation scheme, the particulars of the relevant supervisory authority**;
> (g) where the service provider undertakes an activity that is subject to VAT, the identification number."

**Node `0.2` opened the same Article on 11 August 2026 and reached the same block.** Nothing is re-derived here. What section 2 adds is why the block appears on this page as well as in a footer that is already permanent.

### 1.2 Regulation (EU) 2016/679, Article 12(1), the plain-language requirement

`https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679`

> "The controller shall take appropriate measures to provide any information referred to in Articles 13 and 14 relating to processing to the data subject in a **concise, transparent, intelligible and easily accessible form, using clear and plain language**, in particular for any information addressed specifically to a child."

**Read carefully, this cuts in the direction most summaries are used to avoid.** The requirement lands on **the information**, not on a wrapper around it. A plain-language summary sitting above an unreadable privacy policy does not satisfy this line; it satisfies it twice over only when the document underneath is itself plain. **So the summary is a second reading path, never a licence for a worse document**, which is rule 3 in section 4.

### 1.3 Directive 2002/58/EC Article 5(3), as amended by Directive 2009/136/EC, the cookie policy

`https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02002L0058-20091219`

> "Member States shall ensure that the storing of information, or the gaining of access to information already stored, in the terminal equipment of a subscriber or user is only allowed on condition that the subscriber or user concerned **has given his or her consent, having been provided with clear and comprehensive information** ... inter alia, about the **purposes of the processing**."

**The consolidated text was opened deliberately.** The original 2002 wording says "is offered the right to refuse", which is the opt-out reading, and the 2009 amendment replaced it with consent. Node `0.4` was written as prior consent with reject as easy as accept, and this is the text that grounds it. **The cookie policy is the "clear and comprehensive information" half of that sentence**, and `0.4` is the consent half. Neither works alone.

### 1.4 Directive 2011/83/EU, the refund and payments policy, and the exclusion that runs alongside it

`https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32011L0083`

> Article 9(1): "the consumer shall have a period of **14 days to withdraw** from a distance or off-premises contract, without giving any reason".
> Article 16(a), an exception: "**service contracts after the service has been fully performed** if the performance has begun with the consumer's **prior express consent, and with the acknowledgement that he will lose his right of withdrawal** once the contract has been fully performed by the trader".
> Article 16(m), an exception: "the supply of digital content which is not supplied on a tangible medium if the performance has begun with the consumer's **prior express consent and his acknowledgment that he thereby loses his right of withdrawal**".
> Article 3(3): "This Directive shall not apply to contracts: ... **for gambling, which involves wagering a stake with pecuniary value in games of chance**, including lotteries, casino games and betting transactions".

**And this is the finding that leaves the node.** Both exceptions require two things from the person, and only one of them is a document. The prior express consent and **the acknowledgement that the right is lost** are acts captured at the moment of the transaction. **A refunds policy cannot create them by describing them.** So if this route is the one the product relies on, a block has to exist at `4.1` and at the open, and no node holds one today. It is section 10, and it is not this node's to place.

### 1.5 The exclusion fork, inherited and not re-argued

Directive 2000/31/EC Article 1(5)(d) and Directive 2011/83/EU Article 3(3)(c) both exclude gambling in almost the same words. `CLAUDE.md` records that whether this category counts as gambling is unsettled and varies by jurisdiction, and `0.2` section 1 already resolved the consequence: **both readings land on the same block in the same place.** If the product is not gambling, Article 5 applies in full. If it is, that Directive steps aside and an authorisation regime arrives, and Article 5(1)(e) already names the shape it demands.

**The same structure holds for the refunds page and it is worth one line rather than an argument.** If the Consumer Rights Directive does not apply, the refund and payments policy does not disappear: it stops being a transposition of Articles 9 to 16 and becomes a product commitment about payments, chargebacks and what happens when money moves the wrong way. **Its contents change. Its existence does not**, because `C3` and `C4` are barrier-parented commitments that need a place to be written down whatever counsel returns.

---

## 2. The identification block, and why it appears twice

**One block, one source, two renderings.** The block is specified in `0.2` section 1 and its values live there. This node renders the same fields from the same place and never keeps a second copy. **Two renderings of a registered address that disagree is the whole defect**, and it is the same rule `0.11` applies to numbers and `0.14` applies to the round proof: an object rendered at several sites has one definition.

| Article 5(1) item | Field | Status |
|---|---|---|
| (a) | Name of the service provider | `[?]`, the operating entity is a founder decision |
| (b) | Geographic address of establishment | `[?]` |
| (c) | Electronic mail address | `[?]`, and node `0.10` owns the contact route it belongs to |
| (d) | Trade register and registration number | `[?]` |
| (e) | Particulars of the supervisory authority, where an authorisation scheme applies | `[?]`, **and it has a candidate now**, below |
| (g) | VAT identification number | `[?]` |
| (f) | Regulated professions | Not applicable on the face of the Article. `[?]` if counsel disagrees |

**Item (e) moved on 12 August 2026 and nothing else did.** `D-23` chose the Isle of Man as a direction, and `markets.md` section 3.6 names the regulator, the Gambling Supervision Commission, under the Online Gambling Regulation Act 2001. If that licence lands, Article 5(1)(e) acquires a value. **It is a direction and not a filing, so the field stays `[?]`**, and it is recorded here so nobody reads the empty field as evidence that the question was never asked.

**Why the block repeats on a page whose footer already carries it, and this is a design argument rather than a reading of the Article.** The footer satisfies "permanently accessible". What the legal page adds is proximity: a person reading terms is reading a contract, and the identity of the counterparty is part of the contract rather than a fixture at the bottom of the window. **The Article is satisfied by the footer either way**, so nothing here rests on this argument being accepted.

**Text, never an image**, per `0.2` section 5 and `0.11` rule 8. A registered address in a graphic satisfies nobody, including "easily, directly and permanently accessible".

---

## 3. Blocks, in mobile-first priority order

Composition from `blocks.md` section 8, type T7. Every row it marks TAKE for this node is here, and nothing is added that the bank does not hold.

| # | Block | Source in the bank | Parent |
|---|---|---|---|
| **1** | **Document identity:** H1, effective-from date, version id | Own research row, the `0.9` template | `0.14` section 6, and `0.11` rule 2, an as-of moment on anything that moves |
| **2** | **Plain-language summary**, section 4 | Own research row | `G5`, and GDPR Article 12(1) for the privacy document |
| **3** | **In-document contents**, a left column on desktop and a collapsed block on mobile | Refero WhatsApp, two column help article | Design principle 5 in `CLAUDE.md`, speed is trust, applied to reading rather than to loading |
| **4** | **The document**, in full, on the same URL | Own research row | The four instruments in section 1 |
| **5** | **Version history**, section 5 | Own research row | `0.14` section 6 |
| **6** | **The identification block**, section 2 | skin.club footer row, TAKE | Article 5(1), opened live |
| **7** | **Questions about this document**, one route to `0.10` | Hellcase FAQ structure row, placement corrected | `G4`, the appeal with a published response deadline |
| **8** | **The other three documents**, cross-linked | `0.13` section 8, the footer plane | `0.13` |

**The document is never behind an accordion, at any width.** This is the same rule `0.2` fixed for the compliance line and it is stated a second time on purpose: a document a person has to open is a document that was not shown to them. The accordion in this node has exactly one legal home, the version history, which is the tail, and `blocks.md` takes that placement from Refero Ableton: an accordion below the substance rather than instead of it.

**The document is never a PDF and never a download.** A file is not a page: it has no H1 that stage 04 can validate, no breadcrumb, no version history around it, and on a 360px screen it is a horizontal scroll with a viewer in front of it.

---

## 4. The summary, and the six rules that keep it from becoming the document

The summary is the reason the four documents share a template at all. It is also the block most likely to quietly replace the thing it summarises, so its limits are rules rather than guidance.

1. **It never contradicts the document.** Where they disagree, **the document governs, and that precedence is printed on the page** rather than assumed. A precedence a reader has to infer is a precedence that will be disputed.
2. **It is never the only thing a person can read.** The full document sits on the same URL, below it, not behind a link, not behind a toggle, not in a file.
3. **It does not license a worse document.** GDPR Article 12(1), section 1.2, puts the plain-language requirement on the information itself. **A summary is a second reading path, never a translation layer over text nobody could read.**
4. **It introduces no fact that is not in the document.** No new commitment, no softening, no number the document does not carry. Where it summarises a limit, the limit is `G5`'s and it is stated the same way in both.
5. **It is versioned with the document and by the same hand.** A summary that is not versioned drifts from what it summarises, and the drift is invisible because both texts look current. It is a field of the version, section 5, not a caption on the page.
6. **Agreeing is never something a person does from the summary**, and the summary carries no completion mechanic: no read-progress figure, no "you have read the terms" marker. `0.11` rule 7, a number is never a score, and the limits rule in `CLAUDE.md` that binds stages 04, 07 and 11.

**And one thing the summary may do that is easy to miss.** It may say what the document does **not** cover, which is exactly the move `0.14` makes with its scope line. A summary that only lists what is included reads as complete, and completeness is the claim it is least able to support.

---

## 5. The version history, and its seven fields

**A version history that lists dates and does not hold the text proves nothing.** Every field below exists because something reads it separately.

| Field | What it holds | Why it is a field |
|---|---|---|
| **Version id** | A stable identifier for this version of this document | **It is what an acceptance record points at.** Without it, the record says a person agreed to a date, and two versions published on one day are indistinguishable |
| **Effective from** | The date this version governs from | The date rendered at the top of the page is read from here, never typed. A hand-typed date is the field that drifts |
| **Published on** | The date it was put up | **Where the two differ, both are shown.** A change that takes effect before it is published is the defect this second field exists to make visible |
| **Supersedes** | The version id it replaces | Makes the chain readable in one direction and machine-checkable in both |
| **What changed, in words** | A summary of the change, under the same six rules as section 4 | Not a diff dump. A person comparing two legal texts unaided is a person who will not compare them |
| **Requires a new agreement** | Yes or no, and a yes has a consequence | A yes puts every existing account into state 2 in section 6. A no does not. **The field is the trigger, not a note about one** |
| **The version itself** | The full text of that version, retrievable | The whole point. A history of descriptions of documents is not a history of documents |

**Where an archived version lives is not decided here.** It needs either a URL of its own or an in-page rendering, and `0.13` holds one row per document and none for an archived version. Section 10, owner named.

---

## 6. States

Seven, and every one of the four documents inherits all seven.

| State | What the page shows | Route out |
|---|---|---|
| **Current** | The normal case. Identity, summary, document, version history, identification block | The other documents, `0.10` |
| **Changed since you last agreed** | That it changed, when the new version takes effect, what changed in words, and the route to the version the person did accept. **Reading is never blocked and acceptance is never asked here**, section 7 | Continue reading, or the flow that needs the agreement, or the exit which stays open |
| **Guest, never agreed** | The same page with no agreement band at all. **Every document is public and readable before login**, `B1-1`, the visitor arrives pre-suspected | Anywhere. Nothing is gated |
| **Reading a superseded version** | That this version is not the current one, the dates it governed between, and the current version beside it. **Never rendered as if it were live** | The current document |
| **Not yet published** | That this document is not published, and the route to ask. **Never an empty page and never placeholder legal text**, `0.11` rule 3, missing is a state and never a zero | `0.10` |
| **Consent pending**, `0.4` | The cookie policy renders in full with the consent dialog still open, and carries the control that reopens the choice | `0.4`, and the choice is changeable afterwards from here |
| **Geo blocked** `2.2`, **or a boundary in force** `6.3` | Unchanged, in full. `markets.md` section 9 rule 3 keeps reading the legal pages open in the same breath as the refusal | `0.10` stays reachable |

### The state that earns the node

**Changed since you last agreed.** A component built only for the current version meets its first amendment as an incident, and the incident is a person being held to a text they never saw.

**Three rules on it, each inherited rather than invented:**

- **It never blocks reading.** A wall that demands acceptance before the terms can be read is the terms being agreed unread. Same shape as `2.1`, which fires at first case interaction and never on arrival, `D-17`.
- **Acceptance is asked at the next action that depends on it, not on this page.** The document informs, the flow asks. That is `D-17`'s sequencing applied to a second gate, and it keeps this page a document rather than a dialog.
- **The exit stays open.** A person who has not accepted a new version can still take out what they hold. `6.3`, withdrawal stays open under every boundary, and `markets.md` section 7 step 2, which already applied the same rule to a closing market.

**And it is not a toast.** `0.5` says a toast is never the only place a state is announced. A dismissible "we have updated our terms" strip that leaves no trace is exactly that failure with a legal consequence attached.

---

## 7. Accessibility and adaptive behaviour

**Mobile, base, 360px.** Document identity, then the summary, then the contents block collapsed, then the document, then the version history collapsed, then the identification block, then the route to `0.10`. One column throughout.

**Desktop, from 900px.** The in-document contents becomes a persistent left column beside the document, per the Refero WhatsApp row in the bank. Everything else keeps its order.

- **The summary is above the document at every width.** It never moves into a sidebar on desktop, because a person who has read the summary in a margin has read a caption.
- **The document's clause headings are real headings**, H2 for top-level clauses and H3 below them. `0.13` section 5: a visually smaller heading that is structurally an H2 stays an H2.
- **The contents block is a list of real anchors**, crawlable `<a>` elements, `0.13` section 8. A contents list built from script is invisible to a crawler and often to a keyboard.
- **The version history accordion header is a `<button>` with `aria-expanded` and `aria-controls`**, and every version row is in the DOM at every width. Same rule as `0.2` section 5 and `0.1`'s drawer, stated a third time because it is the single most common way the pattern ships wrong.
- **Every target at least 44 by 44 CSS pixels**, matching the AAA choice `0.1` made.
- **The effective-from date is text with a machine-readable `datetime`**, not a rendered string alone.
- **Nothing on this page is an image of text.** `0.11` rule 8, and here the reason is sharper than usual: a clause in a picture cannot be quoted into a complaint, searched, or read aloud.

---

## 8. SEO block, A to E

Inherited from `0.13` rather than derived. Indexation, canonical, schema and breadcrumb come from its section 3 row for `/legal/<doc>`: **indexed, canonical self, `WebPage`, breadcrumb Home > Legal > Document.**

### A. Meta tags, ready copy

| Document | URL | Title, <= 60 | Description, <= 155 |
|---|---|---|---|
| Terms of use | `/legal/terms` | `Terms of use - CS2 Clutch` | `The rules between you and CS2 Clutch, in plain words above the full text, with every past version and the date each one took effect.` |
| Privacy policy | `/legal/privacy` | `Privacy policy - CS2 Clutch` | `What data CS2 Clutch collects, why, and what you can ask us to do with it. A plain summary above the full policy, and every past version kept.` |
| Cookie policy | `/legal/cookies` | `Cookie policy - CS2 Clutch` | `Which cookies CS2 Clutch sets, what each one is for, and how to change your choices at any time. A plain summary above the full policy.` |
| Refund and payments policy | `/legal/refunds` | `Refund and payments policy - CS2 Clutch` | `How payments, refunds and disputed charges work on CS2 Clutch, and what happens to money that moves the wrong way. Plain summary above the policy.` |

**Canonical:** self. **Robots:** `index, follow`. **No hreflang on any of the four**, `0.13` section 1, one language. **OG and Twitter:** title and description as above, and the card image is the product's default rather than a per-document graphic, because there is nothing document-specific to picture.

### B. Headings, one H1 and the H2 list in block order

**H1:** the document name, exactly as the footer's column 3 labels it. One destination, one label, `0.1`'s rule applied to the address bar and the heading together.

**H2 order, identical on all four documents:**

1. In short
2. Contents
3. *the document's own top-level clauses, one H2 each, their text drafted by counsel*
4. Version history
5. Who we are
6. Questions about this document

**Stage 04's check is mechanical:** read the block order in section 3, read this list, they match or the node is wrong.

### C. Ready page text, which is everything on the page that is not the document

The clause text is counsel's. **These four leads are the node's own copy and they carry no legal claim**, only a description of the page.

- **Terms of use.** "These are the rules between you and CS2 Clutch: what you can do here, what we do, and what happens when something goes wrong. The short version is first. The full text is below it, and the full text is the one that governs."
- **Privacy policy.** "What we collect, why we collect it, who else sees it, and what you can ask us to do with it. The short version is first, the full policy is below it, and every earlier version is kept where you can read it."
- **Cookie policy.** "What we store on your device, what each thing is for, and how to change your mind. You can change your choices from this page at any time."
- **Refund and payments policy.** "How money moves in and out, what happens when a payment fails or is disputed, and what you can get back. The short version is first and the full policy is below it."

**One line is not a lead and it appears on all four**, above the version history: "This document has changed *N* times. Every version is below, with the date it took effect and what changed." The count is read from the version register, never typed.

**Interface strings do not live here.** Button labels, field labels and state text go to `voice/docs/microcopy.md` after stage 05. What this node holds is which information has to be in each place.

### D. Structured data

`WebPage`, and nothing more, per `0.13` section 7: "there is nothing on those pages that a richer type would truthfully describe."

**Two refusals, both from the policy `0.13` quoted live:** no `FAQPage` on the version history, which is a change log and not a set of questions, and **no `Product` or `Offer` on the refunds document**. `0.13` section 7 already refused `Offer` on anything but the case entry cost, and a refunds page that marks itself up as a product is the "irrelevant or misleading content" line of that policy.

`BreadcrumbList` only where a visible breadcrumb exists, `0.13` section 6, and see the open item about the middle crumb in section 10.

### E. Optimisation checklist

1. Exactly one H1 per document, and it is the document name.
2. The H2s exist in block order and match list B.
3. A visible breadcrumb is drawn, and its markup matches what is drawn.
4. Every contents anchor and every version link is a crawlable `<a href>`.
5. Canonical self on all four. No hreflang anywhere.
6. **No text in images**, including the identification block and every clause.
7. LCP is the document identity band, which is text, so nothing on the first screen waits on an asset.
8. The document renders without script. A legal document behind a client-side renderer is a legal document that does not exist for a reader with script disabled or a slow network.

---

## 9. What this node changed elsewhere, recorded rather than silently applied

**Two, and both are findings against files this node reads rather than edits.**

1. **`0.13` breadcrumb "Home > Legal > Document" names a level with no URL.** The URL map holds four documents and no `/legal`. A middle crumb needs an address or it is not a crumb. Two resolutions exist, in section 10, and **the choice is `0.13`'s** because that node owns URLs and this one inherits them.
2. **`0.13` holds no row for an archived version.** The version history requires that every previous version be retrievable, so either archived versions get addresses or they render inside the live document's URL. Also section 10, also `0.13`'s.

**Neither is edited here.** `CLAUDE.md`: verify before fixing, and a node does not reach into a register it consumes.

---

## 10. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **The text of all four documents** | Every clause of every document. **This node specifies the container and writes none of the contents** | Counsel, and it is the largest single `[?]` in cluster 0 |
| **The acknowledgement the withdrawal-right exception needs** | Directive 2011/83/EU Articles 16(a) and 16(m) both require prior express consent **and** an acknowledgement that the right is lost. **An acknowledgement is captured at the transaction, not described in a policy**, so a block has to exist at `4.1` and at the open. No node holds one today | Counsel first, on whether the exception is even reached given Article 3(3)(c), then nodes `4.1` and `3.3` |
| **Whether the Consumer Rights Directive applies at all** | Article 3(3)(c) excludes gambling in the same words as 2000/31/EC Article 1(5)(d), and `CLAUDE.md` records the classification as unsettled. **The refunds page exists either way**, section 1.5, and its contents change | Counsel, under `D-A` |
| **Every value in the identification block** | Name, address, email, register and number, VAT, supervisory authority. Structure fixed in `0.2`, contents unresolved. **Item (e) has a candidate under `D-23` and stays `[?]` until the licence is more than a direction** | Founder with counsel, same answer as `D-A` |
| **Whether acceptance is recorded per version** | State 2 in section 6 cannot exist without it, and neither can the version id field. **If production does not record which version a person accepted, the version history is decorative** | Production, before stage 04 draws state 2 |
| **How an archived version is addressed** | A URL of its own, or an in-page rendering. `0.13` has no row either way | Node `0.13` |
| **The "Legal" breadcrumb level** | It has no URL. Either `/legal` becomes a fifth address, an index whose whole content is four links the footer already carries, or the crumb is dropped and the trail is Home > Document | Node `0.13` |
| **Retention of acceptance records and of tickets** | A privacy fact, so it belongs in the privacy document, which does not exist yet. Circular until counsel writes it | Counsel |
| **Whether a summary is required or merely offered** | GDPR Article 12(1) requires plain information. Whether a separate summary discharges anything, or is purely a product choice, is a legal reading | Counsel. **The product ships it either way**, on `G5` |

**And what belongs elsewhere.** The consent mechanics: `0.4`, already specified. The footer's rendering of the identification block: `0.2`, already specified. The response deadline for a question about a document: `0.10` and `0.11`. Indexation and URLs: `0.13`. The words of any interface string: stage 05. How the page looks: stages 06 and 07.
