"use client";

import React from "react";

export default function LeapFrogLoader() {
    return (
        <div className="relative flex items-center justify-between w-[40px] h-[40px] top-[15%]">
            <div className="absolute top-0 left-0 flex items-center justify-start w-full h-full dot"></div>
            <div className="absolute top-0 left-0 flex items-center justify-start w-full h-full dot"></div>
            <div className="absolute top-0 left-0 flex items-center justify-start w-full h-full dot"></div>

            <style jsx>{`
                .dot::before {
                    content: "";
                    display: block;
                    height: calc(40px * 0.22);
                    width: calc(40px * 0.22);
                    border-radius: 50%;
                    background-color: black;
                    transition: background-color 0.3s ease;
                }

                .dot:nth-child(1) {
                    animation: leapFrog 2.5s ease infinite;
                }

                .dot:nth-child(2) {
                    transform: translateX(calc(40px * 0.4));
                    animation: leapFrog 2.5s ease calc(2.5s / -1.5) infinite;
                }

                .dot:nth-child(3) {
                    transform: translateX(calc(40px * 0.8)) rotate(0deg);
                    animation: leapFrog 2.5s ease calc(2.5s / -3) infinite;
                }

                @keyframes leapFrog {
                    0% {
                        transform: translateX(0) rotate(0deg);
                    }
                    33.333% {
                        transform: translateX(0) rotate(180deg);
                    }
                    66.666% {
                        transform: translateX(calc(-40px * 0.38)) rotate(180deg);
                    }
                    99.999% {
                        transform: translateX(calc(-40px * 0.78)) rotate(180deg);
                    }
                    100% {
                        transform: translateX(0) rotate(0deg);
                    }
                }
            `}</style>
        </div>
    );
}
