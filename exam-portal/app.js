/* ==========================================================================
   MSEC Exam Portal — application
   Vanilla JS, no build step. Reads the question bank from data.js (DB).
   ========================================================================== */
'use strict';

/* ------------------------------- config -------------------------------- */

const SECTION_DEFS = [
  { id: 'mcq', tab: 'MCQ', label: 'MCQ', marks: 1 },
  { id: 'debug', tab: 'DEBUGGING', label: 'Debugging', marks: 5 },
  { id: 'cod', tab: 'CODING', label: 'Coding', marks: 15 }
];

const MARKS = { mcq: 1, debug: 5, cod: 15 };

// Practice is untimed. The two exam modes count down and auto-submit at zero.
const MODES = {
  practice: { id: 'practice', name: 'Practice', blurb: 'No timer · unlimited attempts', limit: 0 },
  unit: { id: 'unit', name: 'Unit exam', blurb: 'One unit · 2 hours', limit: 120 * 60 },
  model: { id: 'model', name: 'Model exam', blurb: 'All units · 100 marks · 3 hours', limit: 180 * 60 }
};

const STORE_KEY = 'msec-exam-portal-v3';
const THEME_KEY = 'msec-exam-theme';
const SPLIT_MIN = 30;
const SPLIT_MAX = 70;

const JUDGE0_URL = 'https://ce.judge0.com/submissions?base64_encoded=true&wait=true';
const JUDGE0_LANG = 50; // C (GCC 9.2.0)
const JUDGE0_TIMEOUT = 15000;

/* -------------------------------- state -------------------------------- */

const state = {
  screen: 'start', // start | exam | report
  mode: 'practice', // practice | unit | model
  unit: null,
  startUnit: Object.keys(DB)[0],
  paper: null, // { mcq: [], debug: [], cod: [] } — questions tagged with _unit/_ref
  title: '',
  limit: 0, // seconds, 0 = untimed
  sec: 'mcq',
  index: 0,
  remaining: 0,
  paused: false,
  finished: false,
  autoSubmitted: false,

  answers: {}, // `mcq:3`  -> option index
  locked: {}, // `mcq:3`  -> true
  bookmarks: {}, // any key -> true
  viewed: {}, // any key -> true
  codes: {}, // `cod:1`  -> source
  compile: {}, // key -> run result (samples)
  submit: {}, // key -> run result (hidden)
  customInput: {}, // key -> text
  useCustom: {}, // key -> bool
  resultTab: {}, // key -> 'code' | 'result'

  split: 50,
  theme: document.documentElement.getAttribute('data-theme') || 'light',
  editorTheme: 'dark',
  fontSize: 13
};

let cm = null; // live CodeMirror instance
let timerId = null;
let resultRunToken = 0;

/* -------------------------------- utils -------------------------------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function esc(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const pad = (n) => String(n).padStart(2, '0');

function clockText(totalSeconds) {
  const s = Math.max(0, Math.round(totalSeconds));
  return `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;
}

function keyOf(sec = state.sec, i = state.index) {
  return `${sec}:${i}`;
}

function sectionList(sec = state.sec) {
  return state.paper && state.paper[sec] ? state.paper[sec] : [];
}

function sectionMeta(sec) {
  return SECTION_DEFS.find((s) => s.id === sec) || SECTION_DEFS[0];
}

function liveSections() {
  const present = SECTION_DEFS.filter((def) => sectionList(def.id).length > 0);
  return present.map((def, i) => ({
    ...def,
    count: sectionList(def.id).length,
    number: i + 1,
    of: present.length
  }));
}

function sectionOrder() {
  return liveSections().map((s) => s.id);
}

function firstSection() {
  const first = liveSections()[0];
  return first ? first.id : 'mcq';
}

function tagQuestion(unitKey, sec, index) {
  return { ...DB[unitKey][sec][index], _unit: unitKey, _ref: index };
}

function buildUnitPaper(unitKey) {
  const paper = { mcq: [], debug: [], cod: [] };
  SECTION_DEFS.forEach((def) => {
    paper[def.id] = DB[unitKey][def.id].map((_, i) => tagQuestion(unitKey, def.id, i));
  });
  return paper;
}

function shuffled(list) {
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// Model exam: one debugging (5) and one coding (15) problem from every unit.
// 5 × 5 + 5 × 15 = 100 marks exactly.
function buildModelPaper() {
  const units = Object.keys(DB);
  const debug = units.map((u) => tagQuestion(u, 'debug', Math.floor(Math.random() * DB[u].debug.length)));
  const cod = units.map((u) => tagQuestion(u, 'cod', Math.floor(Math.random() * DB[u].cod.length)));
  return { mcq: [], debug: shuffled(debug), cod: shuffled(cod) };
}

function paperPlan(paper) {
  const plan = {};
  SECTION_DEFS.forEach((def) => {
    plan[def.id] = (paper[def.id] || []).map((q) => ({ u: q._unit, r: q._ref }));
  });
  return plan;
}

function paperFromPlan(plan) {
  const paper = { mcq: [], debug: [], cod: [] };
  if (!plan) return paper;
  SECTION_DEFS.forEach((def) => {
    paper[def.id] = (plan[def.id] || [])
      .filter((p) => p && DB[p.u] && DB[p.u][def.id] && DB[p.u][def.id][p.r])
      .map((p) => tagQuestion(p.u, def.id, p.r));
  });
  return paper;
}

function paperTotals(paper = state.paper) {
  const totals = { mcq: 0, debug: 0, cod: 0, max: 0, count: 0 };
  SECTION_DEFS.forEach((def) => {
    const n = paper && paper[def.id] ? paper[def.id].length : 0;
    totals[def.id] = n * def.marks;
    totals.max += n * def.marks;
    totals.count += n;
  });
  return totals;
}

function paperTitle() {
  if (state.mode === 'model') return 'Model exam · All units';
  const name = DB[state.unit] ? DB[state.unit].name : 'Unit';
  return `${name} · ${state.mode === 'unit' ? 'Unit exam' : 'Practice'}`;
}

function toast(message, kind = '') {
  const wrap = $('#toasts');
  const node = document.createElement('div');
  node.className = `toast ${kind}`.trim();
  node.textContent = message;
  wrap.appendChild(node);
  setTimeout(() => {
    node.style.transition = 'opacity .25s, transform .25s';
    node.style.opacity = '0';
    node.style.transform = 'translateY(4px)';
    setTimeout(() => node.remove(), 260);
  }, 2600);
}

function isTypingTarget(el) {
  if (!el) return false;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
}

/* ----------------------------- persistence ----------------------------- */

function persist() {
  if (!state.paper || state.screen === 'start') return;
  try {
    localStorage.setItem(
      STORE_KEY,
      JSON.stringify({
        mode: state.mode,
        unit: state.unit,
        paperPlan: paperPlan(state.paper),
        title: state.title,
        limit: state.limit,
        sec: state.sec,
        index: state.index,
        remaining: state.remaining,
        answers: state.answers,
        locked: state.locked,
        bookmarks: state.bookmarks,
        viewed: state.viewed,
        codes: state.codes,
        customInput: state.customInput,
        useCustom: state.useCustom,
        split: state.split,
        theme: state.theme,
        editorTheme: state.editorTheme,
        fontSize: state.fontSize,
        savedAt: Date.now()
      })
    );
  } catch (_) {
    /* storage full / disabled — keep going */
  }
}

function readSaved() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || !data.paperPlan || !MODES[data.mode]) return null;
    const paper = paperFromPlan(data.paperPlan);
    if (!paper.mcq.length && !paper.debug.length && !paper.cod.length) return null;
    return data;
  } catch (_) {
    return null;
  }
}

function clearSaved() {
  try {
    localStorage.removeItem(STORE_KEY);
  } catch (_) {
    /* ignore */
  }
}

