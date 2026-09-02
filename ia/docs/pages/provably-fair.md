# Node 1.2. Provably fair, public, with the verifier

**Type:** page. **Group:** `pages`. **Scope:** MVP. **Cluster:** 1, decide whether this place is real. **Alias:** `S-A2`.

**States that are numbered nodes:** `1.3` verifier, malformed round, and `1.4` verifier, our own proof failed. Both are specified in section 5 under their own anchors, per the file granularity rule in `ia/docs/sitemap.md`, "Detailed node map".

**Purpose.** Explain what a round proof does and does not prove, in public and with no account, and then let anyone recompute a round themselves with our algorithm or with somebody else's.

**Jobs served.** Related Job 3, verify the outcome after I open, `jtbd.md`, primary motivation for The Researcher and secondary for The Opener. Core Job 1, arrive with confidence to try, before login, where `jtbd.md` names a public provably fair surface as one of three things no competitor offers pre-login.

**Parent class, and all three are present.**

- **Job:** backlog row `H1`, public provably fair page, no login, working verifier, whose own parents are Related Job 3 and Core Job 1. Row `F3` and row `E4` arrive here, they do not live here.
- **Barrier:** `B2-1`, the pre-login information wall, `cjm-as-is.md`. This page is the largest single piece of product a person can read without an account.
- **Constraint:** the compliance constraint in `CLAUDE.md`, "provable fairness as a legal and trust requirement", plus design principle 1 quoted by its `D-14` limit, "the product is built so that its own numbers are checkable, not that a verifier is what persuades a sceptic".

**Two barriers this page deliberately does not claim.** It does not close `B7-2`, the published probability that did not behave, and it does not close `B1-1`, the category arrives pre-suspected. `D-14` withdrew exactly that claim, and section 2 of this node is where the withdrawal becomes markup rather than a sentence in a decision record.

**URL:** `/provably-fair`. **Breadcrumb:** Home > Provably fair. **Indexed**, canonical self, schema `WebPage`. All four are inherited from node `0.13` section 3 and section 7, not decided here.

**Renders:** node `0.14`, canonical round proof, variant V4. This node does not restate `0.14` and may not contradict it.

---

## 0. The property that is the whole node

**Public, with no account, and no account state of its own.**

The block bank opened Key-Drop's provably fair route live on 12 August 2026 and it **redirects to the login page**, `blocks.md` sections 6 and 8. That is not a competitor's stylistic choice, it is a live instance of the failure this node exists to avoid: the proof of fairness sits behind the thing a person has not yet decided to do. `research.md` section 4, "3 Common Patterns", puts the same finding in one sentence for the whole category, "the gap between we have PF and you can verify before you deposit is wide", and `research.md` section 5b scores CSGORoll's public per-game documentation at the top of the fairness column for the opposite reason.

**So the account state matrix of this page has one row.** A signed-in person sees the same page as a stranger. That is a decision rather than an omission, and section 6 records what was refused to keep it true.

**The second property, and it decides the block order.** The node's own `INCLUDES` in `sitemap.md` reads "opens and explains before it asks anyone to paste a seed", and the base layer classes the verifier form as deep, "rare and deliberately not surfaced", `sitemap.md` section Global, contextual, deep. Section 3 gives the evidence for why that order is right rather than polite.

---

## 1. Who this page is actually built for, and the rule that settles it

Two readers, and the research says plainly that they are not the same size.

- **The Researcher** will paste a seed. Related Job 3 scores 3 for that persona, `D-14`.
- **The Opener** will not. `research.md` section 9 records the claim as killed by name: "Mass-market Openers do NOT self-verify PF before depositing", and the same section records that casual users run on institutional trust proxies instead. Related Job 3 scores 1 for The Opener.

`CLAUDE.md` says the primary persona wins when two decisions conflict, and the primary persona is The Opener. **So this page is built to be read by someone who will never use its form**, and the form is built to be complete for the person who will. `research.md` section 5b states the same thing from the benchmark side: "Most users never do, but knowing they could is the trust signal."

