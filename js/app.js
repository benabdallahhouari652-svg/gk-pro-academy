/* ===== GK PRO 3IN1 | Core Application Controller ===== */
(function () {
  const PROG_KEY = 'gk_pro_progress_v1';
  const PREF_KEY = 'gk_pro_prefs_v1';

  let prefs = { lang: 'ar', theme: 'dark', track: '7' };
  try { prefs = { ...prefs, ...(JSON.parse(localStorage.getItem(PREF_KEY)) || {}) }; } catch {}

  let progress = { points: 0, done: [], favs: [] };
  try { progress = { ...progress, ...(JSON.parse(localStorage.getItem(PROG_KEY)) || {}) }; } catch {}

  window.APP_STATE = prefs;
  let filterAge = 'all';
  let favOnly = false;
  let searchQ = '';

  const savePrefs = () => { try { localStorage.setItem(PREF_KEY, JSON.stringify(prefs)); } catch {} };
  const saveProg = () => { try { localStorage.setItem(PROG_KEY, JSON.stringify(progress)); } catch {} };

  window.toast = function (msg) {
    let el = document.getElementById('toast');
    if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; document.body.appendChild(el); }
    el.textContent = msg;
    el.classList.remove('hidden');
    clearTimeout(window._tt);
    window._tt = setTimeout(() => el.classList.add('hidden'), 2400);
  };

  window.setLang = function (lang) {
    prefs.lang = lang;
    savePrefs();
    applyLang();
    renderAll();
  };

  window.toggleTheme = function () {
    prefs.theme = prefs.theme === 'dark' ? 'light' : 'dark';
    savePrefs();
    applyTheme();
  };

  window.setTrack = function (t) {
    prefs.track = t;
    savePrefs();
    document.querySelectorAll('.track-pill').forEach(b => b.classList.toggle('active', b.dataset.track === t));
    renderAll();
  };

  window.goPage = function (p) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById('view-' + p)?.classList.remove('hidden');
    document.querySelectorAll('[data-page]').forEach(b => b.classList.toggle('active', b.dataset.page === p));
    if (p === 'tactical') { window.TacticalModule.initDraw(); window.TacticalModule.render(); }
    if (p === 'perf') { window.RadarModule.render(); window.RadarModule.renderWellness(); }
    if (p === 'coach') { window.CoachModule.render(); }
    window.scrollTo(0, 0);
  };

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', prefs.theme);
    const btn = document.getElementById('theme-btn');
    if (btn) btn.textContent = prefs.theme === 'dark' ? '☀️' : '🌙';
  }

  function applyLang() {
    const t = window.I18N[prefs.lang];
    document.documentElement.lang = prefs.lang;
    document.documentElement.dir = t.dir;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      if (t[k]) el.textContent = t[k];
    });
    const srch = document.getElementById('drill-search');
    if (srch) srch.placeholder = t.searchPlaceholder;
    document.querySelectorAll('.lang-group button').forEach(b => b.classList.toggle('active', b.dataset.lang === prefs.lang));
  }

  function renderDashboard() {
    const t = window.I18N[prefs.lang];
    const meta = window.TRACK_META[prefs.track][prefs.lang];
    const drills = window.DRILLS_DB[prefs.track] || [];
    document.getElementById('st-drills').textContent = drills.length;
    document.getElementById('st-points').textContent = progress.points;
    document.getElementById('st-done').textContent = progress.done.length;
    document.getElementById('st-mode').textContent = meta.name;

    const rulesEl = document.getElementById('track-rules-card');
    if (rulesEl) {
      rulesEl.innerHTML = `
        <h3>${t.rulesTitle}</h3>
        <div class="grid-3" style="margin:10px 0">
          <div style="background:var(--surface-2);padding:10px;border-radius:10px"><small style="color:var(--text-dim)">Pitch</small><br><b>${meta.pitch}</b></div>
          <div style="background:var(--surface-2);padding:10px;border-radius:10px"><small style="color:var(--text-dim)">Goal</small><br><b>${meta.goal}</b></div>
          <div style="background:var(--surface-2);padding:10px;border-radius:10px"><small style="color:var(--text-dim)">GK Zone</small><br><b>${meta.zone}</b></div>
        </div>
        <p style="margin:0;color:var(--text-dim);font-size:13px">${meta.rule}</p>
      `;
    }

    const founderEl = document.getElementById('founder-card');
    if (founderEl) {
      founderEl.innerHTML = `
        <h3 style="margin-bottom:14px">${t.founderHeading}</h3>
        <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
          <img src="assets/founder.jpg" alt="${t.founderName}" style="width:84px;height:84px;border-radius:50%;object-fit:cover;border:2px solid var(--accent);flex-shrink:0">
          <div style="flex:1;min-width:200px">
            <div style="font-size:17px;font-weight:900">${t.founderName}</div>
            <div style="color:var(--accent);font-size:13px;font-weight:700;margin:3px 0 6px">${t.founderRole}</div>
            <p style="margin:0;color:var(--text-dim);font-size:13px;line-height:1.6">${t.founderBio}</p>
          </div>
        </div>
      `;
    }
  }

  window.setAgeFilter = function (age, btn) {
    filterAge = age;
    document.querySelectorAll('.age-chip').forEach(b => b.classList.toggle('active', b === btn));
    renderDrills();
  };

  window.toggleFavFilter = function (btn) {
    favOnly = !favOnly;
    btn.classList.toggle('active', favOnly);
    renderDrills();
  };

  window.onSearchDrills = function (v) {
    searchQ = v.trim().toLowerCase();
    renderDrills();
  };

  window.toggleDrillBody = function (id) {
    document.getElementById('db-' + id)?.classList.toggle('hidden');
  };

  window.toggleFav = function (id, e) {
    e.stopPropagation();
    const idx = progress.favs.indexOf(id);
    if (idx >= 0) progress.favs.splice(idx, 1);
    else progress.favs.push(id);
    saveProg();
    renderDrills();
  };

  window.markDrillDone = function (id) {
    if (!progress.done.includes(id)) {
      progress.done.push(id);
      progress.points += 25;
      saveProg();
      window.toast('+25 XP ⭐');
    }
    renderDrills();
    renderDashboard();
  };

  function buildYoutubeUrl(d, track, lang) {
    const trackKw = {
      ar: { '11': 'حارس مرمى كرة القدم', '7': 'حارس مرمى مبتوري الأطراف', '5': 'حارس مرمى كرة الصالات فوتسال' },
      en: { '11': 'football goalkeeper drill', '7': 'amputee football goalkeeper drill', '5': 'futsal goalkeeper drill' },
      fr: { '11': 'exercice gardien de but football', '7': 'gardien football amputés exercice', '5': 'exercice gardien futsal' }
    };
    const ageKey = filterAge !== 'all' ? filterAge : d.age;
    const ageKw = {
      ar: { '8-12': 'U12 ناشئين', '13-16': 'U16 فتيان', '17-18': 'U18 أواسط', senior: 'أكابر' },
      en: { '8-12': 'U12 youth', '13-16': 'U16 academy', '17-18': 'U18 junior', senior: 'senior pro' },
      fr: { '8-12': 'U12 jeunes', '13-16': 'U16 formation', '17-18': 'U18 junior', senior: 'senior pro' }
    };
    const q = `${trackKw[lang][track]} ${ageKw[lang][ageKey] || ''} ${d[lang].name}`.trim();
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  }

  function renderDrills() {
    const el = document.getElementById('drills-list');
    if (!el) return;
    const t = window.I18N[prefs.lang];
    const list = (window.DRILLS_DB[prefs.track] || [])
      .map((d, i) => ({ d, id: `${prefs.track}-${i}` }))
      .filter(({ d, id }) => {
        const loc = d[prefs.lang];
        if (filterAge !== 'all' && d.age !== filterAge) return false;
        if (favOnly && !progress.favs.includes(id)) return false;
        if (searchQ && !loc.name.toLowerCase().includes(searchQ) && !loc.goal.toLowerCase().includes(searchQ)) return false;
        return true;
      });

    el.innerHTML = list.map(({ d, id }) => {
      const loc = d[prefs.lang];
      const isFav = progress.favs.includes(id);
      const isDone = progress.done.includes(id);
      const ytUrl = buildYoutubeUrl(d, prefs.track, prefs.lang);
      const ageBadge = d.age === 'senior' ? 'Senior' : d.age;
      return `
        <div class="drill-card">
          <button class="drill-head" onclick="toggleDrillBody('${id}')">
            <span>${loc.name} <small style="color:var(--accent);font-weight:700">(${ageBadge})</small></span>
            <span style="display:flex;align-items:center;gap:8px">
              <span onclick="toggleFav('${id}', event)" style="color:${isFav ? '#FACC15' : 'var(--text-dim)'}">${isFav ? '★' : '☆'}</span>
              <span>▾</span>
            </span>
          </button>
          <div id="db-${id}" class="drill-body hidden">
            <img class="drill-svg" src="${d.img}" alt="${loc.name}" loading="lazy">
            <p style="margin:0 0 8px;color:var(--text-dim)">${loc.goal}</p>
            <ol style="padding-inline-start:18px;margin:0 0 10px">${loc.steps.map(s => `<li>${s}</li>`).join('')}</ol>
            <div class="mistakes-box"><b>${t.mistakesLbl}</b><br>${loc.mistakes.join(' · ')}</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
              <a class="btn btn-sm" href="${ytUrl}" target="_blank" rel="noopener">${t.ytBtn}</a>
              <button class="btn btn-sm" onclick="CoachModule.openTimer('${loc.name.replace(/'/g, "\\'")}')">${t.timerBtn}</button>
              <button class="btn btn-sm ${isDone ? 'btn-primary' : ''}" onclick="markDrillDone('${id}')">${isDone ? t.doneOk : t.doneBtn}</button>
            </div>
          </div>
        </div>
      `;
    }).join('') || `<div class="card"><p style="margin:0;color:var(--text-dim)">No matching drills.</p></div>`;
  }

  function renderAll() {
    renderDashboard();
    renderDrills();
    window.RadarModule.render();
    window.TacticalModule.render();
    window.CoachModule.render();
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    applyLang();
    document.querySelectorAll('.track-pill').forEach(b => b.classList.toggle('active', b.dataset.track === prefs.track));
    renderAll();
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
})();
