/**
 * PSDA Assets Package Type Definitions
 */

declare module '@tvet-mis/psda-assets' {
  // Logo assets - paths to SVG files
  export const psdaLogo: string;
  export const logo: string;
  
  // Translation files - paths to JSON files
  export const enTranslations: string;
  export const urTranslations: string;
  export const config: string;
  
  // Type for translation data structure
  export interface TranslationData {
    welcome?: string;
    about?: string;
    description?: string;
    [key: string]: any;
  }
  
  // Helper function types (if needed in the future)
  export function getTranslationPath(locale: 'en' | 'ur'): string;
  export function getAssetPath(path: string): string;
} 