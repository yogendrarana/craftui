import CodePreview from "./code-preview";
import CodeRenderer from "./code-renderer";
import ComponentRenderer from "./component-renderer";
import { extractCodeFromFilePath } from "@/lib/extract-code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ComponentCodePreview = {
    component: React.ReactElement;
    filePath: string;
    hasReTrigger?: boolean;
    classNameComponentContainer?: string;
};

export default function ComponentCodePreview({
    component,
    filePath,
    hasReTrigger,
    classNameComponentContainer
}: ComponentCodePreview) {
    const fileContent = extractCodeFromFilePath(`/${filePath}.tsx`);

    return (
        <div className="not-prose relative z-0 flex items-center justify-between pb-4">
            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                <TabsList className="">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview">
                    <ComponentRenderer
                        component={component}
                        hasReTrigger={hasReTrigger}
                        className={classNameComponentContainer}
                    />
                </TabsContent>
                <TabsContent value="code">
                    <CodePreview code={fileContent}>
                        <CodeRenderer code={fileContent} lang="tsx" />
                    </CodePreview>
                </TabsContent>
            </Tabs>
        </div>
    );
}
