# Node 0.5. Toasts and notifications

**Type:** component. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** One live region and one transient message shape, for confirmations and failures that need to be noticed and do not need to be kept. Its specification is mostly a list of what may not go in it, and that is the correct shape for this node in this product.

**Jobs served.** None directly. **Parent class:** barrier `B3-1`, a failure the person cannot read, by way of row `B5`; barrier `B4-3`, money leaves and does not arrive, by way of row `C3`; barrier `B8-2`, waiting with no attribution, by way of rows `G1` and `G2`; and design principle 2 in `CLAUDE.md`, quoted, "Motion without an emotional or informational job gets cut." Three of those four appear below as reasons a state is **forbidden** from being a toast, which is the point of the node.

**Used by:** every surface, and owned by none of them. **Renders nothing of its own:** the content comes from the node that raised it.

**Not a page.** No URL, no heading, no place in the heading tree, no SEO weight of any kind.

**Transitions:** none. A toast is never a route.

---

## 0. The sentence this node is built around

From the map's own INCLUDES line for this node: **never the only place a state is announced.**

**That is not an accessibility footnote, it is the product's history.** The two deepest barriers in `cjm-as-is.md` are states that went silent: `B4-3`, money that left and did not arrive, a pattern of 4, and `B8-2`, waiting with no attribution, a pattern of 6 with a hard figure attached to every one. The answers this product chose for both are **durable**: row `C3` makes crediting a named state with a timer, rows `G1` and `G2` make a withdrawal a sequence of named states with an owner and a published ceiling.

**A transient message is the opposite kind of object from a record.** It appears, it is not requested, it cannot be found again, and it is gone in seconds. So the rule is mechanical and it decides section 4 by itself: **a toast may only ever be a second copy of something that is already visible and permanent on the surface the person is on.** If removing the toast loses information, the toast was wrong, and so was the surface.

---

## 1. The severity set: three, and why not four

| Severity | What raises it | Live region | Dismissal |
|---|---|---|---|
| **Confirmation** | A thing the person just did, which succeeded, and which needs no action from them | `polite` | Auto, plus a dismiss control |
| **Failure** | A thing the person just did, which did not succeed, whose cause and recovery are already on the surface | `assertive`, by `role="alert"` | **No auto dismissal**, section 2. Dismiss control only |
| **Connection** | The product lost or regained its connection to its own backend | `polite` | Auto on regain. **Persistent while lost** |

**Why there is no fourth.** The obvious candidates each fail on a rule that already exists:

- **Progress** is a named state with a timer in this product, `C3` and `G1`, and a timer that disappears is not a timer.
- **Warning** in practice means "you are about to spend" or "you are near a limit", and both are risk moments. Design principle 3 puts cost and consequence where the decision is made, not in a corner that fades.
- **Promotional and achievement** are cut by the limits rule in `CLAUDE.md` and by `0.11` rule 7, a number is never a score. **A toast that congratulates is a completion mechanic wearing a system message.**

**Connection is a severity rather than a case of failure** because it is the one message not raised by an action the person took, so it obeys different timing: it stays while the condition holds and clears itself when the condition ends.

---

## 2. Duration, and it is derived rather than chosen

Two sources, opened in a browser on 12 August 2026.

> **ARIA Authoring Practices Guide, Alert Pattern**, `w3.org/WAI/ARIA/apg/patterns/alert/`: "An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task." And: "It is also important to avoid designing alerts that disappear automatically. An alert that disappears too quickly can lead to failure to meet WCAG 2.0 success criterion 2.2.3."

> **WCAG 2.2, Success Criterion 2.2.1 Timing Adjustable, Level A**: "For each time limit that is set by the content, at least one of the following is true", the first of which is "The user is allowed to turn off the time limit before encountering it".

**An auto-dismissing message is a time limit set by the content.** That is the whole reason this section exists, and it is why the rules below are not preferences.

| Rule | Reason |
|---|---|
| **A confirmation auto-dismisses. A failure does not** | The APG line, applied. A confirmation carries nothing that is lost when it goes, because section 0 already guarantees the durable copy. A failure names a cause, and a cause that vanishes is `B3-1` again |
| **The duration scales with the length of the string, it is not a constant** | A fixed timer punishes the longest message, which is always the one carrying the most information. **The exact constant is `[?]` and belongs to stage 04**, measured against reading speed rather than chosen |
| **Pause on hover, on focus, and while the pointer is inside the region.** The timer restarts, it does not resume | A person who reached for it was reading it |
| **Never counts down while the tab is hidden**, and nothing queues up to fire on return | A message that expired unseen was never delivered, and a burst on return is worse than silence |
| **Every toast has a dismiss control**, which is the "turn off" branch of 2.2.1 in the only form that fits a component with no settings | |
| **`prefers-reduced-motion` removes the transition, never the message and never the time** | Design principle 2. Motion here has an informational job, arrival, and nothing else. Same treatment the ticker `0.8` gets with its pause control |

