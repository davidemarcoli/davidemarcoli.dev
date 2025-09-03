import * as React from "react";
import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4;
}

export function Grid({ cols = 2, className, ...props }: GridProps) {
  const grid = cols === 1 ? "grid-cols-1" : cols === 2 ? "md:grid-cols-2" : cols === 3 ? "md:grid-cols-3" : "md:grid-cols-4";
  return <div className={cn("grid gap-6", grid, className)} {...props} />;
}

export default Grid;
