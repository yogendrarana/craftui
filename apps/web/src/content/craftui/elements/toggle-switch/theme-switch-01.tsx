"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

enum Theme {
	Light = "light",
	Dark = "dark",
	System = "system",
}

export default function ThemeSwitch() {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			<div className="relative flex border bg-white dark:bg-black dark:border-gray-700 rounded-full p-1 gap-1 items-center h-10">
				{/* Sliding background */}
				<div
					className={`absolute h-8 my-1 w-8 bg-gray-200 dark:bg-gray-500/50 rounded-full shadow-sm transition-transform duration-200 ease-in-out ${
						theme === Theme.Light
							? "translate-x-0"
							: theme === Theme.System
								? "translate-x-9"
								: "translate-x-[4.5rem]"
					}`}
				/>

				{/* Light theme button */}
				<button
					onClick={() => setTheme(Theme.Light)}
					className={`relative z-10 p-2 rounded-full transition-colors duration-200 ${
						theme === Theme.Light
							? "text-gray-900 dark:text-gray-100"
							: "text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
					}`}
					aria-label="Light theme"
				>
					<Sun className="h-4 w-4" />
				</button>

				{/* System theme button */}
				<button
					onClick={() => setTheme(Theme.System)}
					className={`relative z-10 p-2 rounded-full transition-colors duration-200 ${
						theme === Theme.System
							? "text-gray-900 dark:text-gray-100"
							: "text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
					}`}
					aria-label="System theme"
				>
					<Monitor className="h-4 w-4" />
				</button>

				{/* Dark theme button */}
				<button
					onClick={() => setTheme(Theme.Dark)}
					className={`relative z-10 p-2 rounded-full transition-colors duration-200 ${
						theme === Theme.Dark
							? "text-gray-900 dark:text-gray-100"
							: "text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
					}`}
					aria-label="Dark theme"
				>
					<Moon className="h-4 w-4" />
				</button>
			</div>
		</div>
	);
}