function applySaved(saved) {
  state.mode = MODES[saved.mode] ? saved.mode : 'practice';
  state.unit = saved.unit && DB[saved.unit] ? saved.unit : null;
  state.paper = paperFromPlan(saved.paperPlan);
  state.title = saved.title || paperTitle();
  state.limit = Number.isFinite(saved.limit) ? saved.limit : MODES[state.mode].limit;
  state.sec = sectionList(saved.sec).length ? saved.sec : firstSection();
  state.index = Number.isInteger(saved.index) ? saved.index : 0;
  state.remaining = Number.isFinite(saved.remaining) ? saved.remaining : state.limit;
  state.answers = saved.answers || {};
  state.locked = saved.locked || {};
  state.bookmarks = saved.bookmarks || {};
  state.viewed = saved.viewed || {};
  state.codes = saved.codes || {};
  state.customInput = saved.customInput || {};
  state.useCustom = saved.useCustom || {};
  state.split = Number.isFinite(saved.split) ? saved.split : 50;
  state.editorTheme = saved.editorTheme === 'light' ? 'light' : 'dark';
  state.fontSize = Number.isFinite(saved.fontSize) ? saved.fontSize : 13;
  if (saved.theme === 'dark' || saved.theme === 'light') setTheme(saved.theme, false);
}

/* ------------------------------- theme --------------------------------- */

function setTheme(theme, save = true) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  const btn = $('#themeBtn');
  if (btn) {
    btn.setAttribute('aria-pressed', String(theme === 'dark'));
    btn.title = theme === 'dark' ? 'Switch to light theme (T)' : 'Switch to dark theme (T)';
  }
  if (save) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (_) {
      /* ignore */
    }
    persist();
  }
}

/* ------------------------------ start screen --------------------------- */

function renderStart() {
  state.screen = 'start';
  stopTimer();
  setExamChrome(false);

  const saved = readSaved();
  if (!DB[state.startUnit]) state.startUnit = Object.keys(DB)[0];
  if (!MODES[state.mode]) state.mode = 'practice';

  const isModel = state.mode === 'model';
  const active = DB[state.startUnit];
  const savedUnit = saved && saved.unit ? saved.unit : null;
  const unitKeys = Object.keys(DB);

  const preview = isModel
    ? { mcq: 0, debug: unitKeys.length, cod: unitKeys.length }
    : { mcq: active.mcq.length, debug: active.debug.length, cod: active.cod.length };
  const maxMarks = preview.mcq * MARKS.mcq + preview.debug * MARKS.debug + preview.cod * MARKS.cod;
  const totalQuestions = preview.mcq + preview.debug + preview.cod;

  const modeCards = Object.values(MODES)
    .map(
      (m) => `
      <button class="mode-card" type="button" role="radio" aria-checked="${state.mode === m.id}"
              data-action="pick-mode" data-mode="${m.id}">
        <span class="mode-name">${esc(m.name)}</span>
        <span class="mode-blurb">${esc(m.blurb)}</span>
      </button>`
    )
    .join('');

  const unitCards = unitKeys
    .map((key, i) => {
      const unit = DB[key];
      const count = unit.mcq.length + unit.debug.length + unit.cod.length;
      return `
        <button class="unit-card" type="button" role="radio" aria-checked="${key === state.startUnit}"
                data-action="pick-unit" data-unit="${key}">
          <span class="num">Unit ${i + 1}${savedUnit === key ? ' · in progress' : ''}</span>
          <span class="name">${esc(unit.name.replace(/^Unit \d+:\s*/, ''))}</span>
          <span class="counts">
            <span>${unit.mcq.length} MCQ</span>
            <span>${unit.debug.length} Debug</span>
            <span>${unit.cod.length} Coding</span>
            <span>${count} questions</span>
          </span>
        </button>`;
    })
    .join('');

  const resumeBanner = saved
    ? `<div class="resume-banner">
         <div>
           <strong>Unfinished attempt</strong>
           <span>${esc(saved.title || 'Exam')} · ${
             saved.limit ? `${clockText(saved.remaining || 0)} left` : 'practice · no limit'
           }</span>
         </div>
         <div class="resume-actions">
           <button class="btn" type="button" data-action="discard-saved">Discard</button>
           <button class="btn btn-primary" type="button" data-action="resume-saved">Resume</button>
         </div>
       </div>`
    : '';

  const summaryTitle = isModel ? 'Model exam · all five units' : esc(active.name);
  const timeLine = isModel
    ? clockText(MODES.model.limit)
    : MODES[state.mode].limit
    ? clockText(MODES[state.mode].limit)
    : 'no time limit';
  const composition = isModel
    ? '5 debugging + 5 coding · one of each from every unit'
    : `${preview.mcq} MCQ · ${preview.debug} debugging · ${preview.cod} coding`;
  const startLabel = isModel ? 'Start model exam' : state.mode === 'unit' ? 'Start unit exam' : 'Start practising';

  $('#examMain').innerHTML = `
    <section class="start">
      <div class="start-inner">
        <span class="start-eyebrow">U24CS302 · Data Structures</span>
        <h1>Exam portal</h1>
        <p class="start-sub">
          Practise any unit with no clock, sit a timed unit exam, or take the 100-mark model exam
          across all five units. Answers and code are saved on this device as you go.
        </p>

        ${resumeBanner}

        <h2 class="start-h2">Choose a mode</h2>
        <div class="mode-grid" role="radiogroup" aria-label="Exam mode">${modeCards}</div>

        ${
          isModel
            ? ''
            : `<h2 class="start-h2">Choose a unit</h2>
               <div class="unit-list" role="radiogroup" aria-label="Choose a unit">${unitCards}</div>`
        }

        <div class="start-panel">
          <div class="start-summary">
            <strong>${summaryTitle}</strong>
            <span>${maxMarks} marks · ${totalQuestions} questions · ${timeLine}</span>
            <span class="start-composition">${composition}</span>
          </div>
          <button class="btn btn-primary" type="button" data-action="start-exam">${startLabel}</button>
        </div>
      </div>
    </section>`;

  bindSplitHandle();
}

/* ------------------------------ exam shell ----------------------------- */

function setExamChrome(on) {
  $$('.exam-only').forEach((el) => {
    el.hidden = !on;
  });
  const submitBtn = $('#submitTestBtn');
  if (submitBtn) submitBtn.disabled = !on;
  const pauseBtn = $('#pauseBtn');
  if (pauseBtn) pauseBtn.hidden = !on || !state.limit;
}

function startExam({ mode = state.mode, unit = state.unit || state.startUnit, resume = false } = {}) {
  if (!resume) {
    state.mode = MODES[mode] ? mode : 'practice';
    state.unit = state.mode === 'model' ? null : DB[unit] ? unit : state.startUnit;
    state.paper = state.mode === 'model' ? buildModelPaper() : buildUnitPaper(state.unit);
    state.title = paperTitle();
    state.limit = MODES[state.mode].limit;
    state.remaining = state.limit;
    state.answers = {};
    state.locked = {};
    state.bookmarks = {};
    state.viewed = {};
    state.codes = {};
    state.compile = {};
    state.submit = {};
    state.customInput = {};
    state.useCustom = {};
    state.resultTab = {};
    state.sec = firstSection();
    state.index = 0;
  }
  state.paused = false;
  state.finished = false;
  state.autoSubmitted = false;
  state.screen = 'exam';

  setExamChrome(true);
  renderTopbarSelect();
  render();
  startTimer();
  persist();
  toast(
    resume
      ? 'Attempt resumed'
      : state.limit
      ? `${MODES[state.mode].name} started — ${clockText(state.limit)} on the clock`
      : 'Practice mode — no time limit'
  );
}

function topbarChip() {
  if (state.mode === 'model') return 'MODEL EXAM · 100';
  const unitKey = state.unit ? state.unit.toUpperCase() : 'UNIT';
  return `${unitKey} · ${state.mode === 'unit' ? 'EXAM' : 'PRACTICE'}`;
}

