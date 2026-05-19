# BIZGRO — Digital Agency Website

A responsive, scroll-based business landing page for **BIZGRO**, a full-service digital agency. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks required.

---

## Live Demo

> Open `index.html` in your browser or run with a local development server (e.g. Live Server in VS Code).

---

## Features

- **Sticky Navbar** with smooth scroll navigation and active link highlighting on scroll
- **Responsive Mobile Menu** with an animated hamburger toggle
- **Hero Section** with bold gradient typography
- **About Section** describing BIZGRO's digital services
- **Services Section** showcasing four core offerings:
  - Web Development
  - E-Commerce
  - SEO Services
  - Social Media Marketing
- **Portfolio / Clients Section** listing 20+ satisfied companies
- **Sign-Up CTA Section** to encourage team joins
- **Footer** with links, social media icons, and copyright info
- **Fully Responsive** — adapts gracefully from desktop down to 480px mobile screens

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, gradients, grid layout, and responsive media queries |
| JavaScript (ES6) | Mobile menu toggle, scroll-based nav highlighting |
| Font Awesome 5 | Icons used throughout the UI |

---

## Project Structure

```
bizgro/
├── index.html      # Main HTML page
├── styles.css      # All styling and responsive breakpoints
└── app.js          # Mobile menu toggle and scroll highlight logic
```

---

## Getting Started

### Prerequisites

No build tools or package managers needed. Just a browser.

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Atharva-J740/bizgro.git
   cd bizgro
   ```

2. **Open in browser**

   Simply open `index.html` directly, or use a local dev server for the best experience:

   - **VS Code**: Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, then click **Go Live**
   - **Python**: `python -m http.server 5500`
   - **Node.js**: `npx serve .`

---

## Responsive Breakpoints

| Breakpoint | Layout Behaviour |
|---|---|
| > 1300px | Full 4-column services grid |
| ≤ 1300px | 2-column services grid |
| ≤ 1100px | Single-column about section |
| ≤ 960px | Mobile navbar with hamburger menu |
| ≤ 768px | Single-column services, stacked footer |
| ≤ 480px | Compact cards and reduced icon sizes |

---

## JavaScript Functionality

**`app.js`** handles two key behaviors:

- **Mobile Menu Toggle** — Clicking the hamburger icon adds/removes `is-active` and `active` CSS classes, animating the menu open and closed.
- **Scroll-based Nav Highlighting** — As the user scrolls, the corresponding navbar link receives a `highlight` class based on scroll position thresholds, providing visual feedback of the current section.
- **Auto-close Mobile Menu** — Tapping any nav link or the logo on mobile automatically closes the menu.

---

## License

© BIZGRO 2020. All rights reserved.
