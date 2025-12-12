"use client";

import React, { useState } from "react";

export default function Checkbox() {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = () => {
		setIsChecked((prev) => !prev);
	};

	return (
		<label className="cursor-pointer">
			<input
				type="checkbox"
				className="
                    appearance-none w-7 h-7 bg-white border-2 border-gray-300 duration-300
                    rounded shadow-md checked:bg-blue-400 checked:border-blue-500 
                    relative group cursor-pointer
                "
				checked={isChecked}
				onChange={handleChange}
			/>
		</label>
	);
}
