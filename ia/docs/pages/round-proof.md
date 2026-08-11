# Node 0.14. Canonical round proof block

**Type:** component. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** One rendering of one object, the round proof, in four variants across four sites, so that the thing the product offers as evidence looks and behaves identically everywhere it appears.

**Jobs served.** Related Job 3, verify the outcome, and Core Job 1 before login. **Parent class:** job, by rows `E4`, `F3` and `H1`. Design principle 1 in `CLAUDE.md` is what makes it canonical rather than three separate renderings: **the one thing that must never look different in two places is the evidence.**

**Used by:** `1.2` Provably fair with its verifier, `3.3` at phase 2 the spin trigger and phase 3 the outcome, `7.1` Public result.

**Not a page.** It has no URL of its own. It renders inside nodes that do.

---

## 0. What this component proves, and what it does not

**This is the spine of the node, and it is not mine.** `cjm-to-be.md` records it as the most important rejection on the whole map:

> "A commit-reveal scheme proves the outcome was not altered after the click. It says nothing about whether the weight table is the one we published, and the weight table is what users actually dispute."

The same passage rejects the obvious version of this component, auto-publishing the seed pair, recomputing in the browser and showing a verified badge, **because automating a proof of the wrong proposition produces exactly the reaction already in the evidence**: they market the sentence Provably Fair which is totally fake.

**So this component carries a scope line, and the scope line is part of the component rather than a footnote on one page.**

- **What it proves:** this round's outcome was fixed before you clicked and was not altered afterwards.
- **What it does not prove:** that the published chances are the chances used. **That question has a different answer in this product**, the observed rate counter `D3`, and the block links to it rather than pretending to cover it.

**No verified badge, anywhere, in any variant.** A badge asserts the proposition the scheme does not prove. `D-14` bounded the claim and this node is where the bound becomes markup.

---

## 1. The object it renders

From the Round proof entity in `ia/docs/sitemap.md`:

| Field | What it is | When it exists |
|---|---|---|
| **Server seed hash** | Published **before** the roll. The commitment | From the moment the round is offered |
| **Client seed** | The other half of the pair | Before the roll. Whether the person controls it is open, section 6 |
| **Nonce** | Which roll in the sequence | Before the roll |
| **Settled result** | The roll, and the drop table entry it landed on | After the roll |
| **Ticket range** | The interval the entry occupies, which is what the result resolves against | With the case, and the baseline prints one on every item, `baseline.md` section 4 |
| **Recomputation** | The route by which a person gets from the fields to the result themselves | Always, section 4 |

**Server seed itself is revealed on rotation, not per round**, which is the standard commit-reveal shape. The exact scheme is `[?]`, section 6: the category standard is HMAC-SHA256 over server seed, client seed and nonce, `research.md` section 5b, and ours is not chosen.

---

## 2. Four variants, one field set

| Variant | Where | Shows | Must not |
|---|---|---|---|
| **V1, the hash chip** | `3.3` phase 2, at the spin trigger, row `E4` | Server seed hash, truncated, plus the scope line in one short clause | **Interrupt the reveal.** `research.md` section 6 specifies a small persistent element that does not stop the animation. It never blocks, never modals, never asks |
| **V2, the verification link** | `3.3` phase 3, the outcome, row `F3` | One tap to check this round | **Take the person out of the flow.** It opens the proof in place. The outcome screen is where the win is, and the win is not interrupted for paperwork |
| **V3, the full proof panel** | `7.1` Public result | Every field, the result, the ticket range, the recompute route, the scope line in full | **Require an account.** A stranger holds this link and can check it. That is the whole reason `1.2` and `7.1` are public |
| **V4, the verifier form** | `1.2` Provably fair | The same fields as inputs, plus the explanation the page opens with | **Ask for a seed before it has explained anything.** The node's own INCLUDES says the page opens and explains first |

**One field set, four densities.** A variant may show fewer fields. **No variant may show a field the others do not have, name a field differently, or order them differently.** That rule is the reason this is a node and not three implementations.

---

## 3. States

Seven, and every site that renders the block inherits all seven.

