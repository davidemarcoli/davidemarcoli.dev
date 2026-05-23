import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import PostLayout from "@/components/post/layout";
import Grid from "@/components/post/grid";
import PostCard from "@/components/post/card";
import ReadingArchive from "@/components/reading/ReadingArchive";
import {
    fetchReading,
    fetchReadingHistory,
    authorList,
    hardcoverBookUrl,
    readingProgress,
    type UserBook,
} from "@/lib/hardcover";

export const metadata: Metadata = {
    title: "Reading",
    description: "Books I'm currently reading and recently finished, pulled from Hardcover.",
};

export const revalidate = 3600;

function formatRating(value: number | null | undefined): string {
    if (value == null) return "—";
    return Number(value).toFixed(1);
}

function Cover({ book, large = false }: { book: UserBook["book"]; large?: boolean }) {
    const url = book.cached_image?.url ?? null;
    const sizeClass = large ? "w-32 sm:w-40" : "w-full";
    const sizes = large ? "(min-width: 640px) 160px, 128px" : "(min-width: 768px) 200px, 50vw";
    return (
        <div
            className={`relative ${sizeClass} aspect-[2/3] rounded-md overflow-hidden bg-neutral-800 ring-1 ring-neutral-800 shrink-0`}
            style={book.cached_image?.color ? { backgroundColor: book.cached_image.color } : undefined}
        >
            {url ? (
                <Image src={url} alt={`Cover of ${book.title}`} fill sizes={sizes} className="object-cover" />
            ) : null}
        </div>
    );
}

function ProgressBar({ percent }: { percent: number }) {
    return (
        <div className="w-full">
            <div className="h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                <div className="h-full bg-accent" style={{ width: `${percent}%` }} />
            </div>
        </div>
    );
}

function StatTile({ label, value, sub }: { label: string; value: string; sub?: string }) {
    return (
        <PostCard tint="neutral" className="text-center">
            <div className="text-3xl font-semibold text-neutral-100">{value}</div>
            <div className="text-sm text-neutral-400 mt-1">{label}</div>
            {sub ? <div className="text-xs text-neutral-500 mt-1">{sub}</div> : null}
        </PostCard>
    );
}

function BackLink() {
    return (
        <Link
            href="/"
            className="hoverable fixed top-6 left-6 z-30 inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-accent transition-colors bg-neutral-950/70 backdrop-blur-sm px-3 py-1.5 rounded-md ring-1 ring-neutral-800"
            aria-label="Back to home"
        >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
        </Link>
    );
}

export default async function ReadingPage() {
    let data;
    let history;
    try {
        [data, history] = await Promise.all([fetchReading(), fetchReadingHistory()]);
    } catch (err) {
        return (
            <>
                <BackLink />
                <PostLayout title="Reading" description="Books I'm currently reading and recently finished.">
                    <PostCard tint="red">
                        <p className="text-red-200">Couldn&apos;t load Hardcover data right now.</p>
                        <p className="text-red-200/70 text-sm mt-2">{(err as Error).message}</p>
                    </PostCard>
                </PostLayout>
            </>
        );
    }

    const { currentlyReading, stats } = data;
    const year = new Date().getUTCFullYear();

    return (
        <>
        <BackLink />
        <PostLayout
            title="Reading"
            description="Books I'm currently reading and recently finished, pulled from Hardcover."
        >
            <section className="mb-12">
                <Grid cols={4}>
                    <StatTile label="Currently reading" value={String(stats.currentlyReadingCount)} />
                    <StatTile label={`Read in ${year}`} value={String(stats.readThisYear)} />
                    <StatTile label="Read all-time" value={String(stats.totalRead)} />
                    <StatTile label="Average rating" value={formatRating(stats.avgRating)} sub="out of 5" />
                </Grid>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-neutral-100 mb-4">Currently reading</h2>
                {currentlyReading.length === 0 ? (
                    <p className="text-neutral-400">Nothing in progress right now.</p>
                ) : (
                    <Grid cols={2}>
                        {currentlyReading.map((ub) => {
                            const href = hardcoverBookUrl(ub.book);
                            const progress = readingProgress(ub);
                            return (
                                <PostCard key={ub.id} className="flex gap-4">
                                    <Cover book={ub.book} large />
                                    <div className="min-w-0 flex flex-col flex-1">
                                        <h3 className="text-lg font-semibold text-neutral-100 leading-tight">
                                            {href ? (
                                                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                    {ub.book.title}
                                                </a>
                                            ) : (
                                                ub.book.title
                                            )}
                                        </h3>
                                        <p className="text-sm text-neutral-400 mt-1">{authorList(ub.book) || "Unknown author"}</p>
                                        <div className="mt-auto pt-3 space-y-2">
                                            {progress ? (
                                                <>
                                                    <ProgressBar percent={progress.percent} />
                                                    <div className="flex justify-between text-xs text-neutral-500">
                                                        <span>{Math.round(progress.percent)}%</span>
                                                        <span>
                                                            {progress.page != null && ub.book.pages
                                                                ? `${progress.page} / ${ub.book.pages} pages`
                                                                : ub.book.pages
                                                                    ? `${ub.book.pages} pages`
                                                                    : null}
                                                        </span>
                                                    </div>
                                                </>
                                            ) : ub.book.pages ? (
                                                <div className="text-xs text-neutral-500">{ub.book.pages} pages</div>
                                            ) : null}
                                        </div>
                                    </div>
                                </PostCard>
                            );
                        })}
                    </Grid>
                )}
            </section>

            <section className="mb-4">
                <ReadingArchive {...history} />
            </section>

            <p className="text-xs text-neutral-500 mt-8 text-center">
                Data from{" "}
                <a href="https://hardcover.app" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300">
                    Hardcover
                </a>
                . Cached for one hour.
            </p>
        </PostLayout>
        </>
    );
}
