"use client";

import React, { useState } from "react";

export default function CustomCheckbox() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="flex items-center">
            <label className="w-7 h-7 cursor-pointer relative">
                <input
                    type="checkbox"
                    className="hidden"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <span
                    className={`block w-full h-full border-2 border-gray-700 rounded-md transition-all duration-500 ${
                        isChecked
                            ? "rotate-45 w-3.5 translate-x-2 -translate-y-1 border-t-transparent border-l-transparent rounded-none"
                            : ""
                    }`}
                ></span>
            </label>
        </div>
    );
}
