import CodePreview from "./code-preview";
import ComponentPreview from "./component-preview";
import { extractCodeFromFilePath } from "@/lib/extract-code";

type ComponentCodePreview = {
    component: React.ReactElement;
    filePath: string;
    hasReTrigger?: boolean;
    classNameComponentContainer?: string;
};

export default async function ComponentCodePreview({
    component,
    filePath,
    hasReTrigger,
    classNameComponentContainer
}: ComponentCodePreview) {
    const code = extractCodeFromFilePath(`${filePath}.tsx`);

    return (
        <div className="h-full w-full flex flex-col md:flex-row gap-4 overflow-hidden">
            <div className="w-full h-1/2 md:h-full md:w-1/2 flex items-center justify-center">
                <ComponentPreview
                    component={component}
                    hasReTrigger={hasReTrigger}
                    className={classNameComponentContainer}
                />
            </div>
            <div className="w-full  h-1/2 md:h-full md:w-1/2 p-4 border-t md:border-t-0 md:border-l overflow-hidden">
                <CodePreview code={code} />
            </div>
        </div>
    );
}
