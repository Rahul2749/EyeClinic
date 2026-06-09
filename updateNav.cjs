const fs = require('fs');

let nav = fs.readFileSync('src/components/Navbar.jsx', 'utf8');

// Replace header container classes
const headerOld = `bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-xl border-b border-primary/10 dark:border-white/10 shadow-sm`;
const headerNew = `bg-c-primary/95 backdrop-blur-2xl saturate-[1.8] border-b border-white/10 shadow-sm`;
nav = nav.replace(headerOld, headerNew);

// Replace active nav links (remove teal color, use white 100% + accent underline)
// From: `font-body-md text-label-md text-primary dark:text-primary-fixed relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full opacity-80 scale-95 transition-all`
// To: `font-body text-[15px] font-medium text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-c-accent transition-all`
nav = nav.replace(/`font-body-md text-label-md text-primary[^`]+`/g, '`font-body text-[15px] font-medium text-white relative after:content-[\\'\\'] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-c-accent transition-all`');

// Replace inactive nav links
// From: `font-body-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300`
// To: `font-body text-[15px] font-medium text-white/70 hover:text-white relative after:content-[\\'\\'] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-c-accent after:transition-all after:duration-300 transition-colors duration-300`
nav = nav.replace(/`font-body-md text-label-md text-on-surface-variant[^`]+`/g, '`font-body text-[15px] font-medium text-white/70 hover:text-white relative after:content-[\\'\\'] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-c-accent after:transition-all after:duration-300 transition-colors duration-300`');

// Replace button classes
// From: className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#006D77] text-white font-label-md hover:scale-105 transition-transform duration-300 shadow-sm"
// To: className="btn-primary hidden md:inline-flex"
nav = nav.replace(/className="hidden md:inline-flex[^"]+"/g, 'className="btn-primary hidden md:inline-flex"');

fs.writeFileSync('src/components/Navbar.jsx', nav);
console.log("Navbar classes updated");
