"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useRouter } from "next/navigation";
import { Github, Code2, Sparkles } from "lucide-react";
import BackgroundGrid from "@/components/website/background-grid";
import BrutalistButton from "@/content/elements/button/brutalist-button";

export default function HeroSection() {
    const router = useRouter();

    return (
        <section className="relative overflow-hidden border-b border-t border-dashed border-border">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="py-28 relative z-10 flex flex-col items-center text-center space-y-10"
            >
                <div className="px-3 py-1 text-sm inline-flex items-center rounded-full border">
                    <Sparkles className="mr-2 h-3 w-3" />
                    Beautifully crafted UI components
                </div>
                <h1 className="text-primary mb-6 text-6xl md:text-8xl font-black tracking-tight space-x-4">
                    <span>Craft</span>
                    <span className="px-5 rounded-sm">UI</span>
                </h1>
                <p className="mb-8 text-xl md:text-2xl text-muted-foreground max-w-2xl">
                    {siteConfig.description}
                </p>
                <div className="flex gap-4">
                    <BrutalistButton
                        onClick={() => router.push("/docs/getting-started/introduction")}
                        className="text-lg px-4 w-auto"
                    >
                        <Code2 className="mr-2 h-5 w-5" />
                        Browse Docs
                    </BrutalistButton>
                    <BrutalistButton
                        onClick={() => window.open(`${siteConfig.projectLinks.github}`, "_blank")}
                        className="px-4 text-lg w-auto bg-zinc-700 text-white dark:bg-zinc-600"
                    >
                        <Github className="mr-2 h-5 w-5" />
                        Visit GitHub
                    </BrutalistButton>
                </div>
            </motion.div>

            {/* Background Grid */}
            <BackgroundGrid />
        </section>
    );
}
