"use client";

import { cn } from "@/lib/utils";
import { RotateCw } from "lucide-react";
import { cloneElement, useState } from "react";

type ComponentPreviewProps = {
    component: React.ReactElement;
    hasReTrigger?: boolean;
    className?: string;
};

export default function ComponentPreview({
    component,
    hasReTrigger = false,
    className
}: ComponentPreviewProps) {
    const [reTriggerKey, setReTriggerKey] = useState<number>(Date.now());

    const reTrigger = () => {
        setReTriggerKey(Date.now());
    };

    return (
        <div className={cn("w-full flex items-center justify-center rounded-sm", className)}>
            {hasReTrigger && (
                <div className="absolute right-4 top-3 cursor-pointer" onClick={reTrigger}>
                    <RotateCw className="h-4 w-4 text-zinc-500" />
                </div>
            )}
            {hasReTrigger ? cloneElement(component, { key: reTriggerKey }) : component}
        </div>
    );
}
