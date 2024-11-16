"use client";

import { useState, useEffect } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

type Theme = "system" | "light" | "dark";

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<Theme>("system");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else if (theme === "light") {
            document.documentElement.classList.remove("dark");
        } else {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    }, [theme]);

    return (
        <div>
            <div className="relative flex bg-gray-200 rounded-full p-1 gap-1 items-center h-10">
                {/* Sliding background */}
                <div
                    className={`absolute h-8 my-1 w-8 bg-white rounded-full shadow-sm transition-transform duration-200 ease-in-out ${
                        theme === "system"
                            ? "translate-x-0"
                            : theme === "light"
                            ? "translate-x-9"
                            : "translate-x-[4.5rem]"
                    }`}
                />

                {/* System theme button */}
                <button
                    onClick={() => setTheme("system")}
                    className={`relative z-10 p-2 rounded-full transition-colors duration-200 ${
                        theme === "system" ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                    }`}
                    aria-label="System theme"
                >
                    <Sun className="h-4 w-4" />
                </button>

                {/* Light theme button */}
                <button
                    onClick={() => setTheme("light")}
                    className={`relative z-10 p-2 rounded-full transition-colors duration-200 ${
                        theme === "light" ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                    }`}
                    aria-label="Light theme"
                >
                    <Monitor className="h-4 w-4" />
                </button>

                {/* Dark theme button */}
                <button
                    onClick={() => setTheme("dark")}
                    className={`relative z-10 p-2 rounded-full transition-colors duration-200 ${
                        theme === "dark" ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                    }`}
                    aria-label="Dark theme"
                >
                    <Moon className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
