/**
 * active-nav-link.js
 * Uses IntersectionObserver to highlight the navbar link
 * corresponding to the currently visible section.
 * Also adds/removes the "scrolled" class on the navbar.
 */

(function initActiveNavLink() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (!navLinks.length) return;

  // ── Scrolled state on navbar ────────────────────────────────
  const scrollObserver = () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', scrollObserver, { passive: true });
  scrollObserver(); // Run once on load

  // ── Active section detection ────────────────────────────────
  const sections = Array.from(
    document.querySelectorAll('section[id], header[id]')
  );

  if (!sections.length) return;

  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute('id');

        navLinks.forEach(link => {
          const isActive = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('active', isActive);
        });
      });
    },
    {
      rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue('--navbar-height').trim()} 0px -60% 0px`,
      threshold: 0,
    }
  );

  sections.forEach(s => sectionObserver.observe(s));
})();
