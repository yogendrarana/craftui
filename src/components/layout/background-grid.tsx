import React from "react";

const BackgroundGrid = () => {
    return (
        <div className="absolute inset-0 grid grid-cols-10 gap-4 opacity-15">
            {[...Array(24)].map((_, i) => (
                <div key={i} className="border-l border-primary border-dashed"></div>
            ))}
        </div>
    );
};

export default BackgroundGrid;
