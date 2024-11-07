"use client";

import React from "react";
import { Shell } from "@/components/shell";
import { motion } from "framer-motion";
import { Component, Copy, Layers } from "lucide-react";

export default function FeaturesSection() {
    return (
        <section className="py-24 border-b border-dashed border-border">
            <Shell>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    <FeatureCard
                        icon={<Component className="h-8 w-6" />}
                        title="Modern Components"
                        description="Built with the latest React patterns and best practices. Fully typed with TypeScript."
                    />
                    <FeatureCard
                        icon={<Copy className="h-8 w-6" />}
                        title="Copy & Paste"
                        description="Each component comes with its complete code. Just copy and use in your project."
                    />
                    <FeatureCard
                        icon={<Layers className="h-8 w-6" />}
                        title="Customizable"
                        description="Tailwind CSS makes it easy to customize components to match your design."
                    />
                </motion.div>
            </Shell>
        </section>
    );
}

function FeatureCard({
    icon,
    title,
    description
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <motion.div
            // whileHover={{ scale: 1.02 }}
            className="p-8 border border-border rounded-lg bg-card"
        >
            <div className="mb-4 text-primary">{icon}</div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </motion.div>
    );
}
