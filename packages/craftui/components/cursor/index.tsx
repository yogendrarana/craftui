"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";

import { cn } from "@craftdotui/lib/utils";

interface CursorProps {
	children: React.ReactNode;
	cursor: string | React.ReactNode;
	className?: string;
}

export default function Cursor({ children, cursor, className }: CursorProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isHovering, setIsHovering] = useState(false);
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updateCursorPosition = (e: MouseEvent) => {
			if (isHovering) {
				const rect = containerRef.current?.getBoundingClientRect();
				if (rect) {
					setCursorPosition({
						x: e.clientX - rect.left,
						y: e.clientY - rect.top,
					});
				}
			}
		};

		document.addEventListener("mousemove", updateCursorPosition);

		return () => {
			document.removeEventListener("mousemove", updateCursorPosition);
		};
	}, [isHovering]);

	const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = containerRef.current?.getBoundingClientRect();
		if (rect) {
			const entryX = e.clientX - rect.left;
			const entryY = e.clientY - rect.top;
			setCursorPosition({ x: entryX, y: entryY });
		}
		setIsHovering(true);
	};

	const handleMouseLeave = () => setIsHovering(false);

	return (
		<div
			ref={containerRef}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={cn("relative", className)}
			style={{ cursor: isHovering ? "none" : "default" }}
		>
			{children}
			{isHovering && (
				<div
					className="absolute pointer-events-none z-50, whitespace-nowrap"
					style={{
						left: cursorPosition.x,
						top: cursorPosition.y,
						transform: "translate(-50%, -50%)",
						transformOrigin: "left center",
					}}
				>
					{cursor}
				</div>
			)}
		</div>
	);
}
