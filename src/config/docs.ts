import { NavItem } from "@/types";

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
                href: "/docs/getting-started/introduction"
            }
        ]
    },
    {
        title: "Elements",
        items: [
            {
                title: "Buttons",
                href: "/docs/elements/button"
            },
            {
                title: "Loaders",
                href: "/docs/elements/loader"
            },
            {
                title: "Checkbox",
                href: "/docs/elements/checkbox"
            },
            {
                title: "Toggle Switch",
                href: "/docs/elements/toggle-switch"
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
                title: "Stepper",
                href: "/docs/components/stepper"
            },
            {
                title: "Tabs",
                href: "/docs/components/tabs"
            },

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
            },
            {
                title: "Timeline",
                href: "/docs/extra-components/timeline"
            }
        ]
    },
    {
        title: "Text Effects",
        items: [
            {
                title: "Typing Effect",
                href: "/docs/text/typing-effect"
            },
            {
                title: "Text Scramble",
                href: "/docs/text/text-scramble"
            }
        ]
    }
];
