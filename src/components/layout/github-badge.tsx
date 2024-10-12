"use client";

import { useEffect } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useStarStore } from "@/store/use-star-store";
import { cn } from "@/lib/utils";

interface PropTypes {
    className?: string;
}

const GithubStarBadge = ({ className }: PropTypes) => {
    const { stars, setStars } = useStarStore();

    useEffect(() => {
        const fetchStars = async () => {
            if (stars > 100) return;
            try {
                const response = await fetch("https://api.github.com/repos/yogendrarana/craftui", {
                    headers: process.env.NEXT_PUBLIC_GITHUB_OAUTH_TOKEN
                        ? {
                              Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_OAUTH_TOKEN}`,
                              "Content-Type": "application/json"
                          }
                        : {}
                });

                if (response.ok) {
                    const data = await response.json();
                    setStars(data.stargazers_count || 100);
                }
            } catch (error) {
                console.error("Error fetching GitHub stars:", error);
            }
        };

        fetchStars();
    }, [stars, setStars]);

    return (
        <motion.a
            href="https://github.com/yogendrarana/craftui"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <span
                className={cn(
                    "h-9 px-4 flex gap-3 items-center justify-center bg-black text-[12px] font-medium uppercase text-white backdrop-blur",
                    className
                )}
            >
                Github
                <span className="h-4 w-[1px] bg-gray-200/50"></span>{" "}
                <span className="flex items-center tabular-nums">
                    {/* TODO: add animated counter */}
                    {stars}
                    <Star fill="#dba809" className="ml-2 inline-block h-4 w-4 text-yellow-500" />
                </span>
            </span>
        </motion.a>
    );
};

export default GithubStarBadge;
