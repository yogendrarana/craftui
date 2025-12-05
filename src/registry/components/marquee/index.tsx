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
								"group-hover:paused": pauseOnHover,
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

			<style>
				{`
					@keyframes marquee-left {
						0% { transform: translateX(0); }
						100% { transform: translateX(-100%); }
					}

					@keyframes marquee-right {
						0% { transform: translateX(-100%); }
						100% { transform: translateX(0); }
					}

					.paused {
						animation-play-state: paused !important;
					}

					.group:hover .group-hover\\\\:paused {
						animation-play-state: paused !important;
					}
				`}
			</style>
		</div>
	);
}
