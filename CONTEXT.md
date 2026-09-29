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
- **chrome**＝`#chrome` 僅 theme + lang，右下角固定圓形圖示鈕（日/月、中/EN）；全視窗一致；theme 鈕文字＝目標主題（白天／星空，Day／Night）
- **右鍵選單**＝`#ctx`（≠ 右邊）
- **天空**＝`.sky` 依 `data-theme` 換面：dark＝三層星點（tile 尺寸互質）＋6 道循環流星，左鍵點擊生成一次性 `.meteor-shot`；light＝淺藍漸層＋右上暖色 `.sun` 光暈＋4 朵慢飄 `.cloud`（`--y/--s/--t/--d` 控制高度、大小、週期、起始偏移）。另一主題的元素 `display:none`。已無獨立星空開關、無 `localStorage.sky`

## 設計方向
- 無彩度底；語系標籤帶色；深色 ambient 避紫
- 深色小字：`--text-2 #c5c5cd`、`--text-3 #9a9aa4`（glass 上可讀）
- Glass：`backdrop-filter` + 高光 + rim；reduced-transparency fallback
- 選取：半透明 `::selection`；icon 共用 `LINK_ICONS`
- 滾動條：`--scroll-thumb/hover/track` 深淺色 token；全站 + `.plate` 自訂

## 左邊 plate
- **bio**：並列列表（含 quant research／量化研究）+ Agent + TAD 連結
- **taste**（`DATA.taste`）：bio 下方，無標題，沿用 `.rig-list` 兩列（喜歡／不喜歡）
- **rig**（`DATA.rig`）：CPU Ryzen 7 5700X · GPU 三行（5060 Ti 16GB／3060 Ti 8GB／3070 Ti FE）· RAM DDR4 96GB  
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
1. calcrux → 2. FJU-TronClass-MCP → rolling-around → surface_optimizer → AgentCAD_MCP → FreeCAD（fork）→ 3DP-TV-SpeakerHanger → 3dp-bedside-table → Token-Anxiety-Dashboard → Strata（fork）→ Laguna-S2.1
- VoiceInk 已升格到 projects（第 4 張，Portfolio Visualizer 之後）：一行摘要會被 `.row-desc` 截斷，改走卡片。
- surface_optimizer：C++ 原生 Surface Pro 7 效能／能耗優化守護程式。

## projects 順序
just-a-submarine → LLM Wiki → Portfolio Visualizer → VoiceInk → ESP32-CAM → LLM Arena →
Qwen-35B-A3B → PCPriceProxy → 0050 Buy-Point → **3DP-MATX（最後一張）**
- 3DP-MATX：全 3D 列印 microATX NAS 機殼，賣點是「由 AI Agent 驅動 FreeCAD Part CSG 建模」，Python／無 demo。使用者指定放最後。
- bio（en/zh）與 `index.html` meta description 都已列入「由 Agent 驅動的 3D 列印參數化建模」。

## 2026/8/26 對照 repo 現況做過的內容更新
- **VoiceInk**：repo 已從語音轉文字擴成「Windows 桌面 AI 工作台」（聊天／額度儀錶板／檔案轉錄／即時字幕／翻譯 TTS），描述與 tags 重寫。
- **Portfolio Visualizer**：補 LLM 健診與配息頁。
- **PCPriceProxy**：補 19 主分類語意子樹、REST API 與 Agent CLI（tags 加 `Agent CLI`）。
- **0050 Buy-Point**：補 VT 全球股票 ETF 複製實驗（tags 加 `0050 · VT`）。
- **calcrux**：補單位／貸款／匯率。
- 其餘（just-a-submarine、LLM Wiki、ESP32-CAM、LLM Arena、Qwen-35B-A3B、chimera、rolling-around、FJU-TronClass-MCP）比對 README 後描述仍準確，未動。

## models 順序
1. silicon-based-girlfriend-v2（三鈕：GGUF + LoRA + Dataset）→ 2. silicon-based-girlfriend（第一代）→ 3. digital-twin → 4. LinguaForge-Qwen3.5-0.8B
- 下載數快照截至 2026/9/29（HF downloadsAllTime）：v2 GGUF 617 · silicon-based-girlfriend 1628 · digital-twin 123 · LinguaForge 388；線上會被 HF API 即時值蓋過
- v2 卡片兩個 Hugging Face 鈕（`m.links`）：GGUF 開箱即用、LoRA 三段 adapter
- LinguaForge 卡片並列 Hugging Face 模型與 GitHub 訓練／評測程式碼

## 品牌 icon 規則
- 凡是 GitHub／Hugging Face 按鈕一律帶 logo（`linkIcon()` + `LINK_ICONS`）：
  `#links`、`#ctx`、model 卡（HF／GitHub）、project 卡的 GitHub 連結。
- `.card-link .link-ico` 樣式已存在，新增 icon 不需動 CSS。

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
- 目前：`20260930h`

