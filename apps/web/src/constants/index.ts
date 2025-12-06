import type { PackageManager } from "@/types";

export const packageManagerCommands: Record<PackageManager, string> = {
	npm: "npx shadcn@latest add",
	pnpm: "pnpm dlx shadcn@latest add",
	yarn: "yarn dlx shadcn@latest add",
	bun: "bunx shadcn@latest add",
};

export const packageInstallCommands: Record<PackageManager, string> = {
	npm: "npm install",
	pnpm: "pnpm add",
	yarn: "yarn add",
	bun: "bun add",
};
