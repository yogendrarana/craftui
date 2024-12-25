"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-white hover:bg-primary-dark",
                danger: "bg-red-500 text-white hover:bg-red-600",
                outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
                secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
                link: "text-primary underline"
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { className, variant = "default", size = "default", asChild = false, children, ...props },
        ref
    ) => {
        const Component = asChild ? "span" : "button";

        return (
            <Component
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                disabled={props.disabled}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };
