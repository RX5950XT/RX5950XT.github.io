/* Content for rx5950xt.github.io — edit this file to update the page. */

const LANG_COLOR = {
  'C++': '#f34b7d',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Rust: '#dea584',
  JavaScript: '#f1e05a',
};

const DATA = {
  handle: 'rx5950xt',

  /* 2×2 on plate: GitHub | Hugging Face / X | Discord */
  links: [
    { label: 'GitHub', url: 'https://github.com/rx5950xt' },
    { label: 'Hugging Face', url: 'https://huggingface.co/RX5950XTP' },
    { label: 'X', url: 'https://x.com/RX5950XT' },
    { label: 'Discord', url: 'https://discord.com/users/876324357893410817' },
  ],

  /* Left plate: machine specs (values with en/zh only when they differ). */
  rig: {
    specs: [
      { key: 'CPU', value: 'AMD Ryzen 7 5700X' },
      {
        key: 'GPU',
        value: {
          en: 'RTX 3070 Ti FE',
          zh: 'RTX 3070 Ti FE',
        },
      },
      { key: 'RAM', value: 'DDR4 3200 64GB' },
    ],
  },

  /* Left plate bottom: chat sites + one-click install commands. */
  tools: {
    chats: [
      { label: 'Grok', url: 'https://grok.com/' },
      { label: 'Claude', url: 'https://claude.ai' },
      { label: 'ChatGPT', url: 'https://chatgpt.com' },
      { label: 'Gemini', url: 'https://gemini.google.com' },
    ],
    /* Order fixed: Claude Code → Codex → Grok Build → Antigravity.
       Windows-first installers where official; npm for Codex. */
    installs: [
      {
        label: 'Claude Code',
        cmd: 'irm https://claude.ai/install.ps1 | iex',
      },
      {
        label: 'Codex',
        cmd: 'npm install -g @openai/codex',
      },
      {
        label: 'Grok Build',
        cmd: 'irm https://x.ai/cli/install.ps1 | iex',
      },
      {
        label: 'Antigravity CLI',
        cmd: 'irm https://antigravity.google/cli/install.ps1 | iex',
      },
    ],
  },

  ui: {
    en: {
      tagline: 'Vibe coder. Builds everything with agents.',
      // {tad} is replaced by a link to Token-Anxiety-Dashboard.
      bio: 'ESP32 firmware, local AI inference, LoRA fine-tunes, scrapers, web and Android apps, quant research. Mostly grown by pointing agents at a problem. Most days I am staring at {tad}, watching quotas I am about to burn through.',
      tadLabel: 'Token Anxiety Dashboard',
      localTime: 'Local time',
      projects: 'Projects',
      more: 'More',
      models: 'Models',
      demo: 'Demo',
      code: 'Code',
      themeLabel: 'Switch to light appearance',
      themeLabelDark: 'Switch to dark appearance',
      langLabel: '切換為繁體中文',
      footer: '',
      ctxTitle: 'Quick links',
      ctxMenu: 'Site menu',
      chromeLabel: 'Site controls',
      rigTitle: 'Rig',
      rigWish:
        'Urgently seeking a DGX Spark for local deploy, fine-tunes, and development!',
      toolsTitle: 'Tools',
      toolsChats: 'Chat',
      toolsInstalls: 'Install',
      copy: 'Copy',
      copied: 'Copied',
      copyAria: 'Copy install command',
    },
    zh: {
      tagline: 'Vibe Coder。用 Agent 建造一切。',
      bio: 'ESP32 韌體、本地 AI 推論、LoRA 微調、網路爬蟲、網頁與 Android 開發、量化研究。大多是把問題丟給 Agent 之後長出來的。多數時候我盯著 {tad}，看著自己快燒完的額度。',
      tadLabel: 'Token Anxiety Dashboard',
      localTime: '當地時間',
      projects: '專案',
      more: '更多',
      models: '模型',
      demo: '線上試用',
      code: '原始碼',
      themeLabel: '切換為淺色外觀',
      themeLabelDark: '切換為深色外觀',
      langLabel: 'Switch to English',
      footer: '',
      ctxTitle: '快捷連結',
      ctxMenu: '網站選單',
      chromeLabel: '網站控制列',
      rigTitle: '本機配置',
      rigWish: '急需一臺 DGX Spark 用於本地部署、微調與開發！',
      toolsTitle: '工具',
      toolsChats: '對話',
      toolsInstalls: '安裝',
      copy: '複製',
      copied: '已複製',
      copyAria: '複製安裝指令',
    },
  },

  tad: 'https://github.com/rx5950xt/Token-Anxiety-Dashboard',

  projects: [
    {
      name: 'just-a-submarine',
      repo: 'https://github.com/just-a-submarine',
      demo: 'https://rov-web-xi.vercel.app',
      lang: 'C++',
      tags: ['ESP32-S3', 'ESP-NOW', 'ROV', 'PlatformIO'],
      en: 'A university final project: an ROV under the just-a-submarine org. Two ESP32-S3 boards talk over ESP-NOW — the sub runs thrusters, sensors and OV5640 MJPEG; the ground station is a Wi-Fi AP that relays control and telemetry. Drive it from a phone browser with an Xbox pad or on-screen sticks; firmware, ground UI and project site all live in the same org.',
      zh: '學校期末專案：一臺 ROV，整個放在 just-a-submarine 組織。兩塊 ESP32-S3 走 ESP-NOW——潛艇端負責推進、感測與 OV5640 MJPEG；地面站開 Wi-Fi AP，轉發控制與遙測。手機瀏覽器接 Xbox 手把或虛擬搖桿操作；韌體、地面站網頁與專案站都在同一個 org。',
    },
    {
      name: 'LLM Wiki',
      repo: 'https://github.com/rx5950xt/LLM-wiki',
      demo: 'https://llm-wiki-seven.vercel.app',
      lang: 'TypeScript',
      tags: ['Next.js', 'Supabase', 'Google Drive', 'Kotlin'],
      en: 'A wiki an LLM keeps writing. Every source you add is compiled into linked Markdown — summaries, entity pages, cross-references, contradiction flags — and the files live in your own Google Drive. Web, plus an Android client.',
      zh: '一個由 LLM 持續編譯的 wiki。每筆新來源都會被整合進互相連結的 Markdown（摘要、實體頁面、交叉引用、矛盾標記），檔案全部存在你自己的 Google Drive。Web 之外還有 Android 版。',
    },
    {
      name: 'Portfolio Visualizer',
      repo: 'https://github.com/rx5950xt/portfolio-visualizer',
      demo: 'https://portfolio-visualizer-roan.vercel.app/',
      lang: 'TypeScript',
      tags: ['Next.js', 'TWR / XIRR', 'ETF look-through', 'RBAC'],
      en: 'Portfolio tracking for people who hold things for years. Allocation, TWR and XIRR, Sharpe and drawdown, an S&P 500 shadow line replaying your actual buys, and ETF look-through that shows what you really own.',
      zh: '給長期持有者的組合追蹤：資產配置、TWR 與 XIRR、Sharpe 與回撤，還有依你實際買點重播的 S&P 500 對照線，以及穿透 ETF 看出真正持有什麼。',
    },
    {
      name: 'ESP32-CAM Remote Monitor',
      repo: 'https://github.com/rx5950xt/ESP-32-CAM_remote_monitor',
      lang: 'C++',
      tags: ['ESP32-CAM', 'PlatformIO', 'Telegram Bot', 'TinyML'],
      en: 'An ESP32-CAM that watches a room and pings you on Telegram. Person detection runs on the board with TFLite Micro—no OpenRouter or other cloud vision API. When it finds someone, the alert photo lands in chat. Exposure and gain are tuned for the OV2640 so low light still reads.',
      zh: '用 ESP32-CAM 看著房間，有狀況就 Telegram 通知你。人物偵測在板端跑 TFLite Micro，不靠 OpenRouter 或其他雲端視覺 API。偵測到人就把警報照片推過去。針對 OV2640 調過曝光與增益，暗處也看得清。',
    },
    {
      name: 'LLM Arena',
      repo: 'https://github.com/rx5950xt/LLM-Arena',
      demo: 'https://llm-arena-opal.vercel.app',
      lang: 'TypeScript',
      tags: ['OpenRouter', 'Streaming', 'LLM-as-judge'],
      en: 'Put the same question to 2–4 models and watch them stream side by side. A judge model scores every answer across five dimensions, and debate mode runs pro-versus-con for up to ten rounds before four judges call it.',
      zh: '同一題丟給 2–4 個模型並排串流，再由裁判模型從五個維度打分。辯論模式讓正反方最多打十回合，最後交給四位裁判評判。',
    },
    {
      name: 'Qwen-35B-A3B × RTX 3070 Ti',
      repo: 'https://github.com/rx5950xt/Qwen-35BA3B-RTX3070Ti',
      lang: 'Python',
      tags: ['llama.cpp', 'MoE', 'Quantization', '8GB VRAM'],
      en: 'One-click deploy that squeezes a 35B MoE model onto an 8GB card. MoE\'s sparse experts make heterogeneous CPU/GPU inference practical in llama.cpp; an automated parameter sweep then pushes those flags for max tokens per second — 35.02 t/s at Q4_K_M.',
      zh: '把 35B MoE 模型壓進 8GB 顯卡，一鍵部署。利用 MoE 稀疏專家路由在 llama.cpp 上做 CPU/GPU 異構推論，再用自動化測試掃過參數組合，把吞吐推到極限——Q4_K_M 實測 35.02 t/s。',
    },
    {
      name: 'PCPriceProxy',
      repo: 'https://github.com/rx5950xt/PCPriceProxy',
      lang: 'TypeScript',
      tags: ['Scraping', 'SKU matching', 'REST API'],
      en: 'Compare DIY PC part prices across CoolPC, Sinya and Autobuy in one place. Same model shows up as a single card with each store\'s price, so you can see who is cheaper without opening three tabs.',
      zh: '一次比完原價屋、欣亞、Autobuy 的 DIY 零件價。同一型號收成一張卡，三家售價並排，不用開三個分頁就能看出哪家便宜。',
    },
    {
      name: '0050 Buy-Point Study',
      repo: 'https://github.com/rx5950xt/Buy_Price_Assessment',
      lang: 'Python',
      tags: ['Walk-forward', 'Bootstrap CI', 'Sealed holdout'],
      en: 'Twenty-three years of 0050 data, walk-forward and free of look-ahead, asking one question: if you buy once a month, which day? The first trading day wins at 3.20% average regret — and the machine learning strategy built to beat it lost by 116 bps.',
      zh: '用 0050 上市至今 23 年的資料做無前視偏誤的滾動窗口研究，只問一件事：每月只買一次，該買哪天？答案是每月第一個交易日——平均 regret 3.20%，而被拿來挑戰它的機器學習策略輸了 116 bps。',
    },
  ],

  more: [
    {
      name: 'calcrux',
      repo: 'https://github.com/rx5950xt/calcrux',
      lang: 'Rust',
      en: 'Android calculator on a Rust core, via UniFFI',
      zh: 'Rust 核心的 Android 計算機，走 UniFFI 橋接',
    },
    {
      name: 'VoiceInk',
      repo: 'https://github.com/RX5950XT/VoiceInk',
      lang: 'JavaScript',
      en: 'Offline Windows STT — local Qwen3-ASR, live captions from system audio',
      zh: 'Windows 離線語音轉文字：本地 Qwen3-ASR，系統音訊即時字幕',
    },
    {
      name: 'FJU-TronClass-MCP',
      repo: 'https://github.com/RX5950XT/FJU-TronClass-MCP',
      lang: 'Python',
      en: 'MCP + CLI for FJU TronClass — courses, downloads, mark videos done',
      zh: '輔大 TronClass 的 MCP 與 CLI——查課、下教材、標記影片完成',
    },
    {
      name: 'chimera',
      repo: 'https://github.com/rx5950xt/chimera',
      lang: 'C++',
      en: 'Windows Android emulator experiment — boots, not a product',
      zh: 'Windows Android 模擬器實驗——開得起來，但不是產品',
    },
    {
      name: 'rolling-around',
      repo: 'https://github.com/rx5950xt/rolling-around',
      demo: 'https://katamari-web-game.onrender.com/',
      lang: 'TypeScript',
      en: 'Abstract Three.js web game: a roller that eats the world and grows',
      zh: '抽象風格的 Three.js 網頁遊戲：滾球吃遍世界然後長大',
    },
  ],

  models: [
    {
      name: 'silicon-based-girlfriend',
      url: 'https://huggingface.co/RX5950XTP/silicon-based-girlfriend',
      tags: ['Qwen3.5-4B', 'QLoRA r=32', 'GGUF'],
      en: 'A roleplay adapter for immersive Traditional Chinese conversation. Rank 32 across every linear layer, 8K context, nineteen hours on an A6000. Ships as both LoRA weights and a Q8_0 GGUF for llama.cpp. Silicon-based girlfriend V2, the next generation, is in preparation.',
      zh: '沉浸式繁體中文角色扮演 adapter。rank 32、全線性層、8K context，在 A6000 上訓了約 19 小時。同時提供 LoRA 權重與 Q8_0 GGUF，可直接餵給 llama.cpp。Silicon-based girlfriend V2 下一代模型正在準備中。',
    },
    {
      name: 'rx5950xt-digital-twin',
      url: 'https://huggingface.co/RX5950XTP/rx5950xt-digital-twin-Qwen3.5-4B',
      tags: ['Qwen3.5-4B', 'QLoRA r=8', 'zh-TW'],
      en: 'A digital twin of me, QLoRA-tuned on ~1,067 of my own Discord messages. Blended 1:2 with general instruction data and trained for a single epoch at rank 8 — kept small on purpose, so it learns the voice instead of memorising the transcript.',
      zh: '我的數位分身，用約 1,067 則自己的 Discord 對話做 QLoRA 微調。與通用中文指令資料以 1:2 混合、rank 8、只跑 1 epoch——刻意做小，讓它學語氣而不是背對話。',
    },
  ],
};
