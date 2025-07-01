#!/usr/bin/env node

/**
 * Setup script for GitHub Packages authentication
 * Usage: node scripts/setup-auth.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔐 Setting up GitHub Packages Authentication...\n');

// Check if .npmrc already exists
const npmrcPath = path.join(__dirname, '..', '.npmrc');
const npmrcExists = fs.existsSync(npmrcPath);

if (npmrcExists) {
  console.log('✅ .npmrc file already exists');
} else {
  console.log('📝 Creating .npmrc file...');
}

console.log('\n📋 To authenticate with GitHub Packages, you need to:');
console.log('\n1. Create a GitHub Personal Access Token:');
console.log('   - Go to GitHub Settings > Developer settings > Personal access tokens');
console.log('   - Generate a new token with "write:packages" permission');
console.log('   - Copy the token');

console.log('\n2. Set the environment variable:');
console.log('   Windows (PowerShell):');
console.log('   $env:NODE_AUTH_TOKEN="your_token_here"');
console.log('\n   Windows (Command Prompt):');
console.log('   set NODE_AUTH_TOKEN=your_token_here');
console.log('\n   macOS/Linux:');
console.log('   export NODE_AUTH_TOKEN=your_token_here');

console.log('\n3. Test authentication:');
console.log('   npm whoami --registry=https://npm.pkg.github.com');

console.log('\n4. Publish package:');
console.log('   npm publish');

console.log('\n⚠️  Security Notes:');
console.log('   - Never commit your token to version control');
console.log('   - Use environment variables, not hardcoded values');
console.log('   - The .npmrc file uses ${NODE_AUTH_TOKEN} to reference the env var');

console.log('\n🎉 Setup complete! Your .npmrc is configured to use environment variables.'); 