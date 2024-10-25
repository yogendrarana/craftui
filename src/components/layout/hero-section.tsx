"use client";

import React from "react";
import { Shell } from "../shell";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Code2, Github, Sparkles } from "lucide-react";
import BackgroundGrid from "./background-grid";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden border-b border-dashed border-border">
            <Shell>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 flex flex-col items-center text-center py-24 space-y-10"
                >
                    <div className="px-3 py-1 text-sm inline-flex items-center rounded-full border">
                        <Sparkles className="mr-2 h-3 w-3" />
                        Beautifully crafted UI components
                    </div>
                    <h1 className="mb-6 text-8xl font-black tracking-tight space-x-4">
                        <span className="text-primary">Craft</span>
                        <span className="px-5 rounded-sm bg-primary text-primary-foreground">
                            UI
                        </span>
                    </h1>
                    <p className="mb-8 text-2xl text-muted-foreground max-w-2xl">
                        A collection of beautiful, interactive UI components for modern web
                        applications. Built with Next.js, Tailwind CSS, and Framer Motion.
                    </p>
                    <div className="flex gap-4">
                        <Button size="lg" className="text-lg">
                            <Code2 className="mr-2 h-5 w-5" />
                            Browse Components
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg">
                            <Github className="mr-2 h-5 w-5" />
                            View on GitHub
                        </Button>
                    </div>
                </motion.div>

                {/* Background Grid */}
                <BackgroundGrid />
            </Shell>
        </section>
    );
}
