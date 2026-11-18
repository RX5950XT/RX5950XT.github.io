# AGENTS.md — rx5950xt.github.io

靜態 GitHub Pages 個人作品集（無 framework）。

- 檔案：`index.html` · `styles.css` · `main.js` · `data.js` · `favicon.png` · `.nojekyll`
- Repo：`https://github.com/RX5950XT/RX5950XT.github.io`（public，從 `main` 分支 `/` 部署至 `https://rx5950xt.github.io/`）。
- 內容資料一律改 `data.js`；樣式／互動分別在 `styles.css` / `main.js`。

> 本檔為專案規則與開發規範正文；`CLAUDE.md` 僅作相容入口並連回本檔。

---

## 溝通規範（必讀）

使用者口語對應版面（支援「上面／下面」或沿用「左邊／右邊」）：

| 說法 | 指什麼 | DOM / 程式 |
|------|--------|------------|
| **上面（或左邊）** | 個人資料那一塊（Hero Plate） | `.plate`：粒子頭貼 `#portrait`、時鐘 `#plateClock`、handle、tagline、`.plate-split`（左欄 `#bio`＋`#links`、右欄本機配置 `#rig`） |
| **中段獨立展示** | 跨欄獨立作品與系列模型區 | `#flagship`（`AxonDeck` 全寬旗艦卡）、`#series`（`silicon-based-girlfriend` 三代時間軸卡） |
| **下面（或右邊）** | 作品輸出那一塊 | `.output`：頂端 sticky 主題導航 `#topics`＋分組作品 grid `#work`＋頁尾 `#foot` |

補充：

- **版面**：全頁單一滾輪上下流動（無雙滾輪）。
- **右鍵選單**：自訂玻璃選單 `#ctx`（`Shift` + 右鍵保留瀏覽器預設選單）。
- **右下 chrome**：`#chrome` 固定右下角圓形浮動鈕（日／夜主題切換＋中／EN 語系切換）。
- **全域**：`.sky` 天空背景（深色＝三層星點＋流星＋點擊 `.meteor-shot`；淺色＝太陽＋雲朵，無獨立星空開關）、ambient／pointer 光、trail、cursor、選取反白、favicon、`#chrome` 等跨區元素。

---

## 語言與回覆

- 一律繁體中文（臺灣用語）；技術專有名詞可保留英文。
- 回覆精簡，只講結果；能直接做完就做完，不要叫使用者自己操作。
- 完成前自行驗證（語法檢查、必要時本機 serve 與瀏覽器預覽）。

---

## 架構與實作速查

| 區塊 | 選擇器 | 資料來源／行為 |
|------|--------|----------------|
| 上方 plate | `.plate` / `#bio` `#links` `#rig` | `DATA` + `DATA.ui[lang]`；頭貼取樣 `favicon.png` 繪製於 `#portrait`（固定於 handle 左邊，靜止即停 RAF）；`.plate-split` 在 `≥900px` 左右並排、窄螢幕上下疊；`#rig` 含 `DATA.rig.specs`（`Array` 值直向多行堆疊）＋許願句 `rigWish` |
| 旗艦展示 | `#flagship` | `DATA.flagship`（`AxonDeck`）：全寬上下架構（簡介＋標籤 → 全寬 2×2 `.flagship-pillars` → 底部連結與更新時間） |
| 系列展示 | `#series` | `DATA.series`（`silicon-based-girlfriend`）：全寬三代連續時間軸卡（寬容器三欄 `→` 串接、窄容器 `↓` 堆疊）；頂部顯示系列總下載量、各代保留即時 HF 下載數與按鈕 |
| 主題導航 | `#topics` | 跳轉錨點（`#t-<topic>`）＋捲動高亮（`spyTopics()`）；分組順序與名稱依 `DATA.ui[lang].topics`：`agent`（`For Hermes Agent`）→ `infra`（`AI Infra & Models`）→ `app`（`Apps`）→ `'3dp'`（`3D Printing`）→ `other`（`Other`），中英文標題統一為英文 |
| 作品 grid | `#work` | 每組為獨立 `.group-grid`（桌面 6 欄、`≥560px` 2 欄、窄螢幕 1 欄）；**禁用 `grid-auto-flow: dense`**（會把卡片吸到別組標題上方）。`other` 組（`#group-other`）預設收起，點擊標題或 `#topics` 連結可展開 |
| 排組與配寬 | `groups()` / `packGroup()` | 組內順序：`parts` 寬卡最前 → `DATA.projects` → `DATA.more`（`infra` 另接 `DATA.models`）。依 `cardWeight()` 與語系門檻計算 `baseSpan`（2／3／4／6 欄），自動補滿整列（尾端三張併 `2+2+2`、雙卡列字重差距 `<1.4×` 平衡為 `3+3`） |
| 卡片變體 | `projectCard()` / `pairCard()` / `modelCard()` | `parts:[…]`＝雙倉庫並排卡；`extra:[{url,en,zh}]`＝額外連結鈕（支援 `repoAfter:true` 讓 `GitHub` 排在最後）；`demo` 按鈕統一顯示 `Web`；含 `short`＋`img` 的卡片收合長文於 `<details class="card-more">` 並可用 `#zoom` 放大；標籤自動含程式語言，自訂標籤不設上限但須一排放得下或兩排不留孤兒 |
| 右鍵選單 | `#ctx` | `DATA.links` + `LINK_ICONS`，Email 項目旁附複製鈕 |

