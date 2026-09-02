# Node 0.3. System pages

**Type:** page. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** Three failure surfaces on one template, 404, 500 and 503, so that a request this product cannot answer still gets an answer: what happened, in words a person reads, an honest status code for the machine reading the same response, and a route onward that is inside the body rather than only in the footer.

**Jobs served.** None directly. Nobody arrives wanting an error page. **Parent class:** barrier `B3-1`, a failure the person cannot read, by way of backlog row `B5`; barrier `B8-2`, waiting with no attribution, by way of rows `G1` and `G2`; and design principle 5 in `CLAUDE.md`, quoted, "Speed is trust. Fast load, fast reveal, fast withdrawal status. Lag reads as dishonesty." Every block in section 2 names which of the three it stands on.

**Row `B5` is used wider than it was written, and that is said out loud rather than smuggled.** Its own scope in `cjm-to-be.md` is Steam login failure states, parent `B3-1`. What this node takes from it is the rule inside it, that a failure states its cause in one voice rather than in a code, and applies that rule to the failures of our own server. The extension is named here so that nobody later reads `B5` as covering more than it does.

**Entered from anywhere.** A system page has no route in, which is the whole difficulty of the node: the person did not choose to be here and the product does not know what they wanted.

**Transitions:** `1.0` and `3.1`, per the detailed node map in `ia/docs/sitemap.md`. Support reaches `0.10` through the footer, section 2.

**Baseline row, `0.3`.** The rule in `CLAUDE.md`: every node carries one baseline row, what the live product does, what we keep, what we change and why.

| What the live product does | What we keep | What we change, and why |
|---|---|---|
| A probe URL returns **HTTP 404** with a real page: illustration, PAGE NOT FOUND, one line, one control. `baseline.md` section 9.6. | **The status code and the fact that a real page exists**, which is more than several competitors manage. | **The shell removal.** Their 404 has no rail, no header, no ticker and no footer, so a person who mistypes a URL loses every route in the product except home. **Ours keeps the shell**, because a wrong address is not a reason to strand someone. |

---

## 0.5 Amended 22 August 2026 by `D-79`, the day this node was drawn

**Three things changed and none of them is a new idea.** Two were decisions taken elsewhere that had never reached this file, and one is a page count this node's own states table had been asking for since it was written.

| What changed | Why |
|---|---|
| **The ticker refusal loses its citation and keeps its reason**, section 2 | It cited `D-31`, which `D-59` reversed on 21 August. `D-77` fixed the rule that decides what happens next: a surface may take the shell's feed off itself only on a parent written in its own file. This node has one and it is the sentence after the citation |
| **The 404's search is a control here, not a description of one**, section 3 | The empty result is a state in section 7 and it had no page. A search that returns nothing is the one branch of this block that can go wrong, and it was the only state of this node that could not be looked at |
| **The 500 is drawn twice**, with the carriers and without | Section 9 already said stage 04 draws both versions. It had not, and a conditional block drawn once is drawn in whichever condition the person who drew it assumed |

**And one thing this node found in a file it does not own and did not edit:** `0.8` section 3 still reads "`1.0` Home and `3.3` Case screen. Nowhere else", which is the placement from before `D-31` and two decisions behind. That went back to `0.8` as a finding, and `D-79` records what it did about it.

---

## 0.6 Amended 23 August 2026 by `D-82`, the founder's screen review

**The founder opened the drawn 404 and asked what all of it was for.** Four things left the page and one page left the node. Nothing here is a new idea: three of the four were already raised by the audit of 22 August as findings this node had not acted on.

