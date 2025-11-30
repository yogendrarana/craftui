"use client";

import React, { useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/lib/utils";

// Define variants
const timelineVariants = cva("relative", {
	variants: {
		variant: {
			vertical: "flex flex-col gap-6",
			horizontal: "flex flex-row items-center gap-12",
		},
	},
	defaultVariants: {
		variant: "vertical",
	},
});

const markerVariants = cva(
	"w-3 h-3 rounded-full border flex items-center justify-center shrink-0 relative z-10 transition-colors duration-200",
	{
		variants: {
			variant: {
				empty: "bg-white dark:bg-neutral-900",
				fill: "bg-neutral-300 dark:bg-neutral-600",
			},
		},
		defaultVariants: {
			variant: "empty",
		},
	},
);

// Context
type TimelineContextValue = {
	variant: "vertical" | "horizontal";
};

const TimelineContext = React.createContext<TimelineContextValue | undefined>(
	undefined,
);

const useTimeline = () => {
	const context = React.useContext(TimelineContext);
	if (!context) {
		throw new Error("useTimeline must be used within a Timeline component");
	}
	return context;
};

/* -------------------------------------------------------------------------------------------------
 * Timeline
 * Main container component that provides context and layout for timeline items
 * -------------------------------------------------------------------------------------------------
 */
interface TimelineProps extends VariantProps<typeof timelineVariants> {
	children: React.ReactNode;
	className?: string;
	variant?: "vertical" | "horizontal";
	"aria-label"?: string;
}

const Timeline = React.forwardRef<HTMLUListElement, TimelineProps>(
	(
		{ children, variant = "vertical", className, "aria-label": ariaLabel },
		ref,
	) => {
		const id = useId();

		return (
			<TimelineContext.Provider value={{ variant }}>
				<ul
					ref={ref}
					id={id}
					aria-label={ariaLabel || "Timeline"}
					className={cn(
						timelineVariants({ variant }),
						"dark:text-neutral-200",
						className,
					)}
				>
					<div
						className={cn(
							"absolute",
							variant === "vertical"
								? "left-1.5 top-0 w-px h-full"
								: "top-1.5 left-0 h-px w-full",
							"bg-neutral-200 dark:bg-neutral-700",
						)}
						aria-hidden="true"
					/>
					{children}
				</ul>
			</TimelineContext.Provider>
		);
	},
);

Timeline.displayName = "Timeline";

/* -------------------------------------------------------------------------------------------------
 * TimelineItem
 * Container for individual timeline entries
 * -------------------------------------------------------------------------------------------------
 */
interface TimelineItemProps {
	children: React.ReactNode;
	className?: string;
}

const TimelineItem = ({ children, className }: TimelineItemProps) => {
	const { variant } = useTimeline();

	return (
		<li
			className={cn(
				"relative flex items-start group",
				variant === "horizontal" && "flex-col items-center",
				className,
			)}
		>
			{children}
		</li>
	);
};
TimelineItem.displayName = "TimelineItem";

/* -------------------------------------------------------------------------------------------------
 * TimelineMarker
 * Visual indicator for timeline items
 * -------------------------------------------------------------------------------------------------
 */
interface TimelineMarkerProps extends VariantProps<typeof markerVariants> {
	className?: string;
}

const TimelineMarker = ({
	variant = "empty",
	className,
}: TimelineMarkerProps) => {
	return (
		<div
			className={cn(
				markerVariants({ variant }),
				"border-neutral-300 dark:border-neutral-600",
				className,
			)}
			aria-hidden="true"
		/>
	);
};

/* -------------------------------------------------------------------------------------------------
 * TimelineContent
 * Container for timeline item content
 * -------------------------------------------------------------------------------------------------
 */
interface TimelineContentProps {
	children: React.ReactNode;
	className?: string;
}

const TimelineContent = ({ children, className }: TimelineContentProps) => {
	const { variant } = useTimeline();

	return (
		<div
			className={cn(
				variant === "vertical" ? "ml-4" : "mt-4 text-center",
				"relative z-10",
				className,
			)}
		>
			{children}
		</div>
	);
};

TimelineContent.displayName = "TimelineContent";

/* -------------------------------------------------------------------------------------------------
 * TimelineTitle
 * Title component for timeline items
 * -------------------------------------------------------------------------------------------------
 */
interface TimelineTitleProps {
	children: React.ReactNode;
	className?: string;
}

const TimelineTitle = ({ children, className }: TimelineTitleProps) => {
	return (
		<h3
			className={cn(
				"text-base font-medium text-neutral-900 dark:text-neutral-100 mb-1",
				className,
			)}
		>
			{children}
		</h3>
	);
};

/* -------------------------------------------------------------------------------------------------
 * TimelineDescription
 * Description component for timeline items
 * -------------------------------------------------------------------------------------------------
 */
interface TimelineDescriptionProps {
	children: React.ReactNode;
	className?: string;
}

const TimelineDescription = ({
	children,
	className,
}: TimelineDescriptionProps) => {
	return (
		<p
			className={cn(
				"text-sm text-neutral-600 dark:text-neutral-400",
				className,
			)}
		>
			{children}
		</p>
	);
};

export {
	Timeline,
	TimelineItem,
	TimelineMarker,
	TimelineContent,
	TimelineTitle,
	TimelineDescription,
	type TimelineProps,
	type TimelineItemProps,
	type TimelineMarkerProps,
	type TimelineContentProps,
	type TimelineTitleProps,
	type TimelineDescriptionProps,
};
