"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import type { ActivityCell, FinishedBook, ReadingHistory } from "@/lib/hardcover";

type Props = ReadingHistory;

const FILL_CLASS = [
    "bg-neutral-900",
    "bg-accent/25",
    "bg-accent/50",
    "bg-accent/75",
    "bg-accent",
];

const LEGEND_CLASS = [
    "bg-neutral-900 ring-1 ring-inset ring-neutral-800/60",
    "bg-accent/25",
    "bg-accent/50",
    "bg-accent/75",
    "bg-accent",
];

const RING_NEUTRAL = "ring-1 ring-inset ring-neutral-800/60";
const RING_FINISH = "ring-[1.5px] ring-inset ring-amber-400/90";
const FINISH_LEGEND_CLASS = `bg-neutral-900 ${RING_FINISH}`;

function level(pages: number): number {
    if (pages <= 0) return 0;
    if (pages < 10) return 1;
    if (pages < 25) return 2;
    if (pages < 50) return 3;
    return 4;
}

function isoDate(d: Date): string {
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, "0");
    const day = String(d.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

type HeatmapCell = {
    iso: string;
    inYear: boolean;
    week: number;
    dow: number;
    activity: ActivityCell | undefined;
};

function buildYearGrid(year: number, activityByDate: Record<string, ActivityCell>): {
    cells: HeatmapCell[];
    weekCount: number;
    monthOffsets: { label: string; week: number }[];
} {
    const yearStart = new Date(Date.UTC(year, 0, 1));
    const yearEnd = new Date(Date.UTC(year, 11, 31));

    const gridStart = new Date(yearStart);
    gridStart.setUTCDate(gridStart.getUTCDate() - gridStart.getUTCDay());
    const gridEnd = new Date(yearEnd);
    gridEnd.setUTCDate(gridEnd.getUTCDate() + (6 - gridEnd.getUTCDay()));

    const cells: HeatmapCell[] = [];
    const monthOffsets: { label: string; week: number }[] = [];
    let lastMonth = -1;
    let week = 0;

    for (let cur = new Date(gridStart); cur <= gridEnd; cur.setUTCDate(cur.getUTCDate() + 1)) {
        const dow = cur.getUTCDay();
        const iso = isoDate(cur);
        const inYear = cur.getUTCFullYear() === year;
        if (inYear && cur.getUTCDate() === 1 && cur.getUTCMonth() !== lastMonth) {
            monthOffsets.push({ label: MONTHS[cur.getUTCMonth()], week });
            lastMonth = cur.getUTCMonth();
        }
        cells.push({ iso, inYear, week, dow, activity: activityByDate[iso] });
        if (dow === 6) week++;
    }

    return { cells, weekCount: week + 1, monthOffsets };
}

function Heatmap({ year, activityByDate }: { year: number; activityByDate: Record<string, ActivityCell> }) {
    const { cells, weekCount, monthOffsets } = useMemo(
        () => buildYearGrid(year, activityByDate),
        [year, activityByDate],
    );

    const cellSize = 11;
    const gap = 3;
    const step = cellSize + gap;

    const headerHeight = 18;

    return (
        <div className="overflow-x-auto">
            <div className="inline-block min-w-fit">
                <div className="flex gap-2">
                    <div className="flex flex-col">
                        <div style={{ height: headerHeight }} />
                        <div
                            className="grid grid-rows-7 gap-[3px] text-[10px] text-neutral-500"
                            style={{ height: 7 * step - gap }}
                        >
                            {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                                <span key={i} className="leading-[11px]">{d}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div
                            className="relative text-[10px] text-neutral-500"
                            style={{ height: headerHeight, width: weekCount * step - gap }}
                        >
                            {monthOffsets.map((m) => (
                                <span key={`${m.label}-${m.week}`} className="absolute top-0" style={{ left: m.week * step }}>
                                    {m.label}
                                </span>
                            ))}
                        </div>
                        <div
                            className="grid grid-rows-7 grid-flow-col gap-[3px]"
                            style={{ gridAutoColumns: `${cellSize}px`, width: weekCount * step - gap }}
                        >
                            {cells.map((c) => {
                                const sessions = c.activity?.sessions ?? 0;
                                const finishes = c.activity?.finishes ?? 0;
                                const pages = c.activity?.pages ?? 0;
                                const lvl = c.inYear ? level(pages) : 0;
                                let klass: string;
                                if (!c.inYear) {
                                    klass = "opacity-0 pointer-events-none";
                                } else {
                                    const fill = FILL_CLASS[lvl];
                                    const ring = finishes > 0 ? RING_FINISH : pages === 0 ? RING_NEUTRAL : "";
                                    klass = ring ? `${fill} ${ring}` : fill;
                                }
                                const bookTitles = c.activity?.books.map((b) => b.title).join(", ");
                                const parts: string[] = [];
                                if (pages > 0) parts.push(`${pages} ${pages === 1 ? "page" : "pages"}`);
                                if (sessions > 0) parts.push(`${sessions} ${sessions === 1 ? "session" : "sessions"}`);
                                if (finishes > 0) parts.push(`finished ${finishes} ${finishes === 1 ? "book" : "books"}`);
                                if (bookTitles) parts.push(bookTitles);
                                const tip = c.inYear
                                    ? parts.length > 0
                                        ? `${c.iso} · ${parts.join(" · ")}`
                                        : `${c.iso} · no activity`
                                    : "";
                                return (
                                    <div
                                        key={c.iso}
                                        className={`rounded-[2px] ${klass}`}
                                        style={{ width: cellSize, height: cellSize }}
                                        title={tip}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-4 mt-3 text-[10px] text-neutral-500 flex-wrap">
                    <div className="flex items-center gap-2">
                        <span className={`rounded-[2px] ${FINISH_LEGEND_CLASS}`} style={{ width: cellSize, height: cellSize }} />
                        <span>Finished a book</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Less</span>
                        {LEGEND_CLASS.map((c, i) => (
                            <span key={i} className={`rounded-[2px] ${c}`} style={{ width: cellSize, height: cellSize }} />
                        ))}
                        <span>More</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function bookHref(b: FinishedBook): string | null {
    return b.book.slug ? `https://hardcover.app/books/${b.book.slug}` : null;
}

function authorString(b: FinishedBook): string {
    const names = b.book.contributions.map((c) => c.author?.name).filter((n): n is string => Boolean(n));
    return Array.from(new Set(names)).join(", ");
}

function formatFinished(value: string | null): string | null {
    if (!value) return null;
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return null;
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function BookRow({ b }: { b: FinishedBook }) {
    const href = bookHref(b);
    const finished = formatFinished(b.last_read_date);
    const cover = b.book.cached_image?.url ?? null;
    return (
        <li className="flex gap-3 items-start py-3 border-t border-neutral-800/70 first:border-t-0">
            <div
                className="relative w-10 h-14 shrink-0 rounded-sm overflow-hidden bg-neutral-800 ring-1 ring-neutral-800"
                style={b.book.cached_image?.color ? { backgroundColor: b.book.cached_image.color } : undefined}
            >
                {cover ? (
                    <Image src={cover} alt={`Cover of ${b.book.title}`} fill sizes="40px" className="object-cover" />
                ) : null}
            </div>
            <div className="min-w-0 flex-1">
                <p className="text-sm text-neutral-100 truncate">
                    {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {b.book.title}
                        </a>
                    ) : (
                        b.book.title
                    )}
                </p>
                <p className="text-xs text-neutral-500 truncate">{authorString(b)}</p>
            </div>
            <div className="text-right shrink-0 flex flex-col items-end gap-1">
                {b.rating != null ? (
                    <span className="inline-flex items-center gap-1 text-amber-300 text-xs">
                        <Star className="w-3 h-3 fill-current" />
                        {Number(b.rating).toFixed(1)}
                    </span>
                ) : null}
                {finished ? <span className="text-[11px] text-neutral-500">{finished}</span> : null}
            </div>
        </li>
    );
}

export default function ReadingArchive({ years, activityByDate, booksByYear, totalByYear, hasUndated }: Props) {
    const tabs: string[] = [...years.map(String), ...(hasUndated ? ["undated"] : [])];
    const [active, setActive] = useState<string>(tabs[0] ?? "");
    const isYear = active && active !== "undated";
    const books = booksByYear[active] ?? [];
    const totals = isYear ? totalByYear[active] : null;

    if (tabs.length === 0) return null;

    return (
        <section>
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <h2 className="text-2xl font-semibold text-neutral-100">Archive</h2>
                <div role="tablist" className="flex gap-1 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 p-1">
                    {tabs.map((t) => (
                        <button
                            type="button"
                            key={t}
                            role="tab"
                            aria-selected={active === t}
                            onClick={() => setActive(t)}
                            className={`hoverable px-3 py-1 text-xs rounded ${
                                active === t
                                    ? "bg-neutral-800 text-neutral-100"
                                    : "text-neutral-400 hover:text-neutral-200"
                            }`}
                        >
                            {t === "undated" ? "Undated" : t}
                        </button>
                    ))}
                </div>
            </div>

            {isYear ? (
                <>
                    <div className="text-sm text-neutral-400 mb-4">
                        {totals?.books ?? 0} {totals?.books === 1 ? "book" : "books"}
                        {totals?.pages ? ` · ${totals.pages} pages` : ""}
                        {totals?.sessions
                            ? ` · ${totals.sessions} ${totals.sessions === 1 ? "session" : "sessions"}`
                            : ""}
                    </div>
                    <div className="mb-8">
                        <Heatmap year={Number(active)} activityByDate={activityByDate} />
                    </div>
                </>
            ) : (
                <div className="text-sm text-neutral-400 mb-4">
                    {books.length} {books.length === 1 ? "book" : "books"} without a recorded finish date.
                </div>
            )}

            <ul className="mt-4">
                {books.length === 0 ? (
                    <li className="text-neutral-500 text-sm">No books in this period.</li>
                ) : (
                    books.map((b) => <BookRow key={b.id} b={b} />)
                )}
            </ul>
        </section>
    );
}
