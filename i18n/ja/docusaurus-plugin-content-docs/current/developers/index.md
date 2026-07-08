---
sidebar_position: 1
title: 開発者向けドキュメント
description: MUSEを拡張するエンジニア向けの技術ノート。
---

# 開発者向けドキュメント

このセクションは、MUSEの内部で何が起きているのかを理解したいエンジニア向けです。エージェントがどのように配線され、品質がどのように測定され、期待どおりに動かないときはどこを見ればよいのか、といった内容を扱います。

ここで扱う範囲は、[muse リポジトリ本体のドキュメント](https://github.com/beaconlabs-io/muse) より意図的に狭くなっています。深いアーキテクチャノートはmuseリポジトリの `docs/` 配下（`docs/mastra-agents.md`、`docs/react-flow-architecture.md`、`docs/api-routes.md` など）に置かれています。このセクションでは、ユーザー向けに公開できるほど安定した部分だけを収録します。

## 現在の項目

- **[Agent Scorers](./agent-scorers.md)** — MUSEがMastra Evalsのスコアラーフレームワークを使って、エージェント出力をツール呼び出し正確性・プロンプト整合性・回答関連性の観点で採点する仕組みと、Mastra Studioでスコアを確認する方法。

## より深い情報の参照先

- museリポジトリの `mastra/CLAUDE.md` — エージェント → ツールの契約、ストレージURL、出力言語ポリシーなど、コードからだけでは読み取りにくいルールを記述
- `docs/mastra-agents.md` — エージェント＋ワークフローレイヤー（Logic Model、Evidence Search、Recipe）のアーキテクチャ
- `docs/react-flow-architecture.md` — キャンバス実装、エビデンスエッジ、ダイアログUX
- `docs/api-routes.md` — HTTPエンドポイント（フロントエンドが利用する `/api/workflow/stream` SSEインターフェイスを含む）

開発者ドキュメントはまだ小さな規模です。MUSEを利用・拡張していて、ここでカバーされていない情報を必要とした場合は、[beaconlabs-io/docs-muse](https://github.com/beaconlabs-io/docs-muse) にPRを送っていただけると、次の人が同じことを調べ直さずに済みます。
