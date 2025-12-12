"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LineSpinner() {
	return (
		<div className="relative w-12 h-12">
			{[...Array(12)].map((_, i) => (
				<motion.div
					key={i}
					className="absolute w-1 h-4 rounded-full bg-black dark:bg-white"
					style={{
						left: "50%",
						top: "50%",
						transform: `rotate(${i * 30}deg)`,
						transformOrigin: "0% 0%",
					}}
					animate={{
						opacity: [0.1, 1, 0.1],
					}}
					transition={{
						duration: 1,
						repeat: Infinity,
						delay: i * 0.1,
					}}
				/>
			))}
		</div>
	);
}
