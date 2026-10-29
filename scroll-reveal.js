/**
 * scroll-reveal.js
 * Uses IntersectionObserver to add the "visible" class to
 * elements with .reveal, .reveal-left, or .reveal-right
 * when they enter the viewport.
 *
 * Staggered delay for lists: add data-delay="200" (ms) to child elements.
 */

(function initScrollReveal() {
  const THRESHOLD = 0.15; // 15% of element must be visible
  const selector  = '.reveal, .reveal-left, .reveal-right';

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el    = entry.target;
        const delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0;

        setTimeout(() => {
          el.classList.add('visible');
        }, delay);

        // Unobserve once revealed
        observer.unobserve(el);
      });
    },
    { threshold: THRESHOLD }
  );

  // Observe all reveal targets
  document.querySelectorAll(selector).forEach(el => observer.observe(el));
})();
