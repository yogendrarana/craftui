import { cn } from "@/lib/utils";
import { Shell } from "../shell";
import { siteConfig } from "@/config/site";
import { ExternalLink } from "../external-link";

export default function SiteFooter() {
    return (
        <footer className="mt-8 py-8 border-t border-dashed">
            <Shell>
                <div className={cn("flex justify-between items-end gap-4")}>
                    <div className="space-y-2">
                        <span className="text-xl font-semibold">{siteConfig.name}</span>
                        <p className="text-sm text-gray-500">
                            Crafted by{" "}
                            <ExternalLink
                                href={siteConfig.author.links.website}
                                className="underline text-sm text-muted-foreground"
                            >
                                Yogendra Rana
                            </ExternalLink>
                        </p>
                    </div>

                    <p
                        className={cn(
                            "text-start text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50  to-neutral-300",
                            "md:text-3xl lg:text-5xl",
                            "dark:from-neutral-950 dark:to-neutral-800"
                        )}
                    >
                        Craft UI
                    </p>
                </div>
            </Shell>
        </footer>
    );
}
