"use client";

import React from "react";
import { Shell } from "../shell";
import { AnimatedLink } from "../animated-link";

export default function ComponentsShowcase() {
    return (
        <Shell>
            <section className="py-24 space-y-20">
                <div className="flex gap-4 flex-col md:flex-row">
                    <div className="flex-1 flex-col">
                        <h2 className="text-4xl font-bold">UI Elements</h2>
                        <p className="text-lg text-muted-foreground">
                            Explore our collection of beautiful, interactive UI elements.
                        </p>
                    </div>

                    <div className="flex-1">
                        <AnimatedLink href="/docs/elements/button" className="border-b-0">
                            Button
                        </AnimatedLink>
                        <AnimatedLink href="/docs/elements/loader" className="border-b-0">
                            Loader
                        </AnimatedLink>
                        <AnimatedLink href="/docs/elements/toggle-switch" className="border-b-0">
                            Toggle
                        </AnimatedLink>
                        <AnimatedLink href="/docs/elements/checkbox" className="border-b-0">
                            Checkbox
                        </AnimatedLink>
                        <AnimatedLink href="/docs/elements/button">... and more</AnimatedLink>
                    </div>
                </div>
            </section>
        </Shell>
    );
}
