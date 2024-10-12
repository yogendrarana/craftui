import { z } from "zod";

// Define a schema for elements (buttons, inputs, radio buttons, etc.)
export const elementSchema = z.object({
    name: z.string(),
    description: z.string(),
    usage: z.string(),
    props: z
        .array(
            z.object({
                name: z.string(),
                type: z.string(),
                description: z.string(),
                required: z.boolean().optional(),
                default: z.any().optional()
            })
        )
        .optional(),
    version: z.string()
});

// Define a schema for blocks (banners, footers, forms, etc.)
const blockSchema = z.object({
    name: z.string(),
    description: z.string(),
    usage: z.string(),
    components: z.array(z.string()).optional(),
    version: z.string()
});
