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
} from "../registry/core/drawer";

export default function DrawerDemo() {
    return (
        <Drawer>
            <DrawerTrigger>
                <button className="px-4 py-2 bg-gray-200 rounded">Open Drawer</button>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col h-full">
                <DrawerHeader className="flex justify-between items-center">
                    <div>
                        <DrawerTitle>Title</DrawerTitle>
                        <DrawerDescription>This is the description of the drawer</DrawerDescription>
                    </div>
                    <DrawerClose className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" />
                </DrawerHeader>

                {/* your content */}
                <div className="py-4 flex-grow overflow-auto">
                    <p>The content of the drawer goes here.</p>
                </div>

                <DrawerFooter className="flex gap-2 justify-end">
                    <button className="px-5 py-1.5 text-sm border rounded-sm shadow-sm hover:bg-accent">
                        Close
                    </button>
                    <button className="px-5 py-1.5 text-sm bg-black text-white border rounded-sm">
                        Save
                    </button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
