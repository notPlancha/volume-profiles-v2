const { execSync } = require('child_process');
const fs = require('fs');
const ini = require('ini');

// Add volume-profiles.js to config-xpui.ini extensions
function addExtensionToConfig() {
  try {
    // Get config-xpui.ini path from spicetify -c
    const configPath = execSync('spicetify -c').toString().trim();
    if (!fs.existsSync(configPath)) {
      console.error('config-xpui.ini not found:', configPath);
      return;
    }
    let configRaw = fs.readFileSync(configPath, 'utf8');
    let config = ini.parse(configRaw);
    const extName = 'volume-profiles.js';
    
    // check if extname is already in AdditionalOptions.extensions
    if (config.AdditionalOptions.extensions.includes(extName)) {
      console.log(`${extName} already in extensions.`);
      return;
    } else if (config.AdditionalOptions.extensions.trim() == "") {
      config.AdditionalOptions.extensions = extName;
    } else {
      config.AdditionalOptions.extensions += ` | ${extName}`;
    }
    fs.writeFileSync(configPath, ini.stringify(config));
    console.log(`Added ${extName} to extensions in config-xpui.ini.`);
  } catch (err) {
    console.error('Failed to update config-xpui.ini:', err.message);
  }
}

addExtensionToConfig();
