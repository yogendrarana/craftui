"use client";

import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../registry/core/tooltip";

export default function TooltipDemo() {
    return (
        <Tooltip>
            <TooltipTrigger>
                <button className="px-4 py-2 shadow bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                    Hover
                </button>
            </TooltipTrigger>
            <TooltipContent>Basic Tooltip</TooltipContent>
        </Tooltip>
    );
}
