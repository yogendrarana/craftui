"use client";

import * as React from "react";
import { RotateCwIcon, EyeIcon, Code2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Previews } from "@/content/previews";
import { Button } from "@/components/ui/button";
import CodeRenderer from "@/components/website/code-renderer";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    category: string;
    hasReTrigger?: boolean;
}

export default function ComponentCodePreview({
    name,
    category,
    className,
    hasReTrigger = false,
    ...props
}: ComponentPreviewProps) {
    const [key, setKey] = React.useState(0);
    const [mode, setMode] = React.useState<"preview" | "code">("preview");

    const Code = React.useMemo(() => {
        const raw = Previews[category]?.[name]?.rawCode;
        if (!raw)
            return (
                <p className="text-sm text-muted-foreground">
                    Code for <code>{name}</code> not found.
                </p>
            );
        return raw;
    }, [name, category]);

    return (
        <div className={cn("w-full flex flex-col", className)} {...props}>
            {/* header */}
            <div className="mb-2 flex items-center justify-between rounded-md">
                <div className="p-1 flex items-center rounded-lg bg-muted border border-dashed">
                    <button
                        onClick={() => setMode("preview")}
                        className={cn(
                            "px-3 py-1.5 min-w-[90px] cursor-pointer rounded-md text-xs font-medium flex items-center gap-1.5 border transition-colors",
                            mode === "preview"
                                ? "bg-background text-foreground border-border shadow-sm"
                                : "text-muted-foreground hover:text-foreground border-transparent"
                        )}
                    >
                        <EyeIcon className="h-3.5 w-3.5" />
                        Preview
                    </button>

                    <button
                        onClick={() => setMode("code")}
                        className={cn(
                            "px-3 py-1.5 min-w-[90px] cursor-pointer rounded-md text-xs font-medium flex items-center gap-1.5 border transition-colors",
                            mode === "code"
                                ? "bg-background text-foreground border-border shadow-sm"
                                : "text-muted-foreground hover:text-foreground border-transparent"
                        )}
                    >
                        <Code2Icon className="h-3.5 w-3.5" />
                        Code
                    </button>
                </div>

                <div>
                    {hasReTrigger && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setKey((prev) => prev + 1)}
                            className={cn(
                                "h-8 w-8 border rounded-md transition-colors",
                                "flex items-center justify-center",
                                "border-transparent hover:border-border hover:bg-background"
                            )}
                        >
                            <RotateCwIcon className="h-3.5 w-3.5" />
                        </Button>
                    )}
                </div>
            </div>

            {/* component and code */}
            <div className="relative min-h-[400px] w-full border border-dashed rounded-md flex items-center justify-center p-1.5">
                {mode === "preview" ? (
                    <React.Suspense
                        fallback={
                            <div className="flex items-center justify-center text-sm text-muted-foreground">
                                Loading preview...
                            </div>
                        }
                    >
                        {(() => {
                            const Component = Previews[category]?.[name]?.component;
                            if (!Component)
                                return (
                                    <p className="h-[400px] flex justify-center items-center text-xs">
                                        Component <code>{name}</code> not found.
                                    </p>
                                );
                            return (
                                <div className="h-[400px] flex justify-center items-center">
                                    <Component key={key} />
                                </div>
                            );
                        })()}
                    </React.Suspense>
                ) : (
                    <CodeRenderer className="h-[400px]" code={Code} />
                )}
            </div>
        </div>
    );
}
