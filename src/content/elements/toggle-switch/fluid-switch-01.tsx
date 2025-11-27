"use client";

import { useState } from "react";

export default function FluidSwitch() {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div
			className="relative h-8"
			style={
				{
					"--active-color": "#1868e3",
					"--inactive-color": "#d3d3d6",
				} as React.CSSProperties
			}
		>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={() => setIsChecked(!isChecked)}
				className="appearance-none m-0 absolute z-10 top-0 left-0 w-full h-full cursor-pointer"
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 292 142"
				className="w-full h-full overflow-visible"
			>
				<path
					d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z"
					className={`transition-colors duration-500 ${
						isChecked
							? "fill-[var(--active-color)]"
							: "fill-[var(--inactive-color)]"
					}`}
				/>
				<g filter="url(#goo)">
					<rect
						fill="#fff"
						rx="29"
						height="58"
						width="116"
						y="42"
						x="13"
						className={`transition-transform duration-300 origin-center ${
							isChecked ? "translate-x-[150px]" : ""
						}`}
					/>
					<rect
						fill="#fff"
						rx="58"
						height="114"
						width="114"
						y="14"
						x="14"
						className={`transition-transform duration-500 origin-center ${
							isChecked ? "scale-0" : "scale-100"
						}`}
					/>
					<rect
						fill="#fff"
						rx="58"
						height="114"
						width="114"
						y="14"
						x="164"
						className={`transition-transform duration-500 origin-center ${
							isChecked ? "scale-100" : "scale-0"
						}`}
					/>
				</g>
				<filter id="goo">
					<feGaussianBlur
						stdDeviation="10"
						result="blur"
						in="SourceGraphic"
					/>
					<feColorMatrix
						result="goo"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
						mode="matrix"
						in="blur"
					/>
				</filter>
			</svg>
		</div>
	);
}
