"use client"

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface AsideProps {
    className?: string;
}

const asideLinks = [
    { href: "/elements/button", name: "Buttons" },
    { href: "/elements/loader", name: "Loaders" },
    { href: "/elements/input", name: "Inputs" },
    { href: "/elements/checkbox", name: "Checkoxes" },
    { href: "/elements/toggle-switch", name: "Toggle Switches" },
]

const Aside = ({ className }: AsideProps) => {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;

    return (
        <div className={cn("flex flex-col gap-4", className)}>
            {
                asideLinks.map((link, index) => (
                    <Link
                        href={link.href} key={index}
                        className={cn(isActive(link.href) && "font-bold")}
                    >{link.name}</Link>
                ))
            }
        </div>
    );
};

export default Aside;
