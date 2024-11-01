"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import CodeRenderer from "../code-renderer";
import { Previews } from "@/content/previews";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    type: string;
    expandButtonTitle?: string;
}

export default function ComponentSource({
    expandButtonTitle = "View Code",
    className,
    name,
    type
}: CodeBlockProps) {
    const [isOpened, setIsOpened] = React.useState(false);

    const Code = React.useMemo(() => {
        const CodeOfComponent = Previews[type][name]?.rawCode;

        if (!CodeOfComponent) {
            console.error(`Component with name "${name}" not found in registry.`);
            return (
                <p className="text-sm text-muted-foreground">
                    Code for component{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        {name}
                    </code>{" "}
                    not found in registry.
                </p>
            );
        }

        return CodeOfComponent;
    }, [name, type]);

    return (
        <div className={cn("relative overflow-hidden rounded-sm", className)}>

        <Collapsible open={isOpened} onOpenChange={setIsOpened}>
            <div className={cn("relative overflow-hidden rounded-sm", className)}>
                <CollapsibleContent
                    forceMount
                    className={cn("overflow-hidden", !isOpened && "max-h-72")}
                >
                    <CodeRenderer code={Code} />
                </CollapsibleContent>

                <div
                    className={cn(
                        "absolute p-2 flex items-center justify-center bg-black/40",
                        isOpened ? "inset-x-0 bottom-0 h-12 from-gray-900/30" : "inset-0 "
                    )}
                >
                    <CollapsibleTrigger asChild>
                        <Button variant="secondary" className={cn("text-sm", isOpened && "mb-8")}>
                            {isOpened ? "Collapse" : expandButtonTitle}
                        </Button>
                    </CollapsibleTrigger>
                </div>
            </div>
        </Collapsible>
    </div>
    );
}
