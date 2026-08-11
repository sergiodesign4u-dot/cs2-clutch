# Node 0.12. Market and jurisdiction register

**Type:** register. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** Hold one row per market: the verdict, the cited ground, the minimum age, the age method that market requires, the evidence the verdict rests on, and the date it was last verified. Described once, read by seven nodes, and never re-derived at any of them.

**Jobs served.** None. **Parent class:** the compliance constraint in `CLAUDE.md`, quoted, "geo blocking informed by cited legal research" and "staged regional rollout resting on cited law", by way of row `B4`; plus barrier `B8-3`, pattern of 3, by way of rows `G4` and `G5`, which is what makes a wrong verdict a route rather than a wall. Constraint and barrier classes.

**Read by seven nodes:** `2.1` the gate, `2.2` geo blocked, `2.7` identity verification, `4.1` deposit, `5.3` withdrawal, `0.2` footer, `0.9` legal pages.

**The sweep registered five, and this node found two more.** `2.7` and `4.1` are consumers because the document and the payment instrument are evidence of where a person is, and evidence is half of what a verdict is made of. The map row for `0.12` is corrected in the same step, which is the discover-as-you-go rule working in the direction it was written for.

**Not drawn at stage 04.** A register has no screen. What stage 04 inherits is the state set in section 10 and the person-side message in section 9.

---

## 0. What this node specifies, and what it refuses to

**It specifies the register. It does not decide the law.**

Every verdict below is `[?]` until re-verified against current law, and the decision belongs to counsel under `D-A`. What this node fixes is everything around the verdict: which fields a row must carry for a verdict to be usable at all, which surfaces read which fields, what happens when the evidence disagrees with itself, what a person sees, and what happens to money that is already inside when a market closes.

**Those are design decisions and they are not waiting on counsel.** A register with a perfect legal answer and no rule for a wrongly blocked person is not usable. This node is the second half.

---

## 1. The row schema

Nine fields. Each one is a field rather than a sentence because something in the product reads it separately.

| Field | What it holds | Why it is a field |
|---|---|---|
| **Market** | The jurisdiction, at the granularity that jurisdiction actually has | **The key is not "country".** The United States regulates by state, `research.md` section 7, so a country-keyed register cannot express Washington. Getting this wrong is a schema error that surfaces as a compliance failure |
| **Verdict** | Open, staged, blocked, not launched, under review, closing | Six values, section 10. Two of them are not a blocked-or-not binary and both are load bearing |
| **Ground** | The instrument or authority and what it says | Row `B4`'s success signal in `cjm-to-be.md`: every blocked market carries a row with a citation, and no market opens without one |
| **Source** | The named source and its date | A ground with no source is an opinion. `CLAUDE.md`: a fact from memory or from an undated article is `[?]`, not a fact |
| **Confidence** | Cited, inferred, or inherited with no ground | **The field that makes the audit in section 2 possible.** Without it, a row copied from a competitor reads exactly like a row read out of a statute |
| **Minimum age** | The age that market requires | Not universally 18. Belgium raised it to 21 with effect from 1 September 2024, `research.md` section 7 |
| **Age method** | Declaration, identity-based verification, or a stricter local requirement | The UK Online Safety Act 2023 made checkbox age confirmation unlawful for gambling sites from 25 July 2025, `research.md` section 7. A market can be open and still forbid the method our gate uses |
| **Last verified** | The date a human last checked this row | A register with no decay date is a snapshot that reads as current forever, section 8 |
| **Re-verification trigger** | The named event that invalidates this row early | Two are already known and dated, section 8 |

---

## 2. The inherited list, audited against our own cited research

The starting list is inherited from `lean-ux-canvas.md`: **Belgium, Netherlands, Germany, UK, Washington, Nevada.** `CLAUDE.md` carries it as `[?]` until re-verified. This section does not re-verify it against law, which is counsel's work. It checks something else, and something this project can check: **does each row have a ground in our own cited research.**