function renderTopbarSelect() {
  const chip = $('#unitChip');
  if (chip) chip.textContent = topbarChip();

  const select = $('#sectionSelect');
  if (!select) return;
  const sections = liveSections();
  select.innerHTML = sections
    .map(
      (s) => `<option value="${s.id}" ${s.id === state.sec ? 'selected' : ''}>
        Section ${s.number}/${s.of} | ${s.tab} (${s.count})
      </option>`
    )
    .join('');
  select.value = state.sec;
}

function startTimer() {
  stopTimer();
  updateTimer();
  if (!state.limit) return;
  timerId = setInterval(() => {
    if (state.screen !== 'exam' || state.paused || state.finished) return;
    state.remaining -= 1;
    updateTimer();
    if (state.remaining <= 0) {
      state.remaining = 0;
      clearInterval(timerId);
      timerId = null;
      finishExam({ auto: true });
    }
  }, 1000);
}

function stopTimer() {
  if (timerId) clearInterval(timerId);
  timerId = null;
}

function updateTimer() {
  const chip = $('#timerChip');
  const text = $('#timerText');
  if (!chip || !text) return;
  chip.dataset.untimed = String(!state.limit);
  if (!state.limit) {
    text.textContent = 'No limit';
    chip.dataset.low = 'false';
    chip.dataset.paused = 'false';
    chip.title = 'Practice mode — no countdown';
  } else {
    text.textContent = clockText(state.remaining);
    chip.dataset.low = String(state.remaining <= 300 && !state.finished);
    chip.dataset.paused = String(state.paused);
    chip.title = 'Time remaining';
  }
  persist();
}

/* -------------------------------- render ------------------------------- */

function render() {
  if (state.screen === 'start') return renderStart();
  if (state.screen === 'report') return renderReport();

  if (!state.paper) return renderStart();
  if (!sectionList(state.sec).length) state.sec = firstSection();
  const list = sectionList();
  if (!list.length) return renderStart();
  state.index = Math.max(0, Math.min(state.index, list.length - 1));

  setExamChrome(true);
  renderTopbarSelect();

  const key = keyOf();
  state.viewed[key] = true;

  $('#examMain').innerHTML = `
    <aside class="palette" aria-label="Question palette">
      <div class="palette-grid" id="paletteGrid"></div>
      <div class="palette-stats" id="paletteStats"></div>
    </aside>
    <section class="workspace" id="workspace">
      <div class="panel" id="leftPanel"></div>
      <div class="split-handle" id="splitHandle" role="separator" aria-orientation="vertical"
           aria-label="Resize question and answer panels" tabindex="0"></div>
      <div class="panel" id="rightPanel"></div>
    </section>`;

  $('#workspace').style.gridTemplateColumns = `minmax(0, ${state.split}%) 10px minmax(0, 1fr)`;

  renderPalette();
  renderWorkspace();
  renderBottomBar();
  bindSplitHandle();
  persist();
}

/* ------------------------------- palette ------------------------------- */

function isAnswered(sec, i) {
  const key = `${sec}:${i}`;
  if (sec === 'mcq') return state.answers[key] !== undefined && !!state.locked[key];
  const res = state.submit[key];
  return !!(res && res.passedCount > 0);
}

function paletteCounts() {
  const list = sectionList();
  let answered = 0;
  let bookmarked = 0;
  let skipped = 0;
  let notViewed = 0;
  let saved = 0;

  for (let i = 0; i < list.length; i += 1) {
    const key = `${state.sec}:${i}`;
    if (isAnswered(state.sec, i)) answered += 1;
    if (state.bookmarks[key]) bookmarked += 1;
    if (state.viewed[key] && !isAnswered(state.sec, i)) skipped += 1;
    if (!state.viewed[key]) notViewed += 1;
    if (state.codes[key] || state.answers[key] !== undefined) saved += 1;
  }
  return { answered, bookmarked, skipped, notViewed, saved, total: list.length };
}

function renderPalette() {
  const grid = $('#paletteGrid');
  const stats = $('#paletteStats');
  if (!grid) return;
  const list = sectionList();

  grid.innerHTML = list.map((_, i) => {
    const key = `${state.sec}:${i}`;
    const current = i === state.index;
    const answered = isAnswered(state.sec, i);
    const bookmarked = !!state.bookmarks[key];
    const viewed = !!state.viewed[key];

    let cls = 'q-btn';
    let stateName = 'not visited';
    if (answered) {
      cls += ' state-answered';
      stateName = 'answered';
    } else if (bookmarked) {
      cls += ' state-bookmarked';
      stateName = 'bookmarked';
    } else if (viewed) {
      cls += ' state-skipped';
      stateName = 'visited, not answered';
    }

    return `<button class="${cls}" type="button" data-action="goto-question" data-index="${i}"
              ${current ? 'aria-current="true"' : ''}
              aria-label="Question ${i + 1}, ${stateName}"
              title="Question ${i + 1} — ${stateName}">${i + 1}${bookmarked && !current ? '<i class="dot"></i>' : ''}</button>`;
  }).join('');

  const c = paletteCounts();
  stats.innerHTML = `
    <div class="stat"><span>Answered</span><span class="stat-val">${c.answered}/${c.total}</span></div>
    <div class="stat"><span>Bookmarked</span><span class="stat-val">${c.bookmarked}/${c.total}</span></div>
    <div class="stat"><span>Skipped</span><span class="stat-val">${c.skipped}/${c.total}</span></div>
    <div class="stat"><span>Not Viewed</span><span class="stat-val">${c.notViewed}/${c.total}</span></div>
    <div class="stat"><span>Saved</span><span class="stat-val">${c.saved}/${c.total}</span></div>
    <button class="palette-more" type="button" data-action="legend">View More</button>`;
}

/* ------------------------------ workspace ------------------------------ */

function bookmarkButton() {
  const key = keyOf();
  const on = !!state.bookmarks[key];
  return `<button class="bookmark-btn" type="button" data-action="bookmark" data-on="${on}"
            aria-pressed="${on}" aria-label="Bookmark this question" title="Bookmark (B)">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="${on ? 'currentColor' : 'none'}"
                 stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true">
              <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.5L5 21V4a1 1 0 0 1 1-1z" />
            </svg>
          </button>`;
}

function renderWorkspace() {
  if (state.sec === 'mcq') {
    cm = null;
    renderMcqWorkspace();
  } else {
    renderCodeWorkspace();
  }
}

function renderMcqWorkspace() {
  const q = sectionList()[state.index];
  const key = keyOf();
  const selected = state.answers[key];
  const locked = !!state.locked[key];

  $('#leftPanel').innerHTML = `
    <div class="panel-head">
      Question No : ${state.index + 1} / ${sectionList().length}
      ${bookmarkButton()}
    </div>
    <div class="panel-body">
      <div class="q-kicker">Multi Choice Type Question</div>
      <div class="q-text">${esc(q.q)}</div>
      ${typeof q.code === 'string' && q.code.trim() ? codeBlock(q.code) : ''}
      <div class="q-meta-row">
        <span class="chip">Marks · ${MARKS.mcq}</span>
        <span class="chip">No negative marking</span>
        ${locked ? '<span class="chip ok">Answer locked</span>' : '<span class="chip warn">Not submitted</span>'}
      </div>
      <div class="note-card">
        <h4>How this section works</h4>
        Pick one option, then press <strong>Submit</strong> to lock it. A locked answer counts towards
        your score; you can unlock it while the exam is running.
      </div>
    </div>`;

  $('#rightPanel').innerHTML = `
    <div class="panel-head">Answer here</div>
    <div class="panel-body">
      <div class="options" role="radiogroup" aria-label="Answer options">
        ${q.o.map((opt, i) => `
          <button class="option" type="button" role="radio" aria-checked="${selected === i}"
                  data-action="option" data-opt="${i}" data-locked="${locked}"
                  ${locked ? 'tabindex="-1"' : ''}>
            <span class="radio" aria-hidden="true"></span>
            <span>${esc(opt)}</span>
          </button>`).join('')}
      </div>
      ${
        locked
          ? `<div class="options-locked-hint">
               <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                 <rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" />
               </svg>
               Answer locked and counted. Use “Unlock” in the bar below to change it.
             </div>`
          : ''
      }
    </div>`;
}

