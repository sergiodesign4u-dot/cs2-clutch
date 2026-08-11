# Node 0.12. Market and jurisdiction register

**Type:** register. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** Hold one row per market: the verdict, the cited ground, the minimum age, the age method that market requires, the evidence the verdict rests on, and the date it was last verified. Described once, read by seven nodes, and never re-derived at any of them.

**Jobs served.** None. **Parent class:** the compliance constraint in `CLAUDE.md`, quoted, "geo blocking informed by cited legal research" and "staged regional rollout resting on cited law", by way of row `B4`; plus barrier `B8-3`, pattern of 3, by way of rows `G4` and `G5`, which is what makes a wrong verdict a route rather than a wall. Constraint and barrier classes.

**Read by seven nodes:** `2.1` the gate, `2.2` geo blocked, `2.7` identity verification, `4.1` deposit, `5.3` withdrawal, `0.2` footer, `0.9` legal pages.

**The sweep registered five, and this node found two more.** `2.7` and `4.1` are consumers because the document and the payment instrument are evidence of where a person is, and evidence is half of what a verdict is made of. The map row for `0.12` is corrected in the same step, which is the discover-as-you-go rule working in the direction it was written for.

**Not drawn at stage 04.** A register has no screen. What stage 04 inherits is the state set in section 11 and the person-side message in section 9.

---

## 0. What this node specifies, and what it refuses to

**It specifies the register. It does not decide the law.**

Every verdict below is `[?]` until re-verified against current law, and the decision belongs to counsel under `D-A`. What this node fixes is everything around the verdict: which fields a row must carry for a verdict to be usable at all, which surfaces read which fields, what happens when the evidence disagrees with itself, what a person sees, and what happens to money that is already inside when a market closes.

**Those are design decisions and they are not waiting on counsel.** A register with a perfect legal answer and no rule for a wrongly blocked person is not usable. This node is the second half.

---

## 1. The row schema

Eleven fields. Each one is a field rather than a sentence because something in the product reads it separately. **Nine at first writing, and the last two were added the same day by the research pass in section 3.**

| Field | What it holds | Why it is a field |
|---|---|---|
| **Market** | The jurisdiction, at the granularity that jurisdiction actually has | **The key is not "country".** The United States regulates by state, `research.md` section 7, so a country-keyed register cannot express Washington. Getting this wrong is a schema error that surfaces as a compliance failure |
| **Verdict** | Open, staged, blocked, not launched, under review, closing | Six values, section 11. Two of them are not a blocked-or-not binary and both are load bearing |
| **Ground** | The instrument or authority and what it says | Row `B4`'s success signal in `cjm-to-be.md`: every blocked market carries a row with a citation, and no market opens without one |
| **Source** | The named source and its date | A ground with no source is an opinion. `CLAUDE.md`: a fact from memory or from an undated article is `[?]`, not a fact |
| **Confidence** | Cited, inferred, or inherited with no ground | **The field that makes the audit in section 2 possible.** Without it, a row copied from a competitor reads exactly like a row read out of a statute |
| **Minimum age** | The age that market requires | Not universally 18. Belgium raised it to 21 with effect from 1 September 2024, `research.md` section 7 |
| **Age method** | Declaration, identity-based verification, or a stricter local requirement | The UK Online Safety Act 2023 made checkbox age confirmation unlawful for gambling sites from 25 July 2025, `research.md` section 7. A market can be open and still forbid the method our gate uses |
| **Last verified** | The date a human last checked this row | A register with no decay date is a snapshot that reads as current forever, section 8 |
| **Re-verification trigger** | The named event that invalidates this row early | Two are already known and dated, section 8 |
| **Signed by** | The name of the person who took the verdict | Added 12 August 2026 by the second research pass. **The register recorded what was decided and not who is accountable for it**, and under an allowlist the whole point is that somebody chose |
| **Signed on** | The date they took it | A verdict with no signature is a draft. It is also what makes the twelve month re-verification measurable |

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

