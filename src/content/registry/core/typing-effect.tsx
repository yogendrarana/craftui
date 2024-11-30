"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface TypingEffectProps {
    children: string;
    typingSpeed?: number;
    className?: string;
}

export default function TypingEffect({
    children,
    typingSpeed = 100,
    className = ""
}: TypingEffectProps) {
    const controls = useAnimation();
    const [displayedText, setDisplayedText] = useState("");

    const text = children;

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(intervalId);
                controls.start({ opacity: 1 });
            }
        }, typingSpeed);

        return () => clearInterval(intervalId);
    }, [text, typingSpeed, controls]);

    return (
        <div className={`font-mono ${className}`}>
            {displayedText}
            <motion.span
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            >
                |
            </motion.span>
        </div>
    );
}
