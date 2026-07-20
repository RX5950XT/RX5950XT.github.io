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

## 設計方向
- 無彩度底；語系標籤帶色；深色 ambient 避紫
- 深色小字：`--text-2 #c5c5cd`、`--text-3 #9a9aa4`（glass 上可讀）
- Glass：`backdrop-filter` + 高光 + rim；reduced-transparency fallback
- 選取：半透明 `::selection`；icon 共用 `LINK_ICONS`
- 滾動條：`--scroll-thumb/hover/track` 深淺色 token；全站 + `.plate` 自訂

## 左邊 plate
- **bio**：並列列表（含 quant research／量化研究）+ Agent + TAD 連結
- **rig**（`DATA.rig`）：CPU Ryzen 7 5700X · GPU RTX 3070 Ti FE · RAM DDR4 3200 64GB  
  許願句 en/zh 在 `DATA.ui.rigWish`（DGX Spark）
- **tools**：對話四鈕同一排 Grok→Claude→ChatGPT→Gemini；安裝 4 項無編號（CC→Codex→Grok Build→Antigravity）
- Profile links 2×2：GitHub | HF / X | Discord
- Desktop sticky plate 有 `max-height` + 內部 scroll
- 可點元素：`--action-*` token（深淺色）；rest 較明顯、hover 抬升＋邊框＋陰影（link / chip / copy / card-link / row / bio a）

## 預覽
```powershell
npx --yes serve -l 8137 .
```

## more 順序
1. calcrux → 2. VoiceInk → 3. FJU-TronClass-MCP → chimera → rolling-around

## models 順序
1. silicon-based-girlfriend（文末註 V2 準備中）→ 2. digital-twin

## 首次造訪預設
- **時鐘**：瀏覽器系統時區（`Intl` / `getTimezoneOffset`），非 GPS 定位
- **語言**：`navigator.languages` 含 `zh*` → 繁中，否則英文；手動後寫 `localStorage.lang`
- **主題**：首次跟 OS `prefers-color-scheme`；手動後寫 `localStorage.theme`，之後以手動為準

## 注意
- light ambient 偏藍紫（使用者保留）
- 頭貼 URL 在 `index.html`（非 DATA）；`DATA.handle` 僅給右鍵選單標題

## 近期
- 右邊 **ESP32-CAM Remote Monitor**：改為板端 TinyML／TFLite Micro 人物偵測（移除 OpenRouter 雲端視覺）；tags `TinyML`；cache `?v=20260720b`
- 重寫 **PCPriceProxy** 中英文描述：三家比價、同型一卡
- 靜態資源 cache-bust：`styles.css` / `data.js` / `main.js` 帶 `?v=`；改檔必 bump
