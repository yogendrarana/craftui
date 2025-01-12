"use client";

import { motion } from "framer-motion";

interface PendulumLoadingProps {
    swingDuration?: number;
    swingAngle?: number;
    threadLength?: number;
}

export default function Pendulum(props: PendulumLoadingProps) {
    const swingDuration = props.swingDuration || 1.5;
    const swingAngle = props.swingAngle || 30; // degrees
    const threadLength = props.threadLength || 60; // pixels

    return (
        <div className="text-black dark:text-white">
            <svg width="200" height="200" viewBox="0 0 200 200">
                {/* Pendulum anchor point */}
                <circle cx="100" cy="50" r="3" fill="currentColor" />

                {/* Pendulum thread */}
                <motion.line
                    x1="100"
                    y1="50"
                    x2="100"
                    y2={50 + threadLength}
                    stroke="currentColor"
                    strokeWidth="2"
                    animate={{
                        rotate: [swingAngle, -swingAngle]
                    }}
                    transition={{
                        duration: swingDuration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse"
                    }}
                    style={{ originX: "100px", originY: "50px" }}
                />

                {/* Pendulum bob (circle) */}
                <motion.circle
                    cx="100"
                    cy={50 + threadLength}
                    r="8"
                    fill="currentColor"
                    animate={{
                        rotate: [swingAngle, -swingAngle]
                    }}
                    transition={{
                        duration: swingDuration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse"
                    }}
                    style={{ originX: "100px", originY: "50px" }}
                />
            </svg>
        </div>
    );
}
