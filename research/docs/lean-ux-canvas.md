# Lean UX Canvas v2

Framework: Jeff Gothelf, Lean UX Canvas v2. Populated from the CS2 Clutch research sprint, June 2026, v_refresh.

**Shown on:** `research/research.html`, section "Lean Canvas" (`#lean-canvas`), registered in `NAV_SECTIONS`.

**Provenance of this file.** The canvas was authored in August 2026 during the structure migration by extracting it, cell for cell, from `research.html`, where it had been living as html with no markdown source. Nothing was added, removed or reworded in the extraction. This inverts the ownership back the right way round: markdown is the source, html is the visualisation.

One-page glance view of the research foundation. It overlaps with section 8 of `research.md` (Conclusions) by design: this is the glance, that is the detail.

---

## 1. Business problem

The CS2 skin case-opening market is mature but undifferentiated on trust. Every competitor claims provably fair; none has a named third-party RNG auditor, none has robust age verification, and all have visible bot activity in live feeds. The platform being redesigned (daddyskins.com) scored 15/40 on the trust benchmark, the lowest in category. Its highest-leverage gap, a login-gated provably fair page, would cost one configuration change to fix.

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
| Thrill Seeker (primary) | Age 18-25 peak. CS2 player, skin culture, streamer-influenced. Experience over outcome. |
| Grinder (secondary) | Age 20-32. Regular user, tracks balance, seeks rakeback, wants to withdraw real value. |
| Collector (tertiary) | Age 20-35. Has a specific skin target, researches odds before spending. Served by the transparency baseline. |

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

## 6. Hypotheses

- If the PF page is public with a working verifier, then trust score improves from 1/5 to 4/5 and dwell time increases
- If rarity-differentiated animation ships with no near-miss, then win sharing rates exceed flat-reveal competitors
- If battle lobbies fill organically under 60 seconds, then D7 retention matches the Clash.gg benchmark
- If a 10-15% first-deposit bonus ships with transparent wagering terms, then activation matches competitors
- If identity-based age verification is built, then it functions as both a compliance mechanism and a trust signal that converts sceptical visitors

## 7. Riskiest assumption to learn first

Users who care about trust infrastructure will discover this platform through it, convert into depositors because of it, and stay longer because of it, at a rate meaningfully above what the same effort would achieve spent on a bigger first-deposit bonus, more streamers, or a Rain-style ambient mechanic.

**Counter-evidence.** Hellcase has 2M MAU and 150,000 daily opens with the lowest trust score in category: no public PF page, 82.1% tested RTP, no formal licence. If scale can be reached with minimal trust investment, then trust infrastructure is a regulatory hedge and a retention tool but not a primary acquisition driver. The product strategy still requires it; the acquisition strategy must not depend on it alone.

## 8. Smallest test

Landing page A/B.

- **Variant A, trust-first:** "the only platform with a named, verified RNG auditor, check the result yourself"
- **Variant B, experience-first:** "the most electric case opening on the web"

Measure click-through to the deposit flow, not page engagement. If Variant A does not produce measurably higher deposit intent, the trust differentiation thesis fails at acquisition and must be repositioned as a retention and compliance play rather than a primary acquisition argument.
