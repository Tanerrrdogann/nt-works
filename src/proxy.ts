import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { defaultLocale, getLocaleFromPath, shouldNoIndexLocale, stripLocaleFromPath } from "@/lib/i18n";
import { siteConfig } from "@/lib/seo";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locale = getLocaleFromPath(pathname);

  if (locale === defaultLocale && pathname.startsWith(`/${defaultLocale}/`)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = stripLocaleFromPath(pathname);
    return NextResponse.redirect(redirectUrl, 308);
  }

  if (locale === defaultLocale) {
    return NextResponse.next();
  }

  const forwardedHost = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const forwardedProto = request.headers.get("x-forwarded-proto") ?? request.nextUrl.protocol.replace(":", "");
  const origin = forwardedHost && !forwardedHost.includes("localhost")
    ? `${forwardedProto}://${forwardedHost}`
    : siteConfig.url;
  const rewriteUrl = new URL(stripLocaleFromPath(pathname), origin);
  rewriteUrl.pathname = stripLocaleFromPath(pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nt-locale", locale);
  requestHeaders.set("x-nt-original-path", pathname);

  const response = NextResponse.rewrite(rewriteUrl, {
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set("x-nt-locale", locale);
  response.headers.set("x-nt-original-path", pathname);

  if (shouldNoIndexLocale(locale)) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|opengraph-image|manifest.webmanifest|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
