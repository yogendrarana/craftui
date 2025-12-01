"use client";

import type React from "react";
import { cn } from "@/registry/lib/utils";

interface MarqueeProps {
	duration?: number;
	repeat?: number;
	className?: string;
	pauseOnHover?: boolean;
	children: React.ReactNode;
	direction?: "left" | "right";
	gap?: number;
}

export default function Marquee({
	children,
	className,
	duration = 20,
	repeat = 2,
	direction = "left",
	pauseOnHover = true,
	gap = 0,
}: MarqueeProps) {
	return (
		<div
			className={cn(
				"group relative flex overflow-hidden",
				"before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[50px] before:bg-linear-to-r before:from-background before:to-transparent before:z-10",
				"after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[50px] before:bg-linear-to-l after:from-background after:to-transparent after:z-10",
				"dark:before:from-background dark:after:from-background",
				className,
			)}
		>
			{Array(repeat)
				.fill(0)
				.map((_, index) => (
					<div
						key={index}
						className={cn(
							"w-max md:w-full flex shrink-0 items-center justify-around text-foreground dark:text-foreground",
							{
								"group-hover:paused":
									pauseOnHover,
							},
						)}
						style={{
							gap: `${gap}px`,
							animation: `marquee-${direction} ${duration}s linear infinite`,
							...(index === 1 && direction === "left"
								? { marginLeft: `${gap}px` }
								: { marginRight: `${gap}px` }),
						}}
					>
						{children}
					</div>
				))}
		</div>
	);
}
