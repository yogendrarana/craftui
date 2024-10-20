"use client";

import React from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodePreviewProps {
    code: string;
}

const CodePreview = ({ code }: CodePreviewProps) => {
    return (
        <ScrollArea className="h-full bg-[#2b2b2b] rounded-lg">
            <SyntaxHighlighter language="tsx" style={a11yDark}>
                {code}
            </SyntaxHighlighter>
            <ScrollBar orientation="horizontal" />
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    );
};

export default CodePreview;
