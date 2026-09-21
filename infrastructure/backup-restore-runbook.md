# Backup and Isolated Restore Runbook

Sanitized reconstruction based on an implemented and exercised infrastructure procedure.

## Purpose

Prove that a virtual-machine backup can be read, restored to a different target, and booted without creating an identity or network conflict with production.

## Preconditions

- An incident/change owner is named.
- The source VM and chosen restore point are recorded.
- Backup verification is successful and target storage has sufficient capacity.
- A new temporary VM identifier is reserved.
- The restore network is isolated from production.
- Application owners understand that infrastructure boot does not prove application consistency.

## Procedure

1. Record backup timestamp, source, target storage, expected disk count, and expected VM configuration.
2. Restore into a new temporary VM identity; never overwrite production as the first restore action.
3. Generate unique virtual hardware identifiers where supported.
4. Disable or disconnect every virtual NIC before first boot.
5. Compare source and restored configuration: CPU, memory, disks, firmware, boot order, and controllers.
6. Start the restored VM in isolation.
7. Verify hypervisor state, console boot, storage I/O, and guest telemetry where available.
8. Perform application-specific checks using an isolated network or console.
9. Record what was proved and what was not proved.
10. Stop and remove the temporary VM after evidence is captured, unless it becomes an approved recovery candidate.

## Success criteria

- Backup snapshot is readable.
- VM configuration and every expected disk are restored.
- Restored storage supports read/write I/O.
- Guest OS reaches an expected boot state.
- No duplicate hostname, address, directory identity, or application writer reaches production.

## Stop conditions

- Target capacity is uncertain.
- Restore would initialize or overwrite an existing volume.
- Network isolation cannot be confirmed.
- Backup chain reports corruption or missing chunks.
- Two stateful copies could write to the same production data.

## Evidence record

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

## Interpretation

An isolated boot proves the infrastructure path: backup job → stored snapshot → read → restore → boot. It does not prove database transaction consistency, directory recovery semantics, or the application's recovery point. Those need workload-specific tests.

