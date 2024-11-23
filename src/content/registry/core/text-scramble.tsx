"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useCallback } from "react";

interface TextScrambleProps {
    displayText: string;
    className?: string;
    scrambleOnHover?: boolean;
    duration?: number;
    characters?: string;
}

const defaultCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|;:,.<>?";

export default function TextScramble({
    displayText = "Hello, World!",
    className,
    scrambleOnHover = true,
    duration = 1000,
    characters = defaultCharacters
}: TextScrambleProps) {
    const [isScrambling, setIsScrambling] = useState(false);
    const [scrambledText, setScrambledText] = useState(displayText);

    const scrambleText = useCallback(() => {
        let iteration = 0;
        const totalIterations = displayText.length * 8; // You can this multiplier to change the "speed" of reveal
        const intervalDuration = duration / totalIterations;

        setIsScrambling(true);

        const interval = setInterval(() => {
            setScrambledText((prevText) =>
                prevText
                    .split("")
                    .map((char, index) => {
                        if (index < iteration / 8) {
                            return displayText[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("")
            );

            if (iteration >= totalIterations) {
                clearInterval(interval);
                setIsScrambling(false);
            }

            iteration += 1;
        }, intervalDuration);
    }, [displayText, duration, characters]);

    useEffect(() => {
        if (!scrambleOnHover) {
            scrambleText();
        }
    }, [scrambleOnHover, scrambleText]);

    const handleMouseEnter = () => {
        if (scrambleOnHover && !isScrambling) {
            scrambleText();
        }
    };

    return (
        <span
            className={cn(
                "inline-flex select-none",
                scrambleOnHover && "cursor-pointer",
                className
            )}
            onMouseEnter={handleMouseEnter}
            aria-label={displayText}
        >
            {scrambledText.split("").map((char, index) => (
                <span key={index} className="inline-block" style={{ textAlign: "center" }}>
                    {char}
                </span>
            ))}
        </span>
    );
}
