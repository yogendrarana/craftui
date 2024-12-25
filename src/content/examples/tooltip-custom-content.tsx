"use client";

import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../registry/core/tooltip";

export default function TooltipDemo() {
    return (
        <div className="flex gap-4">
            <Tooltip direction="right">
                <TooltipTrigger>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                        Complex Tooltip
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <div className="space-y-2">
                        <p className="font-medium">Custom Tooltip</p>
                        <p className="text-sm opacity-90">With multiple lines</p>
                        <div className="h-px bg-white/20" />
                        <p className="text-xs opacity-75">And custom styling</p>
                    </div>
                </TooltipContent>
            </Tooltip>

            <Tooltip delay={1000}>
                <TooltipTrigger>
                    <button className="px-4 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                        Delayed Tooltip
                    </button>
                </TooltipTrigger>
                <TooltipContent>Appears after 1 second</TooltipContent>
            </Tooltip>
        </div>
    );
}
