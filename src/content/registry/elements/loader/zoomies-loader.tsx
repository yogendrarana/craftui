"use client";

import React from "react";

export default function ZoomiesLoader() {
    return (
        <div className="relative flex items-center justify-center h-[5px] w-[80px] rounded-[2.5px] overflow-hidden transform">
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-10 transition-colors duration-300"></div>
            <div className="h-full w-full rounded-[2.5px] animate-zoom bg-black transition-colors duration-300"></div>

            <style jsx>{`
                @keyframes zoom {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                .animate-zoom {
                    animation: zoom 1.4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
