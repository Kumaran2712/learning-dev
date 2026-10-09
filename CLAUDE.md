# learning-dev

Learning repo for Git, GitHub, and CI/CD workflow. Node.js, no dependencies.

## Commands
- Run tests: `node --test`
- Run app: `node hello.js`

## Branches
- `prod` → production, `stage` → staging, `dev` → development (default branch)
- Never commit or push directly to `dev`, `stage`, or `prod`. They are protected.
- One feature branch per issue, always cut from an up-to-date `dev`:
  `feature/<issue-number>-short-description` (bugs: `fix/<issue-number>-...`)

## Workflow
1. Every change starts with a GitHub issue (`gh issue create`).
2. Commit messages are short, imperative, and end with the issue: `Add X (#12)`.
3. Run `node --test` before every commit. Do not commit failing tests.
4. Open PRs into `dev` with `Fixes #<issue>` in the body.
5. Feature PRs: `gh pr merge --squash --delete-branch`.

## Releases
- Promote only via PRs: `dev` → `stage` → `prod`, in that order. Never skip stage.
- Promotion PRs use `gh pr merge --merge` (never squash, never delete the branch).
- Production deploys require manual approval in GitHub. Never try to bypass it.

## CI/CD
- `.github/workflows/ci.yml`: runs tests on PRs into dev/stage/prod.
- `.github/workflows/deploy.yml`: deploys on push to dev/stage/prod.
- YAML uses 2-space indentation, never tabs.

## Working with me
- I'm learning. When you run git/gh commands, briefly say what each one does.
- Ask before merging, promoting, or doing anything to `prod` .