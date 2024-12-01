"use client";

import { cn } from "@/lib/utils";

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function SkeuomorphicButton({ children, className, ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                "h-12 w-24 bg-gradient-to-b from-gray-100 to-gray-300 rounded-md",
                "text-gray-700 font-semibold",
                "border border-gray-400 shadow-md",
                "hover:from-gray-200 hover:to-gray-400",
                "active:from-gray-300 active:to-gray-500",
                "transition-all duration-300",
                className
            )}
            {...props}
        >
            {children || "Button"}
        </button>
    );
}
