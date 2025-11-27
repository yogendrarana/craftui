"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
	className?: string;
}

const ShimmerButton = ({ className }: ShimmerButtonProps) => {
	return (
		<>
			<button
				className={cn(
					"h-12 w-28 rounded-full relative cursor-pointer flex items-center justify-center border border-white/10 bg-black overflow-hidden",
					className,
				)}
			>
				<span
					className={cn(
						"absolute w-full aspect-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
						"before:content-[''] before:absolute before:h-full before:w-full before:aspect-[1] top-1/2 left-100 before:-translate-x-1/2 before:-translate-y-1/2   before:bg-[conic-gradient(transparent,white_60deg,transparent_61deg)]",
						"before:animate-[lazy_2s_linear_infinite]",
					)}
				></span>

				<span className="absolute inset-[2px] bg-black rounded-full"></span>
				<span className="text-white z-10 text-sm">Shimmer</span>
			</button>

			<style>{`
                @keyframes lazy {
                    0% {
                        transform: rotate(0deg);
                    }

                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
		</>
	);
};

export default ShimmerButton;
