---
sidebar_position: 1
title: Canvas Overview
description: Overview of the interactive canvas — MUSE's main workspace for building logic models
---

# Canvas Overview

The Canvas is the heart of MUSE. It's your interactive workspace where you build, visualize, and refine your logic model (Theory of Change). Everything connects here — from AI-generated frameworks to manually crafted program pathways.

:::tip Where to Find It
Navigate to [muse.beaconlabs.io/canvas](https://muse.beaconlabs.io/canvas) or click **"Canvas"** in the top navigation bar.
:::

## The Toolbar

At the top of the canvas, you'll find the main toolbar with all the controls you need:

| Button | What It Does |
|--------|--------------|
| **Generate from Intent** | Opens the AI generation dialog — describe your program and let AI build the logic model for you |
| **Add Logic** | Opens a side panel to manually add a new node to the canvas |
| **More** | A dropdown menu with additional actions (see below) |

### The "More" Dropdown Menu

Click **More** to access these additional actions:

- **Mint Hypercert** — Create a blockchain-verified impact certificate from your logic model
- **Save to IPFS** — Upload your logic model to decentralized storage and get a shareable link
- **Export Image** — Download a PNG screenshot of your entire canvas
- **Export JSON** — Download the raw logic model data as a file
- **Clear All** — Remove everything from the canvas and start fresh

## The Five Node Types

Your logic model is built from five types of nodes, each representing a different stage in your program's causal chain. Each type has its own color so you can recognize it at a glance:

| Node Type | Color | What It Represents | Example |
|-----------|-------|--------------------|---------|
| **Activities** | Orange | The concrete actions your program carries out | Running training workshops |
| **Outputs** | Green | The direct, measurable results of your activities | 200 participants trained |
| **Short-term Outcomes** | Blue | Early changes in knowledge, skills, or behavior | Increased digital literacy |
| **Intermediate Outcomes** | Yellow | Medium-term changes that build toward your goal | Higher employment rates |
| **Impact** | Purple | The long-term societal change you are working toward | Reduced economic inequality |

:::info The Logic of Logic Models
Read from left to right: Activities lead to Outputs, which lead to Short-term Outcomes, which lead to Intermediate Outcomes, which lead to Impact. Each arrow says "this causes that." The more evidence you can attach to each arrow, the more credible your model becomes.
:::

## Edges (Arrows)

Arrows on the canvas represent **causal connections** between nodes — the claim that one stage leads to the next.

- **Regular arrows (gray/white)** — A causal connection you've asserted in your model
- **Green arrows** — A causal connection that is backed by linked research evidence

When you see a green arrow, it means peer-reviewed research supports that specific step in your causal chain. This is one of MUSE's most powerful features: turning assumptions into evidence-backed claims.

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
| **Edit a node** | Double-click on it, or hover and click the pencil icon that appears |
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

## Auto-Save

Your canvas is automatically saved to your browser's local storage as you work. You don't need to manually save your progress — just come back to the same browser on the same device and your work will be right where you left it.

:::warning One Canvas at a Time
MUSE currently stores one canvas per browser. If you want to preserve your work before starting a new logic model, use **Save to IPFS** to create a permanent, shareable link first.
:::

## Next Steps

- [Generate a logic model with AI →](./ai-generation)
- [Add and edit nodes manually →](./manual-editing)
- [Save and share your canvas →](./saving-sharing)
