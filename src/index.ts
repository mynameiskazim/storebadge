// ─── App Store ───────────────────────────────────────────────────────────────

export type AppStoreLocale =
  | 'ar' | 'az' | 'bg' | 'bn' | 'cs' | 'da' | 'de' | 'el' | 'en'
  | 'es' | 'es-ca' | 'es-mx' | 'et' | 'fi' | 'fil' | 'fr' | 'fr-ca'
  | 'gu' | 'he' | 'he-il' | 'hi' | 'hr' | 'hu' | 'id' | 'it' | 'ja'
  | 'kn' | 'ko' | 'lt' | 'lv' | 'ml' | 'mr' | 'ms' | 'mt' | 'nb'
  | 'nl' | 'or' | 'pa' | 'pl' | 'pt-br' | 'pt-pt' | 'ro' | 'ru'
  | 'sk' | 'sl' | 'sl-sl' | 'sv' | 'ta' | 'te' | 'th' | 'tr' | 'uk'
  | 'ur' | 'vi' | 'zh-cn' | 'zh-tw';

export type AppStoreVariant = 'black' | 'white';

// ─── Google Play ─────────────────────────────────────────────────────────────

export type GooglePlayLocale =
  | 'af' | 'ar' | 'az' | 'be' | 'bg' | 'bn' | 'bs' | 'ca' | 'cs'
  | 'da' | 'de' | 'el' | 'en' | 'es' | 'es-latam' | 'et' | 'eu'
  | 'fa' | 'fi' | 'fil' | 'fr' | 'fr-ca' | 'ga' | 'gl' | 'gu'
  | 'he' | 'hi' | 'hr' | 'hu' | 'hy' | 'id' | 'is' | 'it' | 'ja'
  | 'ka' | 'kk' | 'km' | 'kn' | 'ko' | 'ky' | 'lo' | 'lt' | 'lv'
  | 'mk' | 'ml' | 'mn' | 'mr' | 'ms' | 'my' | 'nb' | 'ne' | 'nl'
  | 'pa' | 'pl' | 'pt-br' | 'pt-pt' | 'ro' | 'ru' | 'si' | 'sk'
  | 'sl' | 'sq' | 'sr' | 'sv' | 'sw' | 'ta' | 'te' | 'th' | 'tr'
  | 'uk' | 'ur' | 'uz' | 'vi' | 'zh-cn' | 'zh-tw' | 'zu';

export type GooglePlayFormat = 'svg' | 'png';

// ─── Microsoft Store ─────────────────────────────────────────────────────────

export type MicrosoftLocale =
  | 'af' | 'am' | 'ar' | 'as' | 'az' | 'bg' | 'bn' | 'bs' | 'ca'
  | 'cs' | 'cy' | 'da' | 'de' | 'el' | 'en-us' | 'es' | 'et' | 'fa'
  | 'fi' | 'fil' | 'fr' | 'ga' | 'gd' | 'gl' | 'gu' | 'he' | 'hi'
  | 'hr' | 'hu' | 'hy' | 'id' | 'is' | 'it' | 'ja' | 'ka' | 'kk'
  | 'km' | 'kn' | 'ko' | 'kok' | 'lb' | 'lo' | 'lt' | 'lv' | 'mi'
  | 'mk' | 'ml' | 'mr' | 'ms' | 'mt' | 'ne' | 'nl' | 'nn' | 'or'
  | 'pa' | 'pl' | 'pt-br' | 'pt-pt' | 'quz' | 'ro' | 'ru' | 'sk'
  | 'sl' | 'sq' | 'sr' | 'sv' | 'ta' | 'te' | 'th' | 'tr' | 'ug'
  | 'uk' | 'ur' | 'uz' | 'vi' | 'zh-cn' | 'zh-tw';

export type MicrosoftTheme = 'dark' | 'light';

// ─── CDN base URL helper ──────────────────────────────────────────────────────

