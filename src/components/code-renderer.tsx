"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, Clipboard } from "lucide-react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeRendererProps = {
    code: string;
    className?: string;
};

export default function CodeRenderer({ code, className }: CodeRendererProps) {
    const [hasCopied, setHasCopied] = useState(false);

    const onCopy = () => {
        navigator.clipboard.writeText(code);
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 1000);
    };

    return (
        <ScrollArea className={cn("h-full w-full rounded-lg overflow-hidden relative", className)}>
            <button onClick={onCopy} className="absolute top-6 right-6 cursor-pointer z-50">
                {hasCopied ? (
                    <Check className="h-4 w-4 text-zinc-50" />
                ) : (
                    <Clipboard className="h-4 w-4 text-zinc-50" />
                )}
            </button>

            <SyntaxHighlighter
                language="tsx"
                style={a11yDark}
                customStyle={{ margin: 0, backgroundColor: "black" }}
            >
                {code}
            </SyntaxHighlighter>

            <ScrollBar orientation="horizontal" />
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    );
}
