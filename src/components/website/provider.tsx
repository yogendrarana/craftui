"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Provider({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// we can also return a loader here
		return null;
	}

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
}
