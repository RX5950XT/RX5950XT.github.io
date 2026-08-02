/* rx5950xt.github.io — appearance, language, clock, content, pointer light. */

const $ = (sel) => document.querySelector(sel);
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)');

/* First visit: browser locale starting with zh → Chinese; else English.
   Manual toggle is stored in localStorage and wins thereafter. */
function detectLang() {
  try {
    const list =
      navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || navigator.userLanguage || 'en'];
    for (const l of list) {
      if (/^zh\b/i.test(l)) return 'zh';
    }
  } catch (_) {}
  return 'en';
}

let lang = localStorage.getItem('lang') || detectLang();

/* Brand marks for profile chips + context menu. */
const LINK_ICONS = {
  GitHub:
    '<svg class="link-ico" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.6 7.6 0 0 1 8 4.77c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
  'Hugging Face':
    '<svg class="link-ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624"/></svg>',
  X: '<svg class="link-ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  Discord:
    '<svg class="link-ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14 14 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.8 19.8 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418"/></svg>',
};

function linkIcon(label) {
  return LINK_ICONS[label] || '';
}

/* --- Appearance ----------------------------------------------------------- */

function applyTheme(theme) {
  root.dataset.theme = theme;
  $('meta[name="theme-color"]').content = theme === 'dark' ? '#08080b' : '#f5f5f7';
  $('#themeToggle').setAttribute('aria-pressed', String(theme === 'light'));
  readPointerColors();
  paintControls();
}

function setTheme(theme) {
  localStorage.setItem('theme', theme);
  applyTheme(theme);
}

/* --- Language ------------------------------------------------------------- */

function setLang(next) {
  lang = next;
  localStorage.setItem('lang', next);
  root.lang = next === 'zh' ? 'zh-Hant' : 'en';
  paintPlate();
  paintControls();
  paintContextMenu();
  render();
  const dateEl = $('#date');
  if (dateEl) dateEl.textContent = formatLocalDate(new Date());
}

const ui = () => DATA.ui[lang];

function paintPlate() {
  const s = ui();
  $('#tagline').textContent = s.tagline;
  $('#clockLabel').textContent = s.localTime;
  const foot = $('#foot');
  foot.textContent = s.footer;
  foot.hidden = !s.footer;
  $('#h-projects .label').textContent = s.projects;
  $('#h-more .label').textContent = s.more;
  $('#h-models .label').textContent = s.models;

  // The bio carries one link, so it is assembled rather than assigned.
  const bio = $('#bio');
  bio.textContent = '';
  const [before, after] = s.bio.split('{tad}');
  const a = document.createElement('a');
  a.href = DATA.tad;
  a.target = '_blank';
  a.rel = 'noopener';
  a.textContent = s.tadLabel;
  bio.append(before, a, after);

  // 2×2 grid is tight (esp. "Hugging Face") — no ↗; target=_blank still marks external.
  $('#links').innerHTML = DATA.links
    .map(
      (l) => `<a class="link" href="${l.url}" target="_blank" rel="noopener me">
        ${linkIcon(l.label)}<span class="link-label">${l.label}</span></a>`
    )
    .join('');

  paintTaste();
  paintRig();
  paintTools();
}

function paintTaste() {
  const s = ui();
  const t = DATA.taste;
  if (!t) return;
  $('#likesKey').textContent = s.likes;
  $('#dislikesKey').textContent = s.dislikes;
  $('#likesVal').textContent = t.likes[lang] || t.likes.en;
  $('#dislikesVal').textContent = t.dislikes[lang] || t.dislikes.en;
}

