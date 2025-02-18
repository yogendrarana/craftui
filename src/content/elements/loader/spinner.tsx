import React from "react";

export default function SpinnerLoader() {
    return (
        <div
            className="animate-spin rounded-full h-10 w-10 border-b-2 border-black dark:border-white"
            aria-label="Loading"
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
}
