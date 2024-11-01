"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PropType {
    text?: string;
}

export default function SplitFlapTextEffect({ text = "Frontend" }: PropType) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <h1
                className="text-4xl md:text-6xl font-bold cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {text.split("").map((char, index) => (
                    <div key={index} className="relative inline-block overflow-hidden ">
                        <AnimatePresence mode="popLayout">
                            {isHovered && (
                                <>
                                    <motion.span
                                        key="exit"
                                        initial={{ y: 0 }}
                                        animate={{ y: "-100%" }}
                                        exit={{ y: "-100%" }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                            delay: index * 0.025
                                        }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        {char}
                                    </motion.span>
                                    <motion.span
                                        key="enter"
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                            delay: index * 0.05
                                        }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        {char}
                                    </motion.span>
                                </>
                            )}
                        </AnimatePresence>
                        <span className={isHovered ? "opacity-0" : "opacity-100"}>{char}</span>
                    </div>
                ))}
            </h1>
        </div>
    );
}