function codeBlock(source) {
  const lines = String(source).replace(/\r\n?/g, '\n').split('\n');
  return `<div class="code-snippet" role="region" aria-label="Code snippet"><table><tbody>${lines
    .map((line, i) => `<tr><td class="ln">${i + 1}</td><td>${esc(line) || ' '}</td></tr>`)
    .join('')}</tbody></table></div>`;
}

function sampleCases(q) {
  if (Array.isArray(q.samples) && q.samples.length) {
    return q.samples.map((s) => ({ input: s.input ?? '', expected: s.expected ?? '' }));
  }
  return [{ input: q.sampleIn ?? '', expected: q.sampleOut ?? '' }];
}

// The bank ships two overlapping hidden sets (hidden_cases + hidden). Use the
// union so no curated case is skipped.
function hiddenCases(q) {
  const seen = new Set();
  const out = [];
  [...(q.hidden_cases || []), ...(q.hidden || [])].forEach((c) => {
    const input = c.input ?? '';
    const expected = c.expected ?? '';
    const id = `${input}\u0000${expected}`;
    if (seen.has(id)) return;
    seen.add(id);
    out.push({ input, expected });
  });
  return out;
}

function renderCodeWorkspace() {
  const q = sectionList()[state.index];
  const isDebug = state.sec === 'debug';
  const key = keyOf();
  const samples = sampleCases(q);
  const hidden = hiddenCases(q);
  const sub = state.submit[key];
  const tab = state.resultTab[key] || 'code';

  $('#leftPanel').innerHTML = `
    <div class="panel-head">
      Question No : ${state.index + 1} / ${sectionList().length}
      ${bookmarkButton()}
    </div>
    <div class="panel-body">
      <div class="q-kicker">${isDebug ? 'Debugging' : 'Single File Programming Question'}</div>
      <div class="q-heading">${esc(q.title || `Question ${state.index + 1}`)}</div>
      <div class="q-text">${esc(q.ps || '')}</div>

      <div class="q-label">Sample test cases</div>
      ${samples
        .map(
          (s, i) => `
        <div class="sample-grid">
          <div class="sample-card"><h4>Input ${i + 1}</h4><pre>${esc(s.input) || '—'}</pre></div>
          <div class="sample-card"><h4>Output ${i + 1}</h4><pre>${esc(s.expected) || '—'}</pre></div>
        </div>`
        )
        .join('')}

      <div class="q-meta-row">
        ${state.mode === 'model' && q._unit ? `<span class="chip accent">Unit ${q._unit.slice(1)}</span>` : ''}
        <span class="chip">Marks · ${MARKS[state.sec]}</span>
        <span class="chip">${hidden.length} hidden test case${hidden.length === 1 ? '' : 's'}</span>
        <span class="chip">No negative marking</span>
        ${sub ? `<span class="chip ${sub.passedCount === sub.total ? 'ok' : 'warn'}">Last submit ${sub.passedCount}/${sub.total}</span>` : ''}
      </div>

      <div class="note-card">
        <h4>Note</h4>
        The program is evaluated when <strong>Submit Code</strong> is clicked. Extra spaces or
        new line characters in the output will fail a test case, so print exactly what the
        expected output shows.
      </div>
    </div>`;

  $('#rightPanel').innerHTML = `
    <div class="ide">
      <div class="ide-bar">
        <span class="ide-title">${tab === 'result' ? 'Test results' : 'Fill your code here'}</span>
        <div class="ide-tabs" role="tablist" aria-label="Editor and results">
          <button class="ide-tool" type="button" role="tab" aria-selected="${tab === 'code'}"
                  data-action="tab-code" style="width:auto;padding:0 9px">Code</button>
          <button class="ide-tool" type="button" role="tab" aria-selected="${tab === 'result'}"
                  data-action="tab-result" style="width:auto;padding:0 9px">
            Result${sub ? ` <span style="opacity:.75">· ${sub.passedCount}/${sub.total}</span>` : ''}
          </button>
        </div>
        <span class="grow"></span>
        <span class="impl-pill">C (17)</span>
        <div class="ide-tools">
          <button class="ide-tool" type="button" data-action="font-dec" title="Smaller font" aria-label="Decrease editor font size">A−</button>
          <button class="ide-tool" type="button" data-action="font-inc" title="Larger font" aria-label="Increase editor font size">A+</button>
          <button class="ide-tool" type="button" data-action="editor-theme"
                  title="Toggle editor theme" aria-label="Toggle editor theme">
            ${
              state.editorTheme === 'dark'
                ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
                : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'
            }
          </button>
        </div>
      </div>

      <div class="editor-shell" id="editorShell" ${tab === 'result' ? 'hidden' : ''}>
        ${isDebug ? lockedRegion('Locked header code', q.header) : ''}
        <div id="editorMount" class="editor-mount"></div>
        ${isDebug ? lockedRegion('Locked driver & test cases', q.footer, true) : ''}
        <details class="custom-input" id="customInputWrap" ${state.useCustom[key] ? 'open' : ''}>
          <summary>Provide custom input</summary>
          <textarea id="customInputArea" spellcheck="false"
                    placeholder="Type the stdin you want to run against">${esc(state.customInput[key] || '')}</textarea>
        </details>
      </div>

      <div class="result-scroll" id="resultArea" ${tab === 'result' ? '' : 'hidden'}>
        ${renderResultBody()}
      </div>
    </div>`;

  if (tab === 'code') {
    mountEditor(key);
    bindCustomInput(key);
  }
}

function lockedRegion(title, source, bottom = false) {
  if (!source) return '';
  return `
    <div class="locked-region ${bottom ? 'bottom' : ''}">
      <header>
        <span aria-hidden="true">🔒</span> ${esc(title)}
        <span class="badge">read only</span>
      </header>
      <pre>${esc(source)}</pre>
    </div>`;
}

function defaultCode() {
  const q = sectionList()[state.index];
  if (state.sec === 'debug') return q.buggy || '';
  return '#include <stdio.h>\n\nint main() {\n    \n    return 0;\n}\n';
}

function currentCode() {
  const key = keyOf();
  return state.codes[key] !== undefined ? state.codes[key] : defaultCode();
}

function mountEditor(key) {
  const mount = $('#editorMount');
  if (!mount || typeof CodeMirror === 'undefined') return;

  if (cm) {
    try {
      cm.getWrapperElement().remove();
    } catch (_) {
      /* already detached */
    }
    cm = null;
  }

  const textarea = document.createElement('textarea');
  textarea.value = currentCode();
  textarea.setAttribute('aria-label', 'C source code editor');
  mount.appendChild(textarea);

  cm = CodeMirror.fromTextArea(textarea, {
    mode: 'text/x-csrc',
    theme: state.editorTheme === 'light' ? 'default' : 'dracula',
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    indentUnit: 4,
    tabSize: 4,
    indentWithTabs: false,
    smartIndent: true,
    lineWrapping: true,
    viewportMargin: Infinity
  });
  cm.setValue(currentCode());
  cm.setSize('100%', '100%');
  cm.getWrapperElement().style.fontSize = `${state.fontSize}px`;
  cm.on('change', () => {
    state.codes[key] = cm.getValue();
    persist();
    if (state.resultTab[key] === 'result') {
      state.resultTab[key] = 'code';
    }
  });
  setTimeout(() => cm && cm.refresh(), 30);
}

function bindCustomInput(key) {
  const area = $('#customInputArea');
  const details = $('#customInputWrap');
  if (area) {
    area.addEventListener('input', () => {
      state.customInput[key] = area.value;
      state.useCustom[key] = true;
      persist();
    });
  }
  if (details) {
    details.addEventListener('toggle', () => {
      state.useCustom[key] = details.open;
      persist();
    });
  }
}

/* ------------------------------- results ------------------------------- */

function renderResultBody() {
  return resultMarkup(keyOf());
}