## 3. Legal research pass, 12 August 2026, taken at the founder's instruction

**Second wave, later the same day.** Two research passes ran in parallel at the founder's instruction, one on the allowlist fork and one on the operating entity. Their findings are folded into sections 3.6, 3.7 and 4 below, each carrying the provenance its brief gave it: **opened live** or **search summary**. The full briefs with their source tables were produced outside the repository and their content lives here, where the decision lives.

**The founder asked me to take the lawyer's seat and settle the open questions.** What that seat can do here is cited legal research and a defensible verdict per market with its ground attached. What it cannot do is sign. Belgium's penalties are criminal and Michigan's letters escalate to civil and criminal measures, so a licensed lawyer confirms before a market is opened or closed. `D-A` already says this in its own words, "needs cited legal research and counsel": **this pass delivers the first half in full and turns the second from a discovery into a review.**

### How each ground below was obtained, because that distinction is this project's own rule

- **Opened live in this session, 12 August 2026:** the Cyprus National Betting Authority FAQ, `https://nba.gov.cy/en/frequently-asked-questions/`, and the Michigan Gaming Control Board release of 7 April 2026, `https://www.michigan.gov/mgcb/news/2026/04/07/mgcb-issues-cease-and-desist-orders-to-45-illegal-offshore-gambling-operators`.
- **Read from search results, page not opened:** the Nevada, Idaho and Lithuania grounds. Justia, the Nevada Legislature and the Lithuanian regulator all returned 403 to this environment and Idaho's legislature host was unreachable. **They are marked `[?] text not opened` rather than presented as read**, and each carries its exact statutory citation so counsel pulls the text in one step.

### 3.1 The question nobody in this repository had asked: where may we operate from

Every open item in this node until now was about which markets we block. **Not one asked which jurisdiction we may lawfully operate from, and that question outranks the blocklist**, because it decides which markets can ever be open at all.

**The baseline answers it one way, and the answer does not survive reading.** `baseline.md` records the footer's identification line: MIXABIT LTD, Nicosia, Cyprus. `research.md` section 7 records the category's pattern as "register in permissive jurisdictions (Cyprus, Curacao, Isle of Man)".

**Cyprus is not permissive for this product.** The National Betting Authority licenses two classes, and the online class B covers "the provision of electronic betting services **excluding slot machines, on-line casino games of chance provided with a direct link** and electronic horse racing". The same page records that the NBA maintains a blocking list of illegal operators offering "poker, online casino, spread bet services, betting exchanges etc." Opened live, 12 August 2026.

**Three consequences, and they are precise rather than dramatic:**

1. **A Cypriot company is not a Cypriot gambling licence.** Incorporation is company law. Offering a game of chance to persons in Cyprus is betting law, and Cyprus issues no licence for it.
2. **Cyprus becomes a blocked market for us**, whatever we incorporate as, if our product is a game of chance. **The inherited list has no Cyprus row at all**, and the baseline's own entity is Cypriot.
3. **The licensing route has to be found somewhere else.** The one the category actually uses is Curacao, whose National Ordinance on Games of Chance replaced the old master and sub-licence system with direct licensing by the Curacao Gaming Authority, one licence covering all verticals, and which **from 1 January 2026 requires local substance: a physical office and local personnel.** Secondary sources only, read from search results, so this is a direction rather than a verdict. Malta and the Isle of Man were not researched in this session and are `[?]`.

### 3.2 Nevada has a ground, and it is stronger than the copied row implied

The audit above found Nevada in our list because two competitors block it. The ground exists, and it is statutory rather than an enforcement action:

- **NRS 463.0152** defines a game or gambling game as any game played with cards, dice, equipment or any mechanical or electronic device or machine **"for money, property, checks, credit or any representative of value"**.
- **NRS 463.01862** defines "representative of value" as **"any instrumentality used by a patron in a game whether or not the instrumentality may be redeemed for cash"**.

