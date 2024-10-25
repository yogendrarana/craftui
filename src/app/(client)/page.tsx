import React from "react";
import HeroSection from "@/components/layout/hero-section";
import ElementsOverviewSection from "@/components/layout/elements-overview-section";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ElementsOverviewSection />
        </div>
    );
}