| What changed | Why |
|---|---|
| **The response block leaves the body of all seven pages** | Status, Served at and Retry-After are the machine half of the response printed to the human half. `D-66` forbids process prose on the product surface and the 22 August audit raised it as such. It is kept as each page's own annotation, where a reviewer still reads it against the words beside it. **The address bar already shows the served address**, which made the block redundant as well as wrong |
| **The search field leaves the 404**, section 2 block B3 and section 3 | It worked and its empty result was a real state, and neither was the objection. The page exists to say one sentence and offer one way out; a field with a submit beside it was a second job on it. The shelf carries a search and All cases is one press away |
| **Seven pages, not eight.** `system-404-noresult.html` is deleted, section 7 | Its subject was the search. A state whose subject is gone is deleted rather than carried as an empty page |
| **The two quick-link cards become two buttons**, Home primary and All cases beside it | The destinations did not change: the transitions row still holds `1.0` and `3.1`. What went is a name plus a line of explanation each, on a page whose whole job is one sentence. `conventions.md` 1.6 holds again, one main action. **This also closes section 9's open item on a third destination: the answer is no** |
| **And `system-500-noshell.html` keeps the stacked list** | Section 4's argument is that page's entire subject: on a 500 the carriers may not render, so the body is the part that is certain to. A button row is fine where the shell is standing. That page is the one where it is not |

---

## 0. Two live failures, and they fail in opposite directions

Both were opened in a browser on 12 August 2026 and both are recorded in `ia/docs/blocks.md`, type T8. They are worth more than a checklist because between them they use up both ways this page goes wrong.

| Competitor | What the response does | What it costs |
|---|---|---|
| **skin.club** | Correct HTTP 404. One error line, one marketing sentence, **no search and no route out of the body.** The only navigation is the footer | The machine is told the truth and the person is told nothing they can act on. The status is right and the page is a wall |
| **Key-Drop** | **HTTP 404 with the home page rendered in the body**: home title, home ticker, no H1, no error message anywhere | **Both readers are misled by the same response.** The person sees the home page and never learns the URL was wrong. The crawler sees 404 and drops the URL. Neither reader can tell that the other was answered differently |

**The two failures name the two axes this node has to hold at once.** A response speaks to two readers, a person and a machine, and the same response can lie to either one independently:

- **A soft 404** is HTTP 200 with a "not found" body. The person is told the truth, the crawler is told the page is fine, and the index fills with pages that do not exist.
- **Key-Drop's inversion** is HTTP 404 with a working body. The crawler is told the truth and the person is told nothing.

**Both are the same defect, which is that the status and the body disagree.** The rule for this node is one line and it decides most of what follows: **the status code is the machine-readable half of the sentence the body says to the person, and the two never say different things.**

---

## 1. The status codes, quoted rather than remembered

RFC 9110, HTTP Semantics, June 2022, opened at `https://www.rfc-editor.org/rfc/rfc9110.html` on 12 August 2026.

> **15.5.5. 404 Not Found.** "The 404 (Not Found) status code indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists. A 404 status code does not indicate whether this lack of representation is temporary or permanent; the 410 (Gone) status code is preferred over 404 if the origin server knows, presumably through some configurable means, that the condition is likely to be permanent."

> **15.6.1. 500 Internal Server Error.** "The 500 (Internal Server Error) status code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request."

> **15.6.4. 503 Service Unavailable.** "The 503 (Service Unavailable) status code indicates that the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay. The server MAY send a Retry-After header field (Section 10.2.3) to suggest an appropriate amount of time for the client to wait before retrying the request."

> **10.2.3. Retry-After.** "Servers send the "Retry-After" header field to indicate how long the user agent ought to wait before making a follow-up request. When sent with a 503 (Service Unavailable) response, Retry-After indicates how long the service is expected to be unavailable to the client." The value "can be either an HTTP-date or a number of seconds to delay after receiving the response."

| Surface | Status | `Retry-After` | Body must say |
|---|---|---|---|
| **Not found** | `404` | No | This address has nothing at it, and here is how to find what you wanted |
| **Our fault** | `500` | No | Something on our side failed, we know, and here is the reference and the way to reach us |
| **Planned stop** | `503` | **Yes, and the same figure in words in the body** | We are down on purpose, this is who it is waiting on, and this is when to come back |
| **Unplanned stop** | `503` | **No, and the absence is stated in the body** | Something is overloaded, it is us, there is no end time yet, and this is who to ask |

**And this row contradicted section 5 until 22 August 2026, `D-79`, which is the day something had to render.** It reads `Retry-After`: **Yes** for 503 without qualification, and section 5 reads "unplanned states that there is no end time yet and gives the support route rather than a number invented to look reassuring". **A header that must always be sent and a figure that must never be invented cannot both hold on the unplanned page.**

