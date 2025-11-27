"use client";

import React, { useState } from "react";

export default function RetroSwitch() {
	const [isOn, setIsOn] = useState(false);
	const handleToggle = () => setIsOn(!isOn);

	return (
		<div>
			<button
				onClick={handleToggle}
				className={`w-16 h-10 rounded-lg bg-gradient-to-b from-gray-300 to-gray-400 border-2 border-gray-600 shadow-inner flex items-center justify-start p-1`}
			>
				<div
					className={`w-6 h-6 rounded transform duration-300 ease-in-out ${
						isOn
							? "translate-x-7 bg-gradient-to-b from-red-400 to-red-600 border-2 border-red-700"
							: "bg-gradient-to-b from-gray-600 to-gray-800 border-2 border-gray-900"
					}`}
				/>
			</button>
		</div>
	);
}
