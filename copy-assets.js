
const fs = require('fs');
const path = require('path');

// Source directory containing assets
const sourceDir = path.resolve(__dirname, 'src/assets');

// Target directory in public folder
const targetDir = path.resolve(__dirname, 'public/assets');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Read all files from source directory
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('Error reading source directory:', err);
    return;
  }

  // Copy each file to target directory
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    // Check if it's a file
    if (fs.statSync(sourcePath).isFile()) {
      fs.copyFile(sourcePath, targetPath, err => {
        if (err) {
          console.error(`Error copying ${file}:`, err);
        } else {
          console.log(`Successfully copied ${file} to public/assets/`);
        }
      });
    }
  });
});

console.log('Asset copying process initiated');
