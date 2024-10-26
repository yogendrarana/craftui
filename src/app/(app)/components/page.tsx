"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shell } from "@/components/shell";
import { ButtonIcon, ToggleIcon, RadioIcon, LoaderIcon, InputIcon } from "@/components/icons";
import ComponentsSidebar from "./partials/components-sidebar";

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

export default function Page() {
    return (
        <Shell>
            <div className="py-16 space-y-2">
                <h1 className="text-4xl font-bold">Components</h1>
                <p className="text-lg text-muted-foreground">
                    A collection of beautiful, reusable components built with React, Tailwind CSS,
                    and Framer Motion.
                </p>
            </div>

            <div className="bg-muted/75 flex flex-col lg:flex-row items-start gap-12">
                <ComponentsSidebar className="w-full" />
            </div>
        </Shell>
    );
}
