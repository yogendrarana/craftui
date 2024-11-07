import React from "react";
import HeroSection from "@/components/home/hero-section";
import ComponentsShowcase from "@/components/home/component-showcase";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ComponentsShowcase />
        </div>
    );
}
