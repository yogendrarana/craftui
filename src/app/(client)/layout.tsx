import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/provider/theme-provider";

// styles
import "@/styles/mdx.css";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

// metadata
export const metadata: Metadata = {
    title: "Craft UI - Beautiful React Components",
    description:
        "A collection of beautiful, interactive UI components built with Next.js, Tailwind CSS, and Framer Motion."
};

// font
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen w-full flex flex-col justify-center overflow-x-hidden scroll-smooth",
                    inter.className
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TooltipProvider>
                        <SiteHeader />
                        <main className="flex-1">{children}</main>
                        <SiteFooter />
                    </TooltipProvider>
                </ThemeProvider>
            </body>

            <Toaster position="top-center" richColors />
        </html>
    );
}
