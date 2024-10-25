import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface AnimatedLinkProps {
    href: string;
    label: string;
    className?: string;
    isExternal?: boolean;
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({
    href,
    label,
    isExternal = false,
    className
}) => {
    return (
        <Link href={href} target={isExternal ? "_blank" : "_self"} className="cursor-pointer">
            <div
                className={cn(
                    "group relative h-16 border overflow-hidden border-gray-200 transition-all ease-in-out duration-500",
                    className
                )}
            >
                <div
                    className={cn(
                        "h-full p-4 flex items-center justify-between gap-4",
                        "group-hover:-translate-y-full transition-transform transform duration-500"
                    )}
                >
                    <span>{label}</span>
                    <ArrowRight size={20} className="-rotate-45" />
                </div>

                <div
                    className={cn(
                        "h-full p-4 flex items-center justify-between gap-4 text-white bg-black",
                        "group-hover:-translate-y-full transition-transform transform duration-500"
                    )}
                >
                    <span>{label}</span>
                    <ArrowRight size={20} className="-rotate-45" />
                </div>
            </div>
        </Link>
    );
};
