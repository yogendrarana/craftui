"use client";

import React from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose
} from "@/content/registry/core/dialog";

export default function DialogBasic() {
    return (
        <Dialog>
            <DialogTrigger asChild>Open Dialog</DialogTrigger>
            <DialogContent
                backdropClassName="bg-white/70 dark:bg-black/70"
                className="border shadow-[0_0_5px_rgba(0,0,0,0.1)]"
            >
                <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>This is a dialog description.</DialogDescription>
                    <DialogClose className="absolute top-4 right-4 p-1 rounded-md" />
                </DialogHeader>
                <p>This is the main content of the dialog.</p>
                <div className="mt-6 flex justify-end gap-2">
                    <DialogClose className="px-5 py-0.5">Cancel</DialogClose>
                    <button className="px-5 py-1.5 text-sm bg-black dark:bg-white text-white dark:text-black border rounded-sm">
                        Confirm
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
