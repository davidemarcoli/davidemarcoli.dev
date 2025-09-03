import * as React from "react";
import { cn } from "@/lib/utils";
import { TagBadge } from "./tag-badge";

type TagVariant = "blue" | "green" | "purple" | "orange" | "pink" | "gray";

type Tag = { label: string; variant?: TagVariant };

interface PostLayoutProps {
  title: string;
  description?: string;
  tags?: Array<Tag | string>;
  children: React.ReactNode;
  className?: string;
}

export function PostLayout({ title, description, tags = [], children, className }: PostLayoutProps) {
  return (
    <div className={cn("min-h-screen bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8 text-neutral-100", className)}>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-100 mb-4">{title}</h1>
          {description ? (
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">{description}</p>
          ) : null}
          {tags.length ? (
            <div className="mt-6 flex justify-center flex-wrap gap-2">
              {tags.map((t, idx) => {
                const tag: Tag = typeof t === "string" ? { label: t } : t;
                return <TagBadge key={idx} variant={tag.variant}>{tag.label}</TagBadge>;
              })}
            </div>
          ) : null}
        </header>

        <div className="bg-neutral-900 border border-neutral-800 shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 sm:px-8 py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default PostLayout;
