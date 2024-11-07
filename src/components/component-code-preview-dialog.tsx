import React from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogClose,
    DialogContainer
} from "@/components/dialog";

import { cn } from "@/lib/utils";
import CodeRenderer from "./code-renderer";
import ComponentPreview from "./component-preview";

interface ComponentCodeDialogProps {
    component: React.ReactElement;
    label: string;
    description?: string;
    code: string;
    hasReTrigger?: boolean;
}

export default function ComponentCodePreviewDialog({
    label,
    description,
    component,
    code,
    hasReTrigger = false
}: ComponentCodeDialogProps) {
    return (
        <Dialog transition={{ type: "spring", bounce: 0.05, duration: 0.5 }}>
            <DialogTrigger style={{ borderRadius: "12px" }}>
                <ComponentPreview
                    component={component}
                    className={cn(
                        "relative cursor-pointer aspect-square border bg-white",
                        "transition-all duration-300 ease-in-out"
                    )}
                />
            </DialogTrigger>

            <DialogContainer>
                <DialogContent
                    className={cn(
                        "relative h-full w-full flex flex-col overflow-hidden bg-white",
                        "dark:border-zinc-50/10 dark:bg-zinc-900"
                    )}
                >
                    <div className="h-full w-full p-4 md:p-6 lg:p-20 flex flex-col gap-6 justify-end">
                        {/* header */}
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-baseline">
                                <p className="text-lg hidden capitalize md:flex">{label}</p>
                                {description && (
                                    <p className="hidden md:flex text-gray-500">{description}</p>
                                )}
                            </div>
                            <div className="flex items-center gap-3">
                                <DialogClose />
                            </div>
                        </div>

                        {/* component and code */}
                        <div className="flex-1 overflow-auto border rounded-lg">
                            <div className="h-full w-full flex flex-col md:flex-row gap-4 overflow-hidden">
                                <div className="w-full h-1/2 md:h-full md:w-1/2 flex items-center justify-center">
                                    <ComponentPreview
                                        component={component}
                                        hasReTrigger={hasReTrigger}
                                    />
                                </div>
                                <div className="w-full h-1/2 md:h-full md:w-1/2 p-4 border-t md:border-t-0 md:border-l overflow-hidden">
                                    <CodeRenderer code={code} />
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </DialogContainer>
        </Dialog>
    );
}