function resultMarkup(key) {
  const result = state.resultView && state.resultView.key === key ? state.resultView : null;
  if (!result) {
    return `<div class="result-pending">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
      </svg>
      <div><strong>No result yet</strong><br />Run your code with <em>Compile &amp; Run</em> or <em>Submit Code</em>.</div>
    </div>`;
  }

  if (result.running) {
    return `<div class="result-pending">
      <div class="spinner" aria-hidden="true"></div>
      <div><strong>${esc(result.title || 'Running…')}</strong><br />${esc(result.note || '')}</div>
      <div class="progress-line"><i style="width:${result.progress || 6}%"></i></div>
      <div style="font-size:12px">${result.done || 0} of ${result.total || 0} test cases</div>
    </div>`;
  }

  const custom = result.kind === 'custom';
  const head = `
    <div class="result-title">Result</div>
    <div class="result-score">
      ${
        custom
          ? 'Run complete'
          : `${result.passedCount}/${result.total} ${
              result.kind === 'submit' ? 'test cases passed' : 'sample test cases passed'
            } <span class="of">· ${result.kind === 'submit' ? 'hidden set' : 'sample set'}</span>`
      }
    </div>
    <div class="result-title">Compiler message</div>
    <div class="msg-box ${result.compileError ? 'error' : ''}">${esc(result.compileError || 'Compilation successful')}</div>`;

  if (result.compileError) return head;

  if (result.kind === 'submit') {
    return `${head}
      <div class="result-title">Hidden test cases</div>
      <div class="tc-table-wrap">
        <table class="tc-table">
          <thead><tr>
            <th>Test case</th><th>Result</th><th>Status</th><th>Time (ms)</th>
          </tr></thead>
          <tbody>
            ${result.cases
              .map(
                (c) => `<tr>
                  <td>${c.index}</td>
                  <td class="${c.passed ? 'pass' : 'fail'} tc-x">${c.passed ? '✔' : '✘'}</td>
                  <td class="${c.passed ? 'pass' : 'fail'}">${c.passed ? 'Passed' : 'Failed'}</td>
                  <td>${c.timeMs ?? '—'}</td>
                </tr>`
              )
              .join('')}
          </tbody>
        </table>
      </div>`;
  }

  // sample / custom runs
  return `${head}
    <div class="result-title">${custom ? 'Custom run' : 'Sample test cases'}</div>
    ${result.cases
      .map(
        (c) => `<article class="tc-card">
          <header class="${custom ? '' : c.passed ? 'pass' : 'fail'}">
            <span>${custom ? 'Custom input' : `Test case ${c.index} — ${c.passed ? 'Passed' : 'Failed'}`}</span>
            <span>${c.timeMs ?? '—'} ms</span>
          </header>
          <div class="io-grid">
            <div>
              <h5>Expected output</h5>
              <div class="io-box ${c.expected ? '' : 'empty'}">${esc(c.expected)}</div>
            </div>
            <div>
              <h5>Your output</h5>
              <div class="io-box ${c.actual ? '' : 'empty'}">${esc(c.actual)}</div>
            </div>
          </div>
        </article>`
      )
      .join('')}`;
}

function showResultPane(key) {
  state.resultTab[key] = 'result';
  persist();
  const shell = $('#editorShell');
  const area = $('#resultArea');
  if (shell) shell.hidden = true;
  if (area) {
    area.hidden = false;
    area.innerHTML = resultMarkup(key);
  }
  $$('#rightPanel [role="tab"]').forEach((t) => {
    t.setAttribute('aria-selected', String(t.dataset.action === 'tab-result'));
  });
  updateResultTabLabel();
}

function updateResultTabLabel() {
  const key = keyOf();
  const sub = state.submit[key];
  const tab = $('#rightPanel [data-action="tab-result"]');
  if (tab) {
    tab.innerHTML = `Result${sub ? ` <span style="opacity:.75">· ${sub.passedCount}/${sub.total}</span>` : ''}`;
  }
  const title = $('#rightPanel .ide-title');
  if (title) title.textContent = state.resultTab[key] === 'result' ? 'Test results' : 'Fill your code here';
}

function showCodePane() {
  const key = keyOf();
  state.resultTab[key] = 'code';
  persist();
  renderWorkspace();
}

function redrawResult() {
  const key = keyOf();
  const area = $('#resultArea');
  if (area && state.resultTab[key] === 'result') area.innerHTML = resultMarkup(key);
}

/* ------------------------------- bottom bar ---------------------------- */

function renderBottomBar() {
  const list = sectionList();
  const key = keyOf();
  const marks = $('#marksInfo');
  const group = $('#actionGroup');
  const isMcq = state.sec === 'mcq';
  const locked = !!state.locked[key];

  marks.innerHTML = `
    <span>Marks : <b>${MARKS[state.sec]}</b></span>
    <span style="color:var(--border-strong)">|</span>
    <span>Negative Marks : <b>0</b></span>
    <span style="color:var(--border-strong)">|</span>
    <span style="color:var(--muted)">${sectionMeta(state.sec).tab} · ${state.index + 1} of ${list.length}</span>`;

  if (isMcq) {
    group.innerHTML = `
      <button class="btn" type="button" data-action="clear-mcq" ${locked || state.answers[key] === undefined ? 'disabled' : ''}>Clear</button>
      ${
        locked
          ? `<button class="btn" type="button" data-action="unlock-mcq">Unlock</button>`
          : `<button class="btn btn-primary" type="button" data-action="lock-mcq">Submit answer</button>`
      }
      <button class="btn" type="button" data-action="prev" ${state.index === 0 ? 'disabled' : ''}>Prev</button>
      <button class="btn" type="button" data-action="next">${state.index === list.length - 1 ? 'Next section' : 'Next'}</button>`;
  } else {
    const sub = state.submit[key];
    const hiddenCount = hiddenCases(sectionList()[state.index]).length;
    const ratio = sub ? `${sub.passedCount}/${sub.total}` : `0/${hiddenCount}`;
    const ratioCls = sub ? (sub.passedCount === sub.total ? 'pass' : 'fail') : '';
    group.innerHTML = `
      <button class="btn" type="button" data-action="reset-code">Clear</button>
      <button class="btn" type="button" data-action="run" id="runBtn">Compile &amp; Run</button>
      <span class="ratio ${ratioCls}" title="Hidden test cases passed">${ratio}</span>
      <button class="btn btn-primary" type="button" data-action="submit-code" id="submitCodeBtn">Submit Code</button>
      <button class="btn" type="button" data-action="prev" ${state.index === 0 ? 'disabled' : ''}>Prev</button>
      <button class="btn" type="button" data-action="next">${state.index === list.length - 1 ? 'Next section' : 'Next'}</button>`;
  }
}

/* ------------------------------- navigation ---------------------------- */

function goToQuestion(index) {
  const list = sectionList();
  if (!list.length) return;
  state.index = Math.max(0, Math.min(index, list.length - 1));
  state.viewed[keyOf()] = true;
  render();
}

function goToSection(secId) {
  if (!sectionList(secId).length) return;
  state.sec = secId;
  state.index = 0;
  state.viewed[keyOf()] = true;
  render();
}

function nextQuestion() {
  const list = sectionList();
  if (state.index < list.length - 1) return goToQuestion(state.index + 1);
  const order = sectionOrder();
  const next = order[order.indexOf(state.sec) + 1];
  if (next) {
    goToSection(next);
    toast(`Moved to ${sectionMeta(next).tab.toLowerCase()} section`);
  } else {
    toast('Last question of the test — review or submit.');
  }
}

function prevQuestion() {
  if (state.index > 0) return goToQuestion(state.index - 1);
  const order = sectionOrder();
  const prev = order[order.indexOf(state.sec) - 1];
  if (prev) {
    state.sec = prev;
    state.index = sectionList(prev).length - 1;
    render();
  }
}

/* ---------------------------- mcq interactions ------------------------- */

function selectOption(i) {
  const key = keyOf();
  if (state.locked[key]) {
    toast('Answer is locked. Unlock it to change your choice.');
    return;
  }
  state.answers[key] = i;
  persist();
  render();
}

