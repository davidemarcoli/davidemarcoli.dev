import * as React from "react";
import { cn } from "@/lib/utils";

interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  tint?: "blue" | "green" | "purple" | "red" | "orange" | "yellow" | "pink" | "neutral";
}

const tintMap: Record<NonNullable<PostCardProps["tint"]>, string> = {
  blue: "bg-blue-950/30 border-blue-900/50",
  green: "bg-green-950/30 border-green-900/50",
  purple: "bg-purple-950/30 border-purple-900/50",
  red: "bg-red-950/30 border-red-900/50",
  orange: "bg-orange-950/30 border-orange-900/50",
  yellow: "bg-yellow-950/30 border-yellow-900/50",
  pink: "bg-pink-950/30 border-pink-900/50",
  neutral: "bg-neutral-900/50 border-neutral-800",
};

export function PostCard({ title, subtitle, tint = "neutral", className, children, ...props }: PostCardProps) {
  return (
    <div className={cn("rounded-lg border p-4", tintMap[tint], className)} {...props}>
      {title ? <h5 className="font-medium text-neutral-100 mb-2">{title}</h5> : null}
      {subtitle ? <p className="text-sm text-neutral-400 mb-2">{subtitle}</p> : null}
      {children}
    </div>
  );
}

export default PostCard;
