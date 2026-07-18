# CLAUDE.md — rx5950xt.github.io

靜態 GitHub Pages 個人作品集（無 framework）。  
檔案：`index.html` · `styles.css` · `main.js` · `data.js` · `favicon.png`  
內容資料一律改 `data.js`；樣式／互動分別在 `styles.css` / `main.js`。

---

## 溝通規範（必讀）

使用者口語對應版面，之後直接講「左邊／右邊」即可：

| 說法 | 指什麼 | DOM / 程式 |
|------|--------|------------|
| **左邊** | 個人資料那一塊 | `.plate`：頭貼、handle、tagline、bio、links、**本機配置**（`#rig`）、**工具**（`#tools`） |
| **右邊** | 專案那一塊 | `.output`：Projects 卡、More 列表、Models 卡、footer |

補充：

- **右鍵選單**＝自訂玻璃選單 `#ctx`（不是「右邊」）。
- **右上 chrome**＝`#chrome`：當地時間 + 深淺色 + 語言切換（固定浮層，屬全域）。
- **全域**＝ambient／pointer 光、trail、cursor、背景、選取反白、favicon、`#chrome` 等跨欄元素。
- 窄螢幕上下堆疊時語意不變：上＝左邊（plate），下＝右邊（output）。

回覆時優先用同一套詞，避免再寫「個人資料欄／作品輸出欄」。

---

## 語言與回覆

- 一律繁體中文（臺灣用語）；技術術語可保留英文。
- 回覆精簡，只講結果；能直接做完就做完，不要叫使用者自己操作。
- 完成前自行驗證（語法檢查、必要時本機 serve 預覽）。

---

## 架構速查

| 區塊 | 選擇器 | 資料來源 |
|------|--------|----------|
| 左邊 plate | `.plate` / `#links` `#bio`… | `DATA` + `DATA.ui[lang]` |
| 左邊 rig | `#rig` 本機規格＋ DGX 許願 | `DATA.rig` + `DATA.ui` 文案 |
| 左邊 tools | `#tools` 對話四鈕同一排＋安裝指令複製 | `DATA.tools` + `DATA.ui` 文案 |
| 右上 chrome | `#chrome` 時間／theme／lang | `DATA.ui` + clock JS |
| 右邊 projects | `#projects` | `DATA.projects` |
| 右邊 more | `#more` | `DATA.more` |
| 右邊 models | `#models` | `DATA.models` |
| 右鍵選單 | `#ctx` | `DATA.links` + `LINK_ICONS` |

- 主題：`data-theme` + `localStorage.theme`
- 語系：`lang` en | zh，文案在 `DATA.ui`
- 品牌 icon：`LINK_ICONS`（GitHub、Hugging Face、X、Discord）

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
- Commit：`<type>: <description>`（feat / fix / refactor / docs / chore / perf…）。
- 預覽：`npx --yes serve -l 8137 .`

---

## 文件維護

| 檔案 | 用途 |
|------|------|
| `CLAUDE.md` | 本專案給 Claude 的規範（與 AGENTS 同步） |
| `AGENTS.md` | 給其他 AI Agent 的同一套規範 |
| `CONTEXT.md` | 近期進度／交接，保持短 |
