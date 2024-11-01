import React from "react";
import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "../ui/tooltip";
import { ViewTransitions } from "next-view-transitions";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <TooltipProvider>
                <ViewTransitions>{children}</ViewTransitions>
            </TooltipProvider>
        </ThemeProvider>
    );
};

export default Providers;