**What that buys, concretely.** The limit and the claim sit on the first screen where a five second reader meets them. The explanation is prose a non-technical person can finish. The form sits below both, and the algorithm and its version history sit below the form. Nothing about that order is a courtesy, it is the priority test applied to two personas with different sizes.

---

## 2. The `D-14` limit, stated on the page itself

Node `0.14` carries the scope line as part of the component, in one short clause, everywhere the proof renders. **This page carries the long form of the same line, and neither may drift from the other.**

The long form, which is block 1 and is on the first screen at 360px:

| | What the page says |
|---|---|
| **What this proves** | The result of this round was fixed before you clicked, and it was not changed afterwards |
| **What this does not prove** | That the chances we publish are the chances the roll used |
| **Where that question is answered** | The observed rate counter beside every published percentage on the case page, row `D3`, plus the published chance and current value on every item, row `D2`, plus the published tested RTP and the expected value at that entry cost, row `D4` |

**The source of that limit, and it is not this node's opinion.** `cjm-to-be.md`, phase T7, records it as the most important rejection on the map: "A commit-reveal scheme proves the outcome was not altered after the click. It says nothing about whether the weight table is the one we published, and the weight table is what users actually dispute."

**No verified badge, in any state, anywhere on this page.** `0.14` section 0 forbids it in every variant, and this is the page where the temptation is largest because it is the page with the form.

**The route out of the limit has a condition on it, and the page has to survive the condition failing.** Row `D3` is conditional on `D-B`, whether six years of roll history can migrate and be published at all, and `cjm-to-be.md` answer 2 records what happens if it comes back negative: at launch `B7-2` is answered by `D2` and `D4` and by nothing else. **So the third row of that table is written as a list rather than as a single destination**, and if `D3` is withdrawn under `0.11`'s withdrawn state the block loses one route and keeps two, instead of losing its only one.

---

## 3. Content blocks, mobile first

Composition is taken from `blocks.md` section 8, type T7, document and explainer, plus what the jobs of this node require. Order is reasoned from 360px.

| # | Block | First screen at 360px | What it holds | Parent |
|---|---|---|---|---|
| **1** | **What this proves, and what it does not** | **Yes** | H1, one line saying the page is public and needs no account, the two part scope statement from section 2, and two jump links, "Check a round" and "Read the algorithm" | Design principle 1 as limited by `D-14`; row `H1` |
| **2** | **How a round is fixed before you click** | No | Four steps in plain words: the commitment, the seeds and the nonce, the settled roll, the reveal of the server seed on rotation. Plus the two reasons a round may have no proof to check yet, section 5.3 | Related Job 3; rows `E4` and `E1`; the Round proof entity in `sitemap.md` |
| **3** | **What a round proof is made of** | No | The field set from `0.14` section 1, as a definition list on mobile and a table on desktop. Read only, no inputs here | `0.14`, whose parents are Related Job 3 and Core Job 1 |
| **4** | **Check a round** | No | Variant V4 of `0.14`. The inputs, one control, the result in place. **The page's one call to action** | Row `H1`, "public provably fair page, no login, working verifier" |
| **5** | **If your check does not match ours** | No | What we do, what you get, and the published response deadline. The explanation state `1.4` links into | Row `G4`, "an appeal with a published response deadline"; node `1.4` |
| **6** | **The question this page does not answer** | No | The long form of the limit again, this time as routes: the observed rate counter on the case screen, the published chance and value per item, the published tested RTP and expected value | `D-14`; rows `D3`, `D2` and `D4` |
| **7** | **The algorithm, published in full** | No | Three parts on the `0.9` template's shape: the computation, a worked example on a real round, the version history. Section 4 | `0.14` rule 4.1 and `0.14` section 6 |
| **8** | **Questions** | No | Accordion for the tail only, holding questions this page's own substance raises and nothing else | `B2-1`, the pre-login information wall |

**Blocks 2 and 8 are the two the bank supplied and the jobs did not.** Block 8 is the Refero Ableton row in `blocks.md` section 8, "FAQ accordion below the substance rather than instead of it", plus the Hellcase sectioned FAQ structure row on the same table. It is a tail, not a substitute: a question that could have been answered by block 2 is a defect in block 2.

