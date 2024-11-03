"use client";

import React from "react";
import { Drawer } from "vaul";
import { Menu, X } from "lucide-react";
import { docsConfig } from "@/config/docs";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function DocsMobilSidebar() {
    const sidebarNav = docsConfig.sidebarNav;
    const [open, setOpen] = React.useState(false);

    return (
        <Drawer.Root open={open} onOpenChange={setOpen} direction="right">
            <Drawer.Trigger
                className={cn(
                    "bg-whites transition-all hover:bg-[#FAFAFA]",
                    "dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white"
                )}
            >
                <Menu className="h-6 w-6" />
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-white/90" />
                <Drawer.Content
                    className="w-[350px] right-2 top-2 bottom-2 fixed z-50 outline-none flex"
                    // The gap between the edge of the screen and the drawer is 8px in this case.
                    style={{ "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties}
                >
                    <div className="h-full w-full p-4 bg-zinc-50 rounded-md border overflow-hidden shadow-sm">
                        <Drawer.Title className="mb-4 text-xl font-bold flex justify-between items-center">
                            Craft UI
                            <Button
                                size="icon"
                                variant="outline"
                                onClick={() => setOpen(false)}
                                className="h-8 w-8 grid place-items-center rounded-md"
                            >
                                <X />
                            </Button>
                        </Drawer.Title>

                        <div>
                            {sidebarNav.map((item, index) => (
                                <div key={index} className="pb-4">
                                    <h4 className="mb-1 py-1 text-sm font-semibold">
                                        {item.title}
                                    </h4>

                                    <div className="flex flex-col gap-2">
                                        {item.items &&
                                            item.items.map((subItem, subIndex) =>
                                                subItem.href ? (
                                                    <Link
                                                        key={subIndex}
                                                        href={subItem.href}
                                                        onClick={() => setOpen(false)}
                                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                                    >
                                                        {subItem.title}
                                                    </Link>
                                                ) : null
                                            )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}
