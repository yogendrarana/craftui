"use client";

import React from "react";
import { Bell, Camera, Info, Settings } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../registry/core/tooltip";

export default function TooltipDemo() {
    return (
        <div className="flex gap-6">
            {(
                [
                    { Icon: Camera, text: "Take photo", variant: "default" },
                    { Icon: Bell, text: "Notifications", variant: "primary" },
                    { Icon: Settings, text: "Settings", variant: "secondary" },
                    { Icon: Info, text: "Important info", variant: "destructive" }
                ] as const
            ).map(({ Icon, text, variant }, index) => (
                <Tooltip key={index} variant={variant}>
                    <TooltipTrigger>
                        <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                            <Icon className="w-5 h-5 text-gray-600" />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>{text}</TooltipContent>
                </Tooltip>
            ))}
        </div>
    );
}