| Market | Verdict in our research | Ground, and its source in `research.md` section 7 | Confidence |
|---|---|---|---|
| **Belgium** | Effectively blocked. Strictest jurisdiction in the file | Belgian Gaming Commission 2018, CS:GO case opening characterised as "identical to roulette machines"; Valve disabled case opening and Market trading for Belgian users and that persists in 2026; since June 2024 court orders can compel ISPs and platforms to block; fines EUR 208 to 960,000, doubled where minors are involved. **Minimum age 21 from 1 September 2024** | **Cited** |
| **Netherlands** | Restricted, active enforcement | KSA treats skin gambling with real-world value as illegal gambling. **EUR 280,000 per week penalty against Clash.gg and Rustclash.com, November 2025.** The Dutch Council of State 2022 loot-box ruling is recorded there as **not** applying to third-party withdrawal-capable sites | **Cited** |
| **United Kingdom** | Restricted. Requires a UKGC licence, and the UKGC actively blocks unlicensed sites | UKGC classification turns on whether skins are tradable and act as a de facto virtual currency, Gov.uk Rapid Evidence Review. **Online Safety Act 2023: from 25 July 2025 checkbox age confirmation is no longer lawful.** DCMS review October 2025 on the category's age-check failure | **Cited** |
| **Germany** | Restricted, de facto | Interstate Treaty on Gambling 2021, plus Valve's CS X-Ray Scanner mandate for native case opening from 16 March 2026. Our own file says third-party platforms are **"expected to face"** increased geo-blocking under the same framework | **Cited, and the mechanism is a projection.** The scanner mandate is dated; the consequence for third-party platforms is an expectation in our source, not an order addressed to us |
| **Washington** | Blocked. The most direct enforcement history in the file | Washington State Gambling Commission ordered Valve to stop allowing skin transfers for gambling, October 2016 | **Cited** |
| **Nevada** | In the inherited list, and in our own research's recommended minimum | **None of its own.** Nevada appears in `research.md` section 7 twice: skin.club blocks Washington and Nevada, and Clash.gg blocks Idaho, Michigan, Nevada, Washington, Lithuania and the Netherlands. The Implications subsection then recommends "Washington, Nevada minimum" | **Inherited with no ground.** `[?]` |

### Three findings, and each one is checkable in the file

**1. One market in the list has no ground of its own.** Nevada is blocked because two competitors block it. Row `B4` requires a cited legal ground per blocked market, and this row does not have one. It is not necessarily the wrong verdict, and it is currently an unsourced one, which is the exact defect the row was written to prevent.

**2. The list is a partial copy of a competitor blocklist, and the copy is inconsistent.** Clash.gg blocks Idaho, Michigan, Lithuania, Nevada, Washington and the Netherlands. Our list takes Nevada from that set and leaves Idaho, Michigan and Lithuania out. **Our file holds no ground for those three either**, so their absence is exactly as unsourced as Nevada's presence. A list assembled this way cannot be audited, in either direction.

**3. The operator we partly copied is the one being fined.** `research.md` records the KSA penalty against Clash.gg at EUR 280,000 per week, November 2025, and records the industry pattern in as many words: register in a permissive jurisdiction, block reactively after enforcement, do not proactively block where enforcement is less certain. **Copying a blocklist from an operator currently being penalised for where it operated is not a compliance method.** Our own research already recommends the opposite: document every jurisdiction access decision with a legal basis, not with IP-block convenience.

### And one finding that is about our own gate rather than the list

**The gate asks for an 18+ declaration everywhere, and this register is what would tell it otherwise.** Node `2.1` carries the declaration, by `D-17`, which is correct for the markets round 1 opens. But Belgium is 21 and the UK has forbidden the checkbox since July 2025. Both are blocked at launch, so nothing is broken today. **What would break is the day a market opens without the gate asking the register what that market requires.** That is why minimum age and age method are fields here rather than a constant in `2.1`.

---

## 3. The structural fork this register cannot decide alone

**Allowlist or blocklist.** Is a market closed until a row opens it, or open until a row blocks it?

| | Allowlist, closed by default | Blocklist, open by default |
|---|---|---|
| **What it means** | No row, no access. Every open market has been reviewed and documented | Access everywhere except the named list. The list grows after enforcement |
| **Who does it** | Nobody in this category, per `research.md` section 7 | The industry pattern, described there step by step |
| **Cost** | Every market is work before it is revenue. A staged rollout is slow by construction | Exposure is unbounded and unmeasured, and it is discovered by an enforcement letter |
| **What our own research says** | "Maintain a legal review process for each new jurisdiction before enabling access" and "document every jurisdiction access decision with legal basis, not just IP block convenience" | "Do NOT proactively block jurisdictions where enforcement is less certain", recorded as **what competitors do**, not as advice |

