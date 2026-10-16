# CONTEXT — rx5950xt.github.io

## 專案
靜態 GitHub Pages 個人作品集（無 framework）。
`index.html` · `styles.css` · `main.js` · `data.js` · `favicon.png`
規範：`AGENTS.md` 為正文，`CLAUDE.md` 為相容入口。

## 部署
- Repo：https://github.com/RX5950XT/RX5950XT.github.io（public）
- 網址：https://rx5950xt.github.io/
- 方式：GitHub Pages · Deploy from branch `main` · `/`（root）· `.nojekyll`
- 更新：`git add` → `git commit` → `git push origin main`
- 預覽：`npx --yes serve -l 8137 .`

## 溝通（使用者約定）
- **左邊／上面**＝`.plate` 個人資料（含 `#rig`）；**右邊／下面**＝`.output` 作品
- **時鐘**＝`.plate-clock`，plate 頭列右上，與頭貼（左上）對稱
- **chrome**＝`#chrome` 右下角固定圓形鈕（日/月、中/EN）；theme 鈕文字＝目標主題（白天／星空）
- **右鍵選單**＝`#ctx`（≠ 右邊）
- **天空**＝`.sky` 依 `data-theme`：dark＝三層星點＋流星（點擊生成 `.meteor-shot`）；light＝淺藍漸層＋`.sun`＋4 朵 `.cloud`。無獨立星空開關

## 設計方向
- 無彩度底；**卡片顏色依分類**（`TOPIC_COLOR`：圓點＋hover 邊框光，分組標題前同色圓點）；深色 ambient 避紫（light 偏藍紫，使用者保留）
- 深色小字 `--text-2 #c5c5cd`、`--text-3 #9a9aa4`；glass＝`backdrop-filter`＋高光＋rim，有 reduced-transparency fallback
- 可點元素用 `--action-*` token；選取為半透明 `::selection`；滾動條 `--scroll-*` token
- 凡 GitHub／Hugging Face 按鈕一律帶 logo（`linkIcon()` + `LINK_ICONS`）

## 左邊 plate
- **bio**：並列列表＋Agent 連結；bio 與 `index.html` meta description 都列「由 Agent 驅動的 3D 列印參數化建模」
- **taste**（`DATA.taste`）：喜歡（藍）／不喜歡（紅），項目以 ` · ` 分隔、畫成膠囊（`paintTaste()`）
- **rig**（`DATA.rig`）：順序 CPU → MB → RAM → GPU → OS → AUD → VR → 3DP；Ryzen 7 5700X · GIGABYTE X570 Aorus Pro · DDR4 96GB · 5060 Ti 16GB／3060 Ti 8GB／3070 Ti FE · Windows + Android；許願句 `DATA.ui.rigWish`
- **plate 分頁**：連結／本機配置，hover／聚焦／點擊切換（tablist）；≤480px 平均分寬。「使用它們」已移除，這些入口整合於 AxonDeck。
- 頭貼 URL 在 `index.html`（非 DATA）；`DATA.handle` 只給右鍵選單標題

## 右邊作品（`#work` 單一 grid）
- 順序照 `DATA.ui.topics`，每組前有 `.group-title`：
  **工具**（AxonDeck → LLM Wiki → LLM Arena）→ **給 Hermes Agent 用**（Portfolio Visualizer → PCPriceProxy → FJU-TronClass-MCP）→ **AI Infra**（Strata → Miroxen → Qwen-3.8-27B-DualGPUs → Qwen-35B-A3B → Laguna-S2.1）→ **模型** → **硬體**（just-a-submarine → ESP32-CAM）→ **3D 列印**（AI 驅動的 3D 建模 → 3DP-MATX → 3DP-TV-SpeakerHanger → 3dp-bedside-table）→ **理財**（0050 → Taiwan Lottery）→ **小工具**（calcrux → surface_optimizer）→ **小遊戲**（rolling-around）
- 組內順序：寬卡（`parts`）最前 → `DATA.projects` → `DATA.more`；要調整就搬動 `data.js` 裡的條目（例：Strata 放 projects 才排得進 Qwen 前）
- 主題 key：tools / agent / infra / hw / 3dp / money / apps / games；models 固定為 models
- **雙倉庫卡**：`more` 一筆 `parts:[{name,repo,lang,role,en,zh}]`，`pairCard()` 渲染；`name` 可為 `{en,zh}`；桌面兩欄、中間一顆「+」，<560px 上下疊；各自 GitHub 鈕與更新時間
- **額外連結鈕**：`extra:[{url,en,zh}]`（AxonDeck「安裝」、LLM Wiki／calcrux「APK」，指向 `releases/latest`）；`demo` 鈕文字＝Demo／展示
- **標籤**：語言標籤自動加；自訂標籤數不設上限，依版面決定——一排放得下，或兩排時最後一排至少 2 個，不留孤兒
- **模型卡**：v2（GGUF＋LoRA＋Dataset 鈕）→ 第一代 → digital-twin → LinguaForge（並列 HF 與 GitHub）
- 即時數據：HF `downloadsAllTime` 覆蓋下載數（快照 2026/9/29：v2 GGUF 617、第一代 1628、digital-twin 123、LinguaForge 388）；GitHub `pushed_at` 顯示「N 天前更新」；API 失敗就留 `data.js` 快照
- 使用者判定完成度低而不收：chimera、stonks-agent；未收錄：llm-council、舊小工具、沒改過的 fork
- 文案依 repo 實際內容寫（FreeCAD／Strata 是依 fork 的實際改動）；rolling-around 註明用 Kimi K2.6 做、粗糙僅供測試

