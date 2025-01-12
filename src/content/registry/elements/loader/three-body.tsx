"use client"

import React from "react";

export default function ThreeBody() {
    return (
        <>
            <div className="relative inline-block h-[35px] w-[35px] animate-[spin78236_2s_infinite_linear]">
                <div className="absolute h-full w-[30%] origin-[50%_85%] bottom-[5%] left-0 rotate-[60deg]">
                    <div
                        className="absolute h-0 w-full pb-[100%] bg-black dark:bg-white rounded-full bottom-0 left-0 animate-[wobble1_0.8s_infinite_ease-in-out]"
                        style={{ animationDelay: "-0.24s" }}
                    ></div>
                </div>
                <div className="absolute h-full w-[30%] origin-[50%_85%] bottom-[5%] right-0 rotate-[-60deg]">
                    <div
                        className="absolute h-0 w-full pb-[100%] bg-black dark:bg-white rounded-full bottom-0 left-0 animate-[wobble1_0.8s_infinite_ease-in-out]"
                        style={{ animationDelay: "-0.12s" }}
                    ></div>
                </div>
                <div className="absolute h-full w-[30%] bottom-[-5%] left-0 translate-x-[116.666%]">
                    <div className="absolute h-0 w-full pb-[100%] bg-black dark:bg-white rounded-full top-0 left-0 animate-[wobble2_0.8s_infinite_ease-in-out]"></div>
                </div>
            </div>

            <style jsx>
                {`
                    @keyframes spin78236 {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                    @keyframes wobble1 {
                        0%,
                        100% {
                            transform: translateY(0%) scale(1);
                            opacity: 1;
                        }
                        50% {
                            transform: translateY(-66%) scale(0.65);
                            opacity: 0.8;
                        }
                    }
                    @keyframes wobble2 {
                        0%,
                        100% {
                            transform: translateY(0%) scale(1);
                            opacity: 1;
                        }
                        50% {
                            transform: translateY(66%) scale(0.65);
                            opacity: 0.8;
                        }
                    }
                `}
            </style>
        </>
    );
};