"use client";

import React from "react";
import { toast } from "sonner";
import BrutalistButton from "@/content/elements/button/brutalist-button";
import { Copy } from "lucide-react";

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
