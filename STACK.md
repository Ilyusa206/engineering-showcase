# Стек и подтверждающие материалы

В таблицу включены только технологии, подтверждённые реализованной работой. Это карта доказательств, а не перечень ключевых слов.

| Область | Технологии и практики | Наиболее сильное доказательство |
|---|---|---|
| Backend API | Node.js, TypeScript, Express, Fastify, Zod | [BIC Hub](cases/bic-hub/README.md), [Amorie](cases/amorie/README.md), [Monedo](cases/monedo/README.md) |
| Web-приложения | React, Next.js, Vite | [BIC Hub](cases/bic-hub/README.md), [Amorie](cases/amorie/README.md) |
| Mobile-приложения | React Native, Expo, Expo Router, TanStack Query, SecureStore | [BIC Hub](cases/bic-hub/README.md), [Monedo](cases/monedo/README.md) |
| Реляционные данные | PostgreSQL, SQL, Prisma, constraints, migrations | [Monedo](cases/monedo/README.md), [пример migrations](database/checksummed-migrations.ts) |
| Очереди и cache | Redis, BullMQ, deterministic job ID, recovery | [Amorie](cases/amorie/README.md), [пример outbox](backend/recoverable-outbox.ts) |
| Realtime | Socket.IO, WebSocket, server events, presence | [BIC Hub](cases/bic-hub/README.md), [пример invalidation](mobile/realtime-invalidation.ts) |
| Authentication | Keycloak, OIDC, OAuth 2.0, PKCE, JWT, refresh rotation | [BIC Hub](cases/bic-hub/README.md), [mobile session manager](mobile/pkce-session-manager.ts) |
| Authorization | RBAC, resource membership, tenant isolation | [Monedo](cases/monedo/README.md), [пример RBAC](backend/rbac-boundary.ts) |
| Контейнеры | Docker, Docker Compose, health checks, изолированные сети | [Compose-пример](devops/compose.yaml), [web-платформа](cases/web-platform/README.md) |
| Delivery | GitHub Actions, build/test gates, проверка migrations | [BIC Hub](cases/bic-hub/README.md), [CI workflow](.github/workflows/validate.yml) |
| Инфраструктура | Linux, Proxmox VE/PBS, TrueNAS, iSCSI, VLAN, VPN | [инфраструктурный кейс](cases/infrastructure/README.md) |
| Восстановление | Backup verification, isolated restore, порядок DR по зависимостям | [restore runbook](infrastructure/backup-restore-runbook.md) |
| Web-платформы | Nginx, PHP, MariaDB, WordPress migration и cutover | [кейс миграции](cases/web-platform/README.md) |

## Границы утверждений

- LiveKit/WebRTC подтверждён как проверенный LAN technical prototype, а не production-сервис видеоконференций.
- В `Amorie` реальны order/payment flow и реализованный asynchronous subsystem; live telephony не заявляется запущенной до acceptance внешнего provider.
- `Monedo` подтверждает реализованные alpha-функции и последующие feature-ветки, но не выдаётся за зрелый production-продукт.
- Платформа WordPress подтверждена pilot’ом; final cutover остаётся отдельным этапом.
- Инфраструктурные схемы используют только обобщённые названия, без реальных адресов, hostnames, inventory и capacity.
