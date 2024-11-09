"use client";

import { motion } from "framer-motion";

interface PendulumLoadingProps {
    pendulumCount?: number;
    swingDuration?: number;
    swingAngle?: number;
    threadLength?: number;
}

export default function PendulumWave({
    pendulumCount = 8,
    swingDuration = 2,
    swingAngle = 30,
    threadLength = 80
}: PendulumLoadingProps) {
    // Create an array of pendulum configurations with different delays
    const pendulums = Array.from({ length: pendulumCount }, (_, index) => ({
        id: index,
        // Create a circular pattern of delays
        delay: index * (swingDuration / pendulumCount)
    }));

    return (
        <div className="w-full h-full flex items-center justify-center">
            <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible">
                {/* Center anchor point */}
                <circle cx="100" cy="60" r="3" fill="black" />

                {pendulums.map((pendulum, i) => (
                    <g key={pendulum.id}>
                        {/* Pendulum thread */}
                        <motion.line
                            x1="100"
                            y1="60"
                            x2="100"
                            y2={60 + i * 5 + threadLength}
                            stroke="black"
                            strokeWidth="1.5"
                            animate={{
                                rotate: [swingAngle, -swingAngle]
                            }}
                            transition={{
                                duration: swingDuration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatType: "reverse",
                                delay: pendulum.delay
                            }}
                            style={{
                                originX: "100px",
                                originY: "60px"
                            }}
                        />

                        {/* Pendulum bob */}
                        <motion.g
                            animate={{
                                rotate: [swingAngle, -swingAngle]
                            }}
                            transition={{
                                duration: swingDuration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatType: "reverse",
                                delay: pendulum.delay
                            }}
                            style={{
                                originX: "100px",
                                originY: "60px"
                            }}
                        >
                            {/* Bob shadow */}
                            <circle
                                cx="100"
                                cy={60 + i * 5 + threadLength}
                                r="6"
                                className="fill-black/10"
                                filter="blur(2px)"
                            />
                            {/* Main bob */}
                            <circle
                                cx="100"
                                cy={60 + i * 5 + threadLength}
                                r="5"
                                className="fill-black"
                            />
                        </motion.g>
                    </g>
                ))}
            </svg>
        </div>
    );
}
