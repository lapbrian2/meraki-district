# autoresearch — Meraki District Backend & Architecture

Autonomous optimization of the Meraki District Nuxt 3 application's backend architecture, build performance, and code quality.

## Setup

To set up a new experiment, work with the user to:

1. **Agree on a run tag**: propose a tag based on today's date (e.g. `mar15`). The branch `autoresearch/<tag>` must not already exist.
2. **Create the branch**: `git checkout -b autoresearch/<tag>` from current main.
3. **Read the in-scope files**: 
   - `nuxt.config.ts` — app configuration
   - `app/` — components, composables, pages, layouts, plugins
   - `package.json` — dependencies
   - `score.sh` — fixed scoring script. Do not modify.
4. **Initialize results.tsv**: Create `results.tsv` with just the header row.
5. **Confirm and go**.

## Experimentation

Each experiment modifies the Nuxt app and runs `bash score.sh` to measure the result.

**What you CAN do:**
- Modify any file under `app/` — components, composables, pages, layouts, plugins
- Modify `nuxt.config.ts` — configuration, modules, build settings
- Add/remove/update dependencies in `package.json` (run `npm install` after)
- Restructure code, refactor architecture, optimize data fetching patterns

**What you CANNOT do:**
- Modify `score.sh`. It is read-only.
- Delete or rename the site (it must still build and serve the same pages)
- Break existing routes or visual appearance
- Remove security headers

**The goal: lowest build_time_ms while maintaining zero build errors and all pages rendering.**

Secondary goals (tiebreakers): smaller bundle_kb, fewer total_files touched.

**Simplicity criterion**: simpler is better. Removing dead code and getting equal or better results is a great outcome. A tiny build time improvement that adds complexity is not worth it.

**The first run**: establish the baseline by running `bash score.sh` on the current code.

## Output format

```
---
build_time_ms:    12500
bundle_kb:        485
build_errors:     0
pages_ok:         5/5
```

Extract the key metric:

```
grep "^build_time_ms:" run.log
```

## Logging results

Log to `results.tsv` (tab-separated):

```
commit	build_time_ms	bundle_kb	status	description
```

1. git commit hash (short, 7 chars)
2. build_time_ms (milliseconds) — use 0 for crashes
3. bundle_kb (total client bundle in KB) — use 0 for crashes
4. status: `keep`, `discard`, or `crash`
5. short description

## The experiment loop

LOOP FOREVER:

1. Look at the git state
2. Make an architectural improvement to the Nuxt app
3. git commit
4. Run: `bash score.sh > run.log 2>&1`
5. Read results: `grep "^build_time_ms:\|^build_errors:" run.log`
6. If empty, crashed. `tail -n 50 run.log` to debug.
7. Record in results.tsv (do not commit results.tsv)
8. If build_time_ms improved (lower) AND build_errors == 0 AND pages_ok is full, keep
9. Otherwise, git reset back

**Crashes**: fix typos/imports and re-run. If fundamentally broken, discard and move on.

**NEVER STOP**: Do not ask the human if you should continue. Run indefinitely until manually stopped.
