import React from "react";
import { Metadata } from "next";
import { Components } from "@/content";
import { ChevronRight } from "lucide-react";
import { cn, toTitleCase } from "@/lib/utils";
import ComponentCodePreviewDialog from "@/components/component-code-preview-dialog";

interface ElementsPageProps {
    children: React.ReactElement;
    params: {
        slug: string[];
    };
}

export async function generateMetadata({ params }: ElementsPageProps): Promise<Metadata> {
    const element = params.slug?.join("/") || "";
    return {
        title: `${toTitleCase(element)} | Craft UI`
    };
}

export default function ElementsPage({ params }: ElementsPageProps) {
    const element = params.slug?.join("/") || "";
    const elements = Components[element].sort((a, b) => a.date.getTime() - b.date.getTime());

    return (
        <div className={cn("space-y-6")}>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <div className="truncate">elements</div>
                <ChevronRight className="size-4" />
                {params.slug.map((slug, i) => (
                    <div
                        key={slug}
                        className="truncate flex items-center space-x-1 text-sm text-muted-foreground"
                    >
                        {slug}
                        {i !== params.slug.length - 1 && <ChevronRight className="size-4" />}
                    </div>
                ))}
            </div>

            <div className={cn("grid grid-cols-2 gap-2", "md:grid-cols-4 lg:grid-cols-5")}>
                {elements?.map((comp, index) => {
                    return (
                        <ComponentCodePreviewDialog
                            component={React.createElement(comp.component)}
                            name={comp.name}
                            description={comp.description}
                            key={index}
                            path={comp.path}
                        />
                    );
                })}
            </div>
        </div>
    );
}
