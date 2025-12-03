import type React from "react";
import { notFound } from "next/navigation";
import { allDocs } from "content-collections";

import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Mdx } from "@/components/mdx-components";
import { TableOfContents } from "@/components/toc";
import { Scrollbar } from "@radix-ui/react-scroll-area";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DocsSidebar } from "@/components/docs-sidebar";
import { MaxWidthContainer } from "@/components/max-width-container";

interface PageProps {
	children: React.ReactNode;
	params: Promise<{ slug?: string[] }>;
}

async function getDocFromParams(paramsPromise: PageProps["params"]) {
	const params = await paramsPromise;
	const slug = params.slug?.join("/");
	const doc = allDocs.find((doc) => doc.slugAsParams === slug);
	return doc ?? null;
}

export default async function DocsLayout({ params }: PageProps) {
	const doc = await getDocFromParams(params);

	if (!doc || !doc.published) {
		notFound();
	}

	return (
		<div className="min-h-screen flex flex-col">
			<Header />

			<MaxWidthContainer className="border-b sm:border-l sm:border-r border-dashed px-0">
				<div
					className={cn(
						"flex-1 items-start overflow-hidden md:overflow-visible",
						"md:grid md:grid-cols-[275px_minmax(0,1fr)_275px]",
					)}
				>
					<div className="h-[calc(100vh-5rem)] p-2 hidden md:block md:sticky md:top-20">
						<ScrollArea
							hideScrollbar
							scrollHideDelay={1}
							type="hover"
							className="h-full"
						>
							<DocsSidebar />
							<Scrollbar />
						</ScrollArea>
					</div>

					{/* main content */}
					<div className="p-4 h-full border-x border-dashed">
						<div className="mb-6">
							<h1 className={cn("mb-1 text-4xl font-bold")}>
								{doc.title}
							</h1>

							{doc?.description && (
								<p className="text-balance text-lg text-muted-foreground">
									{doc.description}
								</p>
							)}
						</div>

						<Mdx code={doc.body.code} />
					</div>

					<div className="hidden md:block md:sticky md:top-20">
						<TableOfContents toc={doc.toc} />
					</div>
				</div>
			</MaxWidthContainer>
		</div>
	);
}
