"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplitFlap({ text = "Frontend" }: { text?: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <h1
            className="text-4xl md:text-6xl font-bold cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label={text}
        >
            {text.split("").map((char, index) => (
                <span key={index} className="inline-block overflow-hidden relative">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={`${char}-${isHovered ? "hovered" : "normal"}`}
                            initial={{ y: isHovered ? "100%" : 0 }}
                            animate={{ y: 0 }}
                            exit={{ y: isHovered ? 0 : "-100%" }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                                delay: index * 0.025
                            }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    </AnimatePresence>
                </span>
            ))}
        </h1>
    );
}
