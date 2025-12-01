"use client";

import React from "react";
import { CheckIcon, CopyIcon, Terminal } from "lucide-react";
import type { PackageManager } from "@/types";
import { cn } from "@/registry/lib/utils";
import { packageInstallCommands } from "@/constants";
import { CopyButton } from "./copy-button";

function usePackageInstallCommand(pkg: string) {
	const [hasCopied, setHasCopied] = React.useState(false);
	const [packageManager, setPackageManager] =
		React.useState<PackageManager>("npm");

	const installCommand = `${packageInstallCommands[packageManager]} ${pkg}`;

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

export function PackageInstallTabs({
	pkg,
	className,
}: {
	pkg: string;
	className?: string;
}) {
	const {
		hasCopied,
		packageManager,
		setPackageManager,
		installCommand,
		onCopy,
	} = usePackageInstallCommand(pkg);

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
						Object.keys(packageInstallCommands) as PackageManager[]
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
			<div className="px-3 py-2 rounded-md border font-mono overflow-x-auto text-sm flex justify-between items-center">
				{installCommand}

				<button
					type="button"
					onClick={onCopy}
					className="text-gray-400 transition-colors cursor-pointer"
				>
					{hasCopied ? (
						<CheckIcon size={16} />
					) : (
						<CopyIcon size={16} />
					)}
				</button>
				<CopyButton value={installCommand} />
			</div>
		</div>
	);
}
