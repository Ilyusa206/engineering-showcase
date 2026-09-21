# Мультитенантная система финансов и учёта

Источник — приватный личный продукт. Финансовые данные пользователей и deployment secrets не публикуются.

## Задача

Одно приложение должно было поддерживать личные, совместные и небольшие бизнес-финансы без ослабления tenant isolation и финансовой корректности. Последующий business domain добавил catalogue, locations, production, transfers, sales, write-offs, stock valuation и атомарную связь физической продажи с финансовым доходом.

## Ограничения

- Денежные величины нельзя хранить в floating point.
- Membership в одном space не должна давать доступ к другому.
- Account balance и transaction history не могут расходиться.
- Повтор mutation не должен дублировать ledger entry.
- Stock — это проверяемый movement ledger, а не редактируемое число.
- Mobile realtime не становится вторым источником истины.

## Архитектура и подход

```mermaid
flowchart TD
    APP["Expo / React Native"] --> API["Fastify modular monolith"]
    APP <-->|WebSocket invalidation| API
    API --> P["Permission service"]
    API --> F["Finance modules"]
    API --> I["Inventory modules"]
    P --> DB[("PostgreSQL / Prisma")]
    F --> DB
    I --> DB
```

Система организована как pnpm/Turborepo monorepo: Fastify API, Prisma/PostgreSQL data layer, Expo client и общие TypeScript contracts/utilities. Modular monolith сохраняет транзакционные границы, не смешивая домены логически.

## Что я реализовал

- Модели tenant, space, membership, invitation, account, transaction, planning, audit, export, inventory и production.
- Централизованные permission checks для конкретного space на backend, без доверия route parameters и client state.
- Хранение денег в integer minor units (`BIGINT`) и сериализацию строками через JSON boundary.
- Создание transaction с validation, account deltas, splits, audit record и idempotency record в одной Prisma transaction.
- Inventory documents и immutable movements, включая lot-aware stock allocation и связь sale с income.
- JWT access tokens, opaque refresh sessions, hashing/rotation tokens, hashing invitations и redaction structured logs.
- Authenticated WebSocket events; mobile client инвалидирует TanStack Query cache и заново получает авторитетное состояние.
- React Native/Expo flows для finance, analytics, spaces, members, exports и inventory operations.

## Ключевые инженерные решения

1. **Space — самостоятельная permission boundary.** Верхнеуровневый family/tenant container не даёт доступ ко всем spaces: каждый request проверяет активную membership в точном scope.
2. **Balance изменяется вместе с ledger.** Transaction row, splits, cached account deltas, audit и idempotency record фиксируются одной database transaction.
3. **Stock выводится из movements.** Posted document создаёт signed immutable movements; draft не влияет на остатки.
4. **Realtime передаёт invalidation, а не replacement state.** Event сообщает, что изменилось, после чего клиент выполняет authorized API query.
5. **Одноразовый invitation обеспечивается атомарно.** Plaintext code возвращается один раз, хранится как hash, имеет срок действия и не допускает replay.

## Надёжность, безопасность и тестирование

- CI выполняет Prisma validation/deploy, lint, typecheck, unit tests, build и проверки с PostgreSQL.
- Integration/E2E tests проверяют несколько пользователей, invitations, replay/expiry/revoke, permission и IDOR boundaries, transfers, budgets, analytics, multi-currency и export security.
- Check constraints и foreign keys защищают document lifecycle, locations, quantities и financial linkage.
- Upload endpoints остаются выключенными, пока нет file-signature validation и безопасного storage adapter.

## Результат

Реализованы alpha-функции совместных финансов и business-модуль inventory/production с атомарной финансовой связью. В исходном репозитории отделены released alpha baseline и последующие feature-ветки; roadmap не выдаётся за завершённую работу, а система — за зрелый production deployment.

## Что доказывает кейс

- TypeScript, Fastify, Prisma, PostgreSQL, React Native/Expo, pnpm и Turborepo.
- Multi-tenant authorization и security testing.
- Моделирование finance/inventory domain и атомарные операции.
- WebSocket-driven cache invalidation при API как source of truth.

Связанные примеры: [atomic ledger](../../database/atomic-ledger.ts), [tenant RBAC](../../backend/rbac-boundary.ts), [realtime invalidation](../../mobile/realtime-invalidation.ts).
