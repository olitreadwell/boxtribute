# boxwise/boxtribute context
> refreshed 2026-09-09 | upstream default: master @ c0fabeab2

## Identity & policies
- upstream: boxwise/boxtribute, default branch `master`, primary language TypeScript/Python, English-first (yes — README/CONTRIBUTING in English)
- CLA/DCO: none (no CLA bot, no DCO in CONTRIBUTING)
- AI-assisted PR policy: unstated (no AI disclosure requirement; `bans_ai` false)
- signed commits required: no
- PR template: none (no `.github/PULL_REQUEST_TEMPLATE.md`; use pipeline 3-section fallback)
- external tracker: Trello (CONTRIBUTING references Trello tickets); GitHub issues not primary
- CI: CircleCI (substantive) + GitHub Actions (CodeQL/dependabot). Fork CI = GitHub Actions only; substantive checks are on CircleCI (not connected to fork).

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

## Gap ledger (dedupe — READ FIRST, never re-pick)
- `2026-08-05` test-coverage (currencySymbol util) — pr-opened-locally-verified (PR #1). Lesson: substantive CI is CircleCI, not on fork; verify locally.

## Mined gaps (discovered, not yet attempted)
- `2026-09-09` docs trivial pass: broken links (README `/react/README.md`, front/README eslint URL, back/README Python-ORM.md) + typos (follow→following, spectaqle→spectaql, dicuss→discuss, methology→methodology, sizeing→sizing, miscellaneuos→miscellaneous) + grammar (We are use→We use) — status: pr-opened (PR #29, fork CI green)
