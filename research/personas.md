# Personas: CS2 Skin Platform Redesign

**Version:** 1.0
**Date:** June 2026
**Built from:** research/master-research.md, research/strategy.md, research/ux-patterns.md, research/aarrr.md, research/competitive-analysis.md

Every claim is marked FACT (cited source) or HYPOTHESIS ([?]).

---

## Section 1: People Observations from Research

### What we know from the research

**Who is on these platforms**

FACT - Age range: The primary audience is 18-30, skewing 18-25 at the core. Platform audience data and review aggregator demographics confirm this. Source: research/strategy.md, Segment A profile.

FACT - CS2 player base: Users arrive as active CS2 players who follow skin culture and streamers. They are already embedded in the CS2 ecosystem before arriving at a case platform. Source: research/strategy.md, Segment A profile.

FACT - Scale signals: Hellcase reaches approximately 2 million monthly active users and 150,000+ daily case opens. Key-Drop reaches 2.4 million monthly visitors (December 2025). Source: https://esports.gg/news/counter-strike-2/what-is-hellcase/, research/competitive-analysis.md.

FACT - Geographic concentration: Key-Drop's top demographics are Brazil, Spain, and Argentina (Latin American skew). Clash.gg is English-language primary. Multiple platforms block Netherlands, Belgium, and Germany due to enforcement. Source: research/competitive-analysis.md.

FACT - Gender: [?] No gender breakdown is publicly available for any competitor. The CS2 audience skews heavily male, but no platform-specific data exists. Remains unknown.

**What drives them**

FACT - The reveal is the product: Every major competitor leads with win animations, live drop feeds, and big-win celebrations. No competitor leads with odds tables or EV calculators. This is design consensus, not an assumption. Source: platform design review of Clash.gg, Key-Drop, Hellcase, CSGORoll, skin.club (June 2026). Reference: research/strategy.md.

FACT - Social proof is the trigger: Users arrive from streams, clips, Discord links, and win shares. The platform does not create the desire to open - it captures desire already created externally. Source: research/ux-patterns.md, Pattern 1 (The Opener).

FACT - Competitive tension matters: Battles are the feature most associated with high-stakes engagement and re-engagement. Lobby fill time is the single biggest retention risk for battle mode - waits over 60-90 seconds cause users to abandon. Source: research/ux-patterns.md, Pattern 3 (The Battler).

FACT - Rakeback is expected: Gamdom offers 15% instant rakeback with zero wagering requirements. DatDrop offers DatPoints (5 pts/$1, redeemable for cases up to $1,800 value). Key-Drop has Daily Case leveling. Grinder-oriented users see loyalty mechanics as table stakes. Source: research/strategy.md, research/competitive-analysis.md.

FACT - Withdrawal is the payoff: Steam Market's 15% fee and wallet lock (no cash withdrawal) are the primary conversion argument for case platforms. Reliable, fast withdrawal to Steam is the moment users decide whether to return and refer. Source: research/strategy.md (Business Model section); research/aarrr.md (Retention).

**What hurts them today**

FACT - Trust deficit is category-wide: No mystery box operator names a public third-party RNG auditor as of 2026. Source: betterchecked.com 2026 audit, https://www.betterchecked.com/the-state-of-provably-fair-in-2026-who-actually-proves-it-who-just-talks-about-it.

FACT - Bot activity destroys social proof: DaddySkins shows "[BOT] Darth Vader" and "[BOT] HAL 9000" in the live wins ticker. DatDrop fills Battle Royale lobbies with bots. CSGORoll shows bot-filled battle slots. Platforms need bots to fill lobbies, but visible bot names undermine the authenticity the feed is supposed to generate. Source: research/master-research.md, Gaps Table.

FACT - Withdrawal complaints are the most common platform criticism: Withdrawal reliability is the most-cited user pain point across review aggregator complaints for all five platforms. Source: research/strategy.md (Business Model Validation).

