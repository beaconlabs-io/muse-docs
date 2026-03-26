---
sidebar_position: 3
title: Glossary
description: Key terms and definitions used throughout MUSE, with Japanese translations.
---

# Glossary

This glossary defines the key terms used throughout the MUSE platform. Terms are listed in alphabetical order. Japanese translations are provided for each entry.

---

### Activities

**Japanese**: アクティビティ

The concrete actions taken by a program or intervention. Activities are the starting point of a Logic Model — they represent what the program actually does (e.g., delivering training sessions, distributing resources, providing coaching). Activities produce Outputs, which in turn lead to Outcomes and ultimately Impact.

---

### Attestation

**Japanese**: アテステーション

A cryptographic statement recorded on a blockchain that verifies a specific claim. In MUSE, attestations are created using the Ethereum Attestation Service (EAS) on the Base Sepolia network. Attestations provide a tamper-evident, publicly verifiable record that a piece of evidence has been reviewed and published. Each evidence file in the evidence repository receives an attestation on merge.

---

### Canvas

**Japanese**: キャンバス

MUSE's interactive workspace for building Logic Models. The canvas is powered by React Flow and allows users to create, connect, and annotate nodes representing the stages of a Theory of Change. Users can drag and drop nodes, draw edges between them, attach Evidence Cards, and generate Hypercerts directly from the canvas.

---

### Citation Count

**Japanese**: 引用数

The number of times an academic paper has been cited by other papers. In MUSE, citation counts are displayed on external paper cards in the evidence dialog and are used to rank papers by quality. Higher citation counts generally indicate greater influence in the academic community.

---

### EAS

**Japanese**: EAS（イーサリアム・アテステーション・サービス）

Ethereum Attestation Service. The open protocol used by MUSE to create on-chain attestations. EAS provides a standardized schema for making verifiable claims on the Ethereum blockchain. MUSE uses EAS on the Base Sepolia test network to attest that evidence files have been validated and stored on IPFS.

---

### Edge

**Japanese**: エッジ

An arrow connecting two nodes on the canvas. Each edge represents a causal or logical relationship between two stages of a Logic Model — for example, an arrow from an Activity node to an Output node asserts that the activity produces that output. Edges are directional and can be annotated with supporting evidence.

---

### Effect

**Japanese**: エフェクト

The observed outcome or impact of an intervention as reported in a research study. In MUSE, each Evidence Card is tagged with one of five effect categories — Positive, No Effect, Mixed, Side Effect, or Unclear — to summarize what the study found. See the [Effect Categories](./effect-categories.md) reference for full definitions.

---

### Evidence Card

**Japanese**: エビデンスカード

A standardized format for presenting a single piece of research evidence in MUSE. Each Evidence Card captures the core finding of a study as an **Intervention → Indicator → Short-term Outcome** relationship, along with the effect category and strength-of-evidence rating. Evidence Cards can be attached to nodes on the canvas to ground a Logic Model in empirical research. Note: Evidence Cards are distinct from External Papers — curated evidence is scored by AI and backed by blockchain attestations, while external papers are shown as reference material only.

---

### External Paper

**Japanese**: 外部学術論文

An academic paper retrieved from external databases (such as Semantic Scholar) that is displayed alongside curated evidence as reference material. External papers are not scored by MUSE's AI and do not receive blockchain attestations. They provide supplementary context from the broader academic literature, including TLDR summaries and citation counts to help users quickly assess relevance.

---

### Goal

**Japanese**: ゴール

The plain-language description of what you want to achieve, which you provide to MUSE's AI to generate a logic model. A clear, well-structured goal that includes the target population, problem, and desired change produces the best results.

---

### Gas Fee

**Japanese**: ガス代

The transaction cost paid to the blockchain network when performing an on-chain operation, such as creating an attestation or minting a Hypercert. Gas fees are denominated in the network's native token (ETH on Base Sepolia) and fluctuate based on network congestion. Users must have a connected wallet with sufficient funds to pay gas fees when performing blockchain operations in MUSE.

---

### Hypercert

**Japanese**: ハイパーサート

An on-chain impact certificate that represents a verified claim of social impact. In MUSE, Logic Models can be used to generate Hypercerts that document the evidence base underlying a program's impact claims. Hypercerts are minted on the blockchain and provide a publicly verifiable, persistent record of impact for funders, evaluators, and beneficiaries. In the Japanese interface, Hypercerts are displayed as "インパクト証明書" (Impact Certificate).

---

### Impact

**Japanese**: インパクト

Long-term societal change; the ultimate goal of an intervention. Impact sits at the far right of a Logic Model and represents the broad, lasting difference that a program aims to make in the world — for example, reduced poverty, improved public health, or increased educational attainment. Impact is typically harder to measure directly than shorter-term outcomes and may only become visible years after the intervention.