| State | What the block shows | Route out |
|---|---|---|
| **Pre-roll** | The hash and the nonce. **No result, and no space reserved that implies one** | Into the roll |
| **Settled** | Every field, the result, the ticket range it fell in | The recompute route |
| **Checked and matched** | The recomputation and its inputs, plainly. **Not a badge**, section 0 | Back, or to `D3` for the other question |
| **Checked and mismatched** | The two values side by side, ours and the recomputation, and **a report route with a published response deadline** | `1.4`, which `flows.md` marks a deliberate dead end for the job: nothing can close it while the proof is wrong |
| **Malformed input** | Which part is missing or unreadable, and the input again | `1.3`, back to the form rather than a silent rejection |
| **Proof unavailable** | That this round has no published proof, and why. **Rounds predating the published ledger are the real case**, and whether six years of history can migrate at all is `D-B` | The explanation on `1.2` |
| **Gone or private** | On `7.1` only: the result is no longer public. **The round can still be checked without the page**, so it routes into the verifier | `7.2`, then `1.2` |

**The mismatch state is the one that earns the node.** A component built only for the happy path would meet its first real failure as an incident with no interface, and it is the failure this product least wants to improvise: our own proof failing in front of the person it was shown to.

---

## 4. Three rules that are not styling

### 4.1 A verifier that only works on our page is not proof

**The algorithm is published**, so a person can recompute with any third-party tool and never take our word for the recomputation either. `research.md` section 5b records the category's split precisely: CSGORoll publishes full per-game documentation publicly, Hellcase buries verification in a modal, and "the gap between we have PF and you can verify before you deposit is wide."

**A recomputation that only our code can perform reproduces the black box one level up.** So the published scheme is a hard requirement of this component rather than documentation somebody writes later.

### 4.2 The hash is published before the roll and never changes

Row `E4` puts it at the spin trigger, and `E1` makes the reveal render the settled roll rather than compute anything. **The block never computes an outcome, in any variant.** Recomputation is verification of a settled fact, and the two must not share a code path, which is a note for stage 04 to carry into implementation rather than a visual instruction.

### 4.3 Nothing here is a badge, a score, or a streak

Same rule as `0.11` rule 7 and the limits rule in `6.1`: a proof that acquires a counter becomes a thing to engage with. **A person who verifies once is not rewarded for verifying twice.**

---

## 5. The 64-character problem, and it is a real layout problem

A server seed hash is a long hex string. At 360px it does not fit, and it is the field people actually compare.

- **Truncate in the middle, never at the end.** Head and tail stay visible, because two hashes are compared by their last characters as often as their first.
- **The full value is always retrievable**, by copy control and by selection. A truncated string with no route to the whole is not evidence.
- **Monospace, and always text.** Never an image, per `0.11` rule 8, and here the reason is stronger: a hash in a picture cannot be pasted into anyone's verifier.
- **The accessible name is the field, not the value.** A screen reader announcing sixty four characters of hex has buried the page. The value is available on demand, in a control that says what it is.
- **Copy is a first-class control**, not a hover affordance, because on mobile there is no hover and this string exists to be pasted somewhere else.

---

## 6. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **Does the person control the client seed** | The entity lists a client seed and nothing anywhere says who sets it. **If both halves are ours, the commitment proves less**, and the category standard is a user-settable or at least user-rotatable client seed. **Recommendation: user-settable, and it needs its own backlog row** because no row covers it today | Founder, one backlog row |
| **The exact scheme** | The category standard is HMAC-SHA256 over server seed, client seed and nonce. Ours is not chosen, and the choice belongs with the people who build the settlement | Production, before stage 04 draws the field list as final |
| **Where the published algorithm lives** | It is a document. `1.2` explains, `0.9` holds documents. A version history is required either way, because a scheme that changes silently invalidates every proof before it | Node `1.2` at step 6 |
| **Pre-migration rounds** | Whether six years of history arrives with proofs, which is `D-B`. It decides how common the unavailable state is on day one | Founder, question of fact to the live platform |
| **A named third-party auditor** | Row `A5`, and `research.md` section 5b cites a 2026 audit finding that **no operator in the category names one**. We do not have one either, `0.11` | Founder |

**And what belongs elsewhere.** The explanation copy: `1.2`, then stage 05. Where the block sits on each screen: those nodes at steps 5 and 6. How it looks: stages 06 and 07. Indexation: `0.13`, which indexes `1.2` and keeps `7.1` out.
