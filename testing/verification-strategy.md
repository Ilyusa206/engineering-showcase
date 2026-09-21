# Стратегия верификации

В исходных системах применяется несколько уровней проверки: успешный unit test сам по себе не доказывает корректность migrations, контейнеров, mobile build или развёрнутого бизнес-сценария.

| Уровень | Что он подтверждает | Пример |
|---|---|---|
| Static | Синтаксис, типы, формат и форму конфигурации | TypeScript typecheck, проверка Expo config |
| Unit | Локальные инварианты и переходы состояния | permission matrix, state machine, token refresh |
| Integration | Поведение database и adapters | migrations, row locks, payment verification, repository queries |
| E2E | Видимый пользователю многокомпонентный сценарий | multi-user tenant isolation, browser CRM workflow |
| Build | Воспроизводимый deployable artifact | backend/frontend images, Android export |
| Приёмка в runtime | Поведение в реальной среде | OIDC login, WebSocket path, background notification |
| Проверка восстановления | Отказ и восстановление | восстановление Redis jobs, isolated VM restore |

## Наиболее ценные сценарии

- Применить все migrations к чистой database, затем повторно запустить migration command.
- Проверить двух пользователей и outsider, чтобы обнаружить IDOR и ошибки tenant boundary.
- Повторно отправить invitations, webhooks и idempotency keys.
- Остановить worker при незавершённых jobs и проверить восстановление из PostgreSQL.
- Проверить mobile network lifecycle, background/foreground, token refresh и socket reconnect как единый сценарий.
- До production change проверить не только rollback command, но и критерии, при которых rollback обязателен.
- Связать приёмку в runtime с точным commit и checksum артефакта.

## Граница доказательств

Репозиторий различает пять состояний:

1. реализовано в source;
2. прошло автоматическую проверку;
3. может быть собрано и развёрнуто;
4. развёрнуто;
5. принято в runtime.

Эти состояния связаны, но не взаимозаменяемы.