**That second definition is the finding, and it inverts the analysis this repository has been running.** `research.md` section 7 opens with the functional test every other jurisdiction turns on: can the item be converted to real-world monetary value. **Nevada's definition does not need convertibility at all.** A skin staked in a game is an instrumentality used by a patron, redeemable or not. Whatever a case-opening product argues about withdrawal, Nevada's statutory hook closes in front of the argument rather than behind it.

Verdict: **blocked, and no longer a copied row.** `[?] text not opened`, citation given.

### 3.3 Three markets our list omitted, and one is the most active regulator in the whole file

| Market | Ground | How obtained |
|---|---|---|
| **Michigan** | The MGCB announced on **7 April 2026** that **over the past four months it issued cease-and-desist orders to 45 offshore gambling operators** for offering online casino games and sports wagering to Michigan residents without a licence, naming each. Basis: **the Lawful Internet Gaming Act, the Lawful Sports Betting Act and associated Michigan statutes**, under which "any entity offering online casino gaming or sports wagering to persons located within Michigan must be licensed and authorized by the MGCB". Non-compliance faces "potential escalation to additional civil and criminal enforcement measures" | **Opened live**, 12 August 2026 |
| **Idaho** | Idaho Code **18-3801** defines gambling as risking any money, credit, deposit or other thing of value for gain contingent in whole or in part upon lot or chance. The state constitution declares gambling contrary to public policy with three narrow exceptions, so **legalisation would require a constitutional amendment rather than a statute** | Search results. `[?] text not opened` |
| **Lithuania** | The Gaming Law requires a permit for remote gambling. The Gaming Control Authority publishes a blacklist of illegal online operators and applies **DNS blocking and payment blocking**, and the only route off the list is obtaining a Lithuanian licence | Search results. `[?] text not opened` |

**Michigan is the finding that changes the shape of the list.** Forty five orders in four months, from an official source, dated four months ago. Our inherited list carries neither Michigan nor the two beside it, and the audit above showed why: the list was assembled from a competitor's blocklist rather than from law, so it inherited that competitor's blind spots along with its verdicts.

### 3.4 The recommended register: ten rows, every one with a ground

| Market | Verdict | Ground, in one line | How obtained |
|---|---|---|---|
| **Belgium** | Blocked | Gaming Commission 2018, case opening "identical to roulette machines"; minimum age 21 since 1 September 2024; ISP and platform blocking orders since June 2024 | `research.md` section 7, cited there |
| **Netherlands** | Blocked | KSA treats convertible skin gambling as illegal gambling; EUR 280,000 per week penalty against Clash.gg and Rustclash.com, November 2025 | `research.md` section 7, cited there |
| **United Kingdom** | Blocked absent a UKGC licence | Tradable skins act as a de facto virtual currency and bring the platform inside the Gambling Act 2005; checkbox age confirmation unlawful since 25 July 2025 | `research.md` section 7, cited there |
| **Germany** | Blocked | Interstate Treaty on Gambling 2021, plus the CS X-Ray Scanner mandate from 16 March 2026. The consequence for third-party platforms is an expectation in our source rather than an order addressed to us | `research.md` section 7, cited there |
| **Washington** | Blocked | Washington State Gambling Commission order to Valve, October 2016 | `research.md` section 7, cited there |
| **Nevada** | Blocked | NRS 463.0152 with NRS 463.01862: a representative of value is an instrumentality used in a game **whether or not it may be redeemed for cash** | Search results. `[?] text not opened` |
| **Michigan** | **Blocked. New** | Lawful Internet Gaming Act and Lawful Sports Betting Act; 45 cease-and-desist orders in four months to 7 April 2026 | **Opened live** |
| **Idaho** | **Blocked. New** | Idaho Code 18-3801 plus a constitutional prohibition with three narrow exceptions | Search results. `[?] text not opened` |
| **Lithuania** | **Blocked. New** | Permit required for remote gambling; regulator blacklist with DNS and payment blocking | Search results. `[?] text not opened` |
| **Cyprus** | **Blocked. New, and it is where our own entity sits** | Betting Law class B excludes online casino games of chance; the NBA blocks operators offering them | **Opened live** |

