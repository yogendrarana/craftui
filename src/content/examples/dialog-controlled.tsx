"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose
} from "@/content/components/dialog";

export default function DialogControlled() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <button
                className="px-4 py-2 bg-gray-200 rounded dark:bg-zinc-800 dark:text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                Open Dialog
            </button>
            <DialogContent>
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
