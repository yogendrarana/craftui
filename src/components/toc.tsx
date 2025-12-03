"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";
import Link from "next/link";

interface TocItem {
	title: string;
	url: string;
	items?: TocItem[];
}

interface TableOfContentsProps {
	toc: TocItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
	const itemIds = React.useMemo(
		() =>
			toc
				? toc
						.flatMap((item) => [
							item.url,
							item.items?.flatMap((subItem) => [
								subItem.url,
								subItem.items?.map(
									(nestedItem) => nestedItem.url,
								),
							]),
						])
						.flat()
						.flat()
						.filter(Boolean)
						.map((id) => id?.split("#")[1])
				: [],
		[toc],
	);

	const activeHeading = useActiveItem(itemIds as string[]);
	const mounted = useMounted();

	if (!toc || !mounted) {
		return null;
	}

	return (
		<div>
			<div className="px-4 py-3 border-b border-border border-dashed text-sm">
				On this page
			</div>
			<div className="p-4">
				<Tree tree={toc} activeItem={activeHeading} />
			</div>
		</div>
	);
}

// use active item hook
function useActiveItem(itemIds: string[]) {
	const [activeId, setActiveId] = React.useState<string | null>(null);

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{ rootMargin: `0% 0% -80% 0%` },
		);

		itemIds?.forEach((id) => {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
			}
		});

		return () => {
			itemIds?.forEach((id) => {
				const element = document.getElementById(id);
				if (element) {
					observer.unobserve(element);
				}
			});
		};
	}, [itemIds]);

	return activeId;
}

// Tree component

interface TreeProps {
	tree: TocItem[];
	level?: number;
	activeItem?: string | null;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		url: string,
	) => {
		e.preventDefault();
		const id = url.split("#")[1];
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
			// Update URL without scrolling
			window.history.pushState(null, "", url);
		}
	};

	return tree?.length && level < 4 ? (
		<ul
			className={cn("m-0 list-none space-y-2", {
				"pl-3 mt-2": level !== 1,
			})}
		>
			{tree.map((item, index) => {
				return (
					<li key={index}>
						<Link
							href={item.url}
							onClick={(e) => handleClick(e, item.url)}
							className={cn(
								"text-sm inline-block no-underline transition-colors hover:text-foreground",
								item.url === `#${activeItem}`
									? "text-foreground font-medium"
									: "text-muted-foreground",
							)}
						>
							{item.title}
						</Link>
						{item.items?.length ? (
							<Tree
								tree={item.items}
								level={level + 1}
								activeItem={activeItem}
							/>
						) : null}
					</li>
				);
			})}
		</ul>
	) : null;
}
