import React from "react";
import HeroSection from "@/components/layout/hero-section";
import ComponentsOverviewSection from "@/components/layout/components-overview-section";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ComponentsOverviewSection />
        </div>
    );
}
