import React from "react";
import { cn } from "@/lib/utils";
import { Shell } from "@/components/website/shell";
import DocsSidebar from "@/components/website/docs-sidebar";
import { ScrollArea } from "@/components/website/ui/scroll-area";

interface PageProps {
    children: React.ReactNode;
}

export default function DocsLayout({ children }: PageProps) {
    return (
        <Shell>
            <div
                className={cn(
                    "relative mt-10 flex-1 items-start overflow-hidden md:overflow-visible",
                    "md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)]"
                )}
            >
                <aside
                    className={cn(
                        "w-full hidden h-[calc(100vh-3.5rem)] shrink-0",
                        "md:top-20 md:sticky md:z-30 md:block"
                    )}
                >
                    <ScrollArea className="h-full">
                        <DocsSidebar />
                    </ScrollArea>
                </aside>

                {/* main content */}
                <main>{children}</main>
            </div>
        </Shell>
    );
}
