---
sidebar_position: 8
title: Wallet Connection
description: How to connect a cryptocurrency wallet to MUSE for blockchain features like Hypercert minting
---

# Wallet Connection

A cryptocurrency wallet is required for MUSE's blockchain features — but only those features. The vast majority of what MUSE offers works perfectly without one. This guide explains when you need a wallet, how to connect one, and how to get set up if you're new to this.

## Do You Need a Wallet?

**No wallet needed for most features:**

| Feature | Requires Wallet? |
|---------|-----------------|
| Browse and search evidence | No |
| Read evidence detail pages | No |
| Build logic models on the canvas | No |
| Edit nodes and connections | No |
| AI-powered logic model generation | No |
| Save to IPFS and share | No |
| Export as image or JSON | No |
| View shared canvases | No |
| Browse the Hypercerts gallery | No |

**Wallet required for these features:**

| Feature | Requires Wallet? |
|---------|-----------------|
| Mint Hypercerts | Yes |
| On-chain attestation signing | Yes |

:::tip You Can Start Without a Wallet
If you're new to MUSE, there's no need to set up a wallet right away. Explore the canvas, generate a logic model with AI, and browse the evidence database — all without a wallet. Come back to wallet setup when you're ready to mint a Hypercert.
:::

## What Is a Cryptocurrency Wallet?

A cryptocurrency wallet is a piece of software that manages a pair of cryptographic keys. It lets you:

- Sign blockchain transactions (like minting a Hypercert) to prove that you authorized them
- Hold cryptocurrency (used to pay transaction fees, called "gas fees")
- Interact with decentralized applications like MUSE

You don't need to deeply understand the technical details to use a wallet. Think of it like a digital ID card that you use to authenticate yourself with blockchain applications.

## Supported Wallets

MUSE uses **RainbowKit**, which supports a wide range of popular wallets:

- **MetaMask** — The most widely used browser extension wallet ([metamask.io](https://metamask.io))
- **Coinbase Wallet** — Made by Coinbase, available as a browser extension and mobile app
- **WalletConnect** — A protocol that connects many mobile wallets (Trust Wallet, Rainbow, and many others) by scanning a QR code
- **Injected wallets** — Any wallet that is already installed as a browser extension will appear as an option

If you don't have a wallet yet, MetaMask is a good place to start. Visit [metamask.io](https://metamask.io), install the browser extension, and follow their setup instructions to create a new wallet.

:::warning Keep Your Seed Phrase Safe
When creating a new wallet, you'll be given a **seed phrase** (also called a recovery phrase) — a list of 12 or 24 words. This is the master key to your wallet. Write it down on paper and store it somewhere safe. Never share it with anyone, never enter it into a website. Anyone who has your seed phrase has full access to your wallet.
:::

## How to Connect Your Wallet

1. Click the **"Connect Wallet"** button in the top-right corner of the MUSE navigation bar
2. A dialog will appear showing the available wallet options
3. Click your wallet provider (e.g., MetaMask, WalletConnect)
4. Your wallet software will open (or a QR code will appear for WalletConnect)
5. In your wallet, review the connection request and click **"Connect"** or **"Approve"**
6. Once approved, the dialog closes and your connected wallet address appears in the top-right corner of the navigation bar

You are now connected. MUSE will remember your wallet connection for the current session.

## Understanding Your Connected State

Once connected, you'll see in the navigation bar:

- **Your wallet address** — Shown in a shortened format (e.g., `0x1234...5678`)
- **Your balance** — The amount of ETH in your wallet on the current network

Your wallet balance is used to pay gas fees when you mint Hypercerts or sign attestations.

## Network Configuration

MUSE automatically connects to the appropriate network depending on which version of the app you're using:

| App | URL | Network | What It Means |
|-----|-----|---------|---------------|
| Production | [muse.beaconlabs.io](https://muse.beaconlabs.io) | Ethereum or Base | Real transactions, real gas fees |
| Development | [dev.muse.beaconlabs.io](https://dev.muse.beaconlabs.io) | Base Sepolia (test network) | Test transactions, no real cost |

If your wallet is connected to the wrong network, MUSE will show a prompt asking you to switch networks. Click the prompt and approve the network switch in your wallet.

## Getting Test ETH for the Development Environment

If you're using the development environment ([dev.muse.beaconlabs.io](https://dev.muse.beaconlabs.io)), you'll need test ETH on the **Base Sepolia** network to pay for test transactions. Test ETH has no real-world value — it's just for practice.

To get free test ETH:

1. Connect your wallet to the dev app
2. Make sure your wallet is on the **Base Sepolia** network (MUSE will prompt you if it isn't)
3. Visit a Sepolia faucet — search for "Base Sepolia faucet" in your browser to find current options
4. Enter your wallet address and request test ETH
5. Wait a minute or two for the test ETH to arrive in your wallet
6. You're ready to mint test Hypercerts

:::tip Faucets Change Over Time
Faucet URLs change periodically. If a faucet you find isn't working, search for a fresh list. You can also check the [Base network documentation](https://docs.base.org) for current faucet recommendations.
:::

## Disconnecting Your Wallet

To disconnect your wallet from MUSE:

1. Click your wallet address in the top-right corner of the navigation bar
2. A dropdown or modal will appear
3. Select **"Disconnect"**
4. Your wallet is now disconnected from MUSE

Disconnecting removes the connection between MUSE and your wallet in your current browser session. Your wallet itself is unaffected — your funds and keys remain safe.

## Frequently Asked Questions

**Is my wallet data stored by MUSE?**
No. MUSE never has access to your private key or seed phrase. When you "connect" a wallet, MUSE only learns your public wallet address, which is the same information that is publicly visible on the blockchain. All signing happens in your wallet software itself.

**Can I use a hardware wallet (Ledger, Trezor)?**
Yes, via WalletConnect. Select the WalletConnect option and follow the pairing instructions for your hardware wallet.

**My wallet isn't showing up in the connect dialog.**
Make sure your wallet browser extension is installed and unlocked. If you're using a mobile wallet, use the WalletConnect option and scan the QR code with your phone.

**The transaction failed. What do I do?**
Failed transactions are usually caused by insufficient gas (not enough ETH for the fee) or a network congestion issue. Check your ETH balance and try again. On the development environment, get more test ETH from a faucet.

## Next Steps

- [Mint a Hypercert →](./hypercerts)
- [Learn about blockchain concepts →](../introduction/blockchain-basics)
- [Go back to the canvas →](./canvas-overview)