- **首次造訪預設**：語言偵測 `navigator.languages` 含 `zh*` → `zh`（`zh-Hant`），否則 `en`，手動切換寫入 `localStorage.lang`；主題跟隨系統 `prefers-color-scheme`，手動切換寫入 `localStorage.theme`（支援 View Transitions 圓形擴散，320–620ms）。
- **連結 icon**：`LINK_ICONS`（GitHub、Hugging Face、Email、X、Android Testers）；凡 GitHub／Hugging Face 按鈕一律帶 logo（`linkIcon()`）。
- **即時數據**：Hugging Face `downloadsAllTime` 覆蓋模型與系列總下載數並進場 `countUp()`；GitHub `pushed_at` 顯示「N 天前更新」；API 失敗時保留 `data.js` 快照。

---

## 設計與文案慣例

- **色彩與主題**：無彩度底；卡片圓點與 hover 邊框光依主題色（`TOPIC_COLOR`：`app #4c9aff`、`agent #a78bfa`、`infra #22d3ee`、`3dp #fb7185`、`other #94a3b8`；旗艦卡專用 `#f59e0b`）；深色 ambient 避紫。
- **玻璃與無障礙**：Glass 採 `backdrop-filter` + 頂緣高光 + rim；須保留 `prefers-reduced-transparency`、`prefers-contrast`、`prefers-reduced-motion` fallback。
- **互動與字級**：可點元素使用 `--action-*` 深淺色 token；選取使用半透明 `::selection`；基準字級 `112.5%`（`≤520px` 回 `100%` 防止手機單行膠囊換行）；避免大面積即時 `filter:blur`，pointer/trail 須 idle 可停。
- **文案品質**：
  - 繁中嚴守臺灣用語，禁用中國用語與生硬簡寫；英文避免 em dash（`—`）與硬湊句。
  - 所有卡片介紹與標籤必須對照對應 GitHub / Hugging Face 倉庫實際內容撰寫，僅保留與專案功能直接相關的白話資訊，不寫無關或過度底層的內部參數、函式庫名稱與測試數據。

---

## 工作原則與驗證

- 改動範圍盡量小；內容只動 `data.js`，行為動 `main.js`，樣式動 `styles.css`。
- 規則與開發規範集中維護於 `AGENTS.md`，`CLAUDE.md` 只連回本檔；不建立 `CONTEXT.md` 或 `tasks/` 資料夾。
- 完成前必測：
  - 語法檢查：`node --check data.js`、`node --check main.js`、`git diff --check`。
  - **開本機預覽（做完必做）**：改動完成後確認開啟本機預覽（`npx --yes serve -l 8137 .`，提供 `http://localhost:8137/`）；必要時以 Playwright 驗證桌面與手機寬度、深淺色、雙語切換、無溢出／JS 錯誤。
- **提交與推送流程（固定單一乾淨提交）**：
  - **等使用者明確指示「推」再推送**，未收到指令前不自行 push。
  - **單一乾淨提交**：本倉庫 `main` 固定維持 **唯一 1 筆** commit（`feat: portfolio site`）；推送前確認已同步更新 `index.html` 三處 `?v=`（若有改動 `styles.css`／`data.js`／`main.js`），再執行 `git add -A && git commit --amend --no-edit` 併入原提交，並用 `git push --force-with-lease origin main` 推送。
  - **推完檢查部署並保留單一紀錄（必做）**：推送後立刻追蹤 GitHub Pages workflow 與 Pages API（`gh run list`／`gh run watch`、`gh api repos/RX5950XT/RX5950XT.github.io/pages` 與 `pages/builds/latest`），確認 `status: "built"` 無錯誤，實測 `https://rx5950xt.github.io/` 回應 `HTTP 200` 及線上資源版號正確；確認成功後，透過 `gh api` 刪除較舊的 `deployments` 紀錄，只保留最新一筆（`https://github.com/RX5950XT/RX5950XT.github.io/deployments`）。

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
| **格式** | `YYYYMMDD` + 當日序字母（`a`→…→`z`→`za`→`zb`…）；跨日重從 `a` |
| **範圍** | 三處 `?v=` 必須完全一致，不可只改一處 |
| **不 bump 的後果** | 訪客仍吃舊 CDN／瀏覽器快取，畫面與資料不同步 |

每次任務結束、commit / push 前自查：`index.html` 三處版號是否已同步更新。
