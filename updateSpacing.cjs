const fs = require('fs');

// Fix Services.jsx
let services = fs.readFileSync('src/pages/Services.jsx', 'utf8');
services = services.replace(/id="services" className="pt-24 -mt-24"/g, 'id="services"');
services = services.replace(/className="px-margin-mobile md:px-margin-desktop py-xl bg-surface-bright"/g, 'className="px-margin-mobile md:px-margin-desktop py-lg md:py-xl bg-surface-bright pt-24 -mt-24"');
services = services.replace(/mb-xl/g, 'mb-lg');
services = services.replace(/py-xl/g, 'py-lg');
fs.writeFileSync('src/pages/Services.jsx', services);

// Fix Products.jsx
let products = fs.readFileSync('src/pages/Products.jsx', 'utf8');
products = products.replace(/mb-xl/g, 'mb-lg');
products = products.replace(/mb-lg md:mb-xl/g, 'mb-md md:mb-lg');
products = products.replace(/mt-lg/g, 'mt-md');
products = products.replace(/p-xl/g, 'p-lg');
products = products.replace(/p-lg md:p-xl/g, 'p-md md:p-lg');
fs.writeFileSync('src/pages/Products.jsx', products);

// Fix About.jsx
let about = fs.readFileSync('src/pages/About.jsx', 'utf8');
about = about.replace(/pb-xl/g, 'pb-lg');
about = about.replace(/pt-xl/g, 'pt-lg');
about = about.replace(/gap-lg/g, 'gap-md md:gap-lg');
about = about.replace(/p-xl/g, 'p-lg');
fs.writeFileSync('src/pages/About.jsx', about);

// Fix Home.jsx
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');
home = home.replace(/pt-24 pb-16/g, 'pt-24 pb-8');
home = home.replace(/gap-lg/g, 'gap-md');
fs.writeFileSync('src/pages/Home.jsx', home);

console.log("Spacing updated.");
