"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shell } from "@/components/shell";
import { ButtonIcon, ToggleIcon, RadioIcon, LoaderIcon, InputIcon } from "@/components/icons";

const elements = [
    {
        name: "Button",
        description: "Clickable button elements with various styles and states.",
        icon: ButtonIcon,
        href: "/elements/button",
        category: "Basic"
    },
    {
        name: "Toggle",
        description: "Switch between two states with animated transitions.",
        icon: ToggleIcon,
        href: "/elements/toggle",
        category: "Basic"
    },
    {
        name: "Radio",
        description: "Select a single option from a group of choices.",
        icon: RadioIcon,
        href: "/elements/radio",
        category: "Basic"
    },
    {
        name: "Loader",
        description: "Loading indicators and spinners with animations.",
        icon: LoaderIcon,
        href: "/elements/loader",
        category: "Basic"
    },
    {
        name: "Input",
        description: "Text input fields with various styles and validations.",
        icon: InputIcon,
        href: "/elements/input",
        category: "Basic"
    }
];

export default function ElementsPage() {
    return (
        <Shell className="py-12">
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold mb-4">Elements</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    A collection of beautiful, reusable components built with React, Tailwind CSS,
                    and Framer Motion.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {elements.map((element) => (
                    <motion.div
                        key={element.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative"
                    >
                        <Link href={element.href}>
                            <div className="relative overflow-hidden rounded-lg border bg-card p-6">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                                <div className="mb-4 text-primary">
                                    <element.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{element.name}</h3>
                                <p className="text-muted-foreground">{element.description}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </Shell>
    );
}
