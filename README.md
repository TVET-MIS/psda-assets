# @tvet-mis/psda-assets

A simple assets package for PSDA React projects with TypeScript support.

## Installation

```bash
npm install @tvet-mis/psda-assets
```

## Usage

### Basic Usage

```javascript
import { logo, config } from '@tvet-mis/psda-assets';

function App() {
  return (
    <div>
      <img src={logo} alt="PSDA Logo" />
      <pre>{JSON.stringify(config, null, 2)}</pre>
    </div>
  );
}
```

### TypeScript Support

The package includes TypeScript declarations, so you can use it in TypeScript projects without any additional setup:

```typescript
import { logo, psda404, psda500, config, psdaLogo, enTranslations } from '@tvet-mis/psda-assets';

interface AppProps {
  // Your component props
}

function App({ ...props }: AppProps) {
  return (
    <div>
      <img src={logo} alt="PSDA Logo" />
      <pre>{JSON.stringify(config, null, 2)}</pre>
    </div>
  );
}
```

### Available Assets

```javascript
import { 
  psdaLogo,        // PSDA logo SVG
  logo,            // Alias for psdaLogo
  enTranslations,  // English translations
  urTranslations,  // Urdu translations
  config           // Alias for enTranslations
} from '@tvet-mis/psda-assets';
```

### Using in React Components

```javascript
import { psdaLogo, enTranslations } from '@tvet-mis/psda-assets';

function Header() {
  return (
    <header>
      <img src={psdaLogo} alt="PSDA Logo" />
    </header>
  );
}

function TranslationExample() {
  const [translations, setTranslations] = useState({});
  
  useEffect(() => {
    fetch(enTranslations)
      .then(response => response.json())
      .then(data => setTranslations(data));
  }, []);
  
  return (
    <div>
      <h1>{translations.welcome}</h1>
    </div>
  );
}
```

## Asset Structure

```
assets/
├── svg/
│   └── logos/
│       └── psda_logo.svg
└── commoni18n/
    └── locale/
        ├── en/
        │   └── translation.json
        └── ur/
            └── translation.json
```

## Publishing

This package is published to GitHub Packages. To publish:

```bash
npm run build
npm publish
```

## License

MIT