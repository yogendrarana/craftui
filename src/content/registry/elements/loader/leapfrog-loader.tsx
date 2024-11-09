"use client";

import React from "react";

export default function LeapFrogLoader() {
    // Array of dot configurations
    const dots = [
        { delay: "0s", translateX: "translate-x-0" },
        { delay: "-0.833s", translateX: "translate-x-4" },
        { delay: "-1.667s", translateX: "translate-x-8" }
    ];

    return (
        <div className="h-10 w-10 relative flex items-center justify-between">
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className={`
                        absolute top-0 left-0 flex items-center justify-start w-full h-full
                        before:content-[''] before:block before:h-2 before:w-2 before:rounded-full before:bg-black
                        before:transition-colors before:duration-300 before:ease-in-out
                        animate-leapFrog
                    `}
                    style={{
                        animationDelay: dot.delay
                    }}
                />
            ))}

            <style jsx>{`
                @keyframes leapFrog {
                    0% {
                        transform: translateX(0) rotate(0deg);
                    }
                    33.333% {
                        transform: translateX(0) rotate(180deg);
                    }
                    66.666% {
                        transform: translateX(-15px) rotate(180deg);
                    }
                    99.999% {
                        transform: translateX(-31px) rotate(180deg);
                    }
                    100% {
                        transform: translateX(0) rotate(0deg);
                    }
                }

                .animate-leapFrog {
                    animation: leapFrog 2.5s ease infinite;
                }
            `}</style>
        </div>
    );
}
