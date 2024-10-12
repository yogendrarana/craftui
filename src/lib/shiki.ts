import { bundledLanguages, createHighlighter } from "shiki/bundle/web";

export const codeToHtml = async ({ code, lang }: { code: string; lang: string }) => {
    const highlighter = await createHighlighter({
        themes: ["nord"],
        langs: [...Object.keys(bundledLanguages)]
    });

    return highlighter.codeToHtml(code, {
        lang: lang,
        theme: "nord"
    });
};
