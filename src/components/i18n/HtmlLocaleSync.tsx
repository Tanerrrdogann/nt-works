"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLocaleConfig, getLocaleFromPath } from "@/lib/i18n";

export default function HtmlLocaleSync() {
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    const locale = getLocaleFromPath(pathname);
    const localeConfig = getLocaleConfig(locale);
    document.documentElement.lang = localeConfig.languageTag;
    document.documentElement.dir = localeConfig.dir;
  }, [pathname]);

  return null;
}
