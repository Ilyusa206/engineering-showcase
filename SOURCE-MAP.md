# Source and Disclosure Map

Private repositories are evidence sources, not portfolio dependencies. A reviewer can understand every public case without access to them.

| Showcase item | Evidence source | Publication mode | Deliberately omitted |
|---|---|---|---|
| [Internal employee platform](cases/bic-hub/README.md) | `bic-hub`; product passport evidence from `bic-hub-transaction` | Architecture description and focused reconstructions | Private code, endpoints, topology, employee data, product transaction material |
| [Commercial asynchronous service](cases/amorie/README.md) | `Amorie` | Architecture description and generic worker patterns | Provider credentials, orders, user data, product-specific commercial details |
| [Multi-tenant finance platform](cases/monedo/README.md) | `family-finance` | Architecture description and generic transaction patterns | User financial data, private deployment values, full domain implementation |
| [Infrastructure and DR](cases/infrastructure/README.md) | `BIC-Infrastructure-Docs` | Fully sanitized topology, runbook, and incident method | Addresses, hostnames, sites, inventory, exact capacity, device identities |
| [WordPress migration platform](cases/web-platform/README.md) | `webstaging` | Sanitized migration method | Domains, hosting accounts, paths, credentials, DNS records, customer content |
| [Commercial web interfaces](cases/commercial-web/README.md) | `vetclinic-site` | Generic reconstruction | Staff names, asset URLs, customer content, full delivered code |
| [Realtime meetings prototype](cases/realtime-meetings/README.md) | `bic-meetings` draft implementation branch | Architecture and verified prototype boundary | Internal DNS, VM identity, port exposure policy specific to the employer |
| [Code samples](code-samples/README.md) | Patterns evidenced across the sources above | Small sanitized reconstructions | Proprietary naming and product-complete logic |

## Sources reviewed but not promoted to standalone cases

- `bic-notifications`: substantial foundation, but transport is intentionally disabled and no production deployment is claimed. Its recoverable outbox ideas inform a labeled sample only.
- `Forge`: implemented MVP on a feature branch, but it overlaps stronger application evidence and has a narrower verification surface.
- `bic-cloud-theme`: useful Nextcloud application and theming work, but not central to the target Node.js/React/Platform narrative.
- `freelance-workspace`: positioning material, not engineering evidence.

