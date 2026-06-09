const fs = require('fs');

// 1. Clean up index.css
let css = fs.readFileSync('src/index.css', 'utf8');

// Remove mesh gradient
const bgFunky = `    background: linear-gradient(120deg, #eefafa 0%, #e0f2f1 50%, #ffffff 100%);
    background-size: 200% 200%;
    animation: gradientMove 15s ease infinite;`;
const bgPremium = `    background-color: #FAFAFA;
    background-image: radial-gradient(circle at 50% 0%, #eefafa 0%, transparent 60%);`;
css = css.replace(bgFunky, bgPremium);

// Remove glass border and extreme blur
const glassFunky = `  .glass-layer {
    @apply bg-white/60 dark:bg-inverse-surface/60 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,109,119,0.05)];
  }`;
const glassPremium = `  .glass-layer {
    @apply bg-surface-bright/80 dark:bg-inverse-surface/80 backdrop-blur-lg shadow-sm border border-outline-variant/20;
  }`;
css = css.replace(glassFunky, glassPremium);
fs.writeFileSync('src/index.css', css);

// 2. Clean up Services.jsx
let services = fs.readFileSync('src/pages/Services.jsx', 'utf8');
// Revert hyper-rounded corners
services = services.replace(/rounded-3xl/g, 'rounded-xl');
// Remove gold/champagne colors, use sophisticated primary tones
services = services.replace(/text-accent-gold/g, 'text-primary');
services = services.replace(/text-accent-champagne/g, 'text-primary-fixed');
// Reduce hover float
services = services.replace(/hover:-translate-y-2 transition-transform duration-500/g, 'hover:-translate-y-1 transition-transform duration-300');
fs.writeFileSync('src/pages/Services.jsx', services);

// 3. Clean up Home.jsx (Remove magnetic & floating animations)
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');
home = home.replace(/magnetic /g, '');
home = home.replace(/floating-model /g, '');

const magnetScript = `
      // Magnetic Buttons
      const magnets = document.querySelectorAll('.magnetic');
      magnets.forEach(magnet => {
        magnet.addEventListener('mousemove', function(e) {
          const position = magnet.getBoundingClientRect();
          const x = e.pageX - position.left - position.width / 2;
          const y = e.pageY - position.top - position.height / 2;
          
          gsap.to(magnet, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.5,
            ease: "power2.out"
          });
        });
        
        magnet.addEventListener('mouseleave', function() {
          gsap.to(magnet, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
          });
        });
      });
      
      // Floating 3D Eye
      gsap.to(".floating-model", {
        y: -15,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
`;
home = home.replace(magnetScript, '');
fs.writeFileSync('src/pages/Home.jsx', home);

// 4. Clean up Navbar.jsx (Remove magnetic)
let navbar = fs.readFileSync('src/components/Navbar.jsx', 'utf8');
navbar = navbar.replace(/magnetic /g, '');
fs.writeFileSync('src/components/Navbar.jsx', navbar);

console.log("Reverted to a clean, minimalist premium design.");
