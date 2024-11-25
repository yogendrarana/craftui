"use client";

import React from "react";
import { cn } from "@/lib/utils";

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
    gap = 0
}: MarqueeProps) {
    return (
        <>
            <div
                className={cn(
                    "group relative flex overflow-hidden",
                    "before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[50px] before:bg-gradient-to-r before:from-white before:to-transparent before:z-10",
                    "after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[50px] after:bg-gradient-to-l after:from-white after:to-transparent after:z-10",
                    className
                )}
            >
                {Array(repeat)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                `marquee-${direction}`,
                                "w-max md:w-full flex shrink-0 items-center justify-around",
                                {
                                    "group-hover:[animation-play-state:paused]": pauseOnHover
                                }
                            )}
                            style={{
                                gap: `${gap}px`,
                                ...(index === 1 && direction === "left"
                                    ? { marginLeft: `${gap}px` }
                                    : { marginRight: `${gap}px` })
                            }}
                        >
                            {children}
                        </div>
                    ))}
            </div>

            <style jsx>{`
                @keyframes marquee-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                @keyframes marquee-right {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .marquee-left {
                    animation: marquee-left ${duration}s linear infinite;
                }

                .marquee-right {
                    animation: marquee-right ${duration}s linear infinite;
                }
            `}</style>
        </>
    );
}