---

### Intermediate Outcome

**Japanese**: 中間アウトカム

Medium-term changes resulting from short-term outcomes. In a Logic Model, Intermediate Outcomes represent the behavioral, social, or systemic shifts that occur after the immediate effects of an intervention take hold — for example, increased economic self-sufficiency following improved financial literacy. Intermediate Outcomes bridge Short-term Outcomes and long-term Impact.

---

### IPFS

**Japanese**: IPFS（惑星間ファイルシステム）

InterPlanetary File System. A decentralized, peer-to-peer storage network used by MUSE to store evidence files and Logic Models. When evidence is attested, its MDX file is uploaded to IPFS via Pinata and the resulting content identifier (CID) is included in the on-chain attestation record. This ensures that evidence content is permanently accessible and cannot be altered after attestation.

---

### Logic Model

**Japanese**: ロジックモデル

A visual representation of a Theory of Change that maps the causal pathway from Activities to Impact. A Logic Model in MUSE consists of interconnected nodes — Activities, Outputs, Short-term Outcomes, Intermediate Outcomes, and Impact — connected by directed edges. Each causal link can be grounded in Evidence Cards to demonstrate that the assumed relationship is supported by research.

---

### Maryland SMS

**Japanese**: メリーランドSMS（科学的手法尺度）

Maryland Scientific Methods Scale. A 0-to-5 rating system used in MUSE to assess the methodological rigor of research evidence. Level 0 denotes non-experimental mathematical models; Level 5 denotes a full Randomized Controlled Trial (RCT). The SMS helps users quickly gauge how much causal confidence to place in a given study. See the [Strength of Evidence](./strength-of-evidence.md) reference for full level descriptions.

---

### Metrics

**Japanese**: メトリクス

Measurable indicators attached to Logic Model nodes. Metrics define how the performance or outcome of each stage in the Logic Model will be measured in practice — for example, "number of training sessions delivered" as a metric for an Activity node, or "employment rate at 6 months" as a metric for an Outcome node. Adding metrics to nodes makes a Logic Model evaluable and actionable.

---

### Node

**Japanese**: ノード

A card on the canvas representing a single stage in a Logic Model. Each node has a type (Activity, Output, Short-term Outcome, Intermediate Outcome, or Impact), a title, an optional description, and optional Metrics. Nodes are connected to each other by Edges to form the causal chain of the Logic Model. Evidence Cards can be linked to nodes to indicate which research supports the causal relationship flowing from that node.

---

### Outputs

**Japanese**: アウトプット

The direct products or deliverables that result from carrying out Activities. Outputs are tangible and immediately countable — for example, "100 participants trained" or "50 reports published." Outputs are distinct from Outcomes: they describe what was produced, not what changed as a result. In a Logic Model, Outputs sit between Activities and Short-term Outcomes.

---

### RCT

**Japanese**: RCT（ランダム化比較試験）

Randomized Controlled Trial. The gold standard of experimental research, corresponding to Level 5 on the Maryland SMS. In an RCT, participants are randomly assigned to either an intervention group or a control group. Random assignment ensures that — on average — the two groups are equivalent at baseline, allowing researchers to attribute any subsequent difference in outcomes to the intervention itself. RCT evidence provides the highest degree of causal confidence available.

---

### Semantic Scholar

**Japanese**: Semantic Scholar（セマンティック・スカラー）

An AI-powered academic search engine developed by the Allen Institute for AI. MUSE can optionally search Semantic Scholar to find academic papers related to causal connections in your logic model. Papers from Semantic Scholar appear as reference material (External Papers) and are distinct from MUSE's curated, attested evidence.

---

### Short-term Outcome

**Japanese**: 短期アウトカム

Immediate changes in knowledge, attitudes, skills, or behavior that result from Outputs. Short-term Outcomes are the first measurable effects that participants or target populations experience after an intervention is delivered. They are typically observed within weeks or months of the intervention and serve as leading indicators that the program is on track toward longer-term Intermediate Outcomes and Impact.

---

### Theory of Change

**Japanese**: セオリー・オブ・チェンジ

A methodology for planning, implementing, and evaluating social interventions. A Theory of Change articulates the assumptions underlying a program by mapping out the complete causal pathway from Activities to Impact, identifying what needs to happen at each stage and why. In MUSE, a Logic Model is the visual expression of a Theory of Change, and Evidence Cards are used to validate each causal assumption with empirical research.

---

### Wallet

**Japanese**: ウォレット

A cryptocurrency wallet used to sign and submit blockchain transactions in MUSE. Users connect their wallet (via RainbowKit) to perform on-chain operations such as creating EAS attestations or minting Hypercerts. The wallet holds the private key needed to authorize transactions and pay Gas Fees. MUSE supports standard Ethereum-compatible wallets (e.g., MetaMask).