**Resolved in favour of section 5, and the RFC is what makes that legal rather than a preference of ours.** 15.6.4 says the server **MAY** send `Retry-After`, not must. So:

- **Planned:** the header is sent and the body says the same figure in words. Two readers, one number.
- **Unplanned:** the header is **not sent at all**, and the page says in words that there is no figure yet and who to ask. `0.11` rule 3 is the same rule from the other side: missing is a state, never a zero, and a `Retry-After` guessed to look reassuring is a published promise nobody intends to keep.

**`Retry-After` is a promise, not a hint.** It is the same class of object as the published ceiling on a withdrawal state, row `G2`, and it is measured the same way: the response either comes back inside the figure it published or it does not. That is why the header alone is not enough. A figure only a machine can read is not a published figure, `0.11` rule 1.

**410 is a real decision and it is not this node's.** The RFC prefers it where the condition is known to be permanent. `0.13` already rules that a rename is a 301 and an old slug is never reused, so the case that needs a verdict is a case that is retired rather than renamed. Open, section 9.

---

## 2. The blocks, and the parent of each

One template, three fillings. A block that is absent on a surface is absent for a stated reason rather than by omission.

| Block | 404 | 500 | 503 | Parent | Why it is here |
|---|---|---|---|---|---|
| **B1. Status statement** | Yes | Yes | Yes | Row `B5`, on `B3-1` | The H1 is what happened in words. **The number is secondary text, never the heading.** Key-Drop's page has no H1 at all, which is how a person reads a home page and learns nothing |
| **B2. Attribution: who it is waiting on** | n/a | Yes | Yes | Rows `G1` and `G2`, on `B8-2` | The withdrawal clock's rule at site scale: a wait with no owner is the pattern of 6 that made T8 the floor of the As-Is map. On 500 the owner is us. On 503 the owner is us and the figure is published |
| **B3. Search** | **Yes, and it is the block skin.club lacks** | No | No | Core Job 1, `jtbd.md`, arrive with enough confidence to try | A 404 has two kinds of arrival, section 3. Search answers the one that knows what it wanted. Absent on 500 and 503 because search needs the backend that is down |
| **B4. Quick links** | Yes | Yes | Yes | The map's transitions, `1.0` and `3.1`, and Core Job 1 | The other kind of arrival. **Text links, real `<a href>`**, per the linking planes in `0.13`: a destination reachable only by script does not exist for a crawler and often not for a keyboard either |
| **B5. Support route** | Yes | Yes | Yes | Row `G4`, on `B8-3`, and node `0.10`, which exists for Article 5(c) rapid contact | Reached through the footer, which `0.2` already declares renders in full on 404 and 500. On 500 it is the only route that is certainly not broken by the same failure |
| **B6. Reference** | No | **Yes** | No | Row `B5`, on `B3-1`, plus `G4`'s published response deadline | One short identifier a person can paste into a support ticket. A failure with no handle is a failure support cannot look up, which makes the published deadline unmeetable |
| **B7. Retry control and the stated end** | No | No | **Yes** | Row `G2`, on `B8-2` | The `Retry-After` figure said in words, with a control that retries. Never an automatic reload loop, section 4 |
| **B8. Footer `0.2`, in full** | Yes | Yes | Yes | `0.2` transient states, which name `0.3` by number | Legal identity, the compliance line, the market statement, the support button. It is what makes "never a dead end" true rather than asserted. **`0.2` names 404 and 500 explicitly and not 503, so the third surface inherits the same treatment and the extension is named here rather than assumed** |
| **B9. Navigation carriers `0.1`** | Yes | **Conditional, section 3** | Conditional | `D-21` and `D-22`, the inherited rail and the mobile bar | Removing the carriers would make an error read as an ejection, which is the same argument `0.1` makes for the age gate. On 500 they render only if they can render without the backend |

**Three blocks are refused, each with the row that refuses it.**

