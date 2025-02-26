const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist');

// Clean and recreate 'dist' directory
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });
console.log('✅ Cleaned dist directory.');

// Copy necessary files
const filesToCopy = ['server.js', 'package.json'];
filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(DIST_DIR, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied ${file} to dist.`);
  }
});

console.log('🚀 Build process completed successfully.');
