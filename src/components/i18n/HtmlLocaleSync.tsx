"use client";

import { useEffect } from "react";
import { useCurrentLocale } from "@/components/i18n/LocaleProvider";
import { getLocaleConfig } from "@/lib/i18n";

export default function HtmlLocaleSync() {
  const locale = useCurrentLocale();

  useEffect(() => {
    const localeConfig = getLocaleConfig(locale);
    document.documentElement.lang = localeConfig.languageTag;
    document.documentElement.dir = localeConfig.dir;
  }, [locale]);

  return null;
}
