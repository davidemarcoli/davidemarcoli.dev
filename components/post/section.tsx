import * as React from "react";
import { cn } from "@/lib/utils";

interface PostSectionProps extends React.HTMLAttributes<HTMLElement> {
    title?: string;
    subtitle?: string;
}

export function PostSection({ title, subtitle, className, children, ...props }: PostSectionProps) {
    return (
        <section className={cn("mb-16", className)} {...props}>
            {title ? <h2 className="text-3xl font-bold text-neutral-100 mb-8">{title}</h2> : null}
            {subtitle ? <p className="text-neutral-300 mb-6">{subtitle}</p> : null}
            {children}
        </section>
    );
}

export default PostSection;
