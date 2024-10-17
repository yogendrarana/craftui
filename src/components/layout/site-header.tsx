import { cn } from "@/lib/utils";
import { DesktopNav } from "./desktop-nav";
import { siteConfig } from "@/config/site";
import { ExternalLink } from "../external-link";
import GithubStarBadge from "./github-badge";

export function SiteHeader() {
    return (
        <header
            className={cn(
                "sticky top-6 z-40",
                "w-full bg-background/40 backdrop-blur-lg"
            )}
        >
            <p className="mb-6 text-center text-gray-600">
                If you like Craft UI,{" "}
                <strong>
                    <ExternalLink href="https://github.com/yogendrarana/craftui">
                        give it a star on GitHub!
                    </ExternalLink>
                </strong>
            </p>
            <div className="flex justify-between items-center border-y border-dashed border-black">
                <div className="flex h-16 items-center">
                    <DesktopNav items={siteConfig.mainNav} />
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <GithubStarBadge />
                </div>
            </div>
        </header>
    );
}
