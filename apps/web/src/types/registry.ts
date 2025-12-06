export interface NavItem {
	title: string;
	href: string;
	disabled?: boolean;
	external?: boolean;
	label?: string;
	paid?: boolean;
	event?: string;
	new?: boolean;
	updated?: boolean;
	items?: NavItem[];
}

export type RegistryItemType =
	| "registry:lib"
	| "registry:block"
	| "registry:component"
	| "registry:ui"
	| "registry:hook"
	| "registry:theme"
	| "registry:page"
	| "registry:file"
	| "registry:style"
	| "registry:item";

export interface RegistryItemFile {
	path: string;
	type: RegistryItemType;
	target?: string;
	content?: string;
}

export interface RegistryItem {
	$schema?: string;
	name: string;
	title?: string;
	description?: string;
	type: RegistryItemType;
	author?: string;
	dependencies?: string[];
	devDependencies?: string[];
	registryDependencies?: string[];
	files?: Array<RegistryItemFile>;
	meta?: {
		keywords?: string[];
		demoProps?: Record<string, any>;
	};
	cssVars?: {
		theme?: Record<string, string>;
		light?: Record<string, string>;
		dark?: Record<string, string>;
	};
}

export interface RegistryJson {
	$schema: string;
	name: string;
	homepage: string;
	items: Array<RegistryItem>;
}
