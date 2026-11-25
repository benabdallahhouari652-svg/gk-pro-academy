/* ===== GK PRO 3IN1 | Radar Evaluation & Wellness ===== */
window.RadarModule = (function () {
  const RADAR_KEY = 'gk_pro_radar_v1';
  const WELL_KEY = 'gk_pro_wellness_v1';
  const AXES_KEYS = ['reaction', 'position', 'highball', 'onevone', 'distrib', 'footwork'];
  let values = { reaction: 7, position: 7, highball: 6, onevone: 7, distrib: 6, footwork: 7 };

  const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch { return d; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

  function pt(cx, cy, r, i, total) {
    const a = (-Math.PI / 2) + (i * 2 * Math.PI / total);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }

  function render() {
    const svg = document.getElementById('radar-svg');
    const sliders = document.getElementById('radar-sliders');
    const scoreEl = document.getElementById('radar-score');
    const histEl = document.getElementById('radar-history');
    if (!svg) return;

    const lang = window.APP_STATE?.lang || 'ar';
    const labels = window.I18N[lang].axes;
    const cx = 140, cy = 130, maxR = 88, n = AXES_KEYS.length;
    const history = load(RADAR_KEY, []);
    const prev = history[0]?.values || null;

    let out = '';
    [2, 4, 6, 8, 10].forEach(lv => {
      const r = (lv / 10) * maxR;
      const pts = AXES_KEYS.map((_, i) => pt(cx, cy, r, i, n).map(v => v.toFixed(1)).join(',')).join(' ');
      out += `<polygon points="${pts}" fill="none" stroke="var(--border)" stroke-width="1"/>`;
    });

    AXES_KEYS.forEach((_, i) => {
      const [x2, y2] = pt(cx, cy, maxR, i, n);
      const [lx, ly] = pt(cx, cy, maxR + 22, i, n);
      out += `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="var(--border)" stroke-width="1"/>`;
      out += `<text x="${lx.toFixed(1)}" y="${(ly + 4).toFixed(1)}" fill="var(--text)" font-size="11" font-weight="700" text-anchor="middle">${labels[i]}</text>`;
    });

    if (prev) {
      const pPts = AXES_KEYS.map((k, i) => pt(cx, cy, ((prev[k] || 5) / 10) * maxR, i, n).map(v => v.toFixed(1)).join(',')).join(' ');
      out += `<polygon points="${pPts}" fill="rgba(59,130,246,0.14)" stroke="#3B82F6" stroke-width="1.6" stroke-dasharray="4 3"/>`;
    }

    const cPts = AXES_KEYS.map((k, i) => pt(cx, cy, (values[k] / 10) * maxR, i, n).map(v => v.toFixed(1)).join(',')).join(' ');
    out += `<polygon points="${cPts}" fill="rgba(184,255,46,0.22)" stroke="var(--accent)" stroke-width="2.4"/>`;

    AXES_KEYS.forEach((k, i) => {
      const [dx, dy] = pt(cx, cy, (values[k] / 10) * maxR, i, n);
      out += `<circle cx="${dx.toFixed(1)}" cy="${dy.toFixed(1)}" r="4" fill="var(--accent)" stroke="var(--bg)" stroke-width="1.5"/>`;
    });

    svg.innerHTML = out;
    const avg = (AXES_KEYS.reduce((s, k) => s + values[k], 0) / n).toFixed(1);
    if (scoreEl) scoreEl.textContent = `${avg} / 10`;

    if (sliders) {
      sliders.innerHTML = AXES_KEYS.map((k, i) => `
        <div class="slider-row">
          <span>${labels[i]}</span>
          <input type="range" min="1" max="10" value="${values[k]}" oninput="RadarModule.setVal('${k}', this.value)">
          <b>${values[k]}</b>
        </div>
      `).join('');
    }

    if (histEl) {
      histEl.innerHTML = history.slice(0, 5).map(h => `
        <div style="display:flex;justify-content:space-between;padding:8px 10px;background:var(--surface-2);border-radius:10px;margin-top:6px;font-size:12.5px">
          <span>📅 ${h.date} · (${h.track})</span>
          <b style="color:var(--accent)">${h.avg} / 10</b>
        </div>
      `).join('');
    }
  }

  function setVal(k, v) {
    values[k] = Number(v);
    render();
  }

  function saveSnapshot() {
    const history = load(RADAR_KEY, []);
    const avg = (AXES_KEYS.reduce((s, k) => s + values[k], 0) / AXES_KEYS.length).toFixed(1);
    history.unshift({
      date: new Date().toLocaleDateString(),
      track: window.APP_STATE?.track || '7',
      avg,
      values: { ...values }
    });
    save(RADAR_KEY, history.slice(0, 20));
    render();
    window.toast('✓ Saved');
  }

  function saveWellness() {
    const sleep = Number(document.getElementById('w-sleep')?.value || 4);
    const energy = Number(document.getElementById('w-energy')?.value || 4);
    const pain = document.getElementById('w-pain')?.value || 'none';
    const score = Math.max(10, Math.round(((sleep + energy) / 10) * 100 - (pain === 'pain' ? 25 : pain === 'mild' ? 10 : 0)));
    const log = load(WELL_KEY, {});
    log[new Date().toISOString().slice(0, 10)] = { sleep, energy, pain, score };
    save(WELL_KEY, log);
    renderWellness();
    window.toast('✓ Wellness Saved');
  }

  function renderWellness() {
    const el = document.getElementById('w-result');
    if (!el) return;
    const cur = load(WELL_KEY, {})[new Date().toISOString().slice(0, 10)];
    if (cur) {
      el.innerHTML = `<b style="color:var(--accent)">${cur.score}%</b> Readiness`;
    }
  }

  return { render, setVal, saveSnapshot, saveWellness, renderWellness };
})();