**One block was borrowed across nodes and it is named rather than smuggled.** The Refero WhatsApp two column help article in `blocks.md` section 8 is assigned there to node `0.10`. Its left hand contents column is reused here at desktop width only, section 8, because this page is long and its parts are entered from different places. Same source, different node, said out loud.

**One block was refused although the bank offers it.** The skin.club About block with an H3 "Provably Fair" inside a marketing section is marked DIFFERENT in the bank against design principle 1. Nothing on this page restates the product's virtues, section 6.

---

## 4. The algorithm, and where it lives

**`0.14` section 6 hands this decision to node `1.2` at step 6, and this is it.**

### 4.1 Three options, and the one chosen

| Option | Verdict |
|---|---|
| **A fifth document on the `0.9` legal template**, at `/legal/fairness` or similar | **Dropped.** The four documents on that template are things a person agrees to. This is a specification a person computes with. Filing it under `legal` puts the one artefact we ask to be checked in the zone nobody opens, and `sitemap.md` names `0.9` as four documents, so a fifth is a change to another node's `INCLUDES` |
| **A node of its own** | **Dropped.** It has exactly one reader and one entry point, this page. `0.13` gives one URL per node and a new node would need a reason beyond tidiness |
| **A named section on this page with a stable anchor**, `/provably-fair#algorithm`, **built on the `0.9` template's four parts** | **Chosen.** The bank's own research row for T7 is that template: last updated date, plain language summary above the document, the document, version history. The shape is borrowed, the node is not |

**A named divergence.** `0.14` section 6 reads "`1.2` explains, `0.9` holds documents", which points at option A. This node takes option C and prints the disagreement rather than resolving it silently. If the founder prefers `legal`, the change is a fifth document on the `0.9` template plus one row in `0.13`, and this page keeps the anchor as a link.

### 4.2 What the published statement has to contain

The rule it answers is `0.14` rule 4.1: **a verifier that only works on our page is not proof.** A statement is complete when a stranger can write their own tool from it and get our answer.

| Part | Status |
|---|---|
| The function, named, with its exact input order and encoding | **`[?]`** The category standard is HMAC-SHA256 over server seed, client seed and nonce, `research.md` section 4 and section 5b. **Ours is not chosen** and it is not this stage's to choose |
| How the server seed is committed, and when it is revealed | Shape known: hash published before the round, seed revealed on rotation rather than per round. Scheme `[?]` |
| Who sets the client seed, and whether a person can change or rotate it | **`[?]`**, and it is `0.14`'s first open item. The recommendation on record is user settable, and no backlog row covers it |
| How the nonce advances | **`[?]`** |
| How the output maps onto the ticket range | **`[?]`**. The ticket range itself is inherited: the baseline prints one on every item, `baseline.md` section 4, and `0.6` carries it |
| The drop table in force at that round, versioned | **Missing from the field set, and this node found it.** See the finding in section 11 |
| A worked example on a real round | Required. Section 4.3 |
| Version history | Required. Section 4.4 |

**Nothing above is drafted with a plausible value.** A published algorithm with an invented function in it would be the exact defect this project's input gate exists to prevent, one level more dangerous than usual because a reader would compute against it.

### 4.3 The worked example, and what it refuses

One real round, resolvable, with every input, the intermediate value and the result, so that **a person can check their own third-party tool against a known answer before they trust it on their own round.** It carries a link to that round's public result on `7.1`, where variant V3 of `0.14` renders the same fields.

**This is the direct refusal of the anti-pattern the bank recorded.** Key-Drop's safety portal carries a mock verifier widget with a fake server seed, a fake client seed and the line "Outcome Verified: DRAGON LORE (FN)", `blocks.md` section 7. That is a verified verdict for a round that never happened. **Our example is a round that did happen, at a URL a stranger can open**, or there is no example block.

**No fifth variant of `0.14` is created for it.** The example renders V4 carrying a real round's values instead of empty inputs, which is the settled state of the same variant.

### 4.4 Version history

Required by `0.14` section 6 for one reason stated there: **a scheme that changes silently invalidates every proof before it.**

