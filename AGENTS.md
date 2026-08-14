# AGENTS.md — rx5950xt.github.io

靜態 GitHub Pages 個人作品集（無 framework）。  
檔案：`index.html` · `styles.css` · `main.js` · `data.js` · `favicon.png`  
內容資料一律改 `data.js`；樣式／互動分別在 `styles.css` / `main.js`。

> 本檔與 `CLAUDE.md` 對齊；改一邊時同步另一邊。

---

## 溝通規範（必讀）

使用者口語對應版面，支援「上面／下面」（一頁式上下架構）或沿用「左邊／右邊」：

| 說法 | 指什麼 | DOM / 程式 |
|------|--------|------------|
| **上面（或左邊）** | 個人資料那一塊（Hero Plate） | `.plate`：頭貼、時鐘、handle、tagline、bio、taste、links、**本機配置**（`#rig`）、**工具**（`#tools`） |
| **下面（或右邊）** | 作品輸出那一塊 | `.output`：Projects 卡、More 列表、Models 卡、footer |

補充：

- **版面**＝全頁單一滾輪上下流動（無雙滾輪）；寬螢幕下 `#rig` 與 `#tools` 透過 `.plate-grid` 兩欄對稱展開。
- **右鍵選單**＝自訂玻璃選單 `#ctx`。
- **右上 chrome**＝`#chrome`：星空切換 + 深淺色 + 語言切換（固定浮層，屬全域）。
- **全域**＝ambient／pointer 光、trail、cursor、背景、選取反白、favicon、`#chrome` 等跨欄元素。

---

## 語言與回覆

- 一律繁體中文（臺灣用語）；技術術語可保留英文。
- 回覆精簡，只講結果；能直接做完就做完，不要叫使用者自己操作。
- 完成前自行驗證（語法檢查、必要時本機 serve 預覽）。

---

## 架構速查

| 區塊 | 選擇器 | 資料來源 |
|------|--------|----------|
| 上方 plate | `.plate` / `#links` `#bio` `#taste`… | `DATA` + `DATA.ui[lang]` |
| plate 選單 | `#plateMenu` / `.plate-panels` 展開切換選單 | 包裹 `#panelLinks`、`#panelRig`、`#panelTools` |
| 本機配置 rig | `#rig` 本機規格＋ DGX 許願 | `DATA.rig` + `DATA.ui` 文案 |
| 工具 tools | `#tools` 對話四鈕同一排＋安裝指令複製 | `DATA.tools` + `DATA.ui` 文案 |
| 右上 chrome | `#chrome` 星空／theme／lang | `DATA.ui` + clock JS |
| 下方 projects | `#projects` | `DATA.projects` |
| 下方 more | `#more` | `DATA.more` |
| 下方 models | `#models` | `DATA.models`（模型可用 `repo` 並列 GitHub） |
| 右鍵選單 | `#ctx` | `DATA.links` + `LINK_ICONS` |

- 主題：`data-theme` + `localStorage.theme`
- 語系：`lang` en | zh，文案在 `DATA.ui`
- 品牌 icon：`LINK_ICONS`（GitHub、Hugging Face、Local.ai、X、Discord）

---

## 設計慣例

- 無彩度底；語系標籤可帶色；ambient 近中性（深色避免偏紫）。
- Glass：`backdrop-filter` + 頂緣高光 + rim；`prefers-reduced-transparency` 要有可讀 fallback。
- 可點元素：`--action-*` 深淺色 token；rest 可辨、hover 抬升＋邊框＋陰影。
- 選取：`::selection` 半透明洗色，非瀏覽器藍。
- 效能：避免大面積即時 `filter:blur`；pointer/trail 要 idle 可停。

---

## 工作原則

- 改動範圍盡量小；內容只動 `data.js`，行為動 `main.js`，樣式動 `styles.css`。
- `CLAUDE.md` 與 `AGENTS.md` 內容對齊；任務完成後精簡更新 `CONTEXT.md`（交接用）。
- 本專案不建立或維護 `tasks/` 資料夾。
- Commit：`<type>: <description>`（feat / fix / refactor / docs / chore / perf…）。
- 預覽：`npx --yes serve -l 8137 .`

---

## 靜態資源版號（cache-bust，必做）

`index.html` 以 query string 強制刷新快取，三處**同一版號**：

```html
<link rel="stylesheet" href="styles.css?v=YYYYMMDDx">
<script src="data.js?v=YYYYMMDDx"></script>
<script src="main.js?v=YYYYMMDDx"></script>
```

| 規則 | 說明 |
|------|------|
| **何時 bump** | 只要改了 `styles.css` / `data.js` / `main.js` 任一檔（或三者），**推送前**必 bump |
| **格式** | `YYYYMMDD` + 當日序字母（`a`→`b`→…）；跨日重從 `a` |
| **範圍** | 三處 `?v=` 必須完全一致，不可只改一處 |
| **不 bump 的後果** | 訪客仍吃舊 CDN／瀏覽器快取，畫面與資料不同步 |

每次任務結束、commit / push 前自查：版號是否已更新。

---

## 文件維護

| 檔案 | 用途 |
|------|------|
| `CLAUDE.md` | 本專案給 Claude 的規範（與 AGENTS 同步） |
| `AGENTS.md` | 給其他 AI Agent 的同一套規範 |
| `CONTEXT.md` | 近期進度／交接，保持短 |
