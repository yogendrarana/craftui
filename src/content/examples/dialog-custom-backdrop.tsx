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
            <DialogTrigger>
                <button className="px-4 py-2 bg-gray-200 rounded">Open Dialog</button>
            </DialogTrigger>
            <DialogContent
                backdropClassName="bg-white/70"
                className="border shadow-[0_0_5px_rgba(0,0,0,0.1)]"
            >
                <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>This is a dialog description.</DialogDescription>
                </DialogHeader>
                <p>This is the main content of the dialog.</p>
                <div className="mt-6 flex justify-end">
                    <DialogClose>
                        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 mr-2">
                            Cancel
                        </button>
                    </DialogClose>
                    <button className="px-4 py-2 bg-zinc-800 text-white rounded">Confirm</button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