| Refused | Why |
|---|---|
| **The marketing sentence** | skin.club spends its one error line on one. `0.11` rule 1: a claim without a route is decoration that looks like evidence, and an error page is the worst place in the product to make one |
| **The ticker `0.8`** | **The citation this row carried is dead and the refusal is not.** It read "renders on `1.0` only since `D-31`", and `D-59` of 21 August 2026 put the feed in the shell on every page, so the row had been resting on a reversed rule. **What survives is this node's own sentence: a live feed of other people's wins beside our own failure is the tone this product does not have.** That is a parent written in this file, which is what `D-77` requires of any surface that takes the feed off itself, and the refusal is registered in `0.8` section 3 rather than only here |
| **Any live figure from `0.11`** | On 500 and 503 the source of those figures is the thing that failed. Rule 6 of that register makes a failed source degraded rather than frozen, and the cheapest way to obey it here is not to print the figure at all |

**And that refusal meets one thing `0.2` already decided, so the two are reconciled here rather than left to collide.** The footer renders in full on these pages **including its statistics strip**, which is four live figures. `0.2`'s own transient table already answers it: a statistic that is unavailable states that it is unavailable with its last known timestamp and never renders a stale number as current. **So the strip renders in the unavailable state rather than being removed**, which is the same rule this node applies to the money figures in section 4, and neither node has to change.

---

## 3. The two arrivals, which is why the 404 carries both blocks

A person reaching a 404 is in one of two states, and each needs a different block.

| Arrival | What they know | The block that answers it |
|---|---|---|
| **Rot or a typo, no referrer** | They know what they wanted. A case name, a policy, a result they were sent | **Search.** They can name it |
| **Our own dead link, internal referrer** | They know nothing except that we sent them here. **This is our defect, not theirs** | **Quick links.** There is nothing to search for, and the honest move is to put the two live destinations in front of them |

**One of those two is a signal we own.** A 404 with an internal referrer means a link inside this product points at nothing, which is exactly the defect the rule against phantom destinations exists to catch. The page looks the same to the person either way. What differs is that the internal case is worth counting, and that instrumentation belongs to production rather than here.

**Quick links are the map's two transitions, `1.0` and `3.1`, and no more.** Not because two is elegant: a carrier may not promise a destination the map does not hold, and this node's transitions row holds those two. **If the body should also carry `1.2` or `0.10` as a third link, that is a change to the map, and it belongs to the step 8 audit rather than to a quiet edit here.** Support is present either way, through the footer.

---

## 4. The 500 is backend-independent, and that is the one rule that costs something

`blocks.md` T8 states it in one line: **an error page that needs the broken backend to render is not an error page.** What that means concretely, and each item is a constraint on stage 04 and on production rather than a look:

- **No template engine call, no API call, no database read.** The 500 is a static document.
- **No live figure**, per section 2. On 500 the money figures in the header have no source. `0.11` rule 3 decides what happens then: **missing is a state, never a zero.** They are absent with a reason, never rendered as 0.00.
- **Styling and typography inline or from a file that is already cached**, because the asset pipeline is part of what may be broken. Design principle 5: a failure page that is itself slow says the failure is worse than it is.
- **The carriers render from a static copy or not at all.** `0.1` says the rail is a drawer on mobile and the bar is fixed. A drawer whose contents come from a session that just failed is worse than a page without one, and the quick links block is what makes their absence survivable. **This is why B4 is a body block and not a footer link.**
- **The reference is generated at the edge**, not by the failed application, or it does not exist.

**And the same argument runs one level up on the 503.** If the origin is down, the origin cannot serve its own 503. **Serving these three responses from the edge is a requirement this node states and does not own**, section 9. The IA's part is to say what has to be true. Where it is served from is production's.

---

## 5. The 503, and what it inherits from the withdrawal clock

A maintenance page that says nothing about duration is barrier `B8-2` at the scale of the whole product: waiting, with no attribution and no figure. The withdrawal clock is the answer this product already chose for that barrier, and the 503 inherits its shape.

