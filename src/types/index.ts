export interface NavItem {
    title: string;
    href: string;
    disabled?: boolean;
    external?: boolean;
    label?: string;
    paid?: boolean;
    event?: string;
    new?: boolean;
    updated?: boolean;
}