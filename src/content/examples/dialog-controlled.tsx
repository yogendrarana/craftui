"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose
} from "@/content/registry/core/dialog";

export default function DialogControlled() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <button className="px-4 py-2 bg-gray-200 rounded" onClick={() => setIsOpen(!isOpen)}>
                Open Dialog
            </button>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>This is a dialog description.</DialogDescription>
                </DialogHeader>
                <p>This is the main content of the dialog.</p>
                <div className="mt-6 flex justify-end">
                    <DialogClose className="px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300 mr-2">
                        Cancel
                    </DialogClose>
                    <button className="px-4 py-2 text-sm bg-zinc-800 text-white rounded">
                        Confirm
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
