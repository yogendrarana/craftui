export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    label?: string;
    paid?: boolean;
    event?: string;
}

export interface NavItemWithChildren extends NavItem {
    items?: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export type DashboardConfig = {
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
};
