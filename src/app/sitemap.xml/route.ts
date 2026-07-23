import { renderSitemapIndex, sitemapXmlResponse } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return sitemapXmlResponse(renderSitemapIndex());
}