| Column | What it holds |
|---|---|
| Version | The identifier a round proof points at |
| In force from, in force to | Dates. `[?]`, nothing has shipped |
| What changed | In words, not a diff |
| Which rounds it governs | The range, so a person checking an old round knows which statement to read |

**And the version is not decoration on the page, it is a field of the round.** A round proof that does not say which algorithm version settled it cannot be recomputed once a second version exists. That is the second half of the finding in section 11.

---

## 5. States

Rows are every state this page can be in. **Two of them are numbered nodes in `sitemap.md`, `1.3` and `1.4`**, and they are numbered because they route out of the verifier rather than resolving inside it. The rest are specified here, inside their parent, which is the rule `sitemap.md` sets at "Which states became nodes, and which did not". The verifier's recomputation is named there by hand as one of the five loading states that live inside a parent, so it is below rather than in the map.

| State | What the page shows | Route out |
|---|---|---|
| **Default, guest** | The whole page. This is the normal case | Anywhere |
| **Account exists** | **The same page.** No extra fields, no history, no personalisation | The same |
| **Verifier idle** | Empty inputs with visible labels, and the explanation above them already read | Into the check |
| **Verifier prefilled** | A round arrived in the address, from row `F3` or from a shared result. The fields carry it and **nothing has been computed yet** | The person presses the control. Section 5.1 |
| **Recomputing** | The parent's own skeleton on the result area only. The inputs stay readable and stay editable | Into a result |
| **Checked and matched** | The recomputation and its inputs, plainly, **and not a badge**, `0.14` section 0 | Back, or block 6 for the other question |
| **Checked and mismatched** | Ours and the recomputation side by side, and the report route | **Node `1.4`** |
| **Malformed round** | Which part is missing or unreadable, and the input again | **Node `1.3`** |
| **Proof unavailable** | That this round has no proof to check yet, and which of the two reasons applies | Section 5.3, and the explanation in block 2 |
| **Script unavailable** | Blocks 1, 2, 3, 5, 6, 7 and 8 in full. The control says it needs script instead of rendering dead | The published algorithm, which is the point: the page still hands over everything a third-party tool needs |
| **`D3` withdrawn** | Block 6 loses the observed rate counter and keeps `D2` and `D4`, with the withdrawn figure declared per `0.11` rule 3 and its withdrawn state | The case screen anyway |

**Three failures, three different states, and conflating any two of them is the defect.** Malformed is a round we could not read. Unavailable is a round we can read and cannot prove yet. Mismatched is a round we can read, can prove, and our proof is wrong. They have three different causes, three different routes and three different owners.

**Two of `0.14`'s seven states do not appear above, and that is named rather than left as an omission.** `0.14` says every site that renders the block inherits all seven, and its own table then scopes "gone or private" to `7.1`. **Pre-roll is the second one**: a verifier only ever receives a round that has already been rolled, so a state that shows a hash with no result has no moment on this page. Five of the seven are inherited whole, two have no site here, and the "all seven" sentence is a small finding for `0.14` rather than something this node quietly disobeys.

### 5.1 The prefilled state, and the line it does not cross

A person arriving from row `F3`, the post reveal verification link, or from a shared result on `7.1`, has a round in hand. Making them retype a 64 character hash is hostile, and `0.14` section 5 already treats that string as a layout problem in its own right.

**So the fields prefill and the recomputation does not run.** The person presses the control.

**That is inside the rejection, not around it.** What `cjm-to-be.md` rejects at phase T7 is "auto-publishing the seed pair, recomputing in the browser and showing a verified badge", and the reason it gives is the badge and the proposition, not the convenience: automating a proof of the wrong proposition. Carrying inputs is not asserting a verdict. **The verdict is never rendered before an action, and it is never rendered as a badge in any case.**

**Diverge to converge.** Three candidates. **Dropped: no prefill at all**, which is honest about the order and makes the most common arrival route unusable on a phone. **Dropped: prefill and auto-run**, which produces a verdict the person did not ask for and lands one step from the rejected pattern. **Chosen: prefill, do not run.** The explanation still sits above the form, so the page still opens and explains, and the person still performs the check rather than watching one happen.

