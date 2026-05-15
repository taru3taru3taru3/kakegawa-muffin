# KAKEGAWA Muffin — Project Guide

## Project Overview

架空のマフィン屋「KAKEGAWA Muffin」のランディングページ。
実在店舗 OZ MUFFIN のInstagramを参考に、モダン・スタイリッシュな雰囲気でデザインした静的サイト。

## File Structure

```
eat-sample/
├── index.html        # HTML マークアップ
├── style.css         # 全スタイル（変数・リセット・各セクション・レスポンシブ）
├── main.js           # JS（ナビスクロール・ハンバーガーメニュー・フェードイン）
├── CLAUDE.md         # このファイル
├── design.md         # デザイン仕様
└── screenshot/       # 参考画像（参照専用・編集不可）
    ├── screenshot1.png  # 看板: OZ MUFFIN オレンジアクリル
    ├── screenshot2.png  # 外観: MUFFIN & COFFEE
    ├── screenshot3.png  # 店内メニューボード（白タイル・額縁）
    ├── screenshot4.png  # メニューカード 9種
    └── screenshot5.png  # グレー細線ロゴ
```

## Tech Stack

- **HTML / CSS / JS** のみ（フレームワーク・バンドラー不使用）
- **Google Fonts**: Playfair Display, DM Sans, Noto Serif JP
- 画像素材なし — イラストはすべて SVG で記述

## Sections

| ID | セクション | 背景色 |
|----|-----------|--------|
| `#hero` | ヒーロー（キャッチコピー・マフィンビジュアル） | `#FAF6F0` |
| `#concept` | ブランドコンセプト・3つの柱 | `#1C1510`（ダークエスプレッソ） |
| `#menu` | メニューグリッド 9品 | `#FAF6F0` |
| `#access` | アクセス・営業情報 | `#FFFFFF` |
| `footer` | フッター | `#1E1A16` |

## Key Implementation Notes

- **SVG symbol**: メニューカードのマフィンイラストは `<symbol id="muf">` で定義し `<use href="#muf">` で再利用
- **IntersectionObserver**: `.fu` クラスの要素がビューポートに入ると `.vis` を付与してフェードアップ
- **Nav scroll**: `scrollY > 50` で `#nav` に `.solid` クラスを付与（背景ブラー表示）
- **Responsive breakpoints**: 900px（メニュー2列）、768px（1列・縦積みレイアウト）

## Development

ファイルをブラウザで直接開いて確認する（サーバー不要）。

```
index.html をブラウザにドラッグ＆ドロップ
```

変更後の確認ポイント:
1. ナビのスクロール変化（背景ブラー）
2. ハンバーガーメニュー（768px以下）
3. メニューカードのホバーエフェクト
4. フェードインアニメーション（スクロール）
5. モバイル表示（375px・768px）