FACT - Pre-login information wall: Most competitors lock odds, upgrade interfaces, and battle previews behind Steam login. Clash.gg is the outlier - payment options, RTP values, and active battle previews visible pre-login. Source: research/competitive-analysis.md.

FACT - Tested vs stated RTP gap: Hellcase tested at 82.1% RTP (third-party, 2026) vs higher stated figures. DatDrop tested at 80.6% across 118 cases. This gap is a trust and regulatory risk that users cannot currently detect pre-play. Source: research/strategy.md; https://skincasereviewer.com/reviews/hellcase, https://tech-insider.org/datdrop-review/.

**How they choose**

FACT - Streamer and influencer seeding is the dominant acquisition channel: Key-Drop has 100+ influencer partnerships. CSGORoll sponsors CS2 teams. Clash.gg's referral codes (FAIRNESSGG = 3 free cases) are promoted by streamers. Organic search and paid social are secondary or blocked in this category. Source: research/aarrr.md.

FACT - Free starter credit is the conversion hook: Hellcase offers $0.70 no-deposit credit + 10% bonus. Key-Drop offers 20% match + $0.50 free. Clash.gg gives 3 free cases to new users. The Collector segment reads terms before depositing; the Thrill Seeker does not. Source: research/aarrr.md (Activation).

HYPOTHESIS - [?] The Collector segment is assumed to research odds before depositing, but no direct evidence of this path in conversion data exists. It is inferred from the design of the Targeter behavioral pattern (research/ux-patterns.md, Pattern 2) and the presence of odds tables on competitor sites.

**Where they drop off**

FACT - The reveal animation is the primary D1 retention moment: If the animation feels scripted, slow, or visually dead, users leave after their first open. Source: research/ux-patterns.md, Pattern 1 (The Opener).

FACT - Battle lobby fill is the D7 retention risk: Lobby fill over 60-90 seconds causes abandonment. Bot-filled lobbies destroy the social tension that makes battles valuable. Source: research/ux-patterns.md, Pattern 3 (The Battler).

FACT - Withdrawal failure is the LTV-ending event: A failed or delayed withdrawal is the moment users decide whether to ever return. Source: research/strategy.md (Business Model Validation).

HYPOTHESIS - [?] At which step in the flow does the Thrill Seeker's enthusiasm drop before first deposit? We know the trigger (landing page + social proof + starter offer) but not the specific friction point that causes drop-off in the register-to-first-deposit window.

HYPOTHESIS - [?] What motivates return visits for the Thrill Seeker after D1? The research confirms daily bonuses and battle scheduling as retention mechanics, but we do not have evidence of which specific mechanic drives the most D7 return.

---

### What we do NOT know about people

| Unknown | Why it matters | Likely source to close it |
|---------|----------------|--------------------------|
| [?] Gender breakdown of platform users | Informs tone and visual language decisions | CS2 audience data (Valve, Steam surveys) |
| [?] Income range and disposable budget for typical depositor | Informs deposit bonus sizing and case price architecture | SteamSpy, third-party gaming audience research |
| [?] Where in the registration-to-first-deposit flow drop-off peaks | Highest-leverage UX fix for activation | Platform analytics (post-launch only) |
| [?] Which D7 retention mechanic has the highest return-visit causal effect | Guides which retention features to prioritize in MVP | Retention cohort analysis (post-launch only) |
| [?] Whether Thrill Seekers actively research provably fair before depositing, or only care post-win | Determines whether trust messaging drives acquisition or only retention | Qualitative user interviews, Reddit/forum signals |
| [?] Average session length and opens-per-session | Informs page architecture and interstitial design | Platform analytics (post-launch only) |
| [?] How users evaluate platform credibility in the first 60 seconds | Determines landing page hierarchy | User research / session recordings |

---

## Section 2: Personas

Four behavioral archetypes emerge from the research. ONE is primary. Sources are cited per block.

---

### Persona 1: The Opener - PRIMARY

**Why primary:** Every competitor design decision confirms this archetype. The reveal animation is the product. This person drives the most volume and is the first user any platform must succeed with. Design confirmation: all six platforms lead with animations, not data. Source: research/strategy.md (Segment A); research/ux-patterns.md (Pattern 1).