**Six became ten, and the shape of the change is the point.** Not one row was added by copying anyone. Three came from law, one came from reading our own footer, and the one row that was a copy turned out to have a stronger ground than the copy knew.

### 3.5 What still needs a signature, and it is a narrower question now

1. **The classification question, per market.** Is this product a game of chance where we intend to operate. It is legal judgment rather than research, and every row above rests on it.
2. **The licensing route and its cost.** Curacao under the new ordinance is the category's route and it now demands local substance from 1 January 2026. That is an operating decision with a real budget, not a filing.
3. **Whether the category's posture survives at all.** Licence in one permissive place, block the loud jurisdictions, is exactly the model the Netherlands fined and Michigan is writing to. Our own research already recorded it as what competitors do rather than as advice.
4. **The operating entity.** Node `0.2` carries it as an open item with every value unresolved. This pass turns that from a form field into a decision with a legal consequence attached.


### 3.6 The licence, and it decides more than where the company sits

**The question from 3.1 has an answer, and it is one jurisdiction rather than a shortlist.**

> **Decided on 12 August 2026 as `D-23`, at the founder's instruction to the research seat: the Isle of Man, as a direction and not as a filing.** The rejected jurisdictions and the reason each one lost are in that record. What follows is the research the decision rests on, left as it was written.

**Recommended: the Isle of Man, under the Online Gambling Regulation Act 2001.** It is the only regulator whose statutory hook was written around the thing this product actually does. Appleby's 2026 guide to Isle of Man gambling law, opened live, states that the Online Gambling (Registration and Account) Regulations 2008 let Isle of Man operators **"accept deposits in money or value in money's worth, including virtual assets"**, and that the GSC controls the use of virtual assets through policy, guidance and licence conditions. An independent search in this session corroborates the reading further: the 2017 changes permitted accounts funded with anything of value in money's worth, **expressly including non-convertible virtual currencies such as in-game skins**, and the GSC is reported as issuer of the first skin betting licence in the category.

**That matters more than the fee.** Everywhere else covers this product generically or not at all, which means the classification question gets answered by an official who has never been asked it before.

| Jurisdiction | Covers this product | Substance | Reported fees | Provenance |
|---|---|---|---|---|
| **Isle of Man, GSC** | **Yes, by a definition written for money's worth and virtual assets** | An Isle of Man company and a hearing before the Commission. Full local substance `[?]` | £5,250 application, £36,750 annual, five year term, duty tiered on yield from 1.5 percent | Act and fees opened live. The skins wording is a search summary |
| **Curacao, LOK** | Yes, generically. One B2C licence over every vertical | **Physical office, local managing director, up to three local staff by year five** | Two sources give figures near EUR 47,000 a year that **do not reconcile**, so `[?]` | Consultancy pages only |
| **Malta, MGA** | **Maybe, case by case.** Virtual tokens as payment need prior approval | The heaviest on this list `[?]` | `[?]` | Search summary |
| **Anjouan, Tobique, Kahnawake** | Generic only. No skins provision found | Light to none | Anjouan reported around EUR 18,000 first year | Consultancy pages |
| **Costa Rica** | **No. There is no gambling licence to hold** | A municipal data processing permit, and local players blocked | n/a | Search summary |

**Every fee above is reported by a secondary source and none was verified against a regulator's own schedule. That is the first thing for counsel to check.**

**Three consequences, and the third one is the one nobody expects.**

1. **A licence does not open a blocked market.** Not one of the ten rows in 3.4 opens under any licence in that table. The UK needs a UKGC licence, the Netherlands a KSA licence, the four US states license individually, and **Cyprus has no licence to obtain at all**. A licence decides where we may operate **from**, and which unlisted markets we may serve.
2. **Cyprus can stay in the group, but not as the operator.** Nothing in the NBA finding stops a Cypriot holding, intellectual property or employment company existing, **provided the licensed entity is the one that contracts with players, holds balances and runs the games**. Whether a Cypriot contracting entity attracts Cypriot exposure for gambling offered outside Cyprus is `[?]` and is the first question for Cypriot counsel.
3. **A tier one licence makes the allowlist close to compulsory.** A top tier regulator supervises which markets its licensees serve. **So the licence decision and the fork in section 4 are one decision, not two**, and they should be taken in one sitting.

