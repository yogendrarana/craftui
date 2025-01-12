"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface BrutalistButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
}

const BrutalistButton = forwardRef<HTMLButtonElement, BrutalistButtonProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "h-10 px-4 flex items-center justify-center gap-2 border-2 bg-white text-black font-mono border-black shadow-[4px_4px_0_0_#000]",
                    "hover:bg-gray-100 transition-all duration-200",
                    "active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_0_#000]",
                    "disabled:opacity-50 disabled:pointer-events-none",
                    "dark:border-gray-800 dark:bg-black dark:text-white dark:shadow-gray-800 dark:hover:bg-gray-900",
                    className
                )}
                {...props}
            >
                {children || "Button"}
            </button>
        );
    }
);
BrutalistButton.displayName = "BrutalistButton";

export default BrutalistButton;