**Recommendation: allowlist, staged.** It is what `research.md` section 7 already recommends, it is the only structure in which the confidence field means anything, and the same section names the prize directly: the platform that builds this infrastructure proactively is the first in category to do so.

**This is a business decision with a revenue cost and it is the founder's, with counsel.** It is stated here rather than assumed because the register's whole shape depends on it: an allowlist register with a missing row denies access, a blocklist register with a missing row grants it, and those are the same file behaving in opposite directions.

---

## 4. Evidence, and precedence when it disagrees

A verdict is a rule plus evidence about where a person is. The evidence arrives at four different moments, and it can contradict itself.

| Evidence | Where the product sees it | What it is worth |
|---|---|---|
| **IP address** | `2.1`, at first case interaction | The industry's primary mechanism, `research.md` section 7. Cheap, immediate, and defeated by a VPN in either direction |
| **Payment instrument country** | `4.1`, at the deposit | Strong, and it arrives **after** the person has been through the gate |
| **Identity document** | `2.7`, before funding | Strongest, and it arrives at the same stage as the money |
| **Declared residence** | Wherever we ask | Weakest alone. Useful as the thing a person is held to, rather than as detection |

**Precedence, and it is a rule rather than a preference: the strongest evidence available wins, and later evidence overrides earlier evidence.** The register is what the check runs against; this line is what stops three surfaces from each deciding for themselves. The consequence is the case the product has to handle by design rather than by incident: **a person passes the IP gate, deposits, and then the document or the card says a blocked market.** Section 6 is that case.

**What is not decided here:** which provider does the IP lookup, and its accuracy. That is production, and `[?]`.

---

## 5. Being wrong in both directions

A geo verdict is a probabilistic guess presented as a fact. It will be wrong in both directions, and both need a route.

**Wrongly blocked.** Node `2.2` is a dead end by design, and a dead end for the wrong person is a defect rather than a success. The register requires that the blocked state carry **the ground in readable words and a route to `0.10`**, which holds the appeal pattern from row `G4`: a stated ground and a published response deadline. A person who is genuinely in an open market gets an answer inside that deadline, not a form that goes nowhere.

**Wrongly allowed, and this is the expensive one.** When later evidence says a blocked market, the account is closing rather than blocked: opening and depositing stop, and **the exit stays open**, section 7. Nothing here is invented for the case: it is `G4`'s written ground and frozen-not-zeroed balance, plus node `6.3`'s rule that withdrawal stays open under every boundary, applied to the boundary this register enforces.

---

## 6. Closing a market without trapping the money

A market can close after people are already inside it. The law changes, the verdict is corrected, or the evidence resolves the other way. **The register carries the procedure, because otherwise it gets improvised at the worst moment.**

| Step | What happens | Where the rule comes from |
|---|---|---|
| 1 | Deposits stop. Opening stops | The verdict itself |
| 2 | **Withdrawal stays open** | `6.3`, withdrawal stays open under every boundary, self exclusion included. A boundary that traps the money is a confiscation with a compliance label |
| 3 | The balance is frozen, never zeroed | `G4` |
| 4 | Written notice with the ground, in words | `G4`, and it is the same field as the person-side ground in this register |
| 5 | An appeal with a published response deadline | `G4`, routed through `0.10` |
| 6 | The row moves to `closing`, then to `blocked` once the exit window ends. **The window length is `[?]`** | Section 10 |

**The window length is the one number in this procedure that nothing in the repository decides.** It is named here rather than guessed.

---

## 7. Re-verification, because the register decays

Every row carries a last-verified date and a trigger. Two triggers are already known and dated in `research.md` section 7, and both fall inside this project's own timeline:

- **The Digital Fairness Act, expected Q4 2026.** The European Parliament's IMCO Committee called in October 2025 for it to ban loot boxes for minors across the EU. Any EU row's verdict is provisional until that lands.
- **The New York Attorney General action against Valve, filed February 2026, motion to dismiss pending.** A live US matter with no outcome yet, which is one of the reasons the US verdict in our file is `[?] COMPLEX` rather than a list.

