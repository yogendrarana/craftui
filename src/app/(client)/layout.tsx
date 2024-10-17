import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { fontSans } from "@/lib/fonts";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/provider/theme-provider";

// metadata
export const metadata: Metadata = {
    title: "Craft UI",
    description: "Craft UI: A React.js UI Kit"
};

// styles
import "@/styles/mdx.css";
import "@/styles/globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen w-full flex flex-col justify-center overflow-x-hidden scroll-smooth bg-background font-sans ",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TooltipProvider>
                        <main className="flex-1">{children}</main>
                    </TooltipProvider>
                </ThemeProvider>
            </body>

            <Toaster position="top-center" richColors />
        </html>
    );
}
