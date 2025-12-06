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

		// optionals
		date: z.string().optional(),
		provider: z.string().optional(),
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
	items: {
		title: string;
		url: string;
		items?: { title: string; url: string }[];
	}[];
}

async function getTableOfContents(content: string) {
	const toc: TocSection[] = [];

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
		} else if (line.startsWith("#### ")) {
			const title = line.replace("#### ", "").trim();
			const slug = title
				.toLowerCase()
				.replace(/[^\w\s-]/g, "")
				.replace(/\s+/g, "-");

			// If we have a currentSection, add as item to section
			if (currentSection) {
				currentSection.items.push({ title, url: `#${slug}` });
			}
			// If no section exists yet, create a top-level item
			else {
				toc.push({ title, url: `#${slug}`, items: [] });
			}
		}
	}
	return toc;
}

export default defineConfig({
	collections: [docs],
});