/**
 * Base URL used when resolving badge paths to absolute URLs.
 * Defaults to the jsDelivr CDN pointing at the storebadge GitHub repo.
 * Override this if you self-host the badges.
 *
 * @example
 * import { setBaseUrl } from 'storebadge';
 * setBaseUrl('https://cdn.example.com/storebadge');
 */
let _baseUrl = 'https://cdn.jsdelivr.net/gh/mynameiskazim/storebadge/badges';

export function setBaseUrl(url: string): void {
  _baseUrl = url.replace(/\/$/, '');
}

export function getBaseUrl(): string {
  return _baseUrl;
}

// ─── Badge path helpers ───────────────────────────────────────────────────────

/**
 * Returns the relative path (from the package root) to an App Store badge SVG.
 *
 * @example
 * appStoreBadgePath('en', 'black')
 * // → 'badges/appstore/appstore-black-en.svg'
 */
export function appStoreBadgePath(
  locale: AppStoreLocale,
  variant: AppStoreVariant = 'black',
): string {
  return `badges/appstore/appstore-${variant}-${locale}.svg`;
}

/**
 * Returns the relative path to a Google Play badge.
 *
 * @example
 * googlePlayBadgePath('en')          // → 'badges/googleplay/googleplay-en.svg'
 * googlePlayBadgePath('en', 'png')   // → 'badges/googleplay/googleplay-en.png'
 */
export function googlePlayBadgePath(
  locale: GooglePlayLocale,
  format: GooglePlayFormat = 'svg',
): string {
  return `badges/googleplay/googleplay-${locale}.${format}`;
}

/**
 * Returns the relative path to a Microsoft Store badge SVG.
 *
 * @example
 * microsoftBadgePath('en-us', 'dark')
 * // → 'badges/microsoft/en-us-dark.svg'
 */
export function microsoftBadgePath(
  locale: MicrosoftLocale,
  theme: MicrosoftTheme = 'dark',
): string {
  return `badges/microsoft/${locale}-${theme}.svg`;
}

// ─── Absolute URL helpers ─────────────────────────────────────────────────────

/**
 * Returns the full CDN URL for an App Store badge.
 *
 * @example
 * appStoreBadgeUrl('tr', 'black')
 * // → 'https://cdn.jsdelivr.net/gh/mynameiskazim/storebadge/badges/appstore/appstore-black-tr.svg'
 */
export function appStoreBadgeUrl(
  locale: AppStoreLocale,
  variant: AppStoreVariant = 'black',
): string {
  return `${_baseUrl}/appstore/appstore-${variant}-${locale}.svg`;
}

/**
 * Returns the full CDN URL for a Google Play badge.
 *
 * @example
 * googlePlayBadgeUrl('tr')
 * googlePlayBadgeUrl('tr', 'png')
 */
export function googlePlayBadgeUrl(
  locale: GooglePlayLocale,
  format: GooglePlayFormat = 'svg',
): string {
  return `${_baseUrl}/googleplay/googleplay-${locale}.${format}`;
}

/**
 * Returns the full CDN URL for a Microsoft Store badge.
 *
 * @example
 * microsoftBadgeUrl('en-us', 'dark')
 */
export function microsoftBadgeUrl(
  locale: MicrosoftLocale,
  theme: MicrosoftTheme = 'dark',
): string {
  return `${_baseUrl}/microsoft/${locale}-${theme}.svg`;
}

// ─── Convenience object ───────────────────────────────────────────────────────

/**
 * Grouped API — useful when you want to import a single object.
 *
 * @example
 * import { badges } from 'storebadge';
 * badges.appStore.url('en', 'black');
 * badges.googlePlay.url('en');
 * badges.microsoft.url('en-us', 'dark');
 */
export const badges = {
  appStore: {
    path: appStoreBadgePath,
    url: appStoreBadgeUrl,
  },
  googlePlay: {
    path: googlePlayBadgePath,
    url: googlePlayBadgeUrl,
  },
  microsoft: {
    path: microsoftBadgePath,
    url: microsoftBadgeUrl,
  },
} as const;

export default badges;
