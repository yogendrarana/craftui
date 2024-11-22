import React from "react";
import HeroSection from "@/components/website/home/hero-section";
import ComponentsShowcase from "@/components/website/home/component-showcase";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ComponentsShowcase />
        </div>
    );
}
