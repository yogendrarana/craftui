"use client";

import React from "react";
import { useState } from "react";

export default function NeomorphicSwitch() {
	const [isOn, setIsOn] = useState(false);

	const handleToggle = () => setIsOn(!isOn);

	return (
		<button
			onClick={handleToggle}
			className={`
                w-16 h-8 rounded-full 
                bg-gray-200 dark:bg-gray-700
                shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]
                dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]
                dark:border dark:border-gray-600
                flex items-center justify-start p-1
                transition-colors duration-200
            `}
		>
			<div
				className={`
                    w-6 h-6 rounded-full 
                    transform duration-300 ease-in-out
                    ${
						isOn
							? "translate-x-8 bg-white dark:bg-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
							: "bg-gray-300 dark:bg-gray-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"
					}
                    transition-all
                `}
			/>
		</button>
	);
}
