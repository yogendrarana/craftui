"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface TypingEffectProps {
	children: string;
	typingSpeed?: number;
	className?: string;
}

export default function TypingEffect({
	children,
	typingSpeed = 100,
	className = "",
}: TypingEffectProps) {
	const [displayedText, setDisplayedText] = useState("");

	const text = children;

	useEffect(() => {
		let currentIndex = 0;
		const intervalId = setInterval(() => {
			if (currentIndex <= text.length) {
				setDisplayedText(text.slice(0, currentIndex));
				currentIndex++;
			} else {
				clearInterval(intervalId);
			}
		}, typingSpeed);

		return () => clearInterval(intervalId);
	}, [text, typingSpeed]);

	return (
		<div className={`font-mono ${className}`}>
			{displayedText}
			<motion.span
				animate={{ opacity: [0, 1] }}
				transition={{
					duration: 0.5,
					repeat: Infinity,
					repeatType: "reverse",
				}}
			>
				|
			</motion.span>
		</div>
	);
}
