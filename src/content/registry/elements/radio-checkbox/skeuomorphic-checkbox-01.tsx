import React from "react";

export default function SkeuomorphicCheckbox() {
    return (
        <label className="flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="
                    appearance-none w-6 h-6 bg-white border-2 border-gray-300 
                    rounded-sm shadow-md checked:bg-blue-400 checked:border-blue-500 
                    relative group cursor-pointer
                "
            />
            <span className="ml-2">Skeuomorphic</span>
        </label>
    );
}
