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

interface DemoDialogProps {
    component: React.ReactElement;
    name: string;
    description?: string;
    path: string;
}

export default function ComponentCodePreviewDialog({
    component,
    name,
    description,
    path
}: DemoDialogProps) {
    return (
        <Dialog transition={{ type: "spring", bounce: 0.05, duration: 0.5 }}>
            <DialogTrigger style={{ borderRadius: "12px" }}>
                <ComponentPreview
                    component={component}
                    className={cn(
                        "relative cursor-pointer aspect-square border bg-white",
                        "transition-all duration-300 ease-in-out",
                        "hover:scale-110 hover:rounded-lg hover:z-10 hover:border-[3px]"
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
                        <div className="flex justify-between">
                            <div>
                                <p className="font-medium">{name}</p>
                                <p className="text-gray-500">{description}</p>
                            </div>
                            <DialogClose />
                        </div>
                        <div className="flex-1 overflow-auto border rounded-lg">
                            <ComponentCodePreview component={component} filePath={path} />
                        </div>
                    </div>
                </DialogContent>
            </DialogContainer>
        </Dialog>
    );
}
