"use client";

import * as React from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { cn } from "@/lib/utils";
import { Registry } from "@/__registry__";
import { CodeRenderer } from "@/components/mdx/code-renderer";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	name?: string;
	category?: string;
	code?: string;
	expandButtonTitle?: string;
	useCollapsible?: boolean;
}

export function ComponentSource({
	expandButtonTitle = "Expand",
	className,
	name,
	code: directCode,
	useCollapsible = true,
}: Props) {
	const [isOpened, setIsOpened] = React.useState(false);

	const codeToRender = React.useMemo(() => {
		// If direct code is provided, use it
		if (directCode) {
			return directCode;
		}

		// If name is provided, get the code from registry
		if (name && Registry[name]) {
			return Registry[name].files[0].content;
		}

		// Return error message if no code is found
		console.error(
			directCode
				? "No code provided."
				: `Component with name "${name}" not found in registry.`,
		);

		return null;
	}, [directCode, name]);

	const renderContent = () => {
		if (!codeToRender) {
			return (
				<p className="py-10 text-sm text-muted-foreground">
					Code for component{" "}
					<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
						{name || "unknown"}
					</code>{" "}
					not found.
				</p>
			);
		}

		return <CodeRenderer code={codeToRender} />;
	};

	if (!useCollapsible) {
		return (
			<div
				className={cn("relative overflow-hidden rounded-sm", className)}
			>
				{renderContent()}
			</div>
		);
	}

	return (
		<div
			className={cn(
				"h-full w-full relative overflow-hidden rounded-md border bg-[#fafafa] dark:bg-black",
				className,
			)}
		>
			<Collapsible open={isOpened} onOpenChange={setIsOpened}>
				<CollapsibleContent
					forceMount
					className={cn("overflow-hidden", !isOpened && "max-h-72")}
				>
					{renderContent()}
				</CollapsibleContent>

				<div
					className={cn(
						"absolute inset-x-0 bottom-0",
						"bg-accent/60 border-t flex items-center justify-center",
					)}
				>
					<CollapsibleTrigger className="w-full py-3 cursor-pointer">
						{isOpened ? "Collapse" : expandButtonTitle}
					</CollapsibleTrigger>
				</div>
			</Collapsible>
		</div>
	);
}
