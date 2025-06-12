const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const packageJsonPath = path.resolve(__dirname, '../../package.json');


// Read package.json
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Construct preview version
const version = pkg.version;
if (!version.includes("-")) {
    process.exit(0)
}

// Get short Git SHA
let sha;
try {
    sha = execSync('git rev-parse --short HEAD').toString().trim();
} catch (err) {
    console.error('Failed to get git commit SHA:', err);
    process.exit(1);
}

const previewVersion = `${version.split('-')[0]}-${sha}`;



pkg.version = previewVersion;

// Write back to package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n');

// Stage the file
try {
    execSync(`git add ${packageJsonPath}`);
    console.log(`Updated preview version: ${previewVersion}`);
} catch (err) {
    console.error('Failed to stage package.json:', err);
    process.exit(1);
}
