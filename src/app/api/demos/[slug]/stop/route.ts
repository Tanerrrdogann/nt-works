import { NextResponse } from "next/server";
import { stopDemo } from "@/lib/demo/manager";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type StopContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function POST(_request: Request, context: StopContext) {
  const { slug } = await context.params;
  const result = stopDemo(slug);

  return NextResponse.json(
    {
      ok: result.ok,
      message: result.message
    },
    { status: result.status ?? 200 }
  );
}
