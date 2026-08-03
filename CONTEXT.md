# CONTEXT — rx5950xt.github.io

## 專案
靜態 GitHub Pages 個人作品集（無 framework）。
`index.html` · `styles.css` · `main.js` · `data.js` · `favicon.png`  
規範：`CLAUDE.md` ⇄ `AGENTS.md`（同步）

## 部署
- Repo：https://github.com/RX5950XT/RX5950XT.github.io（public）
- 網址：https://rx5950xt.github.io/
- 方式：GitHub Pages · Deploy from branch `main` · `/`（root）· `.nojekyll`
- 更新：`git add` → `git commit` → `git push origin main`

## 溝通（使用者約定）
- **左邊**＝`.plate` 個人資料（含 `#rig` 本機配置、`#tools`）
- **右邊**＝`.output` 專案（projects / more / models）
- **時鐘**＝`.plate-clock` 在左欄 plate 頭列右上，與頭貼（左上）`space-between` 對稱；手機／桌面同一套  
- **chrome**＝`#chrome` 僅 theme + lang，右下角固定圓形圖示鈕（日/月、中/EN）；全視窗一致
- **右鍵選單**＝`#ctx`（≠ 右邊）
- **星空**＝`#skyToggle`（chrome 最左）：加 `html.starry`，`.sky` 三層星點（tile 尺寸互質、各自 offset）＋6 道循環流星、強制 dark、暫時收起深淺鈕；星空下左鍵點擊生成一次性 `.meteor-shot`（animationend 自刪）；記在 `localStorage.sky`

## 設計方向
- 無彩度底；語系標籤帶色；深色 ambient 避紫
- 深色小字：`--text-2 #c5c5cd`、`--text-3 #9a9aa4`（glass 上可讀）
- Glass：`backdrop-filter` + 高光 + rim；reduced-transparency fallback
- 選取：半透明 `::selection`；icon 共用 `LINK_ICONS`
- 滾動條：`--scroll-thumb/hover/track` 深淺色 token；全站 + `.plate` 自訂

## 左邊 plate
- **bio**：並列列表（含 quant research／量化研究）+ Agent + TAD 連結
- **taste**（`DATA.taste`）：bio 下方，無標題，沿用 `.rig-list` 兩列（喜歡／不喜歡）
- **rig**（`DATA.rig`）：CPU Ryzen 7 5700X · GPU 一鍵兩行（上 5060 Ti 16GB、下 3070 Ti FE）· RAM DDR4 3200 64GB  
  許願句 en/zh 在 `DATA.ui.rigWish`（DGX Spark）
- **tools**（標題「使用它們」／`Use them`）：對話四鈕同一排 Grok→Claude→ChatGPT→Gemini；安裝 4 項無編號（CC→Codex→Grok Build→Antigravity）
- Profile links 2×2：GitHub | HF / X | Discord
- Desktop sticky plate 有 `max-height` + 內部 scroll
- 可點元素：`--action-*` token（深淺色）；rest 較明顯、hover 抬升＋邊框＋陰影（link / chip / copy / card-link / row / bio a）

## 預覽
```powershell
npx --yes serve -l 8137 .
```

## more 順序
1. calcrux → 2. FJU-TronClass-MCP → chimera → rolling-around
- VoiceInk 已升格到 projects（第 4 張，Portfolio Visualizer 之後）：一行摘要會被 `.row-desc` 截斷，改走卡片。

## models 順序
1. silicon-based-girlfriend（文末註 V2 準備中）→ 2. digital-twin → 3. LinguaForge-Qwen3.5-0.8B
- 下載數截至 2026/8/4：silicon-based-girlfriend 424 · digital-twin 68 · LinguaForge 153
- LinguaForge 卡片並列 Hugging Face 模型與 GitHub 訓練／評測程式碼

## 首次造訪預設
- **時鐘**：瀏覽器系統時區（`Intl` / `getTimezoneOffset`），非 GPS 定位
- **語言**：`navigator.languages` 含 `zh*` → 繁中，否則英文；手動後寫 `localStorage.lang`
- **主題**：首次跟 OS `prefers-color-scheme`；手動後寫 `localStorage.theme`，之後以手動為準

## 注意
- light ambient 偏藍紫（使用者保留）
- 頭貼 URL 在 `index.html`（非 DATA）；`DATA.handle` 僅給右鍵選單標題

## 版號（cache-bust）
- `index.html` 三處 `?v=` 同號；改 css/data/main 後、**push 前**必 bump
- 格式 `YYYYMMDDx`（當日序 a/b/c…）；詳見 `CLAUDE.md` / `AGENTS.md`「靜態資源版號」
- 目前：`20260804a`

## 近期
- 卡片 hover／focus-within 亮一圈：邊框＋外光暈用該卡的 `--lang`（models 為 HF 黃 `#ffd21e`），疊在 `var(--glass-shadow)` 之上；`prefers-reduced-transparency` 區塊改由 `:root[data-theme]` 覆寫 `--glass-shadow`，讓光暈與 fallback 陰影同步（`:root` 特異度輸給 `:root[data-theme="dark"]`，必須帶屬性）。
- 專案慣例：不建立或維護 `tasks/` 資料夾。
- Projects／Models 按鈕文案對齊：原始碼統一為 `GitHub`；線上試用為中文「試用」、英文 `demo`。
- Models：新增 LinguaForge 繁中／英／日六向翻譯模型；`DATA.models[].repo` 可選並列 GitHub。
- 手機版：`.output` 在 ≤959px 加 `margin-top: 48px`，專案與上方 plate 拉開空隙
- rig：GPU 標籤一次，值為陣列（上 5060 Ti 16GB、下 3070 Ti FE）
- 文件：CLAUDE / AGENTS 補齊版號 bump 專節
