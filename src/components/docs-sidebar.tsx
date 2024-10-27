"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Link2 } from "lucide-react";
import { motion } from "framer-motion";
import { SidebarNavItem } from "@/types";
import { docsConfig } from "@/config/docs";
import { usePathname } from "next/navigation";

interface DocsSidebarNavProps {
    className?: string;
}

export default function DocsSidebar({ className }: DocsSidebarNavProps) {
    const pathname = usePathname();
    const items: SidebarNavItem[] = docsConfig.sidebarNav;

    if (!items || !items.length) {
        return null;
    }

    return (
        <div className={cn("w-56", className)}>
            {items.map((item, index) => (
                <div key={index} className={"pb-4"}>
                    <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                        {item.title}
                    </h4>
                    {item?.items && (
                        <DocsSidebarNavItem
                            items={item.items}
                            pathname={pathname}
                            groupId={`group-${index}`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

interface DocsSidebarNavItemProps {
    items: SidebarNavItem[];
    pathname: string | null;
    groupId: string;
}

export function DocsSidebarNavItem({ items, pathname, groupId }: DocsSidebarNavItemProps) {
    return items?.length ? (
        <div className="relative grid grid-flow-row auto-rows-max gap-0.5 text-sm">
            {items.map((item, index) =>
                item.href && !item.disabled ? (
                    <Link
                        key={index}
                        href={item.href}
                        className={cn(
                            "group relative flex w-full items-center rounded-md border border-transparent px-2 py-1",
                            item.disabled && "cursor-not-allowed opacity-60",
                            pathname === item.href
                                ? "font-medium text-foreground"
                                : "text-muted-foreground"
                        )}
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noreferrer" : ""}
                    >
                        {pathname === item.href && (
                            <motion.div
                                layoutId={groupId}
                                className="absolute inset-0 rounded-r-md border-l-2 border-neutral-300 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800"
                                initial={false}
                                transition={{
                                    type: "spring",
                                    stiffness: 350,
                                    damping: 30,
                                    mass: 1,
                                    velocity: 200
                                }}
                            />
                        )}
                        <span className="relative z-10 shrink-0">{item.title}</span>
                        {item.label && (
                            <span className="relative z-10 ml-2 rounded-md bg-[#FFBD7A] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                            </span>
                        )}
                        {item.paid && (
                            <span className="relative z-10 ml-2 rounded-md bg-[#4ade80] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                Paid
                            </span>
                        )}
                        {item.external && <Link2 className="relative z-10 ml-2 size-4" />}
                    </Link>
                ) : (
                    <span
                        key={index}
                        className={cn(
                            "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground",
                            item.disabled && "cursor-not-allowed opacity-60"
                        )}
                    >
                        {item.title}
                        {item.label && (
                            <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                                {item.label}
                            </span>
                        )}
                        {item.paid && (
                            <span className="ml-2 rounded-md bg-[#4ade80] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                Paid
                            </span>
                        )}
                    </span>
                )
            )}
        </div>
    ) : null;
}