**Context - who they are and where they arrive from**

FACT - Age 18-25, active CS2 player. Follows skin culture and streamers. Has disposable income for entertainment. Uses the platform as a content experience, not a financial strategy. Likely to share wins on social. Source: research/strategy.md, Segment A.

FACT - Arrives from a stream clip, YouTube video, or Discord link where someone else won something remarkable. Source: research/ux-patterns.md, Pattern 1.

FACT - The social proof loop is confirmed: "one person posts a knife pull and someone else thinks why not me." Esports team endorsements (Team Vitality/skin.club, MOUZ/G4Skins) serve as institutional trust proxies for casual users alongside creator clip virality. Source: https://www.gamerbolt.com/opening-cs2-cases/; https://blix.gg/blog/betting/best-cs2-gambling-sites/ (post-persona research, June 2026).

**Jobs - what they are trying to get done**

FACT - Primary job: When I have downtime between CS2 matches or want entertainment in the skin ecosystem, I want to open a case with a real drop animation and genuine unpredictability, so that I get the thrill of a reveal and a real shot at something exciting. Source: research/strategy.md (Segment A JTBD).

FACT - Secondary job: If the drop is shareable, get a moment worth posting. Win sharing is organic acquisition. Source: research/ux-patterns.md (Pattern 1, step 6).

**Pains - what hurts most today**

FACT - Reveals that feel scripted, laggy, or visually flat. DaddySkins' current implementation is flat with no rarity-tiered animation variation. Source: research/master-research.md (Key Conclusion 5); research/benchmark.md.

FACT - Bot-flooded live feeds and chat. Visible bot names ("[BOT] Darth Vader") signal inauthenticity to CS2-literate users. Source: research/master-research.md (Gaps Table).

FACT - Cannot easily share wins. No one-tap sharing from the result state on most competitors. Source: research/aarrr.md (Referral section).

HYPOTHESIS - [?] Near-miss animations may be perceived negatively by technically literate users but positively by casual openers. The benchmark research flags near-miss as a dark pattern to avoid, but we do not have direct user sentiment data.

**Trust triggers - what convinces them, what scares them off**

FACT - Convinces: A platform that feels alive - active wins ticker, live player count, visible drop feed. Source: research/ux-patterns.md (Pattern 1).

FACT - Convinces: A starter offer they can act on immediately, without reading terms. Source: research/aarrr.md (Activation).

FACT - Scares off: A platform that feels slow or visually dead. Speed as trust - lag feels dishonest in a randomized-outcome product. Source: research/master-research.md (Design Principles).

FACT (post-persona research) - The Opener does NOT self-verify provably fair before depositing as a mass-market behavior. Hellcase has 2M MAU and 150,000 daily opens despite no public PF page and 82.1% tested RTP - the lowest trust posture in the category. Casual users use institutional trust proxies (team endorsements, Trustpilot score, platform longevity) not direct PF hash verification. A PF auditor badge is a visual trust proxy that works for this persona; a detailed PF page is a Researcher tool. Source: live-research.md KILLED-01; https://esports.gg/news/counter-strike-2/what-is-hellcase/. CLOSED by founder decision (Decision 1): the landing page uses a hybrid hero - animation leads, institutional trust badge (auditor name + Trustpilot score) is present in the same hero unit. The badge is the Opener's permission slip; the PF page is the Researcher's verification tool.

**Mood quote from research**

"I was watching a clip of [streamer] open a 50k knife and just had to try it myself. The animation looked insane. I knew the odds were terrible but it didn't matter." - representative sentiment from CS2 gambling subreddit discussions, research/master-research.md (trust and fairness community signals).

Note: this is a representative composite, not a direct quote. A direct verified quote is marked [?] - not yet found in cited sources.

---

### Persona 2: The Accumulator - SECONDARY

