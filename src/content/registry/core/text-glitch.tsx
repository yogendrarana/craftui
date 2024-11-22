"use client";

import React, { useState, useEffect } from "react";

interface TextGlitchProps {
    children: string;
}

const TextGlitch = ({ children }: TextGlitchProps) => {
    const [glitchText, setTextGlitch] = useState("Hello World");
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let intervalId: string | number | NodeJS.Timeout | undefined;

        if (isHovering) {
            intervalId = setInterval(() => {
                const scrambledText = children
                    .split("")
                    .map((char) =>
                        Math.random() > 0.7
                            ? String.fromCharCode(Math.floor(Math.random() * 126) + 33)
                            : char
                    )
                    .join("");
                setTextGlitch(scrambledText);
            }, 50);
        } else {
            setTextGlitch(children);
        }

        return () => clearInterval(intervalId);
    }, [isHovering, children]);

    return (
        <div
            className="inline-block text-2xl font-bold text-blue-600 cursor-pointer select-none"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {glitchText}
        </div>
    );
};

export default TextGlitch;
