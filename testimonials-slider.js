/**
 * testimonials-slider.js
 * Fully-featured testimonials slider with:
 *  - Previous / Next buttons
 *  - Dot indicators
 *  - Autoplay (3-second interval)
 *  - Pause on hover
 *  - Touch / swipe support
 *  - Keyboard arrow key navigation (when focused)
 */

(function initTestimonialsSlider() {
  const track    = document.getElementById('testimonials-track');
  const prevBtn  = document.getElementById('slider-prev');
  const nextBtn  = document.getElementById('slider-next');
  const dotsWrap = document.getElementById('slider-dots');
  const outer    = document.getElementById('testimonials-track-outer');

  if (!track) return;

  const slides = Array.from(track.querySelectorAll('.testimonial-slide'));
  const total  = slides.length;
  if (total === 0) return;

  let current    = 0;
  let autoplayId = null;
  const AUTOPLAY_MS = 4000;

  // ── Build dot buttons ──────────────────────────────────────
  if (dotsWrap) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className   = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
  }

  // ── Transition to slide index ──────────────────────────────
  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
  }

  function updateDots() {
    if (!dotsWrap) return;
    dotsWrap.querySelectorAll('.slider-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  // ── Navigation buttons ─────────────────────────────────────
  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); resetAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); resetAutoplay(); });

  // ── Autoplay ───────────────────────────────────────────────
  function startAutoplay() {
    autoplayId = setInterval(() => goTo(current + 1), AUTOPLAY_MS);
  }

  function stopAutoplay() {
    clearInterval(autoplayId);
    autoplayId = null;
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // ── Pause on hover ─────────────────────────────────────────
  if (outer) {
    outer.addEventListener('mouseenter', stopAutoplay);
    outer.addEventListener('mouseleave', startAutoplay);
  }

  // ── Touch / Swipe support ──────────────────────────────────
  let touchStartX = 0;

  if (outer) {
    outer.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    outer.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) {
        dx < 0 ? goTo(current + 1) : goTo(current - 1);
        resetAutoplay();
      }
    }, { passive: true });
  }

  // ── Keyboard navigation ────────────────────────────────────
  document.addEventListener('keydown', e => {
    const inFocus = document.activeElement.closest('#testimonials');
    if (!inFocus) return;
    if (e.key === 'ArrowLeft')  goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  // ── Boot ────────────────────────────────────────────────────
  goTo(0);
  startAutoplay();
})();