---

## 3. Stacking, and the cap is a measurement

**One region, one position, newest nearest the edge it enters from.** Not per surface, not per component. A second region is how two messages announce over each other.

**The cap is not a taste number. It is the number that fits above the mobile bar at 360px without covering it.**

- `0.1` puts three live destinations in the bottom bar, rising to four with an account, and they are the only persistent route home at that width.
- `0.2` already cut the baseline's floating support control for exactly this reason, `D-22`: an affordance anchored bottom right sits on top of the bar at 360px, and a control that covers a navigation destination is worse than no control.
- **So the cap is whatever count clears the bar with the tallest message this product actually sends.** The integer is `[?]` and stage 04 measures it rather than this node guessing it.

**Beyond the cap, the oldest is removed rather than the newest suppressed.** The newest is the one describing what just happened.

**Identical repeats replace rather than stack.** The same failure raised three times is one failure. It does not acquire a count, because a count on a system message is a number with no route, which `0.11` rule 1 forbids.

---

## 4. What is never a toast

The list is the node. Each row names where the state lives instead, and the parent that put it there.

| Never a toast | Where it lives | Parent |
|---|---|---|
| **Anything a person must act on** | On the surface, beside the thing they act on | The APG line, "without interrupting the user's task", read the other way: a message that must be acted on is not the pattern |
| **Anything about money moving.** Deposit crediting, a balance change, a withdrawal state, the ceiling being reached, the withdrawal threshold | `4.1` and `4.4`, `5.3` and its states, and the header money control, which `0.1` says carries a named timer and **does not silently change** | Rows `C3`, `C2`, `C4`, `G1`, on `B4-3` and `B8-2` |
| **The outcome of a round** | `3.3` phase 3, the outcome itself, with the instance value receipt | Rows `E1` and `F1`, on `B6-1`, the animation and the credited item disagreeing. A win announced twice in two places is that barrier's own mechanism |
| **Anything legal or compliance.** The age gate, the geo verdict, self exclusion, cookie consent | `2.1`, `2.2`, `6.2` and `6.3`, `0.4` | The compliance constraints in `CLAUDE.md`, and `0.12` section 9, which requires the geo verdict to carry a ground in readable words rather than being an error |
| **Identity review** | `2.7` and its state `2.8` | Row `B1`. The state runs for hours. A message measured in seconds cannot carry it |
| **A failed proof** | `1.4`, which `flows.md` marks a deliberate dead end for the job | `0.14` section 3, the mismatch state. Our own proof failing is not a notification |
| **Field level validation** | At the field | Row `B5`, on `B3-1`. A cause announced away from the input is a cause the person has to carry back |
| **Any published number** | The figure block on the surface that owns it | `0.11` rule 1, a figure ships with its route, and rule 2, an as-of moment on anything that moves. **Neither survives being transient** |
| **Anything with a long string to copy** | The block that owns it | `0.14` section 5. A hash exists to be pasted somewhere else, and a value that disappears cannot be |
| **Progress of anything** | A named state with a timer | Rows `C3` and `G1` |
| **Praise, streaks, milestones, session summaries** | Nowhere. They do not ship | The limits rule in `CLAUDE.md`, and `0.11` rule 7 |

**What is left, and it is a short list on purpose:** a preference saved, a link copied, a filter cleared, a form submitted whose result is already on screen, a retry that failed, the connection lost and regained. **Every one of them is a second copy of something visible, and none of them is money, an outcome, a limit or a legal statement.**

---

## 5. The three named states this node has to stay out of

The map holds these as numbered states with their own copy and their own route. Each one is exactly the kind of thing a toast is usually used for, and in this product none of them may be one.

| State | Its durable home | What a toast may do | What it may never do |
|---|---|---|---|
| **`4.4` Crediting, with a named timer**, row `C3` | The deposit surface `4.1`, and the header money control, which shows the state with its timer rather than a spinner | **Nothing.** The person is on the surface that owns it, or the header carries it wherever they went | Announce that money arrived. Carry the timer. Be the reason a person leaves the page thinking it is done |
| **`5.5` Steam degraded**, row `G2` | A live banner on `5.3`, driven by the health probe | **Nothing.** A degraded dependency is a condition, not an event, and it lasts as long as it lasts | Fire once and disappear while the condition is still true. That is the exact shape of `B8-2`, a wait with no attribution |
| **`2.8` Identity pending review** | `2.7`, and the account state shown on the deposit screen, which row `B1` requires | **Nothing.** It resolves in hours | Announce the submission as if it were the answer |

