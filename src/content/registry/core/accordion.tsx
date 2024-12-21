import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Context
interface AccordionContextType {
    openItems: string[];
    toggleItem: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

// Variants
const defaultVariants: Variants = {
    hidden: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
    },
    visible: {
        opacity: 1,
        height: "auto",
        transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
    }
};

// Accordion
interface AccordionProps {
    children: React.ReactNode;
    allowMultipleOpen?: boolean;
    defaultOpen?: string[];
    className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
    children,
    allowMultipleOpen = false,
    defaultOpen = [],
    className = ""
}) => {
    const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

    const toggleItem = (id: string) => {
        setOpenItems((prev) => {
            if (allowMultipleOpen) {
                return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
            } else {
                return prev.includes(id) ? [] : [id];
            }
        });
    };

    return (
        <AccordionContext.Provider value={{ openItems, toggleItem }}>
            <div className={cn("w-[700px] space-y-2", className)}>{children}</div>
        </AccordionContext.Provider>
    );
};

// AccordionItem component
interface AccordionItemProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

const AccordionItemContext = createContext<{ id: string } | undefined>(undefined);

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, id, className = "" }) => {
    return (
        <AccordionItemContext.Provider value={{ id }}>
            <div className={cn("overflow-hidden", className)} data-state={id}>
                {children}
            </div>
        </AccordionItemContext.Provider>
    );
};

// AccordionTrigger component
interface AccordionTriggerProps {
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    customOpenIcon?: React.ReactNode;
    customClosedIcon?: React.ReactNode;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
    children,
    className = "",
    customOpenIcon,
    customClosedIcon
}) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error("AccordionTrigger must be used within an Accordion");

    const { openItems, toggleItem } = context;
    const itemContext = useContext(AccordionItemContext);
    if (!itemContext) throw new Error("AccordionTrigger must be used within an AccordionItem");

    const { id } = itemContext;
    const isOpen = openItems.includes(id);

    const renderIcon = () => {
        if (isOpen && customOpenIcon) return customOpenIcon;
        if (!isOpen && customClosedIcon) return customClosedIcon;
        return <ChevronDown className="h-4 w-4 shrink-0 " />;
    };

    return (
        <motion.button
            className={cn(
                "w-full px-4 py-2 flex items-center justify-between text-left bg-white hover:underline",
                className
            )}
            onClick={() => toggleItem(id)}
            aria-expanded={isOpen}
        >
            <span className="font-medium text-md">{children}</span>
            <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {renderIcon()}
            </motion.div>
        </motion.button>
    );
};

// AccordionContent component
interface AccordionContentProps {
    children: React.ReactNode;
    className?: string;
    variants?: Variants;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
    children,
    className = "",
    variants = defaultVariants
}) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error("AccordionContent must be used within an Accordion");

    const { openItems } = context;
    const itemContext = useContext(AccordionItemContext);
    if (!itemContext) throw new Error("AccordionContent must be used within an AccordionItem");

    const { id } = itemContext;
    const isOpen = openItems.includes(id);

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div initial="hidden" animate="visible" exit="hidden" variants={variants}>
                    <div className={cn("px-4 py-2 bg-white text-gray-500", className)}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
