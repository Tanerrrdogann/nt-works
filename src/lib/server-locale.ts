import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

// Tur 1 dil adımları tamamlandıkça bu liste genişletilecek.
// Böylece üzerinde henüz çalışılmayan dillerin mevcut davranışı değişmez.
const serverReadyLocales = new Set<Locale>([defaultLocale, "de", "en", "fr", "es", "ar", "ru", "pt", "it", "nl", "zh"]);

export async function getServerLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get("x-nt-locale") ?? undefined;

  if (!isLocale(requestedLocale) || !serverReadyLocales.has(requestedLocale)) {
    return defaultLocale;
  }

  return requestedLocale;
}
