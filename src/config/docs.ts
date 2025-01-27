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
                    href: "/docs/elements/button",
                    items: []
                },
                {
                    title: "Loaders",
                    href: "/docs/elements/loader",
                    items: []
                },
                {
                    title: "Checkbox",
                    href: "/docs/elements/checkbox",
                    items: []
                },
                {
                    title: "Toggle Switch",
                    href: "/docs/elements/toggle-switch",
                    items: []
                }
            ]
        },
        {
            title: "Components",
            items: [
                {
                    title: "Accordion",
                    href: "/docs/components/accordion"
                },
                {
                    title: "Button",
                    href: "/docs/components/button"
                },
                {
                    title: "Dialog",
                    href: "/docs/components/dialog"
                },
                {
                    title: "Drawer",
                    href: "/docs/components/drawer"
                },

                {
                    title: "Select",
                    href: "/docs/components/select"
                },
                {
                    title: "Separator",
                    href: "/docs/components/separator"
                },
                {
                    title: "Stepper",
                    href: "/docs/components/stepper"
                },
                {
                    title: "Tabs",
                    href: "/docs/components/tabs"
                },
                {
                    title: "Tooltip",
                    href: "/docs/components/tooltip"
                }
            ]
        },
        {
            title: "Extra Components",
            items: [
                {
                    title: "Animated Tooltip",
                    href: "/docs/extra-components/animated-tooltip"
                },
                {
                    title: "Confetti",
                    href: "/docs/extra-components/confetti"
                },
                {
                    title: "Cursor",
                    href: "/docs/extra-components/cursor"
                },
                {
                    title: "Dock",
                    href: "/docs/extra-components/dock"
                },
                {
                    title: "Magnetic",
                    href: "/docs/extra-components/magnetic"
                },
                {
                    title: "Marquee",
                    href: "/docs/extra-components/marquee"
                }
            ]
        },
        {
            title: "Text Effects",
            items: [
                {
                    title: "Typing Effect",
                    href: "/docs/text/typing-effect",
                    items: []
                },
                {
                    title: "Text Scramble",
                    href: "/docs/text/text-scramble",
                    items: []
                }
            ]
        }
    ]
};
