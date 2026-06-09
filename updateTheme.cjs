const fs = require('fs');

// 1. Update index.css
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/background-color: #ffffff;/g, 'background-color: #0b1121;');
css = css.replace(/rgba\(0, 109, 119, 0\.08\)/g, 'rgba(45, 212, 191, 0.08)');
css = css.replace(/rgba\(0, 83, 91, 0\.05\)/g, 'rgba(45, 212, 191, 0.05)');
css = css.replace(/rgba\(0, 109, 119, 0\.1\)/g, 'rgba(45, 212, 191, 0.15)');
css = css.replace(/rgba\(0, 83, 91, 0\.03\)/g, 'rgba(45, 212, 191, 0.03)');

// Update glass panels for dark mode
css = css.replace(/background: rgba\(255, 255, 255, 0\.4\);/g, 'background: rgba(30, 41, 59, 0.4);');
css = css.replace(/border: 1px solid rgba\(255, 255, 255, 0\.5\);/g, 'border: 1px solid rgba(255, 255, 255, 0.1);');

css = css.replace(/background: rgba\(255, 255, 255, 0\.85\);/g, 'background: rgba(15, 23, 42, 0.75);');
css = css.replace(/border: 1px solid rgba\(255, 255, 255, 0\.9\);/g, 'border: 1px solid rgba(255, 255, 255, 0.15);');

css = css.replace(/background: #ffffff;/g, 'background: #1e293b;');
css = css.replace(/border: 1px solid rgba\(0, 109, 119, 0\.1\);/g, 'border: 1px solid rgba(45, 212, 191, 0.2);');

fs.writeFileSync('src/index.css', css);

// 2. Update tailwind.config.js
let tw = fs.readFileSync('tailwind.config.js', 'utf8');

// Replace color hexes directly
const colorMap = {
  '"surface-container-high": "#e7e8e9"': '"surface-container-high": "#334155"',
  '"primary": "#00535b"': '"primary": "#2dd4bf"',
  '"surface-container-highest": "#e1e3e4"': '"surface-container-highest": "#475569"',
  '"surface-bright": "#f8f9fa"': '"surface-bright": "#1e293b"',
  '"surface-dim": "#d9dadb"': '"surface-dim": "#0f172a"',
  '"surface": "#f8f9fa"': '"surface": "#0f172a"',
  '"background": "#f8f9fa"': '"background": "#0b1121"',
  '"on-primary": "#ffffff"': '"on-primary": "#042f2e"',
  '"surface-container": "#edeeef"': '"surface-container": "#1e293b"',
  '"on-surface": "#191c1d"': '"on-surface": "#f8fafc"',
  '"surface-variant": "#e1e3e4"': '"surface-variant": "#334155"',
  '"outline": "#6f797a"': '"outline": "#94a3b8"',
  '"surface-container-low": "#f3f4f5"': '"surface-container-low": "#0b1121"',
  '"surface-container-lowest": "#ffffff"': '"surface-container-lowest": "#020617"',
  '"on-surface-variant": "#3e494a"': '"on-surface-variant": "#cbd5e1"',
  '"outline-variant": "#bec8ca"': '"outline-variant": "#475569"',
  '"on-background": "#191c1d"': '"on-background": "#f8fafc"'
};

for (const [oldC, newC] of Object.entries(colorMap)) {
  tw = tw.replace(oldC, newC);
}

fs.writeFileSync('tailwind.config.js', tw);

console.log("Dark theme applied.");
