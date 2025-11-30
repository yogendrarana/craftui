"use client";

import Link from "next/link";
import { Link2 } from "lucide-react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/registry";
import { docsNavItems } from "@/config/docs";

interface DocsSidebarNavProps {
	className?: string;
}

export function DocsSidebar({ className }: DocsSidebarNavProps) {
	const pathname = usePathname();

	return (
		<nav className={cn("space-y-4", className)}>
			{docsNavItems.map((item, index) => (
				<div key={index} className="space-y-1.5">
					<h4 className="px-2 text-sm font-bold tracking-tight text-foreground">
						{item.title}
					</h4>
					{item?.items && (
						<DocsSidebarNavItems
							items={item.items}
							pathname={pathname}
							groupId={`group-${index}`}
						/>
					)}
				</div>
			))}
		</nav>
	);
}

// Sidebar items list
interface DocsSidebarNavItemsProps {
	items: NavItem[];
	pathname: string | null;
	groupId: string;
}

function DocsSidebarNavItems({
	items,
	pathname,
	groupId,
}: DocsSidebarNavItemsProps) {
	return items?.length ? (
		<ul className="relative flex flex-col gap-0.5 text-sm">
			{items.map((item, index) => (
				<li key={index}>
					<Link
						href={item.href}
						className={cn(
							"py-1.5 px-2 group relative flex w-full items-center rounded-md transition-colors",
							"hover:bg-muted/50",
							item.disabled && "cursor-not-allowed opacity-60",
						)}
						target={item.external ? "_blank" : ""}
						rel={item.external ? "noreferrer" : ""}
					>
						<span className="relative z-10 shrink-0">
							{item.title}
						</span>

						{pathname === item.href && (
							<motion.div
								layoutId={groupId}
								className="h-2 w-2 rounded-full bg-primary ml-2"
								initial={false}
								transition={{
									type: "spring",
									stiffness: 350,
									damping: 20,
									mass: 1,
									velocity: 200,
								}}
							/>
						)}

						{item?.label && (
							<span className="relative z-10 ml-2 rounded-md bg-[#FFBD7A] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
								{item.label}
							</span>
						)}

						{item?.paid && (
							<span className="relative z-10 ml-2 rounded-md bg-[#4ade80] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
								Paid
							</span>
						)}

						{item?.external && (
							<Link2 className="relative z-10 ml-2 size-4" />
						)}
					</Link>
				</li>
			))}
		</ul>
	) : null;
}
