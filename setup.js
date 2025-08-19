const { execSync } = require('child_process');
const fs = require('fs');

// Add volume-profiles.js to config-xpui.ini extensions
function addExtensionToConfig() {
  try {
    // Get config-xpui.ini path from spicetify -c
    const configPath = execSync('spicetify -c').toString().trim();
    if (!fs.existsSync(configPath)) {
      console.error('config-xpui.ini not found:', configPath);
      return;
    }
    let config = fs.readFileSync(configPath, 'utf8');
    const extLineRegex = /^extensions\s*=.*$/m;
    const extName = 'volume-profiles.js';
    if (extLineRegex.test(config)) {
      // Update existing extensions line
      config = config.replace(extLineRegex, (line) => {
        if (line.includes(extName)) return line; // already present
        // Add extension, handle vertical bar
        return line.replace(/=\s*/, '= ') + (line.trim().endsWith('|') ? '' : ' |') + ' ' + extName;
      });
    } else {
      // Add new extensions line
      config += `\nextensions = ${extName}\n`;
    }
    fs.writeFileSync(configPath, config, 'utf8');
    console.log(`Added ${extName} to extensions in config-xpui.ini.`);
  } catch (err) {
    console.error('Failed to update config-xpui.ini:', err.message);
  }
}

addExtensionToConfig();
