"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence, Variants } from "framer-motion";
import React, { createContext, useContext, useState } from "react";

// Context
interface AccordionContextType {
	openItems: string[];
	toggleItem: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
	undefined,
);

// Variants
const defaultVariants: Variants = {
	hidden: {
		opacity: 0,
		height: 0,
		transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
	},
	visible: {
		opacity: 1,
		height: "auto",
		transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
	},
};

/* -------------------------------------------------------------------------------------------------
 * Accordion (provider) component
 * -------------------------------------------------------------------------------------------------
 */

interface AccordionProps {
	children: React.ReactNode;
	allowMultipleOpen?: boolean;
	defaultOpen?: string[];
	className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
	children,
	allowMultipleOpen = false,
	defaultOpen = [],
	className = "",
}) => {
	const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

	const toggleItem = (id: string) => {
		setOpenItems((prev) => {
			if (allowMultipleOpen) {
				return prev.includes(id)
					? prev.filter((item) => item !== id)
					: [...prev, id];
			} else {
				return prev.includes(id) ? [] : [id];
			}
		});
	};

	return (
		<AccordionContext.Provider value={{ openItems, toggleItem }}>
			<div className={cn("space-y-2", className)}>{children}</div>
		</AccordionContext.Provider>
	);
};

/* -------------------------------------------------------------------------------------------------
 * AccordionItem component
 * -------------------------------------------------------------------------------------------------
 */
interface AccordionItemProps {
	children: React.ReactNode;
	id: string;
	className?: string;
}

const AccordionItemContext = createContext<{ id: string } | undefined>(
	undefined,
);

const AccordionItem: React.FC<AccordionItemProps> = ({
	children,
	id,
	className = "",
}) => {
	return (
		<AccordionItemContext.Provider value={{ id }}>
			<div className={cn("overflow-hidden", className)} data-state={id}>
				{children}
			</div>
		</AccordionItemContext.Provider>
	);
};

/* -------------------------------------------------------------------------------------------------
 * AccordionTrigger component
 * -------------------------------------------------------------------------------------------------
 */
interface AccordionTriggerProps {
	children: React.ReactNode;
	className?: string;
}

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
	children,
	className = "",
}) => {
	const context = useContext(AccordionContext);
	if (!context)
		throw new Error("AccordionTrigger must be used within an Accordion");

	const { openItems, toggleItem } = context;
	const itemContext = useContext(AccordionItemContext);
	if (!itemContext)
		throw new Error(
			"AccordionTrigger must be used within an AccordionItem",
		);

	const { id } = itemContext;
	const isOpen = openItems.includes(id);

	return (
		<button
			className={cn(
				"group flex w-full border-b cursor-pointer items-baseline justify-between gap-4 py-2 text-left font-medium",
				"focus-visible:outline focus-visible:outline-blue-800",
				className,
			)}
			onClick={() => toggleItem(id)}
			data-state={isOpen ? "open" : "closed"}
			aria-expanded={isOpen}
		>
			{children}
		</button>
	);
};

/* -------------------------------------------------------------------------------------------------
 * AccordionContent component
 * -------------------------------------------------------------------------------------------------
 */
interface AccordionContentProps {
	children: React.ReactNode;
	className?: string;
	variants?: Variants;
}

const AccordionContent: React.FC<AccordionContentProps> = ({
	children,
	className = "",
	variants = defaultVariants,
}) => {
	const context = useContext(AccordionContext);
	if (!context)
		throw new Error("AccordionContent must be used within an Accordion");

	const { openItems } = context;
	const itemContext = useContext(AccordionItemContext);
	if (!itemContext)
		throw new Error(
			"AccordionContent must be used within an AccordionItem",
		);

	const { id } = itemContext;
	const isOpen = openItems.includes(id);

	return (
		<AnimatePresence initial={false}>
			{isOpen && (
				<motion.div
					initial="hidden"
					animate="visible"
					exit="hidden"
					variants={variants}
					data-panel-open={isOpen}
				>
					<div
						className={cn(
							"py-2 text-gray-500",
							"dark:text-gray-400",
							className,
						)}
					>
						{children}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
