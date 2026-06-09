const fs = require('fs');

// Update tailwind config to softer, tinted light colors
let tw = fs.readFileSync('tailwind.config.js', 'utf8');

// The original light colors were mostly #f8f9fa. Let's make them soft teal/cyan.
// "#f8f9fa" -> "#f0fbfb" (very light soft teal)
// "#ffffff" -> "#ffffff" (keep pure white for contrast)
// "primary" -> "#006d77" (already there, but let's ensure it)

const colorMap = {
  '"surface": "#f8f9fa"': '"surface": "#eefafa"',
  '"background": "#f8f9fa"': '"background": "#eefafa"',
  '"surface-bright": "#f8f9fa"': '"surface-bright": "#ffffff"',
  '"surface-container": "#edeeef"': '"surface-container": "#e0f2f1"',
  '"surface-container-low": "#f3f4f5"': '"surface-container-low": "#e6f7f6"',
  '"surface-dim": "#d9dadb"': '"surface-dim": "#d5f0ee"',
  '"inverse-surface": "#2e3132"': '"inverse-surface": "#003b40"',
};

for (const [oldC, newC] of Object.entries(colorMap)) {
  tw = tw.replace(newC, oldC); // In case we run it multiple times? No, just replace.
  tw = tw.replace(oldC, newC);
}
fs.writeFileSync('tailwind.config.js', tw);

// Update index.css
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/background-color: #ffffff;/g, 'background-color: #eefafa;');

// We want slightly more visible color for the gradients if the background is tinted
css = css.replace(/rgba\(0, 109, 119, 0\.08\)/g, 'rgba(0, 109, 119, 0.12)');
css = css.replace(/rgba\(0, 83, 91, 0\.05\)/g, 'rgba(0, 109, 119, 0.08)');
css = css.replace(/rgba\(0, 109, 119, 0\.1\)/g, 'rgba(0, 109, 119, 0.15)');
css = css.replace(/rgba\(0, 83, 91, 0\.03\)/g, 'rgba(0, 109, 119, 0.05)');

fs.writeFileSync('src/index.css', css);

console.log("Soft colored theme applied.");
