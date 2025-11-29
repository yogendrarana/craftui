import type { PackageManager } from "@/types";

export const packageManagerCommands: Record<PackageManager, string> = {
	npm: "npx shadcn@latest add",
	pnpm: "pnpm dlx shadcn@latest add",
	yarn: "yarn dlx shadcn@latest add",
	bun: "bunx shadcn@latest add",
};