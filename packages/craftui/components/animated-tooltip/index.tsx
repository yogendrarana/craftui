"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

import { cn } from "@craftdotui/lib";

export interface AnimatedTooltipProps {
	children: React.ReactNode;
	label: string;
	onClick?: () => void;
	className?: string;
	delay?: number;
}

export function AnimatedTooltip({
	children,
	label,
	onClick,
	className,
	delay = 100,
	...props
}: AnimatedTooltipProps) {
	const [isHovered, setIsHovered] = useState(false);

	const x = useMotionValue(0);
	const springConfig = { stiffness: 200, damping: 10 };
	const rotate = useSpring(
		useTransform(x, [-50, 50], [-25, 25]),
		springConfig,
	);
	const translateX = useSpring(
		useTransform(x, [-50, 50], [-10, 10]),
		springConfig,
	);

	let showTimeout: ReturnType<typeof setTimeout> | undefined;

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		x.set(event.clientX - centerX);
	};

	const handleMouseEnter = () => {
		showTimeout = setTimeout(() => setIsHovered(true), delay);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		x.set(0);
		if (showTimeout) {
			clearTimeout(showTimeout);
		}
	};

	React.useEffect(() => {
		return () => {
			if (showTimeout) {
				clearTimeout(showTimeout);
			}
		};
	}, [showTimeout]);

	return (
		<motion.div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseMove={handleMouseMove}
			whileHover={{
				transition: { type: "spring", stiffness: 300, damping: 20 },
			}}
			whileTap={{ scale: 0.9 }}
			className={cn(
				"w-12 h-12 relative flex items-center justify-center rounded-full shadow-md cursor-pointer border bg-neutral-100 dark:bg-neutral-900 hover:shadow-lg",
				className,
			)}
			onClick={onClick}
			{...props}
		>
			{children}
			{isHovered && (
				<motion.div
					initial={{ opacity: 0, y: 10, scale: 0.75 }}
					animate={{ opacity: 1, y: 0, scale: 1.2 }}
					exit={{ opacity: 0, y: 10, scale: 0.75 }}
					style={{
						rotate,
						translateX,
						transformOrigin: "center center",
					}}
					className="absolute bottom-full mb-2 px-2 py-1 bg-black/75 text-white dark:bg-white dark:text-black text-xs rounded shadow-lg"
				>
					{label}
				</motion.div>
			)}
		</motion.div>
	);
}
