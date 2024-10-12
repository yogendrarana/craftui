import * as React from "react";
import { Shell } from "@/components/shell";
import SiteHero from "@/components/layout/site-hero";
import SiteFooter from "@/components/layout/site-footer";
import ElementsDemo from "@/components/layout/elements-demo";
import { SiteHeader } from "@/components/layout/site-header";

export default async function HomePage() {
    return (
        <Shell>
            <SiteHeader />
            <SiteHero />
            <ElementsDemo />
            <SiteFooter />
        </Shell>
    );
}
