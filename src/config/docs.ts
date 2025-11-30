import { NavItem } from "@/types/registry";

export type DocsNavItem = {
	title: string;
	items: Array<NavItem>;
};

export const docsNavItems: Array<DocsNavItem> = [
	{
		title: "Getting Started",
		items: [
			{
				title: "Introduction",
				href: "/docs/getting-started/introduction",
			},
		],
	},
	{
		title: "UI",
		items: [
			{
				title: "Accordion",
				href: "/docs/ui/accordion",
			},
			{
				title: "Dialog",
				href: "/docs/ui/dialog",
			},
			{
				title: "Drawer",
				href: "/docs/ui/drawer",
			},
			{
				title: "Select",
				href: "/docs/ui/select",
			},
			{
				title: "Stepper",
				href: "/docs/ui/stepper",
			},
			{
				title: "Tabs",
				href: "/docs/ui/tabs",
			},
			{
				title: "Timeline",
				href: "/docs/ui/timeline",
			},
		],
	},
	{
		title: "Components",
		items: [
			{
				title: "Animate Tooltip",
				href: "/docs/components/animated-tooltip",
			},
			{
				title: "Confetti",
				href: "/docs/components/confetti",
			},
			{
				title: "Cursor",
				href: "/docs/components/cursor",
			},
			{
				title: "Dock",
				href: "/docs/components/dock",
			},
			{
				title: "Magnetic",
				href: "/docs/components/magnetic",
			},
			{
				title: "Marquee",
				href: "/docs/components/marquee",
			},
		],
	},
	{
		title: "Text",
		items: [
			{
				title: "Text Scramble",
				href: "/docs/text/text-scramble",
			},
			{
				title: "Text Typing",
				href: "/docs/text/text-typing",
			},
		],
	},

	{
		title: "Hooks",
		items: [
			{
				title: "use-callback",
				href: "/docs/hooks/use-callback",
			},
			{
				title: "use-click-outside",
				href: "/docs/hooks/use-click-outside",
			},
			{
				title: "use-debounce",
				href: "/docs/hooks/use-debounce",
			},
			{
				title: "use-hydrated",
				href: "/docs/hooks/use-hydrated",
			},
			{
				title: "use-is-mobile",
				href: "/docs/hooks/use-is-mobile",
			},
			{
				title: "use-media-query",
				href: "/docs/hooks/use-media-query",
			},
			{
				title: "use-mounted",
				href: "/docs/hooks/use-mounted",
			},
			{
				title: "use-optimistic",
				href: "/docs/hooks/use-optimistic",
			},
			{
				title: "use-query-string",
				href: "/docs/hooks/use-query-string",
			},
		],
	},
	{
		title: "Lib",
		items: [
			{
				title: "Utils",
				href: "/docs/lib/utils",
			},
		],
	},
];