**And a corroboration from the category, read live.** Hellcase's terms of use, opened 12 August 2026, name **no licence, no restricted jurisdiction list and no allowlist anywhere in fifty six thousand characters**. What they have instead is blanket discretion plus **two contracting entities split by region: a Cypriot company for EU users and a Singapore company for everyone else.** A second category leader routes EU users through Cyprus. That corroborates our Cyprus finding as the normal structure of the category, and says nothing at all about whether it is lawful.

### 3.7 The staged rollout ladder

How a market moves, mapped onto the six verdict values already in section 11 so that nothing new has to be invented at stage 04.

| Step | Verdict after | What has to exist |
|---|---|---|
| **0. Default** | `not launched` | Nothing. **This is the state of every market on earth until someone spends money on it**, and the product must not imply a legal verdict |
| **1. Queued** | `under review` | A business case: why this market, what it is worth, who asked. One line with a named owner |
| **2. Memo** | still `under review` | A written opinion from counsel qualified there, answering the classification question **for our exact mechanics**: paid entry, randomised outcome, withdrawal of a tradable item to Steam. Not for online casino in general |
| **3. Row complete** | `open` or `staged` | Ground, source, date, minimum age, age method, payment rails, and confirmation that our licence permits serving this market. **A row missing any one of them stays `under review`** |
| **4. Signature** | recorded on the row | Counsel writes it, the founder signs it, both names and the date sit in the row. This is what the two new fields in section 1 hold |
| **5. Launch shape** | `staged` where useful | Cohort cap, spend cap or a limited surface. `staged` exists so a first market is not an all-or-nothing bet |
| **6. Decay** | `under review` on a fired trigger | **Scheduled re-verification every twelve months**, plus immediately on any trigger from section 8 |
| **7. Exit** | `closing`, then `blocked` | The procedure in section 7, with the exit window still `[?]` |

**Under an allowlist the blocklist stops growing.** India banned real-money games outright from 1 May 2026, New Zealand closes to all but fifteen licensees from 1 December 2026, Ireland began licensing on 1 July 2026, and Australia is reported to have blocked at least one platform in this category. **None of those needs a row.** They are `not launched` like everywhere else we have not paid to review, and the ten explicit blocks stay explicit only because they carry exposure we already know about. All four dates are search summaries.


## 4. The structural fork, and how it was resolved

**Allowlist or blocklist.** Is a market closed until a row opens it, or open until a row blocks it?

| | Allowlist, closed by default | Blocklist, open by default |
|---|---|---|
| **What it means** | No row, no access. Every open market has been reviewed and documented | Access everywhere except the named list. The list grows after enforcement |
| **Who does it** | Nobody in this category, per `research.md` section 7 | The industry pattern, described there step by step |
| **Cost** | Every market is work before it is revenue. A staged rollout is slow by construction | Exposure is unbounded and unmeasured, and it is discovered by an enforcement letter |
| **What our own research says** | "Maintain a legal review process for each new jurisdiction before enabling access" and "document every jurisdiction access decision with legal basis, not just IP block convenience" | "Do NOT proactively block jurisdictions where enforcement is less certain", recorded as **what competitors do**, not as advice |

**Recommendation: allowlist, staged.** It is what `research.md` section 7 already recommends, it is the only structure in which the confidence field means anything, and the same section names the prize directly: the platform that builds this infrastructure proactively is the first in category to do so.

**This is a business decision with a revenue cost and it is the founder's, with counsel.** It is stated here rather than assumed because the register's whole shape depends on it: an allowlist register with a missing row denies access, a blocklist register with a missing row grants it, and those are the same file behaving in opposite directions.

