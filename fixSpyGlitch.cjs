const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.jsx', 'utf8');

// Ensure useRef is imported
if (!content.includes('useRef')) {
  content = content.replace('useState, useEffect', 'useState, useEffect, useRef');
}

// Add the ref
const stateCode = `  const [activeSection, setActiveSection] = useState('home');
  const isClicking = useRef(false);`;

content = content.replace(/const \[activeSection, setActiveSection\] = useState\('home'\);/, stateCode);

// Update hookNew
const hookOld = `  useEffect(() => {
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

const hookNew = `  useEffect(() => {
    const handleScroll = () => {
      if (isClicking.current) return; // Skip spy while smooth scrolling from click

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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    isClicking.current = true;
    setActiveSection(sectionId);
    // Re-enable scroll spy after smooth scroll finishes (approx 800ms)
    setTimeout(() => {
      isClicking.current = false;
    }, 800);
  };`;

content = content.replace(hookOld, hookNew);

// Update onClick handlers to use handleNavClick
content = content.replace(/onClick=\{\(\) => setActiveSection\('home'\)\}/g, `onClick={() => handleNavClick('home')}`);
content = content.replace(/onClick=\{\(\) => setActiveSection\('products'\)\}/g, `onClick={() => handleNavClick('products')}`);
content = content.replace(/onClick=\{\(\) => setActiveSection\('services'\)\}/g, `onClick={() => handleNavClick('services')}`);
content = content.replace(/onClick=\{\(\) => setActiveSection\('about'\)\}/g, `onClick={() => handleNavClick('about')}`);

fs.writeFileSync('src/components/Navbar.jsx', content);

console.log("Navbar spy glitch fixed.");
