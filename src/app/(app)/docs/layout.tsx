import React from "react";
import DocsSidebarContainer from "@/components/docs-sidebar-container";

interface PageProps {
    children: React.ReactNode;
}

export default function DocsLayout({ children }: PageProps) {
    return (
        <div className="pt-16">
            <DocsSidebarContainer>{children}</DocsSidebarContainer>
        </div>
    );
}
