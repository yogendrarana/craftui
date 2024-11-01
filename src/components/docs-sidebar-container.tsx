import React from "react";
import DocsSidebar from "./docs-sidebar";
import { ScrollArea } from "./ui/scroll-area";

interface PropType {
    children: React.ReactNode;
}

const DocsSidebarContainer = ({ children }: PropType) => {
    return (
        <div className="flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
            <aside className="sticky top-24 hidden h-[calc(100vh-6rem)] md:block">
                <ScrollArea className="h-full">
                    <DocsSidebar />
                </ScrollArea>
            </aside>

            {/* children */}
            <main>{children}</main>
        </div>
    );
};

export default DocsSidebarContainer;
