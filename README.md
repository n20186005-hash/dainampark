# Đại Nam independent visitor guide

Native Astro SSR, Vietnamese and English. Existing Vietnamese overview/hours/tickets/directions/legal routes retained; English counterparts added for the practical guides. Canonical HTTPS apex and trailing-slash normal pages. No booking/payment/accounts; independent and not the operator.

Node 24.21 / pnpm 12.4.2. Exact dependency versions, pnpm lock and build permissions retained. Historical Cloudflare command: `pnpm run build` then `npx wrangler deploy`, using `dist/server/wrangler.json`. Existing Worker/project `dainampark`; source config aligned, original compatibility flags and SESSION/IMAGES/ASSETS preserved. No new binding. Build adds generated-code local-path sanitization; source wrapper normalizes known host/protocol before native handler/assets.

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm run build
pnpm exec wrangler deploy --dry-run
```

Maps facts are dated manual snapshots, not synchronization or locally collected reviews. Current hours/prices and availability remain unverified; address-label and source-hour conflicts are attributed.

Existing opt-in GA UI/key retained. Withdrawal updates loaded GA runtime immediately; storage changes require readback, with visible failure and per-tab refusal veto. If shared refusal/removal cannot be verified, an old grant or one written by a failed attempt may remain usable elsewhere. Independent Cloudflare visit measurement and edge processing are separately disclosed. Browser/production remain separate gates.

See PHOTO_CREDITS.md, LOCAL_IMAGE_STATUS.md and SOURCES.md. Local tests/build are not a production release.