**The address form.** `/provably-fair?round=<id>` carries the round. It is `noindex, follow` and canonical to `/provably-fair`, which is the rule node `0.13` section 4.2 already applies to a parameterised view of an indexed page. **Inherited, not re-decided**, and the missing row is a finding in section 11.

### 5.2 Node `1.3`. Verifier, malformed round

**Anchor:** `1.3`. **Type:** state. **Scope:** MVP. **Parent:** node `1.2`, and `0.14`'s malformed input state, which specifies "which part is missing or unreadable, and the input again".

**The rule.** `sitemap.md` row `1.3`: names which part is missing, returns to the input rather than rejecting silently. `flows.md` flow 4 draws it as a loop back into the input rather than as an exit.

**What it names, field by field.** One message per field that failed, attached to that field, in words that say what is wrong rather than that something is:

| Failure | What the state says |
|---|---|
| A field is empty | Which one, and what it is for |
| The server seed hash is the wrong length or is not hexadecimal | Which of the two, and the expected length, whose value is `[?]` until the scheme is chosen |
| The nonce is not a whole number | That, and nothing else |
| The round identifier does not resolve to any round | **That it does not resolve**, which is different from the round having no proof. Section 5.3 is the other one |
| Several fields failed at once | All of them, at once. Never one at a time on repeated presses |

**Four hard rules on this state.**

1. **Nothing the person typed is cleared.** A form that empties itself on error asks for the 64 characters twice.
2. **Whitespace, line breaks and a pasted label are trimmed rather than refused.** People paste from a chat window. A proof that fails on a trailing space is a proof that fails on the way it travels.
3. **No generic message.** "Invalid input" is a silent rejection with a sentence on it, and the row in `sitemap.md` exists because of that shape.
4. **This state never reaches `1.4`.** A round we could not read is not evidence that our proof is wrong, and routing it there would manufacture incidents out of typing errors.

**It is not a dead end.** The route out is the input, one field away.

### 5.3 The unavailable round, which is a third thing

Not a numbered node, and it has two causes with two different owners:

- **The round predates the published ledger.** `0.14` calls this the real case, and whether six years of history migrates at all is `D-B`. The state says so, in words, and does not imply the person did anything wrong.
- **The rotation has not happened yet, so the server seed for this round is not revealed.** This follows from the commit reveal shape rather than from any choice of ours: the seed is revealed on rotation, not per round, so a round can be complete, correct, and not yet checkable. **The route out of this one is `[?]`**, because it depends on whether a person can force a rotation, which is `0.14`'s open question about who controls the client seed. That question is not cosmetic: it decides whether a person can make their own round checkable today or has to wait on us.

Both render the same state with a different reason printed, and both point back at block 2, which is where the page explains the shape.

### 5.4 Node `1.4`. Verifier, our own proof failed

**Anchor:** `1.4`. **Type:** state. **Scope:** MVP. **Parent:** node `1.2`, row `G4` for the response deadline, and `0.14`'s checked and mismatched state.

**`flows.md` flow 4 marks this a deliberate dead end for the job, and it stays one.** The note there is exact: "The job still cannot be closed, and `Incident` stays red for exactly that reason: nothing in the product can confirm an outcome while the proof of it is wrong. What changed is that the person is no longer standing in front of a wall while we call it an incident on our own side."

**So the state has to do two things that pull against each other:** give the person a real route, and not pretend the route closes anything.

**What it shows.**

1. **The two values, ours and the recomputation, side by side on desktop and stacked with an explicit label on each at 360px.** Never one value with a red mark on it.
2. **The sentence that assigns the fault.** These do not agree, and that is ours to explain rather than yours to prove.
3. **One report control.** The round is attached automatically, with every field already in the page. **No form to fill in.** A person who has just been told the platform's own proof failed is not asked to write a support ticket describing it.
4. **A reference and a published response deadline**, which is what row `G4` requires of an appeal and what node `0.10` carries as a service level rather than a help page.
5. **Where the answer arrives**, which is `0.10`.

**What it must not show.**

