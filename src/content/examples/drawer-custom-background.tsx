"use client";

import React from "react";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
    DrawerClose,
    DrawerDescription
} from "../components/drawer";

export default function DrawerDemo() {
    return (
        <Drawer>
            <DrawerTrigger>Open Drawer</DrawerTrigger>

            <DrawerContent
                className="flex flex-col h-full border shadow-[0_0_5px_rgba(0,0,0,0.1)]"
                backdropClassName="bg-white/20"
            >
                <DrawerHeader className="flex justify-between items-center">
                    <div>
                        <DrawerTitle>Title</DrawerTitle>
                        <DrawerDescription>This is the description of the drawer</DrawerDescription>
                    </div>
                    <DrawerClose className="p-2 rounded-xl" />{" "}
                </DrawerHeader>

                {/* your content */}
                <div className="py-4 flex-grow overflow-auto">
                    <p>The content of the drawer goes here.</p>
                </div>

                <DrawerFooter className="flex gap-2 justify-end">
                    <DrawerClose className="px-5 py-0.5 border">Close</DrawerClose>
                    <button className="px-5 py-1.5 text-sm bg-black dark:bg-white text-white dark:text-black border rounded-sm">
                        Save
                    </button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
