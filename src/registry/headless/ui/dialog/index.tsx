"use client";

import React from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import type { Transition, Variants } from "motion/react";

import { cn } from "@/registry/lib/utils";

// dialog context
const DialogContext = React.createContext<{
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	titleId: string;
	descriptionId: string;
	variants: Variants;
	transition: Transition;
} | null>(null);

// useDialog hook
const useDialog = () => {
	const context = React.useContext(DialogContext);
	if (!context) {
		throw new Error("Dialog components must be used within a Dialog");
	}
	return context;
};

/* -------------------------------------------------------------------------------------------------
 * Dialog (provider) component
 * -------------------------------------------------------------------------------------------------
 */
interface DialogProps {
	children: React.ReactNode;
	variants?: Variants;
	transition?: Transition;
	defaultOpen?: boolean;
	open?: boolean;
	onOpenChange?: (isOpen: boolean) => void;
}

const defaultVariants: Variants = {
	initial: {
		opacity: 0,
		scale: 0.95,
	},
	animate: {
		opacity: 1,
		scale: 1,
	},
};

const defaultTransition: Transition = {
	ease: "easeOut",
	duration: 0.2,
};

const Dialog: React.FC<DialogProps> = ({
	children,
	variants = defaultVariants,
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

	const titleId = React.useRef(
		`dialog-title-${Math.random().toString(36).substring(2, 9)}`,
	).current;
	const descriptionId = React.useRef(
		`dialog-description-${Math.random().toString(36).substring(2, 9)}`,
	).current;

	React.useEffect(() => {
		onOpenChange?.(isOpen);
	}, [isOpen, onOpenChange]);

	return (
		<DialogContext.Provider
			value={{
				isOpen,
				setIsOpen,
				titleId,
				descriptionId,
				variants,
				transition,
			}}
		>
			{children}
		</DialogContext.Provider>
	);
};

/* -------------------------------------------------------------------------------------------------
 * DialogTrigger component
 * -------------------------------------------------------------------------------------------------
 */
interface DialogTriggerProps {
	children: React.ReactNode;
	asChild?: boolean;
	className?: string;
}

const DialogTrigger: React.FC<DialogTriggerProps> = ({
	children,
	asChild = false,
	className,
}) => {
	const { setIsOpen } = useDialog();

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
			type="button"
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

/* -------------------------------------------------------------------------------------------------
 * DialogContent component
 * -------------------------------------------------------------------------------------------------
 */
interface DialogContentProps {
	children: React.ReactNode;
	onClose?: () => void;
	className?: string;
	backdropClassName?: string;
}

const DialogContent: React.FC<DialogContentProps> = ({
	children,
	onClose,
	className,
	backdropClassName,
}) => {
	const { isOpen, setIsOpen, titleId, descriptionId, variants, transition } =
		useDialog();
	const contentRef = React.useRef<HTMLDivElement>(null);
	const dialogRef = React.useRef<HTMLDivElement>(null);

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
					ref={dialogRef}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					variants={variants}
					className={cn(
						"fixed inset-0 z-50 flex items-center justify-center overflow-y-auto",
						"bg-black/50 backdrop-blur-sm",
						backdropClassName,
					)}
					onClick={(e) => {
						if (e.target === dialogRef.current) {
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
							"w-full max-w-lg mx-auto p-6 relative bg-white rounded-lg shadow-md",
							"dark:bg-zinc-800 dark:shadow-lg",
							className,
						)}
						role="dialog"
						aria-modal="true"
						aria-labelledby={titleId}
						aria-describedby={descriptionId}
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

/* -------------------------------------------------------------------------------------------------
 * DialogHeader component
 * -------------------------------------------------------------------------------------------------
 */
const DialogHeader: React.FC<{
	children: React.ReactNode;
	className?: string;
}> = ({ children, className }) => (
	<div className={cn("mb-4", className)}>{children}</div>
);

/* -------------------------------------------------------------------------------------------------
 * DialogTitle component
 * -------------------------------------------------------------------------------------------------
 */
const DialogTitle: React.FC<{
	children: React.ReactNode;
	className?: string;
}> = ({ children, className }) => {
	const { titleId } = useDialog();
	return (
		<h2
			id={titleId}
			className={cn("text-xl font-semibold dark:text-white", className)}
		>
			{children}
		</h2>
	);
};

/* -------------------------------------------------------------------------------------------------
 * DialogDscription component
 * -------------------------------------------------------------------------------------------------
 */
const DialogDescription: React.FC<{
	children: React.ReactNode;
	className?: string;
}> = ({ children, className }) => {
	const { descriptionId } = useDialog();
	return (
		<p
			id={descriptionId}
			className={cn(
				"text-sm text-gray-400 dark:text-gray-500",
				className,
			)}
		>
			{children}
		</p>
	);
};

/* -------------------------------------------------------------------------------------------------
 * DialogClose component
 * -------------------------------------------------------------------------------------------------
 */
interface DialogCloseProps {
	children?: React.ReactNode;
	asChild?: boolean;
	className?: string;
}

const DialogClose: React.FC<DialogCloseProps> = ({
	children,
	asChild = false,
	className,
}) => {
	const { setIsOpen } = useDialog();

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

export {
	Dialog,
	DialogTrigger,
	DialogHeader,
	DialogContent,
	DialogTitle,
	DialogDescription,
	DialogClose,
	useDialog,
};
