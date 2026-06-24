import { NextResponse } from "next/server";
import { getAllArticles } from "@/lib/cms/client";
import { searchArticles } from "@/lib/search";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") ?? "";
    const articles = await getAllArticles();
    const results = searchArticles(articles, query);

    return NextResponse.json(
        { results },
        { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } }
    );
}