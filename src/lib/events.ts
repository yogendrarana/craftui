import { z } from "zod";
import posthog from "posthog-js";

const eventSchema = z.object({
    name: z.enum(["copy_npm_command", "copy_usage_code", "copy_source_code"]),
    // declare type AllowedPropertyValues = string | number | boolean | null
    properties: z.record(z.union([z.string(), z.number(), z.boolean(), z.null()])).optional()
});

export type Event = z.infer<typeof eventSchema>;

export function trackEvent(input: Event): void {
    const event = eventSchema.parse(input);
    if (event) {
        posthog.capture(event.name, event.properties);
    }
}
