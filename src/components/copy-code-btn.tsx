"use client";

import React from "react";
import { toast } from "sonner";
import { Copy } from "lucide-react";
import BrutalistButton from "@/content/registry/elements/button/brutalist-button";

const CopyCodeBtn = ({ code }: { code: string }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        toast.success("Copied to clipboard");
    };

    return (
        <BrutalistButton onClick={copyToClipboard} className="flex items-center gap-3">
            <Copy size={18} />
            Copy
        </BrutalistButton>
    );
};

export default CopyCodeBtn;
