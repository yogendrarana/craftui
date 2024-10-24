import React from "react";
import { cn } from "@/lib/utils";
import { Components } from "@/content";
import ComponentCodePreviewDialog from "@/components/component-code-preview-dialog";

export default function ElementsDemo() {
    const input = Components["input"][0];
    const button = Components["button"][0];
    const loader = Components["loader"][0];
    const toggle = Components["toggle"][4];
    const checkbox = Components["checkbox"][0];

    const elements = [button, toggle, checkbox, loader, input];

    return (
        <div className={cn("space-y-3")}>
            <div className={cn("grid grid-cols-1 gap-2", "md:grid-cols-4 lg:grid-cols-5")}>
                {elements?.map((e, index) => {
                    return (
                        <ComponentCodePreviewDialog
                            key={index}
                            name={e.name}
                            description={e.description}
                            component={React.createElement(e.component)}
                            path={e.path}
                        />
                    );
                })}
            </div>
        </div>
    );
}
