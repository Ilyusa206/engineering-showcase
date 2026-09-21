# Исполняемое доказательство backend-паттернов

Standalone demo объединяет несколько паттернов из приватных реализованных систем в новой минимальной предметной области. Это не часть закрытого продукта и не дословная копия production-кода.

## Что можно проверить

| Проверка | Реализация | Автоматический тест |
|---|---|---|
| Настоящая PostgreSQL и повторяемые migrations | checksum history, advisory lock, отдельная transaction на migration | migration runner выполняется дважды |
| Точная tenant boundary | membership проверяется для `spaceId` из request; чужой `space` скрывается за `404` | `точная tenant boundary блокирует чужой space` |
| Идемпотентная mutation | один `actor + key + request` возвращает тот же resource; другой payload или `spaceId` даёт `409` | sequential, concurrent и cross-space tests |
| Transactional outbox | resource, idempotency record и event фиксируются одной transaction | проверяется число `records` и `outbox_events` |
| Durable worker | `FOR UPDATE SKIP LOCKED`, deterministic `job_id`, retry с rollback через savepoint | success и failure/retry tests |
| Readiness | отдельные liveness и database-backed readiness endpoints | `/health/ready` вызывается в integration test |

```mermaid
flowchart TD
    C["HTTP client"] --> A["Fastify API"]
    A --> P["Exact-space permission"]
    P --> T["PostgreSQL transaction"]
    T --> R["Record + idempotency key"]
    T --> O["Outbox event"]
    W["Durable worker"] --> O
    W --> E["Processed event"]
```

Диаграмма соответствует файлам `src/app.ts`, `src/service.ts` и `src/outbox.ts`.

## Запуск

Требования: Docker с Compose plugin.

```bash
docker compose --profile test run --rm test
docker compose up --build -d
```

Проверить readiness:

```bash
curl -fsS http://127.0.0.1:4100/health/ready
```

Создать запись от участника `space-alpha`:

```bash
curl -fsS -X POST http://127.0.0.1:4100/v1/spaces/space-alpha/records \
  -H 'content-type: application/json' \
  -H 'x-user-id: user-owner' \
  -H 'idempotency-key: demo-1' \
  -d '{"title":"Проверяемая запись"}'
```

Повтор того же request с ключом `demo-1` вернёт тот же `record.id`. Замена `user-owner` на `user-outsider` вернёт `404`, потому что этот пользователь состоит только в `space-beta`.

Проверить обработанный outbox event:

```bash
docker compose exec postgres psql -U showcase -d showcase -c \
  "SELECT job_id, event_type, processed_at IS NOT NULL AS processed FROM outbox_events;"
```

Остановить стенд вместе с одноразовыми данными:

```bash
docker compose down -v
```

## Запуск tests без контейнера приложения

При доступной PostgreSQL:

```bash
npm ci
DATABASE_URL=postgresql://showcase:showcase@127.0.0.1:5432/showcase npm run migrate
DATABASE_URL=postgresql://showcase:showcase@127.0.0.1:5432/showcase npm test
```

CI использует реальный PostgreSQL service container, выполняет migrations, typecheck, build, integration tests и `docker compose config`.

## Происхождение паттернов и границы

- BIC Hub: последовательные migrations, checksum/advisory-lock contract, health/CI и повторный запуск migrations.
- Monedo: точная `Space` permission boundary, multi-user/IDOR verification и атомарные mutations.
- Amorie и notification foundation: durable database state, recoverable worker, retries и deterministic job identity.

Authentication здесь намеренно заменена тестовым `x-user-id`: demo доказывает authorization boundary после установления principal, а не реализует новый OIDC provider. Redis, BullMQ, realtime и frontend не добавлены: для них в showcase есть отдельные сфокусированные samples, а включение в этот demo увеличило бы объём без усиления проверяемого transaction path.
