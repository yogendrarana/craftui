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
        <main className="w-full">
            <div className="mb-6">
                <h1 className={cn("mb-1 text-4xl font-bold tracking-tight")}>{doc.title}</h1>
                {doc.description && (
                    <p className="text-balance text-lg text-muted-foreground">{doc.description}</p>
                )}
            </div>

            <Mdx code={doc.body.code} />
        </main>
    );
}
