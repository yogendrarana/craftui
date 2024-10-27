import React from "react";

interface PageProps {
    params: { blocksName: string };
}

const Page = ({ params }: PageProps) => {
    const { blocksName } = params;
    return (
        <div>
            Page<div>{blocksName}</div>
        </div>
    );
};

export default Page;
