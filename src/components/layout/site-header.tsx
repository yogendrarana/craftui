"use client";

import Link from "next/link";
import { useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Shell } from "../shell";
import { siteConfig } from "@/config/site";
import { useRouter } from "next/navigation";
import GithubStarBadge from "./github-badge";

export default function SiteHeader() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b border-dashed boder-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <Shell>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="text-2xl font-bold">
                        Craft UI
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/components"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Components
                        </Link>
                        <Link
                            href="/docs"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Documentation
                        </Link>

                        <GithubStarBadge className="rounded-sm shadow-md" />
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Shell>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-border"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            <Link
                                href="/components"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Components
                            </Link>
                            <Link
                                href="/docs"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Documentation
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
