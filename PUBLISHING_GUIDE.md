# Publishing Guide for PSDA Assets

This guide will help you publish the `psda-assets` package to npm.

## Prerequisites

1. **npm account**: Make sure you have an npm account
2. **npm login**: Run `npm login` in your terminal
3. **Package name availability**: Ensure the package name is available on npm

## Publishing Steps

### 1. Update Package Information

Before publishing, update the following in `package.json`:

- **Author**: Replace "Your Name" with your actual name
- **Repository URL**: Update the GitHub repository URL
- **Version**: Update version number if needed (follow semantic versioning)

### 2. Build the Package

```bash
npm run build
```

### 4. Check What Will Be Published

```bash
npm pack --dry-run
```

This will show you exactly what files will be included in the package.

### 5. Publish to npm

```bash
npm publish
```

If this is the first time publishing, you might need to use:

```bash
npm publish --access public
```

### 6. Verify Publication

Check your package on npm: https://www.npmjs.com/package/psda-assets

## Updating the Package

### 1. Add New Assets

```bash
npm run add-asset <asset-path> <asset-name>
```

### 2. Update Version

```bash
npm version patch  # for bug fixes
npm version minor  # for new features
npm version major  # for breaking changes
```

### 3. Build and Publish

```bash
npm run build
npm publish
```

## Using the Package in Other Projects

### Installation

```bash
npm install psda-assets
```

### Usage

```typescript
import { psdaLogo } from 'psda-assets';

function MyComponent() {
  return <img src={psdaLogo} alt="Auth Logo" />;
}
```

## Troubleshooting

### Package Name Already Exists

If the package name is already taken, you can:

1. Choose a different name (e.g., `@your-org/psda-assets`)
2. Use a scoped package name
3. Contact the owner of the existing package

### Publishing Errors

- **Authentication**: Make sure you're logged in with `npm login`
- **Permissions**: Ensure you have permission to publish to the package name
- **Version conflicts**: Make sure the version number is higher than the previous version

### Asset Path Issues

If assets aren't loading in consuming projects:

1. Check that the asset files are included in the published package
2. Verify the paths in `src/index.ts` are correct
3. Ensure the consuming project can access the asset URLs

## Best Practices

1. **Semantic Versioning**: Follow semantic versioning for releases
2. **Changelog**: Keep a changelog of what's added in each version
3. **Documentation**: Update README.md when adding new assets
4. **Testing**: Always test the package before publishing
5. **Asset Organization**: Keep assets organized in logical folders

## Package Structure

```
psda-assets/
├── assets/           # Static assets (published)
├── src/              # TypeScript source (not published)
├── dist/             # Built JavaScript (published)
├── examples/         # Usage examples (not published)
├── scripts/          # Utility scripts (not published)
├── test/             # Test files (not published)
├── package.json
├── tsconfig.json
├── README.md
└── .npmignore
```

The `.npmignore` file ensures only necessary files are published to npm. 