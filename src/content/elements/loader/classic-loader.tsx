"use client";

import React from "react";

export default function ClassicLoader({
    size = "md",
    color = "primary"
}: {
    size?: "sm" | "md" | "lg";
    color?: "primary" | "secondary" | "white";
}) {
    const sizeClasses = {
        sm: "w-5 h-5",
        md: "w-8 h-8",
        lg: "w-12 h-12"
    };

    const colorClasses = {
        primary: "text-primary",
        secondary: "text-secondary",
        white: "text-white"
    };

    return (
        <div className="flex items-center justify-center">
            <div
                className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}
                style={{
                    borderRadius: "50%",
                    border: "2px solid currentColor",
                    borderTopColor: "transparent"
                }}
                role="status"
                aria-label="loading"
            >
                <span className="sr-only">Loading...</span>
            </div>
            <style jsx>{`
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
            `}</style>
        </div>
    );
}
