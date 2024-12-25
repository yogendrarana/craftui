"use client";

import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../registry/core/tooltip";

export default function TooltipDemo() {
    return (
        <div className="flex flex-wrap gap-2">
            {(["default", "primary", "secondary", "destructive"] as const).map((variant) => (
                <Tooltip key={variant} variant={variant}>
                    <TooltipTrigger>
                        <button className="px-4 py-2 shadow bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                            {variant.charAt(0).toUpperCase() + variant.slice(1)}
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        {variant.charAt(0).toUpperCase() + variant.slice(1)} tooltip
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    );
}
