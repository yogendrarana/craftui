"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface NeumorphicButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	className?: string;
}

const NeumorphicButton = forwardRef<HTMLButtonElement, NeumorphicButtonProps>(
	({ children, className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					"h-12 w-24 rounded-md border transition-all duration-300 cursor-pointer",
					"bg-[#fafafa] text-[#333] shadow-[4px_4px_8px_#cbcbcb,_-4px_-4px_8px_#ffffff]",
					"active:shadow-[inset_2px_2px_4px_#c9c9c9,_inset_-2px_-2px_4px_#ffffff]",
					"active:shadow-[inset_4px_4px_8px_#c9c9c9,_inset_-4px_-4px_8px_#ffffff]",
					"disabled:opacity-50 disabled:cursor-not-allowed",
					"dark:bg-[#333] dark:text-[#fafafa] dark:shadow-[4px_4px_8px_#1a1a1a,_-4px_-4px_8px_#4d4d4d]",
					"dark:active:shadow-[inset_2px_2px_4px_#1a1a1a,_inset_-2px_-2px_4px_#4d4d4d]",
					className,
				)}
				{...props}
			>
				{children || "Button"}
			</button>
		);
	},
);

NeumorphicButton.displayName = "NeumorphicButton";

export default NeumorphicButton;
