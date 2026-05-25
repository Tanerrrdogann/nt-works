import { NextResponse, type NextRequest } from "next/server";
import { startDemo } from "@/lib/demo/manager";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type StartContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(request: NextRequest, context: StartContext) {
  const { slug } = await context.params;
  const result = await startDemo(slug);

  if (!result.ok || !result.runtime) {
    return NextResponse.json(
      {
        ok: false,
        message: result.message ?? "Preview could not be started"
      },
      { status: result.status ?? 500 }
    );
  }

  const redirectUrl = new URL(result.runtime.publicPath, request.url);
  const response = NextResponse.redirect(redirectUrl);

  response.cookies.set("ntworks-demo-session", slug, {
    httpOnly: false,
    sameSite: "lax",
    path: result.runtime.publicPath,
    maxAge: 60 * 60
  });

  return response;
}
