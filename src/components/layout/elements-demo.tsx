import React from "react";
import { cn } from "@/lib/utils";
import { Components } from "@/content";
import ComponentCodePreviewDialog from "@/components/component-code-preview-dialog";


export default function ElementsDemo() {
    const button = Components["button"][0];
    const input = Components["input"][0];
    const checkbox = Components["checkbox"][0];
    const loader = Components["loader"][0];
    const toggle = Components["toggle"][0];

    const elements = [
        button,
        toggle,
        checkbox,
        loader,
        input
    ]

    return (
        <div className={cn("space-y-3")}>
            <div className="py-3 flex justify-between items-center">
                <h1>Elements</h1>
            </div>

            <div className={cn("grid grid-cols-2 gap-2", "md:grid-cols-4 lg:grid-cols-5")}>
                {elements?.map((e, index) => {
                    return (
                        <ComponentCodePreviewDialog
                            component={React.createElement(e.component)}
                            name={e.name}
                            description={e.description}
                            key={index}
                            path={e.path}
                        />
                    );
                })}
            </div>
        </div>
    );
}
