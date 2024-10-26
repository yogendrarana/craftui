import React from "react";
import { cn } from "@/lib/utils";

export default function DemoInput() {
    return (
        <div>
            <input
                type="text"
                name="text"
                className={cn(
                    "h-9 w-56 px-3 border border-black text-sm uppercase tracking-widest",
                    "focus:outline-none focus:border-[0.5px] focus:shadow-[-5px_-5px_0px_0px_rgba(0,0,0,1)] placeholder:text-gray-500",
                    "transition-all duration-100 ease-linear"
                )}
                placeholder="search..."
            />
        </div>
    );
}
