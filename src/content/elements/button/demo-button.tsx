import React from "react";
import { cn } from "@/lib/utils";

const DemoButton = () => {
    return (
        <button
            className={cn(
                "px-6 py-2 bg-black text-white font-bold rounded-full",
                "transition duration-500",
                "hover:shadow-[0_0_20px_#6fc5ff50] active:transition-[all_0.25s] active:shadow-none active:scale-95"
            )}
        >
            Button
        </button>
    );
};

export default DemoButton;
