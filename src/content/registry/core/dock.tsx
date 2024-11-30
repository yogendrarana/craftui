"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface DockItemProps {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    className?: string;
}

interface DockProps {
    children: React.ReactNode;
    className?: string;
}

// dock
export function Dock({ children, className }: DockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={cn("px-4 py-2 flex gap-2 border rounded-2xl shadow-md", className)}
        >
            {children}
        </motion.div>
    );
}

// dock item
export function DockItem({ icon, label, onClick, className, ...props }: DockItemProps) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div
            className={cn(
                "border relative flex items-center justify-center w-12 h-12 rounded-full shadow-md cursor-pointer",
                className
            )}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={onClick}
            {...props}
        >
            {icon}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full mb-2 px-2 py-1 bg-black/75 text-white text-xs rounded"
                >
                    {label}
                </motion.div>
            )}
        </motion.div>
    );
}
