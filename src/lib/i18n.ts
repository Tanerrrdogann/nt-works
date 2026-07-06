export const defaultLocale = "tr" as const;

export const localeConfigs = [
  { code: "tr", label: "Türkçe", languageTag: "tr-TR", ogLocale: "tr_TR", dir: "ltr" },
  { code: "en", label: "English", languageTag: "en", ogLocale: "en_US", dir: "ltr" },
  { code: "de", label: "Deutsch", languageTag: "de", ogLocale: "de_DE", dir: "ltr" },
  { code: "fr", label: "Français", languageTag: "fr", ogLocale: "fr_FR", dir: "ltr" },
  { code: "es", label: "Español", languageTag: "es", ogLocale: "es_ES", dir: "ltr" },
  { code: "ar", label: "العربية", languageTag: "ar", ogLocale: "ar_AR", dir: "rtl" },
  { code: "ru", label: "Русский", languageTag: "ru", ogLocale: "ru_RU", dir: "ltr" },
  { code: "pt", label: "Português", languageTag: "pt", ogLocale: "pt_PT", dir: "ltr" },
  { code: "it", label: "Italiano", languageTag: "it", ogLocale: "it_IT", dir: "ltr" },
  { code: "nl", label: "Nederlands", languageTag: "nl", ogLocale: "nl_NL", dir: "ltr" },
  { code: "zh", label: "中文", languageTag: "zh", ogLocale: "zh_CN", dir: "ltr" },
] as const;

export type Locale = (typeof localeConfigs)[number]["code"];

export const locales = localeConfigs.map((locale) => locale.code) as Locale[];

// A language is added here only after its full-site translation passes review.
export const publishedLocales: Locale[] = [defaultLocale, "en", "de", "fr", "es", "ar", "ru", "pt", "it", "nl", "zh"];

const localeSet = new Set<string>(locales);

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && localeSet.has(value));
}

export function getLocaleConfig(locale: Locale) {
  return localeConfigs.find((item) => item.code === locale) ?? localeConfigs[0];
}

export function isPublishedLocale(locale: Locale) {
  return publishedLocales.includes(locale);
}

export function getLocaleFromPath(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function stripLocaleFromPath(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (isLocale(segments[0])) {
    const stripped = `/${segments.slice(1).join("/")}`;
    return stripped === "/" ? "/" : stripped.replace(/\/$/, "") || "/";
  }

  return pathname || "/";
}

export function withLocalePath(pathname: string, locale: Locale) {
  const stripped = stripLocaleFromPath(pathname);
  if (locale === defaultLocale) return stripped;
  return stripped === "/" ? `/${locale}` : `/${locale}${stripped}`;
}

export function localizePathForCurrent(pathname: string, currentPathname: string) {
  return withLocalePath(pathname, getLocaleFromPath(currentPathname));
}

export function createLanguageAlternates(pathname: string, activeLocales: Locale[] = publishedLocales) {
  return Object.fromEntries(
    activeLocales.map((locale) => [
      getLocaleConfig(locale).languageTag,
      withLocalePath(pathname, locale),
    ]),
  );
}

export function shouldNoIndexLocale(locale: Locale) {
  return locale !== defaultLocale && !isPublishedLocale(locale);
}
