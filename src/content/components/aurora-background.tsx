"use client";

import { motion } from "framer-motion";

interface Props {
	speed?: number;
	colors?: string[];
}

export default function AuroraBackground({
	speed = 15,
	colors = ["#22c55e", "#3b82f6", "#a855f7"],
}: Props) {
	const safeColors = [...colors];
	while (safeColors.length < 3) {
		safeColors.push(colors[colors.length - 1] || "#3b82f6");
	}

	return (
		<div className="absolute inset-0 -z-50 overflow-hidden bg-black">
			{[...Array(3)].map((_, i) => (
				<motion.div
					key={i}
					className="border-4 blur-3xl opacity-50 absolute w-[150%] h-[150%]"
					style={{
						top: `${Math.random() * 50}%`,
						left: `${Math.random() * 50}%`,
						background: `linear-gradient(to right, ${colors[0]}, ${colors[1]} 50%, ${colors[2]})`,
					}}
					initial={{ opacity: 0.3, scale: 1.2, rotate: 0 }}
					animate={{
						opacity: [0.3, 0.6, 0.3],
						scale: [1.1, 1.3, 1.1],
						rotate: [0, 15, -15, 0],
						x: [0, 50, -50, 0].map((val) => val + Math.sin(i) * 20),
						y: [0, -30, 30, 0].map((val) => val + Math.cos(i) * 20),
					}}
					transition={{
						duration: speed,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
			))}
		</div>
	);
}
