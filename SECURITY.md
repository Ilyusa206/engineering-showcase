# Public Portfolio Security Policy

This repository is built from evidence in private production, internal, commercial, and personal projects. Publication is governed by minimization: show the engineering decision without exposing the environment that motivated it.

## Publication modes

1. **Architecture description** — for topology, product decomposition, operational history, or business logic that should not be reproduced as code.
2. **Sanitized reconstruction** — a small generic example that preserves the engineering pattern but replaces names, identifiers, schemas, and proprietary logic.
3. **Original public fragment** — only when the source is already public and the fragment contains no unnecessary personal or customer data.

## Prohibited content

- secrets, tokens, credentials, private keys, cookies, or `.env` values;
- internal addresses, real hostnames, private URLs, exact production inventory, or sensitive topology;
- employee, customer, or order data;
- commercial valuation, transaction prices, legal positions, or negotiation material;
- complete proprietary modules or enough code to reconstruct a private product;
- production dumps, backups, configuration exports, or operational access instructions.

## Reconstruction label

Every reconstructed source file starts with:

> Sanitized reconstruction based on an implemented system. Not verbatim production code.

The label distinguishes evidence-backed patterns from copied production source. A reconstruction may simplify names and surrounding infrastructure, but it must not invent a capability that the source repositories do not implement.

## Automated checks

`npm run verify` checks repository links, required case sections, private address patterns, and common credential signatures. It is a guardrail, not a substitute for review.

If a sensitive detail is discovered, remove it from the current tree and assess Git history before assuming the deletion is complete.

