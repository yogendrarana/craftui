import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
	href: string;
	children: ReactNode;
	className?: string;
}

const ExternalLink = (props: Props) => {
	return (
		<Link
			href={props.href}
			rel="noreferrer"
			target="_blank"
			className={cn(props.className)}
		>
			{props.children}
		</Link>
	);
};

export { ExternalLink };
