import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
	as?: React.ElementType;
}

const MaxWidthContainer: React.FC<ContainerProps> = ({
	children,
	as: Comp = "div",
	className = "",
}) => {
	return (
		<Comp className={cn("max-w-7xl mx-auto w-full px-4", className)}>
			{children}
		</Comp>
	);
};

export default MaxWidthContainer;
