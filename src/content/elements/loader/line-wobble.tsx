"use client";

import React from "react";

export default function LineWobble() {
    return (
        <div className="relative flex items-center justify-center h-[5px] w-[80px] rounded-[2.5px] overflow-hidden transform">
            <div className="absolute top-0 left-0 h-full w-full bg-black dark:bg-white opacity-10 transition-colors duration-300"></div>
            <div className="h-full w-full rounded-[2.5px] animate-wobble bg-black dark:bg-white transition-colors duration-300"></div>

            <style jsx>{`
                @keyframes wobble {
                    0%,
                    100% {
                        transform: translateX(-95%);
                    }
                    50% {
                        transform: translateX(95%);
                    }
                }
                .animate-wobble {
                    animation: wobble 1.75s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
