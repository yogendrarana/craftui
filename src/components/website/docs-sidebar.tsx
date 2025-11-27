"use client";

import Link from "next/link";
import { Link2 } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";
import { type DocsNavItem, docsNavItems } from "@/config/docs";

interface DocsSidebarNavProps {
	className?: string;
}

export default function DocsSidebar({ className }: DocsSidebarNavProps) {
	const pathname = usePathname();
	const items: DocsNavItem[] = docsNavItems;

	if (!items || !items.length) {
		return null;
	}

	return (
		<nav className={cn("", className)}>
			{items.map((item, index) => (
				<div key={index} className="pb-4">
					<h4 className="mb-1 rounded-md py-1 text-sm font-semibold">
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
		</nav>
	);
}

// sidebar item
interface DocsSidebarNavItemProps {
	items: NavItem[];
	pathname: string | null;
	groupId: string;
}

function DocsSidebarNavItem({
	items,
	pathname,
	groupId,
}: DocsSidebarNavItemProps) {
	return items?.length ? (
		<ul className="relative grid grid-flow-row auto-rows-max gap-0.5 text-sm">
			{items.map((item, index) => (
				<li key={index}>
					<Link
						href={item.href}
						className={cn(
							"py-1  group relative flex w-full items-center ",
							item.disabled && "cursor-not-allowed opacity-60",
							pathname === item.href
								? "font-medium text-foreground"
								: "text-muted-foreground",
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
								className="h-2 w-2  rounded-full bg-primary ml-2"
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
