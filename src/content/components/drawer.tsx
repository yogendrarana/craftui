"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";
import { Transition, Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type DrawerOrigin = "left" | "right" | "top" | "bottom";

// Drawer context
const DrawerContext = React.createContext<{
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	origin: DrawerOrigin;
	variants: Variants;
	transition: Transition;
} | null>(null);

// useDrawer hook
const useDrawer = () => {
	const context = React.useContext(DrawerContext);
	if (!context) {
		throw new Error("Drawer components must be used within a Drawer");
	}
	return context;
};

// Drawer component
interface DrawerProps {
	children: React.ReactNode;
	origin?: DrawerOrigin;
	variants?: Variants;
	transition?: Transition;
	defaultOpen?: boolean;
	open?: boolean;
	onOpenChange?: (isOpen: boolean) => void;
}

const defaultVariants: Record<DrawerOrigin, Variants> = {
	left: {
		initial: { x: "-100%" },
		animate: { x: 0 },
		exit: { x: "-100%" },
	},
	right: {
		initial: { x: "100%" },
		animate: { x: 0 },
		exit: { x: "100%" },
	},
	top: {
		initial: { y: "-100%" },
		animate: { y: 0 },
		exit: { y: "-100%" },
	},
	bottom: {
		initial: { y: "100%" },
		animate: { y: 0 },
		exit: { y: "100%" },
	},
};

const defaultTransition: Transition = {
	type: "spring",
	stiffness: 300,
	damping: 30,
};

const Drawer: React.FC<DrawerProps> = ({
	children,
	origin = "right",
	variants = defaultVariants[origin],
	transition = defaultTransition,
	defaultOpen = false,
	onOpenChange,
	open,
}) => {
	const isControlled = open !== undefined;
	const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
	const isOpen = isControlled ? open : uncontrolledOpen;

	const setIsOpen = React.useCallback(
		(newOpen: boolean) => {
			if (!isControlled) {
				setUncontrolledOpen(newOpen);
			}
			onOpenChange?.(newOpen);
		},
		[isControlled, onOpenChange],
	);

	React.useEffect(() => {
		onOpenChange?.(isOpen);
	}, [isOpen, onOpenChange]);

	return (
		<DrawerContext.Provider
			value={{ isOpen, setIsOpen, origin, variants, transition }}
		>
			{children}
		</DrawerContext.Provider>
	);
};

// DrawerTrigger component
interface DrawerTriggerProps {
	children: React.ReactNode;
	asChild?: boolean;
	className?: string;
}

const DrawerTrigger: React.FC<DrawerTriggerProps> = ({
	children,
	asChild = false,
	className,
}) => {
	const { setIsOpen } = useDrawer();

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsOpen(true);
	};

	if (asChild && React.isValidElement(children)) {
		return React.cloneElement(children as React.ReactElement<any>, {
			onClick: (e: React.MouseEvent) => {
				(children as React.ReactElement<any>).props.onClick?.(e);
				handleClick(e);
			},
		});
	}

	return (
		<button
			onClick={handleClick}
			className={cn(
				"px-4 py-2 text-sm font-medium rounded-md border transition-colors focus:outline-none",
				"bg-white text-black border-gray-200 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300",
				"dark:bg-zinc-800 dark:text-white dark:border-zinc-700 dark:hover:bg-gray-800 dark:focus:ring-gray-600",
				className,
			)}
		>
			{children}
		</button>
	);
};

// DrawerContent component
interface DrawerContentProps {
	children: React.ReactNode;
	onClose?: () => void;
	className?: string;
	backdropClassName?: string;
}

