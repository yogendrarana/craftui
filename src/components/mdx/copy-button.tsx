"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/components/ui/button";
import { CheckIcon, Copy } from "lucide-react";

interface CopyButtonProps extends ButtonProps {
	value: string;
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
	const [hasCopied, setHasCopied] = React.useState(false);

	React.useEffect(() => {
		if (hasCopied) {
			const timeoutId = setTimeout(() => {
				setHasCopied(false);
			}, 2000);

			return () => clearTimeout(timeoutId);
		}
	}, [hasCopied]);

	return (
		<button
			size="icon"
			className={cn(
				"cursor-pointer",
				className,
			)}
			onClick={() => {
				navigator.clipboard.writeText(value);
				setHasCopied(true);
			}}
			{...props}
		>
			<span className="sr-only">Copy</span>
			{hasCopied ? (
				<CheckIcon className="h-3 w-3" />
			) : (
				<Copy className="h-3 w-3" />
			)}
		</button>
	);
}
