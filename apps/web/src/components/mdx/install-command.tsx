"use client";

import React from "react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@craftdotui/lib/utils";
import { CopyButton } from "./copy-button";
import type { PackageManager } from "@/types";
import { packageManagerCommands } from "@/constants";

function useInstallCommand(pkg: string) {
	const [hasCopied, setHasCopied] = React.useState(false);
	const [packageManager, setPackageManager] =
		React.useState<PackageManager>("npm");

	const installCommand = `${packageManagerCommands[packageManager]} ${pkg}`;

	const onCopy = () => {
		navigator.clipboard.writeText(installCommand);
		setHasCopied(true);
	};

	React.useEffect(() => {
		if (hasCopied) {
			const timeout = setTimeout(() => setHasCopied(false), 2000);
			return () => clearTimeout(timeout);
		}
	}, [hasCopied]);

	return {
		hasCopied,
		packageManager,
		setPackageManager,
		installCommand,
		onCopy,
	};
}

// COMPONENT 1 — DROPDOWN VERSION

export function InstallCommandDropdown({ pkg }: { pkg: string }) {
	const {
		hasCopied,
		packageManager,
		setPackageManager,
		installCommand,
		onCopy,
	} = useInstallCommand(pkg);

	return (
		<div className="hidden md:flex items-center justify-between cursor-pointer border border-border border-dashed rounded-md overflow-hidden">
			<button
				type="button"
				onClick={onCopy}
				className="px-3 py-1.5 text-xs transition-colors flex items-center gap-2 cursor-pointer max-w-[300px]"
			>
				<Tooltip>
					<TooltipTrigger asChild>
						<span className="text-muted-foreground truncate">
							{hasCopied ? "Copied!" : installCommand}
						</span>
					</TooltipTrigger>
					<TooltipContent align="center" className="max-w-[600px]">
						<code className="text-xs">{installCommand}</code>
					</TooltipContent>
				</Tooltip>
			</button>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button
						type="button"
						className="h-full px-3 py-1.5 cursor-pointer text-xs font-medium bg-muted"
					>
						{packageManager}
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-24">
					{["npm", "pnpm", "yarn", "bun"].map((pm) => (
						<DropdownMenuItem
							key={pm}
							onClick={() =>
								setPackageManager(pm as PackageManager)
							}
							className="text-xs"
						>
							{pm}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

// COMPONENT 2 — TAB VERSION (Your custom UI)

export function InstallCommandTabs({
	pkg,
	className,
}: {
	pkg: string;
	className?: string;
}) {
	const { packageManager, setPackageManager, installCommand } =
		useInstallCommand(pkg);

	return (
		<div className={cn("rounded-md border text-sm", className)}>
			{/* Header */}
			<div className="p-3 flex items-center justify-between">
				<div className="flex gap-5">
					{(
						Object.keys(packageManagerCommands) as PackageManager[]
					).map((pm) => (
						<button
							type="button"
							key={pm}
							onClick={() => setPackageManager(pm)}
							className={cn(
								"cursor-pointer",
								pm === packageManager
									? "text-foreground font-semibold"
									: "text-muted-foreground font-light",
							)}
						>
							{pm}
						</button>
					))}
				</div>

				<CopyButton value={installCommand} />
			</div>

			{/* Command Row */}
			<div className="p-3 border-t flex justify-between items-center">
				{installCommand}
			</div>
		</div>
	);
}
