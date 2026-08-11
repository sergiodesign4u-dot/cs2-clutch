# Lean UX Canvas v2

Framework: Jeff Gothelf, Lean UX Canvas v2. Populated from the CS2 Clutch research sprint, June 2026, v_refresh.

**Shown on:** `research/research.html`, section "Lean Canvas" (`#lean-canvas`), registered in `NAV_SECTIONS`.

**Provenance of this file.** The canvas was authored in August 2026 during the structure migration by extracting it, cell for cell, from `research.html`, where it had been living as html with no markdown source. Nothing was added, removed or reworded in the extraction. This inverts the ownership back the right way round: markdown is the source, html is the visualisation.

**Edited after extraction by the stage 01 critique, August 2026.** The critique ran on two instruments and its findings are logged in `docs/decisions.md` (D-10). What changed here: unsourced claims carry `[?]`, and cells 7 and 8 were rewritten because the premise under the old riskiest assumption had been killed in `research.md` section 9 and never propagated. The pre-critique wording of cells 7 and 8 is preserved in D-10.

One-page glance view of the research foundation. It overlaps with section 8 of `research.md` (Conclusions) by design: this is the glance, that is the detail.

---

## 1. Business problem

The CS2 skin case-opening market is mature but undifferentiated on trust. Every competitor claims provably fair; none has a named third-party RNG auditor, none has robust age verification, and all have visible bot activity in live feeds. The platform being redesigned (daddyskins.com) scored 15/40 on the trust benchmark, the lowest in category. Its highest-leverage gap is a login-gated provably fair page. The page is already built, since the route exists and redirects rather than returning 404; the cost of unlocking it is [?] unknown from the outside.

## 2. Business outcomes

| Outcome | Target |
|---|---|
| Activation | `[?]` 8-15% visitor-to-first-deposit rate |
| Retention | `[?]` D7 35%+, 3+ sessions per week |
| Revenue | 7-10% GGR margin on mini-games (confirmed). Case GGR `[?]` unknown, must be modelled |
| Trust | First operator with a named third-party RNG auditor. `[?]` 60%+ withdrawal completion rate |

## 3. Users

| Segment | Profile |
|---|---|
| Thrill Seeker (primary) | [?] Age 18-25 peak. CS2 player, skin culture, streamer-influenced. Experience over outcome. |
| Grinder (secondary) | [?] Age 20-32. Regular user, tracks balance, seeks rakeback, wants to withdraw real value. |
| Collector (tertiary) | [?] Age 20-35. Has a specific skin target, researches odds before spending. Served by the transparency baseline. |

The age ranges carry [?] because their root, `strategy.md` line 30, names a category of evidence ("estimates from platform audience data and review aggregator demographics") rather than a source, and even that hedge did not survive into this canvas.

**Open divergence, not resolved here.** These three motivation segments predate stage 02. `personas.md` later split the audience behaviourally into four personas: The Opener (primary), The Accumulator, The Researcher, The Battler. The two models are not the same cut of the same people and the mapping between them has never been written down. `personas.md` has exactly one writer and it is not this file, so the divergence is recorded and carried, not patched. Owner: the stage 01 critique round.

## 4. User outcomes and benefits

- **Thrill Seeker:** the rush of a genuine reveal with a real shot at something exciting, without feeling manipulated.
- **Grinder:** maximise withdrawal value through smart play and loyalty rewards on a platform that pays out reliably.
- **Collector:** make an informed decision about cost versus market before committing. Transparent odds, no hidden math.

## 5. Solutions (MVP scope)

- Home and landing with live drops, trust signals and withdrawal info visible pre-login
- Case opening: linear reveal with rarity-differentiated animation; pre-round hash visible at spin trigger; post-reveal verification link
- Case battles: 2-player lobbies first; labelled bots only as a fill of last resort
- Upgrades: odds visible at each step, same provably fair model
- In-platform exchange and withdrawal: Steam skins, commission-free, status tracking
- Provably fair page: public, no login, working verifier, per-game-mode documentation
- Responsible play page: deposit limits, self-exclusion, identity-based age gate
- Age gate and geo-block: Belgium, Netherlands, Germany, UK, Washington, Nevada blocked at launch

