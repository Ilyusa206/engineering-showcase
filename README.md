# Engineering Showcase

I'm Ilya, an infrastructure engineer and full-stack developer who builds systems across application, platform, and operations boundaries. My work includes Node.js/TypeScript backends, React and React Native clients, PostgreSQL and Redis, realtime communication, identity and access control, Docker-based delivery, Linux infrastructure, networking, storage, backup, and recovery.

This repository is a curated technical portfolio. It is not a dump of private repositories. Some examples are **sanitized reconstructions based on real implementations**; every reconstruction is labeled and deliberately excludes production identifiers, credentials, private topology, personal data, and proprietary product code.

## Open these first

1. [Internal employee platform](cases/bic-hub/README.md) — multi-client product architecture, OIDC/RBAC, realtime messaging, PostgreSQL migrations, CI/CD, and operations.
2. [Commercial asynchronous service](cases/amorie/README.md) — payments, durable scheduling, BullMQ workers, FFmpeg, encryption, and recovery after restart.
3. [Multi-tenant finance platform](cases/monedo/README.md) — Fastify/Prisma, tenant isolation, atomic financial and inventory operations, WebSocket invalidation, React Native, and security tests.
4. [Infrastructure and disaster recovery](cases/infrastructure/README.md) — VLANs, Proxmox, storage, backup verification, restore drills, incidents, and change management.

## Capability map

| Area | Evidence in this repository |
|---|---|
| Backend | REST services, authorization boundaries, idempotency, queues, state machines, transactional workflows |
| Web | React/Next.js product surfaces and data-driven responsive components |
| Mobile | React Native/Expo, PKCE session lifecycle, SecureStore, realtime reconnect/invalidation |
| Data | PostgreSQL, Prisma, explicit SQL migrations, constraints, checksums, audit trails |
| Realtime | Socket.IO messaging, WebSocket invalidation, presence events, reconnect behavior |
| Identity | Keycloak/OIDC, OAuth 2.0 Authorization Code + PKCE, JWT, RBAC, tenant permissions |
| Delivery | Docker/Compose, Nginx, GitHub Actions, staging/production separation, rollback controls |
| Infrastructure | Linux, Proxmox VE/PBS, TrueNAS, iSCSI, VLANs, VPN, monitoring, backup and DR |
| Operations | Runbooks, release baselines, acceptance evidence, incident analysis, change management |

## Cases

- [Internal employee platform](cases/bic-hub/README.md)
- [Commercial asynchronous service](cases/amorie/README.md)
- [Multi-tenant finance platform](cases/monedo/README.md)
- [Infrastructure and disaster recovery](cases/infrastructure/README.md)
- [WordPress migration platform](cases/web-platform/README.md)
- [Commercial web interfaces](cases/commercial-web/README.md)
- [Self-hosted realtime meetings prototype](cases/realtime-meetings/README.md)

## Focused samples

- [RBAC and tenant boundary](backend/rbac-boundary.ts)
- [Recoverable outbox worker](backend/recoverable-outbox.ts)
- [Checksummed migration runner](database/checksummed-migrations.ts)
- [Atomic ledger operation](database/atomic-ledger.ts)
- [Mobile PKCE session manager](mobile/pkce-session-manager.ts)
- [Mobile realtime invalidation](mobile/realtime-invalidation.ts)
- [Data-driven responsive directory](frontend/data-driven-directory.ts)
- [Isolated Compose stack](devops/compose.yaml)
- [CI validation workflow](.github/workflows/validate.yml)
- [Backup and restore runbook](infrastructure/backup-restore-runbook.md)

See [STACK.md](STACK.md) for the evidence map, [SECURITY.md](SECURITY.md) for publication rules, and [SOURCE-MAP.md](SOURCE-MAP.md) for provenance and disclosure boundaries.
