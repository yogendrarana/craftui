"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/components/ui/button";
import { CheckIcon, ClipboardIcon } from "lucide-react";

interface CopyButtonProps extends ButtonProps {
	value: string;
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
	const [hasCopied, setHasCopied] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	}, []);

	return (
		<button
			size="icon"
			className={cn(
				"relative z-10 p-2 bg-black rounded-full hover:bg-zinc-700",
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
				<CheckIcon className="h-3 w-3 text-zinc-200" />
			) : (
				<ClipboardIcon className="h-3 w-3 text-zinc-200" />
			)}
		</button>
	);
}
