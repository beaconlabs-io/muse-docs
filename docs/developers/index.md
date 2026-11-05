---
sidebar_position: 1
title: Developer Docs
description: Technical notes for engineers building on or extending MUSE.
---

# Developer Docs

This section is for engineers who want to understand what happens under the hood in MUSE and where to look when something is not behaving as expected.

## How MUSE is put together

- **Frontend** — the [muse repository](https://github.com/beaconlabs-io/muse): a Next.js application that renders the canvas, the evidence pages, and the workspace and account screens. It contains no AI code.
- **Backend service** — a separate HTTP service that the frontend calls for AI generation (logic models and Measurement Recipes, streamed over SSE), sign-in, and logic model storage, version history, and sharing.
- **Evidence** — the [evidence repository](https://github.com/beaconlabs-io/evidence): MDX research files validated in CI, uploaded to IPFS, and attested through EAS. The frontend consumes them as the `@beaconlabs-io/evidence` npm package.

## Where to look for deeper detail

Deep architectural notes live in the muse repository under `docs/`:

- `docs/react-flow-architecture.md` — canvas implementation, evidence edges, dialog UX.
- `docs/frontend-map.md` — non-canvas components and custom hooks.
- `docs/api-routes.md` — the HTTP endpoints the frontend calls.
- `docs/evidence-workflow.md` — evidence submission and attestation.
- `docs/setup.md` — local setup and environment variables.

The developer docs are still small. If you're using or extending MUSE and something you needed was not covered here, open a PR against [beaconlabs-io/muse-docs](https://github.com/beaconlabs-io/muse-docs) so the next person doesn't have to rediscover it.
