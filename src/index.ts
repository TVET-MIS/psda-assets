// Asset paths
export const ASSETS = {
  svg: {
    logos: {
      psda_logo: '/assets/svg/logos/psda_logo.svg'
    }
  },
  commoni18n: {
    locale: {
      en: {
        translation: {
          json: '/assets/commoni18n/locale/en/translation.json'
        }
      },
      ur: {
        translation: {
          json: '/assets/commoni18n/locale/ur/translation.json'
        }
      }
    }
  }
} as const;

// Helper function to get asset path
export function getAssetPath(path: string): string {
  return path;
}

// Helper function to get translation file path
export function getTranslationPath(locale: 'en' | 'ur'): string {
  return ASSETS.commoni18n.locale[locale].translation.json;
}

// Helper function to get all available locales
export function getAvailableLocales(): ('en' | 'ur')[] {
  return ['en', 'ur'];
}

// Type for asset paths
export type AssetPath = typeof ASSETS;

// Export individual assets for easier access
export const psdaLogo = ASSETS.svg.logos.psda_logo;
export const enTranslations = ASSETS.commoni18n.locale.en.translation.json;
export const urTranslations = ASSETS.commoni18n.locale.ur.translation.json;

// Export all assets as default
export default ASSETS; 