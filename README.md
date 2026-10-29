# Ahmed Samy — Portfolio Website

> **Android Mobile App Developer** | Kotlin · Java · Jetpack · REST APIs

A professional, production-structured portfolio built with semantic HTML5, modular vanilla CSS, and single-responsibility JavaScript modules.

---

## 🗂 Project Structure

```
ahmed-portfolio/
├── index.html                    ← Main HTML (single-page, all sections)
├── README.md
│
└── assets/
    ├── css/
    │   ├── variables.css         ← Design system tokens (colors, spacing, fonts)
    │   ├── base.css              ← CSS reset, global styles, shared utilities
    │   ├── navbar.css            ← Top navigation bar
    │   ├── hero.css              ← Hero / home section
    │   ├── about.css             ← About section
    │   ├── education.css         ← Education timeline
    │   ├── experience.css        ← Work experience timeline
    │   ├── skills.css            ← Skill bars & tech icon grid
    │   ├── projects.css          ← Projects card grid
    │   ├── testimonials.css      ← Testimonials slider
    │   ├── services.css          ← Services card grid
    │   ├── contact.css           ← Contact form & info panel
    │   ├── footer.css            ← Site footer
    │   └── responsive.css        ← All breakpoints (1024 / 768 / 480px)
    │
    ├── js/
    │   ├── loader.js             ← Loading screen with progress bar
    │   ├── stars-background.js   ← Canvas-based animated star field
    │   ├── custom-cursor.js      ← Custom dual-element cursor with LERP
    │   ├── typing-effect.js      ← Typewriter role-cycling animation
    │   ├── theme-toggle.js       ← Dark/Light mode + localStorage persistence
    │   ├── scroll-reveal.js      ← IntersectionObserver scroll animations
    │   ├── skills-animation.js   ← Skill bar fill animations on scroll
    │   ├── mobile-nav.js         ← Hamburger + drawer + keyboard/click close
    │   ├── active-nav-link.js    ← Active section detection + navbar scroll state
    │   ├── testimonials-slider.js← Slider with autoplay, swipe, dots, keyboard
    │   └── main.js               ← Global orchestration + smooth scroll + form
    │
    └── images/
        ├── pro.jpg.png           ← Hero section photo
        ├── ahmed.jpg.jpg         ← About section photo
        └── projects/
            ├── project1.jpg      ← E-Commerce App screenshot
            ├── project2.jpg      ← Chat Messenger App screenshot
            ├── project3.jpg      ← Fitness Tracker App screenshot
            └── project4.jpg      ← News Reader App screenshot
```

---

## 🚀 Running Locally

No build step or server required — this is a static HTML project.

### Option A — Open directly in browser

```bash
# Navigate to the project folder and open index.html
start ahmed-portfolio/index.html
```

### Option B — Use VS Code Live Server (recommended)

1. Open the `ahmed-portfolio/` folder in VS Code
2. Install the **Live Server** extension (ritwickdey.LiveServer)
3. Right-click `index.html` → **Open with Live Server**
4. Site opens at `http://127.0.0.1:5500`

### Option C — Python simple server

```bash
cd ahmed-portfolio
python -m http.server 8080
# Open http://localhost:8080 in your browser
```

### Option D — Node.js serve

```bash
cd ahmed-portfolio
npx serve .
```

---

## 🖼 Adding Your Photos

Replace the placeholder images with your own:

| File path | Used in |
|-----------|---------|
| `assets/images/pro.jpg.png` | Hero section — circular profile photo |
| `assets/images/ahmed.jpg.jpg`   | About section — full portrait |
| `assets/images/projects/project1.jpg` | E-Commerce App card |
| `assets/images/projects/project2.jpg` | Chat Messenger App card |
| `assets/images/projects/project3.jpg` | Fitness Tracker App card |
| `assets/images/projects/project4.jpg` | News Reader App card |

All `<img>` elements use `object-fit: cover` — any aspect ratio works without distortion.

---

## ✨ Features

| Feature | Implementation |
|---------|---------------|
| ⭐ Animated star background | `<canvas>` — twinkling + drift |
| 🌙 Dark / Light mode | CSS `data-theme` + `localStorage` |
| ⌨️ Typing animation | Vanilla JS typewriter with configurable speeds |
| 🖱️ Custom cursor | Dual-element LERP cursor (fine-pointer only) |
| 📜 Scroll reveal | IntersectionObserver with stagger via `data-delay` |
| 📊 Skill bars | CSS transitions triggered on scroll |
| 🎠 Testimonials slider | Autoplay · prev/next · dots · swipe · keyboard |
| 📱 Fully responsive | 1024px · 768px · 480px breakpoints |
| ♿ Accessible | ARIA labels, roles, live regions, focus states |
| 🔍 SEO | Title, meta description, OG tags, semantic HTML |

---

## 🎨 Design System

All design tokens live in `assets/css/variables.css`:

```css
--blue:       #2196F3   /* Primary brand blue */
--violet:     #4647AE   /* Accent violet */
--navy:       #112E81   /* Deep navy */
--blue-deep:  #0D47A1   /* Dark blue */
--blue-mid:   #4382DF   /* Mid blue */
--blue-light: #90CAF9   /* Light blue */
--blue-pale:  #E3F2FD   /* Pale blue */
```

---

## 🔧 Customisation

| What to change | Where |
|---------------|-------|
| Personal info (name, email, phone) | `index.html` — search for `ahmed.samy` |
| Social links | `index.html` — `href` attributes on social anchor tags |
| Typing roles | `assets/js/typing-effect.js` — `roles` array |
| Skill percentages | `index.html` — `data-pct` attributes on `.skill-bar-fill` |
| Projects | `index.html` — `#projects-grid` section |
| Theme colors | `assets/css/variables.css` |
| Autoplay speed | `assets/js/testimonials-slider.js` — `AUTOPLAY_MS` |

---

## 📦 Dependencies (CDN — no npm install needed)

| Library | Version | Usage |
|---------|---------|-------|
| [Google Fonts](https://fonts.google.com) | — | Inter, Outfit, JetBrains Mono |
| [Font Awesome](https://fontawesome.com) | 6.5.0 | Icons throughout |

All other code is pure vanilla HTML/CSS/JavaScript — **zero frameworks, zero build tools**.

---

## 📄 License

MIT — free to use and customise for personal and commercial projects.

---

*Built with ❤️ in Egypt — Ahmed Samy, Android Mobile App Developer*
