/* wireframes/_nav.js
 * THE SINGLE SOURCE OF SCREENS for stage 04. Nothing else holds this list.
 *
 * Own namespace on purpose. The globals NAV_* and the nav-* classes belong to the
 * root /_nav.js, which renders the project roadmap. overview.html loads BOTH files,
 * so a name collision here would silently break the roadmap. Everything below is
 * WF_NAV and wf-*.
 *
 * The registry is filled BEFORE the screens are drawn, which makes it a coverage
 * tracker rather than a table of contents: every screen on the map is here from day
 * one with status 'spec', and each finished one flips to 'built'. So "how much is
 * left" is visible in the browser at every step instead of being counted at the end,
 * and no screen goes missing in the step 8 fanout: an empty row is noticeable, a
 * missing file is not.
 *
 * Derived from ia/docs/sitemap.md, ia/docs/flows.md and wireframes/docs/screens.md
 * on 18 August 2026. Nothing here is invented: the matrix computed a FLOOR of 63
 * pages, and this registry is the live list, which is longer and only ever gets
 * longer. Every count printed anywhere in the prototype is computed from the list
 * below and never typed: allPages() and builtPages() are the only two sources.
 * Flipping a status is the only manual edit this file takes.
 */

window.WF_NAV = {

  clusters: [
    { key: '0', label: 'Global shell' },
    { key: '1', label: 'Decide whether this place is real' },
    { key: '2', label: 'Get through the door' },
    { key: '3', label: 'Choose what to open, and open it' },
    { key: '4', label: 'Put money in' },
    { key: '5', label: 'Take out what I earned' },
    { key: '6', label: 'Keep myself in check' },
    { key: '7', label: 'Tell someone' }
  ],

  // Flows, from ia/docs/flows.md. `screens` lists node codes in the order the flow walks them.
  flows: [
    { id: 'f1',  label: 'Flow 1. Main job: arrive, open, get the thrill', screens: ['1.0','3.3','2.4','3.5','3.6'] },
    { id: 'f1a', label: 'Flow 1a. Browsing the catalogue',                screens: ['1.0','3.1','3.3'] },
    { id: 'f2',  label: 'Flow 2. Funding the account and setting the ceiling', screens: ['4.1','3.3'] },
    { id: 'f2a', label: 'Flow 2a. Setting a limit and stopping',          screens: ['6.1','4.1'] },
    { id: 'f3',  label: 'Flow 3. Withdraw and get what I earned',         screens: ['5.1','5.3'] },
    { id: 'f4',  label: 'Flow 4. Verify the outcome after I open',        screens: ['3.6','1.2','7.1'] }
  ],

  // One entry per screen. `states` are pages too: the base file is the success state,
  // every other state is its own page, per wireframes/docs/conventions.md section 3.
  screens: [
    // DRAWN 22 AUGUST 2026, D-79, and it gained two pages on the way in. The
    // registry had five states because the node's INCLUDES line has three status
    // codes; the node's own states table has been asking for a sixth page since it
    // was written, the search returning nothing, and its open list has been saying
    // "stage 04 draws both versions" of the 500 for four days. A state a node
    // describes and no page renders is the state nobody checks, and a conditional
    // block drawn once is drawn in whichever condition the person drawing it
    // assumed.
    { node: '0.3',  cluster: '0', name: 'System pages',        file: 'system.html',     ia: 'system.html',        status: 'built',
      base: '404, external arrival',
      states: [
        { label: '404, internal referrer',  file: 'system-404-internal.html', status: 'built' },
        { label: '404, retired case slug',  file: 'system-404-retired.html',  status: 'built' },
        { label: '500, carriers render',    file: 'system-500.html',          status: 'built' },
        { label: '500, carriers cannot',    file: 'system-500-noshell.html',  status: 'built' },
        { label: '503, planned',            file: 'system-503-planned.html',  status: 'built' },
        { label: '503, unplanned',          file: 'system-503-unplanned.html', status: 'built' }
      ] },

    // DRAWN 22 AUGUST 2026, D-80, AND CLUSTER 0 IS COMPLETE. Eight pages, and the
    // note this row used to carry pointed at the wrong section of the wrong
    // question: "whether this ships as six pages or two with four variants is step
    // 5, conventions section 6". Section 6 of that file is the three readers.
    // THE RULE IS SECTION 4 AND IT HAS ANSWERED THIS SINCE IT WAS WRITTEN: every
    // state is its own page, so the prototype can navigate between them, and the
    // real set comes from the States section of the node spec. That set is nine
    // rows; two of them say "same as its base state" and get no page, one had no
    // page at all, and the second layer of the dialog is where four of the node's
    // ten blocks live and had nowhere to be drawn.
    { node: '0.4',  cluster: '0', name: 'Cookie consent',      file: 'cookie.html',     ia: 'cookie.html',        status: 'built',
      base: 'Pending, no answer yet',
      states: [
        { label: 'Layer 2, nothing chosen', file: 'cookie-manage.html',    status: 'built' },
        { label: 'Accepted all',   file: 'cookie-accepted.html',  status: 'built' },
        { label: 'Rejected all',   file: 'cookie-rejected.html',  status: 'built' },
        { label: 'Partial',        file: 'cookie-partial.html',   status: 'built' },
        { label: 'Changed later',  file: 'cookie-changed.html',   status: 'built' },
        { label: 'Consent expired',file: 'cookie-expired.html',   status: 'built' },
        { label: 'Storage unavailable', file: 'cookie-nostore.html', status: 'built' }
      ] },

    // DRAWN 22 AUGUST 2026. One template, four documents, and only the terms are
    // drawn: four drawings of one shape would be three copies. The state that
    // earns it is "changed since you last agreed", because a component built for
    // the current version meets its first amendment as an incident.
    { node: '0.9',  cluster: '0', name: 'Legal and policy',    file: 'legal.html',      ia: 'legal.html',         status: 'built',
      base: 'Current',
      states: [
        { label: 'Changed since you last agreed', file: 'legal-changed.html',    status: 'built' },
        { label: 'Guest, never agreed',           file: 'legal-guest.html',      status: 'built' },
        { label: 'Reading a superseded version',  file: 'legal-superseded.html', status: 'built' },
        { label: 'Not yet published',             file: 'legal-unpublished.html',status: 'built' },
        { label: 'Refund and payments policy',    file: 'legal-refund.html',     status: 'built' }
      ] },

    // DRAWN 22 AUGUST 2026. Nine pages, and the ninth is the one that earns the
    // node: a published deadline with no state for its own failure is a number
    // nobody has to meet.
    { node: '0.10', cluster: '0', name: 'Support and contact', file: 'support.html',    ia: 'support.html',       status: 'built',
      base: 'Entry',
      states: [
        { label: 'Appeal a decision',           file: 'support-appeal.html',    status: 'built' },
        { label: 'Appeal submitted',            file: 'support-submitted.html', status: 'built' },
        { label: 'Waiting, with attribution',   file: 'support-waiting.html',   status: 'built' },
        { label: 'Appeal answered',             file: 'support-answered.html',  status: 'built' },
        { label: 'Appeal upheld',               file: 'support-upheld.html',    status: 'built' },
        { label: 'Appeal refused',              file: 'support-refused.html',   status: 'built' },
        { label: 'Deadline missed',             file: 'support-deadline.html',  status: 'built' },
        { label: 'No dispute to appeal',        file: 'support-nodispute.html', status: 'built' },
        { label: 'Ticket id not found',         file: 'support-notfound.html',  status: 'built' }
      ] },

    { node: '1.0',  cluster: '1', name: 'Home',                file: 'index.html',      ia: 'home.html',          status: 'built',
      base: 'Guest', etalon: true,
      states: [
        { node: '1.1', label: 'Account exists', file: 'index-account.html', status: 'built' }
      ] },

    // DRAWN 21 AUGUST 2026. The largest single piece of product a person can read
    // without an account, and the surface the competitor pattern puts behind a
    // login wall, which is also an indexation wall.
    { node: '1.2',  cluster: '1', name: 'Provably fair',       file: 'fair.html',       ia: 'provably-fair.html', status: 'built',
      base: 'Default, with the verifier idle',
      states: [
        { label: 'Prefilled, nothing computed',  file: 'fair-prefilled.html',   status: 'built' },
        { label: 'Checked and matched',          file: 'fair-matched.html',      status: 'built' },
        { label: 'Proof not available yet',      file: 'fair-unavailable.html',  status: 'built' },
        { node: '1.3', label: 'Verifier, malformed round',   file: 'fair-malformed.html',    status: 'built' },
        { node: '1.4', label: 'Verifier, our own proof failed', file: 'fair-proof-failed.html', status: 'built', dead: true }
      ] },

    // DRAWN 21 AUGUST 2026. THE LAST SCREEN OF THE MAIN FLOW.
    // On an open market this node renders nothing: D-26 took the 18+ declaration
    // to 2.4 and what is left is the market question. D-70 carried that through
    // the node's body, which had gone on specifying the declaration for three
    // days after the header said it had moved.
    { node: '2.1',  cluster: '2', name: 'Geo gate',            file: 'gate.html',       ia: 'gate.html',          status: 'built',
      base: 'Checking the market',
      states: [
        { label: 'Staged market, one limit',  file: 'gate-staged.html',      status: 'built' },
        { node: '2.2', label: 'Not launched, the default', file: 'gate-notlaunched.html', status: 'built', dead: true },
        { node: '2.2', label: 'Blocked, with the ground',  file: 'gate-blocked.html',     status: 'built', dead: true },
        { label: 'Detection unavailable',     file: 'gate-unavailable.html', status: 'built', dead: true }
      ] },

    // D-54 MADE THE DIALOG THE CARRIER, so the dialog is the base page of this
    // node and the address is a state of it rather than the other way round.
    { node: '2.4',  cluster: '2', name: 'Sign in with Steam',  file: 'signin-dialog.html', ia: 'signin.html',    status: 'built',
      base: 'The dialog, over the case screen',
      states: [
        { label: 'Cold arrival at /signin', file: 'signin.html',                 status: 'built' },
        { label: 'One of two given',        file: 'signin-consent-partial.html', status: 'built' },
        { label: 'Press refused, nothing declared', file: 'signin-blocked.html',   status: 'built' },
        { label: 'Consent given',           file: 'signin-consent-given.html',   status: 'built' },
        { node: '2.5', label: 'Steam refused',       file: 'signin-steam-refused.html',   status: 'built' },
        { node: '2.6', label: 'Steam unavailable',   file: 'signin-steam-unavailable.html', status: 'built' }
      ] },

    // DRAWN 21 AUGUST 2026, and it jumped the queue for a reason that is not about
    // this node: the rail carries one destination, Cases, D-40, and it pointed at
    // catalogue.html on all twenty two built screens while the file did not exist.
    // A dead link on every page outranks the next screen in the flow.
    { node: '3.1',  cluster: '3', name: 'Case catalogue',      file: 'catalogue.html',  ia: 'catalogue.html',     status: 'built',
      base: 'Guest, unfiltered',
      states: [
        { label: 'Account',        file: 'catalogue-account.html',  status: 'built' },
        { label: 'Filter drawer open', file: 'catalogue-filter.html', status: 'built' },
        { label: 'Filtered',       file: 'catalogue-filtered.html', status: 'built' },
        { label: 'Loading',        file: 'catalogue-loading.html',  status: 'built' },
        { label: 'Degraded',       file: 'catalogue-degraded.html', status: 'built' },
        { node: '3.2', label: 'Nothing matches', file: 'catalogue-empty.html', status: 'built' }
      ] },

    { node: '3.3',  cluster: '3', name: 'Case screen',         file: 'case.html',       ia: 'case.html',          status: 'built',
      base: 'Phase 1, choosing',
      states: [
        // THE ORDER IS THE ORDER OF THE FLOW, and it was not until D-46: the two phase 1
        // states at a chosen count were appended after 3.4 because they were added last.
        // Phase 1 first, all of it, then 3.4, then the open, then the outcome, then the
        // interruption, then the two figure conditions that are not phases at all.
        // The signed-in state is a page rather than a note because D-32 made it differ in
        // three places at once: the lane renders, the trigger names a different act, and
        // the balance relationship is stated.
        // A STATE WITH NO NODE FIELD IS A VARIATION OF 3.3 and renders as one, D-46. The
        // code used to be typed into the label text, so one renderer printed 3.3 for all
        // eleven pages and another printed 3.4 through 3.7 for the same eleven.
        { node: '3.3', label: 'Signed in, funded',       file: 'case-account.html',     status: 'built' },
        // PHASE 1 WITH THE COUNT ALREADY CHOSEN, D-46. The matrix used to read "count
        // switch at more than one: phase 1 unchanged", which made the stage the reveal's
        // lane standing still only at a count of one. Two is the shape and five is the
        // load, the same pair D-35 drew for the reveal and the outcome.
        { label: 'Two chosen, stage at rest',   file: 'case-account-2.html',   status: 'built' },
        { label: 'Five chosen, stage at rest',  file: 'case-account-5.html',   status: 'built' },
        { node: '3.5', label: 'Phase 2, the open',       file: 'case-open.html',        status: 'built' },
        // Multi-open, D-35. The count switch shipped in D-31 and neither phase had a
        // state above one roll, so the two phases it changes are drawn at both ends of
        // the range: two is the shape and five is the load.
        { node: '3.5', label: 'The open, 2 rolls',       file: 'case-open-2.html',      status: 'built' },
        { node: '3.5', label: 'The open, 5 rolls',       file: 'case-open-5.html',      status: 'built' },
        { node: '3.6', label: 'Phase 3, the outcome',    file: 'case-outcome.html',     status: 'built' },
        { node: '3.6', label: 'The outcome, 2 items',    file: 'case-outcome-2.html',   status: 'built' },
        { node: '3.6', label: 'The outcome, 5 items',    file: 'case-outcome-5.html',   status: 'built' },
        { node: '3.7', label: 'Interrupted reveal',      file: 'case-interrupted.html', status: 'built' },
        { label: 'D-B negative, no counter',    file: 'case-nocounter.html',   status: 'built' },
        { label: 'Values degraded',             file: 'case-degraded.html',    status: 'built' }
      ] },

    // DRAWN 22 AUGUST 2026. The whole of cluster 4, and the one screen an
    // unpublished peg empties rather than degrades: the conversion is the block.
    // REDRAWN 25 AUGUST 2026, D-96. Two steps, because the method list turned out
    // to be thirty five routes and one of the groups has no amount field at all.
    // The base page is step 1 at its own address; step 2 is three pages because
    // what it asks for depends on the route.
    // D-99 MADE THE DIALOG THE CARRIER, 25 August 2026, the same move D-54 made
    // for 2.4 and asked for by the founder in the message that supplied the
    // method list. The address survives and renders the same content as a full
    // page; the dialog renders it over the surface a person is already on, and
    // both run one renderer so neither can become the reduced one.
    { node: '4.1',  cluster: '4', name: 'Deposit',             file: 'deposit-dialog.html', ia: 'deposit.html',    status: 'built',
      base: 'The dialog, over the case screen',
      states: [
        { node: '4.1', label: 'Cold arrival at /deposit',     file: 'deposit.html',                 status: 'built' },
        { node: '4.1', label: 'Card and wallets',           file: 'deposit-card.html',            status: 'built' },
        { node: '4.1', label: 'Crypto',                     file: 'deposit-crypto.html',          status: 'built' },
        { node: '4.1', label: 'Crypto, no address yet',     file: 'deposit-crypto-nowallet.html', status: 'built' },
        { node: '4.1', label: 'Gift cards',                 file: 'deposit-giftcards.html',       status: 'built' },
        { node: '4.1', label: 'CS2 skins',                  file: 'deposit-skins.html',           status: 'built' },
        { node: '4.2', label: 'Deposit limit reached this period', file: 'deposit-ceiling-reached.html', status: 'built' },
        { node: '4.3', label: 'Limit raise pending',            file: 'deposit-ceiling-pending.html', status: 'built' },
        { node: '4.4', label: 'Crediting, named timer',      file: 'deposit-crediting.html',       status: 'built' },
        { node: '4.5', label: 'Payment declined',            file: 'deposit-declined.html',        status: 'built' }
      ] },

    // DRAWN 21 AUGUST 2026. The front door of the cluster that sits at the floor
    // of the entire As-Is emotional map, and the page the receipt exists for.
    { node: '5.1',  cluster: '5', name: 'Account and inventory', file: 'account.html',  ia: 'account.html',       status: 'built',
      base: 'Items held',
      states: [
        { label: 'Values degraded', file: 'account-degraded.html', status: 'built' },
        // THE CASH OUT LAYER, D-118. Pinned open on its own address for the same
        // reason the deposit layer is: a layer only reachable by a click on
        // another page is a layer nobody reviews.
        { label: 'Cash out, the layer', file: 'cashout-dialog.html', status: 'built' },
        { node: '5.2', label: 'Inventory empty', file: 'account-empty.html', status: 'built' }
      ] },

    // DRAWN 21 AUGUST 2026. The end of flow 3, and the page where the injury is
    // not the duration but the unattributed silence.
    { node: '5.3',  cluster: '5', name: 'Withdrawal',          file: 'withdraw.html',   ia: 'withdrawal.html',    status: 'built',
      base: 'Before the request',
      states: [
        { label: 'Requested, the clock running', file: 'withdraw-clock.html', status: 'built' },
        // SEVERAL ITEMS AT ONCE, D-110, founder question of 2 September 2026:
        // how does this look for two or more. At more than one item the record
        // and the settlement are one block, because the table already carried
        // the skin name and five cards in front of a sum are the same five
        // items rendered twice.
        { node: '5.3', label: 'Several items at once',   file: 'withdraw-many.html', status: 'built' },
        { node: '5.4', label: 'Not eligible, limit stated', file: 'withdraw-not-eligible.html',      status: 'built' },
        { node: '5.5', label: 'Steam degraded',             file: 'withdraw-steam-degraded.html',    status: 'built' },
        { node: '5.6', label: 'Account restricted, appeal', file: 'withdraw-restricted.html',        status: 'built' },
        { node: '5.7', label: 'Restriction upheld',         file: 'withdraw-restriction-upheld.html',status: 'built', dead: true },
        { node: '5.8', label: 'Trade offer expired',        file: 'withdraw-offer-expired.html',     status: 'built' }
      ] },

    // THREE NODES THE MAP GAINED ON 20 AUGUST 2026, D-36. The account menu carried four
    // rows because the map held four destinations; the founder answered the gap on the
    // map's side. 5.9 arrived with a parent, F3, and with D-C as its dependency. 5.10 and
    // 5.11 arrived with no parent in the three legal classes and carry that printed.
    // DRAWN 22 AUGUST 2026, and both specifications were written the same day.
    // D-36 put these on the map on 20 August, said stage 04 owed three more
    // screens, and wrote none of them: two days with a registered file, a 404
    // behind it and no node anywhere. 5.11 stays undrawn because its contents
    // are the founder's to decide and D-36 says so.
    { node: '5.9',  cluster: '5', name: 'History',              file: 'history.html',    ia: 'history.html',   status: 'built',
      base: 'Every roll, each with its hash',
      states: [
        // THE FIFTH TAB, D-108, AND IT IS FIRST IN THE STRIP because the
        // baseline puts its inventory history first. It is the same five rolls
        // keyed by the item, which is the shape the founder asked for and the
        // shape node 7.3 was already giving to strangers.
        { node: '5.9', label: 'Items, every skin won',        file: 'history-items.html',       status: 'built' },
        { node: '5.9', label: 'Items, none yet',              file: 'history-items-empty.html', status: 'built' },
        { node: '5.9', label: 'No rolls yet',                 file: 'history-empty.html',    status: 'built' },
        { node: '5.9', label: 'Nothing to check, D-C is no',  file: 'history-no-seed.html',  status: 'built' },
        { node: '5.9', label: 'A proof that does not match',  file: 'history-mismatch.html', status: 'built' },
        // THE OTHER THREE TABS ARE PAGES NOW, D-89, each with its own states. A
        // state that lives inside a panel nobody can link to is a state this
        // registry cannot list and the prototype panel cannot show.
        { node: '5.9', label: 'Deposits',                     file: 'history-deposits.html',            status: 'built' },
        { node: '5.9', label: 'Deposits, none yet',           file: 'history-deposits-empty.html',      status: 'built' },
        { node: '5.9', label: 'Withdrawals',                  file: 'history-withdrawals.html',         status: 'built' },
        { node: '5.9', label: 'Withdrawals, none yet',        file: 'history-withdrawals-empty.html',   status: 'built' },
        { node: '5.9', label: 'Withdrawals, past our ceiling',file: 'history-withdrawals-overdue.html', status: 'built' },
        { node: '5.9', label: 'Cash out, three rows',      file: 'history-cashout.html',             status: 'built' },
        { node: '5.9', label: 'Cash out, none yet',           file: 'history-cashout-empty.html',       status: 'built' },
        // THE STATE SET WAS COMPLETED PER TAB ON 23 AUGUST 2026, D-90, on the
        // founder's instruction that every tab carry its own states rather than
        // the two money tabs carrying an empty each. Each of the three has a
        // source already in this repository and none of them is a new subject:
        // the unfinished open is the system message 5.10 already sends and had
        // nowhere to land, the blocked deposit is 6.3 in force read from the
        // ledger's side, and the restricted withdrawal is G4's written ground
        // and appeal read from the same side.
        { node: '5.9', label: 'An open that did not finish', file: 'history-unfinished.html',              status: 'built' },
        { node: '5.9', label: 'Deposits, a boundary in force', file: 'history-deposits-blocked.html',      status: 'built' },
        { node: '5.9', label: 'Withdrawals, account restricted', file: 'history-withdrawals-restricted.html', status: 'built' }
      ] },

    { node: '5.10', cluster: '5', name: 'Profile',              file: 'profile.html',    ia: 'profile.html',   status: 'built',
      base: 'The daily entry, the messages, the record',
      states: [
        { node: '5.10', label: 'Nothing to read',  file: 'profile-quiet.html',      status: 'built' },
        { node: '5.10', label: 'Steam unreadable', file: 'profile-steam-down.html', status: 'built' }
      ] },

    // DRAWN 22 AUGUST 2026, D-81, AND STAGE 04 HAS NO UNBUILT PAGE LEFT.
    // D-36 marked its round 1 contents [?] on 20 August and stage 04 read that as
    // a question for the founder for two days. The record says the NODE owes the
    // answer, and the source was already in the repository: baseline-account.md
    // section 7 has carried all twenty rows of this screen since 18 August. What
    // was missing was the derivation, not the input.
    // ONE OF THE BASELINE'S TWENTY ROWS SURVIVES. Withdrawal to Steam is round 1,
    // it works by sending a trade offer, a trade offer needs a trade URL, and no
    // node on the map held that field.
    { node: '5.11', cluster: '5', name: 'Settings',             file: 'settings.html',   ia: 'settings.html', status: 'built',
      base: 'The trade URL is set',
      states: [
        { label: 'Trade URL not set',    file: 'settings-no-trade.html', status: 'built' },
        { label: 'Saved value refused',  file: 'settings-refused.html',  status: 'built' },
        { label: 'No Steam account linked', file: 'settings-no-steam.html', status: 'built' }
      ] },

    // DRAWN 22 AUGUST 2026. Cluster 6 whole. Two of the five pages are internal
    // states rather than numbered nodes: the guest, because this page reads in
    // full without an account and that refusal has to be visible, and the self
    // excluded surface, because its four controls behave differently from any
    // other boundary in force.
    { node: '6.1',  cluster: '6', name: 'Responsible play',    file: 'responsible.html', ia: 'responsible.html',  status: 'built',
      base: 'No boundary in force',
      states: [
        { node: '6.1', label: 'Guest, no account',           file: 'responsible-guest.html',    status: 'built' },
        { node: '6.2', label: 'Self exclusion confirmation', file: 'responsible-confirm.html',  status: 'built' },
        { node: '6.3', label: 'Boundary in force',           file: 'responsible-in-force.html', status: 'built' },
        { node: '6.3', label: 'Self excluded',               file: 'responsible-excluded.html', status: 'built' }
      ] },

    // DRAWN 21 AUGUST 2026, and it jumped the queue on the same rule the catalogue
    // did: the live feed is in the shell on every page since D-59 and every one of
    // its twenty four tiles lands here, so result.html was the densest dead link in
    // the project. A dead link on every page outranks the next screen in the flow.
    { node: '7.1',  cluster: '7', name: 'Public result',       file: 'result.html',     ia: 'public-result.html', status: 'built',
      base: 'Stranger, no account',
      states: [
        { label: 'The owner',              file: 'result-owner.html',      status: 'built' },
        { label: 'Recomputed, matched',    file: 'result-checked.html',    status: 'built' },
        { label: 'Recomputed, mismatched', file: 'result-mismatched.html', status: 'built' },
        { label: 'Proof not available',    file: 'result-noproof.html',    status: 'built' },
        { node: '7.2', label: 'Result gone or private', file: 'result-gone.html', status: 'built' }
      ] },

    // BUILT 23 AUGUST 2026, D-90, AND IT IS A FOUNDER DECISION AGAINST THIS
    // PROJECT'S OWN ARGUMENT. D-69 left two carriers holding opposite verdicts on
    // one object for two days: 0.8 gave the feed's avatar a public profile as its
    // destination and printed "no node yet" on every tile of every page, and 7.1
    // block 6 refused a public profile outright because it would rebuild the
    // trophy shelf that node was created to replace. The founder chose the first.
    // THE REFUSAL IS NOT DELETED ANYWHERE. It lost, it did not turn out to be
    // wrong, and it stays in 7.1's own comment with its reason. What answers it is
    // built into every card: each one carries a route to its own round proof, and
    // the page has no total, no rank and no tier on it.
    // NO PARENT IN THE THREE LEGAL CLASSES, PRINTED ON THE PAGE. Same ground as
    // 5.10 and 5.11 under D-36, same treatment as D-38: the empty parent is shown
    // and no backlog row is retro-fitted into cjm-to-be.md.
    { node: '7.3',  cluster: '7', name: 'Public profile',      file: 'player.html',     ia: 'public-profile.html', status: 'built',
      base: 'A stranger reading it',
      states: [
        { node: '7.3', label: 'The owner reading their own', file: 'player-owner.html', status: 'built' },
        { node: '7.3', label: 'Nothing won yet',             file: 'player-empty.html', status: 'built' },
        { node: '7.3', label: 'No page to show',             file: 'player-gone.html',  status: 'built' },
        { node: '7.3', label: 'Hidden, the owner looking at it', file: 'player-hidden.html', status: 'built' }
      ] }
  ]
};

/* ONE ACCOUNT, ONE SOURCE, AND IT IS DECLARED BEFORE ANYTHING READS IT, D-90.
   D-89 CLOSED THIS CLASS AND CLOSED IT ON ONE CARRIER OUT OF TWO. It found the
   account band reading Spectacle and ID 953709 while the profile's own record
   card read nightjar_cs and acc-7f3a91c4, fixed the band, wrote WF_WHO, and
   declared the defect closed. The account MENU hanging off that same band went
   on printing a hardcoded Spectacle, in its text and in the control's accessible
   name, ON EVERY PAGE THAT CARRIES THE SHELL. Two decisions in a row say this
   class is shut while it was live on seventy two pages.
   IT WAS MISSED FOR THE REASON THE CLASS ALWAYS SURVIVES: the fix went where the
   defect was seen rather than to every reader of the fact. The single source was
   written and then declared halfway down the file, below the menu that needed it,
   so the menu could not have used it even if the fix had looked.
   IT IS DECLARED HERE, ABOVE THE FIRST READER, AND NOTHING ELSE MAY CARRY A NAME.
   A page overrides it before _nav.js loads, which is how profile-steam-down states
   that Steam cannot be read: one page, one override, one source still. */
window.WF_WHO = window.WF_WHO || { name: 'nightjar_cs', id: 'acc-7f3a91c4', since: '12 Jan 2026', email: 'nightjar_cs@example.com' };

/* THE STANDING DEPOSIT BONUS, D-94, founder decision of 25 August 2026, AND IT IS
   DECLARED HERE FOR THE REASON WF_WHO IS. The badge on the header control and the
   statement on 4.1 are ONE FACT RENDERED TWICE, and this project already has the
   scar: an account name declared halfway down this file, below one of its own
   readers, shipped two different names across seventy-two pages. So the number
   lives once, above every reader, and no page writes its own.
   THE PERCENTAGE NEVER TRAVELS WITHOUT THE CAP. "+5%" alone on a control, with
   "up to 100 coins per 24 hours" discoverable only at the end of the form, is the
   rising-threshold shape B4-1 describes with the sign reversed. The badge cannot
   hold the cap, so the ACCESSIBLE NAME carries both and 4.1 prints both.
   WAGERING IS FALSE AND IT IS NOT A SETTING. C4 is an MVP rule: no withdrawal ever
   demands a sum that was not named before the money went in. A bonus with a
   wagering requirement is B4-1 in better clothes, cjm-to-be.md answer 3. The flag
   is here so that a page cannot quietly render otherwise. */
window.WF_BONUS = window.WF_BONUS || {
  pct: '5%', pctFull: '5.00%', cap: '100 coins', period: '24 hours', wagering: false
};

/* THE ACCOUNT'S MONEY, ONCE, round 15. The pair was typed on 68 pages and three
   more times in this file, 71 declarations of one figure, and a sale changed
   none of them. A page declares WF_SHELL.money only when its state differs from
   this; every reader goes through moneyNow(), and a sale or a withdrawal moves
   the figures through moneyAdd(), which repaints every place that shows them.
   Samples by D-124, marked in 5.1. */
var WF_MONEY = { balance: 74.20, held: 140.95 };
/* OUR PUBLISHED WITHDRAWAL TIMES, ONCE, round 15: the pair was typed on seven
   withdrawal pages and in Home's renderer, while home.md said 5.3 reads them from
   one place. Elements carrying data-pub are filled from here. Samples, D-124,
   marked in 1.0. */
var WF_PUB = { median: '1 h 40 m', p90: '6 h 15 m' };
/* ONE SOURCE PER REPEATED STRING, round 15 step 9, wireframes/CLAUDE.md rule 6.
   Every product string typed by hand on five or more wireframe pages lives here
   once. A page marks each copy <span data-str="key">text</span>, the text kept as
   the no-script fallback, and the boot fills it from here; the renderers below read
   the same entry. Stage 05 rewrites a string here, never page by page. A value
   holding markup is written as markup and filled as markup. Names, case data and
   figures that differ by page are not strings and are not here. */
var WF_STR = {
  // Ironbound's published pair, round 15: typed on twelve case pages.
  rtpEv: 'RTP 94.2 %, expected value 11.68 coins',
  /* Shared navigation words and acts */
  home: 'Home',
  cases: 'Cases',
  allCases: 'All cases',
  support: 'Support',
  signIn: 'Sign in',
  history: 'History',
  settings: 'Settings',
  myItems: 'My items',
  addFunds: 'Add funds',
  sendToSteam: 'Send to Steam',
  responsiblePlay: 'Responsible play',
  provablyFair: 'Provably fair',
  legal: 'Legal',
  termsOfUse: 'Terms of use',
  privacyPolicy: 'Privacy policy',
  cookiePolicy: 'Cookie policy',
  refundPolicy: 'Refund and payments policy',
  copy: 'Copy',
  save: 'Save',
  search: 'Search',
  filters: 'Filters',
  peg: '1 coin = $1.00',
  /* Case head */
  howItWorks: 'How it works',
  riskBand: 'Risk band',
  favourite: 'Favourite',
  nineItems: 'Nine items, one roll.',
  entryCost: 'Entry cost, one roll',
  checkRound: 'Check this round',
  /* Catalogue */
  catalogueH1: 'All CS2 cases, with published chances and values',
  categories: 'Categories',
  daily: 'Daily',
  dailySub: 'Wager to climb. The tier decides which free case you get',
  featured: 'Featured',
  featuredSub: 'Our pick of the shelf',
  community: 'Community',
  communitySub: 'Cases our players put together',
  classic: 'Classic',
  classicSub: 'The collections that were here first',
  numbersH2: 'What the numbers on a case mean',
  numbersBody: 'Every tile shows the entry cost of one open and the risk band of the case, High, Medium or Low, read from its drop table. Open a case to see every item with its chance, its current value and the ticket range the roll resolves against. The daily case is earned by wagering, and the tier you reach decides which case it opens.',
  /* Result and player */
  whatThisPlaceIs: 'What this place is',
  howProofWorks: 'How the proof works',
  wonBy: 'Won by',
  worthNow: 'Worth now, read 21 Aug 2026 09:31',
  rolls: 'Rolls',
  /* Withdrawal */
  goingToSteam: 'Going to Steam account',
  medianToSteam: 'Median time to Steam',
  p90ToSteam: 'Nine in ten arrive within this',
  yourSkinPrice: 'Your skin price',
  marketSkinPrice: 'Market skin price',
  balanceImpact: 'Your balance impact',
  /* Support */
  questionsAnswers: 'Questions and answers',
  closed: 'closed',
  /* Provably fair */
  versionHistory: 'Version history',
  fairH1: 'Provably fair: check any round yourself',
  fairPublic: 'This page is public. You do not need an account to read it, and you do not need one to check a round.',
  fairProves: 'What this proves',
  fairProvesBody: 'The result of this round was fixed before you clicked, and it was not changed afterwards.',
  fairNotProves: 'What this does not prove',
  fairNotProvesBody: 'That the chances we publish are the chances the roll used.',
  fairAnswered: 'Where that is answered',
  fairObserved: 'The observed rate beside every published percentage on the case screen',
  fairPublished: 'The published chance and current value on every item',
  fairTested: 'The tested return and the expected value at that entry cost',
  checkARound: 'Check a round',
  readAlgorithm: 'Read the algorithm',
  fairFixedH: 'How a round is fixed before you click',
  fairStep1: 'We publish the hash of a server seed before the round is offered. The hash is a commitment: the seed behind it cannot be swapped later without the hash changing.',
  fairStep2: 'Your round is settled once, from that server seed, a client seed and a nonce.',
  fairStep3: 'The reveal plays back a result that already exists rather than deciding one while you watch.',
  fairStep4: 'The server seed is revealed when the seed rotates, and from then on anyone can recompute the round.',
  fairNoProof: 'Two reasons a round may have no proof to check yet: it predates the published ledger, or its seed has not rotated. Neither means anything went wrong.',
  fairMadeOf: 'What a round proof is made of',
  serverSeedHash: 'Server seed hash',
  fairHashWhen: 'Published before the round runs',
  serverSeed: 'Server seed',
  fairSeedWhen: 'Revealed on rotation',
  clientSeed: 'Client seed',
  fairClientWhen: 'Shown with every round',
  nonce: 'Nonce',
  fairNonceWhat: 'A whole number that advances',
  settledResult: 'Settled result',
  fairResultWhat: 'The number the roll produced',
  ticketRange: 'Ticket range',
  fairRangeWhat: 'The interval the result falls in, and the item holding it',
  fairTableRow: 'The drop table in force at that round, versioned',
  fairTableWhat: 'Its version, printed with the round',
  fairHashLabel: 'Server seed hash, published before the round',
  fairSeedLabel: 'Server seed, revealed on rotation',
  recompute: 'Recompute this round',
  fairMismatchH: 'If your check does not match ours',
  fairMismatchBody: 'Report it from the result, with the round attached. You get a reference and an answer within 72 hours.',
  fairAlgoH: 'The algorithm, published in full',
  fairAlgoStamp: 'Version 1, published 12 Jan 2026',
  fairComputation: 'The computation',
  fairAlgo: 'HMAC-SHA256 of the server seed, keyed with <code>client seed:nonce</code>. The first eight hex characters, read as a number, modulo 100&#160;000, plus one, is the ticket. The item whose ticket range holds it is the result.',
  fairExampleH: 'A worked example',
  fairExample: 'Server seed <code>7c1e…a904</code>, client seed <code>nightjar</code>, nonce <code>412</code>. HMAC starts <code>3a9009c1</code>, which is 982&#160;518&#160;209; modulo 100&#160;000 plus one is ticket <b>18&#160;210</b>, in the range 11&#160;001 to 23&#160;000, USP-S Kill Confirmed.',
  itsPublicPage: 'Its public page',
  fairVersionRow: 'Version 1, 12 Jan 2026. First published.',
  questions: 'Questions',
  fairQ1: 'Can I use my own tool instead of yours?',
  fairA1: 'That is the point. The algorithm is published so that a stranger can write their own and get our answer.',
  fairQ2: 'Why can I not check a round from last year?',
  fairA2: 'Rounds from before the published ledger have no commitment behind them, so they cannot be checked here.',
  /* Legal */
  legalWho: 'Who we are',
  operatingCompany: 'Operating company',
  operatingCompanySample: 'Operating company name',
  registeredAddress: 'Registered address',
  registeredAddressSample: 'Street, city, country',
  email: 'Email',
  emailSample: 'legal@cs2clutch.example',
  tradeRegister: 'Trade register and number',
  tradeRegisterSample: 'Register, no. 000000',
  supervisoryAuthority: 'Supervisory authority',
  supervisoryAuthoritySample: 'Licensing authority name',
  vatNumber: 'VAT number',
  vatNumberSample: 'VAT no. 000000000',
  legalQuestions: 'Questions about this document',
  askUs: 'Ask us',
  /* Responsible play */
  rpWhat: 'What these tools do',
  rpFour: 'Four boundaries you set yourself.',
  rpTighten: 'Tightening one takes effect immediately. Loosening one takes 24 hours, and the boundary you have now holds until then.',
  rpClosesH: 'What a boundary closes, and what it never closes',
  rpCanClose: 'A boundary can close',
  rpCanCloseList: 'Adding funds. Opening a case. A session, when its length is reached.',
  rpNeverClose: 'No boundary ever closes',
  rpNeverCloseList: '<strong>Taking what you hold out to Steam.</strong> Support. Reading the product.',
  depositLimit: 'Deposit limit',
  rpDepositWhat: 'Caps what you can put in over a period.',
  perDay: 'per day',
  perWeek: 'per week',
  perMonth: 'per month',
  sessionLimit: 'Session limit',
  rpSessionWhat: 'Ends a session once it has run this long.',
  min30: '30 minutes',
  hour1: '1 hour',
  hours2: '2 hours',
  hours4: '4 hours',
  coolDown: 'Cool down',
  rpCoolWhat: 'Closes adding funds and opening cases for a period you choose.',
  extend: 'Extend',
  immediately: 'Immediately.',
  shorten: 'Shorten',
  rpShortenNo: 'Not possible. It ends by running out.',
  hours24: '24 hours',
  days7: '7 days',
  days30: '30 days',
  startCoolDown: 'Start a cool down',
  selfExclusion: 'Self exclusion',
  rpExclWhat: 'Closes adding funds and opening cases for longer. The one thing here you cannot undo.',
  endEarly: 'End early',
  rpEndEarlyNo: 'Not possible, and that is the point of it.',
  months6: '6 months',
  year1: '1 year',
  years5: '5 years',
  selfExclude: 'Self exclude',
  rpNotLimit: 'Support that is not a limit',
  rpNotOurs: 'Help that is not ours',
  rpTherapy: '<a href="https://www.gamblingtherapy.org/" rel="external nofollow">Gambling Therapy</a>, free and confidential, in any country.'
};
/* WHAT A SESSION CARRIES, round 16, D-152, option C. Round 16 walked page to
   page and nothing a person did reached the next page: a sale, a limit, a sign
   in. Three things now travel within one browser session and nothing else does:
   - THE SIGNED-IN STATE. Any signed-in page sets it, a sign in screen and Sign
     out clear it. While it is set, a link to the guest home, catalogue or case
     opens the account's own, and the public pages that both states can read,
     fair, result, player and the catalogue's states, render the account's shell.
   - MONEY AND ITEMS AFTER AN ACT. A sale, a send, a cash out or an open writes
     the pair here, and every signed-in page reads it before its own sample. An
     item sold or cashed out leaves My items; one sent shows its clock mark.
   - THE LIMITS SET. A deposit limit, a session length, a cool down and a self
     exclusion. A cool down or an exclusion in force is a boundary on every
     signed-in page: the header's + opens what is in force, Pay and Open refuse.
   Everything else is the snapshot its page draws, dated 21 Aug 2026 09:31: the
   ledgers, the history rows, the tickets and every state page reached by its
   own address before any act. conventions.md section 4.1 holds the boundary. */
var WF_SESS = (function () {
  var K = 'wf-sess';
  function all() { try { return JSON.parse(sessionStorage.getItem(K) || '{}') || {}; } catch (e) { return {}; } }
  return {
    get: function (k) { return all()[k]; },
    set: function (k, v) { var s = all(); if (v === undefined || v === null) delete s[k]; else s[k] = v; try { sessionStorage.setItem(K, JSON.stringify(s)); } catch (e) {} },
    gone: function (key, how) { if (!key) return; var g = this.get('gone') || {}; g[key] = how; this.set('gone', g); }
  };
})();
/* A cool down or an exclusion in force, read against the prototype's now. */
function sessBoundary() {
  var L = WF_SESS.get('limits') || {};
  if (L.excl) return { kind: 'excl', until: L.excl.until, route: 'responsible-excluded.html?x=' + encodeURIComponent(L.excl.per) };
  if (L.cool && Date.parse(L.cool + ':00Z') > Date.UTC(2026, 7, 21, 9, 31)) {
    var d = new Date(Date.parse(L.cool + ':00Z')), M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return { kind: 'cool', until: d.getUTCDate() + ' ' + M[d.getUTCMonth()] + ' ' + d.getUTCFullYear() + ', 09:31', route: 'responsible-in-force.html' };
  }
  return null;
}
/* WHO IS SIGNED IN IS DECIDED BY SIGNING IN, round 17, D-160. Round 16 let
   any signed-in page set the session, so a guest who opened the terms from the
   footer was signed in with no consent, no 18+ declaration and no gate, and
   could open a case. Now the state has three values: unknown, a guest, and
   signed in. Signing in sets it; a sign in screen and Sign out make it a guest;
   a page only an account can have, opened by its address, sets it, because a
   guest's links never lead there. The pages both can read, the public ones and
   the legal, support and responsible play pages, follow the session. */
var WF_BOTH = /^(legal(-changed|-superseded|-unpublished|-refund)?|support|responsible)\.html$/;
(function sessBoot() {
  var c = window.WF_SHELL;
  if (!c) return;
  var f = location.pathname.split('/').pop() || 'index.html', sg = WF_SESS.get('signed');
  if (/^signin/.test(f)) WF_SESS.set('signed', false);
  else if (c.account && WF_BOTH.test(f)) {
    if (sg === false) {
      if (f === 'responsible.html') { location.replace('responsible-guest.html'); return; }
      c.account = false; c.money = undefined; c.carried = true;
    }
  }
  else if (c.account) WF_SESS.set('signed', true);
  else if (sg === true && /^(fair|result|player|catalogue)/.test(f)) { c.account = true; c.carried = true; }
  else if (sg === undefined) WF_SESS.set('signed', false);
  if (c.account && sessBoundary()) { c.boundary = true; c.bonus = false; }
})();
/* Where a boundary sends a person: what is in force, never the empty form. */
function boundaryRoute() { var b = sessBoundary(); return b ? b.route : 'responsible-in-force.html'; }

function moneyNow() {
  var M = (window.WF_SHELL && window.WF_SHELL.money) || {};
  var S = WF_SESS.get('money');
  if (S && window.WF_SHELL && window.WF_SHELL.account && window.WF_SHELL.money !== false) return { balance: S.balance, held: S.held };
  var p = function (v, d) { return v === undefined ? d : parseFloat(String(v)); };
  return { balance: p(M.balance, WF_MONEY.balance), held: p(M.held, WF_MONEY.held) };
}
/* A SALE ASKS FIRST, round 15, node 5.11 section 4.2: there is no switch that
   turns the confirmation off, so every sale has one. The first press turns the
   control into its question; the second sells; it disarms after five seconds. */
function confirmFirst(b) {
  if (b.getAttribute('data-armed') === '1') { b.removeAttribute('data-armed'); b.textContent = b.getAttribute('data-was'); return true; }
  var was = b.textContent;
  b.setAttribute('data-armed', '1'); b.setAttribute('data-was', was);
  b.textContent = 'Press again to ' + was.charAt(0).toLowerCase() + was.slice(1);
  setTimeout(function () { if (b.getAttribute('data-armed') === '1') { b.removeAttribute('data-armed'); b.textContent = was; } }, 5000);
  return false;
}
function moneyAdd(dBal, dHeld) {
  var m = moneyNow();
  var nb = (m.balance + dBal).toFixed(2) + ' coins', nh = (m.held + dHeld).toFixed(2) + ' coins';
  window.WF_SHELL = window.WF_SHELL || {};
  window.WF_SHELL.money = { balance: nb, held: nh };
  // AN ACT IS CARRIED, A REPAINT IS NOT: moneyAdd(0, 0) only redraws.
  if (dBal || dHeld) WF_SESS.set('money', { balance: parseFloat(nb), held: parseFloat(nh) });
  Array.prototype.forEach.call(document.querySelectorAll('[data-money]'), function (e) {
    var v = e.getAttribute('data-money') === 'balance' ? nb : nh;
    e.textContent = v;
    var a = e.closest('a[aria-label]');
    if (a) a.setAttribute('aria-label', a.getAttribute('aria-label').replace(/, [\d.]+ coins$/, ', ' + v));
  });
}

/* THE FUNDING ROUTES, D-96, AND EVERY ONE OF THEM IS WALKED RATHER THAN CHOSEN.
   research/docs/baseline-account.md section 5b.1 as corrected on 25 August 2026:
   twenty seven fiat and eight crypto, thirty five in all, in the order the live
   product renders them.
   THE ORDER IS THE BASELINE'S AND IT IS NOT ALPHABETICAL, which matters: the
   first tile carries the recommendation and the second is the instant one, so
   re-sorting this array would silently move the only two pieces of guidance on
   the screen.
   THE THIRD FIELD IS WHERE STEP 2 GOES, and it is the whole reason this is data
   rather than markup. Twenty five of the twenty seven land on the same form, one
   leaves the product, and one, CS2 Skins, lands on its own pane since D-129.
   CS:GO SKINS HAS NO PARENT AND SHIPS SAYING SO. Depositing skins is a real
   capability of the live product and there is no row for it in cjm-to-be.md, no
   node on the map and no flow drawn. CLAUDE.md: a screen, a block or a component
   with no parent is cut, or carried with its orphan status printed in its own
   row. It is carried. It was not a link while it opened nothing, the dead item
   defect with a logo on it; since the founder took it back into the grid, D-124
   and D-129, it routes to deposit-skins.html, WF_PAY.route below. */
window.WF_PAY = window.WF_PAY || {
  fiat: [
    ['Visa Or Mastercard', 'card', 'best'],
    ['CS2 Skins',          'skins', 'instant'],
    ['UnionPay',           'card'],
    ['Neosurf',            'card'],
    ['Skrill',             'card'],
    ['Paysafecard',        'card'],
    ['Alipay',             'card'],
    ['Wechat Pay',         'card'],
    ['Neteller',           'card'],
    ['Sofort',             'card'],
    ['EPS',                'card'],
    ['Giropay',            'card'],
    ['Bancontact',         'card'],
    ['PayPal',             'card'],
    ['Pix',                'card'],
    ['Webpay',             'card'],
    ['Multibanco',         'card'],
    ['Blik',               'card'],
    ['Przelewy24',         'card'],
    ['American Express',   'card'],
    ['Google Pay',         'card'],
    ['Apple Pay',          'card'],
    ['Wise',               'card'],
    ['Gift Cards',         'gift'],
    ['GrabPay',            'card'],
    ['Fawry',              'card'],
    ['Volet',              'card']
  ],
  crypto: [
    ['Bitcoin',  'crypto'], ['Ethereum', 'crypto'], ['Litecoin', 'crypto'],
    ['Tether',   'crypto'], ['Tron',     'crypto'], ['Xrp',      'crypto'],
    ['Solana',   'crypto'], ['Other',    'crypto']
  ],
  route: { card: 'deposit-card.html', crypto: 'deposit-crypto.html', gift: 'deposit-giftcards.html', skins: 'deposit-skins.html' }
};

(function () {
  var WF = window.WF_NAV;
  if (!WF) return;

  var BASE = typeof window.WF_BASE === 'string' ? window.WF_BASE : '';
  var IA_BASE = typeof window.WF_IA_BASE === 'string' ? window.WF_IA_BASE : '../ia/';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // Every page of a screen, base plus states, as one flat list.
  function pagesOf(sc) {
    var out = [{ label: sc.base, file: sc.file, status: sc.status, isBase: true }];
    (sc.states || []).forEach(function (st) { out.push(st); });
    return out;
  }

  function allPages() {
    var n = 0;
    WF.screens.forEach(function (sc) { n += pagesOf(sc).length; });
    return n;
  }

  function builtPages() {
    var n = 0;
    WF.screens.forEach(function (sc) {
      pagesOf(sc).forEach(function (p) { if (p.status === 'built') n++; });
    });
    return n;
  }

  function screenByNode(code) {
    for (var i = 0; i < WF.screens.length; i++) if (WF.screens[i].node === code) return WF.screens[i];
    return null;
  }

  // A flow step can be a screen OR one of its state pages: flows.md walks node codes
  // like 3.5 and 3.6, which are states of 3.3 rather than screens of their own.
  // Resolving only screens would drop them silently, which is the defect this
  // registry exists to prevent.
  // IT MATCHES A FIELD RATHER THAN SEARCHING INSIDE A STRING, D-46. Until then the
  // code lived typed into the label text, so a state could only be found by a flow if
  // somebody had remembered to prefix its label, and two renderers disagreed about
  // which code every state on 3.3 carried.
  function stepByNode(code) {
    var sc = screenByNode(code);
    if (sc) return { screen: sc, page: null };
    for (var i = 0; i < WF.screens.length; i++) {
      var host = WF.screens[i];
      var sts = host.states || [];
      for (var j = 0; j < sts.length; j++) {
        if (sts[j].node === code) return { screen: host, page: sts[j] };
      }
    }
    return null;
  }

  function currentFile() {
    var p = location.pathname;
    return p.substring(p.lastIndexOf('/') + 1) || 'index.html';
  }

  /* ---------- A. overview.html: flow entries ---------- */
  function renderFlows(host) {
    if (!host) return;
    WF.flows.forEach(function (f) {
      var box = el('div', 'wf-flow');
      box.appendChild(el('div', 'wf-flow-h', f.label));
      var line = el('div', 'wf-flow-line');
      var unresolved = [];
      f.screens.forEach(function (code, i) {
        var step = stepByNode(code);
        if (!step) { unresolved.push(code); return; }
        if (i) line.appendChild(el('span', 'wf-flow-arrow', '→'));
        var target = step.page || { file: step.screen.file, status: step.screen.status };
        var a = el('a', 'wf-flow-screen' + (target.status === 'built' ? ' is-built' : ''));
        a.href = BASE + target.file;
        a.appendChild(el('span', 'wf-flow-node', code));
        a.appendChild(el('span', null, step.page ? step.page.label.replace(/^\d\.\d\s*/, '') : step.screen.name));
        if (step.page) {
          a.appendChild(el('span', 'wf-flow-of', 'state of ' + step.screen.node + ' ' + step.screen.name));
        } else {
          var chips = el('span', 'wf-chips');
          pagesOf(step.screen).forEach(function (p) {
            chips.appendChild(el('span', 'wf-chip' + (p.status === 'built' ? ' is-built' : ''), p.isBase ? 'base' : p.label));
          });
          a.appendChild(chips);
        }
        line.appendChild(a);
      });
      // A code the registry cannot resolve is printed, never dropped.
      if (unresolved.length) {
        box.appendChild(el('div', 'wf-flow-warn', 'Unresolved in the registry: ' + unresolved.join(', ')));
      }
      box.appendChild(line);
      host.appendChild(box);
    });
  }

  /* ---------- A. overview.html: coverage map ---------- */
  function renderCoverage(host) {
    if (!host) return;
    var legend = el('div', 'wf-legend');
    legend.appendChild(el('span', 'wf-key wf-key-built', 'solid = built'));
    legend.appendChild(el('span', 'wf-key wf-key-spec', 'dashed = specification only'));
    var built = 0, spec = 0;
    WF.screens.forEach(function (sc) { sc.status === 'built' ? built++ : spec++; });
    legend.appendChild(el('span', 'wf-count', built + ' built · ' + spec + ' in specification · ' + builtPages() + ' of ' + allPages() + ' pages'));
    host.appendChild(legend);

    WF.clusters.forEach(function (cl) {
      var rows = WF.screens.filter(function (sc) { return sc.cluster === cl.key; });
      if (!rows.length) return;
      var group = el('div', 'wf-cov-group');
      group.appendChild(el('div', 'wf-cov-head', cl.key + '. ' + cl.label));
      var grid = el('div', 'wf-cov-grid');
      rows.forEach(function (sc) {
        var card = el(sc.status === 'built' ? 'a' : 'div', 'wf-cov' + (sc.status === 'built' ? ' is-built' : ' is-spec'));
        if (sc.status === 'built') card.href = BASE + sc.file;
        card.appendChild(el('span', 'wf-cov-node', sc.node));
        card.appendChild(el('span', 'wf-cov-name', sc.name));
        // A SCREEN IS BUILT BEFORE ALL OF ITS PAGES ARE, so the card counts both. It
        // printed "5 pages" for a screen with one page drawn and four still spec, which
        // is a coverage map claiming coverage it does not have: the one number on this
        // card that a reader takes at face value.
        var pages = pagesOf(sc);
        var n = pages.length;
        var done = pages.filter(function (p) { return p.status === 'built'; }).length;
        card.appendChild(el('span', 'wf-cov-meta',
          sc.status !== 'built' ? n + ' pages · IA' :
          done === n ? n + ' pages' : done + ' of ' + n + ' pages'));
        grid.appendChild(card);
      });
      group.appendChild(grid);
      host.appendChild(group);
    });
  }

  /* ---------- B. the wireframe-only side panel, for screen pages ---------- */
  function renderPanel(host) {
    if (!host) return;
    var cur = currentFile();
    var root = el('div', 'wfp');

    var head = el('div', 'wfp-head');
    var back = el('a', 'wfp-back', 'All screens →');
    back.href = BASE + 'overview.html';
    head.appendChild(back);
    head.appendChild(el('div', 'wfp-badge', 'Wireframes'));
    head.appendChild(el('div', 'wfp-sub', 'grey clickable prototype'));
    head.appendChild(el('div', 'wfp-count', builtPages() + ' of ' + allPages() + ' pages built'));
    root.appendChild(head);

    var done = [];
    WF.screens.forEach(function (sc) {
      pagesOf(sc).forEach(function (p) {
        if (p.status === 'built') done.push({ sc: sc, p: p });
      });
    });
    if (done.length) {
      root.appendChild(el('div', 'wfp-cluster', 'Built so far'));
      done.forEach(function (d) {
        var a = el('a', 'wfp-done' + (d.p.file === cur ? ' is-current' : ''));
        a.href = BASE + d.p.file;
        a.appendChild(el('span', 'wfp-node', d.p.node || d.sc.node));
        a.appendChild(el('span', 'wfp-name', d.p.label));
        root.appendChild(a);
      });
    }

    var currentScreen = null;
    WF.clusters.forEach(function (cl) {
      var rows = WF.screens.filter(function (sc) { return sc.cluster === cl.key; });
      if (!rows.length) return;
      root.appendChild(el('div', 'wfp-cluster', cl.key + '. ' + cl.label));
      rows.forEach(function (sc) {
        var pages = pagesOf(sc);
        var isCur = pages.some(function (p) { return p.file === cur; });
        if (isCur) currentScreen = sc;

        var row = el(sc.status === 'built' ? 'a' : 'span', 'wfp-screen' + (isCur ? ' is-current' : '') + (sc.status === 'built' ? '' : ' is-spec'));
        if (sc.status === 'built') row.href = BASE + sc.file;
        row.appendChild(el('span', 'wfp-node', sc.node));
        row.appendChild(el('span', 'wfp-name', sc.name));
        if (sc.status !== 'built') row.appendChild(el('span', 'wfp-tag', 'spec'));
        root.appendChild(row);

        // Accordion: states open only under the screen you are standing on.
        if (!isCur) return;
        pages.forEach(function (p) {
          var st = el(p.status === 'built' ? 'a' : 'span', 'wfp-state' + (p.file === cur ? ' is-current' : '') + (p.status === 'built' ? '' : ' is-spec'));
          if (p.status === 'built') st.href = BASE + p.file;
          if (p.file === cur) st.setAttribute('data-active', 'true');
          // THE CODE IS A FIELD AND IT IS SHOWN, D-46. Every state row carries its own
          // node code where it has one and the host's where it does not, so a variation
          // is legibly a variation of this node rather than a number of its own.
          st.appendChild(el('span', 'wfp-snode', p.node || sc.node));
          st.appendChild(el('span', 'wfp-sname', p.label));
          if (p.dead) st.appendChild(el('span', 'wfp-dead', 'dead end'));
          root.appendChild(st);
        });
      });
    });

    // The route to the node's own IA page, WHERE THERE IS ONE. 5.9, 5.10 and 5.11 are
    // nodes on the map without node pages of their own, D-36 having created them at
    // stage 04 rather than at 03b, so the link is absent rather than pointing nowhere.
    if (currentScreen && currentScreen.ia) {
      var foot = el('div', 'wfp-foot');
      var ia = el('a', 'wfp-ia', '← IA specification, node ' + currentScreen.node);
      ia.href = IA_BASE + currentScreen.ia;
      foot.appendChild(ia);
      root.appendChild(foot);
    }

    host.appendChild(root);
    // AFTER THE PANEL IS IN THE DOCUMENT, and that is the whole of the first attempt's
    // failure: scrollTop on a detached element is discarded and its rect is all zeros.
    keepScroll(root, 'wf-panel-scroll',
      firstOf(root, ['.wfp-state.is-current', '.wfp-screen.is-current', '.wfp-done.is-current']));

    // Off-canvas below 900px. The class goes on .wfp, which is what the stylesheet
    // moves: putting it on the host aside was the bug this comment replaces. The
    // panel owns its own toggle, because a per-page script would be cloned 63 times
    // and each clone would be a chance to get it wrong.
    var toggle = document.querySelector('.wfp-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = root.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
      });
      root.addEventListener('click', function (e) {
        if (e.target.closest('a') && window.innerWidth < 900) {
          root.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  /* ---------- C. The globals, 0.1 and 0.2, rendered once and reused ----------
     Step 5. Nobody redraws the header per screen. A screen declares its state with
     window.WF_SHELL = { account: false, active: 'index.html' } and gets the carriers.

     The model is the map's: two carriers on desktop, three on mobile, and no carrier
     holds another's kind. The rail owns the destinations. The header owns money and
     the account and holds NO destination at all. The bar is a shortcut subset of the
     rail and the rail is always the superset. */

  function shellCfg() {
    var c = window.WF_SHELL || {};
    return { account: !!c.account, active: c.active || currentFile(), boundary: !!c.boundary };
  }

  // Three destinations before an account, four after. Home is not one of them: the
  // logo is the home route, CLAUDE.md, the navigation model.
  // D-29, 19 August 2026. ONE destination before an account and two after. The rail is
  // the ways-to-play carrier, as the baseline runs it, and round 1 ships one way to
  // play. Provably fair and Responsible play did not disappear: they are in the footer,
  // in the Play column and the Play responsibly column, which is where the baseline
  // keeps its own Provably Fair link. The cost is printed in the decision record.
  // D-40, 20 August 2026. MY ITEMS LEAVES THE RAIL, so the rail carries ONE destination
  // in both states. It did not lose a destination, it stopped holding one twice: since
  // D-36 the account menu carries My items as its first row, and CLAUDE.md's own rule is
  // that no carrier holds another's kind. My items is an account thing and the header
  // owns the account.
  function railItems() {
    return [{ label: WF_STR.cases, file: 'catalogue.html' }];
  }

  // The bar is a subset of the rail plus Home, and it never holds money.
  function barItems() {
    return [
      { label: WF_STR.home,  file: 'index.html' },
      { label: WF_STR.cases, file: 'catalogue.html' }
      // The superset rule holds: every bar item exists in the rail. D-29 took Provably
      // fair out of the rail and it left the bar in the same step; D-40 does the same to
      // My items. THE BAR IS NOW TWO ITEMS IN BOTH STATES, below Material's floor of
      // three for a signed-in person as well as for a guest. D-29 printed that cost when
      // it applied to one state; it now applies to both, and the decision record says so
      // rather than the shell quietly carrying it.
    ];
  }

  // THE LANGUAGE CONTROL. NINE OPTIONS SINCE D-42, ONE OF THEM LIVE.
  // D-41 shipped one option and refused the other eight by the rule that fills every
  // other carrier in this project: a carrier is inherited and filled with live items,
  // and only a dead item is deferred. THE FOUNDER REVERSED THAT FOR THIS CONTROL ALONE,
  // so the prototype shows the shape the live product has. The eight switch the
  // control's label and nothing else (setLang below; the page language never moves),
  // the panel says so in its own words, and D-42 records what that costs. It is not a
  // precedent: no other carrier here gets dead items on this argument.
  // THE NINE ARE SOURCED, NOT INVENTED: baseline.md section "Header", walked live on
  // 11 August 2026, "a language switcher offering nine languages, en de zh fr pl tr pt
  // es ru". The names are written in English because the interface is English, and the
  // endonyms are final copy, which belongs to production.
  // WHAT THE STUBS NEVER DO IS TOUCH THE PAGE'S lang ATTRIBUTE. English text announced
  // to a screen reader as German is an accessibility defect rather than a placeholder,
  // and it is the one change that would make the stub look real.
  var LANGS = [['en', 'English'], ['de', 'German'], ['zh', 'Chinese'], ['fr', 'French'],
               ['pl', 'Polish'], ['tr', 'Turkish'], ['pt', 'Portuguese'],
               ['es', 'Spanish'], ['ru', 'Russian']];
  var langCur = 'en';
  // D-42: the eight stubs switch the control and nothing else, and every place
  // that offers them says so in the same words.
  var LANG_ONLY = 'Only English is available for now.';
  var langSubs = [];
  // The rail's control and the footer's control are one control in two places, the
  // superset rule applied to a control. Picking in either moves both, because a rail
  // reading EN above a footer reading DE is two controls with one name.
  function setLang(code) { langCur = code; try { sessionStorage.setItem('wf-lang', code); } catch (e) {} langSubs.forEach(function (f) { f(code); }); }
  try { langCur = sessionStorage.getItem('wf-lang') || 'en'; } catch (e) {}
  /* ONE SOUND SETTING, round 14. The rail's control had no listener and the
     settings switch moved alone; both now read and write this. */
  var soundOn = true, soundSubs = [];
  try { soundOn = sessionStorage.getItem('wf-sound') !== 'off'; } catch (e) {}
  function setSound(on) { soundOn = on; try { sessionStorage.setItem('wf-sound', on ? 'on' : 'off'); } catch (e) {} soundSubs.forEach(function (f) { f(on); }); }

  // ONE SOCIAL SET FOR BOTH CARRIERS, round 15: the rail kept a second list of its
  // own, which footer.md refuses. Six reserved slots until the channels are named.
  function socialSlots() {
    var row = el('div', 'wf-rail-soc-row');
    row.setAttribute('aria-hidden', 'true');
    for (var i = 0; i < 6; i++) row.appendChild(el('span', 'wf-rail-ico'));
    return row;
  }

  function langControl() {
    var wrap = el('div', 'wf-lang-wrap');
    var btn = el('button', 'wf-rail-lang');
    btn.type = 'button';
    var abbr = el('span', 'wf-lang-ab', 'EN');
    var full = el('span', 'wf-lang-full', 'English');
    btn.appendChild(abbr);
    btn.appendChild(full);
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');
    var pop = el('div', 'wf-lang-pop');
    var list = el('div', 'wf-lang-list');
    list.setAttribute('role', 'group');
    list.setAttribute('aria-label', 'Language');
    var opts = LANGS.map(function (L) {
      var o = el('button', 'wf-lang-opt', L[1]);
      o.type = 'button';
      o.appendChild(el('span', 'wf-lang-code', L[0].toUpperCase()));
      o.addEventListener('click', function () { setLang(L[0]); setOpen(false); btn.focus(); });
      list.appendChild(o);
      return o;
    });
    pop.appendChild(list);
    pop.appendChild(el('span', 'wf-fig-missing', LANG_ONLY));

    function paint(code) {
      abbr.textContent = code.toUpperCase();
      var name = 'English';
      LANGS.forEach(function (L, i) {
        var on = L[0] === code;
        if (on) name = L[1];
        opts[i].classList.toggle('is-on', on);
        if (on) { opts[i].setAttribute('aria-current', 'true'); }
        else { opts[i].removeAttribute('aria-current'); }
      });
      full.textContent = name;
      btn.setAttribute('aria-label', 'Language, ' + name);
      btn.setAttribute('data-lbl', 'Language: ' + name);
    }
    langSubs.push(paint);
    paint(langCur);

    function setOpen(on) {
      wrap.classList.toggle('is-open', on);
      btn.setAttribute('aria-expanded', on ? 'true' : 'false');
    }
    btn.addEventListener('click', function () { setOpen(!wrap.classList.contains('is-open')); });
    wrap.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setOpen(false); btn.focus(); } });
    document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) setOpen(false); });
    wrap.appendChild(btn);
    wrap.appendChild(pop);
    return wrap;
  }

  // THE ACCOUNT CONTROL OPENS A MENU RATHER THAN NAVIGATING, 0.1 section 5, added by
  // founder decision on 19 August 2026 from the baseline capture. The control keeps its
  // route target as the menu's first row, so nothing reachable becomes unreachable.
  // SEVEN ROWS SINCE D-36, AND STILL ONLY THE ONES THE MAP HOLDS. Until 20 August 2026
  // there were four: the reference menu carried PROFILE, SETTINGS and HISTORY, no node
  // held any of them, and a row for a page nobody specified is the dead item defect
  // inside a menu. The founder closed that gap on the map's side rather than on the
  // menu's, so 5.9 Roll history, 5.10 Profile and 5.11 Settings are nodes now and these
  // rows are live items. Two of the three carry no parent and say so on the map.
  // Sign out is a control rather than a destination.
  // HOVER IS NOT THE ONLY WAY IN. The reference opens on hover, which excludes touch
  // entirely and the keyboard almost entirely. Hover, click, Enter and Space open it;
  // Escape, a click outside and focus leaving close it.
  function accountControl() {
    var wrap = el('div', 'wf-acct-wrap');
    var btn = el('button', 'wf-btn wf-acct');
    btn.type = 'button';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-controls', 'wf-acct-menu');
    // THE AVATAR ALONE AT EVERY WIDTH, D-49. The control carried the display name on
    // desktop and dropped it at 360, which was one control in two forms for no reason a
    // person could see. THE NAME IS NOT INFORMATION A SIGNED-IN PERSON NEEDS ON EVERY
    // SCREEN: they know who they are. What it is for is confirming WHICH account you are
    // in, and that question is asked at the moment the menu opens, so the name moved
    // there. It stays in the accessible name here, so nothing is lost to a reader.
    btn.appendChild(el('span', 'wf-avatar'));
    btn.setAttribute('aria-label', 'Account, ' + window.WF_WHO.name);

    var menu = el('div', 'wf-acct-menu');
    menu.id = 'wf-acct-menu';
    // WHICH ACCOUNT YOU ARE IN, ASKED AND ANSWERED WHERE IT IS ASKED, D-49. The name
    // left the persistent control and arrives here, at the moment a person opens the
    // menu, which is the moment the question exists.
    menu.appendChild(el('div', 'wf-acct-who', window.WF_WHO.name));
    var nav = el('nav', null);
    nav.setAttribute('aria-label', 'Account');
    [[WF_STR.myItems, 'account.html'], [WF_STR.history, 'history.html'],
     ['Withdrawals', 'history-withdrawals.html'], ['Profile', 'profile.html'],
     [WF_STR.settings, 'settings.html'], [WF_STR.responsiblePlay, 'responsible.html']].forEach(function (r) {
      // A SLOT, NOT AN ICON, D-50, and it is the rule the rail has followed since it was
      // drawn: "the grey contract defers icons to stages 06 to 08, and a destination
      // whose icon has no reserved space gets one bolted on later, which moves every
      // label in the carrier on the day it arrives." This menu was the carrier that did
      // not follow it. THIS IS A GAME PRODUCT AND ITS CARRIERS CARRY ICONS, so the space
      // is owed everywhere a row is drawn, not only where one is convenient.
      var a = el('a', null);
      a.href = BASE + r[1];
      var ic = el('span', 'wf-mi');
      ic.setAttribute('aria-hidden', 'true');
      a.appendChild(ic);
      a.appendChild(document.createTextNode(r[0]));
      nav.appendChild(a);
    });
    menu.appendChild(nav);
    var out = el('a', 'wf-linklike wf-acct-out');
    out.href = BASE + 'index.html';
    var oi = el('span', 'wf-mi');
    oi.setAttribute('aria-hidden', 'true');
    out.appendChild(oi);
    out.appendChild(document.createTextNode('Sign out'));
    menu.appendChild(out);

    wrap.appendChild(btn);
    wrap.appendChild(menu);

    function set(open) {
      wrap.classList.toggle('is-open', open);
      // Same dismissal state as the roll detail, D-51: Escape put focus back on the
      // control inside the wrapper and :focus-within reopened the menu it had closed.
      wrap.classList.toggle('is-shut', !open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    wrap.addEventListener('mouseleave', function () { wrap.classList.remove('is-shut'); });
    // HOVER IS CSS AND THE STATE IS JS, and separating them is not tidiness. Bound as
    // two JS handlers, hover opened the menu and the click that followed it toggled the
    // same flag straight back to closed, so the control appeared dead to a mouse. Hover
    // is a pointer affordance with no state behind it, `:hover` shows the panel and
    // nothing is recorded; click, Enter and Space set `is-open`, which is also the only
    // thing `aria-expanded` reports, because hover is not a state a screen reader has.
    btn.addEventListener('click', function () {
      set(btn.getAttribute('aria-expanded') !== 'true');
    });
    wrap.addEventListener('focusout', function (e) {
      if (!wrap.contains(e.relatedTarget)) set(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && wrap.classList.contains('is-open')) { set(false); btn.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) set(false);
    });
    return wrap;
  }


  // KEEP THE LIST WHERE THE READER LEFT IT, D-53. Every navigation reset this panel to
  // the top, so walking a set of states meant scrolling back to the row you were on,
  // every time, and the selected row was usually off screen when the page arrived.
  // TWO PARTS AND THEY ARE NOT THE SAME PART. Restoring the scroll offset is what keeps
  // a person in the place they were reading. Bringing the current row into view is what
  // handles the arrival that did not come from this panel: a link inside the page, a
  // flow step, a typed address. The offset is restored first and the row is only pulled
  // into view if it is not already visible, so the common case does not move at all.
  // FIRST BY PRIORITY, NOT FIRST IN DOCUMENT ORDER, and the difference cost an hour.
  // A comma selector returns whichever match appears earliest in the document, so
  // ".wfp-state.is-current, .wfp-done.is-current" returned the row in the "Built so far"
  // list at the top of the panel, which is always visible, so the reveal never had
  // anything to do. The row a person is actually looking at is the one in the cluster
  // outline further down.
  function firstOf(root, sels) {
    for (var i = 0; i < sels.length; i++) {
      var hit = root.querySelector(sels[i]);
      if (hit) return hit;
    }
    return null;
  }

  function keepScroll(box, key, current) {
    if (!box) return;
    var mine = false, settled = false;
    function place() {
      if (settled) return;
      mine = true;
      try {
        var saved = sessionStorage.getItem(key);
        if (saved !== null) box.scrollTop = parseFloat(saved) || 0;
      } catch (e) { /* private mode has no storage and this is not worth failing over */ }
      if (current) {
        var b = box.getBoundingClientRect(), c = current.getBoundingClientRect();
        if (c.top < b.top + 8 || c.bottom > b.bottom - 8) {
          box.scrollTop += (c.top - b.top) - (b.height / 2) + (c.height / 2);
        }
      }
      setTimeout(function () { mine = false; }, 0);
    }
    // PLACED MORE THAN ONCE, AND THAT IS THE WHOLE OF THE SECOND ATTEMPT'S FAILURE.
    // Measured at render time the current row sat at y=675 in an 800px panel, so it
    // looked visible and nothing moved. The rows are two lines once the real type is
    // applied: the same row ends up at y=1694 in a panel 2209 tall. THE FIRST
    // MEASUREMENT WAS HONEST AND EARLY, WHICH IS THE SAME AS WRONG. It runs again on the
    // next frame, on load and when the fonts resolve, and stops the moment a person
    // scrolls it themselves.
    place();
    requestAnimationFrame(place);
    window.addEventListener('load', place);
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(place); }
    var t = 0;
    box.addEventListener('scroll', function () {
      if (!mine) settled = true;
      clearTimeout(t);
      t = setTimeout(function () {
        try { sessionStorage.setItem(key, String(box.scrollTop)); } catch (e) {}
      }, 80);
    });
  }

  /* ==========================================================================
     NODE 0.8, THE LIVE FEED, ON EVERY PAGE SINCE D-59.
     IT IS NOT A NEW ELEMENT. It has been in the IA since the detail layer, with
     eight fields, a pause control and row A3's rule against invented names, and
     CLAUDE.md lists the live drop ticker among what is inherited from the
     baseline deliberately close to identical. What D-59 changed is placement and
     two destinations, so it moves into the shell here rather than being built.
     D-31 CUT IT FROM THE CASE SCREEN BECAUSE THAT SCREEN CARRIED TOO MUCH, and
     that reason is still true about the case screen. What makes this different
     is the surface: a strip identical on every page is read once and becomes
     furniture, while a block inside a screen competes with that screen every
     time. THIS DOES NOT GET TO DECLARE ITSELF RIGHT: the sweep measures what it
     costs the first screen at 360, and the measurement outranks the argument.
     SO IT IS BUILT TO BE FURNITURE: one row, no figure, no colour, no urgency,
     and the smallest height that keeps the item legible.
     ========================================================================== */
  // TWELVE TILES, NOT FOUR, and the number is inherited from the measurement the
  // Home block made rather than picked again. 0.8 section 6 handed stage 04 "the
  // minimum tile count, from the drawn width": at 360px one row holds 3.9 tiles,
  // so a loop needs eight before it can run without a gap, and twelve is the
  // first count that still reads as a feed at 1440.
  // AND THE LOOP NEEDS MORE THAN THAT FLOOR. The keyframe travels half the run,
  // so half the run has to be wider than the widest column it plays in or the
  // strip shows a gap on every reset.
  // EVERY TILE OPENS ITS OWN ROUND, round 15: all twelve opened the AK. The
  // sixth column is the round's key; a tile from Ironbound reads its wear, rarity,
  // value and ticket range from that case's drop table, the others carry theirs
  // in the last two columns. Samples by D-124, marked in 0.8.
  // The Vulcan was listed from Ironbound, whose table does not hold it: it is a
  // Warsteel drop.
  var FEED = [
    ['AK-47',        'Redline',          'Ironbound', false, false, 'ak'],
    ['AWP',          'Asiimov',          'Warsteel',  false, false, 'fawp',    ['Field-Tested', 'Covert'],        '64.80'],
    ['Glock-18',     'Water Elemental',  'Ironbound', true,  false, 'fglock'],
    ['USP-S',        'Kill Confirmed',   'Coldfront', false, true,  'fusp',    ['Minimal Wear', 'Covert'],        '15.10'],
    ['M4A1-S',       'Hyper Beast',      'Warsteel',  false, false, 'fm4',     ['Field-Tested', 'Covert'],        '23.90'],
    ['Desert Eagle', 'Blaze',            'Ironbound', false, false, 'fdeagle'],
    ['MP9',          'Rose Iron',        'Coldfront', false, false, 'fmp9',    ['Minimal Wear', 'Mil-Spec'],      '1.90'],
    ['P250',         'Asiimov',          'Nightfall', false, false, 'fp250',   ['Battle-Scarred', 'Mil-Spec'],    '6.80'],
    ['AWP',          'Neo-Noir',         'Nightfall', false, true,  'fawpnn',  ['Field-Tested', 'Covert'],        '38.20'],
    ['AK-47',        'Vulcan',           'Warsteel',  false, false, 'fvulcan', ['Field-Tested', 'Covert'],        '52.40'],
    ['Five-SeveN',   'Monkey Business',  'Coldfront', false, false, 'ffive',   ['Minimal Wear', 'Classified'],    '3.60'],
    ['SG 553',       'Cyrex',            'Warsteel',  true,  false, 'fsg',     ['Field-Tested', 'Restricted'],    '1.40']
  ];
  /* THE WINNERS ARE SAMPLE NAMES, round 15 step 9, D-124, marked in ticker.md's
     D-140 amendment. The tile printed "winner, as shown", a designer's label on
     the product surface. Row A3 still binds the live product: no invented names,
     a bot labelled as one. The AK is the account's own round, so it carries the
     account's name; a hidden profile keeps its name and loses the link, D-93. */
  var FEED_WHO = { ak: window.WF_WHO.name, fawp: 'kestrel', fglock: 'quill', fusp: 'mira_cs',
                   fm4: 'vandal88', fdeagle: 'frostbyte', fmp9: 'okapi', fp250: 'lynx_cs',
                   fawpnn: 'duskrunner', fvulcan: 'saltyfox', ffive: 'emberjay', fsg: 'ghostline',
                   /* THE CASE'S BEST DROPS WERE WON BY OTHER PEOPLE, round 16, B1-10:
                      their pages said nightjar_cs, whose history holds none of them.
                      Samples, D-124, marked in 3.3. */
                   usp: 'tallowcs', nova: 'brisk', mp9: 'oriole_cs', p250: 'harrow', m4: 'vandal88' };

  function feedTile(row) {
    // FOUR THINGS AND A HOVER LAYER. The image leads, D-59 and the founder's own
    // ordering: a skin is recognised by its finish before it is recognised by
    // its name, and the strip is looked at rather than read.
    var li = el('li', 'wf-feed-i');

    // TARGET 1, THE TILE BODY, LANDS ON 7.1. Field 7 of the node and D-20: the
    // whole reason this component exists is that every tile is a link to a
    // CHECKABLE object, so the body goes to the shared result and not to the
    // case. 7.1 is spec at this stage and the route is drawn anyway, because a
    // real route to an undrawn page is honest and a convenient one is not.
    var hit = el('a', 'wf-feed-hit');
    hit.href = BASE + 'result.html' + (row[5] && row[5] !== 'ak' ? '?round=' + row[5] : '');
    // THE NAME CARRIES SOURCE, WEAPON, SKIN, RARITY AND WINNER, ticker.md's
    // accessible name, round 15: it read weapon and skin only.
    var RR = ROUNDS[row[5]] || {};
    hit.setAttribute('aria-label', row[2] + ', ' + row[0] + ' ' + row[1] +
      (RR.axes ? ', ' + RR.axes[RR.axes.length - 1] : '') + ', won by ' + (FEED_WHO[row[5]] || 'a player') + (row[3] ? ', a bot' : ''));
    hit.appendChild(el('span', 'wf-feed-art'));
    hit.lastChild.setAttribute('aria-hidden', 'true');
    hit.appendChild(el('span', 'wf-feed-w', row[0]));
    hit.appendChild(el('span', 'wf-feed-s', row[1]));
    li.appendChild(hit);

    // THE MODE ICON. Section 0 of the node fixed that the source field carries
    // the CASE in round 1, because a label reading the same word on every tile
    // is the dead item defect. D-59 splits it: the icon takes the mode, the case
    // moves into the hover layer. ROUND 1 SHIPS ONE MODE, so this is the same
    // glyph on every tile forever until a second one arrives. That cost is
    // printed in the node and in D-59 rather than absorbed here.
    var mode = el('span', 'wf-feed-mode');
    mode.setAttribute('aria-label', 'Case opening');
    li.appendChild(mode);

    var pop = el('div', 'wf-feed-pop');
    // TARGET 2, THE CASE, GOES TO 3.3. The feed is evidence that drops happen;
    // the case is how a person acts on it.
    var cs = el('a', 'wf-feed-case');
    cs.href = BASE + caseHref(row[2], false);
    cs.appendChild(el('span', 'wf-feed-case-art'));
    cs.lastChild.setAttribute('aria-hidden', 'true');
    cs.appendChild(el('span', null, row[2]));
    pop.appendChild(cs);

    // TARGET 3, THE WINNER, AND IT HAS A ROUTE SINCE 23 AUGUST 2026, D-90.
    // Field 5: the winner as the account chooses to appear, and an avatar is a
    // way of appearing. ROW A3 IS UNCHANGED AND BINDS IT: no invented names, and
    // any bot present labelled as one. A stock avatar over an invented account
    // is A3 broken with a picture on top.
    // IT WAS A TARGET WITH NO ROUTE FOR TWO DAYS AND THE MARK IS NOW OFF. D-59
    // drew the destination and printed "public profile: no node yet" on every
    // tile of every page, because the map held no node for it and 5.10 is the
    // account's own view of itself. The founder created 7.3 and the destination
    // is real. The line that named the absence goes with the absence: a mark
    // left standing after its subject is fixed is the next false statement.
    // A BOT DOES NOT GET ONE. Row A3 requires a bot to be labelled, and a bot
    // has nothing a public profile could hold, so the name is only a link where
    // there is an account behind it.
    // AND NEITHER DOES SOMEONE WHO HAS HIDDEN THEIRS, D-93. Field 5 of row A3 is
    // the winner as the account chooses to appear, and choosing not to have a
    // public page is one of the ways of appearing. So a hidden account keeps its
    // name in the strip and loses the link, which is the only thing hiding
    // changes here. IT CARRIES NO LABEL. A "hidden" badge would publish the very
    // fact the setting exists to withhold, and it would tell a stranger which
    // accounts have something to look at.
    var who = el('div', 'wf-feed-who');
    who.appendChild(el('span', 'wf-feed-av'));
    who.lastChild.setAttribute('aria-hidden', 'true');
    var col = el('span');
    var whoName = FEED_WHO[row[5]];
    if (row[3]) {
      col.appendChild(el('span', null, whoName));
      col.appendChild(el('span', 'wf-feed-bot', ' bot'));
    } else if (row[4]) {
      col.appendChild(el('span', null, whoName));
    } else if (whoName !== window.WF_WHO.name) {
      /* ONE PUBLIC PROFILE IS DRAWN, THE ACCOUNT'S, round 16, D1-4: every
         winner's name opened nightjar_cs's page. Another winner's name is text
         until their page exists, the treatment a hidden profile already gets. */
      col.appendChild(el('span', null, whoName));
    } else {
      var whoLink = el('a', 'wf-feed-whol', whoName);
      whoLink.href = BASE + 'player.html';
      col.appendChild(whoLink);
    }
    col.className = 'wf-feed-whocol';
    who.appendChild(col);
    pop.appendChild(who);

    li.appendChild(pop);
    return li;
  }

  function renderFeed() {
    var band = el('section', 'wf-feed');
    band.setAttribute('aria-label', 'Live drops');

    var head = el('div', 'wf-feed-head');
    head.appendChild(el('span', 'wf-feed-lbl', 'Live drops'));
    var pause = el('button', 'wf-btn wf-feed-pause', 'Pause');
    pause.type = 'button';
    pause.setAttribute('aria-pressed', 'false');
    head.appendChild(pause);
    var inn = el('div', 'wf-feed-in');
    inn.appendChild(head);
    band.appendChild(inn);

    var clip = el('div', 'wf-feed-clip');
    var run = el('ul', 'wf-feed-run');
    // DOUBLED FOR A SEAMLESS LOOP, the same trick the case showcase uses: the
    // keyframe travels exactly half the run, so the second copy is where the
    // first one was when it resets.
    FEED.concat(FEED).forEach(function (row) { run.appendChild(feedTile(row)); });
    clip.appendChild(run);
    inn.appendChild(clip);

    // ONE CONTROL, TWO PARENTS, which is the node's own wording: it is the pause
    // design principle 2 owes a strip that cannot be stopped, and it is the
    // prefers-reduced-motion answer, so one mechanism covers one state.
    /* THE STATE LASTS THE SESSION AND STARTS FROM THE SYSTEM, round 14, 0.8
       section 2: a pause was forgotten on the next page, and with reduced motion
       the strip stood still while its control said Pause. */
    function hold(on) {
      band.classList.toggle('is-held', on);
      pause.setAttribute('aria-pressed', on ? 'true' : 'false');
      pause.textContent = on ? 'Resume' : 'Pause';
    }
    var saved = null;
    try { saved = sessionStorage.getItem('wf-feed'); } catch (e) {}
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    hold(saved ? saved === 'held' : !!reduce);
    pause.addEventListener('click', function () {
      var on = !band.classList.contains('is-held');
      hold(on);
      try { sessionStorage.setItem('wf-feed', on ? 'held' : 'run'); } catch (e) {}
    });
    return band;
  }

  /* WHERE THE FEED GOES, AND THE MEASUREMENT DECIDED IT RATHER THAN THE ARGUMENT.
     D-59 put it under the header and the node pre-committed: "stage 04 measures
     what it costs the first screen at 360, and the measurement outranks this
     paragraph." It was measured. At 360 the band is 143px, and on the case
     screen at 360x800 it moved the act from 744 to 886, THROUGH THE FOLD. Node
     3.3 section 14 forbids exactly that.
     SO ON MOBILE IT SITS AFTER THE CONTENT, and on desktop the grid puts it back
     under the header. It is still on every page, which is what D-59 asked for;
     what moved is where a furniture strip stands relative to the act a person
     came for, and it does not stand in front of it.
     IT IS ALSO PLACED AFTER MAIN IN THE DOM DELIBERATELY, not only to make the
     mobile order fall out for free: the strip is twenty four links of furniture,
     and a keyboard reaches the page's own content before them on both layouts.
     The cost of that is a desktop visual order that is not the tab order, which
     is the trade this component is worth and the other way round is not. */
  /* ONE PAGE OPTS OUT, AND IT IS NOT A SECOND PLACEMENT ARGUMENT. Node 4.2 is the
     spend ceiling reached, and its own forbidden list already reads "no offer of
     any kind: no alternative funding route, no reminder when the period resets, no
     invitation to raise the ceiling". A run of other people's wins beside a
     deposit control that will not fire this period is an offer with a scroll on
     it. The strip stays furniture on every other page, which is what D-59 asked
     for; what it may not be is furniture on the one screen whose whole job is a
     boundary holding. Declared by the page, never inferred here, and the finding
     goes back to 0.8 rather than being decided in this file. */
  function mountFeed() {
    var main = document.querySelector('.wf-main');
    if (!main || document.querySelector('.wf-feed')) return;
    if (window.WF_SHELL && window.WF_SHELL.feed === false) return;
    // D-126: A PAGE WITH NO ACT ON ITS FIRST SCREEN PUTS THE STRIP UNDER THE
    // HEADER at every width, which is where the baseline keeps it at 390.
    // Home declares it. The case screen does not, and D-59's reason stands.
    var top = !!(window.WF_SHELL && window.WF_SHELL.feedTop);
    main.parentNode.insertBefore(renderFeed(), top ? main : main.nextSibling);
  }

  /* NODE 6.2, THE SELF EXCLUSION CONFIRMATION. Built once here because the
     dialog opens from 6.1 and has to exist on the pinned page as well, and two
     copies of the one sentence it exists to deliver is how one of them rots.
     IT HAS TO BE CERTAIN WITHOUT BEING A DISCOURAGEMENT. Escalating friction on
     a brake is discouragement wearing a safety label, and the product does not
     make it harder to stop than it made it to start: no second confirmation, no
     typed phrase, no cool-off delay before it takes effect.
     THE DIALOG NEVER ASKS FOR THE PERIOD. Choosing happens on 6.1 and confirming
     happens here, so it restates the period the person already chose.
     THE SENTENCE IT EXISTS TO DELIVER is that withdrawal, support and reading
     stay open. A person confirming self exclusion is entitled to know their
     items are not being taken.
     TWO CONTROLS OF EQUAL WEIGHT. Neither is primary: making cancel quieter is
     the product leaning on the choice, and making confirm quieter is the product
     hedging on a decision it has just told the person is final. */
  /* THE PERIOD IS THE ONE IN THE SELECT, second pass of round 13: the select
     showed 5 years and the dialog confirmed 30 days. Samples by D-124, counted
     from the prototype's now, 21 Aug 2026, 09:31. */
  var EX_END = {};
  EX_END[WF_STR.months6] = '21 Feb 2027, 09:31'; EX_END[WF_STR.year1] = '21 Aug 2027, 09:31'; EX_END[WF_STR.years5] = '21 Aug 2031, 09:31';
  document.addEventListener('click', function (e) {
    var c = e.target.closest('[data-ex-confirm]');
    if (!c) return;
    var p = c.getAttribute('data-ex-confirm'), L = WF_SESS.get('limits') || {};
    L.excl = { per: p, until: EX_END[p] || EX_END[WF_STR.years5] };
    WF_SESS.set('limits', L);
  });
  function excludeHTML(period) {
    var p = period || WF_STR.years5;
    return '<div class="wf-dlg-scrim" data-ex-dismiss></div>' +
      '<div class="wf-dlg-wrap"><div class="wf-dlg wf-dlg--plain" role="dialog" aria-modal="true" aria-label="Confirm self exclusion">' +
        '<button class="wf-dlg-close" type="button" data-ex-dismiss aria-label="Close">&#215;</button>' +
        '<div class="wf-dlg-body">' +
          '<h2 class="wf-dlg-h">Self exclusion for ' + p + '</h2>' +
          '<p class="wf-dlg-sub">It starts now and ends on <b>' + (EX_END[p] || EX_END[WF_STR.years5]) + '</b>.</p>' +
          '<div class="wf-closes">' +
            '<div class="wf-closes-c"><span class="wf-closes-k">Closes</span><span>Opening a case, and adding funds.</span></div>' +
            '<div class="wf-closes-c"><span class="wf-closes-k">Stays open</span><span>Taking what you hold out to Steam. Support. Reading the product.</span></div>' +
          '</div>' +
          '<p class="wf-note">It cannot be lifted early. That is what it is for.</p>' +
          '<div class="wf-row">' +
            '<a class="wf-btn" href="responsible.html" data-ex-dismiss>Cancel</a>' +
            '<a class="wf-btn" href="responsible-excluded.html?x=' + encodeURIComponent(p) + '" data-ex-confirm="' + p + '">Confirm</a>' +
          '</div>' +
        '</div>' +
      '</div></div>';
  }

  /* NODE 0.10, THE FAQ ACCORDIONS. Built once here because eight of the node's
     nine pages carry the same seven sections, and eight copies of one list is
     how seven of them rot.
     EVERY ANSWER IS IN THE DOM AT EVERY WIDTH. Collapsed for reading, never for
     existence, which is the same rule the footer and the rail follow. A button
     with aria-expanded and aria-controls, never a styled div.
     EVERY SECTION NAMES THE SURFACE THAT OWNS IT, and that is not decoration:
     the node's second rule is that no answer is the only place a rule appears,
     and an answer with no owning surface printed beside it is the case that rule
     forbids, rendered.
     WHICH QUESTIONS EXIST IS STAGE 05's. They are derived from the barrier
     ledger, one per documented barrier that survives its surface. Until D-130 each
     section rendered its scope and said the questions were not written yet; it now
     carries one sample, below. */
  /* SAMPLE QUESTIONS SINCE D-130, BY D-124. Each section carries the question
     its barrier makes most likely and an answer that routes to the surface that
     owns the rule; the real list is still stage 05's, derived from the barrier
     ledger. The case screen's "what if a win cannot be sent" answer lives here
     since D-125. */
  var FAQ = [
    ['Getting in', 'Sign in, the geo gate, and a Steam login that will not complete',
      [['My Steam login does not come back here', 'Close the Steam tab and press Sign in again. Nothing you chose is lost.', 'signin.html', WF_STR.signIn]]],
    ['Opening a case', 'The case screen, the published chance, and checking a round afterwards',
      [['How do I know a round was fair?', 'Every round has a proof you can recompute without an account.', 'fair.html', WF_STR.provablyFair]]],
    ['Putting money in', 'Adding funds, the crediting window, and a payment that did not go through',
      [['My deposit has not arrived', 'Most arrive within 2 minutes. The deposit keeps its state and support can see it.', 'history-deposits.html', 'Your deposits']]],
    ['Getting your items out', 'Withdrawing to Steam, the clock, and a trade that did not arrive',
      [['What if a win cannot be sent to Steam?', 'It stays in My items. You can send it later, or sell it back for coins at its value.', 'account.html', WF_STR.myItems]]],
    ['Limits and self exclusion', 'The four boundaries, what each one closes, and what none of them closes',
      [['Can a limit stop me taking my items out?', 'No. No limit ever closes a withdrawal to Steam.', 'responsible.html', WF_STR.responsiblePlay]]],
    ['Your account and your data', 'The documents, and what is held about you',
      [['Do you ever ask for my Steam password?', 'Never. You sign in on Steam\'s own page.', 'legal-unpublished.html?doc=privacy', WF_STR.privacyPolicy]]],
    ['When something goes wrong', 'A restriction, a refused check, and a proof of ours that did not match',
      [['How do I appeal a decision?', 'Choose "Appeal a decision we took" in the form below. We answer within 72 hours.', 'support-appeal.html', 'Appeal']]]
  ];

  function renderFaq() {
    var host = document.querySelector('[data-faq]');
    if (!host) return;
    FAQ.forEach(function (row, i) {
      var sec = el('div', 'wf-faq-s');
      var b = el('button', 'wf-faq-b');
      b.type = 'button';
      b.id = 'faq-b-' + i;
      b.setAttribute('aria-expanded', 'false');
      b.setAttribute('aria-controls', 'faq-p-' + i);
      b.appendChild(el('span', null, row[0]));
      var pnl = el('div', 'wf-faq-p');
      pnl.id = 'faq-p-' + i;
      pnl.setAttribute('role', 'region');
      pnl.setAttribute('aria-labelledby', 'faq-b-' + i);
      pnl.hidden = true;
      pnl.appendChild(el('p', 'wf-faq-own', row[1]));
      // THE FAQ HOLDS NO NUMBER OF ITS OWN. Every figure in an answer is read
      // from the register, or the answer links to the surface and prints none.
      // A competitor keeps its thirty day holding deadline and its crediting
      // window here and nowhere else, which is the placement this refuses.
      (row[2] || []).forEach(function (q) {
        var d = el('details', 'wf-faq-q');
        d.appendChild(el('summary', null, q[0]));
        var ans = el('p', null, q[1] + ' ');
        var ln = el('a', null, q[3]); ln.href = BASE + q[2];
        ans.appendChild(ln);
        d.appendChild(ans);
        pnl.appendChild(d);
      });
      b.addEventListener('click', function () {
        var open = b.getAttribute('aria-expanded') === 'true';
        b.setAttribute('aria-expanded', open ? 'false' : 'true');
        pnl.hidden = open;
      });
      sec.appendChild(b);
      sec.appendChild(pnl);
      host.appendChild(sec);
    });
  }

  function mountExclude() {
    var host = null, opener = null;
    function close() {
      if (!host) return;
      host.remove(); host = null;
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', onKey, true);
      if (opener && document.contains(opener)) opener.focus();
      opener = null;
    }
    function onKey(e) {
      if (!host) return;
      // ESCAPE CLOSES BACK TO 6.1 AND RECORDS NOTHING. This dialog is the one
      // place in the product where a mis-dismissal costs a person a decision
      // they had made, which is why the modal rules are stated again for it
      // rather than inherited by reference.
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Tab') return;
      var f = host.querySelectorAll('a[href], button');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    function open(period, trigger) {
      if (host) return;
      opener = trigger || null;
      host = el('div', 'wf-ex-host');
      host.innerHTML = excludeHTML(period);
      document.body.appendChild(host);
      document.documentElement.style.overflow = 'hidden';
      host.addEventListener('click', function (e) {
        var d = e.target.closest('[data-ex-dismiss]');
        if (!d) return;
        if (d.tagName === 'A') { e.preventDefault(); }
        close();
      });
      document.addEventListener('keydown', onKey, true);
      var f = host.querySelector('button, a[href]');
      if (f) f.focus();
    }
    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-ex-open]');
      if (!t) return;
      e.preventDefault();
      var sel = t.closest('.wf-set-ctl') && t.closest('.wf-set-ctl').querySelector('select');
      open((sel && sel.value) || t.getAttribute('data-ex-open') || WF_STR.years5, t);
    });
    var pinned = document.querySelector('[data-ex-pinned]');
    if (pinned) open(pinned.getAttribute('data-ex-pinned'), null);
  }

  /* THE GUEST AND THE EXCLUDED SURFACES CARRY LIVE CONTROLS, NOT DIMMED ONES.
     Third application of D-58 off its own surface: a press that cannot go
     through answers instead of not existing. On a page whose whole subject is a
     person trying to stop, a control that does nothing and explains nothing is
     the worst version of that defect in the product. */
  /* EVERY BOUNDARY CONTROL ANSWERS BESIDE ITSELF, round 14. Save and Start a
     cool down had no handler, and a refusal landed at the foot of the page, 770px
     from the press at 1440. The answer is a line under the control pressed; the
     page's status line sits under the H1. */
  function mountRp() {
    var page = document.querySelector('[data-rp]');
    if (!page) return;
    function answer(t, text) {
      var set = t.closest('.wf-set') || t.parentNode;
      var p = set.querySelector('.wf-set-say');
      if (!p) { p = el('p', 'wf-set-say wf-refuse is-said'); p.setAttribute('aria-live', 'polite'); set.appendChild(p); }
      p.textContent = text;
      set.classList.add('is-marked');
    }
    /* DATES ARE COUNTED FROM THE PROTOTYPE'S NOW, round 15: every cool down
       ended on 25 Aug and a six month exclusion on 21 Aug 2031. */
    var NOW = Date.UTC(2026, 7, 21, 9, 31), MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var COOL = {}; COOL[WF_STR.hours24] = 1; COOL[WF_STR.days7] = 7; COOL[WF_STR.days30] = 30;
    function fmt(t) { var d = new Date(t); return d.getUTCDate() + ' ' + MON[d.getUTCMonth()] + ' ' + d.getUTCFullYear() + ', 09:31'; }
    var q = function (k) { var m = new RegExp('[?&]' + k + '=([^&]+)').exec(location.search); return m ? decodeURIComponent(m[1]) : null; };
    var ce = document.querySelector('[data-rp-cool-ends]');
    if (ce && q('c') && COOL[q('c')]) { var t0 = NOW + COOL[q('c')] * 864e5; page.setAttribute('data-rp-cool-end', new Date(t0).toISOString().slice(0, 16)); ce.textContent = 'Ends ' + fmt(t0); }
    var xe = document.querySelector('[data-rp-ex-ends]');
    if (xe && q('x') && EX_END[q('x')]) xe.textContent = 'Ends ' + EX_END[q('x')];
    /* WHAT THE SESSION SET IS WHAT THE PAGE SAYS, round 16, D-152. The cool
       down landing listed a $40.00 limit nobody set, and the form one press
       after a Save said "Nothing is set yet". A page whose boundary the session
       started reads the session's; a state page opened by its address keeps its
       own sample. */
    var L0 = WF_SESS.get('limits') || {}, ce0 = page.getAttribute('data-rp-cool-end');
    var mine = (ce0 && L0.cool) || (xe && L0.excl) || (!ce0 && !xe);
    if (mine) {
      if (ce0 && L0.cool) { page.setAttribute('data-rp-cool-end', L0.cool); if (ce) ce.textContent = 'Ends ' + fmt(Date.parse(L0.cool + ':00Z')); }
      if (xe && L0.excl) xe.textContent = 'Ends ' + L0.excl.until;
      var dl = document.querySelector('.wf-force-l [data-str="depositLimit"]');
      var din = page.querySelector('.wf-set-in');
      if (L0.dep) {
        page.setAttribute('data-rp-limit', L0.dep.amt);
        if (din) { din.value = L0.dep.amt; var ds = din.closest('.wf-set-ctl').querySelector('select'); if (ds) ds.value = L0.dep.per; }
        if (dl) dl.parentNode.querySelector('.wf-force-e').textContent = '$' + L0.dep.amt + ' ' + L0.dep.per;
        if (!dl && (ce0 || xe)) {
          var fl = document.querySelector('.wf-force-l');
          if (fl) { var li = el('li'); li.innerHTML = '<span class="wf-force-n">' + WF_STR.depositLimit + '</span><span class="wf-force-e">$' + L0.dep.amt + ' ' + L0.dep.per + '</span>'; fl.appendChild(li); }
        }
      } else if (ce0 || xe) {
        page.removeAttribute('data-rp-limit');
        if (din) din.value = '';
        if (dl) dl.closest('li').remove();
      }
    }
    function rpSay() {
      var say = page.querySelector('[data-rp-say]');
      if (!say || page.getAttribute('data-rp-cool-end') || xe) return;
      var L = WF_SESS.get('limits') || {}, bits = [], SB = sessBoundary();
      if (L.dep) bits.push('a deposit limit of $' + L.dep.amt + ' ' + L.dep.per + (L.depNext ? ', $' + L.depNext.amt + ' ' + L.depNext.per + ' from 22 Aug 2026, 09:31' : ''));
      if (L.session) bits.push('a session length of ' + L.session);
      if (SB) bits.push((SB.kind === 'excl' ? 'a self exclusion' : 'a cool down') + ' until ' + SB.until);
      if (!bits.length) return;
      say.innerHTML = 'In force: ' + bits.join('; ') + '.' + (SB ? ' <a href="' + BASE + SB.route + '">What is in force</a>' : '');
    }
    if (mine) rpSay();
    page.addEventListener('click', function (e) {
      var t = e.target.closest('[data-rp-refuse]');
      if (t) { e.preventDefault(); answer(t, t.getAttribute('data-rp-refuse')); return; }
      var sv = e.target.closest('[data-rp-save]');
      if (sv) {
        var inp = sv.closest('.wf-set-ctl').querySelector('.wf-set-in');
        if (inp) {
          var raw = inp.value.replace(/,/g, '.').trim(), v = parseFloat(raw);
          /* THE REASON IS THE REASON, round 15: 0 and -5 were told to enter an amount. */
          if (!raw) { answer(sv, 'Nothing was set: enter an amount first.'); return; }
          if (!(v > 0)) { answer(sv, 'Nothing was set: a limit has to be more than 0.'); return; }
          var cur = parseFloat(page.getAttribute('data-rp-limit') || '0');
          if (sv.hasAttribute('data-rp-tighten') && cur && v > cur) { answer(sv, 'Nothing changed: a self exclusion is running, so a limit can only be tightened.'); return; }
          var per = (sv.closest('.wf-set-ctl').querySelector('select') || {}).value || WF_STR.perWeek;
          var L = WF_SESS.get('limits') || {};
          /* A SAVED LIMIT IS THE ACCOUNT'S LIMIT, round 16, D-152: it was said
             and forgotten, and the next page said "Nothing is set yet". */
          if (cur && v > cur) L.depNext = { amt: v.toFixed(2), per: per };
          else { L.dep = { amt: v.toFixed(2), per: per }; delete L.depNext; page.setAttribute('data-rp-limit', v.toFixed(2)); }
          WF_SESS.set('limits', L); rpSay();
          answer(sv, cur && v > cur ? 'Saved. A looser limit applies in 24 hours.' : 'Saved. It applies now.');
          return;
        }
        var sl = WF_SESS.get('limits') || {}; sl.session = (sv.closest('.wf-set-ctl').querySelector('select') || {}).value; WF_SESS.set('limits', sl); rpSay();
        answer(sv, 'Saved. A shorter session applies now; a longer one in 24 hours.');
        return;
      }
      var cb = e.target.closest('[data-rp-cool]');
      if (cb) {
        var sel = cb.closest('.wf-set-ctl') && cb.closest('.wf-set-ctl').querySelector('select');
        var per = sel ? sel.value : WF_STR.hours24, end = NOW + (COOL[per] || 1) * 864e5;
        var curEnd = page.getAttribute('data-rp-cool-end');
        /* A RUNNING COOL DOWN EXTENDS AND NEVER SHORTENS, round 15: the press
           reopened the same page and changed nothing. */
        var CL = WF_SESS.get('limits') || {};
        /* A COOL DOWN ADDS NOTHING TO AN EXCLUSION, round 17, B2-5: it was
           accepted and its landing forgot the exclusion. */
        if (CL.excl) { answer(cb, 'Nothing changed: a self exclusion runs until ' + CL.excl.until + ', and a cool down inside it would add nothing.'); return; }
        if (!curEnd) { CL.cool = new Date(end).toISOString().slice(0, 16); WF_SESS.set('limits', CL); location.href = BASE + 'responsible-in-force.html?c=' + encodeURIComponent(per); return; }
        var ct = Date.parse(curEnd + ':00Z');
        if (end <= ct) { answer(cb, 'Nothing changed: the cool down already runs until ' + fmt(ct) + ', and it cannot be shortened.'); return; }
        page.setAttribute('data-rp-cool-end', new Date(end).toISOString().slice(0, 16));
        CL.cool = new Date(end).toISOString().slice(0, 16); WF_SESS.set('limits', CL);
        if (ce) ce.textContent = 'Ends ' + fmt(end);
        answer(cb, 'Extended. It now ends ' + fmt(end) + '.');
      }
    });
  }

  /* NODE 4.1. THE TERMS ARE THE ONLY BLOCKING THING ON THE SCREEN SINCE D-103, and
     they block the way D-58 fixed for the consent gate rather than the way the block
     bank drew it. The bank's Wealthsimple row is "submit disabled until the condition
     is met" and node 4.1 section 3.2 took that wording. A dimmed Pay is a person
     looking for what to change; a live Pay that refuses is a person being told.
     WHAT LEFT. C2's ceiling was the other blocking condition and the founder moved it
     to the settings on 27 August. The mechanism it took with it, "pre-filled with the
     amount just typed and accepted before the payment goes through", is the whole of
     that row's second property, and D-103 carries what it cost.
     SCOPED SINCE D-99. With the layer open over an address there are two of this form
     in the document, and an unscoped query wires the controls of one to the refusal of
     the other.
     AND THE MONEY IS LIVE SINCE D-101. The presets set the amount, the amount drives
     the receipt, and the field takes digits. Before this the six presets changed
     nothing, the receipt was a string printed once at render, and the money field
     accepted letters, which is three pictures of controls on the one screen in the
     product where a control has to be believed. */
  function mountDeposit(scope) {
    scope = scope || document;
    var go = scope.querySelector('[data-dep-go]');
    var say = scope.querySelector('[data-dep-refuse]');
    if (!go || !say) return;
    var amt = scope.querySelector('[data-dep-amt]');

    /* DIGITS AND ONE POINT. A money field that takes letters is a money field that
       can hold something that is not money, and every figure computed from it then
       reads NaN beside a Pay control. */
    function clean(v) {
      // A COMMA IS A DECIMAL POINT, round 15: "12,50" read as 1250 and Pay went
      // through for $1250.00.
      v = String(v).replace(/,/g, '.').replace(/[^0-9.]/g, '');
      var i = v.indexOf('.');
      if (i > -1) v = v.slice(0, i + 1) + v.slice(i + 1).replace(/\./g, '');
      return v;
    }

    function txt(sel, t) {
      var n = scope.querySelector(sel);
      if (n) n.textContent = t;
    }

    /* ONE ARITHMETIC, RENDERED IN FIVE PLACES AND COMPUTED IN ONE. The peg makes the
       sum legal at all, D-95, and the cap is applied here rather than described. */
    function paint() {
      var f = depFigs(amt ? amt.value : '0');
      txt('[data-fig-recv]',  f.receive + ' coins');
      txt('[data-fig-bonus]', '+' + f.bonus + ' coins');
      txt('[data-fig-total]', '$' + f.amount);
    }

    if (amt) {
      amt.addEventListener('input', function () {
        var c = clean(amt.value);
        if (c !== amt.value) amt.value = c;
        [].forEach.call(scope.querySelectorAll('[data-dep-preset]'), function (o) { o.setAttribute('aria-pressed', o.getAttribute('data-dep-preset') === c ? 'true' : 'false'); });
        paint();
      });
    }

    var presets = scope.querySelectorAll('[data-dep-preset]');
    [].forEach.call(presets, function (b) {
      b.addEventListener('click', function () {
        if (!amt) return;
        amt.value = b.getAttribute('data-dep-preset');
        [].forEach.call(presets, function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
        paint();
        amt.focus();
      });
    });

    /* THE TERMS BOX IS THE PRODUCT'S OWN AND IT REALLY TOGGLES, D-58. It is the
       same control 2.4 runs, which is why it looks like it: one component, two
       screens, rather than a native input on one of them. */
    var terms = scope.querySelector('[data-dep-terms]');
    if (terms) {
      var box = terms.querySelector('.wf-cbx-box');
      /* THE SENTENCE TOGGLES TOO, round 15: only the 20 px box did. A press on
         one of its two links still opens the link. */
      var line = terms.querySelector('.wf-cbx-t');
      if (line) line.addEventListener('click', function (e) { if (!e.target.closest('a')) box.click(); });
      box.addEventListener('click', function () {
        var on = box.getAttribute('aria-pressed') === 'true';
        box.setAttribute('aria-pressed', on ? 'false' : 'true');
        terms.classList.toggle('is-set', !on);
        terms.classList.remove('is-missing');
        say.classList.remove('is-said');
      });
    }

    go.addEventListener('click', function (e) {
      var needTerms = terms && terms.querySelector('.wf-cbx-box').getAttribute('aria-pressed') !== 'true';
      /* THE AMOUNT IS CHECKED TOO, round 14: $0, letters and a figure over the
         limit in force all reached crediting. */
      var v = parseFloat(amt ? amt.value : '0') || 0, cap = go.hasAttribute('data-ceiling') ? parseFloat(go.getAttribute('data-ceiling')) : null;
      var mail = scope.querySelector('input[type="email"]');
      var SB = sessBoundary();
      var why = SB ? 'Nothing went through: adding funds is closed until ' + SB.until + ' by the ' + (SB.kind === 'excl' ? 'self exclusion' : 'cool down') + ' you set.'
              : v < 5 ? 'Nothing went through: the smallest deposit is $5.00.'
              : (cap !== null && cap <= 0) ? 'Nothing went through: your deposit limit is reached for this period.'
              : (cap !== null && v > cap) ? 'Nothing went through: your deposit limit leaves $' + cap.toFixed(2) + ' this period.'
              /* THE BILLING ADDRESS IS READ, round 15: empty and "not-an-email" paid. */
              : (mail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value.trim())) ? 'Nothing went through: the receipt needs an email address it can reach.' : '';
      /* WHAT WAS PAID IS WHAT CREDITING SHOWS, round 15: it always read $40.00 Visa. */
      if (!needTerms && !why) { go.setAttribute('href', BASE + 'deposit-crediting.html?a=' + v.toFixed(2) + '&m=' + encodeURIComponent(go.getAttribute('data-method') || '')); return; }
      e.preventDefault();
      if (!needTerms) { say.classList.add('is-said'); say.textContent = why; if (amt) amt.focus(); return; }
      // THE ANSWER IS A PLACE ON THE SCREEN AND NOT ONLY A SENTENCE ABOUT ONE.
      say.classList.add('is-said');
      say.textContent = 'Nothing went through: the terms and the refund policy have not been accepted yet.';
      terms.classList.add('is-missing');
      terms.querySelector('.wf-cbx-box').focus();
    });

    paint();
  }

  function renderShell(host) {
    if (!host) return;
    var cfg = shellCfg();

    var nav = el('nav', 'wf-rail');
    nav.id = 'wf-rail';
    nav.setAttribute('aria-label', 'Destinations');
    // The logo is an asset, and stage 06 draws it. What this stage owes it is the SPACE
    // it will occupy, at the top of the rail, which is where the baseline keeps it.
    // Drawn as a wordmark on one line it read as a heading rather than as a brand slot.
    var logo = el('a', 'wf-rail-logo' + (cfg.active === 'index.html' ? ' is-current' : ''));
    logo.href = BASE + (cfg.account ? 'index-account.html' : 'index.html');
    logo.setAttribute('aria-label', 'CS2 Clutch, home');
    if (cfg.active === 'index.html') logo.setAttribute('aria-current', 'page');
    logo.appendChild(el('span', 'wf-logo-mark', 'Logo'));
    nav.appendChild(logo);
    railItems().forEach(function (it) {
      if (it.divider) { nav.appendChild(el('span', 'wf-rail-div')); return; }
      var a = el('a', 'wf-rail-item' + (it.file === cfg.active ? ' is-current' : ''));
      // A SLOT, not an icon. The grey contract defers icons to stages 06 to 08, and a
      // destination whose icon has no reserved space gets one bolted on later, which
      // moves every label in the carrier on the day it arrives.
      a.appendChild(el('span', 'wf-rail-ico'));
      a.appendChild(el('span', 'wf-rail-lbl', it.label));
      // THE TOOLTIP IS THE LABEL, not a second string. 0.1 section 7 gives the collapsed
      // rail "icons with the active indicator, labels gone, tooltips on hover and on
      // focus", and a tooltip that says something the expanded rail does not say would
      // be a second name for one destination, which the superset rule forbids.
      a.setAttribute('data-lbl', it.label);
      a.href = BASE + it.file;
      if (it.file === cfg.active) a.setAttribute('aria-current', 'page');
      nav.appendChild(a);
    });
    // The foot of the rail, as the baseline runs it: the ambient controls and the
    // social links, below the destinations and separated from them. This is also where
    // the sound control finally has a home: it was in the header with no parent and no
    // room at 360px, and 0.1 records that the header is for money and the account.
    var foot = el('div', 'wf-rail-foot');

    // THE ORDER IS THE ANSWER TO A QUESTION, NOT A LAYOUT PREFERENCE. Sound and
    // language are controls of the session in progress. The social links are an exit
    // from the product. A control used inside does not sit below a link that leads
    // out, and on mobile the drawer scrolls, so the lowest row is the hardest to
    // reach and belongs to what is needed least. The baseline runs the same order.
    var amb = el('div', 'wf-rail-amb');
    var snd = el('button', 'wf-btn wf-rail-snd', 'Sound on');
    snd.type = 'button';
    function paintSnd(on) {
      snd.textContent = on ? 'Sound on' : 'Sound off';
      snd.setAttribute('data-lbl', snd.textContent);
      snd.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    soundSubs.push(paintSnd); paintSnd(soundOn);
    snd.addEventListener('click', function () { setSound(!soundOn); });
    amb.appendChild(snd);
    // A REAL CONTROL SINCE D-41, and the reason is the baseline rather than a
    // preference: the live product has a switcher, the carrier is inherited, and a
    // carrier is filled with live items rather than deferred. WHAT IT DOES NOT DO IS
    // IMPLY A TRANSLATION. Round 1 ships one language, D-02 is untouched, and the
    // absence is printed inside the control instead of drawn as eight dead rows.
    // Its accessible name is the one langControl paints, round 15: an override here
    // said "no switcher" over the nine options D-42 draws.
    var lang = langControl();
    amb.appendChild(lang);
    foot.appendChild(amb);

    var soc = el('div', 'wf-rail-soc');
    soc.setAttribute('aria-label', 'Social');
    soc.appendChild(el('span', 'wf-rail-soc-h', 'Social'));
    soc.appendChild(socialSlots());
    foot.appendChild(soc);
    nav.appendChild(foot);

    // A MENU ICON AND NOT A CHEVRON, founder capture of 20 August 2026, and Material
    // says the same thing: "the expanded navigation rail should always open from a menu
    // icon". A chevron names a direction; this control names what is behind it, and it
    // is the same glyph the mobile header uses for the same job, so one control reads as
    // one control at every width.
    var toggle = el('button', 'wf-rail-toggle', '\u2261');
    toggle.type = 'button';
    toggle.setAttribute('aria-controls', 'wf-rail');
    nav.appendChild(toggle);

    // THE COLLAPSED RAIL IS A STATE 0.1 ALREADY SPECIFIES AND NOTHING HAD DRAWN:
    // "icons with the active indicator, labels gone, tooltips on hover and on focus",
    // and Material's "collapsed and expanded transform into each other from the menu
    // button". IT IS NEVER HIDDEN ON DESKTOP, which is what separates this from the
    // mobile drawer: below 900 the same rail is modal and the header's menu opens it.
    var COLLAPSE_KEY = 'wf-rail-collapsed';
    function applyRail(on) {
      document.documentElement.classList.toggle('is-rail-collapsed', on);
      toggle.setAttribute('aria-expanded', on ? 'false' : 'true');
      toggle.setAttribute('aria-label', on ? 'Expand the rail' : 'Collapse the rail');
    }
    var stored = false;
    try { stored = sessionStorage.getItem(COLLAPSE_KEY) === '1'; } catch (e) {}
    applyRail(stored);
    toggle.addEventListener('click', function () {
      var on = !document.documentElement.classList.contains('is-rail-collapsed');
      applyRail(on);
      // The choice survives a click through the prototype. That is scaffolding
      // convenience and not a product claim: nothing in 0.1 says the state persists.
      try { sessionStorage.setItem(COLLAPSE_KEY, on ? '1' : '0'); } catch (e) {}
    });

    var head = el('header', 'wf-header');
    var menu = el('button', 'wf-menu', '\u2261');
    menu.type = 'button';
    menu.setAttribute('aria-controls', 'wf-rail');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Destinations');
    head.appendChild(menu);

    var right = el('div', 'wf-row');
    if (cfg.account) {
      // ORDER, AND IT CHANGED ON 20 AUGUST 2026, D-49: money, the deposit control, then
      // the account control at the far right. It read "the account control, the two
      // figures, the deposit control" from the founder's first reading of a baseline
      // capture. THE BASELINE ITSELF PUTS THE USER PANEL AT THE RIGHT EDGE, baseline.md
      // section on the header: ".user-panel-right, right aligned at x=1174".
      // AND THE ORDER IS NOW THE ORDER OF THE JOB: what I have, how to add to it, who I
      // am. The account control is the least used of the three and it is the one that
      // opens a menu, so it belongs at the edge the menu hangs from.

      // THE TWO FIGURES ARE ONE STACKED BLOCK, NOT A ROW. 0.1 section 5 has said upper
      // and lower since it was written, and the state matrix says "two lines" on desktop
      // and "one line each" on mobile. They shipped side by side with a vertical hairline
      // between them. The hairline existed to stop a reader adding them by eye, rule 2,
      // never summed and never a total; stacked, that job is carried by weight and by
      // caption instead, because TWO FIGURES OF EQUAL WEIGHT IN A COLUMN IS A RECEIPT.
      // EACH FIGURE CARRIES ITS OWN ROUTE, and the routes are not the same one: balance
      // to 4.1 and value of items held to 5.1. 0.11 rule 1, a route or it does not ship.
      // Coins, D-28, which reversed C1 and printed a pattern of 7 as its cost. The peg
      // is deliberately NOT here: the header is a persistent carrier rather than a spend
      // moment, and a conversion rate on screen at all times is wallpaper.
      var money = el('div', 'wf-money');
      // A PAGE MAY DECLARE ITS OWN FIGURES AND THE SHELL READS THEM. The empty
      // inventory is a different account from the one the rest of the mock uses,
      // and a header saying 130.60 over a page saying 0.00 is the same
      // contradiction one level up. One source per page, and the shell follows.
      var MN = moneyNow();
      // NODE 0.3, THE 500. A page may declare that the figures have NO SOURCE, which
      // is not the same as declaring them zero. The money in this header comes from
      // the application, and on a 500 the application is what failed. 0.11 rule 3:
      // missing is a state, never a zero. A dash that reads as zero and a zero that
      // means "we do not know" are the same lie in two typefaces, and on a page about
      // money the second one is the expensive lie.
      // THE ROUTE COMES OFF WITH THE FIGURE. A figure with no value is not a link to
      // its own detail, and rule 1 wants a route for a number rather than for a hole.
      var noMoney = !!(window.WF_SHELL && window.WF_SHELL.money === false);
      [[MN.balance.toFixed(2) + ' coins', 'Balance', 'deposit.html', 'wf-money-1', 'balance'],
       // ONE FIGURE, ONE VALUE, EVERYWHERE. It read 18.60 while 5.1 rendered a
       // holding of 130.60, which is two renderings of one number disagreeing on
       // adjacent surfaces: the exact defect 0.11 exists to prevent, and 5.1's
       // own rule is that these are the same pair the header carries.
       [MN.held.toFixed(2) + ' coins', 'Value of items held', 'account.html', 'wf-money-2', 'held']].forEach(function (f) {
        if (noMoney) {
          // NOT A LINK. A figure with no value is not a route to its own detail, and
          // rule 1 asks for a route on a number rather than on a hole.
          var z = el('div', 'wf-fig ' + f[3]);
          // AND IT CARRIES ITS OWN NAME. Below 900 the header hides the captions,
          // which two different figures survive because they are different: two
          // reading "Not available" do not.
          z.setAttribute('aria-label', f[1] + ', not available');
          z.appendChild(el('span', 'wf-fig-v wf-fig-missing', 'Not available'));
          z.appendChild(el('span', 'wf-fig-c', f[1]));
          money.appendChild(z);
          return;
        }
        var d = el('a', 'wf-fig wf-fig-a ' + f[3]);
        d.href = BASE + f[2];
        /* UNDER A BOUNDARY THE BALANCE IS NOT A WAY IN EITHER, round 16, B2-15:
           the + opened what is in force and the figure beside it opened Pay. */
        if (f[4] === 'balance' && cfg.boundary) d.href = BASE + boundaryRoute();
        d.setAttribute('aria-label', f[1] + ', ' + f[0]);
        // THE COIN SLOT, D-50. The baseline sets a coin mark against both figures and
        // this stage owes it the space. It sits with the VALUE and not with the caption,
        // because it is a unit mark rather than a decoration on a label.
        var line = el('span', 'wf-fig-line');
        var ci = el('span', 'wf-coin');
        ci.setAttribute('aria-hidden', 'true');
        line.appendChild(ci);
        line.appendChild(el('span', 'wf-fig-v', f[0])).setAttribute('data-money', f[4]);
        d.appendChild(line);
        d.appendChild(el('span', 'wf-fig-c', f[1]));
        money.appendChild(d);
      });
      right.appendChild(money);

      // A SINGLE COMPACT ADD CONTROL BESIDE THE FIGURES, which is the node's own wording
      // and the baseline's own shape.
      // THE BADGE IS ON IT SINCE 25 AUGUST 2026, D-94, AND RULE 4 IS REVERSED BY THE
      // FOUNDER RATHER THAN WORKED AROUND. It read: no percentage badge on the deposit
      // control in round 1, because cjm-to-be.md cuts ANY bonus until case mathematics
      // are modelled and that model does not exist. The model still does not exist.
      // WHAT THE FOUNDER PUT AGAINST IT IS IN OUR OWN RESEARCH, not against it:
      // aarrr.md Activation records a first-credit or match offer on every competitor in
      // the bank, Clash.gg 5 per cent, Key-Drop 20 per cent plus 0.50, Hellcase 0.70 plus
      // 10 per cent, CSGORoll 10 per cent. Shipping without one is a decision too, and
      // that one had never been costed.
      // THE BADGE IS A PROMISE, SO THE PROMISE IS KEPT WHERE IT LANDS. The founder's own
      // wording: we lead a person from the control to the deposit screen. So the number
      // on this badge and the number on 4.1 come from one declaration, WF_BONUS, and the
      // accessible name carries the cap the circle cannot hold.
      var dep = el('a', 'wf-btn wf-dep', '+');
      dep.href = BASE + 'deposit.html';
      /* THE CONTROL OPENS THE LAYER AND KEEPS ITS ADDRESS, D-99, which is what
         data-auth-open does one carrier over. The href is not decoration: a middle
         click, a session with no script and a copied link all need it, and D-54
         spent a section on why deleting an address deletes rules nobody decided to
         delete. */
      /* UNDER A BOUNDARY THE CONTROL OPENS THE LIMITS, round 14, navigation.md
         section on 6.3: "the deposit route closes". It opened the full layer with
         a working Pay on the pages that say adding funds is closed. */
      if (cfg.boundary) {
        dep.href = BASE + boundaryRoute();
        dep.setAttribute('aria-label', 'Adding funds is closed for now. Your limits');
      } else {
        dep.setAttribute('data-dep-open', 'step1');
      }
      // AND ONE SET OF PAGES TURNS IT OFF, WHICH IS WHAT MAKES THE BADGE SAFE TO SHIP.
      // Node 4.2's own forbidden list reads "no offer of any kind: no alternative funding
      // route, no reminder when the period resets, no invitation to raise the ceiling".
      // A PERCENTAGE IN THE HEADER IS AN OFFER OF ANY KIND, so on the page whose entire
      // job is that deposits have stopped, the badge does not render. Same on 6.1's
      // surfaces, where CLAUDE.md's own words apply: the place a person goes to stop is
      // the one place progress may not follow them. Same on the error pages, where
      // nothing works and selling is noise.
      // IT IS DECLARED PER PAGE AND NOT DERIVED FROM feed:false, even though the set is
      // the same today. Two rules that happen to agree are not one rule, and the day one
      // of them moves, a derived flag moves with it silently.
      // A BOUNDARY IN FORCE TURNS THE BADGE OFF TOO, round 15: a page that forgot
      // bonus:false printed +5% and "Add funds" over the limits it routes to.
      var BN = (window.WF_SHELL && (window.WF_SHELL.bonus === false || window.WF_SHELL.boundary)) ? {} : (window.WF_BONUS || {});
      if (BN.pct) {
        var bb = el('span', 'wf-dep-b', BN.pct);
        bb.setAttribute('aria-hidden', 'true');
        dep.appendChild(bb);
        // THE CAP TRAVELS WITH THE PERCENTAGE OR THE PERCENTAGE IS A HALF TRUTH.
        dep.setAttribute('aria-label',
          'Add funds. We add ' + BN.pctFull + ' in coins on top, up to ' + BN.cap + ' per ' + BN.period);
      } else if (!cfg.boundary) {
        dep.setAttribute('aria-label', WF_STR.addFunds);
      }
      // NOT ON A PAGE WHERE THE MONEY CANNOT BE READ, round 15: on the 500 and the
      // 503s the figures say Not available and the + opened a working Pay.
      if (!noMoney) right.appendChild(dep);
      right.appendChild(accountControl());
    } else {
      // D-54: THIS CONTROL OPENS THE DIALOG RATHER THAN ROUTING TO IT, on every
      // guest surface. The href stays real and correct, so a middle click, a
      // copied link and a session with no script all still reach the address.
      // A trigger whose only route is a script handler is a destination that
      // does not exist for a keyboard either, 0.13 section 8.
      var si = el('a', 'wf-btn', WF_STR.signIn);
      si.href = BASE + 'signin.html';
      si.setAttribute('data-auth-open', 'default');
      right.appendChild(si);
    }
    // NO SOUND CONTROL HERE. It moved to the foot of the rail on 19 August 2026, D-29,
    // which is where the baseline keeps it and where it stops competing for a header
    // that 0.1 fixes at one row on mobile.
    head.appendChild(right);

    host.appendChild(nav);
    host.appendChild(head);

    // The modal drawer contract, 0.1 section 6, all three dismissals: selecting an item,
    // tapping the scrim, and the keyboard's way out. The scrim is created on open and
    // removed on close rather than kept in the document, so nothing invisible sits over
    // the screen at desktop width where the drawer does not exist.
    var scrim = null;
    function closeDrawer() {
      nav.classList.remove('is-open');
      menu.setAttribute('aria-expanded', 'false');
      if (scrim) { scrim.remove(); scrim = null; }
      menu.focus();
    }
    function openDrawer() {
      nav.classList.add('is-open');
      menu.setAttribute('aria-expanded', 'true');
      scrim = el('div', 'wf-scrim');
      scrim.addEventListener('click', closeDrawer);
      document.body.appendChild(scrim);
      var first = nav.querySelector('a, button');
      if (first) first.focus();
    }
    menu.addEventListener('click', function () {
      if (nav.classList.contains('is-open')) closeDrawer(); else openDrawer();
    });
    // Selecting a destination dismisses it. The link still navigates; this is for the
    // case where the destination is the page you are already on.
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && nav.classList.contains('is-open')) closeDrawer();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) closeDrawer();
    });
  }

  /* THE FOOTER SPENDS NO HEADINGS. Its column labels are text, and each column's name
     is carried by its own <nav aria-label>, which is what a screen reader announces
     anyway. Node 1.0 section 8B makes the H2 list the block order and the check
     mechanical, so four H2s injected by a global would break that check on every page
     in the product rather than on the one where it was noticed.

     0.2 THE FOOTER, FOUR BANDS. Node 0.2 section 3 specifies bands, not a link row.
     It was drawn as four figures plus five links plus one line, which is band 1, a
     fifth of band 2, and none of bands 3 and 4. The founder put the live footer in
     front of this stage on 18 August 2026 and the gap is structural rather than
     visual: the fourth column is the compliance divergence and it was missing whole. */
  // 0.2 THE FOOTER. THREE FULL BLEED BANDS, EACH WITH ITS CONTENT AT THE SAME MAX
  // WIDTH AS THE PAGE ABOVE IT. The band paints edge to edge and .wf-fin holds the
  // content, which is the only way a band can carry its own surface and still line up
  // with the columns above. Until 20 August 2026 the whole app was capped at 1440 and
  // pinned to the LEFT, so a wide monitor got a dead strip on the right instead of a
  // centred page: the cap was there and the centring was not.
  //   Band 1 the statistics strip, band 2 the columns and the interlinking row,
  //   band 3 the trust row and the fine print.
  function renderFooter(host) {
    if (!host) return;
    var accBtns = [];

    function band(cls) {
      var b = el('div', 'wf-fband' + (cls ? ' ' + cls : ''));
      var inner = el('div', 'wf-fin');
      b.appendChild(inner);
      host.appendChild(b);
      return inner;
    }

    // ---------------------------------------------------------------- BAND 1, stats.
    // Every figure that claims to be checkable carries its route, node 0.2 section 3.
    // Slot 2 is the founder's open recommendation and slot 4 ships only if it can count
    // humans in real time, section 2.
    // A ROUTE IS RENDERED, A PROCESS NOTE IS NOT. Each of these four once carried a
    // second italic line about why the slot is filled the way it is. Those belong in
    // footer.md, and in the lowest band of every page they put our backlog in front of
    // a visitor. The route survives where a figure claims to be checkable against
    // something else, which is slot 1 alone.
    var b1 = band('wf-fband--stats');
    var stats = el('div', 'wf-foot-stats');
    // NODE 0.3, THE 500 AND THE 503. The source of these figures is the thing that
    // failed, so 0.11 rule 6 applies and it is the strict one: a failed source is
    // marked degraded, NEVER frozen at its last good value. 0.2's own transient
    // table already answers what the footer does about it, which is why the strip
    // is not removed on an error page: a statistic that is unavailable says so with
    // its last known moment, and the strip keeps its space. Removing it would take
    // the proof-of-scale half of "never a dead end" with it.
    /* FIVE CELLS SINCE D-121, AND TWO OF THE FOUR VERDICTS IN SECTION 2 ARE
       REVERSED BY THE FOUNDER. "Давай в футере сделаем как на продукте, все
       показатели которые на продукте. Да, у нас типа нет этих данных, но есть
       зато на продукте, и тут будем симулировать их наличие."
       WHAT HE IS CORRECTING IS REAL AND THIS BUILD CAUSED IT. Two of four slots
       rendered "Not available", which reads as THE PRODUCT CANNOT DO THIS. What
       section 2 actually decided is narrower: online users ships only if it can
       count humans in real time, and the live product counts them. The condition
       is met, and the slot was rendering a refusal instead.
       WHAT IS REVERSED, AND THE GROUND THAT LOSES IS KEPT RATHER THAN DELETED.
       Total users was cut as "not checkable by anyone outside the company, and
       the category's classic inflated figure". It is drawn now. Upgrades was cut
       as "a counter for a mode that does not exist, D-19's rail defect in a
       different costume". It is drawn now, and upgrades are still LATER.
       WHAT IS KEPT AGAINST THE BASELINE. The middle withdrawal time is the one
       figure here a person can check in the way that matters, by withdrawing, and
       section 2 calls it the strongest trust signal the product owns. The
       baseline has no such cell. It stays, fifth, and being fifth is the cost.
       THE AGGREGATE RTP CELL IS DROPPED FROM THE STRIP AND NOT FROM THE NODE. It
       was a proposal with no backlog row and it rendered "Not available" on every
       page in the product. Section 2 still holds the proposal.
       FIGURES: founder capture of 2 September 2026. baseline.md's own walk of
       22 August recorded 363 775 507, 3 330 137, 1 863 286 and 659, and it owes a
       dated row for this newer read. */
    var down = !!(window.WF_SHELL && window.WF_SHELL.stats === 'unavailable');
    [
      down
        ? [null, 'Cases opened', 'Last read 21 Aug 2026 09:02', 'catalogue.html']
        : ['367 013 504', 'Cases opened', null, 'catalogue.html', 'up'],
      down
        ? [null, 'Upgrades', 'Last read 21 Aug 2026 09:02', null]
        : ['3 349 339', 'Upgrades', null, null],
      down
        ? [null, 'Total users', 'Last read 21 Aug 2026 09:02', null]
        : ['1 864 228', 'Total users', null, null],
      down
        ? [null, 'Online now', 'Last read 21 Aug 2026 09:02', null]
        : ['882', 'Online now', null, null, 'live']
      /* THE FIFTH CELL IS GONE, D-123. The founder removed the middle withdrawal
         time, so the strip is the baseline's four and nothing else.
         WHAT IT COSTS IS EXACT AND SECTION 2 ALREADY STATED IT: every number here
         either reconciles against something a stranger can open, or it is
         decoration that looks like evidence. Four cells, ONE OF THEM CHECKABLE,
         cases opened against the observed rate per case.
         WHAT IT DOES NOT COST IS THE CAPABILITY. Rows A4 and G3 are one feature on
         two surfaces, the entry surface and the withdrawal surface, and the figure
         is rendered on 1.0 and on every 0.4 page already. The footer was a third
         surface, not one of the two. */
    ].forEach(function (f) {
      var d = el(f[3] ? 'a' : 'div', 'wf-fig wf-fig-ico' + (f[3] ? ' wf-fig-a' : ''));
      if (f[3]) { d.href = BASE + f[3]; }
      // A RESERVED ZONE FOR THE ICON rather than a glyph: stage 04 draws no icons, so
      // a slot already the right size means the icon arrives as an asset in a place
      // rather than as a new element in a finished row.
      var ic = el('span', 'wf-icon');
      ic.setAttribute('aria-hidden', 'true');
      d.appendChild(ic);
      // NOT WRAPPED IN A TEXT BOX: .wf-fig-ico is a grid whose icon spans three rows,
      // so the three spans are its direct children by contract. A wrapper here would
      // have collapsed the row span and it is a shared rule, used by 3.3 as well.
      var v = el('span', 'wf-fig-v' + (f[0] ? '' : ' wf-fig-missing'), f[0] || 'Not available');
      /* A COUNTER THAT NEVER MOVES IS A PICTURE OF A COUNTER. baseline.md records
         cases opened incrementing across three reads minutes apart, and an online
         count that stands still for a whole session is the unverifiable claim our
         own research names, rendered as a still image. Motion with an
         informational job, which is the only kind design principle 2 keeps: it is
         the difference between a live figure and a printed one. */
      if (f[4]) v.setAttribute('data-tick', f[4]);
      d.appendChild(v);
      d.appendChild(el('span', 'wf-fig-c', f[1]));
      if (f[2]) { d.appendChild(el('span', 'wf-fig-c wf-fig-route', f[2])); }
      stats.appendChild(d);
    });
    b1.appendChild(stats);

    // THE LINK COLUMNS ARE ACCORDIONS BELOW 900 AND FLAT ABOVE IT, one DOM for both.
    // footer.md requires each header to be a button carrying aria-expanded and
    // aria-controls rather than a styled div, and the links to be present in the DOM
    // at every width. The compliance lines stay outside every accordion, which is the
    // one rule in that node that holds at every width.
    var accId = 0;
    function accordion(hostEl, label, body) {
      accId += 1;
      var id = 'wf-acc-' + accId;
      var b = el('button', 'wf-foot-h');
      b.type = 'button';
      b.setAttribute('aria-expanded', 'true');
      b.setAttribute('aria-controls', id);
      b.appendChild(document.createTextNode(label));
      body.id = id;
      b.addEventListener('click', function () {
        // ABOVE 900 THE LISTS ARE FLAT, round 15: the press flipped the state to
        // collapsed over a list that stayed open.
        if (window.matchMedia('(min-width: 900px)').matches) return;
        b.setAttribute('aria-expanded', b.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
      });
      hostEl.appendChild(b);
      hostEl.appendChild(body);
      accBtns.push(b);
      return body;
    }

    // ----------------------------------------------------------------- BAND 2, main.
    var b2 = band('wf-fband--main');
    var cols = el('div', 'wf-foot-cols');

    // COLUMN 1, the brand block, and it leads with the LOGO SLOT rather than with a
    // wordmark. The logo is an asset stage 06 draws; what this stage owes it is the
    // space it will occupy, at the size the live product gives it, so it arrives as an
    // image in a place rather than as a new element in a finished column.
    var c1 = el('div', 'wf-foot-col wf-foot-col--brand');
    var brand = el('a', 'wf-foot-logo');
    brand.href = BASE + ((window.WF_SHELL && window.WF_SHELL.account) ? 'index-account.html' : 'index.html');
    brand.setAttribute('aria-label', 'CS2 Clutch, home');
    brand.appendChild(el('span', 'wf-logo-mark', 'Logo'));
    c1.appendChild(brand);
    // The about line. One sentence, and it is the promise this product is built on
    // rather than a description of the category.
    var ident = el('p', 'wf-foot-ident');
    // D-124: THE LINE IS DRAWN AS THE FIELDS IT WILL HOLD, the baseline's own shape
    // ("MIXABIT LTD, HE 470887, Eleftherias, 19..."), not as a sentence about their
    // absence. Who the company is stays an open item in footer.md, not on the surface.
    ident.appendChild(el('span', null, 'Operating company · Registration no. · Registered address'));
    c1.appendChild(ident);
    // Need help sits with the brand block because an appeal route is a way to reach us.
    // An outlined pill rather than a text link: G4 requires an appeal with a published
    // deadline and Article 5(c) requires rapid contact, and neither is served by a link
    // that looks like a policy.
    var help = el('div', 'wf-foot-help');
    help.appendChild(el('p', 'wf-foot-h', 'Need help?'));
    var sup = el('a', 'wf-btn', WF_STR.support);
    sup.href = BASE + 'support.html';
    help.appendChild(sup);
    c1.appendChild(help);
    cols.appendChild(c1);

    // FIVE LINK GROUPS IN FOUR TRACKS SINCE D-45, and the fourth track holds two.
    //
    // PLAY HOLDS ONE GAME BECAUSE THE PRODUCT HAS ONE. The LATER modes enter this
    // group as they ship, exactly as they enter the rail. A short list is the truth
    // about the round, and padding it with a route the map does not hold would be the
    // dead item defect one carrier down.
    //
    // CASES IS THE CURATED FEW, and its rows are the four cases this prototype actually
    // holds, the same four Home draws. WHICH CASES BELONG HERE IS A MERCHANDISING
    // DECISION, not a design one: it is printed as open rather than answered by picking
    // four names that look plausible.
    //
    // HELP CARRIES PROVABLY FAIR AND THE CONTACT ROUTE. Provably fair moved here from
    // Play at the founder's request: a person looking for the proof is checking us, not
    // choosing a mode.
    // THERE IS NO FAQ ROW AND THAT IS NOT AN OVERSIGHT. sitemap.md cut the baseline's
    // FAQ on an argument rather than on scope: its two load bearing jobs, the age
    // control and the geo statement, moved to 2.1 and 6.1, and the residue went to 0.10.
    // A row for it would be a carrier promising a destination the map does not hold.
    // The absence is printed in the group so the founder can reverse it deliberately.
    //
    // PLAY RESPONSIBLY SITS UNDER HELP RATHER THAN BESIDE IT, founder, D-45, and this
    // is stacking rather than merging. IT KEEPS ITS OWN HEADING, its own accent bar and
    // its own list; what it shares is a grid track, which is a layout fact rather than
    // a taxonomy one. The distinction is the whole answer to the question asked before
    // it: MERGED, self exclusion becomes a row under a support heading, which reframes
    // a compliance instrument as customer service. STACKED, it is still the titled
    // section the baseline does not have at all, baseline.md section 6.
    // The literal wording of CLAUDE.md's rule, "holds each in its own column", is bent
    // by this and that is said out loud in D-45 rather than reasoned away: what the
    // rule protects, a titled section that is nobody's subheading, is intact.
    [
      [['Play', [[WF_STR.cases, 'catalogue.html']]]],
      [[WF_STR.cases, [[WF_STR.allCases, 'catalogue.html'], ['Ironbound', 'case.html'],
                  ['Warsteel', 'case.html?case=warsteel'], ['Coldfront', 'case.html?case=coldfront'],
                  ['Nightfall', 'case.html?case=nightfall']]]],
      [['Company', [[WF_STR.termsOfUse, 'legal.html'], [WF_STR.privacyPolicy, 'legal-unpublished.html?doc=privacy'],
                    [WF_STR.cookiePolicy, 'legal-unpublished.html?doc=cookie'], [WF_STR.refundPolicy, 'legal-refund.html']]]],
      [['Help', [[WF_STR.provablyFair, 'fair.html'], ['Contact support', 'support.html']]],
       // 'WHERE WE OPERATE' HAS NO DESTINATION ON THE MAP, and the registry check
       // added on 22 August 2026 is what found it: markets.html is the IA
       // filename of register 0.12, and a register is read rather than visited.
       // 0.2 names 2.2 as this row's transition, and 2.2 is a refusal state: it
       // is the right destination for a visitor who is refused and there is
       // nothing on the map for a visitor who is not. So the row keeps its label
       // and loses its href. It carried the feed's avatar treatment until
       // 23 August 2026 and is now the only row in the product still carrying
       // it: D-90 gave the avatar node 7.3 and took the mark off. This row's
       // subject is a visitor who is NOT refused, and the map still holds
       // nothing for it.
       /* WHERE WE OPERATE LEFT THE COLUMN, round 14: a row with no destination
          is the dead item a carrier may not hold, and the map has none for a
          visitor who is not refused. footer.md carries it as an open item. */
       ['Play responsibly', [[WF_STR.responsiblePlay, 'responsible.html']]]]
    ].forEach(function (track) {
      var c = el('div', 'wf-foot-col' + (track.length > 1 ? ' wf-foot-col--stack' : ''));
      track.forEach(function (col) {
        var nav = el('nav', 'wf-foot-list');
        nav.setAttribute('aria-label', col[0]);
        col[1].forEach(function (r) {
          // A ROW WITH NO DESTINATION IS DRAWN AND MARKED, never routed somewhere
          // convenient: a carrier may not promise a destination the map does not
          // hold, and inventing one is how the promise stops being visible.
          if (r[1] === null) {
            // D-124: the missing destination is footer.md's open item, not a
            // caption a visitor reads. The row is text with no href.
            nav.appendChild(el('span', null, r[0]));
            return;
          }
          var a = el('a', null, r[0]); a.href = BASE + r[1]; nav.appendChild(a);
        });
        if (col[2]) { nav.appendChild(el('span', 'wf-fig-missing wf-foot-hole', col[2])); }
        accordion(c, col[0], nav);
      });
      cols.appendChild(c);
    });

    // Cookie settings is a CONTROL, not a link, and the only control in that column:
    // GDPR Article 7(3), withdrawing consent must be as easy as giving it, and a
    // banner shown once is not a route back.
    var ck = el('button', 'wf-linklike', 'Cookie settings');
    ck.type = 'button';
    // AND IT OPENS SOMETHING SINCE 22 AUGUST 2026, D-80. The audit added the control
    // and node 0.4 was unbuilt, so it shipped as a button with no handler on all
    // ninety four pages: the fix for Article 7(3) was itself the thing D-58 forbids.
    ck.setAttribute('data-ck-open', '');
    cols.children[3].querySelector('.wf-foot-list').appendChild(ck);

    // THE BRAND ART SLOT, founder request of 20 August 2026. It carries no information
    // and it says so: it is a reserved place for stage 06, the same kind of object as
    // the logo slot above it. BECAUSE IT CARRIES NOTHING IT IS THE FIRST THING TO GO,
    // and it goes when the column can no longer hold seven rather than competing with
    // five columns of real routes.
    var art = el('div', 'wf-foot-art');
    art.setAttribute('aria-hidden', 'true');
    cols.appendChild(art);
    b2.appendChild(cols);

    // The interlinking row. The baseline has none, this one is ours, and its CONTENTS
    // are [?] on purpose: the categories are 3.1's to decide and real query volumes
    // belong to production. Writing a plausible list now is model memory.
    var seo = el('div', 'wf-foot-seo');
    // D-124: 3.1 DECIDED ITS SECTIONS ON 21 AUGUST, D-65, so the row carries them.
    // Query volumes still belong to production and may reorder it; that is an
    // open item in footer.md, not a sentence under the links.
    var seoBody = el('div', 'wf-foot-list');
    [['Daily cases', 'catalogue.html#cat-daily'], ['Featured cases', 'catalogue.html#cat-featured'],
     ['Community cases', 'catalogue.html#cat-community'], ['Classic cases', 'catalogue.html#cat-classic']
    ].forEach(function (r) { var a = el('a', null, r[0]); a.href = BASE + r[1]; seoBody.appendChild(a); });
    accordion(seo, 'Popular cases', seoBody);
    b2.appendChild(seo);

    // ----------------------------------------------------------------- BAND 3, base.
    // THE COMPLIANCE LINES ARE HERE AND NOT IN A COLUMN, which is what node 0.2 has
    // said since it was written: "the compliance line moved out of its own band and
    // into the bottom row, and that is a promotion rather than a demotion. It now sits
    // beside the legal identity and the copyright, which is where a compliance
    // statement belongs and where a regulated operator puts it." The render had them
    // stacked inside column 4 instead, where they made that column three times the
    // height of every other one. NEVER AN ACCORDION: a statement a person has to open
    // is not a statement, and that is the one rule in this node that holds at every
    // width.
    var b3 = band('wf-fband--base');
    var trust = el('div', 'wf-foot-trust');

    // THE SOCIAL SET. This node owns it and the rail's drawer renders it from here
    // rather than keeping a second list. Which channels are ours in round 1 is [?],
    // owner founder, so the row draws six reserved slots and, since D-124, prints
    // no hole. SLOTS, NOT LINKS, round 15: six anchors to # jumped to the top of
    // the page, which is a control doing something other than its name.
    var soc = el('div', 'wf-foot-soc');
    soc.appendChild(socialSlots());
    trust.appendChild(soc);

    // THE AGE MARK IS A MARK AND NOT A GATE. The gate is two checkboxes at sign in,
    // D-26, and this states the rule rather than enforcing it. Drawing it as anything
    // pressable here would be a second age gate that lets a person past.
    var age = el('div', 'wf-foot-age');
    var mark = el('span', 'wf-age-mark', '18+');
    mark.setAttribute('aria-hidden', 'true');
    age.appendChild(mark);
    var ageTxt = el('div', 'wf-foot-age-t');
    ageTxt.appendChild(el('p', 'wf-compliance',
      'Over 18 only. Opening a case is a paid chance, never an investment. Set a deposit or session limit before you start.'));
    /* THE MARKET STATEMENT, D-146: with Where we operate gone nothing public said
       where we serve before the gate. One line, and no link, because the register
       is an IA node and not a page of the product. */
    ageTxt.appendChild(el('p', 'wf-compliance', 'Open only in the markets we have cleared. Anywhere else, this site says so before anything can be paid.'));
    age.appendChild(ageTxt);
    trust.appendChild(age);

    // THE LANGUAGE SITS ABOVE THE PAYMENT MARKS, founder, D-45, and it is its third
    // address in two days: band 4 by D-42, the brand column by D-43, here now. What
    // settles it is that this cell is already the page's meta corner - what we accept
    // as payment, and now what language you are reading. The brand column says who we
    // are; a preference of the session is not part of that answer.
    var pay = el('div', 'wf-foot-pay');
    pay.appendChild(langControl());
    var marks = el('ul', 'wf-marks');
    marks.setAttribute('aria-label', 'Payment methods');
    ['Card', 'Wallet', 'Crypto'].forEach(function (m) { marks.appendChild(el('li', null, m)); });
    pay.appendChild(marks);
    trust.appendChild(pay);
    b3.appendChild(trust);

    var fine = el('div', 'wf-foot-fine');
    fine.appendChild(el('span', 'wf-fig-c', '© 2026 CS2 Clutch. All rights reserved'));
    // D-66 SAYS A WIREFRAME MAY NEVER CITE A DECISION RECORD ON THE SURFACE, and this
    // line ended with ", D-28." until 22 August 2026. It shipped on all ninety four
    // pages, because the footer is on all ninety four pages, and it survived the sweep
    // that removed thirty one citations from seventeen files a day earlier: that
    // instrument read <main>, and the one citation that is on EVERY page is the one
    // that is not in main. The rule was right, the reach was wrong, and the sweep now
    // reads the whole surface with the scaffolding panel excluded by name.
    // THE SENTENCE STAYS, and it is the only part that was ever product copy: rule 10
    // of the published-numbers register is what makes it true, and a person reading a
    // price is owed it whether or not a record number is stapled to the end.
    fine.appendChild(el('span', 'wf-fig-c', 'Prices are in coins. ' + WF_STR.peg));
    b3.appendChild(fine);

    // Collapsed is a MOBILE default, not a state the desktop inherits. Above 900 the
    // lists are open and the button reads as the column label; below it they start
    // closed. The sync runs on load and on resize so narrowing the browser, which is
    // how this project checks mobile, produces the mobile state rather than a desktop
    // state at a phone width.
    function syncAcc() {
      var wide = window.matchMedia('(min-width: 900px)').matches;
      accBtns.forEach(function (b) { b.setAttribute('aria-expanded', wide ? 'true' : 'false'); b.tabIndex = wide ? -1 : 0; });
    }
    syncAcc();
    var wasWide = window.matchMedia('(min-width: 900px)').matches;
    window.addEventListener('resize', function () {
      var wide = window.matchMedia('(min-width: 900px)').matches;
      if (wide !== wasWide) { wasWide = wide; syncAcc(); }
    });
  }

  function renderBar(host) {
    if (!host) return;
    var cfg = shellCfg();
    host.setAttribute('aria-label', 'Shortcuts');
    // AN ICON ZONE OVER THE LABEL, D-50. Every bottom bar in this category carries one
    // and the rail already reserves its own; this carrier was drawing bare text, so the
    // day the icons arrive every label in it moves. The zone is the size the icon will
    // be, so what arrives is an image in a place rather than a new element in a full row.
    barItems().forEach(function (it) {
      var a = el('a', it.file === cfg.active ? 'is-current' : null);
      a.href = BASE + it.file;
      var ic = el('span', 'wf-bar-i');
      ic.setAttribute('aria-hidden', 'true');
      a.appendChild(ic);
      a.appendChild(el('span', 'wf-bar-l', it.label));
      if (it.file === cfg.active) a.setAttribute('aria-current', 'page');
      host.appendChild(a);
    });
  }

  // THE COMMIT BAR, and it exists because sticky cannot do what the node asks for.
  // 3.3 section 14: "The commit block BECOMES STICKY ONCE IT SCROLLS OUT OF VIEW, and
  // it sits directly above the mobile bar." `position: sticky` with `bottom` pins an
  // element while its normal position is still BELOW the threshold, so it holds a block
  // you are scrolling down towards and releases it the moment you pass it. It never
  // drags one down from above, which is precisely the case here. The behaviour is a
  // second, condensed carrier that appears when the real block leaves the screen.
  // WHAT MAY CONDENSE AND WHAT MAY NOT. The entry cost and the trigger are on it at
  // every moment, because "it never drops the entry cost to save the height" is the
  // node quoting design principle 3. The sentence explaining what the trigger will ask
  // for has already been read by the time this appears, so it is the part that goes.
  // Generic on purpose: 4.1 and 5.3 put a cost and a trigger in the same relationship.
  // THE ROLL DETAIL DISCLOSURE, D-51. Hover is handled in CSS where a pointer exists;
  // this is the half hover cannot do: click, Enter and Space to open, Escape and an
  // outside click to close. Same contract as the account menu, 0.1 section 5.
  function mountRollDetail() {
    var wrap = document.querySelector('.wf-detail-wrap');
    if (!wrap) return;
    var btn = wrap.querySelector('.wf-detail-b');
    function set(open) {
      wrap.classList.toggle('is-open', open);
      // A DISMISSAL IS A STATE AND NOT AN EVENT. Escape returns focus to the control,
      // which is inside the wrapper, so :focus-within would reopen the panel in the same
      // frame. is-shut holds the dismissal until the pointer leaves or focus does.
      wrap.classList.toggle('is-shut', !open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    function unshut() { wrap.classList.remove('is-shut'); }
    btn.addEventListener('click', function () { set(btn.getAttribute('aria-expanded') !== 'true'); });
    wrap.addEventListener('mouseleave', unshut);
    wrap.addEventListener('focusout', function (e) { if (!wrap.contains(e.relatedTarget)) unshut(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { set(false); btn.focus(); }
    });
    document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) { set(false); unshut(); } });
  }

  function mountCommitBar() {
    var src = document.querySelector('.wf-commit');
    if (!src || !window.IntersectionObserver) return;
    // THE CONDENSED BAR IS THE COMMIT BLOCK'S, and only the commit block's. Section 14
    // specifies it for the surface where money is about to be spent: the entry cost and
    // the trigger together at every scroll position. On phase 3 and on the interrupted
    // state the same selectors match a receipt and a "Keep it" route, and the bar would
    // mount over a control that is already on screen and never was a commit.
    // Phase 2 needs no opt-out: it has no primary trigger at all, because THE TRIGGER
    // DOES NOT RE-ARM during a reveal, and this returns on its own.
    if (src.hasAttribute('data-nobar')) return;
    var cost = src.querySelector('.wf-fig-v');
    var trigger = src.querySelector('.wf-btn--primary');
    if (!trigger) return;

    var bar = el('div', 'wf-commit-bar');
    bar.setAttribute('aria-hidden', 'true');
    // D-31 cut the standalone cost figure out of the commit block: the total now lives
    // on the trigger label and nowhere else. The bar follows rather than reinstating a
    // figure the block no longer has, because two places to read one number is how the
    // two drift apart. Where a figure does exist it is still carried.
    if (cost) { bar.appendChild(el('span', 'wf-commit-bar-v', cost.textContent)); }
    /* A LINK AND NOT A PICTURE OF ONE, round 15: the bar's trigger was a span, so
       a tap on it did nothing. It carries the trigger's address and stays out of
       the tab order, because the trigger itself is still in the document. */
    var t = el('a', 'wf-btn wf-btn--primary', trigger.textContent);
    t.setAttribute('href', trigger.getAttribute('href') || '#'); t.tabIndex = -1;
    bar.appendChild(t);
    document.querySelector('.wf-screen-body').appendChild(bar);

    // aria-hidden because it is a duplicate of a control that is still in the document
    // and still reachable. A screen reader meeting the same trigger twice is being told
    // there are two ways to spend, and there is one.
    // WHAT IS OBSERVED IS THE TRIGGER, NOT THE BLOCK, and that is what makes section
    // 14's requirement true rather than nearly true. It asks for the entry cost and the
    // trigger together on the first screen; at 360 the head, the stage and the cost fit
    // above the fold and the trigger lands about thirty pixels under it. Watching the
    // block, the bar stayed hidden because the block was partly in view, so the one
    // control the screen exists for was the thing below the line. The rule is now
    // literal: the trigger is on screen at every scroll position, as itself or as this
    // bar. The bottom margin is the mobile bar's own height, because a control behind a
    // fixed carrier is not visible however much of it intersects the viewport.
    // Measured on scroll rather than observed. An IntersectionObserver with a threshold
    // of 1 and a negative bottom margin expresses the same rule, and it reported the
    // trigger as visible while it sat 30px under the fixed bar: the callback fires on
    // threshold crossings, and a control that loads already outside the margin never
    // crosses anything. The rule here is a comparison, so it is written as one.
    var BAR_H = 56;
    var pending = false;
    function sync() {
      pending = false;
      var r = trigger.getBoundingClientRect();
      var visible = r.top >= 0 && r.bottom <= window.innerHeight - BAR_H;
      bar.classList.toggle('is-on', !visible);
    }
    function queue() { if (!pending) { pending = true; requestAnimationFrame(sync); } }
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    sync();
  }

  // WF_RENDER, an export nothing read, left in round 14. } };


  /* ==========================================================================
     NODE 2.4, SIGN IN. ONE CARD, BUILT ONCE, D-54, D-55, D-56.
     THE DIALOG IS THE CANON AND THE POINT IS THAT NOBODY IS TAKEN OFF THE PAGE
     THEY ARE ON. A person meets a control they cannot use and signs in from
     where they stand, with the case they chose still on the screen behind them.
     ONE CONTENT, TWO CARRIERS, AND D-56 SPLITS THEM ONCE AND NAMES THE SPLIT.
     The dialog carries the art, the title, the providers, the two declarations
     and the four absolute lines. The address carries all of that plus the round
     trip, the starter credit, the route back as a link, the footer and the H1.
     The split is NOT a short version and a long version of one statement, which
     is what D-54 rejected: the half of the statement left at the address is the
     half that is still [?], and a list of unknowns is not a statement yet.
     THE ORDER IS THE SAME IN BOTH CARRIERS. The declarations come before the
     providers, D-56, because the node's own default state says the reason is
     "stated in text above it", and four buttons above their reason was worse than
     one. Since D-58 the buttons are live and a press refuses; since D-130 the line
     above them is empty until that press needs it.
     ========================================================================== */
  /* WHERE SIGN IN LANDS, round 14. It went to case-open.html from everywhere,
     which is a case opened and paid for that nobody pressed, and from a typed
     /signin it opened a case the person never chose. It lands on the signed-in
     version of the page it was opened over, and on Home from the address. */
  function afterSignIn(carrier) {
    if (carrier !== 'dialog') return 'index-account.html';
    var f = currentFile();
    /* WITH ITS ADDRESS, round 17, D-160, B1-1 and B1-2: a sign in over Warsteel
       landed on Ironbound, and one over a result or the fair page on Home. */
    var q = location.search;
    if (/^case/.test(f) || /^gate/.test(f)) return 'case-account.html' + (/[?&]case=/.test(q) ? '?case=' + caseKey() : '');
    if (/^catalogue/.test(f)) return 'catalogue-account.html';
    if (/^(fair|result|player)/.test(f)) return f + q;
    return 'index-account.html';
  }
  function authCard(state, carrier) {
    var isFail = (state === 'refused' || state === 'unavailable');
    var isDlg  = (carrier === 'dialog');
    var h = isDlg ? 'h3' : 'h2';   // D-54 section 0.9.9: the dialog carries no H1
    var out = [];

    // ---- THE FAILURE BLOCK, 2.5 and 2.6, FIRST -----------------------------
    if (state === 'refused') {
      // 5.1: THE MESSAGE NAMES WHICH SIDE FAILED. The barrier has a voice and it
      // is a failure that told a person something false about themselves, so the
      // defect is the false attribution and not the failure. The cause drawn
      // here is the second of the node's four, the one that is ours.
      // NEVER: a raw provider code as the whole message, the bare word error, a
      // number alone, or a sentence claiming the credentials are wrong when we
      // have no way of knowing that. The reference is a secondary line, 5.1.
      out.push('<div class="wf-fail">');
      out.push('<p class="wf-fail-h">Steam returned an identity we could not verify</p>');
      out.push('<p class="wf-fail-p">We got an answer from Steam and could not confirm it was you. <b>This is on our side.</b> Nothing about your account here changed.</p>');
      out.push('<p class="wf-fail-ref">Reference SR-4471 for support</p>');
      out.push('<div class="wf-fail-acts">');
      out.push('<a class="wf-btn wf-btn--primary" href="signin.html">Try again</a>');
      out.push('<a class="wf-btn" href="support.html">Contact support</a>');
      out.push('</div>');
      // 5.2, THE RULE THAT OUTRANKS THE COPY: no password field appears in this
      // state or in any state of this node. A failed third party sign in
      // followed by a password form is the exact shape B3-1's own thread warns
      // about. A retry re-runs the round trip, it never asks for a credential.
      out.push('</div>');
    }

    if (state === 'unavailable') {
      // 6.2, and the one sentence that separates it from 2.5 comes first.
      // 6.3, THE ONE THING IT MUST NEVER BE: a spinner. A person waiting on an
      // indefinite loader against a dead provider has been given a failure with
      // the failure removed.
      // NO PROMISED RETRY TIME. 0.11 row G2 is the Steam health probe and the
      // interval is [?]. Design principle 5: lag reads as dishonesty, and a
      // countdown that expires into the same failure is worse than none.
      out.push('<div class="wf-fail">');
      out.push('<p class="wf-fail-h">Steam is not answering right now</p>');
      out.push('<p class="wf-fail-p"><b>This is on Steam&#39;s side.</b> Try again shortly. Everything public still works without an account.</p>');
      out.push('<div class="wf-fail-acts">');
      out.push('<a class="wf-btn wf-btn--primary" href="case.html">Back to the case</a>');
      out.push('<a class="wf-btn" href="fair.html">' + WF_STR.provablyFair + '</a>');
      out.push('</div>');
      out.push('</div>');
    }

    // ---- THE CONSENT GATE, D-26, AND IT COMES FIRST NOW, D-56 --------------
    // TWO CHECKBOXES AND NOT ONE, and the reason is in the canon rather than in
    // taste. baseline-account.md records the live product's version: a single
    // line, "I'm 18+ and I agree to the Terms and Conditions", with no required
    // attribute and with the provider buttons live while it is unchecked. Every
    // competitor capture the founder brought does the same or worse: one of them
    // bundles both into one line. One checkbox bundles a contract consent with
    // an age declaration, and a person who ticks it to get past it has made ONE
    // GESTURE THAT ANSWERED TWO QUESTIONS. Splitting them costs one line and
    // makes the age declaration a separate deliberate act, which is the only
    // property that makes it worth anything at all.
    // IT STAYS VISIBLE IN 2.5 AND 2.6, node section 8: the moment a sign in
    // fails is exactly when a person re-reads what the site wanted from them.
    // AND IT DOES NOT CLAIM TO BE VERIFICATION. It is a self declaration, the
    // surface says so, and 2.7 is where the other layer lives.
    var terms = (state === 'partial' || state === 'given' || isFail);
    var age   = (state === 'given' || isFail);
    // THE BLOCKED STATE, D-58: a person pressed a provider without declaring.
    var blocked = (state === 'blocked');
    out.push('<div class="wf-consent' + (blocked ? ' is-asked' : '') + '">');
    // REAL CONTROLS, NOT DRAWINGS OF CONTROLS. Each one is a button with the
    // checkbox role and its own checked state, and the text beside it toggles it
    // too, except where the text is a link to the document it names.
    out.push('<div class="wf-cbx' + (terms ? ' is-set' : (blocked ? ' is-missing' : '')) + '"><button class="wf-cbx-box" type="button" role="checkbox" aria-checked="' + (terms ? 'true' : 'false') + '" aria-labelledby="wf-cbx-t1"><span aria-hidden="true">✓</span></button><span class="wf-cbx-t" id="wf-cbx-t1">I agree to the <a href="legal.html">Terms and Conditions</a> and the <a href="legal-unpublished.html?doc=privacy">Privacy Policy</a>.</span></div>');
    out.push('<div class="wf-cbx' + (age ? ' is-set' : (blocked ? ' is-missing' : '')) + '"><button class="wf-cbx-box" type="button" role="checkbox" aria-checked="' + (age ? 'true' : 'false') + '" aria-labelledby="wf-cbx-t2"><span aria-hidden="true">✓</span></button><span class="wf-cbx-t" id="wf-cbx-t2">I declare that I am 18 or over.</span></div>');
    // THE REASON IS WORDS, not only a dimmed button, and in the partial state it
    // NAMES WHICH DECLARATION IS MISSING rather than repeating the general
    // instruction. Two declarations means two failure messages, node section 4.
    if (state === 'default') {
      // D-57: ONE LINE, NOT THREE. The node requires the reason in words rather
      // than only in a dimmed button, and one sentence is words. The sentence
      // that went explained our design to the person instead of telling them
      // what to do, and it is in the node where it belongs.
      // D-58: IT IS A LIVE REGION NOW, because the same line is what answers a
      // press that could not go through, and an answer nobody hears is a dead
      // button with extra steps.
      // D-130: EMPTY UNTIL A PRESS NEEDS IT. It stays the live region that
      // answers a refused press, and it no longer states a rule nobody broke.
      out.push('<p class="wf-consent-why" data-auth-why></p>');
    } else if (state === 'partial') {
      out.push('<p class="wf-consent-why" data-auth-why><b>The age declaration is still missing.</b></p>');
    } else if (state === 'blocked') {
      // THE ANSWER TO A PRESS, AND IT NAMES WHICH ONE. Two declarations means
      // two failure messages, node section 4, and that rule was written for a
      // dimmed control. It is worth more here, where it is the whole reply.
      out.push('<p class="wf-consent-why" data-auth-why><b>Tick both to continue.</b> Neither declaration has been made yet.</p>');
    } else if (state === 'given') {
      out.push('<p class="wf-consent-why" data-auth-why>Both declarations made.</p>');
    } else {
      out.push('<p class="wf-consent-why"></p>');
    }
    out.push('</div>');

    // ---- THE PROVIDERS, D-55 -----------------------------------------------
    // FOUR PROVIDERS, ONE OF THEM THE ACT. The node argued for one and the
    // founder overrode it on 21 August 2026 knowing the cost, which is printed
    // rather than smoothed: withdrawal is to Steam and Steam only at launch,
    // jtbd.md Decision 4, so an account made with any of the other three CANNOT
    // RECEIVE WHAT IT WINS until Steam is linked. That is barrier B4-1's own
    // shape, an account that can pay in and cannot take out.
    // WHAT MAKES IT HONEST IS THE PLACEMENT OF THE SENTENCE, not its existence.
    // C4 generalised: what is required to withdraw is stated BEFORE the money
    // moves. So the requirement sits on this surface, beside the three buttons
    // that carry it, and not in a settings page a person finds afterwards.
    // ONE PRIMARY AND THREE SECONDARY, and the difference is structural: Steam
    // is the only one that can receive a skin, so it is the only one drawn as
    // the act. Four equal buttons would say the four are equal, and they are not.
    // NOT ONE OF THEM IS DISABLED, D-58, and the enforcement is unchanged.
    // A dead control answers "why not" with nothing. The founder's own reading
    // of it: a person arrives, finds it unavailable, cannot see what to do,
    // and either leaves or writes to support. FOUR dead controls in a row is
    // that four times over, which is what D-56 already said about the wall.
    // WHAT D-26 REQUIRES IS THAT NOBODY GETS THROUGH WITHOUT BOTH DECLARATIONS,
    // and that is exactly as true here: the press does not sign anyone in. The
    // baseline's defect was that its provider buttons WORKED with the box
    // unticked, baseline-account.md. These do not.
    // WHAT CHANGES IS THE ANSWER. The press marks the declarations that are
    // missing, names which, and puts the keyboard on the first of them, so the
    // reply to "why can I not" is on the screen instead of in a support queue.
    if (!isFail) {
      out.push('<div class="wf-auth-blk">');
      out.push('<a class="wf-btn wf-btn--primary wf-prov-1" href="' + afterSignIn(carrier) + '" data-auth-go><span class="wf-prov-i" aria-hidden="true"></span>Sign in with Steam</a>');
      out.push('<p class="wf-or">or continue with</p>');
      /* THE THREE ARE ONE ROW OF EQUAL THIRDS AND THE CLASS IS THE FIX, D-105.
         Founder on the built dialog: stretch the three the same so the X is not
         crushed. NOTHING NEW WAS WRITTEN. .wf-prov-row was written for this row
         with flex 1 1 0 and has been dead CSS since D-100: the class collision
         reported there was repaired on the wrong side, 2.4's markup was renamed
         to the deposit's name instead of the deposit's block being renamed, and
         both owners ended on the deposit's rules. THREE EQUAL THIRDS BECAME
         THREE CONTENT WIDTHS with a 16px gap and a wrap, which is 125, 129 and
         86 at 1440 and the X on a line of its own at 360. */
      out.push('<div class="wf-prov-row">');
      ['Google', 'Discord', 'X'].forEach(function (n) {
        out.push('<a class="wf-btn" href="' + afterSignIn(carrier) + '" data-auth-go><span class="wf-prov-i" aria-hidden="true"></span>' + n + '</a>');
      });
      out.push('</div>');
      // D-57: SHORTER, AND EVERY PART OF D-55's REQUIREMENT IS STILL IN IT. That
      // those three work now, that Steam is needed to take a skin out, and that
      // the link is not urgent. What went was the explanation of why, which the
      // node holds and this surface does not owe.
      out.push('<p class="wf-prov-cost">To withdraw skins, <b>link Steam</b>, any time.</p>');
      out.push('</div>');
    }

    // ---- WHAT WE NEVER READ OR DO. FOUR ABSOLUTE LINES, D-56 ---------------
    // THIS IS WHY THE NODE EXISTS AND IT IS IN THE DIALOG. blocks.md section 6
    // walked five competitors' sign in surfaces live and none of them prints
    // one; the three the founder brought on 21 August print none either. Its
    // parent is a barrier with a voice: B3-2, a site that required a Steam
    // avatar change to unlock a free case, and a person who concluded from that
    // alone that it was a scam. The person arriving here has already been taught
    // a test, and this surface either passes it visibly or fails it silently.
    // FOUR LINES IS NOT A COMPROMISE, IT IS THE FINISHED HALF. Every line here
    // is absolute and every one is a rule written down elsewhere in this
    // repository rather than a promise made on this surface. The other half,
    // what we DO read, is still [?] field by field, and a list of unknowns is
    // not a statement, so it waits at the address for production to fill it.
    // D-130: THE FOUR NEVERS ARE ONE LINE. They were the largest block in the
    // dialog; the line keeps the two a person checks for, and the node keeps all four.
    // 2.5 AND 2.6 REPLACE BLOCKS 1 AND 3 IN PLACE, round 15: the line stayed on
    // both failure states, where the node says the failure takes its place.
    if (!isFail) out.push('<p class="wf-never-l">We never ask for your password or change your Steam profile.</p>');

    // ======== FROM HERE DOWN: THE ADDRESS CARRIER ONLY, D-56 ================

    // ---- The route back into reading without signing in ----------------------
    // 2.6's principle applied to the default state: A PERSON WHO WILL NOT SIGN
    // IN IS NOT EJECTED. In the dialog, D-54 makes the dismissal itself carry
    // this, so the link is not repeated there: a control that does the same
    // thing as the scrim, the close and Escape is a fourth way to do one thing.
    // At the address there is nothing to dismiss, so it is a real crawlable
    // anchor, 0.13 section 8.
    if (!isDlg) {
      out.push('<div class="wf-auth-blk">');
      out.push('<' + h + '>Or keep looking around without an account</' + h + '>');
      out.push('<p class="wf-auth-lede"><a href="case.html">Back to the case</a> or <a href="index.html">home</a>. Everything here is readable without an account.</p>');
      out.push('</div>');
    }

    return out.join('');
  }

  /* THE DIALOG CARRIER, D-54 AND D-55. The frame is 0.1 section 6's modal
     contract taken whole: the scrim blocks the content behind, nothing is raised
     above it, and there are three ways out. The one renamed dismissal is the
     first, because there is nothing to select here: the close control, the
     scrim, and Escape. Dismissing records nothing and returns the person exactly
     where they were, which is how block 6 is satisfied structurally rather than
     by a link they have to notice.
     THE ART SLOT IS A SLOT. An image is stage 06's and its space is this
     stage's, which is D-50's rule for icons applied to the one picture the
     founder asked for on 21 August. */
  function authDialogHTML(state) {
    return '' +
      '<div class="wf-dlg-scrim" data-auth-dismiss="1"></div>' +
      '<div class="wf-dlg-wrap" data-auth-dismiss="1">' +
        '<div class="wf-dlg" role="dialog" aria-modal="true" aria-labelledby="wf-dlg-h">' +
          '<button class="wf-dlg-close" type="button" aria-label="Close">✕</button>' +
          '<div class="wf-dlg-art" aria-hidden="true">Image</div>' +
          '<div class="wf-dlg-body">' +
            '<p class="wf-dlg-h" id="wf-dlg-h">' + WF_STR.signIn + '</p>' +
            authCard(state || 'default', 'dialog') +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* THE DECLARATIONS BEHAVE, D-58. Convention section 2: a live screen, not a
     diagram. The two checkboxes really toggle and the providers really refuse,
     because the whole of this decision is what happens ON the press, and a still
     picture of a press cannot be reviewed.
     WHAT D-26 REQUIRES IS UNCHANGED: nobody gets through without both
     declarations. What changed is that the refusal answers instead of sulking. */
  function wireAuth(scope) {
    if (!scope) return;
    var boxes = scope.querySelectorAll('.wf-cbx');
    if (!boxes.length) return;

    function set(row, on) {
      row.classList.toggle('is-set', on);
      if (on) row.classList.remove('is-missing');
      var b = row.querySelector('.wf-cbx-box');
      if (b) b.setAttribute('aria-checked', on ? 'true' : 'false');
    }
    function count() {
      var n = 0;
      Array.prototype.forEach.call(boxes, function (r) { if (r.classList.contains('is-set')) n++; });
      return n;
    }
    function say(html) {
      var w = scope.querySelector('[data-auth-why]');
      if (w) w.innerHTML = html;
    }
    function settle() {
      var n = count();
      var consent = scope.querySelector('.wf-consent');
      if (n === 2) {
        if (consent) consent.classList.remove('is-asked');
        say('Both declarations made.');
      } else if (!consent || !consent.classList.contains('is-asked')) {
        say('');
      }
    }

    Array.prototype.forEach.call(boxes, function (row) {
      row.addEventListener('click', function (e) {
        // A LINK INSIDE A DECLARATION IS A LINK. Opening the terms is not
        // agreeing to them, and one click may not do both.
        if (e.target.closest('a')) return;
        e.preventDefault();
        set(row, !row.classList.contains('is-set'));
        settle();
      });
      var b = row.querySelector('.wf-cbx-box');
      if (b) b.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); row.click(); }
      });
    });

    scope.addEventListener('click', function (e) {
      var go = e.target.closest('[data-auth-go]');
      if (!go) return;
      if (count() === 2) return;          // through, and the href does the rest
      e.preventDefault();
      var consent = scope.querySelector('.wf-consent');
      if (consent) consent.classList.add('is-asked');
      var missing = [];
      Array.prototype.forEach.call(boxes, function (r, i) {
        if (!r.classList.contains('is-set')) { r.classList.add('is-missing'); missing.push(i); }
      });
      // TWO DECLARATIONS MEANS TWO FAILURE MESSAGES, node section 4. That rule
      // was written for a dimmed control and it is worth more here, where the
      // sentence is the entire reply to a press.
      if (missing.length === 2) say('<b>Tick both to continue.</b> Neither declaration has been made yet.');
      else if (missing[0] === 0)  say('<b>The agreement to the terms is still missing.</b>');
      else                        say('<b>The age declaration is still missing.</b>');
      // AND THE KEYBOARD GOES WHERE THE ANSWER IS. A message about a control
      // somewhere above is a message a person has to go and find.
      var first = scope.querySelector('.wf-cbx.is-missing .wf-cbx-box');
      if (first) first.focus();
    });
  }

  /* THE DIALOG GOES OUT ONTO EVERY GUEST SURFACE, and that is the whole point of
     D-54: A PERSON IS NEVER TAKEN OFF THE PAGE THEY ARE ON. Any control marked
     data-auth-open opens it, which is the header account control on every guest
     page and the two triggers on Home. The case screen keeps routing to the geo
     gate first, because 2.1 fires at the first case interaction and the two
     layers are never on screen at once.
     THE THREE DISMISSALS ARE 0.1 SECTION 6's, ONE OF THEM RENAMED, and focus is
     trapped on open and returned to the control that opened it on close. */
  function mountAuthDialog() {
    var opener = null;
    var host = null;

    function close() {
      if (!host) return;
      host.remove();
      host = null;
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', onKey, true);
      if (opener && document.contains(opener)) opener.focus();
      opener = null;
    }

    function onKey(e) {
      if (!host) return;
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Tab') return;
      // THE TRAP. A dialog a keyboard can walk out of behind the scrim is a
      // scrim that failed to block anything.
      var f = host.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    function open(state, trigger) {
      if (host) return;
      opener = trigger || null;
      host = el('div', 'wf-auth-host');
      host.innerHTML = authDialogHTML(state || 'default');
      document.body.appendChild(host);
      wireAuth(host.querySelector('.wf-dlg-body'));
      // THE SURFACE BEHIND IS INERT AND IS NEVER REMOVED, 0.1's own rule for a
      // gate open. Removing the carriers would make the dialog read as an
      // ejection rather than a step, and the case the person chose is exactly
      // what they are meant to still be looking at.
      document.documentElement.style.overflow = 'hidden';
      host.addEventListener('click', function (e) {
        if (e.target.closest('.wf-dlg-close') || e.target.hasAttribute('data-auth-dismiss')) close();
      });
      document.addEventListener('keydown', onKey, true);
      var f = host.querySelector('.wf-dlg-close');
      if (f) f.focus();
    }

    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-auth-open]');
      if (!t) return;
      e.preventDefault();
      open(t.getAttribute('data-auth-open') || 'default', t);
    });

    // THE CANON PAGE renders it open on load, because a canon nobody can see
    // without a click is a canon nobody checks.
    var pinned = document.querySelector('[data-auth-pinned]');
    if (pinned) open(pinned.getAttribute('data-auth-pinned') || 'default', null);
  }

  /* ---------------------------------------------------------------------
     NODE 2.1, THE GEO GATE. Built once here and fired from the case screen's
     own trigger, because a gate that does not fire is a picture of a gate.
     IT RENDERS OVER THE SURFACE THE PERSON IS ALREADY ON and never at a URL of
     its own: nobody arrives at a gate from outside. The case screen behind it
     stays in place, because what the person was doing is what the interrupt is
     a consequence of.
     ON AN OPEN MARKET IT RENDERS NOTHING. D-26 took the 18+ declaration to 2.4
     and what is left is the market question, so the only thing this node puts
     on screen when the answer is yes is the lookup, and that must not flash.
     --------------------------------------------------------------------- */
  function gateHTML(state) {
    var body;

    if (state === 'check') {
      // THE SIXTH LOADING STATE IN THE MAP, declared rather than smuggled in.
      body =
        '<div class="wf-check" role="status">' +
          '<span class="wf-check-dot" aria-hidden="true"></span>' +
          '<span>Checking whether we serve your market</span>' +
        '</div>';
      return '<div class="wf-dlg-scrim" aria-hidden="true"></div>' +
             '<div class="wf-dlg-wrap"><div class="wf-dlg wf-dlg--plain" role="dialog" aria-modal="true" aria-label="Checking the market">' +
             '<div class="wf-dlg-body"><div class="wf-gate">' + body + '</div></div></div></div>';
    }

    if (state === 'staged') {
      body =
        '<h2 class="wf-gate-h" id="wf-gate-h">This market is open with one limit.</h2>' +
        /* THE LIMIT COMES FROM THE MARKET ROW AND IS NEVER INVENTED HERE. This
           node holds no market list, no legal citation and no age constant: a
           constant here is a second register that will disagree with the first. */
        '<div class="wf-limit">' +
          '<span class="wf-limit-h">The limit</span>' +
          '<p class="wf-gate-p">Deposits are capped at <strong>$100 a week</strong> here for now. Withdrawal to Steam is open.</p>' +
        '</div>' +
        /* REJECT AS EASY AS ACCEPT, the rule this product already applied to its
           other interrupt. Declining returns the person to what they were
           reading and records nothing. */
        '<div class="wf-gate-acts">' +
          /* EQUAL WEIGHT, gate.md section 4.2 block 3, round 16, D1-23: Continue
             was primary beside a plain Not now. */
          '<button class="wf-btn" type="button" data-gate-dismiss data-auth-open="default">Continue</button>' +
          '<button class="wf-btn" type="button" data-gate-dismiss>Not now</button>' +
        '</div>';
    } else if (state === 'blocked') {
      body =
        '<h2 class="wf-gate-h" id="wf-gate-h">We cannot serve this market.</h2>' +
        '<p class="wf-gate-p">The law where you are does not allow what this site does.</p>' +
        /* THE GROUND IS PER MARKET AND COMES FROM THE REGISTER. Where a row's
           ground is [?] the row is not blocked at all: B4's success signal is
           that every blocked market carries a citation. Readable words, never a
           statute number standing alone. DRAWN SINCE ROUND 15: the ground had no
           place once D-136 removed Where we operate. The sample market is
           Washington, markets.md section 2's readable sentence, D-124. */
        '<p class="wf-gate-p">Washington State Gambling Commission ordered Valve to stop allowing skin transfers for gambling, October 2016.</p>' +
        '<p class="wf-gate-p">Not in this country? Tell support below, we answer within 72 hours.</p>' +
        openLine() + refusalActs();
    } else {
      // NOT LAUNCHED IS THE DEFAULT UNDER AN ALLOWLIST, and detection failing
      // renders the same message: a missing row denies. The tempting default is
      // to fail open, and failing open is the property the allowlist was chosen
      // to eliminate.
      var lede = (state === 'unavailable')
        ? 'We could not work out where you are, so opening cases is not available.'
        : 'Opening cases is not available where you are.';
      body = (state === 'unavailable'
        ? '<h2 class="wf-gate-h" id="wf-gate-h">We could not check your market.</h2>' +
          '<p class="wf-gate-p">Opening cases is not available until we can. Try again shortly.</p>'
        : '<h2 class="wf-gate-h" id="wf-gate-h">We do not serve this market yet.</h2>' +
          '<p class="wf-gate-p">' + lede + '</p>') +
        openLine() + refusalActs();
    }

    return '<div class="wf-dlg-scrim" aria-hidden="true"></div>' +
           '<div class="wf-dlg-wrap"><div class="wf-dlg wf-dlg--plain" role="dialog" aria-modal="true" aria-labelledby="wf-gate-h">' +
           '<div class="wf-dlg-body"><div class="wf-gate">' + body + '</div></div></div></div>';
  }

  /* A BLOCKED MARKET IS A RESTRICTION ON SERVICE, NOT AN EJECTION FROM THE
     BUILDING. What stays open is stated in the same breath as what does not,
     and it is the same sentence on both refusals. */
  function openLine() {
    // A GUEST HAS NO BALANCE, round 14: the second half is said only to an account.
    return '<p class="wf-gate-open">You can still browse.' + ((window.WF_SHELL && window.WF_SHELL.account) ? ' Your balance and items stay yours, and withdrawal stays open.' : '') + '</p>';
  }
  function refusalActs() {
    // NEVER A LIST OF THE MARKETS THAT ARE OPEN. The footer's market statement
    // is the public face of the register; this dialog answers one person.
    return '<div class="wf-gate-acts">' +
      '<a class="wf-btn wf-btn--primary" href="support.html">' + WF_STR.support + '</a>' +
      '<a class="wf-btn" href="fair.html">How drops are proven</a>' +
    '</div>';
  }

  function mountGate() {
    var host = null, opener = null;

    function close() {
      if (!host) return;
      host.remove(); host = null;
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', onKey, true);
      if (opener && document.contains(opener)) opener.focus();
      opener = null;
    }
    function onKey(e) {
      if (!host) return;
      // DISMISSAL IS NOT A DECLARATION. Escape closes and returns the person to
      // what they were reading, nothing is recorded, and the gate fires again at
      // the next case interaction.
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Tab') return;
      var f = host.querySelectorAll('a[href], button:not([disabled])');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    function open(state, trigger) {
      if (host) return;
      opener = trigger || null;
      host = el('div', 'wf-gate-host');
      host.innerHTML = gateHTML(state || 'check');
      document.body.appendChild(host);
      document.documentElement.style.overflow = 'hidden';
      host.addEventListener('click', function (e) {
        if (e.target.closest('[data-gate-dismiss]')) close();
      });
      document.addEventListener('keydown', onKey, true);
      var f = host.querySelector('button, a[href]');
      if (f) f.focus();
      /* THE CHECK RESOLVES, round 14. The case screen's Sign in reaches sign in
         through the gate, 2.1 before 2.4, which is the flow the map draws and the
         click path nothing had produced. A market the allowlist opens passes
         straight to the sign in dialog; the verdict states have their own pages. */
      if (state === 'check' && trigger) setTimeout(function () {
        close();
        var go = el('button'); go.setAttribute('data-auth-open', 'default'); go.hidden = true;
        document.body.appendChild(go); go.click(); go.remove();
      }, 700);
    }

    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-gate-open]');
      if (!t) return;
      e.preventDefault();
      open(t.getAttribute('data-gate-open') || 'check', t);
    });

    var pinned = document.querySelector('[data-gate-pinned]');
    if (pinned) open(pinned.getAttribute('data-gate-pinned'), null);
  }

  /* ---------------------------------------------------------------------
     0.14 VARIANT V3, THE FULL ROUND PROOF PANEL. Built once here because the
     component has four consumers, 1.2, 3.3 at phase 2 and at phase 3, and 7.1.
     V1 is the hash chip at the spin trigger and it already ships inline on the
     case screen; V3 is the whole panel and 7.1 is the first surface to need it.
     ITS ONE RULE FOR THIS SITE IS WHY 7.1 IS PUBLIC AT ALL: it must not require
     an account. A stranger holds the link and can check the round.
     THE SCOPE LINE IS NOT OPTIONAL AND IT IS NOT SOFTENED. 0.14 section 0: the
     proof shows the round was fixed before the click and not altered after it.
     It does not show that the published chances are the chances used. That is a
     different question and D3 is its answer, on 3.3.
     --------------------------------------------------------------------- */
  /* THE ROUNDS THIS PROTOTYPE CAN PROVE, round 14. The result page, the proof
     panel and the verifier all read one record, so the item, its value, its
     ticket and its hash cannot drift from the drop table they prove. Round 13
     found the result page proving a Classified AK at 22.15 on ticket 7 318,
     which the table gives to the M4A1-S. Samples by D-124, marked in 7.1.
     ?round=glock is the outcome of case-outcome.html: what was won there is
     what "Check this round" and "Share it" now open. */
  /* THE CASES, ONCE, round 16, D-152 answer 2, B1-1. Eleven of twelve tiles
     opened Ironbound, the only case drawn. One case page now renders whichever
     case its address names, ?case=, from this table: name, entry cost and risk
     band are the tiles' own. Ironbound is the drawn case and every other one
     renders its screens scaled to its entry cost, so its values, its expected
     value and its open read in proportion while chances, tickets and RTP stay.
     Samples by D-124, marked in 3.3: the real tables are production data. */
  var WF_CASES = { ironbound: ['Ironbound', 12.40, 'Medium'], warsteel: ['Warsteel', 4.90, 'Low'], coldfront: ['Coldfront', 2.10, 'Low'],
    nightfall: ['Nightfall', 31.00, 'High'], emberline: ['Emberline', 7.60, 'Medium'], saltmarsh: ['Saltmarsh', 1.35, 'Low'],
    blacklight: ['Blacklight', 18.90, 'Medium'], riftwork: ['Riftwork', 55.00, 'High'], deadbolt: ['Deadbolt', 3.20, 'Low'],
    overcast: ['Overcast', 9.75, 'Medium'], tinderbox: ['Tinderbox', 24.50, 'High'], halfmoon: ['Halfmoon', 0.80, 'Low'] };
  function caseKey() { var m = /[?&]case=([a-z]+)/.exec(location.search); return m && WF_CASES[m[1]] ? m[1] : 'ironbound'; }
  function caseOf(name) { var k = String(name || '').replace(' Case', '').toLowerCase(); return WF_CASES[k] ? k : ''; }
  /* The address of a case, on the shelf of the state a person is in. */
  function caseHref(name, account) { var k = caseOf(name); return (account ? 'case-account.html' : 'case.html') + (k && k !== 'ironbound' ? '?case=' + k : ''); }

  var ROUNDS = {
    ak: { w: 'AK-47', s: 'Redline', axes: ['Field-Tested', 'StatTrak', 'Covert'], won: '47.30', now: '46.85',
          at: '18 Aug 2026 14:44', hash: '4f2a91c7e0b83d5619ac7f20d8e4b1663c9a05f7d21e8b4409c6fa3d7e15b208',
          seed: 'a71c0e4b93f6d2857e0c1a4f68b95d3027ef8c61b4a09d75e3f26c8017ab54d9', client: '7d19f4a2', nonce: '41 207',
          ticket: '2 417', range: '1 to 3 180' },
    glock: { w: 'Glock-18', s: 'Water Elemental', axes: ['Minimal Wear', 'Restricted'], won: '12.90', now: '12.60',
          at: '18 Aug 2026 14:58', hash: 'a3f91c58d02e4b7f6a19c3e08d5b2f7461e0c9ab38d4f25e7c61b09a3f7d20e4',
          seed: '5c8e21f0a7b34d96e18f02c5b7a94d3e60f1b82c9d07a45e3b6c18f2d09e7a51', client: '7d19f4a2', nonce: '41 208',
          ticket: '29 684', range: '23 001 to 37 000' },
    m4: { w: 'M4A1-S', s: 'Hyper Beast', axes: ['Factory New', 'Classified'], won: '24.60', now: '24.10',
          at: '18 Aug 2026 15:06', hash: 'e04b7d2a91c65f38b0d4e17a2c96f5b308d1e7c42a6f9b05d3c8e71f4a2b69c3',
          seed: '9b2f60d4e1a87c35f09b2d6e4a71c8f3052e9d7b1c4a86f30e5d2b97c1a4f608', client: 'e3a0c95b', nonce: '27 044',
          ticket: '6 112', range: '4 201 to 8 800' }
  };
  /* The other four best drops get records too, so every tile on the case screen
     opens its own round. Their seeds are generated, which is what a sample is. */
  function hx(t, n) {
    var h = 2166136261, o = '';
    while (o.length < n) {
      for (var i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
      o += ('0000000' + h.toString(16)).slice(-8); t += o.length;
    }
    return o.slice(0, n);
  }
  [['usp', 'USP-S', 'Kill Confirmed', ['Minimal Wear', 'Restricted'], '14.20', '13.95', '18 Aug 2026 14:22', '15 843', '11 001 to 23 000'],
   ['nova', 'Nova', 'Koi', ['Factory New', 'Mil-Spec'], '7.90', '7.80', '18 Aug 2026 14:39', '91 377', '80 001 to 100 000'],
   ['mp9', 'MP9', 'Rose Iron', ['Field-Tested', 'Mil-Spec'], '7.40', '7.35', '18 Aug 2026 14:51', '44 902', '37 001 to 59 000'],
   ['p250', 'P250', 'Asiimov', ['Battle-Scarred', 'Mil-Spec'], '6.90', '6.70', '18 Aug 2026 14:31', '66 019', '59 001 to 80 000']
  ].forEach(function (r, i) {
    ROUNDS[r[0]] = { w: r[1], s: r[2], axes: r[3], won: r[4], now: r[5], at: r[6], hash: hx(r[0] + 'h', 64), seed: hx(r[0] + 's', 64),
      client: hx(r[0] + 'c', 8), nonce: String(30411 + i * 977).replace(/(\d)(\d{3})$/, '$1 $2'), ticket: r[7], range: r[8] };
  });
  function roundKey() {
    // LETTERS AND DIGITS, round 15: the key stopped at the first digit, so mp9,
    // p250 and m4 fell back to the AK and ten links opened the wrong round.
    var m = /[?&]round=([a-z0-9]+)/.exec(location.search);
    return (m && ROUNDS[m[1]]) ? m[1] : (window.WF_ROUND_DEFAULT || 'ak');
  }
  function proofPanel(state) {
    var tag, fields, scope, acts;
    var R = ROUNDS[roundKey()];

    /* COPY IS A FIRST-CLASS CONTROL, 0.14 section 5, round 16, D1-26: the
       panel printed both 64 character values whole with no way to copy them. */
    var cp = function (v) { return ' <button class="wf-btn wf-btn--small" type="button" data-copy="' + v + '">' + WF_STR.copy + '</button>'; };
    var SEEDS =
      '<div class="wf-fpair"><span class="wf-fpair-k">Server seed hash, published before the roll</span>' +
        '<span class="wf-fpair-v">' + R.hash + cp(R.hash) + '</span></div>' +
      '<div class="wf-fpair"><span class="wf-fpair-k">Server seed, revealed after</span>' +
        '<span class="wf-fpair-v">' + R.seed + cp(R.seed) + '</span></div>' +
      '<div class="wf-fpair"><span class="wf-fpair-k">' + WF_STR.clientSeed + '</span><span class="wf-fpair-v">' + R.client + '</span></div>' +
      '<div class="wf-fpair"><span class="wf-fpair-k">' + WF_STR.nonce + '</span><span class="wf-fpair-v">' + R.nonce + '</span></div>' +
      '<div class="wf-fpair"><span class="wf-fpair-k">' + WF_STR.settledResult + '</span><span class="wf-fpair-v">' + R.ticket + '</span></div>' +
      '<div class="wf-fpair"><span class="wf-fpair-k">Ticket range it landed in</span><span class="wf-fpair-v">' + R.range + ', ' + R.w + ' ' + R.s + '</span></div>';

    if (state === 'unavailable') {
      // 0.14: the real case is rounds predating the published ledger, and
      // whether six years of history can migrate at all is D-B. THE PAGE DOES
      // NOT HIDE AND DOES NOT PRETEND.
      tag = 'Proof not available';
      fields = '<div class="wf-fpair"><span class="wf-fpair-k">Why</span>' +
               '<span class="wf-fpair-v wf-fig-missing">This round predates the published ledger</span></div>';
      scope = 'The round happened and the item is real. What is missing is the published commitment, because this open is older than the ledger that publishes them.';
      acts = '<a class="wf-btn" href="fair.html">Read what the proof covers</a>';
    } else if (state === 'mismatched') {
      // OUR OWN PROOF FAILING, IN A STRANGER'S BROWSER, ON THE SURFACE THAT
      // TRAVELS FURTHEST. It is the state this page is least likely to be built
      // for and the one where building it late costs the most.
      tag = 'Recomputed: does not match';
      fields = SEEDS +
        '<div class="wf-fpair"><span class="wf-fpair-k">Recomputed result</span><span class="wf-fpair-v">30 211</span></div>';
      scope = 'The recomputation does not agree with the settled result. That is our failure, not yours, and it is reportable. The published response deadline applies to it.';
      acts = '<a class="wf-btn wf-btn--primary" href="' + BASE + 'support-submitted.html?r=' + roundKey() + '">Report this round</a>' +
             '<a class="wf-btn" href="fair.html">Recompute it yourself</a>';
    } else if (R.unreadable && state !== 'checked') {
      /* THE SAME MINUTE ON EVERY SURFACE, round 16, B1-23: history said the
         Factory New Glock's proof source could not be read and its public page
         printed it settled. */
      tag = 'Proof unreadable right now';
      fields = '<div class="wf-fpair"><span class="wf-fpair-k">Why</span><span class="wf-fpair-v wf-fig-missing">' + ROLL_PROOF.unreadable + '</span></div>';
      scope = 'The round happened and its material is kept. Nothing about the result changes while it cannot be read.';
      acts = '<a class="wf-btn" href="' + location.pathname.split('/').pop() + location.search + '">Try again</a>';
    } else {
      tag = (state === 'checked') ? 'Recomputed: matches' : 'Settled';
      fields = SEEDS;
      scope = 'Proves the round was fixed before the click. Whether the chances hold is on the case screen, <a href="' + BASE + caseHref(R.kase || 'Ironbound', false) + '#h2-observed">published against observed</a>.';
      acts = '<a class="wf-btn wf-btn--primary" href="fair-prefilled.html' + (roundKey() === 'ak' ? '' : '?round=' + roundKey()) + '">Recompute this round yourself</a>';
    }

    return '' +
      '<div class="wf-proof">' +
        '<div class="wf-proof-h">' +
          '<h2 class="wf-proof-t" id="h2-proof">The round, and how to check it</h2>' +
          '<span class="wf-proof-tag">' + tag + '</span>' +
        '</div>' +
        '<div class="wf-proof-fields">' + fields + '</div>' +
        '<p class="wf-proof-scope">' + scope + '</p>' +
        '<div class="wf-proof-acts">' + acts + '</div>' +
      '</div>';
  }

  /* The result page's own fields read the same record. */
  function renderResult() {
    var box = document.querySelector('.wf-result');
    if (!box) return;
    /* AN ADDRESS WITH NO ROUND BEHIND IT IS GONE, round 17, B1-20: a round
       born in one session, opened in another browser, rendered the AK. */
    var rq = (/[?&]round=([a-z0-9]+)/.exec(location.search) || [])[1];
    if (rq && !ROUNDS[rq] && /^result(-owner)?\.html$/.test(location.pathname.split('/').pop())) { location.replace(BASE + 'result-gone.html'); return; }
    var R = ROUNDS[roundKey()];
    var q = function (sel) { return document.querySelector(sel); };
    if (q('.wf-result-w')) q('.wf-result-w').textContent = R.w;
    if (q('.wf-result-s')) q('.wf-result-s').textContent = R.s;
    if (q('.wf-result-axes')) q('.wf-result-axes').innerHTML = R.axes.map(function (a) { return '<span class="wf-axis">' + a + '</span>'; }).join('');
    var h1 = document.querySelector('.wf-result') && document.querySelector('h1');
    var K = R.kase || 'Ironbound';
    if (h1 && /won from/.test(h1.textContent)) h1.textContent = R.w + ' | ' + R.s + ', won from ' + K;
    // THE TITLE FOLLOWS THE ROUND, round 15: ?round=glock showed a Glock under an AK title.
    document.title = R.w + ' ' + R.s + ', ' + R.axes[0] + ', from ' + K;
    var og = document.querySelector('meta[property="og:title"]'); if (og) og.setAttribute('content', document.title);
    var cn = q('.wf-caserow strong'); if (cn) cn.textContent = K;
    var cr = q('.wf-caserow'); if (cr && K !== 'Ironbound') cr.setAttribute('href', BASE + caseHref(K, false));
    var v = document.querySelectorAll('.wf-vals .wf-fig');
    if (v[0]) v[0].innerHTML = '<span class="wf-fig-v">' + R.won + ' coins</span><span class="wf-fig-c">Worth when it was won, ' + R.at + '</span>';
    if (v[1]) v[1].innerHTML = '<span class="wf-fig-v">' + R.now + ' coins</span><span class="wf-fig-c">' + WF_STR.worthNow + '</span>';
    var o = q('.wf-caserow .wf-fig-c');
    if (o) o.textContent = 'Opened ' + R.at;
    // THE WINNER FOLLOWS THE ROUND, round 15 step 9: a tile naming a sample winner
    // opened a page won by the account. A bot or a hidden profile is not a link,
    // ticker.md 0.6, and a bot keeps its label.
    var fr = FEED.filter(function (r) { return r[5] === roundKey(); })[0] || [0, 0, 0, false, false, roundKey()];
    var wn = q('.wf-who-n'), nm = FEED_WHO[fr[5]];
    if (nm && wn && roundKey() !== 'ak') {
      var wa = wn.querySelector('a'), ws = wn.querySelector('strong');
      if (ws) ws.textContent = nm;
      if (wa && (fr[3] || fr[4] || nm !== window.WF_WHO.name)) wa.replaceWith(ws);
      if (fr[3]) wn.appendChild(el('span', 'wf-feed-bot', ' bot'));
    }
  }

  /* The verifier opens prefilled with the round it was sent from. */
  function renderVerifierPrefill() {
    var R = ROUNDS[roundKey()];
    Array.prototype.forEach.call(document.querySelectorAll('a[href*="support-submitted.html?r="]'), function (a) { a.setAttribute('href', BASE + 'support-submitted.html?r=' + roundKey()); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-round]'), function (e) {
      var k = e.getAttribute('data-round');
      e.textContent = k === 'range' ? R.range + ', ' + R.w + ' ' + R.s : R[k];
    });
    if (!/[?&]round=/.test(location.search)) return;
    var set = function (id, v) { var e = document.getElementById(id); if (e) e.value = v; };
    set('v-hash', R.hash); set('v-seed', R.seed); set('v-client', R.client); set('v-nonce', R.nonce);
  }

  /* THE VERIFIER COMPUTES, round 14: the button was a picture of one on all six
     fair pages. Four well formed inputs land on the matched state for that round,
     anything else on the malformed state. The arithmetic itself is the page's
     published algorithm; the prototype shows where each answer lands. */
  /* THE COUNTS WITHOUT A STATE PAGE ANSWER IN PLACE, round 14. One, two and five
     have pages; three and four were buttons that did nothing. They now set the
     count, the price on the act and the balance after it. */
  /* THREE AND FOUR ARE THE FIVE ROLL PAGES WITH FEWER ROLLS, round 15, D-144.
     The switch offered 1 to 5 as the baseline does and only 1, 2 and 5 had pages,
     so three opened the one roll page. ?n=3 and ?n=4 render the first rolls of the
     five, and every figure that depends on the count is computed here: what was
     spent, the hashes, the balance, what selling or sending them settles. */
  var MULTI = [
    { w: 'P250', key: 'o5p250', v: 6.90, st: 2.70 }, { w: 'Nova', key: 'o5nova', v: 7.90, st: -1.40 },
    { w: 'MP9', key: 'o5mp9', v: 7.40, st: 1.45 }, { w: 'USP-S', key: 'o5usp', v: 14.20, st: -6.85 },
    { w: 'M4A1-S', key: 'o5m4', v: 24.60, st: null }
  ];
  function mountMultiCount() {
    if (!/case-(open|outcome|account)-5\.html/.test(location.pathname)) return;
    var n = parseInt((/[?&]n=([34])/.exec(location.search) || [])[1], 10);
    if (!n) return;
    var R = MULTI.slice(0, n), WORD = { 3: 'three', 4: 'four' }[n], unit = 12.40;
    var spent = n * unit, won = R.reduce(function (a, r) { return a + r.v; }, 0);
    var swap = function (sel, re, to) { Array.prototype.forEach.call(document.querySelectorAll(sel), function (x) { x.innerHTML = x.innerHTML.replace(re, to); }); };
    swap('.wf-case-line', /five rolls/, WORD + ' rolls');
    swap('.wf-fig-c, .wf-hash-l, .wf-sr, .wf-outcome-links a', /\b(?:All )?5( rolls| results| server seed hashes| saved)/g, function (m, w) { return (/^All/.test(m) ? 'All ' : '') + n + w; });
    /* ON THE COMMIT STATE THE SWITCH, THE TRIGGER AND THE LINE FOLLOW THE COUNT. */
    if (/case-account-5/.test(location.pathname)) {
      /* THE BOXES ARE ONE PER CHOSEN ROLL, D-47: the stage at rest shows n. */
      var bx = document.querySelector('.wf-boxes--5');
      if (bx) { Array.prototype.forEach.call(bx.children, function (c, i) { if (i >= n) c.hidden = true; }); }
      Array.prototype.forEach.call(document.querySelectorAll('.wf-count-b'), function (x) { if (x.textContent.trim() === String(n)) x.setAttribute('aria-current', 'true'); else x.removeAttribute('aria-current'); });
      var tr = document.querySelector('.wf-commit-act .wf-btn--primary');
      if (tr) { tr.textContent = 'Open for ' + spent.toFixed(2) + ' coins'; tr.setAttribute('href', BASE + 'case-open-5.html?n=' + n); }
      swap('.wf-commit .wf-fig-c', /After this open, [\d.]+/, 'After this open, ' + (moneyNow().balance - spent).toFixed(2));
      return;
    }
    Array.prototype.forEach.call(document.querySelectorAll('.wf-lane--live'), function (l, i) { if (i >= n) l.hidden = true; });
    var cost = document.querySelector('.wf-commit-cost .wf-fig-v'); if (cost) cost.textContent = spent.toFixed(2) + ' coins';
    var hs = document.querySelector('[data-hashes]'); if (hs) hs.setAttribute('data-hashes', R.map(function (r) { return r.key; }).join(' '));
    Array.prototype.forEach.call(document.querySelectorAll('.wf-won-card'), function (c, i) { if (i >= n) c.remove(); });
    Array.prototype.forEach.call(document.querySelectorAll('a[href*="round=o5"]'), function (a) {
      var k = (/round=(o5[a-z0-9]+)/.exec(a.getAttribute('href')) || [])[1];
      if (!R.some(function (r) { return r.key === k; })) { var li = a.closest('li'); if (li) li.remove(); else a.setAttribute('href', a.getAttribute('href').replace(k, R[n - 1].key)); }
    });
    Array.prototype.forEach.call(document.querySelectorAll('.wf-outcome-acts a, .wf-outcome-acts button'), function (b) {
      var t = b.textContent;
      /* THE COST SPENT STAYS LEGIBLE, 3.6 block 3, round 16, D1-21: the five
         roll outcome printed no spent figure where the others carry it on the act. */
      if (/^Add funds to open/.test(t)) b.textContent = 'Add funds to open ' + n + ' again for ' + spent.toFixed(2) + ' coins';
      if (/^Sell all/.test(t)) b.textContent = 'Sell all ' + n + ' for ' + won.toFixed(2) + ' coins';
      if (/^Send \d+ to Steam/.test(t)) {
        var st = R.reduce(function (a, r) { return a + (r.st || 0); }, 0);
        b.textContent = 'Send ' + n + ' to Steam, ' + (st >= 0 ? '+' : '-') + Math.abs(st).toFixed(2) + ' coins';
      }
    });
    var lines = document.querySelectorAll('.wf-instance');
    if (lines[0] && /Sending to Steam/.test(lines[0].textContent)) {
      lines[0].innerHTML = 'Sending to Steam: ' + R.map(function (r) { return r.w + ' <b>' + (r.st >= 0 ? '+' : '-') + Math.abs(r.st).toFixed(2) + '</b>'; }).join(', ') + ' on your balance.';
      if (lines[1] && /no copy on sale/.test(lines[1].textContent)) lines[1].remove();
    }
    var out = /outcome/.test(location.pathname);
    window.WF_SHELL.money = { balance: (WF_MONEY.balance - spent).toFixed(2) + ' coins', held: (WF_MONEY.held + (out ? won : 0)).toFixed(2) + ' coins' };
    moneyAdd(0, 0);
  }

  function mountCount() {
    document.addEventListener('click', function (e) {
      var b = e.target.closest('button.wf-count-b');
      if (!b) return;
      var box = b.closest('.wf-count');
      var n = parseInt(b.textContent, 10), unit = WF_CASES[caseKey()][1], bal = moneyNow().balance;
      Array.prototype.forEach.call(box.querySelectorAll('.wf-count-b'), function (x) {
        x.removeAttribute('aria-current');
        if (x.tagName === 'BUTTON') x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
      });
      b.setAttribute('aria-current', 'true');
      var scope = box.parentNode;
      var act = scope.querySelector('.wf-btn--primary');
      if (act) act.textContent = 'Open for ' + (n * unit).toFixed(2) + ' coins';
      if (act && (n === 3 || n === 4)) act.setAttribute('href', BASE + 'case-open-5.html?n=' + n);
      /* THE BAR AND THE LINE FOLLOW, round 15: the sticky bar kept the old price
         and the line under the title kept the old count. */
      var sb = document.querySelector('.wf-commit-bar .wf-btn--primary'); if (sb && act) sb.textContent = act.textContent;
      var words = ['', 'one roll', 'two rolls', 'three rolls', 'four rolls', 'five rolls'];
      var cl = document.querySelector('.wf-case-line'); if (cl) cl.textContent = cl.textContent.replace(/(one|two|three|four|five) rolls?\./, words[n] + '.');
      var line = scope.parentNode.querySelector('.wf-fig-c');
      if (line && /After this open/.test(line.innerHTML)) line.innerHTML = line.innerHTML.replace(/After this open, [\d.]+(\s|&nbsp;)coins/, 'After this open, ' + (bal - n * unit).toFixed(2) + '\u00a0coins');
    });
  }

  /* COPY SAYS IT COPIED, AND SELL SELLS, round 14. Both were buttons that
     answered nothing, on the screens where a person has just spent. A sale
     cannot be undone, so the control turns into its receipt. */
  function mountOutcomeActs() {
    document.addEventListener('click', function (e) {
      var c = e.target.closest('[data-copy]');
      if (c) {
        e.preventDefault();
        var txt = c.getAttribute('data-copy') || (c.parentNode.querySelector('.wf-hash-v') || {}).textContent || '';
        /* WHAT IS COPIED IS WHAT IS USABLE, round 15. A shortened hash copied
           its ellipsis, which no verifier accepts, and "Copy the link" copied a
           bare file name with the round dropped. */
        if (/\u2026/.test(txt)) {
          var ends = txt.split('\u2026');
          Object.keys(ROUNDS).forEach(function (k) {
            var h = ROUNDS[k].hash;
            if (h.indexOf(ends[0]) === 0 && h.slice(-ends[1].length) === ends[1]) txt = h;
          });
        }
        if (/\.html$/.test(txt)) txt = new URL(txt + (/[?&]round=/.test(location.search) ? '?round=' + roundKey() : ''), location.href).href;
        var was = c.textContent;
        var said = function (t) { c.textContent = t; setTimeout(function () { c.textContent = was; }, 1600); };
        /* A REFUSED COPY SAYS SO, round 15: without permission the write threw
           and the button said nothing. */
        try {
          if (!navigator.clipboard) throw new Error('none');
          navigator.clipboard.writeText(txt).then(function () { said('Copied'); }, function () { said('Not copied, select it by hand'); });
        } catch (err) { said('Not copied, select it by hand'); }
        return;
      }
      var b = e.target.closest('button');
      if (!b || b.disabled || !/^(Sell|Press again to sell)\b/.test(b.textContent.trim())) return;
      if (!b.closest('.wf-outcome-acts, .wf-won-card')) return;
      if (!confirmFirst(b)) return;
      var num = function (x) { var m = /([\d.]+)(?:\s*coins)?\s*$/.exec(x.textContent.trim()); return m ? m[1] : ''; };
      // A SALE MOVES THE HEADER, round 15: the receipt printed +12.90 over a
      // balance that did not change.
      var sold = function (x) { var v = parseFloat(num(x)) || 0; x.textContent = 'Sold, +' + num(x); x.disabled = true; x.classList.add('is-sold'); moneyAdd(v, -v); WF_SESS.gone(invKey(x), 'sold'); };
      if (/^Sell (all|the other)/.test(b.textContent.trim())) {
        var left = document.querySelectorAll('.wf-won-card button.wf-sell:not([disabled])'), sum = 0;
        Array.prototype.forEach.call(left, function (x) { sum += parseFloat(num(x)) || 0; sold(x); });
        b.textContent = 'All sold, +' + sum.toFixed(2) + ' coins'; b.disabled = true;
      } else {
        sold(b);
        // The batch control follows what is left, so a second sale is never counted twice.
        var all = b.closest('.wf-won-card') && document.querySelector('.wf-outcome-acts button');
        if (all && /^Sell (all|the other)/.test(all.textContent.trim())) {
          var rest = document.querySelectorAll('.wf-won-card button.wf-sell:not([disabled])'), r = 0;
          Array.prototype.forEach.call(rest, function (x) { r += parseFloat(num(x)) || 0; });
          if (rest.length) all.textContent = 'Sell the other ' + rest.length + ' for ' + r.toFixed(2) + ' coins';
          else { all.textContent = 'All sold'; all.disabled = true; }
        }
      }
      outcomeLeft();
    });
  }

  /* WHAT IS LEFT AFTER A SALE, round 16, B1-7. A sold item stayed in the Send
     label and in the Sending line, "All 2 saved" stood over two receipts, and a
     single sale printed Sold beside "Saved to My items". Everything on the
     outcome that names the items now names the ones still held. The Send figure
     is the change on the balance, signed, on every count, B1-21; how it is
     worded is stage 05's. */
  function outcomeLeft() {
    var acts = document.querySelector('.wf-outcome-acts');
    if (!acts) return;
    var cards = [].slice.call(document.querySelectorAll('.wf-won-card'));
    var held = cards.length
      ? cards.filter(function (c) { var x = c.querySelector('button.wf-sell'); return x && !x.disabled; }).map(function (c) { return c.getAttribute('data-key'); })
      : [].slice.call(acts.querySelectorAll('button')).some(function (x) { return /^(Sell|Press again to sell)\b/.test(x.textContent.trim()) && !x.disabled; }) ? [acts.getAttribute('data-key')] : [];
    var sendable = held.filter(function (k) { return stOf(k) !== null && stOf(k) !== undefined; });
    var sum = sendable.reduce(function (a, k) { return a + stOf(k); }, 0);
    var sg = function (v) { return (v >= 0 ? '+' : '-') + Math.abs(v).toFixed(2); };
    var send = acts.querySelector('a[href^="withdraw"]');
    if (send) {
      if (!sendable.length) send.remove();
      else {
        send.textContent = (cards.length ? 'Send ' + sendable.length + ' to Steam, ' : 'Send to Steam, ') + sg(sum) + ' coins';
        send.setAttribute('href', BASE + (sendable.length > 1 ? 'withdraw-many.html?items=' + sendable.join(',') : 'withdraw.html?item=' + sendable[0]));
      }
    }
    [].slice.call(document.querySelectorAll('.wf-instance')).forEach(function (x) {
      if (/has no copy on sale/.test(x.textContent) && !held.some(function (k) { return ROUNDS[k] && x.textContent.indexOf(ROUNDS[k].w + ' ' + ROUNDS[k].s) === 0; })) x.remove();
    });
    var line = [].slice.call(document.querySelectorAll('.wf-instance')).filter(function (x) { return /Sending to Steam/.test(x.textContent); })[0];
    if (line) {
      if (!sendable.length) line.remove();
      else line.innerHTML = 'Sending to Steam: ' + sendable.map(function (k) { return ROUNDS[k].w + ' <b>' + sg(stOf(k)) + '</b>'; }).join(', ') + ' on your balance.';
    }
    var saved = [].slice.call(document.querySelectorAll('.wf-commit .wf-fig-c')).filter(function (x) { return /saved to/i.test(x.textContent) || x.hasAttribute('data-saved'); })[0];
    if (saved) {
      saved.setAttribute('data-saved', '');
      var mi = '<a href="' + BASE + 'account.html">' + WF_STR.myItems + '</a>';
      var n = cards.length || 1;
      if (!held.length) saved.innerHTML = (n > 1 ? 'All ' + n + ' sold.' : 'Sold.') + ' Nothing from this open is in ' + mi + '.';
      else if (held.length < n) saved.innerHTML = held.length + ' of ' + n + ' saved to ' + mi + '. <strong>Selling can&#39;t be undone.</strong>';
    }
  }

  /* ONE CASE PAGE, MANY CASES, round 16, D-152 answer 2. On a case family page
     whose address names another case, the name, the risk band and every coin
     figure on the page follow it; the header's money, the peg, the records in
     Best drops and anything marked data-noscale do not. Links within the family
     keep the case. */
  function mountCaseTemplate() {
    var page = location.pathname.split('/').pop();
    if (!/^(case|deposit-dialog)/.test(page)) return;
    var k = caseKey(), nw = parseInt((/[?&]now=(\d+)/.exec(location.search) || [])[1], 10), op = nw && (WF_SESS.get('opens') || [])[nw - 1];
    if (op && op.c) k = op.c;
    var main = document.querySelector('.wf-main');
    if (!main) return;
    if (k !== 'ironbound') {
      var K = WF_CASES[k], q = K[1] / 12.40;
      document.title = document.title.replace(/Ironbound/g, K[0]);
      var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', md.getAttribute('content').replace(/Ironbound/g, K[0]));
      var w = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, { acceptNode: function (n) {
        return n.parentNode.closest('[data-noscale], [data-money], .wf-hash, code, textarea, script') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; } });
      var t, list = [];
      while ((t = w.nextNode())) list.push(t);
      list.forEach(function (n) {
        var v = n.nodeValue.replace(/Ironbound/g, K[0]).replace(/(^|[^$\d.])(\d+\.\d{2})(?![\d%]|\s?%)/g, function (m, pre, num) { return pre + (parseFloat(num) * q).toFixed(2); });
        if (v !== n.nodeValue) n.nodeValue = v;
      });
      Array.prototype.forEach.call(main.querySelectorAll('[aria-label]'), function (x) { x.setAttribute('aria-label', x.getAttribute('aria-label').replace(/Ironbound/g, K[0])); });
      var rb = main.querySelector('.wf-risk span:not(.wf-risk-l)'); if (rb) rb.textContent = K[2];
      Array.prototype.forEach.call(document.querySelectorAll('a[href]'), function (a) {
        var h = a.getAttribute('href');
        if (/^case(-account(-\d)?|-open(-\d)?|-outcome(-\d)?|-interrupted)?\.html/.test(h) && !/[?&]case=/.test(h)) a.setAttribute('href', h.replace(/\.html(\?)?/, function (m0, qm) { return '.html?case=' + k + (qm ? '&' : ''); }));
      });
    }
    /* "AFTER THIS OPEN" IS THE BALANCE LESS THE OPEN, never a scaled figure. */
    Array.prototype.forEach.call(main.querySelectorAll('.wf-fig-c'), function (x) {
      if (!/After this open/.test(x.innerHTML)) return;
      var cur = main.querySelector('.wf-count-b[aria-current="true"]'), n = cur ? parseInt(cur.textContent, 10) || 1 : (/case-account-2/.test(page) ? 2 : /case-account-5/.test(page) ? (parseInt((/[?&]n=([345])/.exec(location.search) || [])[1], 10) || 5) : 1);
      x.innerHTML = x.innerHTML.replace(/After this open, [\d.]+/, 'After this open, ' + (moneyNow().balance - n * WF_CASES[k][1]).toFixed(2));
    });
  }

  /* THE OPEN, PRESSED NOW, round 16, D-152 answer 3, B1-2. The open screen had
     no way to its outcome. A press records the open, takes its cost from the
     balance and lets the reveal run; the reveal ends on the outcome, which
     credits what was won to the value held, once. An open screen or an outcome
     opened by its address shows its own sample and moves nothing. */
  function openFromHref(h) {
    var five = /case-open-5/.test(h), two = /case-open-2/.test(h);
    return { n: five ? parseInt((/[?&]n=([345])/.exec(h) || [])[1] || '5', 10) : two ? 2 : 1,
      outcome: five ? 'case-outcome-5.html' : two ? 'case-outcome-2.html' : 'case-outcome.html' };
  }
  function mountOpenNow() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href*="case-open"]');
      if (!a || e.defaultPrevented || !(window.WF_SHELL && window.WF_SHELL.account)) return;
      var o = openFromHref(a.getAttribute('href')), ck = caseKey(), cost = Math.round(o.n * WF_CASES[ck][1] * 100) / 100, bal = moneyNow().balance;
      if (bal < cost) {
        e.preventDefault();
        var row = a.closest('.wf-row, .wf-commit-act, .wf-commit-bar') || a.parentNode, p = row.nextElementSibling;
        if (!p || !p.hasAttribute('data-open-say')) { p = el('p', 'wf-refuse is-said'); p.setAttribute('data-open-say', ''); p.setAttribute('aria-live', 'polite'); row.parentNode.insertBefore(p, row.nextSibling); }
        p.innerHTML = 'Not opened: this open costs ' + cost.toFixed(2) + ' coins and the balance is ' + bal.toFixed(2) + ' coins. <a href="' + BASE + 'deposit.html" data-dep-open="step1">' + WF_STR.addFunds + '</a>';
        return;
      }
      var opens = WF_SESS.get('opens') || [], before = openKeys().length;
      var keys = openBases(o.outcome, o.n).map(function (b, i) { return { key: 'n' + (before + i + 1) + b, base: b, c: ck }; });
      opens.push({ n: o.n, outcome: o.outcome, keys: keys, credited: false, c: ck });
      WF_SESS.set('opens', opens); WF_SESS.set('opening', opens.length);
      moneyAdd(-cost, 0);
    });
    var page = location.pathname.split('/').pop();
    var opens = WF_SESS.get('opens') || [];
    if (/^case-open/.test(page)) {
      var seq = WF_SESS.get('opening'), op = seq && opens[seq - 1];
      if (!op) return;
      WF_SESS.set('opening');
      var hs = document.querySelector('[data-hashes]');
      if (hs) { hs.setAttribute('data-hashes', op.keys.map(function (k) { return k.key; }).join(' ')); Array.prototype.forEach.call(hs.querySelectorAll('.wf-hash-list'), function (x) { x.remove(); }); renderHashes(); }
      else {
        var h = ROUNDS[op.keys[0].key].hash, hv = document.querySelector('.wf-hash-v'), hc = document.querySelector('.wf-hash [data-copy]');
        if (hv) hv.textContent = h.slice(0, 6) + '\u2026' + h.slice(-6);
        if (hc) hc.setAttribute('data-copy', h);
      }
      setTimeout(function () { location.replace(BASE + op.outcome + '?' + (/-5/.test(op.outcome) && op.n < 5 ? 'n=' + op.n + '&' : '') + (op.c && op.c !== 'ironbound' ? 'case=' + op.c + '&' : '') + 'now=' + seq); }, 2400);
      return;
    }
    if (!/^case-(outcome|interrupted)/.test(page)) return;
    var nw = parseInt((/[?&]now=(\d+)/.exec(location.search) || [])[1], 10), on = nw && opens[nw - 1];
    var bases = openBases(page, parseInt((/[?&]n=([345])/.exec(location.search) || [])[1], 10));
    var keys = on ? on.keys.map(function (k) { return k.key; }) : bases;
    if (on && !on.credited) {
      moneyAdd(0, keys.reduce(function (a, k) { return a + parseFloat(ROUNDS[k].won); }, 0));
      on.credited = true; WF_SESS.set('opens', opens);
    }
    var cards = document.querySelectorAll('.wf-won-card'), acts = document.querySelector('.wf-outcome-acts');
    Array.prototype.forEach.call(cards, function (c, i) { c.setAttribute('data-key', keys[i]); });
    if (acts && !cards.length) acts.setAttribute('data-key', keys[0]);
    var gone = WF_SESS.get('gone') || {};
    if (on) {
      Array.prototype.forEach.call(document.querySelectorAll('.wf-commit a[href*="round="], .wf-won-grid a[href*="round="]'), function (a) {
        bases.forEach(function (b, i) { a.setAttribute('href', a.getAttribute('href').replace(new RegExp('round=' + b + '(?![a-z0-9])'), 'round=' + keys[i])); });
      });
      Array.prototype.forEach.call(document.querySelectorAll('.wf-commit .wf-instance'), function (x) { x.innerHTML = x.innerHTML.replace(/\d{1,2} Aug 2026,? \d\d:\d\d/g, OPEN_AT); });
      /* WHAT WAS ALREADY SOLD STAYS SOLD on a reload of the same outcome. */
      /* AND WHAT WAS SENT IS NOT SOLD AFTER, round 17, B1-4 and B1-5: a
         reload offered Sell and Send again for an item already sent or sold,
         and the batch control counted it. */
      Array.prototype.forEach.call(cards.length ? cards : [acts], function (c) {
        var how = gone[c.getAttribute('data-key')];
        if (how !== 'sold' && how !== 'sent' && how !== 'cashed') return;
        Array.prototype.forEach.call(c.querySelectorAll('button'), function (x) {
          var t = x.textContent.trim();
          if (/^Sell\b/.test(t) && (!cards.length || !/^Sell (all|the other)/.test(t))) { x.textContent = how === 'sent' ? 'On its way to Steam' : how === 'cashed' ? 'Cashed out' : 'Sold'; x.disabled = true; x.classList.add('is-sold'); }
        });
      });
      var batch = acts && [].slice.call(acts.querySelectorAll('button')).filter(function (x) { return /^Sell (all|the other)/.test(x.textContent.trim()); })[0];
      if (batch && cards.length) {
        var rest = [].slice.call(document.querySelectorAll('.wf-won-card button.wf-sell:not([disabled])')), sum = 0;
        rest.forEach(function (x) { sum += parseFloat((/([\d.]+)(?:\s*coins)?\s*$/.exec(x.textContent.trim()) || [])[1]) || 0; });
        if (!rest.length) { batch.textContent = 'All sold'; batch.disabled = true; }
        else if (rest.length < cards.length) batch.textContent = 'Sell the other ' + rest.length + ' for ' + sum.toFixed(2) + ' coins';
      }
    }
    /* THE OWNER SHARES FROM THE OWNER'S VIEW, round 16, B1-8: Share opened the
       stranger's page of the person's own round. */
    Array.prototype.forEach.call(document.querySelectorAll('.wf-commit a[href^="result.html?round="]'), function (a) { a.setAttribute('href', a.getAttribute('href').replace('result.html', 'result-owner.html')); });
    /* CHECK ALL N OPENS EVERY ROLL, round 16, B1-19: it opened an empty
       verifier. A verifier checks one round, so the control opens the list of
       rolls, each with its own check. */
    var ca = [].slice.call(document.querySelectorAll('.wf-outcome-links a[href="fair.html#check"]'))[0], db = document.querySelector('.wf-detail-b');
    if (ca && db) {
      ca.setAttribute('href', '#wf-rolls-pop'); ca.textContent = 'Check each of the ' + keys.length + ' rolls';
      ca.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); if (db.getAttribute('aria-expanded') !== 'true') db.click(); var f = document.querySelector('#wf-rolls-pop a'); if (f) f.focus(); });
    }
    outcomeLeft();
  }

  /* THE FAVOURITE ANSWERS, round 14. A guest's press opens sign in, which is
     what case-tile.md asks, and a guest never renders a pressed heart. An
     account's press toggles it and moves the count by one. */
  function mountFavs() {
    var guest = !(window.WF_SHELL && window.WF_SHELL.account);
    var favs = document.querySelectorAll('.wf-fav, .wf-fav-case');
    if (guest) Array.prototype.forEach.call(favs, function (b) { b.setAttribute('aria-pressed', 'false'); b.setAttribute('data-auth-open', 'default'); });
    if (guest) return;
    document.addEventListener('click', function (e) {
      var b = e.target.closest('.wf-fav, .wf-fav-case');
      if (!b) return;
      e.preventDefault();
      var on = b.getAttribute('aria-pressed') !== 'true';
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      var n = b.querySelector('.wf-fav-n');
      if (n) {
        var v = (parseInt(n.textContent.replace(/\s/g, ''), 10) || 0) + (on ? 1 : -1);
        n.textContent = String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        b.setAttribute('aria-label', WF_STR.favourite + ', ' + n.textContent + ' people');
      }
    });
  }

  function mountVerifier() {
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-fair-go]');
      if (!b) return;
      e.preventDefault();
      var v = function (id) { var x = document.getElementById(id); return x ? x.value.replace(/\s+/g, '') : ''; };
      /* WHAT IS WRONG IS SAID AGAINST WHAT WAS TYPED, IN PLACE, round 15: an empty
         form landed on a page of errors about values nobody typed. */
      var hexMsg = function (x, what) { return !x ? 'Paste the ' + what + '.' : !/^[0-9a-f]*$/i.test(x) ? 'A ' + what + ' is 0 to 9 and a to f only.' : x.length !== 64 ? 'This is ' + x.length + ' characters. A ' + what + ' is 64.' : ''; };
      var errs = {
        'v-hash': hexMsg(v('v-hash'), 'server seed hash'),
        'v-seed': hexMsg(v('v-seed'), 'server seed'),
        'v-client': v('v-client') ? '' : 'Paste the client seed.',
        'v-nonce': !v('v-nonce') ? 'Enter the nonce.' : /^\d+$/.test(v('v-nonce').replace(/,/g, '')) ? '' : 'A nonce is a whole number.'
      };
      var bad = false;
      Object.keys(errs).forEach(function (id) {
        var f = document.getElementById(id), box = f && f.closest('.wf-vf');
        if (!box) return;
        var p = box.querySelector('.wf-vf-err');
        box.classList.toggle('is-bad', !!errs[id]);
        if (errs[id]) { bad = true; if (!p) { p = el('p', 'wf-vf-err'); box.appendChild(p); } p.textContent = errs[id]; }
        else if (p) p.remove();
      });
      if (bad) return;
      /* THE STATE PAGES ANSWER AS THEIR STATE, round 15: unavailable and proof
         failed both landed on "agree". */
      var path = location.pathname;
      var sayAt = b.parentNode, say = sayAt.querySelector('.wf-refuse') || sayAt.appendChild(el('p', 'wf-refuse is-said'));
      if (/fair-unavailable/.test(path)) { say.textContent = 'Nothing to recompute yet: the server seed for this round is revealed when it rotates.'; return; }
      if (/fair-proof-failed/.test(path)) { say.textContent = 'Recomputed again: 30 211. It still does not match 2 417, and the report above stands.'; return; }
      /* WHAT WAS TYPED IS COMPARED WITH THE ROUND, round 16, D-152 answer 4,
         B1-11. Any well formed input agreed, which is a verifier that cannot
         say no. The round is the one whose published hash was entered; each
         field that differs from its record is named beside itself. */
      var hk = Object.keys(ROUNDS).filter(function (k) { return ROUNDS[k].hash === v('v-hash').toLowerCase(); })[0];
      if (!hk) { say.textContent = 'No published round has this server seed hash. Check it was copied whole, from the round you mean.'; return; }
      var RR = ROUNDS[hk], diff = [];
      [['v-seed', RR.seed.toLowerCase(), 'server seed'], ['v-client', RR.client, 'client seed'], ['v-nonce', String(RR.nonce).replace(/\s+/g, ''), 'nonce']].forEach(function (c) {
        var got = c[0] === 'v-nonce' ? v(c[0]).replace(/,/g, '') : v(c[0]).toLowerCase();
        if (got === c[1].toLowerCase()) return;
        diff.push(c[2]);
        var box = document.getElementById(c[0]).closest('.wf-vf'), pe = el('p', 'wf-vf-err', 'Not the ' + c[2] + ' published for this round.');
        box.classList.add('is-bad'); box.appendChild(pe);
      });
      if (diff.length) { say.textContent = 'Does not match this round, ' + RR.w + ' ' + RR.s + ', ' + RR.at + ': the ' + diff.join(' and the ') + (diff.length > 1 ? ' differ' : ' differs') + ' from its record. Nothing was recomputed from a mix of two rounds.'; return; }
      location.href = 'fair-matched.html' + (hk === 'ak' ? '' : '?round=' + hk) + '#check';
    });
  }

  function renderProofs() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-proof]'), function (host) {
      host.innerHTML = proofPanel(host.getAttribute('data-proof') || 'settled');
      /* ONE MAIN ACTION, round 15, D-140: where the page has its own, the owner's
         Copy the link above all, the proof's recompute steps down. */
      var mine = host.querySelector('.wf-btn--primary'), other = Array.prototype.some.call(document.querySelectorAll('.wf-main .wf-btn--primary'), function (x) { return !host.contains(x); });
      if (mine && other) mine.classList.remove('wf-btn--primary');
    });
  }

  /* ---------------------------------------------------------------------
     THE DAILY TIER LADDER, D-67. Built once here because it now has two
     consumers, and home.md predicted exactly this: "a ladder that becomes a
     component is a ladder that spreads". IT SPREAD, AND IT SPREAD TOWARDS THE
     BASELINE RATHER THAN AWAY FROM IT. baseline.md section 4 puts this panel on
     /en/cases and its Home carries no ladder at all, so D-25 shipped it "as the
     baseline does it" onto the one surface the baseline does not do it on.
     WHAT MOVES WITH IT IS ITS THREE RULES, and that is the whole reason it is a
     component rather than two copies: 6.1 may never render it, it never tells a
     person with a limit in force what to wager to advance, and a tier gives a
     case and nothing else. Boundaries attached to a node stay behind when the
     markup travels. Boundaries attached to a component travel with it.
     --------------------------------------------------------------------- */
  var LADDER = ['Silver', 'Nova', 'Guardian', 'Legend', 'Elite'];

  function dailyLadder(account) {
    var rungs = LADDER.map(function (t, i) {
      // THE GUEST RENDER CARRIES NO PROGRESS AND NO REACHED TIER. A zero is not
      // the guest state, it is a claim that this person has wagered nothing,
      // and 0.11 rule 3 refuses that reading.
      return '<li' + (account && i === 0 ? ' class="is-reached"' : '') + '>' +
             '<span class="wf-ladder-art" aria-hidden="true"></span>' + t + '</li>';
    }).join('');

    var wager = account
      ? '<div class="wf-fig"><span class="wf-fig-v">0.00 of 5.00</span>' +
        '<span class="wf-fig-c">Wagered towards the next tier, in coins</span></div>'
      : '';

    var act = account
      ? '<button class="wf-btn" type="button" data-ladder-open>Available now: 0 cases</button>' +
        '<p class="wf-refuse" data-ladder-say aria-live="polite"></p>'
      : '<a class="wf-btn" href="signin.html" data-auth-open="default">Sign in to see your tier</a>';

    return '' +
      '<div class="wf-panel">' +
        '<div class="wf-panel-head">' + wager +
          /* THE RESET IS A MOMENT, DRAWN, D-124. The baseline runs a countdown
             here and the founder's answer was to draw the figure. home.md
             refuses a ticking clock on a free entry, so what is drawn is the
             moment, a sample value; the real one is an open item in home.md. */
          '<div class="wf-fig">' +
            '<span class="wf-fig-v">00:00 UTC</span>' +
            '<span class="wf-fig-c">Daily reset</span>' +
          '</div>' +
        '</div>' +
        '<ol class="wf-ladder">' + rungs + '</ol>' +
        '<div class="wf-panel-foot">' + act + '</div>' +
      '</div>';
  }

  /* ---------------------------------------------------------------------
     THE HOME BODY, D-126. Node 1.0 and 1.1, built once and mounted on ten
     pages: Home, Home with an account, and the eight cookie states, which draw
     their layer over Home. It was ten hand copies.
     THE ORDER IS THE BASELINE'S, walk4_home_1440_26sep.png: the banner, a
     one line H1 over the four mode cards, the featured cases, the daily
     ladder. Where the baseline runs Case battles top and Gunfight top, both
     LATER, this page runs its own one row of figures, and the SEO text closes
     it in one paragraph. Every argument that stood between those blocks is in
     home.md section 2 and on the IA page, not here.
     --------------------------------------------------------------------- */
  var HOME_CASES = [['Ironbound', 'Medium', '12.40', '829', false], ['Warsteel', 'Low', '4.90', '1 204', true],
                    ['Coldfront', 'Low', '2.10', '311', false], ['Nightfall', 'High', '31.00', '96', false]];

  function homeBody(account) {
    var out = [];

    // 1.1 ONLY. THE STATE STRIP, home.md section 4.2, and it no longer
    // repeats the balance the header already carries. It states the daily
    // status the ladder below states, in the same words, and routes to it.
    if (account) {
      out.push('<section class="wf-strip" aria-label="Your state">' +
        '<div class="wf-fig"><span class="wf-fig-v">No daily case yet</span><span class="wf-fig-c">Next tier at 5.00 coins wagered. Resets 00:00 UTC</span></div>' +
        '<a class="wf-btn" href="#h2-daily">See your tier</a></section>');
    }

    // B2, THE BANNER, D-25. The baseline's hero carries an event; round 1's
    // one standing offer is the daily ladder, so that is what it carries. NO
    // CLOCK: a countdown needs a real published end, section 2.2 rule 2, and a
    // standing offer has none.
    out.push('<section class="wf-banner" aria-label="Promotion">' +
      '<div class="wf-banner-art" aria-hidden="true"></div>' +
      '<div class="wf-banner-body"><p class="wf-banner-line">Daily cases: climb five tiers, each one opens a free case</p>' +
      '<a class="wf-btn" href="#h2-daily">See daily cases</a></div></section>');

    // B3, THE H1, one line and centred over the cards, which is the
    // baseline's "CSGO & CS2 CASE OPENING SITE". The proposition paragraph and
    // the auditor slot left; the auditor is absent by section 2.3's own rule.
    // TRUSTPILOT IS A SAMPLE, D-124, and a link: live or not at all in
    // production, section 2.3.
    out.push('<section class="wf-hero wf-hero--short" aria-labelledby="h1">' +
      '<h1 id="h1">CS2 case opening with published odds</h1>' +
      '<p class="wf-hero-line"><a href="https://www.trustpilot.com/" rel="external nofollow">Trustpilot 4.1, 1 870 reviews</a></p></section>');

    // B4, THE FOUR MODES, D-27. No visible heading: the baseline has none and
    // the cards say what they are. The H2 stays for the outline, hidden.
    out.push('<section class="wf-sec wf-sec--flush" aria-labelledby="h2-modes"><h2 id="h2-modes" class="wf-vh">Ways to play</h2><div class="wf-grid wf-modes">');
    [[WF_STR.cases, 'Open a case, see every chance.', true], ['Case battles', 'Open against someone, highest total wins.'],
     ['Gunfights', 'One round, one opponent.'], ['Upgrade', 'Trade a skin up for a better one.']].forEach(function (m) {
      out.push('<article class="wf-mode' + (m[2] ? '' : ' is-later') + '"><span class="wf-mode-art" aria-hidden="true"></span><h3>' + m[0] + '</h3><p>' + m[1] + '</p>' +
        (m[2] ? '<a class="wf-btn" href="catalogue.html">Open a case</a>' : '<p class="wf-fig-missing">Not launched yet</p>') + '</article>');
    });
    out.push('</div></section>');

    // B5, FEATURED CASES, the baseline's DADDY'S FEATURED CASES. The risk band
    // is a sample by D-124; its thresholds stay an open item in 0.11.
    out.push('<section class="wf-sec" aria-labelledby="h2-cases"><div class="wf-sec-head"><h2 id="h2-cases">Featured cases</h2></div><div class="wf-grid">');
    HOME_CASES.forEach(function (c) {
      out.push('<article class="wf-tile"><a class="wf-tile-link" href="case.html"><span class="wf-tile-art" aria-hidden="true"></span>' +
        '<span class="wf-tile-name">' + c[0] + '</span><span class="wf-tile-risk">' + c[1] + ' risk</span>' +
        '<span class="wf-tile-price"><span class="wf-tile-cost">' + c[2] + '</span><span class="wf-tile-cur">coins</span></span></a>' +
        '<button class="wf-fav" type="button" aria-pressed="' + c[4] + '" aria-label="Favourite, ' + c[3] + ' people"><span class="wf-fav-i" aria-hidden="true"></span><span class="wf-fav-n">' + c[3] + '</span></button></article>');
    });
    out.push('</div><div class="wf-sec-foot"><a class="wf-btn" href="catalogue.html">' + WF_STR.allCases + '</a></div></section>');

    // B6, THE DAILY LADDER, D-25 and D-67, the component 3.1 mounts too.
    out.push('<section class="wf-sec" aria-labelledby="h2-daily"><div class="wf-sec-head"><h2 id="h2-daily">Daily cases</h2>' +
      '<p class="wf-sec-sub">Wager to climb. The tier decides which free case you get.</p></div><div data-ladder></div></section>');

    // B7, B8 AND B9 AS ONE ROW, D-126, founder. The worked case, the verifier
    // pitch and the exit figures were three blocks of argument where the
    // baseline runs two LATER rows. What each proved is kept as a figure with
    // a route, and the derivations are one tap away on the surface that owns
    // them. B10, THE STARTER CREDIT, LEAVES until its amount exists: a block
    // promising a figure it does not print is the hole D-107 took off screens.
    out.push('<section class="wf-sec" aria-labelledby="h2-proof"><div class="wf-sec-head"><h2 id="h2-proof">Before you spend</h2></div><div class="wf-figs">' +
      '<a class="wf-fig wf-fig-a" href="case.html#h2-pays"><span class="wf-fig-v">94.2 %</span><span class="wf-fig-c">Tested RTP, Ironbound</span></a>' +
      '<a class="wf-fig wf-fig-a" href="withdraw.html"><span class="wf-fig-v">' + WF_PUB.median + '</span><span class="wf-fig-c">Median withdrawal to Steam</span></a>' +
      '<div class="wf-fig"><span class="wf-fig-v">0 %</span><span class="wf-fig-c">Our commission on withdrawals</span></div>' +
      '<a class="wf-fig wf-fig-a" href="fair.html"><span class="wf-fig-v">Every round</span><span class="wf-fig-c">Checkable without an account</span></a>' +
      '</div></section>');

    // B11, THE SEO TEXT, one H2 and one paragraph. The three H3s repeated the
    // row above in prose; home.md section 8.C carries the change.
    out.push('<section class="wf-sec wf-prose" aria-labelledby="h2-about"><div class="wf-sec-head"><h2 id="h2-about">What opening a case here involves</h2></div>' +
      '<p>A case is a fixed set of CS2 skins with a published chance on each one. You pay the entry cost in coins, one roll decides the item, and you can keep it, sell it back or send it to your Steam inventory. Every case shows its chances, its item values and its tested return before you open it, and every round can be checked afterwards.</p></section>');

    return out.join('');
  }

  function renderHomeBodies() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-home-body]'), function (host) {
      host.outerHTML = homeBody(host.getAttribute('data-home-body') === 'account');
    });
  }

  /* ---------------------------------------------------------------------
     THE CASE BODY, D-125. Everything under the stage of node 3.3, built once
     and mounted on all thirteen case pages through [data-case-body]. It was
     thirteen hand copies of four hundred lines, three of them drifting, and
     the baseline distance round had to change every one of them the same way.
     ITS ORDER IS THE BASELINE'S: the skin prices box and the before opening
     line under the act, then Best drops, then what the case contains with the
     stamp at the end of the table. Our own blocks follow it: what this case
     pays as figures only, published against observed, one paragraph of SEO.
     Every explanation that used to sit under a figure lives in case.md.
     STATES: '' the default; 'degraded' values could not be read; 'nocounter'
     the observed rate withdrawn, D-B; 'outcome' the settlement is already
     printed with its figures in the outcome block, so it is not said twice.
     --------------------------------------------------------------------- */
  var CASE_ITEMS = [
    ['Covert', '4.200 %', [
      ['AK-47', 'Redline', 'Field-Tested · StatTrak', '3.180 %', '47.30', '1 to 3 180'],
      ['AWP', 'Asiimov', 'Well-Worn', '1.020 %', '38.90', '3 181 to 4 200']]],
    ['Classified', '6.800 %', [
      ['M4A1-S', 'Hyper Beast', 'Factory New', '4.600 %', '24.60', '4 201 to 8 800'],
      ['Desert Eagle', 'Blaze', 'Factory New', '2.200 %', '21.80', '8 801 to 11 000']]],
    ['Restricted', '26.000 %', [
      ['USP-S', 'Kill Confirmed', 'Minimal Wear', '12.000 %', '14.20', '11 001 to 23 000'],
      ['Glock-18', 'Water Elemental', 'Minimal Wear', '14.000 %', '12.90', '23 001 to 37 000']]],
    ['Mil-Spec', '63.000 %', [
      ['MP9', 'Rose Iron', 'Field-Tested', '22.000 %', '7.40', '37 001 to 59 000'],
      ['P250', 'Asiimov', 'Battle-Scarred', '21.000 %', '6.90', '59 001 to 80 000'],
      ['Nova', 'Koi', 'Factory New', '20.000 %', '7.90', '80 001 to 100 000']]]
  ];

  function caseBody(state) {
    var degraded = state === 'degraded';
    var out = [];

    // ---- THE SKIN PRICES BOX AND THE BEFORE OPENING LINE, the baseline's two
    // lines under its act. Ours says the settlement rule, D-91, where the
    // baseline says its prices are fixed: the same subject, told in full.
    out.push('<section class="wf-case-info" aria-label="Before you open">');
    if (state !== 'outcome') {
      out.push('<p class="wf-cost-say"><strong>Skin prices.</strong> Values in this case are fixed when the case is priced. ' +
        'Sending a win to Steam buys a real copy at that day&#39;s price, and the difference settles against your balance in either direction. ' +
        '<a href="withdraw.html">How a withdrawal settles</a></p>');
    }
    // G5: the limits of a withdrawal are stated before the request. The baseline
    // says it here, before the open, and it is cheaper here than at the till.
    out.push('<p class="wf-note wf-case-warn"><strong>' + (state === 'outcome' ? 'Before sending to Steam.' : 'Before opening.') + '</strong> Your Steam inventory has to be public and your trade URL set, or a win cannot be sent to you. <a href="settings.html">Check your settings</a></p>');
    out.push('</section>');

    // ---- BEST DROPS, D-30 and D-32. Ranked by value, and the one route to the
    // block that can disappoint stays, because that route is the cost D-32 kept.
    /* THE ROUNDS ARE READ, NOT TYPED AGAIN, round 16, D1-11. */
    var drops = ['ak', 'usp', 'glock', 'nova', 'mp9', 'p250'].map(function (k) {
      var R = ROUNDS[k]; return [R.w, R.s, R.won, R.at.replace(/ 2026 /, ', '), k];
    });
    /* ANOTHER CASE'S BEST DROPS ARE ITS OWN RECORDS, round 16: the rolls on
       record from it, by value, and none where there are none. */
    if (caseKey() !== 'ironbound') drops = WF_ROLLS.filter(function (r) { return caseOf(r.kase) === caseKey() && r.hash; })
      .sort(function (a, b) { return parseFloat(b.worth) - parseFloat(a.worth); })
      .map(function (r) { return [r.w, r.s, r.worth, r.when.replace(' ', ' ').replace(/ (\d\d:)/, ', $1'), r.key]; });
    out.push('<section class="wf-sec" data-noscale aria-labelledby="h2-recent"><div class="wf-sec-head"><h2 id="h2-recent">Best drops</h2>' +
      (state === 'nocounter' ? '' : '<p class="wf-sec-sub">By value. <a href="#h2-observed">What usually drops</a></p>') +
      '</div><ul class="wf-recent">');
    if (!drops.length) out.push('<li class="wf-fig-c">Nothing opened from this case is on record yet.</li>');
    drops.forEach(function (d) {
      out.push('<li><a href="result.html' + (d[4] && d[4] !== 'ak' ? '?round=' + d[4] : '') + '"><span class="wf-r-art" aria-hidden="true"></span><span class="wf-r-w">' + d[0] +
        '</span><span class="wf-r-s">' + d[1] + '</span><span class="wf-r-v">' + d[2] + ' coins</span><span class="wf-r-t">' + d[3] + '</span></a></li>');
    });
    out.push('</ul></section>');

    // ---- WHAT IS IN THIS CASE. Grouped by tier, section 3, and the table
    // markup stays a table. THE STAMP IS AT THE END, where the baseline puts
    // "Last updated": it dates the values a person has just read.
    out.push('<section class="wf-sec" aria-labelledby="h2-contents"><div class="wf-sec-head"><h2 id="h2-contents">What is in this case</h2></div>');
    out.push('<div class="wf-tablewrap"><table class="wf-table wf-drops"><caption class="wf-vh">Every item in Ironbound with its chance, value and ticket range</caption>' +
      '<thead><tr><th scope="col">Item image</th><th scope="col">Item</th><th scope="col">Chance</th><th scope="col">Value</th><th scope="col">Tickets</th></tr></thead>');
    CASE_ITEMS.forEach(function (t) {
      out.push('<tbody class="wf-tier" aria-label="' + t[0] + ', ' + t[1].replace(' %', ' percent') + '">' +
        '<tr class="wf-tier-h"><td colspan="6"><span class="wf-tier-n">' + t[0] + '</span> <span class="wf-fig-c">' + t[1] + '</span></td></tr>');
      t[2].forEach(function (i, n) {
        var top = t[0] === 'Covert' && n === 0;
        out.push('<tr><td class="wf-art-c"><span class="wf-item-art" aria-hidden="true"></span></td>' +
          '<th scope="row"><span class="wf-d-name"><span class="wf-d-weapon">' + i[0] + '</span><span class="wf-d-skin">' + i[1] +
          '</span><span class="wf-d-axes">' + i[2] + ' · ' + t[0] + '</span>' +
          // A1: THE OUTBOUND MARKET PRICE SITS ON THE TOP ITEM ITSELF, not in a
          // note under the table, and it carries its own moment.
          (top && !degraded ? '<a class="wf-d-mkt" href="https://steamcommunity.com/market/" rel="external nofollow">Steam 50.43 coins, 18 Aug 14:02</a>' : '') +
          '</span></th>' +
          '<td data-l="Chance">' + i[3] + '</td>' +
          '<td data-l="Value">' + (degraded ? '<span class="wf-fig-missing">Not available</span>' : i[4] + ' coins') + '</td>' +
          '<td data-l="Tickets">' + i[5] + '</td></tr>');
      });
      out.push('</tbody>');
    });
    out.push('</table></div>');
    out.push(degraded
      ? '<p class="wf-stamp wf-fig-missing">Values could not be read. Last read 18 Aug 2026 09:41, and nothing here shows a value from then.</p>'
      : '<p class="wf-stamp">Last updated 18 Aug 2026 14:02</p>');
    out.push('</section>');

    // ---- WHAT THIS CASE PAYS, figures only. D4, principle 3 and B1-2. The
    // derivations, the denomination argument of D-91 and the method of the
    // settlement figure are in case.md section 5, not under the numbers.
    // THE SETTLEMENT FIGURE IS A SAMPLE, D-124: its value is the founder's,
    // against the method D-93 fixed.
    function fig(v, c, route) {
      return '<div class="wf-fig"><span class="wf-fig-v' + (v ? '' : ' wf-fig-missing') + '">' + (v || 'Not available') + '</span>' +
        '<span class="wf-fig-c">' + c + (route ? ' ' + route : '') + '</span></div>';
    }
    out.push('<section class="wf-sec" aria-labelledby="h2-pays"><div class="wf-sec-head"><h2 id="h2-pays">What this case pays</h2></div><div class="wf-figs">');
    out.push(fig('94.2 %', 'Tested RTP, in coins at our values'));
    out.push(fig(degraded ? null : '11.68 coins', 'Expected value per open: every chance above times its value'));
    out.push(fig(degraded ? null : '37.000 %', 'Chance to get back at least the 12.40 entry cost'));
    if (state !== 'outcome') {
      out.push(fig(degraded ? null : '-6.2 %', 'Our values against a real copy, case average', '<a href="withdraw.html">How it settles</a>'));
    }
    out.push('</div>');
    out.push('<p class="wf-note">Buying an item outright is cheaper on average than opening for it.</p>');
    out.push('</section>');

    // ---- PUBLISHED AGAINST OBSERVED, D3. Its two conditions, D-B and D-C, and
    // its fork rule live in case.md section 4 and on 1.2. On 'nocounter' the
    // block is the withdrawn state of 0.11 and says so in one line.
    if (state === 'nocounter') {
      out.push('<section class="wf-sec" aria-label="Published against observed, withdrawn">' +
        '<p class="wf-note wf-fig-missing">The observed rate for this case is not published. Every chance and value is above, and every round can be checked after it opens. <a href="fair.html">How rounds are checked</a></p></section>');
    } else {
      out.push('<section class="wf-sec" aria-labelledby="h2-observed"><div class="wf-sec-head"><h2 id="h2-observed">Published against observed</h2>' +
        '<p class="wf-sec-sub">What we publish for each tier, and what actually came out.</p></div>' +
        '<div class="wf-tablewrap"><table class="wf-table"><caption class="wf-vh">Published and observed rate per rarity tier</caption>' +
        '<thead><tr><th scope="col">Tier</th><th scope="col">Published</th><th scope="col">Observed</th><th scope="col">' + WF_STR.rolls + '</th></tr></thead><tbody>' +
        '<tr><th scope="row">Covert</th><td>4.200 %</td><td>4.06 %</td><td>41 208</td></tr>' +
        '<tr><th scope="row">Classified</th><td>6.800 %</td><td>6.94 %</td><td>41 208</td></tr>' +
        '<tr><th scope="row">Restricted</th><td>26.000 %</td><td>25.71 %</td><td>41 208</td></tr>' +
        '<tr><th scope="row">Mil-Spec</th><td>63.000 %</td><td>63.29 %</td><td>41 208</td></tr>' +
        '</tbody></table></div>' +
        '<p class="wf-note">Counted since this case launched, never reset. <a href="fair.html">How rounds are checked</a></p></section>');
    }

    // ---- THE SEO TEXT, 15C, cut to what a first reader needs. The delivery
    // failure answer moved to support's questions; the table rule is ours.
    out.push('<section class="wf-sec wf-prose" aria-labelledby="h2-how"><div class="wf-sec-head"><h2 id="h2-how">How this case works</h2></div><div class="wf-prose-cols">' +
      '<p>The entry cost buys one roll, and the roll lands on one item. Every item&#39;s chance is printed as a percentage and as a ticket range: the range is what the roll resolves against, which is what makes a result checkable.</p>' +
      '<h3>How a round is checked</h3>' +
      '<p>The round is fixed before the animation starts and its hash is on screen when you open. After the reveal, one link checks the round against that hash.</p>' +
      '</div></section>');

    return out.join('');
  }

  function renderCaseBodies() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-case-body]'), function (host) {
      host.outerHTML = caseBody(host.getAttribute('data-case-body') || '');
    });
  }

  function renderLadders() {
    var account = !!(window.WF_SHELL && window.WF_SHELL.account);
    Array.prototype.forEach.call(document.querySelectorAll('[data-ladder]'), function (host) {
      host.innerHTML = dailyLadder(account);
    });
    /* THE OPEN CONTROL REFUSES WITH ITS REASON, round 15. It was disabled, which
       conventions section 2 refuses: a precondition is said, not greyed out. The
       reason is a fact and never a nudge, 0.15's own rule: no suggestion of what
       to wager. */
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-ladder-open]');
      if (!b) return;
      var say = b.parentNode.querySelector('[data-ladder-say]');
      if (say) { say.textContent = 'Nothing to open: no daily case has been given yet.'; say.classList.add('is-said'); }
    });
  }

  /* ---------------------------------------------------------------------
     NODE 3.1's FILTER DRAWER, D-66. Built once here and mounted on every
     catalogue page, for the same reason the sign in card is: seven copies of
     one control is how six of them rot.
     IT OPENS ON A PRESS. It was drawn as a static state page and the founder's
     note is the whole argument against that: a filter control that does not
     open a filter is not a wireframe of a filter, it is a picture of one.
     THE ACCOUNT DRAWER CARRIES TWO MORE ROWS THAN THE GUEST DRAWER. Founder
     capture, 21 August 2026: the live panel has an "Additional" group holding
     Liked and Sufficient Funds to open, and the pre-login walk the same day did
     not show it. Both are account-state facets, so a guest never meets them.
     --------------------------------------------------------------------- */
  function pips(n) {
    var out = '';
    for (var i = 1; i <= 3; i++) out += '<span class="wf-pip' + (i <= n ? ' is-on' : '') + '"></span>';
    return '<span class="wf-pips" aria-hidden="true">' + out + '</span>';
  }

  function filterDrawerHTML(account) {
    return '' +
      '<div class="wf-drawer-scrim" data-filter-dismiss></div>' +
      '<aside class="wf-drawer" role="dialog" aria-modal="true" aria-labelledby="wf-drawer-h">' +
        '<div class="wf-drawer-head">' +
          '<h2 class="wf-drawer-h" id="wf-drawer-h">Filter</h2>' +
          '<div class="wf-row">' +
            '<button class="wf-btn wf-btn--small" type="button" data-filter-reset>Reset all</button>' +
            '<button class="wf-btn wf-btn--small wf-drawer-x" type="button" aria-label="Close the filters">x</button>' +
          '</div>' +
        '</div>' +
        '<div class="wf-drawer-body">' +

          '<div class="wf-fset">' +
            '<label class="wf-fset-h" for="f-name">Case name</label>' +
            '<input id="f-name" type="search" placeholder="Case name">' +
          '</div>' +

          /* THE PRICE IS A RANGE AND TWO STEPPERS, and the steppers are not
             decoration: a slider cannot be typed into, and a person holding a
             ceiling in their head has a number rather than a gesture. */
          '<div class="wf-fset">' +
            '<span class="wf-fset-h" id="f-price-h">Price amount, in coins</span>' +
            '<input class="wf-range" type="range" min="0" max="55" value="55" aria-labelledby="f-price-h">' +
            '<div class="wf-steppers">' +
              '<div class="wf-stepper">' +
                '<button class="wf-btn wf-btn--small" type="button" aria-label="Decrease the minimum" data-step="f-min:-1">-</button>' +
                '<label class="wf-vh" for="f-min">Minimum entry cost</label>' +
                '<input id="f-min" type="text" inputmode="decimal" value="0.00">' +
                '<button class="wf-btn wf-btn--small" type="button" aria-label="Increase the minimum" data-step="f-min:1">+</button>' +
              '</div>' +
              '<div class="wf-stepper">' +
                '<button class="wf-btn wf-btn--small" type="button" aria-label="Decrease the maximum" data-step="f-max:-1">-</button>' +
                '<label class="wf-vh" for="f-max">Maximum entry cost</label>' +
                '<input id="f-max" type="text" inputmode="decimal" value="55.00">' +
                '<button class="wf-btn wf-btn--small" type="button" aria-label="Increase the maximum" data-step="f-max:1">+</button>' +
              '</div>' +
            '</div>' +
            /* THE PEG RENDERS HERE SINCE D-95 AND THE CODE STAYS OUT OF THE COPY, D-66:
               a wireframe states a state and never cites a decision record. */
          '</div>' +

          /* THREE CHECKBOXES AND NOT A SLIDER. The band has three values, so a
             continuous control would promise a precision that does not exist.
             The mark sits BESIDE the word and never replaces it, 0.7 rule 5.5.
             LIVE SINCE D-127: the tiles carry sample bands by D-124, so the
             filter has something to sort. The thresholds stay open in 0.11. */
          '<div class="wf-fset">' +
            '<span class="wf-fset-h" id="f-risk-h">Risk level</span>' +
            '<div class="wf-riskset" role="group" aria-labelledby="f-risk-h">' +
              '<label class="wf-riskrow"><input type="checkbox" data-risk="Low">' + pips(1) + 'Low</label>' +
              '<label class="wf-riskrow"><input type="checkbox" data-risk="Medium">' + pips(2) + 'Medium</label>' +
              '<label class="wf-riskrow"><input type="checkbox" data-risk="High">' + pips(3) + 'High</label>' +
            '</div>' +
          '</div>' +

          /* THE ADDITIONAL GROUP IS ACCOUNT ONLY, and it is the baseline's own,
             not an invention: both rows read an account. A guest meets neither,
             which is also the answer to half the objection against the second
             one. The other half is printed in D-66 and stays printed. */
          (account ?
          '<div class="wf-fset">' +
            '<span class="wf-fset-h" id="f-add-h">Additional</span>' +
            '<div class="wf-riskset" role="group" aria-labelledby="f-add-h">' +
              '<label class="wf-riskrow"><input type="checkbox" data-f-liked>Liked</label>' +
              '<label class="wf-riskrow"><input type="checkbox" data-f-funds>Sufficient funds to open</label>' +
            '</div>' +
          '</div>' : '') +

          '<div class="wf-fset">' +
            '<label class="wf-fset-h" for="f-type">Case type</label>' +
            '<select id="f-type"><option>All</option><option>' + WF_STR.featured + '</option><option>' + WF_STR.community + '</option><option>' + WF_STR.classic + '</option></select>' +
          '</div>' +

          /* SORT WAS REFUSED HERE ON THE COMPETITOR BANK AND THE PRODUCT SORTS.
             One limit travels with it and is not inherited: never by chance, by
             value, by RTP or by popularity. 0.11 rule 7, never a score. */
          '<div class="wf-fset">' +
            '<label class="wf-fset-h" for="f-sort">Sort by</label>' +
            '<select id="f-sort">' +
              '<option>Date, newest first</option>' +
              '<option>Entry cost, low to high</option>' +
              '<option>Entry cost, high to low</option>' +
            '</select>' +
          '</div>' +

        '</div>' +
        '<div class="wf-drawer-foot">' +
          '<button class="wf-btn wf-btn--primary" type="button" data-filter-dismiss data-filter-apply>Show 12 cases</button>' +
        '</div>' +
      '</aside>';
  }

  function mountFilterDrawer() {
    var opener = null, host = null;
    /* THE SHELF FILTER IS ONE STATE, round 14. D-127 made the risk boxes live;
       the name, the price, Liked, Sufficient funds and the case type were still
       pictures, and the press never rendered the filtered state 3.1 draws. Now the
       drawer, the address and the page share one state: the press hides what does
       not match, drops the daily panel and any emptied section, prints the count
       and badges Filters. ?risk=High&max=24.50&q=cold opens the shelf filtered,
       which is what the chips and the empty state's two exits link to. */
    // THE MINIMUM FILTERS TOO, round 15: the drawer drew it and nothing read it.
    var F = { risk: [], q: '', min: 0, max: 55, liked: false, funds: false, type: 'All' };
    var BAL = moneyNow().balance;
    (function fromUrl() {
      var u = location.search;
      var g = function (k) { var m = new RegExp('[?&]' + k + '=([^&]*)').exec(u); return m ? decodeURIComponent(m[1]) : null; };
      if (g('risk')) F.risk = g('risk').split(',');
      if (g('q')) F.q = g('q');
      if (g('max')) F.max = parseFloat(g('max'));
      if (g('min')) F.min = parseFloat(g('min'));
    })();
    function tiles() {
      return Array.prototype.slice.call(document.querySelectorAll('.wf-cats-sec .wf-tile, .wf-grid--shelf .wf-tile')).filter(function (t) { return t.querySelector('.wf-tile-risk'); });
    }
    function match(t, f) {
      var name = (t.querySelector('.wf-tile-name') || {}).textContent || '';
      var risk = (t.querySelector('.wf-tile-risk') || {}).textContent || '';
      var cost = parseFloat((t.querySelector('.wf-tile-cost') || {}).textContent) || 0;
      var sec = t.closest('.wf-cats-sec');
      if (f.risk.length && !f.risk.some(function (b) { return risk.indexOf(b) === 0; })) return false;
      if (f.q && name.toLowerCase().indexOf(f.q.toLowerCase()) < 0) return false;
      if (cost > f.max || cost < (f.min || 0)) return false;
      if (f.liked && (t.querySelector('.wf-fav') || {}).getAttribute && t.querySelector('.wf-fav').getAttribute('aria-pressed') !== 'true') return false;
      if (f.funds && cost > BAL) return false;
      if (f.type !== 'All' && sec && sec.id !== 'cat-' + f.type.toLowerCase()) return false;
      return true;
    }
    function active(f) { return f.risk.length || f.q || f.min > 0 || f.max < 55 || f.liked || f.funds || f.type !== 'All'; }
    function read() {
      var f = { risk: [], q: '', min: 0, max: 55, liked: false, funds: false, type: 'All' };
      f.risk = Array.prototype.slice.call(host.querySelectorAll('[data-risk]:checked')).map(function (i) { return i.getAttribute('data-risk'); });
      f.q = (host.querySelector('#f-name') || {}).value || '';
      f.max = parseFloat((host.querySelector('#f-max') || {}).value) || 55;
      f.min = parseFloat((host.querySelector('#f-min') || {}).value) || 0;
      f.liked = !!(host.querySelector('[data-f-liked]') || {}).checked;
      f.funds = !!(host.querySelector('[data-f-funds]') || {}).checked;
      f.type = (host.querySelector('#f-type') || {}).value || 'All';
      return f;
    }
    function write(f) {
      host.querySelectorAll('[data-risk]').forEach(function (i) { i.checked = f.risk.indexOf(i.getAttribute('data-risk')) >= 0; });
      var q = host.querySelector('#f-name'); if (q) q.value = f.q;
      var mx = host.querySelector('#f-max'); if (mx) mx.value = f.max.toFixed(2);
      var mn = host.querySelector('#f-min'); if (mn) mn.value = (f.min || 0).toFixed(2);
      var r = host.querySelector('.wf-range'); if (r) r.value = String(Math.round(f.max));
      var l = host.querySelector('[data-f-liked]'); if (l) l.checked = f.liked;
      var d = host.querySelector('[data-f-funds]'); if (d) d.checked = f.funds;
      var ty = host.querySelector('#f-type'); if (ty) ty.value = f.type;
    }
    function count() {
      var f = read(), n = tiles().filter(function (t) { return match(t, f); }).length;
      var b = host.querySelector('[data-filter-apply]');
      if (b) b.textContent = 'Show ' + n + (n === 1 ? ' case' : ' cases');
    }
    function apply() {
      var all = tiles();
      if (!all.length) return;
      var on = active(F), n = 0;
      all.forEach(function (t) { var ok = match(t, F); t.hidden = !ok; if (ok) n++; });
      Array.prototype.forEach.call(document.querySelectorAll('.wf-cats-sec'), function (sec) {
        if (sec.id === 'cat-daily') { sec.hidden = !!on; return; }
        var ts = sec.querySelectorAll('.wf-tile');
        if (ts.length) sec.hidden = !Array.prototype.some.call(ts, function (t) { return !t.hidden; });
      });
      var line = document.querySelector('[data-live-count]');
      if (!line) {
        var first = document.querySelector('.wf-cats-sec');
        if (first) { line = el('p', 'wf-count-line'); line.setAttribute('data-live-count', ''); line.setAttribute('aria-live', 'polite'); first.parentNode.insertBefore(line, first); }
      }
      /* THE FILTERS IN FORCE ARE NAMED AND EACH ONE COMES OFF, round 16, B1-16:
         a live filter down to nothing said "Nothing matches" with no chips and
         no facet named, while flows.md 1a promises a way to widen and the drawn
         empty state carries both. */
      var CH = [];
      if (F.risk.length) CH.push([F.risk.join(' or ') + ' risk', function () { F.risk = []; }]);
      if (F.q) CH.push(['Name has \u201c' + F.q + '\u201d', function () { F.q = ''; }]);
      if (F.max < 55 || F.min > 0) CH.push([(F.min > 0 ? F.min.toFixed(2) + ' to ' : 'under ') + F.max.toFixed(2) + ' coins', function () { F.min = 0; F.max = 55; }]);
      if (F.liked) CH.push(['Favourites only', function () { F.liked = false; }]);
      if (F.funds) CH.push(['Within my balance', function () { F.funds = false; }]);
      if (F.type !== 'All') CH.push([F.type + ' only', function () { F.type = 'All'; }]);
      var chips = document.querySelector('[data-live-chips]');
      if (!chips && line) { chips = el('div', 'wf-chips'); chips.setAttribute('data-live-chips', ''); chips.setAttribute('role', 'group'); chips.setAttribute('aria-label', 'Filters in force'); line.parentNode.insertBefore(chips, line); }
      if (chips) {
        chips.hidden = !on; chips.innerHTML = '';
        CH.forEach(function (c) {
          var ch = el('span', 'wf-chip', c[0] + ' ');
          var x = el('button', 'wf-btn wf-btn--small wf-chip-x', 'x'); x.type = 'button'; x.setAttribute('aria-label', 'Remove filter: ' + c[0]);
          x.addEventListener('click', function () { c[1](); write(F); apply(); });
          ch.appendChild(x); chips.appendChild(ch);
        });
      }
      if (line) {
        line.hidden = !on;
        line.innerHTML = n ? n + (n === 1 ? ' case matches' : ' cases match') + ', out of ' + all.length + '. <a href="catalogue.html">Clear all</a>'
                           : 'Nothing matches ' + CH.map(function (c) { return c[0]; }).join(' and ') + '. Remove one above, or <a href="catalogue.html">clear all</a>.';
      }
      var btn = document.querySelector('[data-filter-open]');
      if (btn) {
        var k = (F.risk.length ? 1 : 0) + (F.q ? 1 : 0) + (F.max < 55 || F.min > 0 ? 1 : 0) + (F.liked ? 1 : 0) + (F.funds ? 1 : 0) + (F.type !== 'All' ? 1 : 0);
        var badge = btn.querySelector('.wf-badge');
        if (k) { if (!badge) { badge = el('span', 'wf-badge'); btn.appendChild(badge); } badge.textContent = String(k); }
        else if (badge && !btn.hasAttribute('data-badge-static')) badge.remove();
      }
    }
    if (active(F) && !document.querySelector('[data-filter-pinned]')) setTimeout(apply, 0);

    function close() {
      if (!host) return;
      host.remove(); host = null;
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', onKey, true);
      if (opener && document.contains(opener)) { opener.setAttribute('aria-expanded', 'false'); opener.focus(); }
      opener = null;
    }

    function onKey(e) {
      if (!host) return;
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Tab') return;
      var f = host.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    function open(trigger) {
      if (host) return;
      opener = trigger || null;
      if (opener) opener.setAttribute('aria-expanded', 'true');
      host = el('div', 'wf-drawer-host');
      host.innerHTML = filterDrawerHTML(!!(window.WF_SHELL && window.WF_SHELL.account));
      document.body.appendChild(host);
      document.documentElement.style.overflow = 'hidden';
      write(F);
      count();
      host.addEventListener('change', count);
      host.addEventListener('input', function (e) {
        if (e.target.classList.contains('wf-range')) { var mx = host.querySelector('#f-max'); if (mx) mx.value = parseFloat(e.target.value).toFixed(2); }
        count();
      });
      host.addEventListener('click', function (e) {
        if (e.target.closest('[data-filter-reset]')) {
          write({ risk: [], q: '', max: 55, liked: false, funds: false, type: 'All' });
          count();
          return;
        }
        var st = e.target.closest('[data-step]');
        if (st) {
          var id = st.getAttribute('data-step').split(':'), inp = host.querySelector('#' + id[0]);
          var v = Math.max(0, Math.min(55, (parseFloat(inp.value) || 0) + parseFloat(id[1])));
          inp.value = v.toFixed(2);
          if (id[0] === 'f-max') { var r = host.querySelector('.wf-range'); if (r) r.value = String(Math.round(v)); }
          count();
          return;
        }
        if (e.target.closest('[data-filter-apply]')) { F = read(); apply(); }
        if (e.target.closest('.wf-drawer-x') || e.target.closest('[data-filter-dismiss]')) close();
      });
      document.addEventListener('keydown', onKey, true);
      var f = host.querySelector('.wf-drawer-x');
      if (f) f.focus();
    }

    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-filter-open]');
      /* SEARCH OPENS THE NAME FIELD, round 15: the button moved focus and nothing
         else. The search is the drawer's Case name field, so Search opens the
         drawer on it rather than drawing a second field. */
      var sr = e.target.closest('[data-filter-search]');
      if (!t && !sr) return;
      e.preventDefault();
      open(t || sr);
      if (sr && host) { var nm = host.querySelector('#f-name'); if (nm) nm.focus(); }
    });

    // The state page renders it open on load, for the same reason the sign in
    // canon does: a state nobody can see without a click is a state nobody checks.
    if (document.querySelector('[data-filter-pinned]')) open(null);
  }

  /* THE ADDRESS CARRIER. The host declares its state and this renders the card
     into it as a full page. D-54: the address is the cold arrival and it is the
     canon, so it carries the H1, the H2 outline and the footer, while the dialog
     carries none of the three. */
  function renderAuth(host) {
    if (!host) return;
    host.innerHTML = authCard(host.getAttribute('data-state') || 'default', 'page');
    wireAuth(host);
  }

  /* ---------- THE ACCOUNT BAND, CLUSTER 5, D-84 ----------
     INHERITED FROM THE BASELINE ON THE FOUNDER'S CALL OF 23 AUGUST 2026, and it
     reverses one line of node 5.1's own baseline row. That row read "the four tabs
     are four nodes on our map since D-36, so the tab strip is not inherited either",
     and four nodes on a map is not an argument against a carrier between them: it is
     what makes one legal. Every destination the strip promises exists.
     WHY IT IS RENDERED HERE AND NOT PASTED INTO THIRTEEN FILES. A strip that only
     exists on the page you are looking at is a dead end on the other three, and
     thirteen copies of one band is thirteen places for it to drift. It is a carrier,
     so it is rendered like the other carriers.
     THE MONEY IS ON THIS SCREEN TWICE AND THAT COST IS PRINTED RATHER THAN ABSORBED.
     The header owns money, 0.1 and CLAUDE.md, and it is sticky, so on cluster 5 the
     same two figures render as chrome above and as the page's own subject here. The
     baseline does exactly this and the founder asked for it in as many words. What
     may not happen is the two disagreeing, so both read the same source.
     THE PLUS IS A LABELLED LINK, NOT A GLYPH. D-52 and D-58: a control that does not
     do its thing is a picture of it, and a bare + is a picture of a word. */
  /* ONE ACCOUNT, ONE NAME, ONE ID, AND THE PAGE READS THEM RATHER THAN REPEATING
     THEM, D-89. The band said Spectacle and ID 953709 while 5.10's record card
     said nightjar_cs and acc-7f3a91c4, on the same page, ten pixels apart. Same
     defect class as the header reading 18.60 while the page read 130.60: two
     renderings of one fact with no shared source. Anything that prints identity
     reads this, and a page may override it once through WF_WHO. */
  /* DECLARED AT THE TOP OF THIS FILE SINCE D-90, above the account menu that
     also reads it. This line used to be the declaration and it sat below one of
     its own readers, which is why the menu carried a hardcoded name for a day. */
  var WHO = window.WF_WHO;

  var ACCT_TABS = [
    { key: 'items',    label: WF_STR.myItems,  file: 'account.html' },
    { key: 'history',  label: WF_STR.history,  file: 'history.html' },
    { key: 'profile',  label: 'Profile',      file: 'profile.html' },
    { key: 'settings', label: WF_STR.settings, file: 'settings.html' }
  ];

  function renderAcctHero(host) {
    if (!host) return;
    var cfg = window.WF_ACCT || {};
    var MN = moneyNow();
    var active = ACCT_TABS.filter(function (t) { return t.key === cfg.active; })[0] || ACCT_TABS[0];

    host.innerHTML = '';

    /* The band's own artwork sits behind everything in it. In grey it is a slot with
       its size and nothing in it, the same way every other image slot in this stage
       is drawn: the look arrives at 06, the room it takes is decided here. */
    host.appendChild(el('span', 'wf-ah-art', null)).setAttribute('aria-hidden', 'true');

    var inn = el('div', 'wf-ah-in');

    var crumb = el('nav', 'wf-crumb wf-ah-crumb');
    crumb.setAttribute('aria-label', 'Breadcrumb');
    var ol = el('ol');
    var home = el('li');
    var ha = el('a', null, WF_STR.home); ha.href = BASE + 'index-account.html';
    home.appendChild(ha); ol.appendChild(home);
    var mid = el('li');
    var ma = el('a', null, 'My account'); ma.href = BASE + 'account.html';
    mid.appendChild(ma); ol.appendChild(mid);
    var last = el('li');
    var cur = el('span', null, active.label);
    cur.setAttribute('aria-current', 'page');
    last.appendChild(cur); ol.appendChild(last);
    crumb.appendChild(ol);
    inn.appendChild(crumb);

    var row = el('div', 'wf-ah-row');

    var who = el('div', 'wf-ah-who');
    var av = el('span', 'wf-ah-av');
    av.setAttribute('aria-hidden', 'true');
    who.appendChild(av);
    var names = el('div', 'wf-ah-names');
    names.appendChild(el('p', 'wf-ah-n', (cfg.name || WHO.name)));
    /* THE ID IS THE ONE THING A PERSON READS OUT TO SUPPORT, so it is text and
       monospace like every other identifier in this product, never an image. */
    names.appendChild(el('p', 'wf-ah-id', 'ID ' + (cfg.id || WHO.id)));
    /* THE LINKED STEAM ACCOUNT IS NAMED, D-150: since D-55 an account can exist
       without one, so the account says which one its items go to. Unlinking and
       linking live in settings, 5.11. */
    /* AND SAYS SO WHEN THERE IS NONE, round 16, D1-20: the no-Steam state
       named nightjar_cs as the linked account. */
    var st = el('a', 'wf-ah-id' + (cfg.steam === false ? ' wf-fig-missing' : ''), cfg.steam === false ? 'No Steam account linked' : 'Steam ' + (cfg.steam || WHO.name)); st.href = BASE + 'settings.html#cfg-steam';
    names.appendChild(st);
    who.appendChild(names);
    row.appendChild(who);

    var money = el('div', 'wf-ah-money');
    var noMoney = !!(window.WF_SHELL && window.WF_SHELL.money === false);
    if (!noMoney) {
      [[MN.balance.toFixed(2) + ' coins', 'Balance', 'balance'],
       [MN.held.toFixed(2) + ' coins', 'Value of items held', 'held']].forEach(function (f) {
        var d = el('div', 'wf-fig');
        d.appendChild(el('span', 'wf-fig-v', f[0])).setAttribute('data-money', f[2]);
        d.appendChild(el('span', 'wf-fig-c', f[1]));
        money.appendChild(d);
      });
    } else {
      /* AN UNREADABLE FIGURE IS SAID, NEVER ZEROED. Same rule the header follows. */
      money.appendChild(el('p', 'wf-fig-missing', 'Money not available: this account could not be read'));
    }
    var add = el('a', 'wf-btn wf-ah-add', WF_STR.addFunds);
    add.href = BASE + 'deposit.html';
    // ONE ACT, ONE CARRIER, round 14: the header + opens the dialog, so this does.
    if (window.WF_SHELL && window.WF_SHELL.boundary) add.href = BASE + boundaryRoute();
    else add.setAttribute('data-dep-open', 'step1');
    money.appendChild(add);
    row.appendChild(money);

    inn.appendChild(row);
    host.appendChild(inn);

    /* THE STRIP IS REAL LINKS AND THE CURRENT ONE IS NOT ONE. A tab that navigates
       to the page you are on is a control that does nothing, D-58, so the active tab
       renders as a span with aria-current and the other three as anchors. */
    var tabs = el('nav', 'wf-atabs');
    tabs.setAttribute('aria-label', 'Account');
    ACCT_TABS.forEach(function (t) {
      if (t.key === active.key) {
        var c = el('span', 'wf-atab is-on', t.label);
        c.setAttribute('aria-current', 'page');
        tabs.appendChild(c);
      } else {
        var a = el('a', 'wf-atab', t.label);
        a.href = BASE + t.file;
        tabs.appendChild(a);
      }
    });
    host.appendChild(tabs);
    // THE CURRENT TAB IS IN VIEW, round 14: at 360 Settings sat off the strip's
    // right edge with nothing saying the strip scrolls.
    var on = tabs.querySelector('.is-on');
    if (on && tabs.scrollWidth > tabs.clientWidth) tabs.scrollLeft = Math.max(0, on.offsetLeft - (tabs.clientWidth - on.offsetWidth) / 2);
  }

  /* THE SELECTION BAR COUNTS AND SUMS, 5.1, D-84. It is here rather than inline
     because it is behaviour, and because the same rule the bar prints is the rule
     0.11 states for the header: A COUNT OF THINGS AND A VALUE OF THINGS, never one
     score. The two figures are read from the cards themselves, so the bar and the
     grid cannot disagree. Select all and Deselect all are real and they dispatch
     change, because a control that sets a checkbox without telling the page is a
     control that half works. */
  /* AN ITEM ON ITS WAY TO STEAM STAYS IN SIGHT, WITH ITS MARK, D-150. It is not
     in the value held, 0.11 rule 7: that figure is what can still be acted on.
     No tick, no acts: the request is made and its clock is on 5.9. */
  /* A card's key is the round its Share opens. */
  function invKey(card) {
    var dk = card && card.closest && card.closest('[data-key]');
    if (dk) return dk.getAttribute('data-key');
    var a = card && card.querySelector('a[href*="round="]');
    return a ? (/round=([a-z0-9]+)/.exec(a.getAttribute('href')) || [])[1] : '';
  }
  function mountInFlight() {
    var grid = document.querySelector('.wf-grid--inv');
    if (!grid || !document.querySelector('[data-invbar]')) return;
    /* WHAT LEFT IN THIS SESSION LEAVES MY ITEMS, D-152: sold and cashed out go,
       sent stays in sight with its mark, the rule D-150 set for a sending item. */
    /* AND WHAT AN OPEN IN THIS SESSION WON IS HELD HERE, round 16, B1-5: the
       outcome said "Saved to My items" and My items did not have it. */
    BORN.filter(function (r) { return r.state === 'held'; }).reverse().forEach(function (r) {
      var sh = WF_SHELF[r.key], st = stOf(r.key);
      var c = el('article', 'wf-inv-card'); c.setAttribute('data-v', r.worth); c.setAttribute('data-when', '2026-08-21T09:31');
      c.innerHTML = '<div class="wf-inv-top"><label class="wf-inv-pick"><input type="checkbox" data-inv-pick data-v="' + r.worth + '"><span class="wf-vh">Select ' + r.w + ' ' + r.s + '</span></label>' +
        '<a class="wf-btn wf-btn--small" href="' + BASE + 'result-owner.html?round=' + r.key + '">Share</a></div>' +
        '<span class="wf-inv-art" aria-hidden="true"></span>' +
        '<p class="wf-inv-w">' + r.w + '</p><p class="wf-inv-s">' + r.s + '</p><p class="wf-inv-wear">(' + r.wear + ')</p><p class="wf-inv-p">' + r.worth + '</p>' +
        '<div class="wf-inv-acts"><button class="wf-btn" type="button" data-inv-sell>Sell for coins</button>' +
        (sh && sh.offers.length ? '<a class="wf-btn" href="' + BASE + 'withdraw.html?item=' + r.key + '">' + WF_STR.sendToSteam + '</a>' : '') +
        '<button class="wf-btn" type="button" disabled>Exchange</button><p class="wf-inv-why">Exchange is not here yet</p></div>' +
        (sh && sh.offers.length ? '<div class="wf-inv-mkt"><span>Starting at<b>' + sh.offers[0].p.toFixed(2) + '</b></span><span>Offers<b>' + sh.total + '</b></span></div>' +
          '<p class="wf-inv-out"><span>Out to Steam</span><span><b>' + Math.abs(st).toFixed(2) + '</b> ' + (st >= 0 ? 'back' : 'more') + '</span></p>' : '<p class="wf-inv-out"><span>Out to Steam</span><span class="wf-fig-missing">no copy on sale to buy</span></p>');
      grid.insertBefore(c, grid.firstChild);
    });
    /* THE MARKET LINE IS THE SHELF'S, round 16, B2-18: the AWP card said
       "Starting at 71.20, 268 offers, 5.15 more" and its Send to Steam opened a
       shelf starting at 61.20 with 230 offers, 4.85 back. A card with a shelf
       reads it; one without keeps its own line. */
    Array.prototype.forEach.call(grid.querySelectorAll('.wf-inv-card'), function (c) {
      var sa = c.querySelector('a[href*="withdraw.html?item="]'), k = sa && (/item=([a-z0-9]+)/.exec(sa.getAttribute('href')) || [])[1], sh = k && WF_SHELF[k];
      if (!sh) return;
      var mk = c.querySelectorAll('.wf-inv-mkt b'), out = c.querySelector('.wf-inv-out');
      if (!sh.offers.length) { if (out) out.innerHTML = '<span>Out to Steam</span><span class="wf-fig-missing">no copy on sale to buy</span>'; return; }
      var d = sh.ours - sh.offers[0].p;
      if (mk[0]) mk[0].textContent = sh.offers[0].p.toFixed(2);
      if (mk[1]) mk[1].textContent = String(sh.total);
      if (out) out.innerHTML = '<span>Out to Steam</span><span><b>' + Math.abs(d).toFixed(2) + '</b> ' + (d >= 0 ? 'back' : 'more') + '</span>';
    });
    var gone = WF_SESS.get('gone') || {};
    Array.prototype.forEach.call(grid.querySelectorAll('.wf-inv-card'), function (c) {
      var how = gone[invKey(c)];
      if (how === 'sold' || how === 'cashed') { c.remove(); return; }
      if (how !== 'sent') return;
      c.classList.add('is-inflight');
      var pk = c.querySelector('[data-inv-pick]'); if (pk) { var lb = pk.closest('label'); (lb || pk).remove(); }
      c.insertBefore(el('p', 'wf-inv-mark', 'On its way to Steam, since 21 Aug'), c.firstChild);
      var acts = c.querySelector('.wf-inv-acts'); if (acts) acts.innerHTML = '<a class="wf-btn" href="' + BASE + 'history-withdrawals.html">Its clock</a>';
    });
    BORN.concat(WF_ROLLS).filter(function (r) { return r.state === 'sending'; }).forEach(function (r) {
      var c = el('article', 'wf-inv-card is-inflight');
      c.innerHTML = '<p class="wf-inv-mark">On its way to Steam, since ' + (r.went || '') + '</p>' +
        '<span class="wf-inv-art" aria-hidden="true"></span>' +
        '<p class="wf-inv-w">' + r.w + '</p><p class="wf-inv-s">' + r.s + '</p><p class="wf-inv-wear">(' + r.wear + ')</p>' +
        '<p class="wf-inv-p">' + r.worth + '</p>' +
        '<div class="wf-inv-acts"><a class="wf-btn" href="' + BASE + 'history-withdrawals.html">Its clock</a></div>';
      grid.appendChild(c);
    });
  }

  function mountInvBar() {
    var bar = document.querySelector('[data-invbar]');
    if (!bar) return;
    var picks = [].slice.call(document.querySelectorAll('[data-inv-pick]'));
    var nOut = bar.querySelector('[data-invbar-n]');
    var vOut = bar.querySelector('[data-invbar-v]');

    function paint() {
      var on = picks.filter(function (i) { return i.checked; });
      /* WITH NOTHING TICKED THE BAR COUNTS EVERYTHING HELD, D-128, as the
         baseline's does ("55 ITEMS 35.91"). A bar reading "0 items, 0.00 coins"
         over a full grid was a figure about nothing. */
      /* WHAT LEFT LEAVES THE SUM, round 17, B2-12: after a cash out the bar
         still counted the cashed items. */
      var src = on.length ? on : picks.filter(function (i) { return !i.disabled; });
      var sum = src.reduce(function (a, i) { return a + parseFloat(i.getAttribute('data-v') || '0'); }, 0);
      nOut.textContent = src.length + (src.length === 1 ? ' item' : ' items');
      // A VALUE THAT CANNOT BE READ IS SAID, round 14: the bar counted six and
      // summed five without saying which was missing.
      var blind = src.filter(function (i) { var c = i.closest('.wf-inv-card'); return c && c.querySelector('.wf-inv-p.wf-fig-missing'); }).length;
      if (blind) nOut.textContent += ', ' + blind + ' not readable';
      vOut.textContent = sum.toFixed(2) + ' coins';
      /* THE BAR STAYS, THE ACTIONS GO IDLE. D-85 reversed the earlier "hidden until
         something is ticked": the bar is where a person learns the exits exist, and
         hidden it teaches nobody. Idle is a state of a working control, which is the
         line D-58 draws: the note beside them says what makes them live. */
      bar.classList.toggle('is-idle', on.length === 0);
      // NO aria-disabled, round 15: it announced the exits as unavailable and
      // the idle press answers "Tick an item first", which is D-58's line.
    }
    picks.forEach(function (i) { i.addEventListener('change', paint); });
    var all = bar.querySelector('[data-inv-all]');
    var none = bar.querySelector('[data-inv-none]');
    if (all) all.addEventListener('click', function () { picks.forEach(function (i) { if (!i.disabled) i.checked = true; }); paint(); });
    if (none) none.addEventListener('click', function () { picks.forEach(function (i) { i.checked = false; }); paint(); });

    /* SELL SELLS AND AN IDLE EXIT ANSWERS, round 14. "Sell for coins" reloaded
       the page and sold nothing, and an idle press on the bar said nothing. A sold
       card turns into its receipt and leaves the selection and the totals. */
    var say = bar.querySelector('[data-invbar-say]');
    if (!say) { say = el('p', 'wf-refuse'); say.setAttribute('data-invbar-say', ''); say.setAttribute('aria-live', 'polite'); bar.appendChild(say); }
    function sell(card) {
      var i = card.querySelector('[data-inv-pick]');
      var v = parseFloat(card.getAttribute('data-v') || '0');
      if (i) { i.checked = false; i.disabled = true; }
      picks = picks.filter(function (x) { return x !== i; });
      card.classList.add('is-sold');
      var acts = card.querySelector('.wf-inv-acts');
      if (acts) acts.innerHTML = '<p class="wf-inv-sold">Sold, +' + v.toFixed(2) + ' coins</p>';
      moneyAdd(v, -v);
      WF_SESS.gone(invKey(card), 'sold');
      return v;
    }
    document.addEventListener('click', function (e) {
      var one = e.target.closest('[data-inv-sell]');
      /* AN UNREADABLE VALUE IS NOT SOLD FOR ZERO, round 15: the degraded page
         sold the AWP it could not price for +0.00. */
      var blindOf = function (c) { return c && c.querySelector('.wf-inv-p.wf-fig-missing'); };
      if (one && blindOf(one.closest('.wf-inv-card'))) {
        e.preventDefault(); one.textContent = 'Not sold: its value cannot be read right now'; return;
      }
      if (one) { e.preventDefault(); if (!confirmFirst(one)) return; sell(one.closest('.wf-inv-card')); paint(); return; }
      var act = e.target.closest('[data-invbar-act]');
      if (!act || !bar.contains(act)) return;
      var on = picks.filter(function (i) { return i.checked; });
      if (!on.length) { e.preventDefault(); say.textContent = 'Tick an item first.'; return; }
      say.textContent = '';
      if (act.hasAttribute('data-inv-sellsel')) {
        e.preventDefault();
        if (!say.hasAttribute('data-armed-sell')) { say.setAttribute('data-armed-sell', '1'); say.textContent = 'Press Sell for coins again to sell ' + on.length + (on.length === 1 ? ' item' : ' items') + '.'; setTimeout(function () { say.removeAttribute('data-armed-sell'); }, 5000); return; }
        say.removeAttribute('data-armed-sell');
        if (on.some(function (i) { return blindOf(i.closest('.wf-inv-card')); })) { say.textContent = 'Not sold: one item has a value that cannot be read right now. Untick it to sell the rest.'; return; }
        var got = 0;
        on.forEach(function (i) { got += sell(i.closest('.wf-inv-card')); });
        say.textContent = 'Sold ' + on.length + (on.length === 1 ? ' item' : ' items') + ', +' + got.toFixed(2) + ' coins.';
        paint();
        return;
      }
      /* THE SELECTION TRAVELS, round 15: one item or five, the basket opened the
         AK's. Each card's key is the round its Share opens. */
      var ks = on.map(function (i) { var sh = i.closest('.wf-inv-card').querySelector('a[href*="round="]'); return sh ? (/round=([a-z0-9]+)/.exec(sh.getAttribute('href')) || [])[1] : ''; }).filter(Boolean);
      if (act.getAttribute('href') && /withdraw/.test(act.getAttribute('href'))) act.setAttribute('href', BASE + (on.length > 1 ? 'withdraw-many.html?items=' + ks.join(',') : 'withdraw.html?item=' + ks[0]));
    });
    var basePaint = paint;
    paint = function () { basePaint(); if (none) none.hidden = !picks.some(function (i) { return i.checked; }); };
    picks.forEach(function (i) { i.addEventListener('change', paint); });
    paint();
  }

  /* ---------- NODE 0.3, SYSTEM PAGES ----------
     Two controls, and both of them do their thing rather than depicting it.
     THE SEARCH WAS THE THIRD AND IT IS GONE, founder decision of 23 August 2026.
     It worked, it filtered twelve real names, and its empty result was a state of
     this node with a page of its own. None of that was the objection: the page
     exists to say one sentence and offer one way out, and a field with a submit
     beside it was a second job on it. The shelf carries a search, and the shelf is
     one press away. SYS_CASES went with it rather than being left as a list
     nothing reads. */

  /* THE SUBJECT ON THE SUPPORT FORM IS A CONTROL, NOT A LABEL, D-58. Choosing
     the appeal opens the appeal, which is the only subject that changes what the
     product has to show: it carries four prefilled fields the other five do not.
     IT NAVIGATES RATHER THAN REWRITING THE FORM IN PLACE. A selector that
     rewrites required fields under a person is how a prefill gets lost, and node
     0.10 refused it before this page had two forms and still refuses it now that
     it has one. */
  function mountSupportSubject() {
    /* AN EMPTY TICKET IS REFUSED IN PLACE, round 14: Send went to the submitted
       state with no message in it. */
    /* AND AN EMPTY APPEAL, AND AN ANSWER WITH NOWHERE TO GO, round 15: the
       appeal's Send had no check at all, and neither form read the address. */
    var send = document.querySelector('[data-sup-send]');
    if (send) send.addEventListener('click', function (e) {
      var form = send.closest('.wf-form, .wf-stack'), msg = form && form.querySelector('textarea');
      var mail = form && form.querySelector('input[type="email"]');
      var why = '', at = null;
      if (msg && !msg.value.trim()) { why = 'Nothing was sent: write what it is about first.'; at = msg; }
      else if (mail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value.trim())) { why = 'Nothing was sent: the answer needs an email address it can reach.'; at = mail; }
      if (!why) return;
      e.preventDefault();
      var p = form.querySelector('.wf-refuse') || form.insertBefore(el('p', 'wf-refuse is-said'), send.parentNode);
      p.textContent = why;
      at.focus();
    });
    /* A QUESTION IS NOT AN APPEAL, round 15: every Send landed on an appeal
       ticket. The entry form's Send carries ?q=1 and the ticket says what it is. */
    /* A ROUND THAT DID NOT VERIFY IS ITS OWN TICKET, round 16, B1-12 and B1-13.
       Report on a failed proof opened the restriction appeal with an empty round
       field, and the history row's "The ticket" opened a support form with no
       ticket in it. Both now open the ticket the report made, with the round. */
    var rk = (/[?&]r=([a-z0-9]+)/.exec(location.search) || [])[1];
    if (rk && ROUNDS[rk]) {
      var RR = ROUNDS[rk], tv = document.querySelector('.wf-tid-v');
      if (tv) { tv.textContent = 'rp-2026-08-21-0041'; var cp = tv.parentNode.querySelector('[data-copy]'); if (cp) cp.setAttribute('data-copy', tv.textContent); }
      Array.prototype.forEach.call(document.querySelectorAll('.wf-tick .wf-fig-c'), function (c) { c.textContent = c.textContent.replace(/Appeal submitted, .*/, 'Round reported, 21 Aug 2026 09:31'); });
      Array.prototype.forEach.call(document.querySelectorAll('.wf-tick .wf-note, a[href="withdraw-restricted.html"], a[href="support-waiting.html"]'), function (x) { x.remove(); });
      var wh = document.querySelector('#h2-what'), wb = wh && wh.closest('.wf-stack') && wh.closest('.wf-stack').querySelector('p');
      if (wb) wb.innerHTML = 'Our recomputation of this round did not match what we published, and the round is attached: <strong>' + RR.w + ' ' + RR.s + '</strong>, ' + RR.at + ', nonce ' + RR.nonce + '. We answer with what we found and what we do about it.';
      var wr = wh && wh.closest('.wf-stack') && wh.closest('.wf-stack').querySelector('.wf-row');
      if (wr) wr.innerHTML = '<a class="wf-btn" href="' + BASE + 'fair-prefilled.html?round=' + rk + '">The round</a>';
    }
    if (/[?&]q=1/.test(location.search)) {
      var tid = document.querySelector('.wf-tid-v');
      if (tid) { tid.textContent = 'sp-2026-08-21-0032'; var cb = tid.parentNode.querySelector('[data-copy]'); if (cb) cb.setAttribute('data-copy', tid.textContent); }
      Array.prototype.forEach.call(document.querySelectorAll('.wf-tick .wf-fig-c'), function (c) { c.textContent = c.textContent.replace('Appeal submitted', 'Question submitted'); });
      Array.prototype.forEach.call(document.querySelectorAll('.wf-tick .wf-note, a[href="withdraw-restricted.html"], a[href="support-waiting.html"]'), function (x) { x.remove(); });
      var what = document.querySelector('#h2-what');
      var wp = what && what.closest('.wf-stack') && what.closest('.wf-stack').querySelector('p');
      if (wp) wp.textContent = 'We answer at the address you gave.';
    }
    var sel = document.querySelector('[data-sup-subject]');
    if (!sel) return;
    sel.addEventListener('change', function () {
      if (sel.value === 'appeal') window.location.href = BASE + 'support-appeal.html';
    });
  }

  /* ---------------------------------------------------------------------
     NODE 5.10's MESSAGES PANEL, D-87. The founder's capture acct_profile_daily.png
     of 21 August 2026: two tabs, PROMO and SYSTEM, a header row carrying "Mark all
     as read" and "Delete all", and an envelope empty state.
     ONE RENDERER AND NOT THREE COPIES. Three profile pages carry this panel and
     the panel has live behaviour, which is the exact condition under which a
     copied block rots: the same contract the sign in card, the filter drawer and
     the cookie band already run under.
     THE TWO TABS ARE NOT ONE THING TWICE. Promo is a channel and 5.11 holds its
     switch, D-86. System is the product saying what happened to money that is
     already yours, it has no switch and it has no Delete all: a product that lets
     you erase its own notice can afterwards say it told you. B8-2 is six people
     with hard figures waiting and nobody telling them anything.
     --------------------------------------------------------------------- */
  var MSG_TABS = [
    { key: 'promo',  label: 'Promo',  head: 'Marketing messages', empty: 'No marketing messages',
      emptyP: 'Nothing has been sent to you. You can switch this channel off in Settings.', del: true },
    { key: 'system', label: 'System', head: 'Product messages',   empty: 'No product messages',
      emptyP: 'Nothing has gone wrong with your money, your items or an open. This is the tab that would say so.', del: false }
  ];

  function msgRow(m) {
    var li = el('li', 'wf-msg-i' + (m.unread ? ' is-unread' : ''));
    li.appendChild(el('span', 'wf-msg-dot', null)).setAttribute('aria-hidden', 'true');
    var b = el('div', 'wf-msg-b');
    b.appendChild(el('p', 'wf-msg-t', m.t));
    b.appendChild(el('p', 'wf-msg-p', m.p));
    var meta = el('div', 'wf-msg-m');
    meta.appendChild(el('span', 'wf-msg-new', 'Unread'));
    meta.appendChild(el('span', 'wf-msg-when', m.when));
    if (m.href) {
      var a = el('a', null, m.link || 'Open');
      a.setAttribute('href', BASE + m.href);
      meta.appendChild(a);
    }
    b.appendChild(meta);
    li.appendChild(b);
    return li;
  }

  function mountMsgs() {
    var host = document.querySelector('[data-msgs]');
    if (!host) return;
    host.classList.add('wf-msg-in');
    var data = window.WF_MSGS || {};
    var state = MSG_TABS.map(function (t) {
      return { def: t, items: (data[t.key] || []).map(function (m) {
        var c = {}; for (var k in m) c[k] = m[k]; return c;
      }) };
    });
    var open = 0;

    var tabs = el('div', 'wf-msg-tabs');
    tabs.setAttribute('role', 'tablist');
    var bar  = el('div', 'wf-lbar');
    var body = el('div', null);
    host.appendChild(tabs);
    host.appendChild(bar);
    host.appendChild(body);

    function unread(i) {
      return state[i].items.filter(function (m) { return m.unread; }).length;
    }

    function draw() {
      var cur = state[open];

      tabs.innerHTML = '';
      state.forEach(function (st, i) {
        var b = el('button', 'wf-tabb', st.def.label);
        b.type = 'button';
        b.setAttribute('role', 'tab');
        b.setAttribute('aria-selected', i === open ? 'true' : 'false');
        b.setAttribute('aria-controls', 'wf-msg-body');
        var n = unread(i);
        if (n) {
          var c = el('span', 'wf-tabb-n', String(n));
          c.setAttribute('aria-label', n + ' unread');
          b.appendChild(c);
        }
        b.addEventListener('click', function () { open = i; draw(); });
        tabs.appendChild(b);
      });

      bar.innerHTML = '';
      bar.appendChild(el('h3', 'wf-lbar-h', cur.def.head));
      var acts = el('div', 'wf-lbar-acts');
      /* D-58, AND IT BITES BOTH WAYS. A control with nothing to act on is not
         drawn disabled here, it is not drawn: an empty list has no "mark all"
         to press and a greyed button is a picture of one. */
      if (unread(open)) {
        var r = el('button', 'wf-btn wf-btn--small', 'Mark all as read');
        r.type = 'button';
        r.addEventListener('click', function () {
          cur.items.forEach(function (m) { m.unread = false; });
          draw();
        });
        acts.appendChild(r);
      }
      if (cur.def.del && cur.items.length) {
        var d = el('button', 'wf-btn wf-btn--small', 'Delete all');
        d.type = 'button';
        d.addEventListener('click', function () { cur.items = []; draw(); });
        acts.appendChild(d);
      }
      if (!cur.def.del) {
        acts.appendChild(el('span', 'wf-fig-c', 'Kept, and never deleted.'));
      }
      bar.appendChild(acts);

      body.innerHTML = '';
      body.id = 'wf-msg-body';
      body.setAttribute('role', 'tabpanel');
      body.setAttribute('aria-live', 'polite');
      if (!cur.items.length) {
        var e = el('div', 'wf-empty');
        e.appendChild(el('span', 'wf-msg-art', null)).setAttribute('aria-hidden', 'true');
        e.appendChild(el('p', 'wf-empty-h', cur.def.empty));
        e.appendChild(el('p', 'wf-empty-p', cur.def.emptyP));
        body.appendChild(e);
      } else {
        var ul = el('ul', 'wf-msg-list');
        cur.items.forEach(function (m) { ul.appendChild(msgRow(m)); });
        body.appendChild(ul);
      }
    }

    draw();
  }

  /* ---------------------------------------------------------------------
     NODE 5.9's FOUR HISTORIES, D-88. The founder chose all four of the
     baseline's tabs after the argument for three was put and lost. Source:
     acct_history_inventory.png and acct_history_deposit.png, 18 August 2026.
     TAB ONE IS WHERE WE DIVERGE AND THE DIVERGENCE IS THE NODE. The baseline's
     first tab is an INVENTORY history, a grid of item cards, which is a roll
     with the roll removed. Ours lists rolls and the item is one field of each,
     including the field that says the item was sold or withdrawn - so nothing
     the baseline's first tab holds is lost by not having it.
     THE FOURTH TAB HAS A SUBJECT SINCE D-93 AND IT IS NOT THE ONE ITS LABEL
     SOUNDS LIKE. Taking coins out as money is still not a capability anywhere in
     cjm-to-be.md and is not built. What is built, and is in round 1 since D-38,
     is selling an item back for coins, and until D-93 that had no ledger on any
     surface: the roll row carried a "Sold back" mark, which is a fact about the
     roll rather than a record of the sale. So the tab now holds the sales and
     states in one line that a payment out is not what it means. It shipped on
     D-88 as a rendered absence and the reasoning was right on a wrong premise:
     the subject was one page over the whole time.
     ONE RENDERER FOR FOUR PAGES, the same contract every other multi-page
     carrier in this stage runs under.
     --------------------------------------------------------------------- */
  /* ---------------------------------------------------------------------
     THE FIVE ROLLS, DECLARED ONCE, D-108. Founder: where is our inventory
     history, with skin cards and their status.
     THE ANSWER WAS THAT IT IS ON THE STRANGER'S PAGE. Node 7.3 already renders
     the baseline's exact shape, every skin the account has won as cards with
     where it went in place of a value, and the owner's own account had no such
     view: 5.1 holds only what is held now, and this node's Rolls tab holds
     everything but keyed by the event, with the item's fate as a small line
     under its name and "held" rendered as silence.
     SO THE FIFTH TAB IS THE SAME FIVE ROLLS KEYED BY THE ITEM, and the reason
     it is declared here rather than written into the page is that there were
     already TWO HAND COPIES of these five and they had drifted: the AWP is
     Field-Tested on the roll row and Well-Worn on both 5.1 and 7.3. A wear
     cannot change. D-88 refused an inventory tab partly because it would be a
     second rendering of one set, and it was right about the risk and wrong
     about the count, which was two before this tab existed.
     ONE FIGURE PER CARD AND IT IS THE ROLL'S OWN. Worth when won, dated to the
     roll, for held and gone alike. What an item is worth today is 5.1's figure
     and what a sale credited is the cash out ledger's, and a card that mixed
     the three would be three owners on one line.
     --------------------------------------------------------------------- */
  /* ONE ACCOUNT, ONE STORY, round 14. The five rolls had the AK in four
     readings across history, the player page, My items and Send to Steam, the
     AWP both held and on its way to Steam, and two rolls dated after the
     prototype's now, 21 Aug 2026 09:31. Ten rolls now, newest first, and every
     item 5.1 holds is one of them at the value 5.1 prints. Samples by D-124,
     marked in 5.9. Indices 0 to 4 keep the roles the state pages point at. */
  var WF_ROLLS = [
    { key: 'mp9n',    when: '20 Aug 23:02', date: '20 Aug 2026', kase: 'Nightfall Case', w: 'MP9',          s: 'Rose Iron',       wear: 'Minimal Wear',   cost: '31.00', worth: '1.86',  chance: '7.30%',  hash: 'c02b7d19', state: 'sending', went: '21 Aug' },
    { key: 'p250sd',  when: '20 Aug 22:57', date: '20 Aug 2026', kase: 'Nightfall Case', w: 'P250',         s: 'Sand Dune',       wear: 'Battle-Scarred', cost: '31.00', worth: '0.31',  chance: '19.80%', hash: null,       state: 'sold', went: '20 Aug' },
    { key: 'awp',     when: '20 Aug 18:40', date: '20 Aug 2026', kase: 'Warsteel Case',  w: 'AWP',          s: 'Asiimov',         wear: 'Field-Tested',   cost: '4.90',  worth: '61.40', now: '66.05', chance: '0.11%',  hash: '5d3e8b71', state: 'held' },
    { key: 'glockfn', when: '20 Aug 18:36', date: '20 Aug 2026', kase: 'Warsteel Case',  w: 'Glock-18',     s: 'Water Elemental', wear: 'Factory New',    cost: '4.90',  worth: '3.02',  now: '4.20',  chance: '5.60%',  hash: '46a0f9c3', state: 'held' },
    /* THE AK IS WON ON 18 AUG, round 15, D-142: dated 21 Aug 08:52, its expired
       48 hour offer on 5.3 could not have run out by now. */
    { key: 'wak',     when: '18 Aug 20:52', date: '18 Aug 2026', kase: 'Warsteel Case',  w: 'AK-47',        s: 'Redline',         wear: 'Field-Tested',   cost: '4.90',  worth: '21.90', now: '21.40', chance: '0.42%',  hash: 'a91f4c2e', state: 'held' },
    /* THE OUTCOME'S GLOCK IS A ROLL OF THIS ACCOUNT, round 15, D-142: the case
       screen's outcome, its interrupted state and its proof were a tenth roll
       nobody's history held. Sold back on the outcome screen, so 5.1 and its
       140.95 do not change. */
    { key: 'glock',   when: '18 Aug 14:58', date: '18 Aug 2026', kase: 'Ironbound Case', w: 'Glock-18',     s: 'Water Elemental', wear: 'Minimal Wear',   cost: '12.40', worth: '12.90', chance: '14.00%', hash: 'a3f91c58', state: 'sold', went: '18 Aug' },
    { key: 'ak',      when: '18 Aug 14:44', date: '18 Aug 2026', kase: 'Ironbound Case', w: 'AK-47',        s: 'Redline',         wear: 'Field-Tested, StatTrak', cost: '12.40', worth: '47.30', chance: '3.18%', hash: '4f2a91c7', state: 'sold', went: '18 Aug' },
    { key: 'uspc',    when: '16 Aug 19:40', date: '16 Aug 2026', kase: 'Coldfront Case', w: 'USP-S',        s: 'Cortex',          wear: 'Minimal Wear',   cost: '2.10',  worth: '7.10',  now: '7.35',  chance: '2.40%',  hash: '9e41d7a2', state: 'held' },
    { key: 'm4ft',    when: '14 Aug 08:55', date: '14 Aug 2026', kase: 'Nightfall Case', w: 'M4A1-S',       s: 'Hyper Beast',     wear: 'Field-Tested',   cost: '31.00', worth: '28.60', now: '29.90', chance: '1.20%',  hash: '3b7c0e95', state: 'held' },
    { key: 'deagle',  when: '13 Aug 20:18', date: '13 Aug 2026', kase: 'Coldfront Case', w: 'Desert Eagle', s: 'Blaze',           wear: 'Minimal Wear',   cost: '2.10',  worth: '11.80', now: '12.05', chance: '0.90%',  hash: 'd5f21a68', state: 'held' }
  ];
  /* Every roll with a proof gets a round record, so its result page, its
     verifier and its public card say the same thing as its history row. */
  WF_ROLLS.forEach(function (r, i) {
    if (!r.hash) return;
    if (ROUNDS[r.key]) { ROUNDS[r.key].kase = r.kase.replace(' Case', ''); return; }
    ROUNDS[r.key] = { w: r.w, s: r.s, axes: r.wear.split(', '), won: r.worth, now: r.now || r.worth,
      at: r.date + ' ' + r.when.split(' ').pop(), hash: r.hash + hx(r.key + 'h', 56), seed: hx(r.key + 's', 64),
      /* NONCES RISE WITH TIME ON ONE CLIENT SEED, round 16, B1-18: they were
         counted by list position, newest first, so they fell as rolls got newer.
         The AK and the Glock keep 41 207 and 41 208, the multi-roll opens follow
         them, and these fit around both. */
      client: '7d19f4a2', nonce: String({ deagle: 41190, m4ft: 41195, uspc: 41201, wak: 41216, glockfn: 41217, awp: 41218, mp9n: 41220 }[r.key] || 41100 + i).replace(/(\d)(\d{3})$/, '$1 $2'),
      ticket: String(1000 + i * 7919).replace(/(\d)(\d{3})$/, '$1 $2'), range: 'the range its case publishes', kase: r.kase.replace(' Case', '') };
  });
  if (ROUNDS.glockfn) ROUNDS.glockfn.unreadable = true;
  /* THE FEED'S ROUNDS, round 15. A tile from Ironbound takes its figures from
     CASE_ITEMS and its ticket from inside the range it proves; the rest carry
     their own. Dated minutes before the prototype's now, newest first. */
  /* THE MULTI-ROLL OPENS' ROUNDS, round 15, D-142. "2 round hashes" and "5 round
     hashes" printed one value, the one-roll Glock's, and four of the rolls had no
     record to check. Each roll now has its own, struck in the same second as the
     Glock, from the Ironbound table. Samples by D-124, marked in 3.3. */
  [['o2mp9', 'MP9', 'Rose Iron'], ['o5p250', 'P250', 'Asiimov'], ['o5nova', 'Nova', 'Koi'],
   ['o5mp9', 'MP9', 'Rose Iron'], ['o5usp', 'USP-S', 'Kill Confirmed'], ['o5m4', 'M4A1-S', 'Hyper Beast']].forEach(function (o, i) {
    var it = null, tier = '';
    CASE_ITEMS.forEach(function (g) { g[2].forEach(function (x) { if (x[0] === o[1] && x[1] === o[2]) { it = x; tier = g[0]; } }); });
    var lo = parseInt(it[5].split(' to ')[0].replace(/\s/g, ''), 10), hi = parseInt(it[5].split(' to ')[1].replace(/\s/g, ''), 10);
    ROUNDS[o[0]] = { w: o[1], s: o[2], axes: it[2].split(' \u00b7 ').concat(tier), won: it[4], now: it[4], at: '18 Aug 2026 14:58',
      hash: hx(o[0] + 'h', 64), seed: hx(o[0] + 's', 64), client: '7d19f4a2', nonce: String(41209 + i).replace(/(\d)(\d{3})$/, '$1 $2'),
      ticket: String(lo + (i * 7919) % (hi - lo + 1)).replace(/(\d)(\d{3})$/, '$1 $2'), range: it[5], kase: 'Ironbound' };
  });
  /* THE WORKED EXAMPLE ON 1.2 IS A ROUND, round 15: its "Check this round" opened
     the AK. Its fields are the ones the example prints, server seed 7c1e...a904,
     client seed nightjar, nonce 412, ticket 18 210 in the USP-S range. Sample. */
  ROUNDS.ex = { w: 'USP-S', s: 'Kill Confirmed', axes: ['Minimal Wear', 'Restricted'], won: '14.20', now: '13.95', at: '18 Aug 2026 14:12',
    hash: hx('exh', 64), seed: '7c1e' + hx('exs', 56) + 'a904', client: 'nightjar', nonce: '412', ticket: '18 210', range: '11 001 to 23 000', kase: 'Ironbound' };
  /* AN OPEN PRESSED NOW IS A ROUND DATED NOW, round 16, D-152 answer 3. The
     open screen had no way to its outcome, and the outcome it showed was dated
     18 Aug while the press was made at the prototype's now. A press records an
     open in the session: which rolls it struck, each a new round from the same
     Ironbound sample it draws, its own seed, nonce and hash, dated 21 Aug 2026
     09:31. History appends it and My items holds it until it is sold or sent.
     An outcome page opened by its address stays the 18 Aug state it draws. */
  var OPEN_AT = '21 Aug 2026 09:31';
  var OPEN_ST = { glock: -6.70, o2mp9: 1.45 };
  MULTI.forEach(function (m) { OPEN_ST[m.key] = m.st; });
  function openBases(page, n) {
    if (/case-(open|outcome)-2/.test(page)) return ['glock', 'o2mp9'];
    if (/case-(open|outcome)-5/.test(page)) return MULTI.slice(0, n || 5).map(function (m) { return m.key; });
    return ['glock'];
  }
  /* BORN IN THIS SESSION, AND KEPT APART: history's states read WF_ROLLS by
     position, so a roll put in front of it would move every row they name. */
  var BORN = [];
  function stOf(k) {
    var o = openKeys().filter(function (x) { return x.key === k; })[0], b = o ? o.base : k, st = OPEN_ST[b];
    if (st === null || st === undefined) return st;
    return st * (o ? WF_CASES[o.c || 'ironbound'][1] : WF_CASES[caseKey()][1]) / 12.40;
  }
  function openKeys() { var o = []; (WF_SESS.get('opens') || []).forEach(function (x) { o = o.concat(x.keys); }); return o; }
  openKeys().forEach(function (k, i) {
    var b = ROUNDS[k.base]; if (!b || ROUNDS[k.key]) return;
    var r = JSON.parse(JSON.stringify(b)), cr = WF_CASES[k.c || 'ironbound'], q = cr[1] / 12.40;
    r.at = OPEN_AT; r.hash = hx(k.key + 'h', 64); r.seed = hx(k.key + 's', 64); r.kase = cr[0];
    if (q !== 1) { r.won = (parseFloat(r.won) * q).toFixed(2); r.now = (parseFloat(r.now) * q).toFixed(2); }
    r.nonce = String(41221 + i).replace(/(\d)(\d{3})$/, '$1 $2');
    ROUNDS[k.key] = r;
    var ch = ''; CASE_ITEMS.forEach(function (g) { g[2].forEach(function (x) { if (x[0] === r.w && x[1] === r.s) ch = parseFloat(x[3]).toFixed(2) + '%'; }); });
    var how = (WF_SESS.get('gone') || {})[k.key];
    BORN.unshift({ key: k.key, when: '21 Aug 09:31', date: '21 Aug 2026', kase: cr[0] + ' Case', w: r.w, s: r.s, wear: r.axes[0], cost: cr[1].toFixed(2), worth: r.won, chance: ch,
      hash: r.hash.slice(0, 8), state: how === 'sold' || how === 'cashed' ? 'sold' : how === 'sent' ? 'sending' : 'held', went: how ? '21 Aug' : undefined, born: true });
  });

  /* EACH HASH OF A MULTI-ROLL OPEN IS ITS OWN, with its own copy. */
  function renderHashes() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-hashes]'), function (box) {
      var keys = box.getAttribute('data-hashes').split(' ');
      Array.prototype.forEach.call(box.querySelectorAll('.wf-hash-v, [data-copy]'), function (x) { x.remove(); });
      var list = el('span', 'wf-hash-list');
      keys.forEach(function (k) {
        var h = ROUNDS[k].hash, row = el('span', 'wf-hash-one');
        row.appendChild(el('span', 'wf-hash-v', h.slice(0, 6) + '\u2026' + h.slice(-6)));
        var c = el('button', 'wf-btn wf-btn--small', WF_STR.copy); c.type = 'button'; c.setAttribute('data-copy', h);
        row.appendChild(c); list.appendChild(row);
      });
      box.appendChild(list);
    });
  }

  FEED.forEach(function (f, i) {
    var k = f[5];
    if (!k || ROUNDS[k]) return;
    var hitRow = null, tier = '';
    if (f[2] === 'Ironbound') CASE_ITEMS.forEach(function (g) { g[2].forEach(function (it) { if (it[0] === f[0] && it[1] === f[1]) { hitRow = it; tier = g[0]; } }); });
    var won = hitRow ? hitRow[4] : f[7];
    var range = hitRow ? hitRow[5] : 'the range its case publishes';
    var lo = hitRow ? parseInt(range.split(' to ')[0].replace(/\s/g, ''), 10) : 1000;
    var hi = hitRow ? parseInt(range.split(' to ')[1].replace(/\s/g, ''), 10) : 99999;
    var t = lo + (i * 7919) % (hi - lo + 1);
    ROUNDS[k] = { w: f[0], s: f[1], axes: hitRow ? hitRow[2].split(' \u00b7 ').concat(tier) : f[6], won: won, now: won,
      at: '21 Aug 2026 09:' + String(30 - i * 2).padStart(2, '0'), hash: hx(k + 'h', 64), seed: hx(k + 's', 64),
      client: '7d19f4a2', nonce: String(42100 + i).replace(/(\d)(\d{3})$/, '$1 $2'),
      ticket: String(t).replace(/(\d)(\d{3})$/, '$1 $2'), range: range, kase: f[2] };
  });

  /* FOUR STATES, AND THE FOURTH IS THE ONE THE FOUNDER'S CAPTURE SHOWS, D-108.
     The baseline's ribbon reads SOLD on most cards and PENDING on one, and
     PENDING IS A WITHDRAWAL IN FLIGHT: the item has left and Steam has not taken
     it yet. Node 5.9 section 0 names three states, held, sold back, withdrawn,
     AND THE WITHDRAWAL LEDGER ALREADY HAD FOUR: with Steam, accepted, cancelled,
     held while restricted. An item with a row reading "With Steam" was rendering
     as held on the roll, which is the product telling a person an item is theirs
     to spend while it is halfway to somebody else. */
  var ITEM_STATE = {
    held:      'Still held',
    sending:   'Sending to Steam',
    sold:      'Sold back',
    withdrawn: 'Sent to Steam'
  };

  var HIST_TABS = [
    /* ROLLS FIRST, D-128. History opens on history.html, which is the rolls,
       and the baseline opens on its first tab. The node's subject is roll
       history, so the tab that opens is the first one rather than the second. */
    { key: 'rolls',       label: WF_STR.rolls,  file: 'history.html' },
    { key: 'items',       label: 'Items',       file: 'history-items.html' },
    { key: 'deposits',    label: 'Deposits',    file: 'history-deposits.html' },
    { key: 'withdrawals', label: 'Withdrawals', file: 'history-withdrawals.html' },
    { key: 'cashout',     label: 'Cash out',    file: 'history-cashout.html' }
  ];

  var HIST_COLS = {
    deposits: [
      { k: 'when',   h: 'When',              mono: true, num: true },
      { k: 'amount', h: 'Credited',          mono: true, num: true },
      { k: 'method', h: 'Method' },
      { k: 'state',  h: 'State',             state: true },
      { k: 'ours',   h: 'Our reference',     mono: true },
      { k: 'theirs', h: 'Payment reference', mono: true }
    ],
    withdrawals: [
      { k: 'when',  h: 'When',           mono: true, num: true },
      { k: 'what',  h: 'What' },
      { k: 'worth', h: 'Worth then',     mono: true, num: true },
      { k: 'state', h: 'State',          state: true },
      { k: 'wait',  h: 'Waiting on',     },
      { k: 'ours',  h: 'Our reference',  mono: true }
    ],
    /* THE FOURTH TAB HAS A SUBJECT SINCE D-93, and the subject was named on this
       very page before it had one: selling an item back for coins, which is in
       round 1 since D-38 and which had no ledger anywhere in the product. The
       roll row carries a "Sold back" mark and that is a fact about the roll, not
       a record of the sale.
       NO STATE COLUMN, DELIBERATELY. A sell back completes or it does not
       happen: there is no waiting party and no stage, so a column carrying one
       value on every row is a picture of a column. Deposits and withdrawals have
       one because both of them wait.
       CREDITED IS OUR PRICE AT THAT MOMENT AND THE COLUMN SAYS SO. D-91: inside
       the coin economy the win value and the sell back value are the same
       object, so this number is consistent with the roll. What it is not is what
       a real copy would have cost, and the note under the bar carries that. */
    /* REWRITTEN 2 SEPTEMBER 2026 BY D-118, and the tab's subject changed under
       it. Founder: "в истории нужно это отметить, там есть реквест, мы типа
       подтверждаем или блокируем, поэтому надо учесть это все в истории: дата,
       сеть, кошелек, сумма, статус (как на бирже)."
       SO THE COLUMNS ARE HIS FIVE PLUS THE ONE THING AN EXCHANGE ROW HAS THAT
       HIS LIST ASSUMES: what was sold to make the money. A payout row with no
       subject cannot be tied back to an item, and this whole ledger exists
       because a Sold back mark on a roll is a fact about the roll rather than a
       record of the sale, D-93.
       THE STATE COLUMN IS BACK AND D-93 REMOVED IT ON A PREMISE THAT IS NOW
       FALSE. Its ground was that a sell back completes or does not happen, so
       there is no waiting party and no stage, and a column carrying one value on
       every row is a picture of a column. A CRYPTO PAYOUT WAITS TWICE: on us
       reviewing it, and on the chain. Four states, and the ground travels with
       the state in the same cell, B8-3.
       THE WALLET IS TRUNCATED IN THE CELL AND WHOLE IN THE SOURCE. An address is
       forty characters of hex and a table that renders it in full is a table
       nobody can read a row of. It is crawlable text, never an image, the same
       rule 5.9 section 7 states for a hash. */
    cashout: [
      { k: 'when',   h: 'When',            mono: true, num: true },
      { k: 'what',   h: 'What you sold' },
      { k: 'net',    h: 'Network' },
      { k: 'wallet', h: 'Wallet',          mono: true },
      { k: 'amount', h: 'Amount',          mono: true, num: true },
      { k: 'state',  h: 'State',           state: true }
    ]
  };

  /* THE COUNT AGREES WITH ITS NOUN. "1 sales" shipped on the sell back ledger
     the moment it had exactly one row, and the same defect was latent on the two
     older tabs waiting for a one-row account. The unit is passed in plural and
     the singular is the plural minus its s, which holds for payments, sales and
     withdrawals and is checked here rather than assumed for the next one. */
  function histBar(name, count, unit) {
    var bar = el('div', 'wf-lbar');
    bar.appendChild(el('h2', 'wf-lbar-h', name));
    var word = (count === 1 && unit.charAt(unit.length - 1) === 's')
      ? unit.slice(0, -1) : unit;
    bar.appendChild(el('span', 'wf-fig-c', count + ' ' + word));
    return bar;
  }

  function histTable(kind, rows) {
    var cols = HIST_COLS[kind];
    var wrap = el('div', 'wf-tablewrap');
    var t = el('table', 'wf-table wf-htable');
    var thead = el('thead'), tr = el('tr');
    cols.forEach(function (c) {
      var th = el('th', null, c.h);
      th.setAttribute('scope', 'col');
      tr.appendChild(th);
    });
    thead.appendChild(tr); t.appendChild(thead);
    var tb = el('tbody');
    rows.forEach(function (r) {
      var row = el('tr');
      cols.forEach(function (c) {
        var td = el('td', c.mono ? ('wf-htx' + (c.num ? ' wf-hnum' : '')) : (c.state ? 'wf-hstate' : 'wf-tprose'));
        td.setAttribute('data-l', c.h);
        td.appendChild(document.createTextNode(r[c.k] == null ? '' : r[c.k]));
        /* THE REASON TRAVELS WITH THE STATE AND NEVER SITS IN A TOOLTIP. B8-3
           is three accounts refused with no explanation, and a refusal whose
           ground is only in a hover is a refusal with no ground on a phone. */
        /* A PUBLISHED TIME IN A REASON IS READ FROM WF_PUB, round 16, D1-8. */
        if (c.state && r.why) td.appendChild(el('span', 'wf-hnote', r.why.replace(/\{(median|p90)\}/g, function (m, k) { return WF_PUB[k]; })));
        /* A ROW THAT HAS A RECORD OPENS IT, round 16, B2-23: the expired offer's
           page, the one place it can be sent again, had no way in from here. */
        if (c.state && r.rec) { var ra = el('a', 'wf-hnote', 'Open the record'); ra.setAttribute('href', BASE + r.rec); td.appendChild(ra); }
        row.appendChild(td);
      });
      tb.appendChild(row);
    });
    t.appendChild(tb); wrap.appendChild(t);
    return wrap;
  }

  function histEmpty(h, p, href, label) {
    var e = el('div', 'wf-empty');
    e.appendChild(el('h3', 'wf-empty-h', h));
    e.appendChild(el('p', 'wf-empty-p', p));
    if (href) {
      var row = el('div', 'wf-row');
      var a = el('a', 'wf-btn', label);
      a.setAttribute('href', BASE + href);
      row.appendChild(a);
      e.appendChild(row);
    }
    return e;
  }

  /* THE BLOCK THAT GOES UNDER A SET, D-107. Founder, on three screens in one
     sitting: the rows are the subject and the paragraphs above them are a wall.
     Each fact keeps its wording and gains a label, so the block is scanned for
     the one fact wanted rather than read from the top. */
  function afterBlock(items) {
    var box = el('div', 'wf-after');
    items.forEach(function (it) {
      var cell = el('div', 'wf-after-i' + (it.wide ? ' wf-after-i--wide' : ''));
      cell.appendChild(el('span', 'wf-after-k', it.k));
      cell.appendChild(el('p', 'wf-after-v', it.v));
      box.appendChild(cell);
    });
    return box;
  }

  /* THE ITEM CARD, D-108. The baseline's ribbon is a colour band and colour does
     not exist until stage 07, so the status is a labelled line at the top of the
     card with a rule under it: the first thing read, which is what the ribbon is
     for. THREE STATES AND HELD IS A WORD. On the Rolls tab held is silence, an
     item that has gone gets a line and one that has not gets nothing, so a
     person cannot tell "still here" from "nobody wrote it down". */
  function itemCard(r) {
    var card = el('article', 'wf-plr-card wf-itemcard is-' + r.state);
    var st = el('span', 'wf-itemcard-st', ITEM_STATE[r.state] + (r.went ? ', ' + r.went : ''));
    card.appendChild(st);
    card.appendChild(el('span', 'wf-inv-art'));
    card.lastChild.setAttribute('aria-hidden', 'true');
    card.appendChild(el('p', 'wf-inv-w', r.w));
    card.appendChild(el('p', 'wf-inv-s', r.s));
    card.appendChild(el('p', 'wf-inv-wear', '(' + r.wear + ')'));
    card.appendChild(el('p', 'wf-inv-p', r.worth + ' coins'));
    card.appendChild(el('span', 'wf-itemcard-k', 'Worth when won'));
    var meta = el('div', 'wf-plr-meta');
    var a = el('span'); a.appendChild(document.createTextNode('From'));
    a.appendChild(el('b', null, r.kase.replace(' Case', '')));
    var bq = el('span'); bq.appendChild(document.createTextNode('Won'));
    bq.appendChild(el('b', null, r.date));
    meta.appendChild(a); meta.appendChild(bq);
    card.appendChild(meta);
    var acts = el('div', 'wf-plr-check');
    var link = el('a', 'wf-btn wf-btn--small', r.hash ? WF_STR.checkRound : 'No proof to check');
    if (r.hash) { link.setAttribute('href', BASE + 'result.html' + (r.key && r.key !== 'ak' ? '?round=' + r.key : '')); }
    /* A STRANGER IS NOT SENT INTO SOMEONE'S HISTORY, round 16, B1-14: on a
       public profile the link opened the owner's private history state. There
       it opens the public reason a round may have no proof. */
    else { link.setAttribute('href', BASE + (/(^|\/)player/.test(location.pathname) ? 'fair.html#h2-how' : 'history-no-seed.html')); }
    acts.appendChild(link);
    card.appendChild(acts);
    return card;
  }

  /* ---------------------------------------------------------------------
     THE ROLL ROW, ONE RENDERER FOR FOUR PAGES, D-117. Founder: "очень много
     инфи, особенно текстово. Я бы сделал иконку откуда (режим), потом скин с
     ценой и шансом, потом Roll ID с чек ит и публик пейджа."
     THE ROWS WERE FOURTEEN HAND COPIES AND THEY HAD ALREADY DRIFTED. D-90
     corrected two entry costs that read 2.40 and 1.10 against a catalogue
     pricing those cases at 12.40 and 31.00, and the correction landed on
     history.html only: the other three pages of this node still carried the
     wrong figures a fortnight later. A page listing 2.40 next to a page listing
     12.40 for the same roll is the drift D-108 named on the wear and the reason
     the five rolls were declared once. The rows are the last hand copy of them
     and they stop being one here.
     THE PAGE DECLARES WHICH ROLLS AND WHAT PROOF EACH ONE CARRIES. Four states
     of this node differ in exactly that and in nothing else, so that is the whole
     of what a host says. The unfinished state adds a roll of its own, read off
     3.7 and not held in the five, and it passes it inline rather than joining a
     set the Items tab also renders.
     --------------------------------------------------------------------- */
  var ROLL_PROOF = {
    unreadable: 'The proof source could not be read just now. This is not the same as never having been kept: the roll still has its material and we cannot reach it this minute.',
    noseed:     'No seed or nonce was kept for this roll, so there is nothing here to check. The roll is real and its record is complete. The proof is not.',
    mismatch:   'Our own recomputation of this round does not match what we published. Reported automatically, with the round attached.'
  };

  function rollRow(r, o) {
    o = o || {};
    var row = el('div', o.bad ? 'wf-roll wf-roll--bad' : 'wf-roll');
    row.setAttribute('data-kase', r.kase); row.setAttribute('data-state', r.state || ''); row.setAttribute('data-when', r.when || '');

    /* CELL 1. THE MODE MARK CARRIES ITS NAME FOR A SCREEN READER AND SHOWS NO
       WORD, because the whole reason it is an icon is that the word was the
       text being cut. The case name beside it is the destination and stays a
       link. */
    var from = el('div', 'wf-roll-from');
    var mode = el('span', 'wf-roll-mode');
    mode.setAttribute('role', 'img');
    mode.setAttribute('aria-label', 'Mode: Cases');
    mode.setAttribute('title', WF_STR.cases);
    from.appendChild(mode);
    var kase = el('a', 'wf-roll-case', r.kase);
    kase.href = BASE + caseHref(r.kase, false);
    from.appendChild(kase);
    /* THE ENTRY COST BELONGS TO THE CASE AND IT NOW SITS UNDER THE CASE, D-120.
       It was in the skin's cell, labelled Cost, next to the skin's own Worth, so
       the row read "this skin cost 12.40 and is worth 22.15", which is a
       contradiction about one object rather than two facts about two. THE NUMBER
       DID NOT NEED A BETTER LABEL, IT NEEDED THE RIGHT CELL. Under the case name
       it needs no label at all beyond what it does: coins to open. */
    from.appendChild(el('span', 'wf-roll-cost', r.cost + ' coins to open'));
    from.appendChild(el('span', 'wf-roll-when', r.when));
    row.appendChild(from);

    /* CELL 2. THE SKIN, AND THE TWO FIGURES THAT ARE ABOUT THE SKIN. What it was
       worth, and how likely it was. The third figure is about the case and it
       has gone to the case, D-120. All three are still on the row: none was
       dropped, one was moved to the thing it describes. */
    var item = el('div', 'wf-roll-item');
    var art = el('span', 'wf-roll-art');
    art.setAttribute('aria-hidden', 'true');
    item.appendChild(art);
    var name = el('span', 'wf-roll-name');
    name.appendChild(el('span', 'wf-roll-w', r.w));
    name.appendChild(el('span', 'wf-roll-s', r.s + ' \u00b7 ' + r.wear));
    /* HELD IS SILENCE AND EVERY OTHER STATE PRINTS, which is the rule this node
       has carried since D-108, and an item in flight is not an item that has
       gone. The unfinished state overrides the line rather than adding a fifth
       state, because what stopped part way is the open and not the item. */
    if (o.note) {
      name.appendChild(el('span', 'wf-roll-gone', o.note));
    } else if (r.state === 'sending') {
      name.appendChild(el('span', 'wf-roll-flight', 'Sending to Steam, ' + r.went));
    } else if (r.state === 'sold') {
      name.appendChild(el('span', 'wf-roll-gone', 'Sold back, ' + r.went));
    } else if (r.state === 'withdrawn') {
      name.appendChild(el('span', 'wf-roll-gone', 'Withdrawn to Steam, ' + r.went));
    }
    /* EVERY FIGURE NAMES ITS OWN SUBJECT, D-120, and this is the third build of
       this strip in one day. It shipped as Cost / Worth / Chance, the founder
       asked what the numbers meant, it was rebuilt as Cost then / Worth when won
       / Chance then, and HE ASKED THE SAME QUESTION AGAIN.
       THE FIRST ANSWER WAS WRONG ABOUT WHY. Both forms labelled the TENSE of each
       figure and neither labelled its SUBJECT: cost of what, worth of what,
       chance of what. Adding "then" dated a number nobody could identify.
       SO THE LABELS SAY WHAT EACH NUMBER IS ABOUT. Worth is the skin's, in the
       skin's cell, and it needs no more than its unit now that the case's cost
       has left. Chance says which chance it is: this skin, out of this case, not
       a rarity band and not a case average.
       AND IT IS SHORTER THAN WHAT IT REPLACES. The strip in this cell went from
       66 characters to 44, because the third figure moved to the cell it was
       always about. */
    var figs = el('span', 'wf-roll-figs');
    var fWorth = el('span', 'wf-roll-f');
    fWorth.appendChild(el('span', 'wf-roll-k', 'Worth'));
    fWorth.appendChild(el('b', 'wf-roll-v', r.worth + ' coins'));
    figs.appendChild(fWorth);
    /* THE CHANCE PUTS ITS FIGURE FIRST AND ITS SUBJECT AFTER, because the subject
       is the long half and a person scanning a column of rows is scanning the
       numbers. */
    var fCh = el('span', 'wf-roll-f');
    fCh.appendChild(el('b', 'wf-roll-v', r.chance));
    fCh.appendChild(el('span', 'wf-roll-k', 'chance of this skin'));
    figs.appendChild(fCh);
    name.appendChild(figs);
    item.appendChild(name);
    row.appendChild(item);

    /* CELL 3. THE ROLL ID AND THE TWO THINGS THAT OPEN FROM IT. A row with no
       proof says what is missing in place of the chip and the controls, and it
       never renders a dead Check it: D-58, a control that does not do its thing
       is a picture of one. */
    var proof = el('div', 'wf-roll-proof');
    var hash = o.hash || r.hash;
    // A ROLL WITH NO PROOF NEVER OFFERS ONE, round 15: the sold P250 has no hash
    // and its Check it opened the AK's round.
    var kind = o.proof || (hash ? 'ok' : 'noseed');
    if (hash && kind !== 'noseed') proof.appendChild(el('span', 'wf-roll-hash', hash));
    if (kind === 'ok') {
      var check = el('a', 'wf-btn wf-btn--small', 'Check it');
      var q = r.key && r.key !== 'ak' ? '?round=' + r.key : '';
      check.href = BASE + 'fair-prefilled.html' + q;
      var pub = el('a', 'wf-btn wf-btn--small', 'Public page');
      pub.href = BASE + 'result.html' + q;
      proof.appendChild(check);
      proof.appendChild(pub);
    } else {
      proof.appendChild(el('span', 'wf-fig-missing', ROLL_PROOF[kind]));
      if (kind === 'mismatch') {
        var tick = el('a', 'wf-btn wf-btn--small', 'The ticket');
        tick.href = BASE + 'support-submitted.html?r=' + r.key;
        proof.appendChild(tick);
      }
    }
    row.appendChild(proof);
    return row;
  }

  function mountRolls() {
    var host = document.querySelector('[data-roll-list]');
    if (!host) return;
    /* The rolls this session opened come first on the history itself; its
       states are snapshots and keep their own rows. */
    if (/(^|\/)history\.html$/.test(location.pathname)) BORN.forEach(function (r) { host.appendChild(rollRow(r, {})); });
    (window.WF_ROLLLIST || []).forEach(function (o) {
      var r = o.roll || WF_ROLLS[o.i];
      if (r) host.appendChild(rollRow(r, o));
    });
    var c0 = document.querySelector('#h2-rolls + .wf-fig-c'), n0 = host.querySelectorAll('.wf-roll').length;
    if (c0 && BORN.length) c0.textContent = n0 + ' rolls';
    /* THE THREE FILTERS FILTER, round 14: they were buttons with no handler.
       Case and date step through their values; Still held toggles. The clock is
       the prototype's now, 21 Aug 2026 09:31. */
    var F = { kase: 0, date: 0, held: false };
    var cases = [WF_STR.allCases].concat(Array.prototype.map.call(host.querySelectorAll('.wf-roll'), function (x) { return x.getAttribute('data-kase'); })
      .filter(function (v, i, a) { return a.indexOf(v) === i; }));
    var dates = [['Any date', 1e9], ['Last 24 hours', 24], ['Last 7 days', 168]];
    function hoursAgo(w) {
      var m = /(\d+) Aug (\d+):(\d+)/.exec(w); if (!m) return 0;
      return (21 * 24 + 9 + 31 / 60) - (parseInt(m[1], 10) * 24 + parseInt(m[2], 10) + parseInt(m[3], 10) / 60);
    }
    function apply() {
      var n = 0;
      Array.prototype.forEach.call(host.querySelectorAll('.wf-roll'), function (x) {
        var ok = (!F.kase || x.getAttribute('data-kase') === cases[F.kase]) &&
                 hoursAgo(x.getAttribute('data-when')) <= dates[F.date][1] &&
                 (!F.held || x.getAttribute('data-state') === 'held');
        x.hidden = !ok; if (ok) n++;
      });
      var c = document.querySelector('#h2-rolls + .wf-fig-c');
      if (c) c.textContent = n + (n === 1 ? ' roll' : ' rolls');
    }
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-hf]');
      if (!b) return;
      var k = b.getAttribute('data-hf');
      if (k === 'case') { F.kase = (F.kase + 1) % cases.length; b.textContent = cases[F.kase].replace(' Case', ''); if (!F.kase) b.textContent = WF_STR.allCases; }
      if (k === 'date') { F.date = (F.date + 1) % dates.length; b.textContent = dates[F.date][0]; }
      if (k === 'held') { F.held = !F.held; b.setAttribute('aria-pressed', F.held ? 'true' : 'false'); }
      apply();
    });
    // THE COUNT IS THE ROWS, round 15: three state pages printed 212 by hand.
    apply();
  }

  /* ---------------------------------------------------------------------
     THE WITHDRAWAL BASKET, D-112. Founder, correcting the build: "не понимаю
     как ми так определяем что нужно показать именно 4 скина и по этой цене.
     По идее у нас есть скин у юзера, он решил вывести на свой стим, значит он
     видит все предложения актуальные на маркете, и цена их, это от самого
     дешевого до самого дорогого."
     SO THE STRIP IS A MARKET AND NOT A SAMPLE. Four at one price was this
     build's own invention, taken from a walk that happened to catch six
     identical offers on one skin, and generalised into a rule the founder never
     gave. What a person opens this for is the whole shelf for their skin,
     CHEAPEST FIRST, and the cheapest is preselected because it is the one that
     costs them least, not because it is the only one.
     PRICES DIFFER, SO THE CHOICE MOVES MONEY. That is the whole reason this
     block is live rather than drawn: picking the fourth copy instead of the
     first changes one row of the settlement and the total under it, and a
     picture of that teaches nothing.
     THE FILTERS ARE THE FOUNDER'S TWO AND NOT THE BASELINE'S THREE. He asked
     for float from and to, and stickers or not, and said in the same breath he
     does not know what the search is for. A search over a shelf of one skin
     searches nothing that is not already on the card.
     --------------------------------------------------------------------- */
  function wdFmt(n) { return (Math.round(n * 100) / 100).toFixed(2); }

  /* THE STEAM LISTING IS A SAMPLE, D-128 BY D-124. It was [?] on the card and on
     every offer badge. The baseline prints both, its badge as a percentage under
     Steam. Drawn from the row's own figure where the page gives one, and
     otherwise as the cheapest copy plus twelve percent, which is only a sample:
     the real listing and its source stay open items in withdrawal.md. */
  function wdSteam(row) {
    if (row.steam) return row.steam;
    var lo = row.offers.length ? Math.min.apply(null, row.offers.map(function (o) { return o.p; })) : row.ours;
    return Math.round(lo * 112) / 100;
  }

  function wdOfferCard(row, o, i) {
    var lab = el('label', 'wf-off');
    var r = el('input', 'wf-off-r');
    r.type = 'radio'; r.name = 'off-' + row.id; r.value = String(i);
    if (i === row.pick) r.checked = true;
    lab.appendChild(r);
    var pct = Math.round((o.p / wdSteam(row) - 1) * 100);
    lab.appendChild(el('span', 'wf-off-badge', (pct > 0 ? '+' : '') + pct + '% vs Steam'));
    var art = el('span', 'wf-off-art'); art.setAttribute('aria-hidden', 'true');
    lab.appendChild(art);
    /* THE STICKER ROW IS A FIELD 0.6 DOES NOT HAVE, and it is drawn either way
       because the founder filters on it: a filter over an attribute the card
       does not show is a filter whose result cannot be read. */
    lab.appendChild(el('span', 'wf-off-stk' + (o.stk ? '' : ' wf-fig-missing'), o.stk ? o.stk + ' stickers' : 'no stickers'));
    lab.appendChild(el('span', 'wf-off-f', o.f.toFixed(7)));
    var bar = el('span', 'wf-wear'); bar.setAttribute('aria-hidden', 'true');
    var mk = el('span', 'wf-wear-m'); mk.style.left = Math.round(o.f * 100) + '%';
    bar.appendChild(mk); lab.appendChild(bar);
    lab.appendChild(el('span', 'wf-off-p', wdFmt(o.p)));
    return lab;
  }

  function wdRow(row) {
    var box = el('div', 'wf-wrow' + (row.offers.length ? '' : ' is-nomarket'));
    box.setAttribute('data-wd-row', row.id);

    var sel = el('div', 'wf-selskin');
    sel.appendChild(el('span', 'wf-selskin-h', 'Selected skin'));
    var sa = el('span', 'wf-selskin-art'); sa.setAttribute('aria-hidden', 'true');
    sel.appendChild(sa);
    var n = el('span', 'wf-selskin-n');
    n.appendChild(el('b', null, row.w + ' ' + row.s));
    n.appendChild(el('span', null, '(' + row.wear + ')'));
    sel.appendChild(n);
    var pr = el('div', 'wf-selskin-p');
    var p1 = el('span'); p1.appendChild(el('b', null, wdFmt(row.ours))); p1.appendChild(document.createTextNode('Our price for it'));
    var p2 = el('span'); p2.appendChild(el('b', null, wdFmt(wdSteam(row)))); p2.appendChild(document.createTextNode('The Steam listing'));
    pr.appendChild(p1); pr.appendChild(p2);
    sel.appendChild(pr);
    var rm = el('button', 'wf-btn wf-btn--small', 'Remove');
    rm.type = 'button';
    rm.setAttribute('data-wd-remove', '');
    rm.appendChild(el('span', 'wf-vh', ' ' + row.w + ' ' + row.s));
    sel.appendChild(rm);
    box.appendChild(sel);

    var right = el('div', 'wf-offs-b');
    var head = el('div', 'wf-offs-h');
    head.appendChild(el('span', 'wf-offs-t', 'Market offers'));
    head.appendChild(el('span', 'wf-fig-c', '', 'wd-count'));
    right.appendChild(head);

    if (!row.offers.length) {
      head.lastChild.className = 'wf-fig-c wf-fig-missing';
      head.lastChild.textContent = 'Nobody is offering one';
      var e = el('div', 'wf-empty');
      e.appendChild(el('p', 'wf-empty-h', 'There is no copy of this to buy'));
      e.appendChild(el('p', 'wf-empty-p', 'Sending a skin out means buying a real copy of it, and right now there is none on sale at any price. It cannot go to Steam today.'));
      e.appendChild(el('p', 'wf-empty-p', 'What still works is selling it back to us for its value, which is our price for it and not a market price, so no copy has to exist for it to happen.'));
      var row2 = el('div', 'wf-row');
      var sb = el('button', 'wf-btn', 'Sell it back for ' + wdFmt(row.ours) + ' coins'); sb.type = 'button';
      /* THE SALE MOVES THE MONEY AND LEAVES THE SUM, round 15: it printed Sold
         over a settlement and a header that did not change. */
      sb.addEventListener('click', function () {
        if (!confirmFirst(sb)) return;
        sb.textContent = 'Sold, +' + wdFmt(row.ours) + ' coins'; sb.disabled = true;
        var sh0 = sel.querySelector('.wf-selskin-h'); if (sh0) sh0.textContent = 'Sold back';
        moneyAdd(row.ours, -row.ours); row.removed = true; WF_SESS.gone(row.key || wdKeys()[0], 'sold');
        if (row._repaint) row._repaint();
      });
      var kp = el('a', 'wf-btn', 'Keep it and go back'); kp.setAttribute('href', BASE + 'account.html');
      row2.appendChild(sb); row2.appendChild(kp);
      e.appendChild(row2);
      right.appendChild(e);
      box.appendChild(right);
      return box;
    }

    /* THE TWO FILTERS ARE LIVE, D-58. A range that does not narrow a shelf is a
       picture of a range, and this one narrows it on every input event. */
    var f = el('div', 'wf-offilt');
    var fl = el('label', 'wf-offilt-i');
    fl.appendChild(el('span', 'wf-fig-c', 'Float from'));
    var lo = el('input', 'wf-offilt-r'); lo.type = 'range'; lo.min = '0'; lo.max = '1'; lo.step = '0.01'; lo.value = '0';
    fl.appendChild(lo);
    var loV = el('span', 'wf-offilt-v', '0.00'); fl.appendChild(loV);
    var fh = el('label', 'wf-offilt-i');
    fh.appendChild(el('span', 'wf-fig-c', 'to'));
    var hi = el('input', 'wf-offilt-r'); hi.type = 'range'; hi.min = '0'; hi.max = '1'; hi.step = '0.01'; hi.value = '1';
    fh.appendChild(hi);
    var hiV = el('span', 'wf-offilt-v', '1.00'); fh.appendChild(hiV);
    var fs = el('label', 'wf-offilt-i');
    fs.appendChild(el('span', 'wf-fig-c', 'Stickers'));
    var stk = el('select', 'wf-f wf-offilt-s');
    ['Any', 'With stickers', 'Without'].forEach(function (t) { stk.appendChild(el('option', null, t)); });
    fs.appendChild(stk);
    f.appendChild(fl); f.appendChild(fh); f.appendChild(fs);
    right.appendChild(f);

    var strip = el('div', 'wf-offs');
    row.offers.forEach(function (o, i) { strip.appendChild(wdOfferCard(row, o, i)); });
    right.appendChild(strip);

    var say = el('p', 'wf-fig-c wf-offs-say');
    right.appendChild(say);
    box.appendChild(right);

    row._el = { strip: strip, count: head.lastChild, say: say, lo: lo, hi: hi, loV: loV, hiV: hiV, stk: stk };
    return box;
  }

  /* THE SHELF FOR EVERY ITEM 5.1 HOLDS, ONCE, round 15, D-143. The basket lived
     as two hand copies in withdraw.html and withdraw-many.html, and Send to Steam
     on five of the six cards opened the AK's, because only the AK had a shelf on
     the single page. A page names the keys it starts with; ?item= and ?items=
     carry the selection from 5.1. Samples by D-124, marked in 5.3; the AWP's
     shelf is new with this record. */
  var WF_SHELF = {
    wak: { w: 'AK-47', s: 'Redline', wear: 'Field-Tested', ours: 21.40, total: 412, offers: [
      { p: 18.90, f: 0.2544283, stk: 5 },
      { p: 19.61, f: 0.3438201, stk: 0 },
      { p: 19.99, f: 0.2676437, stk: 0 },
      { p: 20.26, f: 0.2213551, stk: 0 },
      { p: 21.08, f: 0.3516645, stk: 0 },
      { p: 21.97, f: 0.2419475, stk: 5 },
      { p: 22.94, f: 0.2906549, stk: 0 },
      { p: 23.87, f: 0.3386378, stk: 0 },
      { p: 24.09, f: 0.1962262, stk: 0 }
    ] },
    uspc: { w: 'USP-S', s: 'Cortex', wear: 'Minimal Wear', ours: 7.35, total: 903, offers: [
      { p: 6.05, f: 0.1429911, stk: 0 },
      { p: 6.50, f: 0.1181423, stk: 5 },
      { p: 6.88, f: 0.0826826, stk: 3 },
      { p: 8.02, f: 0.0797353, stk: 2 },
      { p: 9.37, f: 0.0970005, stk: 0 },
      { p: 10.69, f: 0.1233387, stk: 4 },
      { p: 11.73, f: 0.0774877, stk: 0 },
      { p: 12.62, f: 0.0963690, stk: 0 }
    ] },
    m4ft: { w: 'M4A1-S', s: 'Hyper Beast', wear: 'Field-Tested', ours: 29.90, total: 155, offers: [
      { p: 34.10, f: 0.2806129, stk: 0 },
      { p: 35.27, f: 0.2155586, stk: 0 },
      { p: 36.64, f: 0.3549544, stk: 3 },
      { p: 38.00, f: 0.2712751, stk: 5 },
      { p: 38.50, f: 0.3033878, stk: 0 },
      { p: 39.03, f: 0.2226556, stk: 5 },
      { p: 40.30, f: 0.3189648, stk: 4 }
    ] },
    deagle: { w: 'Desert Eagle', s: 'Blaze', wear: 'Minimal Wear', ours: 12.05, total: 74, offers: [
      { p: 13.60, f: 0.1034146, stk: 0 },
      { p: 13.97, f: 0.0902115, stk: 0 },
      { p: 14.40, f: 0.1149456, stk: 0 },
      { p: 14.75, f: 0.1109874, stk: 2 },
      { p: 15.77, f: 0.1012467, stk: 4 },
      { p: 16.88, f: 0.1222424, stk: 3 }
    ] },
    glockfn: { w: 'Glock-18', s: 'Water Elemental', wear: 'Factory New', ours: 4.20, total: 0, offers: [] },
    awp: { w: 'AWP', s: 'Asiimov', wear: 'Field-Tested', ours: 66.05, total: 230, offers: [
      { p: 61.20, f: 0.2214378, stk: 0 },
      { p: 62.75, f: 0.3011462, stk: 4 },
      { p: 64.10, f: 0.1893350, stk: 0 },
      { p: 66.90, f: 0.2650014, stk: 0 },
      { p: 69.40, f: 0.3377921, stk: 5 }
    ] }
  };
  /* THE OUTCOME'S ITEMS HAVE SHELVES, round 16, B1-6: Send to Steam on the
     outcome opened the AK, because the Glock and the multi-roll items had no
     row here. Each row is derived from the figure its outcome already prints:
     the copy costs the item's value less its Send figure, and an item with no
     Send figure has no copy on sale. Floats are samples, D-124, marked in 5.3.
     A round born in this session takes its base item's shelf. */
  Object.keys(OPEN_ST).forEach(function (k, i) {
    var R = ROUNDS[k]; if (!R || WF_SHELF[k]) return;
    var v = parseFloat(R.won), st = OPEN_ST[k], p0 = st === null ? 0 : v - st;
    WF_SHELF[k] = { w: R.w, s: R.s, wear: R.axes[0], ours: v, total: st === null ? 0 : 40 + i * 37, offers: st === null ? [] : [0, 0.04, 0.09].map(function (d, j) {
      return { p: Math.round(p0 * (1 + d) * 100) / 100, f: parseFloat((0.1 + ((i * 7 + j * 13) % 40) / 100 + 0.0004321).toFixed(7)), stk: 0 };
    }) };
  });
  openKeys().forEach(function (k) {
    var b = WF_SHELF[k.base], q = WF_CASES[k.c || 'ironbound'][1] / 12.40;
    if (!b || WF_SHELF[k.key]) return;
    var c = JSON.parse(JSON.stringify(b)); c.ours = Math.round(c.ours * q * 100) / 100;
    c.offers.forEach(function (o) { o.p = Math.round(o.p * q * 100) / 100; });
    WF_SHELF[k.key] = c;
  });
  function wdKeys() {
    var one = (/[?&]item=([a-z0-9]+)/.exec(location.search) || [])[1];
    var many = (/[?&]items=([a-z0-9,]+)/.exec(location.search) || [])[1];
    var ks = many ? many.split(',') : one ? [one] : (window.WF_WD_KEYS || []);
    return ks.filter(function (k) { return WF_SHELF[k]; });
  }

  /* THE CLOCK READS WHAT WAS STRUCK, round 15. Opened from a press it shows the
     items, the copies and the difference that press settled; opened from its
     address it shows its own sample, the AK at the cheapest copy. */
  /* SEND THE OFFER AGAIN RE-ENTERS THE OFFER STAGE, round 15, withdrawal.md and
     D-93: it re-strikes at the price of the day, the cheapest copy now. It was the
     main action of 5.8 with no listener. */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-wd-resend]');
    if (!b) return;
    var r = WF_SHELF[b.getAttribute('data-wd-resend')], o = r && r.offers[0];
    if (!o) return;
    /* AGAIN IS NOT A SECOND SETTLEMENT, round 16, D1-17 and D1-18: the clock
       credited the whole difference a second time, +2.50 over the 3.00 already
       added, and opened with the expired stretch gone. The press moves the
       balance by the difference between the two settlements, and the record's
       history travels to the clock. */
    var hist = document.querySelector('#h2-history') && document.querySelector('#h2-history').closest('.wf-stack').querySelector('.wf-clock-list');
    /* THE PRESS'S HAND-OFF LIVES IN WF_SESS, round 17, C3-2: a send is an act
       the session carries, and its record travels under the same roof. */
    try { WF_SESS.set('struck', [{ key: b.getAttribute('data-wd-resend'), w: r.w, s: r.s, wear: r.wear, ours: r.ours, p: o.p, f: o.f, prior: parseFloat(b.getAttribute('data-wd-prior') || '0'), hist: hist ? hist.innerHTML : '' }]); } catch (err) {}
    location.href = BASE + 'withdraw-clock.html';
  });

  function mountClockStruck() {
    var tbl = document.querySelector('[data-settle]');
    if (!tbl || !document.querySelector('.wf-held')) return;
    var st = null;
    st = WF_SESS.get('struck') || null; WF_SESS.set('struck');
    if (!st || !st.length) return;
    var tb = tbl.querySelector('tbody'); tb.innerHTML = '';
    var total = 0, ours = 0;
    st.forEach(function (r) {
      var d = r.ours - r.p; total += d; ours += r.ours;
      var tr = el('tr');
      [[r.w + ' ' + r.s + ', ' + r.wear, 'Skin name'], [wdFmt(r.ours), WF_STR.yourSkinPrice], [wdFmt(r.p), WF_STR.marketSkinPrice], [(d >= 0 ? '+' : '-') + wdFmt(Math.abs(d)), WF_STR.balanceImpact]].forEach(function (c) {
        var td = el('td', null, c[0]); td.setAttribute('data-l', c[1]); tr.appendChild(td);
      });
      tb.appendChild(tr);
    });
    var t = (total >= 0 ? '+' : '-') + wdFmt(Math.abs(total));
    var te = document.querySelector('[data-total]'); if (te) te.textContent = t + ' coins';
    var line = te && te.closest('.wf-stack') && te.closest('.wf-stack').querySelector('.wf-tl--sum + .wf-fig-c');
    if (line) line.innerHTML = 'Based on the market price, <strong>' + wdFmt(Math.abs(total)) + ' coins ' + (total >= 0 ? 'were added to your balance' : 'were taken from your balance') + '</strong> when you asked. Nothing further moves while this is in flight.';
    var fl = line && line.nextElementSibling;
    if (fl && st.length === 1) fl.innerHTML = 'The copy bought for you carries float <b>' + st[0].f.toFixed(7) + '</b>, ' + st[0].wear + '. Market price read 21 Aug 2026 09:31.';
    else if (fl) fl.textContent = 'Each copy bought for you is named by its float in the table above. Market prices read 21 Aug 2026 09:31.';
    var held = document.querySelector('.wf-held');
    if (st.length > 1) {
      held.querySelector('.wf-held-w').textContent = st.length + ' items';
      held.querySelector('.wf-held-s').textContent = st.map(function (r) { return r.w + ' ' + r.s; }).join(', ');
      var ax = held.querySelector('.wf-result-axes'); if (ax) ax.remove();
    } else {
      held.querySelector('.wf-held-w').textContent = st[0].w; held.querySelector('.wf-held-s').textContent = st[0].s;
      var ax1 = held.querySelector('.wf-result-axes'); if (ax1) ax1.innerHTML = '<span class="wf-axis">' + st[0].wear + '</span>';
    }
    var hv = held.querySelector('.wf-held-figs .wf-fig-v'); if (hv) hv.textContent = wdFmt(ours) + ' coins';
    /* The header follows the struck difference from the account's pair, and the
       press is an act the session carries, D-152: the base is the session's pair
       when one exists, else the account's, never this page's own sample. */
    if (!WF_SESS.get('money')) window.WF_SHELL.money = { balance: WF_MONEY.balance, held: WF_MONEY.held };
    var prior = st.reduce(function (a, r) { return a + (r.prior || 0); }, 0);
    moneyAdd(total - prior, -ours);
    if (prior && line) line.innerHTML = 'Settled again at today&#39;s price: ' + wdFmt(Math.abs(total)) + ' coins against the ' + wdFmt(prior) + ' added the first time, so <strong>' + wdFmt(Math.abs(total - prior)) + ' coins ' + (total - prior >= 0 ? 'were added to' : 'were taken from') + ' your balance</strong> when you asked. Nothing further moves while this is in flight.';
    var ck = document.querySelector('#h2-clock') && document.querySelector('#h2-clock').closest('.wf-stack');
    if (ck && st[0].hist) {
      var hs = el('div', 'wf-stack');
      hs.innerHTML = '<div class="wf-sec-head"><h2 id="h2-history">Everything this record has done</h2></div><ol class="wf-clock-list"></ol>';
      ck.parentNode.insertBefore(hs, ck.nextSibling);
    }
    var hl = document.querySelector('#h2-history') && document.querySelector('#h2-history').closest('.wf-stack').querySelector('.wf-clock-list');
    if (hl && st[0].hist) hl.innerHTML = st[0].hist + '<li class="wf-cs is-done"><span class="wf-cs-n">Offer sent again</span><span class="wf-cs-who">waiting on us</span><span class="wf-cs-t"><span class="wf-cs-e">0:00</span><span class="wf-cs-c">21 Aug 09:31</span></span></li>';
    st.forEach(function (r) { WF_SESS.gone(r.key, 'sent'); });
  }

  function mountWithdrawMany() {
    var host = document.querySelector('[data-wd-basket]');
    if (!host) return;
    var rows = wdKeys().map(function (k) { var c = JSON.parse(JSON.stringify(WF_SHELF[k])); c.key = k; return c; });
    if (!rows.length) return;
    rows.forEach(function (r, i) { r.id = 'r' + i; r.pick = r.offers.length ? 0 : -1; });
    /* WHAT ALREADY LEFT IS NOT OFFERED AGAIN, round 17, B2-1: an item the
       session had sent, sold or cashed out could be sent again and the money
       moved twice, down to a negative value held. */
    var GONE = WF_SESS.get('gone') || {}, HOW = { sent: 'is already on its way to Steam', sold: 'was sold back', cashed: 'was cashed out' };
    var left = rows.filter(function (r) { return GONE[r.key]; });
    if (left.length) {
      var gn = el('p', 'wf-refuse is-said');
      gn.textContent = left.map(function (r) { return r.w + ' ' + r.s + ' ' + HOW[GONE[r.key]]; }).join('; ') + ' in this session, so ' + (left.length > 1 ? 'they are' : 'it is') + ' not offered again.';
      host.parentNode.insertBefore(gn, host);
      left.forEach(function (r) { r.removed = true; r.pick = -1; });
    }

    rows.forEach(function (r) { if (!r.removed) host.appendChild(wdRow(r)); });

    var tbody = document.querySelector('[data-wd-rows]');
    var totalEl = document.querySelector('[data-wd-total]');
    var sayEl = document.querySelector('[data-wd-say]');
    var btnEl = document.querySelector('[data-wd-go]');

    function impact(r) { return r.pick < 0 ? null : r.ours - r.offers[r.pick].p; }

    function paint() {
      tbody.innerHTML = '';
      var total = 0, going = 0;
      rows.forEach(function (r) {
        if (r.removed) return;
        var tr = el('tr', r.pick < 0 ? 'is-blocked' : null);
        var c1 = el('td'); c1.setAttribute('data-l', 'Skin');
        var it = el('span', 'wf-st-item');
        var a = el('span', 'wf-st-art'); a.setAttribute('aria-hidden', 'true'); it.appendChild(a);
        var nn = el('span', 'wf-st-n');
        nn.appendChild(el('b', null, r.w + ' ' + r.s));
        nn.appendChild(el('span', null, r.wear + (r.pick >= 0 ? ', float ' + r.offers[r.pick].f.toFixed(7) : '')));
        it.appendChild(nn); c1.appendChild(it); tr.appendChild(c1);

        var c2 = el('td', null, wdFmt(r.ours)); c2.setAttribute('data-l', WF_STR.yourSkinPrice); tr.appendChild(c2);
        var c3 = el('td'); c3.setAttribute('data-l', WF_STR.marketSkinPrice);
        if (r.pick < 0) c3.appendChild(el('span', 'wf-fig-missing', 'Nobody is offering one'));
        else c3.appendChild(document.createTextNode(wdFmt(r.offers[r.pick].p)));
        tr.appendChild(c3);
        var c4 = el('td'); c4.setAttribute('data-l', WF_STR.balanceImpact);
        if (r.pick < 0) c4.appendChild(el('span', 'wf-fig-missing', 'Not going out'));
        else {
          var d = impact(r);
          total += d; going++;
          // ONE SIGN FOR ONE FIGURE, D-124. The row read "42.40 more" while the
          // total under it read "-42.40": two spellings of one number. The
          // baseline signs both, and so does this.
          c4.appendChild(document.createTextNode((d >= 0 ? '+' : '-') + wdFmt(Math.abs(d))));
        }
        tr.appendChild(c4);
        tbody.appendChild(tr);
      });
      /* A ROW WITH NO COPY IS NAMED BY THE NOTE ONLY WHILE IT IS IN THE BASKET,
         round 16, B2-19 and B2-20: the Glock's note stood when no Glock was
         picked, and a basket of only no-copy rows totalled +0.00. */
      var nc = document.querySelector('[data-wd-nocopy]'), ncRows = rows.filter(function (r) { return !r.removed && !r.offers.length; });
      if (nc) { nc.hidden = !ncRows.length; if (ncRows.length) nc.innerHTML = '<strong>' + ncRows.map(function (r) { return r.w + ' ' + r.s; }).join(' and ') + ' cannot go to Steam and ' + (ncRows.length > 1 ? 'they are' : 'it is') + ' not stuck.</strong> There is no copy on sale to buy, so there is nothing to send and nothing to settle against. <strong>Selling back to us pays our own price and needs no copy to exist.</strong> The row above carries that control.'; }
      if (!going) { totalEl.textContent = 'Nothing settles'; sayEl.textContent = 'Nothing goes out, so nothing settles against your balance.'; btnEl.textContent = 'Nothing to send'; return; }
      totalEl.textContent = (total >= 0 ? '+' : '-') + wdFmt(Math.abs(total)) + ' coins';
      var bal = moneyNow().balance;
      // THE BASELINE'S SENTENCE UNDER ITS TOTAL, D-128, with what is left.
      sayEl.innerHTML = 'Based on the market price, <strong>' + wdFmt(Math.abs(total)) + ' coins ' +
        (total >= 0 ? 'goes onto your balance' : 'will be taken from your balance') + '</strong>, ' + (total >= 0 ? 'making it ' : 'leaving ') + wdFmt(bal + total) + '.';
      /* THE COUNT LIVED IN THE SIDE CARD AND THE SIDE CARD IS GONE, D-115. The
         button carries it now, which is where it was already being said twice. */
      btnEl.textContent = going ? 'Send ' + going + (going === 1 ? ' item' : ' items') + ' to Steam' : 'Nothing to send';
    }

    rows.forEach(function (r) {
      if (!r._el) return;
      var E = r._el;
      function shown() {
        var lo = parseFloat(E.lo.value), hi = parseFloat(E.hi.value), mode = E.stk.value;
        if (lo > hi) { var t = lo; lo = hi; hi = t; }
        E.loV.textContent = lo.toFixed(2); E.hiV.textContent = hi.toFixed(2);
        var vis = [];
        r.offers.forEach(function (o, i) {
          var ok = o.f >= lo && o.f <= hi &&
                   (mode === 'Any' || (mode === 'With stickers' ? !!o.stk : !o.stk));
          E.strip.children[i].hidden = !ok;
          if (ok) vis.push(i);
        });
        /* WHEN THE CHOSEN COPY IS FILTERED OUT THE CHOICE MOVES TO THE CHEAPEST
           ONE STILL ON THE SHELF, and it never becomes nothing: a basket row with
           no copy chosen is a settlement with a hole in it. */
        if (vis.indexOf(r.pick) < 0) {
          r.pick = vis.length ? vis[0] : r.pick;
          if (vis.length) E.strip.children[r.pick].querySelector('.wf-off-r').checked = true;
        }
        E.count.textContent = r.total + ' on the market, cheapest first';
        E.say.textContent = vis.length === r.offers.length
          ? ''
          : 'Showing ' + vis.length + ' of ' + r.offers.length + '.';
        paint();
      }
      E.lo.addEventListener('input', shown);
      E.hi.addEventListener('input', shown);
      E.stk.addEventListener('change', shown);
      E.strip.addEventListener('change', function (e) {
        var t = e.target.closest('.wf-off-r');
        if (!t) return;
        r.pick = parseInt(t.value, 10);
        paint();
      });
      shown();
    });
    /* REMOVE REMOVES AND SEND SENDS, round 14. Both were buttons with no
       listener on the main act of 5.3. Remove drops the row and repaints the
       totals; Send goes to the in-flight state, or refuses with nothing left. */
    host.addEventListener('click', function (e) {
      var b = e.target.closest('[data-wd-remove]');
      if (!b) return;
      var box = b.closest('[data-wd-row]');
      var r = rows.filter(function (x) { return x.id === (box && box.getAttribute('data-wd-row')); })[0];
      if (!r) return;
      r.removed = true; r.pick = -1; box.hidden = true;
      paint();
    });
    rows.forEach(function (r) { r._repaint = paint; });
    if (btnEl) btnEl.addEventListener('click', function () {
      var out = rows.filter(function (r) { return !r.removed && r.pick >= 0; });
      /* THE CLOCK SHOWS WHAT WAS STRUCK, round 15: it showed the AK at 18.90 and
         +2.50 whatever copy was picked and however many items went. */
      if (out.length) {
        var struck = out.map(function (r) { var o = r.offers[r.pick]; return { key: r.key, w: r.w, s: r.s, wear: r.wear, ours: r.ours, p: o.p, f: o.f }; });
        WF_SESS.set('struck', struck);
        location.href = BASE + 'withdraw-clock.html'; return;
      }
      if (sayEl) sayEl.textContent = 'Nothing is going out: every item was removed or has no copy on sale. Change what is selected.';
    });
    paint();
  }

  /* THE PUBLIC SHELF IS THE ITEMS TAB'S CARDS, round 14. The three player pages
     carried hand copies whose AK was won on 22 Aug, from Ironbound, at 21.40,
     while the round it linked to said 18 Aug. One renderer now, one set. */
  function renderPlayerShelf() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-player-shelf]'), function (g) {
      WF_ROLLS.forEach(function (r) { g.appendChild(itemCard(r)); });
    });
  }

  function itemsPanel() {
    var wrap = el('div', 'wf-hpanel');
    /* THE EMPTY STATE EMPTIES THE ARRAY RATHER THAN COPYING THE PAGE, so the two
       states cannot disagree about what a card looks like. */
    var rolls = window.WF_ROLLS_EMPTY ? [] : BORN.concat(WF_ROLLS);
    wrap.appendChild(histBar('Items', rolls.length, 'items'));
    if (!rolls.length) {
      wrap.appendChild(histEmpty('Nothing won yet',
        'Every skin this account opens lands here and stays, with what it was worth at that moment and where it went afterwards.',
        'catalogue.html', 'The case shelf'));
    } else {
      var grid = el('div', 'wf-grid wf-grid--inv wf-itemgrid');
      rolls.forEach(function (r) { grid.appendChild(itemCard(r)); });
      wrap.appendChild(grid);
    }
    /* THE LABELLED EXPLANATIONS LEFT, round 14, as D-128 decided for every
       ledger: the card already says "Worth when won" and the rest is in 5.9. */
    return wrap;
  }

  function histPanel(kind, data) {
    if (kind === 'items') return itemsPanel();
    var wrap = el('div', 'wf-hpanel');

    var rows = (data && data[kind]) || [];
    var unit = kind === 'deposits' ? 'payments' : (kind === 'cashout' ? 'cash outs' : 'withdrawals');
    wrap.appendChild(histBar(kind === 'deposits' ? 'Deposits' : (kind === 'cashout' ? 'Cash out' : 'Withdrawals'), rows.length, unit));

    /* WHAT THIS TAB MEANS, AND WHAT IT STILL DOES NOT, D-93. The tab kept the
       baseline's label and gained our subject, so both readings have to be on
       the page or the label makes a promise the ledger does not keep. Taking a
       balance out as money is not built, and the coin has no published rate to
       do it at, so that reading is stated and not performed.
       THE OLD ARGUMENT IS NOT DELETED, IT IS SUPERSEDED. This panel shipped on
       D-88 as a rendered absence, on the ground that the tab had no subject on
       our map. The reasoning was right and the premise was wrong: the subject
       was one page over the whole time, marked on the roll rather than recorded
       as a sale. The record of that is in D-93, not in a comment that outlives
       its own screen.
       AND THE SECOND PRICE IS NAMED HERE TOO, D-91 and D-92. Credited is our
       price. What a real copy of the same skin costs is our other price, and the
       difference between selling back and taking it out is the whole of D-91. A
       ledger that prints one of the two teaches that there is only one. */
    /* THE NOTES ARE BUILT HERE AND APPENDED AFTER THE ROWS, D-107. They used to
       stand between the count and the first row, which is a paragraph read
       before the thing it describes exists on the screen.
       ONE OF THEM LEFT THE SCREEN ENTIRELY AND IT IS NAMED: the deposits tab
       carried "whether a row shows the money charged or the coins credited is
       not decided". THAT IS A QUESTION OF OURS, NOT A FACT OF THEIRS. It tells a
       person nothing they can act on and it tells them the ledger they are
       reading has not been specified. It is in node 5.9 where it belongs. */
    var after = [];

    if (kind === 'cashout') {
    }

    if (kind === 'cashout') {
      /* nothing further: the three above are this tab's block, and the
         withdrawals note below is about a different act. */
    } else if (kind === 'deposits') {
      /* THE RECONCILIATION WORKS SINCE D-95 AND THE SENTENCE THAT SAID IT COULD NOT IS
         GONE. It read: "what one coin is worth in real money is not published yet, so a
         row cannot be reconciled against a bank statement." The peg is published, it is
         one to one, and that was the whole obstacle.
         AND THE BONUS OPENS A HOLE IN THE SAME BREATH, D-94. A payment of 40 dollars
         credits 42 coins, so the money charged and the coins credited are no longer the
         same number and a ledger with one column cannot be both. WHICH ONE A ROW HOLDS
         IS NOT DECIDED, so the note says so rather than picking one and being wrong on
         every bonused row. */
    } else {
      /* B8-2 IS SIX PEOPLE WAITING WITH HARD FIGURES AND NOBODY TELLING THEM
         ANYTHING. So a row carries who is being waited on, and never an ETA:
         5.3's clock shows elapsed, the published ceiling and the party, and a
         history that invents a fourth number contradicts its own screen. */
    }

    if (!rows.length) {
      /* THE EMPTY OFFERS A ROUTE HERE BECAUSE THERE IS NOW AN ACT THAT FILLS IT,
         which is exactly the test the D-88 panel used to refuse itself one. */
      if (kind === 'cashout') {
        wrap.appendChild(histEmpty('No cash out yet', 'When you cash items out to a wallet, the row lands here and stays, with the network, the wallet, the amount and where the request got to.', 'account.html', WF_STR.myItems));
      } else {
        wrap.appendChild(kind === 'deposits'
          ? histEmpty('No payments yet', 'When you add funds, every attempt lands here, the ones that went through and the ones that did not.', 'deposit.html', WF_STR.addFunds)
          : histEmpty('Nothing sent to Steam yet', 'When you send an item to Steam, the row lands here and stays, with who it is waiting on and how long it has been.', 'account.html', WF_STR.myItems));
      }
    } else {
      wrap.appendChild(histTable(kind, rows));
    }
    // D-128: THE BASELINE'S LEDGERS CARRY NO NOTES. One line stays, on the
    // deposits ledger, because it is what lines a row up with a bank statement.
    if (kind === 'deposits' && rows.length) wrap.appendChild(el('p', 'wf-note', 'Amounts in coins, ' + WF_STR.peg));
    if (after.length) wrap.appendChild(afterBlock(after));
    return wrap;
  }

  /* FOUR PAGES, NOT FOUR PANELS, D-89. They shipped as in-page tabs and the
     founder's screenshot killed that in one frame: Deposits selected, the rolls
     list under it. The cause was that [hidden] is a UA rule and the author rule
     .wf-hist { display: flex } beat it, so the panel marked hidden went on
     rendering. The fix for the bug is one line of CSS; the fix for the design is
     this, and the founder asked for it in the same message.
     EACH TAB IS A PAGE WITH ITS OWN STATES, which is what makes them auditable:
     a state that lives inside a panel nobody can link to is a state the registry
     cannot list and the prototype panel cannot show. This strip is now the same
     object as the account strip above it, four peer pages and the current one
     rendered as a span rather than a link to where you already are, D-58. */
  /* ---------------------------------------------------------------------
     NODE 4.1, ONE LAYER WITH TWO PANES, D-100, founder of 26 August 2026 with
     six captures of a competitor's funding dialog beside the built one.
     WHAT HE ASKED FOR: the routes grouped into categories rather than listed
     flat, the group chosen on the left and its content shown on the right, and
     the promo code and the country lifted to the top beside each other.
     THE STEP INDICATOR IS GONE, AND ITS REMOVAL IS THE SAME ARGUMENT THAT ADDED
     IT. D-96 refused a step indicator while this was one screen with one control,
     then added it when there were two screens: "there are two screens now, so it
     exists". THERE ARE NOT TWO SCREENS NOW. The rail is on the surface the whole
     time, the method a person chose stays visible while they set the amount, and
     a numbered process drawn over a single pane is a picture of a process.
     WHAT THE CHANGE BUYS BEYOND LOOKS: D-96's own worry was a screen that has to
     be taken back, because crypto has no amount field. With a persistent rail
     nothing is taken back. The right pane simply renders what that route asks
     for, which is a grid for crypto, a form for a card, and six outbound sellers
     for a gift card.
     THE CATEGORIES ARE THE ROUTES AND NOTHING FINER, AND THAT IS A SOURCE RATHER
     THAN A PREFERENCE. Our own step 2 already splits on route, because the route
     is what the second pane asks for: a card takes an amount, a chain takes none,
     a gift card leaves the product. baseline-account.md 5b.1 shows our list in
     exactly two groups, fiat and crypto, so a six way split into cards, wallets,
     bank transfers and vouchers would be a taxonomy of payment brands taken from
     nowhere in this repository. NAMED AS OPEN rather than invented.
     THE BRAND MARKS ARE SLOTS, D-50. The founder's references are full of real
     Visa, PayPal and Tether logos; an image is stage 06's and the room it takes
     is this stage's.
     --------------------------------------------------------------------- */
  /* TWO GROUPS, THE BASELINE'S OWN, D-129. The live page renders FIAT PAYMENT
     METHOD and CRYPTO PAYMENT METHOD on one screen, with CS:GO Skins second and
     Gift Cards inside the fiat grid. D-100 split that into a rail of four; the
     founder took Gift cards and CS2 skins back into the grid on 27 September
     2026, which leaves a rail of two, and a rail of two is two headings. So the
     first screen is the two grids, one under the other, as the baseline has it.
     The route bodies still key on the kind, so card, gift, skins and crypto
     each keep their own pane once a tile is chosen. */
  var PAY_CATS = [
    { key: 'card',   label: 'Cards, wallets and more', kinds: ['card', 'gift', 'skins'] },
    { key: 'crypto', label: 'Crypto',                  kinds: ['crypto'] },
    { key: 'gift',   label: 'Cards, wallets and more', kinds: ['gift'] },
    { key: 'skins',  label: 'Cards, wallets and more', kinds: ['skins'] }
  ];

  function payRows(cat) {
    var P = window.WF_PAY || { fiat: [], crypto: [] };
    var kinds = payCat(cat).kinds;
    return P.fiat.concat(P.crypto).filter(function (r) { return kinds.indexOf(r[1]) > -1; });
  }

  function payCat(key) {
    for (var i = 0; i < PAY_CATS.length; i++) if (PAY_CATS[i].key === key) return PAY_CATS[i];
    return PAY_CATS[0];
  }

  /* THE COUNT RENDERS ON EVERY CATEGORY. Thirty five split four ways is a fact
     about the screen, and a rail of four boxes with no numbers hides which of them
     is the one with twenty five things behind it. */
  function payTile(row) {
    var kind = row[1], mark = row[2];
    var node = kind ? el('a', 'wf-pay-t') : el('div', 'wf-pay-t is-noroute');
    if (kind) {
      node.href = BASE + (window.WF_PAY.route[kind] || 'deposit.html') + '?m=' + encodeURIComponent(row[0]);
      // THE METHOD TRAVELS ON THE TILE. At the address the href is the whole of
      // it; inside the layer this is read and the right pane changes, with the
      // rail and the money block staying exactly where they were.
      node.setAttribute('data-pay-kind', kind);
      node.setAttribute('data-pay-method', row[0]);
    }
    var art = el('span', 'wf-pay-art');
    art.setAttribute('aria-hidden', 'true');
    node.appendChild(art);
    node.appendChild(el('span', 'wf-pay-n', row[0]));
    // THE MARK IS A RIBBON ON THE CORNER, D-129, the baseline's BEST CHOICE and
    // INSTANT. As a caption line it made its tile taller than the row.
    if (mark === 'best')    node.appendChild(el('span', 'wf-pay-rib', 'Best choice'));
    if (mark === 'instant') node.appendChild(el('span', 'wf-pay-rib', 'Instant'));
    /* THE MARK IS ON THE TILE AND THE REASON IS ONE LINE UNDER THE GRID, D-97.
       The whole sentence sat on the tile and stretched the first row from 74px to
       210px, so one orphan reshaped the grid for the other thirty four. */
    if (!kind) node.appendChild(el('span', 'wf-pay-m wf-fig-missing', 'Not open yet'));
    return node;
  }

  /* THE OFFER STRIP, D-94 AND THE FOUNDER OF 26 AUGUST. The badge on the header
     control can hold five per cent and nothing else, so the surface the badge
     leads to is the only place the whole offer can be stated, and it states it
     before anything is chosen rather than next to the amount at the end.
     IT CARRIES THE OFFER AND THE FORM CARRIES THE RULE, WHICH IS A DEDUP RATHER
     THAN A SPLIT. The percentage, the cap and the period are the offer and they
     are here once. That every deposit gets it and that it carries no wagering
     requirement are rules about withdrawal, C4, and they stay in the money block
     where withdrawal is being priced. D-97 cut three renderings of one figure on
     this node already. */
  function payOffer() {
    var B = window.WF_BONUS || {};
    if (!B.pct) return null;
    var strip = el('div', 'wf-bonus-strip');
    var t = el('p', 'wf-bonus-t');
    t.appendChild(el('strong', null, '+' + B.pctFull + ' bonus on every top-up'));
    t.appendChild(document.createTextNode(', up to ' + B.cap + ' per ' + B.period + '. No wagering.'));
    strip.appendChild(t);
    /* THE IMAGE IS A SLOT AND ITS SPACE IS THIS STAGE'S, D-50. It is on the right
       because that is where the reference banner carries its picture and because a
       picture on the left pushes the sentence off the start of the line. */
    var art = el('span', 'wf-bonus-art');
    art.setAttribute('aria-hidden', 'true');
    strip.appendChild(art);
    return strip;
  }

  /* THE PROMO AND THE COUNTRY ARE THE PANE HEADER, D-103, founder of 27 August
     2026 on the D-102 build: still overloaded, and put the country here.
     THE EMAIL WENT DOWN UNDER THE AMOUNT. It was in this row for one build. The
     founder's reason is placement rather than kind, and he is right about the kind
     too: the promo and the country are both about the account, and the email is
     about this payment, so it belongs with the payment.
     THE COUNTRY IS STILL READ AND NEVER SET, D-98. 5.11 owns the one answer, so it
     is a value with a route rather than a select with one option in it.
     THE PROMO FIELD IS EMPTY AND THE BASELINE'S IS NOT, D-96, and APPLY ANSWERS
     RATHER THAN DOING NOTHING, D-58 and D-102. */
  function payHead(idp) {
    // THE PROMO IS THE BASELINE'S "HAVE A PROMO CODE?", collapsed until asked
    // for, D-129. Open, it pushed every payment method off the first screen at 360.
    var promo = el('details', 'wf-promo');
    promo.appendChild(el('summary', null, 'Have a promo code?'));
    var pr = el('div', 'wf-row');
    var pl = el('label', 'wf-vh', 'Promo or partner code');
    pl.setAttribute('for', idp + 'pay-promo');
    pr.appendChild(pl);
    var pin = el('input', 'wf-f');
    pin.id = idp + 'pay-promo'; pin.type = 'text'; pin.placeholder = 'Promo or partner code';
    pr.appendChild(pin);
    var pb = el('button', 'wf-btn', 'Apply');
    pb.type = 'button';
    pb.setAttribute('data-promo-apply', '');
    pr.appendChild(pb);
    promo.appendChild(pr);
    var psay = el('p', 'wf-cfg-p');
    psay.setAttribute('data-promo-say', '');
    promo.appendChild(psay);
    return [promo];
  }

  /* THE COUNTRY IS A LINE AT THE FOOT, D-129. It is read and never set here,
     D-98, so it is not among the things being answered. */
  function payCountry() {
    var c = el('p', 'wf-note wf-pay-cty');
    // THE SAVED COUNTRY, round 15: settings saved Poland and this still read Ukraine.
    c.appendChild(document.createTextNode('Payment methods for ' + countryNow() + ' · '));
    var a = el('a', null, 'Change');
    a.href = BASE + 'settings.html';
    c.appendChild(a);
    return c;
  }

  /* THE CHOSEN METHOD KEEPS ITS OWN LINE, and Change goes back to the grid of the
     category it came from rather than to a first step. There is no first step any
     more: the rail never left the screen. */
  function payChosen(cat, method) {
    var bar = el('div', 'wf-chosen');
    var t = el('p', 'wf-chosen-t');
    t.appendChild(el('span', 'wf-chosen-k', cat.label));
    t.appendChild(el('strong', null, method));
    bar.appendChild(t);
    // A LINK AT THE ADDRESS AND A PANE SWITCH IN THE LAYER, D-129: the layer's
    // handler takes the press first, and on /deposit it goes to the grid.
    var b = el('a', 'wf-btn wf-btn--small', 'Change');
    b.href = BASE + 'deposit.html';
    b.setAttribute('data-pay-cat', cat.key);
    bar.appendChild(b);
    return bar;
  }

  /* ---------------------------------------------------------------------
     THE THREE ROUTE BODIES, D-99. One renderer, seven addresses and one dialog.
     Before D-99 these were markup written out on each page and two of the six had
     drifted: 4.3 and 4.5 were copies of the card page taken before D-97 and never
     caught up, so neither carried the provider block, the receipt at the top of
     the dock or the billing block.
     THE IDS ARE PREFIXED IN THE LAYER, because opening it over an address puts two
     of this body in one document.
     --------------------------------------------------------------------- */

  /* THE THREE FIGURES ARE ONE ARITHMETIC AND NOT THREE TYPED STRINGS. THE SUM ONLY
     WORKS BECAUSE OF D-95: one coin is one dollar, fixed, so dollars in and coins
     out can be added at all. THE CAP IS REAL RATHER THAN DECORATIVE. */
  function depFigs(amount) {
    var B   = window.WF_BONUS || {};
    var a   = parseFloat(amount) || 0;
    var pct = (parseFloat(B.pctFull || '5.00') || 0) / 100;
    var cap = parseFloat(String(B.cap || '100').replace(/[^0-9.]/g, '')) || 0;
    var bon = Math.min(a * pct, cap);
    return { amount: a.toFixed(2), bonus: bon.toFixed(2), receive: (a + bon).toFixed(2) };
  }

  /* WHO TAKES THE PAYMENT, AND IT IS A BLOCK AGAIN, D-103, founder on the built
     screen: put this back the way it was. D-102 compressed it to a line to buy
     vertical room, and the room turned out to be worth less than the block: this is
     the sentence that says a stranger will hold the card details, on the screen
     where that matters most, and a caption sized statement is not where trust is
     built. It is first, which is D-97's order and the baseline's: SELECT PROVIDER
     sits above the form and the provider decides what the form asks for.
     WHO THEY ARE IS NOT DECIDED and inventing two names would be the median the
     input gate exists to prevent. */
  function depProvider(P) {
    // TWO PROVIDERS, THE BASELINE'S "SELECT PROVIDER", drawn as samples, D-124.
    // Who they are is an open item in deposit.md; the sentence is the one fact
    // that matters where card details are typed, and it stays.
    return '' +
      '<div class="wf-stack">' +
        '<h2 class="wf-pay-gh" id="' + P + 'h2-prov">Select provider. <span class="wf-pay-gh-s">Your card details go to the provider, not to us</span></h2>' +
        '<div class="wf-payprov" role="radiogroup" aria-labelledby="' + P + 'h2-prov">' +
          '<label class="wf-payprov-t"><input type="radio" name="' + P + 'prov" checked><span class="wf-pay-art" aria-hidden="true"></span><span class="wf-pay-n">Provider A</span></label>' +
          '<label class="wf-payprov-t"><input type="radio" name="' + P + 'prov"><span class="wf-pay-art" aria-hidden="true"></span><span class="wf-pay-n">Provider B</span></label>' +
        '</div>' +
      '</div>';
  }

  /* THE CARD BODY, AND THE DEPOSIT LIMIT IS NOT IN IT SINCE D-103. Founder of 27
     August 2026, on the D-102 build: still overloaded, and the limit belongs in the
     settings rather than here.
     C2 IS NOT DELETED, ITS MOMENT IS. The row said the ceiling is chosen at the
     deposit and blocks the payment until it is accepted or changed. It is now set
     where the other three boundaries already are, node 6.1, which has carried a
     spend ceiling control with an amount and a period since that page was drawn.
     WHAT THIS SCREEN KEEPS IS THE FIGURE, NOT THE FORM. The limit in force is a line
     in the receipt with a route, so the number is still in front of a person at the
     moment of spending, which is design principle 3. What it is not any more is a
     second thing to fill in beside the amount.
     THE COST IS REAL AND IT IS IN D-103: a boundary set on a calm page is a boundary
     nobody sets. The record carries the argument it overrode rather than deleting it.
     THE EMAIL IS UNDER THE AMOUNT, founder's placement, and it is the right kind of
     block for the column: the promo and the country are about the account, the
     amount and the email are about this payment.
     THE RATE PARAGRAPH IS GONE, and that is a dedup rather than a cut. C1 requires
     the peg beside the coin figure at the moment of spending, D-28, and the receipt
     carries it on the line under the figure. A second rendering of one fact on one
     screen is what D-97 already removed three of. */
  /* WHAT THE LEDGER HAS ALREADY TAKEN IN THIS PERIOD, read from the completed
     deposits history-deposits.html draws, the snapshot of 21 Aug 2026 09:31:
     the day began at 00:00, the week on Monday 17 Aug, the month on 1 Aug. */
  var DEP_DONE = [['2026-07-30', 10.00], ['2026-08-08', 30.00], ['2026-08-16', 14.60], ['2026-08-18', 50.00]];
  function depUsed(per) {
    var from = /day/.test(per) ? '2026-08-21' : /week/.test(per) ? '2026-08-17' : '2026-08-01';
    return DEP_DONE.reduce(function (a, d) { return a + (d[0] >= from ? d[1] : 0); }, 0);
  }
  function depCard(P, o) {
    /* THE LIMIT SET IN THIS SESSION IS THE LIMIT, round 16, B2-11: saved on 6.1
       and the layer one press later said "No deposit limit set". */
    /* A STATE PAGE THAT DRAWS ITS OWN LIMIT KEEPS IT, round 17, B2-4: the
       pending page said $40.00 in its block and the session's limit in its
       receipt. Where the page draws none, the session's limit is read, with
       what this period has already used, B2-3, and a raise still waiting. */
    var SLL = WF_SESS.get('limits') || {}, SL = SLL.dep;
    if (SL && !o.ceiling) {
      o = JSON.parse(JSON.stringify(o)); o.ceilPer = SL.per;
      var used = depUsed(SL.per), lft = Math.max(0, parseFloat(SL.amt) - used);
      o.ceiling = lft.toFixed(2); o.ceilAmt = SL.amt; o.ceilUsed = used;
      if (SLL.depNext) o.ceilNext = SLL.depNext;
    }
    var f = depFigs(o.amount);
    var B = window.WF_BONUS || {};
    return '' +
      depProvider(P) +
      '<div class="wf-fund-grid">' +
        '<div class="wf-fund">' +
          /* THE AMOUNT. ONE EDITABLE FIELD: the converted figure is never an input,
             because two editable money fields on one form is where a person types
             into the wrong one. THE PRESETS REALLY SET IT, D-58. DIGITS ONLY: the
             field took letters, so a money field accepted a value that is not money
             and the receipt beside it read NaN. */
          '<div class="wf-amt">' +
            '<label class="wf-cfg-l" id="' + P + 'h2-amount" for="' + P + 'dep-amt">Enter the amount</label>' +
            '<div class="wf-amt-row">' +
              '<input class="wf-amt-in" id="' + P + 'dep-amt" data-dep-amt type="text" inputmode="decimal" value="' + f.amount + '" aria-describedby="' + P + 'dep-unit">' +
              '<span class="wf-amt-unit" id="' + P + 'dep-unit">US dollars</span>' +
            '</div>' +
            /* The presets are inherited: the live product runs six, and their
               values follow the currency rather than being ours. */
            '<div class="wf-presets">' +
              [5, 10, 20, 50, 100, 200].map(function (n) {
                return '<button class="wf-btn wf-btn--small" type="button" data-dep-preset="' + n + '.00" aria-pressed="false">$' + n + '</button>';
              }).join('') +
            '</div>' +
          '</div>' +
          /* THE RECEIPT ADDRESS, UNDER THE AMOUNT. The baseline asks a signed-in
             person for an email it already holds, 5b.2, which is a form that does
             not know who it is talking to. Ours is filled and editable. */
          '<div class="wf-cfg-f">' +
            '<label class="wf-cfg-l" for="' + P + 'dep-email">Billing email</label>' +
            '<input class="wf-cfg-in" id="' + P + 'dep-email" type="email" value="' + window.WF_WHO.email + '">' +
          '</div>' +
          /* THE TERMS ARE ASKED AGAIN, the baseline's own behaviour: the sign-in
             consent is about the account and this one is about a payment. IT IS THE
             ONLY BLOCKING CONTROL ON THE SCREEN SINCE D-103, and it blocks the way
             D-58 fixed: the press stays live and answers.
             THE BOX IS THE PRODUCT'S OWN CONTROL AND NOT THE BROWSER'S. */
          '<div class="wf-cbx" data-dep-terms>' +
            '<button class="wf-cbx-box" type="button" aria-pressed="false" aria-label="I have read and accept the terms and the refund and payments policy">&#10003;</button>' +
            '<span class="wf-cbx-t">I have read and accept the <a href="' + BASE + 'legal.html">terms</a> and the <a href="' + BASE + 'legal-refund.html">refund and payments policy</a>.</span>' +
          '</div>' +
          /* THREE FACTS, ONE LINE EACH, D-129, where four paragraphs stood under
             the press. The figures are samples by D-124 and the node holds what
             each will really be: the withdrawal minimum, C4, the crediting time,
             C3, and the limit, which is set on 6.1. The bonus is said once, in
             the banner. */
          '<ul class="wf-dep-facts">' +
            /* THE MINIMUM IS SAID AS THIS ACCOUNT STANDS, round 16, B2-3: it asked
               for a first $5.00 above a ledger of completed deposits. C4's line for
               an account with none stays in 4.1 for the day that state is drawn. */
            '<li>The <strong>$5.00</strong> minimum to withdraw is met by your deposits. It never rises.</li>' +
            '<li>Usually credited within <strong>2 minutes</strong>. <a href="' + BASE + 'support.html">' + WF_STR.support + '</a> if not.</li>' +
            '<li>' + (o.ceilAmt ? 'Deposit limit <strong>$' + o.ceilAmt + ' ' + o.ceilPer + '</strong> in force, <strong>$' + o.ceiling + '</strong> left this period after ' + o.ceilUsed.toFixed(2) + ' coins already in' + (o.ceilNext ? '; $' + o.ceilNext.amt + ' ' + o.ceilNext.per + ' from 22 Aug 2026, 09:31' : '') + '.' : o.ceiling ? 'Deposit limit <strong>$' + o.ceiling + '</strong>' + (o.ceilPer ? ' ' + o.ceilPer : '') + ' in force.' : 'No deposit limit set.') + ' <a href="' + BASE + 'responsible.html">' + (o.ceiling ? 'Change it' : 'Set one') + '</a></li>' +
          '</ul>' +
        '</div>' +
        '<div>' +
          /* THE PERSISTENT SUMMARY AND THE ONE CONTROL. IT NEVER SUMS THE DEPOSIT
             WITH THE VALUE OF ITEMS HELD: different kinds, and a combined figure
             reads as net worth. THE CONTROL IS LIVE AND REFUSES, D-58: a dimmed Pay
             is a person hunting for what to change, a live Pay that answers is a
             person being told. */
          '<div class="wf-dock">' +
            '<div class="wf-recv">' +
              '<span class="wf-fig-c">You will receive</span>' +
              '<span class="wf-recv-v" data-fig-recv>' + f.receive + ' coins</span>' +
              /* THE CAPTION IS THE PEG AND ONLY THE PEG SINCE D-104. It used to
                 restate the split, and with the split two lines below it in the sum
                 the same two figures were on the pane three times. The peg itself
                 stays: D-95 requires it printed at the moment money is spent, and it
                 is what makes dollars in and coins out addable at all. */
              '<span class="wf-fig-c">at ' + WF_STR.peg + '</span>' +
            '</div>' +
            /* THE RECEIPT HOLDS WHAT MOVES THE NUMBER AND NOTHING ELSE, D-104.
               Founder on the built screen: simplify this part. It had six rows of
               which three carried no figure at all, Fee not published, deposit limit
               none set, withdrawal threshold not published, AND A SUM WHOSE ROWS ARE
               MOSTLY UNKNOWN STOPS READING AS A SUM: the eye starts skipping the
               column, including the two figures in it that are real.
               NOTHING WAS DELETED, EACH OF THE THREE HAS A HOME BELOW THE PRESS. The
               withdrawal threshold was already there word for word and its row was a
               pure duplicate; the deposit limit is in the boundaries line with its
               figure when one is set; the fee is the one that could not just leave,
               because Total charged is a claim that an unpublished fee can falsify,
               so it stays attached to the total as its qualifier. */
            '<div class="wf-total">' +
              /* THE BONUS IS STILL A LINE IN THE SUM AND STILL NEVER A BADGE, D-94: a
                 badge asserts, a line in a sum gets checked. Founder: make the bonus
                 stand out. IT IS RAISED, NOT PROMOTED: it keeps its place in the
                 arithmetic and it keeps the cap and the period on it, and what it
                 gains is a band, the sign in front of the figure and the room to be
                 read first. Emphasis at this stage is weight and space, since colour
                 does not exist here until stage 07. */
              '<div class="wf-bonusrow">' +
                '<span class="wf-bonusrow-v" data-fig-bonus>+' + f.bonus + ' coins</span>' +
                // THE CAP AND THE PERIOD TRAVEL WITH THE PERCENTAGE, round 15: the
                // line said only 5.00%, while the comment above already claimed both.
                '<span class="wf-bonusrow-t">Bonus, ' + (B.pctFull || '5.00%') + ', up to ' + (B.cap || '100 coins') + ' per ' + (B.period || '24 hours') + '</span>' +
              '</div>' +
              '<div class="wf-tl wf-tl--sum"><span>Total charged</span><span class="wf-tl-v" data-fig-total>$' + f.amount + '</span></div>' +
              '<p class="wf-tl-c">No provider fee on this route</p>' +
            '</div>' +
            '<p class="wf-refuse" data-dep-refuse>' + (o.refuse || '') + '</p>' +
            '<div class="wf-row">' +
              '<a class="wf-btn wf-btn--primary" data-dep-go' + (o.ceiling ? ' data-ceiling="' + o.ceiling + '"' : '') + ' href="' + BASE + 'deposit-crediting.html">' + (o.go || 'Pay') + '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '';
  }

  /* THE CRYPTO BODY. The route with no amount field, and that absence is the whole
     design of it. AND IT BREAKS C2, WHICH IS THE FINDING OF THIS BUILD RATHER THAN
     A DETAIL: the ceiling works by being accepted before a submission, nothing is
     typed here and nothing is submitted, so the brake has nothing to hold and no
     moment to hold it in. THE PAGE STATES THAT rather than drawing a ceiling that
     cannot bind, which would be a picture of a protection.
     THE RATE IS A MARKET READ AND CARRIES AN AS-OF, unlike the peg. */
  /* EVERY COIN CARRIES ITS OWN NETWORK, ADDRESS, RATE AND MINIMUM, round 14.
     The pane fell back to Bitcoin for all eight tiles, so Solana showed a bc1
     address and a BTC minimum: coins sent on the wrong network are lost. All
     four figures are samples by D-124, marked in 4.1. */
  var COINS = {
    Bitcoin:  { tick: 'BTC',  rate: '64 185.74', min: '0.0001', nets: [['Bitcoin', 'bc1q9h7x4k2m8d0v3s6n5r7t2w4y8z0p3a5c7e9x4k2'], ['Bitcoin, Lightning', 'lnurl1dp68gurn8ghj7um9wfmxjcm99e3k7mf0v9cxj0m385ekvcenxc6r2c35xvukxefcv5mkvv34x5ekzd3ev56nyd3hxqurzepexejxxepnxscrvwfnv9nxzcn9xq6xyefhvgcxxcmyxymnserxfq5fns']] },
    Ethereum: { tick: 'ETH',  rate: '2 450.00', min: '0.002', nets: [['Ethereum, ERC-20', '0x3b9e27a4c1d05f8e6b2a9c47d1e30f5a8b6c2d94']] },
    Litecoin: { tick: 'LTC',  rate: '84.20', min: '0.01', nets: [['Litecoin', 'ltc1qz8r4x6m2k9d7v5s3n1p0t8w6y4a2c9e7h5j3k1']] },
    Tether:   { tick: 'USDT', rate: '1.00', min: '5', nets: [['Tron, TRC-20', 'TXa9q4VzK7mR2pL8dN3sW6yB1cF5hJ0gT'], ['Ethereum, ERC-20', '0x9f41c07b2e8d53a6f1c49e0b7d2a85c3e6f0b1d7']] },
    Tron:     { tick: 'TRX',  rate: '0.24', min: '20', nets: [['Tron', 'TQ7nC3xLp9rV5kM1wZ8dH2sF6yB4gJ0aE']] },
    Xrp:      { tick: 'XRP',  rate: '0.58', min: '10', nets: [['XRP Ledger', 'rN7nW3kL9pQ2xV5mD8sF1hJ4yB6cT0gZe']] },
    Solana:   { tick: 'SOL',  rate: '146.30', min: '0.05', nets: [['Solana', '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU']] },
    Other:    { tick: 'DOGE', rate: '0.12', min: '25', nets: [['Dogecoin', 'DH5yaieqoZN36fDVciNyRueRGvGLR3mr7L'], ['BNB Smart Chain', '0x6d2e81b0c4a97f35e1d08c6b2f94a7e3c5d10b8f']] }
  };
  function depCrypto(P, o) {
    var empty = (o.state === 'nowallet');
    var coin  = o.coin || o.method || 'Bitcoin';
    var C = COINS[coin] || COINS.Bitcoin;
    var tick  = C.tick;
    var net0 = C.nets[0];
    var B = window.WF_BONUS || {};
    // THE BASELINE'S ORDER, D-129: network, code and address, rate, bonus, the
    // minimum, then Done. Rate, address and minimum are samples by D-124; the
    // rate is the baseline's own read, 1 BTC = 64,185.74.
    return '' +
      '<div class="wf-fund-grid">' +
        '<div class="wf-fund">' +
          '<div class="wf-stack">' +
            '<label class="wf-cfg-l" for="' + P + 'dep-net">Network</label>' +
            '<select class="wf-f" id="' + P + 'dep-net" data-dep-net data-coin="' + coin + '">' +
              C.nets.map(function (n) { return '<option>' + n[0] + '</option>'; }).join('') +
            '</select>' +
            '<p class="wf-note" data-dep-netnote>Send on ' + net0[0] + ' only. Coins sent on another network are lost.</p>' +
          '</div>' +
          '<div class="wf-crypto' + (empty ? ' is-empty' : '') + '">' +
            '<span class="wf-crypto-qr" aria-hidden="true">' + (empty ? 'No code yet' : 'QR code') + '</span>' +
            '<div class="wf-crypto-a">' +
              (empty
                ? '<span class="wf-fig-c">You do not have an address on this network yet</span>' +
                  '<div class="wf-row"><a class="wf-btn wf-btn--primary" href="' + BASE + 'deposit-crypto.html?m=' + encodeURIComponent(coin) + '">Create my address</a></div>'
                : '<span class="wf-fig-c">Your deposit address</span>' +
                  '<code class="wf-crypto-v" data-dep-addr>' + net0[1] + '</code>' +
                  '<div class="wf-row"><button class="wf-btn" type="button" data-copy="' + net0[1] + '">' + WF_STR.copy + '</button></div>') +
            '</div>' +
          '</div>' +
          '<ul class="wf-dep-facts">' +
            '<li>Rate <strong>1 ' + tick + ' = ' + C.rate + ' coins</strong>, read 09:31</li>' +
            '<li>Bonus <strong>+' + (B.pctFull || '5.00%') + '</strong> when the coins arrive</li>' +
            '<li>Minimum <strong>' + C.min + ' ' + tick + '</strong>. Less than that is lost</li>' +
            '<li>A deposit limit cannot stop a transfer from your own wallet. <a href="' + BASE + 'responsible.html">Your limits</a></li>' +
          '</ul>' +
        '</div>' +
        '<div>' +
          '<div class="wf-dock">' +
            (empty
              ? ''
              : '<div class="wf-row"><a class="wf-btn wf-btn--primary" href="' + BASE + 'deposit-crediting.html?m=' + encodeURIComponent(coin) + '">Done, I have sent it</a></div>') +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* THE GIFT CARD BODY, THE BASELINE'S SHAPE, D-129: six resellers as
     accordions, the first open, each with the six denominations and one outbound
     control, then the field that brings the code back. The sellers are the
     baseline's; which of them we send people to is an open item in deposit.md,
     and the links are samples by D-124. */
  function depGift(P, o) {
    var sellers = ['Difmark', 'Pulse', 'Kinguin', 'OFF GAMERS', 'Karte Direkt', 'Eneba'];
    return '' +
      '<div class="wf-stack">' +
        '<p class="wf-note">Bought from a reseller: they take the payment and handle refunds.</p>' +
        sellers.map(function (s, i) {
          return '<details class="wf-gift"' + (i === 0 ? ' open' : '') + '><summary>Gift cards on ' + s + '</summary>' +
            '<div class="wf-presets">' + [5, 10, 20, 50, 100, 200].map(function (n) {
              return '<a class="wf-btn wf-btn--small" href="https://www.' + s.toLowerCase().replace(/ /g, '') + '.com/" rel="external nofollow">$' + n + '</a>';
            }).join('') + '</div></details>';
        }).join('') +
      '</div>' +
      '<div class="wf-stack">' +
        '<div class="wf-cfg-f">' +
          '<label class="wf-cfg-l" for="' + P + 'dep-code">Card code</label>' +
          '<input class="wf-cfg-in" id="' + P + 'dep-code" type="text" placeholder="The code from the card you bought">' +
        '</div>' +
        '<p class="wf-refuse" data-code-say></p>' +
        '<div class="wf-row"><a class="wf-btn wf-btn--primary" href="' + BASE + 'deposit-crediting.html" data-code-go>Redeem</a></div>' +
      '</div>';
  }

  /* THE SKINS BODY, D-129, founder decision of 27 September 2026 returning the
     baseline's INSTANT route to the grid. It has no row in cjm-to-be.md and no
     parent in the three legal classes, which is printed in deposit.md rather
     than on this pane. The shape is the baseline's skin deposit: your Steam
     inventory, pick, see the credit, deposit. Values are samples. */
  function depSkins(P) {
    var inv = [['AK-47', 'Slate', 'Field-Tested', '6.20'], ['M4A4', 'Temukau', 'Well-Worn', '4.90'],
               ['Glock-18', 'Vogue', 'Minimal Wear', '2.30'], ['USP-S', 'Cortex', 'Field-Tested', '1.20']];
    return '' +
      '<div class="wf-fund-grid">' +
        '<div class="wf-fund">' +
          '<h2 class="wf-pay-gh" id="' + P + 'h2-skins">From your Steam inventory</h2>' +
          '<p class="wf-note">Steam account <strong>' + WHO.name + '</strong></p>' +
          '<div class="wf-skindep">' +
            inv.map(function (k, i) {
              return '<label class="wf-skindep-t"><input type="checkbox" data-skin-v="' + k[3] + '"' + (i < 3 ? ' checked' : '') + '>' +
                '<span class="wf-pay-art" aria-hidden="true"></span>' +
                '<span class="wf-pay-n">' + k[0] + ' ' + k[1] + '</span><span class="wf-fig-c">' + k[2] + '</span>' +
                '<span class="wf-skindep-v">' + k[3] + ' coins</span></label>';
            }).join('') +
          '</div>' +
          '<p class="wf-note">Credited at our value for each skin once Steam completes the trade.</p>' +
        '</div>' +
        '<div>' +
          '<div class="wf-dock">' +
            '<div class="wf-recv"><span class="wf-fig-c">You will receive</span><span class="wf-recv-v" data-skin-sum>13.40 coins</span><span class="wf-fig-c" data-skin-n>3 skins</span></div>' +
            '<p class="wf-refuse" data-skin-say></p>' +
            '<div class="wf-row"><a class="wf-btn wf-btn--primary" href="' + BASE + 'deposit-crediting.html" data-skin-go>Deposit 3 skins</a></div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  var STEP2_BANNER = {
    'ceiling-pending':
      '<div class="wf-notice">' +
        '<h2 id="h2-pending">The higher limit is not in force yet</h2>' +
        '<p><strong>In force now: $40.00</strong> for the period.</p>' +
        '<p>Pending: $120.00, from the moment below.</p>' +
        '<div class="wf-moment">' +
          '<span class="wf-moment-v">22 Aug 2026, 09:15</span>' +
          '<span class="wf-moment-l">When the higher limit takes effect</span>' +
        '</div>' +
        '<div class="wf-row"><button class="wf-btn" type="button" data-cancel-raise>Cancel the raise</button></div>' +
        '<p class="wf-note" data-cancel-say>Cancelling applies now.</p>' +
      '</div>',
    'declined':
      '<div class="wf-notice">' +
        '<h2 id="h2-declined">The payment did not go through</h2>' +
        '<p>It was refused on the payment side before anything left your account.</p>' +
        '<p>No reason was given. Your deposit limit and your withdrawal figure are unchanged.</p>' +
      '</div>'
  };

  function depBody(cat, P, o) {
    if (cat === 'crypto') return depCrypto(P, o);
    if (cat === 'gift')   return depGift(P, o);
    if (cat === 'skins')  return depSkins(P);
    return depCard(P, o);
  }

  /* ---------------------------------------------------------------------
     THE LAYER ITSELF. Rail on the left, everything else on the right, one pane
     replacing two steps.
     --------------------------------------------------------------------- */
  function payLayer(host, idp, cfg) {
    if (!host || !window.WF_PAY) return;
    cfg = cfg || {};
    var idp2 = idp || '';
    var catKey = cfg.cat || 'card';
    var cat = payCat(catKey);
    if (!cfg.amount) cfg.amount = '40.00';

    host.innerHTML = '';
    host.className = 'wf-pay-lay';
    var main = el('div', 'wf-pay-main');

    // D-129: THE BANNER, THEN THE PROMO QUESTION, THEN THE METHODS. The account
    // line and the register note left; the country is a line at the foot.
    var offer = payOffer();
    if (offer) main.appendChild(offer);
    payHead(idp2).forEach(function (n) { main.appendChild(n); });

    var bhtml = STEP2_BANNER[cfg.banner] || cfg.banner;
    if (bhtml) {
      var bb = el('div');
      bb.innerHTML = bhtml;
      while (bb.firstChild) main.appendChild(bb.firstChild);
    }

    if (cfg.method) {
      main.appendChild(payChosen(cat, cfg.method));
      var body = el('div', 'wf-pay-body');
      body.innerHTML = depBody(catKey, idp2, cfg);
      main.appendChild(body);
    } else {
      ['card', 'crypto'].forEach(function (k) {
        var c = payCat(k);
        var sec = el('section', 'wf-pay-sec');
        var h = el('div', 'wf-sec-head');
        h.appendChild(el('h2', null, c.label));
        sec.appendChild(h);
        var g = el('div', 'wf-pay-g');
        payRows(k).forEach(function (r) { g.appendChild(payTile(r)); });
        sec.appendChild(g);
        main.appendChild(sec);
      });
    }
    main.appendChild(payCountry());

    host.appendChild(main);
    var dg = main.querySelector('[data-dep-go]'); if (dg && cfg.method) dg.setAttribute('data-method', cfg.method);
    mountDeposit(main);
    mountPromo(main);
    mountSkinDep(main);
    mountCryptoNet(main);
  }

  /* THE SKIN PICK SUMS WHAT IS TICKED, D-129. A checklist whose total never moves
     is a picture of a checklist, D-58. */
  function mountSkinDep(scope) {
    var picks = [].slice.call(scope.querySelectorAll('[data-skin-v]'));
    if (!picks.length) return;
    function paint() {
      var on = picks.filter(function (i) { return i.checked; });
      var sum = on.reduce(function (a, i) { return a + parseFloat(i.getAttribute('data-skin-v')); }, 0);
      var n = on.length + (on.length === 1 ? ' skin' : ' skins');
      /* THE BONUS IS ON EVERY DEPOSIT, deposit.md 2b, so it is on skins too, round
         15: the banner promised it and the sum left it out. */
      var f = depFigs(sum);
      scope.querySelector('[data-skin-sum]').textContent = f.receive + ' coins';
      scope.querySelector('[data-skin-n]').textContent = n + ', ' + sum.toFixed(2) + ' plus ' + f.bonus + ' bonus';
      scope.querySelector('[data-skin-go]').setAttribute('href', BASE + 'deposit-crediting.html?a=' + f.receive + '&m=CS2%20skins');
      scope.querySelector('[data-skin-go]').textContent = on.length ? 'Deposit ' + n : 'Pick a skin';
    }
    picks.forEach(function (i) { i.addEventListener('change', paint); });
    scope.querySelector('[data-skin-go]').addEventListener('click', function (e) {
      if (picks.some(function (i) { return i.checked; })) return;
      e.preventDefault();
      var sy = scope.querySelector('[data-skin-say]');
      if (sy) { sy.textContent = 'Nothing went through: no skin is ticked.'; sy.classList.add('is-said'); }
    });
    paint();
  }

  /* THE NETWORK PICKER MOVES THE ADDRESS AND THE NOTE, and Redeem refuses an
     empty code, round 14. Both were pictures of controls. */
  function mountCryptoNet(scope) {
    var sel = scope.querySelector('[data-dep-net]');
    if (sel) sel.addEventListener('change', function () {
      var C = COINS[sel.getAttribute('data-coin')] || COINS.Bitcoin, n = C.nets[sel.selectedIndex] || C.nets[0];
      var a = scope.querySelector('[data-dep-addr]'); if (a) a.textContent = n[1];
      var c = scope.querySelector('[data-dep-addr] + .wf-row [data-copy]'); if (c) c.setAttribute('data-copy', n[1]);
      var t = scope.querySelector('[data-dep-netnote]'); if (t) t.textContent = 'Send on ' + n[0] + ' only. Coins sent on another network are lost.';
    });
    var cr = scope.querySelector('[data-cancel-raise]');
    if (cr) cr.addEventListener('click', function () {
      var box = cr.closest('.wf-notice');
      box.innerHTML = '<h2 id="h2-pending">Raise cancelled</h2><p><strong>$40.00</strong> stays in force for the period.</p>';
    });
    var cg = scope.querySelector('[data-code-go]');
    if (cg) cg.addEventListener('click', function (e) {
      var inp = scope.querySelector('[id$="dep-code"]');
      if (inp && inp.value.trim().length >= 8) { cg.setAttribute('href', BASE + 'deposit-crediting.html?m=' + encodeURIComponent('Gift Cards')); return; }
      e.preventDefault();
      var sy = scope.querySelector('[data-code-say]');
      if (sy) { sy.textContent = inp && inp.value.trim() ? 'That is not a whole card code. Paste it as printed on the card.' : 'Nothing went through: paste the code from the card first.'; sy.classList.add('is-said'); }
    });
  }

  /* APPLY ANSWERS INSTEAD OF DOING NOTHING, D-58 AND D-102. No promo code exists in
     this product yet, so it cannot validate one. What it can do is say that, which
     is the difference between a control and a picture of one. */
  function mountPromo(scope) {
    var b = scope.querySelector('[data-promo-apply]');
    if (!b) return;
    var input = b.parentNode.querySelector('input');
    var say = scope.querySelector('[data-promo-say]');
    b.addEventListener('click', function () {
      if (!say) return;
      var v = (input && input.value || '').trim();
      say.textContent = v
        ? 'Nothing applied: no promo or partner code has been issued yet, so there is none to recognise.'
        : 'Nothing to apply: the field is empty. A code is optional and the offer above does not need one.';
      say.classList.add('is-said');
    });
  }

  /* CREDITING SHOWS WHAT WAS PAID, round 15: $40.00 by Visa whatever was typed
     or chosen. The address carries the amount and the method from the press. */
  function mountCrediting() {
    var am = document.querySelector('[data-cred-amt]'), mm = document.querySelector('[data-cred-m]');
    if (!am) return;
    var a = (/[?&]a=([0-9.]+)/.exec(location.search) || [])[1], m = (/[?&]m=([^&]+)/.exec(location.search) || [])[1];
    m = m ? decodeURIComponent(m) : '';
    if (a) am.textContent = m === 'CS2 skins' ? a + ' coins' : '$' + parseFloat(a).toFixed(2);
    if (m && mm) mm.textContent = m;
    /* EACH ROUTE WAITS ON ITS OWN PARTY, round 16, B2-1, B2-2, D1-19. Crypto and
       gift cards reached this page with no method and read $40.00 Visa; skins
       read "waiting on the payment provider". A transfer's amount is what
       arrives and a card's is what it carries, so neither is a figure here until
       it is read. Times are samples, D-124, marked in 4.4. */
    var crypto = (window.WF_PAY.crypto || []).some(function (r) { return r[0] === m; });
    var who = document.querySelector('.wf-clock-list .wf-cs-who'), when = document.querySelector('.wf-clock-list .wf-cs-c');
    var setAmt = function (t) { am.textContent = t; am.classList.add('wf-fig-missing'); };
    var lead = document.querySelector('#h2-crediting + p');
    if (m === 'CS2 skins') { if (who) who.textContent = 'waiting on Steam to complete the trade'; if (when) when.textContent = 'Steam sets this'; if (lead) lead.textContent = 'Your skins have left your Steam inventory. The balance is not there yet, and this state stays until it is.'; }
    else if (crypto) { if (lead) lead.textContent = 'Your transfer is on its way. The balance is not there yet, and this state stays until it is.'; setAmt('What arrives, read when it lands'); if (who) who.textContent = 'waiting on the ' + m + ' network'; if (when) when.textContent = 'the network sets this'; }
    else if (m === 'Gift Cards') { setAmt('What the card carries, read on redeeming'); if (who) who.textContent = 'waiting on the reseller to confirm the code'; }
    var nt = [].slice.call(document.querySelectorAll('.wf-note')).filter(function (x) { return /after 2 minutes/.test(x.textContent); })[0];
    if (nt && (m === 'CS2 skins' || crypto)) nt.innerHTML = nt.innerHTML.replace('Not there after 2 minutes?', 'Not there when the ' + (crypto ? 'network' : 'trade') + ' has finished?');
  }

  function mountPay() {
    var host = document.querySelector('[data-pay-layer]');
    if (!host) return;
    var cfg = window.WF_PAYCFG || {};
    /* THE ADDRESS CARRIES THE METHOD, round 14: every card tile opened "Visa Or
       Mastercard" and every crypto tile opened Bitcoin at /deposit. */
    var m = /[?&]m=([^&]*)/.exec(location.search);
    if (m) {
      var name = decodeURIComponent(m[1]);
      var row = window.WF_PAY.fiat.concat(window.WF_PAY.crypto).filter(function (r) { return r[0] === name; })[0];
      if (row && row[1]) { cfg.method = name; cfg.cat = row[1]; if (row[1] === 'crypto') { cfg.coin = name; if (cfg.state === 'nowallet' && name !== 'Solana') cfg.state = ''; } }
    }
    payLayer(host, '', cfg);
  }

  /* ---------------------------------------------------------------------
     THE DEPOSIT DIALOG, D-99, RESTRUCTURED BY D-100.
     THE ADDRESS SURVIVES. /deposit renders the same layer as a full page and is
     what a typed URL, a deep link, a session with no script and a person pressing
     back all land on. The dialog renders it over the surface a person is already
     on, and both call payLayer, so neither can become the reduced one.
     WHAT CHANGED WITH D-100 IS INSIDE, NOT AROUND: the layer no longer swaps
     between a step 1 and a step 2. The rail stays, the right pane changes, and
     the promo, the country, the offer and the account line never move.
     WHAT IT DOES NOT CARRY, NAMED RATHER THAN OMITTED: the outcome surfaces.
     Crediting, declined and ceiling reached are records with a state that persists
     and a person returns to them from history, so they stay at their addresses.
     THREE WAYS OUT AND A TRAP, 0.1 section 6: the close control, the scrim and
     Escape. Dismissing records nothing. Focus is trapped while it is open and
     returned to the control that opened it.
     THE IDS INSIDE IT ARE PREFIXED, because opening it over an address would
     otherwise put two of every id in one document.
     --------------------------------------------------------------------- */
  function mountDepositDialog() {
    var opener = null;
    var host = null;
    var cfg = null;

    function close() {
      if (!host) return;
      host.remove();
      host = null;
      cfg = null;
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', onKey, true);
      if (opener && document.contains(opener)) opener.focus();
      opener = null;
    }

    function onKey(e) {
      if (!host) return;
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Tab') return;
      // THE TRAP. A dialog a keyboard can walk out of behind the scrim is a scrim
      // that failed to block anything.
      var f = host.querySelectorAll('a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    // ONE HOST, RE-RENDERED. The frame, the title and the close control are built
    // once; only the layer inside changes, which is what makes the rail read as a
    // rail rather than as four buttons that rebuild the screen.
    function paint() {
      payLayer(host.querySelector('[data-pay-layer]'), 'd-', cfg);
    }

    function open(trigger) {
      if (host) return;
      opener = trigger || null;
      cfg = { cat: 'card', method: null };
      host = el('div', 'wf-dep-host');
      host.innerHTML = '' +
        '<div class="wf-dlg-scrim" data-dep-dismiss="1"></div>' +
        '<div class="wf-dlg-wrap" data-dep-dismiss="1">' +
          '<div class="wf-dlg wf-dlg--plain wf-dlg--pay" role="dialog" aria-modal="true" aria-labelledby="wf-dep-h">' +
            '<button class="wf-dlg-close" type="button" aria-label="Close">&#10005;</button>' +
            '<div class="wf-dlg-body">' +
              '<p class="wf-dlg-h" id="wf-dep-h">' + WF_STR.addFunds + '</p>' +
              '<div data-pay-layer></div>' +
            '</div>' +
          '</div>' +
        '</div>';
      document.body.appendChild(host);
      paint();
      // THE SURFACE BEHIND IS INERT AND IS NEVER REMOVED. The case the person was
      // looking at is exactly what the funding is for.
      document.documentElement.style.overflow = 'hidden';
      document.addEventListener('keydown', onKey, true);
      var f = host.querySelector('.wf-dlg-close');
      if (f) f.focus();
    }

    document.addEventListener('click', function (e) {
      // Out first, so a dismissal inside an open layer never falls through to the
      // openers below it.
      if (host) {
        if (e.target.closest('.wf-dlg-close') || (e.target.getAttribute && e.target.hasAttribute('data-dep-dismiss'))) {
          e.preventDefault(); close(); return;
        }
        var cat = e.target.closest('[data-pay-cat]');
        if (cat && host.contains(cat)) {
          e.preventDefault();
          cfg.cat = cat.getAttribute('data-pay-cat');
          cfg.method = null;
          paint();
          return;
        }
        // A TILE INSIDE THE LAYER CHANGES THE RIGHT PANE. At the address the same
        // tile is a link to the same route at its own address, which is the two
        // carriers rendering one route rather than two behaviours.
        var tile = e.target.closest('[data-pay-method]');
        if (tile && host.contains(tile)) {
          e.preventDefault();
          cfg.cat = tile.getAttribute('data-pay-kind');
          cfg.method = tile.getAttribute('data-pay-method');
          paint();
          return;
        }
      }
      var t = e.target.closest('[data-dep-open]');
      if (!t) return;
      e.preventDefault();
      open(t);
    });

    // THE CANON PAGE renders it open on load, because a canon nobody can see
    // without a click is a canon nobody checks.
    var pinned = document.querySelector('[data-dep-pinned]');
    if (pinned) open(null);
  }

  /* ---------------------------------------------------------------------
     THE CASH OUT DIALOG, D-118. Founder, with the live product's layer beside
     ours: "cash out - кстати это про крипту, нам нужен диалог вывода средств
     через крипту. Мы делаем в инвентаре кнопку cash-out, по которой будет диалог
     с выводом скина как крипта."
     THIS REVERSES A STAGE 02 DEFERRAL AND THE REVERSAL IS THE RECORD. A fiat or
     crypto withdrawal path was deferred in jtbd.md's Candidate-for-Cut list and
     cjm-to-be.md says in as many words that it is "not re-litigated here". So
     this capability has NO PARENT IN ANY OF THE THREE LEGAL CLASSES, exactly like
     the daily free case, and it is in round 1 by founder decision carrying that
     cost in the open.
     THE BUILD WAS RIGHT TO REFUSE IT AND WRONG ABOUT WHY. account.html carried
     the comment "CASH-OUT IS NOT DRAWN: paying out to real money has no row in
     cjm-to-be.md and no node on the map, and drawing it would invent a capability
     at wireframe stage." Correct on both facts. What it could not know is that
     the founder had a live layer for it, which makes this a missing input rather
     than a missing capability, and the input gate exists to ask rather than to
     assume either way.
     THREE NETWORKS AND ONE OF THEM CANNOT BE SENT TO YET. Founder answer of
     2 September 2026: ETH, LTC, USDT, and WHICH USDT NETWORK IS [?]. A USDT
     address with no chain named is money sent to nothing, so the tab is drawn,
     the field stays live and THE PRESS REFUSES WITH THE REASON, D-58: a control
     that refuses says what is missing, a dimmed one says only that somebody
     decided something.
     THE FEE IS A SAMPLE, SO THE RESULT OF THE CALCULATOR IS A SAMPLE, D-124.
     The live product puts a blockchain fee in this layer. Ours has no decided
     figure; the canonical render draws one and node 5.1 says it is a sample.
     WHAT THE LIVE LAYER SAYS AND OURS DOES NOT. The baseline's notice reads that
     cashing out forfeits the deposit bonus for the rest of the day and free case
     battles and giveaways. Two of those three do not exist for us at all, battles
     and giveaways are LATER, and whether OUR deposit bonus, D-94, is forfeited by
     a cash out IS NOT DECIDED. D-107: our side of an unknown is that we have not
     decided, and only what we have failed to tell a person is a fact about them.
     So the sentence is not on the layer. It is an open question in node 5.1.
     --------------------------------------------------------------------- */
  var CO_NETS = [
    /* FEE AND RATE ARE SAMPLES BY D-124, second pass of round 13: the canonical
       layer printed three unknowns in a five-line sum. The fee is in coins, the
       rate is coins per unit, and node 5.1 carries both as samples. The Tether
       chain is a sample too; which chain is still the founder's call. */
    { key: 'eth',  name: 'Ethereum', tick: 'ETH',  chain: 'Ethereum', fee: 2.40, rate: 2450, dp: 6, min: 10, re: /^0x[0-9a-fA-F]{40}$/,
      saved: [{ label: 'Main wallet', v: '0x7a1f4c2e9b0d5583a17c4e2f9b6d0c8a3e51f742' }] },
    { key: 'ltc',  name: 'Litecoin', tick: 'LTC',  chain: 'Litecoin', fee: 0.05, rate: 84.20, dp: 6, min: 2, re: /^(ltc1[0-9a-z]{25,60}|[LM][1-9A-HJ-NP-Za-km-z]{26,33})$/, saved: [] },
    { key: 'usdt', name: 'Tether',   tick: 'USDT', chain: 'Tron (TRC-20)', fee: 1.00, rate: 1, dp: 2, min: 5, re: /^T[1-9A-HJ-NP-Za-km-z]{33}$/, saved: [] }
  ];

  function coRow(k, v, missing, sub) {
    var r = el('div', 'wf-co-r' + (sub ? ' wf-co-r--sub' : ''));
    r.appendChild(el('span', 'wf-co-k', k));
    r.appendChild(missing ? el('span', 'wf-co-v wf-fig-missing', v) : el('span', 'wf-co-v', v));
    return r;
  }

  /* THE AMOUNT IS READ FROM THE TICKED ITEMS AND NEVER TYPED. A cash out here is
     a sell back with the money leaving, so what goes out is decided by which
     skins are ticked, on the grid, before this layer opens. A free amount field
     would be a second way to say the same thing and the two would disagree. */
  function coPicked() {
    var picks = [].slice.call(document.querySelectorAll('[data-inv-pick]'));
    if (picks.length) {
      var on = picks.filter(function (i) { return i.checked; });
      return {
        n: on.length,
        v: on.reduce(function (a, i) { return a + parseFloat(i.getAttribute('data-v') || '0'); }, 0)
      };
    }
    var f = window.WF_CO || {};
    return { n: f.n || 0, v: f.v || 0 };
  }

  function coLayer(host, st) {
    host.innerHTML = '';
    var net = CO_NETS[st.net];

    /* THE THREE NETWORKS AS A TAB STRIP, the live product's own shape. The
       current one is a pressed button and not a link to itself. */
    var tabs = el('div', 'wf-co-nets');
    tabs.setAttribute('role', 'tablist');
    tabs.setAttribute('aria-label', 'Network');
    CO_NETS.forEach(function (n, i) {
      var b = el('button', 'wf-co-net' + (i === st.net ? ' is-on' : ''), n.name);
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', i === st.net ? 'true' : 'false');
      b.setAttribute('data-co-net', String(i));
      var t = el('span', 'wf-co-tick', n.tick);
      b.appendChild(t);
      tabs.appendChild(b);
    });
    host.appendChild(tabs);

    /* THE CHAIN IS NAMED UNDER THE STRIP, because "Tether" is a coin and a coin
       is not an address space. Where we have not decided which chain, the line
       says that to the person instead of leaving the field to imply any. */
    var chain = el('p', 'wf-co-chain');
    if (net.chain) {
      chain.appendChild(document.createTextNode('Sent on the '));
      chain.appendChild(el('b', null, net.chain));
      chain.appendChild(document.createTextNode(' network.'));
    } else {
      chain.appendChild(el('span', 'wf-fig-missing', 'Which network we send ' + net.tick + ' on is not published yet. Until it is, an address here cannot be checked and nothing can be sent.'));
    }
    host.appendChild(chain);

    var fld = el('div', 'wf-co-addr');
    var lab = el('label', 'wf-co-lab', net.name + ' address');
    lab.setAttribute('for', 'co-addr');
    fld.appendChild(lab);
    if (net.saved.length) {
      var sel = el('select', 'wf-co-sel');
      sel.setAttribute('data-co-saved', '');
      sel.setAttribute('aria-label', 'Saved ' + net.name + ' addresses');
      // THE SAVED ADDRESS IS PICKED ALREADY, round 14: the press refused "an
      // address is needed" while one sat in the select.
      net.saved.forEach(function (a) {
        var o = el('option', null, a.label + ' · ' + a.v.slice(0, 6) + '…' + a.v.slice(-4));
        o.value = a.v;
        sel.appendChild(o);
      });
      var o0 = el('option', null, 'Another address');
      o0.value = '';
      sel.appendChild(o0);
      if (st.addr === '' && !st.touched) st.addr = net.saved[0].v;
      fld.appendChild(sel);
    } else {
      fld.appendChild(el('p', 'wf-co-none', 'No saved ' + net.name + ' address on this account yet.'));
    }
    var row = el('div', 'wf-co-inrow');
    var inp = el('input', 'wf-co-in');
    inp.type = 'text';
    inp.id = 'co-addr';
    inp.setAttribute('data-co-in', '');
    inp.setAttribute('spellcheck', 'false');
    inp.value = st.addr || '';
    inp.placeholder = 'Paste the address';
    row.appendChild(inp);
    fld.appendChild(row);
    host.appendChild(fld);

    /* THE CALCULATOR, AND IT IS THE PRODUCT'S OWN SUM RATHER THAN A PICTURE OF
       ONE. Two rows are read live off the grid and three follow from the sample
       fee and rate. D-94's rule holds here as it does on
       the deposit: a line in a sum gets checked, a badge only asserts. */
    var p = coPicked();
    var calc = el('div', 'wf-co-calc');
    calc.appendChild(el('h3', 'wf-co-h', 'What goes out'));
    calc.appendChild(coRow('Items selected', p.n + (p.n === 1 ? ' item' : ' items')));
    calc.appendChild(coRow('Their value', wdFmt(p.v) + ' coins'));
    calc.appendChild(coRow('Blockchain fee', '-' + wdFmt(net.fee) + ' coins'));
    calc.appendChild(coRow('Smallest cash out', wdFmt(net.min) + ' coins'));
    var rec = Math.max(0, p.v - net.fee);
    var out = el('div', 'wf-co-out');
    out.appendChild(coRow('You receive', wdFmt(rec) + ' coins, $' + wdFmt(rec) + ' at ' + WF_STR.peg));
    out.appendChild(coRow('In ' + net.tick, (rec / net.rate).toFixed(net.dp) + ' ' + net.tick + ', at ' + wdFmt(net.rate).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' coins each', false, true));
    calc.appendChild(out);
    host.appendChild(calc);

    /* THE PRESS IS LIVE AND IT REFUSES, D-58. Three grounds and it names the one
       that applies rather than dimming and naming none. */
    var acts = el('div', 'wf-co-acts');
    var go = el('button', 'wf-btn wf-btn--primary', 'Request cash out');
    go.type = 'button';
    go.setAttribute('data-co-go', '');
    acts.appendChild(go);
    var cl = el('button', 'wf-btn', 'Close');
    cl.type = 'button';
    cl.setAttribute('data-co-dismiss', '1');
    acts.appendChild(cl);
    host.appendChild(acts);
    var say = el('p', 'wf-refuse', '');
    say.setAttribute('data-co-say', '');
    say.hidden = true;
    host.appendChild(say);

    /* WHAT HAPPENS AFTER THE PRESS, SAID BEFORE IT. A request is reviewed by us
       and then either sent or blocked, which is the founder's own description,
       and a person who does not know a review exists reads the wait as a fault. */
    host.appendChild(el('p', 'wf-note', 'A request is reviewed before anything is sent. Every state it passes through is on the Cash out tab of your history.'));
  }

  /* THE TWO LIVE COUNTERS IN THE FOOTER, D-121. baseline.md section on the strip
     records cases opened moving across three reads minutes apart, +30 then +48,
     and total users standing still across all three. So one of these counters is
     cumulative and moving, one is a headcount that moves both ways, and two do
     not move at all in a session. THE STRIP NOW RENDERS THAT DIFFERENCE instead
     of printing four numbers that all look equally frozen.
     REDUCED MOTION IS HONOURED AND THE FIGURE STILL ARRIVES. A person who asked
     the system for less motion gets the number and not the ticking, which is the
     right half to keep: the value is information and the movement is emphasis. */
  function mountFooterTicks() {
    var els = [].slice.call(document.querySelectorAll('[data-tick]'));
    if (!els.length) return;
    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (still) return;

    function read(node) { return parseInt(node.textContent.replace(/\s/g, ''), 10); }
    function write(node, n) {
      node.textContent = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    els.forEach(function (node) {
      var kind = node.getAttribute('data-tick');
      var n = read(node);
      if (!isFinite(n)) return;
      if (kind === 'up') {
        /* CUMULATIVE AND ONE DIRECTION. A total of cases opened that ever went
           down would be saying a case was un-opened. */
        setInterval(function () {
          n += 1 + Math.floor(Math.random() * 2);
          write(node, n);
        }, 2600 + Math.floor(Math.random() * 2200));
      } else {
        /* A HEADCOUNT MOVES BOTH WAYS AND IT IS BOUNDED. It drifts around where it
           started rather than walking away from it, because a session left open
           for an hour must not end with a number nobody wrote. */
        var base = n;
        setInterval(function () {
          n += Math.round((Math.random() - 0.5) * 7);
          if (n < base - 40) n = base - 40;
          if (n > base + 40) n = base + 40;
          if (n < 1) n = 1;
          write(node, n);
        }, 5000 + Math.floor(Math.random() * 4000));
      }
    });
  }

  function mountCashout() {
    var opener = null, host = null, st = null;

    function close() {
      if (!host) return;
      host.remove();
      host = null; st = null;
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', onKey, true);
      if (opener && document.contains(opener)) opener.focus();
      opener = null;
    }

    function onKey(e) {
      if (!host) return;
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Tab') return;
      var f = host.querySelectorAll('a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    function paint() { coLayer(host.querySelector('[data-co-layer]'), st); }

    function open(trigger) {
      if (host) return;
      opener = trigger || null;
      st = { net: 0, addr: '', touched: false };
      host = el('div', 'wf-co-host');
      host.innerHTML = '' +
        '<div class="wf-dlg-scrim" data-co-dismiss="1"></div>' +
        '<div class="wf-dlg-wrap" data-co-dismiss="1">' +
          '<div class="wf-dlg wf-dlg--plain wf-dlg--co" role="dialog" aria-modal="true" aria-labelledby="wf-co-h">' +
            '<button class="wf-dlg-close" type="button" aria-label="Close">&#10005;</button>' +
            '<div class="wf-dlg-body">' +
              '<p class="wf-dlg-h" id="wf-co-h">Cash out</p>' +
              '<p class="wf-dlg-sub">The items you ticked are sold back, and the money goes to a wallet you own.</p>' +
              '<div class="wf-co-lay" data-co-layer></div>' +
            '</div>' +
          '</div>' +
        '</div>';
      document.body.appendChild(host);
      paint();
      document.documentElement.style.overflow = 'hidden';
      document.addEventListener('keydown', onKey, true);
      var f = host.querySelector('.wf-dlg-close');
      if (f) f.focus();
    }

    document.addEventListener('click', function (e) {
      if (host) {
        if (e.target.closest('.wf-dlg-close') ||
            (e.target.getAttribute && e.target.hasAttribute('data-co-dismiss'))) {
          e.preventDefault(); close(); return;
        }
        var nt = e.target.closest('[data-co-net]');
        if (nt && host.contains(nt)) {
          e.preventDefault();
          st.addr = ''; st.touched = true;
          st.net = parseInt(nt.getAttribute('data-co-net'), 10);
          paint();
          return;
        }
        /* The address Save left with D-134, and its handler with it, round 16, D1-6. */
        var g = e.target.closest('[data-co-go]');
        if (g && host.contains(g)) {
          e.preventDefault();
          var say = host.querySelector('[data-co-say]');
          var net = CO_NETS[st.net];
          var addr = ((host.querySelector('[data-co-in]') || {}).value || '').trim();
          var p = coPicked();
          say.hidden = false;
          if (!p.n) say.textContent = 'Nothing is ticked. Cashing out needs at least one item, chosen on the grid behind this.';
          else if (!net.chain) say.textContent = 'Which network we send ' + net.tick + ' on is not published yet, so an address cannot be checked and this request cannot go.';
          else if (!addr) say.textContent = (/^[AEIOU]/.test(net.name) ? 'An ' : 'A ') + net.name + ' address is needed. Nothing is sent anywhere without one.';
          else if (net.re && !net.re.test(addr)) say.textContent = 'That is not ' + (/^[AEIOU]/.test(net.name) ? 'an ' : 'a ') + net.name + ' address. Check it and paste it whole: coins sent to a wrong address are lost.';
          else if (p.v < net.min) say.textContent = 'The smallest cash out on ' + net.name + ' is ' + net.min.toFixed(2) + ' coins. Tick more, or sell back instead.';
          else {
            say.textContent = 'Requested. ' + ((p.v - net.fee) / net.rate).toFixed(net.dp) + ' ' + net.tick + ' goes to ' + addr.slice(0, 6) + '…' + addr.slice(-4) + '. It is in History under Cash out.';
            /* THE REQUEST LEAVES A TRACE, round 16, B2-25: the items it sold
               back leave the grid and the value held, for this session. */
            Array.prototype.forEach.call(document.querySelectorAll('[data-inv-pick]:checked'), function (i) {
              var c = i.closest('.wf-inv-card'); WF_SESS.gone(invKey(c), 'cashed');
              i.checked = false; i.disabled = true; c.classList.add('is-sold');
              var a = c.querySelector('.wf-inv-acts'); if (a) a.innerHTML = '<p class="wf-inv-sold">Cash out requested</p>';
              i.dispatchEvent(new Event('change'));
            });
            if (document.querySelector('[data-inv-pick]')) moneyAdd(0, -p.v);
            g.disabled = true;
          }
          return;
        }
      }
      var t = e.target.closest('[data-co-open]');
      if (!t) return;
      e.preventDefault();
      /* NOTHING TICKED, NOTHING OPENS, round 16, B2-24: the bar said "Tick an
         item first" and the dialog opened over it anyway. */
      var pk = document.querySelectorAll('[data-inv-pick]');
      if (pk.length && !document.querySelector('[data-inv-pick]:checked')) return;
      open(t);
    });

    document.addEventListener('change', function (e) {
      if (!host) return;
      var sel = e.target.closest('[data-co-saved]');
      if (sel && host.contains(sel) && sel.value) {
        var inp = host.querySelector('[data-co-in]');
        if (inp) inp.value = sel.value;
      }
    });

    /* THE PINNED PAGE renders it open on load, the same contract the deposit
       layer runs under: a layer nobody can see without a click is a layer
       nobody reviews. */
    var pinned = document.querySelector('[data-co-pinned]');
    if (pinned) open(null);
  }

  function mountHist() {
    var tabsHost = document.querySelector('[data-hist-tabs]');
    if (tabsHost) {
      var here = window.WF_HISTTAB || 'rolls';
      var strip = el('nav', 'wf-htabs');
      strip.setAttribute('aria-label', WF_STR.history);
      HIST_TABS.forEach(function (t) {
        if (t.key === here) {
          var c = el('span', 'wf-tabb is-on', t.label);
          c.setAttribute('aria-current', 'page');
          strip.appendChild(c);
        } else {
          var a = el('a', 'wf-tabb', t.label);
          a.href = BASE + t.file;
          strip.appendChild(a);
        }
      });
      tabsHost.appendChild(strip);
    }

    var host = document.querySelector('[data-hist-list]');
    if (host) host.appendChild(histPanel(host.getAttribute('data-hist-list'), window.WF_HIST || {}));
  }

  /* THE SORT KEYS ARE REAL AND THEY REORDER THE GRID, D-89. A control that
     changes nothing is a picture of one, D-58, and a sort is the cheapest control
     in the product to make real: every card carries the two values it sorts on.
     PRESSING THE ACTIVE KEY FLIPS IT, PRESSING THE OTHER MOVES THE SORT.
     The pressed key names the order; the line that repeated it under the bar
     went with D-128. */
  function mountInvSort() {
    var set = document.querySelector('[data-sortset]');
    if (!set) return;
    var grid = document.querySelector('.wf-grid--inv');
    if (!grid) return;
    var keys = [].slice.call(set.querySelectorAll('[data-sort]'));

    function apply() {
      var on = keys.filter(function (b) { return b.getAttribute('aria-pressed') === 'true'; })[0] || keys[0];
      var k = on.getAttribute('data-sort');
      var desc = on.getAttribute('data-dir') === 'desc';
      var cards = [].slice.call(grid.children);
      cards.sort(function (a, b) {
        var av, bv;
        if (k === 'value') {
          av = parseFloat(a.getAttribute('data-v') || '0');
          bv = parseFloat(b.getAttribute('data-v') || '0');
        } else {
          av = a.getAttribute('data-when') || '';
          bv = b.getAttribute('data-when') || '';
        }
        if (av < bv) return desc ? 1 : -1;
        if (av > bv) return desc ? -1 : 1;
        return 0;
      });
      cards.forEach(function (c) { grid.appendChild(c); });
      keys.forEach(function (b) {
        var isOn = b === on;
        var d = b.getAttribute('data-dir') === 'desc';
        b.textContent = b.getAttribute(d ? 'data-hi' : 'data-lo');
        b.setAttribute('aria-pressed', isOn ? 'true' : 'false');
      });
    }

    keys.forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.getAttribute('aria-pressed') === 'true') {
          b.setAttribute('data-dir', b.getAttribute('data-dir') === 'desc' ? 'asc' : 'desc');
        } else {
          keys.forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
          b.setAttribute('aria-pressed', 'true');
        }
        apply();
      });
    });
    apply();
  }

  function mountSystem() {
    var root = document.querySelector('[data-sys]');
    if (!root) return;

    /* THE RETRY, on the two 503 pages. A CONTROL, NEVER A LOOP: a page that
       refreshes itself takes the choice away, keeps hammering a server that is
       already refusing, and on a screen reader restarts the page on every cycle.
       It answers politely and it counts, because a person who has pressed it four
       times is owed the fact that they have. */
    var retry = root.querySelector('[data-sys-retry]');
    if (retry) {
      var say = root.querySelector('[data-sys-retrysay]');
      var tries = 0;
      retry.addEventListener('click', function () {
        tries += 1;
        // NO CLOCK, round 15: the device's time sat beside the page's stated return
        // time, hours apart, because a prototype's now is not the device's.
        if (say) {
          say.textContent = 'Asked again just now. Still unavailable, and it is still us. '
            + (tries === 1 ? '' : tries + ' attempts from here so far. ')
            + 'Nothing is reloading on its own.';
        }
      });
    }

    /* C. Copy the reference. The string is in the DOM in full, so it is selectable
       and a screen reader reads all of it; the truncation is visual and it is in
       the middle, per 0.14 section 5. A reference nobody can hand to support is a
       failure support cannot look up, which makes the published deadline in G4
       unmeetable. */
    var copy = root.querySelector('[data-sys-copy]');
    if (copy) {
      var mark = root.querySelector('[data-sys-copied]');
      copy.addEventListener('click', function () {
        var full = copy.getAttribute('data-sys-copy') || '';
        // THE ANSWER DOES NOT WAIT ON THE CLIPBOARD, round 14: where the promise
        // never settles, the press said nothing.
        if (mark) mark.textContent = 'Copied'; else { copy.textContent = 'Copied'; }
        try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(full); } catch (e) {}
      });
    }
  }

  /* ---------- NODE 0.4, COOKIE CONSENT ----------
     BUILT ONCE HERE AND PINNED BY THE PAGE, the same contract the sign in dialog
     and the filter drawer already use: eight copies of the one object this node
     exists for is how seven of them rot.
     TWO LAYERS. Layer 1 carries the two decisions, the quieter Manage control and
     the policy link. Layer 2 carries one row per purpose, the strictly necessary
     row that is not a control at all, and the same two decisions again so that a
     person who opened it to read does not have to build an answer by hand.
     NOT A MODAL. No aria-modal, no focus trap, no scrim, and the document is never
     given overflow: hidden. Article 7(4) makes conditionality a factor in whether
     consent is free at all, so trapping focus is that conditionality in
     interaction form. The page reads and scrolls with the answer still pending.
     NO DISMISS CONTROL, and that is the baseline's defect refused rather than an
     omission: the live product's banner has an X that closes it without recording
     anything, which recital 32 answers directly, "silence, pre-ticked boxes or
     inactivity should not therefore constitute consent". There is nothing here to
     press that is not an answer or a route to one. */
  var CK_PURPOSES = [
    { key: 'necessary', name: 'Strictly necessary', fixed: true,
      d: 'Signing you in, keeping you signed in, security, and remembering the answer you give here.',
      why: 'Always on.' },
    { key: 'analytics', name: 'Analytics',
      d: 'Counting how many people use each part of the site, so we can tell what is working. Nothing here identifies you to anyone outside this company.' },
    { key: 'marketing', name: 'Marketing',
      d: 'Measuring whether an advert brought you here.' }
  ];

  var CK_STATES = {
    pending:  { layer: 1 },
    expired:  { layer: 1, why: 'expired' },
    nostore:  { layer: 1, why: 'nostore' },
    manage:   { layer: 2 },
    accepted: { layer: 2, answer: { analytics: true,  marketing: true  }, saved: '20 Aug 2026 at 14:02' },
    rejected: { layer: 2, answer: { analytics: false, marketing: false }, saved: '20 Aug 2026 at 14:02' },
    partial:  { layer: 2, answer: { analytics: true,  marketing: false }, saved: '20 Aug 2026 at 14:02' },
    changed:  { layer: 2, answer: { analytics: false, marketing: false }, saved: '21 Aug 2026 at 09:12', changed: true }
  };

  function mountCookie() {
    var body = document.querySelector('.wf-screen-body');
    if (!body) return;

    var declared = body.getAttribute('data-cookie');
    var cfg = (declared && CK_STATES[declared]) || null;
    // The answer this page declares. null on both non-essential purposes means no
    // answer has been given, which is NOT the same as an answer of no: layer 2 from
    // a pending state shows the toggles off because nothing was chosen, and the
    // rejected state shows them off because they were refused. Same picture, two
    // different facts, and the record line is what tells them apart.
    var answer = cfg && cfg.answer ? { analytics: cfg.answer.analytics, marketing: cfg.answer.marketing }
                                   : { analytics: null, marketing: null };
    var saved = cfg ? (cfg.saved || null) : null;
    var region = null;

    function close() {
      if (region) { region.remove(); region = null; }
    }

    function announce(msg) {
      var live = document.getElementById('wf-ck-live');
      if (live) live.textContent = msg;
    }

    function save(all) {
      if (all === true)  { answer.analytics = true;  answer.marketing = true; }
      if (all === false) { answer.analytics = false; answer.marketing = false; }
      saved = 'just now';
      close();
      // POLITE, NEVER ASSERTIVE. 0.5 owns the live region contract and this is a
      // confirmation of something the person just did, not a failure of one.
      announce('Your choice is saved. You can change it from Cookie settings at the foot of any page.');
    }

    function recordBlock() {
      var r = el('div', 'wf-ck-rec');
      r.appendChild(el('span', 'wf-ck-rec-k', 'Your answer, as we have it'));
      if (!saved) {
        r.appendChild(el('span', 'wf-ck-rec-v', 'Nothing recorded yet. Until you answer, only the strictly necessary set is stored.'));
        return r;
      }
      r.appendChild(el('span', 'wf-ck-rec-v',
        'Analytics ' + (answer.analytics ? 'on' : 'off') + ', marketing ' + (answer.marketing ? 'on' : 'off')));
      r.appendChild(el('span', 'wf-ck-rec-k', 'Saved'));
      r.appendChild(el('span', 'wf-ck-rec-v', saved));
      // A POLICY THAT CHANGES SILENTLY INVALIDATES THE CONSENT GIVEN UNDER THE OLD
      // ONE, which is the same argument 0.9 makes for version history and 0.14 for
      // the proof scheme. So the record carries which version was agreed to.
      r.appendChild(el('span', 'wf-ck-rec-k', 'Against'));
      r.appendChild(el('span', 'wf-ck-rec-v', 'Cookie policy v3'));
      return r;
    }

    function decisions() {
      var acts = el('div', 'wf-ck-acts');
      // THE SAME CLASS ON BOTH AND NEITHER IS PRIMARY. In grey, weight is the only
      // difference a stylesheet can express, so the two decisions carry none.
      [['Accept all', true], ['Reject all', false]].forEach(function (d) {
        var btn = el('button', 'wf-btn wf-ck-b', d[0]);
        btn.type = 'button';
        btn.setAttribute('data-ck-answer', String(d[1]));
        btn.addEventListener('click', function () { save(d[1]); });
        acts.appendChild(btn);
      });
      return acts;
    }

    function layer1() {
      var sec = el('section', 'wf-ck');
      sec.setAttribute('role', 'region');
      sec.setAttribute('data-ck-layer', '1');
      var inn = el('div', 'wf-ck-in');
      var h = el('p', 'wf-ck-h', 'Before we store anything on your device');
      h.id = 'wf-ck-h';
      sec.setAttribute('aria-labelledby', 'wf-ck-h');
      inn.appendChild(h);
      if (cfg && cfg.why === 'expired') {
        inn.appendChild(el('p', 'wf-ck-p-say', 'You answered this before and that answer has run out, so we are asking again. Nothing beyond the strictly necessary set has been stored since it ran out.'));
        inn.appendChild(el('p', 'wf-ck-p-say', 'We ask again after 12 months.'));
      } else if (cfg && cfg.why === 'nostore') {
        inn.appendChild(el('p', 'wf-ck-p-say', 'We could not save your last answer because this browser does not let the site store it, so we are asking again. Only the strictly necessary set runs meanwhile.'));
      } else {
        inn.appendChild(el('p', 'wf-ck-p-say', 'A few things are stored on your device to keep this site working. Beyond those we store nothing until you say so, and you can change your answer at any time from the foot of any page.'));
      }
      inn.appendChild(decisions());
      var more = el('div', 'wf-ck-more');
      var mg = el('button', 'wf-btn wf-btn--small', 'Manage purposes');
      mg.type = 'button';
      mg.addEventListener('click', function () { render(2); });
      more.appendChild(mg);
      // THE POLICY LINK WORKS BEFORE CONSENT IS GIVEN, which 0.2 already guarantees:
      // a consent dialog that links to a policy the consent gate blocks is circular.
      var pol = el('a', null, WF_STR.cookiePolicy);
      pol.href = BASE + 'legal-unpublished.html?doc=cookie';
      more.appendChild(pol);
      inn.appendChild(more);
      sec.appendChild(inn);
      return sec;
    }

    function layer2() {
      var sec = el('section', 'wf-ck');
      sec.setAttribute('role', 'region');
      sec.setAttribute('data-ck-layer', '2');
      var inn = el('div', 'wf-ck-in');
      var h = el('p', 'wf-ck-h', 'Choose what we may store');
      h.id = 'wf-ck-h';
      sec.setAttribute('aria-labelledby', 'wf-ck-h');
      inn.appendChild(h);
      if (cfg && cfg.changed) {
        // ARTICLE 7(3) IS EXPLICIT THAT WITHDRAWAL DOES NOT UNDO WHAT CAME BEFORE,
        // so nothing here is retroactive and nothing pretends to be.
        inn.appendChild(el('p', 'wf-ck-p-say', 'Your new answer applies from the moment you save it. It does not undo what was collected while the old answer stood.'));
      }
      var ul = el('ul', 'wf-ck-list');
      CK_PURPOSES.forEach(function (pz) {
        if (pz.fixed) {
          var li = el('li', 'wf-ck-row wf-ck-row--fixed');
          li.appendChild(el('span', 'wf-ck-fixed', 'ON'));
          li.appendChild(el('span', 'wf-ck-n', pz.name));
          var dd = el('span', 'wf-ck-d');
          dd.appendChild(document.createTextNode(pz.d + ' '));
          dd.appendChild(el('strong', null, pz.why));
          li.appendChild(dd);
          ul.appendChild(li);
          return;
        }
        var row = el('li', 'wf-ck-row');
        var cb = el('input');
        cb.type = 'checkbox';
        cb.id = 'ck-' + pz.key;
        // NO PRE-TICKED BOXES, recital 32 by name. Off is the state of a question
        // nobody has answered, and it stays off until an act changes it.
        cb.checked = answer[pz.key] === true;
        cb.addEventListener('change', function () { answer[pz.key] = cb.checked; });
        var name = el('label', 'wf-ck-n', pz.name);
        name.setAttribute('for', cb.id);
        row.appendChild(cb);
        row.appendChild(name);
        var d = el('span', 'wf-ck-d');
        d.appendChild(document.createTextNode(pz.d));
        if (pz.unknown) {
          d.appendChild(document.createElement('br'));
          d.appendChild(el('span', 'wf-fig-missing', pz.unknown));
        }
        row.appendChild(d);
        ul.appendChild(row);
      });
      inn.appendChild(ul);
      inn.appendChild(recordBlock());
      // LAYER 2 CARRIES THE TWO DECISIONS AS WELL, so somebody who opened it to read
      // is not made to assemble an answer by hand as the price of having looked.
      inn.appendChild(decisions());
      var more = el('div', 'wf-ck-more');
      var sv = el('button', 'wf-btn wf-btn--small', 'Save my choices');
      sv.type = 'button';
      sv.addEventListener('click', function () { save(null); });
      more.appendChild(sv);
      var pol = el('a', null, WF_STR.cookiePolicy);
      pol.href = BASE + 'legal-unpublished.html?doc=cookie';
      more.appendChild(pol);
      inn.appendChild(more);
      sec.appendChild(inn);
      return sec;
    }

    function render(layer) {
      close();
      region = layer === 1 ? layer1() : layer2();
      body.appendChild(region);
    }

    // The live region is in the DOM from first paint and empty, 0.5 section 6: a
    // region injected at the moment of the message is unreliable, because what is
    // announced is a change inside a region that was already being watched.
    if (!document.getElementById('wf-ck-live')) {
      var live = el('span', 'wf-vh');
      live.id = 'wf-ck-live';
      live.setAttribute('role', 'status');
      live.setAttribute('aria-live', 'polite');
      body.appendChild(live);
    }

    // THE RE-OPEN ROUTE, AND IT WORKS ON EVERY PAGE RATHER THAN ONLY ON THIS NODE'S.
    // Article 7(3) verbatim: "It shall be as easy to withdraw as to give consent."
    // 0.2 gained the control in the step 8 audit and it has been a button with no
    // handler on all ninety four pages ever since, because the thing it opens did
    // not exist yet. D-58: a control that does not do its thing is a picture of it.
    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-ck-open]');
      if (!t) return;
      e.preventDefault();
      render(2);
      var first = region.querySelector('input, button, a');
      if (first) first.focus();
    });

    if (cfg) render(cfg.layer);
  }

  /* ---------- NODE 5.11, SETTINGS ----------
     ONE FIELD, AND IT IS THE ONE THE EXIT NEEDS. Withdrawal to Steam works by
     sending a trade offer, a trade offer needs a trade URL, and no node on the
     map held that field: withdrawal.md names blocked countries, Steam trade holds
     and Steam-side bans as its three limits before the request, and never names
     the one precondition the person themselves controls.
     THE VALUE IS CHECKED WHEN IT IS OFFERED, NOT AT THE EXIT. A field that saves
     anything and fails three days later inside a withdrawal is barrier B8-3's
     shape with a text input in front of it, and C4 already fixed the rule: what
     is required to withdraw is stated before the money moves.
     NOTHING SAVES WITHOUT A PRESS. An account setting that commits on blur is one
     a person changes by scrolling past it. */
  /* A SWITCH SAYS WHAT IT DID, D-130. A value line that reads "On" under a switch
     that has been turned off is a picture of a setting. */
  function mountSwitches() {
    [].forEach.call(document.querySelectorAll('[data-sw-for]'), function (v) {
      var i = document.getElementById(v.getAttribute('data-sw-for'));
      if (!i) return;
      function paint() { v.textContent = v.getAttribute(i.checked ? 'data-sw-on' : 'data-sw-off'); }
      i.addEventListener('change', paint);
      paint();
    });
  }

  /* THE SETTINGS ROWS AND THE RAIL ARE ONE SETTING, round 14. Language offered
     only English here while the rail offered nine, and the sound switch moved
     without the rail following or its own value line changing. */
  /* WHERE YOU LIVE SAVES, round 14: the press had no handler on a compliance
     control. It answers and moves the date. */
  /* ONE COUNTRY FOR THE SESSION, round 15, the way language and sound are one
     setting: what settings saves is what the deposit lists methods for. */
  function countryNow() { try { return sessionStorage.getItem('wf-country') || 'Ukraine'; } catch (e) { return 'Ukraine'; } }
  function mountCountry() {
    var b = document.querySelector('[data-country-save]');
    if (!b) return;
    var sel = document.getElementById('cfg-country');
    if (sel) sel.value = countryNow();
    b.addEventListener('click', function () {
      var w = b.parentNode.querySelector('.wf-quick-w');
      try { if (sel) sessionStorage.setItem('wf-country', sel.value); } catch (e) {}
      if (w) w.textContent = 'Saved: ' + (sel ? sel.value : '') + ', 21 Aug 2026';
    });
  }

  /* THE SUPERSEDED PAGE SHOWS THE VERSION ASKED FOR, round 14: "Read this
     version" on v2 and v1 opened v3. Dates are samples, marked in 0.9. */
  function mountLegalVersion() {
    var m = /[?&]v=(\d)/.exec(location.search);
    if (!m || !document.querySelector('.wf-docid') || !document.getElementById('h2-old')) return;
    var V = { '3': ['4 Apr 2026', '4 Apr 2026', '1 Aug 2026', 'v4', '2026-04-04', '2026-04-04'], '2': ['12 Jan 2026', '10 Jan 2026', '4 Apr 2026', 'v3', '2026-01-12', '2026-01-10'], '1': ['3 Sep 2025', '3 Sep 2025', '12 Jan 2026', 'v2', '2025-09-03', '2025-09-03'] }[m[1]];
    if (!V) return;
    var f = document.querySelectorAll('.wf-docid .wf-docid-v');
    if (f[0]) f[0].textContent = 'v' + m[1];
    if (f[1]) f[1].innerHTML = '<time datetime="' + V[4] + '">' + V[0] + '</time>';
    if (f[2]) f[2].innerHTML = '<time datetime="' + V[5] + '">' + V[1] + '</time>';
    /* THE HISTORY FOLLOWS THE VERSION BEING READ, round 15: every ?v= marked v3
       as the one being read. v4 is current and opens the document itself. */
    Array.prototype.forEach.call(document.querySelectorAll('.wf-ver'), function (row) {
      var id = (/v(\d)/.exec(row.querySelector('.wf-ver-id').textContent) || [])[1];
      var acts = row.querySelector('.wf-ver-acts');
      if (!acts || !id) return;
      acts.innerHTML = id === m[1] ? '<span class="wf-ver-k">You are reading it</span>'
        : '<a class="wf-btn wf-btn--small" href="' + BASE + (id === '4' ? 'legal.html' : 'legal-superseded.html?v=' + id) + '">Read this version</a>';
    });
    var band = document.querySelector('#h2-old + p');
    if (band) band.innerHTML = '<strong>v' + m[1] + '</strong> governed from ' + V[0] + ' until ' + V[2] + '. It is kept because a decision taken while it was in force is answered under it.';
  }

  /* ONE UNPUBLISHED STATE, THREE DOCUMENTS, round 15. The state names the
     document it was opened for and the row offers the other three. */
  function mountLegalDoc() {
    var row = document.querySelector('[data-legal-doc]');
    if (!row) return;
    /* THE REFUND POLICY HAS ITS PAGE SINCE D-152, so this state names two
       documents, and an old ?doc=refund goes to the document. */
    var D = { privacy: WF_STR.privacyPolicy, cookie: WF_STR.cookiePolicy };
    var k = (/[?&]doc=([a-z]+)/.exec(location.search) || [])[1];
    if (k === 'refund') { location.replace(BASE + 'legal-refund.html'); return; }
    if (!D[k]) k = 'privacy';
    var h1 = document.querySelector('h1'); if (h1) h1.textContent = D[k];
    var cur = document.querySelector('.wf-crumb [aria-current="page"]'); if (cur) cur.textContent = D[k];
    document.title = D[k];
    Array.prototype.forEach.call(document.querySelectorAll('[data-legal-doc]'), function (a) { a.hidden = a.getAttribute('data-legal-doc') === k; });
  }

  function mountShellSettings() {
    mountLegalDoc();
    mountLegalVersion();
    mountCountry();
    var snd = document.getElementById('cfg-sound');
    if (snd) {
      var sv = snd.closest('.wf-cfg-row2') && snd.closest('.wf-cfg-row2').querySelector('.wf-cfg-rv');
      var paint = function (on) { snd.checked = on; if (sv) sv.textContent = on ? 'On' : 'Off'; };
      soundSubs.push(paint); paint(soundOn);
      snd.addEventListener('change', function () { setSound(snd.checked); });
    }
    var lg = document.getElementById('cfg-lang');
    if (lg) {
      lg.innerHTML = LANGS.map(function (L) { return '<option value="' + L[0] + '">' + L[1] + '</option>'; }).join('');
      var lv = lg.closest('.wf-cfg-row2') && lg.closest('.wf-cfg-row2').querySelector('.wf-cfg-rv');
      var paintL = function (code) { lg.value = code; if (lv) LANGS.forEach(function (L) { if (L[0] === code) lv.textContent = L[1]; }); };
      langSubs.push(paintL); paintL(langCur);
      lg.addEventListener('change', function () { setLang(lg.value); });
      var lrt = lg.closest('.wf-cfg-row2') && lg.closest('.wf-cfg-row2').querySelector('.wf-cfg-rt');
      if (lrt && !lrt.querySelector('.wf-fig-missing')) lrt.appendChild(el('span', 'wf-fig-missing', LANG_ONLY));
    }
  }

  /* HOME IS THE HOME OF THE STATE A PERSON IS IN, round 14: on signed-in pages
     the breadcrumb, the bar and the footer logo opened the guest home, which
     reads as being signed out. */
  /* AND A CASE IS THE CASE OF THE STATE A PERSON IS IN, round 16, D-152: every
     way back to a case from a signed-in page opened the guest catalogue or the
     guest case, 63 pages, which reads as being signed out. Every link to the
     guest home, catalogue or case opens the account's own, rewritten on load
     and again at the press, so a link a renderer builds later follows too.
     Sign out is the one link to the guest home that stays, and it ends the
     signed-in state of the session. */
  var TWIN = { 'index.html': 'index-account.html', 'catalogue.html': 'catalogue-account.html', 'case.html': 'case-account.html' };
  function twinHref(a) {
    var h = a.getAttribute('href');
    if (!h || a.classList.contains('wf-acct-out')) return;
    var m = /^((?:\.\.\/)*(?:wireframes\/)?)(index|catalogue|case)\.html([?#].*)?$/.exec(h);
    if (m) a.setAttribute('href', m[1] + TWIN[m[2] + '.html'] + (m[3] || ''));
  }
  function mountHomeLinks() {
    document.addEventListener('click', function (e) {
      if (e.target.closest('.wf-acct-out')) { WF_SESS.set('signed'); return; }
      var a = e.target.closest('a[href]');
      if (a && window.WF_SHELL && window.WF_SHELL.account) twinHref(a);
    }, true);
    /* UNDER A BOUNDARY THE SESSION SET, OPEN AND ADD FUNDS ANSWER, round 16,
       D-152: a cool down started on 6.1 reached no other page. Open refuses
       beside itself, the way D-58 refuses; a way to add funds opens what is in
       force, the way the header's + already does. */
    document.addEventListener('click', function (e) {
      var SB = window.WF_SHELL && window.WF_SHELL.account && sessBoundary();
      if (!SB) return;
      var t = e.target.closest('a[href*="case-open"], [data-dep-open], a[href^="deposit"], a[href*="/deposit"]');
      /* EVERY ROUTE IN, round 17, B2-2: card Pay refused, and skins, a gift
         code and a crypto transfer still reached crediting. Inside the deposit
         layer each one refuses beside itself; elsewhere a way to add funds
         opens what is in force. A record in history still opens. */
      var inLayer = e.target.closest('[data-pay-layer], .wf-dlg');
      var payGo = e.target.closest('[data-skin-go], [data-code-go], a[href*="deposit-crediting"]');
      if (inLayer && payGo) {
        e.preventDefault(); e.stopPropagation();
        var pr = payGo.closest('.wf-row') || payGo.parentNode, ps = pr.nextElementSibling;
        if (!ps || !ps.hasAttribute('data-sb-say')) { ps = el('p', 'wf-refuse is-said'); ps.setAttribute('data-sb-say', ''); pr.parentNode.insertBefore(ps, pr.nextSibling); }
        ps.innerHTML = 'Nothing went through: adding funds is closed until ' + SB.until + ' by the ' + (SB.kind === 'excl' ? 'self exclusion' : 'cool down') + ' you set. <a href="' + BASE + SB.route + '">What is in force</a>';
        return;
      }
      if (!t || t.closest('.wf-dlg') || /deposit-(crediting|declined)/.test(t.getAttribute('href') || '')) return;
      e.preventDefault(); e.stopPropagation();
      if (!/case-open/.test(t.getAttribute('href') || '')) { location.href = BASE + SB.route; return; }
      var row = t.closest('.wf-row, .wf-commit-bar') || t.parentNode, p = row.nextElementSibling;
      if (!p || !p.hasAttribute('data-sb-say')) { p = el('p', 'wf-refuse is-said'); p.setAttribute('data-sb-say', ''); p.setAttribute('aria-live', 'polite'); row.parentNode.insertBefore(p, row.nextSibling); }
      p.innerHTML = 'Not opened: opening cases is closed until ' + SB.until + ' by the ' + (SB.kind === 'excl' ? 'self exclusion' : 'cool down') + ' you set. <a href="' + BASE + SB.route + '">What is in force</a>';
    }, true);
    /* A GUEST IS NOT SENT INTO AN ACCOUNT, round 16, B1-9: "How a withdrawal
       settles", the median and "Check your settings" opened signed-in pages
       from guest ones. On a guest page a link into the account opens sign in,
       D-54's way, and keeps its address. */
    if (window.WF_SHELL && !window.WF_SHELL.account) {
      Array.prototype.forEach.call(document.querySelectorAll('.wf-screen-body a[href]'), function (a) {
        if (/^(account|withdraw|settings|history|deposit|profile|cashout)[^\/]*\.html/.test(a.getAttribute('href'))) a.setAttribute('data-auth-open', 'default');
      });
      /* AND A GUEST READS THE GUEST'S DOCUMENTS, round 17, D-160: the terms
         as a guest who never agreed, responsible play as a guest. */
      document.addEventListener('click', function (e) {
        var a = e.target.closest('a[href]'); if (!a) return;
        var h = a.getAttribute('href');
        if (/^legal\.html(#.*)?$/.test(h)) a.setAttribute('href', h.replace('legal.html', 'legal-guest.html'));
        if (/^responsible\.html(#.*)?$/.test(h)) a.setAttribute('href', h.replace('responsible.html', 'responsible-guest.html'));
      }, true);
      /* A SIGN IN THAT GOES THROUGH SIGNS THE SESSION IN, and nothing else does. */
      document.addEventListener('click', function (e) {
        var g = e.target.closest('[data-auth-go]');
        if (g && !e.defaultPrevented) WF_SESS.set('signed', true);
      });
      return;
    }
    if (!window.WF_SHELL) return;
    Array.prototype.forEach.call(document.querySelectorAll('a[href]'), twinHref);
  }

  function mountSettings() {
    var root = document.querySelector('[data-cfg]');
    if (!root) return;
    var input = root.querySelector('[data-cfg-url]');
    var save = root.querySelector('[data-cfg-save]');
    var say = root.querySelector('[data-cfg-say]');
    if (!input || !save) return;

    function refuse(msg) {
      input.classList.add('is-bad');
      input.setAttribute('aria-invalid', 'true');
      if (say) say.textContent = msg;
      input.focus();
    }

    save.addEventListener('click', function () {
      var v = (input.value || '').trim();
      input.classList.remove('is-bad');
      input.removeAttribute('aria-invalid');
      if (!v) {
        refuse('Nothing to save yet. Until this is filled in, a withdrawal cannot be sent.');
        return;
      }
      // The shape Steam publishes: the offer path, a partner id and a token. A
      // value missing either part is one Steam will not accept, and saying so here
      // is cheaper for everybody than saying it inside a withdrawal.
      var okPath = v.indexOf('https://steamcommunity.com/tradeoffer/new/') === 0;
      var okPartner = v.indexOf('partner=') !== -1;
      var okToken = v.indexOf('token=') !== -1;
      if (!okPath || !okPartner || !okToken) {
        var missing = [];
        if (!okPath) missing.push('it does not start with the Steam trade offer address');
        if (!okPartner) missing.push('there is no partner number in it');
        if (!okToken) missing.push('there is no token in it');
        refuse('Steam will not accept this one: ' + missing.join(', ') + '. Get a fresh link from Steam and paste it whole.');
        return;
      }
      if (say) say.textContent = 'Saved just now. Withdrawals will go to this address.';
      /* THE DATE BESIDE SAVE FOLLOWS THE SAVE, round 16, B1-20. */
      var lc = save.parentNode.querySelector('.wf-quick-w'); if (lc) lc.textContent = 'Last changed 21 Aug 2026';
    });
  }

  /* A FIGURE IS NEVER SPLIT FROM ITS UNIT, round 15: "21.90 / coins", "RTP 94.2
     / %", "20 / Aug / 2026" and a time alone on its own line at 360. One pass
     over the rendered text joins a number to its unit, a day to its month, a
     month to its year and a date to its time with a no-break space. */
  /* A TILE'S NAME READS NAME, COST, RISK, THEN ITS MARKERS, round 15, case-tile.md
     section on the accessible name: the markup order read name, risk, cost. */
  function mountTileNames() {
    Array.prototype.forEach.call(document.querySelectorAll('a.wf-tile-link'), function (a) {
      var t = function (sel) { var e = a.querySelector(sel); return e ? e.textContent.trim() : ''; };
      var marks = Array.prototype.map.call(a.querySelectorAll('.wf-tile-mark, .wf-tile-flag'), function (e) { return e.textContent.trim(); }).filter(Boolean);
      if (!t('.wf-tile-name')) return;
      /* A TILE OPENS THE CASE IT NAMES, round 16, B1-1. */
      var h = a.getAttribute('href') || '', ck = caseOf(t('.wf-tile-name'));
      if (ck && ck !== 'ironbound' && /^case(-account)?\.html$/.test(h)) a.setAttribute('href', h + '?case=' + ck);
      a.setAttribute('aria-label', [t('.wf-tile-name'), t('.wf-tile-cost') + ' coins', t('.wf-tile-risk')].concat(marks).filter(Boolean).join(', '));
    });
  }

  function nbspFigures() {
    var MON = '(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)';
    var rules = [[/(\d) (?=coins?\b|%|UTC\b)/g, '$1\u00a0'], [new RegExp('(\\d{1,2}) (' + MON + ')\\b', 'g'), '$1\u00a0$2'],
                 [new RegExp('(' + MON + ') (\\d{4})', 'g'), '$1\u00a0$2'], [/(\d{4})(,?) (\d{1,2}:\d{2})/g, '$1$2\u00a0$3']];
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: function (n) {
      return n.parentNode && /^(SCRIPT|STYLE|TEXTAREA|OPTION)$/.test(n.parentNode.nodeName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; } });
    var t;
    while ((t = w.nextNode())) {
      var v = t.nodeValue, o = v;
      rules.forEach(function (r) { v = v.replace(r[0], r[1]); });
      if (v !== o) t.nodeValue = v;
    }
  }

  /* ONE ELEMENT CARRIES aria-current="page", round 16, D1-22, navigation.md
     section 7: the rail, the bar, the breadcrumb and the tabs each carried it.
     Every candidate keeps a data-cur mark for its look; the one that carries it
     is the visible carrier of the destination, the bar where the bar shows and
     the rail elsewhere, then the account tabs, then the breadcrumb. */
  function oneCurrent() {
    var all = document.querySelectorAll('[aria-current="page"], [data-cur]');
    if (!all.length) return;
    Array.prototype.forEach.call(all, function (e) { e.setAttribute('data-cur', ''); e.removeAttribute('aria-current'); });
    var shown = function (e) { return e && e.offsetParent !== null && getComputedStyle(e).visibility !== 'hidden'; };
    var pick = ['.wf-bar [data-cur]', '.wf-rail [data-cur]', '.wf-ah-tabs [data-cur], .wf-htabs [data-cur]', '.wf-crumb [data-cur]', '[data-cur]'].reduce(function (got, sel) {
      return got || [].slice.call(document.querySelectorAll(sel)).filter(shown)[0];
    }, null);
    if (pick) pick.setAttribute('aria-current', 'page');
  }
  window.addEventListener('resize', function () { clearTimeout(oneCurrent.t); oneCurrent.t = setTimeout(oneCurrent, 150); });

  /* THE DECLARED FILLS RUN FIRST, round 16: run last, they wrote over what a
     renderer had already set for this page, a sample winner turned back into the
     account and a privacy crumb back into Refund. They run once before the
     renderers and once after, and the second pass touches only what a renderer
     built in between. */
  /* THE RATIO IS PRINTED WHERE MONEY LEAVES, founder decision of 4 October
     2026, D-159: "при депозите показываем какой у нас соотношение ... и при
     выводе скина либо кеша". The deposit prints the peg; Send to Steam, its
     clock and its records now print it under their settlement, with the line
     that the Steam price is read in dollars and converted at it. */
  function mountWithdrawPeg() {
    Array.prototype.forEach.call(document.querySelectorAll('.wf-wd .wf-tl--sum'), function (sum) {
      if (sum.parentNode.querySelector('[data-wd-peg]')) return;
      var p = el('p', 'wf-fig-c', 'Prices in coins at ' + WF_STR.peg + '. The Steam market price is read in US dollars and converted at it.');
      p.setAttribute('data-wd-peg', '');
      var after = sum.nextElementSibling && sum.nextElementSibling.matches('.wf-fig-c, [data-wd-say]') ? sum.nextElementSibling : sum;
      after.parentNode.insertBefore(p, after.nextSibling);
    });
  }

  function fillDeclared() {
    var w = window.WF_WHO || {};
    var each = function (sel, f) { Array.prototype.forEach.call(document.querySelectorAll(sel), function (e) { if (e.hasAttribute('data-filled')) return; e.setAttribute('data-filled', ''); f(e); }); };
    each('[data-pub]', function (e) { e.textContent = WF_PUB[e.getAttribute('data-pub')] || e.textContent; });
    // THE ACCOUNT'S NAME, ONCE, round 15: typed on twenty pages; WF_WHO owns it.
    /* ONE ADDRESS, round 16, D1-12: support said nightjar@ and the deposit said nightjar_cs@. */
    each('[data-who]', function (e) { var v = w[e.getAttribute('data-who')]; if (!v) return; if (e.tagName === 'INPUT') e.value = v; else e.textContent = v; });
    each('[data-str]', function (e) {
      var v = WF_STR[e.getAttribute('data-str')];
      if (v === undefined) return;
      if (v.indexOf('<') >= 0) e.innerHTML = v; else e.textContent = v;
    });
    /* THE ACCOUNT'S PAIR IN A PAGE'S BODY READS THE DECLARATION TOO, round 16,
       D1-7: four pages typed it, and a sale moved the header and not them. */
    if (!(window.WF_SHELL && window.WF_SHELL.money === false)) each('[data-money]', function (e) { var k = e.getAttribute('data-money'); e.textContent = moneyNow()[k].toFixed(2) + ' coins'; });
    each('[data-str-aria]', function (e) { var v = WF_STR[e.getAttribute('data-str-aria')]; if (v !== undefined) e.setAttribute('aria-label', v); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    fillDeclared();
    // The hero counters are derived, never typed: a hardcoded 0 beside a registry
    // that says 2 is the drift this file exists to prevent.
    var b = document.getElementById('wf-built');
    if (b) b.textContent = String(builtPages());
    var t = document.getElementById('wf-total');
    if (t) t.textContent = String(allPages());
    renderFlows(document.getElementById('wf-flows'));
    renderCoverage(document.getElementById('wf-coverage'));
    renderPanel(document.getElementById('wf-panel'));
    renderShell(document.getElementById('wf-shell'));
    renderAcctHero(document.querySelector('[data-acct-hero]'));
    mountInFlight();
    mountInvBar();
    mountFeed();
    renderAuth(document.getElementById('wf-auth'));
    mountAuthDialog();
    mountFilterDrawer();
    renderHomeBodies();
    renderCaseBodies();
    renderLadders();
    mountFavs();
    renderPlayerShelf();
    renderResult();
    renderVerifierPrefill();
    mountVerifier();
    mountCount();
    mountOutcomeActs();
    renderProofs();
    mountMultiCount();
    renderHashes();
    mountCaseTemplate();
    mountOpenNow();
    mountGate();
    mountDeposit();
    mountExclude();
    mountRp();
    renderFaq();
    mountSystem();
    mountSupportSubject();
    mountMsgs();
    mountHist();
    mountRolls();
    mountCashout();
    mountWithdrawMany();
    mountClockStruck();
    mountPay();
    mountCrediting();
    mountDepositDialog();
    mountInvSort();
    mountCookie();
    mountSettings();
    mountSwitches();
    renderFooter(document.getElementById('wf-footer'));
    mountShellSettings();
    // AFTER THE FOOTER IS BUILT AND NOT WITH THE OTHER MOUNTS. The counters it
    // animates do not exist until renderFooter has run, and the mount block runs
    // first: called there it found nothing and returned, silently.
    mountFooterTicks();
    mountRollDetail();
    renderBar(document.getElementById('wf-bar'));
    // AFTER THE BAR, round 15: run before it, the rewrite found no bar and its
    // Home kept opening the guest home on every signed-in page.
    mountHomeLinks();
    mountCommitBar();
    mountTileNames();
    fillDeclared();
    mountWithdrawPeg();
    oneCurrent();
    nbspFigures();
  });
})();
