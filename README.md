# PSDA Assets

A centralized npm package for managing static assets (images, SVGs, JSON files) across PSDA React projects.

## Installation

```bash
npm install psda-assets
```

or

```bash
yarn add psda-assets
```

## Usage

### Import all assets
```typescript
import ASSETS from 'psda-assets';

// Use in React component
function MyComponent() {
  return (
    <img src={ASSETS.svg.logos.psda_logo} alt="Auth Logo" />
  );
}
```

### Import specific assets
```typescript
import { psdaLogo } from 'psda-assets';

function MyComponent() {
  return (
    <img src={psdaLogo} alt="Auth Logo" />
  );
}
```

### Import with destructuring
```typescript
import { ASSETS } from 'psda-assets';

function MyComponent() {
  return (
    <img src={ASSETS.svg.logos.psda_logo} alt="Auth Logo" />
  );
}
```

### Using the helper function
```typescript
import { getAssetPath } from 'psda-assets';

function MyComponent() {
  const logoPath = getAssetPath('/assets/svg/logos/psda_logo.svg');
  return (
    <img src={logoPath} alt="Auth Logo" />
  );
}
```

## Available Assets

### SVGs
- **Logos**
  - `psda_logo` - Authentication logo

## Adding New Assets

### Method 1: Using the automated script (Recommended)
```bash
npm run add-asset <asset-path> <asset-name>
```

Example:
```bash
npm run add-asset assets/images/logo.png logo
npm run add-asset assets/json/config.json config
npm run add-asset assets/svg/icons/user.svg userIcon
```

### Method 2: Manual addition
1. Add your asset files to the appropriate directory in `assets/`
2. Update the `src/index.ts` file to export the new asset paths
3. Build the package: `npm run build`
4. Publish the new version: `npm publish`

## Development

### Setup
```bash
npm install
```

### Build
```bash
npm run build
```

### Development mode (watch for changes)
```bash
npm run dev
```

### Testing
```bash
node test/test-assets.js
```

### Publishing
```bash
npm publish
```

## Quick Start

1. **Install the package in your React project:**
   ```bash
   npm install psda-assets
   ```

2. **Import and use assets:**
   ```typescript
   import { psdaLogo } from 'psda-assets';
   
   function App() {
     return (
       <div>
         <img src={psdaLogo} alt="Auth Logo" />
       </div>
     );
   }
   ```

3. **Add new assets to the package:**
   ```bash
   # In the psda-assets project
   npm run add-asset assets/images/new-logo.png newLogo
   npm run build
   npm publish
   ```

## Project Structure

```
psda-assets/
├── assets/           # Static asset files
│   └── svg/
│       └── logos/
│           └── psda_logo.svg
├── src/              # TypeScript source
│   └── index.ts      # Main export file
├── dist/             # Built JavaScript files
├── package.json
├── tsconfig.json
└── README.md
```

## License

MIT