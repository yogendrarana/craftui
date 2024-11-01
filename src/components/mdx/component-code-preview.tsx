"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { RotateCcw, RotateCwIcon } from "lucide-react";

import CodeRenderer from "../code-renderer";
import { Previews } from "@/content/previews";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    type: string;
    align?: "center" | "start" | "end";
    hideTabs?: boolean;
    hasReTrigger?: boolean;
}

export default function ComponentCodePreview({
    name,
    type,
    children,
    className,
    align = "center",
    hideTabs = false,
    hasReTrigger = false,
    ...props
}: ComponentPreviewProps) {
    const [key, setKey] = React.useState(0);

    const Preview = React.useMemo(() => {
        const Component = Previews[type][name]?.component;

        if (!Component) {
            return (
                <p className="text-sm text-muted-foreground">
                    Component{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        {name}
                    </code>{" "}
                    not found in registry.
                </p>
            );
        }

        return <Component />;
    }, [name, type]);

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
        <div
            className={cn("relative my-2 flex flex-col space-y-2 lg:max-w-[120ch]", className)}
            {...props}
        >
            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                {!hideTabs && (
                    <div className="flex items-center justify-between pb-3">
                        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                            <TabsTrigger
                                value="preview"
                                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                            >
                                Preview
                            </TabsTrigger>
                            <TabsTrigger
                                value="code"
                                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                            >
                                Code
                            </TabsTrigger>
                        </TabsList>
                    </div>
                )}

                <TabsContent value="preview" className="relative rounded-md" key={key}>
                    <div>
                        {hasReTrigger && (
                            <Button
                                onClick={() => setKey((prev) => prev + 1)}
                                className="absolute right-1.5 top-1.5 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
                                variant="ghost"
                            >
                                <RotateCcw aria-label="restart-btn" size={16} />
                            </Button>
                        )}
                        <React.Suspense
                            fallback={
                                <div className="flex items-center text-sm text-muted-foreground">
                                    {/* <Icons.spinner className="mr-2 size-4 animate-spin" /> */}
                                    Loading...
                                </div>
                            }
                        >
                            <div
                                className={cn(
                                    "min-h-[400px] border w-full flex items-center justify-center rounded-sm",
                                    className
                                )}
                            >
                                {hasReTrigger && (
                                    <div
                                        className="absolute right-4 top-3 cursor-pointer"
                                        onClick={() => setKey((prev) => prev + 1)}
                                    >
                                        <RotateCwIcon className="h-4 w-4 text-zinc-500" />
                                    </div>
                                )}

                                <div>{Preview}</div>
                            </div>
                        </React.Suspense>
                    </div>
                </TabsContent>

                <TabsContent value="code">
                    <CodeRenderer className="h-[400px] " code={Code} />
                </TabsContent>
            </Tabs>
        </div>
    );
}