**A row whose trigger has fired and whose verdict has not been re-read is `under review`, not `open`.** That is the sixth verdict value, and it exists so that decay is visible in the register rather than silent.

---

## 8. What the person sees, and the asymmetry

The full record is operator-side. What reaches a person is **the verdict and the ground in readable words**, plus what they can still do.

**Four rules on the person-side message:**

1. **A reason, always.** "Not available in your country" with no ground is what the category does, and it reads as arbitrary because it is indistinguishable from arbitrary.
2. **Readable words, not a citation dump.** The instrument belongs in the register. What the person gets is one sentence they can act on.
3. **What is still open, stated in the same breath.** Reading the site, the legal pages, support, and, where an account exists, the withdrawal. A blocked market is a restriction on service, not an ejection from the building.
4. **Never a soft 404 and never an error.** The block is a state with an explanation, not a failure of the site. `0.3` holds the error surfaces and this is not one of them.

---

## 9. SEO and accessibility

**The register has no public URL.** What it constrains is how the blocked state behaves on the surfaces that render it, and node `0.13` owns indexation for those surfaces.

- **The block is a state inside the flow, never a server-level ban on reading the site.** `2.1` fires at first case interaction, not on arrival, `B3` and `D-17`, which means the public surfaces stay readable and crawlable from every market. **This is also what stops a crawler from being served the blocked state and indexing it**, which is a real risk for any product that blocks at the edge by IP.
- **The blocked state returns 200 with content**, not 404 and not 403. It is an answer, not a missing page.
- **The footer's market statement is public and crawlable everywhere**, node `0.2`. It is the only place a person can read our position before meeting a gate.
- **The ground is text**, not an image and not colour alone, so a screen reader reads the reason and not only the refusal.

---

## 10. State matrix: the six verdicts

| Verdict | What the product does | What the person sees | Who can set it |
|---|---|---|---|
| **Open** | Full access | Nothing. The normal case | Counsel, with a cited ground on file |
| **Staged** | Access with a named limit, for example a launch cohort or a capped market | The limit, in words, and what changes it | Founder with counsel |
| **Blocked** | No access to case interaction, deposit or opening. Reading stays open | The ground in readable words, and the route to `0.10` | Counsel, with a cited ground |
| **Not launched** | No access. **Different from blocked and the difference is honest:** we have not reviewed this market, rather than the market forbids us | That we do not serve this market yet, without implying a legal verdict that does not exist | The default under an allowlist |
| **Under review** | Behaves as its previous verdict, and is flagged operator-side | Nothing new | Any fired re-verification trigger, section 7 |
| **Closing** | Deposits and opening stop, withdrawal stays open, section 6 | Notice with the ground, the exit window, and the appeal route | Counsel, or evidence that overrides an earlier verdict |

**Not launched is not a euphemism.** Merging it into blocked would state a legal verdict we do not hold, in a register whose entire purpose is that verdicts are held rather than implied.

---

## 11. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **Every verdict in section 2** | Re-verification against current law. The audit here is about grounds in our own file, not about the law | Counsel, under `D-A` |
| **Allowlist or blocklist** | The structural fork in section 3. The register behaves in opposite directions on a missing row | **Founder with counsel.** Recommendation on file |
| **Nevada's ground** | It is blocked because two competitors block it. Either a ground exists and belongs in the row, or the verdict does not | Counsel |
| **Idaho, Michigan, Lithuania** | Blocked by a competitor, absent from our list, and we hold no ground either way | Counsel |
| **The exit window when a market closes** | Nothing in this repository sets it | Founder with counsel |
| **The geolocation provider and its accuracy** | Detection quality decides how often section 5 runs | Production. `[?]` |
| **Minimum age and age method per open market** | Only two markets in our file carry a value, and both are blocked at launch | Counsel, as each market opens |
| **Whether this category is gambling** | Unsettled and varies by jurisdiction, `CLAUDE.md`. The register is built so that the answer is a field rather than an assumption | Nobody. It stays open by design |

**And what belongs elsewhere.** The wording of the blocked message: stage 05. How the blocked state looks: stages 06 and 07. Where the market statement sits in the footer: node `0.2`, already specified. What the gate asks: node `2.1`, which reads three fields from here rather than holding its own constants.
