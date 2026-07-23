import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getStaticSeoCopy } from "@/lib/seo-strategy";
import { getServerLocale } from "@/lib/server-locale";

type MetadataCopy = {
  title: string;
  description: string;
};

export async function localizedStaticPageMetadata({
  path,
  fallback,
}: {
  path: string;
  fallback: MetadataCopy;
}): Promise<Metadata> {
  const locale = await getServerLocale();
  const copy = getStaticSeoCopy(path, locale, fallback);

  return pageMetadata({
    ...copy,
    path,
    locale,
  });
}

export async function localizedTrustPageMetadata({
  path,
}: {
  path: string;
}): Promise<Metadata> {
  const locale = await getServerLocale();
  const page = getStaticSeoCopy(path, locale);

  return pageMetadata({
    title: page.title,
    description: page.description,
    path,
    locale,
  });
}
