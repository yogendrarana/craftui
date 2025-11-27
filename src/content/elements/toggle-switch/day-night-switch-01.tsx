"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function DayNightSwitch() {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<label className="relative inline-block w-20 h-10 cursor-pointer">
			<input
				type="checkbox"
				className="sr-only"
				checked={isChecked}
				onChange={(e) => setIsChecked(e.target.checked)}
			/>
			<span
				className={cn(
					"absolute inset-0 rounded-full transition-all duration-300 ease-in-out",
					isChecked ? "bg-indigo-900" : "bg-sky-400",
					"before:content-[''] before:absolute before:w-8 before:h-8 before:rounded-full before:left-1 before:top-1",
					"before:transition-all before:duration-300 before:ease-in-out",
					isChecked
						? "before:bg-yellow-200 before:translate-x-10 before:scale-[0.75] before:shadow-[inset_-4px_-2px_0px_0px_#eab308]"
						: "before:bg-yellow-300 before:scale-100 before:shadow-[inset_8px_-4px_0px_0px_#fbbf24]",
				)}
			>
				{isChecked && (
					<span className="absolute inset-0 overflow-hidden rounded-full">
						<span className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-50" />
						<span className="absolute top-3 left-6 w-1 h-1 bg-white rounded-full opacity-30" />
						<span className="absolute top-5 left-3 w-1 h-1 bg-white rounded-full opacity-70" />
					</span>
				)}
			</span>
			<span className="sr-only">
				{isChecked ? "Switch to day mode" : "Switch to night mode"}
			</span>
		</label>
	);
}
