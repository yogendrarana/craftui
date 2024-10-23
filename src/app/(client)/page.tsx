import React from "react";
import HeroSection from "@/components/layout/hero-section";
import FeaturesSection from "@/components/layout/features-section";
import ComponentDemoSection from "@/components/layout/component-demo-section";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            <HeroSection />
            <FeaturesSection />
            <ComponentDemoSection />
        </div>
    );
}
