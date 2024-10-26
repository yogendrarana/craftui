"use client";

import React from "react";
import Link from "next/link";
import { cn, toTitleCase } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

// const navigations = Object.keys(groupedComponents).map((x) => {
//     return {
//       text: x,
//       href: `#${x}`,
//       id: x
//     }
//   })

export default function ComponentsSidebar({ className }: { className: string }) {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    if (!isDesktop) return null;

    return (
        <aside className={cn("w-40 pl-2 pt-0 pb-16 shrink-0 sticky top-28", className)}>
            <h1 className="text-lg">On this page</h1>
            <a href="#buttons">asdf</a>
            <div>adsf</div>
        </aside>
    );
}

export function AsideLink({
    text,
    href,
    activeId
}: {
    activeId: string;
    text: string;
    href: string;
}) {
    return (
        <ul
            className={cn(
                "focus:outline-none focus-visible:font-medium focus-visible:text-fg py-1.5 block hover:text-fg",
                href.split("#")[1] === activeId ? "text-fg font-medium" : "text-muted-fg"
            )}
        >
            <li>
                <Link href={href}>{toTitleCase(text)}</Link>
            </li>
        </ul>
    );
}
