import { Shell } from "@/components/shell";
import { SiteHeader } from "@/components/layout/site-header";

interface DocsLayoutProps {
    children: React.ReactNode;
}

export default function ElementsLayout({ children }: DocsLayoutProps) {
    return (
        <Shell>
            <SiteHeader />
            <div>{children}</div>
        </Shell>
    );
}
