---
sidebar_position: 7
title: Hypercerts
description: Understanding and minting Hypercerts to create verifiable impact certificates in MUSE
---

# Hypercerts

Hypercerts are a way to make your impact claims permanent, public, and verifiable. By minting a Hypercert, you create a blockchain record that certifies what work was done, by whom, and what impact was intended — all tied to your MUSE logic model.

:::info Active Development
Hypercert minting is currently under active development. Some features may change as the system evolves. The [dev app](https://dev.muse.beaconlabs.io) is the recommended place to experiment with minting before using the production app.
:::

## What Are Hypercerts?

A Hypercert is an **impact certificate on the blockchain**. Think of it as a verifiable, permanent receipt for your impact work:

- It publicly records *what* your program set out to achieve
- It captures *who* contributed to the work
- It specifies *when* the work took place
- It stores all of this in a form that anyone can verify, independently, without needing to trust a central authority

Hypercerts are built on the [Hypercerts standard](https://hypercerts.org), an open protocol for impact certification. Unlike a PDF report or a social media post, a Hypercert cannot be altered after it's created — the record is permanent.

### Why Mint a Hypercert?

- **Credibility** — Blockchain verification makes your impact claims independently verifiable
- **Transparency** — Anyone can view and confirm your Hypercert without needing to contact you
- **Funding** — Some impact funders and retroactive public goods funding mechanisms recognize Hypercerts as proof of work
- **Recognition** — Contributors listed on a Hypercert receive public, permanent acknowledgment of their work

## Browsing Existing Hypercerts

To see Hypercerts that have already been minted, go to [muse.beaconlabs.io/hypercerts](https://muse.beaconlabs.io/hypercerts). You'll see a grid of Hypercert cards, each showing:

- The Hypercert title and description
- The logo and banner image (if provided)
- The impact scope category
- The contributor list

## Minting a Hypercert

Minting requires a connected wallet. If you haven't connected a wallet yet, see the [Wallet Connection guide](./wallet-connection) first.

### Step 1: Build Your Logic Model

Before minting, make sure your logic model on the canvas represents the impact work you want to certify. The Hypercert will be associated with your logic model as context for the impact claim.

### Step 2: Open the Mint Hypercert Dialog

1. Click the **"More"** button in the toolbar
2. Select **"Mint Hypercert"** from the dropdown
3. The Hypercert minting form will open

### Step 3: Fill Out the Form

Complete the fields on the left side of the dialog. A live preview of your Hypercert card updates on the right as you type.

**Title (required)**

The name of your impact claim. This will appear as the headline of your Hypercert. Keep it clear and specific.

Examples:
- *"Coding Bootcamp for Rural Youth — Cohort 1 (2024)"*
- *"Community Garden Network — Portland, OR — 2023–2024"*

**Description (required, 10–500 characters)**

A summary of the impact you are claiming. Describe what your program did and what change it created or aimed to create. This is visible to anyone who views your Hypercert.

**Impact Scope**

The category that best describes your work. Common categories include:

- Education
- Healthcare
- Environment
- Economic Development
- Digital Public Goods
- Community Development

**Logo (optional)**

Upload your organization's logo. This will appear as a small icon on the Hypercert card. Accepted formats: PNG, JPG, SVG. Recommended size: at least 200x200 pixels.

**Banner Image (optional)**

Upload a banner image for visual identity on the Hypercert card. This appears as the background or header image. Accepted formats: PNG, JPG. Recommended size: 1200x630 pixels (wide-format).

**Work Timeline**

Specify the date range during which the work was carried out. This is the period of time your Hypercert covers — not the date you're minting it.

- **Start date** — When the program or activity began
- **End date** — When the program or activity ended (or the end of the reporting period)

**Contributors**

List everyone who contributed to this impact work, separated by commas. This can include:

- Individual names (e.g., *"Jane Smith, Carlos Rivera"*)
- Organization names (e.g., *"Beacon Labs, Open Source Community Fund"*)
- Wallet addresses for contributors who prefer pseudonymous attribution

Contributors listed here receive permanent, public acknowledgment on the Hypercert record.

### Step 4: Review the Preview

On the right side of the dialog, you'll see a live preview of your Hypercert card as it will appear publicly. Check:

- The title and description read clearly
- The logo and banner image look correct (if you uploaded them)
- The contributor list is complete and accurate

### Step 5: Connect Your Wallet

If you haven't already connected a wallet, you'll need to do so before minting. Click the **"Connect Wallet"** prompt within the dialog and follow the steps in the [Wallet Connection guide](./wallet-connection).

### Step 6: Mint

Click **"Mint Hypercert"** to initiate the blockchain transaction.

Your wallet will prompt you to confirm the transaction and approve any associated gas fees. On the **dev app** (dev.muse.beaconlabs.io), this uses free test ETH with no real cost. On the **production app**, real gas fees apply.

After confirming in your wallet, the minting process begins. Wait for the transaction to be confirmed on-chain. Once complete, your Hypercert will appear in the Hypercerts gallery.

## Gas Fees

| Environment | Network | Cost |
|-------------|---------|------|
| [dev.muse.beaconlabs.io](https://dev.muse.beaconlabs.io) | Base Sepolia (test network) | Free (use test ETH from a faucet) |
| [muse.beaconlabs.io](https://muse.beaconlabs.io) | Production | Real gas fees apply |

:::tip Practice on the Dev App First
If this is your first time minting a Hypercert, start on the dev app. You can get free test ETH from a Sepolia faucet, go through the entire minting process at no cost, and make sure everything looks right before minting on production. See the [Wallet Connection guide](./wallet-connection) for how to get test ETH.
:::

## Next Steps

- [Connect a wallet to mint →](./wallet-connection)
- [Save your logic model before minting →](./saving-sharing)
- [Learn about blockchain concepts →](../introduction/blockchain-basics)
