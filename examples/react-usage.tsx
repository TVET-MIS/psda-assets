import React from 'react';
import ASSETS, { psdaLogo, getAssetPath } from 'psda-assets';

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
        alt="Auth Logo" 
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

// Main example component
export function AssetsExample() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>PSDA Assets Usage Examples</h1>
      
      <LogoComponent />
      <hr />
      
      <NamedImportComponent />
      <hr />
      
      <HelperFunctionComponent />
      <hr />
      
      <ComplexComponent />
    </div>
  );
} 