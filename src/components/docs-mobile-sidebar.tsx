"use client";

import React from "react";
import Link from "next/link";
import { Drawer } from "vaul";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { DocsNavItem } from "@/config/docs";
import type { NavItem } from "@/types/registry";

interface DocsMobileSidebarProps {
	items: DocsNavItem[];
}

export default function DocsMobileSidebar({ items }: DocsMobileSidebarProps) {
	const sidebarNav = items;
	const [open, setOpen] = React.useState(false);

	return (
		<Drawer.Root open={open} onOpenChange={setOpen} direction="right">
			<Drawer.Trigger
				className={cn(
					"bg-whites transition-all hover:bg-[#FAFAFA]",
					"dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white",
				)}
			>
				<Menu className="h-6 w-6" />
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-white/90" />
				<Drawer.Content
					className="w-[350px] right-2 top-2 bottom-2 fixed z-50 outline-none flex"
					// The gap between the edge of the screen and the drawer is 8px in this case.
					style={
						{
							"--initial-transform": "calc(100% + 8px)",
						} as React.CSSProperties
					}
				>
					<div className="h-full w-full p-4 bg-zinc-50 rounded-md border overflow-hidden shadow-sm">
						<Drawer.Title className="mb-4 text-xl font-bold flex justify-between items-center">
							Craft UI
							<Button
								size="icon"
								variant="outline"
								onClick={() => setOpen(false)}
								className="h-8 w-8 grid place-items-center rounded-md"
							>
								<X />
							</Button>
						</Drawer.Title>

						<div>
							{sidebarNav.map((item, index) => (
								<div key={index} className="pb-4">
									<h4 className="mb-1 py-1 text-sm font-semibold">
										{item.title}
									</h4>
									{item.items && (
										<MobileNavItems
											items={item.items}
											setOpen={setOpen}
										/>
									)}
								</div>
							))}
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
}

function MobileNavItems({
	items,
	setOpen,
}: {
	items: NavItem[];
	setOpen: (open: boolean) => void;
}) {
	return (
		<div className="flex flex-col gap-2">
			{items.map((item, index) => (
				<div key={index}>
					{item.items?.length ? (
						<div className="pl-4 border-l my-2">
							<h5 className="mb-1 text-sm font-semibold text-muted-foreground">
								{item.title}
							</h5>
							<MobileNavItems
								items={item.items}
								setOpen={setOpen}
							/>
						</div>
					) : (
						item.href && (
							<Link
								href={item.href}
								onClick={() => setOpen(false)}
								className="text-muted-foreground hover:text-foreground transition-colors block py-1"
							>
								{item.title}
							</Link>
						)
					)}
				</div>
			))}
		</div>
	);
}
