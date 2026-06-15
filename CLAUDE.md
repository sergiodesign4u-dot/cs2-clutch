# CS2 Clutch - Product Research Sprint

## Product Overview

CS2 Clutch is the working placeholder name for a redesign of an existing live CS2 skin platform. The baseline being redesigned is daddyskins.com. Brand assets (logo, brand colors) from the existing product are kept and are out of scope for this research phase.

The platform is a dark, heavily animated, responsive web experience for the CS2 community. Players open cases, fight case battles, perform upgrades, exchange skins in-platform, and withdraw real CS2 skins. The core differentiator hypothesis is provable fairness plus better user conditions (bonus mechanics, transparent odds, fast withdrawal) relative to the current market.

Platform: responsive web, dark theme, high motion, designed to feel alive and electric without sacrificing clarity or trust.

## Baseline

daddyskins.com is the existing product being redesigned. It is studied as-is in Phase 3. This research sprint does not touch or assume anything about the live production codebase.

## Core Scope (in focus for this sprint)

- Case opening
- Case battles
- Upgrades
- In-platform skin exchange
- Real skin withdrawal

Out of scope: general marketplace (buy/sell listings), trading bots outside of withdrawal, third-party market integrations beyond withdrawal flow.

## Jobs to Be Done (JTBD)

Structured analysis. Six candidate jobs were generated, scored by frequency, intensity, and willingness to pay, then narrowed to one primary and two secondary.

### Candidate Jobs Scored

| Job | Frequency | Intensity | WTP | Score |
|-----|-----------|-----------|-----|-------|
| Get a specific skin I cannot easily afford at market price | Medium | High | High | 8/10 |
| Experience the rush and ritual of opening a case | Very High | Very High | Medium-High | 9/10 |
| Turn a small balance into a better skin through smart play | High | High | Medium | 8/10 |
| Compete against other players in real-time (battles) | Medium | Very High | High | 8/10 |
| Find entertainment in the CS2 ecosystem between play sessions | High | Medium | Low-Medium | 6/10 |
| Prove fairness and trust to myself before committing real money | Medium | High | n/a (pre-purchase) | 7/10 |

### Primary JTBD

When I am between CS2 sessions and want more excitement in the ecosystem, I want to open a case with a real chance at a skin I actually want, so that I get the rush of a drop and possibly end up with something worth having.

### Secondary JTBD 1

When I have a skin or balance I am willing to risk, I want to fight a case battle against real opponents, so that I can win their loot and feel the competitive high of winning under pressure.

### Secondary JTBD 2

When I have accumulated some balance or low-tier skins, I want to use upgrades or exchanges to work toward a higher-value skin, so that I feel like smart play is rewarded and the platform is not just luck.

## Target Audience - Motivation Segments

Segmented by motivation, not demography. These are seeds to validate in research.

### The Thrill Seeker (Primary)
Wants the dopamine loop of opening. The ritual, the animation, the reveal. Outcome matters less than the experience of playing.

### The Collector (Secondary)
Has a specific skin in mind. Will use cases and upgrades strategically to reach a target item. Values odds transparency so they can calculate expected cost.

### The Grinder (Secondary)
Sees the platform as a game where skill (upgrade routing, battle timing, case selection) can tilt outcomes in their favor. Wants to withdraw and see real value out.

## MVP Feature Set (Redesign Scope)

1. Home / landing - value proposition, trust signals, live activity feed
2. Case opening - full reveal experience with provable fairness
3. Case battles - lobby creation, live battle, results
4. Upgrades - item-to-item upgrade with odds display
5. In-platform exchange - skin-to-balance or skin-to-skin
6. Withdrawal - real CS2 skin payout, status tracking
7. Provable fairness page - mechanism explanation, verification tool
8. Responsible play page - limits, self-exclusion, links
9. Age-gate and geo-block layer

## Business Model Hypothesis

Hypothesis - to be validated against competitor data in Phase 3.

Primary revenue: house edge embedded in case math. Each case has a defined expected value below 100% of cost (the edge). The platform earns the difference across volume.

Secondary: case battles run on the same case math, so the house edge applies to all skins in the battle pool. The platform may take an additional fee on the battle pot (to be validated against market norms).

