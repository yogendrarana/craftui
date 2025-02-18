"use client";

import React from "react";

export default function JumpingDots() {
    return (
        <div className="flex items-end justify-between w-[47px] h-[23.5px]">
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    key={index}
                    className={`flex-shrink-0 w-[8px] h-[8px] rounded-full bg-black dark:bg-white`}
                    style={{
                        animation: `jump 1s ease-in-out calc(1s * -${(4 - index) * 0.15}) infinite`
                    }}
                ></div>
            ))}

            <style jsx>{`
                @keyframes jump {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-200%);
                    }
                }
            `}</style>
        </div>
    );
}
