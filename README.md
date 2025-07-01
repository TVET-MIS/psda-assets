# PSDA Assets

A centralized npm package for managing static assets (images, SVGs, JSON files, translations) across PSDA React projects. Published to GitHub Packages for the TVET-MIS organization.

## Installation

### From GitHub Packages (Recommended)
```bash
npm install @tvet-mis/psda-assets
```

### From GitHub Repository (Direct)
```bash
npm install git+https://github.com/TVET-MIS/psda-assets.git
```

### Using Yarn
```bash
yarn add @tvet-mis/psda-assets
```

## Usage

### Import all assets
```typescript
import ASSETS from '@tvet-mis/psda-assets';

// Use in React component
function MyComponent() {
  return (
    <img src={ASSETS.svg.logos.psda_logo} alt="PSDA Logo" />
  );
}
```

### Import specific assets
```typescript
import { psdaLogo } from '@tvet-mis/psda-assets';

function MyComponent() {
  return (
    <img src={psdaLogo} alt="PSDA Logo" />
  );
}
```

### Import with destructuring
```typescript
import { ASSETS } from '@tvet-mis/psda-assets';

function MyComponent() {
  return (
    <img src={ASSETS.svg.logos.psda_logo} alt="PSDA Logo" />
  );
}
```

### Using the helper function
```typescript
import { getAssetPath } from '@tvet-mis/psda-assets';

function MyComponent() {
  const logoPath = getAssetPath('/assets/svg/logos/psda_logo.svg');
  return (
    <img src={logoPath} alt="PSDA Logo" />
  );
}
```

### Using translations
```typescript
import { enTranslations, urTranslations, getTranslationPath } from '@tvet-mis/psda-assets';

// Load English translations
fetch(enTranslations)
  .then(res => res.json())
  .then(data => console.log(data));

// Load translations dynamically
const locale = 'ur';
fetch(getTranslationPath(locale))
  .then(res => res.json())
  .then(data => console.log(data));
```

### Using translation helper functions
```typescript
import { getAvailableLocales, getTranslationPath } from '@tvet-mis/psda-assets';

// Get all available locales
const locales = getAvailableLocales(); // ['en', 'ur']

// Get translation path for specific locale
const urPath = getTranslationPath('ur'); // '/assets/json/translations/ur.json'
```

## Available Assets

### SVGs
- **Logos**
  - `psda_logo` - PSDA logo

### JSON Files
- **Translations**
  - `en` - English translations (`/assets/json/translations/en.json`)
  - `ur` - Urdu translations (`/assets/json/translations/ur.json`)

### Helper Functions
- `getAssetPath(path: string)` - Get asset path
- `getTranslationPath(locale: 'en' | 'ur')` - Get translation file path
- `getAvailableLocales()` - Get all available locales

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
npm run add-asset assets/json/translations/ar.json arTranslations
```

### Method 2: Manual addition
1. Add your asset files to the appropriate directory in `assets/`
2. Update the `src/index.ts` file to export the new asset paths
3. Build the package: `npm run build`
4. Commit and push to GitHub (GitHub Actions will auto-publish)

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
The package is automatically published to GitHub Packages via GitHub Actions when you push to the `main` branch.

For manual publishing:
```bash
npm publish
```

## Quick Start

1. **Install the package in your React project:**
   ```bash
   npm install @tvet-mis/psda-assets
   ```

2. **Import and use assets:**
   ```typescript
   import { psdaLogo, enTranslations } from '@tvet-mis/psda-assets';
   
   function App() {
     return (
       <div>
         <img src={psdaLogo} alt="PSDA Logo" />
         
         {/* Load translations */}
         <button onClick={() => {
           fetch(enTranslations)
             .then(res => res.json())
             .then(data => console.log(data));
         }}>
           Load Translations
         </button>
       </div>
     );
   }
   ```

3. **Add new assets to the package:**
   ```bash
   # In the psda-assets project
   npm run add-asset assets/images/new-logo.png newLogo
   npm run build
   git add .
   git commit -m "Add new logo"
   git push origin main
   ```

## Project Structure

```
psda-assets/
├── assets/           # Static asset files
│   ├── svg/
│   │   └── logos/
│   │       └── psda_logo.svg
│   └── json/
│       └── translations/
│           ├── en.json
│           └── ur.json
├── src/              # TypeScript source
│   └── index.ts      # Main export file
├── dist/             # Built JavaScript files
├── examples/         # Usage examples
├── scripts/          # Utility scripts
├── test/             # Test files
├── .github/          # GitHub Actions
├── package.json
├── tsconfig.json
└── README.md
```

## GitHub Packages & CI/CD

This package is automatically published to GitHub Packages using GitHub Actions. The workflow:

1. **Triggers on**: Push to `main` branch or pull requests
2. **Builds**: TypeScript code and runs tests
3. **Publishes**: To `@tvet-mis/psda-assets` on GitHub Packages
4. **Registry**: `https://npm.pkg.github.com`

### Workflow File
See `.github/workflows/publish.yml` for the complete CI/CD configuration.

### Manual Publishing
If you need to publish manually:

1. **Setup authentication:**
   ```bash
   npm run setup-auth
   ```

2. **Set your GitHub token:**
   ```bash
   # Windows (PowerShell)
   $env:NODE_AUTH_TOKEN="your_token_here"
   
   # Windows (Command Prompt)
   set NODE_AUTH_TOKEN=your_token_here
   
   # macOS/Linux
   export NODE_AUTH_TOKEN=your_token_here
   ```

3. **Publish:**
   ```bash
   npm publish
   ```

### Authentication Setup
The package uses environment variables for secure token management:

- Copy `.npmrc.template` to `.npmrc`
- Set `NODE_AUTH_TOKEN` environment variable
- Never commit your actual token to version control

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Commit and push
6. Create a pull request

## License

MIT