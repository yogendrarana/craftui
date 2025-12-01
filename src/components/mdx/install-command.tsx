"use client";

import React from "react";
import { Terminal } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/registry/lib/utils";
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
				className="px-3 py-1.5 text-xs transition-colors flex items-center gap-2 cursor-pointer"
			>
				<span className="text-muted-foreground">
					{hasCopied ? "Copied!" : installCommand}
				</span>
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
		<div className={cn("p-1 rounded-md border bg-muted", className)}>
			{/* Header */}
			<div className="p-1 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<span className="text-gray-400 text-sm">
						<Terminal size={16} />
					</span>
				</div>

				<div className="flex">
					{(
						Object.keys(packageManagerCommands) as PackageManager[]
					).map((pm) => (
						<button
							type="button"
							key={pm}
							onClick={() => setPackageManager(pm)}
							className={cn(
								"px-3 py-1 cursor-pointer text-sm transition-colors relative flex",
								pm === packageManager
									? "font-semibold"
									: "font-light",
							)}
						>
							{pm}
						</button>
					))}
				</div>
			</div>

			{/* Command Row */}
			<div className="px-3 py-2 bg-background rounded-md border font-mono overflow-x-auto text-sm flex justify-between items-center">
				{installCommand}
				<CopyButton value={installCommand} />
			</div>
		</div>
	);
}
