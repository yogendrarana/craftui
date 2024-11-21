import React from "react";

export default function NeomorphicCheckbox() {
    return (
        <label className="cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-7 h-7 bg-gray-200 rounded-md shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_2px_2px_5px_rgba(0,0,0,0.1)] peer-checked:bg-blue-500">
                <svg
                    className="w-7 h-7 text-white fill-current hidden peer-checked:block"
                    viewBox="0 0 20 20"
                >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
            </div>
        </label>
    );
}
