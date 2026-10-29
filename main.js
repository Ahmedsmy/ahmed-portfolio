/**
 * main.js
 * Entry point — initialises all site-wide behaviours
 * in the correct order after the DOM is ready.
 *
 * Load order (matches <script> order in index.html):
 *  1. loader.js              — already self-initialising (IIFE)
 *  2. stars-background.js   — already self-initialising (IIFE)
 *  3. custom-cursor.js      — already self-initialising (IIFE)
 *  4. theme-toggle.js       — already self-initialising (IIFE)
 *  5. typing-effect.js      — already self-initialising (IIFE)
 *  6. scroll-reveal.js      — already self-initialising (IIFE)
 *  7. skills-animation.js   — already self-initialising (IIFE)
 *  8. mobile-nav.js         — already self-initialising (IIFE)
 *  9. active-nav-link.js    — already self-initialising (IIFE)
 * 10. testimonials-slider.js — already self-initialising (IIFE)
 * 11. main.js               — orchestrates any remaining global logic
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Smooth scroll for all anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── Contact form submission (front-end only) ── */
  const form        = document.getElementById('contact-form');
  const successMsg  = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Sending…';

      // Simulate async send (replace with fetch/FormData for real backend)
      setTimeout(() => {
        form.style.display = 'none';
        if (successMsg) successMsg.classList.add('show');
      }, 1200);
    });
  }

  /* ── "Back to top" via scroll-hint link ── */
  const scrollHint = document.getElementById('scroll-hint');
  if (scrollHint) {
    scrollHint.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ── Current year in footer ── */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Console greeting (easter egg) ── */
  console.log(
    '%c✦ Ahmed Samy — Portfolio %c\n%cAndroid Mobile App Developer\nhttps://github.com/ahmed-samy',
    'background: linear-gradient(135deg, #2196F3, #4647AE); color: #fff; padding: 8px 16px; border-radius: 4px 4px 0 0; font-size: 14px; font-weight: bold;',
    '',
    'color: #90CAF9; font-size: 12px;'
  );
});
