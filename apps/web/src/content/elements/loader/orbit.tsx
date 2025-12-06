"use client";

import React from "react";

export default function Orbit() {
	return (
		<div>
			<div className="relative h-[14px] w-[35px]">
				<div className="absolute h-[14px] w-[14px] rounded-full bg-black dark:bg-white animate-[orbit_1.4s_linear_infinite]"></div>
				<div className="absolute h-[14px] w-[14px] rounded-full bg-black dark:bg-white animate-[orbit_1.4s_linear_infinite] delay-700"></div>
			</div>

			<style jsx>{`
                @keyframes orbit {
                    0% {
                        transform: translateX(calc(35px * 0.25)) scale(0.73684);
                        opacity: 0.65;
                    }
                    5% {
                        transform: translateX(calc(35px * 0.235)) scale(0.684208);
                        opacity: 0.58;
                    }
                    10% {
                        transform: translateX(calc(35px * 0.182)) scale(0.631576);
                        opacity: 0.51;
                    }
                    15% {
                        transform: translateX(calc(35px * 0.129)) scale(0.578944);
                        opacity: 0.44;
                    }
                    20% {
                        transform: translateX(calc(35px * 0.076)) scale(0.526312);
                        opacity: 0.37;
                    }
                    25% {
                        transform: translateX(0%) scale(0.47368);
                        opacity: 0.3;
                    }
                    30% {
                        transform: translateX(calc(35px * -0.076)) scale(0.526312);
                        opacity: 0.37;
                    }
                    35% {
                        transform: translateX(calc(35px * -0.129)) scale(0.578944);
                        opacity: 0.44;
                    }
                    40% {
                        transform: translateX(calc(35px * -0.182)) scale(0.631576);
                        opacity: 0.51;
                    }
                    45% {
                        transform: translateX(calc(35px * -0.235)) scale(0.684208);
                        opacity: 0.58;
                    }
                    50% {
                        transform: translateX(calc(35px * -0.25)) scale(0.73684);
                        opacity: 0.65;
                    }
                    55% {
                        transform: translateX(calc(35px * -0.235)) scale(0.789472);
                        opacity: 0.72;
                    }
                    60% {
                        transform: translateX(calc(35px * -0.182)) scale(0.842104);
                        opacity: 0.79;
                    }
                    65% {
                        transform: translateX(calc(35px * -0.129)) scale(0.894736);
                        opacity: 0.86;
                    }
                    70% {
                        transform: translateX(calc(35px * -0.076)) scale(0.947368);
                        opacity: 0.93;
                    }
                    75% {
                        transform: translateX(0%) scale(1);
                        opacity: 1;
                    }
                    80% {
                        transform: translateX(calc(35px * 0.076)) scale(0.947368);
                        opacity: 0.93;
                    }
                    85% {
                        transform: translateX(calc(35px * 0.129)) scale(0.894736);
                        opacity: 0.86;
                    }
                    90% {
                        transform: translateX(calc(35px * 0.182)) scale(0.842104);
                        opacity: 0.79;
                    }
                    95% {
                        transform: translateX(calc(35px * 0.235)) scale(0.789472);
                        opacity: 0.72;
                    }
                    100% {
                        transform: translateX(calc(35px * 0.25)) scale(0.73684);
                        opacity: 0.65;
                    }
                }
            `}</style>
		</div>
	);
}