## 近期
- **2026/09/30h 淺色頭貼與雲**：淺色下人像改成「墨點畫暗部」（`invert`，主題切換時重建），不再是亮部變黑點的底片效果；雲改純白＋天空漸層加深，雲才看得出來。
- **2026/09/30g 星空取代深色、淺色改白天天空**：拿掉獨立星空鈕（`#skyToggle`／`applySky`／`html.starry`／`DATA.ui.sky*`），深色＝星空；淺色新增日光＋雲的對應風格。theme 鈕文字改「白天／星空」。
- **2026/09/30f 分頁手機適配**：≤480px 三個分頁平均分寬、點擊區約 44px；≤359px 隱藏分頁圖示；分頁文字不換行。已用 390／320px 寬確認無橫向溢位。
- **2026/09/30e plate 選單改小分頁**：連結／本機配置／使用它們改為底線式分頁，滑鼠移過（pointerenter）、聚焦或點擊即切換，面板不再收合；支援左右方向鍵，ARIA 改 tablist/tab/tabpanel。
- **2026/09/30d 依 repo 實際內容重寫文案＋plate 調整**：逐一讀過 27 個 repo／模型卡後重寫 en/zh（修正不符處，如 3DP-MATX 是 24 個列印件、4 顆 3.5 吋硬碟）。bio 重寫、拿掉 Token Anxiety Dashboard 那句與 `DATA.tad`／`tadLabel`（bio 改純文字）。`.handle` 與 `.tagline` 字級縮小。
- **2026/09/30c 主題列改成跳轉導航＋AI Infra**：`#topics` 不再篩選，改成錨點（`#t-<topic>`，網址可分享）；`#work` 依 `DATA.ui.topics` 順序分組、每組前一條 `.group-title`（標題＋數量＋細線），捲動時 `spyTopics()` 亮起目前分組（`aria-current`），窄螢幕會把亮起的 chip 捲進可視範圍。拿掉「全部」。新主題 `infra`（AI Infra）：Qwen3.8-27B、Qwen-35B、Strata、Laguna。順序：AI → AI Infra → 模型 → 硬體 → 3D 列印 → 理財 → 應用。
- **2026/09/30b 文案全面重寫＋3D 列印分類**：27 張卡的 en/zh 全部改寫成白話（先講它是什麼、幫你做什麼，再給一個數字；術語換成日常說法，數據沿用原文）。新增主題 `3dp`（3D 列印）：3DP-MATX、AgentCAD_MCP、FreeCAD、3DP-TV-SpeakerHanger、3dp-bedside-table；硬體只剩 just-a-submarine、ESP32-CAM。FreeCAD-TW 改名 FreeCAD，定位是 AgentCAD 的配套（繁中化、介面精簡到只剩看模型與量尺寸）。
- **2026/09/30a 補 fork 與 dataset**：more 新增 FreeCAD-TW（RX5950XT/FreeCAD fork：繁中翻譯＋UI＋內建 AgentCAD 的安裝檔，排在 AgentCAD_MCP 後，兩者配套）與 Strata（Niko1221/Strata fork：第二張 GPU 當專家快取，排在 Laguna 前）；v2 模型卡加 Dataset 鈕（silicon-based-girlfriend-v2-dataset，2,109 筆）。其餘 fork 只 fork 沒改，不收。
- **2026/09/29c 作品區合一**：拿掉 Projects／More／Models 三段標題，全部進同一個 `#work` grid（順序 projects → models → more；more 沿用 `projectCard`，沒有 tags、一行描述）。`#topics` 變成 sticky 玻璃膠囊（窄螢幕橫向捲動），多一個「模型」主題（models 的 topic = models）；在深處點主題會捲回作品區開頭。下載數拿掉「截至日期」。
- **2026/09/29b 內容補齊＋主題篩選＋即時數據**：
  - projects 新增 Qwen3.8-27B 雙卡（排在 Qwen-35B 前）、Taiwan Lottery Study（排在 0050 後、3DP-MATX 前）；VoiceInk 補 CC 供應商切換、系統監控、Rust 重寫。
  - more 新增 3DP-TV-SpeakerHanger、3dp-bedside-table、Token-Anxiety-Dashboard、Laguna-S2.1（已封存）。第一代矽基女友卡加 Dataset 鈕。
  - 每筆 project／more 帶 `topic`（ai / hw / money / apps）；`#topics` 篩選列（`DATA.ui.topics`），切換時重播進場動畫。
  - 即時數據（`startLiveStats`）：HF `downloadsAllTime` 覆蓋模型下載數（多個 HF 鈕加總，dataset 不算）；GitHub `pushed_at` 顯示在 project 卡右下「N 天前更新」。API 失敗就留 `data.js` 的快照，console.warn。
  - `index.html` 補 Open Graph／twitter meta（分享預覽）。
  - 使用者判定完成度低而移除：chimera、stonks-agent。
  - 未收錄：llm-council（karpathy 專案中譯）、2025 年的小工具（瀏覽器擴充、bot 等）、沒改過的 fork。
