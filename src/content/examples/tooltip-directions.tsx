"use client";

import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../registry/core/tooltip";

export default function TooltipDemo() {
    return (
        <div className="grid grid-cols-2 gap-2">
            <Tooltip direction="top">
                <TooltipTrigger>
                    <button className="w-24 py-2 shadow bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                        Top
                    </button>
                </TooltipTrigger>
                <TooltipContent>Tooltip on Top</TooltipContent>
            </Tooltip>

            <Tooltip direction="right">
                <TooltipTrigger>
                    <button className="w-24 py-2 shadow bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                        Right
                    </button>
                </TooltipTrigger>
                <TooltipContent>Tooltip on Right</TooltipContent>
            </Tooltip>

            <Tooltip direction="left">
                <TooltipTrigger>
                    <button className="w-24 py-2 shadow bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                        Left
                    </button>
                </TooltipTrigger>
                <TooltipContent>Tooltip on Left</TooltipContent>
            </Tooltip>

            <Tooltip direction="bottom">
                <TooltipTrigger>
                    <button className="w-24 py-2 shadow bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                        Bottom
                    </button>
                </TooltipTrigger>
                <TooltipContent>Tooltip on Bottom</TooltipContent>
            </Tooltip>
        </div>
    );
}