- **No route back into spending.** No open a case, no try another round, no next. The one dead end in `flows.md` that belongs to us keeps its shape.
- **No retry that silently re-runs the same computation and hopes.** The inputs stay, the control stays available, and the report route does not disappear because a second attempt produced the same disagreement.
- **No apology in place of a deadline.** A deadline is checkable and an apology is not, which is the same rule `0.11` rule 1 applies to figures.
- **No claim about what happened.** The state says the values disagree and that we owe an answer. Whether the cause is a bug, a migration, a rotation or a real failure is unknown at that moment, and `CLAUDE.md` says unknown is `[?]`.

**What is `[?]` on this state and is carried rather than smoothed.** The deadline's value. Whether a mismatch report pauses anything on our side. And whether the queue is the same one row `G4` publishes a deadline for, which is an appeal against a withdrawal restriction, or a queue of its own. All three are in section 11 with owners.

---

## 6. What this page refuses, with the reason on the row

| Refused | Where it was seen | Why |
|---|---|---|
| **A provably fair page behind login** | Key-Drop, opened live 12 August 2026, `blocks.md` sections 6 and 8 | The proof is behind the decision it exists to inform. This page has no account state, section 0 |
| **"Skin.Club guarantees 100% case fairness transparency"** | skin.club case page, `blocks.md` section 4 | An unfalsifiable sentence: nothing on it can be checked, so nothing on it can fail. Block 1 states what the proof does **not** cover, which is the opposite move. `D-14` |
| **A decorative verifier widget printing "Outcome Verified: DRAGON LORE (FN)"** | Key-Drop safety portal, `blocks.md` section 7 | A verified verdict for a round that never happened. `0.14` forbids a verified badge in any variant, and section 4.3 replaces the shape with a real round at a real URL |
| **Verification buried in a modal inside the opening flow** | Hellcase, `research.md` section 4 | A modal inside the flow is reachable only by someone already spending, which is the wrong half of the funnel for `B2-1` |
| **Auto-recomputing on arrival and printing the verdict** | The obvious version, rejected at `cjm-to-be.md` phase T7 | Automating a proof of the wrong proposition. Section 5.1 draws the line that keeps the prefill on the safe side of it |
| **A counter of rounds verified, a streak, or any score** | Own | `0.14` rule 4.3 and the limits rule in `CLAUDE.md`. A person who verifies once is not rewarded for verifying twice |
| **An "Open a case" call to action** | The category's habit, and the About block pattern | A page that answers doubt and then sells is a sales page with a form on it. The one call to action is Check a round, section 7 |
| **"Provably fair" as a paragraph in a marketing About section** | skin.club, `blocks.md` section 8 | Marked DIFFERENT in the bank against design principle 1: fairness is a page with a working verifier |
| **A signed-in person's own round history on this page** | Own proposal, refused | No backlog row publishes rounds in bulk, and the global sweep in `sitemap.md` already caught node `0.2` asserting a published round ledger that does not exist. A person's own rounds belong to `5.1` and would need a row of their own first |

---

## 7. One call to action

**Check a round**, which is the control inside block 4.

**And the page carries no second one.** Not sign in, not deposit, not open a case. Every other route out of this page is a link inside prose or in a carrier that is already global, `0.1` and `0.2`.

---

## 8. Responsive

**Mobile, 360px base.**

- One column throughout. The scope statement in block 1 is two stacked halves with a heading on each, never a two column table at this width.
- Block 3's field set renders as a definition list rather than a table. A three column table at 320px of content width is a horizontal scroll on the page's most quoted block.
- Every hash truncates in the middle with a copy control beside it, `0.14` section 5. Copy is a control, not a hover affordance.
- Verifier inputs are full width with a visible label above each. **A placeholder is never the only label**, because the label disappears at the moment the person is comparing what they pasted against what they meant to paste.
- The mismatch comparison stacks, ours above the recomputation, with a full label on each. Two unlabelled columns of hex at 320px is the one layout this state cannot afford.
- The version history table is the only table permitted to scroll inside its own container, and it scrolls inside the container rather than moving the page.

**Desktop.**

- A measured content column, plus a contents column on the left carrying the eight H2s, from the Refero WhatsApp row in `blocks.md` section 8, reused across nodes as section 3 records.
- The verifier stays the full width of the content column. **It never becomes a sidebar widget**, which is the shape the Key-Drop mock verifier takes and the shape that reads as decoration.
- The mismatch comparison goes side by side.

