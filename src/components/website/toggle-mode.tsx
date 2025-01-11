"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import BrutalistButton from "@/content/registry/elements/button/brutalist-button";

export default function ToggleSwitch() {
    const { theme, setTheme } = useTheme();

    return (
        <BrutalistButton
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
            }}
        >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </BrutalistButton>
    );
}
