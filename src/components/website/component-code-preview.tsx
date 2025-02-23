"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { RotateCwIcon } from "lucide-react";

import CodeRenderer from "@/components/website/code-renderer";
import { Previews } from "@/content/previews";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * This component is used to preview a component and code from the registry.
 * TODO: Add support for reading code from path if provided
 */

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    category: string;
    align?: "center" | "start" | "end";
    hideTabs?: boolean;
    hasReTrigger?: boolean;
}

export default function ComponentCodePreview({
    name,
    category,
    children,
    className,
    align = "center",
    hideTabs = false,
    hasReTrigger = false,
    ...props
}: ComponentPreviewProps) {
    const [key, setKey] = React.useState(0);

    const Preview = React.useMemo(() => {
        const Component = Previews[category][name]?.component;

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
    }, [name, category]);

    const Code = React.useMemo(() => {
        const CodeOfComponent = Previews[category][name]?.rawCode;

        if (!CodeOfComponent) {
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
    }, [name, category]);

    return (
        <div className={cn("w-full relativeflex flex-col", className)} {...props}>
            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                {!hideTabs && (
                    <div className="flex items-center justify-between pb-3">
                        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                            <TabsTrigger
                                value="preview"
                                className="relative h-10 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                            >
                                Preview
                            </TabsTrigger>
                            <TabsTrigger
                                value="code"
                                className="relative h-10 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                            >
                                Code
                            </TabsTrigger>
                        </TabsList>
                    </div>
                )}

                <TabsContent value="preview" className="relative rounded-md" key={key}>
                    <div>
                        {hasReTrigger && (
                            <div
                                className="absolute right-6 top-6 cursor-pointer"
                                onClick={() => setKey((prev) => prev + 1)}
                            >
                                <RotateCwIcon className="h-4 w-4 text-zinc-500" />
                            </div>
                        )}
                        <React.Suspense
                            fallback={
                                <div className="min-h-[400px] flex items-center justify-center text-sm text-muted-foreground">
                                    {/* <Icons.spinner className="mr-2 size-4 animate-spin" /> */}
                                    Loading...
                                </div>
                            }
                        >
                            <div
                                className={cn(
                                    "min-h-[400px] p-2 w-full flex items-center justify-center border rounded-md",
                                    className
                                )}
                            >
                                {Preview}
                            </div>
                        </React.Suspense>
                    </div>
                </TabsContent>

                <TabsContent value="code" className="w-full">
                    <CodeRenderer className="h-[400px]" code={Code} />
                </TabsContent>
            </Tabs>
        </div>
    );
}
