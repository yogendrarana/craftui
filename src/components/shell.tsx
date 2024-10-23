import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const shellVariants = cva("px-12 grid items-center", {
    variants: {
        variant: {
            default: "container",
            sidebar: "",
            centered: "container flex h-dvh max-w-2xl flex-col justify-center",
            markdown: "container max-w-3xl py-8 md:py-10"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});

interface ShellProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof shellVariants> {
    as?: React.ElementType;
}

function Shell({ className, as: Comp = "div", variant, ...props }: ShellProps) {
    return <Comp className={cn(shellVariants({ variant }), className)} {...props} />;
}

export { Shell, shellVariants };
