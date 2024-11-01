"use client";

import React from "react";
import { Shell } from "../shell";
import { AnimatedLink } from "../animated-link";

export default function ComponentsOverviewSection() {
    return (
        <section className="py-24">
                <div className="mt-4 flex gap-4 flex-col md:flex-row">
                    <div className="flex-1 flex-col">
                        <h2 className="text-4xl font-bold">UI Elements</h2>
                        <p className="text-lg text-muted-foreground">
                            Explore our collection of beautiful, interactive UI elements.
                        </p>
                    </div>

                    <div className="flex-1">
                        <AnimatedLink
                            href="/docs/elements/button"
                            label="Button"
                            className="border-b-0"
                        />
                        <AnimatedLink
                            href="/docs/elements/loader"
                            label="Loader"
                            className="border-b-0"
                        />
                        <AnimatedLink
                            href="/docs/elements/toggle-switch"
                            label="Toggle"
                            className="border-b-0"
                        />
                        <AnimatedLink href="/docs/elements/checkbox" label="Checkbox" className="border-b-0" />
                        <AnimatedLink href="/docs/elements/input" label="Input" className="border-b-0" />
                        <AnimatedLink
                            href="/docs/elements/button"
                            label="...explore more"
                            className="bg-black text-white border-t-0"
                        />
                    </div>
                </div>
        </section>
    );
}
