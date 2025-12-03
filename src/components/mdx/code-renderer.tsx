"use client";

import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type CodeRendererProps = {
	code: string;
	className?: string;
};

export function CodeRenderer({ code, className }: CodeRendererProps) {
	return (
		<ScrollArea
			className={cn("h-full w-full overflow-hidden relative", className)}
		>
			<div className={cn("absolute top-4 right-4 cursor-pointer z-50")}>
				<CopyButton value={code} />
			</div>
			<pre className="p-4 text-xs overflow-x-auto">{code}</pre>

			<ScrollBar orientation="horizontal" />
			<ScrollBar orientation="vertical" />
		</ScrollArea>
	);
}
