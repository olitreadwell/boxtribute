# boxwise/boxtribute context
> refreshed 2026-10-03 | upstream default: master @ a1859e0dd

## Identity & policies
- upstream: boxwise/boxtribute, default branch `master`, primary language TypeScript/Python, English-first (yes — README/CONTRIBUTING in English)
- CLA/DCO: none (no CLA bot, no DCO in CONTRIBUTING)
- AI-assisted PR policy: unstated (no AI disclosure requirement; `bans_ai` false)
- signed commits required: no
- PR template: none (no `.github/PULL_REQUEST_TEMPLATE.md`; use pipeline 3-section fallback)
- external tracker: Trello (CONTRIBUTING references Trello tickets); GitHub issues not primary
- CI: CircleCI (substantive) + GitHub Actions (CodeQL/dependabot). Fork CI = GitHub Actions only (copilot-setup-steps); substantive checks are on CircleCI (not connected to fork).

## Conventions (verified from merged PRs)
- branch naming: mixed — `fix-*`, `test-*`, `copilot/*`, `dashboard-updates-*`, descriptive kebab-case. No single dominant pattern; use `fix-<kebab-description>`.
- commit style: Conventional Commits (`fix(scope):`, `test(scope):`, `build(deps):`) for human commits; dependabot uses `build(deps):`.
- test command: `pnpm test` (front), `pytest` (back); lint `pnpm lint:all`, `pnpm check-types`.
- outside PRs merge: responsive (59 external merges in 60d per queue), active maintainers.

## Maintainer picture
- active maintainers, responsive; recent merges include small external PRs (test-coverage, hotfixes).
- areas actively worked: dashboard/statviz, movement summaries, Auth0 auth, box create/edit.

## Issue-area health
- GitHub issues not the primary tracker (Trello is); few open GFI/help-wanted labels.
- Docs are lightly maintained; README/CONTRIBUTING contain several typos and broken links.
- `2026-10-01`: upstream has ZERO open GitHub issues (Trello remains the real tracker); open PRs are dependabot bumps plus pylipp/MomoRazor in-flight work (node version, eslint v9), none touching the statviz dashboard selects.
- `2026-10-03`: still ZERO open GitHub issues; upstream master head unchanged (`a1859e0dd`) since the 2026-10-01 refresh, so no maintainer-engaged issue survived -> self-found gap from the audit. Open upstream PRs unchanged (2925/2917/2916/2913/2887/2631/1664/1495/1222); none touch the beneficiary reach chart.

## Gap ledger (dedupe — READ FIRST, never re-pick)
- `2026-08-05` test-coverage (currencySymbol util) — pr-opened-locally-verified (PR #1). Lesson: substantive CI is CircleCI, not on fork; verify locally.
- `2026-09-25` docs trivial pass (ADR + auth docs): 21 genuine typos across 10 files (`docs/adr/*` + `docs/auth/public_sharing_of_statistics.md`) — pr-opened (PR #33, fork CI green: Copilot Setup Steps success, mergeable clean). Different files from PR #29.
- `2026-10-01` a11y (WCAG 4.1.2 / 3.3.2): the statviz dashboard display toggles lost their accessible names when `BoxesOrItemsSelect`/`ValueFilter` (which rendered a `<FormLabel htmlFor>`) were inlined into bare Chakra `<Select>` by #2896 (merged 2026-09-10). Added `aria-label` to the three selects in `MovedBoxes.tsx` (`Direction`, `Display by`) and `StockOverview.tsx` (`Display by`), rebuilt the `MovedBoxes` test and extended the `StockOverview` test. pr-opened (PR #37, branch `dashboard-toggle-accessible-names` off fork master @ a1859e0dd). Verified upstream head still lacks the names.
- `2026-10-03` a11y (WCAG 4.1.2 / 3.3.2): the Beneficiary Reach chart's filter bar had no programmatically associated labels. Added `aria-label` to the metric select (`Metric`), the breakdown select (`Breakdown by`) and the two date inputs (`From date`/`To date`) in `BeneficiaryReachChart.tsx`, plus a new `BeneficiaryReachChart.test.tsx`. pr-opened (PR #38, branch `fix-beneficiary-reach-accessible-names` off fork master @ a1859e0dd). TDD: the new test fails on `master` (2 failed) and passes with the fix. Local: shared-components vitest 6 files/49 tests, eslint + tsc clean. A separate logical change from the open PR #37 (different component, different controls).

## Mined gaps (discovered, not yet attempted)
- `2026-09-09` docs trivial pass: broken links (README `/react/README.md`, front/README eslint URL, back/README Python-ORM.md) + typos (follow→following, spectaqle→spectaql, dicuss→discuss, methology→methodology, sizeing→sizing, miscellaneuos→miscellaneous) + grammar (We are use→We use) — status: pr-opened (PR #29, fork CI green)
- `2026-10-01` a11y follow-up: the same missing-accessible-name pattern on the Beneficiary Reach chart selects/date inputs — status: attempted (PR #38, 2026-10-03). `components/filter/TabbedTagDropdown.tsx:176` is a react-select (`isMulti`), where the accessible name comes from `aria-label`/`inputId`; check before touching it next.
