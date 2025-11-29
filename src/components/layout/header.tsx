"use client";

import Link from "next/link";

import { ToggleMode } from "@/components/toggle-mode";
import { GithubStars } from "@/components/github-stars";
import DocsMobileSidebar from "@/components/docs-mobile-sidebar";
import { docsNavItems } from "@/config/docs";
import { MaxWidthContainer } from "@/components/max-width-container";

export function Header() {
	return (
		<header className="bg-background sticky top-0 z-50 border-b border-dashed">
			<MaxWidthContainer className="sm:border-l sm:border-r border-dashed">
				<nav className="h-20 flex items-center justify-between">
					<Link href="/" className="text-2xl font-bold">
						Craft UI
					</Link>

					<div className="h-1/3 mx-8 hidden md:block border-l" />

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-6">
						<Link
							href="/docs/getting-started/introduction"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Docs
						</Link>
						<Link
							href="/docs/ui/accordion"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Components
						</Link>
						<Link
							href="/docs/hooks/use-callback"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Hooks
						</Link>
					</div>
					<div className="ml-auto hidden md:flex items-center gap-2">
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
