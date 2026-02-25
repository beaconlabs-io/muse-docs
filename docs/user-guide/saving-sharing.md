---
sidebar_position: 6
title: Saving & Sharing
description: How to save, export, and share your logic models in MUSE
---

# Saving & Sharing

Once you've built a logic model you're proud of, MUSE gives you several ways to preserve and share it. You can save it permanently to IPFS for a shareable link, export it as an image for presentations, download the raw data as JSON, or simply rely on the automatic local browser save.

## Automatic Local Save

Your canvas is automatically saved to your browser's local storage as you work. Every time you add a node, edit a title, or draw a connection, the change is saved immediately.

This means:

- You don't need to click a "Save" button while working
- If you close your browser tab and come back later (on the same device and browser), your canvas will be exactly as you left it
- The save is specific to your browser — it won't appear on a different device or browser

:::warning Local Storage Has Limits
Your browser's local storage is tied to your specific device and browser. If you clear your browser data, switch computers, or use a different browser, your locally saved canvas will not be available. Use **Save to IPFS** to create a permanent, device-independent copy.
:::

## Save to IPFS

IPFS (InterPlanetary File System) is a decentralized storage network. Saving your logic model to IPFS creates a permanent, content-addressed copy that anyone can access via a unique URL — no account or sign-in required to view it.

### How to Save to IPFS

1. Click the **"More"** button in the toolbar
2. Select **"Save to IPFS"** from the dropdown menu
3. MUSE will upload your logic model to IPFS (this takes a few seconds)
4. A dialog will appear showing:
   - **IPFS hash** — The unique content identifier for your logic model
   - **Shareable URL** — A direct link to view your model (format: `muse.beaconlabs.io/canvas/[ipfs-hash]`)
   - **Canvas preview** — A thumbnail of your logic model
5. Copy the URL to your clipboard with the copy button, or share it directly on **X (Twitter)** using the share button

### Sharing the URL

Anyone with the shareable URL can view your logic model in read-only mode. They'll see the full canvas with all your nodes, connections, and evidence links — but they won't be able to edit it (the canvas is view-only when accessed via a shared link).

This is ideal for:
- Sharing with funders or stakeholders for review
- Embedding in reports or grant applications
- Archiving a snapshot of your logic model at a point in time

:::info IPFS is Permanent
Once a logic model is saved to IPFS, it cannot be deleted or changed. The content is permanently stored on the decentralized network. If you make changes to your canvas and want to share the updated version, you'll need to save to IPFS again — you'll get a new hash and a new URL for the updated version.
:::

## Export as Image

Export your entire canvas as a PNG image file that you can use in presentations, reports, or documents.

### How to Export an Image

1. Click the **"More"** button in the toolbar
2. Select **"Export Image"** from the dropdown
3. A PNG file will download to your computer automatically
4. Find it in your browser's downloads folder

The exported image captures your **entire canvas** — not just the portion visible on screen. Even if parts of your logic model are off-screen, the full model will be included in the export.

:::tip Best Practices for Image Export
Before exporting, zoom out and use the minimap to make sure all your nodes are arranged the way you want them to appear. The export reflects the current arrangement of your canvas.
:::

## Export as JSON

Export your logic model as a structured JSON data file. This is useful for technical users who want to analyze the data, import it into another tool, or keep a backup of the exact node and edge data.

### How to Export JSON

1. Click the **"More"** button in the toolbar
2. Select **"Export JSON"** from the dropdown
3. A `.json` file will download to your computer automatically

The JSON file contains all nodes (with their types, titles, descriptions, and metrics) and all edges (with their connections and any linked evidence). This is the raw data that powers your canvas.

:::info Who Is JSON Export For?
JSON export is primarily for technical users — developers, data analysts, or researchers who want to work with the logic model data programmatically. If you just need to share your model with stakeholders, the IPFS link or image export is easier.
:::

## Clear All

If you want to start fresh with a completely empty canvas:

1. Click the **"More"** button in the toolbar
2. Select **"Clear All"**
3. A confirmation dialog will appear asking if you're sure
4. Click **"Confirm"** to erase all nodes and edges from the canvas

:::warning This Cannot Be Undone
Clearing the canvas removes all nodes and edges permanently from local storage. There is no undo for this action. If you want to keep a copy of your current work, save to IPFS or export as JSON before clearing.
:::

## Summary: Which Option to Use?

| Goal | Best Option |
|------|------------|
| Share with a colleague or stakeholder | Save to IPFS → Copy the URL |
| Use in a slide deck or report | Export as Image |
| Back up your work or use the data elsewhere | Export as JSON |
| Continue working on another device | Save to IPFS → Open the URL on the other device |
| Post on social media | Save to IPFS → Share to X |
| Start over | Clear All (after saving if needed) |

## Next Steps

- [Mint a Hypercert for your logic model →](./hypercerts)
- [Connect a wallet for blockchain features →](./wallet-connection)
- [Go back to editing your canvas →](./canvas-overview)
