import React from "react";
import { cn } from "@/lib/utils";
import { Shell } from "@/components/shell";
import { Previews } from "@/content/previews";
import { ComponentTypeEnum } from "@/constants/enum";
import ComponentCodePreviewDialog from "@/components/component-code-preview-dialog";

interface ElementType {
    label: string;
    type: string;
    rawCode: string;
    path: string;
    component: React.LazyExoticComponent<React.FC>;
}

export default function Page({ params }: { params: { elementType: string } }) {
    const elements: ElementType[] = Object.values(Previews[ComponentTypeEnum.ELEMENT]);
    const filteredElements = elements.filter((elt) => elt.type === params.elementType);

    if (!elements || elements.length === 0) {
        // TODO: Return a proper error comopnent
        return <div>No element found</div>;
    }

    return (
        <Shell className="px-0 w-full">
            <div className={cn("grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4")}>
                {[...filteredElements]?.map((comp, index) => {
                    return (
                        <ComponentCodePreviewDialog
                            component={React.createElement(comp.component)}
                            label={comp.label}
                            key={index}
                            code={comp.rawCode}
                        />
                    );
                })}
            </div>
        </Shell>
    );
}
