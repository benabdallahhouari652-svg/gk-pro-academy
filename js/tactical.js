/* ===== GK PRO 3IN1 | Interactive Tactical Board + PNG Export ===== */
window.TacticalModule = (function () {
  const KEY = 'gk_pro_tactical_v1';
  const COLORS = { lime: '#B8FF2E', blue: '#3B82F6', red: '#EF4444', yellow: '#FACC15', white: '#FFFFFF' };
  const EMOJIS = { gk: '🧤', mate: '🔵', opp: '❌', ball: '⚽', cone: '🔶', goal: '🥅' };

  let data = {};
  try { data = JSON.parse(localStorage.getItem(KEY)) || {}; } catch { data = {}; }
  let tool = 'run';
  let color = 'lime';
  let drawing = null;

  function board() {
    const t = window.APP_STATE?.track || '7';
    if (!data[t]) data[t] = { markers: [], arrows: [] };
    return data[t];
  }
  function persist() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch {}
  }

  function addMarker(type) {
    const b = board();
    b.markers.push({ id: Date.now() + Math.random(), type, x: 40 + (b.markers.length % 4) * 8, y: 35 + Math.floor(b.markers.length / 4) * 14 });
    persist();
    render();
  }

  function setTool(t, btn) {
    tool = tool === t ? null : t;
    document.querySelectorAll('.tac-tool').forEach(b => b.classList.toggle('active', b === btn && !!tool));
    document.getElementById('tactical-svg')?.classList.toggle('drawing', !!tool);
  }

  function setColor(c, btn) {
    color = c;
    document.querySelectorAll('.tac-col').forEach(b => b.classList.toggle('active', b === btn));
  }

  function undo() {
    const b = board();
    if (b.arrows.length) b.arrows.pop();
    else if (b.markers.length) b.markers.pop();
    persist();
    render();
  }

  function clear() {
    const t = window.APP_STATE?.track || '7';
    data[t] = { markers: [], arrows: [] };
    persist();
    render();
  }

  function render() {
    const b = board();
    const mLayer = document.getElementById('tac-markers');
    const aLayer = document.getElementById('tac-arrows');
    if (!mLayer || !aLayer) return;

    mLayer.innerHTML = b.markers.map(m =>
      `<div class="tk-marker" data-id="${m.id}" style="left:${m.x}%;top:${m.y}%">${EMOJIS[m.type] || '●'}</div>`
    ).join('');

    mLayer.querySelectorAll('.tk-marker').forEach(el => {
      el.onpointerdown = e => {
        e.stopPropagation();
        const id = Number(el.dataset.id);
        const m = b.markers.find(x => x.id === id);
        const pitch = document.getElementById('tac-pitch').getBoundingClientRect();
        const move = ev => {
          m.x = Math.max(4, Math.min(96, ((ev.clientX - pitch.left) / pitch.width) * 100));
          m.y = Math.max(6, Math.min(94, ((ev.clientY - pitch.top) / pitch.height) * 100));
          el.style.left = m.x + '%';
          el.style.top = m.y + '%';
        };
        const up = () => {
          window.removeEventListener('pointermove', move);
          window.removeEventListener('pointerup', up);
          persist();
        };
        window.addEventListener('pointermove', move);
        window.addEventListener('pointerup', up);
      };
    });

    aLayer.innerHTML = b.arrows.map(a => {
      const dash = a.tool === 'pass' ? 'stroke-dasharray="3 2"' : '';
      return `<line x1="${a.x1}" y1="${a.y1}" x2="${a.x2}" y2="${a.y2}" stroke="${COLORS[a.color] || '#B8FF2E'}" stroke-width="1.3" ${dash} marker-end="url(#arr-${a.color})"/>`;
    }).join('');
  }

  function initDraw() {
    const svg = document.getElementById('tactical-svg');
    if (!svg || svg.dataset.bound) return;
    svg.dataset.bound = '1';
    svg.classList.add('drawing');
    svg.onpointerdown = e => {
      if (!tool) return;
      const r = svg.getBoundingClientRect();
      drawing = {
        x1: ((e.clientX - r.left) / r.width) * 100,
        y1: ((e.clientY - r.top) / r.height) * 100,
        x2: 0, y2: 0, tool, color
      };
    };
    window.addEventListener('pointerup', e => {
      if (!drawing) return;
      const r = svg.getBoundingClientRect();
      drawing.x2 = Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100));
      drawing.y2 = Math.max(0, Math.min(100, ((e.clientY - r.top) / r.height) * 100));
      if (Math.hypot(drawing.x2 - drawing.x1, drawing.y2 - drawing.y1) > 3) {
        board().arrows.push(drawing);
        persist();
        render();
      }
      drawing = null;
    });
  }

  function exportPng() {
    const b = board();
    const c = document.createElement('canvas');
    c.width = 960; c.height = 600;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#14532D'; ctx.fillRect(0, 0, 960, 600);
    ctx.strokeStyle = 'rgba(255,255,255,0.75)'; ctx.lineWidth = 4;
    ctx.strokeRect(24, 24, 912, 552);
    ctx.beginPath(); ctx.moveTo(480, 24); ctx.lineTo(480, 576); ctx.stroke();
    ctx.beginPath(); ctx.arc(480, 300, 72, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeRect(24, 150, 125, 300); ctx.strokeRect(811, 150, 125, 300);

    b.arrows.forEach(a => {
      ctx.save();
      ctx.strokeStyle = COLORS[a.color] || '#B8FF2E'; ctx.lineWidth = 5;
      if (a.tool === 'pass') ctx.setLineDash([12, 8]);
      const x1 = (a.x1 / 100) * 960, y1 = (a.y1 / 100) * 600;
      const x2 = (a.x2 / 100) * 960, y2 = (a.y2 / 100) * 600;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.restore();
    });

    ctx.font = '32px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    b.markers.forEach(m => ctx.fillText(EMOJIS[m.type] || '●', (m.x / 100) * 960, (m.y / 100) * 600));

    const link = document.createElement('a');
    link.download = `gk-pro-tactics-${Date.now()}.png`;
    link.href = c.toDataURL('image/png');
    link.click();
    window.toast('📸 PNG Exported');
  }

  return { addMarker, setTool, setColor, undo, clear, render, initDraw, exportPng };
})();
