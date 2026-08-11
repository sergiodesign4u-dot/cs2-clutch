# Node 0.13. SEO and indexation register

**Type:** register. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** Hold the structural SEO layer once: URL and slug conventions, one indexation row per node, the schema map, the single H1 rule, breadcrumbs and the internal linking planes. Every A to E block on every node inherits from here instead of deriving it a second time.

**Parent, and the honest version of it.** `CLAUDE.md` says the structural layer of SEO "is IA and belongs here", and that is a rule of this project rather than one of the three capability classes. **A register of decisions is not a capability, so the three-class test applies to what the register decides, not to the register itself.** Each decision below names its own parent: pre-login crawlability serves `B2-1`, the pre-login information wall, and Related Job 1; the noindex set serves the privacy of a transactional zone; the linking planes serve `F4` and the ticker's destination.

**Read by every indexed node**, and by stage 04 when it validates that each SEO block has a visible place.

**Not drawn at stage 04.** A register has no screen. What stage 04 inherits is section 3, the indexation row per node, and section 10, what it has to check.

---

## 0. What this register is, and what it is not

`CLAUDE.md` splits SEO across three stages and this is the first of them:

1. **Structural, here and now:** URL and slug, H1 and H2, breadcrumbs, schema, indexation and internal linking.
2. **Layout validation, at stage 04:** every SEO block has a visible place.
3. **Final copy and real query volumes, in production.**

**Mixing them means a missing block is discovered as a redraw.** So this node holds no keyword list, no title copy beyond the pattern, and no traffic estimate. The A to E block on each node still carries its own finished copy, and stage 05 syncs the voice-aligned version back into it.

---

## 1. What one language buys, and the single cost it carries

The locked decision in `CLAUDE.md` is one language, English. That decision pays out here more than anywhere else:

- **No hreflang anywhere.** Not on any node, not in any sitemap. The most common structural SEO defect in this category does not exist for us.
- **No language prefix.** The baseline runs `/en/faq`, `/en/terms`, `/en/profile/<id>` and so on, `baseline.md`. **We run root paths.** A prefix that only ever holds one value is a segment every URL pays for and nothing reads.
- **One IA node is one page**, which the same locked decision already states. So a URL is a node, and the indexation register below can be one row per node without exception.

**The cost, named rather than hidden.** If a second language ever arrives, root paths have to acquire one. The resolution is decided now so it is not improvised then: **English stays at the root and the new language takes the prefix.** Nothing migrates, nothing redirects, and the decision costs nothing today.

---

## 2. URL and slug conventions

| Rule | Value | Why |
|---|---|---|
| **Case** | Lowercase only | One canonical form. Mixed case creates two URLs for one page on any case-sensitive host |
| **Words** | Hyphens, never underscores or camel case | |
| **Trailing slash** | No trailing slash. The other form 301s to it | Both forms resolving is duplication that nobody notices until it is in the index twice |
| **Slug source** | The object's own name, in the product language, which is English | |
| **Slug stability** | **A rename is a 301 and the old slug is never reused.** A slug is not edited in place | A silently changed slug is a dead link in every share, every chat and every index |
| **IDs** | Never in a slug, with one exception: `/r/<id>`, where the object is a record and has no name | |
| **Reserved first segments** | `cases`, `legal`, `r`, `support`, and the transactional set below. A case slug may not equal a reserved word | Without this rule `/cases/category` collides with a case named "category" |

### The map

| Node | URL |
|---|---|
| `1.0` Home | `/` |
| `3.1` Catalogue | `/cases` |
| `3.1` Category view | `/cases/category/<category-slug>` |
| `3.3` Case screen | `/cases/<case-slug>` |
| `1.2` Provably fair | `/provably-fair` |
| `6.1` Responsible play | `/responsible-play` |
| `7.1` Public result | `/r/<id>` |
| `0.9` Legal, four documents | `/legal/terms`, `/legal/privacy`, `/legal/cookies`, `/legal/refunds` |
| `0.10` Support | `/support` |
| `2.4` Sign in | `/signin` |
| `2.7` Identity verification | `/verify-identity` |
| `4.1` Deposit | `/deposit` |
| `5.1` Account and inventory | `/my-items` |
| `5.3` Withdrawal | `/withdraw` |

