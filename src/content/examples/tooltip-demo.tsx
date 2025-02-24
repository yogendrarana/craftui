"use client";

import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../components/tooltip";

export default function TooltipDemo() {
    return (
        <Tooltip>
            <TooltipTrigger>Tooltip</TooltipTrigger>
            <TooltipContent>Basic Tooltip</TooltipContent>
        </Tooltip>
    );
}
