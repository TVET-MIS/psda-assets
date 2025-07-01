import React, { useState, useEffect } from 'react';
import { logo, config, psdaLogo, enTranslations, urTranslations } from '@tvet-mis/psda-assets';

function App() {
  const [translations, setTranslations] = useState({});
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    // Load translations based on current locale
    const translationFile = currentLocale === 'en' ? enTranslations : urTranslations;
    
    fetch(translationFile)
      .then(response => response.json())
      .then(data => setTranslations(data))
      .catch(error => console.error('Error loading translations:', error));
  }, [currentLocale]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: '20px' }}>
        <img 
          src={logo} 
          alt="PSDA Logo" 
          style={{ height: '60px', width: 'auto' }}
        />
        <h1>{translations.welcome || 'Welcome to PSDA'}</h1>
      </header>

      <main>
        <div style={{ marginBottom: '20px' }}>
          <button 
            onClick={() => setCurrentLocale('en')}
            style={{ 
              marginRight: '10px',
              padding: '8px 16px',
              backgroundColor: currentLocale === 'en' ? '#007bff' : '#f8f9fa',
              color: currentLocale === 'en' ? 'white' : 'black',
              border: '1px solid #007bff',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            English
          </button>
          <button 
            onClick={() => setCurrentLocale('ur')}
            style={{ 
              padding: '8px 16px',
              backgroundColor: currentLocale === 'ur' ? '#007bff' : '#f8f9fa',
              color: currentLocale === 'ur' ? 'white' : 'black',
              border: '1px solid #007bff',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            اردو
          </button>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>{translations.about || 'About'}</h2>
          <p>{translations.description || 'This is a sample application using PSDA assets.'}</p>
        </div>

        <div>
          <h3>Configuration Data:</h3>
          <pre style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '15px', 
            borderRadius: '4px',
            overflow: 'auto',
            maxHeight: '300px'
          }}>
            {JSON.stringify(config, null, 2)}
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App; 