# User flows

Stage 03a, step 4, written on 11 August 2026.

**Traced onto the To-Be phases, not derived from jobs alone.** The skeleton of every route below is the eight phase path in `research/docs/cjm-to-be.md`, T1 to T8. The decision points and the dead ends are the As-Is barriers from `research/docs/cjm-as-is.md`, because a barrier is exactly a place where a real person stopped. Screen names come from the concept sitemap in `sitemap.md` and no flow introduces a screen that does not exist there.

**Colour says what the outcome is, not what the screen is.**

- **Green:** the ends of the happy path, the start and the closed job. Intermediate steps stay neutral.
- **Red:** a real dead end, a node with no path onward to the goal.
- **Grey:** everything between the ends. Intermediate screens, decision diamonds, loading, empty, and errors that recover with an arrow back.

**Three red nodes in this file are deliberate.** The rule is applied mechanically: no path to the goal means red, whatever the intent. The market exit in flow 1, the ceiling stop in flow 2 and the upheld restriction in flow 3 are all designed outcomes rather than defects, and each is explained under its diagram. Colouring them grey to make the map look healthier would be the same dishonesty the product is built against.

**Arrow colour is left out on purpose.** The pack makes node colour mandatory and arrow colour a bonus, and `linkStyle` indexes by position, so one edit silently repaints the wrong path. Node classes carry the whole signal here, which is the escape the pack itself names.

---

## Flow 1. Main job: arrive, open, get the thrill

`jtbd.md:17`. Primary persona The Opener. Covers phases T1, T2, T3, T5, T6 and T7.

```mermaid
flowchart TD
    Start(["Sees someone else's win on a clip"]) --> Home["A1 Home"]
    Home --> Real{"Does this place survive a second look?"}
    Real -->|no| Leave["Dead end: leaves still pre-suspected, B1-1 unanswered"]
    Real -->|"buys on the market instead"| Market["Leaves through our own outbound market link, A1"]
    Real -->|yes| Case["C2 Case screen, phase 1 choosing"]
    Case --> Gate["B1 Age and geo gate, fires at first case interaction"]
    Gate --> Geo{"Is this market open?"}
    Geo -->|no| Blocked["Dead end: geo blocked, with the legal ground cited, B4"]
    Geo -->|yes| Age{"18 or over, declared?"}
    Age -->|no| Under["Dead end: under age, no route onward"]
    Age -->|yes| Read["Reads chance, current value, tested RTP and EV at this cost, D2 and D4"]
    Read --> Stock{"Free units left on the item they came for?"}
    Stock -->|no| Out["Empty: the item shows zero free units before the open, never after, D1"]
    Out --> Case
    Stock -->|yes| Funds{"Anything to open with?"}
    Funds -->|no| Signin["B2 Sign in with Steam"]
    Signin --> SteamWait["Loading: Steam OpenID redirect out and back"]
    SteamWait --> SteamOk{"Did Steam return?"}
    SteamOk -->|no| SteamErr["Error: readable Steam login failure, B5"]
    SteamErr --> Signin
    SteamOk -->|yes| Credit["Bounded no-deposit starter credit granted, I1"]
    Credit --> Open["C2 phase 2, the open. Round hash visible at the spin trigger, E4"]
    Funds -->|yes| Open
    Open --> Reveal["Loading: the reveal renders the settled roll and computes nothing again, E1"]
    Reveal --> Outcome["C2 phase 3, the outcome. Instance value receipt, F1"]
    Outcome --> Win(["Job closed: the rush landed and the result is understood"])
    Outcome --> Share["G1 Public result, one-tap share, F4. Ninth surface, scope question open"]

    classDef success fill:#12351f,stroke:#4ade80,color:#eafff9;
    classDef dead fill:#3a1618,stroke:#e5484d,color:#ffd7d7;
    classDef neutral fill:#0f0c35,stroke:#5a5a5a,color:#dddddd;
    class Start,Win success;
    class Leave,Market,Blocked,Under dead;
    class Home,Real,Case,Gate,Geo,Age,Read,Stock,Out,Funds,Signin,SteamWait,SteamOk,SteamErr,Credit,Open,Reveal,Outcome,Share neutral;
```

