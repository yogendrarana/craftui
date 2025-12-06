"use client";

import type React from "react";
import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

import { cn } from "@craftdotui/lib/utils";

export interface DockItemProps {
	icon: React.ReactNode;
	label: string;
	onClick?: () => void;
	className?: string;
}

interface DockProps {
	children: React.ReactNode;
	className?: string;
}

// Dock Component
export function Dock({ children, className }: DockProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "spring", stiffness: 260, damping: 20 }}
			className={cn(
				"flex px-4 py-2 gap-4 border rounded-2xl shadow-md bg-neutral-100 dark:bg-neutral-800",
				className,
			)}
		>
			{children}
		</motion.div>
	);
}

// DockItem Component
export function DockItem({
	icon,
	label,
	onClick,
	className,
	...props
}: DockItemProps) {
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

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		x.set(event.clientX - centerX);
	};

	const handleMouseLeave = () => {
		x.set(0);
		setIsHovered(false);
	};

	return (
		<motion.div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={handleMouseLeave}
			onMouseMove={handleMouseMove}
			whileHover={{
				scale: 1.2,
				transition: { type: "spring", stiffness: 300, damping: 20 },
			}}
			whileTap={{ scale: 0.9 }}
			className={cn(
				"relative flex items-center justify-center w-12 h-12 rounded-full shadow-md cursor-pointer border bg-neutral-100 dark:bg-neutral-900 hover:shadow-lg",
				className,
			)}
			onClick={onClick}
			{...props}
		>
			{icon}
			{isHovered && (
				<motion.div
					initial={{ opacity: 0, y: 10, scale: 0.8 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: 10, scale: 0.8 }}
					style={{
						rotate, // Dynamic tilt
						translateX, // Subtle side-to-side movement
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
