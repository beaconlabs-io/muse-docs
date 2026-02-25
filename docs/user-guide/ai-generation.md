---
sidebar_position: 2
title: AI-Powered Generation
description: How to generate a complete, evidence-linked logic model using AI in MUSE
---

# AI-Powered Generation

One of MUSE's most powerful features is its ability to generate a complete, evidence-linked logic model from a plain-language description of your program. Instead of building each node by hand, you simply describe what your intervention does — and the AI handles the rest.

## How It Works

When you click "Generate from Intent," MUSE's AI:

1. Reads your description and identifies the core intervention
2. Constructs a full logic model with nodes at every stage (Activities through Impact)
3. Searches the evidence database for peer-reviewed research relevant to each causal connection
4. Places everything on the canvas, complete with green evidence-backed arrows where research was found

The whole process takes about **40 seconds**.

## Step-by-Step Instructions

### Step 1: Open the Canvas

Go to [muse.beaconlabs.io/canvas](https://muse.beaconlabs.io/canvas) or click **"Canvas"** in the top navigation bar.

:::tip Starting Fresh
If you already have nodes on the canvas, the AI will add to what's there. If you want a clean slate, go to **More → Clear All** before generating.
:::

### Step 2: Click "Generate from Intent"

In the toolbar at the top of the canvas, click the **"Generate from Intent"** button (the one with the robot icon). A dialog box will appear.

### Step 3: Describe Your Intervention

In the text box, type a description of your program or intervention. You have up to **1,000 characters** to work with.

Your description should answer: *What does your program do, for whom, and what change are you hoping to create?*

**Good examples to try:**

> "Impact of open source software contributions on the Ethereum ecosystem"

> "Reducing food insecurity in urban communities through community gardens"

> "Improving maternal health outcomes through mobile health interventions in low-income countries"

> "Providing coding bootcamps to unemployed adults in rural areas to improve employment outcomes"

### Step 4: Click "Generate"

Once you're happy with your description, click the **"Generate"** button. The dialog will show a live progress tracker.

### Step 5: Watch the Progress

The AI works in four steps, and you'll see each one tick off as it completes:

| Step | What's Happening |
|------|-----------------|
| **Step 1: Analyzing intent** | The AI reads your description and understands the core intervention |
| **Step 2: Generating logic model** | The AI constructs the full set of nodes and causal connections |
| **Step 3: Illustrating canvas with evidence** | The AI searches the evidence database and links relevant research to your causal arrows |
| **Step 4: Completed!** | Your logic model is ready |

### Step 6: Review Your Logic Model

Once generation is complete, the dialog closes and your logic model appears on the canvas. You'll see:

- **Color-coded nodes** for each stage: Activities (orange), Outputs (green), Short-term Outcomes (blue), Intermediate Outcomes (yellow), and Impact (purple)
- **Causal arrows** connecting the stages in a left-to-right flow
- **Green arrows** where the AI found supporting research evidence

:::info About Green Arrows
Green arrows are special — they indicate that a peer-reviewed research study supports that causal link. You can click on a green arrow to see what evidence is attached.
:::

## Writing Better Prompts

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

:::tip More Detail = Better Results
The AI does its best work when it has a clear picture of what you're doing and who you're doing it for. A well-written two or three sentences will produce a much richer logic model than a vague five-word phrase.
:::

## After Generation: Refining Your Model

The AI-generated logic model is a starting point, not a finished product. You are expected to review and refine it:

- **Edit any node** — Double-click a node or click the pencil icon to update its title and description
- **Add metrics** — Open any node's edit panel to attach measurable indicators
- **Remove connections** — Click an arrow and press Delete to remove it
- **Add new connections** — Drag from one node's handle to another to create a new causal arrow
- **Add new nodes** — Use the **Add Logic** button to create additional nodes that the AI may have missed
- **Rearrange the layout** — Drag nodes to positions that make more visual sense for your model

:::warning Review for Accuracy
AI-generated content reflects patterns in the evidence database and may not perfectly match your specific program context. Always review the generated nodes and evidence links with your own expertise before sharing or publishing.
:::

## What If Generation Fails?

If the generation dialog shows an error or gets stuck:

1. Close the dialog
2. Check your internet connection
3. Try again with a slightly different or more detailed description
4. If the problem persists, try the [dev version](https://dev.muse.beaconlabs.io) to see if the issue is isolated to the production environment

## Next Steps

- [Add or edit nodes manually →](./manual-editing)
- [Search the evidence database →](./evidence-search)
- [Save and share your canvas →](./saving-sharing)
