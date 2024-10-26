"use client";

import React from "react";
import { Shell } from "../shell";
import { AnimatedLink } from "../animated-link";

export default function ComponentsOverviewSection() {
    return (
        <section className="py-24 border-b border-border border-dashed">
            <Shell>
                <div className="mt-4 flex gap-4 flex-col md:flex-row">
                    <div className="flex-1 flex-col">
                        <h2 className="text-4xl font-bold">UI Components</h2>
                        <p className="text-lg text-muted-foreground">
                            Explore our collection of beautiful, interactive UI components.
                        </p>
                    </div>

                    <div className="flex-1">
                        <AnimatedLink
                            href="/docs/components/button"
                            label="Button"
                            className="border-b-0"
                        />
                        <AnimatedLink
                            href="/docs/components/loaders"
                            label="Loader"
                            className="border-b-0"
                        />
                        <AnimatedLink
                            href="/docs/components/toggle"
                            label="Toggle"
                            className="border-b-0"
                        />
                        <AnimatedLink href="/docs/components/input" label="Input" className="border-b-0" />
                        <AnimatedLink
                            href="/docs/components"
                            label="...and many more"
                            className="bg-black text-white border-t-0"
                        />
                    </div>
                </div>
            </Shell>
        </section>
    );
}
