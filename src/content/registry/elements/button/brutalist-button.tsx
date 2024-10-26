"use client";

import { cn } from "@/lib/utils";

interface BrutalistButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function BrutalistButton({ children, className, onClick }: BrutalistButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "h-12 w-28 px-4 flex items-center border-2 rounded-sm border-black shadow-[4px_4px_0_0_#000] transition-all duration-200",
                "active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_0_#000]",
                className
            )}
        >
            {children || "Brutalist"}
        </button>
    );
}
