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
        author: z
            .object({
                name: z.string().optional(),
                twitter: z.string().optional()
            })
            .optional()
    }),
    transform: async (document, context) => {
        const body = await compileMDX(context, document, {
            remarkPlugins: [codeImport, remarkGfm],
            rehypePlugins: [rehypeSlug]
        });

        return {
            ...document,
            slug: `/${document._meta.path}`,
            slugAsParams: document._meta.path.split("/").slice(1).join("/"),
            body: {
                raw: document.content,
                code: body
            }
        };
    }
});

export default defineConfig({
    collections: [docs]
});
