const ENDPOINT = "https://api.hardcover.app/v1/graphql";

export type HardcoverImage = {
    url: string;
    width?: number;
    height?: number;
    color?: string;
    color_name?: string;
};

export type UserBookRead = {
    id: number;
    progress: number | null;
    progress_pages: number | null;
    progress_seconds: number | null;
    started_at: string | null;
};

export type UserBook = {
    id: number;
    rating: number | null;
    status_id: number;
    updated_at?: string | null;
    last_read_date?: string | null;
    user_book_reads?: UserBookRead[];
    book: {
        id: number;
        title: string;
        slug: string | null;
        pages: number | null;
        cached_image: HardcoverImage | null;
        contributions: { author: { name: string } | null }[];
    };
};

export type ReadingData = {
    currentlyReading: UserBook[];
    recentlyRead: UserBook[];
    stats: {
        totalRead: number;
        avgRating: number | null;
        readThisYear: number;
        currentlyReadingCount: number;
    };
};

const ME_QUERY = `query Me { me { id } }`;

const READING_QUERY = `
  query Reading($userId: Int!, $yearStart: date!) {
    currentlyReading: user_books(
      where: { user_id: { _eq: $userId }, status_id: { _eq: 2 } }
      order_by: { updated_at: desc }
    ) {
      id rating status_id updated_at
      user_book_reads(
        where: { finished_at: { _is_null: true } }
        order_by: [{ started_at: desc_nulls_last }, { id: desc }]
        limit: 1
      ) {
        id progress progress_pages progress_seconds started_at
      }
      book {
        id title slug pages cached_image
        contributions { author { name } }
      }
    }
    recentlyRead: user_books(
      where: { user_id: { _eq: $userId }, status_id: { _eq: 3 } }
      order_by: { last_read_date: desc_nulls_last }
      limit: 8
    ) {
      id rating status_id last_read_date
      book {
        id title slug pages cached_image
        contributions { author { name } }
      }
    }
    totalReadAgg: user_books_aggregate(
      where: { user_id: { _eq: $userId }, status_id: { _eq: 3 } }
    ) { aggregate { count avg { rating } } }
    readThisYearAgg: user_books_aggregate(
      where: {
        user_id: { _eq: $userId }
        status_id: { _eq: 3 }
        last_read_date: { _gte: $yearStart }
      }
    ) { aggregate { count } }
    currentlyReadingAgg: user_books_aggregate(
      where: { user_id: { _eq: $userId }, status_id: { _eq: 2 } }
    ) { aggregate { count } }
  }
`;

type GraphQLResponse<T> = { data?: T; errors?: { message: string }[] };

async function graphql<T>(body: { query: string; variables?: Record<string, unknown> }): Promise<T> {
    const token = process.env.HARDCOVER_API_TOKEN;
    if (!token) throw new Error("HARDCOVER_API_TOKEN is not set");

    const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify(body),
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error(`Hardcover request failed: ${res.status} ${res.statusText}`);
    }

    const json = (await res.json()) as GraphQLResponse<T>;
    if (json.errors?.length) {
        throw new Error(`Hardcover GraphQL error: ${json.errors.map((e) => e.message).join(", ")}`);
    }
    if (!json.data) throw new Error("Hardcover returned no data");
    return json.data;
}

export async function fetchReading(): Promise<ReadingData> {
    const meData = await graphql<{ me: { id: number }[] }>({ query: ME_QUERY });
    const userId = meData.me?.[0]?.id;
    if (!userId) throw new Error("Could not resolve current Hardcover user id");

    const yearStart = `${new Date().getUTCFullYear()}-01-01`;

    const d = await graphql<{
        currentlyReading: UserBook[];
        recentlyRead: UserBook[];
        totalReadAgg: { aggregate: { count: number; avg: { rating: number | null } } };
        readThisYearAgg: { aggregate: { count: number } };
        currentlyReadingAgg: { aggregate: { count: number } };
    }>({ query: READING_QUERY, variables: { userId, yearStart } });

    return {
        currentlyReading: d.currentlyReading ?? [],
        recentlyRead: d.recentlyRead ?? [],
        stats: {
            totalRead: d.totalReadAgg?.aggregate?.count ?? 0,
            avgRating: d.totalReadAgg?.aggregate?.avg?.rating ?? null,
            readThisYear: d.readThisYearAgg?.aggregate?.count ?? 0,
            currentlyReadingCount: d.currentlyReadingAgg?.aggregate?.count ?? 0,
        },
    };
}

const CURRENTLY_READING_QUERY = `
  query CurrentlyReading($userId: Int!) {
    currentlyReading: user_books(
      where: { user_id: { _eq: $userId }, status_id: { _eq: 2 } }
      order_by: { updated_at: desc }
    ) {
      id status_id updated_at
      user_book_reads(
        where: { finished_at: { _is_null: true } }
        order_by: [{ started_at: desc_nulls_last }, { id: desc }]
        limit: 1
      ) {
        id progress progress_pages progress_seconds started_at
      }
      book {
        id title slug pages cached_image
        contributions { author { name } }
      }
    }
  }
`;

