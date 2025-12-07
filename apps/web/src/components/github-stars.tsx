"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Github } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface PropTypes {
	className?: string;
}

export const GithubStars = ({ className }: PropTypes) => {
	const [stars, setStars] = useState(0);

	useEffect(() => {
		const fetchStars = async () => {
			if (stars > 100) return;
			try {
				const response = await fetch(
					"https://api.github.com/repos/yogendrarana/craftui",
					{
						headers: process.env.NEXT_PUBLIC_GITHUB_OAUTH_TOKEN
							? {
									Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_OAUTH_TOKEN}`,
									"Content-Type": "application/json",
								}
							: {},
					},
				);

				if (response.ok) {
					const data = await response.json();
					const starsCount =
						data.stargazers_count >= 1000
							? `${(data.stargazers_count / 1000).toFixed(2)}k`
							: data.stargazers_count;
					setStars(starsCount);
				}
			} catch (error) {
				console.error("Error fetching GitHub stars:", error);
			}
		};

		fetchStars();
	}, [stars]);

	return (
		<Link
			href="https://github.com/yogendrarana/craftui"
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				buttonVariants({ variant: "outline", size: "sm" }),
				"hidden sm:flex rounded-none",
				className,
			)}
		>
			<span className="h-4 w-4">{stars}</span>
			<span className="border-l h-full" />
			<Github className="h-4 w-4" />
		</Link>
	);
};