function clearOption() {
  const key = keyOf();
  if (state.locked[key]) return;
  delete state.answers[key];
  persist();
  render();
}

function lockAnswer() {
  const key = keyOf();
  if (state.answers[key] === undefined) {
    toast('Choose an option before submitting.', 'err');
    return;
  }
  state.locked[key] = true;
  persist();
  render();
  toast('Answer locked');
}

function unlockAnswer() {
  const key = keyOf();
  state.locked[key] = false;
  persist();
  render();
}

function toggleBookmark() {
  const key = keyOf();
  state.bookmarks[key] = !state.bookmarks[key];
  persist();
  renderPalette();
  const btn = $('.bookmark-btn');
  if (btn) {
    btn.dataset.on = String(!!state.bookmarks[key]);
    btn.setAttribute('aria-pressed', String(!!state.bookmarks[key]));
    btn.querySelector('svg').setAttribute('fill', state.bookmarks[key] ? 'currentColor' : 'none');
  }
  toast(state.bookmarks[key] ? 'Bookmarked' : 'Bookmark removed');
}

/* ------------------------------ code runner ---------------------------- */

function b64encode(text) {
  return btoa(unescape(encodeURIComponent(text)));
}

function b64decode(text) {
  if (!text) return '';
  try {
    return decodeURIComponent(escape(atob(text)));
  } catch (_) {
    return '';
  }
}

function normaliseOut(text) {
  return String(text == null ? '' : text)
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line.replace(/[ \t]+$/, ''))
    .join('\n')
    .trim();
}

const runCache = new Map();

async function runSingle(program, input) {
  const cacheKey = `${program}\u0000${input}`;
  if (runCache.has(cacheKey)) return { ...runCache.get(cacheKey) };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), JUDGE0_TIMEOUT);
  const started = performance.now();

  try {
    const response = await fetch(JUDGE0_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source_code: b64encode(program),
        language_id: JUDGE0_LANG,
        stdin: b64encode(input || '')
      }),
      signal: controller.signal
    });

    if (response.status === 429) {
      return { serviceError: 'The online compiler is rate limited right now. Wait a few seconds and try again.' };
    }
    if (!response.ok) {
      return { serviceError: `Compiler service returned HTTP ${response.status}. Try again shortly.` };
    }

    const data = await response.json();
    const statusId = data.status ? data.status.id : 0;
    const statusText = data.status ? data.status.description : '';
    const compileOut = b64decode(data.compile_output);
    const stderr = b64decode(data.stderr);
    const stdout = normaliseOut(b64decode(data.stdout));
    const timeMs = Math.max(1, Math.round((parseFloat(data.time) || (performance.now() - started) / 1000) * 1000));

    if (compileOut.trim() || statusId === 6) {
      return { compileError: compileOut.trim() || 'Compilation error.' };
    }
    if (statusId === 5) {
      return { runtimeError: 'Time limit exceeded for this input.', actual: stdout, timeMs };
    }
    if (statusId > 6 || (stderr && statusId > 3 && statusId !== 4)) {
      return { runtimeError: stderr.trim() || statusText || 'Runtime error.', actual: stdout, timeMs };
    }

    const result = { actual: stdout, timeMs, status: statusText || 'Accepted' };
    runCache.set(cacheKey, result);
    return { ...result };
  } catch (err) {
    return {
      serviceError:
        err && err.name === 'AbortError'
          ? 'The compiler did not respond in time. Check your connection and retry.'
          : 'Could not reach the online C compiler. Check the internet connection and try again.'
    };
  } finally {
    clearTimeout(timeout);
  }
}

function programFor(q) {
  const body = state.codes[keyOf()] !== undefined ? state.codes[keyOf()] : defaultCode();
  if (state.sec === 'debug') return `${q.header || ''}\n${body}\n${q.footer || ''}`;
  return body;
}

async function runCode({ submit = false } = {}) {
  const key = keyOf();
  const q = sectionList()[state.index];
  const token = ++resultRunToken;
  const program = programFor(q);

  if (!program.trim()) {
    toast('Write some code first.', 'err');
    return;
  }

  const useCustom = !submit && !!state.useCustom[key];
  const customText = state.customInput[key] || '';
  if (useCustom && !customText.trim()) {
    toast('Add the custom input, or close the custom input box.', 'err');
    return;
  }

  const cases = submit
    ? hiddenCases(q)
    : useCustom
    ? [{ input: customText, expected: null }]
    : sampleCases(q);

  const kind = submit ? 'submit' : useCustom ? 'custom' : 'compile';

  state.resultView = {
    key,
    running: true,
    kind,
    title: submit ? 'Testing hidden test cases…' : useCustom ? 'Running your input…' : 'Compiling & running samples…',
    note: 'GCC on Judge0 · typically a few seconds',
    done: 0,
    total: cases.length,
    progress: 4,
    cases: [],
    passedCount: 0
  };

  toggleRunButtons(true, submit);
  showResultPane(key);

  const results = [];
  let compileError = null;

  for (let i = 0; i < cases.length; i += 1) {
    if (token !== resultRunToken) return; // superseded by a newer run
    const c = cases[i];
    const run = await runSingle(program, c.input);

    if (run.serviceError || run.compileError) {
      compileError = run.serviceError || run.compileError;
      results.push({
        index: i + 1,
        input: c.input,
        expected: c.expected,
        actual: run.actual || '',
        passed: false,
        timeMs: run.timeMs
      });
      break;
    }

    const passed = run.runtimeError
      ? false
      : c.expected === null
      ? !!String(run.actual || '').length
      : normaliseOut(run.actual) === normaliseOut(c.expected);

    results.push({
      index: i + 1,
      input: c.input,
      expected: c.expected,
      actual: run.actual || '',
      passed,
      timeMs: run.timeMs,
      status: run.runtimeError || run.status || (passed ? 'Passed' : 'Wrong answer')
    });

    state.resultView.done = i + 1;
    state.resultView.progress = Math.round(((i + 1) / cases.length) * 100);
    state.resultView.cases = results.slice();
    state.resultView.passedCount = results.filter((r) => r.passed).length;
    redrawResult();
  }

  if (token !== resultRunToken) return;

  const record = {
    kind,
    key,
    cases: results,
    passedCount: results.filter((r) => r.passed).length,
    total: cases.length,
    compileError,
    ranAt: Date.now()
  };

  state.resultView = record;
  if (submit) {
    state.submit[key] = record;
    state.lastResultTab = 'result';
  } else {
    state.compile[key] = record;
  }
  state.resultTab[key] = 'result';
  persist();

  toggleRunButtons(false, submit);
  showResultPane(key);
  renderPalette();
  renderBottomBar();

  if (record.compileError) {
    toast('Compilation failed — see the message.', 'err');
  } else if (kind === 'custom') {
    toast('Custom run finished');
  } else {
    toast(`${record.passedCount}/${record.total} ${submit ? 'hidden test cases' : 'sample cases'} passed`,
      record.passedCount === record.total ? 'ok' : 'err');
  }
}

function toggleRunButtons(busy, submit) {
  const runBtn = $('#runBtn');
  const subBtn = $('#submitCodeBtn');
  if (runBtn) {
    runBtn.disabled = busy;
    runBtn.textContent = busy && !submit ? 'Running…' : 'Compile & Run';
  }
  if (subBtn) {
    subBtn.disabled = busy;
    subBtn.textContent = busy && submit ? 'Submitting…' : 'Submit Code';
  }
  $$('#rightPanel [role="tab"]').forEach((t) => {
    t.disabled = busy;
  });
}

function resetCode() {
  const key = keyOf();
  delete state.codes[key];
  if (cm) {
    cm.setValue(defaultCode());
  }
  persist();
  toast('Editor reset to the starting code');
}

/* ------------------------------- finishing ----------------------------- */

function unansweredCount() {
  let total = 0;
  liveSections().forEach((s) => {
    sectionList(s.id).forEach((_, i) => {
      if (!isAnswered(s.id, i)) total += 1;
    });
  });
  return total;
}

