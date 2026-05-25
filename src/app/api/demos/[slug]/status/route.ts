import { NextResponse } from "next/server";
import { getDemoStatus } from "@/lib/demo/manager";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type StatusContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_request: Request, context: StatusContext) {
  const { slug } = await context.params;
  const status = getDemoStatus(slug);

  if (!status.runtime) {
    return NextResponse.json({ ok: false }, { status: 404 });
  }

  return NextResponse.json({
      ok: true,
      active: status.active,
      startedAt: status.startedAt,
      runtime: {
      slug: status.runtime.slug,
      publicPath: status.runtime.publicPath,
      kind: status.runtime.kind,
      targetUrl: status.runtime.targetUrl,
      ready: status.runtime.ready,
      notes: status.runtime.notes
    }
  });
}
