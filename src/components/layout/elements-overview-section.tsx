"use client";

import React from "react";
import { Shell } from "../shell";
import { AnimatedLink } from "../animated-link";

export default function ElementsOverviewSection() {
    return (
        <section className="py-24 border-b border-border border-dashed">
            <Shell>
                <div className="mt-4 flex gap-4 flex-col md:flex-row">
                    <div className="flex-1 flex-col">
                        <h2 className="text-4xl font-bold">UI Elements</h2>
                        <p className="text-lg text-muted-foreground">
                            Explore our collection of beautiful, interactive UI elements.
                        </p>
                    </div>

                    <div className="flex-1">
                        <AnimatedLink href="/elements" label="Buttons" className="border-b-0" />
                        <AnimatedLink href="/elements" label="Loader" className="border-b-0" />
                        <AnimatedLink href="/elements" label="Toggles" className="border-b-0" />
                        <AnimatedLink href="/elements" label="Inputs" />
                    </div>
                </div>
            </Shell>
        </section>
    );
}
