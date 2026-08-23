# sdlc.guide

A static, interactive guide to the software development lifecycle. A seven-phase wheel leads to
a scoped document library and uniform guides for PRD, RFC, and ADR.

## Stack

- Astro 7 with strict TypeScript
- Astro Fonts with Source Sans 3
- Cloudflare Workers Static Assets
- Biome formatting and linting
- Bun 1.4

## Commands

```sh
bun install
bun run dev
bun run format
bun run verify
bun run deploy:dry-run
```

`bun run verify` runs Biome, Astro, a production build, and a Wrangler dry run. It does not run browser or topic tests.

## Routes

```text
/
/library/
/plan/prd/
/design/rfc/
/design/adr/
/404.html
```

## Cloudflare

The site is fully pre-rendered. `wrangler.jsonc` serves `dist/` as static assets and maps the Worker to `sdlc.guide`.

The single GitHub Actions workflow checks pull requests and pushes to `main`. A successful check on
`main` deploys the same commit to Cloudflare automatically.

Add these repository or `production` environment secrets first:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN` created from Cloudflare's “Edit Cloudflare Workers” template and scoped to the target account and `sdlc.guide` zone
