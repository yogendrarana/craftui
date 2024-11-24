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
                },
                {
                    title: "Installation",
                    href: "/docs/getting-started/installation",
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
                    title: "Input Fields",
                    href: `/docs/elements/input-fields`,
                    items: []
                },
                {
                    title: "Toggle Switch",
                    href: `/docs/elements/toggle-switch`,
                    items: []
                }
            ]
        },
        {
            title: "Components",
            items: [
                {
                    title: "Marquee",
                    href: `/docs/components/marquee`
                },
                {
                    title: "Custom Cursor",
                    href: `/docs/components/custom-cursor`
                }
            ]
        },
        {
            title: "Hover Effects",
            items: [
                {
                    title: "Split Flap Effect",
                    href: `/docs/hover/split-flap`,
                    items: []
                }
            ]
        },
        {
            title: "Text Effects",
            items: [
                {
                    title: "Text Glitch",
                    href: `/docs/text/text-glitch`,
                    items: []
                },
                {
                    title: "Text Scramble",
                    href: `/docs/text/text-scramble`,
                    items: []
                }
            ]
        }
    ]
};
