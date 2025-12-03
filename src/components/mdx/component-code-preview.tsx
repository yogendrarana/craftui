"use client";

import * as React from "react";
import { EyeIcon, Code2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Registry } from "@/__registry__";
import { CodeRenderer } from "@/components/mdx/code-renderer";
import { InstallCommandDropdown } from "./install-command";
import { ComponentPreview } from "./component-preview";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string;
	category: string;
	hasReTrigger?: boolean;
}

export function ComponentCodePreview({
	name,
	category,
	className,
	hasReTrigger = false,
	...props
}: ComponentPreviewProps) {
	const [key, _] = React.useState(0);
	const [mode, setMode] = React.useState<"preview" | "code">("preview");

	// Try to get from Registry first
	const registryItem = Registry[name];

	const Code = React.useMemo(() => {
		if (registryItem?.files?.[0]?.content) {
			return registryItem.files[0].content;
		}
		return (
			<p className="text-sm text-muted-foreground">
				Code for <code className="mx-1">{name}</code> not found.
			</p>
		);
	}, [registryItem, name]);

	return (
		<div className={cn("w-full flex flex-col", className)} {...props}>
			{/* header */}
			<div className="mb-2 flex items-center justify-between rounded-md">
				<div className="flex items-center gap-2">
					<div className="p-1 flex items-center rounded-lg bg-muted border border-dashed">
						<button
							type="button"
							onClick={() => setMode("preview")}
							className={cn(
								"px-3 py-1.5 min-w-[90px] cursor-pointer rounded-md text-xs font-medium flex items-center gap-1.5 border transition-colors",
								mode === "preview"
									? "bg-background text-foreground border-border shadow-sm"
									: "text-muted-foreground hover:text-foreground border-transparent",
							)}
						>
							<EyeIcon className="h-3.5 w-3.5" />
							Preview
						</button>

						<button
							type="button"
							onClick={() => setMode("code")}
							className={cn(
								"px-3 py-1.5 min-w-[90px] cursor-pointer rounded-md text-xs font-medium flex items-center gap-1.5 border transition-colors",
								mode === "code"
									? "bg-background text-foreground border-border shadow-sm"
									: "text-muted-foreground hover:text-foreground border-transparent",
							)}
						>
							<Code2Icon className="h-3.5 w-3.5" />
							Code
						</button>
					</div>
				</div>

				<div className="flex items-center gap-2">
					<InstallCommandDropdown pkg={registryItem.command} />
				</div>
			</div>

			{/* component and code */}
			<div className="relative min-h-[400px] w-full border border-dashed rounded-md flex items-center justify-center p-1.5">
				{mode === "preview" ? (
					<div className="h-[400px] w-full flex justify-center items-center border rounded-md">
						<ComponentPreview
							name={name}
							key={key}
							hasReTrigger={hasReTrigger}
						/>
					</div>
				) : (
					<CodeRenderer
						className="h-[400px] w-full border rounded-md bg-[#fafafa] dark:bg-black"
						code={Code}
					/>
				)}
			</div>
		</div>
	);
}