**ACTIVATION NODE: `Outcome`.** `aarrr.md:114` defines activation as users who arrive and complete at least one case open, so the promised value first lands when the reveal resolves and the receipt appears. It is a concrete node in the diagram rather than an implication.

**And it is a route defect, named as the pack requires.** A first-time visitor touches four distinct screens before that node: Home, the age gate, the case screen and sign in. The threshold is three. **The product defers its first value further than the research promised**, and Related Job 2 at `jtbd.md:42` asks for the entire open-to-result experience in under 60 seconds without a confusing step, which a Steam OpenID round trip is not.

**The obvious fix is already rejected on the record, so this is carried rather than solved.** A free demo reveal on identical odds and seeds was dropped in the T2 divergence, `cjm-to-be.md:47`, on the grounds that it argues our case by demonstrating the sceptic is right about the odds and it spends the reveal, the one thing we sell, before anyone has decided anything. Reopening that here would be re-litigating a converged decision. Handed to step 6, the defect audit, with the constraint that any fix must not spend the reveal.

**Decisions in this flow.** Does this place survive a second look, T1 and T2, barrier `B1-1`. Is this market open, `B4`. Is the person 18 or over, `B3`. Are there free units on the wanted item, `B8-1`. Is there anything to open with, T4. Did Steam return, `B3-1`.

**States in this flow.** Empty: the item at zero free units, which returns to the case screen. Error: a readable Steam login failure, which returns to sign in. Loading: the Steam redirect, and the reveal itself.

**The red node the map put there on purpose.** `Market` is the outbound link to buy the item on the market instead, capability A1. It has no path to our goal, so the rule paints it red. T2 accepted that cost in writing: some share of visitors will click it and buy instead, and that is the price of the claim being believable. A map that hid this exit would be hiding the capability that makes the pre-login page credible.

**Two red nodes that are the compliance layer working correctly.** `Blocked` and `Under` are people the product must not serve. They are dead ends in the diagram and successes in the constraint.

---

## Flow 2. Funding the account and setting the ceiling

Phase T4. **This flow closes no job and says so.** Its parents are barriers `B4-3`, `B4-1` and `B7-4`, and `jtbd.md:201` records that deposit closes none of the three core jobs and is justified by documented barriers and compliance. It gets a flow because it is a locked round 1 surface with real dead ends, not because a job asked for it.

```mermaid
flowchart TD
    D0(["Starter credit is spent and they want to keep opening"]) --> Dep["D1 Deposit"]
    Dep --> Hit{"Spend ceiling already reached this period?"}
    Hit -->|yes| Stop["Deposits stop. Opening from balance and withdrawal stay fully open, C2"]
    Hit -->|no| Ver{"Identity verified?"}
    Ver -->|no| Ident["B3 Identity verification, before funding and never on the withdrawal route"]
    Ident --> IdWait["Loading: pending review, hours rather than seconds"]
    IdWait --> IdOk{"Passed?"}
    IdOk -->|no| IdFail["Dead end: verification failed. No funding route, and no money was at risk"]
    IdOk -->|yes| Amount["Chooses an amount in one real currency, no coin denomination, C1"]
    Ver -->|yes| Amount
    Amount --> Ceiling["Sets a spend ceiling for a named period, pre-filled, must be accepted or changed, C2"]
    Ceiling --> Threshold["The sum required to withdraw is stated here and can never rise, C4"]
    Threshold --> Pay["Loading: payment in progress"]
    Pay --> Credited{"Credited?"}
    Credited -->|"not yet"| Pending["Crediting shown as a state with a named timer, C3"]
    Pending --> Credited
    Credited -->|failed| PayErr["Error: payment declined. Ceiling and threshold preserved"]
    PayErr --> Amount
    Credited -->|yes| Bal(["Balance available, back to the case screen"])

    classDef success fill:#12351f,stroke:#4ade80,color:#eafff9;
    classDef dead fill:#3a1618,stroke:#e5484d,color:#ffd7d7;
    classDef neutral fill:#0f0c35,stroke:#5a5a5a,color:#dddddd;
    class D0,Bal success;
    class Stop,IdFail dead;
    class Dep,Hit,Ver,Ident,IdWait,IdOk,Amount,Ceiling,Threshold,Pay,Credited,Pending,PayErr neutral;
```

