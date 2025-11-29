import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { Provider } from "@/components/provider";

// metadata
export const metadata: Metadata = {
	title: "Craft UI - Beautiful React Components",
	description: siteConfig.description,
	creator: "yogendra rana",
	authors: [
		{ name: siteConfig.author.name, url: siteConfig.author.links.twitter },
	],
	keywords: ["React", "Next.js", "Tailwind CSS", "Motion", "UI Components"],
};

// font
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"w-full flex flex-col justify-center overflow-x-hidden scroll-smooth",
					inter.className,
				)}
			>
				<Provider>
					<main className="root">{children}</main>
				</Provider>
			</body>

			<Analytics />
		</html>
	);
}
