const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.jsx', 'utf8');

// Update imports
if (!content.includes('useState')) {
  content = content.replace('import React from "react";', 'import React, { useState, useEffect } from "react";');
}

// Add state and effect
const hookCode = `
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    const sections = ['home', 'products', 'services', 'about'].map(id => document.getElementById(id)).filter(Boolean);
    sections.forEach(s => observer.observe(s));

    return () => sections.forEach(s => observer.unobserve(s));
  }, []);
`;

content = content.replace(/const Navbar = \(\) => {\s*return \(/, `const Navbar = () => {${hookCode}\n  return (`);

// Define active/inactive classes
const activeClasses = "font-body-md text-label-md text-primary dark:text-primary-fixed relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full opacity-80 scale-95 transition-all";
const inactiveClasses = "font-body-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300";

// Replace links
content = content.replace(/<a\s*className="[^"]*"\s*href="#home"\s*>\s*Home\s*<\/a>/, `<a className={activeSection === 'home' ? \`${activeClasses}\` : \`${inactiveClasses}\`} href="#home">Home</a>`);
content = content.replace(/<a\s*className="[^"]*"\s*href="#products"\s*>\s*Optical Shop\s*<\/a>/, `<a className={activeSection === 'products' ? \`${activeClasses}\` : \`${inactiveClasses}\`} href="#products">Optical Shop</a>`);
content = content.replace(/<a\s*className="[^"]*"\s*href="#services"\s*>\s*Services\s*<\/a>/, `<a className={activeSection === 'services' ? \`${activeClasses}\` : \`${inactiveClasses}\`} href="#services">Services</a>`);
content = content.replace(/<a\s*className="[^"]*"\s*href="#about"\s*>\s*Appointments\s*<\/a>/, `<a className={activeSection === 'about' ? \`${activeClasses}\` : \`${inactiveClasses}\`} href="#about">Appointments</a>`);
content = content.replace(/<a\s*className="[^"]*"\s*href="#about"\s*>\s*About Us\s*<\/a>/, `<a className={activeSection === 'about' ? \`${activeClasses}\` : \`${inactiveClasses}\`} href="#about">About Us</a>`);

fs.writeFileSync('src/components/Navbar.jsx', content);

console.log("Active state updated.");
