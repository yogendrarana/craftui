"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ToggleMode } from "@/components/toggle-mode";
import { GithubStars } from "@/components/github-stars";
import DocsMobileSidebar from "@/components/docs-mobile-sidebar";
import { docsNavItems } from "@/config/docs";
import { MaxWidthContainer } from "@/components/max-width-container";
import { cn } from "@/lib/utils";

export function Header() {
	const pathname = usePathname();

	const navLinks = [
		{ href: "/docs/getting-started/introduction", label: "Docs" },
		{ href: "/docs/craftui/ui/accordion", label: "UI" },
		{
			href: "/docs/craftui/components/animated-tooltip",
			label: "Components",
		},
		{ href: "/docs/hooks/use-callback", label: "Hooks" },
	];

	return (
		<header className="bg-background sticky top-0 z-50 border-b border-dashed">
			<MaxWidthContainer className="sm:border-l sm:border-r border-dashed">
				<nav className="h-20 flex items-center justify-between">
					<Link href="/" className="text-2xl font-bold">
						Craft UI
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex mx-auto items-center gap-6">
						{navLinks.map(({ href, label }) => {
							const isActive = pathname.startsWith(href);
							return (
								<Link
									key={href}
									href={href}
									className={cn(
										"text-sm transition-colors",
										isActive
											? "text-foreground font-medium"
											: "text-muted-foreground hover:text-foreground",
									)}
								>
									{label}
								</Link>
							);
						})}
					</div>

					<div className="hidden md:flex items-center gap-2">
						<GithubStars />
						<ToggleMode />
					</div>

					<div className="md:hidden ml-auto">
						<DocsMobileSidebar items={docsNavItems} />
					</div>
				</nav>
			</MaxWidthContainer>
		</header>
	);
}
