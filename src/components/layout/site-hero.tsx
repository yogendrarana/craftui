import { cn } from "@/lib/utils";
import GithubStarBadge from "./github-badge";

export default async function SiteHero() {
    return (
        <section id="hero" className={cn("my-10 flex flex-col gap-4 items-center", "md: my-32")}>
            <div className={cn("flex flex-col items-center gap-2", "md:gap-5")}>
                <GithubStarBadge />
                <p className="text-xl text-gray-500">
                    Open-source collection of UI elements and components
                </p>
                <h1
                    className={cn(
                        "text-black dark:text-white text-center",
                        "text-5xl md:text-6xl text-balance text-left font-semibold tracking-tighter"
                    )}
                >
                    Craft your project with Craft UI
                </h1>
            </div>
        </section>
    );
}
