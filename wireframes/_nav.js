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
        { label: 'Not yet published',             file: 'legal-unpublished.html',status: 'built' }
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
        { node: '4.1', label: 'Step 2, card and wallets',    file: 'deposit-card.html',            status: 'built' },
        { node: '4.1', label: 'Step 2, crypto',              file: 'deposit-crypto.html',          status: 'built' },
        { node: '4.1', label: 'Step 2, no address yet',      file: 'deposit-crypto-nowallet.html', status: 'built' },
        { node: '4.1', label: 'Step 2, gift cards',          file: 'deposit-giftcards.html',       status: 'built' },
        { node: '4.2', label: 'Ceiling reached this period', file: 'deposit-ceiling-reached.html', status: 'built' },
        { node: '4.3', label: 'Ceiling raise pending',       file: 'deposit-ceiling-pending.html', status: 'built' },
        { node: '4.4', label: 'Crediting, named timer',      file: 'deposit-crediting.html',       status: 'built' },
        { node: '4.5', label: 'Payment declined',            file: 'deposit-declined.html',        status: 'built' }
      ] },

    // DRAWN 21 AUGUST 2026. The front door of the cluster that sits at the floor
    // of the entire As-Is emotional map, and the page the receipt exists for.
    { node: '5.1',  cluster: '5', name: 'Account and inventory', file: 'account.html',  ia: 'account.html',       status: 'built',
      base: 'Items held',
      states: [
        { label: 'Values degraded', file: 'account-degraded.html', status: 'built' },
        { node: '5.2', label: 'Inventory empty', file: 'account-empty.html', status: 'built' }
      ] },

    // DRAWN 21 AUGUST 2026. The end of flow 3, and the page where the injury is
    // not the duration but the unattributed silence.
    { node: '5.3',  cluster: '5', name: 'Withdrawal',          file: 'withdraw.html',   ia: 'withdrawal.html',    status: 'built',
      base: 'Before the request',
      states: [
        { label: 'Requested, the clock running', file: 'withdraw-clock.html', status: 'built' },
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
        { node: '5.9', label: 'Cash out, sold back for coins',file: 'history-cashout.html',             status: 'built' },
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
window.WF_WHO = window.WF_WHO || { name: 'nightjar_cs', id: 'acc-7f3a91c4', since: '12 Jan 2026' };

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
   leaves the product, and one has nowhere to land at all.
   CS:GO SKINS HAS NO PARENT AND SHIPS SAYING SO. Depositing skins is a real
   capability of the live product and there is no row for it in cjm-to-be.md, no
   node on the map and no flow drawn. CLAUDE.md: a screen, a block or a component
   with no parent is cut, or carried with its orphan status printed in its own
   row. It is carried, and the tile is not a link, because a tile that opened
   nothing would be the dead item defect with a logo on it. */
window.WF_PAY = window.WF_PAY || {
  fiat: [
    ['Visa Or Mastercard', 'card', 'best'],
    ['CS:GO Skins',        null,   'instant'],
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
  route: { card: 'deposit-card.html', crypto: 'deposit-crypto.html', gift: 'deposit-giftcards.html' }
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
    return { account: !!c.account, active: c.active || currentFile() };
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
    return [{ label: 'Cases', file: 'catalogue.html' }];
  }

  // The bar is a subset of the rail plus Home, and it never holds money.
  function barItems() {
    return [
      { label: 'Home',  file: 'index.html' },
      { label: 'Cases', file: 'catalogue.html' }
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
  // so the prototype shows the shape the live product has. The eight are inert, the
  // panel says so in its own words, and D-42 records what that costs. It is not a
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
  var langSubs = [];
  // The rail's control and the footer's control are one control in two places, the
  // superset rule applied to a control. Picking in either moves both, because a rail
  // reading EN above a footer reading DE is two controls with one name.
  function setLang(code) { langCur = code; langSubs.forEach(function (f) { f(code); }); }

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
    pop.appendChild(el('span', 'wf-fig-missing',
      'English is the only one that does anything. The other eight switch this control and leave the interface in English: round 1 ships one language, the page stays lang="en", and the product carries no hreflang until real translations arrive.'));

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

  // The reserved social row. Which channels are ours in round 1 is [?], owner founder,
  // so the count is a reserved set rather than a guess at which networks.
  function socialSet() {
    var box = el('div', 'wf-foot-soc');
    var nav = el('nav', 'wf-rail-soc-row');
    nav.setAttribute('aria-label', 'Social');
    for (var i = 0; i < 6; i++) {
      var a = el('a', 'wf-rail-ico');
      a.href = '#';
      a.setAttribute('rel', 'external nofollow');
      a.setAttribute('aria-label', 'Social channel, set not decided');
      nav.appendChild(a);
    }
    box.appendChild(nav);
    box.appendChild(el('span', 'wf-fig-missing', 'Which channels are ours in round 1 is not decided'));
    return box;
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
    [['My items', 'account.html'], ['History', 'history.html'],
     ['Withdrawals', 'withdraw.html'], ['Profile', 'profile.html'],
     ['Settings', 'settings.html'], ['Responsible play', 'responsible.html']].forEach(function (r) {
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
    var out = el('button', 'wf-linklike wf-acct-out');
    out.type = 'button';
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
  var FEED = [
    ['AK-47',        'Redline',          'Ironbound', false],
    ['AWP',          'Asiimov',          'Warsteel',  false],
    ['Glock-18',     'Water Elemental',  'Ironbound', true ],
    ['USP-S',        'Kill Confirmed',   'Coldfront', false, true],
    ['M4A1-S',       'Hyper Beast',      'Warsteel',  false],
    ['Desert Eagle', 'Blaze',            'Ironbound', false],
    ['MP9',          'Rose Iron',        'Coldfront', false],
    ['P250',         'Asiimov',          'Nightfall', false],
    ['AWP',          'Neo-Noir',         'Nightfall', false, true],
    ['AK-47',        'Vulcan',           'Ironbound', false],
    ['Five-SeveN',   'Monkey Business',  'Coldfront', false],
    ['SG 553',       'Cyrex',            'Warsteel',  true ]
  ];

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
    hit.href = BASE + 'result.html';
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
    cs.href = BASE + 'case.html';
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
    if (row[3]) {
      col.appendChild(el('span', null, 'winner, as shown'));
      col.appendChild(el('span', 'wf-feed-bot', ' bot'));
    } else if (row[4]) {
      col.appendChild(el('span', null, 'winner, as shown'));
    } else {
      var whoLink = el('a', 'wf-feed-whol', 'winner, as shown');
      whoLink.href = BASE + 'player.html';
      col.appendChild(whoLink);
    }
    col.style.display = 'flex';
    col.style.flexDirection = 'column';
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
    pause.addEventListener('click', function () {
      var held = band.classList.toggle('is-held');
      pause.setAttribute('aria-pressed', held ? 'true' : 'false');
      pause.textContent = held ? 'Resume' : 'Pause';
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
    main.parentNode.insertBefore(renderFeed(), main.nextSibling);
  }

  /* NODE 4.1. THE CEILING IS THE ONLY BLOCKING THING ON THE PAGE, and it blocks
     the way D-58 fixed for the consent gate rather than the way the block bank
     drew it. The bank's Wealthsimple row is "submit disabled until the condition
     is met" and node 4.1 section 3.2 took that wording. A dimmed Pay is a person
     looking for what to change; a live Pay that refuses is a person being told.
     The rule underneath is untouched: NO PRESS GOES THROUGH until the ceiling is
     accepted or changed, which is C2's second property word for word.
     ACCEPTING AND CHANGING BOTH SATISFY IT. The mechanism is "one tap on a number
     they chose themselves", so typing a different number is the same consent as
     pressing accept, and a form that demanded both would be asking twice. */
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
  function excludeHTML(period) {
    var p = period || '30 days';
    return '<div class="wf-dlg-scrim" data-ex-dismiss></div>' +
      '<div class="wf-dlg-wrap"><div class="wf-dlg wf-dlg--plain" role="dialog" aria-modal="true" aria-label="Confirm self exclusion">' +
        '<button class="wf-dlg-close" type="button" data-ex-dismiss aria-label="Close">&#215;</button>' +
        '<div class="wf-dlg-body">' +
          '<h2 class="wf-dlg-h">Self exclusion for ' + p + '</h2>' +
          '<p class="wf-dlg-sub">It starts now and ends on <b>21 Sep 2026, 09:31</b>.</p>' +
          '<div class="wf-closes">' +
            '<div class="wf-closes-c"><span class="wf-closes-k">Closes</span><span>Opening a case, and adding funds.</span></div>' +
            '<div class="wf-closes-c"><span class="wf-closes-k">Stays open</span><span>Taking what you hold out to Steam. Support. Reading the product.</span></div>' +
          '</div>' +
          '<p class="wf-note">It cannot be lifted early. That is what it is for.</p>' +
          '<div class="wf-row">' +
            '<a class="wf-btn" href="responsible.html" data-ex-dismiss>Cancel</a>' +
            '<a class="wf-btn" href="responsible-excluded.html">Confirm</a>' +
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
     WHICH QUESTIONS EXIST IS NOT DRAWN. They are derived at stage 05 from the
     barrier ledger, one per documented barrier that survives its surface, so
     each section renders its scope and says the questions are not written yet
     rather than inventing three plausible ones. */
  var FAQ = [
    ['Getting in', 'Sign in, the geo gate, and a Steam login that will not complete'],
    ['Opening a case', 'The case screen, the published chance, and checking a round afterwards'],
    ['Putting money in', 'Adding funds, the crediting window, and a payment that did not go through'],
    ['Getting your items out', 'Withdrawing to Steam, the clock, and a trade that did not arrive'],
    ['Limits and self exclusion', 'The four boundaries, what each one closes, and what none of them closes'],
    ['Your account and your data', 'The documents, and what is held about you'],
    ['When something goes wrong', 'A restriction, a refused check, and a proof of ours that did not match']
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
      pnl.appendChild(el('p', 'wf-fig-missing', 'The questions here are not written yet. When they are, every rule in an answer will also live on the screen where you meet it, and that screen is the one that governs.'));
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
      open(t.getAttribute('data-ex-open') || '30 days', t);
    });
    var pinned = document.querySelector('[data-ex-pinned]');
    if (pinned) open(pinned.getAttribute('data-ex-pinned'), null);
  }

  /* THE GUEST AND THE EXCLUDED SURFACES CARRY LIVE CONTROLS, NOT DIMMED ONES.
     Third application of D-58 off its own surface: a press that cannot go
     through answers instead of not existing. On a page whose whole subject is a
     person trying to stop, a control that does nothing and explains nothing is
     the worst version of that defect in the product. */
  function mountRp() {
    var page = document.querySelector('[data-rp]');
    if (!page) return;
    var say = page.querySelector('[data-rp-say]');
    if (!say) return;
    page.addEventListener('click', function (e) {
      var t = e.target.closest('[data-rp-refuse]');
      if (!t) return;
      e.preventDefault();
      say.classList.add('is-said');
      say.textContent = t.getAttribute('data-rp-refuse');
      var mark = t.closest('.wf-set');
      if (mark) { mark.classList.add('is-marked'); }
      say.scrollIntoView({ block: 'nearest' });
    });
  }

  /* SCOPED SINCE D-99. With the dialog open over a step 2 address there are two
     of this form in the document, and an unscoped query wires the controls of one
     to the refusal of the other. */
  function mountDeposit(scope) {
    scope = scope || document;
    var form = scope.querySelector('[data-dep-form]');
    if (!form) return;
    var accept = form.querySelector('[data-dep-accept]');
    var ceil   = form.querySelector('[data-dep-ceil]');
    var go     = scope.querySelector('[data-dep-go]');
    var say    = scope.querySelector('[data-dep-refuse]');
    if (!accept || !ceil || !go || !say) return;
    var settled = false;

    function settle(how) {
      settled = true;
      accept.setAttribute('aria-pressed', 'true');
      accept.textContent = 'Ceiling accepted';
      accept.classList.remove('is-missing');
      ceil.classList.remove('is-missing');
      say.classList.remove('is-said');
      say.textContent = how === 'typed'
        ? 'Ceiling set to the figure you typed. It applies from this deposit.'
        : 'Ceiling accepted. It applies from this deposit.';
    }

    accept.addEventListener('click', function () { settle('accepted'); });
    // A CHANGE IS CONSENT. The pre-filled figure is the amount just typed, so a
    // person who edits it has made the same deliberate act the accept button asks
    // for, on a number that is even more theirs.
    ceil.addEventListener('input', function () { settle('typed'); });

    go.addEventListener('click', function (e) {
      if (settled) return;
      e.preventDefault();
      // THE ANSWER IS A PLACE ON THE SCREEN AND NOT ONLY A SENTENCE ABOUT ONE.
      say.classList.add('is-said');
      say.textContent = 'Nothing went through: the ceiling has not been accepted or changed yet. It is the figure just above.';
      accept.classList.add('is-missing');
      ceil.classList.add('is-missing');
      ceil.focus();
    });
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
    logo.href = BASE + 'index.html';
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
    snd.setAttribute('data-lbl', 'Sound on');
    snd.type = 'button';
    snd.setAttribute('aria-pressed', 'true');
    amb.appendChild(snd);
    // ONE LANGUAGE, LOCKED IN CLAUDE.md. Not a switcher: it states the language and
    // carries no menu, because a picker with one option is a dead control. It shares
    // the row with the sound control but NOT its affordance: no border, no press
    // state, so the half that acts and the half that reports do not look alike.
    // A REAL CONTROL SINCE D-41, and the reason is the baseline rather than a
    // preference: the live product has a switcher, the carrier is inherited, and a
    // carrier is filled with live items rather than deferred. WHAT IT DOES NOT DO IS
    // IMPLY A TRANSLATION. Round 1 ships one language, D-02 is untouched, and the
    // absence is printed inside the control instead of drawn as eight dead rows.
    var lang = langControl();
    lang.setAttribute('aria-label', 'Language: English. One language, so no switcher');
    amb.appendChild(lang);
    foot.appendChild(amb);

    var soc = el('div', 'wf-rail-soc');
    soc.setAttribute('aria-label', 'Social');
    soc.appendChild(el('span', 'wf-rail-soc-h', 'Social'));
    var socRow = el('div', 'wf-rail-soc-row');
    for (var si = 0; si < 6; si++) socRow.appendChild(el('span', 'wf-rail-ico'));
    soc.appendChild(socRow);
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
      var M = (window.WF_SHELL && window.WF_SHELL.money) || {};
      // NODE 0.3, THE 500. A page may declare that the figures have NO SOURCE, which
      // is not the same as declaring them zero. The money in this header comes from
      // the application, and on a 500 the application is what failed. 0.11 rule 3:
      // missing is a state, never a zero. A dash that reads as zero and a zero that
      // means "we do not know" are the same lie in two typefaces, and on a page about
      // money the second one is the expensive lie.
      // THE ROUTE COMES OFF WITH THE FIGURE. A figure with no value is not a link to
      // its own detail, and rule 1 wants a route for a number rather than for a hole.
      var noMoney = !!(window.WF_SHELL && window.WF_SHELL.money === false);
      [[M.balance || '74.20 coins', 'Balance', 'deposit.html', 'wf-money-1'],
       // ONE FIGURE, ONE VALUE, EVERYWHERE. It read 18.60 while 5.1 rendered a
       // holding of 130.60, which is two renderings of one number disagreeing on
       // adjacent surfaces: the exact defect 0.11 exists to prevent, and 5.1's
       // own rule is that these are the same pair the header carries.
       [M.held || '130.60 coins', 'Value of items held', 'account.html', 'wf-money-2']].forEach(function (f) {
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
        d.setAttribute('aria-label', f[1] + ', ' + f[0]);
        // THE COIN SLOT, D-50. The baseline sets a coin mark against both figures and
        // this stage owes it the space. It sits with the VALUE and not with the caption,
        // because it is a unit mark rather than a decoration on a label.
        var line = el('span', 'wf-fig-line');
        var ci = el('span', 'wf-coin');
        ci.setAttribute('aria-hidden', 'true');
        line.appendChild(ci);
        line.appendChild(el('span', 'wf-fig-v', f[0]));
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
      dep.setAttribute('data-dep-open', 'step1');
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
      var BN = (window.WF_SHELL && window.WF_SHELL.bonus === false) ? {} : (window.WF_BONUS || {});
      if (BN.pct) {
        var bb = el('span', 'wf-dep-b', BN.pct);
        bb.setAttribute('aria-hidden', 'true');
        dep.appendChild(bb);
        // THE CAP TRAVELS WITH THE PERCENTAGE OR THE PERCENTAGE IS A HALF TRUTH.
        dep.setAttribute('aria-label',
          'Add funds. We add ' + BN.pctFull + ' in coins on top, up to ' + BN.cap + ' per ' + BN.period);
      } else {
        dep.setAttribute('aria-label', 'Deposit');
      }
      right.appendChild(dep);
      right.appendChild(accountControl());
    } else {
      // D-54: THIS CONTROL OPENS THE DIALOG RATHER THAN ROUTING TO IT, on every
      // guest surface. The href stays real and correct, so a middle click, a
      // copied link and a session with no script all still reach the address.
      // A trigger whose only route is a script handler is a destination that
      // does not exist for a keyboard either, 0.13 section 8.
      var si = el('a', 'wf-btn', 'Sign in');
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
    var down = !!(window.WF_SHELL && window.WF_SHELL.stats === 'unavailable');
    [
      down
        ? [null, 'Cases opened', 'Not available. Last read 22 Aug 2026, and a value from then is not a value for now', 'catalogue.html']
        : ['363 777 660', 'Cases opened', 'Checkable per case, against the observed rate on each case screen', 'catalogue.html'],
      // THE SECOND FILENAME DEFECT OF THE SAME CLASS, found the same way. It
      // pointed at withdrawal.html, which is the IA specification's filename
      // rather than the wireframe's, so the footer's own published figure led to
      // a 404 on every page. Invisible until 5.3 was built, because a link to an
      // unbuilt screen and a link to a misspelt one are the same 404.
      down
        ? [null, 'Middle withdrawal time, from our own logs', 'Not available. Last read 22 Aug 2026', 'withdraw.html']
        : ['1 h 40 m', 'Middle withdrawal time, from our own logs', null, 'withdraw.html'],
      [null, 'Online now, if it can count humans in real time', null, null],
      [null, 'Aggregate tested return to player', null, null]
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
      d.appendChild(el('span', 'wf-fig-v' + (f[0] ? '' : ' wf-fig-missing'), f[0] || 'Not available'));
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
    brand.href = BASE + 'index.html';
    brand.setAttribute('aria-label', 'CS2 Clutch, home');
    brand.appendChild(el('span', 'wf-logo-mark', 'Logo'));
    c1.appendChild(brand);
    // The about line. One sentence, and it is the promise this product is built on
    // rather than a description of the category.
    c1.appendChild(el('p', 'wf-foot-about', 'Every case shows the chance, the current value and the tested return before you open it. Every round can be checked after it.'));
    var ident = el('p', 'wf-foot-ident');
    ident.appendChild(el('span', 'wf-fig-missing', 'Operating company, registration number and registered address not available'));
    c1.appendChild(ident);
    // Need help sits with the brand block because an appeal route is a way to reach us.
    // An outlined pill rather than a text link: G4 requires an appeal with a published
    // deadline and Article 5(c) requires rapid contact, and neither is served by a link
    // that looks like a policy.
    var help = el('div', 'wf-foot-help');
    help.appendChild(el('p', 'wf-foot-h', 'Need help?'));
    var sup = el('a', 'wf-btn', 'Support');
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
      [['Play', [['Cases', 'catalogue.html']],
        'One game in round 1. The other modes enter this column as they ship.']],
      [['Cases', [['All cases', 'catalogue.html'], ['Ironbound', 'case.html'],
                  ['Warsteel', 'case.html'], ['Coldfront', 'case.html'],
                  ['Nightfall', 'case.html']],
        'Which cases belong here is a merchandising decision and it is not made.']],
      [['Company', [['Terms of use', 'legal.html'], ['Privacy policy', 'legal.html'],
                    ['Cookie policy', 'legal.html'], ['Refund and payments policy', 'legal.html']]]],
      [['Help', [['Provably fair', 'fair.html'], ['Contact support', 'support.html']],
        'No FAQ page: its jobs live on the geo gate, on Responsible play and in Support.'],
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
       ['Play responsibly', [['Responsible play', 'responsible.html'],
                             ['Where we operate', null]]]]
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
            var sp = el('span', null, r[0]);
            sp.appendChild(el('span', 'wf-feed-noroute', ' no destination on the map yet'));
            nav.appendChild(sp);
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
    art.appendChild(el('span', 'wf-foot-art-l', 'Brand art, stage 06'));
    cols.appendChild(art);
    b2.appendChild(cols);

    // The interlinking row. The baseline has none, this one is ours, and its CONTENTS
    // are [?] on purpose: the categories are 3.1's to decide and real query volumes
    // belong to production. Writing a plausible list now is model memory.
    var seo = el('div', 'wf-foot-seo');
    var seoBody = el('div', 'wf-foot-list');
    seoBody.appendChild(el('span', 'wf-fig-missing',
      'Not available: the catalogue category structure is decided on 3.1 and the query volumes belong to production'));
    accordion(seo, 'Links to priority indexed pages', seoBody);
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
    // owner founder, so the row draws the reserved set and prints the hole.
    var soc = el('div', 'wf-foot-soc');
    var socNav = el('nav', 'wf-rail-soc-row');
    socNav.setAttribute('aria-label', 'Social');
    for (var si = 0; si < 6; si++) {
      var sa = el('a', 'wf-rail-ico');
      sa.href = '#';
      sa.setAttribute('rel', 'external nofollow');
      sa.setAttribute('aria-label', 'Social channel, set not decided');
      socNav.appendChild(sa);
    }
    soc.appendChild(socNav);
    soc.appendChild(el('span', 'wf-fig-missing', 'Which channels are ours in round 1 is not decided'));
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
      'Over 18 only. Opening a case is a paid chance and never an investment. Set a deposit or session limit before you start, and a limit you set never carries a streak, a status or a score.'));
    ageTxt.appendChild(el('p', 'wf-compliance',
      'The market allowlist is closed by default: a market with no row is not launched rather than open. The list and the law it rests on are on Where we operate.'));
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
    marks.appendChild(el('li', 'wf-fig-missing', 'Provider list not available'));
    pay.appendChild(marks);
    trust.appendChild(pay);
    b3.appendChild(trust);

    var fine = el('div', 'wf-foot-fine');
    fine.appendChild(el('span', 'wf-fig-c', 'CS2 Clutch, working name. Copyright range not set'));
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
    fine.appendChild(el('span', 'wf-fig-c', 'Prices are in coins. What one coin is worth in real money is published wherever money is spent.'));
    b3.appendChild(fine);

    // Collapsed is a MOBILE default, not a state the desktop inherits. Above 900 the
    // lists are open and the button reads as the column label; below it they start
    // closed. The sync runs on load and on resize so narrowing the browser, which is
    // how this project checks mobile, produces the mobile state rather than a desktop
    // state at a phone width.
    function syncAcc() {
      var wide = window.matchMedia('(min-width: 900px)').matches;
      accBtns.forEach(function (b) { b.setAttribute('aria-expanded', wide ? 'true' : 'false'); });
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
    var t = el('span', 'wf-btn wf-btn--primary', trigger.textContent);
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

  window.WF_RENDER = { flows: renderFlows, coverage: renderCoverage, panel: renderPanel,
                       shell: renderShell, footer: renderFooter, bar: renderBar,
                       counts: function () { return { pages: allPages(), built: builtPages(), screens: WF.screens.length }; } };


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
     "stated in text above it" and because four inert buttons above their reason
     is worse than one.
     ========================================================================== */
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
      out.push('<p class="wf-fail-p">Trying again runs the same Steam round trip. <b>It never asks for a password, here or anywhere.</b></p>');
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
      out.push('<p class="wf-fail-p"><b>This is on Steam&#39;s side, not yours.</b> Nothing you did caused it and nothing about your account here changed.</p>');
      out.push('<p class="wf-fail-p">We are not giving you a time, because we do not have one <span class="wf-fail-ref">[?]</span>. Our Steam health probe is what puts this message on the screen, and it reports degraded rather than freezing at its last good value.</p>');
      out.push('<p class="wf-fail-p"><b>Everything public still works with no account:</b> the case screens and their drop tables, provably fair with its verifier, any shared result, the legal pages, support, and responsible play.</p>');
      out.push('<div class="wf-fail-acts">');
      out.push('<a class="wf-btn wf-btn--primary" href="case.html">Back to the case</a>');
      out.push('<a class="wf-btn" href="fair.html">Provably fair</a>');
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
    out.push('<div class="wf-cbx' + (terms ? ' is-set' : (blocked ? ' is-missing' : '')) + '"><button class="wf-cbx-box" type="button" role="checkbox" aria-checked="' + (terms ? 'true' : 'false') + '" aria-labelledby="wf-cbx-t1"><span aria-hidden="true">✓</span></button><span class="wf-cbx-t" id="wf-cbx-t1">I agree to the <a href="legal.html">Terms and Conditions</a> and the <a href="legal.html">Privacy Policy</a>.</span></div>');
    out.push('<div class="wf-cbx' + (age ? ' is-set' : (blocked ? ' is-missing' : '')) + '"><button class="wf-cbx-box" type="button" role="checkbox" aria-checked="' + (age ? 'true' : 'false') + '" aria-labelledby="wf-cbx-t2"><span aria-hidden="true">✓</span></button><span class="wf-cbx-t" id="wf-cbx-t2">I declare that I am 18 or over. <span style="color:var(--wf-ink-dim)">Your own declaration, not an identity check.</span></span></div>');
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
      out.push('<p class="wf-consent-why" data-auth-why><b>Both declarations are needed before you sign in.</b></p>');
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
      out.push('<p class="wf-consent-why">Your declarations are unchanged and nothing was recorded about this attempt.</p>');
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
      out.push('<a class="wf-btn wf-btn--primary wf-prov-1" href="case-open.html" data-auth-go><span class="wf-prov-i" aria-hidden="true"></span>Sign in with Steam</a>');
      out.push('<p class="wf-or">or continue with</p>');
      out.push('<div class="wf-prov-row">');
      ['Google', 'Discord', 'X'].forEach(function (n) {
        out.push('<a class="wf-btn" href="case-open.html" data-auth-go><span class="wf-prov-i" aria-hidden="true"></span>' + n + '</a>');
      });
      out.push('</div>');
      // D-57: SHORTER, AND EVERY PART OF D-55's REQUIREMENT IS STILL IN IT. That
      // those three work now, that Steam is needed to take a skin out, and that
      // the link is not urgent. What went was the explanation of why, which the
      // node holds and this surface does not owe.
      out.push('<p class="wf-prov-cost">Those three get you in now. <b>Steam has to be linked before you can take a skin out</b>, and you can link it any time.</p>');
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
    out.push('<div class="wf-never">');
    out.push('<span class="wf-never-h">What we never read or do</span>');
    out.push('<span class="wf-never-l"><b>Never a password</b>, here or anywhere in this product</span>');
    out.push('<span class="wf-never-l"><b>Never a change</b> to your profile, avatar, name or friends</span>');
    out.push('<span class="wf-never-l"><b>Never a post</b>, a comment or an invite in your name</span>');
    out.push('<span class="wf-never-l"><b>Never a demand</b> that you join, add or follow anything to unlock anything</span>');
    out.push('</div>');
    if (isDlg) {
      out.push('<p class="wf-dlg-more"><a href="signin.html">What we do read, and what happens next</a></p>');
    }

    // ======== FROM HERE DOWN: THE ADDRESS CARRIER ONLY, D-56 ================

    // ---- What we read. The list is [?] and says so ---------------------------
    // A STATEMENT OF WHAT WE READ IS WORTHLESS IF THE LIST IS ASPIRATIONAL.
    // What Steam OpenID returns and what the Steam Web API returns are technical
    // facts this repository has opened no source for. Inventing a field list is
    // inventing a permission, so the rows are [?] and the RULE is what is drawn.
    if (!isDlg && !isFail) {
      out.push('<div class="wf-auth-blk">');
      out.push('<' + h + '>What we read from your Steam account</' + h + '>');
      out.push('<div class="wf-list-c"><ul>');
      out.push('<li><b>[?]</b> field, and on the same row the thing it is for</li>');
      out.push('<li><b>[?]</b> field, same rule</li>');
      out.push('<li><b>[?]</b> field, same rule</li>');
      out.push('<li>The list is <b>[?]</b> until production fills it from a real source. <b>No row is here for a feature that does not exist yet</b>, and a permission list written from memory is a permission invented from memory</li>');
      out.push('</ul></div></div>');
    }

    // ---- What happens next --------------------------------------------------
    // B3-1 by way of row B5. The round trip IS the confusing step Related Job 2
    // forbids, and the one thing this node can do about the route defect is make
    // it predictable, so it is described before it starts. The community's own
    // security rule is quoted once in the node: "Log in steam community first.
    // If any site asks for password etc though, its fake". Step 2 is that rule
    // written as our own promise.
    if (!isDlg) {
      out.push('<div class="wf-auth-blk">');
      out.push('<' + h + '>What happens next</' + h + '>');
      out.push('<div class="wf-steps">');
      out.push('<span class="wf-step"><span>You land on <b>the provider&#39;s own page</b>, at its own address</span></span>');
      out.push('<span class="wf-step"><span>You type your password <b>there, and never here</b></span></span>');
      out.push('<span class="wf-step"><span>You come back, <b>to where you were</b>, signed in</span></span>');
      out.push('</div></div>');
    }

    // ---- The starter credit, as an offer with its terms ----------------------
    // Row I1, bound to C4, D1 and A1, and 1.0 already made it pre-login so this
    // is where it is met. C4 IS THE CONSTRAINT IT DOES NOT GET TO SOFTEN: the
    // amount required to withdraw is stated before the deposit and CAN NEVER
    // RISE. The narrative behind that is B4-1, a threshold that climbed from 5
    // to 12 to 15 dollars after a free open.
    // THE RESIDUAL RISK TRAVELS WITH IT, UNSMOOTHED: the credit teaches a first
    // session user that opening is free, which is the one impression the rest of
    // the map spends its budget contradicting. Both figures are [?].
    // AND IT STAYS IN 2.5 AND 2.6. The node replaces blocks 1 and 3 on a failure
    // and says nothing about this one, so cutting it would be a silent
    // divergence, and a divergence is decided out loud or not at all.
    if (!isDlg) {
      out.push('<div class="wf-auth-blk">');
      out.push('<' + h + '>Your starter credit</' + h + '>');
      out.push('<div class="wf-offer">');
      out.push('<span><b>[?] coins</b>, credited once, when the account exists.</span>');
      out.push('<span>To withdraw anything won with it you need <b>[?] coins</b> of your own deposited. <b>That figure is fixed now and can never rise</b>, not after your first open and not later.</span>');
      out.push('<span>The peg is printed wherever money is spent, and it is <b>[?]</b> until it is published.</span>');
      out.push('</div></div>');
    }

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
      out.push('<p class="wf-auth-lede">Every case, every drop table, every chance and the verifier are readable with no account. <a href="case.html">Back to the case</a>, or <a href="index.html">back to the home page</a>.</p>');
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
          '<div class="wf-dlg-art" aria-hidden="true">Image slot, stage 06</div>' +
          '<div class="wf-dlg-body">' +
            '<p class="wf-dlg-h" id="wf-dlg-h">Sign in</p>' +
            '<p class="wf-dlg-sub">You stay on this page.</p>' +
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
        say('<b>Both declarations are needed before you sign in.</b>');
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
        '</div>' +
        '<p class="wf-note wf-fig-missing">The threshold below which this never renders is not set. It belongs to production timings, and a spinner for a lookup that resolves in milliseconds is an interruption inside an interruption</p>';
      return '<div class="wf-dlg-scrim" aria-hidden="true"></div>' +
             '<div class="wf-dlg-wrap"><div class="wf-dlg wf-dlg--plain" role="dialog" aria-modal="true" aria-label="Checking the market">' +
             '<div class="wf-dlg-body"><div class="wf-gate">' + body + '</div></div></div></div>';
    }

    if (state === 'staged') {
      body =
        '<h2 class="wf-gate-h" id="wf-gate-h">This market is open with one limit.</h2>' +
        '<p class="wf-gate-p">You pressed open on Ironbound. Before that runs, one thing about your market.</p>' +
        /* THE LIMIT COMES FROM THE MARKET ROW AND IS NEVER INVENTED HERE. This
           node holds no market list, no legal citation and no age constant: a
           constant here is a second register that will disagree with the first. */
        '<div class="wf-limit">' +
          '<span class="wf-limit-h">The limit</span>' +
          '<p class="wf-gate-p">Withdrawal to Steam is available. Deposits are capped while the market is in staged rollout.</p>' +
          '<span class="wf-limit-h">What changes it</span>' +
          '<p class="wf-gate-p">The cap lifts when the row moves from staged to open, which happens on a review rather than on a date.</p>' +
        '</div>' +
        /* REJECT AS EASY AS ACCEPT, the rule this product already applied to its
           other interrupt. Declining returns the person to what they were
           reading and records nothing. */
        '<div class="wf-gate-acts">' +
          '<button class="wf-btn wf-btn--primary" type="button" data-gate-dismiss>Continue</button>' +
          '<button class="wf-btn" type="button" data-gate-dismiss>Not now</button>' +
        '</div>';
    } else if (state === 'blocked') {
      body =
        '<h2 class="wf-gate-h" id="wf-gate-h">We cannot serve this market.</h2>' +
        '<p class="wf-gate-p">The law where you are does not allow what this site does.</p>' +
        /* THE GROUND IS PER MARKET AND COMES FROM THE REGISTER. Where a row's
           ground is [?] the row is not blocked at all: B4's success signal is
           that every blocked market carries a citation. Readable words, never a
           statute number standing alone. */
        '<p class="wf-ground">Games of chance with prizes of monetary value require an operating licence here, and skins that can be sold count as monetary value.</p>' +
        '<p class="wf-gate-p">The instrument and its source are on file. <strong>If you are not in that market, support will look at it and answer inside a published deadline.</strong></p>' +
        '<p class="wf-note wf-fig-missing">Response deadline not available: it is owned by the support node and is not set yet</p>' +
        openLine() + refusalActs();
    } else {
      // NOT LAUNCHED IS THE DEFAULT UNDER AN ALLOWLIST, and detection failing
      // renders the same message: a missing row denies. The tempting default is
      // to fail open, and failing open is the property the allowlist was chosen
      // to eliminate.
      var lede = (state === 'unavailable')
        ? 'We could not work out where you are, and an allowlist answers that the same way it answers an unreviewed market. Opening cases is not available.'
        : 'Opening cases is not available where you are.';
      body =
        '<h2 class="wf-gate-h" id="wf-gate-h">We do not serve this market yet.</h2>' +
        '<p class="wf-gate-p">' + lede + ' We open a market only after a lawyer has reviewed it and signed the row, and nobody has reviewed this one yet. <strong>That is a statement about us, not a legal verdict about your country.</strong></p>' +
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
    return '<p class="wf-gate-open">You can still read every page here, including how each drop is proven. If you already have an account, your balance and your items stay yours, and withdrawal stays open.</p>';
  }
  function refusalActs() {
    // NEVER A LIST OF THE MARKETS THAT ARE OPEN. The footer's market statement
    // is the public face of the register; this dialog answers one person.
    return '<div class="wf-gate-acts">' +
      '<a class="wf-btn wf-btn--primary" href="support.html">Support</a>' +
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
  function proofPanel(state) {
    var tag, fields, scope, acts;

    var SEEDS =
      '<div class="wf-pf"><span class="wf-pf-k">Server seed hash, published before the roll</span>' +
        '<span class="wf-pf-v">4f2a91c7e0b83d5619ac7f20d8e4b1663c9a05f7d21e8b4409c6fa3d7e15b208</span></div>' +
      '<div class="wf-pf"><span class="wf-pf-k">Server seed, revealed after</span>' +
        '<span class="wf-pf-v">a71c0e4b93f6d2857e0c1a4f68b95d3027ef8c61b4a09d75e3f26c8017ab54d9</span></div>' +
      '<div class="wf-pf"><span class="wf-pf-k">Client seed</span><span class="wf-pf-v">7d19f4a2</span></div>' +
      '<div class="wf-pf"><span class="wf-pf-k">Nonce</span><span class="wf-pf-v">41 207</span></div>' +
      '<div class="wf-pf"><span class="wf-pf-k">Settled result</span><span class="wf-pf-v">7 318</span></div>' +
      '<div class="wf-pf"><span class="wf-pf-k">Ticket range it landed in</span><span class="wf-pf-v">7 300 - 7 420, AK-47 Redline</span></div>';

    if (state === 'unavailable') {
      // 0.14: the real case is rounds predating the published ledger, and
      // whether six years of history can migrate at all is D-B. THE PAGE DOES
      // NOT HIDE AND DOES NOT PRETEND.
      tag = 'Proof not available';
      fields = '<div class="wf-pf"><span class="wf-pf-k">Why</span>' +
               '<span class="wf-pf-v wf-fig-missing">This round predates the published ledger</span></div>';
      scope = 'The round happened and the item is real. What is missing is the published commitment, because this open is older than the ledger that publishes them.';
      acts = '<a class="wf-btn" href="fair.html">Read what the proof covers</a>';
    } else if (state === 'mismatched') {
      // OUR OWN PROOF FAILING, IN A STRANGER'S BROWSER, ON THE SURFACE THAT
      // TRAVELS FURTHEST. It is the state this page is least likely to be built
      // for and the one where building it late costs the most.
      tag = 'Recomputed: does not match';
      fields = SEEDS +
        '<div class="wf-pf"><span class="wf-pf-k">Recomputed result</span><span class="wf-pf-v">7 902</span></div>';
      scope = 'The recomputation does not agree with the settled result. That is our failure, not yours, and it is reportable. The published response deadline applies to it.';
      acts = '<a class="wf-btn wf-btn--primary" href="support.html">Report this round</a>' +
             '<a class="wf-btn" href="fair.html">Recompute it yourself</a>';
    } else {
      tag = (state === 'checked') ? 'Recomputed: matches' : 'Settled';
      fields = SEEDS;
      scope = 'This shows the round was fixed before the click and was not altered after it. It does not show that the published chances are the chances used: that is a different question, and the observed rate beside every published tier on the case screen is its answer.';
      acts = '<a class="wf-btn wf-btn--primary" href="fair.html">Recompute this round yourself</a>';
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

  function renderProofs() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-proof]'), function (host) {
      host.innerHTML = proofPanel(host.getAttribute('data-proof') || 'settled');
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
      : '<p class="wf-panel-line">Five tiers, earned by wagering. The tier decides which case the free entry gives.</p>';

    var act = account
      ? '<button class="wf-btn" type="button" disabled>Available now: 0 cases</button>'
      : '<a class="wf-btn" href="signin.html" data-auth-open="default">Sign in to see your tier</a>';

    return '' +
      '<div class="wf-panel">' +
        '<div class="wf-panel-head">' + wager +
          /* THE COUNTDOWN IS A SLOT AND NOT A NUMBER. The reset moment is not
             set anywhere in this repository, and a countdown to an unknown end
             is the dash that reads as zero, 0.11 rule 3. */
          '<div class="wf-fig">' +
            '<span class="wf-fig-v wf-fig-missing">Reset not available</span>' +
            '<span class="wf-fig-c">The reset moment is not set yet, so no countdown runs</span>' +
          '</div>' +
        '</div>' +
        '<ol class="wf-ladder">' + rungs + '</ol>' +
        '<div class="wf-panel-foot">' + act + '</div>' +
      '</div>';
  }

  function renderLadders() {
    var account = !!(window.WF_SHELL && window.WF_SHELL.account);
    Array.prototype.forEach.call(document.querySelectorAll('[data-ladder]'), function (host) {
      host.innerHTML = dailyLadder(account);
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
            '<button class="wf-btn wf-btn--small" type="button">Reset all</button>' +
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
                '<button class="wf-btn wf-btn--small" type="button" aria-label="Decrease the minimum">-</button>' +
                '<label class="wf-vh" for="f-min">Minimum entry cost</label>' +
                '<input id="f-min" type="text" inputmode="decimal" value="0.00">' +
                '<button class="wf-btn wf-btn--small" type="button" aria-label="Increase the minimum">+</button>' +
              '</div>' +
              '<div class="wf-stepper">' +
                '<button class="wf-btn wf-btn--small" type="button" aria-label="Decrease the maximum">-</button>' +
                '<label class="wf-vh" for="f-max">Maximum entry cost</label>' +
                '<input id="f-max" type="text" inputmode="decimal" value="55.00">' +
                '<button class="wf-btn wf-btn--small" type="button" aria-label="Increase the maximum">+</button>' +
              '</div>' +
            '</div>' +
            /* THE PEG RENDERS HERE SINCE D-95 AND THE CODE STAYS OUT OF THE COPY, D-66:
               a wireframe states a state and never cites a decision record. */
            '<p class="wf-note">Prices are in coins, and one coin is $1.00, a fixed rate.</p>' +
          '</div>' +

          /* THREE CHECKBOXES AND NOT A SLIDER. The band has three values and no
             numbers behind them yet, so a continuous control would promise a
             precision that does not exist. The mark sits BESIDE the word and
             never replaces it, 0.7 rule 5.5. */
          '<div class="wf-fset">' +
            '<span class="wf-fset-h" id="f-risk-h">Risk level</span>' +
            '<div class="wf-riskset" role="group" aria-labelledby="f-risk-h">' +
              '<label class="wf-riskrow"><input type="checkbox" disabled>' + pips(1) + 'Low</label>' +
              '<label class="wf-riskrow"><input type="checkbox" disabled>' + pips(2) + 'Medium</label>' +
              '<label class="wf-riskrow"><input type="checkbox" disabled>' + pips(3) + 'High</label>' +
            '</div>' +
            /* THE ONE INERT CONTROL THIS STAGE HAS DRAWN, and D-58 does not
               reach it: on sign in the precondition was something a person
               could satisfy, here it is a number that does not exist in this
               repository. So the refusal says what is missing, in words. */
            '<p class="wf-note wf-fig-missing">Not available: where High stops and Medium begins is not set, so no case can be sorted into a band yet</p>' +
          '</div>' +

          /* THE ADDITIONAL GROUP IS ACCOUNT ONLY, and it is the baseline's own,
             not an invention: both rows read an account. A guest meets neither,
             which is also the answer to half the objection against the second
             one. The other half is printed in D-66 and stays printed. */
          (account ?
          '<div class="wf-fset">' +
            '<span class="wf-fset-h" id="f-add-h">Additional</span>' +
            '<div class="wf-riskset" role="group" aria-labelledby="f-add-h">' +
              '<label class="wf-riskrow"><input type="checkbox">Liked</label>' +
              '<label class="wf-riskrow"><input type="checkbox">Sufficient funds to open</label>' +
            '</div>' +
          '</div>' : '') +

          '<div class="wf-fset">' +
            '<label class="wf-fset-h" for="f-type">Case type</label>' +
            '<select id="f-type"><option>All</option></select>' +
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
          '<button class="wf-btn wf-btn--primary" type="button" data-filter-dismiss>Show 13 cases</button>' +
        '</div>' +
      '</aside>';
  }

  function mountFilterDrawer() {
    var opener = null, host = null;

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
      host.addEventListener('click', function (e) {
        if (e.target.closest('.wf-drawer-x') || e.target.closest('[data-filter-dismiss]')) close();
      });
      document.addEventListener('keydown', onKey, true);
      var f = host.querySelector('.wf-drawer-x');
      if (f) f.focus();
    }

    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-filter-open]');
      if (!t) return;
      e.preventDefault();
      open(t);
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
    { key: 'items',    label: 'My items',     file: 'account.html' },
    { key: 'history',  label: 'History',      file: 'history.html' },
    { key: 'profile',  label: 'Profile',      file: 'profile.html' },
    { key: 'settings', label: 'Settings',     file: 'settings.html' }
  ];

  function renderAcctHero(host) {
    if (!host) return;
    var cfg = window.WF_ACCT || {};
    var M = (window.WF_SHELL && window.WF_SHELL.money) || {};
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
    var ha = el('a', null, 'Home'); ha.href = BASE + 'index-account.html';
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
    who.appendChild(names);
    row.appendChild(who);

    var money = el('div', 'wf-ah-money');
    var noMoney = !!(window.WF_SHELL && window.WF_SHELL.money === false);
    if (!noMoney) {
      [[M.balance || '74.20 coins', 'Balance'],
       [M.held || '130.60 coins', 'Value of items held']].forEach(function (f) {
        var d = el('div', 'wf-fig');
        d.appendChild(el('span', 'wf-fig-v', f[0]));
        d.appendChild(el('span', 'wf-fig-c', f[1]));
        money.appendChild(d);
      });
    } else {
      /* AN UNREADABLE FIGURE IS SAID, NEVER ZEROED. Same rule the header follows. */
      money.appendChild(el('p', 'wf-fig-missing', 'Money not available: this account could not be read'));
    }
    var add = el('a', 'wf-btn wf-ah-add', 'Add funds');
    add.href = BASE + 'deposit.html';
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
  }

  /* THE SELECTION BAR COUNTS AND SUMS, 5.1, D-84. It is here rather than inline
     because it is behaviour, and because the same rule the bar prints is the rule
     0.11 states for the header: A COUNT OF THINGS AND A VALUE OF THINGS, never one
     score. The two figures are read from the cards themselves, so the bar and the
     grid cannot disagree. Select all and Deselect all are real and they dispatch
     change, because a control that sets a checkbox without telling the page is a
     control that half works. */
  function mountInvBar() {
    var bar = document.querySelector('[data-invbar]');
    if (!bar) return;
    var picks = [].slice.call(document.querySelectorAll('[data-inv-pick]'));
    var nOut = bar.querySelector('[data-invbar-n]');
    var vOut = bar.querySelector('[data-invbar-v]');

    function paint() {
      var on = picks.filter(function (i) { return i.checked; });
      var sum = on.reduce(function (a, i) { return a + parseFloat(i.getAttribute('data-v') || '0'); }, 0);
      nOut.textContent = on.length + (on.length === 1 ? ' item' : ' items');
      vOut.textContent = sum.toFixed(2) + ' coins';
      /* THE BAR STAYS, THE ACTIONS GO IDLE. D-85 reversed the earlier "hidden until
         something is ticked": the bar is where a person learns the exits exist, and
         hidden it teaches nobody. Idle is a state of a working control, which is the
         line D-58 draws: the note beside them says what makes them live. */
      bar.classList.toggle('is-idle', on.length === 0);
      [].slice.call(bar.querySelectorAll('[data-invbar-act]')).forEach(function (a) {
        a.setAttribute('aria-disabled', on.length === 0 ? 'true' : 'false');
      });
    }
    picks.forEach(function (i) { i.addEventListener('change', paint); });
    var all = bar.querySelector('[data-inv-all]');
    var none = bar.querySelector('[data-inv-none]');
    if (all) all.addEventListener('click', function () { picks.forEach(function (i) { i.checked = true; }); paint(); });
    if (none) none.addEventListener('click', function () { picks.forEach(function (i) { i.checked = false; }); paint(); });
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
        acts.appendChild(el('span', 'wf-fig-c', 'Kept. These are the record of what we told you.'));
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
  var HIST_TABS = [
    { key: 'rolls',       label: 'Rolls',       file: 'history.html' },
    { key: 'deposits',    label: 'Deposits',    file: 'history-deposits.html' },
    { key: 'withdrawals', label: 'Withdrawals', file: 'history-withdrawals.html' },
    { key: 'cashout',     label: 'Cash out',    file: 'history-cashout.html' }
  ];

  var HIST_COLS = {
    deposits: [
      { k: 'when',   h: 'When',              mono: true, num: true },
      { k: 'amount', h: 'Amount',            mono: true, num: true },
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
    cashout: [
      { k: 'when',     h: 'When',            mono: true, num: true },
      { k: 'what',     h: 'What you sold' },
      { k: 'credited', h: 'Credited',        mono: true, num: true },
      { k: 'roll',     h: 'From this roll' },
      { k: 'ours',     h: 'Our reference',   mono: true }
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
    var t = el('table', 'wf-table');
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
        td.appendChild(document.createTextNode(r[c.k] == null ? '' : r[c.k]));
        /* THE REASON TRAVELS WITH THE STATE AND NEVER SITS IN A TOOLTIP. B8-3
           is three accounts refused with no explanation, and a refusal whose
           ground is only in a hover is a refusal with no ground on a phone. */
        if (c.state && r.why) td.appendChild(el('span', 'wf-hnote', r.why));
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

  function histPanel(kind, data) {
    var wrap = el('div', 'wf-hpanel');

    var rows = (data && data[kind]) || [];
    var unit = kind === 'deposits' ? 'payments' : (kind === 'cashout' ? 'sales' : 'withdrawals');
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
    if (kind === 'cashout') {
      wrap.appendChild(el('p', 'wf-note', 'Every item this account has sold back for coins. Credited is our price for the skin at that moment, which is the same value the win was credited at. Taking the real thing out to Steam instead is a different number: we sell you a real copy at our price for it, and the difference settles against your balance.'));
      wrap.appendChild(el('p', 'wf-note wf-fig-missing', 'Turning a balance back into money is not something this product does, and what one coin is worth in real money is not published, so no row here is a payment out'));
    }

    if (kind === 'cashout') {
      /* nothing further: the two lines above are this tab's note, and the
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
      wrap.appendChild(el('p', 'wf-note', 'Every payment this account has made, whether it arrived or not. Amounts are in coins, at 1 coin = $1.00, so a row lines up with a bank statement one to one.'));
      wrap.appendChild(el('p', 'wf-note wf-fig-missing', 'Whether a row shows the money charged or the coins credited is not decided, and since the bonus was added those are no longer the same number'));
    } else {
      /* B8-2 IS SIX PEOPLE WAITING WITH HARD FIGURES AND NOBODY TELLING THEM
         ANYTHING. So a row carries who is being waited on, and never an ETA:
         5.3's clock shows elapsed, the published ceiling and the party, and a
         history that invents a fourth number contradicts its own screen. */
      wrap.appendChild(el('p', 'wf-note', 'Every item this account has sent to Steam. A row says who it is waiting on and how long it has been. It never estimates when it will finish, because we do not know.'));
    }

    if (!rows.length) {
      /* THE EMPTY OFFERS A ROUTE HERE BECAUSE THERE IS NOW AN ACT THAT FILLS IT,
         which is exactly the test the D-88 panel used to refuse itself one. */
      if (kind === 'cashout') {
        wrap.appendChild(histEmpty('Nothing sold back yet', 'When you sell an item back for coins, the row lands here with what you sold, what it credited and the roll it came from.', 'account.html', 'My items'));
      } else {
        wrap.appendChild(kind === 'deposits'
          ? histEmpty('No payments yet', 'When you add funds, every attempt lands here, the ones that went through and the ones that did not.', 'deposit.html', 'Add funds')
          : histEmpty('Nothing sent to Steam yet', 'When you send an item to Steam, the row lands here and stays, with who it is waiting on and how long it has been.', 'account.html', 'My items'));
      }
    } else {
      wrap.appendChild(histTable(kind, rows));
    }
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
     NODE 4.1 STEP 1, THE METHOD GRID, D-96. Thirty five funding routes in two
     named groups, in the baseline's own order.
     ONE RENDERER, TWO CARRIERS. The dialog and the address render the same grid,
     which is D-54's contract for sign in applied here: the address renders the
     same content as a full page, the dialog renders it over the surface a person
     is already on, and neither is a reduced version of the other.
     THE ONLY GUIDANCE ON THE SCREEN IS TWO MARKS ON TWO TILES, and that is the
     baseline's answer to choosing among thirty five. It is kept because nothing
     in this repository supports a better one: no source names which methods
     carry the volume, so a shortlist of our own would be a preference wearing a
     recommendation's clothes.
     THE COUNT RENDERS. Thirty five is a fact about the screen a person is
     looking at, and a grid this long without one reads as endless.
     --------------------------------------------------------------------- */
  function payTile(row) {
    var kind = row[1], mark = row[2];
    var node = kind ? el('a', 'wf-pay-t') : el('div', 'wf-pay-t is-noroute');
    if (kind) {
      node.href = BASE + (window.WF_PAY.route[kind] || 'deposit.html');
      // THE KIND TRAVELS ON THE TILE, D-99. At the address the href is the whole
      // of it; inside the dialog the layer reads this and advances itself.
      node.setAttribute('data-pay-kind', kind);
    }
    var art = el('span', 'wf-pay-art');
    art.setAttribute('aria-hidden', 'true');
    node.appendChild(art);
    node.appendChild(el('span', 'wf-pay-n', row[0]));
    if (mark === 'best')    node.appendChild(el('span', 'wf-pay-m', 'Most people use this'));
    if (mark === 'instant') node.appendChild(el('span', 'wf-pay-m', 'Instant'));
    /* THE MARK IS ON THE TILE AND THE REASON IS ONE LINE UNDER THE GRID, D-97.
       The whole sentence sat on the tile and stretched the first row from 74px to
       210px, so one orphan reshaped the grid for the other thirty four. The rule
       that the orphan is printed rather than hidden is unchanged; what moved is
       the sentence, not the mark. */
    if (!kind) node.appendChild(el('span', 'wf-pay-m wf-fig-missing', 'Not open yet'));
    return node;
  }

  /* THE GROUP HEADING IS A LABEL AND NOT A SECTION HEAD, D-97. It is still an h2
     because the document outline needs it and a screen reader navigates by it;
     what changed is that it stopped being drawn at section-head size. The two
     headings were costing 96px of the first screen between them and the grid is
     what a person came to look at. The baseline runs the same two words as a
     small centred caption for the same reason. */
  function payGroup(title, rows) {
    var sec = el('section', 'wf-pay-sec');
    sec.appendChild(el('h2', 'wf-pay-gh', title));
    var g = el('div', 'wf-pay-g');
    rows.forEach(function (r) { g.appendChild(payTile(r)); });
    sec.appendChild(g);
    return sec;
  }

  /* TWO CARRIERS CALL THIS, D-99, AND THE IDS ARE PREFIXED IN ONE OF THEM.
     Opened over /deposit there would otherwise be two pay-promo fields in one
     document and a label pointing at whichever the browser found first. */
  function mountPay(host, idp) {
    host = host || document.querySelector('[data-pay-grid]');
    if (!host || !window.WF_PAY) return;
    var P = window.WF_PAY;
    var IDP = idp || '';

    /* PROMO AND COUNTRY SHARE ONE ROW, D-97, founder of 25 August 2026: the two
       of them full width were pushing the grid to 777px and the grid is the
       screen. Side by side from 600 and stacked below it, which is the baseline's
       own arrangement and not a new idea.
       THE PROSE UNDER THEM IS ONE LINE INSTEAD OF THREE PARAGRAPHS. Nothing was
       deleted that was load bearing: the country's job and the two named holes are
       still on the page, in the note under the pair, at one line each. What went
       is the explanation of what the control is not, which a person reading a
       label already knows. */
    var head = el('div', 'wf-pay-head');

    /* THE PROMO FIELD IS EMPTY, D-96, AND THE BASELINE'S IS NOT. The live product
       arrives with a partner code already in the field, a green tick beside it and
       the code applied. THAT IS ATTRIBUTION HAPPENING TO A PERSON RATHER THAN BY
       THEM, and it is the same shape 0.4 refuses for consent one node over. Ours
       is empty, unticked, and does nothing until someone types. */
    var promo = el('div', 'wf-pay-f');
    var pl = el('label', 'wf-cfg-l', 'Promo or partner code');
    pl.setAttribute('for', IDP + 'pay-promo');
    promo.appendChild(pl);
    var pr = el('div', 'wf-row');
    var pin = el('input', 'wf-f');
    pin.id = IDP + 'pay-promo'; pin.type = 'text'; pin.placeholder = 'Optional';
    pr.appendChild(pin);
    pr.appendChild(el('button', 'wf-btn', 'Apply'));
    promo.appendChild(pr);
    head.appendChild(promo);

    /* THE COUNTRY IS READ HERE AND SET ON 5.11, D-98, AND IT SHIPPED AS A SECOND
       SELECTOR FOR ONE DAY WITH THE ARGUMENT AGAINST IT IN ITS OWN COMMENT.
       The comment said "5.11 owns the one answer and this control reads it" and
       the code then drew a select. A control that sets a value another node owns
       is a second answer waiting to disagree with the first.
       AND THE BASELINE IS THE EVIDENCE RATHER THAN THE THEORY.
       baseline-account.md 5b.6 walked TWO SELF-DECLARED COUNTRIES IN ONE ACCOUNT
       ON ONE DAY, Ukraine on the deposit step and United States in settings,
       because the live product carries a field in both places and reconciles
       neither. THAT IS THE EXACT DEFECT A SELECT HERE REPRODUCES, and node 0.12's
       allowlist has a ban on the other end of a false declaration.
       WHAT IT SAID WAS ALSO WRONG. The one option read "Isle of Man", which is the
       LICENCE DIRECTION from D-23, the jurisdiction we would be regulated from.
       It is not a market anyone pays from and no row has opened it. Naming it here
       put our own regulator in a list of a person's countries.
       AND A SELECT WITH ONE OPTION IS A PICTURE OF A CHOICE, D-58, which is the
       smaller of the two faults and the one that made the larger one visible.
       SO IT RENDERS AS WHAT IT IS: a fact from the account, with the route to the
       place that owns it, and the state of the register printed rather than
       implied. D-23: the allowlist is closed by default and there is no market we
       can open this month, so a selector of open markets is a control with nothing
       true to put in it. */
    var cty = el('div', 'wf-pay-f');
    cty.appendChild(el('span', 'wf-cfg-l', 'Paying from'));
    var cv = el('p', 'wf-pay-cty');
    cv.appendChild(el('strong', null, 'Ukraine'));
    cv.appendChild(document.createTextNode(', the country on your account. '));
    var ca = el('a', null, 'Change it in Settings');
    ca.href = BASE + 'settings.html';
    cv.appendChild(ca);
    cty.appendChild(cv);
    head.appendChild(cty);
    host.appendChild(head);

    var n = P.fiat.length + P.crypto.length;
    var note = el('p', 'wf-note');
    note.appendChild(document.createTextNode(n + ' ways to pay, in the live product\u2019s own order. Where you pay from decides which of them work. '));
    note.appendChild(el('span', 'wf-fig-missing', 'No market is open yet: the register is closed by default and every row needs its own legal work before anyone can pay from it. Which routes each market will carry is not set either.'));
    host.appendChild(note);

    host.appendChild(payGroup('Cards, wallets and bank transfer', P.fiat));
    host.appendChild(el('p', 'wf-note wf-fig-missing', 'Paying with skins exists on the live product and has no row in our backlog, no node and no flow, so the tile is here and it does not open'));
    host.appendChild(payGroup('Crypto', P.crypto));
  }

  /* ---------------------------------------------------------------------
     NODE 4.1 STEP 2, THE THREE ROUTE BODIES, D-99, AND THE CARRIER THE FOUNDER
     ASKED FOR ON 25 AUGUST 2026.
     THE DIALOG WAS ASKED FOR IN THE SAME MESSAGE THAT SUPPLIED THE METHOD LIST
     and D-96 built the list and dropped the carrier. Worse than dropping it: the
     renderer above and the page under it both carry the sentence "one renderer,
     two carriers, the dialog and the address render the same grid" while exactly
     one carrier existed. A comment that states a rule its own code does not keep
     is the fourth of its kind in this stage, and the first three were all found
     by a person looking rather than by an instrument.
     WHY A DIALOG AND NOT A PAGE. The same reason D-54 gave for sign in and it is
     stronger here: a person adds funds in the middle of something, and the case
     they were looking at, the count they set and the price they were reading are
     what the money is for. A page puts all of it behind them at the moment they
     are deciding how much to spend.
     ONE RENDERER, SIX ADDRESSES AND ONE DIALOG. Every route body below is built
     here once. Before this, deposit-ceiling-pending.html and
     deposit-declined.html were hand copies of deposit-card.html and had drifted:
     both had missed D-97 entirely, so neither carried the provider block, the
     receipt at the top of the dock or the billing block, and D-97 found one more
     of the same class a day earlier. A state that is a copy of a page is a state
     no correction reaches.
     THE IDS ARE PREFIXED IN THE DIALOG. Opening it over a step 2 address puts two
     of this body in one document, and two elements with one id is a label that
     points at the wrong field. --------------------------------------------- */

  /* THE THREE FIGURES ARE ONE ARITHMETIC AND NOT THREE TYPED STRINGS. Amount,
     bonus and what you receive were written by hand on five pages. THE SUM ONLY
     WORKS BECAUSE OF D-95: one coin is one dollar, fixed, so dollars in and coins
     out can be added at all. If the peg ever moves this function is where it
     moves, rather than in fifteen places.
     THE CAP IS REAL HERE RATHER THAN DECORATIVE: WF_BONUS carries it, so a large
     amount stops adding bonus at the cap instead of printing a percentage that
     the product would not honour. */
  function depFigs(amount) {
    var B   = window.WF_BONUS || {};
    var a   = parseFloat(amount) || 0;
    var pct = (parseFloat(B.pctFull || '5.00') || 0) / 100;
    var cap = parseFloat(String(B.cap || '100').replace(/[^0-9.]/g, '')) || 0;
    var bon = Math.min(a * pct, cap);
    return {
      amount:  a.toFixed(2),
      bonus:   bon.toFixed(2),
      receive: (a + bon).toFixed(2),
      capped:  (a * pct) > cap
    };
  }

  /* THE PROVIDER IS FIRST ON THIS SCREEN SINCE D-97, which is where the baseline
     puts it: SELECT PROVIDER is the row above the form. The provider decides what
     the form asks for, so a form filled before it is a form that can change under
     the person.
     WHO THEY ARE IS NOT DECIDED. The live product runs Zen and a gift-card tile;
     ours has no processor chosen and inventing two names would be the median the
     input gate exists to prevent. */
  function depProvider(P) {
    return '' +
      '<div class="wf-stack">' +
        '<h2 class="wf-pay-gh" id="' + P + 'h2-prov">Who takes the payment</h2>' +
        '<p class="wf-note">Your card details go to them and not to us.</p>' +
        '<div class="wf-pay-g">' +
          '<div class="wf-pay-t is-noroute"><span class="wf-pay-art" aria-hidden="true"></span><span class="wf-pay-n wf-fig-missing">Provider not chosen</span></div>' +
          '<div class="wf-pay-t is-noroute"><span class="wf-pay-art" aria-hidden="true"></span><span class="wf-pay-n wf-fig-missing">Provider not chosen</span></div>' +
        '</div>' +
        '<p class="wf-note wf-fig-missing">Which payment providers this product uses is not decided, and neither is any fee, minimum or maximum they carry</p>' +
      '</div>';
  }

  /* THE CARD BODY. Every route that takes an amount runs it: the amount with the
     rate beside it, the bonus rule, the ceiling, the exit price and the billing
     block, in the order D-97 left them.
     ONE EDITABLE FIELD. The converted figure is never an input: two editable money
     fields on one form is where a person types into the wrong one. */
  function depCard(P, o) {
    var f = depFigs(o.amount);
    var B = window.WF_BONUS || {};
    return '' +
      '<div class="wf-fund-grid">' +
        '<div class="wf-fund">' +
          '<div class="wf-acct-state">Signed in as <strong>' + (window.WF_WHO || {}).name + '</strong>. Funding is open on this account.</div>' +
          depProvider(P) +
          '<div class="wf-stack">' +
            '<div class="wf-sec-head"><h2 id="' + P + 'h2-amount">How much</h2></div>' +
            '<div class="wf-amt">' +
              '<label class="wf-fig-c" for="' + P + 'dep-amt">Amount you are paying</label>' +
              '<div class="wf-amt-row">' +
                '<input class="wf-amt-in" id="' + P + 'dep-amt" type="text" inputmode="decimal" value="' + f.amount + '" aria-describedby="' + P + 'dep-unit">' +
                '<span class="wf-amt-unit" id="' + P + 'dep-unit">US dollars</span>' +
              '</div>' +
              /* The presets are inherited: the live product runs six. Their values
                 follow the currency, so they are slots rather than numbers. */
              '<div class="wf-presets">' +
                '<button class="wf-btn wf-btn--small" type="button">$5</button>' +
                '<button class="wf-btn wf-btn--small" type="button">$10</button>' +
                '<button class="wf-btn wf-btn--small" type="button">$20</button>' +
                '<button class="wf-btn wf-btn--small" type="button">$50</button>' +
                '<button class="wf-btn wf-btn--small" type="button">$100</button>' +
                '<button class="wf-btn wf-btn--small" type="button">$200</button>' +
              '</div>' +
              /* THE CONVERSION FIGURE LEFT THIS BLOCK ON D-97 AND IT IS A DEDUP
                 RATHER THAN A CUT: the dock leads with what you receive, so the
                 same arithmetic was on the screen three times. THE RATE STAYS, as
                 a line, beside the field a person is typing in. */
              '<p class="wf-note">At <strong>1 coin = $1.00</strong>, a fixed rate rather than a market read. It carries no as-of: if it ever changes we say so before you spend against it.</p>' +
            '</div>' +
          '</div>' +
          /* THE BONUS, D-94, AND IT IS HERE BECAUSE THE BADGE IN THE HEADER MADE A
             PROMISE. A percentage advertised on a persistent control and not
             restated where the money goes in is the shape B4-1 describes.
             ZERO WAGERING, PRINTED RATHER THAN ASSUMED: C4 is an MVP rule and a
             wagering requirement is B4-1 in better clothes. */
          '<div class="wf-stack">' +
            '<p class="wf-cost-say"><strong>We add ' + (B.pctFull || '5.00%') + ' in coins on top of what you put in, up to ' + (B.cap || '100 coins') + ' per ' + (B.period || '24 hours') + '.</strong> It is added when the money arrives, and it is the same offer every time rather than a first deposit only. <strong>It carries no wagering requirement:</strong> the coins it adds behave like every other coin in your balance, and what it takes to withdraw does not move because of it.</p>' +
          '</div>' +
          /* THE SPEND CEILING, C2. Four properties and every one is load bearing:
             pre-filled from the amount just typed rather than from a default we
             chose, blocking and the only blocking element on the page, the
             asymmetry stated in the interface rather than in terms, and never a
             score.
             PER PERIOD, NOT PER DEPOSIT. One ceiling is in force at a time, so a
             second deposit inside the period pre-fills again and that figure is a
             CHANGE to the ceiling in force, which takes the direction rule with
             it. Without that the second deposit of a session would raise the
             ceiling by being typed. */
          '<div class="wf-stack" data-dep-form>' +
            '<div class="wf-sec-head">' +
              '<h2 id="' + P + 'h2-ceiling">A ceiling on what you put in</h2>' +
              '<p class="wf-sec-sub">Pre-filled with the amount you just typed. Accept it or change it.</p>' +
            '</div>' +
            '<div class="wf-ceil">' +
              '<div class="wf-stack">' +
                '<label class="wf-fig-c" for="' + P + 'dep-ceil">Ceiling</label>' +
                '<input class="wf-ceil-in" id="' + P + 'dep-ceil" data-dep-ceil type="text" inputmode="decimal" value="' + (o.ceiling || f.amount) + '">' +
              '</div>' +
              '<div class="wf-fig">' +
                '<span class="wf-fig-v wf-fig-missing">Period not set</span>' +
                '<span class="wf-fig-c">One ceiling is in force at a time and it belongs to a named period. Which periods this offers is not decided.</span>' +
              '</div>' +
            '</div>' +
            '<ul class="wf-asym">' +
              '<li><span class="wf-asym-w">Lower it</span><span>Takes effect immediately.</span></li>' +
              '<li><span class="wf-asym-w">Raise it</span><span>Takes effect 24 hours later. The ceiling you have now holds until then.</span></li>' +
            '</ul>' +
            '<div class="wf-row">' +
              '<button class="wf-btn wf-ceil-set" data-dep-accept type="button" aria-pressed="false">Accept this ceiling</button>' +
            '</div>' +
          '</div>' +
          '<p class="wf-note">A session limit, a cool down and a self exclusion live together on <a href="' + BASE + 'responsible.html">Responsible play</a>.</p>' +
          /* THE WITHDRAWAL THRESHOLD, A LINE SINCE D-97 AND NOT A SECTION. The exit
             is priced where the entry is paid, frozen at this moment for the money
             this deposit funds: a later change may lower it and may never raise it. */
          '<p class="wf-note"><strong>To take anything out you will need</strong> <span class="wf-fig-missing">a sum that is not published yet</span>. Whatever it says when you pay is the figure that applies to this money: it can be lowered later and it can never be raised.</p>' +
          /* WHAT HAPPENS AFTER YOU PAY, STATED BEFORE THE PAYMENT, C3. The barrier
             is money that leaves and does not arrive, and a competitor publishes
             the real timing in its FAQ and not in its product. */
          '<p class="wf-note"><strong>After you pay.</strong> <span class="wf-fig-missing">How long crediting takes is not published.</span> Whatever it says here is the same figure that runs as the clock afterwards, and if it passes with nothing arrived the deposit keeps its state rather than turning into silence. <a href="' + BASE + 'support.html">Support</a> answers inside a published deadline.</p>' +
          /* BILLING, AND ONE FIELD ONLY. The baseline asks a signed-in person for
             an email it already holds, 5b.2, which is a form that does not know
             who it is talking to. Ours is filled and editable.
             THE TERMS ARE ASKED AGAIN, the baseline's own behaviour: the sign-in
             consent is about the account and this one is about a payment. */
          '<div class="wf-stack">' +
            '<div class="wf-sec-head"><h2 id="' + P + 'h2-billing">Where the receipt goes</h2></div>' +
            '<div class="wf-cfg-f">' +
              '<div class="wf-cfg-row">' +
                '<label class="wf-cfg-l" for="' + P + 'dep-email">Email</label>' +
              '</div>' +
              '<input class="wf-cfg-in" id="' + P + 'dep-email" type="email" value="nightjar_cs@example.com">' +
              '<p class="wf-cfg-p">This is the address on your account. Change it here and it changes for this payment only.</p>' +
            '</div>' +
            '<label class="wf-cbx" for="' + P + 'dep-terms">' +
              '<input type="checkbox" id="' + P + 'dep-terms">' +
              '<span>I have read and accept the <a href="' + BASE + 'legal.html">terms</a> and the <a href="' + BASE + 'legal.html">refund and payments policy</a>.</span>' +
            '</label>' +
          '</div>' +
        '</div>' +
        '<div>' +
          /* THE PERSISTENT SUMMARY AND THE ONE CONTROL, LAST IN THE DOCUMENT so a
             person reading linearly meets the summary after everything it
             summarises. IT NEVER SUMS THE DEPOSIT WITH THE VALUE OF ITEMS HELD.
             THE CONTROL IS LIVE AND REFUSES, D-58: a dimmed Pay is a person
             hunting for what to change. */
          '<div class="wf-dock">' +
            '<div class="wf-recv">' +
              '<span class="wf-fig-c">You will receive</span>' +
              '<span class="wf-recv-v">' + f.receive + ' coins</span>' +
              '<span class="wf-fig-c">' + f.amount + ' for the money, ' + f.bonus + ' the bonus, at 1 coin = $1.00</span>' +
            '</div>' +
            '<div class="wf-total">' +
              '<div class="wf-tl"><span>Amount</span><span class="wf-tl-v">$' + f.amount + '</span></div>' +
              '<div class="wf-tl"><span>Fee</span><span class="wf-tl-v wf-fig-missing">Not published</span></div>' +
              /* THE BONUS IS A LINE IN THE SUM AND NEVER A BADGE ON IT, D-94, the
                 same rule 5.3 runs on a commission of zero: a badge asserts, a line
                 in a sum gets checked. */
              '<div class="wf-tl"><span>Bonus, ' + (B.pctFull || '5.00%') + ' capped at 100 per 24 hours</span><span class="wf-tl-v">' + f.bonus + ' coins</span></div>' +
              '<div class="wf-tl"><span>Ceiling in force after this</span><span class="wf-tl-v">$' + (o.ceiling || f.amount) + '</span></div>' +
              '<div class="wf-tl"><span>To withdraw, you will need</span><span class="wf-tl-v wf-fig-missing">Not published</span></div>' +
              '<div class="wf-tl wf-tl--sum"><span>Total charged</span><span class="wf-tl-v">$' + f.amount + '</span></div>' +
            '</div>' +
            '<p class="wf-refuse" data-dep-refuse>' + (o.refuse || 'The ceiling has to be accepted or changed before this goes through.') + '</p>' +
            '<div class="wf-row">' +
              (o.back === false ? '' : '<a class="wf-btn" href="' + BASE + 'deposit.html" data-dep-back>Change how you pay</a>') +
              '<a class="wf-btn wf-btn--primary" data-dep-go href="' + BASE + 'deposit-crediting.html">' + (o.go || 'Pay') + '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* THE CRYPTO BODY. The route with no amount field, and that absence is the whole
     design of it. baseline-account.md 5b.3: a network selector, a code, an address
     with a copy control, a live rate, a bonus line and a minimum.
     AND IT BREAKS C2, WHICH IS THE FINDING OF THIS BUILD RATHER THAN A DETAIL. The
     ceiling works by being accepted before a submission. Nothing is typed here and
     nothing is submitted, so the brake has nothing to hold and no moment to hold it
     in. THE PAGE STATES THAT rather than drawing a ceiling that cannot bind, which
     would be a picture of a protection.
     THE RATE IS A MARKET READ AND CARRIES AN AS-OF, unlike the peg. */
  function depCrypto(P, o) {
    var empty = (o.state === 'nowallet');
    var coin  = o.coin || 'Bitcoin';
    return '' +
      '<div class="wf-fund-grid">' +
        '<div class="wf-fund">' +
          '<div class="wf-acct-state">Signed in as <strong>' + (window.WF_WHO || {}).name + '</strong>. Funding is open on this account.</div>' +
          /* THE NETWORK IS CHOSEN BEFORE THE ADDRESS EXISTS. An address belongs to
             a chain, so sending on the wrong one loses the money and no support
             ticket recovers it. */
          '<div class="wf-stack">' +
            '<div class="wf-sec-head">' +
              '<h2 id="' + P + 'h2-net">Which network</h2>' +
              '<p class="wf-sec-sub">The address below belongs to this network. Sending on any other one loses the coins and we cannot get them back.</p>' +
            '</div>' +
            '<select class="wf-f" id="' + P + 'dep-net" aria-label="Network">' +
              (empty
                ? '<option>Solana</option>'
                : '<option>Bitcoin</option><option>Bitcoin, Lightning</option>') +
            '</select>' +
            '<p class="wf-note wf-fig-missing">Which networks this product accepts for each coin is not decided</p>' +
          '</div>' +
          /* THE ADDRESS AND ITS CODE. The code is a slot: the image is generated
             from the address and its room is this stage's, D-50. The address is
             text and copyable, because reading forty characters off a screen is how
             money goes to the wrong place.
             THE EMPTY STATE IS THE BASELINE'S OWN AND IS INHERITED WHOLE: the same
             screen with the payload removed rather than an error. The figures stay
             and the address goes, because a rate and a minimum are facts about the
             network rather than about this account. */
          '<div class="wf-stack">' +
            '<div class="wf-sec-head"><h2 id="' + P + 'h2-addr">Where to send it</h2></div>' +
            '<div class="wf-crypto' + (empty ? ' is-empty' : '') + '">' +
              '<span class="wf-crypto-qr" aria-hidden="true">' + (empty ? 'Code slot, empty' : 'Code slot') + '</span>' +
              '<div class="wf-crypto-a">' +
                (empty
                  ? '<span class="wf-fig-c">You do not have an address on this network yet</span>' +
                    '<p class="wf-empty-p">One is made for your account the first time you ask, and it stays yours. Nothing has gone wrong and nothing is waiting on us.</p>' +
                    '<div class="wf-row"><button class="wf-btn wf-btn--primary" type="button">Create my address</button></div>'
                  : '<span class="wf-fig-c">Your deposit address on this network</span>' +
                    '<code class="wf-crypto-v">bc1q&#8230;<span class="wf-fig-missing">address is generated for your account</span></code>' +
                    '<div class="wf-row"><button class="wf-btn" type="button">Copy the address</button></div>') +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="wf-figs">' +
            '<div class="wf-fig">' +
              '<span class="wf-fig-v wf-fig-missing">Not available</span>' +
              '<span class="wf-fig-c">What one ' + coin + ' buys in coins right now. <span class="wf-fig-missing">The rate we convert at is not published and this one moves, so it carries a time when it lands rather than being read as current forever.</span></span>' +
            '</div>' +
            '<div class="wf-fig">' +
              '<span class="wf-fig-v">' + ((window.WF_BONUS || {}).pctFull || '5.00%') + '</span>' +
              '<span class="wf-fig-c">Added on top in coins, up to 100 coins per 24 hours, the same offer as every other route</span>' +
            '</div>' +
            '<div class="wf-fig">' +
              '<span class="wf-fig-v wf-fig-missing">Not set</span>' +
              '<span class="wf-fig-c">The smallest amount this network will credit. Anything under it is not a small deposit, it is a lost one</span>' +
            '</div>' +
          '</div>' +
          '<div class="wf-stack">' +
            '<div class="wf-sec-head"><h2 id="' + P + 'h2-ceiling">Your ceiling does not hold on this route</h2></div>' +
            '<p class="wf-cost-say"><strong>You set a ceiling on what you put in, and it works by being accepted before a payment goes through.</strong> There is nothing to accept here: you send what you send, from your own wallet, and it arrives. <strong>Your ceiling is still in force everywhere else and it cannot stop this.</strong> <a href="' + BASE + 'responsible.html">Your limits</a></p>' +
            '<p class="wf-note wf-fig-missing">What happens when coins arrive that would have been over your ceiling is not decided. Refusing money already sent means holding it or sending it back, and neither is written down anywhere yet</p>' +
          '</div>' +
        '</div>' +
        '<div>' +
          /* NO SUMMARY AND NO PAY CONTROL, because nothing here is charged. DONE is
             not a payment, it is leaving. */
          '<div class="wf-dock">' +
            '<div class="wf-card wf-total">' +
              '<div class="wf-tl"><span>Charged now</span><span class="wf-tl-v">Nothing</span></div>' +
              '<div class="wf-tl"><span>Rate</span><span class="wf-tl-v">1 coin = $1.00</span></div>' +
              '<div class="wf-tl"><span>To withdraw, you will need</span><span class="wf-tl-v wf-fig-missing">Not published</span></div>' +
            '</div>' +
            '<p class="wf-note">Nothing is taken from you here. When your coins arrive we credit them and the record lands in your history.</p>' +
            '<div class="wf-row">' +
              '<a class="wf-btn" href="' + BASE + 'deposit.html" data-dep-back>Choose a different way</a>' +
              (empty
                ? '<span class="wf-note">There is nothing to send to yet.</span>'
                : '<a class="wf-btn wf-btn--primary" href="' + BASE + 'deposit-crediting.html">Done, I have sent it</a>') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* THE GIFT CARD BODY. The one route of thirty five that leaves the product, and
     it is mostly about saying so. baseline-account.md 5b.4: the tile opens six
     accordions of third party resellers with a BUY control on each denomination,
     and the baseline says nothing about what happens after.
     THAT SILENCE IS B4-3 WITH AN EXTRA PARTY IN IT: money leaves through someone
     we do not run, so the person has two companies to ask and neither owes them an
     answer. WHAT THIS ADDS IS THE HANDOVER, STATED BEFORE THE PRESS.
     THE SIX ARE NAMED AND NOT DRAWN AS OURS, and none is a link, because which of
     them we send people to is not decided and a live control here would be this
     project choosing a commercial partner in a wireframe. */
  function depGift(P, o) {
    var sellers = ['Difmark', 'Pulse', 'Kinguin', 'OFF GAMERS', 'Karte Direkt', 'Eneba'];
    return '' +
      '<div class="wf-acct-state">Signed in as <strong>' + (window.WF_WHO || {}).name + '</strong>. Funding is open on this account.</div>' +
      '<div class="wf-stack">' +
        '<div class="wf-sec-head"><h2 id="' + P + 'h2-hand">This one leaves us</h2></div>' +
        '<p class="wf-cost-say"><strong>You buy the card from another company, not from us, and then bring the code back here.</strong> They take the payment, they decide what they accept and they own the refund. If a card you bought does not work, the first place to ask is them.</p>' +
        '<p class="wf-note wf-fig-missing">How long a code takes to credit once you bring it back is not published, and neither is what we do about a code that a reseller sold and we cannot read</p>' +
      '</div>' +
      '<div class="wf-stack">' +
        '<div class="wf-sec-head">' +
          '<h2 id="' + P + 'h2-sellers">Where you can buy one</h2>' +
          '<p class="wf-sec-sub">Six resellers. We do not run any of them and we do not set their prices.</p>' +
        '</div>' +
        '<div class="wf-pay-g">' +
          sellers.map(function (s) {
            return '<div class="wf-pay-t is-noroute"><span class="wf-pay-art" aria-hidden="true"></span><span class="wf-pay-n">' + s + '</span><span class="wf-pay-m">$5 to $200</span></div>';
          }).join('') +
        '</div>' +
        '<p class="wf-note wf-fig-missing">Which of these six we send people to is not decided, so none of them is a link here yet</p>' +
      '</div>' +
      /* THE CODE COMES BACK, and the field that takes it is the point of returning.
         The ceiling holds on this route because a code is redeemed here, with an
         amount, at a moment: unlike crypto there is a press to hang it on. */
      '<div class="wf-stack">' +
        '<div class="wf-sec-head"><h2 id="' + P + 'h2-code">Bringing the code back</h2></div>' +
        '<div class="wf-cfg-f">' +
          '<div class="wf-cfg-row"><label class="wf-cfg-l" for="' + P + 'dep-code">Card code</label></div>' +
          '<input class="wf-cfg-in" id="' + P + 'dep-code" type="text" placeholder="The code from the card you bought">' +
          '<p class="wf-cfg-p">Redeeming a code is a payment like any other here, so your ceiling applies to it and you will see what it adds before it goes through.</p>' +
        '</div>' +
        '<div class="wf-row"><a class="wf-btn wf-btn--primary" href="' + BASE + 'deposit-card.html" data-dep-route="card">Redeem it</a></div>' +
      '</div>';
  }

  /* THE STEP INDICATOR AND THE WAY BACK, on the default state of all three routes.
     They are not on 4.3 and 4.5, which are not reached from step 1. */
  var STEP2_LEAD = {
    card:   ['Paying by card.',           'How much'],
    crypto: ['Paying with Bitcoin.',      'Where to send it'],
    gift:   ['Paying with a gift card.',  'Where to buy the card']
  };

  function payStep2(route, o) {
    o = o || {};
    /* THE WORKED AMOUNT IS THE SAME IN BOTH CARRIERS, D-99. Opened with none, the
       layer rendered a receipt reading 0.00 coins and a ceiling in force of $0.00,
       which is not the empty state of this form: it is the worked example with its
       number missing. WHAT THE DOCK SAYS BEFORE AN AMOUNT EXISTS IS A STATE
       NEITHER CARRIER HAS EVER HAD, on the page since 22 August, and it is named
       here rather than invented in a dialog. */
    if (!o.amount) o.amount = '40.00';
    var P = o.idp || '';
    var lead = STEP2_LEAD[route] || STEP2_LEAD.card;
    var out = '';
    if (o.lead !== false) {
      out += '<p class="wf-note">' + (o.leadText || lead[0]) + ' <a href="' + BASE + 'deposit.html" data-dep-back>Choose a different way</a></p>' +
        '<ol class="wf-pay-steps">' +
          '<li class="wf-pay-step"><span class="wf-pay-step-n">1</span><span>How you pay</span></li>' +
          '<li class="wf-pay-step is-now"><span class="wf-pay-step-n">2</span><span>' + lead[1] + '</span></li>' +
        '</ol>';
    }
    if (o.banner) out += o.banner;
    if (route === 'crypto') return out + depCrypto(P, o);
    if (route === 'gift')   return out + depGift(P, o);
    return out + depCard(P, o);
  }

  /* THE BANNERS OF 4.3 AND 4.5, built here so that the form under them is the one
     the base page has rather than a copy of an older one. */
  var STEP2_BANNER = {
    'ceiling-pending':
      '<div class="wf-notice">' +
        '<h2 id="h2-pending">The higher ceiling is not in force yet</h2>' +
        '<p><strong>In force now: $40.00</strong> for the period. This is the figure every number on this page uses.</p>' +
        '<p>Pending: 120.00. It takes effect at the moment below, and until then nothing changes.</p>' +
        '<div class="wf-moment">' +
          '<span class="wf-moment-v">23 Aug 2026, 09:31</span>' +
          '<span class="wf-moment-l">When the higher ceiling takes effect</span>' +
        '</div>' +
        '<div class="wf-row"><button class="wf-btn" type="button">Cancel the raise</button></div>' +
        '<p class="wf-note">Cancelling is a lowering, so it takes effect immediately, at any time, with no second wait.</p>' +
        '<p class="wf-note">Deposits inside the ceiling you have now continue as normal.</p>' +
      '</div>',
    'declined':
      '<div class="wf-notice">' +
        '<h2 id="h2-declined">The payment did not go through</h2>' +
        '<p>It was refused on the payment side before anything left your account.</p>' +
        '<p class="wf-fig-missing">No reason was given to us. We do not print one we did not receive.</p>' +
        '<p><strong>Unchanged:</strong> your ceiling, and the sum it will take to withdraw. A failed payment does not move either of them.</p>' +
        '<p class="wf-note">If the refusal came from us rather than from the payment side, <a href="support.html">support</a> answers inside a published deadline.</p>' +
      '</div>'
  };

  function mountStep2() {
    var host = document.querySelector('[data-pay-step2]');
    if (!host) return;
    var route = host.getAttribute('data-pay-step2') || 'card';
    var state = host.getAttribute('data-pay-state') || '';
    var o = window.WF_STEP2 || {};
    o.state  = state;
    o.banner = STEP2_BANNER[state] || '';
    if (state) o.lead = false;
    host.innerHTML = payStep2(route, o);
    mountDeposit(host);
  }

  /* ---------------------------------------------------------------------
     THE DEPOSIT DIALOG, D-99, AND IT IS D-54's CONTRACT APPLIED A SECOND TIME.
     THE ADDRESS SURVIVES. /deposit renders the same content as a full page and is
     what a typed URL, a deep link, a session with no script and a person pressing
     back all land on. The dialog renders it over the surface a person is already
     on. NEITHER IS A REDUCED VERSION OF THE OTHER: both carriers run the renderers
     above, so a change to either arrives in both.
     IT CARRIES BOTH STEPS AND THAT IS THE WHOLE POINT. A dialog that chooses a
     method and then throws the person to a page for the amount is a doorway, and a
     doorway is the second surface with less in it that D-54 rejected. The money is
     spent on step 2, so step 2 is the screen the context is worth most on.
     WHAT IT DOES NOT CARRY, NAMED RATHER THAN OMITTED: the outcome surfaces.
     Crediting, declined and ceiling reached are records with a state that persists
     and a person returns to them from history, so they stay at their addresses and
     the dialog navigates there. A layer that vanished on a decline would return a
     person to a screen that cannot explain what happened, which is D-54's own rule
     about a dialog that closes itself.
     THREE WAYS OUT AND A TRAP, 0.1 section 6: the close control, the scrim and
     Escape. Dismissing records nothing. Focus is trapped while it is open and
     returned to the control that opened it.
     THE IDS INSIDE IT ARE PREFIXED. Opened over /deposit or over a step 2 address
     there would otherwise be two of every id in one document.
     --------------------------------------------------------------------- */
  /* THE TITLE IS THE NODE AND NEVER THE STEP. Naming the step here printed "How
     much" twice on one layer, once as the title and once as the heading of the
     block it names, and the step indicator underneath already says which of the
     two a person is on. */
  var DEP_TITLE = {
    step1:  ['Add funds', 'Pick how you pay. You stay on this page.'],
    card:   ['Add funds', 'You stay on this page.'],
    crypto: ['Add funds', 'You stay on this page.'],
    gift:   ['Add funds', 'You stay on this page.']
  };

  function depDialogHTML(route) {
    var t = DEP_TITLE[route || 'step1'] || DEP_TITLE.step1;
    var body = (!route || route === 'step1')
      ? '<div data-pay-grid="dialog"></div>'
      : payStep2(route, { idp: 'd-' });
    return '' +
      '<div class="wf-dlg-scrim" data-dep-dismiss="1"></div>' +
      '<div class="wf-dlg-wrap" data-dep-dismiss="1">' +
        '<div class="wf-dlg wf-dlg--plain wf-dlg--pay" role="dialog" aria-modal="true" aria-labelledby="wf-dep-h">' +
          '<button class="wf-dlg-close" type="button" aria-label="Close">&#10005;</button>' +
          '<div class="wf-dlg-body">' +
            '<p class="wf-dlg-h" id="wf-dep-h">' + t[0] + '</p>' +
            '<p class="wf-dlg-sub">' + t[1] + '</p>' +
            body +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function mountDepositDialog() {
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
      var f = host.querySelectorAll('a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    /* ONE HOST, RE-RENDERED. Step 1 and step 2 are the same layer rather than two
       dialogs stacked: stacking would put a scrim over a scrim and give the person
       two things to dismiss for one act. */
    function render(route) {
      host.innerHTML = depDialogHTML(route);
      var b = host.querySelector('.wf-dlg-body');
      if (!route || route === 'step1') {
        mountPay(host.querySelector('[data-pay-grid]'), 'd-');
      } else {
        mountDeposit(b);
      }
      var f = host.querySelector('.wf-dlg-close');
      if (f) f.focus();
      // THE LAYER SCROLLS FROM ITS TOP ON EVERY STEP. Keeping the offset would
      // open step 2 halfway down a form the person has not seen yet.
      var w = host.querySelector('.wf-dlg-wrap');
      if (w) w.scrollTop = 0;
    }

    function open(route, trigger) {
      if (host) { render(route); return; }
      opener = trigger || null;
      host = el('div', 'wf-dep-host');
      document.body.appendChild(host);
      render(route);
      // THE SURFACE BEHIND IS INERT AND IS NEVER REMOVED. The case the person was
      // looking at is exactly what the funding is for.
      document.documentElement.style.overflow = 'hidden';
      document.addEventListener('keydown', onKey, true);
    }

    document.addEventListener('click', function (e) {
      // Out first, so a dismissal inside an open layer never falls through to the
      // openers below it.
      if (host) {
        if (e.target.closest('.wf-dlg-close') || (e.target.getAttribute && e.target.hasAttribute('data-dep-dismiss'))) {
          e.preventDefault(); close(); return;
        }
        var back = e.target.closest('[data-dep-back]');
        if (back && host.contains(back)) { e.preventDefault(); render('step1'); return; }
        // A TILE INSIDE THE LAYER ADVANCES THE LAYER. At the address the same tile
        // is a link to the same step at its own address, which is the two carriers
        // rendering one route rather than two behaviours.
        var tile = e.target.closest('[data-pay-kind]');
        if (tile && host.contains(tile)) { e.preventDefault(); render(tile.getAttribute('data-pay-kind')); return; }
      }
      var t = e.target.closest('[data-dep-open]');
      if (!t) return;
      e.preventDefault();
      open(t.getAttribute('data-dep-open') || 'step1', t);
    });

    // THE CANON PAGE renders it open on load, because a canon nobody can see
    // without a click is a canon nobody checks.
    var pinned = document.querySelector('[data-dep-pinned]');
    if (pinned) open(pinned.getAttribute('data-dep-pinned') || 'step1', null);
  }

  function mountHist() {
    var tabsHost = document.querySelector('[data-hist-tabs]');
    if (tabsHost) {
      var here = window.WF_HISTTAB || 'rolls';
      var strip = el('nav', 'wf-htabs');
      strip.setAttribute('aria-label', 'History');
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
     Announced in words under the bar, because the reordering itself is invisible
     to anyone who is not looking at the grid. */
  function mountInvSort() {
    var set = document.querySelector('[data-sortset]');
    if (!set) return;
    var grid = document.querySelector('.wf-grid--inv');
    var say  = document.querySelector('[data-sort-say]');
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
      if (say) say.textContent = on.textContent + ', ' + cards.length + ' items in this order.';
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
        var t = new Date();
        var hh = String(t.getHours()).padStart(2, '0');
        var mm = String(t.getMinutes()).padStart(2, '0');
        var ss = String(t.getSeconds()).padStart(2, '0');
        if (say) {
          say.textContent = 'Asked again at ' + hh + ':' + mm + ':' + ss + '. Still unavailable, and it is still us. '
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
        function done() { if (mark) mark.textContent = 'Copied'; }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(full).then(done, done);
        } else { done(); }
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
      d: 'Signing you in, keeping you signed in, security, and remembering the answer you give here. Article 5(3) of the ePrivacy Directive exempts what is strictly necessary to provide the service you asked for.',
      why: 'Always on. There is no switch on this row, because there is nothing on it to decide.' },
    { key: 'analytics', name: 'Analytics',
      d: 'Counting how many people use each part of the site, so we can tell what is working. Nothing here identifies you to anyone outside this company.' },
    { key: 'marketing', name: 'Marketing',
      d: 'Measuring whether an advert brought you here.',
      unknown: 'Whether anything at all sits behind this at launch is not decided. If nothing does, this row is not shown: a choice about nothing is still a question a person has to answer.' }
  ];

  var CK_STATES = {
    pending:  { layer: 1 },
    expired:  { layer: 1, why: 'expired' },
    nostore:  { layer: 1, why: 'nostore' },
    manage:   { layer: 2 },
    accepted: { layer: 2, answer: { analytics: true,  marketing: true  }, saved: '20 Aug 2026 at 14:02' },
    rejected: { layer: 2, answer: { analytics: false, marketing: false }, saved: '20 Aug 2026 at 14:02' },
    partial:  { layer: 2, answer: { analytics: true,  marketing: false }, saved: '20 Aug 2026 at 14:02' },
    changed:  { layer: 2, answer: { analytics: false, marketing: false }, saved: '22 Aug 2026 at 09:31', changed: true }
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
        r.appendChild(el('span', 'wf-ck-rec-v wf-fig-missing', 'Nothing recorded yet. Until you answer, only the strictly necessary set is stored.'));
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
        inn.appendChild(el('p', 'wf-ck-p-say wf-fig-missing', 'How long an answer lasts is not decided. No source we have opened states a re-ask interval, and a number invented here would read as a rule.'));
      } else if (cfg && cfg.why === 'nostore') {
        inn.appendChild(el('p', 'wf-ck-p-say', 'We could not save your last answer, so we are asking again. Your browser is not letting this site store anything, which is your choice to make and not a fault.'));
        inn.appendChild(el('p', 'wf-ck-p-say', 'Nothing beyond the strictly necessary set is running in the meantime, and this will keep asking until it can be remembered.'));
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
      var pol = el('a', null, 'Cookie policy');
      pol.href = BASE + 'legal.html';
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
        inn.appendChild(el('p', 'wf-ck-p-say', 'Your new answer applies from the moment you save it. It does not undo what was collected while the old answer stood, and we are not going to say otherwise.'));
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
      var pol = el('a', null, 'Cookie policy');
      pol.href = BASE + 'legal.html';
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
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
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
    mountInvBar();
    mountFeed();
    renderAuth(document.getElementById('wf-auth'));
    mountAuthDialog();
    mountFilterDrawer();
    renderLadders();
    renderProofs();
    mountGate();
    mountDeposit();
    mountExclude();
    mountRp();
    renderFaq();
    mountSystem();
    mountSupportSubject();
    mountMsgs();
    mountHist();
    mountPay();
    mountStep2();
    mountDepositDialog();
    mountInvSort();
    mountCookie();
    mountSettings();
    renderFooter(document.getElementById('wf-footer'));
    mountRollDetail();
    renderBar(document.getElementById('wf-bar'));
    mountCommitBar();
  });
})();
