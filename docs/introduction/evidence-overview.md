---
sidebar_position: 3
title: Evidence in MUSE
description: How peer-reviewed research evidence is structured, verified, and connected to your logic model
---

# Evidence in MUSE

Evidence is at the heart of MUSE. Every causal connection in your logic model can be supported by peer-reviewed research, making your Theory of Change more than just a diagram — it becomes a defensible, research-backed impact plan.

## What is an Evidence Card?

An **Evidence Card** is MUSE's standardized format for representing a single piece of research. Each card captures the essential information needed to understand what a study found and how trustworthy that finding is.

When MUSE displays an Evidence Card, you will see:

| Field | Description |
|-------|-------------|
| **Title** | The name of the study or research paper |
| **Author(s)** | Researchers who conducted the study |
| **Date** | When the study was published |
| **Results** | One or more intervention-to-outcome pairs describing what the study found |
| **Methodology** | The research method used (e.g., randomized controlled trial, systematic review) |
| **Datasets** | Data sources used in the study |
| **Citations** | Full bibliographic reference for the source |

### Intervention → Outcome Pairs

The most important part of an Evidence Card is its **results** — expressed as intervention-to-outcome pairs. This structure makes it easy to understand exactly what was tested and what effect was observed:

- **Intervention**: What was done (e.g., "Providing conditional cash transfers to low-income households")
- **Outcome**: What changed as a result (e.g., "Increased school enrollment by 12%")

A single study may contain multiple intervention-outcome pairs if it measured several effects.

## Effect Categories

Every outcome in an Evidence Card is tagged with one of five effect categories, so you can immediately understand the direction and nature of the finding:

| Category | Meaning |
|----------|---------|
| **Positive** | The intervention produced a beneficial effect |
| **No Effect** | The intervention produced no measurable change |
| **Mixed** | The study found both positive and negative effects, or effects varied across subgroups |
| **Side Effects** | The intervention produced unintended consequences (positive or negative) |
| **Unclear** | The evidence is insufficient or inconclusive to make a determination |

Knowing that evidence is "no effect" or "mixed" is just as important as knowing something works. MUSE shows all effect types so you can make fully informed decisions.

For detailed definitions and examples of each category, see the [Effect Categories reference page](../reference/effect-categories).

## Evidence Strength

Not all research is created equal. A small pilot study carries less weight than a large randomized controlled trial. MUSE uses the **Maryland Scientific Methods Scale (SMS)** to rate each piece of evidence from 0 to 5 stars based on its methodological rigor:

| Stars | Level | Description |
|-------|-------|-------------|
| 0 | No rating | Insufficient information to assess |
| 1 | Correlation | Simple association between variables; no control for confounding factors |
| 2 | Before/After | Measures change over time, but without a comparison group |
| 3 | Comparison Group | Uses a comparison group, but without random assignment |
| 4 | Quasi-Experimental | Rigorous design controlling for confounders (e.g., difference-in-differences) |
| 5 | Randomized Controlled Trial | The gold standard — participants randomly assigned to treatment and control |

When exploring evidence in MUSE, higher-starred evidence gives you greater confidence that the causal relationship shown in your logic model is real.

For full details on each level, see the [Strength of Evidence reference page](../reference/strength-of-evidence).

## How Evidence Gets Into MUSE

MUSE's evidence library is curated through a structured, open contribution process:

### 1. Submission as MDX Files

Researchers and contributors submit evidence as structured text files (MDX format) via a pull request to the [evidence repository on GitHub](https://github.com/beaconlabs-io/evidence). Each file captures all the fields of an Evidence Card in a consistent, machine-readable format.

### 2. Automated Validation

When a submission is made, an automated process checks that all required fields are present and correctly formatted. This validation ensures every Evidence Card in MUSE meets the same quality standard before it is added to the library.

### 3. Review and Approval

A human reviewer checks the content for accuracy and relevance before the evidence is merged into the library.

### 4. Blockchain Attestation

Once approved, the evidence is permanently recorded on the blockchain (see below). This creates an immutable, time-stamped record that the evidence existed and was reviewed at a specific point in time.

## Blockchain Verification

Every piece of evidence in MUSE is verified through two complementary technologies:

### IPFS Storage

The full content of each Evidence Card is stored on **IPFS** (InterPlanetary File System) — a decentralized storage network. This produces a unique content hash that serves as a permanent, tamper-proof identifier. As long as anyone in the network holds the file, it remains accessible.

### EAS Attestations

An **EAS (Ethereum Attestation Service)** attestation is created for each verified piece of evidence on the Base Sepolia blockchain. This attestation records:

- The IPFS hash of the evidence content
- The date and time of attestation
- The identity of the attesting party

Together, IPFS and EAS ensure that the evidence in MUSE cannot be silently altered or removed after verification.

For a non-technical introduction to these concepts, see [Blockchain Basics →](./blockchain-basics).

## How Evidence Connects to Your Logic Model

Evidence in MUSE is not just a library you browse separately — it is actively linked to your logic model:

### Automatic Evidence Linking

When you generate a logic model using AI, MUSE automatically searches the evidence library and attaches relevant Evidence Cards to the **causal edges** (the arrows between stages) of your logic model. A green-colored edge means that at least one piece of supporting evidence has been found for that causal connection.

### Browsing Evidence on the Canvas

Click on any green edge on your canvas to open a panel showing all the Evidence Cards linked to that connection. You can read the full details of each study, check its effect category and evidence strength, and follow citations to the original source.

### Searching Evidence Manually

You can also browse the full evidence library independently. Use the evidence search feature to find research by topic, intervention type, or outcome area. Any Evidence Card you find can be manually attached to a relevant edge in your logic model.

### Evidence Gaps

Not every connection in your logic model will have evidence attached. This is normal — it reflects honest gaps in the research literature, or areas where your program is breaking new ground. MUSE makes these gaps visible so you can acknowledge and address them in your impact planning.

## Next Steps

- [Explore evidence on the Canvas →](../user-guide/canvas-overview)
- [Search the evidence library →](../user-guide/evidence-search)
- [Understand effect categories →](../reference/effect-categories)
- [Understand evidence strength →](../reference/strength-of-evidence)
- [Learn about blockchain verification →](./blockchain-basics)
