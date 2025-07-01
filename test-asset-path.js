const { getAssetPath } = require('./dist/index.js');

console.log('Testing getAssetPath function...');
console.log('Input: svg/logos/psda_logo.svg');
console.log('Output:', getAssetPath('svg/logos/psda_logo.svg'));
console.log('\nInput: /svg/logos/psda_logo.svg');
console.log('Output:', getAssetPath('/svg/logos/psda_logo.svg'));
console.log('\nInput: https://example.com/image.png');
console.log('Output:', getAssetPath('https://example.com/image.png')); 