export async function fetchCurrentlyReading(): Promise<UserBook[]> {
    const meData = await graphql<{ me: { id: number }[] }>({ query: ME_QUERY });
    const userId = meData.me?.[0]?.id;
    if (!userId) throw new Error("Could not resolve current Hardcover user id");
    const d = await graphql<{ currentlyReading: UserBook[] }>({
        query: CURRENTLY_READING_QUERY,
        variables: { userId },
    });
    return d.currentlyReading ?? [];
}

export function readingProgress(ub: UserBook): { percent: number; page: number | null } | null {
    const read = ub.user_book_reads?.[0];
    if (!read) return null;
    const pages = ub.book.pages ?? null;
    const percent = read.progress != null
        ? Math.max(0, Math.min(100, read.progress))
        : read.progress_pages != null && pages
            ? Math.max(0, Math.min(100, (read.progress_pages / pages) * 100))
            : 0;
    return { percent, page: read.progress_pages };
}

export type ActivityCell = {
    sessions: number;
    pages: number;
    finishes: number;
    books: { id: number; title: string; slug: string | null }[];
};

export type FinishedBook = {
    id: number;
    rating: number | null;
    last_read_date: string | null;
    first_read_date: string | null;
    book: UserBook["book"];
};

export type ReadingHistory = {
    years: number[];
    activityByDate: Record<string, ActivityCell>;
    booksByYear: Record<string, FinishedBook[]>;
    totalByYear: Record<string, { sessions: number; pages: number; books: number }>;
    hasUndated: boolean;
};

const HISTORY_QUERY = `
  query History($userId: Int!) {
    journals: reading_journals(
      where: {
        user_id: { _eq: $userId }
        event: { _eq: "progress_updated" }
      }
      order_by: { action_at: desc }
      limit: 2000
    ) {
      action_at event metadata
      book { id title slug }
    }
    finished: user_books(
      where: { user_id: { _eq: $userId }, status_id: { _eq: 3 } }
      order_by: { last_read_date: desc_nulls_last }
    ) {
      id rating last_read_date first_read_date
      book {
        id title slug pages cached_image
        contributions { author { name } }
      }
    }
  }
`;

export async function fetchReadingHistory(): Promise<ReadingHistory> {
    const meData = await graphql<{ me: { id: number }[] }>({ query: ME_QUERY });
    const userId = meData.me?.[0]?.id;
    if (!userId) throw new Error("Could not resolve current Hardcover user id");

    type JournalRow = {
        action_at: string;
        event: string;
        metadata: { progress_pages?: number; progress_pages_was?: number } | null;
        book: { id: number; title: string; slug: string | null } | null;
    };

    const d = await graphql<{ journals: JournalRow[]; finished: FinishedBook[] }>({
        query: HISTORY_QUERY,
        variables: { userId },
    });

    const activityByDate: Record<string, ActivityCell> = {};
    const yearsSet = new Set<number>();

    const ensureCell = (date: string): ActivityCell =>
        (activityByDate[date] ||= { sessions: 0, pages: 0, finishes: 0, books: [] });

    for (const j of d.journals) {
        if (!j.action_at) continue;
        const date = j.action_at.slice(0, 10);
        const year = Number(date.slice(0, 4));
        if (Number.isFinite(year)) yearsSet.add(year);

        const cell = ensureCell(date);
        cell.sessions += 1;
        const pagesDelta = Math.max(
            0,
            (j.metadata?.progress_pages ?? 0) - (j.metadata?.progress_pages_was ?? 0),
        );
        cell.pages += pagesDelta;
        if (j.book && !cell.books.some((b) => b.id === j.book!.id)) {
            cell.books.push(j.book);
        }
    }

    const booksByYear: Record<string, FinishedBook[]> = {};
    let hasUndated = false;

    for (const f of d.finished) {
        if (f.last_read_date) {
            const yk = f.last_read_date.slice(0, 4);
            (booksByYear[yk] ||= []).push(f);
            const yr = Number(yk);
            if (Number.isFinite(yr)) yearsSet.add(yr);

            const cell = ensureCell(f.last_read_date);
            cell.finishes += 1;
            const bookRef = { id: f.book.id, title: f.book.title, slug: f.book.slug };
            if (!cell.books.some((x) => x.id === bookRef.id)) cell.books.push(bookRef);
        } else {
            hasUndated = true;
            (booksByYear.unknown ||= []).push(f);
        }
    }

    const totalByYear: Record<string, { sessions: number; pages: number; books: number }> = {};
    for (const yr of yearsSet) {
        const yk = String(yr);
        const totals = { sessions: 0, pages: 0, books: 0 };
        for (const [date, cell] of Object.entries(activityByDate)) {
            if (date.startsWith(yk)) {
                totals.sessions += cell.sessions;
                totals.pages += cell.pages;
            }
        }
        totals.books = booksByYear[yk]?.length ?? 0;
        totalByYear[yk] = totals;
    }

    const years = Array.from(yearsSet).sort((a, b) => b - a);
    return { years, activityByDate, booksByYear, totalByYear, hasUndated };
}

export function authorList(book: UserBook["book"]): string {
    const names = book.contributions
        .map((c) => c.author?.name)
        .filter((n): n is string => Boolean(n));
    const unique = Array.from(new Set(names));
    return unique.join(", ");
}

export function hardcoverBookUrl(book: UserBook["book"]): string | null {
    return book.slug ? `https://hardcover.app/books/${book.slug}` : null;
}
