# Code Samples

These are small, interview-defensible reconstructions of patterns implemented in the source systems. They are not verbatim production files and are not intended to rebuild the private products.

| Sample | Engineering point |
|---|---|
| [RBAC boundary](../backend/rbac-boundary.ts) | Authenticate first, then authorize the exact tenant/resource |
| [Recoverable outbox](../backend/recoverable-outbox.ts) | PostgreSQL authority with deterministic queue projection |
| [Migration runner](../database/checksummed-migrations.ts) | Immutable migration history and concurrent-start safety |
| [Atomic ledger](../database/atomic-ledger.ts) | Idempotency, balance deltas, and audit in one transaction |
| [PKCE session manager](../mobile/pkce-session-manager.ts) | Secure storage and single-flight refresh |
| [Realtime invalidation](../mobile/realtime-invalidation.ts) | Reconnect with API-authoritative client state |
| [Data-driven directory](../frontend/data-driven-directory.ts) | Safe rendering and decoupled UI events |
| [Compose isolation](../devops/compose.yaml) | Non-public data services and migration gating |
| [Reverse proxy](../devops/nginx.conf) | HTTP and WebSocket routing with security defaults |

