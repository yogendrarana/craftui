"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, Variants, Transition, AnimatePresence } from "framer-motion";

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

/* -------------------------------------------------------------------------------------------------
 * Tabs component
 * -------------------------------------------------------------------------------------------------
 */
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
	instanceId = Math.random().toString(36).slice(2),
}: TabsProps) => {
	const [activeTab, setActiveTab] = React.useState(defaultTab);

	return (
		<TabContext.Provider
			value={{ activeTab, setActiveTab, animationType, instanceId }}
		>
			<div className={cn("w-full", className)}>{children}</div>
		</TabContext.Provider>
	);
};

/* -------------------------------------------------------------------------------------------------
 * TabList component
 * -------------------------------------------------------------------------------------------------
 */
interface TabListProps {
	children: React.ReactNode;
	className?: string;
}

const TabList = ({ children, className }: TabListProps) => {
	return (
		<div
			className={cn(
				"relative flex gap-2 border-b border-gray-200 dark:border-zinc-700",
				className,
			)}
		>
			{children}
		</div>
	);
};

/* -------------------------------------------------------------------------------------------------
 * Tab component
 * -------------------------------------------------------------------------------------------------
 */
interface TabProps {
	children: React.ReactNode;
	value: string;
	className?: string;
	icon?: React.ReactNode;
}

const Tab = ({ children, value, className, icon }: TabProps) => {
	const { activeTab, setActiveTab, animationType, instanceId } =
		useTabContext();
	const isActive = activeTab === value;

	const getAnimationProps = () => {
		switch (animationType) {
			case "line":
				return {
					layoutId: `activeTab-${instanceId}`,
					className:
						"absolute -bottom-[1px] left-0 right-0 h-[2px] rounded-full bg-black dark:bg-white",
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
				{
					"text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white":
						!isActive,
				},
				className,
			)}
		>
			{icon && <span>{icon}</span>}
			{children}
			{isActive && animationType !== "none" && (
				<motion.div {...getAnimationProps()} />
			)}
		</motion.button>
	);
};

/* -------------------------------------------------------------------------------------------------
 * TabPanels component
 * -------------------------------------------------------------------------------------------------
 */

interface TabPanelsProps {
	children: React.ReactNode;
	className?: string;
}

const TabPanels = ({ children, className }: TabPanelsProps) => {
	return (
		<div
			className={cn(
				"mt-3 p-3 rounded border dark:border-zinc-700",
				className,
			)}
		>
			{children}
		</div>
	);
};

/* -------------------------------------------------------------------------------------------------
 * TabPanel component
 * -------------------------------------------------------------------------------------------------
 */

interface TabPanelProps {
	children: React.ReactNode;
	value: string;
	className?: string;
	variants?: Variants;
	transition?: Transition;
}

const TabPanel = ({
	children,
	value,
	className,
	variants = undefined,
	transition = undefined,
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
					className={cn(className)}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export { Tabs, TabList, Tab, TabPanels, TabPanel };