**`/my-items` is not a styling choice.** The rail's label for that destination is My items, and node `0.1` fixed the rule that one destination carries one label in every carrier. **The URL is a carrier too**, and a person who reads `/account` in the address bar after tapping My items has met a second name for one place.

**A state has no URL of its own unless a person can arrive at it from outside.** `7.1` can, so it has one. The geo block `2.2`, the empty catalogue `3.2` and the empty inventory `5.2` cannot, so they render at the URL the person is already on. This is the same rule the map uses to decide which dialogs are file-level nodes, applied to addresses.

---

## 3. The indexation register

One row per node with a URL. This is the table stage 04 checks against and the table each A to E block inherits from.

| Node | URL | Indexed | Canonical | Schema | Breadcrumb |
|---|---|---|---|---|---|
| `1.0` Home | `/` | Yes | Self | `Organization` + `WebSite` | None. It is the root |
| `3.1` Catalogue | `/cases` | Yes | Self | `CollectionPage` + `ItemList` | Home > Cases |
| `3.1` Category | `/cases/category/<slug>` | **Yes, conditional on `D-D`** | Self | `CollectionPage` + `ItemList` | Home > Cases > Category |
| `3.1` Filtered or searched | `/cases?...` | **No.** `noindex, follow` | **To `/cases`** | None | Home > Cases |
| `3.3` Case screen | `/cases/<slug>` | Yes | Self | `Product` + `Offer` | Home > Cases > Case |
| `1.2` Provably fair | `/provably-fair` | Yes | Self | `WebPage` | Home > Provably fair |
| `6.1` Responsible play | `/responsible-play` | Yes | Self | `WebPage` | Home > Responsible play |
| `7.1` Public result | `/r/<id>` | **No.** `noindex, follow`. See section 4 | Self | None | None |
| `0.9` Legal, each of four | `/legal/<doc>` | Yes | Self | `WebPage` | Home > Legal > Document |
| `0.10` Support | `/support` | Yes | Self | `WebPage` + `ContactPage` | Home > Support |
| `2.4` Sign in | `/signin` | **No.** `noindex, follow` | Self | None | None |
| `2.7` Identity | `/verify-identity` | **No** | Self | None | None |
| `4.1` Deposit | `/deposit` | **No** | Self | None | None |
| `5.1` My items | `/my-items` | **No** | Self | None | None |
| `5.3` Withdrawal | `/withdraw` | **No** | Self | None | None |
| `0.3` System pages | No URL of their own | **No** | n/a | None | None |

**Nine indexed surfaces and six that are not**, and the split is not a preference: everything in the transactional zone is personal or pointless in a result page, and everything outside it is the pre-login argument.

---

## 4. Six decisions that are not obvious

### 4.1 The public result is `noindex, follow`, and the share card is what it actually ships for

Node `7.1` is the ninth surface, approved by `D-20`, and the destination of every ticker tile. **It is deliberately kept out of the index**, for three reasons that compound:

- **Scale.** One page per win is thousands of near-identical templated pages. That is thin content by construction, and it dilutes the surfaces that carry the argument.
- **Where the object actually travels.** `F4` exists for the referral loop. A shared result lands in a chat, a Discord, a clip description. **The unfurl preview is the product, not a search position**, so the OG and Twitter card is a hard requirement on this node while the meta description is nearly irrelevant.
- **Consent.** `0.8` already says the winning account appears "as it chooses to appear". Indexing turns public-if-you-have-the-link into findable-by-name, which is a different promise from the one the share button makes.

**`follow` rather than `nofollow`, deliberately.** Every result links to `1.2` and to `1.0`, and those are the pages that should collect whatever the link is worth.

### 4.2 Filters and search do not get indexed, categories do

