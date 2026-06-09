const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');
const oldFonts = `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">`;
const newFonts = `<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">`;

if (html.includes(oldFonts)) {
  html = html.replace(oldFonts, newFonts);
} else {
  // Try to replace any google fonts link
  html = html.replace(/<link href="https:\/\/fonts\.googleapis\.com[^>]+>/, newFonts);
}
fs.writeFileSync('index.html', html);

// 2. Update tailwind.config.js
let tailwind = fs.readFileSync('tailwind.config.js', 'utf8');

// Add new colors
const colorsOld = `"on-error-container": "#93000a",`;
const colorsNew = `"on-error-container": "#93000a",
        "accent-gold": "#D4AF37",
        "accent-champagne": "#F7E7CE",
        "accent-rose": "#B76E79",`;
tailwind = tailwind.replace(colorsOld, colorsNew);

// Update fonts
tailwind = tailwind.replace(/"Inter"/g, '"Plus Jakarta Sans"');
tailwind = tailwind.replace(/"Playfair Display"/g, '"Outfit"');

fs.writeFileSync('tailwind.config.js', tailwind);

console.log("Updated typography and tailwind colors.");
