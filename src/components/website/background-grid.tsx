import React from "react";

const BackgroundGrid = () => {
    return (
        <div className="absolute inset-0 grid grid-cols-8 gap-4">
            {[...Array(20)].map((_, i) => (
                <div key={i} className="border-l border-dashed border-border"></div>
            ))}
        </div>
    );
};

export default BackgroundGrid;