function openSubmitModal() {
  const missing = unansweredCount();
  const practice = !state.limit;
  $('#submitTitle').textContent = practice ? 'Finish this practice session?' : 'Submit the test?';
  $('#submitSummary').textContent = missing
    ? `${missing} question${missing === 1 ? '' : 's'} still unanswered. ${
        practice ? 'The scorecard is for your reference only.' : 'Once submitted you cannot return to the test.'
      }`
    : practice
    ? 'Everything has been attempted. The scorecard is for your reference only.'
    : 'Every question has an answer. Once submitted you cannot return to the test.';
  $('#endInput').value = '';
  $('#submitModal').dataset.open = 'true';
  setTimeout(() => $('#endInput').focus(), 40);
}

function closeSubmitModal() {
  $('#submitModal').dataset.open = 'false';
}

function confirmSubmit() {
  const typed = $('#endInput').value.trim();
  if (typed !== 'END') {
    toast('Type END in capitals to confirm.', 'err');
    return;
  }
  closeSubmitModal();
  finishExam({ auto: false });
}

function finishExam({ auto }) {
  if (state.finished) return;
  state.finished = true;
  state.autoSubmitted = !!auto;
  state.paused = false;
  state.screen = 'report';
  stopTimer();
  $('#pauseLayer').dataset.open = 'false';
  setExamChrome(false);
  clearSaved();
  renderReport();
  toast(auto ? 'Time is up — the test was submitted automatically.' : 'Test submitted', auto ? 'err' : 'ok');
  window.scrollTo({ top: 0 });
}

function togglePause() {
  if (state.screen !== 'exam' || state.finished || !state.limit) return;
  state.paused = !state.paused;
  $('#pauseLayer').dataset.open = String(state.paused);
  const icon = $('#pauseIcon');
  const btn = $('#pauseBtn');
  if (icon) {
    icon.innerHTML = state.paused
      ? '<path d="M8 5l11 7-11 7V5z" />'
      : '<rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" />';
  }
  if (btn) {
    btn.title = state.paused ? 'Resume exam (P)' : 'Pause exam (P)';
    btn.setAttribute('aria-label', state.paused ? 'Resume exam' : 'Pause exam');
  }
  updateTimer();
  if (state.paused) {
    setTimeout(() => $('[data-action="resume"]').focus(), 30);
  }
}

/* -------------------------------- report ------------------------------- */

function scoreFor(sec) {
  const list = sectionList(sec);
  let earned = 0;
  list.forEach((q, i) => {
    const key = `${sec}:${i}`;
    if (sec === 'mcq') {
      if (state.answers[key] === q.a) earned += MARKS.mcq;
      return;
    }
    const res = state.submit[key];
    if (!res || !res.total) return;
    earned += (res.passedCount / res.total) * MARKS[sec];
  });
  return { earned, max: list.length * MARKS[sec] };
}

function renderReport() {
  state.screen = 'report';
  setExamChrome(false);
  const sections = liveSections();
  const scored = sections.map((s) => ({ ...s, ...scoreFor(s.id) }));
  const total = scored.reduce((n, s) => n + s.earned, 0);
  const max = scored.reduce((n, s) => n + s.max, 0);
  const pct = max ? Math.round((total / max) * 100) : 0;
  const round1 = (n) => Math.round(n * 10) / 10;

  const band =
    pct >= 85
      ? { label: 'Excellent', note: 'Strong grasp of ADTs, pointer manipulation and complexity analysis.' }
      : pct >= 60
      ? { label: 'Good', note: 'Solid base. Tighten edge cases: empty structures, single nodes, boundary indices.' }
      : pct >= 40
      ? { label: 'Needs work', note: 'Revisit list operations, stack/queue invariants and traversal patterns.' }
      : { label: 'Keep practising', note: 'Start with unit 1 fundamentals and dry-run each operation on paper.' };

  const bar = (s) => `
    <div class="bar-row">
      <span>${s.label} · ${s.marks} mark${s.marks === 1 ? '' : 's'} each</span>
      <div class="track"><i style="width:${s.max ? (s.earned / s.max) * 100 : 0}%"></i></div>
      <span class="val">${round1(s.earned)} / ${s.max}</span>
    </div>`;

  const mcqList = sectionList('mcq');
  const mcqReview = mcqList
    .map((q, i) => {
      const key = `mcq:${i}`;
      const pick = state.answers[key];
      const correct = pick === q.a;
      const badge = pick === undefined ? 'mute' : correct ? 'ok' : 'bad';
      const badgeText = pick === undefined ? 'NOT ANSWERED' : correct ? 'CORRECT' : 'INCORRECT';
      return `<details class="review-item">
        <summary>Q${i + 1}. ${esc(q.q)}
          <span class="badge ${badge}">${badgeText}</span>
        </summary>
        <div class="review-body">
          ${typeof q.code === 'string' && q.code.trim() ? codeBlock(q.code) : ''}
          <div class="answer-line">
            <span>Your answer: <b>${pick !== undefined ? esc(q.o[pick]) : 'Not answered'}</b></span>
            <span>Correct answer: <b style="color:var(--ok)">${esc(q.o[q.a])}</b></span>
          </div>
        </div>
      </details>`;
    })
    .join('');

  const codeReview = (sec, heading) => {
    const list = sectionList(sec);
    if (!list.length) return '';
    const items = list
      .map((q, i) => {
        const res = state.submit[`${sec}:${i}`];
        const badge = !res ? 'mute' : res.passedCount === res.total ? 'ok' : 'bad';
        const badgeText = !res ? 'NOT SUBMITTED' : res.passedCount === res.total ? 'ACCEPTED' : `${res.passedCount}/${res.total} PASSED`;
        return `<details class="review-item">
          <summary>${esc(q.title || `Question ${i + 1}`)}
            ${state.mode === 'model' && q._unit ? `<span class="badge mute">UNIT ${q._unit.slice(1)}</span>` : ''}
            <span class="badge ${badge}">${badgeText}</span>
          </summary>
          <div class="review-body">
            <div>${esc(q.ps || '')}</div>
            <div class="answer-line">
              <span>Marks: <b>${res ? round1((res.passedCount / res.total) * MARKS[sec]) : 0} / ${MARKS[sec]}</b></span>
            </div>
            <div class="q-label" style="margin-top:10px">Sample output</div>
            <pre>${esc(q.sampleOut || (q.samples && q.samples[0] ? q.samples[0].expected : ''))}</pre>
            <div class="q-label" style="margin-top:10px">Reference C solution</div>
            <pre>${esc(q.sol || 'Not available.')}</pre>
          </div>
        </details>`;
      })
      .join('');
    return `<div class="review-head"><h2>${heading}</h2><span>${list.length} question${list.length === 1 ? '' : 's'}</span></div>${items}`;
  };

  const modeLine = `${MODES[state.mode] ? MODES[state.mode].name : 'Exam'} · ${
    state.limit ? clockText(state.limit) : 'no time limit'
  }`;
  const retryLabel = state.mode === 'model' ? 'New model exam' : state.mode === 'unit' ? 'Retake this unit' : 'Practise again';

  $('#examMain').innerHTML = `
    <section class="report">
      <div class="report-inner">
        <div class="score-hero">
          <div class="unit">${esc(state.title || paperTitle())}</div>
          <div class="big">${round1(total)}<small> / ${max}</small></div>
          <div class="pct">${pct}% · ${band.label}${state.autoSubmitted ? ' · submitted automatically (time up)' : ''}</div>
          <div class="mode-line">${esc(modeLine)}</div>
          <div class="score-bars">
            ${scored.map(bar).join('')}
          </div>
          <p style="color:var(--text-2);font-size:13.5px;line-height:1.6;max-width:560px;margin:18px auto 0">
            ${band.note}
          </p>
          <div class="report-actions">
            <button class="btn" type="button" data-action="print">Print scorecard</button>
            <button class="btn" type="button" data-action="retry">${retryLabel}</button>
            <button class="btn btn-primary" type="button" data-action="back-to-start">Back to start</button>
          </div>
        </div>

        ${codeReview('debug', 'Debugging — review')}
        ${codeReview('cod', 'Coding — review')}

        ${
          mcqList.length
            ? `<div class="review-head"><h2>MCQ — review</h2><span>${mcqList.length} questions</span></div>
               ${mcqReview}`
            : ''
        }
      </div>
    </section>`;

  bindSplitHandle();
}

