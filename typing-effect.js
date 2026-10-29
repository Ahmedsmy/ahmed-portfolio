/**
 * typing-effect.js
 * Cycles through an array of role strings, typing them out character-by-character
 * then deleting them, creating a classic "typewriter" effect.
 *
 * Targets: element with id="typing-text"
 */

(function initTypingEffect() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const roles = [
    'Android Mobile App Developer',
    'Tech Support & Operations Specialist',
    'Quality & Coaching Lead',
    'Telecommunications Specialist',
  ];

  const TYPING_SPEED   = 90;   // ms per character typed
  const DELETING_SPEED = 50;   // ms per character deleted
  const PAUSE_AFTER    = 1800; // ms to pause after fully typed
  const PAUSE_BEFORE   = 350;  // ms to pause before re-typing

  let roleIdx  = 0;
  let charIdx  = 0;
  let isDeleting = false;
  let timer;

  function tick() {
    const current = roles[roleIdx];

    if (!isDeleting) {
      // Type next character
      el.textContent = current.slice(0, ++charIdx);

      if (charIdx === current.length) {
        // Fully typed — pause then start deleting
        isDeleting = true;
        clearTimeout(timer);
        timer = setTimeout(tick, PAUSE_AFTER);
        return;
      }
    } else {
      // Delete a character
      el.textContent = current.slice(0, --charIdx);

      if (charIdx === 0) {
        // Fully deleted — move to next role
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        clearTimeout(timer);
        timer = setTimeout(tick, PAUSE_BEFORE);
        return;
      }
    }

    clearTimeout(timer);
    timer = setTimeout(tick, isDeleting ? DELETING_SPEED : TYPING_SPEED);
  }

  // Kick off after a short delay (let the loader finish)
  setTimeout(tick, 1200);
})();
