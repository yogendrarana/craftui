import { bundledLanguages, createHighlighter } from "shiki/bundle/web";

export const codeToHtml = async ({ code, lang }: { code: string; lang: string }) => {
    const highlighter = await createHighlighter({
        themes: ["one-light"],
        langs: [...Object.keys(bundledLanguages)]
    });

    return highlighter.codeToHtml(code, {
        lang,
        theme: "one-light"
    });
};
