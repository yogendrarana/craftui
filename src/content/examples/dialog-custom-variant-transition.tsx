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
} from "@/content/components/dialog";
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
            <DialogTrigger asChild>Open Dialog</DialogTrigger>
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
