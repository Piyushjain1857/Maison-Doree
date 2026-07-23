# Maison Dorée — Luxury Fine Jewelry & Interactive 3D Customizer

Maison Dorée is a modern, luxury web application celebrating artisanal fine jewelry design. It features an interactive 3D Heirloom Ring Customizer powered by Three.js, high-fashion collection galleries, bespoke inquiry bag management, and responsive glassmorphism UI aesthetics.

---

## ✨ Features

- 💍 **Interactive 3D Ring Customizer (`RingViewer3D`)**
  - Real-time 3D rendering with custom metals (*22K Yellow Gold*, *18K Rose Gold*, *18K White Gold*).
  - Surface texture choices (*Hand-Hammered*, *High Polish*, *Satin Matte*).
  - Gemstone accents (*VVS Diamond*, *Royal Sapphire*, *Colombian Emerald*).
  - Drag-to-rotate viewport with interactive touch and mouse controls.
  - Safe WebGL context initialization with an automatic 2D SVG precision fallback (`RingFallback2D`) and React `ErrorBoundary`.

- 🛍️ **Bespoke Inquiry Bag (`InquiryContext`)**
  - Dynamic state management to save customized heirloom designs and gallery pieces.
  - Slide-out drawer menu showing item details, specifications, and estimated prices.

- 💎 **Curated Collections & Interactive Filtering**
  - Explore signature collections (*Rings*, *Necklaces*, *Earrings*, *Bracelets*).
  - Quick inquiry insertion and detailed specification preview.

- ✨ **Luxury Aesthetic & Design System**
  - Deep obsidian dark mode palette with champagne gold accents.
  - Ambient glowing backdrops, frosted glassmorphism overlays, and smooth CSS transitions.
  - Fully responsive across desktop, tablet, and mobile displays.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, React DOM
- **3D Graphics Engine**: Three.js
- **Build System & Tooling**: Vite, ESLint
- **Styling**: Modern Vanilla CSS with CSS Variables & Glassmorphism design tokens

---

## 📁 Project Structure

```text
Maison-Doree/
├── public/                # Static images and brand assets
├── src/
│   ├── assets/            # Component media and icons
│   ├── components/        # UI Components
│   │   ├── Navbar.jsx           # Header navigation & inquiry drawer trigger
│   │   ├── HeroSection.jsx      # High-impact landing hero
│   │   ├── Features.jsx         # Atelier highlights & brand USPs
│   │   ├── Collections.jsx      # Interactive jewelry catalog
│   │   ├── OurStory.jsx         # Brand heritage & founding legacy
│   │   ├── Craftsmanship.jsx    # Heirloom customizer container
│   │   ├── RingViewer3D.jsx     # Three.js 3D viewport & 2D fallback
│   │   ├── ErrorBoundary.jsx    # React error boundary component
│   │   ├── Testimonials.jsx     # Client reviews and press quotes
│   │   ├── ContactUs.jsx        # Appointment inquiry form
│   │   └── Footer.jsx           # Footer links and newsletter signup
│   ├── context/
│   │   └── InquiryContext.jsx   # Inquiry bag state & drawer context
│   ├── styles/
│   │   └── styles.css           # Core design system & utilities
│   ├── App.jsx            # Main app composition
│   └── main.jsx           # Application entrypoint
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+ recommended) and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Piyushjain1857/Maison-Doree.git
   cd Maison-Doree
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

---

## 📚 Core Concepts & Notes

### Virtual DOM
React maintains a Virtual DOM (lightweight in-memory tree) to track UI state. When changes occur, React performs a fast diffing operation and updates only the necessary nodes in the browser's real DOM.

### JSX & Babel
JSX allows writing HTML-like syntax inside JavaScript. Babel transpiles JSX expressions (e.g. `<h1>Hello</h1>`) into standard browser-executable calls such as `React.createElement("h1", null, "Hello")`.

### WebGL & Error Boundary Fallbacks
3D canvas elements use `THREE.WebGLRenderer`. If WebGL hardware acceleration is unavailable, context creation is safely caught and gracefully degrades to `RingFallback2D` inside a React `ErrorBoundary`.