---

## 9. Emotional support mechanism

**None, and that is read from the table rather than left out.** The base layer's "Emotional and social jobs: what carries them" in `sitemap.md` puts mechanisms on `S-C2` and `S-A1` and `S-G1`. It puts none on `S-A2`. Inventing one here to fill the row would be a round 1 commitment nobody made, which is the treatment that table already gives its two honest empties.

---

## 10. SEO block, A to E

Everything structural is inherited from node `0.13`. What is below is this node's own copy and its own checklist.

### A. Meta tags, finished copy

| Tag | Value |
|---|---|
| `title` | `Provably fair: check any round yourself \| CS2 Clutch` **52 characters.** The product name is a working placeholder, so half of it is `[?]` until naming happens |
| `description` | `See what a commit-reveal proof does and does not show, then paste a round and recompute it yourself. Public page, no account, algorithm published in full.` **154 characters** |
| `canonical` | Self, `/provably-fair`. The host is `[?]`, and it is `0.13`'s open item, not this node's |
| `robots` | `index, follow` |
| `hreflang` | **None.** One language, `0.13` section 1 |
| `og:type`, `og:title`, `og:description`, `og:url` | Website, and the title and description above |
| `og:image` | `[?]`, and it belongs to stage 06. **Unlike `7.1`, the unfurl is not the product here**, so an absent image costs this node little |
| Parameterised form | `/provably-fair?round=<id>` is `noindex, follow`, canonical to `/provably-fair`. Section 5.1 |

### B. Headings

**One H1:** `Provably fair: check any round yourself`. It carries the destination's own label, which node `0.1` fixes as one label per destination in every carrier, and it says the page's job in words, which `0.13` section 5 requires.

**H2 list, in block order, which is the mechanical check at stage 04:**

1. What this proves, and what it does not
2. How a round is fixed before you click
3. What a round proof is made of
4. Check a round
5. If your check does not match ours
6. The question this page does not answer
7. The algorithm, published in full
8. Questions

H3s exist only under H2 7: the computation, a worked example, version history.

### C. SEO text, finished

> This page is public. You do not need an account to read it, and you do not need one to check a round.
>
> Before a round is offered, we publish the hash of a server seed. The hash is a commitment: the seed behind it cannot be swapped later without the hash changing. Your round is settled once from that seed, a client seed and a nonce, and the reveal plays back a result that already exists rather than deciding one while you watch.
>
> That is what a proof of this kind shows: the outcome was fixed before you clicked and was not changed afterwards. It is worth saying what it does not show. It does not show that the chances we publish are the chances the roll used. That is a different question with a different answer, and it lives on the case screen, where the observed rate stands beside the published one and the tested return is printed at the entry cost.
>
> The algorithm is published in full, with a worked example and a version history, so you can recompute a round with our tool, with somebody else's, or with your own.

**This block stays the property of this node to the end of the pipeline.** Stage 05 aligns it to voice and syncs the final version back here. Interface strings, the field labels, the control and the state messages, do not move into it: after stage 05 they live in `voice/docs/microcopy.md`, and this node keeps the requirement of what information has to be in each place.

### D. Structured data

**`WebPage`, and nothing more**, inherited from `0.13` section 7, whose wording is that there is nothing on this page a richer type would truthfully describe.

**Two refusals restated because this page invites both.** The questions block in block 8 **does not acquire `FAQPage`**: `0.13` assigned `WebPage` and nothing more, and rich result eligibility in this category is `[?]` there anyway. And nothing on this page carries `aggregateRating` or `Review`, which is `0.13`'s refusal 1 applied to a page about trust.

### E. Optimisation checklist

