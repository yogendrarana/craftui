"use client";

import { cn } from "@/lib/utils";
import { Registry } from "@/__registry__";
import { RotateCw } from "lucide-react";
import React, { useState } from "react";

type ComponentPreviewProps = {
	component?: React.ReactElement;
	name?: string;
	hasReTrigger?: boolean;
	className?: string;
};

export function ComponentPreview({
	component,
	hasReTrigger = false,
	className,
	name,
}: ComponentPreviewProps) {
	const [reTriggerKey, setReTriggerKey] = useState<number>(Date.now());

	const reTrigger = () => {
		setReTriggerKey(Date.now());
	};

	const renderContent = () => {
		// If a direct component is provided, use it
		if (component) {
			return hasReTrigger
				? React.cloneElement(component, { key: reTriggerKey })
				: component;
		}

		// If name and category are provided, try to get component from registry or previews
		if (name) {
			// Try Registry first
			const registryItem = Registry[name];

			if (registryItem?.component) {
				const Component = registryItem.component;
				return (
					<React.Suspense
						fallback={
							<div className="flex items-center justify-center text-sm text-muted-foreground">
								Loading...
							</div>
						}
					>
						{hasReTrigger ? (
							<Component key={reTriggerKey} />
						) : (
							<Component />
						)}
					</React.Suspense>
				);
			}

			// Fallback to Previews for examples
			if (registryItem?.component) {
				const Component = registryItem.component;
				return hasReTrigger ? (
					<Component key={reTriggerKey} />
				) : (
					<Component />
				);
			}
		}

		// Fallback for when component is not found
		return (
			<p className="text-sm text-muted-foreground">
				Component{" "}
				<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
					{name}
				</code>{" "}
				not found in registry.
			</p>
		);
	};

	return (
		<div
			className={cn(
				"relative w-full flex items-center justify-center rounded-sm h-full bg-[#fafafa] dark:bg-zinc-800",
				className,
			)}
		>
			{hasReTrigger && (
				<button
					type="button"
					className="absolute right-4 top-3 cursor-pointer"
					onClick={reTrigger}
				>
					<RotateCw className="h-4 w-4 text-zinc-500" />
				</button>
			)}
			{renderContent()}
		</div>
	);
}
