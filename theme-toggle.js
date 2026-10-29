/**
 * theme-toggle.js
 * Toggles between dark and light mode by setting data-theme on <html>.
 * Persists the user's preference in localStorage.
 */

(function initThemeToggle() {
  const html   = document.documentElement;
  const btn    = document.getElementById('theme-toggle-btn');
  const iconEl = document.getElementById('theme-icon');

  const STORAGE_KEY  = 'portfolio-theme';
  const DARK_ICON    = '🌙';
  const LIGHT_ICON   = '☀️';

  // ── Apply saved or system preference ──────────────────────
  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    if (iconEl) {
      iconEl.textContent = theme === 'dark' ? DARK_ICON : LIGHT_ICON;
    }
  }

  // Determine initial theme
  const saved  = localStorage.getItem(STORAGE_KEY);
  const system = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  applyTheme(saved || system);

  // ── Toggle on button click ─────────────────────────────────
  if (btn) {
    btn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ── Sync with OS-level preference changes ─────────────────
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'light' : 'dark');
    }
  });
})();