1. Exactly one H1, and the eight H2s in block order.
2. The breadcrumb Home > Provably fair is drawn, and `BreadcrumbList` markup only because it is visible, `0.13` section 6.
3. Every route out is a crawlable `<a href>`: the case screen, `0.10`, `7.1`, `1.0`. `0.13` section 8.
4. Canonical present. No hreflang anywhere.
5. **Every field value is text, never an image**, `0.11` rule 8 and `0.14` section 5. A hash in a picture cannot be pasted into anyone's verifier, and it is invisible to a screen reader in the same stroke.
6. **LCP is the first screen text block**, so block 1 carries no image that could take that slot from it. Design principle 5, speed is trust.
7. **Blocks 1, 2, 3, 5, 6, 7 and 8 render without script.** Only the recompute control needs it, and it says so rather than rendering dead.
8. The description has a source on the page, which is block 1, rather than being invented at production time.

---

## The pages that draw this node, and the registry is where the list comes from

**Added 2 September 2026 by `D-122`.** Founder: actualise every IA node against the wireframes. **The check could not be written, because nothing joined a node to the screens that draw it except prose.** This table is that join, taken from `/_nav.js`, which is the one registry every page in the project already renders from.

**It is a contract, not a listing.** A page in the registry with no row here is a state nobody specified. A row here with no page is a specification nobody drew.

| Page | What it draws | Node |
|---|---|---|
| `fair.html` | Default, with the verifier idle | `1.2` |
| `fair-prefilled.html` | Prefilled, nothing computed | `1.2` |
| `fair-matched.html` | Checked and matched | `1.2` |
| `fair-unavailable.html` | Proof not available yet | `1.2` |
| `fair-malformed.html` | Verifier, malformed round | `1.3` |
| `fair-proof-failed.html` | Verifier, our own proof failed | `1.4` |

---

## 11. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **The exact commit reveal scheme** | The category standard is HMAC-SHA256 over server seed, client seed and nonce, `research.md` sections 4 and 5b. Ours is not chosen. Section 4.2 holds the shape of the statement with the value empty | Production, before stage 04 treats the field list as final. Inherited from `0.14` |
| **Who sets the client seed** | `0.14`'s first open item, recommendation user settable, no backlog row. **This node adds a consequence:** it also decides whether a person can force a rotation and make their own round checkable today, section 5.3 | Founder, one backlog row |
| **The drop table in force at a round is not a field** | An independent recomputation needs the whole table as it stood at that round, not only the winning entry's ticket range, and `0.14`'s field set carries the latter. **The same gap covers the algorithm version**, which section 4.4 shows a round proof has to point at | **Finding for `0.14`**, plus production |
| **The response deadline for a proof failure** | The value is `[?]`, and so is the queue: row `G4` publishes a deadline for an appeal against a withdrawal restriction, and a mismatch report is not that. `0.10` holds the service level | Founder, with `0.10` |
| **Whether pre-migration rounds carry proofs, `D-B`** | Decides how common the unavailable state is on day one, and whether row `D3` exists to be linked to at all in block 6 | Founder, question of fact to the live platform |
| **`0.11` names `1.2` as a consumer and no row in it lists `1.2`** | Two figures this page needs have no row in the register: the published response deadline as it applies here, and the date from which published proofs exist, which the unavailable state reads | **Finding for `0.11`** |
| **`0.13` holds no row for `/provably-fair?round=<id>`** | This node uses `0.13`'s own rule for a parameterised view of an indexed page rather than inventing one, section 5.1. The row belongs there | **Finding for `0.13`** |
| **Where the algorithm document lives** | Decided here as option C, section 4.1, which diverges from `0.14` section 6. Reversible at the cost of one document on the `0.9` template and one row in `0.13` | Founder, if they disagree |
| **A named third-party auditor** | Row `A5`, and `research.md` section 4 cites a 2026 audit finding that no operator in the category names one. We do not have one either, `0.11`. **This page badges nobody** | Founder |
| **A citation drift, found while writing this node** | `0.14` cites the "we have PF against you can verify before you deposit" sentence and the 2026 auditor audit to `research.md` section 5b. Both live in section 4, "3 Common Patterns". The facts are unchanged and the pointers are wrong | **Finding for `0.14`**, not edited here |

**And what belongs elsewhere.** Final copy, including every string in section 5.2 and 5.4: stage 05. How any of it looks: stages 06 and 07. Whether a mismatch pauses anything on the platform side: production, and it is not an interface decision. The wording of the algorithm once it is chosen: production, with this node holding the shape it has to arrive in.
