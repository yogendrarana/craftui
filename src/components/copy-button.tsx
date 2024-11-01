"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";

interface CopyButtonProps extends ButtonProps {
    value: string;
}

export function CopyButton({ value, className, variant = "ghost", ...props }: CopyButtonProps) {
    const [hasCopied, setHasCopied] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }, [hasCopied]);

    return (
        <Button
            size="icon"
            variant={variant}
            className={cn(
                "relative z-10 size-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:size-3",
                className
            )}
            onClick={() => {
                navigator.clipboard.writeText(value);
                setHasCopied(true);
            }}
            {...props}
        >
            <span className="sr-only">Copy</span>
            {hasCopied ? (
                <CheckIcon className="h-4 w-4 text-zinc-50" />
            ) : (
                <ClipboardIcon className="h-4 w-4 text-zinc-50" />
            )}
        </Button>
    );
}
