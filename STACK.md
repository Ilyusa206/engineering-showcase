# Stack and Evidence

This list contains technologies supported by implemented work. It is intentionally narrower than a keyword inventory.

| Capability | Technology | Strongest evidence |
|---|---|---|
| Backend APIs | Node.js, TypeScript, Express, Fastify, Zod | [BIC Hub](cases/bic-hub/README.md), [Amorie](cases/amorie/README.md), [Monedo](cases/monedo/README.md) |
| Web applications | React, Next.js, Vite | [BIC Hub](cases/bic-hub/README.md), [Amorie](cases/amorie/README.md) |
| Mobile applications | React Native, Expo, Expo Router, TanStack Query, SecureStore | [BIC Hub](cases/bic-hub/README.md), [Monedo](cases/monedo/README.md) |
| Relational data | PostgreSQL, SQL, Prisma, constraints, migrations | [Monedo](cases/monedo/README.md), [migration sample](database/checksummed-migrations.ts) |
| Queues and cache | Redis, BullMQ, deterministic jobs, recovery | [Amorie](cases/amorie/README.md), [outbox sample](backend/recoverable-outbox.ts) |
| Realtime | Socket.IO, WebSocket, server events, presence | [BIC Hub](cases/bic-hub/README.md), [realtime sample](mobile/realtime-invalidation.ts) |
| Authentication | Keycloak, OIDC, OAuth 2.0, PKCE, JWT, refresh rotation | [BIC Hub](cases/bic-hub/README.md), [mobile session sample](mobile/pkce-session-manager.ts) |
| Authorization | RBAC, resource membership, tenant isolation | [Monedo](cases/monedo/README.md), [RBAC sample](backend/rbac-boundary.ts) |
| Containers | Docker, Docker Compose, health checks, isolated networks | [Compose sample](devops/compose.yaml), [web platform](cases/web-platform/README.md) |
| Delivery | GitHub Actions, build/test gates, migration validation | [BIC Hub](cases/bic-hub/README.md), [CI sample](.github/workflows/validate.yml) |
| Infrastructure | Linux, Proxmox VE/PBS, TrueNAS, iSCSI, VLAN, VPN | [Infrastructure case](cases/infrastructure/README.md) |
| Recovery | Backup verification, isolated restore, DR dependency order | [Restore runbook](infrastructure/backup-restore-runbook.md) |
| Web platform | Nginx, PHP, MariaDB, WordPress migration and cutover | [Web platform case](cases/web-platform/README.md) |

## Scope notes

- LiveKit/WebRTC evidence is a validated LAN technical prototype, not a production conferencing claim.
- The notification-service sample demonstrates an implemented foundation; live push-provider delivery is not claimed.
- Infrastructure diagrams use generic names and address ranges are omitted by design.

