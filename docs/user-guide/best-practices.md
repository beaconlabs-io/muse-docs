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
> 
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

## Additional Tips

The quality of your generated logic model depends on how clearly you describe your intervention. Here are some tips:

**Be specific about your population:**
- Less effective: *"helping people"*
- More effective: *"supporting unemployed adults aged 18–35 in rural communities"*

**Name the intervention clearly:**
- Less effective: *"a program to improve health"*
- More effective: *"a community health worker program delivering door-to-door maternal care services"*

**Include the hoped-for change:**
- Less effective: *"food security"*
- More effective: *"reducing food insecurity by connecting low-income families with local food banks and nutrition education"*

**Mention the context if it matters:**
- Examples: *"in Sub-Saharan Africa"*, *"for K-12 students"*, *"using mobile technology"*

> **💡 Tip**
> 
> More Detail = Better Results
> The AI does its best work when it has a clear picture of what you're doing and who you're doing it for. A well-written two or three sentences will produce a much richer logic model than a vague five-word phrase.

---

## Summary: Quick Check

Check whether your prompt includes the following:

* [ ] **Who (Target)** is facing the problem?
* [ ] **What (Problem)** is the issue?
* [ ] **What action (Activity)** will be taken to solve it?

---
