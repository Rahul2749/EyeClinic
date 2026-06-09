const fs = require('fs');

const files = [
  'src/pages/Services.jsx',
  'src/pages/Products.jsx',
  'src/pages/About.jsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/pt-24 -mt-24/g, 'scroll-mt-24');
  fs.writeFileSync(file, content);
}
console.log("Fixed layout overlaps.");
