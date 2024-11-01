"use client";

import Link from "next/link";
import { Shell } from "../shell";
import { Separator } from "../ui/separator";
import DocsMobileSidebar from "../docs-mobile-sidebar";
import GithubStarBadge from "../github-badge";

export default function SiteHeader() {
    return (
        <nav className="border-b border-dashed boder-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <Shell>
                <div className="h-20 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold">
                        Craft UI
                    </Link>

                    <Separator className="h-1/3 mx-8 hidden md:block" orientation="vertical" />

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/docs/getting-started/introduction"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Docs
                        </Link>
                        <Link
                            href="/docs/elements/button"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Elements
                        </Link>
                        <Link
                            href="/docs/components/marquee"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Components
                        </Link>
                        <Link
                            href="/docs/text/split-flap"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Text
                        </Link>
                    </div>
                    <div className="ml-auto hidden md:block">
                        <GithubStarBadge className="h-11 rounded-sm shadow-md" />
                    </div>

                    <div className="md:hidden ml-auto">
                        <DocsMobileSidebar />
                    </div>
                </div>
            </Shell>
        </nav>
    );
}
