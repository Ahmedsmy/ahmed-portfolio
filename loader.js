/**
 * loader.js
 * Manages the full-screen loading screen.
 * Animates the progress bar then fades out the overlay.
 */

(function initLoader() {
  const loader  = document.getElementById('loader');
  const bar     = document.getElementById('loader-bar');

  if (!loader || !bar) return;

  // Simulate incremental loading progress
  let progress = 0;
  const steps  = [20, 45, 70, 90, 100];
  let stepIdx  = 0;

  function tick() {
    if (stepIdx >= steps.length) return;
    progress = steps[stepIdx++];
    bar.style.width = progress + '%';

    if (progress < 100) {
      setTimeout(tick, 280 + Math.random() * 180);
    } else {
      // Short pause at 100% then hide
      setTimeout(hideLoader, 350);
    }
  }

  function hideLoader() {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
    // Remove from DOM after transition ends
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
  }

  // Prevent scroll while loading
  document.body.style.overflow = 'hidden';
  // Kick off after a small paint delay
  setTimeout(tick, 100);
})();
