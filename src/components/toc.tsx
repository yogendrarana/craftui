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
							item.items?.map((item) => item.url),
						])
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
		<div className="space-y-2">
			<Tree tree={toc} activeItem={activeHeading} />
		</div>
	);
}

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

interface TreeProps {
	tree: TocItem[];
	level?: number;
	activeItem?: string | null;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
	return tree?.length && level < 3 ? (
		<ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
			{tree.map((item, index) => {
				return (
					<li key={index} className="mt-0 pt-2">
						<Link
							href={item.url}
							className={cn(
								"text-sm inline-block no-underline transition-colors hover:text-foreground",
								item.url === `#${activeItem}`
									? "text-foreground"
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
