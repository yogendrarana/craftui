import { cn } from "@/lib/utils";
import React from "react";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
    className?: string;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
    ({ orientation = "horizontal", decorative = true, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                role={decorative ? "none" : "separator"}
                aria-orientation={decorative ? undefined : orientation}
                data-orientation={orientation}
                className={cn(
                    "shrink-0 bg-border",
                    orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
                    className
                )}
                {...props}
            />
        );
    }
);

Separator.displayName = "Separator";

export { Separator };
