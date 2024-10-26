import { defineCollection, defineConfig } from "@content-collections/core";

const components = defineCollection({
    name: "Components",
    directory: "src/content/components",
    include: "**/*.mdx",
    schema: (z) => ({
        title: z.string(),
        description: z.string(),
        published: z.boolean().default(false),
        order: z.number().optional(),
        date: z.date().optional()
    }),
    transform: (doc) => {
        return {
            ...doc,
            slug: doc.title.toLowerCase().replace(/\s/g, "-")
        };
    }
});

export default defineConfig({
    collections: [components]
});
