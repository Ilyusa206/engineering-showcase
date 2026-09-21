# Runbook: backup и изолированное восстановление VM

Санитизированная реконструкция реально выполненной и проверенной инфраструктурной процедуры.

## Цель

Доказать, что backup виртуальной машины читается, восстанавливается на отдельную цель и загружается без конфликта identity или сети с production.

## Предварительные условия

- Назначен ответственный за change/incident.
- Зафиксированы исходная VM и выбранный restore point.
- Backup verification успешна, на target storage достаточно места.
- Зарезервирован новый временный VM identifier.
- Сеть восстановления изолирована от production.
- Владельцы приложения понимают: загрузка VM не доказывает application consistency.

## Процедура

1. Зафиксировать timestamp backup, источник, target storage, ожидаемое число дисков и конфигурацию VM.
2. Восстановить backup под новым временным identity; первым действием никогда не перезаписывать production VM.
3. Сгенерировать уникальные identifiers виртуального оборудования, где это поддерживается.
4. Отключить все virtual NIC до первого запуска.
5. Сравнить исходную и восстановленную конфигурации: CPU, memory, disks, firmware, boot order и controllers.
6. Запустить восстановленную VM в изоляции.
7. Проверить состояние hypervisor, загрузку через console, storage I/O и guest telemetry, если она доступна.
8. Выполнить application-specific checks через изолированную сеть или console.
9. Записать, что проверка доказала и какие границы остались непроверенными.
10. После фиксации evidence остановить и удалить временную VM, если она не утверждена как recovery candidate.

## Критерии успеха

- Backup snapshot читается.
- Конфигурация VM и все ожидаемые диски восстановлены.
- Восстановленное storage поддерживает read/write I/O.
- Guest OS достигает ожидаемого состояния загрузки.
- В production не появляется дублирующий hostname, address, directory identity или application writer.

## Условия остановки

- Не подтверждена свободная capacity на target.
- Restore может инициализировать или перезаписать существующий volume.
- Невозможно подтвердить network isolation.
- Backup chain сообщает о corruption или отсутствующих chunks.
- Две stateful-копии могут одновременно писать в одни production data.

## Форма фиксации результата

```text
Change/incident ID:
Source workload:
Restore point:
Temporary identity:
Target storage:
Network isolation:
Boot result:
Storage I/O result:
Application checks:
Unproven boundaries:
Cleanup result:
```

## Интерпретация

Изолированная загрузка подтверждает инфраструктурную цепочку: backup job → stored snapshot → read → restore → boot. Она не доказывает transaction consistency database, семантику восстановления directory или application recovery point — для этого нужны отдельные workload-specific tests.
