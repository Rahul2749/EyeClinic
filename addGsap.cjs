const fs = require('fs');

function addGsap(file, hookCode) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('useEffect(() => {') && content.includes('gsap.from')) {
    console.log(`Already has gsap in ${file}`);
    return;
  }
  const search = /const \w+ = \(\) => {\s*return \(/;
  const match = content.match(search);
  if (match) {
    const replacement = match[0].replace('return (', `${hookCode}\n  return (`);
    content = content.replace(match[0], replacement);
    fs.writeFileSync(file, content);
    console.log(`Added gsap to ${file}`);
  }
}

const homeGsap = `  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".gsap-headline-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2
      });
      gsap.from(".gsap-subhead", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8
      });
      gsap.from(".gsap-cta", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 1.2
      });
      gsap.from(".gsap-trust", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 1.4
      });
      gsap.from(".gsap-reveal", {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5
      });
    });
    return () => ctx.revert();
  }, []);`;

const servicesGsap = `  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: "#services",
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    });
    return () => ctx.revert();
  }, []);`;

const productsGsap = `  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: "#product-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    });
    return () => ctx.revert();
  }, []);`;

const aboutGsap = `  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".reveal-element", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    });
    return () => ctx.revert();
  }, []);`;

addGsap('src/pages/Home.jsx', homeGsap);
addGsap('src/pages/Services.jsx', servicesGsap);
addGsap('src/pages/Products.jsx', productsGsap);
addGsap('src/pages/About.jsx', aboutGsap);
