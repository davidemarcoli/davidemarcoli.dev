import { NextResponse } from "next/server";
import { fetchCurrentlyReading, readingProgress, authorList } from "@/lib/hardcover";

export const revalidate = 3600;

export async function GET() {
    try {
        const books = await fetchCurrentlyReading();
        const payload = books.map((ub) => {
            const progress = readingProgress(ub);
            return {
                id: ub.id,
                title: ub.book.title,
                slug: ub.book.slug,
                author: authorList(ub.book),
                cover: ub.book.cached_image?.url ?? null,
                coverWidth: ub.book.cached_image?.width ?? null,
                coverHeight: ub.book.cached_image?.height ?? null,
                coverColor: ub.book.cached_image?.color ?? null,
                pages: ub.book.pages,
                progressPercent: progress?.percent ?? null,
                progressPage: progress?.page ?? null,
            };
        });
        return NextResponse.json(payload, {
            headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
        });
    } catch (err) {
        return NextResponse.json({ error: (err as Error).message }, { status: 502 });
    }
}
