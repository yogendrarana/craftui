"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import CodeRenderer from "./code-renderer";
import { Previews } from "@/content/previews";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    name?: string;
    type?: string;
    code?: string;
    expandButtonTitle?: string;
    useCollapsible?: boolean;
}

export default function ComponentSource({
    expandButtonTitle = "View Code",
    className,
    name,
    type,
    code: directCode,
    useCollapsible = true
}: Props) {
    const [isOpened, setIsOpened] = React.useState(false);

    const codeToRender = React.useMemo(() => {
        // If direct code is provided, use it
        if (directCode) {
            return directCode;
        }

        // If name and type are provided, try to get code from registry
        if (name && type && Previews[type]?.[name]) {
            return Previews[type][name].rawCode;
        }

        // Return error message if no code is found
        console.error(
            directCode
                ? "No code provided."
                : `Component with name "${name}" not found in registry.`
        );

        return null;
    }, [directCode, name, type]);

    const renderContent = () => {
        if (!codeToRender) {
            return (
                <p className="text-sm text-muted-foreground">
                    Code for component{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        {name || "unknown"}
                    </code>{" "}
                    not found.
                </p>
            );
        }

        return <CodeRenderer code={codeToRender} />;
    };

    const content = renderContent();

    if (!useCollapsible) {
        return (
            <div className={cn("relative overflow-hidden rounded-sm", className)}>{content}</div>
        );
    }

    return (
        <div className={cn("relative overflow-hidden rounded-sm", className)}>
            <Collapsible open={isOpened} onOpenChange={setIsOpened}>
                <CollapsibleContent
                    forceMount
                    className={cn("overflow-hidden", !isOpened && "max-h-72")}
                >
                    {content}
                </CollapsibleContent>

                <div
                    className={cn(
                        "absolute p-2 flex items-center justify-center bg-black/40",
                        isOpened ? "inset-x-0 bottom-0 h-12 from-gray-900/30" : "inset-0"
                    )}
                >
                    <CollapsibleTrigger asChild>
                        <Button variant="secondary" className={cn("text-sm", isOpened && "mb-8")}>
                            {isOpened ? "Collapse" : expandButtonTitle}
                        </Button>
                    </CollapsibleTrigger>
                </div>
            </Collapsible>
        </div>
    );
}
