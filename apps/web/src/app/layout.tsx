import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { Provider } from "@/components/provider";

// metadata
export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	metadataBase: new URL(siteConfig.url),
	creator: "Yogendra Rana",
	authors: [
		{ name: siteConfig.author.name, url: siteConfig.author.links.twitter },
	],
	keywords: ["React", "Next.js", "Tailwind CSS", "Motion", "Shad CN"],
	openGraph: {
		title: siteConfig.title,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: "Craft UI",
		images: [
			{
				url: `${siteConfig.url}/og-image.png`,
				width: 1200,
				height: 630,
				alt: "Craft UI Open Graph Image",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
		images: [`${siteConfig.url}/og-image.png`],
		creator: "@yooogendra_rana",
	},
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