function paintRig() {
  const s = ui();
  const rig = DATA.rig;
  if (!rig) return;

  const title = $('#rigTitle .label');
  if (title) title.textContent = s.rigTitle;

  const list = $('#rigList');
  if (list) {
    list.innerHTML = (rig.specs || [])
      .map((row) => {
        const raw = row.value;
        let valHtml;
        if (Array.isArray(raw)) {
          // One key, multiple lines (e.g. dual GPU).
          valHtml = raw
            .map((item) => {
              const s =
                item && typeof item === 'object'
                  ? item[lang] || item.en || ''
                  : item;
              return `<span class="rig-line">${escapeHtml(s)}</span>`;
            })
            .join('');
        } else {
          const val =
            raw && typeof raw === 'object' ? raw[lang] || raw.en || '' : raw;
          valHtml = escapeHtml(val);
        }
        return `<div class="rig-row">
          <dt class="rig-key">${escapeHtml(row.key)}</dt>
          <dd class="rig-val">${valHtml}</dd>
        </div>`;
      })
      .join('');
  }

  const wish = $('#rigWish');
  if (wish) wish.textContent = s.rigWish || '';
}

const COPY_SVG =
  '<svg class="copy-ico" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M4 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2z"/></svg>';
const CHECK_SVG =
  '<svg class="copy-ico" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>';

function paintTools() {
  const s = ui();
  const tools = DATA.tools;
  if (!tools) return;

  const title = $('#toolsTitle .label');
  if (title) title.textContent = s.toolsTitle;
  const chatsLabel = $('#toolsChatsLabel');
  if (chatsLabel) chatsLabel.textContent = s.toolsChats;
  const installsLabel = $('#toolsInstallsLabel');
  if (installsLabel) installsLabel.textContent = s.toolsInstalls;

  const chatsEl = $('#toolsChats');
  if (chatsEl) {
    chatsEl.innerHTML = tools.chats
      .map(
        (c) =>
          `<a class="link tools-link" href="${c.url}" target="_blank" rel="noopener">` +
          `<span class="link-label">${c.label}</span>` +
          `<span class="arrow" aria-hidden="true">↗</span></a>`
      )
      .join('');
  }

  const list = $('#toolsInstalls');
  if (!list) return;
  list.innerHTML = tools.installs
    .map(
      (item) => `<li class="tools-row">
        <div class="tools-row-top">
          <span class="tools-name">${item.label}</span>
          <button type="button" class="copy-btn" data-cmd="${escapeAttr(item.cmd)}"
            aria-label="${s.copyAria}: ${item.label}">
            ${COPY_SVG}<span class="copy-label">${s.copy}</span>
          </button>
        </div>
        <code class="tools-cmd" title="${escapeAttr(item.cmd)}">${escapeHtml(item.cmd)}</code>
      </li>`
    )
    .join('');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, '&#39;');
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  // Fallback for file:// or older browsers.
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.cssText = 'position:fixed;left:-9999px;top:0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  ta.remove();
}

function startToolsCopy() {
  const list = $('#toolsInstalls');
  if (!list || list.dataset.copyBound) return;
  list.dataset.copyBound = '1';

  list.addEventListener('click', async (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    const cmd = btn.getAttribute('data-cmd');
    if (!cmd) return;

    try {
      await copyText(cmd);
      const s = ui();
      btn.classList.add('is-copied');
      btn.setAttribute('aria-label', s.copied);
      btn.innerHTML = `${CHECK_SVG}<span class="copy-label">${s.copied}</span>`;

      clearTimeout(btn._copyTimer);
      btn._copyTimer = setTimeout(() => {
        btn.classList.remove('is-copied');
        btn.setAttribute('aria-label', s.copyAria);
        btn.innerHTML = `${COPY_SVG}<span class="copy-label">${s.copy}</span>`;
      }, 1600);
    } catch (_) {
      /* clipboard denied — leave button as-is */
    }
  });
}

/* Chrome icons: sun → go light, moon → go dark; monogram for language target. */
const ICON_SUN =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
const ICON_MOON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z"/></svg>';
/* Shooting star: a four-point sparkle with a streak behind it. */
const ICON_STARS =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 3.5c.6 2.4 1.6 3.4 4 4-2.4.6-3.4 1.6-4 4-.6-2.4-1.6-3.4-4-4 2.4-.6 3.4-1.6 4-4z"/><path d="M6.5 12.5c.35 1.35.9 1.9 2.25 2.25-1.35.35-1.9.9-2.25 2.25-.35-1.35-.9-1.9-2.25-2.25 1.35-.35 1.9-.9 2.25-2.25z"/><path d="M20 14 14 20M12 4 9.5 6.5"/></svg>';

