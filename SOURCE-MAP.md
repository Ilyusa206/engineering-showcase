# Карта источников и границ раскрытия

Приватные репозитории служат каноническими источниками фактов, но не являются зависимостями портфолио. Содержание каждого публичного кейса должно быть понятно без доступа к ним.

| Материал showcase | Источник доказательств | Формат публикации | Что намеренно исключено |
|---|---|---|---|
| [Внутренняя платформа для сотрудников](cases/bic-hub/README.md) | `bic-hub`; evidence по product passport из `bic-hub-transaction` | Архитектурное описание и короткие реконструкции | Приватный код, endpoints, topology, данные сотрудников, материалы сделки |
| [Коммерческий асинхронный сервис](cases/amorie/README.md) | `Amorie` | Архитектурное описание и обобщённые worker-паттерны | Provider credentials, заказы, пользовательские данные, коммерческие детали продукта |
| [Мультитенантная система финансов и учёта](cases/monedo/README.md) | `family-finance` | Архитектурное описание и обобщённые транзакционные паттерны | Финансовые данные пользователей, deployment values, полная предметная реализация |
| [Инфраструктура и DR](cases/infrastructure/README.md) | `BIC-Infrastructure-Docs` | Полностью санитизированные topology, runbook и incident method | IP, hostnames, площадки, inventory, точные capacity и device identities |
| [Платформа миграции WordPress](cases/web-platform/README.md) | `webstaging` | Санитизированная методика миграции | Domains, hosting accounts, paths, credentials, DNS records и клиентский контент |
| [Коммерческие web-интерфейсы](cases/commercial-web/README.md) | `vetclinic-site` | Обобщённая реконструкция | Имена сотрудников, asset URLs, клиентский контент и полный переданный код |
| [Realtime-встречи](cases/realtime-meetings/README.md) | Реализация в рабочей ветке `bic-meetings` | Архитектура и подтверждённая граница prototype | Внутренний DNS, VM identity и специфичная для работодателя port exposure policy |
| [Примеры кода](code-samples/README.md) | Паттерны, подтверждённые перечисленными выше источниками | Небольшие санитизированные реконструкции | Proprietary naming и product-complete logic |

Ссылка на каталог примеров проверяется относительно корня репозитория: [code-samples/README.md](code-samples/README.md). Ссылки внутри этого каталога разрешаются относительно `code-samples/` и ведут к фактическим файлам в `backend/`, `database/`, `mobile/`, `frontend/` и `devops/`.

## Изученные источники без отдельного кейса

- `bic-notifications`: реализована существенная foundation, но live transport намеренно отключён, production deployment не заявляется. Паттерн recoverable outbox использован только в маркированной реконструкции.
- `Forge`: в feature-ветке есть работающий MVP, но он дублирует более сильные application-кейсы и имеет меньшую поверхность независимой проверки.
- `bic-cloud-theme`: содержательная разработка Nextcloud app/theme, но она периферийна для основного Node.js/React/Platform-позиционирования.
- `freelance-workspace`: материал о позиционировании и организации работы, а не самостоятельное инженерное доказательство.

## Ограниченное использование `bic-hub-transaction`

Из этого источника использованы только подходы к product decomposition, evidence levels, handover и scope management. Цены, оценка, переговоры, юридическая стратегия и внутренние управленческие документы не переносятся ни в каком виде.
