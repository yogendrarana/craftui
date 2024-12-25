"use client";

import React from "react";
import { motion } from "framer-motion";
import { cva } from "class-variance-authority";

// variant styles
export const tooltipVariants = cva("absolute px-3 py-1.5 rounded shadow-lg text-sm", {
    variants: {
        variant: {
            default: "bg-zinc-900 text-white",
            primary: "bg-blue-500 text-white",
            secondary: "bg-gray-100 text-gray-900",
            destructive: "bg-red-500 text-white"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});

// Types
type TooltipDirection = "top" | "right" | "bottom" | "left";
type TooltipVariant = "default" | "primary" | "secondary" | "destructive";

// Context
const TooltipContext = React.createContext<
    | {
          isVisible: boolean;
          setIsVisible: (value: boolean) => void;
          triggerRef: React.RefObject<HTMLElement>;
          variant?: TooltipVariant;
          direction?: TooltipDirection;
          delay?: number;
      }
    | undefined
>(undefined);

// TooltipProvider component
const TooltipProvider = ({ children }: { children: React.ReactNode }) => (
    <div data-tooltip-provider>{children}</div>
);

// Tooltip component
interface TooltipProps {
    children: React.ReactNode;
    variant?: TooltipVariant;
    direction?: TooltipDirection;
    delay?: number;
}

const Tooltip = ({
    children,
    variant = "default",
    direction = "top",
    delay = 200
}: TooltipProps) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const triggerRef = React.useRef<HTMLElement>(null);

    return (
        <TooltipContext.Provider
            value={{
                isVisible,
                setIsVisible,
                triggerRef,
                variant,
                direction,
                delay
            }}
        >
            <div className="inline-block">{children}</div>
        </TooltipContext.Provider>
    );
};

// TooltipTrigger component
const TooltipTrigger = ({ children }: { children: React.ReactNode }) => {
    const context = React.useContext(TooltipContext);
    if (!context) throw new Error("TooltipTrigger must be used within Tooltip");

    const { setIsVisible, triggerRef, delay } = context;
    let showTimeout: string | number | NodeJS.Timeout | undefined;

    const handleMouseEnter = () => {
        showTimeout = setTimeout(() => setIsVisible(true), delay);
    };

    const handleMouseLeave = () => {
        clearTimeout(showTimeout);
        setIsVisible(false);
    };

    return React.cloneElement(React.Children.only(children) as React.ReactElement, {
        ref: triggerRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
    });
};

// TooltipContent component
const TooltipContent = ({ children }: { children: React.ReactNode }) => {
    const context = React.useContext(TooltipContext);
    if (!context) throw new Error("TooltipContent must be used within Tooltip");

    const { isVisible, triggerRef, direction = "top", variant = "default" } = context;
    const contentRef = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState({ top: 0, left: 0 });

    const variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    };

    React.useEffect(() => {
        if (isVisible && triggerRef.current && contentRef.current) {
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const contentRect = contentRef.current.getBoundingClientRect();
            const gap = 10;

            let top = 0;
            let left = 0;

            switch (direction) {
                case "top":
                    top = triggerRect.top - contentRect.height - gap;
                    left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
                    break;
                case "right":
                    top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
                    left = triggerRect.right + gap;
                    break;
                case "bottom":
                    top = triggerRect.bottom + gap;
                    left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
                    break;
                case "left":
                    top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
                    left = triggerRect.left - contentRect.width - gap;
                    break;
            }

            setPosition({ top, left });
        }
    }, [isVisible, direction, triggerRef]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            <motion.div
                ref={contentRef}
                className={tooltipVariants({ variant })}
                style={{ top: position.top, left: position.left }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
            >
                {children}
            </motion.div>
        </div>
    );
};

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
