/**
 * custom-cursor.js
 * Replaces the browser default cursor with a two-element custom cursor:
 *  - .cursor-dot  : small, fast-tracking dot
 *  - .cursor-ring : larger circle that lags slightly behind (lerp)
 *
 * Automatically scales up when hovering interactive elements.
 * Hidden on touch devices via CSS (pointer:coarse).
 */

(function initCustomCursor() {
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');

  if (!dot || !ring) return;
  // Skip on touch-primary devices
  if (!window.matchMedia('(pointer: fine)').matches) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  const LERP = 0.15; // Lag factor (0 = no lag, 1 = instant)

  // Track cursor position
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot tracks instantly
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  // Animate ring with lerp
  function animateRing() {
    ringX += (mouseX - ringX) * LERP;
    ringY += (mouseY - ringY) * LERP;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Expand ring on interactive elements
  const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, .filter-btn, .slider-arrow, .slider-dot, .skill-icon-card';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(INTERACTIVE)) {
      ring.classList.add('hovering');
      dot.style.transform = 'translate(-50%, -50%) scale(0.5)';
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(INTERACTIVE)) {
      ring.classList.remove('hovering');
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  });

  // Hide when cursor leaves the window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
})();