### Resolved in the research seat, 12 August 2026, and the evidence moved since this section was written

**Decided on 12 August 2026 as `D-23`: allowlist, staged.** Section 3 changed the balance of the argument rather than restating it, and the founder delegated the choice to this seat rather than reopening it.

**One consequence lands on a state rather than on a paragraph, and it is the reason this fork belongs in an IA stage at all.** Under a blocklist the person most likely to meet a refusal meets `blocked`. **Under an allowlist they meet `not launched`**, which is the default for every market nobody has paid to review. Section 11 already separates the two verdicts and section 9 already requires a ground in readable words. What changes is **which of them is the common case**, so node `2.2` draws both and `not launched` is the one it is designed around.

**And the second pass found the property that actually decides it, which is not caution.** **Under a blocklist, a missing row grants access.** So "we have never looked at this market" and "we looked and it is fine" produce identical behaviour in the product, and the confidence field specified in section 1 becomes decoration: nothing reads it, because absence already decided. **Under an allowlist, a missing row denies access, so ignorance is free and only knowledge costs money.** That is the correct direction for a liability that is criminal in at least two of the rows we already hold.

- **Michigan issued 45 cease-and-desist orders in four months to 7 April 2026**, and the release says non-compliance escalates to civil and criminal measures.
- **The Netherlands is fining at EUR 280,000 per week**, and the operator being fined is the one whose blocklist ours was partly copied from.
- **Lithuania blocks by DNS and by payments**, and the only exit from its blacklist is a local licence.
- **Belgium can compel ISPs, Google, Meta and Apple to block**, since June 2024.
- **India banned real-money online games outright** from 1 May 2026, skill or chance alike, with payment blocking and a reported 7,800 platforms shut down. Search summary.
- **New Zealand** closes to all but fifteen licensed platforms from 1 December 2026, and a new offshore entrant is already prohibited. Search summary.
- **Ireland** began issuing remote licences on 1 July 2026. Search summary.

**Four of those changed inside this project's own build window.** A blocklist has to be updated faster than the founder reads the news, by someone whose job that is. An allowlist changes only when we decide to enter somewhere, which is a thing we schedule.

**A blocklist is a bet that you will be told before you are fined.** In 2025 and 2026 the regulators in this file are not writing first in every case, and the one that does write is writing to forty five operators at a time. The allowlist's cost is real and it is a delay. The blocklist's cost is unbounded and it arrives as a number per week.

---

## 5. Evidence, and precedence when it disagrees

A verdict is a rule plus evidence about where a person is. The evidence arrives at four different moments, and it can contradict itself.

| Evidence | Where the product sees it | What it is worth |
|---|---|---|
| **IP address** | `2.1`, at first case interaction | The industry's primary mechanism, `research.md` section 7. Cheap, immediate, and defeated by a VPN in either direction |
| **Payment instrument country** | `4.1`, at the deposit | Strong, and it arrives **after** the person has been through the gate |
| **Identity document** | `2.7`, before funding | Strongest, and it arrives at the same stage as the money |
| **Declared residence** | Wherever we ask | Weakest alone. Useful as the thing a person is held to, rather than as detection |

**Precedence, and it is a rule rather than a preference: the strongest evidence available wins, and later evidence overrides earlier evidence.** The register is what the check runs against; this line is what stops three surfaces from each deciding for themselves. The consequence is the case the product has to handle by design rather than by incident: **a person passes the IP gate, deposits, and then the document or the card says a blocked market.** Section 7 is that case.

**What is not decided here:** which provider does the IP lookup, and its accuracy. That is production, and `[?]`.

---

## 6. Being wrong in both directions

A geo verdict is a probabilistic guess presented as a fact. It will be wrong in both directions, and both need a route.

**Wrongly blocked.** Node `2.2` is a dead end by design, and a dead end for the wrong person is a defect rather than a success. The register requires that the blocked state carry **the ground in readable words and a route to `0.10`**, which holds the appeal pattern from row `G4`: a stated ground and a published response deadline. A person who is genuinely in an open market gets an answer inside that deadline, not a form that goes nowhere.

