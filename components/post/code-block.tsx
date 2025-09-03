import * as React from "react";
import { cn } from "@/lib/utils";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
    languageLabel?: string;
    language?: string;
}

export function CodeBlock({ className, children, languageLabel, language, ...props }: CodeBlockProps) {
    return (
        <div className="mb-6">
            {languageLabel ? (
                <div className="text-xs text-neutral-400 mb-1">{languageLabel}</div>
            ) : null}
            <SyntaxHighlighter
                language={language}
                style={dark}
                className={cn(
                    "p-4 rounded-lg overflow-x-auto border border-neutral-800",
                    className,
                )}
                customStyle={{
                    background: '#0a0a0a', // Matches bg-neutral-950
                    color: '#4ade80', // Matches text-green-400
                }}
                {...props}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    );
}

export default CodeBlock;
