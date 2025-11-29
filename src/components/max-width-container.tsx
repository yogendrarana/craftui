import type React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
	as?: React.ElementType;
}

export const MaxWidthContainer: React.FC<ContainerProps> = ({
	children,
	as: Comp = "div",
	className = "",
}) => {
	return (
		<Comp className={cn("mx-auto w-full max-w-screen-2xl px-4", className)}>
			{children}
		</Comp>
	);
};

