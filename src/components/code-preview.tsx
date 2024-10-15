// /app/components/CodePreview.jsx
"use client";

import React from "react";
import { toast } from "sonner";
import { ScrollArea } from "./ui/scroll-area";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import BrutalistButton from "@/content/elements/button/brutalist-button";

interface CodePreviewProps {
    code: string;
}

const CodePreview = ({ code }: CodePreviewProps) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        toast("Copied to clipboard");
    };

    return (
        <ScrollArea className="h-full bg-[#2b2b2b]">
            <div className="bg-white sticky top-0">
                <BrutalistButton onClick={copyToClipboard}>
                    Copy Code
                </BrutalistButton>
            </div>
            <SyntaxHighlighter
                language="jsx"
                style={a11yDark}
                wrapLines
                wrapLongLines
            >
                {code}
            </SyntaxHighlighter>
        </ScrollArea>
    );
};

export default CodePreview;