**Superseded in part.** This cell is the v_refresh MVP, which carried five games. The round 1 scope decided in August 2026 is narrower: home, case opening, registration and account, deposit, withdrawal, provably fair, age gate and geo block. Case battles and upgrades moved to LATER. The authoritative scope is in `CLAUDE.md` and `docs/decisions.md` (D-05); this cell is kept as written because a canvas records what was believed at the time it was drawn.

**And superseded in detail, from 11 August 2026.** Where this cell names a solution, the current version of that solution is a numbered row in `cjm-to-be.md`, section "Backlog and MVP core", which traces every capability to a barrier, a job or a named constraint. Four of these bullets were sharpened there rather than kept: "trust signals visible pre-login" became A1, A2 and A4; "rarity-differentiated animation" became E1, E2 and E3; "identity-based age gate" became B1 to B3 with the method left open as decision `D-A`; "deposit limits" became C2 and C5. One bullet has no verdict anywhere and the CJM stage found the silence rather than created it: the **responsible play page** is named here and is absent from both the round 1 list and the LATER list in `CLAUDE.md`. Its tooling survives as C5, and the page itself was restored to round 1 by founder decision on 11 August 2026, which took round 1 from seven surfaces to eight. This cell named a page that had been deleted by silence, and the CJM stage is what found the silence.

## 6. Hypotheses

- If the PF page is public with a working verifier, then trust score improves from 1/5 to 4/5 and dwell time increases
- If rarity-differentiated animation ships with no near-miss, then win sharing rates exceed flat-reveal competitors
- If battle lobbies fill organically under 60 seconds, then D7 retention matches the Clash.gg benchmark
- If a 10-15% first-deposit bonus ships with transparent wagering terms, then activation matches competitors
- If identity-based age verification is built, then it functions as both a compliance mechanism and a trust signal that converts sceptical visitors

## 7. Riskiest assumption to learn first

Institutional trust signals placed in the hero, a named third-party RNG auditor badge plus a visible Trustpilot score, move a first-time visitor into the deposit flow at a rate meaningfully above what the same hero space achieves with the reveal animation alone.

Quoted from `strategy.md` section 4, which is the single owner of this statement. It is not restated in the canvas's own words: three files previously carried three different wordings under the same label.

**Counter-evidence.** Hellcase holds the largest audience in the category (2M MAU, 150,000 daily opens) with no public PF page, an 82.1% tested RTP and no formal licence. Be exact about what this shows and what it does not: it shows scale is reachable without trust infrastructure; it does not show that a trust badge fails to convert, because no platform in the set has ever run one. Source: https://esports.gg/news/counter-strike-2/what-is-hellcase/, https://skincasereviewer.com/reviews/hellcase.

**One phrase deliberately removed.** Earlier versions of this paragraph called Hellcase "the lowest trust score in category". No such score exists: `benchmark.md` line 7 removed Hellcase from the benchmark pending dedicated research, and the lowest score actually assigned is daddyskins at 15/40. The argument stands on the three sourced attributes above and does not need the ranking.

## 8. Smallest test

Hero A/B.

- **Variant A: reveal animation plus an institutional trust badge unit in the same hero (auditor name and Trustpilot score)**
- **Variant B: reveal animation alone**

Measure click-through into the deposit flow, not page engagement. If Variant A does not produce measurably higher deposit intent, the trust differentiation thesis fails at acquisition and is repositioned as a retention and compliance play rather than a primary acquisition argument.

The earlier version of this test compared trust-first copy ("check the result yourself") against experience-first copy. It was retired because its wording tested self-verification, which `research.md` section 9 had already killed, and because Decision 1 had already chosen the hybrid hero. The old wording is preserved in `docs/decisions.md` (D-10).
