"use client";

import Link from "next/link";

import ToggleSwitch from "../toggle-mode";
import GithubStars from "../github-stars";
import DocsMobileSidebar from "../docs-mobile-sidebar";
import MaxWidthContainer from "@/components/website/max-width-container";

export default function Header() {
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
                            href="/docs/elements/button"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Elements
                        </Link>
                        <Link
                            href="/docs/components/accordion"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Components
                        </Link>
                    </div>
                    <div className="ml-auto hidden md:flex items-center gap-2">
                        <GithubStars />
                        <ToggleSwitch />
                    </div>

                    <div className="md:hidden ml-auto">
                        <DocsMobileSidebar />
                    </div>
                </nav>
            </MaxWidthContainer>
        </header>
    );
}
