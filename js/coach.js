/* ===== GK PRO 3IN1 | Coach Studio & Pitch Interval Timer ===== */
window.CoachModule = (function () {
  const SESS_KEY = 'gk_pro_sessions_v1';
  const ROST_KEY = 'gk_pro_roster_v1';
  const load = (k) => { try { return JSON.parse(localStorage.getItem(k)) || []; } catch { return []; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

  let tCfg = { work: 30, rest: 15, rounds: 6 };
  let tState = { running: false, phase: 'work', left: 30, round: 1, iv: null };

  function beep(freq, dur) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator(), g = ctx.createGain();
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0.22, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
      osc.connect(g); g.connect(ctx.destination);
      osc.start(); osc.stop(ctx.currentTime + dur);
    } catch {}
  }

  function render() {
    const sel = document.getElementById('cs-drill-sel');
    const listEl = document.getElementById('cs-session-list');
    const rostEl = document.getElementById('cs-roster-list');
    const t = window.APP_STATE?.track || '7';
    const lang = window.APP_STATE?.lang || 'ar';

    if (sel) {
      sel.innerHTML = (window.DRILLS_DB[t] || []).map((d, i) => `<option value="${i}">${d[lang].name}</option>`).join('');
    }
    if (listEl) {
      const items = load(SESS_KEY);
      const total = items.reduce((s, x) => s + x.mins, 0);
      document.getElementById('cs-total').textContent = `${total} min`;
      listEl.innerHTML = items.map((x, i) => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 12px;background:var(--surface-2);border-radius:10px;margin-top:8px;font-size:13px">
          <span><b>${i + 1}. ${x.name}</b> (${x.mins}m)</span>
          <button class="btn btn-sm" onclick="CoachModule.delDrill(${i})">✕</button>
        </div>
      `).join('');
    }
    if (rostEl) {
      const roster = load(ROST_KEY);
      rostEl.innerHTML = roster.map((g, i) => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 12px;background:var(--surface-2);border-radius:10px;margin-top:8px;font-size:13px">
          <div><b>🧤 ${g.name}</b> <small style="color:var(--accent)">(${g.age})</small><br><small style="color:var(--text-dim)">${g.note || ''}</small></div>
          <button class="btn btn-sm" onclick="CoachModule.delGk(${i})">✕</button>
        </div>
      `).join('');
    }
  }

  function addDrill() {
    const t = window.APP_STATE?.track || '7';
    const lang = window.APP_STATE?.lang || 'ar';
    const idx = Number(document.getElementById('cs-drill-sel')?.value || 0);
    const mins = Number(document.getElementById('cs-mins')?.value || 15);
    const drill = window.DRILLS_DB[t]?.[idx];
    if (!drill) return;
    const items = load(SESS_KEY);
    items.push({ name: drill[lang].name, mins });
    save(SESS_KEY, items);
    render();
  }

  function delDrill(i) { const items = load(SESS_KEY); items.splice(i, 1); save(SESS_KEY, items); render(); }

  function copyPlan() {
    const items = load(SESS_KEY);
    if (!items.length) return;
    const txt = '🧤 GK PRO 3IN1 Session Plan\n' + items.map((x, i) => `${i + 1}. ${x.name} (${x.mins}m)`).join('\n');
    navigator.clipboard?.writeText(txt).then(() => window.toast('📋 Copied'));
  }

  function addGk() {
    const name = document.getElementById('cs-gk-name')?.value.trim();
    const age = document.getElementById('cs-gk-age')?.value || 'U16';
    const note = document.getElementById('cs-gk-note')?.value.trim();
    if (!name) return;
    const roster = load(ROST_KEY);
    roster.unshift({ name, age, note });
    save(ROST_KEY, roster);
    document.getElementById('cs-gk-name').value = '';
    document.getElementById('cs-gk-note').value = '';
    render();
  }

  function delGk(i) { const r = load(ROST_KEY); r.splice(i, 1); save(ROST_KEY, r); render(); }

  /* Pitch Timer */
  function updateTimerUI() {
    const m = String(Math.floor(tState.left / 60)).padStart(2, '0');
    const s = String(tState.left % 60).padStart(2, '0');
    document.getElementById('pt-clock').textContent = `${m}:${s}`;
    document.getElementById('pt-phase').textContent = tState.phase === 'work' ? '🔥 WORK' : '😮‍💨 REST';
    document.getElementById('pt-round').textContent = `${tState.round} / ${tCfg.rounds}`;
  }
  function openTimer(title) {
    document.getElementById('pt-title').textContent = title || 'Pitch Timer';
    resetTimer();
    document.getElementById('timer-modal').classList.remove('hidden');
  }
  function closeTimer() { clearInterval(tState.iv); tState.running = false; document.getElementById('timer-modal').classList.add('hidden'); }
  function setPreset(w, r, rd) { tCfg = { work: w, rest: r, rounds: rd }; resetTimer(); }
  function resetTimer() { clearInterval(tState.iv); tState = { running: false, phase: 'work', left: tCfg.work, round: 1, iv: null }; updateTimerUI(); }
  function toggleTimer() {
    if (tState.running) { clearInterval(tState.iv); tState.running = false; return updateTimerUI(); }
    beep(880, 0.14);
    tState.running = true;
    tState.iv = setInterval(() => {
      tState.left--;
      if (tState.left <= 3 && tState.left > 0) beep(520, 0.08);
      if (tState.left <= 0) {
        if (tState.phase === 'work') {
          beep(660, 0.25);
          if (tState.round >= tCfg.rounds) { clearInterval(tState.iv); tState.running = false; updateTimerUI(); return; }
          tState.phase = 'rest'; tState.left = tCfg.rest;
        } else {
          beep(980, 0.22);
          tState.phase = 'work'; tState.round++; tState.left = tCfg.work;
        }
      }
      updateTimerUI();
    }, 1000);
    updateTimerUI();
  }

  return { render, addDrill, delDrill, copyPlan, addGk, delGk, openTimer, closeTimer, setPreset, resetTimer, toggleTimer };
})();
