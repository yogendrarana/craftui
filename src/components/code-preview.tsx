"use client";

import React from "react";
import { toast } from "sonner";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import BrutalistButton from "@/content/elements/button/brutalist-button";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodePreviewProps {
    code: string;
}

const CodePreview = ({ code }: CodePreviewProps) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        toast.success("Copied to clipboard");
    };

    return (
        <ScrollArea className="h-full bg-[#2b2b2b] whitespace-nowrap">
            <div className="bg-white sticky top-0">
                <BrutalistButton onClick={copyToClipboard}>Copy Code</BrutalistButton>
            </div>
            <SyntaxHighlighter language="tsx" style={a11yDark}>
                {code}
            </SyntaxHighlighter>
            <ScrollBar orientation="horizontal" />
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    );
};

export default CodePreview;
