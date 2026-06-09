const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');
const oldFonts = /<link href="https:\/\/fonts\.googleapis\.com[^>]+>/g;
const newFonts = `<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">`;
html = html.replace(oldFonts, newFonts);
fs.writeFileSync('index.html', html);

// 2. Update tailwind.config.js
const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "c-primary": "#0A3D4A",
        "c-teal": "#0B6E73",
        "c-accent": "#00C9A7",
        "c-surface": "#F7FAF9",
        "c-white": "#FFFFFF",
        "c-amber": "#E8A045",
        "c-blue": "#2563EB",
        "c-text": "#1A2C35",
        "c-muted": "#5A7A84",
        "c-border": "#D4E6E8",
        
        "inverse-surface": "#0A3D4A",
        "surface-bright": "#FFFFFF",
        "surface-variant": "#E8F5F5",
        "outline-variant": "#D4E6E8",
        "primary": "#0B6E73",
        "primary-fixed": "#00C9A7",
        "secondary": "#0A3D4A",
        "on-background": "#1A2C35",
        "on-surface-variant": "#5A7A84",
        "surface": "#F7FAF9"
      },
      fontFamily: {
        "display": ["Cormorant Garamond", "Georgia", "serif"],
        "body": ["DM Sans", "system-ui", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
        "headline-lg": ["Cormorant Garamond", "serif"],
        "headline-md": ["Cormorant Garamond", "serif"],
        "headline-sm": ["Cormorant Garamond", "serif"],
        "body-lg": ["DM Sans", "sans-serif"],
        "body-md": ["DM Sans", "sans-serif"],
        "label-md": ["JetBrains Mono", "monospace"]
      },
      backgroundImage: {
        "g-hero": "linear-gradient(135deg, #0A3D4A 0%, #0B6E73 60%, #00C9A7 100%)",
        "g-card": "linear-gradient(145deg, #F7FAF9 0%, #E8F5F5 100%)",
        "g-cta": "linear-gradient(90deg, #0B6E73 0%, #00C9A7 100%)",
      },
      spacing: {
        "container-max": "1280px",
        "gutter": "clamp(1.5rem, 5vw, 4rem)",
        "space-xs": "0.5rem",
        "space-sm": "1rem",
        "space-md": "1.5rem",
        "space-lg": "2.5rem",
        "space-xl": "4rem",
        "space-2xl": "6rem",
        "space-3xl": "10rem",
        "margin-mobile": "16px",
        "margin-desktop": "64px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
`;
fs.writeFileSync('tailwind.config.js', tailwindConfig);

// 3. Update index.css
let css = fs.readFileSync('src/index.css', 'utf8');

// Replace root styles
const newRootCSS = `
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --c-primary:   #0A3D4A;
  --c-teal:      #0B6E73;
  --c-accent:    #00C9A7;
  --c-surface:   #F7FAF9;
  --c-white:     #FFFFFF;
  --c-amber:     #E8A045;
  --c-text:      #1A2C35;
  --c-muted:     #5A7A84;
  --c-border:    #D4E6E8;

  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
}

@layer base {
  body {
    background-color: var(--c-surface);
    color: var(--c-text);
    font-family: var(--font-body);
  }
}

@layer components {
  .btn-primary {
    background: linear-gradient(90deg, var(--c-teal), var(--c-accent));
    color: white;
    border: none;
    border-radius: 999px;
    padding: 14px 32px;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 0.9375rem;
    letter-spacing: 0.02em;
    box-shadow: 0 0 0 0 rgba(0, 201, 167, 0.4);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 201, 167, 0.35);
  }
  
  .hero-section {
    background: var(--c-primary);
    color: white;
  }
  .hero-headline {
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(3rem, 5.5vw, 5.5rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: white;
  }
  .hero-headline .accent {
    color: var(--c-accent);
  }
  
  .glass-layer {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(16px);
    border: 1px solid var(--c-border);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }
  
  .form-input {
    border: 1.5px solid var(--c-border);
    border-radius: 8px;
    padding: 14px 16px;
    font-size: 1rem;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .form-input:focus {
    border-color: var(--c-teal);
    box-shadow: 0 0 0 3px rgba(11, 110, 115, 0.15);
    outline: none;
  }
}
`;

// Just overwrite index.css with new clean setup
fs.writeFileSync('src/index.css', newRootCSS);

console.log("Phase 1: Foundations completed.");
