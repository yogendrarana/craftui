"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { motion, AnimatePresence, Variants } from "framer-motion";

const tooltipStyles = cva(
    "absolute px-3 py-1.5 z-50 bg-gray-800 text-white text-sm rounded-md shadow-lg whitespace-nowrap",
    {
        variants: {
            position: {
                top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
                bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
                left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
                right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
            }
        },
        defaultVariants: {
            position: "top"
        }
    }
);

/* -------------------------------------------------------------------------------------------------
 * Tooltip context and useTooltip hook
 * -------------------------------------------------------------------------------------------------
 */

interface TooltipContextProps {
    tooltipTriggerRef: React.RefObject<HTMLElement | HTMLButtonElement>;
    delay?: number;
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const TooltipContext = React.createContext<TooltipContextProps | null>(null);

const useTooltip = () => {
    const context = React.useContext(TooltipContext);
    if (!context) throw new Error("useTooltip must be used within a Tooltip");
    return context;
};

/* -------------------------------------------------------------------------------------------------
 * Tooltip component
 * -------------------------------------------------------------------------------------------------
 */

interface TooltipProps {
    children: React.ReactNode;
    delay?: number;
}

const Tooltip = ({ children, delay = 200 }: TooltipProps) => {
    const tooltipTriggerRef = React.useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <TooltipContext.Provider value={{ tooltipTriggerRef, setIsVisible, isVisible, delay }}>
            <div className="relative inline-block">{children}</div>
        </TooltipContext.Provider>
    );
};

/* -------------------------------------------------------------------------------------------------
 * TooltipTrigger component
 * -------------------------------------------------------------------------------------------------
 */

interface TooltipTriggerProps {
    children: React.ReactNode;
    className?: string;
    asChild?: boolean;
}

interface TooltipContextProps {
    tooltipTriggerRef: React.RefObject<HTMLElement | HTMLButtonElement>;
    delay?: number;
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const TooltipTrigger = ({ children, className, asChild = false }: TooltipTriggerProps) => {
    const { setIsVisible, tooltipTriggerRef, delay } = useTooltip();
    let showTimeout: ReturnType<typeof setTimeout> | undefined = undefined;

    const handleMouseEnter = () => {
        showTimeout = setTimeout(() => setIsVisible(true), delay);
    };

    const handleMouseLeave = () => {
        if (showTimeout) {
            clearTimeout(showTimeout);
        }
        setIsVisible(false);
    };

    React.useEffect(() => {
        return () => {
            if (showTimeout) {
                clearTimeout(showTimeout);
            }
        };
    }, [showTimeout]);

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement, {
            ref: tooltipTriggerRef,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            className: cn("w-full", children.props.className, className)
        });
    }

    return (
        <button
            ref={tooltipTriggerRef as React.RefObject<HTMLButtonElement>}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "w-full px-4 py-2 text-sm font-medium rounded-md border transition-colors focus:outline-none",
                "bg-white text-black border-gray-200 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300",
                "dark:bg-zinc-800 dark:text-white dark:border-zinc-700 dark:hover:bg-gray-800 dark:focus:ring-gray-600",
                className
            )}
        >
            {children}
        </button>
    );
};

/* -------------------------------------------------------------------------------------------------
 * TooltipContent component
 * -------------------------------------------------------------------------------------------------
 */

interface TooltipContentProps {
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    variants?: Variants;
    className?: string;
}

const defaultVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
    ({ children, position = "top", variants = defaultVariants, className }, ref) => {
        const { isVisible } = useTooltip();

        if (!isVisible) return null;

        return (
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        role="tooltip"
                        ref={ref}
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={cn(tooltipStyles({ position }), className)}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent };
