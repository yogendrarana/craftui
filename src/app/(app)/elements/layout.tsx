import React from "react";
import { cn } from "@/lib/utils";
import Aside from "./_components/aside";
import { Shell } from "@/components/shell";
import { Previews } from "@/content/previews";
import { Separator } from "@/components/ui/separator";

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
    const elements: ElementType[] = Object.values(Previews.element);
    if (!elements) {
        return null;
    }

    return (
        <Shell>
            <div className="py-16 space-y-2">
                <h1 className="text-4xl font-bold">Elements</h1>
                <p className="text-lg text-muted-foreground">
                    A collection of basic UI elements built with React, Tailwind CSS, and Framer
                    Motion.
                </p>
            </div>

            <div className="relative rounded-sm flex flex-col lg:flex-row items-start gap-12">
                <Aside className="w-full md:w-52 sticky top-28" />
                <div className="w-full">
                    {children}
                </div>
            </div>
        </Shell>
    );
}
