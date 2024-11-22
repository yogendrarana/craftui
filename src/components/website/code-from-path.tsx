import * as React from "react";
import { cn } from "@/lib/utils";
import CodeRenderer from "./code-renderer";
import { extractCodeFromFilePath } from "@/lib/extract-code";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    filePath: string;
    className?: string;
}

export default function CodeFromPath({ className, filePath }: Props) {
    const fileContent = extractCodeFromFilePath(filePath) || "";

    const renderContent = () => {
        if (fileContent === null) {
            return (
                <p className="text-sm text-muted-foreground">
                    Code for component in given filePath{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        {filePath}
                    </code>{" "}
                    not found.
                </p>
            );
        }

        return <CodeRenderer code={fileContent} />;
    };

    return (
        <div className={cn("h-[400px]", className)}>
            {renderContent()}
        </div>
    );
}
