/**
 * PSDA Assets Package Type Definitions
 */
declare module '@tvet-mis/psda-assets' {
  export const psdaLogo: string;  // SVG import will return a string (URL)
  export const enTranslations: Record<string, any>;  // JSON will be typed as a generic object
  export const urTranslations: Record<string, any>;
}
