"use client";

import React from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import BrutalistButton from "@/content/registry/elements/button/brutalist-button";

const BrutalistCopyButton = ({ code, className }: { code: string; className?: string }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        toast.success("Copied to clipboard");
    };

    return (
        <BrutalistButton
            onClick={copyToClipboard}
            className={cn("flex items-center gap-3", className)}
        >
            <Copy size={18} />
            Copy
        </BrutalistButton>
    );
};

export default BrutalistCopyButton;
