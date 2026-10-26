---
name: git-branching-flow
description: >-
  MegaBarto portfolio git branching: feature__ → develop → main → release
  branch cloned from main. Use when creating branches, opening PRs, releasing,
  tagging versions, or when the user mentions GitFlow, release/v*, develop, or
  how to ship changes.
---

# Git branching flow (megabarto.com)

Canonical delivery path for **new** work. Do not invent alternate flows unless the user explicitly overrides.

```text
feature__*  →  develop  →  main  →  release/vX.Y  (cut from main)
```

Leave historical oddities alone (e.g. old `release/v4.1` cut differently). Apply this skill going forward.

## Branch roles

| Branch | Role |
|--------|------|
| `feature__*` | Short-lived work. Prefix is literally `feature__` (double underscore). |
| `develop` | Integration. Features land here first. |
| `main` | Production. What GitHub Pages should reflect after release. |
| `release/vX.Y` or `release/vX.Y.Z` | Release snapshot **cloned from `main`** after the release content is already on `main`. Used to tag, bump version, and stabilize if needed. |

Long-lived: `develop`, `main`. Release and feature branches are disposable after merge/tag.

## Delivery steps

### 1. Feature → develop

```sh
git checkout develop
git pull origin develop
git checkout -b feature__short_name
```

- Commit with Conventional Commits (`feat`, `fix`, `chore`, …).
- Open PR: **`feature__*` → `develop`**.
- Merge when review/CI pass. Delete the feature branch after merge.

### 2. Develop → main

When a batch on `develop` is ready to ship:

- Open PR: **`develop` → `main`** (or merge as the team prefers; default is PR).
- Do **not** open feature PRs straight to `main` for normal work.

### 3. Main → release (clone)

After the desired commits are on `main`:

```sh
git checkout main
git pull origin main
git checkout -b release/vX.Y
# bump package.json if needed, chore(release) commit
git push -u origin release/vX.Y
```

- Name: `release/vX.Y` (minor) or `release/vX.Y.Z` (patch) to match SemVer of what you are shipping.
- Tag from this release line (or from `main` at the same commit): `vX.Y.Z`.
- If the release branch only exists to tag/bump, merge any release-only commits back to `main`, then sync `develop`:

```sh
git checkout develop
git pull origin develop
git merge main   # or PR main → develop
git push origin develop
```

## What not to do

- Do not cut `release/*` from `develop` for new releases (that was the old README path).
- Do not merge `feature__*` → `main` by default.
- Do not reuse a release branch name that already shipped (e.g. after `v4.0.1` is tagged/merged, next work is `v4.1` / `v4.1.0`, not more commits on a spent `release/v4.0.1`).
- Do not force-push `main` or `develop` unless the user explicitly asks.

## Agent checklist

```
- [ ] New work starts from up-to-date develop as feature__*
- [ ] PR target is develop (features) or main (integration ship)
- [ ] Release branch is created from main after ship content lands
- [ ] package.json / tag SemVer match the release name
- [ ] develop is synced from main after the release closes
```

## Related

- Conventional Commits: user skill `conventional-git`.
- i18n copy after content PRs: `.cursor/skills/sync-i18n-en/SKILL.md`.
- Human-readable summary also lives in `README.MD` → Branching Flow (keep in sync if this skill changes).