- **2026/09/29 粒子肖像（Portrait）＋大號 handle**：`#portrait` canvas 取代頭貼（`html.has-portrait` 才顯示，圖載入失敗就留原本 `.avatar`）。取樣同源的 `favicon.png`（=頭貼）成數千個方點，進場從雜訊依亮度先後收斂成臉（擴散去噪隱喻）；滑鼠推開粒子、被推開的會變亮；點擊＝彈簧放鬆的碎裂爆散後再收回。靜止即停 RAF，背景分頁回來靠 `visibilitychange` 續跑；reduced-motion 直接畫定位、無互動；換主題走 `paintPortrait()` 重畫。版面：≥960px `.plate-inner` 變 grid（左 `.plate-main`、右上時鐘、右下肖像，`.plate-head` 用 `display: contents`）；<960px 肖像 128px 待在頭列左上。`.handle` 放大為 `clamp(2.125rem, …, 3.625rem)`。
- **2026/09/26 下載次數**：四張模型卡改為 HF `downloadsAllTime`（v2 GGUF 563、第一代 1598、digital-twin 121、LinguaForge 370）。快取版號 `20260926a`。
- **2026/09/18 矽基女友 v2**：Models 最上方新增 `silicon-based-girlfriend-v2` 卡，兩個 Hugging Face 鈕（GGUF／LoRA）；第一代說明改為「第一代」並拿掉「V2 準備中」。快取版號 `20260918a`。
- **2026/09/10 分支合併與本機配置／專案更新**：合併 `worktree-rig-and-copy-refresh` 分支。本機配置 GPU 調整為 3060 Ti 8GB；更新 VoiceInk、LLM Arena 專案文案；more 專案新增 `AgentCAD_MCP`；快取版號升至 `20260910a`；`.gitignore` 排除 `.claude/`。
- **主題切換過場（View Transitions）**：`setTheme()` 走 `document.startViewTransition`，新主題以圓形從 `#themeToggle` 中心擴散（clip-path 動畫掛在 `::view-transition-new(root)`，easing `cubic-bezier(.22,1,.36,1)` 起手快、尾巴柔）。**時長隨視窗縮放**：`reach / 2.6` clamp 到 320–620ms，讓手機與大螢幕的邊緣推進速度一致（390×844→327ms、1280×800→549ms、1080p 以上→620ms）。CSS 端在 styles.css「Theme transition」關掉預設 cross-fade 並排 z-index。不支援、`prefers-reduced-motion`、或瀏覽器跳過 transition（例如視窗失焦）→ `.catch` 直接套用，主題照樣切換。
- **Console ASCII 頭貼**：`printBanner()` 於 boot 尾端印出頭貼的 ASCII 版（`ASCII_AVATAR`，66 字寬 × 30 行，樣式 10px / line-height 1.1）＋ handle 與 GitHub 連結。生成的三個關鍵點：
  - **解析度**：46×14 太小，骷髏會糊成斑點、圓形遮罩變歪多邊形；66×30 才看得出眼窩、鼻孔、牙齒。
  - **取樣**：原圖是 1-bit dither，要先高斯模糊（blur 1.4）再 `Image.BOX` 區域平均才還原得出灰階；並先裁掉 18% 死角讓骷髏佔更多字元。取樣比 `k = 0.5` 必須對上 console 的 cell 比例（字寬 / 行高 = 5.5 / 11）。
  - **字元**：階從 `" .:-=+*#&@"`，**刻意避開 `%`**（console.log 當成格式指示符會吃掉下一個字元）；空白 join 後轉 NBSP，因為 `%c` 訊息是 inline span，連續空格會被摺疊。
- **模型下載數 count-up**：`.dl-count` 帶 `data-count`，卡片首次進場（`observeReveals` 的 IntersectionObserver）觸發 `countUp()`，1.1s ease-out 滾到目標值；`.dl-count` 加 `tabular-nums` 避免位數變化抖寬。語系切換不重播（直接是最終值）。
- **自我介紹內容微調（Bio）**：更新為「網頁與 Android 應用開發、本地 AI 推論優化、LoRA 微調、ESP32 韌體、網路爬蟲、量化研究」（「網路爬蟲」與「量化研究」中間加上頓號）。
- **ID 標題特效（Handle Hover Effect）**：滑鼠懸停於 `rx5950xt` 時觸發霓虹極光流光漸變（Iridescent Flow Gradient & Glow）與動態字元矩陣解碼（Text Scramble Effect）。
- **喜歡與不喜歡（Taste）**：將原本文字標籤改成「讚（Thumbs Up 藍色）」與「倒讚（Thumbs Down 紅色）」精緻向量圖示，支援 hover 放大與無障礙 tooltip。
- **五個連結、本機配置、使用它們（展開/收起選單）**：
  - 連結（Links）：改為直式列表排列，每列包含品牌 icon、文字與 ↗ 箭頭。
  - 本機配置（Rig）與使用它們（Tools）：移除內部重複出現的標題文字。
  - 使用它們（Tools）：內部「對話」改為直式一排 1×4 按鈕，與右側 4 個安裝指令完美對齊。
- **快取版號**：bump 至 `20260820c`。
