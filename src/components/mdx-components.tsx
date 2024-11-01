"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Callout from "@/components/callout";
import { CopyButton } from "./copy-button";
import CodeRenderer from "./code-renderer";
import ComponentSource from "@/components/mdx/component-source";
import ComponentCodePreview from "./mdx/component-code-preview";
import { useMDXComponent } from "@content-collections/mdx/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomLink = (props: any) => {
    const href = props.href;

    if (href.startsWith("/")) {
        return (
            <Link {...props} href={href}>
                {props.children}
            </Link>
        );
    }

    if (href.startsWith("#")) {
        return <a {...props} />;
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const components = {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    ComponentSource,
    CodeRenderer,
    ComponentCodePreview,
    Callout,
    Image,
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
            className={cn("font-heading mt-2 scroll-m-20 text-4xl font-bold", className)}
            {...props}
        />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={cn(
                "font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
                className
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className={cn(
                "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className={cn(
                "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h5
            className={cn("mt-8 scroll-m-20 text-lg font-semibold tracking-tight", className)}
            {...props}
        />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h6
            className={cn("mt-8 scroll-m-20 text-base font-semibold tracking-tight", className)}
            {...props}
        />
    ),
    a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
        <CustomLink
            className={cn("font-medium underline underline-offset-4", className)}
            {...props}
        />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className={cn("mb-2 leading-8 [&:not(:first-child)]:mt-5", className)} {...props} />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={cn("ml-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className={cn("ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <li className={cn("mt-2", className)} {...props} />
    ),
    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props} />
    ),
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 w-full overflow-y-auto">
            <table className={cn("w-full", className)} {...props} />
        </div>
    ),
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr className={cn("m-0 border-t p-0", className)} {...props} />
    ),
    th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className={cn(
                "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        />
    ),
    td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className={cn(
                "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        />
    ),
    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
        <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
    ),
    TabsList: ({ className, ...props }: React.ComponentProps<typeof TabsList>) => (
        <TabsList
            className={cn(
                "w-full justify-start rounded-none border-b bg-transparent p-0",
                className
            )}
            {...props}
        />
    ),
    TabsTrigger: ({ className, ...props }: React.ComponentProps<typeof TabsTrigger>) => (
        <TabsTrigger
            className={cn(
                "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
                className
            )}
            {...props}
        />
    ),
    TabsContent: ({ className, ...props }: React.ComponentProps<typeof TabsContent>) => (
        <TabsContent
            className={cn(
                "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
                className
            )}
            {...props}
        />
    ),
    Spacer: ({ height = "1rem" }) => <div style={{ height }} aria-hidden="true" />,
    pre: (props: React.HTMLProps<HTMLPreElement>) => {
        const { children } = props; // Extract children from props
        const codeText = (children as React.ReactElement).props.children.trim(); // The code text to copy

        return (
            <div className="relative">
                <pre
                    className="px-2 py-3 overflow-x-auto rounded-lg bg-black text-white"
                    {...props}
                >
                    {children}
                </pre>
                <CopyButton value={codeText} className="absolute top-2 right-2" />
            </div>
        );
    },
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code
            className={cn(
                "relative rounded text-white px-2 py-[0.2rem] font-mono text-sm",
                className
            )}
            {...props}
        />
    ),
    LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
        <Link
            className={cn(
                "flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10",
                className
            )}
            {...props}
        />
    )
};

interface MDXProps {
    code: string;
    className?: string;
}

export function Mdx({ code, className }: MDXProps) {
    const Component = useMDXComponent(code);

    return (
        <article className={cn("mx-auto", className)}>
            <Component components={components} />
        </article>
    );
}
