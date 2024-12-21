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
import { Variants, Transition } from "framer-motion";

const customVariants: Variants = {
    initial: { opacity: 0, y: "100%" },
    animate: { opacity: 1, y: "0%" },
    exit: { opacity: 0, transition: { duration: 0.3 } }
};

const customTransition: Transition = {
    type: "spring",
    damping: 30,
    stiffness: 300
};

export default function DialogCustomVariantTransion() {
    return (
        <Dialog variants={customVariants} transition={customTransition}>
            <DialogTrigger>
                <button className="px-4 py-2 bg-gray-200 rounded">Open Dialog</button>
            </DialogTrigger>
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
