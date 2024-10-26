import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/provider/theme-provider";

// styles
import "@/styles/mdx.css";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
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
        <html lang="en" suppressHydrationWarning>
            <ViewTransitions>
                <body
                    className={cn(
                        "min-h-screen w-full flex flex-col justify-center overflow-x-hidden scroll-smooth",
                        inter.className
                    )}
                >
                    <Providers>
                        <SiteHeader />
                        <main className="flex-1">{children}</main>
                        <SiteFooter />
                    </Providers>
                </body>
            </ViewTransitions>

            <Toaster position="top-center" richColors />
        </html>
    );
}