/* --- Starfield ------------------------------------------------------------ */

/* Stars force the dark palette, so the appearance toggle tucks away while on
   and the stored preference comes back when it is switched off. */
function storedTheme() {
  return (
    localStorage.getItem('theme') ||
    (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  );
}

function applySky(on) {
  root.classList.toggle('starry', on);
  $('#skyToggle').setAttribute('aria-pressed', String(on));
  $('#themeToggle').hidden = on;
  applyTheme(on ? 'dark' : storedTheme());
}

/* While the sky is out, a click throws one more streak from the pointer. */
function startSkyClicks() {
  const sky = $('#sky');
  if (!sky) return;
  addEventListener(
    'pointerdown',
    (e) => {
      if (e.button !== 0) return;
      if (!root.classList.contains('starry') || reduced.matches) return;
      const shot = document.createElement('span');
      shot.className = 'meteor meteor-shot';
      // Right edge = the streak's head; park it on the cursor.
      shot.style.left = `${e.clientX - 190}px`;
      shot.style.top = `${e.clientY - 1}px`;
      shot.addEventListener('animationend', () => shot.remove());
      sky.appendChild(shot);
    },
    { passive: true }
  );
}

function setSky(on) {
  localStorage.setItem('sky', on ? 'stars' : 'off');
  applySky(on);
}

function paintControls() {
  const s = ui();
  const dark = root.dataset.theme === 'dark';
  const starry = root.classList.contains('starry');
  const chrome = $('#chrome');
  if (chrome) chrome.setAttribute('aria-label', s.chromeLabel || 'Site controls');
  $('#themeText').textContent = dark ? (lang === 'zh' ? '淺色' : 'Light') : lang === 'zh' ? '深色' : 'Dark';
  $('#themeToggle').setAttribute('aria-label', dark ? s.themeLabel : s.themeLabelDark);
  $('#langText').textContent = lang === 'zh' ? 'English' : '中文';
  $('#langToggle').setAttribute('aria-label', s.langLabel);
  $('#skyText').textContent = s.skyText;
  $('#skyToggle').setAttribute('aria-label', starry ? s.skyLabelOff : s.skyLabel);

  // Icon buttons: show the target mode / language, not the current one.
  const themeGlyph = $('#themeGlyph');
  if (themeGlyph) themeGlyph.innerHTML = dark ? ICON_SUN : ICON_MOON;
  const langGlyph = $('#langGlyph');
  if (langGlyph) langGlyph.textContent = lang === 'zh' ? 'EN' : '中';
  const skyGlyph = $('#skyGlyph');
  if (skyGlyph) skyGlyph.innerHTML = ICON_STARS;
}

/* --- Clock ---------------------------------------------------------------- */

/* The visitor's own timezone, straight from the browser — no lookup needed. */

function gmtOffset() {
  const mins = -new Date().getTimezoneOffset();
  const sign = mins < 0 ? '-' : '+';
  const h = Math.floor(Math.abs(mins) / 60);
  const m = Math.abs(mins) % 60;
  return `GMT${sign}${h}${m ? ':' + String(m).padStart(2, '0') : ''}`;
}

function formatLocalDate(d) {
  // zh → 2026年7月17日；en → 2026-07-17
  if (lang === 'zh') {
    return new Intl.DateTimeFormat('zh-Hant', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(d);
  }
  return new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}

function formatLocalTime(d) {
  return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-Hant' : [], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).format(d);
}

function startClock() {
  const timeEl = $('#clock');
  const dateEl = $('#date');
  const zoneEl = $('#zone');
  zoneEl.textContent = `${Intl.DateTimeFormat().resolvedOptions().timeZone} · ${gmtOffset()}`;

  let lastDateKey = '';
  const tick = () => {
    const now = new Date();
    timeEl.textContent = formatLocalTime(now);
    timeEl.dateTime = now.toISOString();

    // Date string only changes on day/lang flip — skip DOM writes otherwise.
    const dateKey = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${lang}`;
    if (dateKey !== lastDateKey) {
      lastDateKey = dateKey;
      dateEl.textContent = formatLocalDate(now);
    }
  };
  tick();
  setInterval(tick, 1000);
}

/* --- Content -------------------------------------------------------------- */

let firstRender = true;

const arrow = '<span class="arrow" aria-hidden="true">↗</span>';

function projectCard(p, i) {
  const color = LANG_COLOR[p.lang] || 'var(--text-3)';
  const s = ui();
  return `<article class="card reveal" style="--i:${i}; --lang:${color}">
    <div class="card-head">
      <span class="dot" aria-hidden="true"></span>
      <h3 class="card-name">${p.name}</h3>
    </div>
    <p class="card-desc">${p[lang]}</p>
    <ul class="tags">
      <li class="tag">${p.lang}</li>
      ${p.tags.map((x) => `<li class="tag">${x}</li>`).join('')}
    </ul>
    <div class="card-foot">
      <a class="card-link" href="${p.repo}" target="_blank" rel="noopener">${s.code}${arrow}</a>
      ${p.demo ? `<a class="card-link" href="${p.demo}" target="_blank" rel="noopener">${s.demo}${arrow}</a>` : ''}
    </div>
  </article>`;
}

function moreRow(p, i) {
  const color = LANG_COLOR[p.lang] || 'var(--text-3)';
  return `<li class="reveal" style="--i:${i}">
    <a class="row" href="${p.demo || p.repo}" target="_blank" rel="noopener" style="--lang:${color}">
      <span class="dot" aria-hidden="true"></span>
      <span class="row-name">${p.name}</span>
      <span class="row-desc">${p[lang]}</span>
      <span class="row-lang">${p.lang}</span>
      <span class="arrow" aria-hidden="true">↗</span>
    </a>
  </li>`;
}

function modelCard(m, i) {
  const s = DATA.ui[lang];
  const dlBadge =
    m.downloads != null
      ? `<div class="model-downloads" title="${s.asOf} ${m.downloadsDate}">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
           <span class="dl-count">${m.downloads.toLocaleString()}</span>
           <span class="dl-label">${s.downloads}</span>
           <span class="dl-date">${s.asOf} ${m.downloadsDate}</span>
         </div>`
      : '';
  return `<article class="card reveal" style="--i:${i}; --lang:#ffd21e">
    <div class="card-head">
      <span class="dot" aria-hidden="true"></span>
      <h3 class="card-name">${m.name}</h3>
    </div>
    <p class="card-desc">${m[lang]}</p>
    <ul class="tags">${m.tags.map((x) => `<li class="tag">${x}</li>`).join('')}</ul>
    ${dlBadge}
    <div class="card-foot">
      <a class="card-link" href="${m.url}" target="_blank" rel="noopener">${linkIcon('Hugging Face')}<span>Hugging Face</span>${arrow}</a>
      ${m.repo ? `<a class="card-link" href="${m.repo}" target="_blank" rel="noopener">${linkIcon('GitHub')}<span>GitHub</span>${arrow}</a>` : ''}
    </div>
  </article>`;
}

function render() {
  $('#projects').innerHTML = DATA.projects.map(projectCard).join('');
  $('#more').innerHTML = DATA.more.map(moreRow).join('');
  $('#models').innerHTML = DATA.models.map(modelCard).join('');

  document.querySelectorAll('.card').forEach(trackSheen);

  if (firstRender) {
    firstRender = false;
    observeReveals();
  } else {
    // A language switch is a deliberate action: swap it instantly.
    document.querySelectorAll('.output .reveal').forEach((el) => el.classList.add('in'));
  }
}

/* --- Entrance ------------------------------------------------------------- */

function observeReveals() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px' }
  );

  document.querySelectorAll('.plate .reveal').forEach((el, i) => {
    el.style.setProperty('--i', i);
    requestAnimationFrame(() => el.classList.add('in'));
  });
  document.querySelectorAll('.output .reveal').forEach((el) => io.observe(el));
}

/* --- Pointer light -------------------------------------------------------- */

/* The page has no accent colour. What lights it is the pointer: a dot that
   tracks 1:1, a ring that trails behind it, a fading streak, and a soft
   field that drags the ambient light around with you. */

let trailRGB = '255,248,240';
let trailAlpha = 0.5;

function readPointerColors() {
  const cs = getComputedStyle(root);
  trailRGB = cs.getPropertyValue('--trail').trim();
  trailAlpha = parseFloat(cs.getPropertyValue('--trail-alpha')) || 0.5;
}

function trackSheen(card) {
  let rect = null;
  let sx = '50%';
  let sy = '0%';
  let pending = false;

  card.addEventListener('pointerenter', () => (rect = card.getBoundingClientRect()));
  card.addEventListener(
    'pointermove',
    (e) => {
      if (!rect) rect = card.getBoundingClientRect();
      sx = `${e.clientX - rect.left}px`;
      sy = `${e.clientY - rect.top}px`;
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        card.style.setProperty('--sx', sx);
        card.style.setProperty('--sy', sy);
      });
    },
    { passive: true }
  );
}

function startPointer() {
  if (!matchMedia('(pointer: fine)').matches) return;
  root.classList.add('pointer-fine');

  const dot = $('#cursorDot');
  const ring = $('#cursorRing');
  const light = $('#pointerLight');
  const canvas = $('#trail');
  // desynchronized: skip vsync wait when the browser allows — cheaper on Edge.
  const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
  const LIFE = 320;
  const MAX_POINTS = 48;

  let px = innerWidth / 2;
  let py = innerHeight / 2;
  let rx = px;
  let ry = py;
  let lx = px;
  let ly = py;
  let points = [];
  let running = false;
  let lit = false;

  const resize = () => {
    // Cap DPR — full 2× trail canvas is pure cost with little visual gain.
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.floor(innerWidth * dpr);
    canvas.height = Math.floor(innerHeight * dpr);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  addEventListener('resize', resize, { passive: true });

  const kick = () => {
    if (running || document.hidden) return;
    running = true;
    requestAnimationFrame(frame);
  };

  addEventListener(
    'pointermove',
    (e) => {
      px = e.clientX;
      py = e.clientY;
      if (!reduced.matches) {
        points.push({ x: px, y: py, t: performance.now() });
        if (points.length > MAX_POINTS) points = points.slice(-MAX_POINTS);
      }
      dot.style.transform = `translate3d(${px}px, ${py}px, 0)`;
      if (!lit) {
        lit = true;
        light.classList.add('lit');
        root.classList.add('pointing');
      }
      ring.classList.toggle('near', !!e.target.closest('a, button'));
      kick();
    },
    { passive: true }
  );

  addEventListener('pointerdown', () => {
    ring.classList.add('near');
    kick();
  });
  addEventListener('pointerup', () => ring.classList.remove('near'));

  // Tab in background: stop burning GPU. Resume on focus only if needed.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      running = false;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
    }
  });

  const frame = () => {
    // Both followers animate from wherever they currently are, so a change of
    // direction is picked up on the next frame with no discontinuity.
    rx += (px - rx) * 0.2;
    ry += (py - ry) * 0.2;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;

    lx += (px - lx) * 0.06;
    ly += (py - ly) * 0.06;
    light.style.transform = `translate3d(${lx}px, ${ly}px, 0)`;

    let trailAlive = false;
    if (!reduced.matches) {
      const now = performance.now();
      // In-place prune (no new array every frame).
      let w = 0;
      for (let i = 0; i < points.length; i++) {
        if (now - points[i].t < LIFE) points[w++] = points[i];
      }
      points.length = w;
      trailAlive = points.length > 1;

      ctx.clearRect(0, 0, innerWidth, innerHeight);
      if (trailAlive) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        for (let i = 1; i < points.length; i++) {
          const life = 1 - (now - points[i].t) / LIFE;
          ctx.strokeStyle = `rgba(${trailRGB}, ${life * life * trailAlpha})`;
          ctx.lineWidth = life * 3.5 + 0.4;
          ctx.beginPath();
          ctx.moveTo(points[i - 1].x, points[i - 1].y);
          ctx.lineTo(points[i].x, points[i].y);
          ctx.stroke();
        }
      }
    }

    const settling =
      Math.abs(px - rx) > 0.15 ||
      Math.abs(py - ry) > 0.15 ||
      Math.abs(px - lx) > 0.4 ||
      Math.abs(py - ly) > 0.4 ||
      trailAlive;

    if (settling && !document.hidden) {
      requestAnimationFrame(frame);
    } else {
      running = false;
    }
  };
}

/* --- Context menu --------------------------------------------------------- */

/* Glass menu that matches the plate. Native OS menu is fully blocked on this page.
   Links come from DATA.links so URLs stay single-source. */

function paintContextMenu() {
  const menu = $('#ctx');
  const s = ui();
  if (!menu) return;
  menu.setAttribute('aria-label', s.ctxMenu);
  $('#ctxTitle').textContent = s.ctxTitle;
  $('#ctxHandle').textContent = DATA.handle;
  $('#ctxList').innerHTML = DATA.links
    .map((l) => {
      return `<a class="ctx-item" role="menuitem" href="${l.url}" target="_blank" rel="noopener me">
        <span class="ctx-item-main">${linkIcon(l.label)}<span class="ctx-item-label">${l.label}</span></span>
        <span class="ctx-item-go" aria-hidden="true">↗</span>
      </a>`;
    })
    .join('');
}

function startContextMenu() {
  const menu = $('#ctx');
  if (!menu) return;

  const close = () => {
    if (menu.hidden) return;
    menu.hidden = true;
    menu.setAttribute('aria-hidden', 'true');
    root.classList.remove('ctx-open');
  };

  const place = (x, y) => {
    // Reset animation so re-open always plays cleanly.
    menu.style.animation = 'none';
    // Force reflow before re-enabling animation.
    void menu.offsetWidth;
    menu.style.animation = '';

    menu.hidden = false;
    menu.setAttribute('aria-hidden', 'false');
    root.classList.add('ctx-open');

    // Park off-screen first so getBoundingClientRect has real size, then clamp.
    menu.style.transform = 'translate3d(0, 0, 0)';
    const rect = menu.getBoundingClientRect();
    const pad = 10;
    let left = x;
    let top = y;
    if (left + rect.width > innerWidth - pad) left = innerWidth - rect.width - pad;
    if (top + rect.height > innerHeight - pad) top = innerHeight - rect.height - pad;
    if (left < pad) left = pad;
    if (top < pad) top = pad;
    menu.style.transform = `translate3d(${Math.round(left)}px, ${Math.round(top)}px, 0)`;
  };

  // Capture on window — earliest chance to kill the OS menu before anything else.
  // Bubble-only on document was letting the native menu still appear on some Edge/Chrome paths.
  const blockNativeAndOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
    place(e.clientX, e.clientY);
  };

  window.addEventListener('contextmenu', blockNativeAndOpen, true);

  // Belt-and-suspenders: some engines also consult the property handler.
  document.oncontextmenu = (e) => {
    e.preventDefault();
    return false;
  };

  // Dismiss only on primary click outside — never on the right-button press
  // that is about to open/reposition the menu (that race can glitch the event path).
  window.addEventListener(
    'pointerdown',
    (e) => {
      if (e.button !== 0) return;
      if (!menu.hidden && !menu.contains(e.target)) close();
    },
    true
  );

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  addEventListener('resize', close);
  addEventListener('scroll', close, true);

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a.ctx-item')) close();
  });

  // Don't let a right-click inside the custom menu bubble a second contextmenu.
  menu.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
}

/* --- Boot ----------------------------------------------------------------- */

$('#themeToggle').addEventListener('click', () =>
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark')
);
$('#langToggle').addEventListener('click', () => setLang(lang === 'zh' ? 'en' : 'zh'));
$('#skyToggle').addEventListener('click', () => setSky(!root.classList.contains('starry')));

// Follow the system appearance until the visitor states a preference.
matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme') && !root.classList.contains('starry')) {
    applyTheme(e.matches ? 'light' : 'dark');
  }
});

applyTheme(root.dataset.theme);
applySky(localStorage.getItem('sky') === 'stars');
root.lang = lang === 'zh' ? 'zh-Hant' : 'en';
paintPlate();
paintContextMenu();
render();
startClock();
startPointer();
startContextMenu();
startToolsCopy();
startSkyClicks();
