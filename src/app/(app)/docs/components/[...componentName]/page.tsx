import React from "react";

interface PageProps {
    params: { componentName: string };
}

const Page = ({ params }: PageProps) => {
    const { componentName } = params;
    return (
        <div>
            Page<div>{componentName}</div>
        </div>
    );
};

export default Page;
