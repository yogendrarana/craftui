"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/website/icons";

const data = [
    {
        name: "React",
        icon: Icons.react
    },
    {
        name: "Next",
        icon: Icons.next
    },
    {
        name: "Remix",
        icon: Icons.remix
    },
    {
        name: "Svelte",
        icon: Icons.svelte
    },
    {
        name: "Vue",
        icon: Icons.vue
    },
    {
        name: "Nuxt",
        icon: Icons.nuxt
    },
    {
        name: "Astro",
        icon: Icons.astro
    },
    {
        name: "Angular",
        icon: Icons.angular
    }
];

export default function Marquee() {
    const [isPaused, setIsPaused] = React.useState(false);

    return (
        <div>
            <div
                className={cn(
                    "group relative flex overflow-hidden",
                    "before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[50px] before:bg-gradient-to-r before:from-white before:to-transparent before:z-10",
                    "after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[50px] after:bg-gradient-to-l after:from-white after:to-transparent after:z-10"
                )}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    className={cn(
                        "flex animate-[marquee1_20s_linear_infinite]",
                        isPaused && "paused"
                    )}
                >
                    {data.map((icn, key) => (
                        <div key={key} className="flex items-center">
                            <icn.icon className="h-14 w-14 px-4 dark:invert" />
                        </div>
                    ))}
                </div>

                <div
                    className={cn(
                        "absolute top-0 flex animate-[marquee2_20s_linear_infinite]",
                        isPaused && "paused"
                    )}
                >
                    {data.map((icn, key) => (
                        <div key={key} className="flex items-center">
                            <icn.icon className="h-14 w-14 px-4 dark:invert" />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee1 {
                    from {
                        transform: translateX(0%);
                    }
                    to {
                        transform: translateX(-100%);
                    }
                }

                @keyframes marquee2 {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(0%);
                    }
                }

                @keyframes paused {
                    from {
                        animation-play-state: paused;
                    }
                    to {
                        animation-play-state: paused;
                    }
                }
            `}</style>
        </div>
    );
}
