"use client";

import React, { useState } from "react";

export default function Checkbox() {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<label className="cursor-pointer">
			<input
				type="checkbox"
				className="hidden"
				checked={isChecked}
				onChange={() => setIsChecked(!isChecked)}
			/>
			<svg viewBox="0 0 64 64" className="h-7 w-7 overflow-visible">
				<path
					d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
					pathLength="575.0541381835938"
					className="fill-none stroke-black dark:stroke-gray-300 stroke-[4] stroke-round transition-all duration-500 ease-in-out"
					style={{
						strokeDasharray: isChecked
							? "70.5096664428711 9999999"
							: "241 9999999",
						strokeDashoffset: isChecked
							? "-262.2723388671875"
							: "0",
					}}
				/>
			</svg>
		</label>
	);
}