Facet combinations multiply URLs without multiplying content. Filtered and searched views are `noindex, follow` and canonical to `/cases`. **Category views are a real grouping of real objects**, so they are indexed, and whether they exist at all rides on `D-D`, the same decision that sets catalogue size.

### 4.3 The age gate does not block crawlers, and that is architecture rather than a trick

`2.1` fires at **first case interaction**, not on arrival, by `B3` and `D-17`. So every public surface is readable by anyone from anywhere, crawler included, **without serving a crawler anything different from a person**. Cloaking is not needed here, which is worth saying out loud because the category's usual pattern makes it tempting: a login wall in front of the provably fair page is also an indexation wall, and `jtbd.md` already names a public provably fair surface as one of three things no competitor offers pre-login. **The competitor's wall costs them the index. Ours does not exist.**

### 4.4 The geo block cannot be indexed, because it is not a page

From node `0.12`: the block is a state that renders at the URL the person is already on, with HTTP 200. It has no URL, so there is nothing to index, and no crawler from any market can be served a blocked page instead of the real one.

### 4.5 Disallow is not noindex, and the private zone uses the right one

The six unindexed nodes carry a `noindex` meta tag and **are not disallowed in `robots.txt`**. The mechanism, in one line: **a page a crawler is forbidden to read is a page whose `noindex` the crawler cannot read**, so a disallowed URL can still be listed from inbound links while the instruction that would have prevented it sits unread inside. Disallow is for crawl budget. Noindex is for indexation. They are not interchangeable and the private zone needs the second.

### 4.6 Rich results in this category are `[?]`

Whether an age-restricted, gambling-adjacent product is granted rich results at all is a policy question this project cannot answer from the outside. The markup is correct either way, and **eligibility is production's to verify**. Nothing in this register depends on getting them.

---

## 5. Headings

**Exactly one H1 per page, and it is the page's job in words.** Never the logo, never the product name alone, never a slogan. On `3.3` it is the case name, because that is what the person came for and what the query matches.

**The H2 list is the block order.** Each node's A to E block B lists its H2s in the order the blocks appear, which makes the stage 04 check mechanical: read the block order, read the H2 list, they match or the node is wrong.

**Headings are not a styling ladder.** A visually smaller heading that is structurally an H2 stays an H2. This is stated here because stage 06 and 07 will be tempted to reorder by size.

---

## 6. Breadcrumbs, and why they are short

`sitemap.md` records that **level 3 is empty in round 1**, which means no breadcrumb is longer than three items and most are two.

- Deepest: `Home > Cases > <case name>`, and with categories on, `Home > Cases > <category> > <case name>`.
- Legal: `Home > Legal > <document>`.
- Home has none, because a breadcrumb to yourself is decoration.

**`BreadcrumbList` markup only where a visible breadcrumb exists**, which is section 7's rule applied to the one type most often marked up invisibly.

---

## 7. The schema map, and the two refusals

Google's structured data policies, opened 12 August 2026 at `https://developers.google.com/search/docs/appearance/structured-data/sd-policies`:

> "Your structured data must be a true representation of the page content."
> "Don't mark up content that is not visible to readers of the page."
> "Don't mark up irrelevant or misleading content, such as fake reviews or content unrelated to the focus of a page."
> "Don't use structured data to deceive or mislead users. Don't impersonate any person or organization, or misrepresent your ownership, affiliation, or primary purpose."

**Those four lines are the whole policy this register needs**, and they land on this product harder than on most, because design principle 1 says the same thing in the interface.

| Page type | Type | What it carries |
|---|---|---|
| Home | `Organization`, `WebSite` | Who we are, the site name. `Organization` matches the identification block `0.2` already carries |
| Catalogue and category | `CollectionPage`, `ItemList` | The list that is visibly on the page, in the order it is visibly in |
| Case screen | `Product`, `Offer` | The case is the thing bought and the entry cost is its price. `schema.org/Product`, opened 12 August 2026, defines a product as "any offered product or service" and `Offer` as a transaction opportunity including pricing |
| Provably fair, responsible play, legal | `WebPage` | Nothing more. There is nothing on those pages that a richer type would truthfully describe |
| Support | `WebPage`, `ContactPage` | |

