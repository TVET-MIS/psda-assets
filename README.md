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

> **Note:** All asset exports (like `psdaLogo`) are now public URLs. You can use them directly in `<img>` tags or fetch them in the browser. No need to copy files to your React project's public directory.

### Import and use a logo in React
```jsx
import { psdaLogo } from '@tvet-mis/psda-assets';

function MyComponent() {
  return (
    <img src={psdaLogo} alt="PSDA Logo" style={{ width: 200, height: 'auto' }} />
  );
}
```

### Import and use translations
```js
import { enTranslations } from '@tvet-mis/psda-assets';

fetch(enTranslations)
  .then(res => res.json())
  .then(data => console.log(data));
```

### Dynamic asset usage
```js
import { getAssetPath, getTranslationPath } from '@tvet-mis/psda-assets';

const logoUrl = getAssetPath('https://raw.githubusercontent.com/TVET-MIS/psda-assets/main/assets/svg/logos/psda_logo.svg');
const urduTranslationsUrl = getTranslationPath('ur');
```

### Available Exports
- `psdaLogo` — Public URL to the PSDA logo SVG
- `enTranslations` — Public URL to English translations JSON
- `urTranslations` — Public URL to Urdu translations JSON
- `getAssetPath(path)` — Returns the given path (for consistency)
- `getTranslationPath(locale)` — Returns the public URL for the given locale
- `getAvailableLocales()` — Returns all available locales

---

## How it works
- All asset exports are **public URLs** (e.g., GitHub raw links)
- You can use them directly in `<img src={psdaLogo} />` or fetch them in the browser
- No need to copy files to your React project's public directory

---

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
2. Update the `src/index.ts` file to export the new asset paths as public URLs
3. Build the package: `npm run build`
4. Commit and push to GitHub (GitHub Actions will auto-publish)

---

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
npm test
```

### Publishing
The package is automatically published to GitHub Packages via GitHub Actions when you push to the `main` branch.

For manual publishing:
```bash
npm publish
```

### Authentication Setup
The package uses environment variables for secure token management:

- Copy `.npmrc.template` to `.npmrc`
- Set `NODE_AUTH_TOKEN` environment variable
- Never commit your actual token to version control

---

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

---

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

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Commit and push
6. Create a pull request

## License

MIT