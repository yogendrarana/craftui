"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";

type CursorType = "icon" | "text" | "custom";

interface CustomCursorProps {
    children: React.ReactNode;
    cursorType: CursorType;
    cursorContent: string | React.ReactNode;
    className?: string;
}

export default function CustomCursor({
    children,
    cursorType,
    cursorContent,
    className
}: CustomCursorProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            if (isHovering) {
                const rect = containerRef.current?.getBoundingClientRect();
                if (rect) {
                    setCursorPosition({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top
                    });
                }
            }
        };

        document.addEventListener("mousemove", updateCursorPosition);

        return () => {
            document.removeEventListener("mousemove", updateCursorPosition);
        };
    }, [isHovering]);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            const entryX = e.clientX - rect.left;
            const entryY = e.clientY - rect.top;
            setCursorPosition({ x: entryX, y: entryY });
        }
        setIsHovering(true);
    };

    const handleMouseLeave = () => setIsHovering(false);

    const renderCursor = () => {
        const content = (() => {
            switch (cursorType) {
                case "icon":
                    return <span className="text-2xl">{cursorContent}</span>;
                case "text":
                    return (
                        <span className="text-sm border bg-white text-black px-2 py-1 rounded shadow">
                            {cursorContent}
                        </span>
                    );
                case "custom":
                    return cursorContent;
                default:
                    return null;
            }
        })();

        return <div className="whitespace-nowrap">{content}</div>;
    };

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn("relative", className)}
            style={{ cursor: isHovering ? "none" : "default" }}
        >
            {children}
            {isHovering && (
                <div
                    className="absolute pointer-events-none z-50"
                    style={{
                        left: cursorPosition.x,
                        top: cursorPosition.y,
                        transform: "translate(-50%, -50%)",
                        transformOrigin: "left center"
                    }}
                >
                    {renderCursor()}
                </div>
            )}
        </div>
    );
}
