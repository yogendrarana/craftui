import React from "react";
import { Shell } from "@/components/shell";
import DocsSidebar from "@/components/docs-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PageProps {
    children: React.ReactNode;
}

export default function DocsLayout({ children }: PageProps) {
    return (
        <Shell>
            <div className="mt-10 flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
                <aside className="w-full top-20 z-30 hidden h-[calc(100vh-3.5rem)] shrink-0 md:sticky md:block">
                    <ScrollArea className="h-full pr-6">
                        <DocsSidebar />
                    </ScrollArea>
                </aside>
                {children}
            </div>
        </Shell>
    );
}