**Why secondary:** Highest LTV user if retained. Regular depositor who tracks rakeback and treats upgrade routing as a skill game. All top-3 platforms have built feature sets specifically for this person (rakeback, loyalty points, upgrade odds). Source: research/strategy.md (Segment B: Grinder).

**Context - who they are and where they arrive from**

FACT - Age 20-32, regular platform user. Tracks balance relative to entertainment budget. Actively seeks rakeback or bonus mechanics. More likely to deposit regularly if the platform rewards loyalty. Source: research/strategy.md, Segment B.

FACT - Arrives via comparison content, affiliate links, or referrals from other regular players. Is more likely to read terms and compare bonus wagering requirements before depositing. Source: research/aarrr.md (Acquisition - Organic Search).

**Jobs - what they are trying to get done**

FACT - Primary job: When I have built up a balance from regular play, I want to use upgrades, smart battle selection, and loyalty bonuses, so that I can maximize my chances of withdrawing a skin worth more than I put in. Source: research/strategy.md (Segment B JTBD).

FACT - Secondary job: When I have accumulated enough rakeback or loyalty points, I want to know exactly what I have earned and when I can redeem it, so that I can plan my session around the best value timing. Source: inferred from DatDrop DatPoints program and Gamdom rakeback design; research/competitive-analysis.md.

**Pains - what hurts most today**

FACT - No rakeback or loyalty rewards - or loyalty programs with opaque wagering requirements. Gamdom's 15% zero-wagering rakeback sets the benchmark. Clash.gg's rakeback is up to 0.75% - significantly lower. Source: research/strategy.md (Business Model); research/competitive-analysis.md (Gamdom).

FACT - Upgrade interfaces without clear probability display. Source: research/ux-patterns.md (Pattern 4 - Accumulator, step 4).

FACT - Withdrawal delays and fees. ShadowPay on Hellcase charges 4-7% total fees and 3-5 day bank transfer. Fast, commission-free withdrawal is what this persona demands. Source: research/competitive-analysis.md (Hellcase withdrawal).

HYPOTHESIS - [?] Whether rakeback rate (e.g. 10% vs 15%) materially changes the Accumulator's platform choice, versus rakeback terms (wagering requirement) is not confirmed by research. Rate vs terms comparison data does not exist in the current corpus.

**Trust triggers**

FACT - Convinces: Published rakeback rate with explicit wagering terms stated before deposit. Source: research/aarrr.md (Activation).

FACT - Convinces: Upgrade mode with visible probability per outcome before confirming. Source: research/ux-patterns.md (Pattern 4).

FACT - Scares off: A withdrawal delay or fee on an expected amount. Source: research/strategy.md (Business Model Validation - withdrawal reliability cited as most common complaint).

**Mood quote**

"I don't expect to beat the house long-term but if I get some rakeback and the upgrades are fair I can stretch a $20 deposit into a lot of entertainment. The moment withdrawal fails once, I'm gone." - composite from review aggregator complaints across Hellcase, DatDrop, Key-Drop; research/master-research.md.

Note: composite, not a verbatim cited post. A direct verified quote from a public forum is marked [?].

---

### Persona 3: The Researcher - TERTIARY (SECONDARY CANDIDATE)

**Why tertiary:** No major competitor leads product design for this persona. All lead with animations, not odds tables. Collector needs are served by the same transparency features required for trust-gap objectives - they do not justify dedicated feature investment beyond that baseline. Source: research/strategy.md (Segment C: Collector, Decision Trace).

**Why "secondary candidate":** If the platform's trust differentiation thesis proves correct (landing page test per strategy.md Riskiest Assumption), this persona's arrival behavior (search-led, research-phase) may be the channel where trust messaging converts best. That would elevate this persona's acquisition significance without changing their feature requirements.

**Context**

FACT - Age 20-35, skewing older within adult range. Researches case odds and expected values before spending. Has a specific skin wishlist. Source: research/strategy.md, Segment C.

FACT - Arrives via search ("best way to get [skin name]", "CS2 case odds") or skin comparison content. Source: research/aarrr.md (Acquisition - Organic Search).

