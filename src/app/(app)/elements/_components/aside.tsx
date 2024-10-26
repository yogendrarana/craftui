"use client"

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface AsideProps {
    className?: string;
}

const Aside = ({ className }: AsideProps) => {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;

    return (
        <div className={cn("flex md:flex-col gap-4", className)}>
            <Link href="/elements/button" className={cn(isActive("/elements/button") && "font-bold")}>Buttons</Link>
            <Link href="/elements/loader" className={cn(isActive("/elements/loader") && "font-bold")}>Loaders</Link>
            <Link href="/elements/input" className={cn(isActive("/elements/input") && "font-bold")}>Inputs</Link>
            <Link href="/elements/checkbox" className={cn(isActive("/elements/checkbox") && "font-bold")}>Checkoxes</Link>
            <Link href="/elements/toggle-switch" className={cn(isActive("/elements/toggle-switch") && "font-bold")}>Toggle Switches</Link>
        </div>
    );
};

export default Aside;
