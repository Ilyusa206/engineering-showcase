# Инженерное портфолио Ильи

Я Илья — системный администратор по основной должности и разработчик, который ведёт прикладные системы от модели данных и backend API до клиентских приложений, поставки и эксплуатации. В зависимости от вакансии рассматриваю четыре отдельные специализации: **Full-stack**, **Backend**, **DevOps / Platform** и **System / Infrastructure**.

Основной прикладной стек: **Node.js, TypeScript, Express, Fastify, React, Next.js, React Native / Expo, PostgreSQL, Redis, Socket.IO / WebSocket, Docker Compose и GitHub Actions**. В инфраструктурных задачах работаю с **Linux, Proxmox VE / PBS, TrueNAS, iSCSI, VLAN, VPN, мониторингом, backup и disaster recovery**.

## Что открыть в первую очередь

| Кейс | Что именно он доказывает |
|---|---|
| [Внутренняя платформа для сотрудников](cases/bic-hub/README.md) | Full-stack и mobile-разработка, Node.js/React/React Native, OIDC/RBAC, Socket.IO, PostgreSQL migrations, Docker и CI/CD |
| [Коммерческий асинхронный сервис](cases/amorie/README.md) | Backend-проектирование: платежи, state machine, BullMQ workers, FFmpeg, идемпотентность, восстановление незавершённых задач |
| [Мультитенантная система финансов и учёта](cases/monedo/README.md) | Fastify/Prisma, tenant isolation, атомарные финансовые и складские операции, WebSocket invalidation, security tests |
| [Инфраструктура, backup и disaster recovery](cases/infrastructure/README.md) | Linux/DevOps и системная инженерия: VLAN, Proxmox, TrueNAS, iSCSI, проверка backup, restore drill, incident/change management |

Эти четыре кейса не означают «умею всё». Они показывают разные контуры одного опыта: разработку продукта, backend и данные, delivery/эксплуатацию, а также системную инфраструктуру. Для конкретной вакансии релевантен соответствующий набор доказательств.

## Почему здесь нет исходников закрытых продуктов

Это отобранное публичное портфолио, а не выгрузка приватных репозиториев. Код в каталогах с примерами — **санитизированные реконструкции на основе реально реализованных решений**, а не дословные production-файлы. В них сохранён инженерный паттерн, но заменены названия, идентификаторы, схемы и предметная логика. Не публикуются credentials, внутренние адреса и topology, персональные данные, коммерческие условия и код, по которому можно восстановить закрытый продукт.

Правила публикации описаны в [SECURITY.md](SECURITY.md), а происхождение каждого материала — в [SOURCE-MAP.md](SOURCE-MAP.md).

## Карта компетенций

| Направление | Публичные доказательства |
|---|---|
| Backend | REST API, границы авторизации, идемпотентность, очереди, state machine, транзакционные сценарии |
| Web | React/Next.js-интерфейсы и адаптивные data-driven компоненты |
| Mobile | React Native/Expo, PKCE session lifecycle, secure storage, reconnect и cache invalidation |
| Data | PostgreSQL, Prisma, SQL migrations, constraints, checksums, audit trail |
| Realtime | Socket.IO messaging, WebSocket invalidation, presence events, reconnect lifecycle |
| Identity | Keycloak/OIDC, OAuth 2.0 Authorization Code + PKCE, JWT, RBAC, tenant permissions |
| Delivery | Docker/Compose, Nginx, GitHub Actions, разделение staging/production, rollback controls |
| Infrastructure | Linux, Proxmox VE/PBS, TrueNAS, iSCSI, VLAN, VPN, мониторинг, backup и DR |
| Operations | Runbook’и, release baseline, acceptance evidence, incident analysis и change management |

## Остальные кейсы

- [Платформа миграции WordPress](cases/web-platform/README.md) — контролируемый перенос legacy-сайтов без наследования устаревшего runtime.
- [Коммерческие web-интерфейсы](cases/commercial-web/README.md) — адаптивные компоненты на HTML/CSS/JavaScript внутри визуального конструктора.
- [Self-hosted realtime-встречи](cases/realtime-meetings/README.md) — проверенный LAN prototype на LiveKit/WebRTC с честно зафиксированными границами готовности.

## Короткие примеры кода

- [RBAC и tenant boundary](backend/rbac-boundary.ts)
- [Recoverable outbox](backend/recoverable-outbox.ts)
- [Migration runner с checksums](database/checksummed-migrations.ts)
- [Атомарная операция ledger](database/atomic-ledger.ts)
- [Mobile PKCE session manager](mobile/pkce-session-manager.ts)
- [Realtime cache invalidation](mobile/realtime-invalidation.ts)
- [Data-driven directory](frontend/data-driven-directory.ts)
- [Изолированный Compose stack](devops/compose.yaml)
- [CI-проверка портфолио](.github/workflows/validate.yml)
- [Runbook изолированного восстановления](infrastructure/backup-restore-runbook.md)

Дополнительно: [обо мне и инженерном подходе](ABOUT.md), [стек с доказательствами](STACK.md), [архитектурные границы](architecture/system-boundaries.md) и [стратегия верификации](testing/verification-strategy.md).
