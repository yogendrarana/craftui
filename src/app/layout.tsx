import { cn } from "@/lib/utils";
import type { Metadata } from "next";

// styles
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/react";
import { Provider } from "@/components/website/provider";

// metadata
export const metadata: Metadata = {
    title: "Craft UI - Beautiful React Components",
    description: siteConfig.description,
    creator: "yogendra rana",
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.links.twitter }],
    keywords: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "UI Components"]
};

// font
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html>
            <body
                className={cn(
                    "w-full flex flex-col justify-center overflow-x-hidden scroll-smooth",
                    inter.className
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
