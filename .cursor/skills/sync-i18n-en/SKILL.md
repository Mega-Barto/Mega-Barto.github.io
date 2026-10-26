---
name: sync-i18n-en
description: >-
  Synchronizes English UI copy in src/i18n/locales/en.json from Spanish
  src/i18n/locales/es.json after copydeck sync. Preserves i18n key paths and
  {{placeholders}}. Use when the user asks to sync or translate English texts,
  update en.json, or after running sync:texts / editing copydeck.es.yaml.
---

# Sync English i18n (`en.json`)

Spanish is the source language. This skill updates `src/i18n/locales/en.json` to match `es.json` keys and meaning. Do not invent keys.

## Checklist

```
- [ ] es.json is current (run sync:texts if copydeck.es.yaml changed)
- [ ] Key paths in en.json and es.json are identical
- [ ] Scope chosen (incremental default, or full if asked)
- [ ] EN strings written; {{placeholders}} and proper nouns kept
- [ ] bun run verify:i18n
- [ ] bun run verify
- [ ] English step appended to logs/i18n-sync.log
```

## Workflow

1. If `src/i18n/copydeck.es.yaml` was edited this session, run `bun run sync:texts` first.
2. Flatten both JSON files to dotted string paths. If the path sets differ, **stop** and list keys only in one file. Add new keys to both JSON files and wire `data-i18n-key` / `*Key` in `src/` before translating.
3. Scope:
   - **Incremental (default):** paths whose `es.json` value changed vs git (`git diff src/i18n/locales/es.json`), plus any paths the user listed.
   - **Full:** every key, only if the user asks or this is a first-pass sync.
4. For each in-scope path, translate ES → EN:
   - Tone: professional software-portfolio (MegaBarto).
   - Keep proper nouns and brands (`MegaBarto`, `Dailybot`, `Bartland Labs`, `FLISOL`, …).
   - Do not translate URLs or slugs.
   - Copy `{{variable}}` tokens **verbatim** (same names).
   - Keep emojis if present in ES.
   - Nav labels: short; match nearby Title Case in existing `en.json`.
   - Long copy (`about`, `autobiography`, project/work descriptions): natural English, not word-for-word.
5. Write `en.json` by merging into the **current tree and key order**. Do not reshuffle unrelated keys.
6. Run `bun run verify:i18n`. Fix mismatches before continuing.
7. Run `bun run verify`.
8. Append the English step to the sync log (see below). `sync:texts` already logged the Spanish apply or export.
9. If bio/headline copy changed, mention optional follow-ups: `public/llms.txt` and `src/content/renderCV/JAPB_CV.yaml`.

## Sync log

`logs/i18n-sync.log` is an append-only local record of every sync. `logs/` and `*.log` are gitignored, so the file stays on this machine and is not committed. Do not rewrite or delete earlier blocks.

The script creates the file with a short header the first time it writes. Each later run appends one block. Timestamps are UTC (`toISOString`).

| Action | Who writes it | When |
|--------|----------------|------|
| `apply` | `bun run sync:texts` | Copy deck merged into `es.json` |
| `export` | `bun run sync:texts -- --export` | `es.json` written out to `copydeck.es.yaml` |
| `en` | You, after the English update | `en.json` translated from `es.json` |

`apply` lists every changed dotted path and any schema paths missing from the deck. `export` records whether `--force` was used.

After `verify:i18n` and `verify`, record the English step with the same script (it only appends the log; it does not edit JSON):

```bash
bun run sync:texts -- --record-en --scope incremental --verify-i18n pass --verify pass --path some.key --path other.key
```

- Repeat `--path` once per translated dotted path. Incremental with no `--path` means nothing in English changed (`keys_translated: 0`).
- `--scope full` with no `--path` means every string leaf was translated.
- `--verify-i18n` and `--verify` are required: `pass`, `fail`, or `skipped`.
- Record `pass` only after that command succeeded. Use `skipped` only when the user asked to skip that check. If a check failed, fix it and record `pass`; do not leave a `fail` entry as the final record unless the user stops there.
- Do not pass `--export` or `--force` together with `--record-en`.

Example blocks:

```text
---
timestamp: 2026-10-26T03:50:00.000Z
action: apply
command: bun run sync:texts
deck: src/i18n/copydeck.es.yaml
target: src/i18n/locales/es.json
keys_applied: 148
keys_changed: 1
missing_in_deck: 0
changed_paths:
  - header.navigation.cv
missing_paths: (none)
---
timestamp: 2026-10-26T03:55:00.000Z
action: en
command: skill sync-i18n-en
source: src/i18n/locales/es.json
target: src/i18n/locales/en.json
scope: incremental
keys_translated: 1
verify_i18n: pass
verify: pass
paths:
  - header.navigation.cv
```

## Do not

- Edit `copydeck.es.yaml` as the English source.
- Call a machine-translation API.
- Change i18n key names while translating.
