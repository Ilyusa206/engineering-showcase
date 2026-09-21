# Evidence, Maturity, and Handover

This framework was distilled from a real product-passport and handover workstream. Commercial figures, legal strategy, private management documents, and negotiation details are intentionally excluded.

## Maturity axes

A module is assessed separately on:

| Axis | Question |
|---|---|
| Implementation | Does meaningful end-to-end source exist? |
| Integration | Is it connected to real identity, data, and neighboring modules? |
| Verification | Do automated checks cover important behavior? |
| Deployability | Can an exact revision produce a runnable artifact? |
| Deployment evidence | Is the exact revision known to be installed? |
| Runtime acceptance | Was the real user/business path exercised? |
| Documentation | Can another engineer operate and change it safely? |

This prevents two common errors: calling a branch “production” because it merged, and calling an operational feature “absent” because its newest delta lacks separate runtime proof.

## Handover checklist

- exact repositories, branches, commit SHAs, and artifact hashes;
- source/module inventory and explicit excluded scope;
- dependency and open-source license register;
- schema migrations and data/export boundaries;
- staging/production topology at a safe disclosure level;
- build, deploy, rollback, backup, and restore procedures;
- mobile release and update process where applicable;
- known limitations, technical debt, and unresolved evidence;
- objective acceptance criteria;
- access ownership transfer without placing credentials in Git;
- bounded transition/support responsibilities.

## Operational value

The framework turns documentation into a control: a release can be accepted against an exact baseline, a handover cannot silently include an unimplemented module, and unknown runtime facts remain visible until verified.
