const fs = require('fs');

let services = fs.readFileSync('src/pages/Services.jsx', 'utf8');

// Upgrade layout to use glass-layer and modern styling
services = services.replace(/bg-surface rounded-xl clinical-card-shadow/g, 'glass-layer rounded-3xl');
services = services.replace(/bg-primary text-on-primary rounded-xl/g, 'bg-primary text-white rounded-3xl shadow-[0_8px_32px_0_rgba(0,109,119,0.2)]');
services = services.replace(/gap-gutter/g, 'gap-6');

// Enhance Icons
services = services.replace(/text-primary text-\[48px\]/g, 'text-accent-gold text-[48px]');
services = services.replace(/text-primary-fixed text-\[40px\]/g, 'text-accent-champagne text-[40px]');
services = services.replace(/text-secondary text-\[40px\]/g, 'text-accent-gold text-[40px]');

// Hover effects
services = services.replace(/group relative overflow-hidden service-card/g, 'group relative overflow-hidden service-card hover:-translate-y-2 transition-transform duration-500');
services = services.replace(/group service-card/g, 'group service-card hover:-translate-y-2 transition-transform duration-500');

fs.writeFileSync('src/pages/Services.jsx', services);

// Also add a magnetic button script in Home.jsx and Navbar.jsx
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');
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
if (!home.includes('magnets.forEach')) {
  home = home.replace('return () => ctx.revert();', magnetScript + '\n    return () => ctx.revert();');
  home = home.replace('className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#006D77] text-white', 'className="magnetic inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-accent-champagne hover:bg-[#004f56]');
  home = home.replace('className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-primary/20 text-primary', 'className="magnetic inline-flex items-center justify-center px-8 py-4 rounded-full border border-primary/20 text-primary');
  home = home.replace('className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700"', 'className="floating-model absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700"');
  fs.writeFileSync('src/pages/Home.jsx', home);
}

let navbar = fs.readFileSync('src/components/Navbar.jsx', 'utf8');
if (!navbar.includes('magnetic inline-flex')) {
  navbar = navbar.replace('className="hidden md:inline-flex', 'className="magnetic hidden md:inline-flex');
  fs.writeFileSync('src/components/Navbar.jsx', navbar);
}

console.log("Updated Layout and Micro-animations.");
