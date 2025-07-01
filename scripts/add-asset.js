#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Utility script to add new assets to the psda-assets package
 * Usage: node scripts/add-asset.js <asset-path> <asset-name>
 * Example: node scripts/add-asset.js assets/images/logo.png logo
 */

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('Usage: node scripts/add-asset.js <asset-path> <asset-name>');
  console.error('Example: node scripts/add-asset.js assets/images/logo.png logo');
  process.exit(1);
}

const assetPath = args[0];
const assetName = args[1];

// Check if asset file exists
if (!fs.existsSync(assetPath)) {
  console.error(`Asset file not found: ${assetPath}`);
  process.exit(1);
}

// Read the current index.ts file
const indexPath = path.join(__dirname, '../src/index.ts');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Parse the asset path to determine the category and subcategory
const pathParts = assetPath.split('/');
const category = pathParts[1]; // e.g., 'svg', 'images', 'json'
const subcategory = pathParts[2]; // e.g., 'logos', 'icons'

// Create the asset path for the export
const exportPath = `'${assetPath}'`;

// Find the appropriate place to add the new asset
const categoryRegex = new RegExp(`\\s+${category}:\\s*{`, 'g');
const subcategoryRegex = new RegExp(`\\s+${subcategory}:\\s*{`, 'g');

if (!categoryRegex.test(indexContent)) {
  // Category doesn't exist, add it
  const insertIndex = indexContent.indexOf('export const ASSETS = {') + 'export const ASSETS = {'.length;
  const newCategory = `\n  ${category}: {\n    ${subcategory}: {\n      ${assetName}: ${exportPath}\n    }\n  }`;
  
  indexContent = indexContent.slice(0, insertIndex) + newCategory + indexContent.slice(insertIndex);
} else if (!subcategoryRegex.test(indexContent)) {
  // Category exists but subcategory doesn't
  const categoryMatch = indexContent.match(new RegExp(`\\s+${category}:\\s*{[^}]*}`, 'g'));
  if (categoryMatch) {
    const categoryBlock = categoryMatch[0];
    const newSubcategory = `\n    ${subcategory}: {\n      ${assetName}: ${exportPath}\n    }`;
    const updatedCategoryBlock = categoryBlock.replace('}', newSubcategory + '\n  }');
    indexContent = indexContent.replace(categoryBlock, updatedCategoryBlock);
  }
} else {
  // Both category and subcategory exist
  const subcategoryMatch = indexContent.match(new RegExp(`\\s+${subcategory}:\\s*{[^}]*}`, 'g'));
  if (subcategoryMatch) {
    const subcategoryBlock = subcategoryMatch[0];
    const newAsset = `\n      ${assetName}: ${exportPath}`;
    const updatedSubcategoryBlock = subcategoryBlock.replace('}', newAsset + '\n    }');
    indexContent = indexContent.replace(subcategoryBlock, updatedSubcategoryBlock);
  }
}

// Add individual export
const individualExport = `\n// Export individual assets for easier access\nexport const ${assetName} = ASSETS.${category}.${subcategory}.${assetName};`;

// Find where to insert the individual export (after existing individual exports)
const lastExportIndex = indexContent.lastIndexOf('export const');
if (lastExportIndex !== -1) {
  const nextLineIndex = indexContent.indexOf('\n', lastExportIndex);
  const insertIndex = indexContent.indexOf('\n', nextLineIndex) + 1;
  indexContent = indexContent.slice(0, insertIndex) + individualExport + indexContent.slice(insertIndex);
} else {
  // No existing individual exports, add before the default export
  const defaultExportIndex = indexContent.indexOf('// Export all assets as default');
  indexContent = indexContent.slice(0, defaultExportIndex) + individualExport + '\n\n' + indexContent.slice(defaultExportIndex);
}

// Write the updated content back to the file
fs.writeFileSync(indexPath, indexContent);

console.log(`✅ Successfully added asset: ${assetName}`);
console.log(`📁 Path: ${assetPath}`);
console.log(`🔧 Category: ${category}`);
console.log(`📂 Subcategory: ${subcategory}`);
console.log(`\n📝 Don't forget to:`);
console.log(`   1. Run 'npm run build' to rebuild the package`);
console.log(`   2. Update the README.md with the new asset`);
console.log(`   3. Commit your changes`);
console.log(`   4. Publish with 'npm publish' if ready`); 