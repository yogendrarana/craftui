import CodePreview from "./code-preview";
import ComponentPreview from "./component-preview";

type ComponentCodePreview = {
    code: string;
    component: React.ReactElement;
    hasReTrigger?: boolean;
};

export default async function ComponentCodePreview({
    component,
    code,
    hasReTrigger
}: ComponentCodePreview) {
    return (
        <div className="h-full w-full flex flex-col md:flex-row gap-4 overflow-hidden">
            <div className="w-full h-1/2 md:h-full md:w-1/2 flex items-center justify-center">
                <ComponentPreview component={component} hasReTrigger={hasReTrigger} />
            </div>
            <div className="w-full  h-1/2 md:h-full md:w-1/2 p-4 border-t md:border-t-0 md:border-l overflow-hidden">
                <CodePreview code={code} />
            </div>
        </div>
    );
}
