---
sidebar_position: 2
title: Strength of Evidence
description: The Maryland Scientific Methods Scale used to rate evidence quality in MUSE, from Level 0 (non-experimental) to Level 5 (full RCT).
---

# Strength of Evidence

MUSE evaluates the strength of evidence for analytical results presented in studies using the **Maryland Scientific Methods Scale (SMS)**. The SMS is an internationally recognized framework that assigns a star rating from 0 to 5 based on the rigor of the research design. Higher levels indicate stronger causal inference — that is, greater confidence that the intervention, and not some other factor, caused the observed outcome.

The explanations below are based on the [What Works Centre for Local Growth](https://whatworksgrowth.org/resources/the-scientific-maryland-scale/).

---

## Why Evidence Strength Matters

Not all research is created equal. A study that simply compares outcomes before and after a program — without any control group — cannot rule out the possibility that the change would have happened anyway. On the other hand, a well-conducted Randomized Controlled Trial (RCT) can isolate the causal effect of an intervention with a high degree of confidence.

By tagging each Evidence Card with its SMS level, MUSE allows logic model builders to:

- Distinguish weak signals from robust findings.
- Prioritize high-quality evidence when selecting causal links in a Logic Model.
- Identify gaps where more rigorous evaluation is needed.
- Communicate evidence quality transparently to funders, policymakers, and stakeholders.

---

## Quick Reference Table

| Level | Stars | Design Type | Causal Confidence |
|---|---|---|---|
| 0 | None | Mathematical / computational model | Very low |
| 1 | ★ | Regression with control variables | Low |
| 2 | ★★ | Partial matching or comparison groups | Moderate-low |
| 3 | ★★★ | Difference-in-differences, regression discontinuity, propensity score matching | Moderate |
| 4 | ★★★★ | Randomized design with operationalization | High |
| 5 | ★★★★★ | Full Randomized Controlled Trial (RCT) | Very high |

---

## Level Descriptions

### Level 0 — No Stars

Rather than experimental or quasi-experimental approaches, analyses at this level are based on mathematical models that combine empirical data with statistics. These include agent-based models, microsimulation models, and other computational approaches. Because no real-world intervention is observed and no comparison group exists, causal claims cannot be supported. Level 0 studies can be useful for scenario planning and hypothesis generation, but they are not sufficient as standalone evidence for a causal link in a Logic Model.

---

### Level 1 — 1 Star (★)

**Comparison between (a) intervention and non-intervention groups, or (b) comparison of intervention groups before and after intervention. Control variables are used to adjust for differences between intervention and non-intervention groups.**

Level 1 studies use observational data and apply regression analysis or similar statistical controls to account for differences between participants and non-participants. Because participants self-select into the intervention, however, unmeasured differences between the groups may still explain the results. This is the lowest level of evidence that involves an actual comparison.

**Typical designs**: Simple regression, cross-sectional comparison with covariates, interrupted time-series without a control group.

---

### Level 2 — 2 Stars (★★)

**Comparison between (a) intervention and non-intervention groups, or (b) comparison where intervention and non-intervention groups are partially but not completely aligned. Control variables or matching methods are used. At the macro level, control variables are used to control for baseline characteristics.**

Level 2 studies attempt to construct a more credible comparison group through matching or covariate adjustment, but the intervention and comparison groups are still not fully equivalent at baseline. This partial alignment improves on Level 1 but leaves open the possibility that unmeasured confounders are driving results.

**Typical designs**: Matched observational study, multivariate regression with rich covariate set, ecological study with controls.

---

### Level 3 — 3 Stars (★★★)

**Provides comparison of the intervention group's pre-intervention outcomes with post-intervention outcomes, as well as comparison with outcomes of non-intervention groups. When using methods that compare before and after intervention periods, results are presented separately for intervention and non-intervention groups. Additionally, important baseline characteristics are measured and controlled for through propensity score matching, though fundamental differences may still exist.**

Level 3 studies use quasi-experimental methods that explicitly model the counterfactual — what would have happened to the intervention group in the absence of the intervention. By observing how both groups trend over time, these designs can control for stable unmeasured differences and time-varying shocks that affect everyone equally.

**Typical designs**:
- **Difference-in-differences (DiD)**: Compares the change in outcomes over time between the intervention and control groups.
- **Regression Discontinuity (RD)**: Exploits a threshold rule to identify causal effects near the cutoff.
- **Propensity Score Matching (PSM)**: Constructs a statistical twin for each participant based on observable characteristics.

---

### Level 4 — 4 Stars (★★★★)

**Interventions are conducted randomly, and differences in outcomes between intervention and non-intervention groups due to the presence or absence of intervention are examined. This should ideally involve operationalization in intervention design or baseline heterogeneity in intervention implementation timing. Measured variables should be isolated as much as possible.**

Level 4 introduces randomization, which in principle eliminates selection bias. However, the randomization is not a full protocol-level RCT — it may involve natural variation in rollout timing, encouragement designs, or instrumental variable approaches that approximate randomization. The emphasis at this level is on isolating the measured variables as cleanly as possible from confounding factors.

**Typical designs**: Natural experiment, stepped-wedge rollout with randomized timing, instrumental variable analysis, encouragement design.

---

### Level 5 — 5 Stars (★★★★★)

**Experimental design involving randomized allocation to intervention and non-intervention groups, specifically Randomized Controlled Trials (RCT). The allocation ratio for intervention and non-intervention groups should be approximately 50-50% to examine the degree of contamination through control variable usage. This measurement should be conducted using variables that can represent appropriate differences. Control variables should be used to examine contamination from the perspective of intervention target subjects, with baseline variables being appropriately differentiated where possible, and statistical adjustment or sampling-based post-stratification considered when necessary.**

Level 5 represents the gold standard of causal evidence. Participants are randomly assigned to intervention or control conditions, ensuring that — on average — the two groups are identical in both measured and unmeasured characteristics at baseline. The roughly 50-50 allocation ratio maximizes statistical power. The RCT design, when properly implemented with attention to contamination, attrition, and compliance, provides the strongest available basis for causal claims.

**Typical designs**: Randomized Controlled Trial (RCT), cluster-randomized trial, factorial trial.

---

## Applying the SMS in MUSE

When an Evidence Card is attached to a node in the Logic Model canvas, the star rating is displayed alongside the effect category. This combination — **what happened** (effect category) and **how confident we can be** (SMS level) — gives logic model builders the information they need to weight evidence appropriately.

As a general principle:
- Evidence at **Level 3 or above** provides a meaningful basis for causal inference.
- Evidence at **Level 1 or 2** can inform hypotheses and identify promising directions, but should be treated with caution.
- Evidence at **Level 0** is best used for exploratory purposes or when no empirical evidence is yet available.
