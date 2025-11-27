"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface AsideProps {
	className?: string;
	asideLinks: { href: string; name: string }[];
}

const Aside = ({ className, asideLinks }: AsideProps) => {
	const pathname = usePathname();
	const isActive = (href: string) => pathname === href;

	return (
		<div className={cn("flex flex-col gap-4", className)}>
			{asideLinks.map((link, index) => (
				<Link
					href={link.href}
					key={index}
					className={cn(isActive(link.href) && "font-bold")}
				>
					{link.name}
				</Link>
			))}
		</div>
	);
};

export default Aside;