const DrawerContent: React.FC<DrawerContentProps> = ({
	children,
	onClose,
	className,
	backdropClassName,
}) => {
	const { isOpen, setIsOpen, origin, variants, transition } = useDrawer();

	const drawerRef = React.useRef<HTMLDivElement>(null);
	const contentRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
				onClose?.();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			return () => document.removeEventListener("keydown", handleEscape);
		}
	}, [isOpen, setIsOpen, onClose]);

	React.useEffect(() => {
		if (isOpen && contentRef.current) {
			const focusableElements = Array.from(
				contentRef.current.querySelectorAll(
					'button, [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
				),
			) as HTMLElement[];

			if (focusableElements.length > 0) {
				const firstElement = focusableElements[0];
				const lastElement =
					focusableElements[focusableElements.length - 1];

				const handleTabKey = (event: KeyboardEvent) => {
					if (event.key === "Tab") {
						if (
							event.shiftKey &&
							document.activeElement === firstElement
						) {
							event.preventDefault();
							lastElement.focus();
						} else if (
							!event.shiftKey &&
							document.activeElement === lastElement
						) {
							event.preventDefault();
							firstElement.focus();
						}
					}
				};

				firstElement.focus();

				document.addEventListener("keydown", handleTabKey);
				return () =>
					document.removeEventListener("keydown", handleTabKey);
			}
		}
	}, [isOpen]);

	const portalContent = (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					ref={drawerRef}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className={cn(
						"fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
						backdropClassName,
						"dark:bg-black/70",
					)}
					onClick={(e) => {
						if (e.target === drawerRef.current) {
							setIsOpen(false);
						}
					}}
				>
					<motion.div
						ref={contentRef}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={transition}
						variants={variants}
						className={cn(
							"px-4 fixed bg-white shadow-md border",
							"dark:bg-zinc-900 dark:text-white dark:border-zinc-800",
							origin === "left" || origin === "right"
								? "top-0 bottom-0 w-full md:w-1/4"
								: "left-0 right-0 h-80",
							origin === "left"
								? "left-0"
								: origin === "right"
									? "right-0"
									: origin === "top"
										? "top-0"
										: "bottom-0",
							className,
						)}
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);

	return typeof window !== "undefined"
		? createPortal(portalContent, document.body)
		: null;
};

// DrawerHeader component
const DrawerHeader: React.FC<{
	children: React.ReactNode;
	className?: string;
}> = ({ children, className }) => (
	<div
		className={cn(
			"py-4 border-b border-gray-200 dark:border-zinc-700",
			className,
		)}
	>
		{children}
	</div>
);

// DrawerTitle component
const DrawerTitle: React.FC<{
	children: React.ReactNode;
	className?: string;
}> = ({ children, className }) => (
	<h2 className={cn("text-xl font-semibold dark:text-white", className)}>
		{children}
	</h2>
);

// DrawerDescription component
const DrawerDescription: React.FC<{
	children: React.ReactNode;
	className?: string;
}> = ({ children, className }) => (
	<p className={cn("text-sm text-gray-400 dark:text-gray-500", className)}>
		{children}
	</p>
);

// DrawerClose component
interface DrawerCloseProps {
	children?: React.ReactNode;
	asChild?: boolean;
	className?: string;
}

// DrawerClose component
const DrawerClose: React.FC<DrawerCloseProps> = ({
	children,
	asChild = false,
	className,
}) => {
	const { setIsOpen } = useDrawer();

	const handleClose = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsOpen(false);
	};

	if (asChild && React.isValidElement(children)) {
		return React.cloneElement(children as React.ReactElement<any>, {
			onClick: (e: React.MouseEvent) => {
				(children as React.ReactElement<any>).props.onClick?.(e);
				handleClose(e);
			},
		});
	}

	return (
		<button
			type="button"
			onClick={handleClose}
			aria-label="Close drawer"
			className={cn(
				"text-sm border border-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100",
				"dark:text-gray-300 dark:border-zinc-700 dark:hover:text-white dark:hover:bg-gray-800 dark:focus:ring-zinc-800",
				className,
			)}
		>
			{children || <X className="h-4 w-4" />}
		</button>
	);
};

// DrawerFooter component
const DrawerFooter: React.FC<{
	children: React.ReactNode;
	className?: string;
}> = ({ children, className }) => (
	<div
		className={cn(
			"py-4 border-t border-gray-200 dark:border-zinc-700",
			className,
		)}
	>
		{children}
	</div>
);

export {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerDescription,
	DrawerClose,
	DrawerFooter,
};
