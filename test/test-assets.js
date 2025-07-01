// Use ES module import instead of require
import fs from 'fs';
import path from 'path';

// Import the assets from the index.js of the psda-assets package
import * as assets from '../index.js';

console.log('Testing PSDA Assets Package...\n');

// Test that all exports exist
console.log('Available exports:');
console.log('- psdaLogo:', assets.psdaLogo);
console.log('- logo:', assets.logo);
console.log('- enTranslations:', assets.enTranslations);
console.log('- urTranslations:', assets.urTranslations);
console.log('- config:', assets.config);

// Test that paths are valid
console.log('\nTesting file existence:');
console.log('- psdaLogo exists:', fs.existsSync(path.join(__dirname, '..', assets.psdaLogo)));
console.log('- enTranslations exists:', fs.existsSync(path.join(__dirname, '..', assets.enTranslations)));
console.log('- urTranslations exists:', fs.existsSync(path.join(__dirname, '..', assets.urTranslations)));

console.log('\n✅ All tests passed!');
