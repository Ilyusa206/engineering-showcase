# Инженерное портфолио Ильи

Я системный администратор и разработчик на стыке software, platform и infrastructure. Проектирую backend и модели данных, делаю web/mobile-клиенты, настраиваю delivery и отвечаю за эксплуатационные границы: сеть, virtualization, storage, backup и recovery.

Целевые роли разделяю: **Full-stack**, **Backend**, **DevOps / Platform** и **System / Infrastructure**. Для конкретной вакансии релевантен свой набор кейсов, а не образ «один специалист делает всё».

## Можно запустить

[**Reference service: Fastify + PostgreSQL + integration tests**](examples/reference-service/README.md)

Минимальный standalone demo проверяет связанные backend-паттерны на настоящей PostgreSQL:

- checksum migrations и повторный migration run;
- exact-space authorization и блокировку чужого resource;
- идемпотентную mutation без дублей;
- transactional outbox;
- durable worker, deterministic job ID, retry и rollback side effects;
- liveness/readiness.

Проверка: `docker compose --profile test run --rm test`; ручной запуск: `docker compose up --build`. Тот же test suite выполняется в [GitHub Actions](.github/workflows/validate.yml).

## Четыре основных кейса

| Кейс | Что можно проверить |
|---|---|
| [Внутренняя платформа для сотрудников](cases/bic-hub/README.md) | Node.js/React/React Native, OIDC/RBAC, Socket.IO, migrations, CI/CD; отдельно отмечены production baseline и поздние revisions |
| [Коммерческий асинхронный сервис](cases/amorie/README.md) | Payment verification, PostgreSQL source of truth, BullMQ/FFmpeg workers, restart recovery; live telephony не заявляется запущенной |
| [Мультитенантные финансы и учёт](cases/monedo/README.md) | Fastify/Prisma, exact-space permissions, атомарные операции, WebSocket invalidation и security tests; статус — alpha |
| [Инфраструктура и DR](cases/infrastructure/README.md) | Proxmox/TrueNAS/iSCSI/VLAN, isolated restore drill и реальный cross-layer storage incident |

В каждом кейсе указаны моя роль, статус системы, личная реализация, граница публичного доказательства и ссылки на артефакты.

## Остальные проверяемые материалы

- [Сфокусированные code samples](code-samples/README.md) — migrations, RBAC, ledger, mobile session/realtime и Compose isolation.
- [Runbook изолированного восстановления](infrastructure/backup-restore-runbook.md).
- [Санитизированный разбор storage incident](infrastructure/incident-analysis.md).
- [WordPress migration pilot](cases/web-platform/README.md), [commercial web](cases/commercial-web/README.md) и [LiveKit LAN prototype](cases/realtime-meetings/README.md).

## Почему опубликованы реконструкции

Исходные продукты и инфраструктурная документация закрыты. Публичные примеры сохраняют реализованный инженерный паттерн, но заменяют предметную область, identifiers и окружение. Здесь нет credentials, внутренних адресов и topology, персональных данных, коммерческих условий или кода, по которому можно восстановить приватный продукт.

[Политика публикации](SECURITY.md) · [Карта источников](SOURCE-MAP.md) · [Стек и доказательства](STACK.md) · [Обо мне](ABOUT.md)
