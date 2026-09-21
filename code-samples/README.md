# Примеры кода

Это небольшие реконструкции паттернов, реализованных в исходных системах и пригодных для обсуждения на техническом интервью. Они не являются дословными production-файлами и не позволяют собрать закрытые продукты. Каждый пример намеренно сосредоточен на одном решении; окружающие слои validation, observability и integration tests показаны только там, где нужны для понимания паттерна.

Связанный end-to-end путь с PostgreSQL и tests: [reference service](../examples/reference-service/README.md).

| Пример | Инженерная идея |
|---|---|
| [RBAC boundary](../backend/rbac-boundary.ts) | Сначала authentication, затем authorization точного tenant/resource |
| [Recoverable outbox](../backend/recoverable-outbox.ts) | PostgreSQL как источник истины и детерминированная проекция в очередь |
| [Migration runner](../database/checksummed-migrations.ts) | Неизменяемая migration history и защита от конкурентного запуска |
| [Atomic ledger](../database/atomic-ledger.ts) | Idempotency, balance deltas и audit в одной транзакции |
| [PKCE session manager](../mobile/pkce-session-manager.ts) | Secure storage и single-flight refresh |
| [Realtime invalidation](../mobile/realtime-invalidation.ts) | Reconnect при сохранении API источником истины |
| [Data-driven directory](../frontend/data-driven-directory.ts) | Безопасный rendering и слабосвязанные UI events |
| [Compose isolation](../devops/compose.yaml) | Непубличные data services и запуск приложения после migrations |
| [Reverse proxy](../devops/nginx.conf) | HTTP/WebSocket routing и базовые security headers |

Все ссылки выше разрешаются относительно текущего каталога и проверяются командой `npm run verify`.
