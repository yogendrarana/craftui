"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";

import { cn } from "@craftdotui/lib/utils";

interface PropType {
	children: string;
	speed?: number;
	duration?: number;
	trigger?: boolean;
	className?: string;
	characterSet?: string;
	as?: React.ElementType;
	onScrambleEnd?: () => void;
}

const defaultCharacterSet =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export default function TextScramble({
	children = "Hello, World!",
	speed = 50,
	duration = 3,
	trigger = true,
	className = "",
	characterSet = defaultCharacterSet,
	as: Component = "span",
	onScrambleEnd,
}: PropType) {
	const [scrambledText, setScrambledText] = useState(children);

	const scrambleText = useCallback(() => {
		let currentIndex = 0;
		const endTime = Date.now() + duration * 1000;

		const scrambleInterval = setInterval(() => {
			if (Date.now() > endTime) {
				clearInterval(scrambleInterval);
				setScrambledText(children);
				onScrambleEnd?.();
				return;
			}

			const scrambled = children
				.split("")
				.map((char, index) => {
					if (char === " ") {
						return " ";
					}
					return index < currentIndex
						? char
						: characterSet[
								Math.floor(Math.random() * characterSet.length)
							];
				})
				.join("");

			setScrambledText(scrambled);
			currentIndex = Math.min(currentIndex + 1, children.length);
		}, speed);

		return () => clearInterval(scrambleInterval);
	}, [children, duration, speed, characterSet, onScrambleEnd]);

	useEffect(() => {
		if (trigger) {
			const cleanup = scrambleText();
			return cleanup;
		} else {
			setScrambledText(children);
		}
	}, [trigger, scrambleText, children]);

	return (
		<Component className={cn("font-mono", className)}>
			{scrambledText}
		</Component>
	);
}