### Refusal 1: no `aggregateRating` or `Review`, anywhere, for the Trustpilot score

Row `A5` puts a Trustpilot score in the hero. **Marking it up as our own rating is the "fake reviews" line of the policy quoted above**, plus the misrepresentation-of-affiliation line: they are a third party's reviews, held by that third party, and structured data that presents them as ours claims something we do not own. Node `0.11` already requires that score to be live or absent. This register adds: **live, absent, and never marked up.**

### Refusal 2: the case is the offer, the skin is not

The case page shows drop table items with current values. **Those are not offers.** We do not sell that skin at that price, and marking each item as a `Product` with an `Offer` would state that we do. The items are content of the case, and the only `Offer` on the page is the entry cost.

**Both refusals are the same rule twice:** markup describes what the page truly is, and this product has already promised, in principle 1, not to look more credentialled than it is.

---

## 8. The internal linking planes

Four, and every one of them is a crawlable `<a href>` rather than a JavaScript handler. A destination reachable only by script does not exist for a crawler and often not for a person with a keyboard either.

| Plane | Owner | What it carries |
|---|---|---|
| **The rail** | `0.1` | Three destinations for a guest, four with an account. Present on every page, which makes it the strongest internal signal in the product |
| **The footer** | `0.2` | Four link columns, the legal set, support, plus the interlinking block whose structure is fixed and whose contents are `[?]` |
| **The ticker** | `0.8` | Every tile lands on `7.1`. High volume, and it is why `7.1` is `follow` |
| **Content links** | The nodes themselves | Home tiles into `/cases/<slug>`, catalogue into cases, the outcome into `1.2` and `7.1`, the footer statistics figure into the surface that proves it, `0.11` |

**The interlinking block is the one plane with an open input.** Its structure is fixed by `0.2`; the list it holds needs the category structure from `3.1` and real query volumes from production. It is `[?]` here on purpose rather than filled with a guess.

---

## 9. Outbound links

Row `A1` puts an outbound market link on the top item, and `F1` links the venue listing filtered to the float band. **These are editorial links to evidence, not paid placements**, so they carry no `sponsored` marking unless a commercial relationship exists, at which point the marking becomes mandatory rather than optional. `cjm-to-be.md` already records that outbound clicks are an accepted cost and never a failure metric, which is the same decision seen from the analytics side.

---

## 10. What stage 04 validates, which is its half of the job

`CLAUDE.md`: stage 04 "validates only that every SEO block has a visible place". Concretely, per node:

1. Exactly one H1, and it is the page's job in words.
2. The H2s exist, in block order, matching block B of that node.
3. A breadcrumb is drawn wherever section 3 says one exists.
4. The interlinking block has room in the footer at both widths.
5. The meta description has a source on the page rather than being invented at production time.
6. Nothing that section 3 marks indexed is rendered as an image: the pre-login figures especially, per `0.11` rule 8.

---

## 11. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **The interlinking block contents** | Needs the category structure from `3.1` and real query volumes | Node `3.1`, then production |
| **Whether category URLs ship at all** | Rides on `D-D`, catalogue size | Founder, with the treasury answer |
| **The canonical host** | Apex against `www`, and the domain itself is not chosen | Founder, before stage 04 |
| **Rich result eligibility** | Policy for an age-restricted category, unknowable from outside | Production |
| **Final titles and descriptions** | **The pattern, written here rather than promised:** `<node H1 subject>` then a separator then `CS2 Clutch`, one line, the subject first because the tail truncates. Copy in each node's A to E block, voice at stage 05 | Stage 05, then production |
| **Whether `7.1` should be indexed after all** | Decided here as `noindex, follow` with three reasons. It is reversible and it is the founder's if they want wins in search results | Founder, if they disagree |

**And what belongs elsewhere.** Page speed and Core Web Vitals: production, though design principle 5 already makes speed a product rule. Sitemap XML generation: production. The words in any title: stage 05.