**Decisions.** Has the ceiling been reached this period, `B7-4`. Is identity verified, `B8-4`. Did the payment credit, `B4-3`.

**States.** Loading: identity review, which is the asynchronous state only the document KYC branch of `D-A` has, and payment in progress. Error: a declined payment that returns to the amount with the ceiling and threshold intact. Pending: crediting with a named timer, which is the whole of `C3`.

**The second deliberate red node.** `Stop` is the ceiling doing its job. It is red because this flow's goal is more balance and there is no path to it this period. It is not a failure state: opening from existing balance and withdrawing both stay open, which `cjm-to-be.md:66` specifies. T4 also carries a hard design constraint that belongs beside this node and is repeated here so it does not get lost: **the ceiling may never acquire completion mechanics, streaks or a session score**, because at that point it stops being a boundary and becomes a reason to keep going.

**One route this flow proves rather than draws.** There is no verification branch anywhere on the withdrawal route, `B2`. Its absence in flow 3 is the evidence, and `cjm-to-be.md` says the same thing: it is proven by code review rather than by a metric.

---

## Flow 3. Related Job 5: withdraw and get what I earned

`jtbd.md:69`. Phase T8, the floor of the entire As-Is map at -5.

```mermaid
flowchart TD
    W0(["Holds a skin worth taking out"]) --> Inv["E1 Account and inventory"]
    Inv --> Rec["Every item carries its instance value receipt, F2"]
    Rec --> Limits["Named limits stated before entry: blocked countries, Steam trade holds, Steam-side bans, G5"]
    Limits --> Elig{"Eligible to withdraw?"}
    Elig -->|no| NotYet["Empty: the limit is met before the withdrawal rather than inside it, G5"]
    NotYet --> Inv
    Elig -->|yes| Start2["E2 Withdrawal, with the public clock"]
    Start2 --> Clock["Named states, per-state timer, each labelled waiting on us, Steam or you, G1"]
    Clock --> Health{"Steam API healthy?"}
    Health -->|no| Degraded["Live degraded banner driven by the health probe, G2"]
    Degraded --> Clock
    Health -->|yes| Review{"Is the account restricted?"}
    Review -->|yes| Notice["Written notice with a stated ground. Balance frozen, never zeroed, G4"]
    Notice --> Appeal["Appeal with a published response deadline, G4"]
    Appeal --> Resolved{"Appeal upheld?"}
    Resolved -->|no| Refused["Dead end: the restriction stands, with its ground on the record"]
    Resolved -->|yes| Send["Trade offer sent to Steam, commission free, G6"]
    Review -->|no| Send
    Send --> Accept{"Offer accepted in Steam?"}
    Accept -->|expired| Expired["Error: the offer expired, resend from the same record"]
    Expired --> Send
    Accept -->|yes| Done(["Job closed: the item is in the Steam inventory"])

    classDef success fill:#12351f,stroke:#4ade80,color:#eafff9;
    classDef dead fill:#3a1618,stroke:#e5484d,color:#ffd7d7;
    classDef neutral fill:#0f0c35,stroke:#5a5a5a,color:#dddddd;
    class W0,Done success;
    class Refused dead;
    class Inv,Rec,Limits,Elig,NotYet,Start2,Clock,Health,Degraded,Review,Notice,Appeal,Resolved,Send,Accept,Expired neutral;
```

**Decisions.** Eligible to withdraw, `B8-3` and `G5`. Steam API healthy, `B8-2`. Account restricted, `B8-3`. Offer accepted in Steam, which is outside our system.

