import { getTranslatableRoutes } from "../src/data/i18n/global-route-map";
import { localeCompletion } from "../src/data/i18n/ui-translations";
import sitemap from "../src/app/sitemap";
import { defaultLocale, isLocale, locales, publishedLocales } from "../src/lib/i18n";

const routes = getTranslatableRoutes();
const duplicateRoutes = routes
  .map((route) => route.sourcePath)
  .filter((path, index, all) => all.indexOf(path) !== index);

const unpublishedButMarked = locales.filter((locale) => (
  locale !== defaultLocale
  && publishedLocales.includes(locale)
  && !localeCompletion[locale].published
));

const missingCompletion = locales.filter((locale) => !localeCompletion[locale]);

const markedPublishedButUnlisted = locales.filter((locale) => (
  localeCompletion[locale]?.published
  && !publishedLocales.includes(locale)
));

function getLocaleFromAbsoluteUrl(url: string) {
  const pathname = new URL(url).pathname;
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : defaultLocale;
}

(async () => {
  const sitemapEntries = await sitemap();
  const sitemapCounts = Object.fromEntries(locales.map((locale) => [
    locale,
    sitemapEntries.filter((entry) => getLocaleFromAbsoluteUrl(String(entry.url)) === locale).length,
  ]));

  const publishedWithoutSitemap = publishedLocales.filter((locale) => sitemapCounts[locale] === 0);
  const unpublishedInSitemap = locales.filter((locale) => (
    !publishedLocales.includes(locale)
    && (sitemapCounts[locale] ?? 0) > 0
  ));

  console.log(JSON.stringify({
    locales: locales.length,
    publishedLocales,
    translatableRoutes: routes.length,
    duplicateRoutes,
    missingCompletion,
    unpublishedButMarked,
    markedPublishedButUnlisted,
    sitemapCounts,
    publishedWithoutSitemap,
    unpublishedInSitemap,
  }, null, 2));

  if (
    duplicateRoutes.length
    || missingCompletion.length
    || unpublishedButMarked.length
    || markedPublishedButUnlisted.length
    || publishedWithoutSitemap.length
    || unpublishedInSitemap.length
  ) {
    process.exit(1);
  }
})();
