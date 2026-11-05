---
sidebar_position: 1
title: 開発者向けドキュメント
description: MUSEを拡張するエンジニア向けの技術ノート。
---

# 開発者向けドキュメント

このセクションは、MUSEの内部で何が起きているのか、期待どおりに動かないときはどこを見ればよいのかを知りたいエンジニア向けです。

## MUSEの構成

- **フロントエンド**：[muse リポジトリ](https://github.com/beaconlabs-io/muse)。キャンバス、エビデンスのページ、ワークスペースとアカウントの画面を描画するNext.jsアプリケーションです。AIのコードは含みません。
- **バックエンドサービス**：フロントエンドが呼び出す独立したHTTPサービスです。AI生成（ロジックモデルと測定レシピ。SSEでストリーミング）、ログイン、ロジックモデルの保存、バージョン履歴、共有を担います。
- **エビデンス**：[evidence リポジトリ](https://github.com/beaconlabs-io/evidence)。MDX形式の研究エビデンスをCIで検証し、IPFSにアップロードし、EASでアテストします。フロントエンドは `@beaconlabs-io/evidence` というnpmパッケージとして利用します。

## より深い情報の参照先

詳しいアーキテクチャノートは、museリポジトリの `docs/` 配下にあります。

- `docs/react-flow-architecture.md`：キャンバス実装、エビデンスエッジ、ダイアログUX
- `docs/frontend-map.md`：キャンバス以外のコンポーネントとカスタムフック
- `docs/api-routes.md`：フロントエンドが呼び出すHTTPエンドポイント
- `docs/evidence-workflow.md`：エビデンスの投稿とアテステーション
- `docs/setup.md`：ローカル環境のセットアップと環境変数

開発者ドキュメントはまだ小さな規模です。MUSEを利用、拡張していて、ここにない情報が必要になった場合は、[beaconlabs-io/muse-docs](https://github.com/beaconlabs-io/muse-docs) にPRを送っていただけると、次の人が同じことを調べ直さずに済みます。