| From the clock | On the 503 |
|---|---|
| Named states rather than a spinner, row `G1` | Two states and they are named: **planned** and **unplanned**. The page says which |
| Attribution to us, Steam or you, row `G1` | On a 503 the owner is always us, and the page says so in those words |
| A published ceiling on our own states, row `G2` | `Retry-After`, in the header and in the body, in the same figure |
| A degraded banner driven by a health probe, row `G2` | A 503 is our own degraded state. Where only a part is down, the correct response is the degraded banner on the working surface, not a 503 on everything |

**Planned and unplanned are different pages of the same template.** Planned states the end time. Unplanned states that there is no end time yet and gives the support route rather than a number invented to look reassuring, which `0.11` rule 3 forbids in every other place in this product.

**No automatic reload loop.** A page that refreshes itself every few seconds takes the choice away, keeps hammering a server that is already refusing, and on a screen reader restarts the page on every cycle. The retry is a control, and the person presses it.

**Nobody learns about a 503 from a 503, and this node cannot fix that.** The global sweep already recorded it: there is no notification, email or push row anywhere in `cjm-to-be.md`, so there is no channel that reaches a person who is not on the site. Recorded in section 9 in the treatment that hole already has, so it is not later reported as a discovery.

---

## 6. Indexation, read from `0.13` rather than decided again

Node `0.13`'s register carries one row for this node: **`0.3` System pages, no URL of their own, not indexed, no canonical, no schema, no breadcrumb.**

- **No URL of its own is the mechanism, not an omission.** The response renders **at the address that was requested**. That is what makes the status honest: a redirect to `/404` would answer the request with a 200 or a 301 somewhere else, and the address the person typed would vanish from the browser bar along with any chance of correcting it.
- **The status code is the instrument here, not the meta tag.** A `noindex` on a 404 is belt and braces at best. What removes the URL from an index is the 404 itself, and what keeps a maintenance window from removing the whole site is that a 503 is temporary by definition.
- **`robots.txt` disallows nothing for this node**, and `0.13` already explains why in general terms: a page a crawler is forbidden to read is a page whose instructions the crawler cannot read. Here it is simpler still. There are no error paths to disallow, because there are no error URLs.
- **The search on the 404 must not mint indexable URLs.** `0.13` marks `/cases?...` as `noindex, follow`, canonical to `/cases`. The 404's search field submits into that same route and inherits that same rule rather than inventing a second search surface.
- **The geo block is not one of these pages and must never become one.** `0.12` section 9: the block returns 200 with content, is a state rather than a failure, and renders at the URL the person is on. A market we do not serve is not a missing page.

---

## 7. States

Every state below is a state of this node. None of them is a separate node in the map, because none has its own copy, its own route out and a specification that differs from this template's default.

| State | What renders | Route out |
|---|---|---|
| **404, external arrival** | Statement, search, quick links, footer | Search into `3.1`, or the two quick links |
| **404, internal referrer** | Identical to the person | The same, plus a counted signal that a link inside the product is dead |
| **404 on a retired case slug** | The statement names that the case is gone rather than mistyped, **if the product knows that**, which is the 410 question | `3.1`, where the rest of the shelf is |
| **500** | Statement, attribution, reference, quick links, footer. **No figures, no search.** **Drawn twice**, with the carriers and without, because section 4 makes them conditional and section 9 leaves the condition to production | Support through the footer, quick links, retry by reloading the address they wanted |
| **503, planned** | Statement, owner, the end time, the retry control | The retry control, support |
| **503, unplanned** | Statement, owner, **no invented end time**, the retry control, support | Support, which is the only route that is not the thing that is down |
| **Search returns nothing**, inside the 404 | The empty result, in the same block, with the quick links still under it. **A page of its own since `D-79`**, and the search on every 404 is a live control that reaches it, because a state only a description mentions is a state nobody checks | `3.1`, the full shelf, never a blank page |
| **Boundary in force**, `6.3` | Unchanged. A system page does not editorialise about a limit | Same as its base state |
| **Consent pending**, `0.4` | The banner renders here too, and nothing non-essential fires on an error page any more than anywhere else | Same as its base state |

---

## 8. Adaptive behaviour and accessibility

