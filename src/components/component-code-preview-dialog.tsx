import React from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogClose,
    DialogContainer
} from "@/components/motion/dialog";
import { cn } from "@/lib/utils";
import ComponentPreview from "./component-preview";
import ComponentCodePreview from "./component-code-preview";
import CopyCodeBtn from "./copy-code-btn";
import { extractCodeFromFilePath } from "@/lib/extract-code";

interface DemoDialogProps {
    component: React.ReactElement;
    name: string;
    description?: string;
    path: string;
    hasRetrigger?: boolean;
}

export default function ComponentCodePreviewDialog({
    name,
    description,
    component,
    path,
    hasRetrigger = false
}: DemoDialogProps) {
    const code = extractCodeFromFilePath(`${path}.tsx`);

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
                                <p className="text-lg hidden md:flex">{name}</p>
                                {description && (
                                    <p className="hidden md:flex text-gray-500">{description}</p>
                                )}
                            </div>
                            <div className="flex items-center gap-3">
                                <CopyCodeBtn code={code} />
                                <DialogClose />
                            </div>
                        </div>

                        {/* component and code */}
                        <div className="flex-1 overflow-auto border rounded-lg">
                            <ComponentCodePreview
                                code={code}
                                component={component}
                                hasReTrigger={hasRetrigger}
                            />
                        </div>
                    </div>
                </DialogContent>
            </DialogContainer>
        </Dialog>
    );
}