**Wrongly allowed, and this is the expensive one.** When later evidence says a blocked market, the account is closing rather than blocked: opening and depositing stop, and **the exit stays open**, section 7. Nothing here is invented for the case: it is `G4`'s written ground and frozen-not-zeroed balance, plus node `6.3`'s rule that withdrawal stays open under every boundary, applied to the boundary this register enforces.

---

## 7. Closing a market without trapping the money

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

## 8. Re-verification, because the register decays

Every row carries a last-verified date and a trigger. Two triggers are already known and dated in `research.md` section 7, and both fall inside this project's own timeline:

- **The Digital Fairness Act, expected Q4 2026.** The European Parliament's IMCO Committee called in October 2025 for it to ban loot boxes for minors across the EU. Any EU row's verdict is provisional until that lands.
- **The New York Attorney General action against Valve, filed February 2026, motion to dismiss pending.** A live US matter with no outcome yet, which is one of the reasons the US verdict in our file is `[?] COMPLEX` rather than a list.

**A row whose trigger has fired and whose verdict has not been re-read is `under review`, not `open`.** That is the sixth verdict value, and it exists so that decay is visible in the register rather than silent.

---

## 9. What the person sees, and the asymmetry

The full record is operator-side. What reaches a person is **the verdict and the ground in readable words**, plus what they can still do.

**Four rules on the person-side message:**

1. **A reason, always.** "Not available in your country" with no ground is what the category does, and it reads as arbitrary because it is indistinguishable from arbitrary.
2. **Readable words, not a citation dump.** The instrument belongs in the register. What the person gets is one sentence they can act on.
3. **What is still open, stated in the same breath.** Reading the site, the legal pages, support, and, where an account exists, the withdrawal. A blocked market is a restriction on service, not an ejection from the building.
4. **Never a soft 404 and never an error.** The block is a state with an explanation, not a failure of the site. `0.3` holds the error surfaces and this is not one of them.

---

## 10. SEO and accessibility

**The register has no public URL.** What it constrains is how the blocked state behaves on the surfaces that render it, and node `0.13` owns indexation for those surfaces.

- **The block is a state inside the flow, never a server-level ban on reading the site.** `2.1` fires at first case interaction, not on arrival, `B3` and `D-17`, which means the public surfaces stay readable and crawlable from every market. **This is also what stops a crawler from being served the blocked state and indexing it**, which is a real risk for any product that blocks at the edge by IP.
- **The blocked state returns 200 with content**, not 404 and not 403. It is an answer, not a missing page.
- **The footer's market statement is public and crawlable everywhere**, node `0.2`. It is the only place a person can read our position before meeting a gate.
- **The ground is text**, not an image and not colour alone, so a screen reader reads the reason and not only the refusal.

---

## 11. State matrix: the six verdicts

| Verdict | What the product does | What the person sees | Who can set it |
|---|---|---|---|
| **Open** | Full access | Nothing. The normal case | Counsel, with a cited ground on file |
| **Staged** | Access with a named limit, for example a launch cohort or a capped market | The limit, in words, and what changes it | Founder with counsel |
| **Blocked** | No access to case interaction, deposit or opening. Reading stays open | The ground in readable words, and the route to `0.10` | Counsel, with a cited ground |
| **Not launched** | No access. **Different from blocked and the difference is honest:** we have not reviewed this market, rather than the market forbids us | That we do not serve this market yet, without implying a legal verdict that does not exist | The default under an allowlist |
| **Under review** | Behaves as its previous verdict, and is flagged operator-side | Nothing new | Any fired re-verification trigger, section 8 |
| **Closing** | Deposits and opening stop, withdrawal stays open, section 7 | Notice with the ground, the exit window, and the appeal route | Counsel, or evidence that overrides an earlier verdict |

**Not launched is not a euphemism.** Merging it into blocked would state a legal verdict we do not hold, in a register whose entire purpose is that verdicts are held rather than implied.