**Mobile, base, 360px.** The statement, then the search field at full width, then the quick links as a stacked list rather than a tile grid. **Two tiles side by side at 360px is how the label of the longer destination gets truncated**, and a truncated route is the defect the block exists to remove. The footer follows in its own stacked form, `0.2` section 6.

**Desktop, from 900px.** The rail keeps its place, the statement and the search sit in the content column at a readable measure rather than centred across the full width, and the quick links stay a list.

- **Exactly one H1, and it is what happened in words**, per `0.13` section 5. Never the numeral alone. The numeral is present, because a person reporting the problem needs it, and it is secondary text.
- **The `<title>` carries the same statement.** It is what a person sees in the tab and in their history, and it is the one part of an error page that survives being left open in a background tab.
- **The search field is not autofocused.** Autofocus jumps a screen reader past the statement, which is the one sentence the page exists to deliver.
- **Focus starts at the top of the main landmark**, so the statement is the first thing read.
- **The statement is text, never an image**, generalising `0.11` rule 8. An error a person cannot select, copy or have read aloud cannot be reported.
- **Colour never carries the state.** The words carry it.
- **The reference is a copyable string**, and it obeys the truncation rule `0.14` section 5 writes for the hash: middle truncation and the full value always retrievable, never truncation at the end.

---

## The pages that draw this node, and the registry is where the list comes from

**Added 2 September 2026 by `D-122`.** Founder: actualise every IA node against the wireframes. **The check could not be written, because nothing joined a node to the screens that draw it except prose.** This table is that join, taken from `/_nav.js`, which is the one registry every page in the project already renders from.

**It is a contract, not a listing.** A page in the registry with no row here is a state nobody specified. A row here with no page is a specification nobody drew.

| Page | What it draws | Node |
|---|---|---|
| `system.html` | 404, external arrival | `0.3` |
| `system-404-internal.html` | 404, internal referrer | `0.3` |
| `system-404-retired.html` | 404, retired case slug | `0.3` |
| `system-500.html` | 500, carriers render | `0.3` |
| `system-500-noshell.html` | 500, carriers cannot | `0.3` |
| `system-503-planned.html` | 503, planned | `0.3` |
| `system-503-unplanned.html` | 503, unplanned | `0.3` |

---

## 9. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **404 against 410 for a retired case** | RFC 9110 15.5.5 prefers 410 where the condition is known to be permanent. `0.13` covers renames with a 301 and says nothing about retirement, and whether a retired case is permanent is a product answer, not a technical one | Node `0.13`, with the founder on whether a case can return |
| **Where the three responses are served from** | A 500 that must not touch the backend and a 503 that must survive the origin being down both point at the edge. This node states the requirement and does not own the answer | Production, before stage 04 draws the template as final |
| **Whether the carriers can render on a 500 at all** | Section 4 makes them conditional on being renderable without the backend. Whether the shell is static enough for that is unknown here. **Both versions are drawn since `D-79`, 22 August 2026, so the question is now which one production serves rather than what either looks like** | Production. Stage 04 has paid its half |
| **The reference format** | One short identifier, correlatable with a log, short enough to read over the phone. The format is `[?]` | Production, with `0.10` which has to look it up inside the published deadline |
| **How a person learns about a planned 503 before it starts** | There is **no notification, email or push row anywhere in `cjm-to-be.md`**, which the global sweep already recorded as a hole with no parent. A person off the site cannot be told, so a planned window is discovered by arriving at it | Founder, one backlog row if it is wanted. Recorded, not invented |
| **Whether the quick links should carry a third destination** | The map's transitions hold `1.0` and `3.1`. Adding `1.2` or `0.10` to the body is a change to the map | The step 8 audit of this stage |
| **Rate limiting and its status code** | 429 exists and is not in this node's INCLUDES. Whether the product ever returns one, and whether it reuses this template, is undecided | Production |

**And what belongs elsewhere.** The words on these pages: stage 05, which owns microcopy. How they look: stages 06 and 07. Which figures may appear anywhere: `0.11`. Indexation: `0.13`, read here rather than decided. The geo refusal, which is not an error at all: `0.12` and node `2.2`.
