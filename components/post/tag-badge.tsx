import * as React from "react";
import { cn } from "@/lib/utils";

interface TagBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "green" | "purple" | "orange" | "pink" | "gray";
}

const palette: Record<NonNullable<TagBadgeProps["variant"]>, string> = {
  blue: "bg-blue-500/20 text-blue-300 ring-1 ring-inset ring-blue-500/30",
  green: "bg-green-500/20 text-green-300 ring-1 ring-inset ring-green-500/30",
  purple: "bg-purple-500/20 text-purple-300 ring-1 ring-inset ring-purple-500/30",
  orange: "bg-orange-500/20 text-orange-300 ring-1 ring-inset ring-orange-500/30",
  pink: "bg-pink-500/20 text-pink-300 ring-1 ring-inset ring-pink-500/30",
  gray: "bg-neutral-700/30 text-neutral-300 ring-1 ring-inset ring-neutral-600/40",
};

export function TagBadge({ className, variant = "gray", ...props }: TagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        palette[variant],
        className,
      )}
      {...props}
    />
  );
}

export default TagBadge;
