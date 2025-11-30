"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Registry } from "@/__registry__";
import { ComponentSource } from "./component-source";
import { InstallCommandTabs } from "./install-command";
import { PackageInstallTabs } from "./package-install-command";

interface PropType {
	name: string;
	className?: string;
}

export function Installation({ name, className }: PropType) {
	const [mode, setMode] = useState("cli");

	const registryItem = Registry[name];

	if (!registryItem) {
		return (
			<div className="py-10 border bord-border border-dashed rounded-sm">
				Component <code className="mx-1">{name}</code> not found (404
				NOT FOUND)
			</div>
		);
	}

	return (
		<div className={cn("w-full flex flex-col gap-4", className)}>
			{/* tabs */}
			<div className="p-1 flex items-center rounded-lg bg-muted border border-dashed w-fit">
				<button
					type="button"
					onClick={() => setMode("cli")}
					className={cn(
						"px-3 py-1.5 min-w-[90px] cursor-pointer rounded-md text-xs font-medium border",
						mode === "cli"
							? "bg-background text-foreground border-border shadow-sm"
							: "text-muted-foreground hover:text-foreground border-transparent",
					)}
				>
					CLI
				</button>
				<button
					type="button"
					onClick={() => setMode("manual")}
					className={cn(
						"px-3 py-1.5 min-w-[90px] cursor-pointer rounded-md text-xs font-medium border",
						mode === "manual"
							? "bg-background text-foreground border-border shadow-sm"
							: "text-muted-foreground hover:text-foreground border-transparent",
					)}
				>
					Manual
				</button>
			</div>

			<div>
				{mode === "cli" && (
					<InstallCommandTabs pkg={registryItem.command} />
				)}

				{mode === "manual" && (
					<div className="flex flex-col gap-4 text-sm">
						{registryItem.dependencies.length > 0 && (
							<div>
								<h3 className="font-medium mb-1">
									Install Required Packages
								</h3>
								<PackageInstallTabs
									pkg={(registryItem.dependencies || []).join(
										" ",
									)}
								/>
							</div>
						)}

						<div>
							<h3 className="font-medium mb-1">
								Install Registry Dependencies
							</h3>
							<InstallCommandTabs
								pkg={(
									registryItem.registryDependencies || []
								).join(" ")}
							/>
						</div>

						<div>
							<h3 className="font-medium mb-1">
								Copy Component Code
							</h3>

							<ComponentSource name={registryItem.name} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
