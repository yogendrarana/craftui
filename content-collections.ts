import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import { compileMDX } from "@content-collections/mdx";
import { defineCollection, defineConfig } from "@content-collections/core";

const docs = defineCollection({
	name: "Docs",
	directory: "src/content",
	include: "**/*.mdx",
	schema: (z) => ({
		title: z.string(),
		description: z.string(),
		published: z.boolean().default(false),
		date: z.string().optional(),
		category: z.string().optional(),
		subCategory: z.string().optional(),
		label: z.string().optional(),
		paid: z.boolean().optional(),
		author: z
			.object({
				name: z.string().optional(),
				twitter: z.string().optional(),
			})
			.optional(),
	}),
	transform: async (document, context) => {
		const body = await compileMDX(context, document, {
			remarkPlugins: [codeImport, remarkGfm],
			rehypePlugins: [rehypeSlug],
		});

		const toc = await getTableOfContents(document.content);

		return {
			...document,
			slug: `/${document._meta.path}`,
			slugAsParams: document._meta.path.split("/").join("/"),
			toc: toc as any,
			body: {
				raw: document.content,
				code: body,
			},
		};
	},
});

interface TocSection {
	title: string;
	url: string;
	items: { title: string; url: string }[];
}

async function getTableOfContents(content: string) {
	const toc: TocSection[] = [];

	// Simple regex-based TOC extraction for now.
	// For more robust parsing, we might want to use a remark plugin,
	// but this avoids adding more dependencies if the markdown is simple.
	// However, to get slugs matching rehype-slug, we need a slugifier.

	const lines = content.split("\n");
	let currentSection: TocSection | null = null;

	for (const line of lines) {
		if (line.startsWith("## ")) {
			const title = line.replace("## ", "").trim();
			const slug = title
				.toLowerCase()
				.replace(/[^\w\s-]/g, "")
				.replace(/\s+/g, "-");
			currentSection = { title, url: `#${slug}`, items: [] };
			toc.push(currentSection);
		} else if (line.startsWith("### ") && currentSection) {
			const title = line.replace("### ", "").trim();
			const slug = title
				.toLowerCase()
				.replace(/[^\w\s-]/g, "")
				.replace(/\s+/g, "-");
			currentSection.items.push({ title, url: `#${slug}` });
		}
	}
	return toc;
}

export default defineConfig({
	collections: [docs],
});
