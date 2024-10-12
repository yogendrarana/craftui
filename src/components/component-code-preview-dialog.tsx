import React from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogClose,
    DialogContainer
} from "@/components/motion/dialog";
import { cn } from "@/lib/utils";
import ComponentRenderer from "./component-renderer";
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
                <ComponentRenderer
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

                    {/* <ComponentCodePreview component={component} filePath={path} /> */}

                    {/* absolute components */}
                    <DialogClose />

                    <div className="absolute left-6 top-6 flex flex-col gap-1">
                        <span className="font-medium">{name}</span>
                        <span>{description}</span>
                    </div>
                </DialogContent>
            </DialogContainer>
        </Dialog>
    );
}
