"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface SkeuomorphicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
}

const SkeuomorphicButton = forwardRef<HTMLButtonElement, SkeuomorphicButtonProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "h-12 w-24 rounded-md font-semibold transition-all duration-300",
                    "bg-gradient-to-b from-[#f0f0f0] to-[#d0d0d0]",
                    "text-[#333] border border-[#bbb]",
                    "shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5)]",
                    "hover:from-[#f5f5f5] hover:to-[#e0e0e0]",
                    "active:from-[#e0e0e0] active:to-[#d0d0d0]",
                    "active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5)]",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "dark:from-[#3a3a3a] dark:to-[#2a2a2a]",
                    "dark:text-[#f0f0f0] dark:border-[#555]",
                    "dark:shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]",
                    "dark:hover:from-[#404040] dark:hover:to-[#303030]",
                    "dark:active:from-[#303030] dark:active:to-[#2a2a2a]",
                    "dark:active:shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]",
                    className
                )}
                {...props}
            >
                {children || "Button"}
            </button>
        );
    }
);
SkeuomorphicButton.displayName = "SkeuomorphicButton";

export default SkeuomorphicButton;
