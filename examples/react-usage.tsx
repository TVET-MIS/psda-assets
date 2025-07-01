import React from 'react';
import ASSETS, { 
  psdaLogo, 
  enTranslations, 
  urTranslations, 
  getAssetPath, 
  getTranslationPath, 
  getAvailableLocales 
} from '@tvet-mis/psda-assets';

// Example 1: Using the default export
export function LogoComponent() {
  return (
    <div>
      <h2>Using Default Export</h2>
      <img 
        src={ASSETS.svg.logos.psda_logo} 
        alt="Auth Logo" 
        style={{ width: '200px', height: 'auto' }}
      />
    </div>
  );
}

// Example 2: Using named imports
export function NamedImportComponent() {
  return (
    <div>
      <h2>Using Named Import</h2>
      <img 
        src={psdaLogo} 
        alt="Auth Logo" 
        style={{ width: '200px', height: 'auto' }}
      />
    </div>
  );
}

// Example 3: Using the helper function
export function HelperFunctionComponent() {
  const logoPath = getAssetPath('/assets/svg/logos/psda_logo.svg');
  
  return (
    <div>
      <h2>Using Helper Function</h2>
      <img 
        src={logoPath} 
        alt="Auth Logo" 
        style={{ width: '200px', height: 'auto' }}
      />
    </div>
  );
}

// Example 4: Using in a more complex component
export function ComplexComponent() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div>
      <h2>Complex Usage Example</h2>
      {!isLoaded && <p>Loading logo...</p>}
      <img 
        src={ASSETS.svg.logos.psda_logo} 
        alt="PSDA Logo" 
        style={{ 
          width: '200px', 
          height: 'auto',
          opacity: isLoaded ? 1 : 0.5,
          transition: 'opacity 0.3s ease'
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

// Example 5: Using translations
export function TranslationComponent() {
  const [translations, setTranslations] = React.useState(null);
  const [locale, setLocale] = React.useState('en');

  const loadTranslations = async (lang: 'en' | 'ur') => {
    try {
      const response = await fetch(getTranslationPath(lang));
      const data = await response.json();
      setTranslations(data);
      setLocale(lang);
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  };

  React.useEffect(() => {
    loadTranslations('en');
  }, []);

  return (
    <div>
      <h2>Translation Usage Example</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => loadTranslations('en')}
          style={{ 
            marginRight: '10px',
            backgroundColor: locale === 'en' ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          English
        </button>
        <button 
          onClick={() => loadTranslations('ur')}
          style={{ 
            backgroundColor: locale === 'ur' ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          اردو
        </button>
      </div>

      {translations && (
        <div style={{ 
          padding: '15px', 
          border: '1px solid #ddd', 
          borderRadius: '4px',
          backgroundColor: '#f8f9fa'
        }}>
          <h3>{translations.common.welcome}</h3>
          <p><strong>{translations.common.login}:</strong> {translations.auth.loginTitle}</p>
          <p><strong>{translations.common.email}:</strong> example@email.com</p>
          <p><strong>{translations.common.password}:</strong> ••••••••</p>
        </div>
      )}
    </div>
  );
}

// Example 6: Dynamic asset loading
export function DynamicAssetComponent() {
  const [currentAsset, setCurrentAsset] = React.useState(psdaLogo);
  const availableLocales = getAvailableLocales();

  return (
    <div>
      <h2>Dynamic Asset Loading</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setCurrentAsset(psdaLogo)}
          style={{ 
            marginRight: '10px',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Load Logo
        </button>
        <button 
          onClick={() => setCurrentAsset(enTranslations)}
          style={{ 
            marginRight: '10px',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Load EN Translations
        </button>
        <button 
          onClick={() => setCurrentAsset(urTranslations)}
          style={{ 
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Load UR Translations
        </button>
      </div>

      <div style={{ 
        padding: '15px', 
        border: '1px solid #ddd', 
        borderRadius: '4px',
        backgroundColor: '#f8f9fa'
      }}>
        <p><strong>Current Asset:</strong> {currentAsset}</p>
        <p><strong>Available Locales:</strong> {availableLocales.join(', ')}</p>
      </div>
    </div>
  );
}

// Main example component
export function AssetsExample() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>PSDA Assets Usage Examples</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Examples showing how to use @tvet-mis/psda-assets in React projects
      </p>
      
      <LogoComponent />
      <hr />
      
      <NamedImportComponent />
      <hr />
      
      <HelperFunctionComponent />
      <hr />
      
      <ComplexComponent />
      <hr />
      
      <TranslationComponent />
      <hr />
      
      <DynamicAssetComponent />
    </div>
  );
} 