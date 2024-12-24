"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, Variant, Transition, AnimatePresence } from "framer-motion";

type AnimationType = "line" | "none";

interface TabContextType {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    animationType: AnimationType;
    instanceId: string;
}

const TabContext = React.createContext<TabContextType | null>(null);

const useTabContext = () => {
    const context = React.useContext(TabContext);
    if (!context) {
        throw new Error("Tab components must be used within a Tabs component");
    }
    return context;
};

interface TabsProps {
    children: React.ReactNode;
    defaultTab: string;
    className?: string;
    animationType?: AnimationType;
    instanceId?: string;
}

const Tabs = ({
    children,
    defaultTab,
    className,
    animationType = "line",
    instanceId = Math.random().toString(36).slice(2)
}: TabsProps) => {
    const [activeTab, setActiveTab] = React.useState(defaultTab);

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab, animationType, instanceId }}>
            <div className={cn("w-full", className)}>{children}</div>
        </TabContext.Provider>
    );
};

interface TabListProps {
    children: React.ReactNode;
    className?: string;
}

const TabList = ({ children, className }: TabListProps) => {
    return (
        <div className={cn("relative flex gap-2 border-b border-gray-200", className)}>
            {children}
        </div>
    );
};

interface TabProps {
    children: React.ReactNode;
    value: string;
    className?: string;
    icon?: React.ReactNode;
}

const Tab = ({ children, value, className, icon }: TabProps) => {
    const { activeTab, setActiveTab, animationType, instanceId } = useTabContext();
    const isActive = activeTab === value;

    const getAnimationProps = () => {
        switch (animationType) {
            case "line":
                return {
                    layoutId: `activeTab-${instanceId}`,
                    className: "absolute -bottom-[1px] left-0 right-0 h-[2px] bg-black rounded-full"
                };
            default:
                return {};
        }
    };

    return (
        <motion.button
            onClick={() => setActiveTab(value)}
            className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2",
                isActive ? "text-black" : "text-[#707070] hover:text-black",
                className
            )}
        >
            {icon && <span>{icon}</span>}
            {children}
            {isActive && animationType !== "none" && <motion.div {...getAnimationProps()} />}
        </motion.button>
    );
};

interface TabPanelsProps {
    children: React.ReactNode;
    className?: string;
}

const TabPanels = ({ children, className }: TabPanelsProps) => {
    return <div className={cn("mt-3", className)}>{children}</div>;
};

interface TabPanelProps {
    children: React.ReactNode;
    value: string;
    className?: string;
    variants?: {
        initial: Variant;
        animate: Variant;
        exit: Variant;
    };
    transition?: Transition;
}

const defaultVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
};

const defaultTransition = { duration: 0.25, ease: "easeInOut" };

const TabPanel = ({
    children,
    value,
    className,
    variants = defaultVariants,
    transition = defaultTransition
}: TabPanelProps) => {
    const { activeTab } = useTabContext();
    if (activeTab !== value) return null;

    return (
        <AnimatePresence mode="wait">
            {activeTab === value && (
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={variants}
                    transition={transition}
                    className={cn("p-3 bg-gray-100 rounded-sm", className)}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export { Tabs, TabList, Tab, TabPanels, TabPanel };
