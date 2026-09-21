# Verification Strategy

The source systems use layered verification because a passing unit test does not prove migrations, containers, mobile builds, or a deployed business path.

| Layer | What it proves | Example |
|---|---|---|
| Static | Syntax, types, formatting, configuration shape | TypeScript typecheck, Expo config inspection |
| Unit | Local invariants and state transitions | permission matrix, state machine, token refresh |
| Integration | Database and adapter behavior | migrations, row locks, payment verification, repository queries |
| E2E | User-visible multi-component flow | multi-user tenant isolation, browser CRM workflow |
| Build | Reproducible deployable artifact | backend/frontend images, Android export |
| Runtime acceptance | Actual environment behavior | OIDC login, WebSocket path, background notification |
| Recovery acceptance | Failure and restoration path | Redis job reconstruction, isolated VM restore |

## High-value test patterns

- Apply all migrations to a clean database, then run the migration command again.
- Exercise two users plus an outsider to detect IDOR and tenant-boundary mistakes.
- Replay invitations, webhooks, and idempotency keys.
- Kill/restart workers with pending jobs and verify recovery from PostgreSQL.
- Test mobile network, background/foreground, token refresh, and socket reconnection as one lifecycle.
- Verify both rollback commands and rollback decision triggers before production change.
- Tie runtime acceptance to an exact source commit and artifact checksum.

## Evidence boundary

The repository distinguishes:

- implemented in source;
- automatically verified;
- deployable;
- deployed;
- accepted at runtime.

These are related but not interchangeable states.

