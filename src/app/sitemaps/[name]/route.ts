import {
  findSitemapGroup,
  getSitemapEntries,
  getSitemapGroups,
  renderUrlSet,
  sitemapXmlResponse,
} from "@/lib/sitemap";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getSitemapGroups().map((group) => ({ name: group.filename }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  const group = findSitemapGroup(name);

  if (!group) {
    return new Response("Sitemap not found", { status: 404 });
  }

  return sitemapXmlResponse(renderUrlSet(getSitemapEntries(group)));
}
