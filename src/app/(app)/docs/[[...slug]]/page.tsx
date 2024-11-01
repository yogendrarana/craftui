import React from "react";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import { allDocs } from "content-collections";
import { Mdx } from "@/components/mdx-components";

interface DocPageProps {
    params: {
        slug: string[];
    };
}

async function getDocFromParams({ params }: DocPageProps) {
    const slug = params.slug?.join("/") || "";
    const doc = allDocs.find((doc) => doc.slugAsParams === slug);

    if (!doc) {
        return null;
    }

    return doc;
}

export default async function DocsPage({ params }: DocPageProps) {
    const doc = await getDocFromParams({ params });

    if (!doc || !doc.published) {
        notFound();
    }

    return (
        <main className={cn("relative lg:gap-10 xl:grid")}>
            <div className="mx-auto w-full min-w-0">
                <div className="space-y-2">
                    <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
                        {doc.title}
                    </h1>
                    {doc.description && (
                        <p className="text-balance text-lg text-muted-foreground">
                            {doc.description}
                        </p>
                    )}
                </div>
                <div className="mx-auto w-full min-w-0">
                    <Mdx code={doc.body.code} />
                </div>
            </div>
        </main>
    );
}
