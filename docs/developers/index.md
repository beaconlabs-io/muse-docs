---
sidebar_position: 1
title: Developer Docs
description: Technical notes for engineers building on or extending MUSE.
---

# Developer Docs

This section is for engineers who want to understand what happens under the hood in MUSE — how agents are wired, how quality is measured, and where to look when something is not behaving as expected.

The material here is intentionally narrower than the [muse repository's own documentation](https://github.com/beaconlabs-io/muse). Deep architectural notes live in the muse repo under `docs/` (e.g., `docs/mastra-agents.md`, `docs/react-flow-architecture.md`, `docs/api-routes.md`); this section publishes the parts that are stable enough to be user-facing.

## Current entries

- **[Agent Scorers](./agent-scorers.md)** — how MUSE uses the Mastra Evals scorer framework to grade agent output on tool-call accuracy, prompt alignment, and answer relevancy, and how to inspect the scores in Mastra Studio.

## Where to look for deeper detail

- `mastra/CLAUDE.md` in the muse repo — non-obvious rules about agent → tool contracts, storage URLs, and the output-language policy.
- `docs/mastra-agents.md` — architecture of the agent + workflow layer (Logic Model, Evidence Search, Recipe).
- `docs/react-flow-architecture.md` — canvas implementation, evidence edges, dialog UX.
- `docs/api-routes.md` — HTTP endpoints, including the `/api/workflow/stream` SSE surface consumed by the frontend.

The developer docs are still small. If you're using or extending MUSE and something you needed was not covered here, open a PR against [beaconlabs-io/docs-muse](https://github.com/beaconlabs-io/docs-muse) so the next person doesn't have to rediscover it.
