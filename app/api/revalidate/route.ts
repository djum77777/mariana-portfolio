import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { CONTENT_CALENDAR_CACHE_TAG } from "@/lib/notion-content";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization");
  const requestUrl = new URL(request.url);
  const token = requestUrl.searchParams.get("secret");

  if (secret && authHeader !== `Bearer ${secret}` && token !== secret) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  revalidateTag(CONTENT_CALENDAR_CACHE_TAG, "max");
  revalidatePath("/");

  return NextResponse.json({
    ok: true,
    refreshed: "content-calendar",
  });
}
