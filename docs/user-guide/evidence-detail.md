---
sidebar_position: 5
title: Reading Evidence
description: How to read and understand an evidence detail page in MUSE
---

# Reading Evidence

When you click on an evidence card in the search results, you're taken to the Evidence Detail page. This page shows you everything about a single research study — its findings, methodology, data sources, citations, and its blockchain verification history.

Understanding how to read an evidence page will help you evaluate how well a study supports a specific step in your logic model.

## Getting to an Evidence Page

- **From Search**: Click any evidence card on the [Evidence Search page](/docs/user-guide/evidence-search)
- **Direct URL**: Evidence pages follow the pattern `muse.beaconlabs.io/evidence/[slug]`, where `[slug]` is the unique identifier for that study

## The Page Header

At the top of every evidence page you'll find:

- **Title** — The name of the research paper or evidence entry
- **Author** — The researcher or organization that produced this evidence
- **Publication date** — When the study was published or this evidence entry was created
- **Version** — The version number of this evidence entry (evidence can be updated over time)
- **Strength indicator** — Stars (0–5) showing the rigor of the research methodology. More stars means the study used more rigorous methods that are better at ruling out alternative explanations.

## The Article Content

Below the header is the main body of the evidence entry, written as a readable research summary. This section describes:

- The background and context for the research
- The population and setting studied
- What intervention was tested
- A narrative summary of what was found

This is written to be accessible to non-researchers, so you don't need a scientific background to understand it. Read this section to get a clear picture of the study and whether it is relevant to your program context.

## The Results Section

The Results section presents the specific findings in a structured format. Each result shows:

**Intervention** — What was done (the cause being tested)

**Outcome variable** — What was measured (the effect being studied)

**Effect type** — Whether the intervention produced the expected change:

| Icon | Label | Meaning |
|------|-------|---------|
| Checkmark | Positive Effect | The expected effect was found and is statistically significant |
| X | No Effect | The expected effect was not observed |
| Arrows | Mixed Effect | Results varied by context, population, or conditions |
| Exclamation | Side Effect | An unintended effect was observed |
| Question mark | Unclear | Insufficient data or methods to draw a conclusion |

A single evidence entry may have multiple results — for example, a study might find a positive effect on one outcome variable and no effect on another.

:::tip Evaluating Relevance
When reading a result, ask yourself: Does the intervention described match what my program does? Does the outcome variable match what I'm trying to achieve? Is the population studied similar to the community I'm working with? A result is most useful when your answers to all three questions are "yes."
:::

## Methodologies

This section lists the research methods used in the study. Common methodologies include:

- **Randomized Controlled Trial (RCT)** — Participants are randomly assigned to the intervention or a control group; the most rigorous design for establishing causation
- **Quasi-experimental** — Uses statistical methods to compare groups that weren't randomly assigned; useful when randomization is not feasible
- **Difference-in-differences** — Compares changes over time between an intervention group and a control group
- **Systematic review / Meta-analysis** — Combines results from multiple studies to produce an overall finding
- **Before-and-after** — Compares outcomes in the same group before and after an intervention, without a control group

The methodology tells you how confident you can be that the observed effect is truly caused by the intervention (and not by other factors). This is directly related to the strength rating.

## Data Sources

This section lists the datasets, surveys, or data collection tools the researchers used. Examples include government administrative records, household surveys, health registries, or specially designed data collection instruments.

Knowing the data source helps you assess:
- How the outcome was actually measured
- Whether the measurement approach was reliable and valid
- Whether similar data could be collected in your own program evaluation

## Citations

The Citations section lists all the works referenced in this evidence entry. Citations that include a URL are displayed as clickable buttons that open the source directly. Other citations are listed as text. If you want to read the original research paper or verify the findings, you can find the full citation here.

## Tags

Tags are topic categories that describe the evidence. Examples include tags like "health", "education", "economic development", "gender equity", or "digital technology". Tags help you understand the domain and context of the evidence at a glance, and they are also searchable on the Evidence Search page.

## Change Log

At the bottom of the evidence page is the Change Log section. This shows the blockchain verification records for this evidence entry.

Each record includes:

- **EAS UID** — A unique identifier on the Ethereum Attestation Service (EAS) blockchain, which permanently and publicly records this evidence entry (clickable link to view on EAS)
- **Timestamp** — The exact date and time the attestation was created
- **Latest badge** — The most recent attestation is marked with a "Latest" badge

:::info What Is an Attestation?
An attestation is a cryptographic signature recorded on a public blockchain that says: "This evidence entry existed in this exact form at this point in time." It makes evidence tamper-resistant and independently verifiable — anyone can check the EAS UID on the blockchain to confirm the record is authentic.
:::

## Evaluating Evidence Quality

When deciding how much weight to give a piece of evidence, consider:

1. **Strength (stars)** — Higher is more rigorous, but lower-strength evidence can still be informative when high-strength evidence doesn't exist
2. **Effect type** — Positive effects are encouraging; no effects and mixed effects are worth understanding carefully before acting
3. **Relevance** — Does the context, population, and intervention closely match your situation?
4. **Recency** — More recent studies may reflect more current conditions, though foundational older studies can still be highly relevant
5. **Replication** — Evidence that has been reproduced across multiple studies in different contexts is generally stronger than a single study

:::warning Evidence in Context
A single positive study is not proof that an intervention will work in your specific context. Evidence is most reliable when the same finding appears across multiple independent studies in similar settings. Use MUSE's evidence as a guide for informed decision-making, not as an absolute guarantee of outcomes.
:::

## Next Steps

- [Search for more evidence →](./evidence-search)
- [Learn about evidence strength levels →](../reference/strength-of-evidence)
- [Return to building your canvas →](./canvas-overview)
