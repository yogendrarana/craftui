"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function CustomCheckbox() {
    const [isChecked, setIsChecked] = useState(true);

    return (
        <label className="flex items-center">
            <input
                type="checkbox"
                className={cn(
                    "relative w-7 h-7 outline-none appearance-none border-2 rounded-md transition-all cursor-pointer duration-500",
                    "before:content-[''] before:absolute before:w-5 before:h-5 before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-sm before:bg-gray-400 before:transition-[transform] before:duration-300",
                    isChecked && "before:scale-1",
                    !isChecked && "before:scale-0"
                )}
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            {/* <span className="ml-3">Option A</span> */}
        </label>
    );
}
