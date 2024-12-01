import React from "react";
import { cn } from "@/lib/utils";

interface PropType {
    children?: React.ReactNode;
    className?: string;
}

export default function NeumorphicButton({ children, className = "" }: PropType) {
    return (
        <button
            className={cn(
                "h-12 w-24 rounded-md border transition-all duration-300 cursor-pointer bg-[#fafafa] shadow-[4px_4px_8px_#cbcbcb,_-4px_-4px_8px_#ffffff]",
                "hover:shadow-[inset_2px_2px_4px_#c9c9c9,_inset_-2px_-2px_4px_#ffffff]",
                className
            )}
        >
            {children || "Button"}
        </button>
    );
}

