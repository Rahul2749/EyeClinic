const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.jsx', 'utf8');

const hookOld = `  useEffect(() => {
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
  }, []);`;

const hookNew = `  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'products', 'about'];
      let current = '';

      // Check if we're at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection('about');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        // 200px offset to trigger a bit earlier when scrolling down
        if (section && window.scrollY >= section.offsetTop - 200) {
          current = sections[i];
          break;
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);`;

content = content.replace(hookOld, hookNew);

// Also add onClick to links to set active state instantly
const activeClasses = "font-body-md text-label-md text-primary dark:text-primary-fixed relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full opacity-80 scale-95 transition-all";
const inactiveClasses = "font-body-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300";

// Replace links to include onClick
content = content.replace(/href="#home">Home<\/a>/g, `href="#home" onClick={() => setActiveSection('home')}>Home</a>`);
content = content.replace(/href="#products">Optical Shop<\/a>/g, `href="#products" onClick={() => setActiveSection('products')}>Optical Shop</a>`);
content = content.replace(/href="#services">Services<\/a>/g, `href="#services" onClick={() => setActiveSection('services')}>Services</a>`);
content = content.replace(/href="#about">Appointments<\/a>/g, `href="#about" onClick={() => setActiveSection('about')}>Appointments</a>`);
content = content.replace(/href="#about">About Us<\/a>/g, `href="#about" onClick={() => setActiveSection('about')}>About Us</a>`);

fs.writeFileSync('src/components/Navbar.jsx', content);

console.log("Navbar scroll spy fixed.");