**The general rule these three produce.** When a state is durable, the carrier reflects it and the toast stays silent. When the person is elsewhere, the answer is the carrier, `0.1`, not a message that expires before they look. **And where the person is off the site entirely there is no answer at all**, because there is no notification, email or push row anywhere in `cjm-to-be.md`. The global sweep already recorded that hole with no parent, and this node names it again rather than filling it with an invention, section 9.

---

## 6. The live region contract

> **WCAG 2.2, Success Criterion 4.1.3 Status Messages, Level AA**, `w3.org/WAI/WCAG22/Understanding/status-messages.html`: "In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus."

- **One region, in the DOM from first paint, empty.** A live region injected at the moment of the message is unreliable: what is announced is a change inside a region that was already being watched.
- **`polite` by default.** `assertive`, through `role="alert"`, only for a failure of an action the person just took. Nothing else in this product earns an interruption.
- **The region never receives focus**, per the criterion above. Focus stays where the person put it.
- **Real-time figures never announce.** `0.11` states it as a rule and `0.2` repeats it for the footer counters: a live region that fires on every round is a denial of service to a screen reader. **The ticker `0.8` is not a live region**, and since `D-59` it is on every page rather than on `1.0` alone, which makes that rule matter on every page too. Neither is the observed rate counter, the favourite count or either money figure. **The free unit count was in this list until 21 August 2026 and is withdrawn**, `D-60`.
- **The dismiss control is reachable**, as a real button in the tab order, and does not pull focus when the message arrives.
- **Text, never an icon alone, and never colour alone.** Severity is in the words. Same rule as `0.11` rule 8, applied to a message rather than to a number.
- **One language, so no announcement of a language change**, per the locked decision in `CLAUDE.md`.

---

## 7. States of the component itself

| State | What it does |
|---|---|
| **Idle** | The region exists and is empty. This is almost always the state |
| **One message** | Normal case |
| **At the cap** | Section 3. Stacked, newest nearest the entering edge |
| **Over the cap** | The oldest is removed. Nothing is queued to appear later |
| **Reduced motion** | No transition. Same content, same timing |
| **Connection lost** | The connection message persists while the condition holds, and other toasts do not fire, because a confirmation raised while the backend is unreachable is a claim we cannot make |
| **A layer is open**, `2.1` or `0.4` | **The region does not render above the layer.** Same rule `0.1` applies to the mobile bar behind the drawer scrim: an element left live above a scrim is content the scrim failed to block |
| **On a system page**, `0.3` | Nothing fires. Nothing on those pages raises one, and on a 500 nothing is running that could |

---

## 8. Adaptive behaviour

**Mobile, base, 360px.** Full width inside the page margins, above the bottom bar and never over it, section 3. **Text wraps, it never truncates:** a truncated cause is an unreadable failure, which is the barrier `B5` exists to close. The dismiss control keeps 44 by 44 CSS pixels, matching the target size `0.1` chose for every carrier.

**Desktop, from 900px.** One corner, one column, a maximum width at a readable measure rather than the full window. It never overlaps the rail and never covers the header's money figures, which `0.1` requires to stay visible in every state including a boundary in force.

---

## 9. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **The auto-dismiss constant** | Section 2 fixes the rule, that duration scales with the string and pauses on attention. The constant itself is a measurement against reading speed | Stage 04, then stage 05 when the strings exist |
| **The stack cap** | Section 3. It is whatever clears the mobile bar at 360px with our tallest real message | Stage 04, by measurement |
| **The corner and the entering edge** | Bottom on mobile is forced by the bar. Which corner on desktop is a layout decision with no consequence for this node | Stage 04 |
| **Out-of-product notification** | There is no notification, email or push row anywhere in `cjm-to-be.md`, so a person who is not on the site learns nothing. **Named, not filled.** It needs a backlog row before it needs a design | Founder, one row if it is wanted |
| **Whether a connection message is even reachable in round 1** | It depends on how much of the product is a live connection rather than a page load, which stage 04 settles | Production, with stage 04 |
| **The words** | Every string here is microcopy, and one voice is what makes a failure readable at all, which is the whole of row `B5` | Stage 05 |

**And what belongs elsewhere.** How a toast looks, including its severity treatment: stages 06 and 07. Which states exist at all: the nodes that own them, `4.1`, `5.3`, `2.7`, `1.2`, `3.3`. Whether a figure may be shown anywhere: `0.11`. The dialog this component must not announce assertively: `0.4`.
