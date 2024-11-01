import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";

// styles
import "@/styles/mdx.css";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/config/site";
import Providers from "@/components/provider/providers";

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
        <html lang="en">
            <body
                className={cn(
                    "w-full flex flex-col justify-center overflow-x-hidden scroll-smooth",
                    inter.className
                )}
            >
                <Providers>
                    <SiteHeader />
                    <Shell>
                        <main className="flex-1">{children}</main>
                    </Shell>
                    <SiteFooter />
                </Providers>
            </body>

            <Toaster position="top-center" richColors />
        </html>
    );
}
