"use client";

import { Previews } from "@/content/previews";
import { cn } from "@/lib/utils";
import { RotateCw } from "lucide-react";
import React, { cloneElement, useState } from "react";

type ComponentPreviewProps = {
    component?: React.ReactElement;
    name?: string;
    type?: string;
    hasReTrigger?: boolean;
    className?: string;
};

export default function ComponentPreview({
    component,
    hasReTrigger = false,
    className,
    name,
    type
}: ComponentPreviewProps) {
    const [reTriggerKey, setReTriggerKey] = useState<number>(Date.now());

    const reTrigger = () => {
        setReTriggerKey(Date.now());
    };

    const renderContent = () => {
        // If a direct component is provided, use it
        if (component) {
            return hasReTrigger ? cloneElement(component, { key: reTriggerKey }) : component;
        }

        // If name and type are provided, try to get component from registry
        if (name && type && Previews[type]?.[name]) {
            const RegistryComponent = Previews[type][name].component;
            return hasReTrigger ? <RegistryComponent key={reTriggerKey} /> : <RegistryComponent />;
        }

        // Fallback for when component is not found in registry
        return (
            <p className="text-sm text-muted-foreground">
                Component{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    {name}
                </code>{" "}
                not found in registry.
            </p>
        );
    };

    return (
        <div className={cn("min-h-[400px] w-full border flex items-center justify-center rounded-sm", className)}>
            {hasReTrigger && (
                <div className="absolute right-4 top-3 cursor-pointer" onClick={reTrigger}>
                    <RotateCw className="h-4 w-4 text-zinc-500" />
                </div>
            )}
            {renderContent()}
        </div>
    );
}
