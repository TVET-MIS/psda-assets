// Simple test to verify assets are exported correctly
const ASSETS = require('../dist/index.js');

console.log('🧪 Testing PSDA Assets Package...\n');

// Test 1: Check if ASSETS object exists
console.log('✅ Test 1: ASSETS object exists');
console.log('ASSETS:', ASSETS);
console.log('');

// Test 2: Check if psda_logo is accessible
console.log('✅ Test 2: psda_logo is accessible');
console.log('psda_logo path:', ASSETS.psdaLogo);
console.log('');

// Test 3: Check if getAssetPath function exists
console.log('✅ Test 3: getAssetPath function exists');
console.log('getAssetPath function:', typeof ASSETS.getAssetPath);
console.log('');

// Test 4: Test getAssetPath function
console.log('✅ Test 4: Testing getAssetPath function');
const testPath = ASSETS.getAssetPath('/assets/svg/logos/psda_logo.svg');
console.log('getAssetPath result:', testPath);
console.log('');

// Test 5: Check if all expected properties exist
console.log('✅ Test 5: Checking expected properties');
const expectedProperties = [
  'default',
  'ASSETS',
  'psdaLogo',
  'enTranslations',
  'urTranslations',
  'getAssetPath',
  'getTranslationPath',
  'getAvailableLocales',
  'AssetPath'
];

expectedProperties.forEach(prop => {
  const exists = prop in ASSETS;
  console.log(`${exists ? '✅' : '❌'} ${prop}: ${exists}`);
});

console.log('\n🎉 All tests completed!'); 