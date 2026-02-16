/**
 * PSDA Assets Package Type Definitions
 */
declare module "@tvet-mis/psda-assets" {
  export const psdaLogo: string; // SVG import will return a string (URL)
  export const psda404: string;
  export const psda500: string;
  export const userProfileMain: string;
  export const userProfile: string;
  export const bg: string;
  export const whatsappIcon: string;
  export const certificate: string;  // JPG image for certificate
  export const enTranslations: Record<string, any>;  // JSON will be typed as a generic object
  export const urTranslations: Record<string, any>;
  export const applicationCoverPage: string;
  export const applicationAuthImage: string;
  export const authBrandImage: string;

}
