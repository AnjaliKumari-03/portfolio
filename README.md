# Anjali Kumari — Portfolio

**Full-Stack MERN Developer**

A single-page, animated developer portfolio built with React, Tailwind CSS v4, and Framer Motion — featuring an interactive WebGL background, a custom cursor, a scroll-driven hero, and a fully working contact form with zero backend.

[Portfolio](https://portfolio-khaki-two-53.vercel.app/)


---

## ✨ Overview

This is my personal developer portfolio — built from scratch to showcase full-stack projects, skills, and experience, while also serving as a demo of the frontend craft itself: smooth motion design, an animated WebGL background, and small interaction details that most template portfolios skip.

It's a **client-only** React app — no server, no database. The contact form sends real email straight from the browser via EmailJS so there's nothing to host or run besides the static site.

## 🚀 Features

- **Animated WebGL background** — a live particle/net field powered by [Vanta.js](https://www.vantajs.com/) + Three.js
- **Scroll-linked hero animation** — content fades and drifts smoothly as you scroll, driven by `framer-motion`'s scroll progress hooks (not scroll-event listeners)
- **Custom animated cursor** — a spring-physics dot + trailing ring that reacts to hoverable elements, automatically disabled on touch devices and for users with `prefers-reduced-motion`
- **Neumorphic (soft-UI) contact form** — extruded card with inset "pressed" inputs, built entirely with layered `box-shadow`, no images or borders
- **Animated preloader** — an eased 0→100% progress screen that dissolves into the site on load
- **Fully working contact form, no backend** — sends real email via EmailJS's free tier
- **Fully responsive** — mobile-first layout across every section
- **Accessible by default** — respects reduced-motion preferences, visible focus states, semantic markup

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion, Vanta.js (Three.js) |
| Routing | React Router v6 |
| Email | EmailJS (`@emailjs/browser`) |
| Icons | React Icons |

## 📁 Project Structure

```
anjali-portfolio/
└── client/                      # Entire project — React + Vite + Tailwind + Framer Motion
    ├── public/
    │   ├── projects/             # Project screenshots, organized per project
    │   └── resume.pdf
    ├── src/
    │   ├── components/
    │   │   ├── Hero.jsx          # Scroll-fade hero section
    │   │   ├── VantaBackground.jsx
    │   │   ├── CustomCursor.jsx
    │   │   ├── LoadingScreen.jsx
    │   │   ├── Contact.jsx       # Neumorphic form + EmailJS integration
    │   │   ├── Projects.jsx
    │   │   ├── Skills.jsx
    │   │   ├── About.jsx
    │   │   ├── Education.jsx
    │   │   ├── Nav.jsx
    │   │   └── Footer.jsx
    │   ├── data/
    │   │   └── portfolioData.js  # All content: profile, skills, projects, education
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   └── ProjectDetail.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css             # Tailwind v4 theme, custom utilities
    ├── index.html
    ├── vite.config.js
    └── package.json
```



## 🎨 Customizing

- **Content** (profile, skills, all projects, education) — edit `client/src/data/portfolioData.js`.
- **Colors & fonts** — edit the `@theme` block at the top of `client/src/index.css` (Tailwind v4's CSS-first config — there's no `tailwind.config.js`).
- **Resume** — replace `client/public/resume.pdf`, same filename.
- **Vanta background color** — change the `color` prop/default in `VantaBackground.jsx`.


## 📬 Contact

**Anjali Kumari**
📧 [anjalikumari17.main@gmail.com](mailto:anjalikumari17.main@gmail.com)
💼 [LinkedIn](https://www.linkedin.com/in/anjalikumari003/)
🖥️ [GitHub](https://github.com/AnjaliKumari-03)

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion.
