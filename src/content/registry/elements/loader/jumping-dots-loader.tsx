"use client";

import React from "react";

export default function JumpingDotsLoader() {
    return (
        <div className="flex items-end justify-between w-[47px] h-[23.5px]">
            <div className="flex-shrink-0 w-[8.06px] h-[8.06px] rounded-full bg-black animate-jump1"></div>
            <div className="flex-shrink-0 w-[8.06px] h-[8.06px] rounded-full bg-black animate-jump2"></div>
            <div className="flex-shrink-0 w-[8.06px] h-[8.06px] rounded-full bg-black animate-jump3"></div>
            <div className="flex-shrink-0 w-[8.06px] h-[8.06px] rounded-full bg-black animate-jump4"></div>

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

                .animate-jump1 {
                    animation: jump 1s ease-in-out calc(1s * -0.45) infinite;
                }

                .animate-jump2 {
                    animation: jump 1s ease-in-out calc(1s * -0.3) infinite;
                }

                .animate-jump3 {
                    animation: jump 1s ease-in-out calc(1s * -0.15) infinite;
                }

                .animate-jump4 {
                    animation: jump 1s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
