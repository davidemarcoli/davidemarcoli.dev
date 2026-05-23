"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";

type ReadingBook = {
    id: number;
    title: string;
    slug: string | null;
    author: string;
    cover: string | null;
    coverWidth: number | null;
    coverHeight: number | null;
    coverColor: string | null;
    pages: number | null;
    progressPercent: number | null;
    progressPage: number | null;
};

const CurrentlyReadingStrip = () => {
    const [books, setBooks] = useState<ReadingBook[] | null>(null);

    useEffect(() => {
        let cancelled = false;
        fetch("/api/reading-now")
            .then((r) => (r.ok ? r.json() : []))
            .then((data: ReadingBook[]) => {
                if (!cancelled) setBooks(Array.isArray(data) ? data : []);
            })
            .catch(() => {
                if (!cancelled) setBooks([]);
            });
        return () => {
            cancelled = true;
        };
    }, []);

    if (!books || books.length === 0) return null;

    return (
        <section className="relative w-full px-6 sm:px-12 py-12 border-t border-neutral-900/80">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Currently reading</span>
                    </div>
                    <Link
                        href="/reading"
                        className="text-xs uppercase tracking-widest text-neutral-500 hover:text-accent transition-colors hoverable"
                    >
                        All books →
                    </Link>
                </div>

                <ul className="flex gap-6 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-thin">
                    {books.map((b) => (
                        <li key={b.id} className="shrink-0 w-44">
                            <Link
                                href={b.slug ? `https://hardcover.app/books/${b.slug}` : "/reading"}
                                target={b.slug ? "_blank" : undefined}
                                rel={b.slug ? "noopener noreferrer" : undefined}
                                className="group block hoverable"
                            >
                                <div
                                    className="relative w-full aspect-[2/3] rounded-md overflow-hidden bg-neutral-900 ring-1 ring-neutral-800 transition-transform group-hover:-translate-y-0.5"
                                    style={b.coverColor ? { backgroundColor: b.coverColor } : undefined}
                                >
                                    {b.cover ? (
                                        <Image
                                            src={b.cover}
                                            alt={`Cover of ${b.title}`}
                                            fill
                                            sizes="176px"
                                            className="object-cover"
                                        />
                                    ) : null}
                                    {b.progressPercent != null ? (
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/40">
                                            <div
                                                className="h-full bg-accent"
                                                style={{ width: `${b.progressPercent}%` }}
                                            />
                                        </div>
                                    ) : null}
                                </div>
                                <div className="mt-3 min-w-0">
                                    <p className="text-sm text-neutral-200 truncate">{b.title}</p>
                                    <p className="text-xs text-neutral-500 truncate">{b.author}</p>
                                    {b.progressPercent != null ? (
                                        <p className="text-[11px] text-neutral-500 mt-1">
                                            {Math.round(b.progressPercent)}%
                                            {b.progressPage && b.pages ? ` · ${b.progressPage}/${b.pages}` : ""}
                                        </p>
                                    ) : null}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CurrentlyReadingStrip;
