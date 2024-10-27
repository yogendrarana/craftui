import React from "react";
import { Shell } from "@/components/shell";
import { Previews } from "@/content/previews";
import DocsSidebar from "@/components/docs-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ElementType {
    name: string;
    type: string;
    raw: string;
    path: string;
    component: React.LazyExoticComponent<React.FC>;
}

interface PageProps {
    children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
    const asideLinks = [];
    const elements: ElementType[] = Object.values(Previews.element);
    if (!elements) {
        return null;
    }

    return (
        <Shell>
            <div className="py-16 space-y-2">
                <h1 className="text-4xl font-bold">Components</h1>
                <p className="text-lg text-muted-foreground">
                    A collection of UI components built with React, Tailwind CSS, and Framer Motion.
                </p>
            </div>

            <div className="relative rounded-sm flex flex-col lg:flex-row items-start gap-12">
                <ScrollArea className="h-full pr-6">
                    <DocsSidebar />
                </ScrollArea>
                <div className="w-full">{children}</div>
            </div>
        </Shell>
    );
}
