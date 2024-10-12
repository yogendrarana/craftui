import { footer_nav, main_nav, social_links } from "./data";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Craft UI",
    description: "Beautifully designed elements, components for React.js and Next.js.",
    url: "https://craftui.dev",
    links: social_links,
    mobile: "+977 9812345678",
    mainNav: main_nav,
    footerNav: footer_nav
};
