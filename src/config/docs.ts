import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Elements",
            href: "/docs/elements/buttons"
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
                    items: [],
                    label: ""
                },
                {
                    title: "Input Fields",
                    href: `/docs/elements/input`,
                    items: [],
                    label: ""
                },
                {
                    title: "Checkboxes",
                    href: `/docs/elements/checkbox`,
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
                    href: `/docs/components/marquee`,
                    items: []
                },
                {
                    title: "Hero Video Dialog",
                    href: `/docs/components/hero-video-dialog`,
                    items: [],
                    label: ""
                },
                {
                    title: "Bento Grid",
                    href: `/docs/components/bento-grid`,
                    items: []
                },
                {
                    title: "Animated List",
                    href: `/docs/components/animated-list`,
                    items: []
                }
            ]
        },
        {
            title: "Blocks",
            items: [
                {
                    title: "Navbars",
                    href: `/docs/blocks/navbar`,
                    items: [],
                    label: ""
                },
                {
                    title: "Banners",
                    href: `/docs/blocks/banner`,
                    items: [],
                    label: ""
                },
                {
                    title: "Footers",
                    href: `/docs/blocks/footer`,
                    items: [],
                    label: ""
                },
                {
                    title: "Navbars",
                    href: `/docs/blocks/navbar`,
                    items: [],
                    label: ""
                },
                {
                    title: "Banners",
                    href: `/docs/blocks/banner`,
                    items: [],
                    label: ""
                },
                {
                    title: "Footers",
                    href: `/docs/blocks/footer`,
                    items: [],
                    label: ""
                },
                {
                    title: "Navbars",
                    href: `/docs/blocks/navbar`,
                    items: [],
                    label: ""
                },
                {
                    title: "Banners",
                    href: `/docs/blocks/banner`,
                    items: [],
                    label: ""
                },
                {
                    title: "Footers",
                    href: `/docs/blocks/footer`,
                    items: [],
                    label: ""
                },
                {
                    title: "Navbars",
                    href: `/docs/blocks/navbar`,
                    items: [],
                    label: ""
                },
                {
                    title: "Banners",
                    href: `/docs/blocks/banner`,
                    items: [],
                    label: ""
                },
                {
                    title: "Footers",
                    href: `/docs/blocks/footer`,
                    items: [],
                    label: ""
                }
            ]
        }
    ]
};