**States.** Empty: a limit met before entry rather than inside the withdrawal, which is the whole point of `G5`. Error: an expired trade offer, recoverable from the same record. Loading is carried by the clock itself, which is why there is no separate loading node here: every wait in this flow is a named state with a timer rather than a spinner.

**The third deliberate red node.** `Refused` is an upheld restriction. It has no path to this flow's goal and it is red for that reason, but `G4` changes what kind of red it is: a written ground, a frozen rather than zeroed balance, and an appeal that already ran with a published deadline. The As-Is barrier `B8-3` is winning being treated as suspicious behaviour with no explanation. The dead end remains; the silence does not.

**No verification appears anywhere in this flow.** That absence is capability `B2` and it is the direct answer to `B8-4`, verification ambushes at the exit, pattern of 5.

---

## Flow 4. Related Job 3: verify the outcome after I open

`jtbd.md:51`. Primary motivation for The Researcher, secondary for The Opener. Two entries, one of them from outside the product with no account at all.

```mermaid
flowchart TD
    V0(["Got a result they did not expect, high or low"]) --> Out2["C2 phase 3, the outcome"]
    Out2 --> Link["Post-reveal verification link, F3"]
    Link --> PF["A2 Provably fair, public, no login, H1"]
    V1(["Arrives from outside with no account at all"]) --> PF
    PF --> Explain["Reads what is proven and what is not, the D-14 limit stated on the page itself"]
    Explain --> Verify["Pastes the round: server seed, client seed, nonce"]
    Verify --> Compute["Loading: the verifier recomputes from real seeds"]
    Compute --> Match{"Does it recompute to the same result?"}
    Match -->|no| Broken["Dead end: our own proof failed. Nothing in the product recovers this"]
    Match -->|yes| Proven["Proven: the roll was not altered after the click"]
    Proven --> Doubt{"Was the doubt about the weight table?"}
    Doubt -->|no| Closed(["Job closed: the outcome is confirmed unmanipulated"])
    Doubt -->|yes| Counter["Observed rate counter beside the published percentage, D3, plus published tested RTP, D4"]
    Counter --> Closed

    classDef success fill:#12351f,stroke:#4ade80,color:#eafff9;
    classDef dead fill:#3a1618,stroke:#e5484d,color:#ffd7d7;
    classDef neutral fill:#0f0c35,stroke:#5a5a5a,color:#dddddd;
    class V0,V1,Closed success;
    class Broken dead;
    class Out2,Link,PF,Explain,Verify,Compute,Match,Proven,Doubt,Counter neutral;
```

**Decisions.** Does the round recompute to the same result. **Was the doubt about the weight table**, which is the structural expression of decision `D-14`.

**States.** Loading: the recomputation. There is no empty state, because the page opens and explains before it asks anyone to paste anything.

**This flow draws a decision instead of describing it.** `cjm-to-be.md:109` calls it the most important rejection on the map: a commit-reveal scheme proves the outcome was not altered after the click, and says nothing about whether the weight table is the one we published, which is what users actually dispute. The `Doubt` diamond is that sentence as a route. The verifier closes one branch, and the other branch is closed by `D3` and `D4` on the case screen, which are different capabilities on a different surface. Anyone who later proposes that the verifier answers `B7-2` has to delete a node to do it.

**The dead end here is ours, not the user's.** `Broken` is the only node in this file where the product itself has failed rather than the person. It has no recovery by design: a verifier that disagrees with the ledger is not a UX state, it is an incident.

---

## What these flows changed in the concept sitemap

Nothing. Every screen node here already existed in `sitemap.md` and no flow needed one that was missing, which is the outcome step 2's second slice was supposed to produce and did.

**One screen appears in a flow while its scope is unsettled.** `G1 Public result` is drawn as a branch off the outcome in flow 1 and carries the scope question raised at step 2: it is a ninth public surface against a round locked at eight. It stays drawn and marked until the founder answers.
