"use client";

import React, { useState } from "react";

export default function EmojiSwitch() {
	const [isOn, setIsOn] = useState(false);
	const handleToggle = () => setIsOn(!isOn);

	return (
		<div className="flex items-center justify-center">
			<button
				role="switch"
				aria-checked={isOn}
				className={`
                  w-20 h-11 
                  flex items-center 
                  rounded-full p-1 
                  cursor-pointer 
                  transition-colors duration-300
                  ${isOn ? "bg-yellow-400 dark:bg-yellow-500" : "bg-gray-300 dark:bg-gray-600"}
                `}
				onClick={handleToggle}
			>
				<span
					className={`
                      w-9 h-9 
                      flex items-center justify-center 
                      rounded-full 
                      text-2xl 
                      transform transition-transform duration-300
                      ${isOn ? "translate-x-9" : "translate-x-0"}
                    `}
				>
					{isOn ? "😊" : "😴"}
				</span>
			</button>
		</div>
	);
}