---

## 12. What this node does not decide

**Six items closed, four by the research pass in section 3 and two by `D-23` on 12 August 2026. They are struck rather than deleted so the change is visible.**

| Closed | What it was | What settled it |
|---|---|---|
| ~~Nevada's ground~~ | Blocked because two competitors block it | NRS 463.0152 with NRS 463.01862, and the second definition does not need convertibility at all. `[?] text not opened` |
| ~~Idaho, Michigan, Lithuania~~ | Absent from our list with no ground either way | All three now carry a ground and a recommended verdict of blocked. Michigan's was opened live |
| ~~Allowlist or blocklist~~ | The structural fork | **`D-23`: allowlist, closed by default.** The property that decided it is that a missing row grants access under the other one, which makes never having looked behave exactly like having looked |
| ~~Where we may operate from~~ | Never asked in this repository at all | Cyprus issues no licence for a game of chance and becomes a blocked market. Opened live |
| ~~The licence~~ | One decision with the fork above | **`D-23`: the Isle of Man, as a direction and not as a filing.** Curacao, Anjouan, Malta, Costa Rica and no licence at all were each rejected with a reason on the record |
| ~~The first memo batch~~ | Which markets are worth paying counsel for | **`D-23`: three memos in order, and the first is not about a market at all.** M1 the operating structure and its current exposure, M2 Isle of Man licensability of our exact mechanics, M3 the first allowlist row with its target chosen after M2. **The fee per memo is still `[?]`** and three quotes come before the first instruction |

**Still open, and the list is shorter and sharper.**

| Open item | What is missing | Owner |
|---|---|---|
| **The signature** | Every verdict in section 3 is research, not advice. Belgium is criminal and Michigan escalates to criminal, so a licensed lawyer confirms before a market is opened or closed | Counsel, under `D-A` |
| **The classification question** | Is this product a game of chance in each market we intend to open. Legal judgment rather than research, and every row rests on it | Counsel |
| **The licence fees, and only the fees** | The direction is decided by `D-23`. **Not one figure in the comparison was checked against a regulator's own schedule**, and two of the Curacao figures disagree with each other | **Counsel, as the first item in M2.** The direction does not rest on the fee, so a surprise there changes the budget rather than the jurisdiction |
| **Cyprus: what stays and what goes** | Cyprus cannot hold the licence. It can plausibly hold a holding, IP or employment company. Whether a Cypriot contracting entity attracts exposure for gambling offered outside Cyprus is `[?]` | Cypriot counsel plus a tax adviser |
| **The budget, now that the batch is fixed** | `D-23` sets three memos and their order. **The fee per memo is `[?]`: no cited figure was found in this session and inventing one is the failure this project's rules exist to prevent.** Three quotes come before the first instruction | **Founder.** The queue behind M3 stays as researched: Brazil at R$30 million for five years, then Canada outside Ontario, then LatAm as one regional memo, then a small EU state to prove the mechanic |
| **Three grounds whose text was not opened** | Nevada, Idaho and Lithuania were read from search results because those hosts refused this environment. The citations are exact, so this is one pull each | Counsel, or a second pass from a different network |
| **The exit window when a market closes** | Nothing in this repository sets it | Founder with counsel |
| **The geolocation provider and its accuracy** | Detection quality decides how often section 6 runs | Production. `[?]` |
| **Minimum age and age method per open market** | Two markets in our file carry a value and both are blocked, so the first open market will be the first row that needs one | Counsel, as each market opens |
| **Whether this category is gambling** | Unsettled and varies by jurisdiction, `CLAUDE.md`. The register is built so that the answer is a field rather than an assumption | Nobody. It stays open by design |

**And what belongs elsewhere.** The wording of the blocked message: stage 05. How the blocked state looks: stages 06 and 07. Where the market statement sits in the footer: node `0.2`, already specified. What the gate asks: node `2.1`, which reads three fields from here rather than holding its own constants.
