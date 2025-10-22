import React from "react";
import { cn } from "@/lib/utils";
import DocsSidebar from "@/components/website/docs-sidebar";
import Footer from "@/components/website/layout/footer";
import Header from "@/components/website/layout/header";
import { Scrollbar } from "@radix-ui/react-scroll-area";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import MaxWidthContainer from "@/components/website/max-width-container";

interface PageProps {
    children: React.ReactNode;
}

export default function DocsLayout({ children }: PageProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <div className="flex-1 border-b border-dashed">
                <MaxWidthContainer className="sm:border-l sm:border-r border-dashed px-0">
                    <div
                        className={cn(
                            "relative flex-1 items-start overflow-hidden md:overflow-visible",
                            "md:grid md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)]"
                        )}
                    >
                        <aside className="p-4 hidden md:block md:sticky md:top-20 md:z-30 border-r border-dashed h-[calc(100vh-5rem)]">
                            <ScrollArea hideScrollbar scrollHideDelay={1} type="hover" className="h-full">
                                <DocsSidebar />
                                <Scrollbar />
                            </ScrollArea>
                        </aside>

                        {/* main content */}
                        <main className="p-4">{children}</main>
                    </div>
                </MaxWidthContainer>
            </div>

            <Footer />
        </div>
    );
}