**Jobs**

FACT - Primary job: When I want a specific skin I cannot easily afford at market price, I want to open cases or run upgrades where odds are visible, so that I can make an informed decision about whether it is worth the spend relative to buying directly. Source: research/strategy.md (Segment C JTBD).

**Pains**

FACT - Hidden odds or no odds before deposit. Source: research/benchmark.md (Criterion 2: Odds Visibility).

FACT - No withdrawal transparency. Source: research/master-research.md (Gaps Table - Withdrawal architecture invisible pre-login).

HYPOTHESIS - [?] Whether the Researcher converts to a depositor at a materially higher rate when per-case EV is shown versus when only per-item odds are shown is unknown. The research confirms that Collectors "read odds" but does not confirm which level of detail converts them.

**Trust triggers**

FACT - Convinces: Published per-item odds with expected value per case, visible before deposit. CSGORoll and skin.club lead the benchmark here. Source: research/benchmark.md.

FACT - Convinces: A provably fair page that is accessible without login. Source: research/master-research.md (Hypothesis 1).

**Mood quote**

"Before I put any money in I want to know exactly what I'm buying. If the odds aren't on the page I assume the worst and go somewhere else." - representative sentiment from CS2 community research discussions. [?] Direct verified quote not yet in corpus.

---

### Persona 4: The Battler - SECONDARY (RETENTION-STAGE)

**Why separate from Opener:** The Battler is not an acquisition persona - they are a retention persona. They have already opened cases solo and want a higher-stakes format with a real opponent. Battle mode is a retention mechanic, not an entry point. Source: research/ux-patterns.md (Pattern 3 - The Battler); research/aarrr.md (Retention - "battles are the primary scheduling mechanic").

**Why included despite not driving acquisition:** Battles are confirmed as the D7 and D14 retention lever. DatDrop's Battle Royale (up to 72 players) is its primary differentiator. Clash.gg's Champion mode is the most-cited reason users prefer it specifically. Getting this persona right determines long-term LTV. Source: research/competitive-analysis.md.

**Context**

FACT - Segment overlap: Thrill Seeker primarily, with Grinder overlap for high-stakes formats. Source: research/ux-patterns.md (Pattern 3).

FACT - Has already opened cases solo and wants a higher-stakes format with a real opponent. Browses the battle lobby, looks at pot size and case selection. Source: research/ux-patterns.md (Pattern 3, steps 1-2).

**Jobs**

FACT - Primary job: When I have built up some wins and want a higher-stakes format, I want to fight a battle against a real opponent with real stakes, so that I can feel the competitive high of winning their loot under pressure. Derived from: research/master-research.md (Secondary JTBD 1); research/ux-patterns.md (Pattern 3).

**Pains**

FACT - Lobby fill with bots: the single biggest pain for this persona. A bot battle is solo opening with extra steps - the social tension is gone. Source: research/master-research.md (Hypothesis 4); research/ux-patterns.md (Pattern 3, "Breaks when").

FACT - Unsynchronized reveal timing: if one player's result is visible before the other's, the tension of simultaneous discovery is broken. Source: research/ux-patterns.md (Pattern 3).

**Trust triggers**

FACT - Convinces: A lobby with a visible pot size and at least one real (non-bot) open slot. Source: research/ux-patterns.md (Pattern 3, step 2).

FACT - Convinces: A battle result worth screenshotting and sharing. Source: research/ux-patterns.md (Pattern 3, step 5).

FACT - Scares off: A lobby fill time over 60-90 seconds. Research sets 60 seconds as the hard limit before abandonment. Source: research/ux-patterns.md (Pattern 3, step 3).

**Mood quote**

"The bot lobbies are so obvious it's insulting. Half the accounts have robot names or zero level. I just want to play against actual people." - composite from community discussion of DatDrop and DaddySkins bot activity, research/master-research.md.

Note: composite, not a verbatim cited post. [?] Direct verified quote from a public post not yet in corpus.
