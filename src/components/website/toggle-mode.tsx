"use client";

import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="outline"
			size="sm"
			className="rounded-none cursor-pointer"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			aria-label="Toggle theme"
		>
			{theme === "dark" ? (
				<SunIcon className="h-5 w-5" />
			) : (
				<MoonIcon className="h-5 w-5" />
			)}
		</Button>
	);
}
