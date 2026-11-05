---
sidebar_position: 1
title: Canvas Overview
description: Overview of the interactive canvas — MUSE's main workspace for building logic models
---

# Canvas Overview

The Canvas is the heart of MUSE. It's your interactive workspace where you build, visualize, and refine your logic model. Everything connects here — from AI-generated frameworks to manually crafted program pathways.

:::tip Where to Find It
Navigate to [musecanvas.app/canvas](https://musecanvas.app/canvas) or click **"Canvas"** in the sidebar.
:::

:::info First Visit
The first time you open an editable canvas, a short guided tour walks you through the main controls. You can replay it at any time with the **help (?)** icon in the canvas header.
:::

## Canvas and Recipe Tabs

The canvas view is split into two tabs at the top:

- **Canvas** — the interactive React Flow workspace where you build, edit, and connect nodes.
- **Recipe** — the [Measurement Recipe](./recipe) view. Once you've generated a recipe, this tab shows practitioner-ready measurement guidance for every metric on your Output and Outcome cards.

A small dot appears on the Recipe tab while a recipe is generating, and an amber warning icon appears when the recipe is *stale* (the logic model has changed since it was generated).

Next to the tabs is the logic model's title. Click it to rename a saved logic model.

The toolbar on the right of the header shows actions relevant to whichever tab is active.

![Canvas view with the Canvas / Recipe tabs at the top, showing a populated logic model. The Recipe tab shows an amber stale icon because the logic model has changed since the recipe was last generated.](/img/screenshots/en/canvas-recipe-tabs.png)

## The Toolbar

At the top of the canvas, you'll find the main toolbar with all the controls you need:

| Button | What It Does |
|--------|--------------|
| **Generate Logic Model** | Opens the AI generation dialog — describe your program and let AI build the logic model for you (requires signing in) |
| **Add Node** | Opens the centered Node Editor Dialog to manually add a new node to the canvas |
| **Save** | Saves the logic model to your active workspace as a new version. Signed out, it opens the sign-in dialog instead |
| **History** (clock icon) | Opens the version history of a saved logic model |
| **Share** (share icon) | Opens the sharing settings. Shown only to the owner of a saved logic model |
| **Start tour** (help icon) | Replays the guided tour |
| **More** | A dropdown menu with additional actions (see below) |

On the **Recipe** tab, the first two buttons are replaced by the recipe actions (**Generate recipe**, **Regenerate**, **Download HTML**). Saving, history, and sharing are covered in [Saving & Sharing](./saving-sharing).

### The "More" Dropdown Menu

Click **More** to access additional actions, grouped by section:

**Canvas**

- **Auto Layout** — Re-tidy the arrangement of nodes into a left-to-right layout (the same pass that runs automatically after AI generation)
- **Export Image** — Copy or download a PNG of your entire canvas, framed with a "MUSE" credit so the export is traceable when shared externally
- **Export JSON** — Download the raw logic model data as a file

**Recipe**

- **Regenerate** — Re-run the [Measurement Recipe](./recipe) agent against the current metrics
- **Download HTML** — Download the current Recipe as a self-contained HTML file (disabled until a recipe has been generated successfully)

**Danger**

- **Clear All** — Remove everything from the canvas and start fresh

When you open a logic model you can only view, **Auto Layout** and **Clear All** are hidden, along with the Generate, Add Node, and Save buttons.

## The Five Node Types

Your logic model is built from five types of nodes, each representing a different stage in your program's causal chain. Most types have their own color. Short-term and Intermediate Outcomes share the same yellow, so tell those two apart by the type label shown on each card:

| Node Type | Color | What It Represents | Example |
|-----------|-------|--------------------|---------|
| **Activities** | Blue | The concrete actions your program carries out | Running training workshops |
| **Outputs** | Green | The direct, measurable results of your activities | 200 participants trained |
| **Short-term Outcomes** | Yellow | Early changes in knowledge, skills, or behavior | Increased digital literacy |
| **Intermediate Outcomes** | Yellow | Medium-term changes that build toward your goal | Higher employment rates |
| **Impact** | Purple | The long-term societal change you are working toward | Reduced economic inequality |

:::info The Logic of Logic Models
Read from left to right: Activities lead to Outputs, which lead to Short-term Outcomes, which lead to Intermediate Outcomes, which lead to Impact. Each arrow says "this causes that." The more evidence you can attach to each arrow, the more credible your model becomes.
:::

## Edges (Arrows)

Arrows on the canvas represent **causal connections** between nodes — the claim that one stage leads to the next.

- **Regular arrows (gray/white)** — A causal connection you've asserted in your model
- **Green arrows** — A causal connection that is backed by linked research evidence

When you see a green arrow, it means research evidence supports that specific step in your causal chain. Click on a green arrow to open a dialog showing the linked evidence. If external paper search was enabled during generation, you may also see academic papers from Semantic Scholar displayed as reference material alongside the curated evidence.

![The evidence dialog opened from a green arrow, listing the linked research evidence that backs the causal connection between two nodes.](/img/screenshots/en/evidence-dialog.png)

This is one of MUSE's most powerful features: turning assumptions into evidence-backed claims.

## Navigating the Canvas

The canvas is an infinite, pannable workspace. Here's how to move around:

| Action | How To Do It |
|--------|--------------|
| **Pan (move around)** | Click and drag on an empty area of the canvas |
| **Zoom in** | Scroll up with your mouse wheel, or use the **+** button in the zoom controls |
| **Zoom out** | Scroll down with your mouse wheel, or use the **-** button in the zoom controls |
| **Fit to screen** | Click the fit-to-screen button in the zoom controls to see your entire model |
| **Minimap** | Use the small map in the corner to get an overview and click to navigate |

## Working with Nodes

Once nodes are on the canvas, you can interact with them in several ways:

| Action | How To Do It |
|--------|--------------|
| **Select a node** | Click on it once — it will highlight with a selection border |
| **Edit a node** | Double-click on it, or hover and click the pencil icon that appears — both open the centered Node Editor Dialog |
| **Move a node** | Click and drag it to a new position |
| **Delete a node** | Select it and press the **Delete** or **Backspace** key |
| **Connect two nodes** | Drag from the small dot (handle) on the right edge of one node to the handle on the left edge of another |
| **Delete an arrow** | Click on the arrow to select it, then press **Delete** or **Backspace** |

:::tip Connecting Nodes
When you hover over a node, small connection handles (dots) appear on its edges. Drag from one handle to another node's handle to draw a causal arrow between them.
:::

## The Minimap

In the bottom corner of the canvas, you'll see a small minimap showing the full overview of your logic model. You can:

- **Click** anywhere on the minimap to jump to that part of the canvas
- **Drag** within the minimap to pan the view

This is especially useful when your logic model grows large and you need to navigate between different sections quickly.

## Drafts and Saving

While you work, MUSE keeps an unsaved **draft** of the canvas in your browser, so a reload or a closed tab doesn't lose your edits. A draft lives only in that browser and is removed when you sign out.

To keep a logic model, click **Save**. Saved logic models are stored in your workspace, appear under **Logic models** in the sidebar, and can be opened from any device you sign in on. See [Saving & Sharing](./saving-sharing) for details.

## Next Steps

- [Generate a logic model with AI →](./ai-generation)
- [Turn your metrics into a Measurement Recipe →](./recipe)
- [Add and edit nodes manually →](./manual-editing)
- [Save and share your canvas →](./saving-sharing)
