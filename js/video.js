/* ===== GK PRO 3IN1 | Video Analysis Studio ===== */
window.VideoModule = (function () {
  let camStream = null;
  let drawOn = false;
  let painting = false;

  async function toggleCam() {
    const v = document.getElementById('vid-player');
    if (camStream) {
      camStream.getTracks().forEach(t => t.stop());
      camStream = null;
      v.srcObject = null;
      return;
    }
    try {
      camStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      v.srcObject = camStream;
      v.play();
    } catch {
      window.toast('Camera permission denied');
    }
  }

  function loadFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    if (camStream) toggleCam();
    const v = document.getElementById('vid-player');
    v.src = URL.createObjectURL(f);
    v.controls = true;
    v.onloadedmetadata = resizeCanvas;
  }

  function resizeCanvas() {
    const v = document.getElementById('vid-player');
    const c = document.getElementById('vid-canvas');
    if (!v || !c) return;
    c.width = v.clientWidth || 640;
    c.height = v.clientHeight || 360;
  }

  function setSpeed(r, btn) {
    const v = document.getElementById('vid-player');
    if (v) v.playbackRate = r;
    document.querySelectorAll('.vid-spd').forEach(b => b.classList.toggle('active', b === btn));
  }

  function step(sec) {
    const v = document.getElementById('vid-player');
    if (!v) return;
    v.pause();
    v.currentTime = Math.max(0, (v.currentTime || 0) + sec);
  }

  function toggleDraw(btn) {
    drawOn = !drawOn;
    const c = document.getElementById('vid-canvas');
    c?.classList.toggle('active', drawOn);
    btn?.classList.toggle('active', drawOn);
    if (drawOn && c && !c.dataset.bound) {
      resizeCanvas();
      c.dataset.bound = '1';
      const ctx = c.getContext('2d');
      c.onpointerdown = e => {
        if (!drawOn) return;
        painting = true;
        const r = c.getBoundingClientRect();
        ctx.strokeStyle = '#B8FF2E';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(e.clientX - r.left, e.clientY - r.top);
      };
      c.onpointermove = e => {
        if (!painting) return;
        const r = c.getBoundingClientRect();
        ctx.lineTo(e.clientX - r.left, e.clientY - r.top);
        ctx.stroke();
      };
      window.addEventListener('pointerup', () => { painting = false; });
    }
  }

  function clearDraw() {
    const c = document.getElementById('vid-canvas');
    if (c) c.getContext('2d').clearRect(0, 0, c.width, c.height);
  }

  function snapshot() {
    const v = document.getElementById('vid-player');
    const c = document.getElementById('vid-canvas');
    if (!v || !v.videoWidth) return window.toast('Load a video first');
    const out = document.createElement('canvas');
    out.width = v.videoWidth; out.height = v.videoHeight;
    const ctx = out.getContext('2d');
    ctx.drawImage(v, 0, 0, out.width, out.height);
    if (c && c.width) ctx.drawImage(c, 0, 0, out.width, out.height);
    const a = document.createElement('a');
    a.download = `gk-video-frame-${Date.now()}.png`;
    a.href = out.toDataURL('image/png');
    a.click();
    window.toast('📸 Snapshot Saved');
  }

  return { toggleCam, loadFile, setSpeed, step, toggleDraw, clearDraw, snapshot };
})();
