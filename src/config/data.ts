import { FooterNavItem, MainNavItem } from "@/constants/types";

export const social_links = {
    x: "https://twitter.com/yoogendra_rana",
    github: "https://github.com/yogendrarana",
    githubAccount: "https://github.com/yogendrarana",
    discord: "https://discord.com/users/yoogendrarana",
    calDotCom: "https://cal.com/yogendrarana"
};

export const main_nav: MainNavItem[] = [
    {
        title: "Menu",
        items: [
            {
                title: "Elements",
                href: "/elements",
                description: "Building blocks for your app."
            },
            {
                title: "Blocks",
                href: "/blocks",
                description: "A collection of blocks"
            },
            {
                title: "Templates",
                href: "/templates",
                description: "A collection of templates"
            }
        ]
    },
    {
        title: "Elements",
        items: [
            {
                title: "Buttons",
                href: "/elements/buttons",
                description: "Buttons for your apps."
            },
            {
                title: "Checkoboxes",
                href: "/elements/checkboxes",
                description: "Checkboxes for your apps.",
                items: []
            },
            {
                title: "Inputs",
                href: "/elements/inputs",
                description: "Input fields for your apps.",
                items: []
            },
            {
                title: "Radio",
                href: "/elements/radio",
                description: "Radio buttons for your apps.",
                items: []
            },
            {
                title: "Select",
                href: "/elements/select",
                description: "Select fields for your apps.",
                items: []
            },
            {
                title: "Switch",
                href: "/elements/switch",
                description: "Switch buttons for your apps.",
                items: []
            },
            {
                title: "Loaders",
                href: "/elements/loaders",
                description: "200 loaders for your apps.",
                items: []
            }
        ]
    },
    {
        title: "Blocks",
        href: "/blocks"
    },
    {
        title: "Templates",
        href: "/templates"
    }
];

export const footer_nav: FooterNavItem[] = [
    {
        title: "Help",
        items: [
            {
                title: "Terms",
                href: "/terms",
                external: false
            },
            {
                title: "Privacy",
                href: "/privacy",
                external: false
            }
        ]
    }
];
