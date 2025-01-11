import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface AnimatedLinkProps {
    href: string;
    className?: string;
    isExternal?: boolean;
    children: string;
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({
    href,
    isExternal = false,
    className,
    children
}) => {
    return (
        <Link href={href} target={isExternal ? "_blank" : "_self"} className="cursor-pointer">
            <div
                className={cn(
                    "group relative h-16 overflow-hidden border transition-all ease-in-out duration-500",
                    "border-border",
                    className
                )}
            >
                <div
                    className={cn(
                        "h-full p-4 flex items-center justify-between gap-4",
                        "group-hover:-translate-y-full transition-transform transform duration-500",
                        "bg-background text-foreground"
                    )}
                >
                    <span>{children}</span>
                    <ArrowRight size={20} className="-rotate-45" />
                </div>

                <div
                    className={cn(
                        "h-full p-4 flex items-center justify-between gap-4",
                        "group-hover:-translate-y-full transition-transform transform duration-500",
                        "bg-foreground text-background"
                    )}
                >
                    <span>{children}</span>
                    <ArrowRight size={20} className="-rotate-45" />
                </div>
            </div>
        </Link>
    );
};
