import React from "react";
import { cn } from "@/lib/utils";
import { Shell } from "@/components/shell";
import { Previews } from "@/content/previews";
import ComponentCodePreviewDialog from "@/components/component-code-preview-dialog";
import NoElements from "../_components/no-elements";

interface ElementType {
    name: string;
    type: string;
    raw: string;
    path: string;
    component: React.LazyExoticComponent<React.FC>;
}

export default function Page({ params }: { params: { elementType: string } }) {
    const elements: ElementType[] = Object.values(Previews.element) as ElementType[];
    const filteredElements = elements.filter((elt) => elt.type === params.elementType);

    if (!elements || elements.length === 0) {
        return <NoElements />;
    }

    return (
        <Shell className="px-0">
            <div className={cn("grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4")}>
                {filteredElements?.map((comp, index) => {
                    return (
                        <ComponentCodePreviewDialog
                            component={React.createElement(comp.component)}
                            name={comp.name}
                            key={index}
                            code={comp.raw}
                        />
                    );
                })}
            </div>
        </Shell>
    );
}
