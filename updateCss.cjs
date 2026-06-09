const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

const bgOld = `    background-image: 
      radial-gradient(circle at 0% 0%, #a9ece5 0%, transparent 50%),
      radial-gradient(circle at 100% 100%, #e0f2f1 0%, transparent 50%);`;

const bgNew = `    background: linear-gradient(120deg, #eefafa 0%, #e0f2f1 50%, #ffffff 100%);
    background-size: 200% 200%;
    animation: gradientMove 15s ease infinite;`;

const animationNew = `
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

css = css.replace(bgOld, bgNew);
if (!css.includes('@keyframes gradientMove')) {
  css += animationNew;
}

const glassOld = `  .glass-layer {
    @apply bg-surface/40 dark:bg-inverse-surface/40 backdrop-blur-md border border-primary/5 dark:border-white/5;
  }`;

const glassNew = `  .glass-layer {
    @apply bg-white/60 dark:bg-inverse-surface/60 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,109,119,0.05)];
  }`;

css = css.replace(glassOld, glassNew);

fs.writeFileSync('src/index.css', css);

console.log("Updated index.css with mesh gradient and premium glass.");