## 首次造訪預設
- **時鐘**：瀏覽器時區（非 GPS）；**語言**：`navigator.languages` 含 `zh*` → 繁中，否則英文，手動後寫 `localStorage.lang`
- **主題**：首次跟 OS `prefers-color-scheme`；手動後寫 `localStorage.theme`

## 實作備忘
- 粒子肖像：`#portrait` canvas 取代頭貼（取樣 `favicon.png`），靜止即停 RAF；reduced-motion 直接畫定位；換主題 `paintPortrait()` 重畫
- 主題切換用 View Transitions 圓形擴散，時長隨視窗縮放（320–620ms），不支援或 reduced-motion 直接套用
- Console 印 ASCII 頭貼（`printBanner()`）；字元刻意避開 `%`
- 模型下載數進場 count-up；`grid-auto-flow: dense` 不可用（會把卡片吸到別組標題上方）
- 瀏覽器測試：分頁在背景時 reveal 動畫不跑，測試前要把 `.reveal` 強制設 `opacity:1`

## 版號（cache-bust）
- `index.html` 三處 `?v=` 同號；改 css/data/main 後、**push 前**必 bump
- 格式 `YYYYMMDD` + 當日序字母（a…z，z 之後 za、zb…）；詳見 `CLAUDE.md` / `AGENTS.md`
- 目前：`20261017k`

## 近期
- **2026/10/17**：AxonDeck 中英文改以「每天使用的 Windows 工作中樞」定位，強調雲端 AI、Agent、本機算力、專案開發與影音創作的整合工作流程。
- **2026/10/17**：兩處複製按鈕均為純圖示（成功勾號／失敗提示），含 tooltip 與中英文無障礙名稱。右鍵選單信箱字較小、圖示同為 16px、按鈕 24px；信封、文字欄位與上下項目對齊。上方信箱一般字級，僅窄螢幕縮排以保留單行。
- **2026/10/17**：Email 改為直接顯示完整信箱且固定單行；上方連結與右鍵選單皆附並排的複製按鈕，中英文顯示成功／失敗狀態，保留 `mailto:`。
- **2026/10/17**：個人連結與右鍵選單移除 Local.ai，改為 Email（`mailto:rx.sa.31415926@gmail.com`），附信封圖示。
- **2026/10/17**：Portfolio Visualizer 移至「給 Hermes Agent 用」，中英文補上 MCP 查詢與持股／現金紀錄操作、移除過時 AI 健診介紹；AxonDeck 突顯每日主力與整合工具定位；移除 plate「使用它們」及專用資料、程式、樣式。
- 本次驗證：`node --check data.js`、`node --check main.js`、`git diff --check` 通過；Playwright／Edge 檢查 1440px／375px、中英文、深淺色、分頁鍵盤與語言／主題切換，無文字裁切、水平溢出或 JS 執行錯誤；信箱複製已實測，成功／失敗圖示及重設另經自我檢查通過。
- **2026/10/12**：VoiceInk 卡片改為 AxonDeck，更新 GitHub／安裝連結與中英文介紹；AI Infra 在 Strata 後新增 Miroxen，中英文說明依兩個專案目前 README 撰寫。
- **2026/09/30（未 push）**：移除 Token-Anxiety-Dashboard；`ai` 改名 `tools`、新增 `agent`／`games` 分類；AgentCAD_MCP＋FreeCAD 合成雙倉庫卡；Strata／FreeCAD／Laguna 說明依實際內容重寫；卡片顏色改依分類；新增 `extra` 連結鈕與 Taiwan Lottery 展示連結；標籤重整；taste 改膠囊並加「蔚藍檔案」「官僚主義」。
- **2026/09/30（已 push `7de27b7`）**：文案全面改成白話；主題列改跳轉導航（`#t-<topic>`、`spyTopics()`）；plate 改分頁；星空取代深色、淺色白天天空；淺色頭貼改墨點畫暗部。
- **2026/09/29**：粒子肖像、作品區合一、HF／GitHub 即時數據、OG meta。
