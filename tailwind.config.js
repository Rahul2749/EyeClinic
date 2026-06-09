/** @type {import('tailwindcss').Config} */
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
