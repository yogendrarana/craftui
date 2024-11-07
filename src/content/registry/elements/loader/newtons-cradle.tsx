"use client";

import React from "react";

export default function NewtonsCradle() {
    return (
        <div className="h-10 w-10 relative flex items-center justify-center">
            <div className="dot animate-swing">
                <div className="dot-inner" />
            </div>
            <div className="dot animate-swing2">
                <div className="dot-inner" />
            </div>
            <div className="dot">
                <div className="dot-inner" />
            </div>
            <div className="dot">
                <div className="dot-inner" />
            </div>

            <style jsx>{`
                .dot {
                    position: relative;
                    display: flex;
                    flex-shrink: 0;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    width: 25%;
                    transform-origin: center top;
                }

                .dot-inner {a
                    content: "";
                    display: block;
                    width: 100%;
                    height: 25%;
                    border-radius: 50%;
                    background-color: black;
                    transition: background-color 0.3s ease;
                }

                .dot:first-child {
                    animation: swing 1.4s linear infinite;
                }

                .dot:last-child {
                    animation: swing2 1.4s linear infinite;
                }

                @keyframes swing {
                    0% {
                        transform: rotate(0deg);
                        animation-timing-function: ease-out;
                    }
                    25% {
                        transform: rotate(70deg);
                        animation-timing-function: ease-in;
                    }
                    50% {
                        transform: rotate(0deg);
                        animation-timing-function: linear;
                    }
                }

                @keyframes swing2 {
                    0% {
                        transform: rotate(0deg);
                        animation-timing-function: linear;
                    }
                    50% {
                        transform: rotate(0deg);
                        animation-timing-function: ease-out;
                    }
                    75% {
                        transform: rotate(-70deg);
                        animation-timing-function: ease-in;
                    }
                }
            `}</style>
        </div>
    );
}
