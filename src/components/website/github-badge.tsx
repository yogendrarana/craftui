"use client";

import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useStarStore } from "@/store/use-star-store";
import BrutalistButton from "@/content/registry/elements/button/brutalist-button";

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
                    const starsCount =
                        data.stargazers_count >= 1000
                            ? `${(data.stargazers_count / 1000).toFixed(2)}k`
                            : data.stargazers_count;
                    setStars(starsCount);
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
            className={cn("flex items-center", className)}
        >
            <BrutalistButton>
                GitHub
                <div className="mx-2 h-6 bg-zinc-500 border-l" />
                <span className="flex items-center tabular-nums">
                    {/* TODO: add animated counter */}
                    {stars}
                    <Star fill="#dba809" className="ml-2 inline-block h-4 w-4 text-yellow-500" />
                </span>
            </BrutalistButton>
        </motion.a>
    );
};

export default GithubStarBadge;
