---
sidebar_position: 9
title: Best Practices
description: How to write effective prompts
---

# Best Practices: How to Write Effective Prompts

To generate high-accuracy logic models with MUSE, the structure of the input prompt is critically important. This guide explains key points for achieving the most efficient and stable outputs based on evaluation data.

## 1. The Most Important Rule: Clearly Describe the “Problem”

The biggest tip for creating a good logic model is to **describe “what problem you are facing (Problem)” rather than “what you want to do (Activity)”**.

- **Recommended (High Accuracy)**: “There is a problem called XX, and to solve it, I want to do YY.”
  - The LLM enters a “problem-solving mode,” making it easier to propose logically convergent solutions with clear causal relationships.
- **Not Recommended (Low Accuracy)**: “I want to do YY” (only describing the method)
  - Context is lost, leading to a “template generation mode” where generic outputs are produced and unique context disappears.

## 2. Recommended Prompt Components

The highest scores in accuracy evaluations were achieved with prompts combining the following elements:

| Element | Example |
| :--- | :--- |
| **Target** | Who is facing the issue? (e.g., OSS developers, local residents) |
| **Problem** | What difficulties currently exist? (e.g., sustainable development is difficult) |
| **Goal** | What do you want to achieve? (e.g., enable sustainable development) |
| **Activity** | What specifically will you do? (e.g., implement a grant program) |

> **💡 Tip**  
> Even if you don’t include all elements, having just “Target + Problem” dramatically stabilizes the structure of the generated logic.

## 3. Three Tips to Improve Accuracy

### ① Ensure Causal Validity
Aim for a structure without logical leaps, such as:
“Funding → Increased development time → Project sustainability.”  
By clearly stating the Problem, the AI can propose a “minimal structure directly linked to the solution.”

### ② Prevent “Strategy Bloat”
If only the Goal is provided, the AI enters a “strategy exploration mode,” listing broadly appealing ideas. This often introduces unnecessary elements like mentoring or events. The more you want to narrow the output, the more important it is to include a concrete Problem.

### ③ Maintain Context Consistency
If you want to create a model specialized for a specific domain (e.g., OSS, healthcare, education), include relevant terminology and background in the prompt. This prevents the AI from losing context midway (e.g., shifting from IT topics to community support).

## 4. Prompt Comparison Examples

| Prompt Example | Components | Accuracy |
|---|---|---|
| OSS developers currently face the problem of being unable to sustain development. Therefore, to achieve sustainable OSS development, I want to implement a grant program. | Target + Problem + Goal + Activity | High |
| OSS developers currently face the problem of being unable to sustain development. | Target + Problem | High |
| To achieve sustainable OSS development, I want to implement a grant program. | Goal + Activity | Medium |
| I want to achieve sustainable OSS development. | Goal | Medium |
| I want to implement a grant program. | Activity | Low |

---

## Summary: Quick Check

Check whether your prompt includes the following:

* [ ] **Who (Target)** is facing the problem?
* [ ] **What (Problem)** is the issue?
* [ ] **What action (Activity)** will be taken to solve it?

---
