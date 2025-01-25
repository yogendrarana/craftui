"use client";

import React from "react";
import { Bell, Camera, Info, Settings } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../registry/components/tooltip";

export default function TooltipDemo() {
    return (
        <div className="flex gap-2">
            {(
                [
                    { Icon: Camera, text: "Take photo" },
                    { Icon: Bell, text: "Notifications" },
                    { Icon: Settings, text: "Settings" },
                    { Icon: Info, text: "Important info" }
                ] as const
            ).map(({ Icon, text }, index) => (
                <Tooltip key={index}>
                    <TooltipTrigger asChild>
                        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full cursor-pointer">
                            <Icon className="w-4 h-4" />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>{text}</TooltipContent>
                </Tooltip>
            ))}
        </div>
    );
}
