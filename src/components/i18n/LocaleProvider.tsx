"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { defaultLocale, getLocaleFromPath, type Locale } from "@/lib/i18n";

const LocaleContext = createContext<Locale>(defaultLocale);
const subscribeToClient = () => () => {};

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const pathname = usePathname() ?? "/";
  const isClient = useSyncExternalStore(subscribeToClient, () => true, () => false);
  const locale = isClient ? getLocaleFromPath(pathname) : initialLocale;

  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useCurrentLocale() {
  return useContext(LocaleContext);
}