User condition levers (differentiators):
- Deposit bonuses: percentage match on first deposit, or bonus cases
- Referral bonus: revenue share or balance credit for referred users
- Rakeback-style mechanic: return a percentage of edge to active users based on volume wagered (hypothesis - rare in this category, could be a differentiator)
- Better odds transparency: show expected value per case clearly, a trust signal that also helps the Collector segment

Real-skin withdrawal is the payoff. The value loop is: deposit money, open cases, withdraw real skins to Steam inventory.

All of the above are hypotheses. Revenue structure, bonus rates, and fee levels must be validated against competitor research before any targets are set.

## Responsible Play and Compliance (First-Class Constraint)

ASSUMPTION: Whether case opening with real-money deposits and withdrawal of tradeable skins constitutes gambling is not settled universally. It varies by jurisdiction and has triggered regulatory action in some markets (UK, Netherlands, Belgium - to be researched and cited in Phase 3 and 7).

Compliance is not an afterthought. Required product constraints:

- Age verification gate before any case interaction (18+ or 21+ depending on jurisdiction)
- Geo-blocking layer with regional legal research informing which countries are accessible at launch
- Responsible play tooling: deposit limits, session limits, self-exclusion, cool-down
- Provable fairness mechanism as a legal and trust requirement, not just a feature
- Regional rollout plan: start in permissive or clearly legal jurisdictions, expand with legal review

The staged regional path must rest on cited legal research, not assumptions.

## Design Principles

1. Trust is the product. Every visual and interaction decision must first ask: does this help the user believe the drop is honest? Provable fairness is not a footnote - it is the brand.
2. Motion in service of emotion, not decoration. Animations exist to amplify the reveal moment, signal outcomes, and make the platform feel alive. Motion that does not serve a clear emotional or informational purpose gets cut.
3. Clarity at every risk moment. When a user is about to spend money, odds, cost, and expected value must be visible and legible. Never bury cost in excitement.
4. Dark and electric, never heavy. The visual tone is high-energy, neon-accented, premium dark - not gloomy or oppressive. The platform should feel like the main stage, not a back room.
5. Speed as trust. Fast load, fast reveal, fast withdrawal status. Lag feels dishonest in a platform built on randomized outcomes.

## Tech Stack Hypothesis

Hypothesis - to be validated and refined before wireframe phase.

- Frontend: React or Next.js, TypeScript, Tailwind CSS, Framer Motion or GSAP for animation
- Backend: Node.js or Go (high concurrency for battle rooms and live state)
- Real-time: WebSockets (battle rooms, live feed)
- Provable fairness: server-side seed + client seed + nonce, SHA-256 hash, verifiable on-chain or via public tool
- Steam integration: Steam Web API for skin inventory and withdrawal
- Payments: crypto-friendly processor plus card options, regional compliance layer
- Geo / age: IP-based geo detection plus ID verification partner (e.g. Veriff, Jumio)
- Hosting: cloud-native, CDN-first, sub-200ms global response target

## Timeline

This is a research sprint. Phases 0 through 7 produce the research foundation for the wireframe phase that follows. A People and JTBD phase was completed after Phase 7.

| Phase | Deliverable | Status |
|-------|-------------|--------|
| 0 | Brief (CLAUDE.md, README) | Done |
| 1 | Product Model v1 (research/product-model.md) | Done |
| 2 | AARRR Model (research/aarrr.md) | Done |
| 3 | Competitive Analysis (research/competitive-analysis.md) | Done |
| 4 | Benchmark: Trust and Fairness (research/benchmark.md) | Done |
| 4.5 | Strategy v_refresh (research/strategy.md) | Done |
| 5 | UX Patterns (research/ux-patterns.md) | Done |
| 6 | Master Synthesis (research/master-research.md) | Done |
| 6.5 | Quality Gate (research/quality-check.md) | Done |
| 7 | Research HTML (research.html) + GitHub Pages | Done |
| People + JTBD | Personas (research/personas.md, personas.html), JTBD (research/jtbd.md, jtbd.html), live verification (research/live-research.md), 4 founder decisions locked in research/strategy.md | Done |
| Wireframes | Next phase, follows research | Not started |
