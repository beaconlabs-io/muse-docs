---
sidebar_position: 2
title: Agent Scorers
description: How MUSE grades agent output with Mastra Evals scorers, and how to inspect the results.
---

# Agent Scorers

MUSE uses the [Mastra Evals](https://mastra.ai/) scorer framework to grade agent output automatically. Scorers are wired directly into agent definitions, and their results are recorded alongside the agent's traces so you can inspect quality trends without shipping a separate evaluation harness.

This page describes the scorer pattern as it is applied in MUSE today and how to view the results locally.

## The scorer pattern in MUSE

A scorer is a small evaluator attached to an agent. When the agent produces output, Mastra can run one or more scorers against that output — either always (sampling ratio 1.0) or on a subset of runs (fractional sampling). The scores are stored with the trace.

Two kinds of scorer are in use:

- **Code scorers** — deterministic checks written in TypeScript (no LLM call). These are cheap enough to run on every trace.
- **LLM scorers** — an evaluator model reads the agent's input, output, and system prompt, and returns a numeric score with a rationale. These are more expensive, so they're sampled at a fractional rate.

## Scorers wired to the Recipe agent

The [Measurement Recipe](../user-guide/recipe.md) agent is the reference example. It carries three scorers:

| Scorer | Kind | Sampling | What it checks |
|--------|------|----------|----------------|
| **toolCallAccuracy** | Code | 1.0 (every run) | The agent called the expected tool (`recipeTool`) in strict mode. This enforces the *agent → tool* contract that the workflow relies on. |
| **promptAlignment** | LLM | 0.3 | The output aligns with the system prompt's instructions (evaluated as `evaluationMode: "system"`). |
| **answerRelevancy** | LLM | 0.3 | The output is relevant to the input request. |

Two design choices are worth highlighting:

- **Tool-call accuracy runs on every trace** because it enforces a hard contract. If the Recipe agent stops calling `recipeTool`, the entire workflow errors — so catching that regression immediately is worth the negligible cost.
- **LLM scorers are sampled at 30 %** because they cost a full LLM call. Sampling is enough to catch systemic drift without paying for it on every request.

## Inspecting scorer results

Scorer output shows up in Mastra Studio, which ships with the muse dev stack.

Start the Mastra dev server from the muse repo:

```bash
cd muse
bun dev:mastra
```

Studio is served at `http://localhost:4111`. Open any trace for an agent and the scorer results appear on the trace detail — the score value, sampling flag, and (for LLM scorers) the reasoning the evaluator model produced.

:::info Storage notes
Scorer results are persisted through Mastra's LibSQL storage — the same store as traces. On Vercel, the storage URL falls back to `:memory:` for ephemeral runs (see `mastra/index.ts:41` in the muse repo). Locally, results land in `mastra.db` next to the muse project.
:::

## Where to add or change scorers

Scorers are defined per-agent under `muse/mastra/agents/*.ts`. The canonical example is `recipe-agent.ts`, which wires the three scorers into the agent's `scorers: { ... }` block. New scorers go into `mastra/scorers/index.ts` and must be added to the exported `SCORERS` map to be picked up by the runtime.

The full list of prebuilt scorers is available at `@mastra/evals/scorers/prebuilt`. Refer to the Mastra Evals documentation for the current inventory and their expected inputs.

:::warning Not a user-facing feature
Scorer results are engineering telemetry — they are not surfaced in the MUSE UI and are not intended for end users. Their purpose is to give the team a fast, cheap signal when an agent's behavior regresses.
:::

## Related

- [Measurement Recipe user guide](../user-guide/recipe.md) — the user-visible surface produced by the agent this page grades.
- `muse/mastra/CLAUDE.md` — non-obvious rules about agent → tool contracts.
- `muse/docs/mastra-agents.md` — full agent + workflow architecture in the muse repo.
