"use client";

import React from "react";
import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { usePathname, useSearchParams } from "next/navigation";

if (typeof window !== "undefined") {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY!, {
        api_host: "https://app.posthog.com",
        session_recording: {
            maskAllInputs: false
        },
        // Enable debug mode in development
        loaded: (posthog) => {
            if (process.env.NODE_ENV === "development") posthog.debug();
        }
    });
}

export function PostHogPageview(): JSX.Element {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            let url = window.origin + pathname;
            if (searchParams && searchParams.toString()) {
                url = url + `?${searchParams.toString()}`;
            }
            posthog.capture("$pageview", {
                $current_url: url
            });
        }
    }, [pathname, searchParams]);

    return <React.Fragment></React.Fragment>;
}

export function PosthogProvider({ children }: { children: React.ReactNode }) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
