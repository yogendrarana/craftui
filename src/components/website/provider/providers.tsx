import React from "react";
import { ThemeProvider } from "./theme-provider";
import { ViewTransitions } from "next-view-transitions";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <ViewTransitions>{children}</ViewTransitions>
        </ThemeProvider>
    );
};

export default Providers;
