"use client";

import React, { useState, useEffect, useCallback } from "react";

interface PropType {
    children: string;
    speed?: number;
    duration?: number;
    trigger?: boolean;
    className?: string;
    characterSet?: string;
    as?: React.ElementType;
    onScrambleEnd?: () => void;
}

export default function TextScramble({
    children,
    speed = 50,
    duration = 3,
    trigger = true,
    className = "",
    characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    as: Component = "span",
    onScrambleEnd
}: PropType) {
    const [isScrambling, setIsScrambling] = useState(false);
    const [scrambledText, setScrambledText] = useState(children);

    const scrambleText = useCallback(() => {
        if (isScrambling) return;
        setIsScrambling(true);

        let currentIndex = 0;
        const endTime = Date.now() + duration * 1000;

        const scrambleInterval = setInterval(() => {
            if (Date.now() > endTime) {
                clearInterval(scrambleInterval);
                setScrambledText(children);
                setIsScrambling(false);
                onScrambleEnd && onScrambleEnd();
                return;
            }

            const scrambled = children
                .split("")
                .map((char, index) => {
                    if (index < currentIndex) return char;
                    return characterSet[Math.floor(Math.random() * characterSet.length)];
                })
                .join("");

            setScrambledText(scrambled);
            currentIndex = Math.min(currentIndex + 1, children.length);
        }, speed);

        return () => clearInterval(scrambleInterval);
    }, [isScrambling, duration, speed, children, onScrambleEnd, characterSet]);

    useEffect(() => {
        if (!trigger) return;

        scrambleText();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger]);

    return <Component className={className}>{scrambledText}</Component>;
}
