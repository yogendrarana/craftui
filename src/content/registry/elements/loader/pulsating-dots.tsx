"use client";

import React from "react";

export default function PulsingDots() {
    return (
        <div className="relative flex items-center justify-between w-[43px] h-[10.32px]">
            <div className="w-[10.32px] h-[10.32px] rounded-full bg-black animate-pulse delay-0"></div>
            <div className="w-[10.32px] h-[10.32px] rounded-full bg-black animate-pulse delay-200"></div>
            <div className="w-[10.32px] h-[10.32px] rounded-full bg-black animate-pulse delay-400"></div>

            <style jsx>{`
                @keyframes pulse {
                    0%,
                    100% {
                        transform: scale(0);
                    }
                    50% {
                        transform: scale(1);
                    }
                }

                .animate-pulse {
                    animation: pulse 1.3s ease-in-out infinite;
                }

                .delay-0 {
                    animation-delay: calc(1.3s * -0.25);
                }

                .delay-200 {
                    animation-delay: calc(1.3s * -0.125);
                }

                .delay-400 {
                    animation-delay: 0s;
                }
            `}</style>
        </div>
    );
}
