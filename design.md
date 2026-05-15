# KAKEGAWA Muffin — Design Specification

## Brand Concept

架空の店舗「KAKEGAWA Muffin」。静岡県掛川市を舞台に、手づくりのマフィンと丁寧なコーヒーを提供するカフェ。
**モダン・スタイリッシュ**でありながら、温かみのある素朴さを同居させることがデザインの核。

---

## Color Palette

| 変数名 | カラーコード | 用途 |
|--------|------------|------|
| `--bg` | `#FAF6F0` | ページ背景（温かみのあるクリーム白） |
| `--surface` | `#FFFFFF` | カード・ACCESS セクション背景 |
| `--orange` | `#F07520` | メインアクセント（CTA・ボーダー・アイコン） |
| `--orange-lt` | `#FF9A5C` | グラデーション用ライトオレンジ |
| `--brown` | `#8B6340` | ウッドテクスチャのアクセント色 |
| `--text` | `#1E1A16` | 本文・フッター背景 |
| `--muted` | `#8A7968` | サブテキスト・説明文 |
| `--border` | `#EDE5D8` | 区切り線・カードボーダー |
| — | `#1C1510` | CONCEPT セクション背景（ダークエスプレッソ） |

---

## Typography

| 用途 | フォント | 設定 |
|------|---------|------|
| 英字見出し・ロゴ | **Playfair Display** | serif, 400/600/700, italic あり |
| 本文・UI テキスト | **DM Sans** | sans-serif, 300/400/500 |
| 日本語テキスト | **Noto Serif JP** | serif, 300/400/600 |

- 英字見出しのサイズは `clamp()` でレスポンシブ対応
- 日本語は `letter-spacing: 0.1em` 前後でゆとりを確保

---

## Layout

### Grid System

- コンテンツ最大幅: `max-width: 1080px`（Hero のみ `1200px`）
- セクションの横 padding: `clamp(1.25rem, 5vw, 4rem)`（画面幅に応じて可変）

### Breakpoints

| ブレークポイント | 変更内容 |
|---------------|---------|
| `≤ 900px` | メニューグリッド 3列 → 2列 |
| `≤ 768px` | ナビを非表示・ハンバーガー表示<br>Hero を縦積み・中央揃え<br>メニューグリッド 1列<br>ACCESS を縦積み<br>CONCEPT ピラー 1列 |

---

## Visual Elements

### Hero Section

- 右側: オレンジのグラデーション円（`radial-gradient`）+ 二重リング装飾
- 背景: 微細なウッドグレイン（`repeating-linear-gradient` 2軸）
- 背景テキスト: "KAKEGAWA" を `clamp(5rem, 16vw, 14rem)` で超大文字・透明ストローク

### Concept Section

- 背景: `#1C1510`（ダークエスプレッソ）
- 背景テキスト: "CONCEPT" を超大文字・センター配置・透明ストローク（`rgba(240,117,32,.06)`）
- 3本の柱: アイコン円（オレンジ枠＋点線外リング）+ 番号 + 英語ラベル + 日本語タイトル

### Menu Cards

- 9枚のカード、各フレーバーに合わせたグラデーション背景
- ホバー: `translateY(-7px)` + シャドウ + オレンジの上ボーダー表示

| # | フレーバー | グラデーション |
|---|-----------|--------------|
| 1 | プレーンバター | `#F5D070 → #E8A830` |
| 2 | アールグレイ&オレンジ | `#B0C4D8 → #7898B8` |
| 3 | ダブルチョコレート | `#6B3520 → #3D1A08` |
| 4 | ブルーベリー&クリームチーズ | `#8E6BAE → #5C3D8A` |
| 5 | キャラメルナッツ | `#D4822A → #A05010` |
| 6 | 抹茶あずき | `#7DAA6E → #4D7A3E` |
| 7 | レモンポピーシード | `#EDD84A → #C8A820` |
| 8 | バナナウォルナット | `#E8C86A → #C0963A` |
| 9 | 季節のフルーツ（限定） | `#F0A0A0 → #D06080` |

---

## Animation

### Fade-up on Scroll

- クラス `.fu` を付与した要素が `IntersectionObserver`（threshold: 0.12）でビューポートに入ると `.vis` が付与される
- `opacity: 0 → 1` + `translateY(28px → 0)` を `0.7s ease` でトランジション
- `.fu-d1` 〜 `.fu-d9` で `transition-delay` を `0.08s` 刻みで設定（カード等の段違い表示）

### Nav Scroll Effect

- `scrollY > 50` で `#nav` に `.solid` クラスを付与
- 背景: `rgba(250,246,240,0.92)` + `backdrop-filter: blur(14px)`
- 下ボーダー: `1px solid var(--border)`

### Hover Effects

- CTA ボタン: `translateY(-2px)` + 背景色ダーク化 + 矢印 `translateX(4px)`
- IG ボタン: 背景塗りつぶし（オレンジ）+ テキスト白
- フッター SNS アイコン: ボーダーオレンジ + 薄オレンジ背景

---

## Store Information (Fictional)

| 項目 | 内容 |
|------|------|
| 店名 | KAKEGAWA Muffin |
| キャッチ | MUFFIN & COFFEE |
| 所在地 | 静岡県掛川市〇〇 X-X-X（プレースホルダー） |
| 営業時間 | OPEN 8:00 — 18:00 |
| 定休日 | 毎週火曜日 |
| Instagram | @kakegawa_muffin（架空） |

---

## Reference

参考: Instagram [@oz_muffin_2025](https://www.instagram.com/oz_muffin_2025)（実在店舗・参照のみ）
スクリーンショット: `screenshot/` フォルダ内（編集不可・参照専用）
