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
            <div className="pt-12 flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
                <aside className="sticky top-24 hidden h-[calc(100vh-6rem)] md:block">
                    <ScrollArea className="h-full">
                        <DocsSidebar />
                    </ScrollArea>
                </aside>

                {/* children */}
                <main className="w-full">{children}</main>
            </div>
        </Shell>
    );
}
