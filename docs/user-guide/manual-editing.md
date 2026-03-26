---
sidebar_position: 3
title: Manual Editing
description: How to manually create, edit, connect, and organize logic model nodes on the MUSE canvas
---

# Manual Editing

While AI generation is a great way to get started quickly, you'll often want to build or refine your logic model by hand. MUSE gives you full control: you can add nodes of any type, write custom descriptions, set measurable metrics, and draw causal connections exactly the way you want.

## Adding a New Node

To add a node manually:

1. Click the **"Add Logic"** button in the toolbar at the top of the canvas
2. A side panel will slide open on the right side of the screen
3. Fill out the form (see details below)
4. Click **"Add"** (or the equivalent confirm button) to place the node on the canvas

### The Add Logic Form

When you open the side panel, you'll see a form with the following fields:

**Node Type (required)**

Choose one of the five node types from the dropdown. This determines the node's color and its position in the logic chain:

| Type | Color | When to use |
|------|-------|-------------|
| Activities | Orange | Actions or interventions your program carries out |
| Outputs | Green | Direct, countable products of your activities |
| Short-term Outcomes | Blue | Immediate changes in knowledge, behavior, or skills |
| Intermediate Outcomes | Yellow | Medium-term changes building toward your goal |
| Impact | Purple | The long-term societal change you are aiming for |

**Title (required)**

A short, clear name for this node. Maximum **100 characters**. Think of this as the headline — make it specific enough to be meaningful at a glance.

Good examples:
- *"Run weekly nutrition workshops"* (Activity)
- *"Participants with improved dietary habits"* (Output)
- *"Reduced rates of childhood obesity in target schools"* (Impact)

**Description (optional)**

A longer explanation of what this node represents. Maximum **500 characters**. Use this space to add context, clarify scope, or note any important details that don't fit in the title.

## Adding Metrics to a Node

Metrics let you attach measurable indicators to any node in your logic model. This is how you turn a conceptual outcome into something you can actually track.

To add a metric, expand the **"Metrics"** section in the Add Logic form (or the Edit panel). Click **"Add Metric"** to create a new metric with these fields:

| Field | Required? | Description |
|-------|-----------|-------------|
| **Name** | Yes | What you are measuring (e.g., "Literacy rate", "Number of participants") |
| **Description** | No | Additional context about what the metric captures |
| **Measurement Method** | No | How you will collect the data (e.g., "Survey", "Administrative data", "Direct observation") |
| **Frequency** | No | How often you will measure — choose from Daily, Weekly, Monthly, Quarterly, or Yearly |
| **Target Value** | No | The specific goal you are aiming for (e.g., "500 participants", "20% improvement") |

You can add multiple metrics to a single node. Each metric represents a different dimension of how you'll measure that stage of your logic model.

:::tip Metrics Make Your Model Actionable
Nodes without metrics are conceptual. Nodes with metrics become measurable commitments. Even if you don't know exact target values yet, adding the metric name and measurement method is a great start.
:::

## Editing an Existing Node

You can edit any node already on the canvas:

- **Option 1**: Hover over the node and click the **pencil icon** that appears
- **Option 2**: **Double-click** anywhere on the node

Both actions open the same edit panel on the right side of the screen. All the same fields are available — title, description, and metrics.

Make your changes and click **Save** (or the equivalent confirm button) to apply them.

## Connecting Nodes with Arrows

Arrows represent causal connections: "this stage leads to that stage." Drawing an arrow is a simple drag operation:

1. Hover over the **source node** (the one that causes the next stage)
2. Small dots — called **handles** — will appear on the edges of the node
3. Click and drag from the **right-side handle** of the source node
4. Drag toward the **left-side handle** of the target node
5. Release the mouse when the handle on the target node highlights

A new arrow will appear connecting the two nodes.

:::info Direction Matters
Arrows show the direction of causation. By convention, logic models flow left to right: Activities → Outputs → Short-term Outcomes → Intermediate Outcomes → Impact. You can connect nodes in any order, but keeping this left-to-right flow makes your model easier to read.
:::

## Deleting Nodes and Arrows

**To delete a node:**

1. Click the node once to select it (a blue selection border appears)
2. Press the **Delete** or **Backspace** key on your keyboard

:::warning Deleting a Node Also Removes Its Arrows
When you delete a node, all arrows connected to it are also removed. This cannot be undone, so make sure you want to remove it before pressing Delete.
:::

**To delete an arrow:**

1. Click on the arrow (it may be thin, so click right on the line)
2. The arrow will highlight to show it's selected
3. Press **Delete** or **Backspace**

## Rearranging the Canvas

Drag any node to a new position by clicking and holding on the node body (not on a handle), then dragging it where you want. Other nodes will not move automatically — you'll need to rearrange them manually to get the layout you want.

**Layout tips:**

- Arrange nodes so that the flow reads clearly from left to right
- Group related nodes vertically at the same stage
- Leave some space between nodes so arrows are easy to follow
- Use the minimap in the corner to get an overview as your model grows

:::tip There Is No Wrong Layout
The visual arrangement of your canvas doesn't affect the underlying data. Arrange nodes in whatever way makes the most sense to you and your stakeholders.
:::

## Working with Large Models

If your canvas gets crowded:

- **Zoom out** with your mouse scroll wheel to see more of the model at once
- **Use the minimap** to navigate to different sections
- **Pan** by clicking and dragging on empty canvas space
- Consider whether some nodes can be merged into a single, well-described node to reduce clutter

## Next Steps

- [Search for evidence to support your connections →](./evidence-search)
- [Save and share your logic model →](./saving-sharing)
