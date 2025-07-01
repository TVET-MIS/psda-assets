// Asset paths
export const ASSETS = {
  svg: {
    logos: {
      psda_logo: '/assets/svg/logos/psda_logo.svg'
    }
  },
  json: {
    translations: {
      en: '/assets/json/translations/en.json',
      ur: '/assets/json/translations/ur.json'
    }
  }
} as const;

// Helper function to get asset path
export function getAssetPath(path: string): string {
  return path;
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