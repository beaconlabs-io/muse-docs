---
sidebar_position: 4
title: Blockchain Basics
description: A plain-language guide to the blockchain features used in MUSE
---

# Blockchain Basics

MUSE uses blockchain technology to make impact claims transparent and independently verifiable. This page explains the key concepts in plain language — no prior knowledge of crypto or blockchain required.

:::info You Don't Need a Wallet to Use Most of MUSE
The core features of MUSE — browsing evidence, building logic models on the canvas, generating models with AI, and saving your work to IPFS — all work **without** a crypto wallet. A wallet is only needed if you want to mint a Hypercert (an on-chain impact certificate). Feel free to explore MUSE fully before setting up a wallet.
:::

## Why Does MUSE Use Blockchain?

Impact claims are only as credible as the process behind them. Traditional documents can be edited silently, deleted, or backdated. Blockchain solves this by providing a ledger where records are:

- **Transparent** — Anyone can view the records
- **Immutable** — Once written, records cannot be altered or deleted
- **Verifiable** — Anyone can independently confirm that a record exists and was created at a specific time

In MUSE, blockchain is used to verify that evidence has been reviewed and attested, and to create permanent, transferable records of impact claims through Hypercerts.

## What is a Crypto Wallet?

A crypto wallet is a digital tool that lets you interact with blockchain networks. Think of it like a secure digital identity — it gives you a unique address (similar to an email address) that lets you sign transactions and prove ownership of digital assets.

You do not store money "inside" a wallet. Instead, the wallet holds the private key that proves you control an address on the blockchain. Common wallet options include:

- **MetaMask** — A browser extension and mobile app; the most widely used wallet
- **Coinbase Wallet** — Another popular option with a beginner-friendly interface
- **Rainbow** — A mobile-first wallet with a clean design

When you connect a wallet to MUSE, you are simply telling the app who you are so it can record your impact claims under your address. MUSE never asks for your private key or seed phrase — only your wallet app does.

:::caution Protect Your Seed Phrase
Your wallet's seed phrase (a sequence of 12 or 24 words) is the master key to your wallet. Never share it with anyone or enter it into any website. MUSE will never ask for it.
:::

## Production vs. Development: Which Should I Use?

MUSE runs on two separate networks:

| | Production | Development |
|-|------------|-------------|
| **URL** | [muse.beaconlabs.io](https://muse.beaconlabs.io) | [dev.muse.beaconlabs.io](https://dev.muse.beaconlabs.io) |
| **Network** | Base (production) | Base Sepolia (test network) |
| **Gas fees** | Small real cost | Free |
| **Hypercerts** | Permanent, real records | Test records only |
| **Best for** | Real impact work | Learning and experimentation |

**Base Sepolia** is a test version of the Base blockchain where transactions cost nothing and nothing is permanent. It is the ideal place to learn how wallets and Hypercerts work before committing to real transactions.

If you are new to blockchain, start on the **development environment**. You can get free test funds (called "test ETH") from a Base Sepolia faucet to cover the zero-cost test transactions.

## EAS: Ethereum Attestation Service

An **attestation** is a signed statement from one party about another — similar to a reference letter, but written on the blockchain where it cannot be forged or altered.

MUSE uses the **Ethereum Attestation Service (EAS)** to attest to the validity of evidence in its library. When an Evidence Card is verified and approved, an EAS attestation is created on the Base Sepolia blockchain. This attestation records:

- **What** — The content hash (fingerprint) of the evidence
- **When** — The exact date and time the attestation was made
- **Who** — The address of the party that created the attestation

Anyone can look up this attestation on a public blockchain explorer and confirm that the evidence existed in a specific form at a specific time. This provides a level of accountability that is impossible with traditional documents.

## IPFS: Decentralized File Storage

**IPFS** (InterPlanetary File System) is a network for storing and sharing files in a decentralized way. Unlike a traditional server (where a file lives in one place and disappears if the server goes offline), IPFS distributes files across many computers around the world.

When you save a logic model or when evidence is verified in MUSE:

1. The content is uploaded to IPFS
2. IPFS generates a unique **content identifier (CID)** — a hash that is mathematically derived from the file's content
3. This CID is used as a permanent, shareable link

Because the CID is derived from the content itself, any change to the file would produce a completely different CID. This makes it impossible to alter the content without detection.

In MUSE, IPFS links let you share your logic model with anyone — even people who do not have a MUSE account — via a permanent URL.

## Hypercerts: Impact Certificates on the Blockchain

A **Hypercert** is a digital certificate that represents an impact claim. You can think of it as a receipt for positive work done — a permanent, public record that says "this program, in this time period, contributed to this outcome."

Hypercerts in MUSE capture:

- The **scope of work** — What activities were carried out
- **Time period** — When the work was done
- The **contributor(s)** — Who did the work
- The **logic model** — The evidence-backed pathway from activities to impact

Once minted, a Hypercert exists permanently on the blockchain. It can be shared publicly, referenced in grant applications, and potentially used in future impact funding mechanisms. Hypercerts are designed to be interoperable — they follow an open standard that other platforms can recognize and build on.

To mint a Hypercert, you need a connected wallet. See the [Hypercerts guide →](../user-guide/hypercerts) for step-by-step instructions.

## Gas Fees: The Cost of Blockchain Transactions

Every transaction on a blockchain (such as creating an attestation or minting a Hypercert) requires a small fee paid to the network, called a **gas fee**. Gas fees compensate the computers that process and validate transactions.

In MUSE:

- **Development transactions** — Free. Test networks use valueless test tokens, so there is no real cost.
- **Production transactions** — A small fee in ETH (Ethereum) is required. On the Base network, these fees are typically very small (often a few cents).

You do not pay gas fees just to browse evidence, build logic models, or save to IPFS. Gas is only charged when you write a transaction to the blockchain — for example, when minting a Hypercert.

## Summary: What Requires a Wallet?

| Feature | Wallet Required? |
|---------|-----------------|
| Browse evidence library | No |
| Build a logic model on the canvas | No |
| Generate a logic model with AI | No |
| Search and explore evidence | No |
| Save logic model to IPFS | No |
| Share a logic model via link | No |
| Mint a Hypercert | **Yes** |
| Create an EAS attestation | **Yes** |

Start exploring MUSE today — no wallet needed. When you are ready to take your impact claims on-chain, the [Wallet Connection guide →](../user-guide/wallet-connection) will walk you through the setup.

## Next Steps

- [Connect a wallet →](../user-guide/wallet-connection)
- [Mint a Hypercert →](../user-guide/hypercerts)
- [Save and share your logic model →](../user-guide/saving-sharing)
- [Back to Getting Started →](./getting-started)
