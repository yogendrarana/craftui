"use client";

import React from "react";

export default function Spiral() {
    return (
        <div className="relative flex items-center justify-start h-[40px] w-[40px]">
            {Array.from({ length: 8 }).map((_, index) => (
                <div
                    key={index}
                    className="absolute top-0 left-0 flex items-center justify-start h-full w-full"
                    style={{ transform: `rotate(${index * 45}deg)` }}
                >
                    <div
                        className={`h-[20%] w-[20%] rounded-full bg-black dark:bg-white animate-pulse`}
                        style={{
                            animationDelay: `-${index * 0.1125}s`,
                            animationDuration: "0.9s",
                        }}
                    ></div>
                </div>
            ))}
            <style jsx>{`
                @keyframes pulse {
                    0%,
                    100% {
                        transform: scale(0);
                        opacity: 0.5;
                    }
                    50% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                .animate-pulse {
                    animation: pulse 0.9s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
