"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useRef } from "react";

type CursorType = "icon" | "text" | "custom";

interface CursorChangerProps {
    children: React.ReactNode;
    cursorType: CursorType;
    cursorContent: string | React.ReactNode;
    className?: string;
}

export default function CustomCursor({
    children,
    cursorType,
    cursorContent,
    className,
}: CursorChangerProps) {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isHovering) {
            setCursorPos({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseEnter = (e: React.MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const renderCursor = () => {
        const variants = {
            initial: { scale: 1, opacity: 1 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.8, opacity: 0 }
        };

        switch (cursorType) {
            case "icon":
                return (
                    <motion.span
                        variants={variants}
                        className="text-2xl"
                    >
                        {cursorContent}
                    </motion.span>
                );
            case "text":
                return (
                    <motion.span
                        variants={variants}
                        className="text-sm bg-white text-black px-2 py-1.5 rounded shadow"
                    >
                        {cursorContent}
                    </motion.span>
                );
            case "custom":
                return (
                    <motion.div
                        variants={variants}
                    >
                        {cursorContent}
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn("relative", className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{ cursor: isHovering ? "none" : "default" }}
        >
            {children}
            
            <AnimatePresence mode="wait">
                {isHovering && cursorPos.x !== 0 && (
                    <motion.div
                        initial={false}
                        className="fixed pointer-events-none z-[100]"
                        style={{
                            left: cursorPos.x,
                            top: cursorPos.y,
                            transform: 'translate(-50%, -50%)'
                        }}
                        transition={{
                            type: "spring",
                            damping: 28,
                            stiffness: 500,
                            mass: 0.5
                        }}
                    >
                        {renderCursor()}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}