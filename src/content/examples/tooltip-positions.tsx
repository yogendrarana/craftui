import React from "react";
import { Button } from "../registry/components/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "../registry/components/tooltip";

const TooltipDemo = () => {
    return (
        <div className="grid grid-cols-2 gap-2">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Top</Button>
                </TooltipTrigger>
                <TooltipContent>Basic Tooltip</TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Right</Button>
                </TooltipTrigger>
                <TooltipContent position="right">Basic Tooltip</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Left</Button>
                </TooltipTrigger>
                <TooltipContent position="left">Basic Tooltip</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                </TooltipTrigger>
                <TooltipContent position="bottom">Basic Tooltip</TooltipContent>
            </Tooltip>
        </div>
    );
};

export default TooltipDemo;
