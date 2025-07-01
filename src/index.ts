// Asset paths - Using public URLs for better compatibility
export const ASSETS = {
  svg: {
    logos: {
      psda_logo: 'https://raw.githubusercontent.com/TVET-MIS/psda-assets/main/assets/svg/logos/psda_logo.svg'
    }
  },
  json: {
    translations: {
      en: 'https://raw.githubusercontent.com/TVET-MIS/psda-assets/main/assets/json/translations/en.json',
      ur: 'https://raw.githubusercontent.com/TVET-MIS/psda-assets/main/assets/json/translations/ur.json'
    }
  }
} as const;

// Helper function to get asset path - converts relative paths to public URLs
export function getAssetPath(path: string): string {
  // If it's already a full URL, return as-is
  if (path.startsWith('http')) {
    return path;
  }
  
  // Convert relative path to public GitHub URL
  const baseUrl = 'https://raw.githubusercontent.com/TVET-MIS/psda-assets/main/assets/';
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${baseUrl}${cleanPath}`;
}

// Helper function to get translation file path
export function getTranslationPath(locale: 'en' | 'ur'): string {
  return ASSETS.json.translations[locale];
}

// Helper function to get all available locales
export function getAvailableLocales(): ('en' | 'ur')[] {
  return ['en', 'ur'];
}

// Type for asset paths
export type AssetPath = typeof ASSETS;

// Export individual assets for easier access
export const psdaLogo = ASSETS.svg.logos.psda_logo;
export const enTranslations = ASSETS.json.translations.en;
export const urTranslations = ASSETS.json.translations.ur;

// Export all assets as default
export default ASSETS; 