import { Icons } from "@/components/icons";

// nav types
export interface NavItem {
    title: string;
    href?: string;
    active?: boolean;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
    description?: string;
}

export interface NavItemWithChildren extends NavItem {
    items?: NavItemWithChildren[];
}

export type MainNavItem = NavItemWithChildren;
export type SidebarNavItem = NavItemWithChildren;

// footer types
export interface FooterNavItem {
    title: string;
    items: {
        title: string;
        href: string;
        external?: boolean;
    }[];
}

// sidebar types
export interface SidebarItem {
    title: string;
    items: {
        title: string;
        href: string;
        icon?: keyof typeof Icons;
        external?: boolean;
    }[];
}

// component types
export type ComponentType = "element" | "block";
export type ElementType = "button" | "input" | "radio" | "checkbox" | "select" | "textarea";
