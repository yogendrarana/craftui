import { cn } from "@/lib/utils";
import { Shell } from "../shell";
import { siteConfig } from "@/config/site";
import { ExternalLink } from "../external-link";

export default function SiteFooter() {
    return (
        <footer>
            <Shell className="py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col gap-3">
                        <span className="text-xl font-semibold">{siteConfig.name}</span>
                        <p className="text-sm text-gray-500">
                            Crafted by{" "}
                            <ExternalLink
                                href="https://yogendrarana.com.np"
                                className="underline text-sm text-muted-foreground"
                            >
                                Yogendra Rana
                            </ExternalLink>
                        </p>
                    </div>

                    <p
                        className={cn(
                            "text-start text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50  to-neutral-300",
                            "md:text-5xl lg:text-[5rem]",
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
