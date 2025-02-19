import React from "react";
import AuroraBackground from "../components/aurora-background";

// try these color schemes
const colorSchemes = [
    ["#22c55e", "#3b82f6", "#9333ea"],
    ["#ef4444", "#f97316", "#eab308"],
    ["#06b6d4", "#3b82f6", "#6366f1"],
    ["#ec4899", "#d946ef", "#a855f7"]
];

export default function AuroraBackgroundDemo() {
    return (
        <div className="min-h-[400px] w-full relative">
            <AuroraBackground colors={colorSchemes[1]} />
        </div>
    );
}
