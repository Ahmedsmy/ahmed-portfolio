/**
 * stars-background.js
 * Renders an animated star field on a full-screen canvas.
 * Stars twinkle and drift slowly upward, creating a parallax depth effect.
 */

(function initStars() {
  const canvas = document.getElementById('stars-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // ── Config ──────────────────────────────────────────────────
  const STAR_COUNT    = 180;
  const MAX_RADIUS    = 1.8;
  const SPEED_MIN     = 0.05;
  const SPEED_MAX     = 0.25;
  const TWINKLE_SPEED = 0.008;

  let W, H, stars = [];

  // ── Star factory ────────────────────────────────────────────
  function createStar(x, y) {
    return {
      x:     x  ?? Math.random() * W,
      y:     y  ?? Math.random() * H,
      r:     Math.random() * MAX_RADIUS + 0.3,
      speed: Math.random() * (SPEED_MAX - SPEED_MIN) + SPEED_MIN,
      alpha: Math.random(),
      dAlpha: (Math.random() > 0.5 ? 1 : -1) * TWINKLE_SPEED,
      // blue-ish tint
      color: `hsl(${200 + Math.random() * 40}, 80%, ${75 + Math.random() * 20}%)`,
    };
  }

  function initStarPool() {
    stars = Array.from({ length: STAR_COUNT }, () => createStar());
  }

  // ── Resize handler ──────────────────────────────────────────
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    // If first call, create star pool
    if (stars.length === 0) initStarPool();
  }

  // ── Render loop ─────────────────────────────────────────────
  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (const s of stars) {
      // Twinkle
      s.alpha += s.dAlpha;
      if (s.alpha <= 0.1 || s.alpha >= 1) {
        s.dAlpha *= -1;
        s.alpha = Math.max(0.1, Math.min(1, s.alpha));
      }

      // Slow upward drift
      s.y -= s.speed;
      if (s.y + s.r < 0) {
        // Reset star to bottom
        s.y = H + s.r;
        s.x = Math.random() * W;
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = s.alpha;
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  // ── Boot ────────────────────────────────────────────────────
  window.addEventListener('resize', resize);
  resize();
  draw();
})();