/* ------------------------------ resize split --------------------------- */

function bindSplitHandle() {
  const handle = $('#splitHandle');
  if (!handle || handle.dataset.bound === 'true') return;
  handle.dataset.bound = 'true';

  const applySplit = (pct, save = true) => {
    state.split = Math.max(SPLIT_MIN, Math.min(SPLIT_MAX, pct));
    const ws = $('#workspace');
    if (ws) ws.style.gridTemplateColumns = `minmax(0, ${state.split}%) 10px minmax(0, 1fr)`;
    if (save) persist();
  };

  handle.addEventListener('pointerdown', (event) => {
    const ws = $('#workspace');
    if (!ws) return;
    event.preventDefault();
    handle.setPointerCapture(event.pointerId);
    document.body.classList.add('resizing');
    const rect = ws.getBoundingClientRect();

    const move = (e) => {
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      applySplit(pct, false);
    };
    const up = () => {
      document.body.classList.remove('resizing');
      handle.removeEventListener('pointermove', move);
      handle.removeEventListener('pointerup', up);
      persist();
      if (cm) cm.refresh();
    };
    handle.addEventListener('pointermove', move);
    handle.addEventListener('pointerup', up);
  });

  handle.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    applySplit(state.split + (e.key === 'ArrowRight' ? 2 : -2));
    if (cm) cm.refresh();
  });
}

/* ------------------------------ actions -------------------------------- */

function handleAction(action, dataset, el) {
  switch (action) {
    case 'pick-mode':
      state.mode = MODES[dataset.mode] ? dataset.mode : 'practice';
      renderStart();
      break;
    case 'pick-unit':
      state.startUnit = dataset.unit;
      renderStart();
      break;
    case 'start-exam':
      startExam({ mode: state.mode, unit: state.startUnit, resume: false });
      break;
    case 'resume-saved': {
      const saved = readSaved();
      if (saved) applySaved(saved);
      startExam({ resume: true });
      break;
    }
    case 'discard-saved':
      clearSaved();
      renderStart();
      toast('Saved attempt discarded');
      break;
    case 'goto-question':
      goToQuestion(Number(dataset.index));
      break;
    case 'bookmark':
      toggleBookmark();
      break;
    case 'option':
      selectOption(Number(dataset.opt));
      break;
    case 'clear-mcq':
      clearOption();
      break;
    case 'lock-mcq':
      lockAnswer();
      break;
    case 'unlock-mcq':
      unlockAnswer();
      break;
    case 'prev':
      prevQuestion();
      break;
    case 'next':
      nextQuestion();
      break;
    case 'run':
      runCode({ submit: false });
      break;
    case 'submit-code':
      runCode({ submit: true });
      break;
    case 'reset-code':
      resetCode();
      break;
    case 'tab-code':
      showCodePane();
      break;
    case 'tab-result':
      if ($('#resultArea')) {
        state.resultTab[keyOf()] = 'result';
        persist();
        const shell = $('#editorShell');
        const area = $('#resultArea');
        if (shell) shell.hidden = true;
        if (area) area.hidden = false;
        redrawResult();
        $$('#rightPanel [role="tab"]').forEach((t) =>
          t.setAttribute('aria-selected', String(t.dataset.action === 'tab-result'))
        );
      }
      break;
    case 'font-inc':
    case 'font-dec': {
      state.fontSize = Math.max(11, Math.min(20, state.fontSize + (action === 'font-inc' ? 1 : -1)));
      if (cm) {
        cm.getWrapperElement().style.fontSize = `${state.fontSize}px`;
        cm.refresh();
      }
      persist();
      break;
    }
    case 'editor-theme':
      state.editorTheme = state.editorTheme === 'dark' ? 'light' : 'dark';
      if (cm) cm.setOption('theme', state.editorTheme === 'light' ? 'default' : 'dracula');
      persist();
      renderWorkspace();
      break;
    case 'theme':
      setTheme(state.theme === 'dark' ? 'light' : 'dark');
      break;
    case 'pause':
      togglePause();
      break;
    case 'resume':
      togglePause();
      break;
    case 'submit-test':
      openSubmitModal();
      break;
    case 'close-submit':
      closeSubmitModal();
      break;
    case 'confirm-submit':
      confirmSubmit();
      break;
    case 'legend':
      $('#legendModal').dataset.open = 'true';
      break;
    case 'close-legend':
      $('#legendModal').dataset.open = 'false';
      break;
    case 'print':
      window.print();
      break;
    case 'retry':
      clearSaved();
      startExam({ mode: state.mode, unit: state.unit || state.startUnit, resume: false });
      break;
    case 'back-to-start':
      clearSaved();
      stopTimer();
      state.paper = null;
      state.unit = null;
      state.screen = 'start';
      renderStart();
      break;
    default:
      break;
  }
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-action]');
  if (trigger) {
    if (trigger.disabled) return;
    handleAction(trigger.dataset.action, trigger.dataset, trigger);
    return;
  }
  // click on backdrop closes a modal
  if (event.target.classList.contains('modal')) {
    event.target.dataset.open = 'false';
  }
});

document.addEventListener('change', (event) => {
  if (event.target.id === 'sectionSelect') {
    goToSection(event.target.value);
  }
});

document.addEventListener('keydown', (event) => {
  const modalOpen = $$('.modal[data-open="true"]').length > 0;
  if (event.key === 'Escape') {
    if ($('#submitModal').dataset.open === 'true') return closeSubmitModal();
    if ($('#legendModal').dataset.open === 'true') return ($('#legendModal').dataset.open = 'false');
  }
  if (modalOpen || state.screen !== 'exam' || state.paused) return;

  if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    if (state.sec === 'mcq') lockAnswer();
    else if (event.shiftKey) runCode({ submit: true });
    else runCode({ submit: false });
    return;
  }

  if (isTypingTarget(document.activeElement) || (cm && cm.hasFocus())) return;

  switch (event.key.toLowerCase()) {
    case 'p':
      togglePause();
      break;
    case 'b':
      toggleBookmark();
      break;
    case 't':
      setTheme(state.theme === 'dark' ? 'light' : 'dark');
      break;
    case 'arrowright':
      nextQuestion();
      break;
    case 'arrowleft':
      prevQuestion();
      break;
    default:
      break;
  }
});

/* ------------------------------- network ------------------------------- */

function watchConnection() {
  const ok = navigator.onLine;
  const ribbon = $('#ribbon');
  const text = $('#ribbonText');
  ribbon.dataset.online = String(ok);
  text.textContent = ok ? 'Online' : 'Offline';
  if (!ok) toast('Offline — compile & run needs internet.', 'err');
}

window.addEventListener('online', watchConnection);
window.addEventListener('offline', watchConnection);

/* -------------------------------- boot --------------------------------- */

window.addEventListener('DOMContentLoaded', () => {
  const saved = readSaved();
  let theme = null;
  try {
    theme = localStorage.getItem(THEME_KEY);
  } catch (_) {
    /* ignore */
  }
  if (saved) {
    if (saved.theme) theme = saved.theme;
    state.startUnit = saved.unit;
  }
  if (theme === 'dark' || theme === 'light') setTheme(theme, false);
  else setTheme('light', false);
  watchConnection();
  renderStart();
});

// Print every review item expanded, then restore the reading state.
window.addEventListener('beforeprint', () => {
  state._printCollapsed = $$('.review-item:not([open])');
  state._printCollapsed.forEach((node) => {
    node.open = true;
  });
});
window.addEventListener('afterprint', () => {
  (state._printCollapsed || []).forEach((node) => {
    node.open = false;
  });
});
