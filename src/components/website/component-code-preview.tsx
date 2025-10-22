"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { RotateCwIcon, EyeIcon, Code2Icon, ExternalLinkIcon, CopyIcon } from "lucide-react";
import CodeRenderer from "@/components/website/code-renderer";
import { Previews } from "@/content/previews";
import { Button } from "@/components/ui/button";

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

    const copyCode = () => {
        if (Code) {
            navigator.clipboard.writeText(Code.toString());
        }
    };

    return (
        <div className={cn("w-full flex flex-col", className)} {...props}>
            {/* === Top Toolbar === */}
            <div className="p-1.5 mb-2 flex items-center justify-between rounded-md border">
                {/* Left side: mode toggle */}
                <div className="flex items-center gap-1">
                    <Button
                        size="sm"
                        variant={mode === "preview" ? "secondary" : "outline"}
                        onClick={() => setMode("preview")}
                        className="text-xs"
                    >
                        <EyeIcon className="h-4 w-4" />
                        Preview
                    </Button>

                    <Button
                        size="sm"
                        variant={mode === "code" ? "secondary" : "outline"}
                        onClick={() => setMode("code")}
                        className="text-xs"
                    >
                        <Code2Icon className="h-4 w-4" />
                        Code
                    </Button>
                </div>

                {/* Right side: actions */}
                <div className="flex items-center gap-2">
                    {hasReTrigger && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setKey((prev) => prev + 1)}
                        >
                            <RotateCwIcon className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>

            {/* === Preview / Code Content === */}
            <div className="relative min-h-[400px] w-full border rounded-md flex items-center justify-center p-1.5">
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
                                    <p className="text-sm text-muted-foreground">
                                        Component <code>{name}</code> not found.
                                    </p>
                                );
                            return <Component key={key} />;
                        })()}
                    </React.Suspense>
                ) : (
                    <CodeRenderer className="h-[400px]" code={Code} />
                )}
            </div>
        </div>
    );
}
