"use client";

import React from "react";
import { useState } from "react";

export default function NeoBrutalistSwitch() {
	const [isOn, setIsOn] = useState(false);

	const toggleSwitch = () => setIsOn(!isOn);

	return (
		<div className="flex items-center justify-center">
			<button
				onClick={toggleSwitch}
				className={`w-16 h-10 border-4 border-black dark:border-white flex items-center justify-start p-1 ${
					isOn ? "bg-red-400" : "bg-gray-300 dark:bg-gray-800"
				}`}
			>
				<div
					className={`w-6 h-6 bg-black dark:bg-white transform duration-100 ${
						isOn ? "translate-x-6" : ""
					}`}
				/>
			</button>
		</div>
	);
}
