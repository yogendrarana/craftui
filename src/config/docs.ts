import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Elements",
            href: "/docs/elements/button"
        },
        {
            title: "Components",
            href: "/docs/components/marquee"
        },
        {
            title: "Blocks",
            href: "/docs/blocks/navbar"
        }
    ],
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Introduction",
                    href: "/docs/getting-started/introduction",
                    items: []
                }
            ]
        },
        {
            title: "Elements",
            items: [
                {
                    title: "Buttons",
                    href: `/docs/elements/button`,
                    items: []
                },
                {
                    title: "Loaders",
                    href: `/docs/elements/loader`,
                    items: []
                },
                {
                    title: "Checkbox",
                    href: `/docs/elements/checkbox`,
                    items: []
                },
                {
                    title: "Toggle Switch",
                    href: `/docs/elements/toggle-switch`,
                    items: []
                },
                {
                    title: "Input & Textarea",
                    href: `/docs/elements/input-textarea`,
                    items: []
                },
            ]
        },
        {
            title: "Components",
            items: [
                {
                    title: "Dock",
                    href: `/docs/components/dock`
                },
                {
                    title: "Marquee",
                    href: `/docs/components/marquee`
                },
                {
                    title: "Magnetic",
                    href: `/docs/components/magnetic`
                },
                {
                    title: "Custom Cursor",
                    href: `/docs/components/custom-cursor`
                }
            ]
        },
        {
            title: "Text Effects",
            items: [
                {
                    title: "Typing Effect",
                    href: `/docs/text/typing-effect`,
                    items: []
                },
                {
                    title: "Text Scramble",
                    href: `/docs/text/text-scramble`,
                    items: []
                },
                {
                    title: "Split Flap Effect",
                    href: `/docs/text/split-flap`,
                    items: []
                }
            ]
        }
    ]
};
